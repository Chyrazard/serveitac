import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faCarSide,
  faCheck,
  faChevronDown,
  faHouseSignal,
  faLeaf,
  faPhone,
  faSnowflake,
  faSolarPanel,
} from "@fortawesome/free-solid-svg-icons";
import { Brand } from "@/components/Brand";
import { ContactActions } from "@/components/ContactActions";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    title: "Fotovoltaica",
    subtitle: "Tu propia energía",
    icon: faSolarPanel,
    image: "/images/solar-hero.jpg",
  },
  {
    title: "Aerotermia",
    subtitle: "Confort todo el año",
    icon: faSnowflake,
    image: "/images/aerotermia.jpg",
  },
  {
    title: "Domótica",
    subtitle: "Tu hogar, conectado",
    icon: faHouseSignal,
    image: "/images/domotica.jpg",
  },
  {
    title: "Recarga",
    subtitle: "Movilidad inteligente",
    icon: faCarSide,
    image: "/images/recarga.jpg",
  },
];

export default function ProposalTwo() {
  return (
    <main className="proposal proposal-two" id="inicio">
      <Reveal />
      <header className="m-header">
        <Brand compact />
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Domoteknik</a>
          <a href="#proceso">Cómo funciona</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a className="m-header-call" href="tel:+34931989521">
          <FontAwesomeIcon icon={faPhone} /> 931 989 521
        </a>
      </header>

      <section className="m-hero">
        <div className="m-hero-copy">
          <span className="m-kicker">Eficiencia energética, en tu hogar</span>
          <h1>La energía que cuida de lo que más importa.</h1>
          <p>
            Un equipo técnico de confianza para transformar tu vivienda con
            energía solar, climatización eficiente y control inteligente.
          </p>
          <div className="m-actions">
            <a href="tel:+34931989521" className="m-button">
              Solicitar estudio <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <span>Gratuito · Personalizado · Sin compromiso</span>
          </div>
        </div>
        <div className="m-hero-image">
          <Image
            src="/images/aerotermia.jpg"
            alt="Técnico de aerotermia en una vivienda"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
          <div className="m-hero-note">
            <FontAwesomeIcon icon={faLeaf} />
            <div><strong>Hasta un 75%</strong><span>de ahorro frente a sistemas tradicionales</span></div>
          </div>
        </div>
      </section>

      <section className="m-intro" id="servicios" data-reveal>
        <span>Soluciones integrales</span>
        <h2>Todo lo que tu hogar necesita para consumir menos y sentirse mejor.</h2>
        <p>
          Estudiamos el conjunto de la vivienda para que cada tecnología
          funcione en armonía, sin sobredimensionar ni complicar.
        </p>
      </section>

      <section className="m-services">
        {services.map((service, index) => (
          <article className="m-service" key={service.title} data-reveal>
            <div className="m-service-image">
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, 25vw"
              />
              <span>0{index + 1}</span>
            </div>
            <div className="m-service-copy">
              <FontAwesomeIcon icon={service.icon} />
              <span>{service.subtitle}</span>
              <h3>{service.title}</h3>
              <a href="tel:+34931989521" aria-label={`Consultar ${service.title}`}>
                Saber más <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="m-quality" id="nosotros">
        <div className="m-quality-image">
          <Image
            src="/images/consultoria.jpg"
            alt="Asesor energético explicando un estudio personalizado"
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
          />
        </div>
        <div className="m-quality-copy" data-reveal>
          <span className="m-kicker">Compromiso con tu bienestar</span>
          <h2>Experiencia técnica, trato cercano.</h2>
          <p>
            Venimos del sector tradicional y llevamos una década resolviendo
            instalaciones reales. Hoy sumamos las tecnologías que hacen tu
            hogar más eficiente, confortable y preparado para el futuro.
          </p>
          <div className="m-quality-list">
            <div><strong>10 años</strong><span>de trayectoria técnica</span></div>
            <div><strong>100%</strong><span>foco en eficiencia</span></div>
            <div><strong>Directo</strong><span>sin intermediarios</span></div>
          </div>
          <a href="tel:+34931989521" className="m-text-link">
            Conocer nuestro enfoque <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>

      <section className="m-comfort">
        <div className="m-comfort-copy" data-reveal>
          <span className="m-kicker">Tu confort, tu control</span>
          <h2>Una casa que se adapta a ti.</h2>
          <p>
            Climatiza, ilumina, protege y monitoriza el consumo desde el móvil o
            con la voz. Si internet falla, tus controles físicos siguen
            funcionando con normalidad.
          </p>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} /> Iluminación y persianas</li>
            <li><FontAwesomeIcon icon={faCheck} /> Climatización inteligente</li>
            <li><FontAwesomeIcon icon={faCheck} /> Seguridad y alertas</li>
            <li><FontAwesomeIcon icon={faCheck} /> Consumos en tiempo real</li>
          </ul>
        </div>
        <div className="m-comfort-image">
          <Image
            src="/images/domotica.jpg"
            alt="Interior de vivienda con control domótico"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="m-electric">
        <div className="m-electric-card" data-reveal>
          <div className="m-electric-icon"><FontAwesomeIcon icon={faBolt} /></div>
          <div>
            <span className="m-kicker">La base de todo</span>
            <h2>Electricidad general y boletines.</h2>
            <p>
              Instalaciones nuevas, cuadros, recableados, iluminación LED,
              mantenimiento y adecuación a normativa para viviendas, locales y
              comunidades.
            </p>
          </div>
          <div className="m-electric-image">
            <Image src="/images/electricidad.jpg" alt="" fill sizes="340px" />
          </div>
        </div>
      </section>

      <section className="m-process" id="proceso">
        <div className="m-process-head" data-reveal>
          <span className="m-kicker">Así de sencillo</span>
          <h2>¿Cómo funciona?</h2>
        </div>
        <div className="m-process-grid">
          {[
            ["01", "Contacta", "Cuéntanos qué quieres mejorar y revisamos tus necesidades."],
            ["02", "Te visitamos", "Estudiamos consumos, espacio, orientación e instalación existente."],
            ["03", "Diseñamos", "Recibes una solución clara, dimensionada y con presupuesto detallado."],
            ["04", "Disfruta", "Instalamos, legalizamos y te enseñamos a sacar el máximo partido."],
          ].map(([n, title, text]) => (
            <article key={n} data-reveal>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="m-project">
        <div className="m-project-image">
          <Image
            src="/images/proyecto-solar.jpg"
            alt="Proyecto solar residencial en Castellar del Vallès"
            fill
            sizes="100vw"
          />
        </div>
        <div className="m-project-card" data-reveal>
          <span className="m-kicker">Proyecto destacado</span>
          <h2>Castellar del Vallès</h2>
          <p>
            Autoconsumo residencial de 5 kWp diseñado para alcanzar hasta un
            70 % de ahorro estimado.
          </p>
          <div><strong>5 kWp</strong><span>potencia</span></div>
          <div><strong>70%</strong><span>ahorro estimado</span></div>
        </div>
      </section>

      <section className="m-faq" id="preguntas">
        <div className="m-faq-head" data-reveal>
          <span className="m-kicker">Resolvemos tus dudas</span>
          <h2>Preguntas habituales antes de empezar.</h2>
        </div>
        <div className="m-faq-grid">
          {[
            ["¿El estudio inicial tiene coste?", "No. Analizamos tu caso y preparamos una propuesta personalizada sin compromiso."],
            ["¿Gestionáis la legalización?", "Sí. Nos ocupamos de la documentación técnica, la legalización y los trámites asociados a la instalación."],
            ["¿Puedo añadir baterías más adelante?", "Sí, podemos dejar la instalación fotovoltaica preparada para incorporar almacenamiento cuando lo necesites."],
            ["¿La aerotermia también enfría?", "Sí. Un único sistema puede producir calefacción, refrigeración y agua caliente sanitaria."],
            ["¿Instaláis en comunidades?", "Sí. Trabajamos en viviendas, empresas, comunidades y garajes comunitarios en Barcelona y provincia."],
          ].map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<FontAwesomeIcon icon={faChevronDown} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="m-cta">
        <div className="m-cta-image">
          <Image src="/images/solar-hero.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className="m-cta-copy" data-reveal>
          <span className="m-kicker">Empieza hoy</span>
          <h2>Una propuesta energética pensada para ti.</h2>
          <p>
            Habla directamente con Domoteknik y recibe tu estudio gratuito.
          </p>
          <a className="m-button" href="tel:+34931989521">
            Llamar al 931 989 521 <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>

      <footer className="m-footer">
        <div className="m-footer-brand">
          <Brand />
          <p>Tu hogar. Tu energía. Tu tranquilidad.</p>
        </div>
        <div>
          <span>Contacto</span>
          <a href="tel:+34931989521">931 989 521 · Oficina</a>
          <a href="tel:+34623974748">623 974 748 · Ventas</a>
          <a href="mailto:info@domoteknik.com">info@domoteknik.com</a>
        </div>
        <div>
          <span>Visítanos</span>
          <p>Carrer Gonçal Pons, 19<br />L’Hospitalet de Llobregat<br />Barcelona</p>
        </div>
        <div className="m-footer-legal">© 2026 Domoteknik S.L.U.</div>
      </footer>
      <ContactActions />
    </main>
  );
}
