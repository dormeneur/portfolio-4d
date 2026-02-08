"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedSection, TypewriterText } from "@/components/animated-section"
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Code,
  Cpu,
  Zap,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react"

const stats = [
  { value: "1100+", label: "App Users", icon: Zap },
  { value: "4+", label: "Major Projects", icon: Code },
  { value: "2nd", label: "Hackathon Win", icon: Sparkles },
  { value: "8.54", label: "CGPA", icon: Cpu },
]

const EMAIL = "work.adityabharti@gmail.com"

function EmailButton() {
  const [showEmail, setShowEmail] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!showEmail) {
    return (
      <button
        onClick={() => setShowEmail(true)}
        className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
        aria-label="Show Email"
      >
        <Mail className="h-5 w-5" />
      </button>
    )
  }

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card animate-fade-in">
      <Mail className="h-4 w-4 text-primary" />
      <span className="text-sm font-mono">{EMAIL}</span>
      <button
        onClick={copyEmail}
        className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
        title="Copy email"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
      <a
        href={`mailto:${EMAIL}`}
        className="p-1.5 rounded-md hover:bg-primary/10 transition-colors"
        title="Open in mail client"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        {/* Background with hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Aditya Bharti"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40 dark:from-background dark:via-background/90 dark:to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Greeting badge */}
            <AnimatedSection delay={0} animation="fade">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm text-muted-foreground">
                  Open for internships & collaborations
                </span>
              </div>
            </AnimatedSection>

            {/* Main heading */}
            <AnimatedSection delay={200} animation="slide-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Hi, I'm{" "}
                <span className="gradient-text">Aditya</span>
              </h1>
            </AnimatedSection>

            {/* Tagline with typewriter effect */}
            <AnimatedSection delay={400} animation="slide-up">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {mounted ? (
                  <TypewriterText
                    text="Computer Science student crafting intelligent systems, mobile apps, and blockchain solutions."
                    delay={600}
                    speed={30}
                  />
                ) : (
                  "Computer Science student crafting intelligent systems, mobile apps, and blockchain solutions."
                )}
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection delay={600} animation="slide-up">
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/projects">
                  <Button size="lg" className="group gap-2 bg-primary hover:bg-primary/90">
                    View My Work
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/hire-me">
                  <Button size="lg" variant="outline" className="gap-2 glass">
                    Hire Me
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button size="lg" variant="ghost" className="gap-2">
                    Resume
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={800} animation="fade">
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://github.com/dormeneur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/aadityabhartii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <EmailButton />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center interactive-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Building the <span className="gradient-text">Future</span> with Code
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a Thai national raised in India, currently in my third year at VIT Chennai.
                  I believe the future is all about automation: systems that adapt, simplify, and scale intelligently.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From AI-powered assistants to cross-platform mobile apps and blockchain solutions,
                  I bring a creative, thoughtful approach to every project.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["AI/ML", "Mobile Dev", "Blockchain", "Full Stack"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <Link href="/about">
                    <Button variant="outline" className="gap-2 group">
                      Learn More About Me
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale" delay={200}>
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />

                {/* Interest cards */}
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { icon: Cpu, title: "AI & Automation", desc: "Building intelligent systems" },
                    { icon: Code, title: "Mobile Apps", desc: "Flutter & cross-platform" },
                    { icon: Zap, title: "Blockchain", desc: "Web3 & smart contracts" },
                    { icon: Sparkles, title: "Startups", desc: "Tech-driven innovation" },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="glass-card rounded-2xl p-5 interactive-card"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm actively seeking internships, research opportunities, and exciting project collaborations.
              Let's build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hire-me">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                  <Sparkles className="h-4 w-4" />
                  Hire Me
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
