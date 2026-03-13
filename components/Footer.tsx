"use client";

import { Mail } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark bg-[#071428] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-bold text-sm">VG</span>
              </div>
              <div>
                <div className="font-bold text-lg text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  VenusGlobal
                </div>
                <div className="text-xs text-gold/70">Trading Ltd. · Hong Kong</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Your trusted distributor for consumer electronics across Asia,
              Middle East &amp; Americas. Direct brand relationships. Best pricing.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: TwitterIcon, label: "Twitter" },
                { Icon: FacebookIcon, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase" style={{ letterSpacing: "0.1em" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/50 hover:text-gold text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase" style={{ letterSpacing: "0.1em" }}>
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@venusglobal.com.hk"
                className="flex items-center gap-2.5 text-white/50 hover:text-gold text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 text-gold/60 group-hover:text-gold flex-shrink-0" />
                info@venusglobal.com.hk
              </a>
              <a
                href="mailto:sales@venusglobal.com.hk"
                className="flex items-center gap-2.5 text-white/50 hover:text-gold text-sm transition-colors group"
              >
                <Mail className="w-4 h-4 text-gold/60 group-hover:text-gold flex-shrink-0" />
                sales@venusglobal.com.hk
              </a>
              <div className="text-white/35 text-xs mt-4 pt-4 border-t border-white/5">
                Mon–Fri · 9am–6pm HKT
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/30 text-xs">
          © 2025 VenusGlobal Trading Ltd. All Rights Reserved.
        </p>
        <p className="text-white/20 text-xs">
          venusglobal.com.hk · info@venusglobal.com.hk
        </p>
      </div>
    </footer>
  );
}
