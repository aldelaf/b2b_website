"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "70%",
    label: "Reduction in manual processing time",
    context: "Across order management and fulfillment workflows",
  },
  {
    value: "94%",
    label: "Fewer data entry errors",
    context: "Compared to manual order processing baselines",
  },
  {
    value: "3.2x",
    label: "More orders processed per team member",
    context: "Without additional headcount or overtime",
  },
  {
    value: "< 2s",
    label: "Average order routing time",
    context: "From receipt to warehouse assignment",
  },
];

const testimonials = [
  {
    quote:
      "We went from 4 people managing orders full-time to one person overseeing the AI. The system handles 3,000 orders daily without breaking a sweat.",
    name: "Rafael Montoya",
    role: "COO",
    company: "Argus Supply Group",
  },
  {
    quote:
      "The invoice automation alone saved us 28 hours per week. Cork Fountain understood our pricing model better than the last three platforms we tried.",
    name: "Linnea Svensson",
    role: "Head of Operations",
    company: "Boreal Distribution",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase text-sky-300 mb-4"
          >
            Proven Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-50"
          >
            Numbers your CFO
            <br />
            will actually care about.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-zinc-800/60 mb-24">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="py-8 md:py-10 border-b md:border-b-0 md:border-r last:border-r-0 border-zinc-800/60 md:pr-8 md:pl-8 first:md:pl-0"
            >
              <div className="text-3xl md:text-4xl font-semibold text-sky-300 tracking-tight font-mono mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-zinc-200 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-zinc-600 leading-relaxed">
                {metric.context}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className={`bg-zinc-900/40 rounded-[1.5rem] border border-zinc-800/50 p-8 md:p-10 ${
                i === 1 ? "md:mt-12" : ""
              }`}
            >
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-sm font-semibold text-zinc-400">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-200">{t.name}</div>
                  <div className="text-xs text-zinc-600">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
