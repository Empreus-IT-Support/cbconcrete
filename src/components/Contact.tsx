"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  intent: string;
  message: string;
};

const services = [
  "Concreting", "Exposed Aggregate", "Polished Concrete", "Coloured Concrete",
  "Stencil Concrete", "Concrete Sealers", "Slabs & Footings",
  "Patios, Pergolas, And Entertaining Areas", "Footpaths", "Drainage", "Excavation",
];

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitSuccessful, errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  const selectStyle: React.CSSProperties = {
    border: "none", background: "transparent",
    fontSize: 17, fontWeight: 600, color: "#111",
    fontFamily: "inherit", outline: "none", width: "100%",
    cursor: "pointer", appearance: "none",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 0",
    background: "transparent",
    border: "none", borderBottom: "1.5px solid #e0e0e0",
    fontSize: 14, fontFamily: "inherit",
    color: "#111", outline: "none",
  };

  return (
    <section id="contact" style={{ position: "relative" }}>
      {/* Full-bleed background photo */}
      <div style={{ position: "relative", minHeight: 780, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
          alt="Construction site workers"
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover", filter: "grayscale(100%) brightness(0.45)" }}
        />

        {/* Left side text overlay */}
        <div style={{
          position: "absolute", left: "3rem", top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2, maxWidth: 420,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.25rem" }}>
            <div style={{ width: 36, height: 3, background: "var(--gold)" }} />
            <p style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700 }}>
              Free quote
            </p>
          </div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 900, color: "#fff",
            lineHeight: 1.05, letterSpacing: -1,
            marginBottom: "1.5rem",
          }}>
            Let&apos;s build<br />
            <span style={{ color: "var(--gold)" }}>something great.</span>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
            Tell us about your project and we&apos;ll get back to you with a
            no-obligation quote within 24 hours.
          </p>

          {/* Contact pills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2.5rem" }}>
            {[
              { icon: "☎", label: "0402 122 028", href: "tel:0402122028" },
              { icon: "✉", label: "admin@cbconcrete.com.au", href: "mailto:admin@cbconcrete.com.au" },
            ].map((c) => (
              <a key={c.label} href={c.href} style={{
                display: "inline-flex", alignItems: "center", gap: "1rem",
                textDecoration: "none",
              }}>
                <div style={{
                  width: 40, height: 40, background: "var(--gold)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, flexShrink: 0,
                }}>{c.icon}</div>
                <span style={{ color: "#fff", fontSize: 15, fontWeight: 500 }}>{c.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* White form card */}
        <div style={{
          position: "relative", zIndex: 2,
          background: "#fff",
          padding: "3.5rem 3rem",
          width: "100%", maxWidth: 500,
          margin: "3rem 3rem",
          flexShrink: 0,
        }}>
          {/* Yellow top stripe */}
          <div style={{ height: 4, background: "var(--gold)", position: "absolute", top: 0, left: 0, right: 0 }} />

          <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111", marginBottom: "2rem", letterSpacing: -0.5 }}>
            Request a free quote
          </h3>

          {/* I want */}
          <div style={{ marginBottom: "1.5rem", borderBottom: "1.5px solid #e0e0e0", paddingBottom: "1rem" }}>
            <p style={{ fontSize: 11, color: "#aaa", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>I want</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <select {...register("intent")} style={selectStyle}>
                <option>Book a free quote</option>
                <option>Call me to discuss my questions</option>
                <option>Mail me your full information pack</option>
              </select>
              <span style={{ color: "#aaa", fontSize: 16, flexShrink: 0 }}>∨</span>
            </div>
          </div>

          {/* I'm interested */}
          <div style={{ marginBottom: "2rem", borderBottom: "1.5px solid #e0e0e0", paddingBottom: "1rem" }}>
            <p style={{ fontSize: 11, color: "#aaa", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>I&apos;m interested in</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <select {...register("service")} style={selectStyle}>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
              <span style={{ color: "#aaa", fontSize: 16, flexShrink: 0 }}>∨</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <label style={{ fontSize: 11, color: "#aaa", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 4 }}>
                * Your Name
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Eg. John Doe"
                style={{ ...inputStyle, borderBottomColor: errors.name ? "#e53e3e" : "#e0e0e0" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
              <div>
                <label style={{ fontSize: 11, color: "#aaa", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 4 }}>* Your Email</label>
                <input {...register("email", { required: true })} type="email" placeholder="name@company.com" style={inputStyle} />
              </div>
              <div>
                <label style={{ fontSize: 11, color: "#aaa", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 4 }}>* Phone</label>
                <input {...register("phone", { required: true })} placeholder="04xx xxx xxx" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 11, color: "#aaa", letterSpacing: 1, textTransform: "uppercase", display: "block", marginBottom: 4 }}>* Message</label>
              <textarea
                {...register("message")}
                rows={3}
                placeholder="Tell us about your project..."
                style={{ ...inputStyle, resize: "none", borderBottom: "1.5px solid #e0e0e0" }}
              />
            </div>

            <button type="submit" style={{
              background: "#111", color: "#fff",
              border: "none", padding: "16px 32px",
              fontWeight: 800, fontSize: 13, cursor: "pointer",
              letterSpacing: 1.5, textTransform: "uppercase",
              width: "100%", marginTop: "0.5rem",
              position: "relative", overflow: "hidden",
            }}>
              {isSubmitSuccessful ? "✓ Message Sent" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}