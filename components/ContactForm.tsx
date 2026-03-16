"use client";

import { useState, FormEvent } from "react";
import { Mail, Clock, Send, CheckCircle } from "lucide-react";
import { openContact, buildEnquiryEmail } from "@/lib/contact";

const productCategories = [
  "IT Products (Laptops, Tablets, Desktops)",
  "Audio-Video (Speakers, Headphones, AV)",
  "Home Appliances",
  "Digital Cameras & Optics",
  "Smart Home Devices",
  "Gaming & Accessories",
  "Mobile Accessories",
  "Other / Multiple Categories",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { subject, body } = buildEnquiryEmail(form);
    openContact(subject, body);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-label">Start a Conversation</span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get in Touch &mdash; Request a Quote
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            Send us your requirements and our team will respond within 24 hours
            with pricing and availability.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-navy font-bold text-2xl mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Enquiry Sent!
                </h3>
                <p className="text-slate-500 mb-6 max-w-md">
                  Thank you for reaching out. Our team will review your enquiry and
                  get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-gold font-semibold text-sm hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy font-medium text-sm mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-2">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Your Company Ltd."
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-medium text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+852 xxxx xxxx"
                      className="form-input"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-navy font-medium text-sm mb-2">
                      Product Category
                    </label>
                    <select
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      className="form-input appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
                    >
                      <option value="">Select a category...</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-navy font-medium text-sm mb-2">
                      Message / Enquiry <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe your requirements, quantities, and any specific brands or models you are looking for..."
                      className="form-input resize-none"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-slate-400 text-xs">
                    We respond within 24 business hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h3 className="text-navy font-bold text-lg mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@venusglobal.com.hk"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">General Inquiries</div>
                    <div className="text-navy font-medium text-sm group-hover:text-gold transition-colors">
                      info@venusglobal.com.hk
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:sales@venusglobal.com.hk"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Sales & Pricing</div>
                    <div className="text-navy font-medium text-sm group-hover:text-gold transition-colors">
                      sales@venusglobal.com.hk
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Business Hours</div>
                    <div className="text-navy font-medium text-sm">
                      Mon–Fri, 9am–6pm HKT
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why inquire */}
            <div className="bg-navy rounded-2xl p-7">
              <h3 className="text-white font-bold text-base mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Dedicated account manager assigned",
                  "Competitive distributor pricing",
                  "Stock availability confirmation",
                  "Flexible payment & shipping terms",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/65 text-sm">
                    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Address placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
              <h3 className="text-navy font-bold text-base mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Office Location
              </h3>
              <p className="text-slate-400 text-sm italic">
               UNIT 1603, 16/F THE L. PLAZA
367-375 QUEEN&apos;S RD CENTRAL
SHEUNG WAN
HONG KONG
       
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
