import { randomUUID } from "node:crypto"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { createClient } from "@supabase/supabase-js"

import { siteConfig } from "@/lib/site-config"
import { enquirySchema } from "@/lib/validation"

const rateLimit = new Map<string, number[]>()

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0].trim()
  return request.headers.get("x-real-ip") || "local"
}

function sanitize(value: FormDataEntryValue | null | undefined) {
  if (typeof value === "string") {
    return value.replace(/[\u0000-\u001F\u007F]/g, "").trim()
  }
  return ""
}

async function persistLead(payload: Record<string, string>) {
  const supabaseUrl = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) return { stored: false }

  const supabase = createClient(supabaseUrl, serviceKey)

  const { error } = await supabase.from("leads").insert({
    id: randomUUID(),
    created_at: new Date().toISOString(),
    full_name: payload.fullName,
    business_email: payload.businessEmail,
    company_name: payload.companyName || null,
    phone: payload.phone || null,
    website_url: payload.websiteUrl || null,
    service_required: payload.serviceRequired,
    project_description: payload.projectDescription,
    budget: payload.budget || null,
    preferred_contact_method: payload.preferredContactMethod || null,
    target_market: payload.targetMarket || null,
    desired_project_timeline: payload.desiredProjectTimeline || null,
    privacy_acknowledged: payload.privacyAcknowledged === "true",
  })

  if (error) throw new Error(error.message)

  return { stored: true }
}

async function sendEmails(payload: Record<string, string>, submissionId: string) {
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = Number(process.env.SMTP_PORT || 587)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const agencyEmail = process.env.AGENCY_EMAIL || siteConfig.emailNotificationRecipient

  if (!smtpHost || !smtpUser || !smtpPass) {
    return { sent: false, reason: "SMTP not configured" }
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  })

  const notificationHtml = `
    <h2>New CAELSTAR enquiry</h2>
    <p><strong>Submission ID:</strong> ${submissionId}</p>
    <p><strong>Name:</strong> ${payload.fullName}</p>
    <p><strong>Email:</strong> ${payload.businessEmail}</p>
    <p><strong>Service:</strong> ${payload.serviceRequired}</p>
    <p><strong>Company:</strong> ${payload.companyName || "Not provided"}</p>
    <p><strong>Project:</strong> ${payload.projectDescription}</p>
  `

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || smtpUser,
    to: agencyEmail,
    subject: `New CAELSTAR enquiry: ${payload.serviceRequired}`,
    html: notificationHtml,
  })

  if (payload.businessEmail) {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || smtpUser,
      to: payload.businessEmail,
      subject: "Your CAELSTAR enquiry has been received",
      html: `<p>Thanks for reaching out, ${payload.fullName}. We have received your enquiry and will contact you soon.</p>`,
    })
  }

  return { sent: true }
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request)
  const now = Date.now()
  const history = rateLimit.get(clientIp) ?? []
  const recent = history.filter((stamp) => now - stamp < 60_000)

  if (recent.length >= 5) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 })
  }

  recent.push(now)
  rateLimit.set(clientIp, recent)

  const formData = await request.formData()
  const honeypot = sanitize(formData.get("website"))
  if (honeypot) {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 })
  }

  const raw = Object.fromEntries(formData.entries())
  const payload = {
    fullName: sanitize(raw.fullName),
    businessEmail: sanitize(raw.businessEmail),
    companyName: sanitize(raw.companyName),
    phone: sanitize(raw.phone),
    websiteUrl: sanitize(raw.websiteUrl),
    serviceRequired: sanitize(raw.serviceRequired),
    projectDescription: sanitize(raw.projectDescription),
    budget: sanitize(raw.budget),
    preferredContactMethod: sanitize(raw.preferredContactMethod),
    targetMarket: sanitize(raw.targetMarket),
    desiredProjectTimeline: sanitize(raw.desiredProjectTimeline),
    privacyAcknowledged: String(raw.privacyAcknowledged) === "true",
  }

  const parsed = enquirySchema.safeParse({
    ...payload,
    privacyAcknowledged: payload.privacyAcknowledged,
  })

  if (!parsed.success) {
    const issues = parsed.error.flatten().fieldErrors
    return NextResponse.json(
      {
        error: Object.values(issues).flat().at(0) || "Please review the form and try again.",
      },
      { status: 400 }
    )
  }

  const submissionId = randomUUID()

  try {
    await persistLead({
      ...payload,
      privacyAcknowledged: String(payload.privacyAcknowledged),
      fullName: payload.fullName,
      businessEmail: payload.businessEmail,
      serviceRequired: payload.serviceRequired,
      projectDescription: payload.projectDescription,
    })
  } catch (error) {
    console.error("Lead persistence failure:", error)
    return NextResponse.json({ error: "Your enquiry could not be saved. Please contact the team directly." }, { status: 500 })
  }

  try {
    await sendEmails({
      ...payload,
      privacyAcknowledged: String(payload.privacyAcknowledged),
      fullName: payload.fullName,
      businessEmail: payload.businessEmail,
      serviceRequired: payload.serviceRequired,
      projectDescription: payload.projectDescription,
    }, submissionId)
  } catch (error) {
    console.error("Email sending failure:", error)
    return NextResponse.json({ error: "Your enquiry was received but the notification system failed. Please contact the team directly." }, { status: 500 })
  }

  return NextResponse.json({
    ok: true,
    message: "Your enquiry has been received. Our team will get back to you soon.",
    submissionId,
    fallbackContact: `Please email ${siteConfig.businessEmail} or call ${siteConfig.phone} if you need an alternative contact method.`,
  })
}
