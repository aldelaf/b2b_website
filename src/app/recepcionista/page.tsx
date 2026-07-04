import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { NAV_ITEMS_ES } from "@/components/site/nav-config";
import Recepcionista from "@/components/recepcionista/Recepcionista";

export const metadata: Metadata = {
  title: "Recepcionista IA para salones y clínicas · Cork Fountain",
  description:
    "Una recepcionista IA que responde WhatsApp e Instagram al momento, agenda citas y resuelve dudas 24/7. Sin permanencia.",
  alternates: { canonical: "/recepcionista" },
  openGraph: {
    title: "Recepcionista IA para salones y clínicas · Cork Fountain",
    description:
      "Responde WhatsApp e Instagram, agenda citas y resuelve dudas 24/7.",
    url: "/recepcionista",
    images: ["/og/recepcionista.svg"],
  },
};

export default function RecepcionistaPage() {
  return (
    <>
      <SiteNav
        items={NAV_ITEMS_ES}
        active="/recepcionista"
        ctaLabel="La quiero"
      />
      <main>
        <Recepcionista />
      </main>
      <SiteFooter lang="es" />
    </>
  );
}
