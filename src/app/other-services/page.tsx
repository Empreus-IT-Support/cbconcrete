"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Exposed Aggregate",
    tag: "Decorative",
    src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=900&q=80",
    intro: "CB Concrete Canberra offer an extensive range of concrete styles & colours to meet any style of home or building. Exposed Aggregate is achieved by exposing the small stones on the top of the concrete surface — fast becoming one of the most popular options for home owners & builders.",
    bullets: ["Low maintenance", "Suitable for indoor and outdoor use", "Ideal for driveways and footpaths", "Great for alfresco and courtyards", "Strong, durable and stylish"],
  },
  {
    id: "02",
    title: "Polished Concrete",
    tag: "Finish",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    intro: "Polished concrete is attained by using a polishing machine to grind the exposed aggregate or concrete to achieve a smooth, high-shine surface. It removes all existing stains and has a much longer life span than traditional flooring.",
    bullets: [],
  },
  {
    id: "03",
    title: "Coloured Concrete",
    tag: "Decorative",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    intro: "Available in a wide range of colours to suit your individual environment & taste. Three different finishes ranging from smooth to rough (swirled) or broom finish. Full depth colouring means surface erosion is never a problem.",
    bullets: [],
  },
  {
    id: "04",
    title: "Stencil Concrete",
    tag: "Decorative",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    intro: "Stencil finish provides the look of pavers, with the strength and practicality of concrete. With an extensive array of colours and designs, stencil adds character and charm to any area.",
    bullets: ["Patios & driveways", "Footpaths & walkways", "Pool surrounds", "Facility exteriors", "Shop interiors"],
  },
  {
    id: "05",
    title: "Concrete Sealers",
    tag: "Protection",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    intro: "Concrete sealer is applied to protect concrete from corrosion. The sealer blocks the pores in the concrete to reduce absorption of water and salts, forming an impermeable protective layer.",
    bullets: ["Dramatically improves appearance", "Protects from harsh Australian weather", "Resists dirt, grime, salt and oils", "Easy to wash and clean"],
  },
  {
    id: "06",
    title: "Slabs & Footings",
    tag: "Structural",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    intro: "We provide high quality concrete slabs for the perfect foundation to your new property, renovation or extension. We have many years of experience in laying concrete slabs for a range of applications.",
    bullets: [],
  },
  {
    id: "07",
    title: "Patios & Entertainment Areas",
    tag: "Outdoor",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    intro: "We offer a full design, consultation and installation service. The company owner Robert Belmonte is also a fully licensed builder. We can apply decorative concrete to your entertainment areas, pool and garden surroundings.",
    bullets: [],
  },
  {
    id: "08",
    title: "Footpaths",
    tag: "Residential",
    src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=900&q=80",
    intro: "We can pour concrete for creating new paths and driveways, finished to a high quality in a variety of decorative and stencilled designs. Create instant street appeal for your home.",
    bullets: [],
  },
  {
    id: "09",
    title: "Drainage",
    tag: "Infrastructure",
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    intro: "We offer expert drainage solutions. Let our designers work with you to create something unique with a drainage solution that works for your site and budget.",
    bullets: [],
  },
  {
    id: "10",
    title: "Excavation",
    tag: "Earthworks",
    src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=900&q=80",
    intro: "Excavation is necessary for construction on a sloped site and when removal of large amounts of materials is needed. Call CB Concrete Canberra today to discuss your next excavation requirement.",
    bullets: [],
  },
];

