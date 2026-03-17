export function Education() {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">education</p>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-text)]">
        Education
      </h2>
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_0_color-mix(in_srgb,var(--color-accent)_15%,transparent)]">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-[var(--color-text)]">
              Loyola Marymount University
            </h3>
            <p className="mt-0.5 text-sm text-[var(--color-muted)]">B.S. Computer Science</p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <span
              className="rounded-full px-2.5 py-1 text-xs font-medium"
              style={{
                backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                color: "var(--color-accent)",
              }}
            >
              Dean&apos;s List
            </span>
            <span className="font-mono text-xs text-[var(--color-muted)]">May 2026</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="font-mono text-xs text-[var(--color-muted)]">minors</p>
          <p className="text-sm text-[var(--color-text)]">Statistics and Data Science</p>
          <p className="text-sm text-[var(--color-text)]">
            Interactive, Gaming, and Immersive Media
          </p>
        </div>
      </div>
    </div>
  )
}
