import { NextResponse } from "next/server";
import { rateLimited, clientIp } from "@/lib/rate-limit";
import { atlasConfigured, sendAtlasEmail } from "@/lib/atlas";

// Sends enquiries via Atlas (Empreus's own email platform). See lib/atlas.ts
// for the client contract. Required env vars:
//   ATLAS_API_KEY       the per-client key minted in Atlas for this domain
//   CONTACT_FROM        defaults to DoNotReply@cbconcrete.com.au (must be a
//                       bare address the key authorises — no display name)
//   CONTACT_RECIPIENT   defaults to admin@cbconcrete.com.au (must be on the
//                       key's recipient allowlist)
// Without a key configured, enquiries are logged server-side only.

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

function isTrustedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return true; // no Origin header (e.g. same-origin edge cases): don't block
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

async function deliver(fields: {
  name: string;
  phone: string;
  email: string;
  service: string;
  intent: string;
  role: string;
  message: string;
}): Promise<"sent" | "skipped" | "failed"> {
  if (!atlasConfigured()) return "skipped";
  const from = process.env.CONTACT_FROM ?? "DoNotReply@cbconcrete.com.au";
  const to = process.env.CONTACT_RECIPIENT ?? "admin@cbconcrete.com.au";

  const result = await sendAtlasEmail({
    from,
    to,
    replyTo: fields.email,
    subject: `Website enquiry: ${fields.service || "General"} (${fields.name})`,
    text: [
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email}`,
      fields.role ? `I'm a/an: ${fields.role}` : null,
      fields.intent ? `Wants to: ${fields.intent}` : null,
      fields.service ? `Interested in: ${fields.service}` : null,
      "",
      fields.message,
      "",
      "Sent from the enquiry form on cbconcrete.com.au",
    ]
      .filter((l) => l !== null)
      .join("\n"),
  });

  if (!result.ok) {
    console.error(`Atlas send failed ${result.status}: ${result.detail}`);
    return "failed";
  }
  return "sent";
}

export async function POST(req: Request) {
  if (!isTrustedOrigin(req)) {
    return NextResponse.json({ error: "Invalid request origin" }, { status: 403 });
  }

  if (rateLimited(clientIp(req))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
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
    outcome = await deliver(fields);
  } catch {
    outcome = "failed";
  }
  console.log(`[contact enquiry] outcome=${outcome}`, JSON.stringify(fields));

  if (outcome === "failed") {
    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please call 0402 122 028." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
