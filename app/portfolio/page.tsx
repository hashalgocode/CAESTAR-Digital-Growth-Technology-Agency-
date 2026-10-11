import type { Metadata } from "next";

import { PortfolioCard } from "@/components/portfolio-card";
import { portfolioProjects } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View concept projects and demonstration work from CAELSTAR across digital marketing, automation, websites and business operations.",
};

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--text)] sm:text-5xl">Selected work and concept project examples.</h1>
        <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
          This portfolio presents demonstration work and concept projects to illustrate the kinds of strategy, creative and technical problems CAELSTAR can help address.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <PortfolioCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
