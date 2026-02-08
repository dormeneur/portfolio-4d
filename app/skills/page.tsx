"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
    Code,
    Brain,
    Server,
    Wrench,
    Cpu,
    Database,
    Smartphone,
    Globe,
    GitBranch,
    Cloud,
    Box,
    Palette,
    Terminal,
} from "lucide-react"

const skillCategories = [
    {
        title: "Programming Languages",
        icon: Code,
        color: "from-blue-500 to-cyan-500",
        skills: [
            { name: "Python", level: 90 },
            { name: "Dart/Flutter", level: 85 },
            { name: "JavaScript", level: 80 },
            { name: "Java", level: 75 },
            { name: "C/C++", level: 70 },
            { name: "Solidity", level: 65 },
            { name: "R", level: 50 },
        ],
    },
    {
        title: "AI / Machine Learning",
        icon: Brain,
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "PyTorch", level: 80 },
            { name: "OpenCV", level: 75 },
            { name: "CNN/Computer Vision", level: 70 },
            { name: "RAG Systems", level: 75 },
            { name: "Vector Databases", level: 70 },
            { name: "LangChain", level: 70 },
        ],
    },
    {
        title: "Frameworks & Tools",
        icon: Wrench,
        color: "from-green-500 to-emerald-500",
        skills: [
            { name: "Flutter", level: 90 },
            { name: "FastAPI", level: 80 },
            { name: "Firebase", level: 85 },
            { name: "Git", level: 85 },
            { name: "Docker", level: 70 },
            { name: "AWS", level: 65 },
        ],
    },
    {
        title: "Systems & Software",
        icon: Server,
        color: "from-orange-500 to-red-500",
        skills: [
            { name: "Modular System Design", level: 75 },
            { name: "Real-Time Processing", level: 70 },
            { name: "API Development", level: 80 },
            { name: "Database Design", level: 75 },
        ],
    },
    {
        title: "Embedded & Compute",
        icon: Cpu,
        color: "from-yellow-500 to-orange-500",
        skills: [
            { name: "Arduino", level: 75 },
            { name: "Raspberry Pi", level: 70 },
            { name: "Embedded C", level: 65 },
        ],
    },
]

const toolIcons = [
    { name: "Flutter", icon: Smartphone },
    { name: "Firebase", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "AWS", icon: Cloud },
    { name: "Docker", icon: Box },
    { name: "Figma", icon: Palette },
    { name: "Linux", icon: Terminal },
    { name: "Postman", icon: Globe },
]

export default function SkillsPage() {
    return (
        <div className="min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Technologies, frameworks, and tools I work with.
                    </p>
                </AnimatedSection>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, index) => (
                        <AnimatedSection key={category.title} animation="slide-up" delay={index * 100}>
                            <Card className="glass-card border-0 h-full overflow-hidden group">
                                {/* Gradient header */}
                                <div className={`h-1 bg-gradient-to-r ${category.color}`} />

                                <CardContent className="p-6">
                                    {/* Category header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`p-2 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                                            <category.icon className="h-5 w-5" />
                                        </div>
                                        <h2 className="font-semibold">{category.title}</h2>
                                    </div>

                                    {/* Skills with progress bars */}
                                    <div className="space-y-4">
                                        {category.skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span>{skill.name}</span>
                                                    <span className="text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                                                        style={{ width: `${skill.level}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Tools Section */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Tools I <span className="gradient-text">Use</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {toolIcons.map((tool, index) => (
                            <div
                                key={tool.name}
                                className="glass-card rounded-xl p-4 flex flex-col items-center gap-2 interactive-card min-w-[100px]"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <tool.icon className="h-8 w-8 text-primary" />
                                <span className="text-sm font-medium">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Summary Tags */}
                <AnimatedSection className="text-center">
                    <h2 className="text-2xl font-bold mb-6">
                        Areas of <span className="gradient-text">Expertise</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "Mobile App Development",
                            "AI/ML Systems",
                            "Blockchain & Web3",
                            "Backend Development",
                            "Database Design",
                            "API Development",
                            "Computer Vision",
                            "RAG & Vector Search",
                            "Cross-Platform Apps",
                            "Smart Contracts",
                        ].map((area) => (
                            <Badge
                                key={area}
                                variant="outline"
                                className="px-4 py-2 text-sm hover:bg-primary/10 transition-colors cursor-default"
                            >
                                {area}
                            </Badge>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    )
}
