"use client";

import { motion } from "framer-motion";

interface Milestone {
  day: string;
  label: string;
  items: string[];
  delay: number;
  climax?: boolean;
}

const milestones: Milestone[] = [
  {
    day: "D-21",
    label: "Early staging",
    items: ["Comp A · −8% promo", "Comp B · A+ refresh"],
    delay: 0.3,
  },
  {
    day: "D-14",
    label: "Variation plays",
    items: ["Comp C · +2 variations", "Comp D · ASIN spawn"],
    delay: 0.8,
  },
  {
    day: "D-7",
    label: "Final positioning",
    items: ["Comp A · review push", "Comp E · keyword shift"],
    delay: 1.3,
  },
  {
    day: "GO",
    label: "PRIME DAY",
    items: [],
    delay: 1.9,
    climax: true,
  },
];

const VIEWPORT = { once: true, margin: "-10% 0px -10% 0px" } as const;

function MilestoneNode({ m, index }: { m: Milestone; index: number }) {
  const slotLeft = `${10 + index * (80 / 3)}%`;
  const labelKeyframes = m.climax
    ? [5.5, 1.45, 1.03, 1]
    : [4.2, 1.3, 1.02, 1];

  return (
    <div
      className="absolute top-0 h-full"
      style={{ left: slotLeft, transform: "translateX(-50%)" }}
    >
      {/* Big zooming label */}
      <motion.div
        initial={{
          scale: labelKeyframes[0],
          filter: "blur(28px)",
          opacity: 0,
        }}
        whileInView={{
          scale: labelKeyframes,
          filter: [
            "blur(28px)",
            "blur(6px)",
            "blur(0px)",
            "blur(0px)",
          ],
          opacity: [0, 1, 1, 1],
        }}
        viewport={VIEWPORT}
        transition={{
          delay: m.delay,
          duration: 0.6,
          times: [0, 0.45, 0.8, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-[58%] left-1/2 -translate-x-1/2 origin-center pointer-events-none"
      >
        <span
          className={`block font-mono font-bold tracking-[-0.06em] leading-none whitespace-nowrap ${
            m.climax
              ? "text-[68px] md:text-[96px] text-amber-400"
              : "text-[52px] md:text-[78px] text-zinc-100"
          }`}
          style={
            m.climax
              ? { textShadow: "0 0 40px rgba(255, 182, 39, 0.5)" }
              : undefined
          }
        >
          {m.day}
        </span>
      </motion.div>

      {/* Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT}
          transition={{
            delay: m.delay + 0.5,
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: m.climax ? 1 : 0.5 }}
            viewport={VIEWPORT}
            transition={{ delay: m.delay + 0.55, duration: 0.4 }}
            className={`absolute inset-0 rounded-full ${
              m.climax
                ? "bg-amber-400 blur-xl scale-[3]"
                : "bg-amber-400 blur-md scale-[2]"
            }`}
          />
          <div
            className={`relative rounded-full ${
              m.climax
                ? "w-5 h-5 bg-amber-400 ring-4 ring-amber-400/30"
                : "w-3 h-3 bg-amber-400"
            }`}
          />
        </motion.div>
      </div>

      {/* Sub-label */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ delay: m.delay + 0.6, duration: 0.35 }}
        className="absolute top-[calc(50%+24px)] left-1/2 -translate-x-1/2 text-center w-40"
      >
        <div
          className={`text-[10px] md:text-xs uppercase tracking-[0.18em] font-medium ${
            m.climax ? "text-amber-400" : "text-zinc-500"
          }`}
        >
          {m.label}
        </div>
      </motion.div>

      {/* Activity chips */}
      {m.items.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ delay: m.delay + 0.7, duration: 0.4 }}
          className="absolute top-[calc(50%+62px)] left-1/2 -translate-x-1/2 w-44 flex flex-col gap-1.5"
        >
          {m.items.map((item) => (
            <div
              key={item}
              className="text-[10px] md:text-xs text-zinc-400 font-mono px-2.5 py-1.5 rounded-md bg-zinc-900/70 border border-zinc-800/70 backdrop-blur-sm text-center"
            >
              {item}
            </div>
          ))}
        </motion.div>
      )}

      {/* Climax-only "event live" badge */}
      {m.climax && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ delay: m.delay + 0.7, duration: 0.4 }}
          className="absolute top-[calc(50%+62px)] left-1/2 -translate-x-1/2 w-48 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[10px] md:text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Event live
          </div>
        </motion.div>
      )}
    </div>
  );
}

