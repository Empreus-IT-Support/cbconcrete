import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Site-Prep/Cut",
    desc: "We can customise every aspect of design, color and layout to ensure complete flexibility and the best result for your project.",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    num: "02",
    title: "Excavation",
    desc: "Excavation is necessary for construction on a sloped site and when removal of large amount of materials is needed.",
    src: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
  },
  {
    num: "03",
    title: "House Slab Prep & Infill Slab",
    desc: "For a strong, durable and hard wearing foundation it is important to hire a qualified and experienced team of trades people to do a good job.",
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    num: "04",
    title: "Waffle Slabs",
    desc: "We have many years of experience in laying concrete slabs for a range of applications.",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    num: "05",
    title: "Foundations & Footings",
    desc: "We provide high quality concrete slabs for the perfect foundation to your new property, renovation or extension.",
    src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  },
  {
    num: "06",
    title: "Pathways, Driveways & Drainage",
    desc: "Similar to concrete foundation slabs, we can also pour concrete for creating new paths and driveways.",
    src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80",
  },
  {
    num: "07",
    title: "Garages, Carports & Sheds",
    desc: "The company owner Robert Belmonte is also a full-licensed builder. So, regardless of the complexity of your project, we can organise absolutely every detail for you.",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    num: "08",
    title: "Patios & Entertainment Areas",
    desc: "We can apply decorative concrete such as stencil, stamped, exposed aggregate or polish the concrete to your entertainment areas, pool and garden surroundings.",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    num: "09",
    title: "Decorative & Stencil",
    desc: "Stencil finish provides the look of pavers, with the strength and practicality of concrete. You also have the option of choosing from a range of stencil designs which will not sink or sag.",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export default function ConcretingPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero banner ── */}
      <section style={{ position: "relative", height: 420, overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Concreting hero"
          fill sizes="100vw" priority
          style={{ objectFit: "cover", filter: "grayscale(60%) brightness(0.35)" }}
        />
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          display: "flex", flexDirection: "column",
          justifyContent: "flex-end", padding: "4rem 3rem",
        }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem" }}>
            <Link href="/" style={{ fontSize: 12, color: "#777", textDecoration: "none", letterSpacing: 1 }}>HOME</Link>
            <span style={{ color: "#444", fontSize: 12 }}>/</span>
            <span style={{ fontSize: 12, color: "var(--gold)", letterSpacing: 1, fontWeight: 700 }}>CONCRETING</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
            <div style={{ width: 40, height: 3, background: "var(--gold)" }} />
            <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
              Residential & Commercial
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 900, color: "#fff",
            lineHeight: 1.0, letterSpacing: -2,
            textTransform: "uppercase",
          }}>
            CB CANBERRA<br />
            <span style={{ color: "var(--gold)" }}>CONCRETERS</span>
          </h1>
        </div>
      </section>

      {/* ── Intro strip ── */}
      <div style={{ background: "var(--gold)", padding: "1.25rem 3rem" }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: "#111", letterSpacing: 1, textTransform: "uppercase" }}>
          Residential and commercial concreting — Canberra &amp; surrounds
        </p>
      </div>

      {/* ── About paragraph ── */}
      <section style={{ background: "var(--dark2)", padding: "5rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
              <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
              <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
                About CB Concrete
              </span>
            </div>
            <p style={{ fontSize: 16, color: "#bbb", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              CB Concrete is one of Canberra&apos;s leading contractors &amp; excavation companies
              servicing Canberra and surrounds. We specialise in a range of concrete services
              including foundations, house garage and shed slabs, driveways, pathways and
              decorative surfaces.
            </p>
            <p style={{ fontSize: 16, color: "#bbb", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              CB Concrete Canberra provides high quality concreting services to the residential
              and commercial sector. Our services cover a wide range of applications.
            </p>
            <p style={{ fontSize: 14, color: "var(--gold)", fontWeight: 600, fontStyle: "italic", lineHeight: 1.7 }}>
              Call CB Concrete Canberra to organise an obligation free quotation today.
            </p>
            <Link href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--gold)", color: "#111",
              padding: "13px 30px", fontWeight: 800,
              fontSize: 12, letterSpacing: 2,
              textTransform: "uppercase", textDecoration: "none",
              marginTop: "2rem",
            }}>
              Get a Free Quote →
            </Link>
          </div>

          {/* Right: quick stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(245,197,24,0.15)" }}>
            {[
              { val: "20+", label: "Years Experience" },
              { val: "500+", label: "Projects Completed" },
              { val: "100%", label: "Licensed & Insured" },
              { val: "ACT", label: "Builder's Licence" },
            ].map((s, i) => (
              <div key={s.label} style={{
                background: "var(--dark2)",
                padding: "1.75rem 2.5rem",
                display: "flex", alignItems: "center",
                justifyContent: "space-between",
                borderLeft: "3px solid var(--gold)",
              }}>
                <span style={{ fontSize: 13, color: "#777", letterSpacing: 1, textTransform: "uppercase" }}>{s.label}</span>
                <span style={{ fontSize: 28, fontWeight: 900, color: "var(--gold)" }}>{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services: alternating split rows ── */}
      <section style={{ background: "var(--dark)", padding: "7rem 3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1rem" }}>
          <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
          <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 3, textTransform: "uppercase", fontWeight: 700 }}>
            Our Services
          </span>
        </div>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900, color: "#fff",
          letterSpacing: -1, lineHeight: 1.05,
          marginBottom: "4rem",
        }}>
          Our services cover a wide<br />range of applications
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.04)" }}>
          {services.map((s, i) => (
            <div
              key={s.num}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "420px 1fr" : "1fr 420px",
                minHeight: 260,
                overflow: "hidden",
              }}
            >
              {/* Image — left on even rows */}
              {i % 2 === 0 && (
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image src={s.src} alt={s.title} fill sizes="420px"
                    style={{ objectFit: "cover", filter: "grayscale(70%)" }}
                  />
                  <div style={{
                    position: "absolute", top: 16, left: 16,
                    background: "var(--gold)", width: 44, height: 44,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 900, color: "#111" }}>{s.num}</span>
                  </div>
                </div>
              )}

              {/* Text panel */}
              <div style={{
                background: "var(--dark2)",
                padding: "3rem 3.5rem",
                display: "flex", flexDirection: "column",
                justifyContent: "center",
                borderLeft: i % 2 === 0 ? "none" : "3px solid var(--gold)",
                borderRight: i % 2 === 0 ? "3px solid var(--gold)" : "none",
              }}>
                <div style={{ width: 32, height: 2, background: "var(--gold)", marginBottom: "1.5rem" }} />
                <h3 style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  fontWeight: 900, color: "#fff",
                  lineHeight: 1.2, marginBottom: "1rem", letterSpacing: -0.5,
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "#777", lineHeight: 1.85 }}>{s.desc}</p>
              </div>

              {/* Image — right on odd rows */}
              {i % 2 !== 0 && (
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image src={s.src} alt={s.title} fill sizes="420px"
                    style={{ objectFit: "cover", filter: "grayscale(70%)" }}
                  />
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    background: "var(--gold)", width: 44, height: 44,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 900, color: "#111" }}>{s.num}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}