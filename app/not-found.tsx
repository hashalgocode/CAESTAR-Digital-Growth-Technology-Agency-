import Link from "next/link"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl font-semibold text-[var(--text)]">Page not found</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--muted)]">
        The page you were looking for is unavailable or may have moved.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-flex items-center justify-center">
        Back to home
      </Link>
    </div>
  )
}
