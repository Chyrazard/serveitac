import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de cookies | ServeiCat 24H",
  description:
    "Política de cookies de ServeiCat 24H para navegación, medición técnica y futuras campañas de Google Ads.",
  alternates: {
    canonical: "/cookies"
  }
};

export default function CookiesPolicy() {
  return (
    <LegalPage
      title="Política de cookies"
      intro="Esta página describe el uso de cookies y tecnologías similares en serveicat.com."
      sections={[
        {
          title: "Qué son las cookies",
          paragraphs: [
            "Las cookies son pequeños archivos que el navegador puede almacenar para recordar preferencias, mejorar la navegación o medir el uso del sitio.",
            "También pueden utilizarse tecnologías similares para medir conversiones de campañas publicitarias."
          ]
        },
        {
          title: "Cookies previstas",
          paragraphs: [
            "La web puede utilizar cookies técnicas necesarias para el funcionamiento básico, como recordar la preferencia de idioma.",
            "Cuando se active Google Ads o herramientas de analítica, podrán añadirse cookies de medición y conversión para evaluar llamadas, WhatsApp y rendimiento de campañas."
          ]
        },
        {
          title: "Cómo gestionarlas",
          paragraphs: [
            "Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Si bloqueas cookies técnicas, algunas preferencias podrían no recordarse.",
            "Esta política se actualizará si se incorporan nuevas herramientas de medición, publicidad o analítica."
          ]
        }
      ]}
    />
  );
}
