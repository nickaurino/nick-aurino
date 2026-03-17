const ROLES = [
  { label: "Phi Delta Theta", note: "Secretary, 2024–2025" },
  { label: "Brawl Stars Club at LMU", note: "Founder & President" },
]

const INTERESTS = ["Gaming", "Bouldering", "Weightlifting", "Roundnet"]

export function BeyondCode() {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">outside the editor</p>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-text)]">
        Beyond the Keyboard
      </h2>
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <p className="mb-6 text-sm leading-relaxed text-[var(--color-muted)]">
          Outside of code, I served as Secretary of Phi Delta Theta and founded the Brawl Stars Club
          at LMU, officially recognized as an RSO in 2025. I spend my free time bouldering, staying
          competitive in games, and staying active.
        </p>
        <div className="space-y-4">
          <div>
            <p className="mb-2 font-mono text-xs text-[var(--color-muted)]">leadership</p>
            <div className="flex flex-wrap gap-2">
              {ROLES.map(({ label, note }) => (
                <span
                  key={label}
                  className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
                >
                  {label} ({note})
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-xs text-[var(--color-muted)]">interests</p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
