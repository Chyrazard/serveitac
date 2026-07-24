import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowTrendDown,
  faBolt,
  faCar,
  faCheck,
  faChevronDown,
  faGaugeHigh,
  faHouseSignal,
  faSolarPanel,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { Brand } from "@/components/Brand";
import { ContactActions } from "@/components/ContactActions";
import { EnergyCalculator } from "@/components/EnergyCalculator";
import { Reveal } from "@/components/Reveal";

const benefits = [
  { icon: faSolarPanel, title: "Genera", text: "Autoconsumo fotovoltaico diseñado alrededor de tu curva de consumo." },
  { icon: faTemperatureHalf, title: "Climatiza", text: "Aerotermia para calefacción, refrigeración y agua caliente eficiente." },
  { icon: faHouseSignal, title: "Controla", text: "Domótica para decidir cómo, cuándo y dónde se utiliza la energía." },
  { icon: faCar, title: "Conduce", text: "Carga tu vehículo con red, horarios inteligentes o excedentes solares." },
];

export default function ProposalThree() {
  return (
    <main className="proposal proposal-three" id="inicio">
      <Reveal />
      <section className="z-hero">
        <Image
          className="z-hero-bg"
          src="/images/solar-dark.jpg"
          alt="Instalación fotovoltaica en Barcelona al atardecer"
          fill
          priority
          sizes="100vw"
        />
        <div className="z-hero-shade" />
        <header className="z-header">
          <Brand dark compact />
          <nav aria-label="Navegación principal">
            <a href="#soluciones">Soluciones</a>
            <a href="#ahorro">Ahorro</a>
            <a href="#proyecto">Proyecto</a>
            <a href="#preguntas">Preguntas</a>
          </nav>
          <a className="z-header-cta" href="tel:+34931989521">
            Hablemos <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </header>
        <div className="z-hero-content">
          <span className="z-index">01 — DOMOTEKNIK</span>
          <h1>ENERGÍA QUE TRABAJA PARA TI.</h1>
          <div className="z-long-arrow" aria-hidden="true"><span /></div>
        </div>
        <div className="z-mini-card">
          <span>AHORRO ESTIMADO</span>
          <strong>HASTA 70%</strong>
          <div className="z-mini-chart">
            {[18, 42, 28, 60, 51, 78, 69, 100].map((height, i) => (
              <i key={i} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="z-hero-bottom">
          <p>
            Produce, climatiza, controla y recarga con una solución energética
            diseñada de principio a fin.
          </p>
          <a href="tel:+34931989521">
            Estudio gratis <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </section>

      <section className="z-outline" aria-label="Propuesta Domoteknik">
        <div>MENOS RED. MÁS CONTROL.</div>
        <div className="outline">MENOS RED. MÁS CONTROL.</div>
      </section>

      <section className="z-decisions" id="soluciones">
        <div className="z-section-label"><span>02</span> Decide mejor</div>
        <div className="z-decisions-head" data-reveal>
          <h2>UN SISTEMA.<br />CUATRO FORMAS<br />DE GANAR.</h2>
          <p>
            Domoteknik conecta tecnologías que normalmente se plantean por
            separado. El resultado: menos consumo, más confort y control real
            sobre tu instalación.
          </p>
        </div>
        <div className="z-benefit-grid">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} data-reveal>
              <span>0{index + 1}</span>
              <FontAwesomeIcon icon={benefit.icon} />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
              <a href="tel:+34931989521" aria-label={`Consultar ${benefit.title}`}>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="z-energy">
        <div className="z-energy-image">
          <Image
            src="/images/domotica.jpg"
            alt="Control inteligente de una vivienda"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
          <div className="z-glow" />
        </div>
        <div className="z-energy-copy" data-reveal>
          <span className="z-index">03 — EFICIENCIA CONECTADA</span>
          <h2>TODA TU ENERGÍA EN UNA SOLA DECISIÓN.</h2>
          <p>
            Monitoriza producción, consumo, climatización y recarga. Automatiza
            persianas, luces y temperatura. Lo esencial sigue funcionando
            incluso cuando no hay internet.
          </p>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} /> Control desde móvil o voz</li>
            <li><FontAwesomeIcon icon={faCheck} /> Alertas y seguridad</li>
            <li><FontAwesomeIcon icon={faCheck} /> Horarios y excedentes solares</li>
          </ul>
        </div>
      </section>

      <section className="z-calculator-section" id="ahorro">
        <div className="z-calculator-head" data-reveal>
          <span className="z-section-label"><span>04</span> Calcula el potencial</span>
          <h2>¿CUÁNTO PODRÍA CAMBIAR TU FACTURA?</h2>
          <p>
            Mueve el control según tu factura mensual. Después hacemos el
            cálculo preciso con orientación, sombras, hábitos y potencia.
          </p>
        </div>
        <EnergyCalculator />
      </section>

      <section className="z-project" id="proyecto">
        <div className="z-project-image">
          <Image
            src="/images/proyecto-solar.jpg"
            alt="Proyecto fotovoltaico residencial de Domoteknik"
            fill
            sizes="100vw"
          />
          <div className="z-project-overlay" />
        </div>
        <div className="z-project-copy" data-reveal>
          <span>CASO / CASTELLAR DEL VALLÈS</span>
          <h2>5 kWp PARA CAMBIAR LA RELACIÓN CON LA RED.</h2>
          <p>
            Autoconsumo residencial dimensionado para cubrir gran parte de la
            demanda anual, monitorizar resultados y alcanzar hasta un 70 % de
            ahorro estimado.
          </p>
          <div className="z-project-numbers">
            <div><strong>5</strong><span>kWp instalados</span></div>
            <div><strong>70</strong><span>% ahorro estimado</span></div>
            <div><strong>2–3</strong><span>días de ejecución habitual</span></div>
          </div>
        </div>
      </section>

      <section className="z-business">
        <div className="z-section-label"><span>05</span> Donde lo necesites</div>
        <div className="z-business-head" data-reveal>
          <h2>VIVIENDA.<br />EMPRESA.<br />COMUNIDAD.</h2>
          <p>
            Cada espacio tiene una curva de consumo, una instalación existente
            y un objetivo. Nosotros diseñamos alrededor de esos datos.
          </p>
        </div>
        <div className="z-business-track">
          {[
            ["01", "Viviendas", "Ahorro, confort y autonomía para tu día a día."],
            ["02", "Empresas", "Control de costes y consumo durante las horas productivas."],
            ["03", "Comunidades", "Electricidad, recarga y soluciones compartidas bien legalizadas."],
          ].map(([n, title, text]) => (
            <article key={n} data-reveal>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="z-process">
        <div className="z-process-visual">
          <Image
            src="/images/consultoria.jpg"
            alt="Estudio energético personalizado"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="z-process-copy" data-reveal>
          <span className="z-index">06 — DEL DATO A LA INSTALACIÓN</span>
          <h2>RÁPIDO DE ENTENDER. FÁCIL DE EMPEZAR.</h2>
          {[
            ["01", "Estudio", "Analizamos consumos, espacio y necesidades."],
            ["02", "Diseño", "Dimensionamos y presupuestamos sin letra pequeña."],
            ["03", "Instalación", "Ejecutamos con técnicos cualificados."],
            ["04", "Legalización", "Dejamos documentación y puesta en marcha resueltas."],
          ].map(([n, title, text]) => (
            <div className="z-process-row" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="z-proof">
        <div className="z-proof-head" data-reveal>
          <span className="z-section-label"><span>07</span> La diferencia</span>
          <h2>TECNOLOGÍA SIN COMPLICACIONES.</h2>
        </div>
        <div className="z-proof-grid">
          <article><FontAwesomeIcon icon={faGaugeHigh} /><strong>100%</strong><span>enfoque en eficiencia</span></article>
          <article><FontAwesomeIcon icon={faArrowTrendDown} /><strong>10</strong><span>años de experiencia técnica</span></article>
          <article><FontAwesomeIcon icon={faBolt} /><strong>1</strong><span>equipo de principio a fin</span></article>
        </div>
      </section>

      <section className="z-faq" id="preguntas">
        <div className="z-faq-head" data-reveal>
          <span className="z-section-label"><span>08</span> Respuestas directas</span>
          <h2>LO QUE NECESITAS SABER.</h2>
        </div>
        <div className="z-faq-list">
          {[
            ["¿El estudio es gratuito?", "Sí. Revisamos tu caso y planteamos una solución personalizada sin compromiso."],
            ["¿Gestionáis permisos y subvenciones?", "Sí. Incluimos la legalización y te ayudamos con los trámites, ayudas y bonificaciones aplicables."],
            ["¿Puedo combinar solar, aerotermia y recarga?", "Sí. Precisamente diseñamos el conjunto para que la producción solar cubra la mayor parte posible de esos consumos."],
            ["¿Trabajáis instalaciones eléctricas antiguas?", "Sí. Diagnosticamos, recableamos, renovamos cuadros y adecuamos instalaciones a normativa REBT."],
            ["¿En qué zona instaláis?", "Trabajamos en Barcelona y provincia desde L’Hospitalet de Llobregat."],
          ].map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{question}</strong>
                <FontAwesomeIcon icon={faChevronDown} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="z-footer">
        <div className="z-footer-top">
          <span>09 — HABLEMOS</span>
          <h2>EL CAMBIO EMPIEZA CON UN ESTUDIO.</h2>
          <a href="tel:+34931989521">
            931 989 521 <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        <div className="z-footer-bottom">
          <Brand dark />
          <div>
            <a href="mailto:info@domoteknik.com">info@domoteknik.com</a>
            <span>Carrer Gonçal Pons, 19 · L’Hospitalet de Llobregat</span>
          </div>
          <span>© 2026 Domoteknik S.L.U.</span>
        </div>
      </footer>
      <ContactActions />
    </main>
  );
}
