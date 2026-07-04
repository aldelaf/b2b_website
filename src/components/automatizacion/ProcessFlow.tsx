"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ChatCircleDots, Cpu, Database } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Node {
  icon: Icon;
  title: string;
  sub: string;
  accent?: boolean;
}

const NODES: Node[] = [
  { icon: ChatCircleDots, title: "WhatsApp · Email · Web", sub: "Entra la petición" },
  { icon: Cpu, title: "Cork Fountain", sub: "El sistema decide y responde", accent: true },
  { icon: Database, title: "ERP · Calendario · CRM", sub: "Queda registrado" },
];

function NodeCard({ node }: { node: Node }) {
  const Ico = node.icon;
  return (
    <div
      className={`relative z-10 flex flex-col items-center text-center gap-3 rounded-2xl border p-5 md:p-6 backdrop-blur-sm ${
        node.accent
          ? "border-amber-500/40 bg-amber-500/[0.07]"
          : "border-zinc-800/70 bg-[#0F1F36]/80"
      }`}
    >
      <div
        className={`flex items-center justify-center w-11 h-11 rounded-xl ${
          node.accent ? "bg-amber-400 text-zinc-950" : "bg-zinc-800/70 text-amber-400"
        }`}
      >
        <Ico size={22} weight="duotone" />
      </div>
      <div>
        <div className="text-sm font-medium text-zinc-100 leading-tight">
          {node.title}
        </div>
        <div className="text-xs text-zinc-500 mt-1">{node.sub}</div>
      </div>
    </div>
  );
}

export default function ProcessFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15%" });
  const reduce = useReducedMotion();
  const animatePulse = inView && !reduce;

  return (
    <div ref={ref} aria-hidden="true">
      {/* Desktop: horizontal flow with a traveling amber pulse */}
      <div className="hidden md:block relative py-4">
        <div className="absolute left-[16.66%] right-[16.66%] top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-amber-500/15 via-amber-500/40 to-amber-500/15" />
        {animatePulse && (
          <motion.span
            className="absolute top-1/2 -translate-y-1/2 -ml-1 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_14px_3px_rgba(245,184,46,0.55)]"
            initial={{ left: "16.66%" }}
            animate={{ left: ["16.66%", "83.33%"] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5,
            }}
          />
        )}
        <div className="relative grid grid-cols-3 gap-6 lg:gap-10">
          {NODES.map((n) => (
            <NodeCard key={n.title} node={n} />
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack with static connectors */}
      <div className="md:hidden flex flex-col items-stretch gap-0">
        {NODES.map((n, i) => (
          <div key={n.title} className="flex flex-col items-stretch">
            <NodeCard node={n} />
            {i < NODES.length - 1 && (
              <span className="self-center w-px h-6 bg-gradient-to-b from-amber-500/40 to-amber-500/15" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