export default function OtherServicesPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section style={{ position: "relative", height: 400, overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="Other services" fill sizes="100vw" priority
          style={{ objectFit: "cover", filter: "grayscale(60%) brightness(0.28)" }}
        />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "4rem 3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
            <Link href="/" style={{ fontSize: 12, color: "#666", textDecoration: "none", letterSpacing: 1 }}>HOME</Link>
            <span style={{ color: "#444", fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, color: "var(--gold)", letterSpacing: 1, fontWeight: 700 }}>OTHER SERVICES</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
            <div style={{ width: 40, height: 3, background: "var(--gold)" }} />
            <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>Specialties & Finishes</span>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.0, letterSpacing: -2, textTransform: "uppercase" }}>
            CB CANBERRA<br /><span style={{ color: "var(--gold)" }}>OTHER SERVICES</span>
          </h1>
        </div>
      </section>

      {/* ── Yellow strip ── */}
      <div style={{ background: "var(--gold)", padding: "1.25rem 3rem" }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#111", letterSpacing: 1, textTransform: "uppercase" }}>
          Canberra&apos;s leading concrete contractors &amp; excavation company
        </p>
      </div>

      {/* ── Magazine grid ── */}
      <section style={{ background: "var(--dark)", padding: "5rem 3rem" }}>

        {/* Row 1: big left + two stacked right */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "3px", marginBottom: "3px" }}>
          {/* Big feature card */}
          <MagCard s={services[0]} size="large" expanded={expanded} setExpanded={setExpanded} />
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "3px" }}>
            <MagCard s={services[1]} size="small" expanded={expanded} setExpanded={setExpanded} />
            <MagCard s={services[2]} size="small" expanded={expanded} setExpanded={setExpanded} />
          </div>
        </div>

        {/* Row 2: three equal */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3px", marginBottom: "3px" }}>
          <MagCard s={services[3]} size="medium" expanded={expanded} setExpanded={setExpanded} />
          <MagCard s={services[4]} size="medium" expanded={expanded} setExpanded={setExpanded} />
          <MagCard s={services[5]} size="medium" expanded={expanded} setExpanded={setExpanded} />
        </div>

        {/* Row 3: small left + big right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3px", marginBottom: "3px" }}>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: "3px" }}>
            <MagCard s={services[6]} size="small" expanded={expanded} setExpanded={setExpanded} />
            <MagCard s={services[7]} size="small" expanded={expanded} setExpanded={setExpanded} />
          </div>
          <MagCard s={services[8]} size="large" expanded={expanded} setExpanded={setExpanded} />
        </div>

        {/* Row 4: full width last card */}
        <div style={{ marginBottom: "3px" }}>
          <MagCard s={services[9]} size="wide" expanded={expanded} setExpanded={setExpanded} />
        </div>
      </section>

      <Footer />
    </>
  );
}

function MagCard({ s, size, expanded, setExpanded }: {
  s: typeof services[0];
  size: "large" | "medium" | "small" | "wide";
  expanded: string | null;
  setExpanded: (id: string | null) => void;
}) {
  const isExpanded = expanded === s.id;
  const heights: Record<string, number> = { large: 560, medium: 340, small: 270, wide: 280 };
  const h = heights[size];
  const titleSize = size === "large" ? 28 : size === "wide" ? 24 : size === "medium" ? 19 : 16;

  return (
    <div
      onClick={() => setExpanded(isExpanded ? null : s.id)}
      style={{ position: "relative", height: h, overflow: "hidden", cursor: "pointer" }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("img") as HTMLImageElement;
        if (img) img.style.transform = "scale(1.06)";
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img") as HTMLImageElement;
        if (img) img.style.transform = "scale(1)";
      }}
    >
      {/* Photo */}
      <Image src={s.src} alt={s.title} fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover", filter: "grayscale(70%)", transition: "transform 0.5s ease" }}
      />

      {/* Base gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: isExpanded
          ? "rgba(0,0,0,0.88)"
          : "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
        transition: "background 0.35s",
      }} />

      {/* Tag pill — top left */}
      <div style={{
        position: "absolute", top: 16, left: 16, zIndex: 2,
        background: "var(--gold)", padding: "4px 10px",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontSize: 9, fontWeight: 900, color: "#111", letterSpacing: 2, textTransform: "uppercase" }}>{s.tag}</span>
      </div>

      {/* Number — top right */}
      <span style={{
        position: "absolute", top: 16, right: 16, zIndex: 2,
        fontSize: 11, fontWeight: 800, color: "rgba(245,197,24,0.7)", letterSpacing: 2,
      }}>{s.id}</span>

      {/* Default bottom content */}
      {!isExpanded && (
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", zIndex: 2 }}>
          <h3 style={{ fontSize: titleSize, fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.5rem", letterSpacing: -0.5 }}>
            {s.title}
          </h3>
          {(size === "large" || size === "wide") && (
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.65, marginBottom: "1rem" }}>
              {s.intro.slice(0, 120)}...
            </p>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 20, height: 2, background: "var(--gold)" }} />
            <span style={{ fontSize: 10, color: "var(--gold)", letterSpacing: 2, fontWeight: 700 }}>READ MORE</span>
          </div>
        </div>
      )}

      {/* Expanded overlay content */}
      {isExpanded && (
        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          padding: "2rem", overflowY: "auto",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          {/* Close hint */}
          <div style={{ position: "absolute", top: 16, right: 60, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: 1 }}>
            CLICK TO CLOSE
          </div>

          <div style={{ width: 28, height: 2, background: "var(--gold)", marginBottom: "1rem" }} />
          <h3 style={{ fontSize: titleSize, fontWeight: 900, color: "#fff", marginBottom: "1rem", lineHeight: 1.1, letterSpacing: -0.5 }}>
            {s.title}
          </h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: s.bullets.length ? "1.25rem" : 0 }}>
            {s.intro}
          </p>
          {s.bullets.length > 0 && (
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {s.bullets.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, marginTop: 5 }} />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}