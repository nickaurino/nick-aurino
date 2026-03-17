"use client"

import { useEffect, useRef, useState } from "react"
import { STATS } from "@/lib/about"

function useCountUp(target: number, duration: number, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const startTime = performance.now()

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [target, duration, isVisible])

  return count
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(value, 1500, visible)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="p-6 text-center">
      <div className="mb-1 text-4xl font-bold tabular-nums text-[var(--color-text)]">
        {count}
        <span className="text-[var(--color-accent)]">{suffix}</span>
      </div>
      <div className="font-mono text-xs text-[var(--color-muted)]">{label}</div>
    </div>
  )
}

export function Stats() {
  return (
    <div>
      <p className="mb-3 font-mono text-sm text-[var(--color-accent)]">by the numbers</p>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-[var(--color-text)]">Impact</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <StatItem {...stat} />
          </div>
        ))}
      </div>
    </div>
  )
}
