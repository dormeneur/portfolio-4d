"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // Show button when scrolled down 300px
            setIsVisible(window.scrollY > 300)

            // Calculate scroll progress
            const winScroll = window.scrollY
            const height = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = (winScroll / height) * 100
            setScrollProgress(scrolled)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-8 right-8 z-50 group",
                "w-12 h-12 rounded-full",
                "bg-primary/90 hover:bg-primary text-primary-foreground",
                "shadow-lg hover:shadow-xl",
                "transition-all duration-300 ease-out",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
            )}
            aria-label="Scroll to top"
        >
            {/* Progress ring */}
            <svg
                className="absolute inset-0 -rotate-90"
                viewBox="0 0 48 48"
            >
                <circle
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    opacity="0.2"
                />
                <circle
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray={`${2 * Math.PI * 22}`}
                    strokeDashoffset={`${2 * Math.PI * 22 * (1 - scrollProgress / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-150"
                />
            </svg>

            {/* Arrow icon */}
            <ArrowUp className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[60%] transition-transform" />
        </button>
    )
}
