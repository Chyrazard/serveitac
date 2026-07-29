import Image from "next/image";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faCheck,
  faDroplet,
  faFireBurner,
  faPhone,
  faShieldHalved,
  faSnowflake,
  faTemperatureArrowUp,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import {
  BazzoAdvisorContact,
  BazzoBrand,
  BazzoHeaderMenu,
  BazzoMobileConsult,
  BazzoPreloader,
  bazzoPhoneHref,
} from "@/components/BazzoChrome";
import { Reveal } from "@/components/Reveal";

const menu = [
  { href: "#empresa", label: "Empresa" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Instalaciones" },
  { href: "#contacto", label: "Contacto" },
];

export const metadata: Metadata = {
  title: "Grupo Bazzo | Experiencia técnica, confort que perdura",
  description:
    "Técnicos autorizados para instalaciones de gas, climatización y aerotermia. Servicio urgente 24H en Barcelona.",
};

export default function BazzoAtlasProposal() {
  return (
    <main className="bazzo-proposal bazzo-six" id="inicio">
      <BazzoPreloader />
      <Reveal />
      <header className="b6-header">
        <BazzoBrand compact />
        <BazzoMobileConsult />
        <nav aria-label="Navegación principal">
          {menu.slice(0, 4).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="b6-header-actions">
          <a href={bazzoPhoneHref} className="b6-phone">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <small>Llámanos</small>
            <strong>634 210 179</strong>
          </a>
          <a href="#contacto" className="b6-touch">
            Pedir presupuesto
          </a>
          <BazzoHeaderMenu links={menu} theme="green" />
        </div>
      </header>

      <section className="b6-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bazzo/aerothermal-comfort.webp"
          aria-label="Sistema de aire acondicionado en una vivienda"
        >
          <source src="/videos/bazzo/climatizacion-hero.mp4" type="video/mp4" />
        </video>
        <div className="b6-grid-overlay" />
        <div className="b6-hero-shade" />
        <div className="b6-container b6-hero-content" data-reveal>
          <div className="b6-hero-mark">
            <FontAwesomeIcon icon={faBolt} />
          </div>
          <span>GRUPO BAZZO · CLIMATIZACIÓN, LUZ Y GAS</span>
          <h1>
            Experiencia técnica.
            <br />
            Confort que perdura.
          </h1>
          <p>
            Instalamos, mantenemos y reparamos sistemas de gas, calefacción y
            climatización con atención directa y precios claros.
          </p>
          <div>
            <a href={bazzoPhoneHref} className="b6-btn b6-btn-lime">
              Consulta gratuita
            </a>
            <a href="#servicios" className="b6-btn b6-btn-white">
              Ver servicios
            </a>
          </div>
        </div>
        <div className="b6-container b6-hero-trust">
          {[
            "Técnicos autorizados",
            "Servicio 24H",
            "Presupuesto escrito",
            "Barcelona",
            "10 años de experiencia",
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="b6-section b6-mission" id="empresa">
        <div className="b6-container">
          <div className="b6-mission-head" data-reveal>
            <h2>Donde la experiencia se convierte en tranquilidad.</h2>
            <p>
              Trabajamos para que cada instalación sea segura, eficiente y fácil
              de entender para quien la utiliza.
            </p>
          </div>
          <div className="b6-mission-grid">
            <div className="b6-mission-image" data-reveal>
              <Image
                src="/images/bazzo/heat-pump-double.webp"
                alt="Unidad exterior de aerotermia instalada por Grupo Bazzo"
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            </div>
            <article
              className="b6-mission-card b6-mission-card-dark"
              data-reveal
            >
              <span>Nuestra misión</span>
              <p>
                Resolver necesidades reales de confort con soluciones técnicas
                bien dimensionadas, ejecutadas con seguridad y explicadas con
                transparencia.
              </p>
              <div>
                <strong>Grupo Bazzo</strong>
                <small>Equipo técnico · Barcelona</small>
              </div>
            </article>
            <article
              className="b6-mission-card b6-mission-card-light"
              data-reveal
            >
              <span>Nuestro enfoque</span>
              <h3>Soluciones precisas, servicio cercano.</h3>
              <ul>
                <li>
                  <i />
                  Diagnóstico antes de actuar
                </li>
                <li>
                  <i />
                  Presupuesto claro y por escrito
                </li>
                <li>
                  <i />
                  Trabajo cuidado de principio a fin
                </li>
              </ul>
              <a href="#proceso">
                Cómo trabajamos <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="b6-section b6-services" id="servicios">
        <div className="b6-container">
          <div className="b6-heading" data-reveal>
            <span>Nuestros servicios</span>
            <h2>
              Climatización y energía,
              <br />
              resueltas de principio a fin.
            </h2>
            <p>
              Asesoramiento, presupuesto, instalación y mantenimiento con un
              solo equipo.
            </p>
          </div>
          <div className="b6-service-grid">
            {[
              [
                faFireBurner,
                "Calderas de gas",
                "Instalación, reparación y mantenimiento multimarca.",
              ],
              [
                faSnowflake,
                "Aire acondicionado",
                "Confort eficiente para viviendas y negocios.",
              ],
              [
                faTemperatureArrowUp,
                "Aerotermia",
                "Calor, frío y agua caliente en un único sistema.",
              ],
              [
                faDroplet,
                "Agua caliente",
                "Calentadores de gas y termos eléctricos.",
              ],
              [
                faTools,
                "Mantenimiento",
                "Revisión técnica para anticiparte a las averías.",
              ],
              [
                faBolt,
                "Servicio urgente 24H",
                "Respuesta rápida para calderas y calefacción.",
              ],
            ].map(([icon, title, text], index) => (
              <article key={String(title)} data-reveal>
                <div>
                  <span>0{index + 1}</span>
                  <FontAwesomeIcon icon={icon as typeof faBolt} />
                </div>
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
                <a href={bazzoPhoneHref}>
                  Consultar <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b6-section b6-about">
        <div className="b6-container b6-about-grid">
          <div className="b6-about-copy" data-reveal>
            <span>Acerca de Grupo Bazzo</span>
            <h2>Una década resolviendo lo que otros complican.</h2>
            <p>
              Conocemos los sistemas tradicionales y las nuevas tecnologías de
              climatización. Eso nos permite recomendar lo que realmente encaja
              con tu instalación, tu espacio y tus necesidades.
            </p>
            <a href={bazzoPhoneHref} className="b6-btn b6-btn-green">
              Hablar con un técnico
            </a>
          </div>
          <div className="b6-about-image">
            <Image
              src="/images/bazzo/inverter.webp"
              alt="Instalación técnica Grupo Bazzo"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="b6-stat-grid">
            <div>
              <strong>10+</strong>
              <span>años de experiencia</span>
            </div>
            <div>
              <strong>24H</strong>
              <span>servicio urgente</span>
            </div>
            <div>
              <strong>3</strong>
              <span>pasos hasta tu presupuesto</span>
            </div>
            <div>
              <strong>0</strong>
              <span>costes ocultos</span>
            </div>
          </div>
        </div>
      </section>

      <section className="b6-section b6-why">
        <div className="b6-container b6-why-grid">
          <div className="b6-why-copy" data-reveal>
            <span>Por qué elegirnos</span>
            <h2>La confianza también se instala.</h2>
            <p>
              Un buen trabajo no termina cuando el equipo arranca. Termina
              cuando entiendes la solución y sabes que puedes volver a
              llamarnos.
            </p>
            <a href="#contacto" className="b6-btn b6-btn-lime">
              Solicitar presupuesto
            </a>
          </div>
          <div className="b6-why-list">
            {[
              [
                faShieldHalved,
                "Técnicos autorizados",
                "Certificación y experiencia para intervenir con seguridad.",
              ],
              [
                faCheck,
                "Precio sin sorpresas",
                "Presupuesto cerrado antes de comenzar el trabajo.",
              ],
              [
                faPhone,
                "Atención directa",
                "Hablas con el equipo que entiende y atiende tu instalación.",
              ],
            ].map(([icon, title, text]) => (
              <article key={String(title)} data-reveal>
                <FontAwesomeIcon icon={icon as typeof faCheck} />
                <div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b6-process" id="proceso">
        <div className="b6-process-cta">
          <Image
            src="/images/bazzo/gas-flame.webp"
            alt="Servicio técnico de gas"
            fill
            sizes="(max-width: 900px) 100vw, 38vw"
          />
          <div />
          <h2>¿Una avería o una instalación pendiente?</h2>
          <a href={bazzoPhoneHref}>
            Llama hoy <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="b6-process-copy">
          <div className="b6-heading" data-reveal>
            <span>Proceso de trabajo</span>
            <h2>Del problema a la solución.</h2>
          </div>
          {[
            [
              "01",
              "Contacto y diagnóstico inicial",
              "Nos cuentas qué ocurre y confirmamos el tipo de instalación.",
            ],
            [
              "02",
              "Visita coordinada",
              "Un profesional acuerda contigo el mejor día y hora.",
            ],
            [
              "03",
              "Propuesta transparente",
              "Revisamos, explicamos y entregamos presupuesto sin compromiso.",
            ],
            [
              "04",
              "Ejecución y soporte",
              "Realizamos el trabajo y dejamos la instalación lista para disfrutar.",
            ],
          ].map(([n, title, text]) => (
            <article key={n} data-reveal>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="b6-section b6-projects" id="proyectos">
        <div className="b6-container">
          <div className="b6-heading" data-reveal>
            <span>Instalaciones destacadas</span>
            <h2>
              Soluciones reales,
              <br />
              ejecutadas con criterio.
            </h2>
          </div>
          <div className="b6-project-track">
            {[
              [
                "Aerotermia residencial",
                "Instalación completa",
                "/images/bazzo/complete-installation.webp",
              ],
              [
                "Sistema exterior",
                "Bomba de calor",
                "/images/bazzo/heat-pump-outdoor.webp",
              ],
              [
                "Sala técnica",
                "Calefacción y ACS",
                "/images/bazzo/technical-room.webp",
              ],
              [
                "Autoconsumo",
                "Fotovoltaica residencial",
                "/images/bazzo/solar-roof.webp",
              ],
            ].map(([title, label, image]) => (
              <article key={title} data-reveal>
                <div>
                  <Image src={image} alt="" fill sizes="430px" />
                </div>
                <span>{label}</span>
                <h3>{title}</h3>
                <a href={bazzoPhoneHref}>
                  Consultar proyecto <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b6-section b6-team">
        <div className="b6-container">
          <div className="b6-team-head" data-reveal>
            <span>Especialistas Grupo Bazzo</span>
            <h2>Experiencia técnica para cada tipo de instalación.</h2>
            <p>
              Un equipo preparado para valorar, instalar y mantener soluciones
              de climatización, gas y energía en Barcelona.
            </p>
          </div>
          <div className="b6-team-track">
            {[
              [
                "Especialistas en gas",
                "Calderas y calentadores",
                "/images/bazzo/gas-flame.webp",
              ],
              [
                "Especialistas en climatización",
                "Aire acondicionado",
                "/images/bazzo/aerothermal-comfort.webp",
              ],
              [
                "Especialistas en eficiencia",
                "Aerotermia y bomba de calor",
                "/images/bazzo/heat-pump-double.webp",
              ],
              [
                "Soporte técnico",
                "Mantenimiento y urgencias 24H",
                "/images/bazzo/plant-room.webp",
              ],
            ].map(([title, role, image], index) => (
              <article key={title} data-reveal>
                <div className="b6-team-image">
                  <Image src={image} alt="" fill sizes="360px" />
                  <a href={bazzoPhoneHref} aria-label={`Consultar ${title}`}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
                <div className="b6-team-card-copy">
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b6-testimonial-home">
        <div className="b6-container">
          <div className="b6-testimonial-panel" data-reveal>
            <div className="b6-testimonial-profile">
              <div className="b6-testimonial-image">
                <Image
                  src="/images/bazzo/technical-room.webp"
                  alt="Instalación técnica de Grupo Bazzo"
                  fill
                  sizes="340px"
                />
              </div>
              <div>
                <strong>Compromiso Grupo Bazzo</strong>
                <span>Servicio técnico · Barcelona</span>
              </div>
              <div className="b6-trust-score">
                <b>10 años</b>
                <small>de experiencia técnica</small>
              </div>
            </div>
            <div className="b6-testimonial-quote">
              <span aria-hidden="true">“</span>
              <p>
                Cada instalación empieza escuchando la necesidad, continúa con
                un presupuesto claro y termina cuando el sistema funciona como
                debe y el cliente entiende la solución.
              </p>
            </div>
          </div>
          <div className="b6-testimonial-cta" data-reveal>
            <h2>Da el paso hacia un hogar más cómodo y eficiente.</h2>
            <a href="#contacto">Contactar ahora</a>
          </div>
        </div>
      </section>

      <section className="b6-section b6-insights">
        <div className="b6-container">
          <div className="b6-insights-title" data-reveal>
            <span>Guía técnica</span>
            <h2>Claves para elegir mejor.</h2>
          </div>
          <div className="b6-insights-layout">
            <div className="b6-insights-list">
              {[
                [
                  "01",
                  "Aerotermia",
                  "Cuándo conviene apostar por un sistema integral de climatización y agua caliente.",
                  "/images/bazzo/heat-pump-garden.webp",
                ],
                [
                  "02",
                  "Aire acondicionado",
                  "Cómo dimensionar el equipo para ganar confort sin disparar el consumo.",
                  "/images/bazzo/inverter.webp",
                ],
                [
                  "03",
                  "Mantenimiento",
                  "Las revisiones que ayudan a prevenir averías y alargar la vida útil del sistema.",
                  "/images/bazzo/complete-installation.webp",
                ],
              ].map(([number, tag, title, image]) => (
                <article key={number} data-reveal>
                  <div className="b6-insight-image">
                    <Image src={image} alt="" fill sizes="280px" />
                  </div>
                  <span>{number}</span>
                  <div>
                    <small>{tag}</small>
                    <h3>{title}</h3>
                  </div>
                  <a
                    href={bazzoPhoneHref}
                    aria-label={`Consultar sobre ${tag}`}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </article>
              ))}
            </div>
            <aside className="b6-insights-aside" data-reveal>
              <span>Asesoramiento directo</span>
              <h3>¿No sabes qué solución encaja contigo?</h3>
              <p>
                Cuéntanos tu caso y te orientamos según el espacio, el uso y la
                instalación existente.
              </p>
              <a href={bazzoPhoneHref}>Hablar con un técnico</a>
            </aside>
          </div>
        </div>
      </section>

      <section className="b6-section b6-contact" id="contacto">
        <div className="b6-container b6-contact-grid">
          <div data-reveal>
            <span>Conecta con nosotros</span>
            <h2>Cuéntanos qué necesitas y demos el primer paso.</h2>
            <p>
              Benefíciate de un diagnóstico claro, una solución proporcionada y
              un equipo que responde.
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Atención urgente 24H
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Presupuesto cerrado
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Asesoramiento profesional
              </li>
            </ul>
          </div>
          <form
            action="mailto:info@grupobazzo.es"
            method="post"
            encType="text/plain"
          >
            <h3>Solicita una consulta</h3>
            <p>Los campos marcados con * son obligatorios.</p>
            <div>
              <label>
                Nombre *<input name="nombre" required placeholder="Tu nombre" />
              </label>
              <label>
                Teléfono *
                <input
                  type="tel"
                  name="telefono"
                  required
                  placeholder="Tu teléfono"
                />
              </label>
            </div>
            <label>
              Servicio
              <select name="servicio" defaultValue="">
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Servicio urgente 24H</option>
                <option>Caldera de gas</option>
                <option>Aire acondicionado</option>
                <option>Aerotermia</option>
                <option>Agua caliente</option>
                <option>Mantenimiento</option>
              </select>
            </label>
            <label>
              Cuéntanos brevemente
              <textarea name="mensaje" rows={4} placeholder="¿Qué necesitas?" />
            </label>
            <button type="submit">
              Enviar solicitud <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
      </section>

      <footer className="b6-footer">
        <div className="b6-container b6-footer-top">
          <BazzoBrand />
          <p>
            Experiencia, seguridad y atención directa para instalaciones de gas,
            calefacción y climatización.
          </p>
        </div>
        <div className="b6-container b6-footer-grid">
          <div>
            <strong>Recibe respuesta directa</strong>
            <a href={bazzoPhoneHref}>634 210 179</a>
            <a href="mailto:info@grupobazzo.es">info@grupobazzo.es</a>
          </div>
          <div>
            <strong>Enlaces</strong>
            {menu.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <strong>Dirección</strong>
            <span>
              Carrer Gonçal Pons, 19
              <br />
              Hospitalet de Llobregat
              <br />
              Barcelona
            </span>
          </div>
        </div>
        <div className="b6-container b6-footer-bottom">
          <span>© 2026 Grupo Bazzo</span>
          <span>Climatización · Luz · Gas</span>
        </div>
      </footer>
      <BazzoAdvisorContact />
    </main>
  );
}
