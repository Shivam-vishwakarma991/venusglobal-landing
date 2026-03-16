"use client";

import { Globe, Tag, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Global Connections",
    description: "Direct relationships with top global brands — no middlemen, no markup.",
  },
  {
    icon: Tag,
    title: "Best Pricing",
    description: "Distributor rates you won't find elsewhere. Competitive margins for every partner.",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable Service",
    description: "Fast turnaround, dedicated account support, and respect for your timelines.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16">
          {/* Left — copy */}
          <div>
            <span className="section-label">Why Partner with Us</span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 animated-underline"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Why Partner with<br />Venus Global?
            </h2>
            <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed mt-8">
              <p>
  Venus Global meets the diverse needs of customers in the consumer electronics industry through strong global business connections. With an extensive Asia-Pacific presence, we bring a truly international sourcing network directly to our partners.
</p>
              <p>
                Our experience in sales and marketing spans over <strong className="text-navy">15 years</strong>,
                covering Asia, the Middle East, and the Americas. We deliver exceptional service
                with the best response times, respecting your timelines and building
                long-term relationships.
              </p>
              <p>
                Hong Kong-based and globally connected — making us the ideal sourcing partner
                for Asia-Pacific buyers who demand reliability, speed, and competitive pricing.
              </p>
            </div>

            <div className="mt-8 flex  gap-3">
              <span className="px-4 py-2 bg-navy/5 text-navy text-sm font-medium rounded-full border border-navy/10">
                HK-Registered Business
              </span>
              
              <span className="px-4 py-2 bg-navy/5 text-navy text-sm font-medium rounded-full border border-navy/10">
                Est. 2005 · Dubai + HK
              </span>
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative">
            {/* Abstract logistics/partnership visual using CSS */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-navy-light p-8 shadow-2xl">
              {/* Globe illustration */}
              <div className="flex items-center justify-center py-8">
                <div className="relative w-64 h-64">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-gold/30" />
                  <div className="absolute inset-4 rounded-full border border-gold/20" />
                  <div className="absolute inset-8 rounded-full border border-white/10" />

                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-gold mx-auto mb-3 opacity-80" />
                      <span className="text-white/80 text-sm font-medium block">50+ Countries</span>
                      <span className="text-white/50 text-xs">Asia · ME · Americas</span>
                    </div>
                  </div>

                  {/* Orbiting dots */}
                  {[0, 72, 144, 216, 288].map((deg, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-gold/60"
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${deg}deg) translateX(120px) translateY(-50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Stat chips */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { v: "15+", l: "Years" },
                  { v: "30+", l: "Brands" },
                  { v: "10K+", l: "Orders" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                  >
                    <div className="text-gold font-bold text-xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {s.v}
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Gold accent stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-5 py-3 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-navy font-semibold text-sm">Verified Distributor</div>
                <div className="text-slate-500 text-xs">Direct brand relationships</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefit cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group p-7 rounded-2xl border border-gray-100 bg-white shadow-sm card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <b.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-navy font-bold text-lg mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {b.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
