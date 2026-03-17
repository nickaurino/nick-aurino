import { ProjectsGrid } from "@/components/projects/ProjectsGrid"

export const metadata = {
  title: "Projects | Nick Aurino",
  description: "A selection of projects I've built and research I've contributed to.",
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-24">
      {/* Heading */}
      <div className="animate-fade-in-up mb-4">
        <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">selected work</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
          Projects
        </h1>
        <p className="animate-fade-in-up animate-delay-1 max-w-xl text-[var(--color-muted)]">
          Research, tools, and things I&apos;ve built, ranging from published academic work to
          side projects.
        </p>
      </div>

      {/* Divider */}
      <div className="animate-fade-in-up animate-delay-2 mb-12 mt-8 h-px bg-[var(--color-border)]" />

      {/* Grid */}
      <div className="animate-fade-in-up animate-delay-2">
        <ProjectsGrid />
      </div>
    </main>
  )
}
