"use client";

import { ChevronRight, Laptop, Headphones, Gamepad2, Watch, Speaker, SmartphoneNfc } from "lucide-react";
import { openContact } from "@/lib/contact";

const categories = ["Laptops", "Tablets", "Gaming", "Wearables", "Speakers", "Smart Home"];
const categoryIcons = [Laptop, SmartphoneNfc, Gamepad2, Watch, Speaker, Headphones];

export default function ResellerCTA() {

  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-navy">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, #C8952C 0px, #C8952C 1px, transparent 0px, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-light/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-gold text-sm font-semibold tracking-wide">Become a Reseller</span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Want to become a{" "}
              <span className="gold-text">reseller?</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8">
              Move consumer electronics at the lowest distributor prices.
              Join hundreds of resellers across Asia, Middle East, and Americas
              who trust Venus Global for their sourcing needs.
            </p>

            {/* Category chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {categories.map((cat, i) => {
                const Icon = categoryIcons[i];
                return (
                  <span
                    key={cat}
                    className="flex items-center gap-1.5 bg-white/8 border border-white/10 text-white/75 text-sm px-3.5 py-1.5 rounded-full"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold" />
                    {cat}
                  </span>
                );
              })}
            </div>

            <button
              onClick={() => openContact()}
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-amber-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Reach Us Now
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right — visual cards */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-sm flex-shrink-0">
            {[
              { label: "Competitive Pricing", value: "Distributor Rates" },
              { label: "Response Time", value: "Within 24 Hours" },
              { label: "Min. Order", value: "Flexible MOQ" },
              { label: "Payment Terms", value: "TT / LC / Wire" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="text-white font-semibold text-base mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {item.value}
                </div>
                <div className="text-white/45 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
