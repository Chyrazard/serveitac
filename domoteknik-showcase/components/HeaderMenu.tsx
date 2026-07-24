"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";

type MenuLink = {
  href: string;
  label: string;
};

export function HeaderMenu({
  links,
  light = false,
}: {
  links: MenuLink[];
  light?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = wrapperRef.current?.closest("header");
    if (!header) return;

    const updateHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 36);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-is-open", open);

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeWithEscape);
    return () => {
      document.documentElement.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  return (
    <div
      className={`header-menu ${light ? "header-menu-light" : ""}`}
      ref={wrapperRef}
    >
      <button
        className="header-menu-toggle"
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
      </button>

      <button
        className={`header-menu-backdrop ${open ? "is-open" : ""}`}
        type="button"
        aria-label="Cerrar menú"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`header-menu-panel ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="header-menu-panel-top">
          <span>Menú</span>
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

        <div className="header-menu-contact">
          <span>Hablemos de tu proyecto</span>
          <a href="tel:+34931989521">
            <FontAwesomeIcon icon={faPhone} />
            931 989 521
          </a>
          <a href="mailto:info@domoteknik.com">info@domoteknik.com</a>
        </div>
      </aside>
    </div>
  );
}
