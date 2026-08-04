"use client";

import { FormEvent, ReactNode, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type SubmitState = "idle" | "sending" | "success" | "error";

export function StudyRequestButton({
  className = "m-button m-study-button",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const titleId = useId();
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => firstInputRef.current?.focus(), 120);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const closeModal = () => {
    setOpen(false);
    window.setTimeout(() => {
      setSubmitState("idle");
      setErrorMessage("");
    }, 300);
  };

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "No pudimos enviar la solicitud.");
      }

      form.reset();
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No pudimos enviar la solicitud. Inténtalo de nuevo.",
      );
    }
  };

  return (
    <>
      <button className={className} type="button" onClick={() => setOpen(true)}>
        {children ?? "Solicitar estudio gratuito"}
        <FontAwesomeIcon icon={faArrowRight} />
      </button>

      {open && createPortal(
        <div
          className="study-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            className="study-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              className="study-modal-close"
              type="button"
              aria-label="Cerrar formulario"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {submitState === "success" ? (
              <div className="study-form-success" aria-live="polite">
                <span><FontAwesomeIcon icon={faCheck} /></span>
                <p>Solicitud enviada</p>
                <h2 id={titleId}>Gracias por confiar en Domoteknik.</h2>
                <p>
                  Hemos recibido tus datos. Nuestro equipo te contactará para
                  preparar tu estudio gratuito y personalizado.
                </p>
                <button type="button" onClick={closeModal}>Cerrar</button>
              </div>
            ) : (
              <>
                <div className="study-modal-heading">
                  <span>Estudio gratuito · Sin compromiso</span>
                  <h2 id={titleId}>Cuéntanos qué necesita tu hogar.</h2>
                  <p>
                    Déjanos tus datos y un especialista de Domoteknik se pondrá
                    en contacto contigo.
                  </p>
                </div>

                <form className="study-form" onSubmit={submitForm}>
                  <div className="study-field study-field-full">
                    <label>Nombre <em>*</em></label>
                    <div className="study-name-grid">
                      <div>
                        <input
                          ref={firstInputRef}
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                        />
                        <small>Nombre</small>
                      </div>
                      <div>
                        <input
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                        />
                        <small>Apellidos</small>
                      </div>
                    </div>
                  </div>

                  <div className="study-field">
                    <label htmlFor="study-phone">Teléfono <em>*</em></label>
                    <input
                      id="study-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="study-field">
                    <label htmlFor="study-postal">Código Postal <em>*</em></label>
                    <input
                      id="study-postal"
                      name="postalCode"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      pattern="[0-9]{5}"
                      maxLength={5}
                      required
                    />
                    <small>
                      Instalaciones en Barcelona, Lleida, Girona y Tarragona.
                    </small>
                  </div>

                  <div className="study-field study-field-full">
                    <label htmlFor="study-email">Correo electrónico <em>*</em></label>
                    <input
                      id="study-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="study-field study-field-full">
                    <label htmlFor="study-message">Comentario o mensaje</label>
                    <textarea id="study-message" name="message" rows={5} />
                  </div>

                  <div className="study-honeypot" aria-hidden="true">
                    <label htmlFor="study-website">Sitio web</label>
                    <input id="study-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <label className="study-privacy study-field-full">
                    <input name="privacy" type="checkbox" value="accepted" required />
                    <span>
                      He leído y acepto la{" "}
                      <a href="https://www.domoteknik.com/politica-de-privacidad/" target="_blank" rel="noreferrer">
                        Política de Privacidad
                      </a>.
                    </span>
                  </label>

                  <p className="study-legal study-field-full">
                    Responsable: Domoteknik Energía y Domótica S.L. Finalidad:
                    gestionar su solicitud y enviarle el presupuesto.
                    Legitimación: su consentimiento. Destinatarios: no se
                    cederán datos a terceros salvo obligación legal. Derechos:
                    acceder, rectificar y suprimir los datos escribiendo a
                    info@domoteknik.com.
                  </p>

                  {submitState === "error" && (
                    <p className="study-form-error study-field-full" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    className="study-submit study-field-full"
                    type="submit"
                    disabled={submitState === "sending"}
                  >
                    <span>{submitState === "sending" ? "Enviando…" : "Enviar solicitud"}</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </form>
              </>
            )}
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
