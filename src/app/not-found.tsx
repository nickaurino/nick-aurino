import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="animate-fade-in-up">
        <p className="font-mono text-sm text-[var(--color-accent)] mb-4 tracking-widest uppercase">
          Segmentation Fault
        </p>
        <h1 className="font-mono text-[8rem] font-bold leading-none text-[var(--color-text)] mb-2">
          404
        </h1>
        <p className="text-[var(--color-muted)] mb-2 text-lg">
          Page not found.
        </p>
        <p className="font-mono text-sm text-[var(--color-border)] mb-10">
          core dumped: the route you requested does not exist
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          <span className="font-mono">cd ~</span>
          <span>go home</span>
        </Link>
      </div>
    </main>
  )
}
