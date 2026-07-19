import type { Metadata } from "next"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import { PageShell, PageHeader, Section } from "@/components/page-shell"
import { ContactTabs } from "@/components/contact-tabs"
import { CopyEmail } from "@/components/copy-email"
import { EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, LOCATIONS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact | Aditya Bharti",
  description:
    "Book a call or send Aditya Bharti a message directly — also on LinkedIn, GitHub, and Instagram. Open to internships, freelance, and collaborations.",
}

const socials = [
  { label: "@aadityabhartii", href: LINKEDIN_URL, icon: Linkedin },
  { label: "@dormeneur", href: GITHUB_URL, icon: Github },
  { label: "@ifnotadi", href: INSTAGRAM_URL, icon: Instagram },
]

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        title="contact"
        accent="let's build something."
        subtitle="open to internships · freelance · collaborations"
      />

      <section className="pb-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
          <CopyEmail className="inline-flex items-center gap-2 link-underline text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-4 w-4 text-primary" aria-hidden />
            {EMAIL}
          </CopyEmail>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 link-underline text-muted-foreground hover:text-foreground transition-colors"
            >
              <s.icon className="h-4 w-4 text-primary" aria-hidden />
              {s.label}
            </a>
          ))}
        </div>
        <div className="mt-6 grid sm:grid-cols-3 gap-4 max-w-4xl">
          {LOCATIONS.map((loc) => (
            <div key={loc.code} className="tile p-4 flex items-center gap-3">
              <span className="text-2xl" aria-hidden>
                {loc.flag}
              </span>
              <div>
                <p className="text-sm text-foreground">{loc.city}</p>
                <p className="font-mono text-xs text-muted-foreground/70">{loc.phone}</p>
              </div>
            </div>
          ))}
          <div className="tile p-4 flex items-center gap-3">
            <span className="text-2xl" aria-hidden>
              🌍
            </span>
            <div>
              <p className="text-sm text-foreground">remote</p>
              <p className="font-mono text-xs text-muted-foreground/70">works from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      <Section label="get in touch" num="01">
        <ContactTabs />
      </Section>
    </PageShell>
  )
}
