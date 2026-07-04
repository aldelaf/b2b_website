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
      sections={[
        {
          heading: "Objeto",
          body: "Este sitio web tiene como finalidad presentar los servicios de automatización con inteligencia artificial que ofrece Cork Fountain y facilitar el contacto con clientes interesados. El acceso y la navegación por el sitio implican la aceptación de las condiciones recogidas en este aviso legal. El uso del sitio debe realizarse de forma diligente y conforme a la ley, quedando prohibido cualquier uso que pueda dañar el sitio, sus contenidos o los derechos de terceros.",
        },
        {
          heading: "Propiedad intelectual e industrial",
          body: "Los contenidos de este sitio web —textos, diseño, gráficos, logotipos y demás elementos— son titularidad de Cork Fountain o se utilizan con autorización de sus titulares. Quedan reservados todos los derechos. No está permitida su reproducción, distribución, comunicación pública o transformación sin autorización expresa, salvo para uso personal y privado.",
        },
        {
          heading: "Responsabilidad",
          body: "Cork Fountain trabaja para que la información publicada en este sitio sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni se hace responsable de los daños derivados del uso del sitio o de la imposibilidad de acceder a él. Este sitio puede contener enlaces a páginas de terceros (por ejemplo, herramientas de reserva de citas o redes sociales); Cork Fountain no se hace responsable de sus contenidos ni de sus políticas.",
        },
        {
          heading: "Legislación aplicable",
          body: "La relación entre Cork Fountain y los usuarios de este sitio se rige por la legislación española. Para cualquier controversia derivada del uso del sitio, las partes se someterán a los juzgados y tribunales competentes conforme a la normativa aplicable.",
        },
        {
          heading: "Contacto",
          body: "Para cualquier consulta relacionada con este aviso legal puedes escribir a alvaro@corkfountain.com.",
        },
      ]}
    />
  );
}
