"use client"

import { useState } from "react"
import { CalendarDays, MessageSquare } from "lucide-react"
import { CalEmbed } from "@/components/cal-embed"
import { SayHello } from "@/components/say-hello"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "message", label: "send a message", icon: MessageSquare },
  { id: "call", label: "book a call", icon: CalendarDays },
] as const

// ponytail: both panes stay mounted, hidden via CSS — the message tab is the
// default so the cal iframe finishes loading in the background before anyone
// clicks "book a call".
export function ContactTabs() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("message")

  return (
    <div>
      <div className="flex flex-wrap gap-3 font-mono text-sm" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 transition-colors",
              active === t.id
                ? "border-primary/60 bg-primary/10 text-foreground"
                : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            <t.icon className="h-4 w-4" aria-hidden />
            {t.label}
          </button>
        ))}
      </div>

      <div className={cn("mt-6 min-h-[540px]", active !== "call" && "hidden")}>
        <CalEmbed />
      </div>
      <div className={cn("mt-8", active !== "message" && "hidden")}>
        <SayHello />
      </div>
    </div>
  )
}
