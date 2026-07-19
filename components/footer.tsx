import Link from "next/link"
import { CopyEmail } from "@/components/copy-email"
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/constants"

const links = [
  { label: "github", href: GITHUB_URL },
  { label: "linkedin", href: LINKEDIN_URL },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14 pb-8">
        <p className="font-serif italic text-3xl sm:text-4xl text-foreground">
          have an idea?{" "}
          <Link href="/contact" className="link-underline text-primary">
            let&apos;s talk →
          </Link>
        </p>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-sm">
          <p className="text-muted-foreground/70">© {new Date().getFullYear()} aditya bharti</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
            <CopyEmail className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              email
            </CopyEmail>
          </div>
        </div>
      </div>
    </footer>
  )
}
