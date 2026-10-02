"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

const slides = [
  { label: "Concreting", src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80", alt: "Concrete site" },
  { label: "Exposed Aggregate", src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80", alt: "Aggregate floor" },
  { label: "Polished Concrete", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80", alt: "Polished interior" },
  { label: "Coloured Concrete", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80", alt: "Coloured concrete" },
  { label: "Slabs & Footings", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80", alt: "Concrete slab" },
  { label: "Patios & Entertaining", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80", alt: "Patio area" },
  { label: "Driveways", src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=900&q=80", alt: "Driveway" },
  { label: "Excavation", src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=80", alt: "Excavation" },
  { label: "Drainage", src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80", alt: "Drainage" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const visible = [slides[current % total], slides[(current + 1) % total]];

  return (
    <>
      {/* ── HERO: full-height asymmetric layout ── */}
      <section className="hero-grid" style={{
        background: "var(--dark)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Left: big background image with overlay text */}
        <div className="hero-image-side" style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80"
            alt="Construction site"
            fill sizes="60vw" priority
            style={{ objectFit: "cover", filter: "grayscale(60%) brightness(0.35)" }}
          />
          {/* Diagonal yellow slash */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, right: -2,
            width: 80, background: "var(--dark)",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
            zIndex: 2,
          }} />

          {/* Text over image */}
          <div className="hero-text-pad" style={{
            position: "absolute", inset: 0, zIndex: 1,
            display: "flex", flexDirection: "column",
            justifyContent: "flex-end",
          }}>
            {/* Eyebrow */}
            <div className="hero-anim hero-anim-1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
              <div style={{ width: 48, height: 2, background: "var(--gold)" }} />
              <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 4, textTransform: "uppercase", fontWeight: 700 }}>
                Canberra&apos;s #1 Concreting Contractor
              </span>
            </div>

            <h1 className="hero-anim hero-anim-2" style={{
              fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              fontWeight: 900, color: "#fff",
              lineHeight: 0.92, letterSpacing: -3,
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}>
              WE POUR<br />
              <span style={{ color: "var(--gold)", WebkitTextStroke: "0px" }}>QUALITY</span><br />
              INTO EVERY<br />
              PROJECT.
            </h1>

            <p className="hero-anim hero-anim-3" style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: 440, lineHeight: 1.8, marginBottom: "2.5rem" }}>
              CB Concrete is one of Canberra&apos;s leading concreting contractors &amp; excavation
              companies, delivering superior results for residential and commercial clients since day one.
            </p>

            <div className="hero-anim hero-anim-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="#other-services" className="btn-lift" style={{
                background: "var(--gold)", color: "#111",
                padding: "16px 36px", fontWeight: 800,
                fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
                textDecoration: "none",
              }}>
                Our Services
              </Link>
              <Link href="#contact" className="btn-lift" style={{
                border: "1px solid rgba(255,255,255,0.2)", color: "#fff",
                padding: "16px 36px", fontWeight: 600,
                fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
                textDecoration: "none",
              }}>
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Right: vertical stats + info panel */}
        <div className="hero-stats-col stagger-children" style={{
          background: "var(--dark2)",
          borderLeft: "1px solid rgba(255,255,255,0.05)",
        }}>
          {/* Stats stacked vertically */}
          {[
            { val: "20+", label: "Years of Experience", sub: "Established in Canberra" },
            { val: "500+", label: "Projects Completed", sub: "Residential & commercial" },
            { val: "100%", label: "Client Satisfaction", sub: "Our guarantee to you" },
          ].map((s, i) => (
            <div key={s.val} className="hero-stat-item" style={{
              flex: 1, padding: "2.5rem",
              borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
              display: "flex", flexDirection: "column", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              {/* bg numeral watermark */}
              <span style={{
                position: "absolute", right: 16, bottom: -16,
                fontSize: 96, fontWeight: 900,
                color: "rgba(255,245,48,0.04)",
                letterSpacing: -4, userSelect: "none",
                lineHeight: 1,
              }}>{s.val}</span>
              <div style={{ width: 28, height: 3, background: "var(--gold)", marginBottom: "1rem" }} />
              <span style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900, color: "var(--gold)", lineHeight: 1, display: "block" }}>
                {s.val}
              </span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginTop: "0.5rem", display: "block" }}>{s.label}</span>
              <span style={{ fontSize: 12, color: "#555", marginTop: "0.3rem", display: "block" }}>{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE SLIDER ── */}
      <section className="hero-slider-pad" style={{ background: "var(--dark2)" }}>
        {/* Header */}
        <Reveal style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
              <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
              <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
                What we do
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 900, color: "#fff",
              letterSpacing: -1, lineHeight: 1.05,
            }}>
              CB Concrete provides high quality<br />
              services to the{" "}
              <span style={{ color: "var(--gold)" }}>residential &amp; commercial sector.</span>
            </h2>
          </div>
          <Link href="#other-services" style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            color: "#fff", textDecoration: "none",
            fontSize: 12, letterSpacing: 3, textTransform: "uppercase", fontWeight: 700,
            borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: 4,
          }}>
            VIEW ALL SERVICES →
          </Link>
        </Reveal>

        {/* 2-up slider cards */}
        <div className="slider-cards stagger-children">
          {visible.map((card, i) => (
            <div key={`${card.label}-${i}`} style={{ position: "relative", height: 420, overflow: "hidden" }}>
              <Image src={card.src} alt={card.alt} fill sizes="50vw"
                style={{ objectFit: "cover", filter: "grayscale(100%)", transition: "transform 0.6s ease" }}
              />
              {/* Gradient */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 55%)",
              }} />
              {/* Yellow badge */}
              <div style={{
                position: "absolute", bottom: 28, left: 28, zIndex: 2,
                background: "var(--gold)", padding: "14px 20px",
                display: "inline-flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: "#111", lineHeight: 1.1 }}>{card.label}</span>
                <span style={{ fontSize: 16, color: "#111", fontWeight: 900 }}>↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "1.75rem 0 3rem",
        }}>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)", marginRight: "2rem" }} />
          <span style={{ fontSize: 12, color: "#555", letterSpacing: 2, marginRight: "1.5rem", flexShrink: 0 }}>
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {[{ fn: prev, label: "←" }, { fn: next, label: "→" }].map(({ fn, label }) => (
              <button key={label} onClick={fn} style={{
                width: 48, height: 48, borderRadius: "50%",
                border: "none", background: "var(--gold)",
                color: "#111", fontSize: 18, cursor: "pointer",
                fontWeight: 800,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>{label}</button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}