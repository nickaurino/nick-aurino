"use client"

import { useState, useRef, useEffect, KeyboardEvent } from "react"
import { STACK } from "@/lib/about"
import { PROJECTS } from "@/lib/projects"

type Line = { type: "input" | "output"; text: string }

const PROMPT = "visitor@nickaurino:~$"

const NEOFETCH = `
              .-/+oossssoo+/-.
          \`:+ssssssssssssssssss+:\`
        -+ssssssssssssssssssyyssss+-         nick@nickaurino
      .osssssssssssssssssssdMMMNysssso.      ---------------
     /ssssssssssshdmmNNmmyNMMMMhssssss/      OS: Portfolio OS 1.0 (LMU Edition)
    +ssssssssshmydMMMMMMMNddddyssssssss+     Shell: nicksh 4.2.0
   /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Uptime: ${Math.floor(Math.random() * 400 + 100)} days
  .ssssssssdMMMNhsssssssssshNMMMdssssssss.   Languages: Python Java JS TS C
  +sssshhhyNMMNyssssssssssssyNMMMysssssss+   Editor: VS Code (vim mode off)
  ossyNMMMNyMMhsssssssssssssshmmmhssssss/    GPA: 3.73 / 4.0
  ossyNMMMNyMMhsssssssssssssshmmmhssssss/    Research: M4Health · Skywalker · Hearing Aid
  +sssshhhyNMMNyssssssssssssyNMMMysssssss+   Status: open to roles
  .ssssssssdMMMNhsssssssssshNMMMdssssssss.
   /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/
    +ssssssssshmydMMMMMMMNddddyssssssss+
     /ssssssssssshdmmNNmmyNMMMMhssssss/
      .osssssssssssssssssssdMMMNysssso.
        -+sssssssssssssssssyyyssss+-
          \`:+ssssssssssssssssss+:\`
              .-/+oossssoo+/-.
`

function runCommand(input: string): string[] {
  const cmd = input.trim().toLowerCase()

  switch (cmd) {
    case "help":
      return [
        "available commands:",
        "  whoami       — who is nick",
        "  ls           — list site sections",
        "  ls projects  — list projects",
        "  skills       — print tech stack",
        "  contact      — get in touch",
        "  neofetch     — system info",
        "  sudo         — try it",
        "  clear        — clear terminal",
        "  help         — show this list",
      ]

    case "whoami":
      return ["nick aurino — cs student, builder, researcher", "graduating LMU May 2026"]

    case "ls":
      return ["about/    projects/    resume/    contact/"]

    case "ls projects":
      return PROJECTS.map((p) => `${p.year}  ${p.title.padEnd(32)} ${p.tagline}`)

    case "skills":
      return STACK.flatMap((category) => [
        `[${category.category}]`,
        "  " + category.skills.join("  "),
      ])

    case "contact":
      return [
        "email    nickaurino@gmail.com",
        "github   github.com/nickaurino",
        "linkedin linkedin.com/in/nick-aurino",
      ]

    case "sudo":
      return ["nice try 😄", "Permission denied: you are not in the sudoers file.", "This incident will be reported."]

    case "neofetch":
      return [NEOFETCH]

    case "":
      return []

    default:
      return [`command not found: ${input.trim()}`, "type 'help' for available commands"]
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", text: "Welcome to Nick's shell. Type 'help' to get started." },
  ])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // Scroll only within the terminal body, never the page
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [lines])

  function submit() {
    const trimmed = input.trim()
    const newLines: Line[] = [...lines, { type: "input", text: trimmed }]

    if (trimmed.toLowerCase() === "clear") {
      setLines([])
      setInput("")
      setHistoryIndex(-1)
      return
    }

    const outputs = runCommand(trimmed)
    outputs.forEach((o) => newLines.push({ type: "output", text: o }))
    setLines(newLines)

    if (trimmed) {
      setHistory((prev) => [trimmed, ...prev])
    }
    setInput("")
    setHistoryIndex(-1)
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      submit()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const next = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(next)
      setInput(history[next] ?? "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const next = Math.max(historyIndex - 1, -1)
      setHistoryIndex(next)
      setInput(next === -1 ? "" : history[next])
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-6 pb-24">
      <div
        className="rounded-xl border border-[var(--color-border)] overflow-hidden shadow-2xl"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 bg-[var(--color-surface)] px-4 py-3 border-b border-[var(--color-border)]">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-[var(--color-muted)] font-mono">
            nick@nickaurino — bash
          </span>
        </div>

        {/* Terminal body */}
        <div ref={bodyRef} className="bg-[#0d0d0f] p-4 font-mono text-sm min-h-[260px] max-h-[420px] overflow-y-auto cursor-text">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap leading-relaxed">
              {line.type === "input" ? (
                <span>
                  <span className="text-[var(--color-accent)]">{PROMPT}</span>{" "}
                  <span className="text-[var(--color-text)]">{line.text}</span>
                </span>
              ) : (
                <span className="text-[var(--color-muted)]">{line.text}</span>
              )}
            </div>
          ))}

          {/* Input row */}
          <div className="flex items-center mt-1">
            <span className="text-[var(--color-accent)] shrink-0">{PROMPT}&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[var(--color-text)] outline-none caret-[var(--color-accent)] placeholder:text-[var(--color-border)]"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="terminal input"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
