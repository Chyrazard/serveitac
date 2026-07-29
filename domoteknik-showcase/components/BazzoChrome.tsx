"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FloatingContactDock } from "@/components/FloatingContactDock";

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
        src="/images/bazzo/logo-transparent.png"
        alt="Grupo Bazzo — servicios en climatización, luz y gas"
        width={2168}
        height={725}
        priority
      />
    </a>
  );
}

export function BazzoPreloader() {
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 520);
    const hideTimer = window.setTimeout(() => setHidden(true), 860);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`bazzo-preloader ${leaving ? "is-leaving" : ""}`}
      role="status"
      aria-label="Cargando Grupo Bazzo"
    >
      <div className="bazzo-preloader-eye" aria-hidden="true">
        <FontAwesomeIcon icon={faEye} />
        <span />
      </div>
    </div>
  );
}

export function BazzoMobileConsult() {
  return (
    <a className="bazzo-mobile-consult" href="#contacto">
      <span>Consultar ya</span>
      <FontAwesomeIcon icon={faArrowRight} />
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
        className={`bazzo-menu-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
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
      <FloatingContactDock phoneHref={phoneHref} whatsappHref={whatsappHref} />
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
