"use client";

import { motion } from "framer-motion";
import { PlugsConnected, Lightning, Rocket } from "@phosphor-icons/react";

const sections = [
  {
    icon: PlugsConnected,
    label: "Ingest",
    heading: "We connect to every system you already use.",
    description:
      "Orders from Shopify, Amazon, EDI, email, PDF — our AI agents pull from every source, normalize the data, and push it into a single pipeline. No copy-paste, no CSV imports.",
  },
  {
    icon: Lightning,
    label: "Process",
    heading: "AI handles the decisions your team makes 200 times a day.",
    description:
      "Route orders by warehouse proximity. Apply tiered pricing. Flag anomalies. Generate invoices. The system runs your business rules faster and more consistently than any human could.",
  },
  {
    icon: Rocket,
    label: "Deliver",
    heading: "Your customers get faster, more accurate fulfillment.",
    description:
      "Real-time inventory sync prevents overselling. Automated shipping updates keep buyers informed. Your team focuses on exceptions, not routine — and your margins grow.",
  },
];

export default function ScrollSequence() {
  return (
    <section className="py-28 md:py-36 border-t border-zinc-800/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="space-y-24 md:space-y-32">
          {sections.map((section, i) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring" as const,
                stiffness: 80,
                damping: 20,
                delay: 0.05,
              }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Number + Icon side */}
              <div
                className={`md:col-span-4 flex flex-col gap-4 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                    <section.icon
                      size={24}
                      weight="duotone"
                      className="text-sky-300"
                    />
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase text-sky-300/70">
                    {section.label}
                  </span>
                </div>
                <div className="text-6xl md:text-8xl font-semibold text-zinc-800/50 font-mono leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content side */}
              <div
                className={`md:col-span-8 ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tighter leading-tight text-zinc-50 mb-4">
                  {section.heading}
                </h3>
                <p className="text-base text-zinc-500 leading-relaxed max-w-[55ch]">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
