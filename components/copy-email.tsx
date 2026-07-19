"use client"

import { useState, type ReactNode } from "react"
import { EMAIL } from "@/lib/constants"

// ponytail: click-to-copy email with inline "copied" feedback — no toast stack needed.
export function CopyEmail({
  className,
  children,
  copied: copiedContent,
}: {
  className?: string
  children: ReactNode
  copied?: ReactNode
}) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable (rare) — fall back to the mail client
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <button type="button" onClick={copy} title="click to copy email" className={className}>
      {copied ? (copiedContent ?? <span className="text-primary">✓ copied!</span>) : children}
    </button>
  )
}
