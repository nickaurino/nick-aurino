import Image from "next/image"

export function AboutHero() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start">
      {/* Photo */}
      <div className="flex shrink-0 justify-center md:justify-start">
        <Image
          src="/nick.jpg"
          alt="Nick Aurino"
          width={144}
          height={144}
          className="rounded-full border-2 border-[var(--color-border)] object-cover transition-all duration-300 hover:border-[var(--color-accent)]"
        />
      </div>

      {/* Bio + Quick Facts */}
      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
        {/* Bio */}
        <div>
          <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">background</p>
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-[var(--color-text)]">
            Hi, I&apos;m Nick.
          </h2>
          <p className="mb-4 leading-relaxed text-[var(--color-muted)]">
            I&apos;m a Computer Science student at Loyola Marymount University, graduating in May
            2026 with a minor in Statistics and Data Science and a second minor in Interactive,
            Gaming, and Immersive Media.
          </p>
          <p className="leading-relaxed text-[var(--color-muted)]">
            I enjoy building things at the intersection of technology and real-world impact, whether
            that&apos;s published research, mobile apps, or full-stack tools. I&apos;m drawn to
            work that blends creativity and structure, and I care about the craft behind whatever
            I&apos;m building.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="h-fit rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <p className="mb-4 font-mono text-sm text-[var(--color-accent)]">quick facts</p>
          <dl className="space-y-3">
            {[
              { label: "School", value: "Loyola Marymount University" },
              { label: "Degree", value: "B.S. Computer Science" },
              { label: "Graduating", value: "May 2026" },
              { label: "Location", value: "Los Angeles, CA" },
              { label: "Minors", value: "Statistics & Data Science, IGIM" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-start justify-between gap-4">
                <dt className="shrink-0 pt-0.5 font-mono text-xs text-[var(--color-muted)]">
                  {label}
                </dt>
                <dd className="text-right text-sm text-[var(--color-text)]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
