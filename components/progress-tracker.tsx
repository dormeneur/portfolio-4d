"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

const pages = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/experience", name: "Experience" },
    { path: "/projects", name: "Projects" },
    { path: "/skills", name: "Skills" },
    { path: "/resume", name: "Resume" },
    { path: "/hire-me", name: "Hire Me" },
    { path: "/contact", name: "Contact" },
]

export function ProgressTracker() {
    const pathname = usePathname()
    const [visitedPages, setVisitedPages] = useState<string[]>([])
    const [showAchievement, setShowAchievement] = useState(false)

    useEffect(() => {
        // Load visited pages from localStorage
        const stored = localStorage.getItem("portfolio-visited-pages")
        if (stored) {
            setVisitedPages(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        // Mark current page as visited
        if (pathname && !visitedPages.includes(pathname)) {
            const newVisited = [...visitedPages, pathname]
            setVisitedPages(newVisited)
            localStorage.setItem("portfolio-visited-pages", JSON.stringify(newVisited))

            // Check for achievement
            if (newVisited.length === pages.length) {
                setShowAchievement(true)
                setTimeout(() => setShowAchievement(false), 5000)
            }
        }
    }, [pathname, visitedPages])

    const progress = (visitedPages.length / pages.length) * 100

    return (
        <>
            {/* Progress bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 h-1 bg-muted">
                <div
                    className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Progress indicator tooltip */}
            <div className="fixed bottom-4 left-4 z-40">
                <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                            {Math.round(progress)}%
                        </span>
                    </div>
                    <span className="text-muted-foreground hidden sm:inline">
                        Explored
                    </span>
                </div>
            </div>

            {/* Achievement toast */}
            <div
                className={cn(
                    "fixed bottom-20 right-4 z-50 glass-card rounded-xl p-4 flex items-center gap-3 transition-all duration-500",
                    showAchievement
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                )}
            >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center animate-glow-pulse">
                    <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                    <p className="font-semibold text-sm">Achievement Unlocked! 🎉</p>
                    <p className="text-xs text-muted-foreground">
                        You've explored my entire portfolio
                    </p>
                </div>
            </div>
        </>
    )
}
