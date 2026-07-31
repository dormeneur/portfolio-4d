import type { Metadata } from "next"
import Image from "next/image"
import { PageShell, PageHeader, Section } from "@/components/page-shell"
import { ResumePicker } from "@/components/resume-picker"

const experiences = [
  {
    title: "software development engineer — enterprise systems",
    company: "Sparkling Gems Co., Ltd.",
    location: "Bangkok, Thailand",
    period: "may 2026 – jul 2026",
    type: "summer role",
    description: [
      "Sole engineer for a custom ERP + CRM (Jewelry Management System) — reverse-engineered the legacy platform's business logic into formal specs, then built every module.",
      "FastAPI + PostgreSQL with JWT auth, granular RBAC, and a financial-grade audit trail; Flutter multi-device frontend; Dockerized one-command deployment.",
      "Added local AI voice-driven invoice/quotation creation and designed a salesman mobile app with QR scanning and image-recognition entries feeding the CRM.",
    ],
  },
  {
    title: "software development engineer intern",
    company: "Integra Global Solutions",
    location: "Chennai, India",
    period: "dec 2025 – feb 2026",
    type: "internship",
    image: "/bpo.jpeg",
    description: [
      "Worked on real-world software development tasks, following structured reporting and professional development workflows.",
      "Collaborated with the team to maintain code quality, meet delivery timelines, and adapt to industry-standard engineering practices.",
    ],
  },
  {
    title: "app development intern — system design",
    company: "Cestrum Technologies Pvt. Ltd.",
    location: "Chennai, India",
    period: "oct 2025 – apr 2026",
    type: "internship",
    description: [
      "Worked with the core team on HLD and LLD for a multi-restaurant aggregation platform, translating product requirements into a scalable service and data architecture.",
      "Drove key architecture and concurrency decisions by applying production experience from V Help, guiding how the platform onboarded and unified multiple restaurant vendors under one system.",
    ],
  },
  {
    title: "quality assurance tester intern",
    company: "RingZero Networks Co., Ltd.",
    location: "Bangkok, Thailand",
    period: "jun 2025 – jul 2025",
    type: "internship",
    image: "https://nnhjafkmeqnvhfy5.public.blob.vercel-storage.com/qat.jpg",
    description: [
      "Ran regression testing on Stitch (Apple GOTY 2023) and Puffies (Apple GOTY 2024) across iPhone, iPad, Mac, and Apple TV.",
      "Built an AI-powered, RAG-based POS Assistant FastAPI service using vector similarity search and Star Schema modeling for natural-language querying of real-time sales data.",
    ],
  },
  {
    title: "blockchain developer",
    company: "Google Developer Group (VIT Campus)",
    location: "Chennai, India",
    period: "oct 2024 – sep 2025",
    type: "club role",
    image: "https://nnhjafkmeqnvhfy5.public.blob.vercel-storage.com/gdg.jpg",
    description: [
      "Contributed to decentralized apps and smart-contract development with the GDG VIT team.",
      "Organized workshops and hackathons to promote blockchain adoption among students.",
    ],
  },
]

export const metadata: Metadata = {
  title: "Work & Resume | Aditya Bharti",
  description:
    "Roles across enterprise software, development, system design, QA, and blockchain — Sparkling Gems, Integra Global Solutions, Cestrum Technologies, RingZero Networks, and GDG VIT — plus downloadable resume.",
}

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader
        title="work"
        accent="shipped in the real world."
        subtitle="roles · internships · resume"
      />

      <div className="relative border-l-2 border-border/40 ml-1.5 pl-8 space-y-8 pb-4">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            {/* timeline dot */}
            <span
              className="absolute -left-[2.45rem] top-6 h-3 w-3 rounded-full bg-primary ring-4 ring-background"
              aria-hidden
            />
            <div className="tile tile-hover group overflow-hidden">
              <div className="flex flex-col-reverse sm:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h2 className="font-display font-semibold text-lg text-foreground">
                      {exp.title}
                    </h2>
                    <span className="font-mono text-xs text-muted-foreground/70 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-sm text-primary/80">
                    {exp.company} · {exp.location}
                  </p>
                  <span className="chip mt-3">{exp.type}</span>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((d, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="text-primary/50 select-none">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {exp.image && (
                  <div className="relative h-52 sm:h-auto sm:w-72 lg:w-96 shrink-0 border-b sm:border-b-0 sm:border-l border-border/60">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Section label="resume" num="01" id="resume">
        <p className="mb-6 font-serif italic text-lg text-muted-foreground">
          the same story, one page — pick your region.
        </p>
        <ResumePicker />
      </Section>

      <Section>
        <p className="text-sm text-muted-foreground">
          currently open to internships in software, ai/ml, and blockchain —{" "}
          <a href="/contact" className="link-underline text-foreground">
            let&apos;s talk
          </a>
          .
        </p>
      </Section>
    </PageShell>
  )
}
