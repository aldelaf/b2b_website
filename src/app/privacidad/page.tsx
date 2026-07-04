import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad · Cork Fountain",
  description: "Política de privacidad de Cork Fountain.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      updated="[PLACEHOLDER]"
      sections={[
        {
          heading: "Responsable del tratamiento",
          body: "[PLACEHOLDER] · identidad y datos de contacto del responsable del tratamiento de datos.",
        },
        {
          heading: "Datos que recogemos",
          body: "[PLACEHOLDER] · categorías de datos personales recabados y su origen.",
        },
        {
          heading: "Finalidad y base legal",
          body: "[PLACEHOLDER] · finalidades del tratamiento y base jurídica que lo legitima.",
        },
        {
          heading: "Conservación",
          body: "[PLACEHOLDER] · plazos de conservación de los datos.",
        },
        {
          heading: "Derechos",
          body: "[PLACEHOLDER] · derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación, y cómo ejercerlos.",
        },
        {
          heading: "Terceros y encargados",
          body: "[PLACEHOLDER] · proveedores y encargados de tratamiento (por ejemplo, herramientas de reserva de citas y alojamiento).",
        },
      ]}
    />
  );
}
