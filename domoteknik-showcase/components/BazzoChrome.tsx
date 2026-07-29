"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUp,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const phoneHref = "tel:+34634210179";
const whatsappHref =
  "https://wa.me/34634210179?text=Hola%20Grupo%20Bazzo%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios.";

type MenuLink = { href: string; label: string };

export function BazzoBrand({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`bazzo-brand ${compact ? "bazzo-brand-compact" : ""}`}
      aria-label="Grupo Bazzo, volver al inicio"
    >
      <Image
        src="/images/bazzo/logo.jpg"
        alt="Grupo Bazzo — servicios en climatización, luz y gas"
        width={800}
        height={240}
        priority
      />
    </a>
  );
}

export function BazzoHeaderMenu({
  links,
  theme = "light",
}: {
  links: MenuLink[];
  theme?: "light" | "dark" | "green";
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = wrapperRef.current?.closest("header");
    if (!header) return;
    const update = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 38);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("bazzo-menu-is-open", open);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.classList.remove("bazzo-menu-is-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={`bazzo-menu bazzo-menu-${theme}`} ref={wrapperRef}>
      <button
        className="bazzo-menu-toggle"
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <button
        className={`bazzo-menu-backdrop ${open ? "is-open" : ""}`}
        type="button"
        aria-label="Cerrar menú"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`bazzo-menu-panel ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="bazzo-menu-top">
          <BazzoBrand compact />
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <nav aria-label="Menú desplegable">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{link.label}</strong>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          ))}
        </nav>
        <div className="bazzo-menu-contact">
          <span>Respuesta directa</span>
          <a href={phoneHref}>
            <FontAwesomeIcon icon={faPhone} /> 634 210 179
          </a>
          <a href="mailto:info@grupobazzo.es">info@grupobazzo.es</a>
          <small>Hospitalet de Llobregat · Barcelona</small>
        </div>
      </aside>
    </div>
  );
}

export function BazzoContactActions() {
  return (
    <>
      <a
        className="bazzo-floating-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar con Grupo Bazzo por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>WhatsApp</span>
      </a>
      <a className="bazzo-back-top" href="#inicio" aria-label="Volver arriba">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
      <div className="bazzo-mobile-bar" aria-label="Contacto rápido">
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

export const bazzoPhoneHref = phoneHref;
export const bazzoWhatsappHref = whatsappHref;
