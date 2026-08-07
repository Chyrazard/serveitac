import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Brand } from "@/components/Brand";
import { ContactActions } from "@/components/ContactActions";
import { EnergySavingsSimulator } from "@/components/EnergySavingsSimulator";
import { HeaderMenu } from "@/components/HeaderMenu";

export const metadata: Metadata = {
  title: "Simulador de ahorro energético | Domoteknik",
  description:
    "Calcula de forma orientativa cuánto podrías ahorrar con fotovoltaica, aerotermia, domótica Loxone o un sistema integral.",
  alternates: {
    canonical: "https://nueva.domoteknik.com/simulador/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const menuLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#nosotros", label: "Domoteknik" },
  { href: "/#proceso", label: "Cómo funciona" },
  { href: "/#preguntas", label: "Preguntas" },
];

export default function SimulatorPage() {
  return (
    <main className="proposal proposal-two simulator-page" id="inicio">
      <header className="m-header has-simulator-cta simulator-site-header">
        <Brand compact href="/" />
        <a className="m-header-simulator" href="#simulator-title">Simular tu ahorro</a>
        <nav aria-label="Navegación principal">
          <a href="/">Inicio</a>
          <a href="/#servicios">Servicios</a>
          <a href="/#proceso">Cómo funciona</a>
          <a href="/#preguntas">Preguntas</a>
        </nav>
        <div className="site-header-actions">
          <a className="m-header-call" href="tel:+34931989521">
            <FontAwesomeIcon icon={faPhone} /> 931 989 521
          </a>
          <HeaderMenu links={menuLinks} />
        </div>
      </header>

      <EnergySavingsSimulator />

      <footer className="energy-sim-footer">
        <Brand href="/" />
        <p>Tu hogar. Tu energía. Tu tranquilidad.</p>
        <div>
          <a href="tel:+34931989521">931 989 521</a>
          <a href="mailto:info@domoteknik.com">info@domoteknik.com</a>
        </div>
      </footer>
      <ContactActions />
    </main>
  );
}
