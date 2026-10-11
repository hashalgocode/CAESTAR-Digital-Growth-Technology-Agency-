import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and conditions for CAELSTAR project inquiries and service engagement discussions.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="eyebrow">Terms</p>
      <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] sm:text-5xl">Terms & Conditions</h1>
      <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted)]">
        <p>These terms set out the general conditions for discussions, consultations and project requests involving CAELSTAR. The terms are intended to provide a transparent framework for any initial inquiry and future engagement.</p>
        <p>Any project proposal, statement of work, timeline or commercial arrangement must be confirmed in writing before significant work begins. Final scope, responsibilities, timeline and fees should always be agreed in writing.</p>
        <p>CAELSTAR may provide recommendations, strategy and implementation support based on the brief received. We do not guarantee financial results, rankings, conversion rates or business outcomes, and all recommendations should be treated as strategic guidance informed by current business context and available data.</p>
        <p>Client responsibilities may include timely access to information, platform access, data permissions, content approvals and stakeholder feedback. Delays or missing inputs may affect project deadlines and delivery milestones.</p>
        <p>All intellectual property ownership should be confirmed through the project agreement. Where source code, design files or platform assets are created for a client, handover terms, licensing and support arrangements should be documented before launch.</p>
      </div>
    </div>
  )
}
