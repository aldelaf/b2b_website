import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { NAV_ITEMS_ES } from "@/components/site/nav-config";
import Automatizacion from "@/components/automatizacion/Automatizacion";

export const metadata: Metadata = {
  title: "Auditoría y automatización de procesos para PYMES · Cork Fountain",
  description:
    "Auditamos tus procesos, cuantificamos lo que te cuestan y construimos la automatización que los elimina. Primero el diagnóstico, después la solución.",
  alternates: { canonical: "/automatizacion" },
  openGraph: {
    title: "Auditoría y automatización de procesos para PYMES · Cork Fountain",
    description:
      "Auditamos tus procesos, cuantificamos lo que te cuestan y construimos la automatización que los elimina.",
    url: "/automatizacion",
    images: ["/og/automatizacion.svg"],
  },
};

export default function AutomatizacionPage() {
  return (
    <>
      <SiteNav
        items={NAV_ITEMS_ES}
        active="/automatizacion"
        ctaLabel="Solicitar auditoría"
      />
      <main>
        <Automatizacion />
      </main>
      <SiteFooter lang="es" />
    </>
  );
}
