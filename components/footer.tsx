"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
    { icon: Github, href: "https://github.com/dormeneur", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/aadityabhartii", label: "LinkedIn" },
    { icon: Mail, href: "mailto:work.adityabharti@gmail.com", label: "Email" },
]

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
    { href: "/hire-me", label: "Hire Me" },
    { href: "/contact", label: "Contact" },
]

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-muted/30 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="font-bold text-xl gradient-text">
                            Aditya Bharti
                        </Link>
                        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                            Computer Science student building intelligent systems, mobile apps, and blockchain solutions.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>🇮🇳 Chennai, India</p>
                            <p>🇹🇭 Bangkok, Thailand</p>
                            <p>work.adityabharti@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Aditya Bharti. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    )
}
