import Image from "next/image";
import {
  BadgeEuro,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Droplets,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Toilet,
  Wrench,
  MessageCircle,
  Waves,
  Building2
} from "lucide-react";
import { ConversionLink } from "@/components/ConversionLink";
import { site, whatsappUrl } from "@/lib/site";

const whatsappMessage =
  "Hola ServeiCat 24H, necesito ayuda con un desatasco. ¿Me podeis indicar disponibilidad?";

const services = [
  {
    title: "WC e inodoros",
    text: "Atascos con subida de agua, mal olor o descarga bloqueada.",
    icon: Toilet
  },
  {
    title: "Fregaderos y lavabos",
    text: "Desatascos de cocina, baño, sifones y tuberias interiores.",
    icon: Droplets
  },
  {
    title: "Bajantes",
    text: "Soluciones para comunidades, locales y viviendas con obstrucciones verticales.",
    icon: Building2
  },
  {
    title: "Arquetas",
    text: "Limpieza y desbloqueo de arquetas con inspeccion inicial.",
    icon: Wrench
  },
  {
    title: "Tuberias generales",
    text: "Desatasco de tuberias por acumulacion de residuos, cal o raices.",
    icon: Waves
  },
  {
    title: "Comunidades",
    text: "Atencion para administradores, vecinos y urgencias en zonas comunes.",
    icon: ShieldCheck
  }
];

const trustItems = [
  ["Precio claro", "Tarifas visibles antes de llamar, sin esconder el coste base."],
  ["24H / 365 dias", "Atencion para urgencias reales, noches y festivos incluidos."],
  ["Zona cercana", "Base en Vilanova para cubrir Garraf y Baix Penedes con rapidez."],
  ["Trabajo con garantia", "Diagnostico claro, intervencion limpia y explicacion final."]
];

