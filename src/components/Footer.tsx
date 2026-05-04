"use client";

const col1 = ["Concreting", "Exposed Aggregate", "Polished Concrete"];
const col2 = ["Coloured Concrete", "Stencil Concrete", "Concrete Sealers"];
const col3 = ["Slabs & Footings", "Footpaths", "Drainage"];
const col4 = ["Patios, Pergolas, And Entertaining Areas", "Excavation"];

export default function Footer() {
  return (
    <footer style={{ background: "#050505", position: "relative", overflow: "hidden" }}>
      {/* Hazard stripe */}
      <div style={{
        height: 12,
        background: "repeating-linear-gradient(45deg, var(--gold) 0px, var(--gold) 12px, #111 12px, #111 24px)",
      }} />

      {/* CTA section */}
      <div style={{ padding: "6rem 3rem 4rem", position: "relative" }}>
        {/* Dot grid */}
        <div style={{ position: "absolute", top: 40, right: 80, opacity: 0.05 }}>
          {[...Array(7)].map((_, row) => (
            <div key={row} style={{ display: "flex", gap: 22, marginBottom: 22 }}>
              {[...Array(9)].map((_, col) => (
                <div key={col} style={{ width: 4, height: 4, borderRadius: "50%", background: "#fff" }} />
              ))}
            </div>
          ))}
        </div>
        {/* Circle outlines */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 420, height: 420, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.03)" }} />
        <div style={{ position: "absolute", top: -20, right: 20, width: 280, height: 280, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />

        <h2 style={{
          fontSize: "clamp(3rem, 8vw, 6rem)",
          fontWeight: 900, lineHeight: 0.95,
          letterSpacing: -3, position: "relative", zIndex: 1,
        }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300, fontStyle: "italic" }}>contact us </span>
          <span style={{ color: "#fff" }}>today.</span>
          <br />
          <span style={{ color: "#fff" }}>For all your </span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300, fontStyle: "italic" }}>construction </span>
          <span style={{ color: "#fff" }}>needs!</span>
        </h2>

        <div style={{ display: "flex", gap: "1rem", marginTop: "3rem", flexWrap: "wrap" }}>
          <a href="#contact" style={{
            background: "var(--gold)", color: "#111",
            padding: "15px 36px", fontWeight: 800, fontSize: 12,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
          }}>
            Get a Free Quote →
          </a>
          <a href="tel:0402122028" style={{
            border: "1px solid rgba(255,255,255,0.12)", color: "#fff",
            padding: "15px 36px", fontWeight: 600, fontSize: 12,
            letterSpacing: 2, textTransform: "uppercase", textDecoration: "none",
          }}>
            Call 0402 122 028
          </a>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "0 3rem" }} />

      {/* Services grid */}
      <div style={{ padding: "4rem 3rem" }}>
        <p style={{ fontSize: 10, letterSpacing: 4, color: "rgba(245,197,24,0.8)", textTransform: "uppercase", marginBottom: "2rem", fontWeight: 700 }}>
          OUR SERVICES
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2.5rem" }}>
          {[col1, col2, col3, col4].map((col, i) => (
            <ul key={i} style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {col.map((l) => (
                <li key={l}>
                  <a href="#" style={{ color: "#aaa", textDecoration: "none", fontSize: 14, lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 10, transition: "color 0.2s" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold)";
                      const dot = e.currentTarget.querySelector(".dot") as HTMLElement;
                      if (dot) dot.style.background = "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#aaa";
                      const dot = e.currentTarget.querySelector(".dot") as HTMLElement;
                      if (dot) dot.style.background = "#555";
                    }}
                  >
                    <span className="dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "#555", flexShrink: 0, marginTop: 6, transition: "background 0.2s" }} />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "0 3rem" }} />

      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", padding: "1.75rem 3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 12, fontWeight: 900, color: "#111" }}>CB</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 800, color: "#fff", letterSpacing: 3, textTransform: "uppercase" }}>CONCRETE</span>
        </div>

        <p style={{ fontSize: 12, color: "#888" }}>
          Copyright © 2023 CB Concrete. Managed by{" "}
          <a href="https://subzdesigns.com" style={{ color: "#bbb", fontWeight: 700, textDecoration: "none" }}>Subz Designs</a>
        </p>

        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", gap: 8, color: "#333", textDecoration: "none", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          GO TO TOP
          <span style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#fff" }}>↑</span>
        </a>
      </div>
    </footer>
  );
}