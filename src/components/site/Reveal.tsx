"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Site-wide scroll-reveal: opacity 0->1 with a small rise, ~400ms ease-out,
// fires once per element. Pass `delay` to stagger siblings (~0.06 apart).
// Honors prefers-reduced-motion by rendering the final state with no motion.
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 10,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Render as a different element so list semantics stay valid (e.g. "li"). */
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const M = as === "li" ? motion.li : motion.div;

  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.42, ease: "easeOut", delay }}
    >
      {children}
    </M>
  );
}
