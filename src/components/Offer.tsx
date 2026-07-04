"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight } from "@phosphor-icons/react";
import { openCalModal } from "./CalEmbed";

// Value stack. Each line is what the component would cost assembled separately,
// annualized where it recurs. The total dwarfs the founding price on purpose.
const STACK: { name: string; value: string }[] = [
  { name: "Continuous multi-front monitoring (Buy Box, category, your listing, market position, offense)", value: "$36,000/yr" },
  { name: "Done-for-you ASIN-to-rival mapping (yours to keep)", value: "$2,500" },
  { name: "Daily morning brief: what changed in the last 24 hours, ranked", value: "$6,000/yr" },
  { name: "Real-time Slack alerts on material competitive moves", value: "$3,600/yr" },
  { name: "Custom pre-event competitive playbook (Prime Day, BFCM, category events)", value: "$4,000" },
  { name: "Pre-event intelligence sprints (heightened monitoring before Tier-1 events)", value: "$6,000/yr" },
  { name: "Quarterly board-ready strategic review", value: "$8,000/yr" },
  { name: "Two implementation calls + direct Slack access (first 60 days)", value: "$3,000" },
];

const TOTAL = "$69,000+";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

export default function Offer() {
  return (
    <section id="offer" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4"
          >
            The Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={spring}
            className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-50 mb-5"
          >
            The Margin Defense System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ...spring }}
            className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-[58ch]"
          >
            A competitive-intelligence analyst with this skillset costs $90,000 to
            $120,000 a year, fully loaded. The Margin Defense System delivers the
            output as a system, for a fraction of one hire.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-start"
        >
          {/* Value stack */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: spring } }}
            className="lg:col-span-7 bg-zinc-900/40 rounded-2xl border border-zinc-800/50 p-7 md:p-9"
          >
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-6">
              What you get
            </div>
            <ul className="flex flex-col divide-y divide-zinc-800/50">
              {STACK.map((item) => (
                <li key={item.name} className="flex items-start justify-between gap-6 py-4 first:pt-0">
                  <div className="flex items-start gap-3 min-w-0">
                    <Check size={18} weight="bold" className="text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-[0.95rem] text-zinc-200 leading-snug">{item.name}</span>
                  </div>
                  <span className="text-sm text-zinc-500 whitespace-nowrap tabular-nums">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-baseline justify-between gap-6 mt-6 pt-6 border-t border-zinc-700/60">
              <span className="text-sm font-medium uppercase tracking-wider text-zinc-400">Total value</span>
              <span className="text-2xl font-semibold tracking-tight text-zinc-100 tabular-nums">{TOTAL}<span className="text-base text-zinc-500"> / yr</span></span>
            </div>
          </motion.div>

          {/* Price + guarantee + urgency + CTA */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: spring } }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-b from-amber-500/[0.06] to-transparent p-7 md:p-8">
              <div className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3">
                Founding rate
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tighter text-zinc-50 tabular-nums">$1,250</span>
                <span className="text-lg text-zinc-400">/ mo</span>
              </div>
              <div className="mt-3 flex flex-col gap-1.5 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2"><Check size={15} weight="bold" className="text-amber-400" /> $0 setup fee (founding cohort)</span>
                <span className="inline-flex items-center gap-2"><Check size={15} weight="bold" className="text-amber-400" /> Month to month, rate locked for 12 months</span>
                <span className="inline-flex items-center gap-2"><Check size={15} weight="bold" className="text-amber-400" /> Cancel anytime</span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-7 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck size={26} weight="duotone" className="text-amber-400" />
                <span className="text-base font-semibold text-zinc-100">30-day money-back guarantee</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                If your first 30 days don&apos;t surface at least 3 specific,
                quantified competitive moves worth acting on, you get 100% of
                your money back. No risk to find out what you&apos;re missing.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/40 bg-zinc-900/20 px-6 py-5">
              <p className="text-sm text-zinc-400 leading-relaxed">
                <span className="text-zinc-200 font-medium">Founding cohort: 5 brands only.</span>{" "}
                The rate goes up once they&apos;re filled. Lock your competitive
                position before the Q4 retail surge.
              </p>
            </div>

            <button
              onClick={() => openCalModal()}
              className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Claim a founding spot
              <ArrowRight size={18} weight="bold" className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <span className="text-xs text-zinc-600 text-center">
              Starts with a free Competitive Exposure Report on your top ASINs.
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
