"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faHeadset,
  faPhone,
  faXmark,
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
      <div className="bazzo-preloader-logo" aria-hidden="true">
        <Image
          src="/images/bazzo/logo-transparent.png"
          alt=""
          width={2168}
          height={725}
          priority
        />
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
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const header = wrapperRef.current?.closest("header");
    if (!header) return;

    let scrolled = window.scrollY > 48;
    let frame = 0;

    const commit = () => {
      const nextY = window.scrollY;

      if (!scrolled && nextY > 72) scrolled = true;
      if (scrolled && nextY < 24) scrolled = false;

      header.classList.toggle("is-scrolled", scrolled);
      frame = 0;
    };

    const update = () => {
      if (!frame) frame = window.requestAnimationFrame(commit);
    };

    commit();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
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
        className={`bazzo-menu-toggle bazzo-menu-toggle-${theme} ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      {mounted &&
        createPortal(
          <>
            <button
              className={`bazzo-menu-backdrop bazzo-menu-backdrop-${theme} ${open ? "is-open" : ""}`}
              type="button"
              aria-label="Cerrar menú"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            />

            <aside
              className={`bazzo-menu-panel bazzo-menu-panel-${theme} ${open ? "is-open" : ""}`}
              aria-hidden={!open}
            >
              <div className="bazzo-menu-top">
                <BazzoBrand compact />
                <button
                  className={`bazzo-menu-toggle bazzo-menu-toggle-${theme} bazzo-menu-panel-close is-open`}
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setOpen(false)}
                >
                  <span />
                  <span />
                  <span />
                </button>
              </div>
              <nav aria-label="Menú desplegable">
                {links.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
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
          </>,
          document.body,
        )}
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

export function BazzoWhatsappContact() {
  return (
    <a
      className="bazzo-whatsapp-sticky"
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacto por WhatsApp"
    >
      <span>
        <small>Respuesta directa</small>
        <strong>Contacto por WhatsApp</strong>
      </span>
      <span className="bazzo-whatsapp-sticky-icon">
        <FontAwesomeIcon icon={faWhatsapp} />
      </span>
    </a>
  );
}

export function BazzoAdvisorContact() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => window.removeEventListener("keydown", closeWithEscape);
  }, []);

  return (
    <div className={`bazzo-advisor ${open ? "is-open" : ""}`}>
      <div className="bazzo-advisor-options" aria-hidden={!open}>
        <a href={phoneHref} tabIndex={open ? 0 : -1}>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <strong>Llamar ahora</strong>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          tabIndex={open ? 0 : -1}
        >
          <span>
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
          <strong>WhatsApp</strong>
        </a>
      </div>

      <button
        className="bazzo-advisor-trigger"
        type="button"
        aria-label={
          open ? "Cerrar opciones de contacto" : "Hablar con un asesor"
        }
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="bazzo-advisor-copy">
          <small>¿Te ayudamos?</small>
          <strong>Habla con un asesor</strong>
        </span>
        <span className="bazzo-advisor-icon">
          <FontAwesomeIcon icon={open ? faXmark : faHeadset} />
        </span>
      </button>
    </div>
  );
}

export const bazzoPhoneHref = phoneHref;
export const bazzoWhatsappHref = whatsappHref;
