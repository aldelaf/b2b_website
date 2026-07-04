import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { NAV_ITEMS_ES } from "@/components/site/nav-config";

export interface LegalSection {
  heading: string;
  body: string;
}

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <SiteNav items={NAV_ITEMS_ES} ctaLabel="Escríbenos" />
      <main>
        <section className="pt-32 md:pt-40 pb-24 md:pb-32">
          <div className="max-w-[760px] mx-auto px-6 md:px-10">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-50 mb-3">
              {title}
            </h1>
            <p className="text-sm text-zinc-600 mb-12">
              Última actualización: {updated}
            </p>

            <div className="rounded-xl border border-dashed border-zinc-700/60 bg-zinc-900/20 px-5 py-4 mb-12">
              <p className="text-sm text-zinc-500 leading-relaxed">
                Texto pendiente de revisión legal. Sustituir cada{" "}
                <span className="text-zinc-400">[PLACEHOLDER]</span> por el
                contenido definitivo antes de la publicación.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {sections.map((s) => (
                <div key={s.heading}>
                  <h2 className="text-lg font-semibold text-zinc-100 mb-3">
                    {s.heading}
                  </h2>
                  <p className="text-base text-zinc-400 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="es" />
    </>
  );
}
