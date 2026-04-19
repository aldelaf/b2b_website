"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Three zones: 0-0.33, 0.33-0.66, 0.66-1
    const zoneSize = 1 / 3;
    const newIndex = Math.min(2, Math.floor(v / zoneSize));

    // Position within current zone (0 to 1)
    const posInZone = (v - newIndex * zoneSize) / zoneSize;

    // Transition zone: last 15% fading out (slide right), first 15% fading in (slide from left)
    let newOpacity = 1;
    let newTranslateX = 0;

    if (posInZone > 0.85 && newIndex < 2) {
      // Leaving — slide to the right and fade out
      const t = (posInZone - 0.85) / 0.15;
      newOpacity = 1 - t;
      newTranslateX = t * 80;
    } else if (posInZone < 0.15 && newIndex > 0) {
      // Entering — slide in from the left
      const t = posInZone / 0.15;
      newOpacity = t;
      newTranslateX = (1 - t) * -80;
    }

    setActiveIndex(newIndex);
    setOpacity(newOpacity);
    setTranslateX(newTranslateX);
  });

  const section = sections[activeIndex];

  return (
    <section
      ref={containerRef}
      style={{ height: "250vh", position: "relative" }}
    >
      <div
        style={{
          height: "100dvh",
          position: "sticky",
          top: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Looping video background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/grid-scroll.mp4" type="video/mp4" />
        </video>

        {/* Radial mask — desktop */}
        <div
          className="hidden md:block"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 65% 55% at 50% 50%, transparent 25%, #09090b 78%)",
          }}
        />
        {/* Radial mask — mobile */}
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 85% 45% at 50% 50%, transparent 10%, #09090b 60%)",
          }}
        />

        {/* Top/bottom fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(to bottom, #09090b 0%, transparent 30%, transparent 70%, #09090b 100%)",
            opacity: 0.7,
          }}
        />

        {/* Single active text block */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            opacity,
            transform: `translateX(${translateX}px)`,
            transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
            maxWidth: "42rem",
            padding: "0 1.5rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(125, 211, 252, 0.8)",
            }}
          >
            {section.label}
          </span>
          <h3
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              color: "#fafafa",
              margin: 0,
            }}
          >
            {section.heading}
          </h3>
          <p
            style={{
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              color: "#a1a1aa",
              lineHeight: 1.7,
              maxWidth: "48ch",
              margin: 0,
            }}
          >
            {section.description}
          </p>
        </div>
      </div>
    </section>
  );
}
