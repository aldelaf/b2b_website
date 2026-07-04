"use client";

import {
  ArrowRight,
  InstagramLogo,
  PlayCircle,
  Plugs,
  GraduationCap,
  CalendarCheck,
  Check,
  X,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import Reveal from "@/components/site/Reveal";
import CountUp from "@/components/site/CountUp";
import WhatsappMockup from "./WhatsappMockup";
import { openCalModal } from "@/components/CalEmbed";

const STEPS: { icon: Icon; title: string; body: string }[] = [
  {
    icon: Plugs,
    title: "Conectamos tu WhatsApp e Instagram",
    body: "Sin cambiar de número ni instalar nada raro. Sigue siendo tu WhatsApp de siempre.",
  },
  {
    icon: GraduationCap,
    title: "La entrenamos con lo tuyo",
    body: "Tus servicios, tus precios y tus horarios. Responde como responderías tú.",
  },
  {
    icon: CalendarCheck,
    title: "Empieza a responder y agendar",
    body: "Desde el primer día contesta y llena tu agenda, también a las 23:47.",
  },
];

const DOES = [
  "Responde las dudas de siempre: precios, horarios, servicios, dónde estáis.",
  "Agenda y reagenda citas directamente en tu calendario.",
  "Recuerda las citas para que te fallen menos personas.",
  "Te avisa cuando algo necesita una persona de verdad.",
];

const DOESNT = [
  "No sustituye tu trato con el cliente cuando está en el salón.",
  "No se inventa respuestas: solo dice lo que le has enseñado.",
  "No te obliga a saber de tecnología. De eso nos encargamos nosotros.",
  "No tiene permanencia ni te ata a nada.",
];

export default function Recepcionista() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,184,46,0.08), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-5">
                  Recepcionista IA
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 mb-6">
                  Tu recepcionista que nunca duerme.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch] mb-8">
                  Responde WhatsApp e Instagram al momento, agenda citas y
                  resuelve dudas, 24/7. Tú te dedicas a tus clientes; ella, a que
                  no se te escape ninguno.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Placeholder link — replace [DEMO_LINK] with the real demo URL */}
                  <a
                    href="[DEMO_LINK]"
                    className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98]"
                  >
                    <PlayCircle size={18} weight="fill" />
                    Ver una demo de 2 minutos
                  </a>
                  {/* Placeholder link — replace [IG_LINK] with the real Instagram URL */}
                  <a
                    href="[IG_LINK]"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-medium text-zinc-200 border border-zinc-700/70 rounded-full hover:border-zinc-500 hover:text-zinc-50 transition-all duration-300"
                  >
                    <InstagramLogo size={18} weight="bold" />
                    Escríbenos por Instagram
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <WhatsappMockup />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. El problema, en números */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                El problema, en números
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50">
                Cada mensaje sin responder es una cita que se va.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Reveal delay={0}>
              <div className="card-hover h-full rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-7">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-400 tabular-nums mb-4">
                  <CountUp value={40} suffix="%" />
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  de los mensajes a salones llegan fuera de horario.{" "}
                  <span className="text-zinc-600">[VERIFY_STAT]</span>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="card-hover h-full rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-7">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-400 tabular-nums mb-4">
                  &lt; 1h
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Un cliente que no recibe respuesta en una hora ya está
                  escribiendo a otro salón.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="card-hover h-full rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-7">
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-amber-400 tabular-nums mb-4">
                  30-60 €
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Cada no-show son 30 a 60 euros que no vuelven.{" "}
                  <span className="text-zinc-600">[VERIFY_STAT]</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Cómo funciona */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <WhatsappMockup />
              </Reveal>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                  Cómo funciona
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-[1.1] text-zinc-50 mb-10">
                  Funcionando en tu WhatsApp en días, no en meses.
                </h2>
              </Reveal>
              <ol className="flex flex-col gap-7">
                {STEPS.map((s, i) => {
                  const Ico = s.icon;
                  return (
                    <Reveal
                      as="li"
                      key={s.title}
                      delay={0.1 + i * 0.06}
                      className="grid grid-cols-[auto_1fr] gap-5 items-start"
                    >
                      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-800/70 text-amber-400">
                        <Ico size={22} weight="duotone" />
                        <span className="absolute -top-1.5 -left-1.5 flex items-center justify-center w-5 h-5 rounded-full bg-amber-400 text-zinc-950 text-[0.65rem] font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-zinc-100 mb-1.5">
                          {s.title}
                        </h3>
                        <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[48ch]">
                          {s.body}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Qué hace / qué no hace */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                Con los pies en la tierra
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50">
                Qué hace, y qué no hace.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal>
              <div className="h-full rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-7">
                <h3 className="text-sm font-medium uppercase tracking-wider text-emerald-400 mb-6">
                  Sí hace
                </h3>
                <ul className="flex flex-col gap-4">
                  {DOES.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <Check
                        size={18}
                        weight="bold"
                        className="text-emerald-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-zinc-300 leading-snug">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-7">
                <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-500 mb-6">
                  No hace
                </h3>
                <ul className="flex flex-col gap-4">
                  {DOESNT.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <X
                        size={18}
                        weight="bold"
                        className="text-zinc-600 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-zinc-400 leading-snug">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Precio */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                  Precio
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-[1.1] text-zinc-50 mb-5">
                  Una cuota clara. Sin permanencia.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base text-zinc-400 leading-relaxed max-w-[48ch]">
                  Menos de lo que te cuesta una sola cita perdida a la semana. Si
                  no te encaja, lo dejas cuando quieras.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-b from-amber-500/[0.06] to-transparent p-7 md:p-9">
                  <div className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3">
                    Recepcionista IA
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-50">
                      [PRICING_RECEPCIONISTA]
                    </span>
                  </div>
                  <div className="mt-5 flex flex-col gap-2.5 text-sm text-zinc-300">
                    <span className="inline-flex items-start gap-2">
                      <Check
                        size={16}
                        weight="bold"
                        className="text-amber-400 mt-0.5 flex-shrink-0"
                      />
                      Sin permanencia, cancela cuando quieras
                    </span>
                    <span className="inline-flex items-start gap-2">
                      <Check
                        size={16}
                        weight="bold"
                        className="text-amber-400 mt-0.5 flex-shrink-0"
                      />
                      Puesta en marcha incluida: [SETUP_RECEPCIONISTA]
                    </span>
                    <span className="inline-flex items-start gap-2">
                      <Check
                        size={16}
                        weight="bold"
                        className="text-amber-400 mt-0.5 flex-shrink-0"
                      />
                      WhatsApp e Instagram incluidos
                    </span>
                  </div>
                  <button
                    onClick={() => openCalModal()}
                    className="group mt-7 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-base font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    La quiero en mi salón
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA final */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative bg-amber-400 rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.06),transparent_50%)] pointer-events-none" />
            <div className="relative px-8 py-16 md:px-20 md:py-24 text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-950 mb-5 max-w-[18ch]">
                En 48 horas la tienes contestando en tu WhatsApp.
              </h2>
              <p className="text-base md:text-lg text-amber-950/70 leading-relaxed max-w-[44ch] mb-8">
                Escríbenos y la dejamos lista para tu salón. Sin líos.
              </p>
              <button
                onClick={() => openCalModal()}
                className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-medium text-amber-400 bg-zinc-950 rounded-full hover:bg-zinc-900 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                Quiero mi recepcionista
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
