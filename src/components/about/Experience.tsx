import { EXPERIENCE } from "@/lib/about"

export function Experience() {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">work history</p>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-text)]">
        Experience
      </h2>
      <div className="relative">
        {/* Vertical timeline line */}
        <div
          className="absolute bottom-8 left-4 top-2 w-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        {EXPERIENCE.map(({ company, role, period, location, description }) => (
          <div key={company} className="relative pb-10 pl-12 last:pb-0">
            {/* Timeline dot */}
            <div
              className="absolute left-[10px] top-1.5 h-3 w-3 rounded-full border-2"
              style={{
                borderColor: "var(--color-accent)",
                backgroundColor: "var(--color-background)",
              }}
            />

            {/* Card */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[0_0_24px_0_color-mix(in_srgb,var(--color-accent)_15%,transparent)]">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-[var(--color-text)]">{company}</h3>
                  <p className="mt-0.5 font-mono text-xs text-[var(--color-muted)]">{location}</p>
                </div>
                <div className="shrink-0 text-right">
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {role}
                  </span>
                  <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">{period}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
