"use client";

const specialties = [
  "Exposed Aggregate",
  "Polished Concrete",
  "Coloured Concrete",
  "Stencil Concrete",
  "Concrete Sealers",
  "Decorative Finishes",
];

export default function Specialties() {
  return (
    <section style={{ padding: "5rem 2.5rem", background: "var(--dark)" }}>
      <p
        style={{
          fontSize: 11,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "0.75rem",
        }}
      >
        Decorative finishes
      </p>
      <h2
        style={{
          fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
          fontWeight: 700,
          marginBottom: "0.75rem",
          color: "var(--text)",
        }}
      >
        Concrete Specialties
      </h2>
      <div
        style={{
          width: 48,
          height: 3,
          background: "var(--gold)",
          borderRadius: 2,
          margin: "1.25rem 0",
        }}
      />
      <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, maxWidth: 520 }}>
        Transform your concrete surfaces with our premium decorative finish options.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "3rem",
        }}
      >
        {specialties.map((s) => (
          <div
            key={s}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "default",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.background = "rgba(255,245,48,0.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--gold)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}