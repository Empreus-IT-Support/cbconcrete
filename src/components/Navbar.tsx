"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { label: "Home", href: "/" },
    { label: "Concreting", href: "/concreting" },
    { label: "Other Services", href: "/other-services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="nav-topbar-email" style={{
        background: "var(--gold)", color: "#111",
        justifyContent: "flex-end", alignItems: "center",
        padding: "0 3rem", height: 36, gap: "2rem",
        fontSize: 12, fontWeight: 600, letterSpacing: 0.5,
      }}>
        <a href="tel:0402122028" style={{ color: "#111", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/>
          </svg>
          0402 122 028
        </a>
        <span style={{ width: 1, height: 16, background: "rgba(0,0,0,0.2)" }} />
        <a href="mailto:admin@cbconcrete.com.au" style={{ color: "#111", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
          </svg>
          admin@cbconcrete.com.au
        </a>
      </div>

      {/* Main nav */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.97)" : "var(--dark2)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        transition: "all 0.3s",
        display: "flex", alignItems: "center",
        padding: "0 1.5rem", height: 68, gap: "1.5rem",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center" }}>
          <Image src="/cb-concrete-logo.png" alt="CB Concrete" width={259} height={29} priority style={{ height: 30, width: "auto" }} />
        </Link>

        {/* Links (desktop) */}
        <ul className="nav-links" style={{ listStyle: "none", margin: 0, flex: 1, gap: 0 }}>
          {links.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.label}>
                <Link href={item.href} style={{
                  color: active ? "var(--gold)" : "#888",
                  textDecoration: "none", fontSize: 13,
                  padding: "0 18px", display: "flex", alignItems: "center", height: 68,
                  fontWeight: active ? 700 : 400,
                  letterSpacing: 1, textTransform: "uppercase",
                  borderBottom: active ? "3px solid var(--gold)" : "3px solid transparent",
                  transition: "color 0.2s, border-color 0.2s",
                }}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA (desktop) */}
        <a href="/#contact" className="nav-cta" style={{
          background: "var(--gold)", color: "#111",
          padding: "10px 24px", fontWeight: 800,
          fontSize: 12, letterSpacing: 2,
          textTransform: "uppercase", textDecoration: "none",
          flexShrink: 0, whiteSpace: "nowrap",
        }}>
          Free Quote
        </a>

        {/* Burger (mobile) */}
        <button
          className="nav-burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            marginLeft: "auto", background: "transparent", border: "none",
            width: 40, height: 40, flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 5, cursor: "pointer",
          }}
        >
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", transition: "transform 0.2s", transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ width: 24, height: 2, background: "#fff", display: "block", transition: "transform 0.2s", transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <Image src="/cb-concrete-logo.png" alt="CB Concrete" width={259} height={29} style={{ height: 26, width: "auto" }} />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: "transparent", border: "none",
              color: "#fff", fontSize: 28, cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.5rem", margin: 0 }}>
          {links.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.label}>
                <Link href={item.href} style={{
                  color: active ? "var(--gold)" : "#fff",
                  textDecoration: "none", fontSize: 24, fontWeight: 800,
                  letterSpacing: 1, textTransform: "uppercase",
                }}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <a href="/#contact" onClick={() => setMenuOpen(false)} style={{
          background: "var(--gold)", color: "#111",
          padding: "14px 28px", fontWeight: 800,
          fontSize: 13, letterSpacing: 2,
          textTransform: "uppercase", textDecoration: "none",
          marginTop: "2.5rem", textAlign: "center",
        }}>
          Free Quote
        </a>
      </div>
    </>
  );
}
