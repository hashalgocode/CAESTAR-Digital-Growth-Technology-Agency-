import type { Metadata } from "next";

import { faqItems } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about CAELSTAR services, pricing, project scope, timelines and working with the agency.",
};

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="eyebrow">FAQ</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] sm:text-5xl">Frequently asked questions.</h1>
      </div>

      <div className="mt-12 space-y-4">
        {faqItems.map((item) => (
          <div key={item.question} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h2 className="text-xl font-semibold text-[var(--text)]">{item.question}</h2>
            <p className="mt-3 text-base leading-8 text-[var(--muted)]">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
