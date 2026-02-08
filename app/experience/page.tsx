"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Building2, ChevronRight } from "lucide-react"

const experiences = [
    {
        title: "Software Development Engineer Intern",
        company: "Integra Global Solutions",
        location: "Chennai, India",
        period: "Dec 2025 – Jan 2026",
        type: "Internship",
        description: [
            "Worked on real-world software development tasks, following structured reporting and professional development workflows.",
            "Collaborated with team members to maintain code quality, meet delivery timelines, and adapt to industry-standard software engineering practices.",
        ],
        image: "/bpo.jpeg",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Quality Assurance Tester Intern",
        company: "RingZero Networks Co., Ltd.",
        location: "Bangkok, Thailand",
        period: "Jun 2025 – Jul 2025",
        type: "Internship",
        description: [
            "Performed regression testing on Stitch (Apple's Game of the Year 2023) and Puffies (Apple's Game of the Year 2024), covering functionality, UI/UX, gameplay mechanics, and platform compatibility across iPhone, iPad, Mac, and Apple TV.",
            "Built an AI-powered, RAG-based POS Assistant FastAPI service, applying vector similarity search and Star Schema modeling for natural language querying of real-time sales data.",
        ],
        image: "https://nnhjafkmeqnvhfy5.public.blob.vercel-storage.com/qat.jpg",
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Blockchain Developer",
        company: "Google Developer Group (VIT Campus)",
        location: "Chennai, India",
        period: "Oct 2024 – Sep 2025",
        type: "Club Role",
        description: [
            "Contributing to blockchain projects and community initiatives with the GDG VIT team, focusing on decentralized applications and smart contract development.",
            "Organizing workshops and hackathons to promote blockchain technology adoption among students and developers.",
        ],
        image: "https://nnhjafkmeqnvhfy5.public.blob.vercel-storage.com/gdg.jpg",
        color: "from-green-500 to-emerald-500",
    },
]

export default function ExperiencePage() {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Experience</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Internships, roles, and impactful contributions across tech.
                    </p>
                </AnimatedSection>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden md:block" />

                    {/* Experience cards */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <AnimatedSection
                                key={exp.title}
                                animation="slide-up"
                                delay={index * 150}
                            >
                                <div className="relative md:ml-16">
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[4.5rem] top-8 hidden md:flex items-center justify-center">
                                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-background`} />
                                    </div>

                                    <Card className="glass-card border-0 overflow-hidden group interactive-card">
                                        {/* Gradient accent */}
                                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`} />

                                        <CardContent className="p-0">
                                            <div className="flex flex-col lg:flex-row">
                                                {/* Content */}
                                                <div className="flex-1 p-6">
                                                    {/* Badge */}
                                                    <Badge className={`mb-3 bg-gradient-to-r ${exp.color} text-white border-0`}>
                                                        {exp.type}
                                                    </Badge>

                                                    {/* Title & Company */}
                                                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                                    <div className="flex items-center gap-2 text-primary font-medium mb-3">
                                                        <Building2 className="h-4 w-4" />
                                                        {exp.company}
                                                    </div>

                                                    {/* Meta */}
                                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            {exp.period}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-4 w-4" />
                                                            {exp.location}
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <div className="space-y-2">
                                                        {exp.description.map((desc, i) => (
                                                            <div key={i} className="flex gap-2 text-muted-foreground">
                                                                <ChevronRight className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                                                                <p className="text-sm leading-relaxed">{desc}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Image */}
                                                <div className="lg:w-64 h-48 lg:h-auto relative overflow-hidden">
                                                    <Image
                                                        src={exp.image}
                                                        alt={exp.company}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Additional note */}
                <AnimatedSection className="mt-16 text-center" delay={600}>
                    <Card className="glass-card border-0 inline-block">
                        <CardContent className="p-6">
                            <p className="text-muted-foreground">
                                🎯 Actively seeking <span className="text-foreground font-medium">internship opportunities</span> in
                                software development, AI/ML, and blockchain.
                            </p>
                        </CardContent>
                    </Card>
                </AnimatedSection>
            </div>
        </div>
    )
}
