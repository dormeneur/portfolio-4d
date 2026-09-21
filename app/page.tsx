import type { Metadata } from "next"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { ScrambleText } from "@/components/scramble-text"
import { PageShell, Section } from "@/components/page-shell"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { CopyEmail } from "@/components/copy-email"
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants"

export const metadata: Metadata = {
  description:
    "CS undergrad at VIT Chennai building things people actually use — Flutter, Firebase, AI, and blockchain.",
}

const featured = ["v help", "jarvis", "queez", "junkwunk"]
const work = featured.map((t) => projects.find((p) => p.title === t)!)

export default function HomePage() {
  return (
    <PageShell>
      {/* hero */}
      <section className="relative pt-24 sm:pt-32 pb-20">
        <div className="absolute inset-x-0 top-0 h-80 bg-dots -z-10" aria-hidden />

        <ScrambleText
          as="h1"
          text="Aditya Bharti"
          className="block font-display text-5xl sm:text-7xl font-bold tracking-tight cursor-default"
        />
        <div className="mt-8 max-w-xl space-y-4 text-muted-foreground leading-relaxed">
          <p>hey, you found my portfolio. glad you&apos;re here.</p>
          <p>
            looking to hire me? start with my{" "}
            <Link href="/experience" className="link-underline text-foreground">
              work
            </Link>{" "}
            and{" "}
            <Link href="/projects" className="link-underline text-foreground">
              projects
            </Link>
            , then grab the{" "}
            <Link href="/experience#resume" className="link-underline text-foreground">
              resume
            </Link>
            . just looking around? same pages, no rush. click whatever looks fun.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn">
            <Github className="h-4 w-4" aria-hidden />
            github
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn">
            <Linkedin className="h-4 w-4" aria-hidden />
            linkedin
          </a>
          <CopyEmail className="btn">
            <Mail className="h-4 w-4" aria-hidden />
            email
          </CopyEmail>
        </div>
      </section>

      {/* selected work */}
      <Section label="selected work" num="01">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {work.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
        <Link
          href="/projects"
          className="btn mt-8"
        >
          all projects
        </Link>
      </Section>
    </PageShell>
  )
}
