import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How CB Concrete collects, uses and protects personal information submitted through this website.",
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "2 October 2026";

const sections: { heading: string; body: string }[] = [
  {
    heading: "Who we are",
    body: "CB Concrete is one of Canberra's leading concreting contractors and excavation companies, servicing Canberra and surrounds. This policy explains how we handle personal information collected through cbconcrete.com.au, in line with the Australian Privacy Principles in the Privacy Act 1988 (Cth).",
  },
  {
    heading: "What we collect",
    body: "The only personal information this website collects is what you choose to send us through the quote request form: your name, email address, phone number, the service you're interested in, and your message. Our hosting provider also keeps short-lived technical logs, such as IP addresses, for security and to keep the site running reliably.",
  },
  {
    heading: "How we use it",
    body: "We use your enquiry details for one purpose: to respond to you with a quote or to answer your questions. Form submissions are delivered to our office inbox and are not stored in a database on this website. We do not use your details for marketing lists, and we never sell personal information.",
  },
  {
    heading: "Cookies and analytics",
    body: "This website does not set advertising cookies or run third-party trackers. We use our hosting platform's privacy-friendly analytics, which counts page visits in aggregate without cookies and without identifying or tracking individual visitors across sites.",
  },
  {
    heading: "Who else sees it",
    body: "Your enquiry passes through the service providers that run this website: our hosting platform and our transactional email provider, which delivers the message to us over an encrypted connection. These providers process the data only to provide those services. Beyond that, we disclose personal information only where the law requires it.",
  },
  {
    heading: "Access, correction and complaints",
    body: "You can ask us at any time what personal information we hold about you, ask us to correct it, or ask us to delete it, by emailing admin@cbconcrete.com.au or calling 0402 122 028. If you are not satisfied with our response, you can complain to the Office of the Australian Information Commissioner at oaic.gov.au.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--dark)", padding: "8rem 1.5rem 6rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
              <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
              <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
                Your information
              </span>
            </div>
            <h1 style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 900, color: "#fff",
              letterSpacing: -1.5, lineHeight: 1.05,
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}>
              Privacy <span style={{ color: "var(--gold)" }}>Policy</span>
            </h1>
            <p style={{ fontSize: 13, color: "#666" }}>Last updated: {LAST_UPDATED}</p>
          </Reveal>

          <div style={{ marginTop: "3rem" }}>
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60} style={{ marginTop: i === 0 ? 0 : "2.5rem" }}>
                <h2 style={{
                  fontSize: 16, fontWeight: 800, color: "#fff",
                  letterSpacing: 1, textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}>
                  {s.heading}
                </h2>
                <p style={{ fontSize: 15, color: "#999", lineHeight: 1.85 }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
