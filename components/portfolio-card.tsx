import Link from "next/link"

export function PortfolioCard({
  title,
  industry,
  summary,
  outcome,
  tags,
}: {
  title: string
  industry: string
  summary: string
  outcome: string
  tags: readonly string[]
}) {
  return (
    <article className="card overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
      <div className="h-52 bg-[radial-gradient(circle_at_top,_rgba(79,124,255,0.25),_transparent_55%),linear-gradient(135deg,#0d1424,#111b2e)]" />
      <div className="p-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cyan)]">{industry}</p>
        <h3 className="mb-3 text-2xl font-semibold text-[var(--text)]">{title}</h3>
        <p className="mb-4 text-sm leading-7 text-[var(--muted)]">{summary}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--secondary)] px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
              {tag}
            </span>
          ))}
        </div>
        <p className="mb-5 text-sm text-[var(--text)]">{outcome}</p>
        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cyan)] hover:text-[var(--text)]">
          Discuss a similar brief
        </Link>
      </div>
    </article>
  )
}
