"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Package,
  ChatCircleDots,
  FileText,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Service {
  icon: Icon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: ShoppingCart,
    title: "Order Processing Automation",
    description:
      "AI agents that parse incoming orders from any channel, validate data, route to fulfillment, and update your ERP — without human intervention.",
  },
  {
    icon: Package,
    title: "Inventory & Catalog Sync",
    description:
      "Automated real-time sync between your warehouse, marketplace listings, and supplier feeds. Prevent stockouts and overselling across channels.",
  },
  {
    icon: FileText,
    title: "Invoice & Quote Generation",
    description:
      "Auto-generate accurate invoices, quotes, and purchase orders from order data. Custom pricing tiers, bulk discounts, and net terms built in.",
  },
  {
    icon: ChatCircleDots,
    title: "Customer Communication AI",
    description:
      "Intelligent email and chat responses for order status, shipping updates, and product inquiries — trained on your catalog and policies.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-medium tracking-widest uppercase text-sky-300 mb-4"
          >
            What We Build
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-50 mb-5"
          >
            AI systems that run
            <br />
            your operations.
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
            Each automation is custom-built for your workflows. No templates, no
            generic chatbots — just reliable systems that handle the work your team
            does manually today.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative bg-zinc-900/40 rounded-[1.5rem] border border-zinc-800/50 p-8 md:p-10 transition-all duration-500 hover:border-zinc-700/60 hover:bg-zinc-900/60 ${
                i === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className="mb-6">
                <div className="w-11 h-11 rounded-xl bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center group-hover:bg-sky-400/10 group-hover:border-sky-400/20 transition-colors duration-500">
                  <service.icon
                    size={22}
                    weight="duotone"
                    className="text-zinc-500 group-hover:text-sky-300 transition-colors duration-500"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-zinc-100 tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-[50ch]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
