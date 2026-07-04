import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Cork Fountain · Automatización con IA para empresas",
  description:
    "Diseñamos y construimos sistemas de automatización con IA para empresas. Sin humo: procesos concretos, horas recuperadas, resultados medibles.",
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Cork Fountain · Automatización con IA para empresas",
    description:
      "Diseñamos y construimos sistemas de automatización con IA para empresas.",
    url: "/",
    images: ["/og/default.svg"],
  },
};

export default function Page() {
  return <HomePage />;
}
