import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faBuilding,
  faCar,
  faCheck,
  faChevronRight,
  faHouse,
  faSliders,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { Brand } from "@/components/Brand";
import { ContactActions } from "@/components/ContactActions";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    icon: faSun,
    number: "01",
    title: "Fotovoltaica",
    text: "Autoconsumo solar para viviendas y empresas, con baterías, monitorización y toda la legalización incluida.",
    image: "/images/solar-hero.jpg",
  },
  {
    icon: faSnowflake,
    number: "02",
    title: "Aerotermia",
    text: "Calefacción, refrigeración y agua caliente en un único sistema eficiente, incluso con radiadores existentes.",
    image: "/images/aerotermia.jpg",
  },
  {
    icon: faSliders,
    number: "03",
    title: "Domótica",
    text: "Control inteligente de iluminación, persianas, climatización, consumos y seguridad desde el móvil o por voz.",
    image: "/images/domotica.jpg",
  },
  {
    icon: faCar,
    number: "04",
    title: "Puntos de recarga",
    text: "Carga inteligente para garajes privados, comunidades y empresas, preparada para aprovechar tus excedentes solares.",
    image: "/images/recarga.jpg",
  },
];

const faqs = [
  [
    "¿Cuánto puedo ahorrar con placas solares?",
    "Una instalación bien dimensionada puede reducir hasta un 70 % la factura eléctrica. Analizamos consumos, orientación, sombras y hábitos para proyectar una solución realista.",
  ],
  [
    "¿Domoteknik gestiona permisos y ayudas?",
    "Sí. Entregamos la instalación legalizada y gestionamos trámites municipales, documentación técnica y ayudas disponibles, incluidas bonificaciones de IBI cuando aplican.",
  ],
  [
    "¿Cuánto tarda una instalación residencial?",
    "La instalación fotovoltaica habitual se ejecuta normalmente en 2 o 3 días. Antes realizamos el estudio, la planificación técnica y las gestiones necesarias.",
  ],
  [
    "¿La aerotermia sirve con radiadores?",
    "Sí. Existen equipos de alta temperatura compatibles con radiadores convencionales. Evaluamos la vivienda para proponer el sistema más eficiente.",
  ],
  [
    "¿Puedo controlar la casa si falla internet?",
    "Los interruptores y controles físicos siguen funcionando. La conectividad remota depende de internet, pero la instalación conserva sus funciones esenciales.",
  ],
];