const faqs = [
  [
    "¿Cuanto cuesta un desatasco urgente?",
    "La urgencia tiene una tarifa base de 180 € + IVA e incluye desplazamiento y primera hora de trabajo."
  ],
  [
    "¿Y si puedo esperar a una cita?",
    "La cita agendada cuesta 90 € + IVA e incluye desplazamiento y primera hora. Es la opcion mas economica si no hay riesgo inmediato."
  ],
  [
    "¿Que pasa si el atasco requiere mas trabajo?",
    "Antes de continuar se explica el alcance, el tiempo adicional o material necesario, y se valida contigo."
  ],
  [
    "¿En que zonas trabajais?",
    "Principalmente Vilanova i la Geltru, Sitges, Sant Pere de Ribes, Cubelles, Cunit, Calafell, El Vendrell, Garraf y Baix Penedes."
  ]
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <ConversionLink href={`tel:${site.phoneTel}`} type="call" className={`btn btn-primary ${className}`}>
      <Phone size={18} aria-hidden="true" />
      Llamar ahora
    </ConversionLink>
  );
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <ConversionLink
      href={whatsappUrl(whatsappMessage)}
      type="whatsapp"
      className={`btn btn-secondary ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      WhatsApp
    </ConversionLink>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="ServeiCat 24H inicio">
          <Image
            src="/brand/serveicat-icon.png"
            width={56}
            height={56}
            alt=""
            priority
          />
          <span>
            ServeiCat <strong>24H</strong>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Principal">
          <a href="#servicios">Desatascos</a>
          <a href="#precios">Precios</a>
          <a href="#cobertura">Cobertura</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="header-actions">
          <span className="phone-label">24H · {site.phoneDisplay}</span>
          <CallButton className="header-call" />
          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <Menu size={24} />
            </summary>
            <div>
              <a href="#servicios">Desatascos</a>
              <a href="#precios">Precios</a>
              <a href="#cobertura">Cobertura</a>
              <a href="#faq">FAQ</a>
            </div>
          </details>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Desatascos urgentes 24H en Garraf y Baix Penedes</span>
            <h1>
              Desatascos de tuberias, WC y fregaderos <span>con precio claro</span>
            </h1>
            <p>
              ServeiCat 24H atiende atascos de fontaneria en viviendas, locales y comunidades.
              Salida urgente o cita agendada desde Vilanova i la Geltru.
            </p>
            <div className="hero-actions">
              <CallButton />
              <WhatsAppButton />
            </div>
            <div className="quick-trust" aria-label="Ventajas principales">
              <div>
                <Clock3 size={20} />
                <span>Respuesta rapida</span>
              </div>
              <div>
                <BadgeEuro size={20} />
                <span>Precios visibles</span>
              </div>
              <div>
                <ShieldCheck size={20} />
                <span>Trabajo garantizado</span>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/images/desatascos-hero.jpg"
              width={500}
              height={330}
              alt="Tecnico de ServeiCat trabajando en una reparacion de fontaneria"
              priority
            />
            <div className="hero-card">
              <Droplets size={28} />
              <strong>Urgencias de desatascos</strong>
              <span>Atencion 24 horas, 365 dias al ano.</span>
            </div>
          </div>
        </section>

        <section className="price-band" id="precios" aria-labelledby="precios-title">
          <div className="section-heading">
            <span className="eyebrow">Tarifas transparentes</span>
            <h2 id="precios-title">Sabes el precio base antes de llamar</h2>
            <p>
              Las dos tarifas incluyen desplazamiento y primera hora. Si hace falta material,
              maquinaria especial o mas tiempo, se confirma antes de seguir.
            </p>
          </div>
          <div className="price-grid">
            <article className="price-card featured">
              <div className="price-icon">
                <Clock3 />
              </div>
              <h3>Urgencia 24H</h3>
              <p className="price">180 € <span>+ IVA</span></p>
              <p>Para atascos con agua subiendo, mal olor intenso, WC inutilizable o riesgo inmediato.</p>
              <CallButton />
            </article>
            <article className="price-card">
              <div className="price-icon">
                <CalendarClock />
              </div>
              <h3>Cita agendada</h3>
              <p className="price">90 € <span>+ IVA</span></p>
              <p>Para intervenciones que pueden programarse sin urgencia el mismo dia o proximas horas.</p>
              <WhatsAppButton />
            </article>
          </div>
        </section>

        <section className="section split" id="servicios">
          <div className="section-heading align-left">
            <span className="eyebrow">Que desatascamos</span>
            <h2>Soluciones para los atascos mas habituales</h2>
            <p>
              Enfocados solo en desatascos en esta primera fase: tuberias, sanitarios, bajantes,
              arquetas y comunidades.
            </p>
          </div>
          <div className="service-grid">
            {services.map((item) => {
              const Icon = item.icon;
              return (
                <article className="service-card" key={item.title}>
                  <Icon size={34} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="steps section">
          <div className="section-heading">
            <span className="eyebrow">Asi de facil</span>
            <h2>En 3 pasos lo dejamos encaminado</h2>
          </div>
          <div className="steps-grid">
            <article>
              <span>1</span>
              <Phone size={32} />
              <h3>Llamas o escribes</h3>
              <p>Nos dices donde esta el atasco, que esta pasando y si es urgente.</p>
            </article>
            <article>
              <span>2</span>
              <MapPin size={32} />
              <h3>Acudimos</h3>
              <p>Un tecnico se desplaza desde la zona y revisa el problema en el punto.</p>
            </article>
            <article>
              <span>3</span>
              <CheckCircle2 size={32} />
              <h3>Resolvemos</h3>
              <p>Se desatasca, se comprueba el flujo y se explica como evitar que vuelva.</p>
            </article>
          </div>
        </section>

        <section className="coverage" id="cobertura">
          <div>
            <span className="eyebrow">Cobertura local</span>
            <h2>Base en Vilanova i la Geltru</h2>
            <p>
              Servicio de desatascos para Garraf y Baix Penedes, con posibilidad de ampliar segun
              disponibilidad y urgencia.
            </p>
          </div>
          <div className="coverage-list">
            {site.coverage.map((place) => (
              <span key={place}>
                <MapPin size={16} />
                {place}
              </span>
            ))}
          </div>
        </section>

        <section className="trust section">
          <div className="section-heading">
            <span className="eyebrow">Confianza</span>
            <h2>Servicio pensado para urgencias reales</h2>
          </div>
          <div className="trust-grid">
            {trustItems.map(([title, text]) => (
              <article key={title}>
                <Sparkles size={30} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <h2>¿Tienes un atasco ahora?</h2>
            <p>Cuanto antes se revisa, menos riesgo de fuga, mal olor o dano por agua.</p>
          </div>
          <div className="cta-actions">
            <CallButton />
            <WhatsAppButton />
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading align-left">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Dudas rapidas antes de pedir ayuda</h2>
          </div>
          <div className="faq-grid">
            {faqs.map(([question, answer]) => (
              <article key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <a className="brand footer-brand" href="#inicio" aria-label="ServeiCat 24H inicio">
            <Image src="/brand/serveicat-icon.png" width={56} height={56} alt="" />
            <span>
              ServeiCat <strong>24H</strong>
            </span>
          </a>
          <p>Desatascos 24H en Vilanova, Garraf y Baix Penedes.</p>
        </div>
        <div>
          <h2>Contacto</h2>
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>24 horas / 365 dias</span>
        </div>
        <div>
          <h2>Servicio</h2>
          <a href="#servicios">Desatascos</a>
          <a href="#precios">Precios</a>
          <a href="#cobertura">Cobertura</a>
        </div>
        <p className="copyright">© {currentYear} ServeiCat 24H. Todos los derechos reservados.</p>
      </footer>

      <div className="mobile-sticky">
        <CallButton />
        <ConversionLink
          href={whatsappUrl(whatsappMessage)}
          type="whatsapp"
          className="sticky-whatsapp"
          ariaLabel="Abrir WhatsApp de ServeiCat 24H"
        >
          <MessageCircle size={22} />
        </ConversionLink>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Plumber",
            name: site.name,
            url: `https://${site.domain}`,
            telephone: site.phoneTel,
            email: site.email,
            areaServed: site.coverage,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Vilanova i la Geltru",
              addressRegion: "Barcelona",
              addressCountry: "ES"
            },
            priceRange: "90 EUR - 180 EUR + IVA",
            openingHours: "Mo-Su 00:00-23:59",
            serviceType: "Desatascos de tuberias, WC, fregaderos, bajantes y arquetas"
          })
        }}
      />
    </>
  );
}
