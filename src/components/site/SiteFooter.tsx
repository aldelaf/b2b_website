import Link from "next/link";
import { CONTACT_EMAIL } from "./nav-config";

const COPY = {
  es: {
    descriptor:
      "Diseñamos y construimos sistemas de automatización con IA para empresas.",
    offers: "Servicios",
    amazon: "Amazon",
    recepcionista: "Recepcionista IA",
    automatizacion: "Automatización PYMES",
    casos: "Casos",
    legal: "Legal",
    aviso: "Aviso legal",
    privacidad: "Privacidad",
    contact: "Contacto",
  },
  en: {
    descriptor: "AI automation systems for businesses in the US and Spain.",
    offers: "Services",
    amazon: "Amazon",
    recepcionista: "AI Receptionist",
    automatizacion: "SME Automation",
    casos: "Case studies",
    legal: "Legal",
    aviso: "Legal notice",
    privacidad: "Privacy",
    contact: "Contact",
  },
};

export default function SiteFooter({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = COPY[lang];
  const year = 2026;

  return (
    <footer className="py-16 border-t border-zinc-800/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="text-base font-semibold text-zinc-200 tracking-tight mb-2">
              Cork Fountain
            </div>
            <p className="text-sm text-zinc-500 max-w-[38ch] leading-relaxed">
              {t.descriptor}
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-600 mb-4">
              {t.offers}
            </div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/amazon"
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {t.amazon}
                </Link>
              </li>
              <li>
                <Link
                  href="/recepcionista"
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {t.recepcionista}
                </Link>
              </li>
              <li>
                <Link
                  href="/automatizacion"
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {t.automatizacion}
                </Link>
              </li>
              <li>
                <Link
                  href="/casos"
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {t.casos}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-600 mb-4">
              {t.legal}
            </div>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {t.aviso}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {t.privacidad}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-medium tracking-widest uppercase text-zinc-600 mb-4">
              {t.contact}
            </div>
            {/* Placeholder — swap for the real address before launch. */}
            <span className="text-sm text-zinc-400 break-words">
              {CONTACT_EMAIL}
            </span>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-900/80 text-sm text-zinc-600">
          © {year} Cork Fountain
        </div>
      </div>
    </footer>
  );
}
