import type { Metadata } from "next"
import Image from "next/image"
import aditya from "@/assets/aditya.jpeg"
import vitLogo from "@/assets/vit_logo.png"
import sisLogo from "@/assets/sis_logo.jpg"
import { Instagram } from "lucide-react"
import { INSTAGRAM_URL } from "@/lib/constants"
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
    items: [
      "Flutter",
      "FastAPI",
      "Firebase",
      "Git",
      "Docker",
      "AWS",
      "Figma",
      "Linux",
      "Postman",
      "Claude Code",
    ],
  },
  {
    label: "systems",
    num: "d",
    items: [
      "Modular Design",
      "Real-time Processing",
      "API Development",
      "Database Design",
      "Automation Pipelines",
      "Secure Data Handling",
    ],
  },
  {
    label: "embedded",
    num: "e",
    items: ["Arduino", "Raspberry Pi", "ESP-32", "Embedded C"],
  },
]

const education = [
  {
    logo: vitLogo,
    school: "vit chennai",
    detail: "b.tech, computer science & engineering",
    meta: "2023–2027 · cgpa 8.61",
  },
  {
    logo: sisLogo,
    school: "surmount international school",
    detail: "higher secondary — science with mathematics",
    meta: "2021–2022 · 91%",
  },
]

const interests = [
  { name: "calisthenics", note: "doing handstands since i was a kid" },
  { name: "building products", note: "software people actually use" },
]

const languages = [
  { name: "english", level: "fluent" },
  { name: "hindi", level: "fluent" },
  { name: "thai", level: "conversational" },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader title="about" />

      <section className="pb-12 grid sm:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="tile overflow-hidden w-48 sm:w-64 mx-auto sm:mx-0">
          <Image
            src={aditya}
            alt="Aditya Bharti"
            className="h-auto w-full"
          />
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            i&apos;m aditya, a computer science student at vit chennai. i design and ship
            production software across mobile, backend and applied ai, from a campus app used by
            1,260+ students every day to an erp and crm i built end to end for a manufacturing
            company.
          </p>
          <p>
            i also do research: a deepfake detection pipeline based on gait analysis, and a
            graph neural network approach to quantum key distribution routing. i like problems
            where the system has to be correct, not just impressive.
          </p>
          <p>
            outside of code i train calisthenics. handstands have been my thing since i was a kid.
          </p>
        </div>
      </section>

      <Section label="education" num="01">
        <div className="grid sm:grid-cols-2 gap-4">
          {education.map((e) => (
            <div key={e.school} className="tile tile-hover p-5 flex items-center justify-between gap-5">
              <div>
                <p className="font-display font-semibold text-foreground">{e.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                <p className="mt-2 font-mono text-xs text-muted-foreground/70">{e.meta}</p>
              </div>
              <Image
                src={e.logo}
                alt=""
                className="h-[5.5rem] w-auto shrink-0 rounded-sm bg-white"
              />
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
        </div>
      </Section>

      <Section label="interests" num="03">
        <div className="grid sm:grid-cols-2 gap-4">
          {interests.map((i) => (
            <div key={i.name} className="tile tile-hover p-5">
              <p className="font-display font-semibold text-foreground">{i.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{i.note}</p>
            </div>
          ))}
        </div>
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn mt-6">
          <Instagram className="h-4 w-4" aria-hidden />
          see what i&apos;m up to on instagram
        </a>
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
