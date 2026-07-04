import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Aviso legal · Cork Fountain",
  description: "Aviso legal de Cork Fountain.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalPage
      title="Aviso legal"
      updated="[PLACEHOLDER]"
      sections={[
        {
          heading: "Titular",
          body: "[PLACEHOLDER] · razón social, NIF/CIF, domicilio y datos de contacto del titular del sitio web.",
        },
        {
          heading: "Objeto",
          body: "[PLACEHOLDER] · descripción del objeto del sitio y de las condiciones de uso aplicables a los visitantes.",
        },
        {
          heading: "Propiedad intelectual e industrial",
          body: "[PLACEHOLDER] · titularidad de los contenidos, marcas y elementos del sitio, y usos permitidos.",
        },
        {
          heading: "Responsabilidad",
          body: "[PLACEHOLDER] · limitación de responsabilidad sobre el contenido y los enlaces externos.",
        },
        {
          heading: "Legislación aplicable",
          body: "[PLACEHOLDER] · legislación y fuero aplicables a la relación con los usuarios.",
        },
      ]}
    />
  );
}
