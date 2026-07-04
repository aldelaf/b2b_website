import type { Metadata } from "next";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import { NAV_ITEMS_ES } from "@/components/site/nav-config";
import Casos from "@/components/casos/Casos";

export const metadata: Metadata = {
  title: "Casos — Cork Fountain",
  description:
    "Sistemas de automatización con IA que ya funcionan para clientes en Países Bajos, Estados Unidos y España.",
  alternates: { canonical: "/casos" },
  openGraph: {
    title: "Casos — Cork Fountain",
    description:
      "Sistemas de automatización con IA que ya funcionan para clientes en tres países.",
    url: "/casos",
    images: ["/og/default.svg"],
  },
};

export default function CasosPage() {
  return (
    <>
      <SiteNav items={NAV_ITEMS_ES} active="/casos" ctaLabel="Escríbenos" />
      <main>
        <Casos />
      </main>
      <SiteFooter lang="es" />
    </>
  );
}
