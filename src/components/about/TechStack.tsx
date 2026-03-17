import { STACK } from "@/lib/about"

export function TechStack() {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">skills</p>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-text)]">
        Tech Stack
      </h2>
      <div className="space-y-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        {STACK.map(({ category, skills }) => (
          <div key={category}>
            <p className="mb-3 font-mono text-xs text-[var(--color-muted)]">{category}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
