"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { key: "h", href: "/", label: "home" },
  { key: "a", href: "/about", label: "about" },
  { key: "w", href: "/experience", label: "work" },
  { key: "p", href: "/projects", label: "projects" },
  { key: "c", href: "/contact", label: "contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  // real keyboard shortcuts — skip when typing or when a modifier is held
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const el = document.activeElement
      if (
        el instanceof HTMLElement &&
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)
      )
        return
      const item = navItems.find((n) => n.key === e.key.toLowerCase())
      if (item) {
        e.preventDefault()
        router.push(item.href)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [router])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display font-bold text-foreground hover:text-primary transition-colors shrink-0"
        >
          ab<span className="text-primary">.</span>
        </Link>
        <div className="flex flex-wrap justify-end gap-x-4 gap-y-1 font-mono text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "group transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "hidden sm:inline",
                    active ? "text-primary" : "text-primary/60 group-hover:text-primary"
                  )}
                >
                  [{item.key}]
                </span>{" "}
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
