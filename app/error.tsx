"use client"

import { useEffect } from "react"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <PageShell>
            <div className="min-h-[50vh] flex flex-col justify-center py-20">
                <p className="text-xs uppercase tracking-[0.2em] text-destructive/70 mb-4">error</p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">something went wrong</h1>
                <p className="text-sm sm:text-base text-muted-foreground mb-8">
                    an unexpected error occurred. try again, or head back home.
                </p>
                <div className="flex gap-x-6 text-sm">
                    <button onClick={reset} className="text-foreground hover:text-primary transition-colors">
                        try again →
                    </button>
                    <Link href="/" className="text-foreground hover:text-primary transition-colors">
                        back to home →
                    </Link>
                </div>
            </div>
        </PageShell>
    )
}
