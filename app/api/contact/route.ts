import { NextResponse } from "next/server"
import { EMAIL } from "@/lib/constants"

// Cloudflare Pages (next-on-pages) only runs server routes on the edge runtime.
export const runtime = "edge"

// ponytail: one fetch to Resend's REST API — no SDK dependency needed.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const { from, message, company } = body ?? {}

  // honeypot filled = bot; pretend success so it learns nothing
  if (company) return NextResponse.json({ ok: true })

  if (
    typeof from !== "string" ||
    !/^\S+@\S+\.\S+$/.test(from) ||
    from.length > 320 ||
    typeof message !== "string" ||
    !message.trim() ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "invalid input" }, { status: 400 })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return NextResponse.json({ error: "email not configured" }, { status: 503 })

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [EMAIL],
      reply_to: from,
      subject: `Portfolio message from ${from}`,
      text: message,
    }),
  })

  if (!res.ok) return NextResponse.json({ error: "send failed" }, { status: 502 })
  return NextResponse.json({ ok: true })
}
