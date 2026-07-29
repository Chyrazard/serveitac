import Image from "next/image";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheck,
  faFireBurner,
  faPhone,
  faPlus,
  faSnowflake,
  faTemperatureArrowUp,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import {
  BazzoBrand,
  BazzoContactActions,
  BazzoHeaderMenu,
  bazzoPhoneHref,
} from "@/components/BazzoChrome";
import { Reveal } from "@/components/Reveal";

const menu = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Instalaciones" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

const gallery = [
  "/images/bazzo/gas-flame.webp",
  "/images/bazzo/heat-pump-stone.webp",
  "/images/bazzo/inverter.webp",
  "/images/bazzo/complete-installation.webp",
  "/images/bazzo/solar-roof.webp",
];

export const metadata: Metadata = {
  title: "Grupo Bazzo | Confort para la vida moderna",
  description:
    "Instalación y mantenimiento de gas, calefacción, aire acondicionado y aerotermia en Barcelona.",
};

export default function BazzoZenviaProposal() {
  return (
    <main className="bazzo-proposal bazzo-five" id="inicio">
      <Reveal />
      <header className="b5-header">
        <BazzoBrand compact />
        <nav aria-label="Navegación principal">
          {menu.slice(0, 4).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="b5-header-actions">
          <a href={bazzoPhoneHref} className="b5-talk">
            <FontAwesomeIcon icon={faPhone} /> Hablemos
          </a>
          <BazzoHeaderMenu links={menu} theme="light" />
        </div>
      </header>

      <section className="b5-hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-label="Vídeo demostrativo de la propuesta"
        >
          <source src="/videos/bazzo/zenvia-demo.mp4" type="video/mp4" />
        </video>
        <div className="b5-hero-glow" />
        <div className="b5-hero-copy" data-reveal>
          <span>GAS / CLIMATIZACIÓN / AEROTERMIA / SERVICIO 24H</span>
          <h1>
            Confort para la
            <br />
            vida moderna
          </h1>
          <a href="#servicios">
            Descubrir más <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="b5-gallery" aria-label="Instalaciones Grupo Bazzo">
          {[...gallery, ...gallery].map((src, index) => (
            <div key={`${src}-${index}`}>
              <Image src={src} alt="" fill sizes="260px" />
            </div>
          ))}
        </div>
      </section>

      <section className="b5-ticker" aria-label="Servicios destacados">
        <div>
          <span>SERVICIO TÉCNICO 24H</span>
          <i>✦</i>
          <span>PRECIO CLARO</span>
          <i>✦</i>
          <span>TÉCNICOS AUTORIZADOS</span>
          <i>✦</i>
          <span>BARCELONA</span>
          <i>✦</i>
        </div>
      </section>

      <section className="b5-section b5-intro" id="nosotros">
        <div className="b5-container">
          <div className="b5-label" data-reveal>
            Acerca de Grupo Bazzo
          </div>
          <h2 data-reveal>
            Climatización que responde. Servicio técnico que <em>resuelve.</em>
          </h2>
          <div className="b5-intro-bottom" data-reveal>
            <p>
              Más de una década trabajando con sistemas de gas, calefacción y
              climatización. Combinamos conocimiento técnico, trato directo y
              una forma transparente de trabajar.
            </p>
            <div>
              <strong>10+</strong>
              <span>Años de experiencia</span>
            </div>
            <div>
              <strong>24H</strong>
              <span>Atención urgente</span>
            </div>
          </div>
        </div>
      </section>

      <section className="b5-work" id="trabajos">
        <div className="b5-container b5-work-head" data-reveal>
          <span>Instalaciones reales</span>
          <h2>
            Trabajo que se ve.
            <br />
            Confianza que se siente.
          </h2>
        </div>
        <div className="b5-work-grid">
          {[
            [
              "Aerotermia integral",
              "Climatización · ACS",
              "/images/bazzo/complete-installation.webp",
            ],
            [
              "Sala técnica",
              "Instalación · Puesta en marcha",
              "/images/bazzo/plant-room.webp",
            ],
            [
              "Energía conectada",
              "Fotovoltaica · Batería",
              "/images/bazzo/solar-roof.webp",
            ],
          ].map(([title, type, src], index) => (
            <article key={title} data-reveal>
              <div className="b5-work-image">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
              </div>
              <div>
                <span>
                  0{index + 1} / {type}
                </span>
                <h3>{title}</h3>
                <a href={bazzoPhoneHref}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="b5-section b5-services" id="servicios">
        <div className="b5-container">
          <div className="b5-services-head" data-reveal>
            <div>
              <span>Nuestros servicios</span>
              <h2>Todo lo necesario para que tu espacio se sienta bien.</h2>
            </div>
            <a href={bazzoPhoneHref}>
              Solicitar presupuesto <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="b5-service-list">
            {[
              [
                "01",
                "Calderas de gas",
                "Instalación, reparación y mantenimiento para trabajar con seguridad y rendimiento.",
                faFireBurner,
                "/images/bazzo/gas-flame.webp",
              ],
              [
                "02",
                "Aire acondicionado",
                "Asesoramiento integral, presupuesto e instalación para hogar o negocio.",
                faSnowflake,
                "/images/bazzo/aerothermal-comfort.webp",
              ],
              [
                "03",
                "Aerotermia",
                "Calefacción, refrigeración y agua caliente en un mismo sistema eficiente.",
                faTemperatureArrowUp,
                "/images/bazzo/heat-pump-garden.webp",
              ],
              [
                "04",
                "Agua caliente",
                "Calentadores de gas, termos eléctricos y soluciones adaptadas a tu consumo.",
                faWater,
                "/images/bazzo/hot-water-system.webp",
              ],
            ].map(([n, title, text, icon, image]) => (
              <article key={String(n)} data-reveal>
                <span>{String(n)}</span>
                <FontAwesomeIcon icon={icon as typeof faWater} />
                <div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </div>
                <div className="b5-service-image">
                  <Image src={String(image)} alt="" fill sizes="200px" />
                </div>
                <a href={bazzoPhoneHref}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b5-showreel">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-label="Vídeo demostrativo de climatización"
        >
          <source src="/videos/bazzo/aire-acondicionado.mp4" type="video/mp4" />
        </video>
        <div className="b5-showreel-shade" />
        <div data-reveal>
          <span>GRUPO BAZZO / BARCELONA</span>
          <h2>
            Bienestar técnico.
            <br />
            Resultado humano.
          </h2>
        </div>
      </section>

      <section className="b5-section b5-solutions">
        <div className="b5-container">
          <div className="b5-centered" data-reveal>
            <span>Empieza aquí</span>
            <h2>Una solución para cada momento.</h2>
          </div>
          <div className="b5-solution-grid">
            {[
              [
                "Urgencia 24H",
                "Una avería no entiende de horarios.",
                [
                  "Atención prioritaria",
                  "Barcelona y alrededores",
                  "Presupuesto previo",
                ],
              ],
              [
                "Mantenimiento",
                "La tranquilidad de anticiparte.",
                [
                  "Calderas y calentadores",
                  "Revisión técnica",
                  "Recomendaciones honestas",
                ],
              ],
              [
                "Nueva instalación",
                "Confort pensado para durar.",
                [
                  "Estudio de necesidades",
                  "Equipo adecuado",
                  "Gestión e instalación",
                ],
              ],
            ].map(([title, text, items], index) => (
              <article
                className={index === 1 ? "is-main" : ""}
                key={String(title)}
                data-reveal
              >
                <span>0{index + 1}</span>
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
                <ul>
                  {(items as string[]).map((item) => (
                    <li key={item}>
                      <FontAwesomeIcon icon={faCheck} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={bazzoPhoneHref}>
                  Consultar <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="b5-section b5-testimonial">
        <div className="b5-container" data-reveal>
          <span>Nuestra forma de trabajar</span>
          <blockquote>
            “Antes de tocar tu instalación, te explicamos qué ocurre, qué
            proponemos y cuánto cuesta.”
          </blockquote>
          <div>
            <strong>Grupo Bazzo</strong>
            <span>
              Técnicos autorizados · Precio por escrito · Sin sorpresas
            </span>
          </div>
        </div>
      </section>

      <section className="b5-section b5-faq" id="preguntas">
        <div className="b5-container b5-faq-grid">
          <div data-reveal>
            <span>Preguntas frecuentes</span>
            <h2>Lo que necesitas saber, sin rodeos.</h2>
            <a href={bazzoPhoneHref}>
              ¿Tienes otra pregunta? <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div>
            {[
              [
                "¿Atendéis averías urgentes?",
                "Sí. Grupo Bazzo ofrece servicio técnico urgente 24H para calderas de gas y calefacción en Barcelona.",
              ],
              [
                "¿Trabajáis con todas las marcas?",
                "Sí. El servicio técnico atiende equipos de distintas marcas y evalúa cada instalación antes de intervenir.",
              ],
              [
                "¿Sabré el precio antes de empezar?",
                "Sí. Tras el diagnóstico recibirás un presupuesto cerrado y por escrito, sin costes ocultos.",
              ],
              [
                "¿También instaláis aerotermia?",
                "Sí. Diseñamos soluciones de bomba de calor para calefacción, refrigeración y agua caliente.",
              ],
            ].map(([q, a]) => (
              <details key={q} data-reveal>
                <summary>
                  <span>{q}</span>
                  <FontAwesomeIcon icon={faPlus} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="b5-cta" id="contacto">
        <video autoPlay muted loop playsInline aria-hidden="true">
          <source src="/videos/bazzo/zenvia-demo.mp4" type="video/mp4" />
        </video>
        <div className="b5-cta-overlay" />
        <div data-reveal>
          <span>¿Empezamos?</span>
          <h2>
            Tu confort
            <br />
            empieza con una llamada.
          </h2>
          <a href={bazzoPhoneHref}>
            634 210 179 <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>

      <footer className="b5-footer">
        <div className="b5-container b5-footer-grid">
          <div>
            <span>Contacto</span>
            <p>
              Carrer Gonçal Pons, 19
              <br />
              Hospitalet de Llobregat
              <br />
              Barcelona
            </p>
            <a href={bazzoPhoneHref}>634 210 179</a>
            <a href="mailto:info@grupobazzo.es">info@grupobazzo.es</a>
          </div>
          <div>
            <BazzoBrand />
            <p>
              Experiencia y seguridad en instalaciones de gas, calefacción y
              climatización.
            </p>
          </div>
          <div>
            <span>Mapa web</span>
            {menu.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="b5-container b5-footer-bottom">
          <span>© 2026 Grupo Bazzo</span>
          <span>Climatización · Luz · Gas</span>
        </div>
      </footer>
      <BazzoContactActions />
    </main>
  );
}
