"use client";
import Image from "next/image";
import Reveal from "./Reveal";

const reasons = [
  { num: "01", title: "Licensed & Insured", desc: "Fully licensed and insured for complete peace of mind on every project.", detail: "ACT Builder's Licence" },
  { num: "02", title: "Experienced Team", desc: "Our skilled crew brings decades of hands-on experience to every job.", detail: "20+ Years in the Industry" },
  { num: "03", title: "On-time Delivery", desc: "We respect your schedule and commit to delivering every project on time.", detail: "100% On-Schedule" },
  { num: "04", title: "Residential & Commercial", desc: "Serving homeowners and commercial clients across Canberra and surrounds.", detail: "Canberra & Surrounds" },
];

export default function WhyUs() {
  return (
    <section style={{ background: "var(--dark)", overflow: "hidden" }}>
      {/* Top: full-width image strip with text overlay */}
      <div style={{ position: "relative", height: 320, overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
          alt="CB Concrete crew on a Canberra construction site"
          fill sizes="100vw"
          style={{ objectFit: "cover", filter: "grayscale(100%) brightness(0.3)" }}
        />
        <Reveal style={{
          position: "absolute", inset: 0, zIndex: 1,
          display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "0 3rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.25rem" }}>
            <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
            <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
              Why choose us
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900, color: "#fff", letterSpacing: -2, lineHeight: 1, maxWidth: 700 }}>
            BUILT ON QUALITY<br />
            <span style={{ color: "var(--gold)" }}>&amp; TRUST.</span>
          </h2>
        </Reveal>
      </div>

      {/* Bottom: horizontal 4-col cards */}
      <div className="whyus-grid stagger-children" style={{ borderTop: "3px solid var(--gold)" }}>
        {reasons.map((r, i) => (
          <div
            key={r.num}
            style={{
              padding: "3rem 2.5rem",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              position: "relative", overflow: "hidden",
              cursor: "default", transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,245,48,0.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{
              position: "absolute", right: 12, bottom: -20,
              fontSize: 120, fontWeight: 900,
              color: "rgba(255,245,48,0.04)",
              lineHeight: 1, userSelect: "none",
            }}>{r.num}</span>

            <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 2, fontWeight: 700, display: "block", marginBottom: "1.5rem" }}>{r.num}</span>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>{r.title}</h3>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: "2rem" }}>{r.desc}</p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(255,245,48,0.25)", padding: "6px 12px",
            }}>
              <div style={{ width: 5, height: 5, background: "var(--gold)", borderRadius: "50%" }} />
              <span style={{ fontSize: 10, color: "var(--gold)", letterSpacing: 1.5, fontWeight: 700 }}>{r.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}