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
      updated="4 de julio de 2026"
      sections={[
        {
          heading: "Datos que recogemos",
          body: "Recogemos los datos que nos facilitas directamente al contactar con nosotros o reservar una llamada: tu dirección de correo electrónico y, en su caso, el nombre y los datos que incluyas en tu mensaje o en el formulario de reserva. No recogemos datos de categorías especiales ni compramos datos a terceros.",
        },
        {
          heading: "Finalidad y base legal",
          body: "Utilizamos tus datos para responder a tus consultas, gestionar las llamadas o reuniones que reserves y, en su caso, preparar una propuesta de servicios. La base legal es tu consentimiento al facilitarnos los datos y la aplicación de medidas precontractuales a petición tuya. No utilizamos tus datos para publicidad ni los cedemos a terceros con fines comerciales.",
        },
        {
          heading: "Conservación",
          body: "Conservamos tus datos mientras dure la relación o la conversación comercial y, una vez finalizada, durante los plazos necesarios para atender posibles responsabilidades legales. Si nos escribes y no llegamos a trabajar juntos, eliminamos tus datos en un plazo razonable.",
        },
        {
          heading: "Derechos",
          body: "Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento escribiendo a alvaro@corkfountain.com. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).",
        },
        {
          heading: "Terceros y encargados",
          body: "Para prestar el servicio utilizamos proveedores que pueden tratar datos por cuenta nuestra: Netlify (alojamiento del sitio web), Cal.com (reserva de llamadas) y Meta (WhatsApp e Instagram, cuando nos contactas por esos canales). Estos proveedores actúan como encargados de tratamiento conforme a sus propias garantías y acuerdos de protección de datos.",
        },
      ]}
    />
  );
}
