"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sections = [
  {
    label: "Ingest",
    heading: "We connect to every system you already use.",
    description:
      "Orders from Shopify, Amazon, EDI, email, PDF — our AI agents pull from every source, normalize the data, and push it into a single pipeline.",
  },
  {
    label: "Process",
    heading: "AI handles the decisions your team makes 200 times a day.",
    description:
      "Route orders by warehouse proximity. Apply tiered pricing. Flag anomalies. Generate invoices. Faster and more consistent than any human could.",
  },
  {
    label: "Deliver",
    heading: "Your customers get faster, more accurate fulfillment.",
    description:
      "Real-time inventory sync prevents overselling. Automated updates keep buyers informed. Your team focuses on growth, not routine.",
  },
];

export default function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text0Opacity = useTransform(scrollYProgress, [0.0, 0.08, 0.25, 0.30], [0, 1, 1, 0]);
  const text0Y = useTransform(scrollYProgress, [0.0, 0.08, 0.25, 0.30], [60, 0, 0, -60]);

  const text1Opacity = useTransform(scrollYProgress, [0.33, 0.41, 0.58, 0.63], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.33, 0.41, 0.58, 0.63], [60, 0, 0, -60]);

  const text2Opacity = useTransform(scrollYProgress, [0.66, 0.74, 0.91, 0.96], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.66, 0.74, 0.91, 0.96], [60, 0, 0, -60]);

  const textSections = [
    { opacity: text0Opacity, y: text0Y },
    { opacity: text1Opacity, y: text1Y },
    { opacity: text2Opacity, y: text2Y },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center justify-center">
        {/* Looping video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/grid-scroll.mp4" type="video/mp4" />
        </video>

        {/* Radial mask — desktop */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 50%, transparent 25%, #09090b 78%)",
          }}
        />
        {/* Radial mask — mobile (tighter) */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "radial-gradient(ellipse 85% 45% at 50% 50%, transparent 10%, #09090b 60%)",
          }}
        />

        {/* Top/bottom fade */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b] opacity-70" />

        {/* Scroll-driven text */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center justify-center min-h-[100dvh]">
            <div className="relative w-full max-w-2xl mx-auto text-center">
              {sections.map((section, i) => (
                <motion.div
                  key={section.label}
                  style={{
                    opacity: textSections[i].opacity,
                    y: textSections[i].y,
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-5 px-4"
                >
                  <span className="text-xs font-medium tracking-widest uppercase text-sky-300/80">
                    {section.label}
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight text-zinc-50">
                    {section.heading}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[48ch]">
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
