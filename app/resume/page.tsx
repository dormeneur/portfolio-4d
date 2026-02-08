"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Download,
    Check,
    FileText,
    Globe,
    Cpu,
    HardDrive,
} from "lucide-react"
import { cn } from "@/lib/utils"

const resumeOptions = [
    {
        id: "india",
        flag: "🇮🇳",
        country: "India",
        label: "IN Edition",
        description: "Optimized for Indian market opportunities",
        features: ["Chennai contact info", "INR context", "Domestic roles"],
        downloadLink: "https://drive.google.com/uc?export=download&id=1y8SddS1SY37tiPVTdXX52OhmErGoGb0j",
        previewLink: "https://drive.google.com/file/d/1y8SddS1SY37tiPVTdXX52OhmErGoGb0j/preview",
        color: "from-orange-500 to-green-500",
        icon: "🪪",
    },
    {
        id: "thailand",
        flag: "🇹🇭",
        country: "Thailand",
        label: "TH Edition",
        description: "Optimized for Thai & international opportunities",
        features: ["Bangkok contact info", "Thai national status", "International roles"],
        downloadLink: "https://drive.google.com/uc?export=download&id=1piRTl0dw7cQWOTB5gMpdeGt2kQe9x3A4",
        previewLink: "https://drive.google.com/file/d/1piRTl0dw7cQWOTB5gMpdeGt2kQe9x3A4/preview",
        color: "from-blue-500 to-red-500",
        icon: "🛂",
    },
]

export default function ResumePage() {
    const [selected, setSelected] = useState("india")
    const currentResume = resumeOptions.find((r) => r.id === selected) || resumeOptions[0]

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedSection className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Resume</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Download the version optimized for your region
                    </p>
                </AnimatedSection>

                {/* Main Layout */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Panel - Download Options */}
                    <AnimatedSection className="lg:col-span-1 space-y-6">
                        {/* Version Selector - Gamified */}
                        <Card className="glass-card border-0 overflow-hidden">
                            <div className="h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-xl bg-primary/10">
                                        <HardDrive className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">Select Version</h2>
                                        <p className="text-xs text-muted-foreground">Choose your target region</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {resumeOptions.map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => setSelected(option.id)}
                                            className={cn(
                                                "w-full p-4 rounded-xl border-2 text-left transition-all",
                                                selected === option.id
                                                    ? "border-primary bg-primary/10"
                                                    : "border-border hover:border-primary/50 bg-muted/30"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{option.flag}</span>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold">{option.country}</span>
                                                        {selected === option.id && (
                                                            <Check className="h-4 w-4 text-primary" />
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-muted-foreground">{option.label}</span>
                                                </div>
                                                <span className="text-xl">{option.icon}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Selected Version Info */}
                        <Card className="glass-card border-0 overflow-hidden">
                            <div className={`h-1 bg-gradient-to-r ${currentResume.color}`} />
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-xl bg-primary/10">
                                        <Cpu className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold">Version Details</h2>
                                        <p className="text-xs text-muted-foreground">{currentResume.label}</p>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">
                                    {currentResume.description}
                                </p>

                                <div className="space-y-2 mb-6">
                                    {currentResume.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={currentResume.downloadLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
                                        <Download className="h-5 w-5" />
                                        Download {currentResume.flag} Resume
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>

                        {/* Quick Download Both */}
                        <Card className="glass-card border-0">
                            <CardContent className="p-4">
                                <p className="text-sm text-center text-muted-foreground mb-3">
                                    Need both versions?
                                </p>
                                <div className="flex gap-2">
                                    {resumeOptions.map((option) => (
                                        <a
                                            key={option.id}
                                            href={option.downloadLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1"
                                        >
                                            <Button variant="outline" size="sm" className="w-full gap-1 text-xs">
                                                {option.flag} {option.country}
                                            </Button>
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedSection>

                    {/* Right Panel - Resume Preview */}
                    <AnimatedSection className="lg:col-span-2" delay={100}>
                        <Card className="glass-card border-0 overflow-hidden h-full">
                            <div className={`h-1 bg-gradient-to-r ${currentResume.color}`} />
                            <CardContent className="p-4 h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-5 w-5 text-primary" />
                                        <span className="font-medium">Resume Preview</span>
                                        <span className="text-2xl">{currentResume.flag}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted">
                                        {currentResume.label}
                                    </span>
                                </div>

                                {/* PDF Embed */}
                                <div className="relative w-full rounded-xl overflow-hidden bg-muted/30" style={{ height: "calc(100vh - 280px)", minHeight: "600px" }}>
                                    <iframe
                                        src={currentResume.previewLink}
                                        className="w-full h-full border-0"
                                        title={`${currentResume.country} Resume Preview`}
                                        allow="autoplay"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    )
}
