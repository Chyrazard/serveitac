import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad | ServeiCat 24H",
  description:
    "Política de privacidad de ServeiCat 24H para solicitudes de desatascos 24 horas, llamadas, WhatsApp y formularios de contacto.",
  alternates: {
    canonical: "/politica-privacidad"
  }
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Política de privacidad"
      intro="Esta política explica cómo se tratan los datos facilitados al contactar con ServeiCat 24H."
      sections={[
        {
          title: "Datos tratados",
          paragraphs: [
            "Podemos tratar datos identificativos y de contacto como nombre, teléfono, email, dirección aproximada del servicio y descripción del problema comunicado por llamada, WhatsApp o correo electrónico.",
            "También pueden tratarse datos técnicos básicos de navegación para medición, seguridad, analítica y campañas publicitarias si se configuran herramientas de seguimiento."
          ]
        },
        {
          title: "Finalidad",
          paragraphs: [
            "Los datos se utilizan para responder solicitudes, coordinar servicios de desatascos, preparar presupuestos, gestionar citas y atender comunicaciones posteriores relacionadas con el servicio.",
            "Cuando se activen campañas de Google Ads, los eventos de llamada o WhatsApp podrán medirse para analizar conversiones sin publicar datos personales en la web."
          ]
        },
        {
          title: "Base legal y conservación",
          paragraphs: [
            "La base legal principal es la solicitud precontractual o contractual realizada por la persona interesada, además del consentimiento cuando proceda.",
            "Los datos se conservarán durante el tiempo necesario para gestionar la solicitud y cumplir obligaciones legales aplicables."
          ]
        },
        {
          title: "Derechos",
          paragraphs: [
            `Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad escribiendo a ${site.email}.`,
            "Si consideras que el tratamiento no es adecuado, puedes reclamar ante la autoridad de control competente."
          ]
        }
      ]}
    />
  );
}
