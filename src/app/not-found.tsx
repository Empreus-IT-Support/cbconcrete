import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{
        background: "var(--dark)",
        minHeight: "70vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: "6rem 1.5rem",
        position: "relative", overflow: "hidden",
      }}>
        <span aria-hidden style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "40vw", fontWeight: 900,
          color: "rgba(255,245,48,0.04)",
          lineHeight: 1, userSelect: "none", whiteSpace: "nowrap",
        }}>
          404
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem", position: "relative" }}>
          <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
          <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
            Page not found
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 900, color: "#fff",
          lineHeight: 1, letterSpacing: -2,
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          position: "relative",
          maxWidth: 700,
        }}>
          This page never got <span style={{ color: "var(--gold)" }}>poured.</span>
        </h1>

        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", maxWidth: 440, lineHeight: 1.8, marginBottom: "2.5rem", position: "relative" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved. Head back home,
          or get in touch about your project.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", position: "relative" }}>
          <Link href="/" className="btn-lift" style={{
            background: "var(--gold)", color: "#111",
            padding: "16px 36px", fontWeight: 800,
            fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
            textDecoration: "none",
          }}>
            Back to Home
          </Link>
          <Link href="/contact" className="btn-lift" style={{
            border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
            padding: "16px 36px", fontWeight: 600,
            fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
            textDecoration: "none",
          }}>
            Get a Quote
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
