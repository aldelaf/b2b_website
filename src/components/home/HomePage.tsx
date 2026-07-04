"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import CountUp from "@/components/site/CountUp";
import { NAV_ITEMS_ES, NAV_ITEMS_EN } from "@/components/site/nav-config";
import { openCalModal } from "@/components/CalEmbed";

type Lang = "es" | "en";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring" as const, stiffness: 100, damping: 20 },
  }),
};

// Legacy anchors from the old one-pager (which lived at "/"). Campaigns that
// deep-linked to these now get sent to the same section on /amazon.
const LEGACY_HASHES = new Set([
  "problem",
  "included",
  "audience",
  "offer",
  "about",
  "contact",
  "sequence",
]);

const DOORS = [
  {
    href: "/amazon",
    labelEs: "Marcas Amazon (EN)",
    labelEn: "Amazon brands (EN)",
    painEs: "Pierdes cuota en los picos y no ves venir los movimientos de la competencia.",
    painEn: "You lose share at peak events and never see competitors' moves coming.",
    offerEs: "Monitorización competitiva a nivel ASIN para marcas de Amazon.",
    offerEn: "ASIN-level competitive monitoring for Amazon brands.",
  },
  {
    href: "/recepcionista",
    labelEs: "Recepcionista IA",
    labelEn: "AI Receptionist",
    painEs: "Se te escapan clientes que escriben fuera de horario.",
    painEn: "You lose clients who message after hours.",
    offerEs: "Responde WhatsApp e Instagram y agenda citas 24/7.",
    offerEn: "Answers WhatsApp and Instagram and books appointments 24/7.",
  },
  {
    href: "/automatizacion",
    labelEs: "Automatización para PYMES",
    labelEn: "SME Automation",
    painEs: "Tu equipo pierde horas en tareas manuales repetitivas.",
    painEn: "Your team loses hours on repetitive manual tasks.",
    offerEs: "Auditamos tus procesos y construimos la automatización que los elimina.",
    offerEn: "We audit your processes and build the automation that removes them.",
  },
];

const CASES = [
  {
    href: "/casos",
    titleEs: "Asistente IA para salud digital (Países Bajos)",
    titleEn: "AI assistant for digital health (Netherlands)",
    resultEs: "Intake de pacientes multiidioma, disponible 24/7.",
    resultEn: "Multilingual patient intake, available 24/7.",
  },
  {
    href: "/casos",
    titleEs: "Monitorización competitiva a nivel ASIN",
    titleEn: "ASIN-level competitive monitoring",
    resultEs: "Sistema detrás de nuestra oferta Amazon. 25+ movimientos detectados al mes.",
    resultEn: "The system behind our Amazon offer. 25+ moves detected per month.",
  },
  {
    href: "/casos",
    titleEs: "Prospección B2B automatizada (agencia 3D)",
    titleEn: "Automated B2B prospecting (3D agency)",
    resultEs: "Identificación, enriquecimiento y outreach. 30 leads cualificados al mes.",
    resultEn: "Identification, enrichment and outreach. 30 qualified leads per month.",
  },
];

