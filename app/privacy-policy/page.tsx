import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy overview for CAELSTAR and how enquiries, contact information and website data are handled.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="eyebrow">Privacy policy</p>
      <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] sm:text-5xl">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted)]">
        <p>CAELSTAR respects the privacy of visitors and enquiry submissions. We collect only the information needed to understand a project request, respond in a relevant way, and manage the business relationship.</p>
        <p>Information collected may include your name, email address, company name, phone number, website URL, project description and any optional information provided in the contact form. This data is used to review the enquiry, respond to your request and improve communication.</p>
        <p>We keep data secure and limit access to authorised personnel. We do not sell or publicly expose customer enquiries. If you are unsure whether a request should be sent via the website or another contact method, we recommend using the contact page and confirming the preferred channel.</p>
        <p>Where third-party services are used for email delivery, analytics or lead storage, these services are configured with appropriate security and access controls. If a service is not active, we may simply rely on direct contact channels instead.</p>
        <p>Privacy settings and consent practices should be reviewed before launch and updated as the business grows. If you have a specific privacy requirement, please contact the team before sending sensitive information.</p>
      </div>
    </div>
  )
}
