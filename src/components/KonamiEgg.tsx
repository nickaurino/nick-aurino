"use client"

import { useEffect, useRef, useState } from "react"

const SEQUENCE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
]

export default function KonamiEgg() {
  const [active, setActive] = useState(false)
  const [toast, setToast] = useState(false)
  const progress = useRef<string[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  // Keydown listener
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      progress.current = [...progress.current, key].slice(-SEQUENCE.length)

      if (progress.current.join(",") === SEQUENCE.join(",")) {
        progress.current = []
        trigger()
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  function trigger() {
    setActive(true)
    setToast(true)

    // Auto-dismiss after 3.5s
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setActive(false)
      setToast(false)
      cancelAnimationFrame(rafRef.current)
    }, 3500)
  }

  // Matrix rain
  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const cols = Math.floor(canvas.width / fontSize)
    const drops = Array.from({ length: cols }, () => Math.random() * -50)

    // Characters: katakana + digits + letters
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF"

    function draw() {
      if (!ctx || !canvas) return
      ctx.fillStyle = "rgba(0,0,0,0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#34d399"
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i] += 0.5
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => cancelAnimationFrame(rafRef.current)
  }, [active])

  if (!active && !toast) return null

  return (
    <>
      {active && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 z-40 pointer-events-none"
          style={{ opacity: 0.85 }}
        />
      )}
      {toast && (
        <div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 rounded-lg border border-[var(--color-accent)] bg-[var(--color-surface)] px-5 py-3 text-sm font-mono text-[var(--color-accent)] shadow-lg"
          style={{ animation: "fadeInUp 0.4s ease both" }}
        >
          <span>cheat code activated</span>
          <span>🎮</span>
        </div>
      )}
    </>
  )
}
