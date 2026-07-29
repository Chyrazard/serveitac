"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function FloatingContactDock({
  phoneHref,
  whatsappHref,
  whatsappLabel = "Contáctanos por WhatsApp",
}: {
  phoneHref: string;
  whatsappHref: string;
  whatsappLabel?: string;
}) {
  const [showCallTip, setShowCallTip] = useState(true);
  const [showWhatsappTip, setShowWhatsappTip] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowCallTip(false);
      setShowWhatsappTip(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="floating-contact floating-contact-call">
        {showCallTip && (
          <div className="floating-contact-tip" role="status">
            <span>Llama ahora</span>
            <button
              type="button"
              aria-label="Cerrar mensaje de llamada"
              onClick={() => setShowCallTip(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}
        <a href={phoneHref} aria-label="Llamar ahora">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>

      <div className="floating-contact floating-contact-whatsapp">
        {showWhatsappTip && (
          <div className="floating-contact-tip" role="status">
            <span>{whatsappLabel}</span>
            <button
              type="button"
              aria-label="Cerrar mensaje de WhatsApp"
              onClick={() => setShowWhatsappTip(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </>
  );
}
