"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Checks } from "@phosphor-icons/react";

interface Msg {
  from: "them" | "bot";
  text: string;
  time: string;
}

// A booking handled by the receptionist late at night — the whole point.
const MESSAGES: Msg[] = [
  { from: "them", text: "Hola! Tenéis hueco mañana para corte y tinte?", time: "23:47" },
  {
    from: "bot",
    text: "¡Hola! 😊 Mañana tengo a las 10:30 o a las 17:00. ¿Cuál te viene mejor?",
    time: "23:47",
  },
  { from: "them", text: "El de las 17:00 mejor", time: "23:48" },
  { from: "bot", text: "Perfecto. ¿Me confirmas tu nombre?", time: "23:48" },
  { from: "them", text: "María López", time: "23:48" },
  {
    from: "bot",
    text: "Listo, María 🎉 Cita mañana a las 17:00, corte y tinte. Te mando un recordatorio unas horas antes. ¡Hasta mañana!",
    time: "23:48",
  },
];

export default function WhatsappMockup() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.25, delayChildren: 0.1 },
    },
  };
  const bubble = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
      };

  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="rounded-[2rem] border border-zinc-700/60 bg-[#0b141a] overflow-hidden shadow-2xl shadow-black/40">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#202c33]">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-400 text-zinc-950 text-sm font-semibold">
            SB
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-zinc-100 truncate">
              Salón Bella
            </div>
            <div className="text-xs text-emerald-400">en línea</div>
          </div>
        </div>

        {/* Messages */}
        <motion.div
          className="px-3 py-4 flex flex-col gap-2 min-h-[380px]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {MESSAGES.map((m, i) => (
            <motion.div
              key={i}
              variants={bubble}
              className={`flex ${m.from === "bot" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-xl px-3 py-2 text-[0.8rem] leading-snug ${
                  m.from === "bot"
                    ? "bg-[#005c4b] text-zinc-50 rounded-tr-sm"
                    : "bg-[#202c33] text-zinc-100 rounded-tl-sm"
                }`}
              >
                <span>{m.text}</span>
                <span className="flex items-center justify-end gap-1 mt-1 text-[0.6rem] text-zinc-300/70">
                  {m.time}
                  {m.from === "bot" &&
                    (i === MESSAGES.length - 1 ? (
                      <Checks size={13} className="text-sky-400" />
                    ) : (
                      <Check size={13} />
                    ))}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
