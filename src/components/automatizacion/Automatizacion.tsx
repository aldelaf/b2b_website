"use client";

import {
  ArrowRight,
  Truck,
  Files,
  Stethoscope,
  Factory,
  MapTrifold,
  Calculator,
  FileText,
  Check,
  Globe,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import Reveal from "@/components/site/Reveal";
import ProcessFlow from "./ProcessFlow";
import { openCalModal } from "@/components/CalEmbed";

const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

interface Vertical {
  icon: Icon;
  name: string;
  points: { text: string; metric: string }[];
}

const VERTICALS: Vertical[] = [
  {
    icon: Truck,
    name: "Distribuidoras",
    points: [
      { text: "Entrada manual de pedidos", metric: "10-15 h/semana" },
      { text: "Consultas repetitivas de stock y estado", metric: "5-8 h/semana" },
      {
        text: "Clientes que compran menos sin que salte ninguna alarma",
        metric: "10-20% de la cartera al año",
      },
    ],
  },
  {
    icon: Files,
    name: "Gestorías",
    points: [
      {
        text: "Perseguir documentación y responder las mismas consultas antes de cada plazo fiscal",
        metric: "Días perdidos cada trimestre",
      },
    ],
  },
  {
    icon: Stethoscope,
    name: "Clínicas",
    points: [
      {
        text: "Llamadas perdidas y no-shows en la agenda",
        metric: "10-15% de la agenda",
      },
    ],
  },
  {
    icon: Factory,
    name: "Fabricantes B2B",
    points: [
      {
        text: "Presupuestos que tardan días y consultas de cómo va mi pedido",
        metric: "Ventas que se enfrían esperando",
      },
    ],
  },
];

const AUDIT_STEPS: { icon: Icon; title: string; body: string }[] = [
  {
    icon: MapTrifold,
    title: "Mapeamos el circuito completo",
    body: "Seguimos un pedido o una consulta de principio a fin: quién lo toca, cuántas veces se reintroduce el mismo dato y dónde se atasca.",
  },
  {
    icon: Calculator,
    title: "Cuantificamos el coste real",
    body: "Ponemos horas y euros a cada cuello de botella. No opiniones, números concretos sobre tu operación.",
  },
  {
    icon: FileText,
    title: "Entregamos un informe accionable",
    body: "Qué automatizar primero, qué impacto tiene y qué no merece la pena tocar. Priorizado por retorno.",
  },
];

export default function Automatizacion() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.5]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(245,184,46,0.08), transparent 60%)",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-5">
                Automatización para PYMES
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 mb-6">
                Tu equipo pierde 15 horas a la semana en tareas que una máquina
                hace mejor.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[62ch] mb-8">
                Auditamos tus procesos, cuantificamos lo que te cuestan y
                construimos la automatización que los elimina. Primero el
                diagnóstico, después la solución.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <button
                onClick={() => openCalModal()}
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                Solicitar auditoría de procesos
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 md:mt-20 rounded-3xl border border-zinc-800/60 bg-[#0C1A2E]/60 p-6 md:p-10">
              <ProcessFlowLabel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Dónde se va el dinero */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14 md:mb-16">
            <Reveal>
              <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                El coste oculto
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 mb-5">
                Dónde se va el dinero.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-[58ch]">
                Cada sector pierde horas en el mismo tipo de tarea repetitiva.
                Estas son las que más se repiten en las empresas con las que
                trabajamos.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {VERTICALS.map((v, i) => {
              const Ico = v.icon;
              return (
                <Reveal key={v.name} delay={i * 0.06}>
                  <div className="card-hover h-full rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-6 flex flex-col">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-800/70 text-amber-400 mb-5">
                      <Ico size={22} weight="duotone" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-4">
                      {v.name}
                    </h3>
                    <ul className="flex flex-col gap-4 mt-auto">
                      {v.points.map((p) => (
                        <li key={p.text} className="flex flex-col gap-1">
                          <span className="text-sm text-zinc-400 leading-snug">
                            {p.text}
                          </span>
                          <span className="text-sm font-medium text-amber-400 tabular-nums">
                            {p.metric}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. La auditoría de procesos */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                  El punto de partida
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 mb-5">
                  La auditoría de procesos.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[56ch] mb-10">
                  En dos semanas entramos en tu operación, medimos lo que hoy os
                  cuesta cada cuello de botella y salimos con un plan concreto de
                  qué automatizar y en qué orden.
                </p>
              </Reveal>

              <ol className="flex flex-col gap-8">
                {AUDIT_STEPS.map((s, i) => {
                  const Ico = s.icon;
                  return (
                    <Reveal
                      as="li"
                      key={s.title}
                      delay={0.12 + i * 0.06}
                      className="grid grid-cols-[auto_1fr] gap-5"
                    >
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-800/70 text-amber-400">
                        <Ico size={22} weight="duotone" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-zinc-100 mb-1.5">
                          {s.title}
                        </h3>
                        <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-[54ch]">
                          {s.body}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>

            {/* Price card, styled like the Amazon pricing table */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-b from-amber-500/[0.06] to-transparent p-7 md:p-8">
                  <div className="text-xs font-medium tracking-widest uppercase text-amber-400/80 mb-3">
                    Auditoría de procesos
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-50 tabular-nums">
                      [PRECIO_AUDITORIA]
                    </span>
                  </div>
                  <div className="mt-5 flex flex-col gap-2.5 text-sm text-zinc-300">
                    <span className="inline-flex items-start gap-2">
                      <Check
                        size={16}
                        weight="bold"
                        className="text-amber-400 mt-0.5 flex-shrink-0"
                      />
                      Dos semanas, precio cerrado
                    </span>
                    <span className="inline-flex items-start gap-2">
                      <Check
                        size={16}
                        weight="bold"
                        className="text-amber-400 mt-0.5 flex-shrink-0"
                      />
                      Informe con coste en horas y euros por proceso
                    </span>
                    <span className="inline-flex items-start gap-2">
                      <Check
                        size={16}
                        weight="bold"
                        className="text-amber-400 mt-0.5 flex-shrink-0"
                      />
                      Plan priorizado de qué automatizar primero
                    </span>
                  </div>

                  <p className="mt-6 pt-6 border-t border-zinc-700/60 text-sm text-zinc-300 leading-relaxed">
                    Sin compromiso de construir nada con nosotros. El informe es
                    tuyo.
                  </p>

                  <button
                    onClick={() => openCalModal()}
                    className="group mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-base font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    Solicitar auditoría
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

      {/* 4. Después de la auditoría */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                Después de la auditoría
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-[1.1] text-zinc-50">
                La construcción, cuando los números lo justifican.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Sobre lo que ya usáis",
                body: "Construimos encima de vuestras herramientas actuales (ERP, email, WhatsApp). Sin migraciones ni cambiar de sistema.",
              },
              {
                title: "Precio cerrado por proyecto",
                body: "Alcance definido en la auditoría y presupuesto cerrado antes de empezar. Sabéis lo que cuesta y lo que devuelve.",
              },
              {
                title: "Mantenimiento opcional",
                body: "Si queréis, nos quedamos monitorizando y ajustando el sistema. Si no, os lo dejamos funcionando y es vuestro.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-6">
                  <h3 className="text-base font-semibold text-zinc-100 mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Por qué nosotros */}
      <section className="py-24 md:py-32 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                  Por qué nosotros
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-[1.1] text-zinc-50 mb-6">
                  Operación real primero, tecnología después.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[58ch] mb-4">
                  Cork Fountain la fundó un ex Senior Brand Specialist de Amazon
                  Europa, con cuatro años gestionando una operación de alto
                  volumen desde dentro. Sabemos cómo se ve un cuello de botella
                  antes de tocar una sola línea de código.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[58ch]">
                  Hemos construido sistemas para clientes en Países Bajos,
                  Estados Unidos y España.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <a
                  href="/casos"
                  className="group inline-flex items-center gap-2 mt-7 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Ver casos
                  <ArrowRight
                    size={15}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-7">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-800/70 text-amber-400 mb-5">
                    <Globe size={22} weight="duotone" />
                  </div>
                  <div className="flex flex-col gap-4">
                    {[
                      ["4 años", "en Amazon Europa, gestión de marca de alto volumen"],
                      ["3 países", "clientes en Países Bajos, EE. UU. y España"],
                      ["Sobre vuestro stack", "sin migraciones ni cambiar de herramientas"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="flex flex-col gap-0.5 pb-4 border-b border-zinc-800/60 last:border-b-0 last:pb-0"
                      >
                        <span className="text-lg font-semibold text-zinc-100 tabular-nums">
                          {k}
                        </span>
                        <span className="text-sm text-zinc-500">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA band */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative bg-amber-400 rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.06),transparent_50%)] pointer-events-none" />

            <div className="relative px-8 py-16 md:px-20 md:py-24">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-8">
                  <p className="text-xs font-medium tracking-widest uppercase text-amber-950/60 mb-4">
                    Siguiente paso
                  </p>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-950 mb-5">
                    Cuéntanos tu proceso más doloroso.
                  </h2>
                  <p className="text-base md:text-lg text-amber-950/70 leading-relaxed max-w-[56ch]">
                    Te decimos en una llamada de 20 minutos si se puede
                    automatizar y cuánto ahorrarías. Sin presentación comercial.
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <button
                    onClick={() => openCalModal()}
                    className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-medium text-amber-400 bg-zinc-950 rounded-full hover:bg-zinc-900 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    Reservar llamada
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Small wrapper so the ProcessFlow visual sits under a quiet label.
function ProcessFlowLabel() {
  return (
    <div className="flex flex-col gap-6">
      <span className="text-xs font-medium tracking-widest uppercase text-zinc-500">
        Cómo encaja en tu operación
      </span>
      <ProcessFlow />
    </div>
  );
}
