import type { Metadata } from "next"
import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { PageShell, PageHeader, Section } from "@/components/page-shell"
import { ContactTabs } from "@/components/contact-tabs"
import { CopyEmail } from "@/components/copy-email"
import { cn } from "@/lib/utils"
import { EMAIL, GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, LOCATIONS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact | Aditya Bharti",
  description:
    "Book a call or send Aditya Bharti a message directly — also on LinkedIn, GitHub, and Instagram. Open to internships, freelance, and collaborations.",
}

const socials = [
  { label: "@aadityabhartii", href: LINKEDIN_URL, icon: Linkedin, color: "bg-[#0A66C2] hover:bg-[#004182] text-white" },
  { label: "@dormeneur", href: GITHUB_URL, icon: Github, color: "bg-[#238636] hover:bg-[#2ea043] text-white" },
  { label: "@ifnotadi", href: INSTAGRAM_URL, icon: Instagram, color: "bg-[#E1306C] hover:bg-[#c1275b] text-white" },
]

const pill = "inline-flex items-center gap-2 rounded-sm px-4 py-2 transition-colors"

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        title="contact"
        subtitle="open to internships · freelance · collaborations"
      />

      <section className="pb-10">
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm">
          <CopyEmail
            className={cn(pill, "bg-zinc-600 hover:bg-zinc-500 text-white")}
            copied={<>✓ copied!</>}
          >
            <Mail className="h-4 w-4" aria-hidden />
            {EMAIL}
          </CopyEmail>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(pill, s.color)}
            >
              <s.icon className="h-4 w-4" aria-hidden />
              {s.label}
            </a>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-sm">
          {LOCATIONS.map((loc) => (
            <a
              key={loc.code}
              href={`tel:${loc.phone.replace(/\s/g, "")}`}
              className={cn(pill, "bg-zinc-100 hover:bg-white text-zinc-900")}
            >
              <Phone className="h-4 w-4" aria-hidden />
              {loc.phone}
            </a>
          ))}
        </div>
      </section>

      <Section label="get in touch" num="01">
        <ContactTabs />
      </Section>
    </PageShell>
  )
}
