import type { ReactNode } from "react"
import { ScrambleText } from "@/components/scramble-text"
import { Reveal } from "@/components/reveal"

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl mx-auto px-5 sm:px-6">{children}</div>
}

export function PageHeader({
  title,
  subtitle,
  accent,
}: {
  title: string
  subtitle?: string
  accent?: string
}) {
  return (
    <header className="relative pt-16 sm:pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-64 bg-dots -z-10" aria-hidden />
      <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tighter cursor-default">
        <ScrambleText text={title} />
        <span className="text-primary">.</span>
      </h1>
      {accent && (
        <p className="mt-4 font-serif italic text-xl sm:text-2xl text-muted-foreground">{accent}</p>
      )}
      {subtitle && (
        <p className="mt-3 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground/70">
          {subtitle}
        </p>
      )}
    </header>
  )
}

export function SectionLabel({ num, children }: { num?: string; children: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground/70 mb-6">
      {num && <span className="text-primary mr-2">{num}</span>}
      {children}
    </p>
  )
}

export function Section({
  label,
  num,
  id,
  children,
}: {
  label?: string
  num?: string
  id?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="py-12 border-t border-border scroll-mt-20">
      <Reveal>
        {label && <SectionLabel num={num}>{label}</SectionLabel>}
        {children}
      </Reveal>
    </section>
  )
}
