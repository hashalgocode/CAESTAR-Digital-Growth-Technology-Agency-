import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { EnquiryForm } from "@/components/enquiry-form";
import { ServiceCard } from "@/components/service-card";
import { PortfolioCard } from "@/components/portfolio-card";
import { audienceSegments, differentiators, faqItems, portfolioProjects, processSteps, serviceCatalog } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(circle_at_top_left,_rgba(131,207,192,0.18),transparent_28%),radial-gradient(circle_at_top_right,_rgba(214,217,255,0.22),transparent_25%)]">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--electric)]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="pt-6">
            <p className="eyebrow">STRATEGY · DIGITAL GROWTH · INTELLIGENT TECHNOLOGY</p>
            <h1 className="mt-6 max-w-xl text-[var(--text)]">
              <span className="block">Your next</span>
              <span className="block"><b>stage</b> of growth</span>
              <span className="block"><em>starts</em> here.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              CAELSTAR helps ambitious businesses grow through performance marketing, e-commerce operations, custom digital products and intelligent automation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--muted)]">Based in Lucknow, working with businesses across India and beyond.</p>
          </div>

          <div className="relative">
            <div className="orb-panel">
              <div className="hero-scene">
                <div className="hero-orbit" />
                <div className="hero-orbit hero-orbit--alt" />
                <div className="hero-sphere">
                  <div className="hero-node" style={{ left: "18%", top: "28%", animationDelay: "0.2s" }} />
                  <div className="hero-node" style={{ right: "18%", top: "22%", animationDelay: "0.8s" }} />
                  <div className="hero-node" style={{ left: "24%", bottom: "18%", animationDelay: "1.5s" }} />
                  <div className="hero-node" style={{ right: "26%", bottom: "24%", animationDelay: "2s" }} />
                </div>

                <div className="hero-floating-card hero-floating-card--1">
                  <span>Growth systems</span>
                  <strong>360°</strong>
                </div>
                <div className="hero-floating-card hero-floating-card--2">
                  <span>CRM flow</span>
                  <strong>+42%</strong>
                </div>
                <div className="hero-floating-card hero-floating-card--3">
                  <span>Ads</span>
                  <strong>ROAS</strong>
                </div>
                <div className="hero-floating-card hero-floating-card--4">
                  <span>Delivery</span>
                  <strong>Clear</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 max-w-xl text-[var(--text)]">Everything you need to <em>grow</em> in the digital world.</h2>
          </div>
          <Link href="/services" className="hidden text-sm font-medium text-[var(--text)] hover:text-[var(--muted)] sm:inline-flex">
            View all services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {serviceCatalog.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Who we help</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">Business needs change at every stage. We adapt with them.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {audienceSegments.map((segment) => (
              <div key={segment} className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-5 text-base text-[var(--muted)] shadow-[0_18px_40px_rgba(23,23,23,0.04)]">
                {segment}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">Why CAELSTAR</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">A focused approach to digital growth and transformation.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-5 text-lg text-[var(--text)] shadow-[0_18px_40px_rgba(23,23,23,0.04)]">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-xl">
            <p className="eyebrow">Our process</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">A clear path from challenge to measurable progress.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.id} className="rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-5 shadow-[0_18px_40px_rgba(23,23,23,0.04)]">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[rgba(23,23,23,0.68)]">{step.id}</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--text)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Portfolio & concept work</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">A practical look at the kinds of growth problems we solve.</h2>
          </div>
          <Link href="/portfolio" className="hidden text-sm font-medium text-[var(--text)] hover:text-[var(--muted)] sm:inline-flex">
            See full portfolio
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--secondary)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-xl">
            <p className="eyebrow">Ways to work together</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">Flexible engagement models for different business needs.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "One-time projects", description: "Ideal for focused marketing, design, website or digital implementation work with clearly defined deliverables." },
              { title: "Monthly service retainers", description: "For ongoing support, campaign management, optimization and operational communication across digital channels." },
              { title: "Custom business solutions", description: "For tailored platforms, workflows, automation and digital systems built around your business model and growth goals." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_18px_40px_rgba(23,23,23,0.04)]">
                <h3 className="text-2xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-xl">
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--text)] sm:text-4xl">Frequently asked questions.</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.72)] p-5 shadow-[0_18px_40px_rgba(23,23,23,0.04)]">
              <h3 className="text-lg font-semibold text-[var(--text)]">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-dark mx-auto mt-4 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[44px] bg-[var(--ink)] p-6 text-white md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-white/80">Ready to move?</p>
            <h2 className="mt-4 text-[var(--text)] text-white">Have a business <em>goal</em> in mind?</h2>
            <p className="mt-5 max-w-lg text-lg leading-8 text-[#c4c4be]">
              Tell us what you want to build, improve or automate. Let&apos;s work out the right approach for your business.
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex w-fit items-center gap-2">
              Let&apos;s Talk About Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
