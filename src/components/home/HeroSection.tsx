"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/constants";

// Item 0 is the long blank — first thing you see, and the rest between full cycles.
// Short blanks between individual roles come from the 1.2s gap in the else branch.
const ITEMS = [
  { text: "",                    pause: 12000 }, // long blank at start + between cycles
  { text: "a software engineer", pause: 2400  },
  { text: "a full-stack dev",    pause: 2400  },
  { text: "a builder",           pause: 2400  },
  { text: "a cs student",        pause: 2400  },
];

export function HeroSection() {
  // ── Mouse parallax — direct DOM refs, no React re-renders ─────────────────
  const primaryOrbRef   = useRef<HTMLDivElement>(null);
  const secondaryOrbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 80;
      const y = (e.clientY / window.innerHeight - 0.5) * 80;
      if (primaryOrbRef.current) {
        primaryOrbRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (secondaryOrbRef.current) {
        secondaryOrbRef.current.style.transform =
          `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // ── Typewriter ─────────────────────────────────────────────────────────────
  const [itemIdx,   setItemIdx]   = useState(0); // starts at 0 = long blank
  const [displayed, setDisplayed] = useState("");
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const { text, pause } = ITEMS[itemIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < text.length) {
      // Still typing
      t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 110);
    } else if (!deleting && displayed.length === text.length) {
      // Fully displayed (or empty for item 0) — hold for `pause` ms
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      // Erasing
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
    } else {
      // Blank between roles — short pause then advance
      t = setTimeout(() => {
        setDeleting(false);
        setItemIdx((i) => (i + 1) % ITEMS.length);
      }, 1200);
    }

    return () => clearTimeout(t);
  }, [displayed, deleting, itemIdx]);

  return (
    <section className="relative flex min-h-[calc(100svh-65px)] flex-col justify-center overflow-hidden px-6 py-16">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Primary orb — top right, mouse-tracked */}
      <div
        ref={primaryOrbRef}
        aria-hidden
        className="pointer-events-none fixed -right-32 -top-32"
        style={{ zIndex: 0, transition: "transform 0.5s ease-out" }}
      >
        <div
          className="animate-pulse-glow h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 28%, transparent) 0%, transparent 70%)",
            filter: "blur(45px)",
          }}
        />
      </div>

      {/* Secondary orb — bottom left, counter-tracks */}
      <div
        ref={secondaryOrbRef}
        aria-hidden
        className="pointer-events-none fixed -bottom-44 -left-44"
        style={{ zIndex: 0, transition: "transform 0.8s ease-out" }}
      >
        <div
          className="h-[580px] w-[580px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 16%, transparent) 0%, transparent 70%)",
            filter: "blur(50px)",
            animation: "pulse-glow 9s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p className="animate-fade-in mb-4 font-mono text-sm text-[var(--color-accent)]">
          hi, I&apos;m{displayed ? " " : ""}
          <span>{displayed}</span>
          <span className="animate-blink inline-block">|</span>
        </p>

        <h1 className="animate-fade-in-up animate-delay-1 mb-4 text-5xl font-bold tracking-tight md:text-7xl">
          <span
            className="glitch-hover inline-block"
            style={{
              background:
                "linear-gradient(120deg, var(--color-text) 30%, var(--color-accent) 70%, #67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {SITE.name}
          </span>
        </h1>

        <p className="animate-fade-in-up animate-delay-2 mb-8 max-w-xl text-lg text-[var(--color-muted)]">
          {SITE.description}
        </p>

        <div className="animate-fade-in-up animate-delay-3 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--color-background)] transition-all hover:scale-[1.03] hover:opacity-90"
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
      </div>
    </section>
  );
}
