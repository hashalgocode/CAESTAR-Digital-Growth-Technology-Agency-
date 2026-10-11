import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact CAELSTAR to discuss digital growth, marketing, website development, AI automation and custom business solutions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] sm:text-5xl">Start a conversation about your next project.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Get in touch</h2>
          <div className="mt-6 space-y-5 text-[var(--muted)]">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[var(--cyan)]" />
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-[var(--cyan)]" />
              <span>{siteConfig.businessEmail}</span>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 text-[var(--cyan)]" />
              <span>{siteConfig.phone}</span>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--secondary)] p-4 text-sm leading-7 text-[var(--muted)]">
            We usually reply to project enquiries within a working day. If the timeline is urgent or technical, include the relevant details and current business goals in the form.
          </div>
        </div>

        <EnquiryForm />
      </div>
    </div>
  )
}
