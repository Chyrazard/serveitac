"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseSignal, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const STORAGE_KEY = "domoteknik-domotics-promo-impressions-v1";
const MAX_IMPRESSIONS = 2;
const COUNTDOWN_SECONDS = 10;

const whatsappHref =
  "https://wa.me/34623974748?text=Hola%20Domoteknik%2C%20he%20visto%20vuestra%20propuesta%20recomendada%20de%20Dom%C3%B3tica%20Loxone%20y%20quiero%20recibir%20informaci%C3%B3n%20sobre%20este%20servicio.";

function readImpressions() {
  try {
    return Number.parseInt(window.localStorage.getItem(STORAGE_KEY) ?? "0", 10) || 0;
  } catch {
    return 0;
  }
}

export function DomoticsPromoPopup() {
  const [visible, setVisible] = useState(false);
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS);
  const initialTimer = useRef<number | null>(null);
  const repeatTimer = useRef<number | null>(null);
  const sessionImpressions = useRef(0);

  const showPromo = useCallback(() => {
    const impressions = Math.max(readImpressions(), sessionImpressions.current);

    if (impressions >= MAX_IMPRESSIONS) return;

    sessionImpressions.current = impressions + 1;

    try {
      window.localStorage.setItem(STORAGE_KEY, String(impressions + 1));
    } catch {
      // El aviso sigue funcionando aunque el navegador bloquee el almacenamiento.
    }

    setSeconds(COUNTDOWN_SECONDS);
    setVisible(true);
  }, []);

  const closePromo = useCallback(() => {
    setVisible(false);

    if (Math.max(readImpressions(), sessionImpressions.current) < MAX_IMPRESSIONS) {
      if (repeatTimer.current) window.clearTimeout(repeatTimer.current);
      repeatTimer.current = window.setTimeout(showPromo, 30000);
    }
  }, [showPromo]);

  useEffect(() => {
    initialTimer.current = window.setTimeout(showPromo, 1800);

    return () => {
      if (initialTimer.current) window.clearTimeout(initialTimer.current);
      if (repeatTimer.current) window.clearTimeout(repeatTimer.current);
    };
  }, [showPromo]);

  useEffect(() => {
    if (!visible) return;

    const timer = window.setInterval(() => {
      setSeconds((current) => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [visible]);

  useEffect(() => {
    if (visible && seconds === 0) closePromo();
  }, [closePromo, seconds, visible]);

  if (!visible) return null;

  return (
    <div className="domotics-promo-backdrop" role="presentation" onMouseDown={closePromo}>
      <section
        className="domotics-promo"
        role="dialog"
        aria-modal="true"
        aria-labelledby="domotics-promo-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="domotics-promo-close"
          type="button"
          aria-label="Cerrar aviso"
          onClick={closePromo}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <div className="domotics-promo-content">
          <span className="domotics-promo-badge">
            <FontAwesomeIcon icon={faHouseSignal} /> Recomendado por Domoteknik
          </span>
          <h2 id="domotics-promo-title">Haz que tu hogar piense por ti.</h2>
          <p>
            Domótica Loxone integra iluminación, persianas, climatización,
            seguridad y energía para darte más confort, control y ahorro cada día.
          </p>
          <strong>La solución más completa que ofrecemos.</strong>
          <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={closePromo}>
            <FontAwesomeIcon icon={faWhatsapp} />
            Quiero descubrir la domótica
          </a>
          <small aria-live="polite">
            Este aviso se cerrará en <b>{seconds}</b> {seconds === 1 ? "segundo" : "segundos"}.
          </small>
        </div>
      </section>
    </div>
  );
}
