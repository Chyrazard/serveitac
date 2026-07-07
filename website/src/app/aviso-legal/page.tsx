import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal | ServeiCat 24H",
  description: "Aviso legal de ServeiCat 24H, servicio de desatascos 24 horas en Vilanova, Garraf y Baix Penedes.",
  alternates: {
    canonical: "/aviso-legal"
  }
};

export default function LegalNotice() {
  return (
    <LegalPage
      title="Aviso legal"
      intro="Esta página recoge la información general de uso del sitio web de ServeiCat 24H."
      sections={[
        {
          title: "Titularidad del sitio",
          paragraphs: [
            "ServeiCat 24H es la denominación comercial utilizada para la captación de solicitudes de servicios de desatascos, fontanería urgente y cita agendada en Vilanova i la Geltrú, Garraf y Baix Penedès.",
            `El contacto operativo del servicio es ${site.email} y el teléfono de atención es ${site.phoneDisplay}. Los datos fiscales completos deben incorporarse en cuanto estén formalizados.`
          ]
        },
        {
          title: "Uso del sitio web",
          paragraphs: [
            "El contenido de esta web tiene carácter informativo y comercial. Las tarifas indicadas muestran precios base y pueden variar si la intervención requiere material, maquinaria especial o tiempo adicional.",
            "La persona usuaria se compromete a utilizar el sitio de forma lícita y a no realizar acciones que puedan dañar, bloquear o deteriorar su funcionamiento."
          ]
        },
        {
          title: "Propiedad intelectual",
          paragraphs: [
            "Los textos, imágenes, marca, estructura visual y elementos del sitio pertenecen a ServeiCat 24H o se utilizan con autorización dentro del proyecto.",
            "No se permite la reproducción comercial de estos contenidos sin autorización previa."
          ]
        }
      ]}
    />
  );
}
