import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

import { EnquiryForm } from "@/components/enquiry-form"
import { serviceCatalog, type ServiceItem } from "@/lib/site-config"

function ServiceDetailVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "website-development":
      return (
        <div className="service-detail-visual service-detail-visual--website">
          <div className="detail-window">
            <div className="detail-window__top" />
            <div className="detail-window__content">
              <span className="detail-bar detail-bar--wide" />
              <span className="detail-bar detail-bar--mid" />
              <span className="detail-bar detail-bar--short" />
            </div>
          </div>
          <div className="detail-bubble detail-bubble--a" />
          <div className="detail-bubble detail-bubble--b" />
        </div>
      )
    case "app-development":
      return (
        <div className="service-detail-visual service-detail-visual--app">
          <div className="detail-phone">
            <div className="detail-phone__cam" />
            <div className="detail-phone__screen">
              <span className="detail-phone__line" />
              <span className="detail-phone__line detail-phone__line--alt" />
            </div>
          </div>
          <div className="detail-stack" />
        </div>
      )
    case "ai-automation":
      return (
        <div className="service-detail-visual service-detail-visual--ai">
          <span className="detail-node detail-node--1" />
          <span className="detail-node detail-node--2" />
          <span className="detail-node detail-node--3" />
          <span className="detail-node detail-node--4" />
          <span className="detail-node detail-node--5" />
          <div className="detail-grid" />
        </div>
      )
    case "social-media-marketing":
      return (
        <div className="service-detail-visual service-detail-visual--social">
          <div className="detail-post detail-post--lg" />
          <div className="detail-post detail-post--md" />
          <div className="detail-post detail-post--sm" />
        </div>
      )
    case "marketplace-management":
      return (
        <div className="service-detail-visual service-detail-visual--marketplace">
          <div className="detail-product" />
          <div className="detail-metric" />
          <div className="detail-pill" />
        </div>
      )
    case "branding-creative":
      return (
        <div className="service-detail-visual service-detail-visual--branding">
          <div className="detail-brand-board" />
          <div className="detail-brand-mark">C</div>
          <div className="detail-brand-mark detail-brand-mark--alt">A</div>
        </div>
      )
    default:
      return (
        <div className="service-detail-visual service-detail-visual--marketing">
          <div className="detail-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="detail-analytics" />
        </div>
      )
  }
}

export function ServicePageShell({ service }: { service: ServiceItem }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Request a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore all services
            </Link>
          </div>
        </div>

        <div className="service-snapshot rounded-[2rem] border border-[var(--border)] p-6 shadow-[0_20px_60px_rgba(23,23,23,0.08)]">
          <div className="mb-5 flex items-center gap-3 text-[var(--text)]">
            <Sparkles className="h-5 w-5 text-[var(--text)]" />
            <span className="text-sm font-medium uppercase tracking-[0.2em]">Service snapshot</span>
          </div>
          <ServiceDetailVisual slug={service.slug} />
          <div className="mt-6 space-y-3">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.7)] px-3 py-3 text-sm text-[var(--muted)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--text)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Common business problems</h2>
          <ul className="mt-5 space-y-4">
            {service.problems.map((problem) => (
              <li key={problem} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--electric)]" />
                <span className="text-[var(--muted)]">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7">
          <h2 className="text-2xl font-semibold text-[var(--text)]">What this delivers</h2>
          <ul className="mt-5 space-y-4">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--cyan)]" />
                <span className="text-[var(--muted)]">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7">
        <h2 className="text-3xl font-semibold text-[var(--text)]">Typical use cases</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {service.useCases.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)] p-4 text-sm leading-7 text-[var(--muted)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Delivery approach</h2>
          <ol className="mt-6 space-y-5">
            {service.process.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--electric)]/15 text-xs font-semibold text-[var(--cyan)]">
                  {index + 1}
                </span>
                <span className="text-[var(--muted)]">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7">
          <h2 className="text-2xl font-semibold text-[var(--text)]">Key questions</h2>
          <div className="mt-6 space-y-5">
            {service.faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)] p-4">
                <h3 className="mb-2 text-base font-semibold text-[var(--text)]">{item.question}</h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="text-3xl font-semibold text-[var(--text)]">Related services</h2>
          <Link href="/services" className="text-sm font-medium text-[var(--cyan)] hover:text-[var(--text)]">View all</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {service.related.map((slug) => {
            const related = serviceCatalog.find((item) => item.slug === slug)
            if (!related) return null
            return (
              <Link key={related.slug} href={`/services/${related.slug}`} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition hover:border-[var(--electric)]/50 hover:-translate-y-1">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--cyan)]">{related.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--text)]">{related.title}</h3>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-7">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text)]">Tell us what you need.</h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Share the scope, goals and timeline. We&apos;ll recommend the right approach and next steps based on your business context.
          </p>
        </div>
        <EnquiryForm defaultService={service.title} />
      </section>
    </div>
  )
}
