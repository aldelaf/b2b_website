"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { openCalModal } from "./CalEmbed";

export default function CTA() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative bg-sky-300 rounded-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.06),transparent_50%)] pointer-events-none" />

          <div className="relative px-8 py-20 md:px-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-950 mb-5"
                >
                  Ready to stop doing
                  <br />
                  what a machine should?
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
                  className="text-base text-sky-950/60 leading-relaxed max-w-[50ch]"
                >
                  Book a 30-minute discovery call. We will map your workflows, identify
                  the highest-impact automations, and give you a concrete plan — whether
                  or not you work with us.
                </motion.p>
              </div>

              <div className="md:col-span-5 flex md:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="flex flex-col gap-4"
                >
                  <button
                    onClick={openCalModal}
                    className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-medium text-sky-300 bg-zinc-950 rounded-full hover:bg-zinc-900 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    Book Discovery Call
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                  <span className="text-xs text-sky-950/40 text-center">
                    Free consultation — no commitment required
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
