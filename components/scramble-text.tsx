"use client"

import { useEffect, useState, type ElementType } from "react"

// ponytail: left→right reveal, glyphs swap on a slow tick so each Thai character
// is actually readable, and the whole thing ends quickly. Runs once on mount.
const CHARS = "กขคงจชซตถทนบปพฟมยรลวสหอ"
const SWAP_MS = 90 // how long each random glyph stays on screen

interface ScrambleTextProps {
  text: string
  className?: string
  as?: ElementType
  duration?: number
}

export function ScrambleText({
  text,
  className,
  as: Tag = "span",
  duration = 550,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text) // SSR-safe: real text until the effect runs

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const chars = text.split("")
    const start = performance.now()

    const id = setInterval(() => {
      const progress = (performance.now() - start) / duration
      if (progress >= 1) {
        setDisplay(text)
        clearInterval(id)
        return
      }
      const revealed = progress * chars.length // left→right cutoff
      setDisplay(
        chars
          .map((char, i) =>
            char === " " || i < revealed
              ? char
              : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
          .join("")
      )
    }, SWAP_MS)

    return () => clearInterval(id)
  }, [text, duration])

  return (
    <Tag className={className} aria-label={text}>
      {display}
    </Tag>
  )
}
