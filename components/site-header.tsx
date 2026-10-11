"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"

import { navigation } from "@/lib/site-config"

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(250,249,246,0.84)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="CAELSTAR home">
          <div className="site-brand-mark flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(23,23,23,0.06)] shadow-[0_14px_28px_-16px_rgba(23,23,23,0.45)]">
            <span className="h-3.5 w-3.5 rounded-full bg-[rgba(255,255,255,0.8)]" />
          </div>
          <div className="text-lg font-medium tracking-[0.18em] text-[var(--ink)]">CAELSTAR</div>
        </Link>

        <nav className="site-nav hidden items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.72)] p-1 text-sm text-[var(--muted)] lg:flex" aria-label="Main navigation">
          {navigation.main.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3.5 py-2 font-medium transition hover:bg-[var(--mint)] hover:text-[var(--ink)]">
              {item.label}
            </Link>
          ))}

          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 font-medium transition hover:bg-[var(--mint)] hover:text-[var(--ink)]"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>

            {servicesOpen && (
              <div
                id="services-menu"
                className="absolute left-0 top-12 w-72 rounded-[24px] border border-[var(--line)] bg-[rgba(255,255,255,0.96)] p-3 shadow-[0_18px_40px_-18px_rgba(23,23,23,0.35)]"
              >
                {navigation.services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-full px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--mint)] hover:text-[var(--ink)]"
                    onClick={() => setServicesOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/faq" className="rounded-full px-3.5 py-2 font-medium transition hover:bg-[var(--mint)] hover:text-[var(--ink)]">FAQ</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn-primary text-sm">
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.8)] p-2 text-[var(--ink)] lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--line)] bg-[rgba(255,255,255,0.96)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-[var(--muted)]">
            {navigation.main.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-full px-3 py-2 transition hover:bg-[var(--mint)] hover:text-[var(--ink)]">
                {item.label}
              </Link>
            ))}
            <div className="rounded-[24px] border border-[var(--line)] bg-[var(--white)] p-3 shadow-[0_18px_40px_-18px_rgba(23,23,23,0.35)]">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Services</p>
              <div className="flex flex-col gap-1">
                {navigation.services.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-full px-2 py-2 transition hover:bg-[var(--mint)] hover:text-[var(--ink)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="rounded-full px-3 py-2 transition hover:bg-[var(--mint)] hover:text-[var(--ink)]">FAQ</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2 inline-flex items-center justify-center gap-2">
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
