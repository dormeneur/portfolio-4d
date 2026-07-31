import type { Metadata } from "next"
import Image from "next/image"
import { PageShell, PageHeader, Section, SectionLabel } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "About & Skills | Aditya Bharti",
  description:
    "Thai national raised in India, final-year CS student at VIT Chennai — plus the full toolbox: Python, Flutter, PyTorch, FastAPI, and more.",
}

const skillGroups = [
  {
    label: "languages",
    num: "a",
    items: ["Python", "Dart", "JavaScript", "Java", "C/C++", "Solidity", "R"],
  },
  {
    label: "ai / ml",
    num: "b",
    items: ["PyTorch", "OpenCV", "CNNs / Computer Vision", "RAG Systems", "Vector DBs", "LangChain"],
  },
  {
    label: "frameworks & tools",
    num: "c",
    items: ["Flutter", "FastAPI", "Firebase", "Git", "Docker", "AWS", "Figma", "Linux", "Postman"],
  },
  {
    label: "systems",
    num: "d",
    items: ["Modular Design", "Real-time Processing", "API Development", "Database Design"],
  },
  {
    label: "embedded",
    num: "e",
    items: ["Arduino", "Raspberry Pi", "Embedded C"],
  },
]

const focus = [
  "mobile & cross-platform apps",
  "ai/ml systems",
  "blockchain, web3 & smart contracts",
  "backend & apis",
  "computer vision",
  "rag & vector search",
]

const education = [
  {
    school: "vit chennai",
    detail: "b.tech, computer science & engineering",
    meta: "2023–2027 · cgpa 8.61",
  },
  {
    school: "surmount international school",
    detail: "higher secondary — science with mathematics",
    meta: "2021–2022 · 91%",
  },
]

const interests = [
  "rag apis & databases",
  "ai automation & robotics",
  "blockchain & web3",
  "open source & linux",
  "full stack",
]

const languages = [
  { name: "english", level: "fluent" },
  { name: "hindi", level: "fluent" },
  { name: "thai", level: "conversational" },
]

const quickFacts = [
  { k: "education", v: "b.tech cse, vit chennai · 2023–2027" },
  { k: "based in", v: "chennai, india · open to relocation" },
  { k: "work rights", v: "india & thailand · thai national (oci)" },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        title="about"
        accent="two countries, one keyboard."
        subtitle="thai national, raised in india"
      />

      <section className="pb-12 grid sm:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="tile overflow-hidden w-40 sm:w-48 mx-auto sm:mx-0">
          <Image
            src="/profile.png"
            alt="Aditya Bharti"
            width={192}
            height={192}
            className="object-cover aspect-square"
          />
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            born in thailand and educated in india, i&apos;m a final-year computer science
            undergraduate at vit chennai. my work spans mobile applications, backend systems, and
            applied ai — engineered for production, not just demos.
          </p>
          <p>
            i&apos;ve shipped software used daily by over a thousand people, built enterprise
            systems solo, and contributed to research in computer vision and quantum networking.
            i care about the details that make software dependable.
          </p>
          <dl className="pt-2 border-t border-border/40">
            {quickFacts.map((f) => (
              <div key={f.k} className="flex gap-4 py-2 border-b border-border/40 text-sm">
                <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60 w-28 shrink-0 pt-0.5">
                  {f.k}
                </dt>
                <dd className="text-foreground/90">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section label="education" num="01">
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((e) => (
            <div key={e.school} className="tile tile-hover p-5">
              <p className="font-display font-semibold text-foreground">{e.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground/70">{e.meta}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="skills" num="02" id="skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g) => (
            <div key={g.label} className="tile tile-hover p-5">
              <SectionLabel num={g.num}>{g.label}</SectionLabel>
              <div className="flex flex-wrap gap-1.5 -mt-2">
                {g.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="tile p-5 border-primary/30 bg-primary/5">
            <SectionLabel num="⌁">current focus</SectionLabel>
            <p className="-mt-2 font-serif italic text-lg text-foreground leading-relaxed">
              {focus.join(" · ")}
            </p>
          </div>
        </div>
      </Section>

      <Section label="interests" num="03">
        <div className="flex flex-wrap gap-1.5">
          {interests.map((i) => (
            <span key={i} className="chip">
              {i}
            </span>
          ))}
        </div>
      </Section>

      <Section label="languages" num="04">
        <ul className="space-y-1 font-mono text-sm">
          {languages.map((l) => (
            <li key={l.name} className="flex gap-3">
              <span className="text-foreground w-24">{l.name}</span>
              <span className="text-muted-foreground">{l.level}</span>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  )
}
