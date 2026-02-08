"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    MessageSquare,
    Sparkles,
    ArrowRight,
    Copy,
    Check,
} from "lucide-react"

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "work.adityabharti@gmail.com",
        href: "mailto:work.adityabharti@gmail.com",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "@aadityabhartii",
        href: "https://linkedin.com/in/aadityabhartii",
        color: "from-blue-600 to-blue-400",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "@dormeneur",
        href: "https://github.com/dormeneur",
        color: "from-gray-600 to-gray-400",
    },
]

const locations = [
    { flag: "IN", city: "Chennai, India", phone: "+91 8840538333" },
    { flag: "TH", city: "Bangkok, Thailand", phone: "+66 0917970234" },
]

const EMAIL = "work.adityabharti@gmail.com"

export default function ContactPage() {
    const [copied, setCopied] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const generateEmailBody = () => {
        return `Hi Aditya,

${formData.message || "[Your message here]"}

Best regards,
${formData.name || "[Your Name]"}
${formData.email || "[Your Email]"}`
    }

    const gmailComposeUrl = () => {
        const subject = encodeURIComponent(formData.subject || "Contact from Portfolio")
        const body = encodeURIComponent(generateEmailBody())
        return `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${subject}&body=${body}`
    }

    const mailtoLink = () => {
        const subject = encodeURIComponent(formData.subject || "Contact from Portfolio")
        const body = encodeURIComponent(generateEmailBody())
        return `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }

    const copyMessage = async () => {
        const fullMessage = `To: ${EMAIL}\nSubject: ${formData.subject || "Contact from Portfolio"}\n\n${generateEmailBody()}`
        await navigator.clipboard.writeText(fullMessage)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a question or want to work together? I'd love to hear from you.
                    </p>
                </AnimatedSection>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Quick contact methods */}
                        <AnimatedSection animation="slide-right">
                            <Card className="glass-card border-0">
                                <CardContent className="p-6 space-y-4">
                                    <h2 className="font-semibold text-lg flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                        Quick Connect
                                    </h2>

                                    <div className="space-y-3">
                                        {contactMethods.map((method) => (
                                            <a
                                                key={method.label}
                                                href={method.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                                            >
                                                <div className={`p-2 rounded-lg bg-gradient-to-r ${method.color} text-white`}>
                                                    <method.icon className="h-4 w-4" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium">{method.label}</p>
                                                    <p className="text-xs text-muted-foreground truncate">{method.value}</p>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        {/* Locations */}
                        <AnimatedSection animation="slide-right" delay={100}>
                            <Card className="glass-card border-0">
                                <CardContent className="p-6 space-y-4">
                                    <h2 className="font-semibold text-lg flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        Locations
                                    </h2>

                                    <div className="space-y-3">
                                        {locations.map((loc) => (
                                            <div
                                                key={loc.city}
                                                className="flex items-center gap-4 p-3 rounded-xl bg-muted/50"
                                            >
                                                <span className="text-sm font-bold text-primary">{loc.flag}</span>
                                                <div>
                                                    <p className="text-sm font-medium">{loc.city}</p>
                                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                                        <Phone className="h-3 w-3" />
                                                        {loc.phone}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        {/* Hire Me CTA */}
                        <AnimatedSection animation="slide-right" delay={200}>
                            <Card className="glass-card border-0 overflow-hidden">
                                <div className="h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-primary/10">
                                            <Sparkles className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Looking to hire?</h3>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                Try our guided hiring form for a smoother experience.
                                            </p>
                                            <Link href="/hire-me">
                                                <Button size="sm" className="gap-2">
                                                    Hire Me
                                                    <ArrowRight className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>

                    {/* Message Composer */}
                    <AnimatedSection className="lg:col-span-3" delay={150}>
                        <Card className="glass-card border-0">
                            <CardContent className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-semibold">Send a Message</h2>
                                    <button
                                        onClick={copyMessage}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors text-xs font-medium text-muted-foreground hover:text-foreground"
                                        title="Copy entire message"
                                    >
                                        {copied ? (
                                            <>
                                                <Check className="h-3.5 w-3.5 text-green-500" />
                                                <span className="text-green-500">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="h-3.5 w-3.5" />
                                                <span>Copy All</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <div className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="name">Your Name</Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                className="mt-1"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            placeholder="What's this about?"
                                            className="mt-1"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell me what you have in mind..."
                                            rows={4}
                                        />
                                    </div>

                                    {/* Gmail button */}
                                    <a href={gmailComposeUrl()} target="_blank" rel="noopener noreferrer" className="block mt-4">
                                        <Button size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
                                            <Mail className="h-4 w-4" />
                                            Open in Gmail
                                        </Button>
                                    </a>

                                    <p className="text-xs text-center text-muted-foreground">
                                        Sending to: <span className="font-mono">{EMAIL}</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    )
}
