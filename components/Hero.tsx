"use client";

import { useEffect, useRef } from "react";
import { ChevronRight, ArrowDown } from "lucide-react";
import { openContact } from "@/lib/contact";

// Animated floating particles for the hero
function CircuitLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Horizontal lines */}
          <path d="M0 40 H60 M80 40 H140 M160 40 H200" stroke="#C8952C" strokeWidth="1" fill="none" />
          <path d="M0 100 H80 M120 100 H200" stroke="#C8952C" strokeWidth="1" fill="none" />
          <path d="M0 160 H40 M60 160 H200" stroke="#C8952C" strokeWidth="1" fill="none" />
          {/* Vertical lines */}
          <path d="M60 0 V60 M60 80 V140 M60 160 V200" stroke="#C8952C" strokeWidth="1" fill="none" />
          <path d="M140 0 V40 M140 60 V100" stroke="#C8952C" strokeWidth="1" fill="none" />
          {/* Nodes */}
          <circle cx="60" cy="40" r="3" fill="#C8952C" />
          <circle cx="140" cy="40" r="3" fill="#C8952C" />
          <circle cx="80" cy="100" r="3" fill="#C8952C" />
          <circle cx="60" cy="160" r="3" fill="#C8952C" />
          <circle cx="140" cy="100" r="2" fill="#E8B84B" />
          <circle cx="60" cy="80" r="2" fill="#E8B84B" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg"
    >
      {/* Grid dot overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Circuit board lines */}
      <CircuitLines />

      {/* Right-side globe/world accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#C8952C" strokeWidth="1" fill="none" />
          <ellipse cx="200" cy="200" rx="90" ry="190" stroke="#C8952C" strokeWidth="0.8" fill="none" />
          <ellipse cx="200" cy="200" rx="160" ry="190" stroke="#C8952C" strokeWidth="0.8" fill="none" />
          <line x1="10" y1="200" x2="390" y2="200" stroke="#C8952C" strokeWidth="0.8" />
          <line x1="200" y1="10" x2="200" y2="390" stroke="#C8952C" strokeWidth="0.8" />
          <ellipse cx="200" cy="200" rx="190" ry="80" stroke="#C8952C" strokeWidth="0.5" fill="none" />
          <ellipse cx="200" cy="200" rx="190" ry="40" stroke="#C8952C" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      {/* Gold accent orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-navy-light/30 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-gold/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-sm font-medium tracking-wide">
              Established 2005 · Hong Kong
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Your Trusted Partner for
            <span className="block mt-1">
              <span className="gold-shimmer">Consumer Electronics</span>
            </span>
            <span className="block text-white/90">Sourcing</span>
          </h1>

          {/* Subheadline */}
         <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
  Connecting global brands with resellers across Asia, Middle East &amp; Americas
  &mdash; backed by years of industry experience, distributor pricing, fast response, and service across 50+ countries.
</p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); openContact(); }}
              className="btn-primary text-base"
            >
              Get a Quote
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#products"
              onClick={(e) => { e.preventDefault(); scrollTo("#products"); }}
              className="btn-outline text-base"
            >
              View Our Products
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "15+ Years Global Experience",
              "30+ Premium Brands",
              "50+ Countries",
              "B2B Distributor Pricing",
            ].map((tag) => (
              <div key={tag} className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
