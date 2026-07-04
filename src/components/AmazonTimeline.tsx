import Reveal from "@/components/site/Reveal";

interface Milestone {
  day: string;
  label: string;
  items: string[];
  climax?: boolean;
}

// Same content the old animated Prime Day sequence carried — now a static
// timeline graphic (D-21 / D-14 / D-7 / GO), no scroll-driven animation.
const MILESTONES: Milestone[] = [
  { day: "D-21", label: "Early staging", items: ["Comp A · −8% promo", "Comp B · A+ refresh"] },
  { day: "D-14", label: "Variation plays", items: ["Comp C · +2 variations", "Comp D · ASIN spawn"] },
  { day: "D-7", label: "Final positioning", items: ["Comp A · review push", "Comp E · keyword shift"] },
  { day: "GO", label: "Prime Day", items: [], climax: true },
];

function Items({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {items.map((it) => (
        <span
          key={it}
          className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-zinc-800/80 bg-zinc-900/50 text-xs text-zinc-400 whitespace-nowrap"
        >
          {it}
        </span>
      ))}
    </div>
  );
}

export default function AmazonTimeline() {
  return (
    <section
      id="sequence"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 70% at 50% 50%, #0F1F36 0%, #0A1628 60%, #07101F 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-amber-400 mb-4">
              Pre-Event Intelligence
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.05] text-zinc-50 max-w-3xl mx-auto">
              Competitors stage their moves
              <br />
              <span className="text-zinc-500">14-21 days before the event.</span>
            </h2>
          </div>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-4 gap-6">
            {/* Axis line connecting the four node dots */}
            <div className="absolute top-[9px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-amber-500/70 via-amber-400 to-amber-300 shadow-[0_0_12px_rgba(255,182,39,0.35)]" />
            {MILESTONES.map((m, i) => (
              <Reveal key={m.day} delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center gap-5">
                  <span
                    className={`relative z-10 rounded-full ${
                      m.climax
                        ? "w-5 h-5 bg-amber-400 shadow-[0_0_16px_4px_rgba(255,182,39,0.5)]"
                        : "w-[18px] h-[18px] bg-amber-400/90 ring-4 ring-[#0A1628]"
                    }`}
                  />
                  <div>
                    <div
                      className={`font-mono tracking-wider ${
                        m.climax
                          ? "text-2xl font-semibold text-amber-400"
                          : "text-xl font-semibold text-zinc-100"
                      }`}
                    >
                      {m.day}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">
                      {m.label}
                    </div>
                  </div>
                  {m.items.length > 0 && <Items items={m.items} />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.day} delay={i * 0.06}>
              <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`rounded-full ${
                      m.climax
                        ? "w-4 h-4 bg-amber-400 shadow-[0_0_12px_3px_rgba(255,182,39,0.5)]"
                        : "w-3 h-3 bg-amber-400/90"
                    }`}
                  />
                  {i < MILESTONES.length - 1 && (
                    <span className="w-px flex-1 my-1 bg-gradient-to-b from-amber-500/50 to-amber-500/10" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-mono font-semibold tracking-wider ${
                        m.climax ? "text-xl text-amber-400" : "text-lg text-zinc-100"
                      }`}
                    >
                      {m.day}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-zinc-500">
                      {m.label}
                    </span>
                  </div>
                  {m.items.length > 0 && (
                    <div className="mt-3">
                      <Items items={m.items} />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing caption */}
        <Reveal delay={0.1}>
          <div className="text-center mt-16 md:mt-24">
            <p className="text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Your team walks in with a{" "}
              <span className="text-amber-400 font-medium">
                written competitive read
              </span>
              {" — "}not reactive scrambling.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
