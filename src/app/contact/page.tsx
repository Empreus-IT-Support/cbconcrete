"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  role: string;
  intent: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const roles = ["Architect/Designer", "Builder", "Contractor", "DIYer", "Engineer", "Other"];
const intents = ["Book a free quote", "Call me to discuss my questions", "Mail me your full information pack"];
const services = [
  "Concreting", "Exposed Aggregate", "Polished Concrete", "Coloured Concrete",
  "Stencil Concrete", "Concrete Sealers", "Slabs & Footings",
  "Patios, Pergolas, And Entertaining Areas", "Footpaths", "Drainage", "Excavation",
];

const inputStyle = (hasError: boolean): React.CSSProperties => ({
  width: "100%", padding: "16px 0",
  background: "transparent",
  border: "none", borderBottom: `2px solid ${hasError ? "#e53e3e" : "rgba(255,255,255,0.12)"}`,
  color: "#fff", fontSize: 15, fontFamily: "inherit",
  outline: "none", transition: "border-color 0.2s",
});

export default function ContactPage() {
  const { register, handleSubmit, formState: { isSubmitSuccessful, errors } } = useForm<FormData>();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
      <Navbar />

      {/* ── Full page split layout ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 108px)" }}>

        {/* LEFT — dark image side */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
            alt="Contact background" fill sizes="50vw" priority
            style={{ objectFit: "cover", filter: "grayscale(100%) brightness(0.3)" }}
          />

          {/* Diagonal slice on right edge */}
          <div style={{
            position: "absolute", top: 0, bottom: 0, right: -40,
            width: 80, background: "var(--dark)",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
            zIndex: 2,
          }} />

          {/* Content over image */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            display: "flex", flexDirection: "column",
            justifyContent: "space-between", padding: "4rem 4rem 4rem 3rem",
          }}>
            {/* Top: breadcrumb */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Link href="/" style={{ fontSize: 11, color: "#555", textDecoration: "none", letterSpacing: 2, textTransform: "uppercase" }}>Home</Link>
              <span style={{ color: "#333" }}>/</span>
              <span style={{ fontSize: 11, color: "var(--gold)", letterSpacing: 2, textTransform: "uppercase", fontWeight: 700 }}>Contact</span>
            </div>

            {/* Middle: big headline */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "2rem" }}>
                <div style={{ width: 48, height: 3, background: "var(--gold)" }} />
                <span style={{ fontSize: 10, color: "var(--gold)", letterSpacing: 4, textTransform: "uppercase", fontWeight: 700 }}>
                  Get in touch
                </span>
              </div>
              <h1 style={{
                fontSize: "clamp(3rem, 5vw, 5rem)",
                fontWeight: 900, color: "#fff",
                lineHeight: 0.92, letterSpacing: -3,
                textTransform: "uppercase", marginBottom: "2rem",
              }}>
                TELL US<br />ABOUT<br />YOUR<br />
                <span style={{ color: "var(--gold)", WebkitTextStroke: "0px" }}>PROJECT.</span>
              </h1>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.85, maxWidth: 360 }}>
                We&apos;re excited to work together. We welcome your questions and comments,
                and look forward to speaking with you.
              </p>
            </div>

            {/* Bottom: contact info blocks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { label: "Call us Now!", value: "0402 122 028", href: "tel:0402122028" },
                { label: "Talk to us", value: "admin@cbconcrete.com.au", href: "mailto:admin@cbconcrete.com.au" },
                { label: "Service Area", value: "Canberra & surrounds", href: null },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: 3, height: 36, background: "var(--gold)", flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 9, color: "var(--gold)", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 3 }}>{c.label}</p>
                    {c.href
                      ? <a href={c.href} style={{ fontSize: 15, color: "#fff", fontWeight: 600, textDecoration: "none" }}>{c.value}</a>
                      : <p style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>{c.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — form side */}
        <div style={{
          background: "var(--dark2)",
          padding: "5rem 4rem",
          overflowY: "auto",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "3rem" }}>
            <div style={{ width: 32, height: 2, background: "var(--gold)" }} />
            <span style={{ fontSize: 10, color: "var(--gold)", letterSpacing: 4, textTransform: "uppercase", fontWeight: 700 }}>
              Start your project
            </span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            {/* Role pills */}
            <div>
              <p style={{ fontSize: 10, color: "#555", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>
                I&apos;m a/an
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {roles.map((r) => (
                  <button
                    key={r} type="button"
                    onClick={() => setSelectedRole(r)}
                    style={{
                      padding: "8px 16px", fontSize: 12,
                      border: `1px solid ${selectedRole === r ? "var(--gold)" : "rgba(255,255,255,0.1)"}`,
                      background: selectedRole === r ? "var(--gold)" : "transparent",
                      color: selectedRole === r ? "#111" : "#777",
                      cursor: "pointer", fontFamily: "inherit",
                      fontWeight: selectedRole === r ? 700 : 400,
                      transition: "all 0.2s", letterSpacing: 0.5,
                    }}
                  >{r}</button>
                ))}
              </div>
            </div>

            {/* Intent */}
            <div>
              <p style={{ fontSize: 10, color: "#555", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>
                I want to
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {intents.map((intent) => (
                  <label key={intent} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
                    <input type="radio" value={intent} {...register("intent", { required: true })}
                      style={{ accentColor: "var(--gold)", width: 16, height: 16 }}
                    />
                    <span style={{ fontSize: 14, color: "#aaa" }}>{intent}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Service dropdown */}
            <div>
              <p style={{ fontSize: 10, color: "#555", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: "1rem" }}>
                I&apos;m interested in
              </p>
              <div style={{ position: "relative" }}>
                <select {...register("service", { required: true })} defaultValue=""
                  style={{
                    width: "100%", padding: "14px 40px 14px 0",
                    background: "transparent",
                    border: "none", borderBottom: `2px solid ${errors.service ? "#e53e3e" : "rgba(255,255,255,0.12)"}`,
                    color: "#aaa", fontSize: 15, fontFamily: "inherit",
                    outline: "none", appearance: "none", cursor: "pointer",
                  }}>
                  <option value="" disabled style={{ background: "#1a1a1a" }}>Select a service...</option>
                  {services.map((s) => <option key={s} style={{ background: "#1a1a1a" }}>{s}</option>)}
                </select>
                <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", color: "var(--gold)", pointerEvents: "none", fontSize: 18 }}>↓</span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

            {/* Name + Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              <div>
                <p style={{ fontSize: 10, color: "#555", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>* Your Name</p>
                <input {...register("name", { required: true })} placeholder="John Smith" style={inputStyle(!!errors.name)} />
              </div>
              <div>
                <p style={{ fontSize: 10, color: "#555", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>* Phone</p>
                <input {...register("phone", { required: true })} placeholder="04xx xxx xxx" style={inputStyle(!!errors.phone)} />
              </div>
            </div>

            {/* Email */}
            <div>
              <p style={{ fontSize: 10, color: "#555", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>* Email</p>
              <input {...register("email", { required: true })} type="email" placeholder="you@example.com" style={inputStyle(!!errors.email)} />
            </div>

            {/* Message */}
            <div>
              <p style={{ fontSize: 10, color: "#555", letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700, marginBottom: 4 }}>* Message</p>
              <textarea {...register("message", { required: true })} rows={4} placeholder="Tell us about your project..."
                style={{ ...inputStyle(!!errors.message), resize: "none", borderBottom: `2px solid ${errors.message ? "#e53e3e" : "rgba(255,255,255,0.12)"}` }}
              />
            </div>

            {/* Submit */}
            <button type="submit" style={{
              background: isSubmitSuccessful ? "#1a1a1a" : "var(--gold)",
              color: isSubmitSuccessful ? "var(--gold)" : "#111",
              border: isSubmitSuccessful ? "1px solid var(--gold)" : "none",
              padding: "18px 40px", fontWeight: 900,
              fontSize: 12, letterSpacing: 3,
              textTransform: "uppercase", cursor: "pointer",
              fontFamily: "inherit", alignSelf: "flex-start",
              transition: "all 0.3s",
            }}>
              {isSubmitSuccessful ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}