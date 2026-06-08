export const metadata = {
  title: "Credits",
  description:
    "People behind the projects, including Cadence, originally an idea from Zernell Gillie.",
}

export default function CreditsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-24">
      {/* Heading */}
      <div className="animate-fade-in-up mb-4">
        <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">with thanks</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
          Credits
        </h1>
        <p className="max-w-2xl text-[var(--color-muted)]">
          Nothing here gets built alone. These are the people behind the work.
        </p>
      </div>

      {/* Divider */}
      <div className="animate-fade-in-up animate-delay-1 mb-12 mt-8 h-px bg-[var(--color-border)]" />

      {/* People */}
      <section className="animate-fade-in-up animate-delay-1">
        <h2 className="mb-6 text-2xl font-bold text-[var(--color-text)]">People</h2>

        <div className="rounded-xl border border-[var(--color-border)] p-6">
          <p className="font-mono text-sm text-[var(--color-accent)]">Cadence</p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)]">
            Zernell Gillie: original concept and marketing
          </h3>
          <p className="mt-3 text-[var(--color-muted)]">
            Cadence, the app that matches music to your walking and running pace, started as
            Zernell&apos;s idea. He&apos;s leading marketing as it comes to life.
          </p>
        </div>
      </section>
    </main>
  )
}
