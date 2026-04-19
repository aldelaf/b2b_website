"use client";

import { useRef, useEffect } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text 1: already visible on arrival, fades out at ~40%
  const t0Opacity = useTransform(scrollYProgress, [0, 0.28, 0.35], [1, 1, 0]);
  const t0Y = useTransform(scrollYProgress, [0, 0.28, 0.35], [0, 0, -50]);

  // Text 2: fades in right as text 1 leaves, holds, fades out
  const t1Opacity = useTransform(scrollYProgress, [0.35, 0.42, 0.62, 0.69], [0, 1, 1, 0]);
  const t1Y = useTransform(scrollYProgress, [0.35, 0.42, 0.62, 0.69], [50, 0, 0, -50]);

  // Text 3: fades in right as text 2 leaves, holds until end
  const t2Opacity = useTransform(scrollYProgress, [0.69, 0.76, 1.0], [0, 1, 1]);
  const t2Y = useTransform(scrollYProgress, [0.69, 0.76, 1.0], [50, 0, 0]);

  const textSections = [
    { opacity: t0Opacity, y: t0Y },
    { opacity: t1Opacity, y: t1Y },
    { opacity: t2Opacity, y: t2Y },
  ];

  return (
    <section ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center justify-center">
        {/* Looping video background */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
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

        {/* Text */}
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
