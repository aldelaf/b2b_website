"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-zinc-900/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 mb-8"
            >
              Why I built this.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="hidden md:flex flex-col gap-1 pt-6 border-t border-zinc-800/60"
            >
              <span className="text-sm font-semibold text-zinc-200">
                Álvaro de la Fuente
              </span>
              <span className="text-sm text-zinc-500">
                Founder, Cork Fountain
              </span>
              <span className="text-xs text-zinc-600 mt-1">
                ex-Amazon EU · 4 years · Senior Brand Specialist
              </span>
            </motion.div>
          </div>

          <div className="md:col-span-8 space-y-6 md:space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 22 }}
              className="text-lg md:text-xl text-zinc-300 leading-[1.7] font-medium tracking-tight"
            >
              I'm Álvaro de la Fuente. I spent 4 years as a Senior Brand
              Specialist at Amazon EU, managing a top 5 brand in the Print
              category — including Deal POC responsibility for peak events.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.08,
                type: "spring",
                stiffness: 100,
                damping: 22,
              }}
              className="text-base md:text-lg text-zinc-400 leading-[1.75] max-w-[64ch]"
            >
              I lived inside the exact problem this system solves: the manual
              ASIN-level competitive analysis that's impossible to do
              continuously and impossible to do well during event prep.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.16,
                type: "spring",
                stiffness: 100,
                damping: 22,
              }}
              className="text-base md:text-lg text-zinc-400 leading-[1.75] max-w-[64ch]"
            >
              Earlier this year I left Amazon to run Cork Fountain full-time,
              building AI automation systems for B2B operators. The
              competitive intelligence system is the one I wish I'd had when I
              was inside.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.24,
                type: "spring",
                stiffness: 100,
                damping: 22,
              }}
              className="text-base md:text-lg text-zinc-300 leading-[1.75] max-w-[64ch]"
            >
              If you&apos;re a Brand Manager managing real revenue exposure
              on Amazon, you&apos;ve felt this gap. Let&apos;s close it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:hidden flex flex-col gap-1 pt-6 border-t border-zinc-800/60 mt-2"
            >
              <span className="text-sm font-semibold text-zinc-200">
                Álvaro de la Fuente
              </span>
              <span className="text-sm text-zinc-500">
                Founder, Cork Fountain
              </span>
              <span className="text-xs text-zinc-600 mt-1">
                ex-Amazon EU · 4 years · Senior Brand Specialist
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
