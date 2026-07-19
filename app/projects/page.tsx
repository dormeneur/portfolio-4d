import type { Metadata } from "next"
import Image from "next/image"
import { PageShell, PageHeader, Section } from "@/components/page-shell"
import { GITHUB_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Projects | Aditya Bharti",
  description:
    "Projects across enterprise software, mobile, AI, and blockchain — JMS jewelry ERP, V Help, Queez, Rooms.io, JARVIS, and QKD × GNN research.",
}

type Project = {
  title: string
  tagline: string
  status: string
  image?: string
  github?: string
  live?: string
  description: string
  problem: string
  approach: string
  outcome: string
  tech: string[]
}

const projects: Project[] = [
  {
    title: "jms",
    tagline: "jewelry manufacturing erp + crm",
    status: "ongoing",
    description:
      "An ERP + CRM enterprise system for Sparkling Gems Co. Ltd. (Bangkok) covering the full jewelry manufacturing pipeline — inventory, orders, production, and customers.",
    problem:
      "The company ran manufacturing on a legacy system with no formal specs, making orders, production, and inventory hard to track or audit.",
    approach:
      "Reverse-engineered the legacy business logic into formal specs, then rebuilt every module on FastAPI + PostgreSQL with JWT auth, granular RBAC, and a financial-grade audit trail, plus a Flutter multi-device frontend.",
    outcome:
      "Dockerized one-command deployment, AI voice-driven invoice/quotation creation, and a salesman mobile app with QR scanning and image-recognition entry.",
    tech: ["fastapi", "postgresql", "flutter", "docker"],
  },
  {
    title: "v help",
    tagline: "college services & student utility app",
    status: "ongoing",
    image: "https://nnhjafkmeqnvhfy5.public.blob.vercel-storage.com/vhelp.png",
    github: "https://github.com/dormeneur/VHELP",
    description:
      "A unified college services app for academics, food, and repairs, serving 1260+ daily active users at VIT Chennai.",
    problem:
      "Students faced fragmented digital services across campus — food ordering, hostel management, and academic tasks all lived in different places.",
    approach:
      "A single Flutter app on a Firebase backend with real-time sync, secure auth, and a scalable cloud architecture.",
    outcome: "Onboarded 1260+ active users and cut service-request processing time by ~75%.",
    tech: ["flutter", "firebase", "real-time db", "cloud functions"],
  },
  {
    title: "queez",
    tagline: "ai-powered learning & live quiz platform",
    status: "runner-up 🏆",
    image: "/queez.png",
    github: "https://github.com/dormeneur/Queez",
    description:
      "A real-time, cross-platform learning app with WebSocket-powered live multiplayer leaderboards and AI-generated study content. Built as a team.",
    problem: "Traditional learning apps lacked real-time engagement and AI-driven content.",
    approach:
      "A Flutter app with WebSocket live quizzes, AI-generated flashcards, and adaptive learning paths.",
    outcome: "2nd place at Hack-N-Droid 2025, built in 24 hours.",
    tech: ["flutter", "websockets", "ai/ml", "firebase"],
  },
  {
    title: "rooms.io",
    tagline: "hotel booking & management app",
    status: "completed",
    description:
      "A mobile app that lets hotels manage bookings, room availability, and guests from a single place.",
    problem:
      "Smaller hotels juggle bookings and room availability across spreadsheets and phone calls.",
    approach:
      "A cross-platform Flutter app with real-time booking, room management, and guest tracking on a Firebase backend.",
    outcome: "One app for hotels to manage availability and reservations in real time.",
    tech: ["flutter", "firebase"],
  },
  {
    title: "junkwunk",
    tagline: "rag picker & seller marketplace",
    status: "completed",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junkwunk.jpg-rW6FCY4ZVQRZLvEqOk5uqatwrNv8px.jpeg",
    github: "https://github.com/dormeneur/JUNKWUNK",
    description:
      "A marketplace bridging rag pickers and sellers for transparent trading of recyclable, non-recyclable, and donation materials.",
    problem:
      "Rag pickers had no structured way to connect with sellers, leading to inefficient sourcing and unfair pricing.",
    approach:
      "A cross-platform Flutter app on AWS + Firebase Firestore with Google auth and real-time buyer-seller interaction.",
    outcome: "Shipped across Android, iOS, Web, Windows, and macOS.",
    tech: ["flutter", "aws", "firebase", "google auth"],
  },
  {
    title: "jarvis",
    tagline: "offline ai second brain, synced to your phone",
    status: "ongoing",
    github: "https://github.com/dormeneur/JARVIS",
    description:
      "A local, offline-first AI ‘second brain’ that stores my personal knowledge and syncs git-style between laptop and phone — all processing stays on my own hardware.",
    problem:
      "Cloud AI assistants mean handing personal data to third parties and losing access offline.",
    approach:
      "Runs inference locally through Ollama on my laptop, keeps a git-like store synced to my phone, and uses Tailscale to open a secure private connection between the two.",
    outcome:
      "A private assistant that keeps my data on my own machines while staying reachable from my phone.",
    tech: ["ollama", "tailscale", "python"],
  },
  {
    title: "cyber gallery & nft",
    tagline: "decentralized art gallery on ethereum",
    status: "completed",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artgallery-tQ83hZzW8RJD87WSbUVpx8ouURkFYd.png",
    github: "https://github.com/dormeneur/ART-GALLERY",
    live: "https://art-gallery-iota-one.vercel.app/",
    description: "A full-stack Web3 app on Ethereum Sepolia for minting digital art as ERC-721 NFTs.",
    problem: "Artists needed a decentralized way to mint and showcase digital art as NFTs.",
    approach:
      "Solidity smart contracts, IPFS storage via Pinata, MetaMask integration, and a cyberpunk frontend.",
    outcome: "Deployed on Sepolia with OpenSea integration and working NFT minting.",
    tech: ["solidity", "node.js", "ipfs", "metamask"],
  },
  {
    title: "deepfake detection",
    tagline: "gait analysis & machine learning",
    status: "research",
    github: "https://github.com/dormeneur/DeepFake-Detection-Gait-Analysis",
    description:
      "An ML pipeline for deepfake detection using biometric gait patterns instead of face-based cues.",
    problem: "Existing detection leaned on facial features, which are easy to manipulate.",
    approach:
      "Temporal gait features capturing walking rhythm and joint motion via CNN-based computer vision.",
    outcome: "More robust against manipulated video by focusing on full-body movement.",
    tech: ["python", "pytorch", "opencv", "cnn"],
  },
  {
    title: "qkd × gnn",
    tagline: "optimizing quantum key distribution with graph neural networks",
    status: "research",
    github: "https://github.com/dormeneur/QKD_Optimisation_GNN_fork",
    description:
      "A method and system for optimizing Quantum Key Distribution (QKD) networks using Graph Neural Networks.",
    problem: "QKD networks are hard to route and scale efficiently as topology and key demand shift.",
    approach:
      "Models the QKD network as a graph and trains a Graph Neural Network to optimize key-distribution routing and resource allocation.",
    outcome: "Topology-aware distribution strategies that improve overall network efficiency.",
    tech: ["python", "pytorch", "gnn", "quantum"],
  },
]

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        title="projects"
        accent="built to be used, not just demoed."
        subtitle="mobile · ai · blockchain"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-4">
        {projects.map((p, i) => {
          const link = p.github ?? p.live
          return (
            <article key={p.title} className="tile tile-hover group overflow-hidden flex flex-col">
              {p.image && (
                <div className="relative h-44 overflow-hidden border-b border-border/40">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    priority={i < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur px-3 py-1 font-mono text-xs text-foreground border border-border/60">
                    {p.status}
                  </span>
                </div>
              )}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-semibold text-lg text-foreground hover:text-primary transition-colors"
                    >
                      {p.title} <span className="text-primary/60">↗</span>
                    </a>
                  ) : (
                    <span className="font-display font-semibold text-lg text-foreground">
                      {p.title}
                    </span>
                  )}
                  {!p.image && (
                    <span className="font-mono text-xs text-muted-foreground/70">{p.status}</span>
                  )}
                </div>
                <p className="font-serif italic text-primary/80">{p.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <details className="group/details">
                  <summary className="font-mono text-xs text-muted-foreground/70 hover:text-foreground cursor-pointer select-none list-none marker:content-none">
                    <span className="group-open/details:hidden">+ the full story</span>
                    <span className="hidden group-open/details:inline">– less</span>
                  </summary>
                  <dl className="mt-3 space-y-2 text-sm">
                    {(["problem", "approach", "outcome"] as const).map((k) => (
                      <div key={k} className="flex gap-3">
                        <dt className="font-mono text-xs text-primary/70 w-20 shrink-0 pt-0.5">
                          {k}
                        </dt>
                        <dd className="text-muted-foreground leading-relaxed">{p[k]}</dd>
                      </div>
                    ))}
                  </dl>
                </details>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <Section>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          more on github →
        </a>
      </Section>
    </PageShell>
  )
}
