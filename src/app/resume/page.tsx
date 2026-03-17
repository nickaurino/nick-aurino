import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react"
import { EXPERIENCE, STACK, CERTS, HONORS } from "@/lib/about"
import { PROJECTS } from "@/lib/projects"
import { SITE } from "@/lib/constants"

export const metadata = {
  title: "Resume | Nick Aurino",
  description: "Resume of Nick Aurino, CS student at LMU graduating May 2026.",
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <p className="shrink-0 font-mono text-xs uppercase tracking-widest text-[var(--color-accent)]">
        {children}
      </p>
      <div className="h-px flex-1 bg-[var(--color-border)]" />
    </div>
  )
}

const COURSEWORK = [
  "Algorithms & Analysis",
  "Artificial Intelligence",
  "Data Structures",
  "Languages & Automata",
  "Networks & Internets",
  "Web Application Development",
  "Logic & Computer Design",
]

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-24">
      {/* Header */}
      <div className="animate-fade-in-up mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text)]">
            Nick Aurino
          </h1>
          <p className="mt-1 text-lg text-[var(--color-muted)]">Computer Science Student</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail size={12} />
              {SITE.email}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Linkedin size={12} />
              linkedin.com/in/nick-aurino
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Github size={12} />
              github.com/nickaurino
            </a>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)]">
              <MapPin size={12} />
              Los Angeles, CA
            </span>
          </div>
        </div>
        <a
          href="/resume.pdf"
          download
          className="print:hidden inline-flex shrink-0 items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--color-accent)", color: "#09090b" }}
        >
          <Download size={14} />
          Download PDF
        </a>
      </div>

      <div className="animate-fade-in-up animate-delay-1 space-y-14">
        {/* Education */}
        <section>
          <SectionLabel>Education</SectionLabel>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-[var(--color-text)]">
                  Loyola Marymount University
                </h3>
                <p className="mt-0.5 text-sm text-[var(--color-muted)]">
                  B.S. Computer Science · GPA: 3.73 / 4.00
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Minors: Statistics & Data Science · Interactive, Gaming & Immersive Media
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span
                  className="rounded-full px-2.5 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                    color: "var(--color-accent)",
                  }}
                >
                  Dean&apos;s List
                </span>
                <p className="mt-2 font-mono text-xs text-[var(--color-muted)]">
                  Aug 2022 – May 2026
                </p>
              </div>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs text-[var(--color-muted)]">coursework</p>
              <div className="flex flex-wrap gap-2">
                {COURSEWORK.map((course) => (
                  <span
                    key={course}
                    className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <SectionLabel>Experience</SectionLabel>
          <div className="space-y-4">
            {EXPERIENCE.map(({ company, role, period, location, bullets }) => (
              <div
                key={company}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)]">{company}</h3>
                    <p className="mt-0.5 font-mono text-xs text-[var(--color-muted)]">
                      {role} · {location}
                    </p>
                  </div>
                  <p className="shrink-0 font-mono text-xs text-[var(--color-muted)]">{period}</p>
                </div>
                <ul className="space-y-1.5">
                  {bullets?.map((bullet, i) => (
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionLabel>Projects</SectionLabel>
          <div className="space-y-3">
            {PROJECTS.map(({ title, tagline, year, badge, status }) => (
              <div
                key={title}
                className="flex items-start justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4"
              >
                <div className="flex items-center gap-2">
                  {status === "active" && (
                    <span
                      className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                  )}
                  <div>
                    <span className="font-medium text-[var(--color-text)]">{title}</span>
                    {badge && (
                      <span
                        className="ml-2 rounded-full px-2 py-0.5 text-xs"
                        style={{
                          backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
                          color: "var(--color-accent)",
                        }}
                      >
                        {badge}
                      </span>
                    )}
                    <p className="mt-0.5 text-sm text-[var(--color-muted)]">{tagline}</p>
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">{year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <SectionLabel>Skills</SectionLabel>
          <div className="space-y-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            {STACK.map(({ category, skills }) => (
              <div key={category} className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="w-36 shrink-0 font-mono text-xs text-[var(--color-muted)]">
                  {category}
                </span>
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
        </section>

        {/* Honors & Awards */}
        <section>
          <SectionLabel>Honors & Awards</SectionLabel>
          <div className="space-y-3">
            {HONORS.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4"
              >
                <p className="font-medium text-[var(--color-text)]">{title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <SectionLabel>Certifications</SectionLabel>
          <div className="space-y-3">
            {CERTS.map(({ name, issuer, issued, credentialId }) => (
              <div
                key={credentialId}
                className="flex items-start justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4"
              >
                <div>
                  <p className="font-medium text-[var(--color-text)]">{name}</p>
                  <p className="mt-0.5 font-mono text-xs text-[var(--color-muted)]">
                    {issuer} · ID: {credentialId}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">{issued}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
