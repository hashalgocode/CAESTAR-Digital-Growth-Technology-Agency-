import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import type { ServiceItem } from "@/lib/site-config"

function ServiceVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "website-development":
      return (
        <div className="service-visual service-visual--website">
          <div className="svc-window">
            <div className="svc-window__header" />
            <div className="svc-window__body">
              <span className="svc-block svc-block--wide" />
              <span className="svc-block svc-block--mid" />
              <span className="svc-block svc-block--short" />
            </div>
          </div>
          <div className="svc-floating-card svc-floating-card--a" />
          <div className="svc-floating-card svc-floating-card--b" />
        </div>
      )
    case "app-development":
      return (
        <div className="service-visual service-visual--app">
          <div className="svc-phone">
            <div className="svc-phone__cam" />
            <div className="svc-phone__content">
              <span className="svc-mini-chart" />
              <span className="svc-mini-chart svc-mini-chart--alt" />
            </div>
          </div>
          <div className="svc-float-stack">
            <span />
            <span />
            <span />
          </div>
        </div>
      )
    case "ai-automation":
      return (
        <div className="service-visual service-visual--ai">
          <span className="svc-node svc-node--1" />
          <span className="svc-node svc-node--2" />
          <span className="svc-node svc-node--3" />
          <span className="svc-node svc-node--4" />
          <span className="svc-node svc-node--5" />
          <span className="svc-node svc-node--6" />
          <div className="svc-data-grid" />
        </div>
      )
    case "social-media-marketing":
      return (
        <div className="service-visual service-visual--social">
          <div className="svc-card-post svc-card-post--large" />
          <div className="svc-card-post svc-card-post--small" />
          <div className="svc-card-post svc-card-post--tiny" />
        </div>
      )
    case "marketplace-management":
      return (
        <div className="service-visual service-visual--marketplace">
          <div className="svc-product-card" />
          <div className="svc-metric-card" />
          <div className="svc-metric-pill" />
        </div>
      )
    case "branding-creative":
      return (
        <div className="service-visual service-visual--branding">
          <div className="svc-brand-panel" />
          <div className="svc-brand-letter">C</div>
          <div className="svc-brand-letter svc-brand-letter--alt">A</div>
        </div>
      )
    default:
      return (
        <div className="service-visual service-visual--marketing">
          <div className="svc-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="svc-analytics-card" />
        </div>
      )
  }
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="card service-card flex h-full flex-col justify-between rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.7)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(131,207,192,0.75)] hover:shadow-[0_22px_60px_rgba(23,23,23,0.08)]">
      <div>
        <ServiceVisual slug={service.slug} />
        <div className="mb-4 inline-flex rounded-full border border-[rgba(23,23,23,0.06)] bg-[var(--mint-soft)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[rgba(23,23,23,0.72)]">
          {service.eyebrow}
        </div>
        <h3 className="mb-3 text-2xl font-semibold text-[var(--text)]">{service.title}</h3>
        <p className="mb-4 text-sm leading-7 text-[var(--muted)]">{service.shortDescription}</p>
        <ul className="space-y-2 text-sm text-[var(--muted)]">
          {service.deliverables.slice(0, 3).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--text)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition hover:text-[rgba(23,23,23,0.72)]">
        Learn more <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
