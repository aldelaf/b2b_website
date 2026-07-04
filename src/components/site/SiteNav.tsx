"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { openCalModal } from "../CalEmbed";

export interface NavItem {
  label: string;
  href: string;
}

interface SiteNavProps {
  items: NavItem[];
  /** href of the current page, used to highlight the active link */
  active?: string;
  ctaLabel: string;
  /** If set, the CTA is a plain link; otherwise it opens the Cal.com modal. */
  ctaHref?: string;
  /** Optional extra control (e.g. the homepage language toggle). */
  rightSlot?: ReactNode;
}

export default function SiteNav({
  items,
  active,
  ctaLabel,
  ctaHref,
  rightSlot,
}: SiteNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cta = ctaHref ? (
    <a
      href={ctaHref}
      className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors duration-300 active:scale-[0.98]"
    >
      {ctaLabel}
    </a>
  ) : (
    <button
      onClick={() => openCalModal()}
      className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors duration-300 active:scale-[0.98] cursor-pointer"
    >
      {ctaLabel}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0A1628]/80 backdrop-blur-xl border-b border-zinc-800/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-100"
        >
          Cork Fountain
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors duration-300 ${
                active === item.href
                  ? "text-amber-400"
                  : "text-zinc-500 hover:text-zinc-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {rightSlot}
          {cta}
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {rightSlot}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-zinc-400"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} weight="bold" />
            ) : (
              <List size={22} weight="bold" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden border-b border-zinc-800/40 bg-[#0A1628]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base transition-colors ${
                    active === item.href
                      ? "text-amber-400"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {ctaHref ? (
                <a
                  href={ctaHref}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full mt-2"
                >
                  {ctaLabel}
                </a>
              ) : (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    openCalModal();
                  }}
                  className="inline-flex items-center justify-center h-12 px-6 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full mt-2 cursor-pointer"
                >
                  {ctaLabel}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
