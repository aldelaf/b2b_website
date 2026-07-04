"use client";

import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import Reveal from "@/components/site/Reveal";
import { openCalModal } from "@/components/CalEmbed";

interface Caso {
  slug: string;
  sector: string;
  title: string;
  situacion: string;
  construimos: string;
  resultado: string;
}

const CASOS: Caso[] = [
  {
    slug: "salud-digital-nl",
    sector: "Salud digital · Países Bajos",
    title: "Asistente IA para intake de pacientes multiidioma",
    situacion:
      "Una empresa holandesa de salud digital recibía solicitudes de pacientes en varios idiomas y el primer filtro consumía horas del equipo clínico.",
    construimos:
      "Un asistente de IA que hace el intake inicial, entiende al paciente en su idioma, recoge la información clínica relevante y la deja estructurada para el equipo.",
    resultado:
      "[PLACEHOLDER] de tiempo de intake ahorrado. [PLACEHOLDER] de solicitudes gestionadas al mes.",
  },
  {
    slug: "amazon-asin",
    sector: "Amazon · Estados Unidos",
    title: "Monitorización competitiva a nivel ASIN",
    situacion:
      "Marcas de Amazon perdían visibilidad sobre los movimientos de sus competidores directos, sobre todo antes de los picos de venta.",
    construimos:
      "El sistema productizado que hay detrás de nuestra oferta Amazon: seguimiento continuo a nivel ASIN, brief diario y alertas de movimientos relevantes.",
    resultado:
      "[PLACEHOLDER] de movimientos competitivos detectados al mes. [PLACEHOLDER] de tiempo de análisis ahorrado.",
  },
  {
    slug: "prospeccion-3d",
    sector: "Agencia de imágenes 3D",
    title: "Pipeline de prospección B2B automatizado",
    situacion:
      "Una agencia de imágenes 3D captaba clientes vendedores de Amazon de forma manual, sin un flujo repetible de prospección.",
    construimos:
      "Un pipeline que identifica vendedores, los enriquece con datos y lanza el outreach de forma automática, dejando al equipo solo la conversación.",
    resultado:
      "[PLACEHOLDER] de leads cualificados al mes. [PLACEHOLDER] de horas de prospección ahorradas.",
  },
  {
    slug: "biotech-news",
    sector: "Biotech",
    title: "Bot de noticias sectoriales con resumen automático",
    situacion:
      "Un equipo necesitaba estar al día del sector biotech, pero revisar fuentes a diario no era sostenible.",
    construimos:
      "Un bot que rastrea las fuentes del sector, resume lo relevante y lo distribuye automáticamente al equipo.",
    resultado:
      "[PLACEHOLDER] de fuentes monitorizadas. [PLACEHOLDER] de tiempo de lectura ahorrado.",
  },
  {
    slug: "seo-contenido",
    sector: "Contenido · SEO",
    title: "Generación de contenido SEO a escala",
    situacion:
      "Producir contenido SEO de calidad al ritmo necesario era un cuello de botella constante.",
    construimos:
      "Una herramienta que genera contenido SEO a escala manteniendo el control editorial y la coherencia de marca.",
    resultado:
      "[PLACEHOLDER] de piezas publicadas al mes. [PLACEHOLDER] de coste por pieza reducido.",
  },
  {
    slug: "recepcionista-servicios",
    sector: "Negocios de servicios",
    title: "Recepcionista IA para negocios de servicios",
    situacion:
      "Salones y clínicas perdían citas por mensajes que llegaban fuera de horario y quedaban sin respuesta.",
    construimos:
      "El producto que hay detrás de nuestra oferta Recepcionista IA: responde WhatsApp e Instagram, agenda y recuerda citas 24/7.",
    resultado:
      "[PLACEHOLDER] de mensajes respondidos al instante. [PLACEHOLDER] de reducción de no-shows.",
  },
];

export default function Casos() {
  return (
    <>
      {/* Header + index */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <Reveal>
              <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                Casos
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 mb-6">
                Sistemas que ya están funcionando.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[58ch]">
                Una muestra de lo que hemos construido para clientes en tres
                países. Las cifras se completan con cada cliente.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CASOS.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.06}>
                <a
                  href={`#${c.slug}`}
                  className="card-hover group h-full flex flex-col rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-6"
                >
                  <span className="text-xs font-medium tracking-wide uppercase text-amber-400/80 mb-3">
                    {c.sector}
                  </span>
                  <h2 className="text-base font-semibold text-zinc-100 leading-snug mb-4">
                    {c.title}
                  </h2>
                  <span className="inline-flex items-center gap-1.5 text-sm text-zinc-500 group-hover:text-amber-400 transition-colors mt-auto">
                    Ver caso
                    <ArrowDown size={14} weight="bold" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed entries */}
      <section className="pb-8">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col">
          {CASOS.map((c) => (
            <article
              key={c.slug}
              id={c.slug}
              className="scroll-mt-24 py-16 md:py-20 border-t border-zinc-900/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <div className="lg:col-span-5">
                  <Reveal>
                    <span className="text-xs font-medium tracking-wide uppercase text-amber-400/80">
                      {c.sector}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-50 mt-3 mb-6 leading-tight">
                      {c.title}
                    </h2>
                    {/* Screenshot slot — drop a real screenshot in here */}
                    <div className="aspect-[4/3] rounded-xl border border-dashed border-zinc-700/70 bg-zinc-900/30 flex items-center justify-center">
                      <span className="text-xs tracking-widest uppercase text-zinc-600">
                        [SCREENSHOT]
                      </span>
                    </div>
                  </Reveal>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-7">
                  {[
                    ["Situación", c.situacion],
                    ["Qué construimos", c.construimos],
                    ["Resultado", c.resultado],
                  ].map(([label, body], i) => (
                    <Reveal key={label} delay={i * 0.06}>
                      <div className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 pb-6 border-b border-zinc-900/80 last:border-b-0">
                        <span className="text-xs font-medium tracking-widest uppercase text-zinc-500 pt-1">
                          {label}
                        </span>
                        <p className="text-base text-zinc-300 leading-relaxed max-w-[56ch]">
                          {body}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-zinc-900/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center flex flex-col items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-tight text-zinc-50 mb-5 max-w-[20ch]">
              ¿Tu proceso se parece a alguno de estos?
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-base text-zinc-400 leading-relaxed max-w-[46ch] mb-8">
              Cuéntanoslo en una llamada corta y te decimos si se puede
              automatizar.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              onClick={() => openCalModal()}
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              Hablar con nosotros
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
