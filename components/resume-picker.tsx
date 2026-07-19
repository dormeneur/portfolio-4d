"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const resumes = [
  {
    id: "india",
    flag: "🇮🇳",
    label: "india",
    download: "https://drive.google.com/uc?export=download&id=1y8SddS1SY37tiPVTdXX52OhmErGoGb0j",
    preview: "https://drive.google.com/file/d/1y8SddS1SY37tiPVTdXX52OhmErGoGb0j/preview",
  },
  {
    id: "thailand",
    flag: "🇹🇭",
    label: "thailand",
    download: "https://drive.google.com/uc?export=download&id=1piRTl0dw7cQWOTB5gMpdeGt2kQe9x3A4",
    preview: "https://drive.google.com/file/d/1piRTl0dw7cQWOTB5gMpdeGt2kQe9x3A4/preview",
  },
]

export function ResumePicker() {
  const [selected, setSelected] = useState(resumes[0].id)
  const current = resumes.find((r) => r.id === selected) ?? resumes[0]

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
        {resumes.map((r) => (
          <button
            key={r.id}
            onClick={() => setSelected(r.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 transition-colors",
              selected === r.id
                ? "border-primary/60 bg-primary/10 text-foreground"
                : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {r.flag} {r.label}
          </button>
        ))}
        <a
          href={current.download}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto link-underline text-muted-foreground hover:text-foreground transition-colors"
        >
          download ↓
        </a>
      </div>

      <div
        className="tile mt-6 w-full overflow-hidden"
        style={{ height: "calc(100vh - 300px)", minHeight: 520 }}
      >
        <iframe
          key={current.id}
          src={current.preview}
          className="w-full h-full border-0"
          title={`${current.label} resume preview`}
        />
      </div>
    </div>
  )
}
