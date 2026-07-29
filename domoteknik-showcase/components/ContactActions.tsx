"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FloatingContactDock } from "@/components/FloatingContactDock";

const phoneHref = "tel:+34931989521";
const whatsappHref =
  "https://wa.me/34623974748?text=Hola%20Domoteknik%2C%20quiero%20solicitar%20un%20estudio%20energ%C3%A9tico.";

export function ContactActions() {
  return (
    <>
      <FloatingContactDock phoneHref={phoneHref} whatsappHref={whatsappHref} />

      <div className="mobile-contact-bar" aria-label="Contacto rápido">
        <a href={phoneHref}>
          <FontAwesomeIcon icon={faPhone} />
          <span>Llamar ahora</span>
        </a>
        <a href={whatsappHref} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
