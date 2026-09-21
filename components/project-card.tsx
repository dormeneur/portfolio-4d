import Image from "next/image"
import type { Project } from "@/lib/projects"

export function ProjectCard({ p, priority }: { p: Project; priority?: boolean }) {
  const link = p.github ?? p.live
  return (
    <article className="tile tile-hover group overflow-hidden flex flex-col">
      {p.image && (
        <div className="relative h-32 overflow-hidden border-b border-border/40">
          <Image
            src={p.image}
            alt={p.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-3 py-1 font-mono text-xs text-foreground border border-border/60">
            {p.status}
          </span>
        </div>
      )}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-semibold text-foreground hover:text-primary transition-colors"
            >
              {p.title} <span className="text-primary/60">↗</span>
            </a>
          ) : (
            <span className="font-display font-semibold text-foreground">
              {p.title}
            </span>
          )}
          {!p.image && (
            <span className="font-mono text-xs text-muted-foreground/70">{p.status}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-snug">{p.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.tech.slice(0, 3).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