const T = {
  es: {
    heroH1a: "Automatización con IA",
    heroH1b: "que se paga sola.",
    heroSub:
      "Diseñamos y construimos sistemas de automatización para empresas. Sin humo: procesos concretos, horas recuperadas, resultados medibles.",
    heroCta: "Ver qué hacemos",
    ctaLabel: "Escríbenos",
    doorsEyebrow: "Tres puertas",
    doorsTitle: "¿Cuál es tu problema?",
    credStrip:
      "Fundada por un ex Senior Brand Specialist de Amazon Europa. Construimos con las mismas herramientas que usan los equipos de IA más avanzados.",
    proof: [
      { n: 4, suffix: "", label: "años en Amazon Europa" },
      { n: 15, suffix: "+", label: "sistemas construidos" },
      { n: 3, suffix: "", label: "países con clientes activos" },
    ],
    casesEyebrow: "Casos",
    casesTitle: "Algo de lo que hemos construido.",
    casesLink: "Ver todos los casos",
    bandTitle: "¿No sabes cuál encaja?",
    bandSub: "Escríbenos y te lo decimos en una respuesta.",
    bandCta: "Hablar con nosotros",
    nav: NAV_ITEMS_ES,
  },
  en: {
    heroH1a: "AI automation",
    heroH1b: "that pays for itself.",
    heroSub:
      "We design and build automation systems for businesses. No hype: concrete processes, hours recovered, measurable results.",
    heroCta: "See what we do",
    ctaLabel: "Get in touch",
    doorsEyebrow: "Three doors",
    doorsTitle: "What's your problem?",
    credStrip:
      "Founded by a former Amazon Europe Senior Brand Specialist. We build with the same tools the most advanced AI teams use.",
    proof: [
      { n: 4, suffix: "", label: "years at Amazon Europe" },
      { n: 15, suffix: "+", label: "systems built" },
      { n: 3, suffix: "", label: "countries with active clients" },
    ],
    casesEyebrow: "Cases",
    casesTitle: "Some of what we've built.",
    casesLink: "See all cases",
    bandTitle: "Not sure which one fits?",
    bandSub: "Write to us and we'll tell you in a single reply.",
    bandCta: "Talk to us",
    nav: NAV_ITEMS_EN,
  },
};

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-zinc-800/80 bg-zinc-900/40 p-0.5 text-xs font-medium">
      {(["es", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={`px-2.5 py-1 rounded-full transition-colors ${
            lang === l ? "bg-amber-400 text-zinc-950" : "text-zinc-400 hover:text-zinc-100"
          }`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("es");
  const t = T[lang];

  // Redirect old campaign links like "/#offer" to the section on /amazon.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && LEGACY_HASHES.has(hash)) {
      window.location.replace(`/amazon#${hash}`);
    }
  }, []);

  // Keep the document language in sync with the toggle (a11y + SEO).
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div lang={lang}>
      <SiteNav
        items={t.nav}
        ctaLabel={t.ctaLabel}
        rightSlot={<LangToggle lang={lang} onChange={setLang} />}
      />

      <main>
        {/* 1. Hero — keeps the signature moving-light grid video */}
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-16 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/frames/frame-001.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-grid.mp4" type="video/mp4" />
          </video>

          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, transparent 20%, #0A1628 75%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none md:hidden"
            style={{
              background:
                "radial-gradient(ellipse 80% 40% at 50% 50%, transparent 10%, #0A1628 65%)",
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A1628] via-transparent to-[#0A1628] opacity-80 md:opacity-60" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <motion.h1
                key={lang + "-h1"}
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-none text-zinc-50"
              >
                {t.heroH1a}
                <br />
                <span className="text-amber-400">{t.heroH1b}</span>
              </motion.h1>

              <motion.p
                key={lang + "-sub"}
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[58ch]"
              >
                {t.heroSub}
              </motion.p>

              <motion.a
                key={lang + "-cta"}
                href="#servicios"
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 text-sm font-medium text-zinc-950 bg-amber-400 rounded-full hover:bg-amber-300 transition-all duration-300 active:scale-[0.98]"
              >
                {t.heroCta}
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </div>
        </section>

        {/* 2. Three doors */}
        <section id="servicios" className="py-24 md:py-32 border-t border-zinc-900/60">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="max-w-2xl mb-14 md:mb-16">
              <Reveal>
                <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                  {t.doorsEyebrow}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-none text-zinc-50">
                  {t.doorsTitle}
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DOORS.map((d, i) => (
                <Reveal key={d.href} delay={i * 0.06}>
                  <Link
                    href={d.href}
                    className="card-hover group h-full flex flex-col rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-7"
                  >
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <span className="text-lg font-semibold text-zinc-100">
                        {lang === "es" ? d.labelEs : d.labelEn}
                      </span>
                      <ArrowUpRight
                        size={20}
                        weight="bold"
                        className="text-zinc-600 group-hover:text-amber-400 transition-colors flex-shrink-0"
                      />
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                      {lang === "es" ? d.painEs : d.painEn}
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed mt-auto">
                      {lang === "es" ? d.offerEs : d.offerEn}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Credibility strip */}
        <section className="py-20 md:py-28 border-t border-zinc-900/60">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Reveal>
              <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed max-w-[64ch] font-medium tracking-tight">
                {t.credStrip}
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl">
              {t.proof.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.08}>
                  <div className="flex flex-col gap-1 pt-5 border-t border-zinc-800/60">
                    <span className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-400 tabular-nums">
                      <CountUp value={p.n} suffix={p.suffix} />
                    </span>
                    <span className="text-sm text-zinc-500">{p.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Mini casos */}
        <section className="py-24 md:py-32 border-t border-zinc-900/60">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 mb-12 md:mb-14">
              <div>
                <Reveal>
                  <p className="text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
                    {t.casesEyebrow}
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter leading-tight text-zinc-50">
                    {t.casesTitle}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.1}>
                <Link
                  href="/casos"
                  className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
                >
                  {t.casesLink}
                  <ArrowRight size={15} weight="bold" />
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {CASES.map((c, i) => (
                <Reveal key={c.titleEs} delay={i * 0.06}>
                  <Link
                    href={c.href}
                    className="card-hover group h-full flex flex-col rounded-2xl border border-zinc-800/60 bg-[#0F1F36]/70 p-7"
                  >
                    <h3 className="text-base font-semibold text-zinc-100 leading-snug mb-3">
                      {lang === "es" ? c.titleEs : c.titleEn}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed mt-auto">
                      {lang === "es" ? c.resultEs : c.resultEn}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <Link
                href="/casos"
                className="sm:hidden inline-flex items-center gap-2 mt-8 text-sm font-medium text-amber-400"
              >
                {t.casesLink}
                <ArrowRight size={15} weight="bold" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 5. CTA band */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="relative bg-amber-400 rounded-[2.5rem] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.06),transparent_50%)] pointer-events-none" />
              <div className="relative px-8 py-16 md:px-20 md:py-24 text-center flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-950 mb-4">
                  {t.bandTitle}
                </h2>
                <p className="text-base md:text-lg text-amber-950/70 leading-relaxed max-w-[46ch] mb-8">
                  {t.bandSub}
                </p>
                <button
                  onClick={() => openCalModal()}
                  className="group inline-flex items-center justify-center gap-3 h-14 px-8 text-base font-medium text-amber-400 bg-zinc-950 rounded-full hover:bg-zinc-900 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                >
                  {t.bandCta}
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
      </main>

      <SiteFooter lang={lang} />
    </div>
  );
}
