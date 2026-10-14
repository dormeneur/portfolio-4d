"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { projects, TAGS, type Tag } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function ProjectGrid() {
  const [tag, setTag] = useState<Tag | null>(null)
  const shown = tag ? projects.filter((p) => p.tags.includes(tag)) : projects

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-6">
        {[null, ...TAGS].map((t) => (
          <button
            key={t ?? "all"}
            onClick={() => setTag(t)}
            aria-pressed={tag === t}
            className={cn("chip", tag === t && "border-primary bg-primary/10 text-foreground")}
          >
            {t ?? "all"}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
        {shown.map((p, i) => (
          <ProjectCard key={p.title} p={p} priority={i < 4} />
        ))}
      </div>
    </>
  )
}
