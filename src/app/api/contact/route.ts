import { NextResponse } from "next/server";
import { rateLimited, clientIp } from "@/lib/rate-limit";

// Sends enquiries via Resend (https://resend.com).
// Required env vars:
//   RESEND_API_KEY      from the Resend dashboard
//   CONTACT_FROM        verified sender, e.g. website@cbconcrete.com.au
//                       (the domain must be verified in Resend via DNS)
//   CONTACT_RECIPIENT   defaults to admin@cbconcrete.com.au
// Without a key configured, enquiries are logged server-side only.

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function sendViaResend(fields: {
  name: string;
  phone: string;
  email: string;
  service: string;
  intent: string;
  role: string;
  message: string;
}): Promise<"sent" | "skipped" | "failed"> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return "skipped";
  const from = process.env.CONTACT_FROM ?? "CB Concrete Website <onboarding@resend.dev>";
  const to = process.env.CONTACT_RECIPIENT ?? "admin@cbconcrete.com.au";

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${esc(fields.name)}</p>
    <p><strong>Phone:</strong> ${esc(fields.phone)}</p>
    <p><strong>Email:</strong> ${esc(fields.email)}</p>
    ${fields.role ? `<p><strong>I'm a/an:</strong> ${esc(fields.role)}</p>` : ""}
    ${fields.intent ? `<p><strong>Wants to:</strong> ${esc(fields.intent)}</p>` : ""}
    ${fields.service ? `<p><strong>Interested in:</strong> ${esc(fields.service)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${esc(fields.message).replace(/\n/g, "<br/>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject: `Website enquiry — ${fields.service || "General"} (${fields.name})`,
      html,
    }),
  });
  return res.ok ? "sent" : "failed";
}

function isTrustedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // no Origin header (e.g. same-origin edge cases) — don't block
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!isTrustedOrigin(req)) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }

  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many requests — please try again later." },
      { status: 429 }
    );
  }

  const data = await req.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();
  const service = String(data.service ?? "").trim();
  const intent = String(data.intent ?? "").trim();
  const role = String(data.role ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (
    !name ||
    name.length > 100 ||
    !phone ||
    phone.length > 30 ||
    !/^[\d\s()+-]{6,30}$/.test(phone) ||
    !EMAIL_RE.test(email) ||
    service.length > 100 ||
    intent.length > 150 ||
    role.length > 50 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please check the required fields and try again." },
      { status: 400 }
    );
  }

  const fields = { name, phone, email, service, intent, role, message };
  let outcome: string;
  try {
    outcome = await sendViaResend(fields);
  } catch {
    outcome = "failed";
  }
  console.log(`[contact enquiry] outcome=${outcome}`, JSON.stringify(fields));

  if (outcome === "failed") {
    return NextResponse.json(
      { error: "We couldn't send your enquiry — please call 0402 122 028." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
