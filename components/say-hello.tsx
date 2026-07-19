"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { EMAIL } from "@/lib/constants"

export function SayHello() {
  const [from, setFrom] = useState("")
  const [message, setMessage] = useState("")
  const [company, setCompany] = useState("") // honeypot — humans never see it
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const send = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, message, company }),
      })
      setStatus(res.ok ? "sent" : "error")
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="max-w-xl py-6">
        <p className="font-serif italic text-2xl text-foreground">
          message sent<span className="text-primary">.</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">thanks — i&apos;ll get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={send} className="max-w-xl">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
        say hello<span className="text-primary">.</span>
      </h2>
      {/* accent rule under the heading */}
      <div className="relative mt-4 mb-10 h-px bg-border">
        <span className="absolute left-0 -top-[1.5px] h-1 w-16 bg-primary" aria-hidden />
      </div>

      {/* honeypot */}
      <input
        type="text"
        name="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="block">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          your email
        </span>
        <input
          type="email"
          required
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="you@company.com"
          className="mt-2 w-full bg-transparent border-0 border-b border-border pb-2 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
        />
      </label>

      <label className="block mt-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
          message
        </span>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="what's on your mind?"
          className="mt-2 w-full resize-none bg-transparent border-0 border-b border-border pb-2 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors"
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-2.5 font-mono text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden />
        {status === "sending" ? "sending…" : "send message"}
      </button>

      {status === "error" && (
        <p className="mt-4 font-mono text-xs text-destructive">
          couldn&apos;t send — email me directly at{" "}
          <a href={`mailto:${EMAIL}`} className="underline">
            {EMAIL}
          </a>
        </p>
      )}
    </form>
  )
}
