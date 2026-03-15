"use client";

import {
  Monitor,
  Volume2,
  Home,
  Camera,
  Cpu,
  Package,
} from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const categories = [
  {
    icon: Monitor,
    name: "IT Products",
    description: "Laptops, Desktops, Tablets, RAM, SSDs, Hard Drives",
    color: "bg-blue-50 text-blue-600 group-hover:bg-blue-100",
  },
  {
    icon: Volume2,
    name: "Audio-Video",
    description: "Speakers, Headphones, Earbuds, Home Theater, Microphones",
    color: "bg-orange-50 text-orange-600 group-hover:bg-orange-100",
  },
  {
    icon: Home,
    name: "Home Appliances",
    description: "Vacuum Cleaners, Hair Dryers, Irons, Mixers & more",
    color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
  },
  {
    icon: Camera,
    name: "Digital Cameras",
    description: "DSLRs, Point & Shoot, Camcorders, Lenses, Binoculars",
    color: "bg-purple-50 text-purple-600 group-hover:bg-purple-100",
  },
  {
    icon: Cpu,
    name: "Smart Home",
    description: "Smart Assistants, Security Cameras, Smart Lighting",
    color: "bg-sky-50 text-sky-600 group-hover:bg-sky-100",
  },
  {
    icon: Package,
    name: "Accessories",
    description: "Mobile, Drone, Camera, Kitchen & more categories",
    color: "bg-amber-50 text-amber-600 group-hover:bg-amber-100",
  },
];

export default function Products() {

  return (
    <section id="products" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">What We Source</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Products We Carry
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive electronics across every category — at real distributor pricing,
            direct from brand relationships.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-white rounded-2xl p-7 shadow-sm border border-gray-100 card-hover cursor-default"
            >
              <div className={`w-13 h-13 w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${cat.color}`}>
                <cat.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3
                className="text-navy font-bold text-lg mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {cat.name}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{cat.description}</p>

              {/* Hover accent */}
              <div className="mt-5 flex items-center gap-1.5 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Inquire about this category</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-5">
            Don&apos;t see what you&apos;re looking for? We source across a wide range of consumer electronics.
          </p>
          <button onClick={() => openWhatsApp()} className="btn-primary" style={{ fontSize: "0.95rem" }}>
            Send Us a Specific Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
