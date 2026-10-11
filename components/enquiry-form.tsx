"use client"

import { useState } from "react"
import { CheckCircle2, Loader2, Send } from "lucide-react"

const serviceOptions = [
  "Digital Marketing",
  "Paid Advertising",
  "Social Media Marketing",
  "Marketplace Management",
  "Website Development",
  "App Development",
  "AI & Automation",
  "Branding & Creative",
  "Multiple Services",
  "Other",
]

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1,00,000",
  "Above ₹1,00,000",
  "International/custom budget",
  "Not sure yet",
]

const initialState = {
  fullName: "",
  businessEmail: "",
  companyName: "",
  phone: "",
  websiteUrl: "",
  serviceRequired: "Digital Marketing",
  projectDescription: "",
  budget: "",
  preferredContactMethod: "",
  targetMarket: "",
  desiredProjectTimeline: "",
  privacyAcknowledged: false,
}

export function EnquiryForm({ defaultService = "Digital Marketing" }: { defaultService?: string }) {
  const [values, setValues] = useState({ ...initialState, serviceRequired: defaultService })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [feedback, setFeedback] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateField = (key: string, value: string | boolean) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: "" }))
  }

  const validate = () => {
    const nextErrors: Record<string, string> = {}

    if (!values.fullName.trim()) nextErrors.fullName = "Please add your full name."
    if (!values.businessEmail.trim()) nextErrors.businessEmail = "Please add your business email."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.businessEmail)) {
      nextErrors.businessEmail = "Please use a valid email format."
    }
    if (!values.serviceRequired) nextErrors.serviceRequired = "Please choose a service."
    if (!values.projectDescription.trim()) nextErrors.projectDescription = "Tell us a bit more about your project."
    else if (values.projectDescription.trim().length < 20) {
      nextErrors.projectDescription = "Please give at least 20 characters of detail."
    }
    if (values.websiteUrl && !/^https?:\/\//i.test(values.websiteUrl)) {
      nextErrors.websiteUrl = "Website URL should begin with http:// or https://."
    }
    if (!values.privacyAcknowledged) {
      nextErrors.privacyAcknowledged = "Please confirm that you accept the privacy policy."
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate()) return

    setStatus("loading")
    setFeedback("")

    const formData = new FormData()
    Object.entries(values).forEach(([key, value]) => {
      if (typeof value === "boolean") {
        formData.append(key, value ? "true" : "false")
      } else {
        formData.append(key, value)
      }
    })

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: formData,
      })

      const payload = await response.json()

      if (!response.ok) {
        const message = payload?.error || "Something went wrong while sending your enquiry."
        setStatus("error")
        setFeedback(message)
        return
      }

      setStatus("success")
      setFeedback(payload.message || "Thank you. Your enquiry has been received.")
      setValues({ ...initialState, serviceRequired: defaultService })
    } catch {
      setStatus("error")
      setFeedback("The enquiry could not be submitted right now. Please email the team or contact us another way.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8" noValidate>
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--cyan)]">Let&apos;s talk</p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">Start your project</h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="field-block">
          <span>Full name</span>
          <input value={values.fullName} onChange={(e) => updateField("fullName", e.target.value)} className="field-input" aria-invalid={Boolean(errors.fullName)} />
          {errors.fullName && <small>{errors.fullName}</small>}
        </label>

        <label className="field-block">
          <span>Business email</span>
          <input type="email" value={values.businessEmail} onChange={(e) => updateField("businessEmail", e.target.value)} className="field-input" aria-invalid={Boolean(errors.businessEmail)} />
          {errors.businessEmail && <small>{errors.businessEmail}</small>}
        </label>

        <label className="field-block">
          <span>Company name</span>
          <input value={values.companyName} onChange={(e) => updateField("companyName", e.target.value)} className="field-input" />
        </label>

        <label className="field-block">
          <span>Telephone / WhatsApp</span>
          <input value={values.phone} onChange={(e) => updateField("phone", e.target.value)} className="field-input" />
        </label>

        <label className="field-block">
          <span>Website URL</span>
          <input type="url" value={values.websiteUrl} onChange={(e) => updateField("websiteUrl", e.target.value)} className="field-input" aria-invalid={Boolean(errors.websiteUrl)} />
          {errors.websiteUrl && <small>{errors.websiteUrl}</small>}
        </label>

        <label className="field-block">
          <span>Service required</span>
          <select value={values.serviceRequired} onChange={(e) => updateField("serviceRequired", e.target.value)} className="field-input" aria-invalid={Boolean(errors.serviceRequired)}>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.serviceRequired && <small>{errors.serviceRequired}</small>}
        </label>

        <label className="field-block md:col-span-2">
          <span>Project description</span>
          <textarea value={values.projectDescription} onChange={(e) => updateField("projectDescription", e.target.value)} className="field-input min-h-28" aria-invalid={Boolean(errors.projectDescription)} />
          {errors.projectDescription && <small>{errors.projectDescription}</small>}
        </label>

        <label className="field-block">
          <span>Budget range</span>
          <select value={values.budget} onChange={(e) => updateField("budget", e.target.value)} className="field-input">
            <option value="">Select budget</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="field-block">
          <span>Preferred contact method</span>
          <select value={values.preferredContactMethod} onChange={(e) => updateField("preferredContactMethod", e.target.value)} className="field-input">
            <option value="">Select preference</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label className="field-block">
          <span>Target market</span>
          <input value={values.targetMarket} onChange={(e) => updateField("targetMarket", e.target.value)} className="field-input" />
        </label>

        <label className="field-block">
          <span>Desired project timeline</span>
          <input value={values.desiredProjectTimeline} onChange={(e) => updateField("desiredProjectTimeline", e.target.value)} className="field-input" />
        </label>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-[var(--muted)]">
        <input
          type="checkbox"
          checked={values.privacyAcknowledged}
          onChange={(e) => updateField("privacyAcknowledged", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-[var(--border)] bg-[var(--secondary)]"
        />
        <span>
          I confirm that I have read and understood the privacy policy and agree to be contacted regarding this enquiry.
        </span>
      </label>
      {errors.privacyAcknowledged && <small className="mt-2 block text-[var(--cyan)]">{errors.privacyAcknowledged}</small>}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70" disabled={status === "loading"}>
          {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send enquiry</>}
        </button>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Secure and confidential</span>
      </div>

      {feedback && (
        <div className={`mt-5 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${status === "success" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200" : "border-red-500/30 bg-red-500/10 text-red-200"}`}>
          {status === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4" /> : <span className="mt-1 text-base">!</span>}
          <span>{feedback}</span>
        </div>
      )}
    </form>
  )
}
