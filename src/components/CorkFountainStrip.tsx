import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/site/Reveal";

// Quiet "part of Cork Fountain" note near the bottom of /amazon. Keeps the
// Amazon page feeling focused while linking back to the agency.
export default function CorkFountainStrip() {
  return (
    <section className="py-16 md:py-20 border-t border-zinc-900/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl border border-zinc-800/50 bg-[#0F1F36]/40 px-7 py-6">
            <p className="text-sm text-zinc-400 leading-relaxed max-w-[62ch]">
              Part of{" "}
              <span className="text-zinc-200 font-medium">Cork Fountain</span> — we
              build AI automation systems for businesses in the US and Spain.
            </p>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              Explore Cork Fountain
              <ArrowRight
                size={15}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
