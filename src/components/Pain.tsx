"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "Most Brand Managers running Tier 1 Amazon brands lose share during Prime Day, Black Friday, and Cyber Monday for the same reason. Not bad pricing strategy. Not weak content. Visibility.",
  "By the time you've manually pulled competitor data — pricing, promo state, review velocity, content updates, variation shifts — across your top 30 SKUs, your direct competitors have already moved twice. The intelligence is stale before it reaches your team.",
  "The gap is worst during peak event prep. Competitors stage their moves 14-21 days before the event opens, and most brands don't see those moves until the event is already running.",
];

const staleSignals = [
  "Pricing",
  "Promo state",
  "Review velocity",
  "Content updates",
  "Variation shifts",
];

export default function Pain() {
  return (
    <section
      id="problem"
      className="py-28 md:py-36 border-t border-zinc-900/60"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4"
            >
              The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 mb-8"
            >
              The visibility gap
              <br />
              that costs you
              <br />
              peak events.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 22,
              }}
              className="hidden md:block pt-7 border-t border-zinc-800/60"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">
                Goes stale by the hour
              </p>
              <div className="flex flex-wrap gap-2">
                {staleSignals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-xs text-zinc-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                    {signal}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <ol className="space-y-10 md:space-y-12">
              {paragraphs.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 22,
                  }}
                  className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-8 pb-10 md:pb-12 border-b border-zinc-900/80 last:border-b-0 last:pb-0"
                >
                  <div className="flex flex-col items-start gap-2 pt-1">
                    <span className="font-mono text-xs text-amber-400/80 tracking-wider">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-px h-10 md:h-14 bg-gradient-to-b from-amber-500/30 to-transparent" />
                  </div>

                  <p
                    className={`text-base md:text-lg leading-[1.75] max-w-[60ch] ${
                      i === 0
                        ? "text-zinc-200 font-medium tracking-tight md:text-xl"
                        : "text-zinc-400"
                    }`}
                  >
                    {p}
                  </p>
                </motion.li>
              ))}
            </ol>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 100,
                damping: 22,
              }}
              className="md:hidden mt-10 pt-8 border-t border-zinc-800/60"
            >
              <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">
                Goes stale by the hour
              </p>
              <div className="flex flex-wrap gap-2">
                {staleSignals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/50 text-xs text-zinc-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                    {signal}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
