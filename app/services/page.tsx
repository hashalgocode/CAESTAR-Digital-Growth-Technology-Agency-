import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ServiceCard } from "@/components/service-card";
import { serviceCatalog } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore CAELSTAR services across digital marketing, website development, paid advertising, AI automation and brand growth strategy.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="eyebrow">Solutions</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] sm:text-5xl">Digital growth systems built around business goals.</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          From strategy and performance marketing to custom development and automation, CAELSTAR helps businesses turn digital complexity into clearer progress.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {serviceCatalog.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-7 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Need a tailored approach?</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--text)]">We can recommend the right mix of strategy, execution and technology.</h2>
          </div>
          <div className="flex items-center justify-end">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
