"use client";

import { motion } from "framer-motion";
import {
  Crosshair,
  BookOpen,
  Sun,
  Lightning,
  ChartLineUp,
  ChalkboardTeacher,
  Files,
  ChatCircle,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Item {
  icon: Icon;
  /** Outcome-led headline — what the brand gets, not what the feature is. */
  title: string;
  /** The underlying deliverable, kept as supporting detail. */
  description: string;
  /** Tailwind col-span on the lg bento grid. */
  span: string;
}

const items: Item[] = [
  {
    icon: Sun,
    title: "Walk in knowing exactly what changed overnight",
    description:
      "A 5-minute Daily Morning Brief: what every competitor did in the last 24 hours, ranked, with the one or two things actually worth your attention.",
    span: "lg:col-span-4",
  },
  {
    icon: Lightning,
    title: "The moment a material move happens, you know",
    description:
      "Real-time Slack alerts, tuned with your team in week one so it's signal, never noise.",
    span: "lg:col-span-2",
  },
  {
    icon: Crosshair,
    title: "Your real competitors, mapped for you",
    description:
      "Done-for-you ASIN-to-competitor profiling of your top SKUs. The painful manual work, eliminated — and yours to keep regardless of continuation.",
    span: "lg:col-span-2",
  },
  {
    icon: BookOpen,
    title: "Walk into Prime Day with the response already written",
    description:
      "A custom pre-event playbook for Prime Day, Black Friday, Cyber Monday and category events — built around your brand's actual margin tolerances.",
    span: "lg:col-span-2",
  },
  {
    icon: ChartLineUp,
    title: "Daily eyes on competitor prep before every Tier-1 event",
    description:
      "Pre-event intelligence sprints: heightened monitoring 14-21 days out, with a daily brief on how competitors are positioning for the surge.",
    span: "lg:col-span-2",
  },
  {
    icon: Files,
    title: "A board-ready read on where you stand",
    description:
      "Quarterly strategic review: a document on competitive position, share movement, and the recommended plays for next quarter.",
    span: "lg:col-span-4",
  },
  {
    icon: ChalkboardTeacher,
    title: "Your team trained to act, not just read",
    description:
      "Two 30-minute implementation calls — live training for your VA, brand manager, or analyst on the alert workflow and response playbook.",
    span: "lg:col-span-2",
  },
  {
    icon: ChatCircle,
    title: "A direct line to us, not a ticket queue",
    description:
      "Direct Slack access for your first 60 days. Real access, not Intercom-style support.",
    span: "lg:col-span-6",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 22 },
  },
};

/** The "show the product" artifact — a representative surfaced move exactly as
 *  it lands in the brand's portal and brief. The dollar figure is the kind of
 *  deterministic, economics-derived range the engine attaches to every
 *  dollarizable move (never a number the model made up). Illustrative SKU. */
function SampleMove() {
  return (
    <motion.div
      variants={cardVariants}
      className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 p-7 md:p-8 shadow-[0_0_60px_-15px_rgba(255,182,39,0.15)]"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center rounded-md bg-red-500/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-red-300 ring-1 ring-inset ring-red-500/20">
          Critical
        </span>
        <span className="text-[0.7rem] uppercase tracking-widest text-zinc-500">
          Buy Box surface
        </span>
      </div>

      <h4 className="text-lg md:text-xl font-semibold leading-snug text-zinc-50 tracking-tight mb-5">
        Unauthorized FBM seller took the Buy Box on your flagship SKU at a $5
        undercut
      </h4>

      <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] px-5 py-4 mb-5">
        <div className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-amber-400/70 mb-1">
          Estimated impact
        </div>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-2xl md:text-3xl font-semibold tracking-tight text-amber-400">
            $8,900–16,000
          </span>
          <span className="text-sm text-zinc-400">/ mo margin at risk</span>
        </div>
        <div className="mt-1.5 text-[0.72rem] text-zinc-500">
          ▸ 40 units/day · 32% margin · 40–70% Buy Box exposure while it holds
        </div>
      </div>

      <p className="text-sm leading-relaxed text-zinc-400 mb-5">
        A third-party FBM seller has displaced you from the Buy Box on your
        highest-volume listing, undercutting your price. The loss is active now,
        and it&apos;s also bleeding your ad ROAS and routing organic conversion to
        a seller you don&apos;t control.
      </p>

      <div className="rounded-lg bg-zinc-800/40 px-4 py-3.5 text-sm leading-relaxed text-zinc-300">
        <span className="font-semibold uppercase text-[0.7rem] tracking-wider text-amber-400/90 mr-1.5">
          Action.
        </span>
        Confirm the seller isn&apos;t authorized and issue a MAP notice today.
        In parallel, reclaim the box within 24h and open a test-buy to trace the
        sourcing leak.
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="included" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-14 md:mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4"
          >
            What&apos;s Included
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-50 mb-5"
          >
            A competitive analyst
            <br />
            on retainer — for less.
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
            className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-[58ch]"
          >
            Not a dashboard to log into. A small number of ranked moves, each
            with the dollars at stake and the exact play to run. This is what an
            $80–120K analyst hire does — delivered as a system.
          </motion.p>
        </div>

        {/* Featured artifact: the product, shown — paired with the framing copy. */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6 mb-5 md:mb-6 items-stretch"
        >
          <motion.div
            variants={cardVariants}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
              What actually lands in your inbox
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50 leading-tight mb-4">
              One move. The dollars at stake. The play to run.
            </h3>
            <p className="text-base text-zinc-500 leading-relaxed max-w-[42ch]">
              Every surfaced move carries a conservative, economics-derived
              dollar range — never a number we made up — and an immediate,
              specific action. If we can&apos;t stand behind the data, the move
              never reaches you.
            </p>
          </motion.div>
          <div className="lg:col-span-3">
            <SampleMove />
          </div>
        </motion.div>

        {/* Bento of components — outcome-framed, varied weights. */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`group relative bg-zinc-900/40 rounded-2xl border border-zinc-800/50 p-7 md:p-8 transition-all duration-500 hover:border-amber-500/20 hover:bg-zinc-900/60 ${item.span}`}
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-colors duration-500">
                  <item.icon
                    size={22}
                    weight="duotone"
                    className="text-zinc-500 group-hover:text-amber-400 transition-colors duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-zinc-100 tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
