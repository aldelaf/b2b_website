"use client";

import { motion } from "framer-motion";
import { Check, X } from "@phosphor-icons/react";

const isFor = [
  "Amazon brands doing $5M-$50M GMV",
  "Brand Manager or Director of Amazon owning competitive strategy",
  "Teams feeling the visibility gap on direct competitors",
  "Brands that lose share or scramble during peak events",
];

const isNotFor = [
  "Sub-$1M sellers — the math doesn't work for either side",
  "Category-level monitoring needs (we don't replace Helium 10 or Sellerboard)",
  "Teams looking for keyword research or PPC management",
  "Brands without a dedicated Amazon owner on the team",
];

export default function Results() {
  return (
    <section id="audience" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4"
          >
            Fit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-50 mb-5"
          >
            Who this works for.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-[60ch]"
          >
            Built specifically for Amazon brands doing $5M-$50M GMV with a
            Brand Manager or Director of Amazon owning competitive strategy.
            If your team is feeling the visibility gap on direct competitors —
            especially during peak events — this is the system. We operate at
            a different layer than category dashboards: focused on direct
            ASIN-level competitive dynamics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-zinc-900/40 rounded-[1.5rem] border border-zinc-800/50 p-8 md:p-10"
          >
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Check size={14} weight="bold" className="text-amber-400" />
              </div>
              <span className="text-xs font-medium tracking-widest uppercase text-amber-400">
                Who this is for
              </span>
            </div>
            <ul className="space-y-4">
              {isFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-zinc-300 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500/70 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="bg-zinc-900/40 rounded-[1.5rem] border border-zinc-800/50 p-8 md:p-10 md:mt-12"
          >
            <div className="flex items-center gap-2.5 mb-7">
              <div className="w-7 h-7 rounded-full bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-center">
                <X size={14} weight="bold" className="text-zinc-500" />
              </div>
              <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">
                Who this isn&apos;t for
              </span>
            </div>
            <ul className="space-y-4">
              {isNotFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-zinc-500 leading-relaxed"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
