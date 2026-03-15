"use client";

import { openWhatsApp } from "@/lib/whatsapp";

// Each brand gets a fixed vibrant color — deliberately varied, no AI palette
const brandColors: Record<string, { bg: string; text: string; border: string }> = {
  Apple:       { bg: "#1a1a1a",   text: "#ffffff", border: "#444" },
  Samsung:     { bg: "#1428A0",   text: "#ffffff", border: "#1e3ac0" },
  Sony:        { bg: "#CC0000",   text: "#ffffff", border: "#e00" },
  Microsoft:   { bg: "#0078D4",   text: "#ffffff", border: "#0090f0" },
  HP:          { bg: "#0096D6",   text: "#ffffff", border: "#00b0f0" },
  Dell:        { bg: "#007DB8",   text: "#ffffff", border: "#009de0" },
  Lenovo:      { bg: "#E2231A",   text: "#ffffff", border: "#f03030" },
  Acer:        { bg: "#83B81A",   text: "#ffffff", border: "#9cd420" },
  Asus:        { bg: "#00539B",   text: "#ffffff", border: "#0070cc" },
  LG:          { bg: "#A50034",   text: "#ffffff", border: "#cc0040" },
  Nintendo:    { bg: "#E4000F",   text: "#ffffff", border: "#ff1020" },
  PlayStation: { bg: "#003087",   text: "#ffffff", border: "#0040b0" },
  Xbox:        { bg: "#107C10",   text: "#ffffff", border: "#18a018" },
  Logitech:    { bg: "#00B2A9",   text: "#ffffff", border: "#00d0c6" },
  GoPro:       { bg: "#0D0D0D",   text: "#00E5FF", border: "#333" },
  Fitbit:      { bg: "#00B0B9",   text: "#ffffff", border: "#00d4de" },
  Beats:       { bg: "#CC0000",   text: "#ffffff", border: "#e00" },
  Bose:        { bg: "#212121",   text: "#ffffff", border: "#3a3a3a" },
  Sennheiser:  { bg: "#009FE3",   text: "#ffffff", border: "#00bfff" },
  Canon:       { bg: "#CC0000",   text: "#ffffff", border: "#e30" },
  Nikon:       { bg: "#FFCC00",   text: "#000000", border: "#e8b800" },
  Fujifilm:    { bg: "#E60012",   text: "#ffffff", border: "#ff1020" },
  Sigma:       { bg: "#1A1A1A",   text: "#E8B84B", border: "#333" },
  SanDisk:     { bg: "#F7941D",   text: "#ffffff", border: "#ff9e1b" },
  Seagate:     { bg: "#005DAA",   text: "#ffffff", border: "#007acc" },
  Transcend:   { bg: "#005BAC",   text: "#ffffff", border: "#007acc" },
  LaCie:       { bg: "#E8501A",   text: "#ffffff", border: "#ff6020" },
  Nvidia:      { bg: "#76B900",   text: "#000000", border: "#8de000" },
  Breville:    { bg: "#C8952C",   text: "#ffffff", border: "#e8b84b" },
};

const row1 = [
  "Apple","Samsung","Sony","Microsoft","HP","Dell","Lenovo","Acer","Asus","LG","Nintendo","PlayStation","Xbox","Logitech","GoPro",
];
const row2 = [
  "Fitbit","Beats","Bose","Sennheiser","Canon","Nikon","Fujifilm","Sigma","SanDisk","Seagate","Transcend","LaCie","Nvidia","Breville",
];

function BrandPill({ name }: { name: string }) {
  const c = brandColors[name] ?? { bg: "#1E2D3D", text: "#fff", border: "#334" };
  return (
    <div
      className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-xl mx-2 select-none"
      style={{
        background: c.bg,
        border: `1.5px solid ${c.border}`,
        boxShadow: `0 2px 12px ${c.bg}55`,
      }}
    >
      {/* Coloured dot accent */}
      <span
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{ background: c.text === "#ffffff" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.3)" }}
      />
      <span
        className="font-bold tracking-wide whitespace-nowrap text-sm"
        style={{ fontFamily: "'DM Sans', sans-serif", color: c.text, letterSpacing: "0.05em" }}
      >
        {name.toUpperCase()}
      </span>
    </div>
  );
}

function MarqueeRow({ brands, reverse = false }: { brands: string[]; reverse?: boolean }) {
  // Duplicate items so the loop is seamless
  const items = [...brands, ...brands, ...brands];
  return (
    <div className="relative overflow-hidden w-full" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
      <div
        className="flex items-center w-max"
        style={{
          animation: `marquee${reverse ? "Reverse" : "Forward"} 30s linear infinite`,
        }}
      >
        {items.map((brand, i) => (
          <BrandPill key={`${brand}-${i}`} name={brand} />
        ))}
      </div>
    </div>
  );
}

export default function Brands() {
  return (
    <section id="brands" className="py-20 md:py-28 overflow-hidden" style={{ background: "#0B1F3A" }}>

      {/* Keyframes injected inline so they work in static export */}
      <style>{`
        @keyframes marqueeForward {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeReverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-row:hover > div {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-14 px-4">
        <span className="section-label">Our Portfolio</span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Brands We Carry
        </h2>
        <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
          Direct distribution partnerships with 30+ of the world&apos;s most trusted
          consumer electronics brands.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-5 marquee-row">
        <MarqueeRow brands={row1} reverse={false} />
        <MarqueeRow brands={row2} reverse={true} />
      </div>

      {/* CTA strip */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-14">
        <div
          className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Looking for a specific brand?
            </h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our network extends beyond the brands listed. Get in touch to discuss your requirements.
            </p>
          </div>
          <button
            onClick={() => openWhatsApp()}
            className="flex-shrink-0 flex items-center gap-2 font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg"
            style={{ background: "#C8952C", color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#A67820")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C8952C")}
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
