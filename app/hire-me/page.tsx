"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Briefcase,
    GraduationCap,
    Users,
    Lightbulb,
    MapPin,
    Globe,
    Check,
    ArrowRight,
    ArrowLeft,
    Sparkles,
    Mail,
    Copy,
    ExternalLink,
} from "lucide-react"
import { cn } from "@/lib/utils"

const intentOptions = [
    { value: "internship", label: "Internship", icon: GraduationCap, description: "Looking for an intern" },
    { value: "fulltime", label: "Full-time", icon: Briefcase, description: "Full-time position" },
    { value: "freelance", label: "Freelance", icon: Users, description: "Project-based work" },
    { value: "collaboration", label: "Collaboration", icon: Lightbulb, description: "Research or side project" },
]

const locationOptions = [
    { value: "india", label: "India", flag: "🇮🇳", description: "Based in Chennai" },
    { value: "thailand", label: "Thailand", flag: "🇹🇭", description: "Thai national" },
    { value: "remote", label: "Remote", flag: "🌍", description: "Work from anywhere" },
]

const EMAIL = "work.adityabharti@gmail.com"

export default function HireMePage() {
    const [step, setStep] = useState(1)
    const [copied, setCopied] = useState(false)
    const [formData, setFormData] = useState({
        intent: "",
        location: "",
        company: "",
        role: "",
        timeline: "",
        message: "",
        name: "",
        email: "",
    })

    const progress = (step / 4) * 100

    const updateFormData = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const generateEmail = () => {
        const intentLabel = intentOptions.find(o => o.value === formData.intent)?.label || ""
        const locationLabel = locationOptions.find(o => o.value === formData.location)?.label || ""

        return `Subject: ${intentLabel} Opportunity - ${formData.role || "Role"} at ${formData.company || "Company"}

Hi Aditya,

I'm ${formData.name || "[Your Name]"} from ${formData.company || "[Company]"}.

I came across your portfolio and was impressed by your work. We're looking for someone with your skills for a ${intentLabel.toLowerCase()} opportunity.

Role: ${formData.role || "[Role Title]"}
Location: ${locationLabel}
Timeline: ${formData.timeline || "[Timeline]"}

${formData.message || "I'd love to discuss this opportunity with you."}

Looking forward to hearing from you!

Best regards,
${formData.name || "[Your Name]"}
${formData.email || "[Your Email]"}`
    }

    const generateSubject = () => {
        const intentLabel = intentOptions.find(o => o.value === formData.intent)?.label || ""
        return `${intentLabel} Opportunity - ${formData.role || "Role"} at ${formData.company || "Company"}`
    }

    const gmailComposeUrl = () => {
        const subject = encodeURIComponent(generateSubject())
        const body = encodeURIComponent(generateEmail().replace(/^Subject:.*\n\n/, ''))
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`
    }

    const mailtoLink = () => {
        const subject = encodeURIComponent(generateSubject())
        const body = encodeURIComponent(generateEmail().replace(/^Subject:.*\n\n/, ''))
        return `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }

    const copyMessage = async () => {
        await navigator.clipboard.writeText(generateEmail())
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedSection className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Hire Me</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Let's create something amazing together
                    </p>
                </AnimatedSection>

                {/* Progress bar */}
                <AnimatedSection className="mb-8" delay={100}>
                    <div className="relative">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="flex justify-between mt-2">
                            {["Intent", "Location", "Details", "Send"].map((label, i) => (
                                <span
                                    key={label}
                                    className={cn(
                                        "text-xs font-medium",
                                        step > i + 1 ? "text-primary" : step === i + 1 ? "text-foreground" : "text-muted-foreground"
                                    )}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* Step content */}
                <AnimatedSection delay={200}>
                    <Card className="glass-card border-0">
                        <CardContent className="p-6 md:p-8">
                            {/* Step 1: Intent */}
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-xl font-semibold mb-2">What are you looking for?</h2>
                                        <p className="text-muted-foreground text-sm">Select the type of opportunity</p>
                                    </div>

                                    <RadioGroup
                                        value={formData.intent}
                                        onValueChange={(v) => updateFormData("intent", v)}
                                        className="grid grid-cols-2 gap-4"
                                    >
                                        {intentOptions.map((option) => (
                                            <Label
                                                key={option.value}
                                                htmlFor={option.value}
                                                className={cn(
                                                    "flex flex-col items-center gap-3 p-6 rounded-xl border-2 cursor-pointer transition-all",
                                                    formData.intent === option.value
                                                        ? "border-primary bg-primary/10"
                                                        : "border-border hover:border-primary/50"
                                                )}
                                            >
                                                <RadioGroupItem value={option.value} id={option.value} className="sr-only" />
                                                <option.icon className={cn(
                                                    "h-8 w-8",
                                                    formData.intent === option.value ? "text-primary" : "text-muted-foreground"
                                                )} />
                                                <div className="text-center">
                                                    <p className="font-medium">{option.label}</p>
                                                    <p className="text-xs text-muted-foreground">{option.description}</p>
                                                </div>
                                            </Label>
                                        ))}
                                    </RadioGroup>
                                </div>
                            )}

                            {/* Step 2: Location */}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-xl font-semibold mb-2">Preferred Location</h2>
                                        <p className="text-muted-foreground text-sm">Where would this opportunity be based?</p>
                                    </div>

                                    <RadioGroup
                                        value={formData.location}
                                        onValueChange={(v) => updateFormData("location", v)}
                                        className="space-y-3"
                                    >
                                        {locationOptions.map((option) => (
                                            <Label
                                                key={option.value}
                                                htmlFor={`loc-${option.value}`}
                                                className={cn(
                                                    "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                                                    formData.location === option.value
                                                        ? "border-primary bg-primary/10"
                                                        : "border-border hover:border-primary/50"
                                                )}
                                            >
                                                <RadioGroupItem value={option.value} id={`loc-${option.value}`} className="sr-only" />
                                                <span className="text-3xl">{option.flag}</span>
                                                <div className="flex-1">
                                                    <p className="font-medium">{option.label}</p>
                                                    <p className="text-xs text-muted-foreground">{option.description}</p>
                                                </div>
                                                {formData.location === option.value && (
                                                    <Check className="h-5 w-5 text-primary" />
                                                )}
                                            </Label>
                                        ))}
                                    </RadioGroup>
                                </div>
                            )}

                            {/* Step 3: Details */}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-xl font-semibold mb-2">Tell me more</h2>
                                        <p className="text-muted-foreground text-sm">A few details about the opportunity</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="name">Your Name</Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={(e) => updateFormData("name", e.target.value)}
                                                    placeholder="John Doe"
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Your Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => updateFormData("email", e.target.value)}
                                                    placeholder="john@company.com"
                                                    className="mt-1"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="company">Company</Label>
                                                <Input
                                                    id="company"
                                                    value={formData.company}
                                                    onChange={(e) => updateFormData("company", e.target.value)}
                                                    placeholder="Acme Inc."
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="role">Role Title</Label>
                                                <Input
                                                    id="role"
                                                    value={formData.role}
                                                    onChange={(e) => updateFormData("role", e.target.value)}
                                                    placeholder="Software Engineer Intern"
                                                    className="mt-1"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="timeline">Timeline</Label>
                                            <Input
                                                id="timeline"
                                                value={formData.timeline}
                                                onChange={(e) => updateFormData("timeline", e.target.value)}
                                                placeholder="Summer 2026, 3 months"
                                                className="mt-1"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message">Additional Message (Optional)</Label>
                                            <Textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={(e) => updateFormData("message", e.target.value)}
                                                placeholder="Tell me more about the opportunity..."
                                                className="mt-1"
                                                rows={3}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Preview & Send */}
                            {step === 4 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                                            <Sparkles className="h-8 w-8 text-white" />
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2">Ready to Send!</h2>
                                        <p className="text-muted-foreground text-sm">Choose how you'd like to send your message</p>
                                    </div>

                                    {/* Email Preview */}
                                    <div className="bg-muted/50 rounded-xl p-4 text-sm font-mono whitespace-pre-wrap max-h-48 overflow-y-auto border">
                                        {generateEmail()}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <Button
                                            onClick={copyMessage}
                                            variant="outline"
                                            size="lg"
                                            className="gap-2"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="h-5 w-5" />
                                                    Copy Message
                                                </>
                                            )}
                                        </Button>

                                        <a href={mailtoLink()} className="block">
                                            <Button size="lg" variant="outline" className="w-full gap-2">
                                                <Mail className="h-5 w-5" />
                                                Open Mail App
                                            </Button>
                                        </a>
                                    </div>

                                    <a href={gmailComposeUrl()} target="_blank" rel="noopener noreferrer" className="block">
                                        <Button size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
                                            <ExternalLink className="h-5 w-5" />
                                            Open in Gmail (Web)
                                        </Button>
                                    </a>

                                    <div className="text-center">
                                        <p className="text-xs text-muted-foreground">
                                            Sending to: <span className="font-mono">{EMAIL}</span>
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Navigation */}
                            {step < 4 && (
                                <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
                                    <Button
                                        variant="ghost"
                                        onClick={() => setStep(step - 1)}
                                        disabled={step === 1}
                                        className="gap-2"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Back
                                    </Button>
                                    <Button
                                        onClick={() => setStep(step + 1)}
                                        disabled={
                                            (step === 1 && !formData.intent) ||
                                            (step === 2 && !formData.location)
                                        }
                                        className="gap-2"
                                    >
                                        Continue
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="flex justify-center mt-6">
                                    <Button
                                        variant="ghost"
                                        onClick={() => setStep(1)}
                                        className="gap-2"
                                    >
                                        Start Over
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </AnimatedSection>
            </div>
        </div>
    )
}
