import type { Metadata } from "next"
import { Github } from "lucide-react"
import { PageShell, PageHeader, Section } from "@/components/page-shell"
import { ProjectGrid } from "@/components/project-grid"
import { GITHUB_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Projects | Aditya Bharti",
  description:
    "Projects across enterprise software, mobile, AI, and blockchain — JMS jewelry ERP, V Help, Queez, Rooms.io, JARVIS, and QKD × GNN research.",
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        title="projects"
        subtitle="mobile · ai · blockchain"
      />

      <ProjectGrid />

      <Section>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <Github className="h-4 w-4" aria-hidden />
          more on github
        </a>
      </Section>
    </PageShell>
  )
}
