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
  updated?: string;
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
            {updated ? (
              <p className="text-sm text-zinc-600 mb-12">
                Última actualización: {updated}
              </p>
            ) : (
              <div className="mb-12" />
            )}

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
