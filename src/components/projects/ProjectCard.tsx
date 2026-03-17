import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects"

export function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, description, tags, badge, link, year, status } = project

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border p-6",
        "border-[var(--color-border)] bg-[var(--color-surface)]",
        "transition-all duration-300",
        "hover:border-[var(--color-accent)]",
        "hover:shadow-[0_0_24px_0_color-mix(in_srgb,var(--color-accent)_15%,transparent)]"
      )}
    >
      {/* Top row: title + badge */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {status === "active" && (
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: "var(--color-accent)" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
            </span>
          )}
          <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
        </div>
        {badge && (
          <span
            className="shrink-0 rounded-full px-2.5 py-1 text-xs font-medium"
            style={{
              backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
              color: "var(--color-accent)",
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Tagline */}
      <p className="mb-3 text-sm font-medium text-[var(--color-text)] opacity-80 leading-snug">
        {tagline}
      </p>

      {/* Description */}
      <p className="mb-5 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-3 flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer: link + year */}
      <div className="flex items-center justify-between">
        {link ? (
          <a
            href={link.href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-75"
            target={link.href !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
          >
            {link.label}
            <ArrowUpRight size={14} />
          </a>
        ) : (
          <span />
        )}
        <span className="font-mono text-xs text-[var(--color-muted)]">{year}</span>
      </div>
    </div>
  )
}
