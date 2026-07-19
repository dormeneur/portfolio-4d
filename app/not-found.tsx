import Link from "next/link"
import { PageShell } from "@/components/page-shell"

export default function NotFound() {
    return (
        <PageShell>
            <div className="min-h-[50vh] flex flex-col justify-center py-20">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">404</p>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">page not found</h1>
                <p className="text-sm sm:text-base text-muted-foreground mb-8">
                    the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors">
                    back to home →
                </Link>
            </div>
        </PageShell>
    )
}
