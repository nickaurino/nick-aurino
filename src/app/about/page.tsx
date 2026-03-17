import { Download } from "lucide-react"
import { AboutHero } from "@/components/about/AboutHero"
import { Stats } from "@/components/about/Stats"
import { TechStack } from "@/components/about/TechStack"
import { Experience } from "@/components/about/Experience"
import { Education } from "@/components/about/Education"
import { BeyondCode } from "@/components/about/BeyondCode"

export const metadata = {
  title: "About | Nick Aurino",
  description:
    "CS student at LMU graduating May 2026, building at the intersection of technology and real-world impact.",
}

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-24">
      {/* Heading */}
      <div className="animate-fade-in-up mb-4">
        <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">who i am</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
          About
        </h1>
        {/* Availability badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-muted)]">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </span>
          Graduating May 2026 · Open to roles
        </span>
      </div>

      {/* Divider */}
      <div className="animate-fade-in-up animate-delay-1 mb-12 mt-8 h-px bg-[var(--color-border)]" />

      {/* Bio + Quick Facts */}
      <div className="animate-fade-in-up animate-delay-1">
        <AboutHero />
      </div>

      {/* Stat Counters */}
      <div className="animate-fade-in-up animate-delay-2 mt-16">
        <Stats />
      </div>

      {/* Tech Stack */}
      <div className="animate-fade-in-up animate-delay-2 mt-16">
        <TechStack />
      </div>

      {/* Experience */}
      <div className="animate-fade-in-up animate-delay-3 mt-16">
        <Experience />
      </div>

      {/* Education */}
      <div className="animate-fade-in-up animate-delay-3 mt-16">
        <Education />
      </div>

      {/* Beyond the Keyboard */}
      <div className="animate-fade-in-up animate-delay-4 mt-16">
        <BeyondCode />
      </div>

      {/* Resume CTA */}
      <div className="animate-fade-in-up animate-delay-4 mt-16">
        <div className="rounded-xl border border-[var(--color-border)] p-8 text-center">
          <p className="mb-2 font-mono text-sm text-[var(--color-accent)]">want the full picture?</p>
          <h2 className="mb-5 text-2xl font-bold text-[var(--color-text)]">Download my resume</h2>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--color-accent)", color: "#09090b" }}
          >
            <Download size={16} />
            Resume.pdf
          </a>
        </div>
      </div>
    </main>
  )
}
