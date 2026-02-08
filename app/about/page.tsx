"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    GraduationCap,
    MapPin,
    Globe,
    Heart,
    Code,
    Cpu,
    Link2,
    Laptop,
    Terminal,
    ArrowRight,
} from "lucide-react"

const interests = [
    { name: "RAG APIs & Databases", icon: Link2, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { name: "AI Automation & Robotics", icon: Cpu, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
    { name: "Blockchain & Web3", icon: Code, color: "text-green-500 bg-green-500/10 border-green-500/20" },
    { name: "Open Source & Linux", icon: Terminal, color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
    { name: "Full Stack Development", icon: Laptop, color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
]

const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Thai", level: "Conversational" },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Thai national raised in India, building technology that matters.
                    </p>
                </AnimatedSection>

                {/* Main Content */}
                <div className="grid lg:grid-cols-5 gap-8 mb-16">
                    {/* Profile Image */}
                    <AnimatedSection className="lg:col-span-2" animation="slide-right">
                        <div className="sticky top-24">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl" />
                                <div className="relative glass-card rounded-3xl p-4 overflow-hidden">
                                    <div className="aspect-square relative rounded-2xl overflow-hidden">
                                        <Image
                                            src="/profile.png"
                                            alt="Aditya Bharti"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Quick info cards */}
                            <div className="mt-10 space-y-3">
                                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">VIT Chennai</p>
                                        <p className="text-xs text-muted-foreground">B.Tech CSE, 2023-2027</p>
                                    </div>
                                </div>
                                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-green-500/10">
                                        <MapPin className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Based in Chennai</p>
                                        <p className="text-xs text-muted-foreground">Open to relocation</p>
                                    </div>
                                </div>
                                <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-blue-500/10">
                                        <Globe className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Thai National (OCI Holder)</p>
                                        <p className="text-xs text-muted-foreground">Authorized to work in India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Content */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Story */}
                        <AnimatedSection animation="slide-up">
                            <Card className="glass-card border-0">
                                <CardContent className="p-6 space-y-4">
                                    <h2 className="text-xl font-semibold flex items-center gap-2">
                                        <Heart className="h-5 w-5 text-pink-500" />
                                        Who I Am
                                    </h2>
                                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                                        <p>
                                            Born in Thailand, moved to India for education.
                                            Third-year Computer Science student at VIT Chennai with a focus on building practical, scalable solutions.
                                        </p>
                                        <p>
                                            As a Thai national with OCI status, I'm authorized to work in India and open to
                                            opportunities in both countries. I bring a cross-cultural perspective and a
                                            hands-on approach to software development.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        {/* Philosophy */}
                        <AnimatedSection animation="slide-up" delay={100}>
                            <Card className="glass-card border-0 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
                                <CardContent className="p-6 relative">
                                    <blockquote className="text-lg md:text-xl font-medium italic text-center">
                                        "Automation is the future."
                                    </blockquote>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        {/* Education */}
                        <AnimatedSection animation="slide-up" delay={400}>
                            <Card className="glass-card border-0">
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                        Education
                                    </h2>
                                    <div className="relative pl-6 border-l-2 border-primary/30 space-y-6">
                                        {/* VIT */}
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[19px]" />
                                            <div>
                                                <h3 className="font-semibold">Vellore Institute of Technology, Chennai</h3>
                                                <p className="text-muted-foreground">B.Tech — Computer Science and Engineering</p>
                                                <p className="text-sm text-muted-foreground mt-1">Aug 2023 - May 2027 | CGPA: 8.54/10</p>
                                                <div className="mt-3">
                                                    <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {["Data Structures & Algorithms", "Design and Analysis of Algorithms", "OOP", "Operating Systems", "Database Systems"].map((course) => (
                                                            <Badge key={course} variant="outline" className="text-xs">
                                                                {course}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Surmount */}
                                        <div className="relative">
                                            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-purple-500 -translate-x-[19px]" />
                                            <div>
                                                <h3 className="font-semibold">Surmount International School</h3>
                                                <p className="text-muted-foreground">Higher Secondary Education (Science with Mathematics)</p>
                                                <p className="text-sm text-muted-foreground mt-1">2021 - 2022 | Percentage: 91%</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>


                        {/* Interests */}
                        <AnimatedSection animation="slide-up" delay={200}>
                            <Card className="glass-card border-0">
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-semibold mb-4">Key Interests</h2>
                                    <div className="flex flex-wrap gap-3">
                                        {interests.map((interest) => (
                                            <div
                                                key={interest.name}
                                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all hover:scale-105 ${interest.color}`}
                                            >
                                                <interest.icon className="h-4 w-4" />
                                                <span className="text-sm font-medium">{interest.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        {/* Languages */}
                        <AnimatedSection animation="slide-up" delay={300}>
                            <Card className="glass-card border-0">
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-semibold mb-4">Languages</h2>
                                    <div className="grid grid-cols-3 gap-4">
                                        {languages.map((lang) => (
                                            <div key={lang.name} className="text-center p-4 rounded-xl bg-muted/50">
                                                <p className="font-medium">{lang.name}</p>
                                                <p className="text-sm text-muted-foreground">{lang.level}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                    </div>
                </div>

                {/* CTA Section */}
                <AnimatedSection className="text-center" delay={500}>
                    <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-3">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Interested in working together or just want to say hi?
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                                Get in Touch
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}