function MilestoneRow({
  m,
  isLast,
}: {
  m: Milestone;
  isLast: boolean;
}) {
  const labelKeyframes = m.climax
    ? [4.5, 1.45, 1.03, 1]
    : [3.5, 1.3, 1.02, 1];

  return (
    <div className="relative flex gap-5">
      {/* Left rail with dot + connecting line */}
      <div className="relative flex flex-col items-center pt-2">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={VIEWPORT}
          transition={{
            delay: m.delay + 0.5,
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: m.climax ? 1 : 0.5 }}
            viewport={VIEWPORT}
            transition={{ delay: m.delay + 0.55, duration: 0.4 }}
            className={`absolute inset-0 rounded-full ${
              m.climax
                ? "bg-amber-400 blur-xl scale-[3]"
                : "bg-amber-400 blur-md scale-[2]"
            }`}
          />
          <div
            className={`relative rounded-full ${
              m.climax
                ? "w-4 h-4 bg-amber-400 ring-4 ring-amber-400/30"
                : "w-3 h-3 bg-amber-400"
            }`}
          />
        </motion.div>

        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEWPORT}
            transition={{
              delay: m.delay + 0.6,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex-1 w-px mt-2 origin-top bg-gradient-to-b from-amber-500/60 via-amber-400/40 to-amber-300/20"
            style={{ minHeight: 80 }}
          />
        )}
      </div>

      {/* Right content */}
      <div className="flex-1 pb-12 last:pb-0 min-w-0">
        {/* Big label */}
        <motion.div
          initial={{
            scale: labelKeyframes[0],
            filter: "blur(28px)",
            opacity: 0,
          }}
          whileInView={{
            scale: labelKeyframes,
            filter: ["blur(28px)", "blur(6px)", "blur(0px)", "blur(0px)"],
            opacity: [0, 1, 1, 1],
          }}
          viewport={VIEWPORT}
          transition={{
            delay: m.delay,
            duration: 0.6,
            times: [0, 0.45, 0.8, 1],
            ease: [0.22, 1, 0.36, 1],
          }}
          className="origin-left mb-3 inline-block"
        >
          <span
            className={`block font-mono font-bold tracking-[-0.06em] leading-none ${
              m.climax
                ? "text-[44px] text-amber-400"
                : "text-[40px] text-zinc-100"
            }`}
            style={
              m.climax
                ? { textShadow: "0 0 40px rgba(255, 182, 39, 0.5)" }
                : undefined
            }
          >
            {m.day}
          </span>
        </motion.div>

        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ delay: m.delay + 0.6, duration: 0.35 }}
          className={`text-[11px] uppercase tracking-[0.18em] font-medium mb-3 ${
            m.climax ? "text-amber-400" : "text-zinc-500"
          }`}
        >
          {m.label}
        </motion.div>

        {/* Activity chips */}
        {m.items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ delay: m.delay + 0.7, duration: 0.4 }}
            className="flex flex-col gap-1.5"
          >
            {m.items.map((item) => (
              <div
                key={item}
                className="text-[11px] text-zinc-400 font-mono px-2.5 py-1.5 rounded-md bg-zinc-900/70 border border-zinc-800/70 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}

        {/* Climax badge */}
        {m.climax && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ delay: m.delay + 0.7, duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-[11px] font-medium tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Event live
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function ScrollSequence() {
  return (
    <section
      id="sequence"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, #0F1F36 0%, #0A1628 60%, #07101F 100%)",
      }}
    >
      {/* Faint dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.5 }}
          className="text-center mb-20 md:mb-28"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-amber-400 mb-4">
            Pre-Event Intelligence
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 max-w-3xl mx-auto">
            Competitors stage their moves
            <br />
            <span className="text-zinc-500">14-21 days before the event.</span>
          </h2>
        </motion.div>

        {/* Timeline — desktop horizontal */}
        <div className="hidden md:block relative w-full h-[360px]">
          {/* Axis baseline */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-px bg-zinc-800/80 -translate-y-1/2" />

          {/* Axis fill — animates left-to-right */}
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={VIEWPORT}
            transition={{ delay: 0.4, duration: 1.8, ease: "easeOut" }}
            className="absolute top-1/2 left-[10%] h-px max-w-[80%] bg-gradient-to-r from-amber-500/80 via-amber-400 to-amber-300 -translate-y-1/2 shadow-[0_0_12px_rgba(255,182,39,0.4)]"
          />

          {/* Milestones */}
          {milestones.map((m, i) => (
            <MilestoneNode key={m.day} m={m} index={i} />
          ))}
        </div>

        {/* Timeline — mobile vertical stack */}
        <div className="md:hidden flex flex-col">
          {milestones.map((m, i) => (
            <MilestoneRow
              key={m.day}
              m={m}
              isLast={i === milestones.length - 1}
            />
          ))}
        </div>

        {/* Closing caption */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ delay: 2.6, duration: 0.5 }}
          className="text-center mt-20 md:mt-28"
        >
          <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Your team walks in with a{" "}
            <span className="text-amber-400 font-medium">
              written competitive read
            </span>
            {" — "}not reactive scrambling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
