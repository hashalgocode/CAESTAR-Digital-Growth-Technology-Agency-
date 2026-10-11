import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about CAELSTAR and how the agency blends strategy, design, technology and growth support for businesses in India and beyond.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">About CAELSTAR</p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] sm:text-5xl">A modern agency built for business growth and digital execution.</h1>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            CAELSTAR helps businesses establish a stronger digital presence, improve marketing performance, build reliable digital products and automate key operational tasks.
          </p>
          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            Based in {siteConfig.location}, we work with founders, growing businesses and teams that need strategic thinking and practical technology execution. Our work sits at the intersection of digital marketing, design, software and business operations.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[radial-gradient(circle_at_top,_rgba(79,124,255,0.2),transparent_52%),#111B2E] p-6">
          <div className="space-y-4">
            {[
              "Strategy-first planning across marketing, design and technology.",
              "Clear communication and realistic project planning from start to finish.",
              "Tools that support growth, visibility and operational efficiency.",
              "Work tailored to the business stage, goals and internal capacity.",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-[var(--border)] bg-[var(--secondary)] p-4 text-[var(--muted)]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--cyan)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-20 grid gap-8 md:grid-cols-3">
        {[
          { title: "Strategy", text: "We align business goals, market context and the best digital path forward." },
          { title: "Execution", text: "We plan, build, launch and iterate with practical delivery milestones." },
          { title: "Optimization", text: "We review performance and improve based on the data, feedback and business context available." },
        ].map((block) => (
          <div key={block.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h2 className="text-2xl font-semibold text-[var(--text)]">{block.title}</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">{block.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
