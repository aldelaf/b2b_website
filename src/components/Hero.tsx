"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { openCalModal } from "./CalEmbed";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Lightweight CSS-only background: faint blueprint grid fading out
          radially, under the same amber top glow the Spanish offer pages use.
          No image or video assets — nothing to decode or repaint. */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 25%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 42%, black 25%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,184,46,0.08), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Amazon Competitive Intelligence
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none text-zinc-50"
          >
            Win Prime Day
            <br />
            before Prime Day
            <br />
            <span className="text-amber-400">starts.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[58ch]"
          >
            ASIN-level competitor monitoring for Amazon brands. Built by a
            former Amazon EU Senior Brand Specialist — so your team walks into
            peak events with a written competitive read, not reactive
            scrambling.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-3"
          >
            <button
              onClick={() => openCalModal()}
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Book a 20-minute diagnostic
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <span className="text-xs text-zinc-500">
              No pitch. Real diagnostic on your specific competitive set.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
