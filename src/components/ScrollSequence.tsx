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

  // Overlapping ranges — one is still fading out while the next is already fading in
  // Each section: rise from below → hold → drift up and out
  const text0Opacity = useTransform(scrollYProgress, [0.0, 0.06, 0.24, 0.33], [0, 1, 1, 0]);
  const text0Y = useTransform(scrollYProgress, [0.0, 0.06, 0.24, 0.33], [80, 0, 0, -80]);
  const text0Scale = useTransform(scrollYProgress, [0.0, 0.06, 0.24, 0.33], [0.95, 1, 1, 0.95]);

  const text1Opacity = useTransform(scrollYProgress, [0.30, 0.39, 0.57, 0.66], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.30, 0.39, 0.57, 0.66], [80, 0, 0, -80]);
  const text1Scale = useTransform(scrollYProgress, [0.30, 0.39, 0.57, 0.66], [0.95, 1, 1, 0.95]);

  const text2Opacity = useTransform(scrollYProgress, [0.63, 0.72, 0.88, 0.97], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.63, 0.72, 0.88, 0.97], [80, 0, 0, -80]);
  const text2Scale = useTransform(scrollYProgress, [0.63, 0.72, 0.88, 0.97], [0.95, 1, 1, 0.95]);

  const textSections = [
    { opacity: text0Opacity, y: text0Y, scale: text0Scale },
    { opacity: text1Opacity, y: text1Y, scale: text1Scale },
    { opacity: text2Opacity, y: text2Y, scale: text2Scale },
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
        {/* Radial mask — mobile */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "radial-gradient(ellipse 85% 45% at 50% 50%, transparent 10%, #09090b 60%)",
          }}
        />

        {/* Top/bottom fade */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b] opacity-70" />

        {/* Scroll-driven text — overlapping transitions */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <div className="flex items-center justify-center min-h-[100dvh]">
            <div className="relative w-full max-w-2xl mx-auto text-center">
              {sections.map((section, i) => (
                <motion.div
                  key={section.label}
                  style={{
                    opacity: textSections[i].opacity,
                    y: textSections[i].y,
                    scale: textSections[i].scale,
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
