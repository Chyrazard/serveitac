import Image from "next/image";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faCheck,
  faFireFlameCurved,
  faPhone,
  faPlay,
  faShieldHalved,
  faSnowflake,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import {
  BazzoBrand,
  BazzoContactActions,
  BazzoHeaderMenu,
  BazzoMobileConsult,
  BazzoPreloader,
  bazzoPhoneHref,
} from "@/components/BazzoChrome";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Calderas y gas",
    text: "Instalación, diagnóstico, reparación y mantenimiento de calderas y calentadores de gas.",
    image: "/images/bazzo/gas-flame.webp",
  },
  {
    title: "Aerotermia",
    text: "Calefacción, refrigeración y agua caliente con una solución compacta, eficiente y silenciosa.",
    image: "/images/bazzo/heat-pump-garden.webp",
  },
  {
    title: "Aire acondicionado",
    text: "Asesoramiento, presupuesto e instalación integral para llegar al calor con todo bajo control.",
    image: "/images/bazzo/aerothermal-comfort.webp",
  },
];

const menu = [
  { href: "#servicios", label: "Servicios" },
  { href: "#experiencia", label: "Grupo Bazzo" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export const metadata: Metadata = {
  title: "Grupo Bazzo | Climatización, luz y gas en Barcelona",
  description:
    "Servicio técnico 24H, calderas, aerotermia, aire acondicionado y agua caliente con técnicos autorizados en Barcelona.",
};

export default function BazzoUnwindProposal() {
  return (
    <main className="bazzo-proposal bazzo-four" id="inicio">
      <BazzoPreloader />
      <Reveal />
      <header className="b4-header">
        <BazzoBrand compact />
        <BazzoMobileConsult />
        <nav aria-label="Navegación principal">
          {menu.slice(0, 3).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="b4-header-actions">
          <a href={bazzoPhoneHref} className="b4-nav-cta">
            Servicio 24H
          </a>
          <BazzoHeaderMenu links={menu} theme="dark" />
        </div>
      </header>

      <section className="b4-hero">
        <Image
          src="/images/bazzo/complete-installation.webp"
          alt="Instalación completa de climatización realizada por Grupo Bazzo"
          fill
          priority
          sizes="100vw"
        />
        <div className="b4-hero-overlay" />
        <div className="b4-container b4-hero-inner">
          <div className="b4-hero-top">
            <span className="b4-kicker">Climatización · Luz · Gas</span>
            <h1>
              Tu confort,
              <br />
              bajo control.
            </h1>
            <div className="b4-actions">
              <a href={bazzoPhoneHref} className="b4-btn b4-btn-lime">
                Llamar ahora
              </a>
              <a href="#servicios" className="b4-btn b4-btn-light">
                Ver servicios
              </a>
            </div>
          </div>
          <div className="b4-hero-bottom">
            <div className="b4-video-chip">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/bazzo/aerothermal-comfort.webp"
                aria-label="Sistema de aire acondicionado en una vivienda"
              >
                <source
                  src="/videos/bazzo/climatizacion-hero.mp4"
                  type="video/mp4"
                />
              </video>
              <span className="b4-play">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <p>Experiencia y seguridad en cada instalación.</p>
            </div>
            <div className="b4-proof">
              <div>
                {[
                  "/images/bazzo/inverter.webp",
                  "/images/bazzo/heat-pump-stone.webp",
                  "/images/bazzo/technical-room.webp",
                ].map((src) => (
                  <span key={src}>
                    <Image src={src} alt="" fill sizes="44px" />
                  </span>
                ))}
              </div>
              <p>
                <strong>10 años</strong>
                <br />
                resolviendo instalaciones reales
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="b4-section b4-services" id="servicios">
        <div className="b4-container">
          <div className="b4-section-head" data-reveal>
            <div>
              <span>Servicios Grupo Bazzo</span>
              <h2>Soluciones para sentirte bien todo el año.</h2>
            </div>
            <a href={bazzoPhoneHref} className="b4-link">
              Consultar servicio <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="b4-service-grid">
            {services.map((service, index) => (
              <article key={service.title} data-reveal>
                <div className="b4-card-image">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <div className="b4-card-copy">
                  <span>0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={bazzoPhoneHref}>
                    Solicitar información{" "}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b4-section b4-numbers" id="experiencia">
        <div className="b4-container b4-split">
          <div className="b4-tall-image">
            <Image
              src="/images/bazzo/plant-room.webp"
              alt="Sala técnica instalada por Grupo Bazzo"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
          <div className="b4-numbers-copy" data-reveal>
            <span className="b4-kicker-dark">Grupo Bazzo en cifras</span>
            <h2>Servicio técnico cercano. Resultado profesional.</h2>
            <p>
              Un equipo con experiencia en sistemas de gas, calefacción y
              climatización tradicional, preparado para diagnosticar,
              presupuestar y resolver.
            </p>
            <div className="b4-number-row">
              <div>
                <strong>10</strong>
                <span>años de experiencia</span>
              </div>
              <div>
                <strong>24H</strong>
                <span>atención urgente</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>precio claro antes de empezar</span>
              </div>
            </div>
            <a href="#proceso" className="b4-btn b4-btn-dark">
              Conocer el proceso
            </a>
          </div>
        </div>
      </section>

      <section className="b4-section b4-benefits">
        <div className="b4-container">
          <div className="b4-centered" data-reveal>
            <span>Por qué Grupo Bazzo</span>
            <h2>
              Menos incertidumbre.
              <br />
              Más tranquilidad.
            </h2>
            <p>
              Cada detalle está pensado para que sepas qué ocurre, cuánto cuesta
              y cuál es el siguiente paso.
            </p>
          </div>
          <div className="b4-benefit-grid">
            {[
              [
                faShieldHalved,
                "Técnicos autorizados",
                "Profesionales con las certificaciones necesarias para trabajar con instalaciones de gas.",
              ],
              [
                faBolt,
                "Respuesta rápida",
                "Asistencia el mismo día para averías urgentes de calefacción y calderas en Barcelona.",
              ],
              [
                faCheck,
                "Sin sorpresas",
                "Presupuesto cerrado y por escrito antes de iniciar cualquier intervención.",
              ],
            ].map(([icon, title, text]) => (
              <article key={String(title)} data-reveal>
                <FontAwesomeIcon icon={icon as typeof faCheck} />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b4-video-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bazzo/aerothermal-comfort.webp"
          aria-label="Climatización residencial instalada por especialistas"
        >
          <source src="/videos/bazzo/climatizacion-hero.mp4" type="video/mp4" />
        </video>
        <div className="b4-video-shade" />
        <div className="b4-container b4-video-copy" data-reveal>
          <span>Tu confort no puede esperar</span>
          <h2>
            Climatización que responde.
            <br />
            Servicio técnico que resuelve.
          </h2>
          <a href={bazzoPhoneHref} className="b4-btn b4-btn-lime">
            <FontAwesomeIcon icon={faPhone} /> 634 210 179
          </a>
        </div>
      </section>

      <section className="b4-section b4-process" id="proceso">
        <div className="b4-container">
          <div className="b4-section-head" data-reveal>
            <div>
              <span>Cómo trabajamos</span>
              <h2>Del aviso a la solución, sin complicaciones.</h2>
            </div>
          </div>
          <div className="b4-process-grid">
            {[
              [
                "01",
                "Cuéntanos qué ocurre",
                "Déjanos tus datos o llama. Confirmamos el tipo de instalación y la urgencia.",
              ],
              [
                "02",
                "Acordamos la visita",
                "Un instalador profesional contacta contigo para fijar el día y la hora.",
              ],
              [
                "03",
                "Recibes precio claro",
                "Tras revisar la instalación, te entregamos un presupuesto inmediato y sin compromiso.",
              ],
              [
                "04",
                "Lo resolvemos",
                "Con tu aprobación, ejecutamos el trabajo con seguridad y cuidado por cada detalle.",
              ],
            ].map(([n, title, text]) => (
              <article key={n} data-reveal>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b4-section b4-plans">
        <div className="b4-container">
          <div className="b4-centered" data-reveal>
            <span>Elige por dónde empezar</span>
            <h2>Una respuesta para cada necesidad.</h2>
          </div>
          <div className="b4-plan-grid">
            {[
              [
                "Urgencia 24H",
                "Cuando no puede esperar",
                faFireFlameCurved,
                [
                  "Averías de gas y calefacción",
                  "Atención prioritaria en Barcelona",
                  "Diagnóstico y precio antes de actuar",
                ],
              ],
              [
                "Mantenimiento",
                "Para evitar sorpresas",
                faTemperatureHalf,
                [
                  "Calderas y calentadores",
                  "Revisión de funcionamiento",
                  "Recomendaciones claras",
                ],
              ],
              [
                "Nueva instalación",
                "Confort a tu medida",
                faSnowflake,
                [
                  "Aerotermia y aire acondicionado",
                  "Asesoramiento integral",
                  "Presupuesto sin compromiso",
                ],
              ],
            ].map(([title, label, icon, features], index) => (
              <article
                className={index === 1 ? "is-featured" : ""}
                key={String(title)}
                data-reveal
              >
                {index === 1 && <span className="b4-popular">Recomendado</span>}
                <FontAwesomeIcon icon={icon as typeof faSnowflake} />
                <small>{String(label)}</small>
                <h3>{String(title)}</h3>
                <ul>
                  {(features as string[]).map((item) => (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCheck} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={bazzoPhoneHref}>Hablar con un técnico</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b4-cta" id="contacto">
        <Image
          src="/images/bazzo/heat-pump-outdoor.webp"
          alt="Instalación de aerotermia Grupo Bazzo"
          fill
          sizes="100vw"
        />
        <div className="b4-cta-shade" />
        <div className="b4-container" data-reveal>
          <span>¿Hablamos?</span>
          <h2>
            Cuéntanos qué necesitas.
            <br />
            Nosotros ponemos la solución.
          </h2>
          <a href={bazzoPhoneHref} className="b4-btn b4-btn-lime">
            Llamar al 634 210 179
          </a>
        </div>
      </section>

      <footer className="b4-footer">
        <div className="b4-container b4-footer-top">
          <div>
            <BazzoBrand />
            <h2>Confort, seguridad y atención directa.</h2>
            <a href="mailto:info@grupobazzo.es">info@grupobazzo.es</a>
          </div>
          <div>
            <strong>Servicios</strong>
            <a href="#servicios">Calderas y gas</a>
            <a href="#servicios">Aerotermia</a>
            <a href="#servicios">Aire acondicionado</a>
          </div>
          <div>
            <strong>Contacto</strong>
            <a href={bazzoPhoneHref}>634 210 179</a>
            <span>
              Carrer Gonçal Pons, 19
              <br />
              Hospitalet de Llobregat
            </span>
          </div>
        </div>
        <div className="b4-container b4-footer-bottom">
          <span>© 2026 Grupo Bazzo</span>
          <span>Climatización · Luz · Gas</span>
        </div>
      </footer>
      <BazzoContactActions />
    </main>
  );
}
