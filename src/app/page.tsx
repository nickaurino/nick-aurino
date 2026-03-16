import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 md:py-36">
      <p className="mb-4 font-mono text-sm text-[var(--color-accent)]">
        hi, I&apos;m
      </p>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-[var(--color-text)] md:text-6xl">
        {SITE.name}
      </h1>
      <p className="mb-8 max-w-xl text-lg text-[var(--color-muted)]">
        {SITE.description}
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-background)] transition-opacity hover:opacity-90"
        >
          View my work
          <ArrowRight size={16} />
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          About me
        </Link>
      </div>
    </section>
  );
}
