import type { StaticImageData } from "next/image"
import vhelp from "@/assets/vhelp.png"
import queez from "@/assets/queez.png"
import junkwunk from "@/assets/junkwunk.jpg"
import artgallery from "@/assets/artgallery.jpg"
import jms from "@/assets/jms.jpg"
import jarvis from "@/assets/jarvis.png"
import deepfake from "@/assets/deepfake.jpg"

export type Project = {
  title: string
  tagline: string
  status: string
  image?: StaticImageData
  github?: string
  live?: string
  tech: string[]
  tags: Tag[]
}

// filter chips on /projects — keep this list short
export const TAGS = ["mobile", "ai/ml", "backend", "blockchain", "research"] as const
export type Tag = (typeof TAGS)[number]

export const projects: Project[] = [
  {
    title: "jms",
    image: jms,
    tagline: "jewelry manufacturing erp + crm",
    status: "ongoing",
    tech: ["fastapi", "postgresql", "flutter", "docker"],
    tags: ["mobile", "backend"],
  },
  {
    title: "v help",
    tagline: "college services & student utility app",
    status: "ongoing",
    image: vhelp,
    live: "https://app.vhelpcc.com",
    tech: ["flutter", "firebase", "real-time db", "cloud functions"],
    tags: ["mobile", "backend"],
  },
  {
    title: "queez",
    tagline: "ai-powered learning & live quiz platform",
    status: "runner-up",
    image: queez,
    github: "https://github.com/dormeneur/Queez",
    tech: ["flutter", "websockets", "ai/ml", "firebase"],
    tags: ["mobile", "ai/ml"],
  },
  {
    title: "rooms.io",
    tagline: "hotel booking & management app",
    status: "completed",
    tech: ["flutter", "firebase"],
    tags: ["mobile"],
  },
  {
    title: "junkwunk",
    tagline: "rag picker & seller marketplace",
    status: "completed",
    image: junkwunk,
    github: "https://github.com/dormeneur/JUNKWUNK",
    tech: ["flutter", "aws", "firebase", "google auth"],
    tags: ["mobile", "backend"],
  },
  {
    title: "jarvis",
    image: jarvis,
    tagline: "offline ai second brain, synced to your phone",
    status: "ongoing",
    github: "https://github.com/dormeneur/JARVIS",
    tech: ["ollama", "tailscale", "python"],
    tags: ["ai/ml"],
  },
  {
    title: "cyber gallery & nft",
    tagline: "decentralized art gallery on ethereum",
    status: "completed",
    image: artgallery,
    github: "https://github.com/dormeneur/ART-GALLERY",
    live: "https://art-gallery-iota-one.vercel.app/",
    tech: ["solidity", "node.js", "ipfs", "metamask"],
    tags: ["blockchain"],
  },
  {
    title: "deepfake detection",
    image: deepfake,
    tagline: "gait analysis & machine learning",
    status: "research",
    github: "https://github.com/dormeneur/DeepFake-Detection-Gait-Analysis",
    tech: ["python", "pytorch", "opencv", "cnn"],
    tags: ["ai/ml", "research"],
  },
  {
    title: "qkd × gnn",
    tagline: "optimizing quantum key distribution with graph neural networks",
    status: "research",
    github: "https://github.com/dormeneur/QKD_Optimisation_GNN_fork",
    tech: ["python", "pytorch", "gnn", "quantum"],
    tags: ["ai/ml", "research"],
  },
]
