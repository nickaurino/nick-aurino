import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} {SITE.name}
        </p>

        <div className="flex items-center gap-4">
          <Link
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Github size={18} />
          </Link>
          <Link
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
