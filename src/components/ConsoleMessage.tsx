"use client"

import { useEffect } from "react"

export default function ConsoleMessage() {
  useEffect(() => {
    const ascii = `
  _   _ _      _
 | \\ | (_) ___| | __
 |  \\| | |/ __| |/ /
 | |\\  | | (__|   <
 |_| \\_|_|\\___|_|\\_\\
`
    const accent = "color:#34d399;font-weight:bold;"
    const muted  = "color:#a1a1aa;"
    const reset  = "color:inherit;"

    console.log("%c" + ascii, accent)
    console.log(
      "%cHey, you found the console. 👋\n\n%cI'm Nick — CS @ LMU, building cool stuff.\nOpen to SWE roles starting Summer 2026.\n\n%c→ nickaurino@gmail.com\n→ github.com/nickaurino\n→ linkedin.com/in/nick-aurino",
      accent,
      muted,
      accent
    )
    console.log("%c(nice reflexes, checking the devtools 🔍)", reset)
  }, [])

  return null
}
