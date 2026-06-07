"use client"

import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { ArrowUpRight, X } from "lucide-react"
import type { Project } from "@/lib/projects"

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [project, onClose])

  if (!project || typeof document === "undefined") return null

  const { title, tagline, description, tags, badge, link, links, year, status } = project
  const footerLinks = links ?? (link ? [link] : [])

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="animate-fade-in absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="animate-modal-in relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1.5 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-border)] hover:text-[var(--color-text)]"
        >
          <X size={18} />
        </button>

        {/* Title + status */}
        <div className="mb-3 flex items-center gap-2 pr-10">
          {status === "active" && (
            <span className="relative flex h-2 w-2 shrink-0">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ backgroundColor: "var(--color-live)" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--color-live)" }}
              />
            </span>
          )}
          <h2
            id="project-modal-title"
            className="text-2xl font-bold tracking-tight text-[var(--color-text)]"
          >
            {title}
          </h2>
        </div>

        {/* Badge */}
        {badge && (
          <span
            className="mb-4 inline-block rounded-full px-2.5 py-1 text-xs font-medium"
            style={{
              backgroundColor: "color-mix(in srgb, var(--color-accent) 12%, transparent)",
              color: "var(--color-accent)",
            }}
          >
            {badge}
          </span>
        )}

        {/* Tagline */}
        <p className="mb-4 text-base font-medium leading-snug text-[var(--color-text)] opacity-90">
          {tagline}
        </p>

        {/* Full description */}
        <p className="mb-6 text-sm leading-relaxed text-[var(--color-muted)]">{description}</p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer: link(s) + year */}
        <div className="flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-5">
          {footerLinks.length > 0 ? (
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-75"
                  target={l.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {l.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          ) : (
            <span />
          )}
          <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">{year}</span>
        </div>
      </div>
    </div>,
    document.body
  )
}
