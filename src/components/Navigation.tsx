"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { openCalModal } from "./CalEmbed";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#" className="text-lg font-semibold tracking-tight text-zinc-100">
          Cork Fountain
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={openCalModal}
            className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-zinc-950 bg-sky-300 rounded-full hover:bg-sky-200 transition-colors duration-300 active:scale-[0.98] cursor-pointer"
          >
            Book a Call
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-zinc-400"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden border-b border-zinc-800/40 bg-[#09090b]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openCalModal();
                }}
                className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-zinc-950 bg-sky-300 rounded-full mt-2 cursor-pointer"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
