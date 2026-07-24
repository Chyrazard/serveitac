"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const phoneHref = "tel:+34931989521";
const whatsappHref =
  "https://wa.me/34623974748?text=Hola%20Domoteknik%2C%20quiero%20solicitar%20un%20estudio%20energ%C3%A9tico.";

export function ContactActions() {
  return (
    <>
      <a
        className="floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar con ventas por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>WhatsApp</span>
      </a>

      <a className="back-to-top" href="#inicio" aria-label="Volver arriba">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>

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
