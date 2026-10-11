import Link from "next/link"

import { siteConfig, navigation } from "@/lib/site-config"

export function SiteFooter() {
  const year = typeof window === "undefined" ? 2026 : new Date().getFullYear()

  return (
    <footer className="site-footer border-t border-[var(--line)] bg-[rgba(255,255,255,0.52)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="site-brand-mark flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(23,23,23,0.06)] shadow-[0_14px_28px_-16px_rgba(23,23,23,0.45)]">
              <span className="h-3.5 w-3.5 rounded-full bg-[rgba(255,255,255,0.8)]" />
            </div>
            <span className="text-lg font-medium tracking-[0.18em] text-[var(--ink)]">CAELSTAR</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            CAELSTAR brings strategy, design, technology and optimization together to help businesses grow with clarity and momentum.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">Services</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            {navigation.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[var(--ink)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">Company</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li><Link href="/about" className="transition hover:text-[var(--ink)]">About</Link></li>
            <li><Link href="/portfolio" className="transition hover:text-[var(--ink)]">Portfolio</Link></li>
            <li><Link href="/contact" className="transition hover:text-[var(--ink)]">Contact</Link></li>
            <li><Link href="/faq" className="transition hover:text-[var(--ink)]">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--ink)]">Contact</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>{siteConfig.location}</li>
            <li>{siteConfig.businessEmail}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.businessHours}</li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm text-[var(--muted)]">
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={siteConfig.socialLinks.x} target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-[var(--muted)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {year} CAELSTAR. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
