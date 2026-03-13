"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "white" : "transparent",
        boxShadow: scrolled ? "0 4px 20px rgba(11,31,58,0.08)" : "none",
        borderBottom: scrolled ? "1px solid #f0f0f0" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex items-center gap-2.5 group"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
              style={{ background: "#0B1F3A" }}
            >
              <span style={{ color: "#C8952C", fontWeight: 700, fontSize: "0.8rem" }}>VG</span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-lg tracking-tight transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: scrolled ? "#0B1F3A" : "white",
                }}
              >
                VenusGlobal
              </span>
              <span
                className="text-xs"
                style={{ color: "#C8952C" }}
              >
                Trading Ltd.
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm font-medium transition-colors hover:text-yellow-600"
                style={{ color: scrolled ? "#4a5568" : "rgba(255,255,255,0.85)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "#C8952C",
                color: "white",
                boxShadow: "0 4px 12px rgba(200,149,44,0.3)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#A67820")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#C8952C")}
            >
              Get a Quote
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: scrolled ? "#0B1F3A" : "white" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          opacity: menuOpen ? 1 : 0,
          background: "white",
          borderTop: "1px solid #f0f0f0",
          boxShadow: menuOpen ? "0 8px 24px rgba(11,31,58,0.1)" : "none",
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="font-medium py-2.5 px-3 rounded-lg transition-all"
              style={{ color: "#334155" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C8952C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#334155")}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
            className="mt-2 flex items-center justify-center gap-1.5 font-semibold py-3 px-5 rounded-lg transition-colors"
            style={{ background: "#C8952C", color: "white" }}
          >
            Get a Quote <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