export default function ProposalOne() {
  return (
    <main className="proposal proposal-one" id="inicio">
      <Reveal />
      <header className="r-header">
        <Brand compact />
        <nav aria-label="Navegación principal">
          <a href="#empresa">Empresa</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyecto">Proyecto</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="r-header-cta" href="tel:+34931989521">
          Hablemos <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </header>

      <section className="r-hero">
        <div className="r-hero-copy">
          <div className="r-eyebrow">
            <span />
            Energía inteligente · Barcelona
          </div>
          <h1>
            Soluciones que reducen tu factura y elevan tu <em>confort.</em>
          </h1>
          <p>
            Diseñamos e instalamos fotovoltaica, aerotermia y domótica para que
            tu hogar o empresa consuma mejor desde el primer día.
          </p>
          <div className="r-actions">
            <a className="r-button r-button-primary" href="tel:+34931989521">
              Estudio gratuito <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a className="r-button r-button-outline" href="#servicios">
              Ver soluciones
            </a>
          </div>
        </div>
        <div className="r-hero-visual">
          <Image
            src="/images/solar-hero.jpg"
            alt="Técnico revisando paneles solares en Barcelona"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <div className="r-result-card">
            <span>Ahorro estimado</span>
            <strong>Hasta 70%</strong>
            <div className="r-bars" aria-hidden="true">
              {[24, 37, 33, 55, 48, 72, 61, 88, 78, 100].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <small>Autoconsumo bien dimensionado</small>
          </div>
        </div>
      </section>

      <section className="r-trust">
        <span>Soluciones certificadas para</span>
        <div><FontAwesomeIcon icon={faHouse} /> Viviendas</div>
        <div><FontAwesomeIcon icon={faBuilding} /> Empresas</div>
        <div><FontAwesomeIcon icon={faBolt} /> Comunidades</div>
        <div><FontAwesomeIcon icon={faCar} /> Movilidad eléctrica</div>
      </section>

      <section className="r-statement" id="empresa" data-reveal>
        <span className="r-tag">Quiénes somos</span>
        <h2>
          No instalamos equipos sin más. Diseñamos un sistema energético que
          encaja con <em>tu consumo, tu espacio y tu futuro.</em>
        </h2>
        <div className="r-statement-foot">
          <p>
            Domoteknik combina una década de experiencia técnica con las
            últimas soluciones de eficiencia. Trato directo, ejecución
            homologada y acompañamiento hasta la puesta en marcha.
          </p>
          <a href="#metodo">
            Cómo trabajamos <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>

      <section className="r-services" id="servicios">
        <div className="r-section-head" data-reveal>
          <span className="r-tag">Servicios</span>
          <h2>Cada solución existe por una razón: que consumas menos y vivas mejor.</h2>
        </div>
        <div className="r-service-grid">
          {services.map((service) => (
            <article className="r-service-card" key={service.title} data-reveal>
              <div className="r-service-top">
                <span>{service.number}</span>
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="r-service-image">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <a href="tel:+34931989521" aria-label={`Consultar ${service.title}`}>
                Consultar solución <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
          ))}
        </div>
        <article className="r-electric-strip" data-reveal>
          <div>
            <span className="r-tag">También somos instaladores autorizados</span>
            <h3>Electricidad general, boletines y adecuaciones completas.</h3>
          </div>
          <p>
            Cuadros eléctricos, cableado, iluminación LED, mantenimiento y
            puesta al día según el REBT para viviendas, locales y comunidades.
          </p>
          <a href="tel:+34931989521">
            Solicitar diagnóstico <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </article>
      </section>

      <section className="r-case" id="proyecto">
        <div className="r-case-image">
          <Image
            src="/images/proyecto-solar.jpg"
            alt="Vivienda con instalación fotovoltaica"
            fill
            sizes="100vw"
          />
          <div className="r-case-label">Proyecto real · Castellar del Vallès</div>
        </div>
        <div className="r-case-content" data-reveal>
          <span className="r-tag">Un proyecto, datos claros</span>
          <h2>Autoconsumo residencial de 5 kWp.</h2>
          <p>
            Una instalación concebida para cubrir gran parte del consumo anual,
            reducir la dependencia de la red y dejar el hogar preparado para
            monitorización y futuras ampliaciones.
          </p>
          <div className="r-case-metrics">
            <div><strong>5 kWp</strong><span>Potencia instalada</span></div>
            <div><strong>70%</strong><span>Ahorro estimado</span></div>
            <div><strong>2–3 días</strong><span>Ejecución habitual</span></div>
          </div>
        </div>
      </section>

      <section className="r-results">
        <div className="r-section-head light" data-reveal>
          <span className="r-tag">Compromiso técnico</span>
          <h2>Resultados que se construyen desde un buen estudio.</h2>
        </div>
        <div className="r-results-grid">
          <div><strong>10</strong><span>Años de experiencia</span></div>
          <div><strong>100%</strong><span>Enfoque en eficiencia</span></div>
          <div><strong>1</strong><span>Equipo, sin intermediarios</span></div>
          <div><strong>0€</strong><span>Estudio inicial</span></div>
        </div>
      </section>

      <section className="r-method" id="metodo">
        <div className="r-section-head" data-reveal>
          <span className="r-tag">Método Domoteknik</span>
          <h2>Una instalación ordenada, transparente y lista para funcionar.</h2>
        </div>
        <div className="r-method-grid">
          {[
            ["01", "Analizamos", "Consumos, necesidades, espacio disponible y objetivos de ahorro."],
            ["02", "Diseñamos", "Dimensionamos la solución y explicamos el presupuesto con claridad."],
            ["03", "Instalamos", "Técnicos cualificados ejecutan y verifican cada detalle."],
            ["04", "Legalizamos", "Tramitamos documentación, ayudas y puesta en servicio."],
          ].map(([n, title, text]) => (
            <article key={n} data-reveal>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <FontAwesomeIcon icon={faChevronRight} />
            </article>
          ))}
        </div>
      </section>

      <section className="r-why">
        <div className="r-why-image">
          <Image
            src="/images/consultoria.jpg"
            alt="Estudio energético personalizado"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
        <div className="r-why-copy" data-reveal>
          <span className="r-tag">Por qué Domoteknik</span>
          <h2>Tecnología, ahorro y garantía.</h2>
          <p>
            Decisiones técnicas explicadas en lenguaje claro. La solución
            correcta no es la más grande: es la que mejor responde a tu
            consumo.
          </p>
          <ul>
            {[
              "Estudio energético personalizado y gratuito.",
              "Instaladores certificados y homologados.",
              "Gestión de subvenciones, permisos y legalización.",
              "Garantía sobre instalación y mano de obra.",
              "Trato directo durante todo el proyecto.",
            ].map((item) => (
              <li key={item}><FontAwesomeIcon icon={faCheck} /> {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="r-faq" id="preguntas">
        <div className="r-faq-intro" data-reveal>
          <span className="r-tag">Preguntas frecuentes</span>
          <h2>Todo lo que quieres saber antes de empezar.</h2>
          <p>
            Si tu caso es distinto, llámanos. Un técnico te orientará sin
            compromiso.
          </p>
          <a href="tel:+34931989521" className="r-button r-button-primary">
            931 989 521 <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="r-faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {question}
                <i>+</i>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="r-cta">
        <div>
          <span className="r-tag">El siguiente paso</span>
          <h2>¿Listo para convertir tu consumo en ahorro?</h2>
          <p>
            Cuéntanos qué necesitas y preparamos un estudio técnico
            personalizado, gratuito y sin compromiso.
          </p>
        </div>
        <a href="tel:+34931989521">
          Solicitar estudio <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </section>

      <footer className="r-footer">
        <div className="r-footer-main">
          <Brand dark />
          <p>
            Eficiencia energética para hogares y empresas de Barcelona.
          </p>
          <div className="r-footer-contact">
            <a href="tel:+34931989521">931 989 521</a>
            <a href="mailto:info@domoteknik.com">info@domoteknik.com</a>
            <span>Carrer Gonçal Pons, 19<br />L’Hospitalet de Llobregat</span>
          </div>
        </div>
        <div className="r-footer-bottom">
          <span>© 2026 Domoteknik S.L.U.</span>
          <span>Instalaciones · Barcelona y provincia</span>
        </div>
      </footer>
      <ContactActions />
    </main>
  );
}
