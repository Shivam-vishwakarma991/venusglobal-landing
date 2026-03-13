"use client";

const brands = [
  "Apple", "Samsung", "Sony", "Microsoft", "HP", "Dell",
  "Lenovo", "Acer", "Asus", "LG", "Nintendo", "PlayStation",
  "Xbox", "Logitech", "GoPro", "Fitbit", "Beats", "Bose",
  "Sennheiser", "Canon", "Nikon", "Fujifilm", "Sigma", "SanDisk",
  "Seagate", "Transcend", "LaCie", "Nvidia", "Breville",
];

// Generate consistent abbreviations / initials for placeholder logos
function BrandPlaceholder({ name }: { name: string }) {
  const initials = name.length <= 4 ? name.toUpperCase() : name.slice(0, 3).toUpperCase();
  return (
    <div className="brand-logo w-full flex flex-col items-center justify-center py-5 px-3 h-20 group">
      <span
        className="text-slate-400 font-bold text-sm tracking-widest text-center leading-tight transition-colors group-hover:text-navy"
        style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.06em" }}
      >
        {name.toUpperCase()}
      </span>
    </div>
  );
}

export default function Brands() {
  return (
    <section id="brands" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Our Portfolio</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Brands We Carry
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            Direct distribution partnerships with 30+ of the world&apos;s most trusted
            consumer electronics brands.
          </p>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {brands.map((brand) => (
            <div
              key={brand}
              className="group rounded-xl border border-gray-100 hover:border-gold/30 bg-white hover:bg-gold/5 transition-all duration-300 cursor-default"
            >
              <BrandPlaceholder name={brand} />
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-slate-400 text-xs mt-8">
          * Brand logos shown for identification only. VenusGlobal is an authorized distributor.
          Client brand assets to be updated upon confirmation.
        </p>

        {/* Additional trust note */}
        <div className="mt-12 bg-navy rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Looking for a specific brand?
            </h3>
            <p className="text-white/60 text-sm">
              Our network extends beyond the brands listed above. Get in touch to discuss your requirements.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex-shrink-0 flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors shadow-lg"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
