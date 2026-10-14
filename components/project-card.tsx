import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import type { Project } from "@/lib/projects"

export function ProjectCard({ p, priority }: { p: Project; priority?: boolean }) {
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
          <span className="font-display font-semibold text-foreground">{p.title}</span>
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
        {(p.github || p.live) && (
          <div className="flex gap-2 pt-2 font-mono text-xs">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-sm bg-[#238636] px-3 py-2 text-white hover:bg-[#2ea043] transition-colors"
              >
                <Github className="h-3.5 w-3.5" aria-hidden /> github
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-sm bg-yellow-400 px-3 py-2 text-black hover:bg-yellow-300 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden /> live
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
