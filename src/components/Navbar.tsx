"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Concreting", href: "/concreting" },
    { label: "Other Services", href: "/other-services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div style={{
        background: "var(--gold)", color: "#111",
        display: "flex", justifyContent: "flex-end", alignItems: "center",
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
        padding: "0 3rem", height: 68, gap: "3rem",
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: "var(--gold)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 14, fontWeight: 900, color: "#111" }}>CB</span>
          </div>
          <span style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: 3, textTransform: "uppercase" }}>
            CONCRETE
          </span>
        </Link>

        {/* Links */}
        <ul style={{ display: "flex", listStyle: "none", margin: 0, flex: 1, gap: 0 }}>
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

        {/* CTA */}
        <a href="/#contact" style={{
          background: "var(--gold)", color: "#111",
          padding: "10px 24px", fontWeight: 800,
          fontSize: 12, letterSpacing: 2,
          textTransform: "uppercase", textDecoration: "none",
          flexShrink: 0, whiteSpace: "nowrap",
        }}>
          Free Quote
        </a>
      </nav>
    </>
  );
}