"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience", description: "Trusted since 2005" },
  { value: 50, suffix: "+", label: "Countries", description: "Global Reach" },
  { value: 30, suffix: "+", label: "Top Brands", description: "Direct Relationships" },
  { value: 10000, suffix: "+", label: "Shipments", description: "Delivered Worldwide" },
];

function useCountUp(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

function StatCard({ stat, active }: { stat: (typeof stats)[0]; active: boolean }) {
  const count = useCountUp(stat.value, 2200, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-2">
      <div className="flex items-baseline gap-0.5">
        <span
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {count.toLocaleString()}
        </span>
        <span className="text-2xl md:text-3xl font-bold" style={{ color: "#C8952C" }}>
          {stat.suffix}
        </span>
      </div>
      <div className="text-white font-semibold mt-1 text-base">{stat.label}</div>
      <div className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
        {stat.description}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-14 md:py-16 overflow-hidden"
      style={{ background: "#0B1F3A" }}
    >
      {/* Diagonal stripe */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(-45deg, #C8952C 0px, #C8952C 1px, transparent 0px, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`${i > 0 ? "md:border-l" : ""}`}
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <StatCard stat={stat} active={active} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
