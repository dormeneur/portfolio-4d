"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

const projects = [
    {
        title: "V Help",
        tagline: "College Services & Student Utility App",
        status: "Ongoing",
        statusColor: "bg-green-500",
        image: "https://nnhjafkmeqnvhfy5.public.blob.vercel-storage.com/vhelp.png",
        github: "https://github.com/dormeneur/VHELP",
        description:
            "A unified college services app for academics, food, and repairs, serving 1100+ daily active users at VIT Chennai.",
        problem:
            "Students faced fragmented digital services across campus, leading to inefficient processes for food ordering, hostel management, and academic tasks.",
        approach:
            "Developed a unified Flutter application with Firebase backend, implementing real-time synchronization, secure authentication, and scalable cloud architecture.",
        outcome:
            "Successfully onboarded 1100+ active users, reduced service request processing time by 75%, and improved student satisfaction.",
        tech: ["Flutter", "Firebase", "Real-time DB", "Push Notifications", "Cloud Functions"],
        highlight: "Campus-Scale Platform",
        highlightColor: "text-green-500",
    },
    {
        title: "Queez",
        tagline: "AI-Powered Learning & Live Quiz Platform",
        status: "Completed",
        statusColor: "bg-yellow-500",
        image: "/queez.png",
        github: "https://github.com/ChauhanKrish4763/Queez",
        description:
            "A real-time, cross-platform learning app with WebSocket-powered live multiplayer leaderboards and AI-generated study content. Contributed to this project as a team member.",
        problem:
            "Traditional learning apps lacked real-time engagement and personalized AI-driven content generation.",
        approach:
            "Built a Flutter app with WebSocket integration for live multiplayer quizzes, AI-generated flashcards, and adaptive learning paths.",
        outcome:
            "Won 2nd place at Hack-N-Droid 2025 hackathon, built within 24 hours.",
        tech: ["Flutter", "WebSockets", "AI/ML", "Firebase"],
        highlight: "🏆 Hackathon Runner-Up",
        highlightColor: "text-yellow-500",
    },
    {
        title: "JunkWunk",
        tagline: "Rag Picker & Seller Marketplace",
        status: "Completed",
        statusColor: "bg-blue-500",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junkwunk.jpg-rW6FCY4ZVQRZLvEqOk5uqatwrNv8px.jpeg",
        github: "https://github.com/dormeneur/JUNKWUNK",
        description:
            "An innovative marketplace bridging rag pickers and sellers, enabling efficient and transparent trading of recyclable, non-recyclable, and donation materials.",
        problem:
            "Rag pickers lacked a structured platform to connect with sellers, leading to inefficient sourcing and unfair pricing in the recycling ecosystem.",
        approach:
            "Built a cross-platform Flutter app with AWS backend and Firebase Firestore for real-time data. Features secure Google auth, seamless buyer-seller interaction, and upcoming AI-powered image tagging.",
        outcome:
            "Deployed across Android, iOS, Web, Windows, and MacOS. Created an efficient, transparent marketplace benefiting both rag pickers and material sellers.",
        tech: ["Flutter", "AWS", "Firebase", "Google Auth", "Cross-Platform"],
        highlight: "AWS-Powered Platform",
        highlightColor: "text-blue-500",
    },
    {
        title: "Cyber Gallery & NFT",
        tagline: "Decentralized Art Gallery on Ethereum",
        status: "Completed",
        statusColor: "bg-purple-500",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artgallery-tQ83hZzW8RJD87WSbUVpx8ouURkFYd.png",
        live: "https://art-gallery-iota-one.vercel.app/",
        description:
            "A full-stack decentralized Web3 application on Ethereum Sepolia for minting digital art as ERC-721 NFTs.",
        problem:
            "Artists needed a decentralized platform to mint and showcase digital art as NFTs with seamless blockchain integration.",
        approach:
            "Built with Solidity smart contracts, IPFS storage via Pinata, MetaMask integration, and cyberpunk-themed frontend.",
        outcome:
            "Successfully deployed on Ethereum Sepolia with OpenSea integration and functional NFT minting capabilities.",
        tech: ["Solidity", "Node.js", "JavaScript", "IPFS", "MetaMask", "Ethereum"],
        highlight: "Web3 Platform",
        highlightColor: "text-purple-500",
    },
    {
        title: "Deepfake Detection",
        tagline: "Using Gait Analysis & Machine Learning",
        status: "Research",
        statusColor: "bg-orange-500",
        description:
            "A machine learning pipeline for deepfake detection using biometric gait patterns instead of face-based cues.",
        problem:
            "Existing deepfake detection relied heavily on facial features which can be easily manipulated.",
        approach:
            "Developed temporal gait features capturing walking rhythm and joint motion patterns using CNN-based computer vision.",
        outcome:
            "Achieved improved robustness against manipulated videos by focusing on full-body movement patterns.",
        tech: ["Python", "PyTorch", "OpenCV", "CNN", "Computer Vision"],
        highlight: "AI Research Project",
        highlightColor: "text-orange-500",
    },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <AnimatedSection animation="slide-up" delay={index * 100}>
            <Card className="glass-card border-0 overflow-hidden group interactive-card">
                <CardContent className="p-0">
                    {/* Image Section */}
                    {project.image && (
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                            {/* Status Badge */}
                            <Badge className={`absolute top-4 right-4 ${project.statusColor} text-white border-0`}>
                                {project.status}
                            </Badge>

                            {/* Links */}
                            <div className="absolute top-4 left-4 flex gap-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                                    >
                                        <Github className="h-4 w-4" />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                        {/* Title */}
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-primary font-medium mb-3">{project.tagline}</p>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                        {/* Expandable Details */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="space-y-4 pt-4 border-t border-border/50">
                                {/* Problem */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        <span className="text-sm font-semibold text-red-500">Problem</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground pl-4">{project.problem}</p>
                                </div>

                                {/* Approach */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                                        <span className="text-sm font-semibold text-blue-500">Approach</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground pl-4">{project.approach}</p>
                                </div>

                                {/* Outcome */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span className="text-sm font-semibold text-green-500">Outcome</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground pl-4">{project.outcome}</p>
                                </div>
                            </div>
                        </div>

                        {/* Expand Button */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="w-full mt-4 gap-2"
                        >
                            {isExpanded ? (
                                <>
                                    <ChevronUp className="h-4 w-4" />
                                    Show Less
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="h-4 w-4" />
                                    Show Details
                                </>
                            )}
                        </Button>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {/* Highlight */}
                        <div className="mt-4 pt-4 border-t border-border/50">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${project.statusColor}`} />
                                <span className={`text-xs font-medium ${project.highlightColor}`}>
                                    {project.highlight}
                                </span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </AnimatedSection>
    )
}

export default function ProjectsPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects showcasing my skills in mobile development, AI, and blockchain.
                    </p>
                </AnimatedSection>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* More on GitHub */}
                <AnimatedSection className="mt-16 text-center" delay={500}>
                    <a
                        href="https://github.com/dormeneur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" variant="outline" className="gap-2 glass">
                            <Github className="h-5 w-5" />
                            View More on GitHub
                        </Button>
                    </a>
                </AnimatedSection>
            </div>
        </div>
    )
}
