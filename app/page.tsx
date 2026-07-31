import type { Metadata } from "next"
import Link from "next/link"
import { ScrambleText } from "@/components/scramble-text"
import { PageShell, Section } from "@/components/page-shell"
import { CopyEmail } from "@/components/copy-email"
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants"

export const metadata: Metadata = {
  description:
    "CS undergrad at VIT Chennai building things people actually use — Flutter, Firebase, AI, and blockchain.",
}

const stats = [
  { value: "1260+", label: "daily app users" },
  { value: "6+", label: "major projects" },
  { value: "2nd", label: "hackathon place" },
  { value: "8.61", label: "cgpa" },
]

const work = [
  {
    name: "v help",
    note: "campus services app serving 1260+ daily users at vit chennai",
    tech: ["flutter", "firebase"],
    href: "https://github.com/dormeneur/VHELP",
  },
  {
    name: "jarvis",
    note: "offline ai second brain, git-style synced laptop ↔ phone",
    tech: ["ollama", "tailscale"],
    href: "https://github.com/dormeneur/JARVIS",
  },
]

const elsewhere = [
  { label: "github", href: GITHUB_URL },
  { label: "linkedin", href: LINKEDIN_URL },
]

export default function HomePage() {
  return (
    <PageShell>
      {/* hero */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-x-0 top-0 h-80 bg-dots -z-10" aria-hidden />

        <ScrambleText
          as="h1"
          text="Aditya Bharti"
          className="block font-display text-5xl sm:text-7xl font-bold tracking-tight cursor-default"
        />
        <p className="mt-4 font-serif italic text-2xl sm:text-3xl text-primary/90">
          software that outlives the demo.
        </p>

        <div className="mt-8 max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
          <p>
            final-year cs undergrad at vit chennai, closing in on four years of turning caffeine
            and stubbornness into software. i build across the stack —{" "}
            <span className="text-foreground font-medium">mobile apps, backends, ai systems</span>,
            the occasional smart contract — with a habit of shipping things people actually use
            instead of things that just demo well.
          </p>
          <p>
            most of what i make ends up in real hands — students, small teams, the odd hackathon
            judge who wasn&apos;t expecting it to work. the rest of the time i&apos;m probably
            taking something apart to see why it did.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
          {elsewhere.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
          <CopyEmail className="link-underline text-muted-foreground hover:text-foreground transition-colors">
            email
          </CopyEmail>
          <Link
            href="/contact"
            className="rounded-full border border-primary/50 px-4 py-1.5 text-primary hover:bg-primary/10 transition-colors"
          >
            let&apos;s talk
          </Link>
        </div>
      </section>

      {/* stats */}
      <section className="pb-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="tile p-4 text-center">
            <p className="font-display text-2xl sm:text-3xl font-bold text-foreground">{s.value}</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* selected work */}
      <Section label="selected work" num="01">
        <div className="grid sm:grid-cols-2 gap-4">
          {work.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="tile tile-hover group p-5 flex flex-col gap-3"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.name}
                </span>
                <span className="text-primary/60 group-hover:text-primary transition-colors">↗</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.note}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <Link
          href="/projects"
          className="link-underline inline-block mt-8 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          all projects →
        </Link>
      </Section>
    </PageShell>
  )
}
