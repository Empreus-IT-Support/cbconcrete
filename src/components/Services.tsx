"use client";
import Link from "next/link";
import Image from "next/image";

const concretingServices = [
  { num: "01", title: "Site-Pre/Cut", desc: "Precision site preparation and pre-cutting for a flawless project start.", src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80" },
  { num: "02", title: "Excavation", desc: "Professional earthmoving and bulk excavation for residential and commercial sites.", src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80" },
  { num: "03", title: "House Slab Prep & Infill", desc: "Full slab preparation including infill, moisture barriers and steel mesh reinforcement.", src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80" },
  { num: "04", title: "Waffle Slabs", desc: "Engineered waffle pod slab systems for superior load distribution.", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" },
  { num: "05", title: "Foundations & Footings", desc: "Rock-solid footings and foundation work meeting all ACT building codes.", src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80" },
  { num: "06", title: "Pathways, Driveways & Drainage", desc: "Durable concrete paths and driveways with integrated drainage solutions.", src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&q=80" },
  { num: "07", title: "Garages, Carports & Sheds", desc: "Smooth, level concrete floors for garages, carports and sheds.", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { num: "08", title: "Patios & Entertainment Areas", desc: "Beautifully finished outdoor entertaining slabs for Australian lifestyles.", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { num: "09", title: "Decorative & Stencil", desc: "Decorative concrete finishes and stencil patterns that elevate any surface.", src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
];

// No wide cards — uniform 3-column grid fills perfectly for 9 items
const isWide = (_i: number) => false;

export default function Services() {
  return (
    <section id="concreting" style={{ background: "var(--dark)", padding: "7rem 3rem" }}>

      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
        <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
        <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
          What we do
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1.5rem" }}>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, color: "#fff", letterSpacing: -1, lineHeight: 1.05 }}>
          Our services cover a wide<br />range of applications
        </h2>
        <Link href="#contact" style={{
          background: "var(--gold)", color: "#111",
          padding: "12px 28px", fontWeight: 800,
          fontSize: 12, letterSpacing: 2,
          textTransform: "uppercase", textDecoration: "none",
        }}>
          Get a Quote →
        </Link>
      </div>

      {/* 3x3 uniform grid — 9 cards fill perfectly */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 280px)",
        gap: "3px",
      }}>
        {concretingServices.map((s, i) => (
          <div
            key={s.num}
            style={{
              position: "relative", overflow: "hidden",
              gridColumn: isWide(i) ? "span 2" : "span 1",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              const img = e.currentTarget.querySelector("img") as HTMLImageElement;
              if (img) img.style.transform = "scale(1.08)";
              const panel = e.currentTarget.querySelector(".hover-panel") as HTMLElement;
              if (panel) panel.style.transform = "translateY(0)";
              const title = e.currentTarget.querySelector(".card-title") as HTMLElement;
              if (title) title.style.opacity = "0";
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget.querySelector("img") as HTMLImageElement;
              if (img) img.style.transform = "scale(1)";
              const panel = e.currentTarget.querySelector(".hover-panel") as HTMLElement;
              if (panel) panel.style.transform = "translateY(100%)";
              const title = e.currentTarget.querySelector(".card-title") as HTMLElement;
              if (title) title.style.opacity = "1";
            }}
          >
            {/* Photo */}
            <Image
              src={s.src} alt={s.title} fill
              sizes="33vw"
              style={{ objectFit: "cover", filter: "grayscale(70%)", transition: "transform 0.5s ease" }}
            />

            {/* Always-on gradient */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)",
            }} />

            {/* Number badge */}
            <span style={{
              position: "absolute", top: 14, left: 16, zIndex: 2,
              fontSize: 10, color: "var(--gold)", fontWeight: 800, letterSpacing: 3,
            }}>{s.num}</span>

            {/* Yellow ↗ corner */}
            <div style={{
              position: "absolute", top: 12, right: 12, zIndex: 2,
              width: 26, height: 26, background: "var(--gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 900, color: "#111",
            }}>↗</div>

            {/* Default title */}
            <div className="card-title" style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "1.25rem", zIndex: 2, transition: "opacity 0.25s",
            }}>
              <h3 style={{ fontSize: isWide(i) ? 18 : 14, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
                {s.title}
              </h3>
            </div>

            {/* Hover: yellow panel slides up */}
            <div className="hover-panel" style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "var(--gold)", padding: "1.5rem",
              zIndex: 3, transform: "translateY(100%)",
              transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}>
              <span style={{ fontSize: 10, color: "#111", letterSpacing: 3, fontWeight: 800, opacity: 0.5, textTransform: "uppercase" }}>{s.num}</span>
              <h3 style={{ fontSize: isWide(i) ? 17 : 14, fontWeight: 900, color: "#111", margin: "6px 0 8px", lineHeight: 1.2 }}>{s.title}</h3>
              <p style={{ fontSize: 12, color: "#333", lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</p>
              <Link href="#contact" style={{
                fontSize: 10, fontWeight: 800, color: "#111",
                textDecoration: "none", letterSpacing: 2.5,
                textTransform: "uppercase", borderBottom: "2px solid #111",
                paddingBottom: 2,
              }}>
                READ MORE →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}