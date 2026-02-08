"use client"

import { useEffect, useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    animation?: "fade" | "slide-up" | "slide-right" | "scale"
}

export function AnimatedSection({
    children,
    className,
    delay = 0,
    animation = "slide-up",
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("visible")
                        }, delay)
                    }
                })
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [delay])

    const animationClass = {
        "fade": "opacity-0 transition-opacity duration-700",
        "slide-up": "opacity-0 translate-y-8 transition-all duration-700",
        "slide-right": "opacity-0 translate-x-8 transition-all duration-700",
        "scale": "opacity-0 scale-95 transition-all duration-700",
    }[animation]

    return (
        <div
            ref={ref}
            className={cn(
                animationClass,
                "[&.visible]:opacity-100 [&.visible]:translate-y-0 [&.visible]:translate-x-0 [&.visible]:scale-100",
                className
            )}
        >
            {children}
        </div>
    )
}

interface AnimatedTextProps {
    text: string
    className?: string
    delay?: number
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
    const words = text.split(" ")

    return (
        <span className={className}>
            {words.map((word, index) => (
                <span
                    key={index}
                    className="inline-block opacity-0 animate-fade-in"
                    style={{ animationDelay: `${delay + index * 100}ms`, animationFillMode: "forwards" }}
                >
                    {word}&nbsp;
                </span>
            ))}
        </span>
    )
}

interface TypewriterTextProps {
    text: string
    className?: string
    delay?: number
    speed?: number
}

export function TypewriterText({ text, className, delay = 0, speed = 50 }: TypewriterTextProps) {
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        element.textContent = ""
        let index = 0

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (index < text.length) {
                    element.textContent += text[index]
                    index++
                } else {
                    clearInterval(interval)
                }
            }, speed)

            return () => clearInterval(interval)
        }, delay)

        return () => clearTimeout(timeout)
    }, [text, delay, speed])

    return (
        <span ref={ref} className={cn("", className)}>
            {text}
        </span>
    )
}
