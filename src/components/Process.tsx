"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We map your current workflows, identify bottlenecks, and find the highest-ROI automation opportunities in your operations.",
    duration: "30 min",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "We architect a custom AI pipeline tailored to your stack, data, and business rules. You approve before we build.",
    duration: "3-5 days",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We build, test, and connect the automation to your existing systems. No platform migration, no disruption to your team.",
    duration: "2-4 weeks",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description:
      "Go live with monitoring dashboards. We refine accuracy and speed based on real production data for the first 30 days.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36 bg-surface border-t border-b border-zinc-800/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-widest uppercase text-sky-300 mb-4"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-50 mb-5"
            >
              From call to
              <br />
              production in
              <br />
              weeks, not months.
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
              className="text-base text-zinc-500 leading-relaxed"
            >
              We move fast because we specialize. Every system we build follows a
              proven framework refined across dozens of B2B ecommerce deployments.
            </motion.p>
          </div>

          <div className="md:col-span-8">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="group border-t border-zinc-800/60 py-10 md:py-12"
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    <span className="text-4xl md:text-5xl font-semibold text-zinc-800 group-hover:text-sky-400/30 transition-colors duration-500 tabular-nums font-mono leading-none pt-1">
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight">
                          {step.title}
                        </h3>
                        <span className="text-[11px] font-medium text-zinc-600 bg-zinc-800/60 px-2.5 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-[55ch]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
