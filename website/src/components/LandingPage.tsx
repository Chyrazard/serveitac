"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  BadgeEuro,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Droplets,
  Languages,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Toilet,
  Waves,
  Wrench
} from "lucide-react";
import { ConversionLink } from "@/components/ConversionLink";
import { site, whatsappUrl } from "@/lib/site";

type Lang = "es" | "ca";

type Service = {
  title: string;
  text: string;
  icon: typeof Toilet;
};

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <FontAwesomeIcon
      icon={faWhatsapp}
      className="whatsapp-icon"
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

const whatsappMessage = {
  es: "Hola ServeiCat 24H, necesito ayuda con un desatasco.",
  ca: "Hola ServeiCat 24H, necessito ajuda amb un desembussament."
};

const copy = {
  es: {
    nav: {
      service: "Desatascos",
      prices: "Precios",
      coverage: "Cobertura",
      faq: "FAQ"
    },
    actions: {
      call: "Llamar ahora",
      whatsapp: "WhatsApp",
      quote: "Pedir presupuesto"
    },
    language: {
      current: "ES",
      currentName: "Español",
      otherCode: "CA",
      switchLabel: "Cambiar idioma",
      modalTitle: "Elige idioma",
      modalText: "¿En qué idioma deseas leer los servicios? / En quin idioma vols llegir els serveis?",
      dontAsk: "No volver a preguntar / No tornar-ho a preguntar",
      spanish: "Español",
      catalan: "Català"
    },
    hero: {
      eyebrow: "Desatascos 24 horas en Vilanova, Garraf y Baix Penedès",
      title: "Desatascos 24 horas urgentes en Vilanova y Garraf",
      highlight: "con precio claro",
      text:
        "ServeiCat 24H atiende desatascos urgentes de tuberías, WC, fregaderos, bajantes y arquetas. Salida 24 horas o cita agendada desde Vilanova i la Geltrú.",
      trust: ["Respuesta rápida", "Precios visibles", "Trabajo garantizado"],
      cardTitle: "Urgencias de desatascos",
      cardText: "Atención 24 horas, 365 días al año."
    },
    prices: {
      eyebrow: "Tarifas transparentes",
      title: "Precio base visible para desatascos urgentes y cita agendada",
      text:
        "Las dos tarifas incluyen desplazamiento y primera hora. Si hace falta material, maquinaria especial o más tiempo, se confirma antes de seguir.",
      urgentTitle: "Desatascos urgentes 24H",
      urgentText: "Para agua subiendo, mal olor intenso, WC inutilizable o riesgo inmediato.",
      scheduledTitle: "Cita agendada",
      scheduledText: "Para desatascos que pueden programarse sin urgencia el mismo día."
    },
    servicesIntro: {
      eyebrow: "Qué desatascamos",
      title: "Desatascos para los problemas más habituales",
      text:
        "En esta fase ServeiCat está enfocado solo en desatascos: tuberías, sanitarios, bajantes, arquetas y comunidades."
    },
    services: [
      {
        title: "WC e inodoros",
        text: "Desatascos urgentes cuando sube el agua, hay mal olor o la descarga queda bloqueada.",
        icon: Toilet
      },
      {
        title: "Fregaderos y lavabos",
        text: "Desatascos de cocina, baño, sifones y tuberías interiores con revisión inicial.",
        icon: Droplets
      },
      {
        title: "Bajantes",
        text: "Soluciones para comunidades, locales y viviendas con obstrucciones verticales.",
        icon: Building2
      },
      {
        title: "Arquetas",
        text: "Limpieza y desbloqueo de arquetas con diagnóstico claro antes de intervenir.",
        icon: Wrench
      },
      {
        title: "Tuberías generales",
        text: "Desatasco de tuberías por acumulación de residuos, cal, raíces o uso continuado.",
        icon: Waves
      },
      {
        title: "Comunidades",
        text: "Atención para administradores, vecinos y urgencias en zonas comunes.",
        icon: ShieldCheck
      }
    ] satisfies Service[],
    steps: {
      eyebrow: "Así de fácil",
      title: "Desatasco resuelto en 3 pasos",
      items: [
        ["Llamas o escribes", "Nos dices dónde está el atasco, qué está pasando y si es urgente."],
        ["Acudimos", "Un técnico se desplaza desde la zona y revisa el problema en el punto."],
        ["Resolvemos", "Se desatasca, se comprueba el flujo y se explica cómo evitar que vuelva."]
      ]
    },
    coverage: {
      eyebrow: "Cobertura local",
      title: "Base en Vilanova i la Geltrú",
      text:
        "Servicio de desatascos 24 horas para Garraf y Baix Penedès, con posibilidad de ampliar según disponibilidad y urgencia."
    },
    trust: {
      eyebrow: "Confianza",
      title: "Servicio pensado para urgencias reales",
      items: [
        ["Precio claro", "Tarifas visibles antes de llamar, sin esconder el coste base."],
        ["24H / 365 días", "Atención para desatascos urgentes, noches y festivos incluidos."],
        ["Zona cercana", "Base en Vilanova para cubrir Garraf y Baix Penedès con rapidez."],
        ["Trabajo con garantía", "Diagnóstico claro, intervención limpia y explicación final."]
      ]
    },
    reviews: {
      eyebrow: "Reseñas verificadas",
      title: "Opiniones reales de clientes, sin letra pequeña",
      text:
        "Estamos preparando el bloque de Google Reviews para publicar solo reseñas reales de servicios atendidos. Mientras llegan las primeras valoraciones verificadas, puedes comprobar antes de llamar las tarifas, la zona de cobertura y el proceso de trabajo.",
      badge: "Google Reviews",
      pending: "Primeras reseñas reales próximamente",
      items: [
        ["Precio visible", "Urgencia desde 180 € + IVA y cita agendada desde 90 € + IVA."],
        ["Atención directa", "Llamada y WhatsApp visibles para pedir ayuda sin formularios largos."],
        ["Servicio local", "Base en Vilanova para cubrir Garraf y Baix Penedès."]
      ]
    },
    seoBlock: {
      eyebrow: "Especialistas en desatascos",
      title: "Desatascos 24 horas, desatascos urgentes y mantenimiento puntual",
      text:
        "Trabajamos con una landing centrada en intención real de búsqueda: desatascos 24 horas cuando el problema no puede esperar, desatascos urgentes por retorno de agua o mal olor, y desatascos programados para tuberías, WC, fregaderos, bajantes y arquetas. El objetivo es que sepas el precio base antes de pedir ayuda y puedas elegir entre urgencia o cita agendada."
    },
    cta: {
      title: "¿Tienes un atasco ahora?",
      text: "Cuanto antes se revisa, menos riesgo de fuga, mal olor o daño por agua."
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Dudas rápidas antes de pedir ayuda",
      items: [
        [
          "¿Cuánto cuesta un desatasco urgente?",
          "La urgencia tiene una tarifa base de 180 € + IVA e incluye desplazamiento y primera hora de trabajo."
        ],
        [
          "¿Y si puedo esperar a una cita?",
          "La cita agendada cuesta 90 € + IVA e incluye desplazamiento y primera hora. Es la opción más económica si no hay riesgo inmediato."
        ],
        [
          "¿Qué pasa si el atasco requiere más trabajo?",
          "Antes de continuar se explica el alcance, el tiempo adicional o material necesario, y se valida contigo."
        ],
        [
          "¿En qué zonas trabajáis?",
          "Principalmente Vilanova i la Geltrú, Sitges, Sant Pere de Ribes, Cubelles, Cunit, Calafell, El Vendrell, Garraf y Baix Penedès."
        ]
      ]
    },
    footer: {
      summary: "Desatascos 24 horas en Vilanova, Garraf y Baix Penedès.",
      contact: "Contacto",
      service: "Servicio",
      hours: "24 horas / 365 días",
      legal: "Legal",
      rights: "Todos los derechos reservados.",
      legalLinks: ["Aviso legal", "Privacidad", "Cookies"]
    }
  },
  ca: {
    nav: {
      service: "Desembussos",
      prices: "Preus",
      coverage: "Cobertura",
      faq: "FAQ"
    },
    actions: {
      call: "Trucar ara",
      whatsapp: "WhatsApp",
      quote: "Demanar pressupost"
    },
    language: {
      current: "CA",
      currentName: "Català",
      otherCode: "ES",
      switchLabel: "Canviar idioma",
      modalTitle: "Tria idioma",
      modalText: "¿En qué idioma deseas leer los servicios? / En quin idioma vols llegir els serveis?",
      dontAsk: "No volver a preguntar / No tornar-ho a preguntar",
      spanish: "Español",
      catalan: "Català"
    },
    hero: {
      eyebrow: "Desembussos 24 hores a Vilanova, Garraf i Baix Penedès",
      title: "Desembussos urgents 24 hores a Vilanova i Garraf",
      highlight: "amb preu clar",
      text:
        "ServeiCat 24H atén desembussos urgents de canonades, WC, aigüeres, baixants i arquetes. Sortida 24 hores o cita programada des de Vilanova i la Geltrú.",
      trust: ["Resposta ràpida", "Preus visibles", "Treball garantit"],
      cardTitle: "Urgències de desembussos",
      cardText: "Atenció 24 hores, 365 dies l'any."
    },
    prices: {
      eyebrow: "Tarifes transparents",
      title: "Preu base visible per a urgències i cita programada",
      text:
        "Les dues tarifes inclouen desplaçament i primera hora. Si cal material, maquinària especial o més temps, es confirma abans de continuar.",
      urgentTitle: "Desembussos urgents 24H",
      urgentText: "Per aigua que puja, mala olor intensa, WC inutilitzable o risc immediat.",
      scheduledTitle: "Cita programada",
      scheduledText: "Per a desembussos que es poden programar sense urgència el mateix dia."
    },
    servicesIntro: {
      eyebrow: "Què desembussem",
      title: "Desembussos per als problemes més habituals",
      text:
        "En aquesta fase ServeiCat està enfocat només en desembussos: canonades, sanitaris, baixants, arquetes i comunitats."
    },
    services: [
      {
        title: "WC i inodors",
        text: "Desembussos urgents quan puja l'aigua, hi ha mala olor o la descàrrega queda bloquejada.",
        icon: Toilet
      },
      {
        title: "Aigüeres i lavabos",
        text: "Desembussos de cuina, bany, sifons i canonades interiors amb revisió inicial.",
        icon: Droplets
      },
      {
        title: "Baixants",
        text: "Solucions per a comunitats, locals i habitatges amb obstruccions verticals.",
        icon: Building2
      },
      {
        title: "Arquetes",
        text: "Neteja i desbloqueig d'arquetes amb diagnòstic clar abans d'intervenir.",
        icon: Wrench
      },
      {
        title: "Canonades generals",
        text: "Desembussament de canonades per acumulació de residus, calç, arrels o ús continuat.",
        icon: Waves
      },
      {
        title: "Comunitats",
        text: "Atenció per a administradors, veïns i urgències en zones comunes.",
        icon: ShieldCheck
      }
    ] satisfies Service[],
    steps: {
      eyebrow: "Així de fàcil",
      title: "Desembús resolt en 3 passos",
      items: [
        ["Truques o escrius", "Ens dius on és l'embús, què està passant i si és urgent."],
        ["Ens desplacem", "Un tècnic es desplaça des de la zona i revisa el problema al punt."],
        ["Ho resolem", "Es desembussa, es comprova el flux i s'explica com evitar que torni."]
      ]
    },
    coverage: {
      eyebrow: "Cobertura local",
      title: "Base a Vilanova i la Geltrú",
      text:
        "Servei de desembussos 24 hores per al Garraf i Baix Penedès, amb possibilitat d'ampliar segons disponibilitat i urgència."
    },
    trust: {
      eyebrow: "Confiança",
      title: "Servei pensat per a urgències reals",
      items: [
        ["Preu clar", "Tarifes visibles abans de trucar, sense amagar el cost base."],
        ["24H / 365 dies", "Atenció per a desembussos urgents, nits i festius inclosos."],
        ["Zona propera", "Base a Vilanova per cobrir Garraf i Baix Penedès amb rapidesa."],
        ["Treball amb garantia", "Diagnòstic clar, intervenció neta i explicació final."]
      ]
    },
    reviews: {
      eyebrow: "Ressenyes verificades",
      title: "Opinions reals de clients, sense lletra petita",
      text:
        "Estem preparant el bloc de Google Reviews per publicar només ressenyes reals de serveis atesos. Mentre arriben les primeres valoracions verificades, pots comprovar abans de trucar les tarifes, la zona de cobertura i el procés de treball.",
      badge: "Google Reviews",
      pending: "Primeres ressenyes reals properament",
      items: [
        ["Preu visible", "Urgència des de 180 € + IVA i cita programada des de 90 € + IVA."],
        ["Atenció directa", "Trucada i WhatsApp visibles per demanar ajuda sense formularis llargs."],
        ["Servei local", "Base a Vilanova per cobrir Garraf i Baix Penedès."]
      ]
    },
    seoBlock: {
      eyebrow: "Especialistes en desembussos",
      title: "Desembussos 24 hores, urgències i manteniment puntual",
      text:
        "La pàgina està pensada per a qui necessita ajuda ràpida: desembussos 24 hores quan el problema no pot esperar, urgències per retorn d'aigua o mala olor, i cites programades per canonades, WC, aigüeres, baixants i arquetes. L'objectiu és que coneguis el preu base abans de demanar ajuda."
    },
    cta: {
      title: "Tens un embús ara?",
      text: "Com abans es revisa, menys risc de fuita, mala olor o dany per aigua."
    },
    faq: {
      eyebrow: "Preguntes freqüents",
      title: "Dubtes ràpids abans de demanar ajuda",
      items: [
        [
          "Quant costa un desembús urgent?",
          "La urgència té una tarifa base de 180 € + IVA i inclou desplaçament i primera hora de treball."
        ],
        [
          "I si puc esperar una cita?",
          "La cita programada costa 90 € + IVA i inclou desplaçament i primera hora. És l'opció més econòmica si no hi ha risc immediat."
        ],
        [
          "Què passa si l'embús requereix més feina?",
          "Abans de continuar s'explica l'abast, el temps addicional o material necessari, i es valida amb tu."
        ],
        [
          "En quines zones treballeu?",
          "Principalment Vilanova i la Geltrú, Sitges, Sant Pere de Ribes, Cubelles, Cunit, Calafell, El Vendrell, Garraf i Baix Penedès."
        ]
      ]
    },
    footer: {
      summary: "Desembussos 24 hores a Vilanova, Garraf i Baix Penedès.",
      contact: "Contacte",
      service: "Servei",
      hours: "24 hores / 365 dies",
      legal: "Legal",
      rights: "Tots els drets reservats.",
      legalLinks: ["Avís legal", "Privacitat", "Cookies"]
    }
  }
};

function CallButton({ className = "", label }: { className?: string; label: string }) {
  return (
    <ConversionLink href={`tel:${site.phoneTel}`} type="call" className={`btn btn-primary ${className}`}>
      <Phone size={18} aria-hidden="true" />
      {label}
    </ConversionLink>
  );
}

function WhatsAppButton({
  className = "",
  label,
  message
}: {
  className?: string;
  label: string;
  message: string;
}) {
  return (
    <ConversionLink href={whatsappUrl(message)} type="whatsapp" className={`btn btn-secondary ${className}`}>
      <WhatsAppIcon />
      {label}
    </ConversionLink>
  );
}

function StaticAction({
  className = "",
  variant,
  children,
  ariaLabel,
  href
}: {
  className?: string;
  variant: "call" | "whatsapp";
  children: ReactNode;
  ariaLabel: string;
  href: string;
}) {
  return (
    <ConversionLink
      href={href}
      type={variant}
      className={`static-action static-${variant} ${className}`}
      ariaLabel={ariaLabel}
    >
      {children}
    </ConversionLink>
  );
}

export function LandingPage({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [dontAskLanguage, setDontAskLanguage] = useState(false);
  const t = copy[lang];
  const currentYear = new Date().getFullYear();
  const otherLang: Lang = lang === "es" ? "ca" : "es";

  useEffect(() => {
    const stored = window.localStorage.getItem("serveicat-lang") as Lang | null;
    const shouldSkipModal = window.localStorage.getItem("serveicat-lang-skip-modal") === "true";
    const redirectedLang = window.sessionStorage.getItem("serveicat-lang-redirected") as Lang | null;

    if (redirectedLang === initialLang) {
      window.sessionStorage.removeItem("serveicat-lang-redirected");
      return;
    }

    if (shouldSkipModal && (stored === "es" || stored === "ca")) {
      setLang(stored);
      if (stored !== initialLang) {
        window.location.replace(stored === "ca" ? "/ca" : "/");
      }
      return;
    }

    setShowLanguageModal(true);
  }, [initialLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function chooseLanguage(nextLang: Lang) {
    window.localStorage.setItem("serveicat-lang", nextLang);

    const shouldSkipModal = showLanguageModal
      ? dontAskLanguage
      : window.localStorage.getItem("serveicat-lang-skip-modal") === "true";

    if (shouldSkipModal) {
      window.localStorage.setItem("serveicat-lang-skip-modal", "true");
    } else {
      window.localStorage.removeItem("serveicat-lang-skip-modal");
    }

    setShowLanguageModal(false);

    if (nextLang !== initialLang) {
      window.sessionStorage.setItem("serveicat-lang-redirected", nextLang);
      window.location.href = nextLang === "ca" ? "/ca" : "/";
      return;
    }

    setLang(nextLang);
  }

  return (
    <>
      {showLanguageModal ? (
        <div className="language-modal" role="dialog" aria-modal="true" aria-labelledby="language-title">
          <div className="language-panel">
            <Languages size={34} aria-hidden="true" />
            <h2 id="language-title">{t.language.modalTitle}</h2>
            <p>{t.language.modalText}</p>
            <label className="language-remember">
              <input
                type="checkbox"
                checked={dontAskLanguage}
                onChange={(event) => setDontAskLanguage(event.target.checked)}
              />
              <span>{t.language.dontAsk}</span>
            </label>
            <div className="language-options">
              <button type="button" onClick={() => chooseLanguage("es")}>
                {t.language.spanish}
              </button>
              <button type="button" onClick={() => chooseLanguage("ca")}>
                {t.language.catalan}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="ServeiCat 24H inicio">
          <Image src="/brand/serveicat-icon.png" width={56} height={56} alt="ServeiCat 24H" priority />
          <span>
            ServeiCat <strong>24H</strong>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Principal">
          <a href="#servicios">{t.nav.service}</a>
          <a href="#precios">{t.nav.prices}</a>
          <a href="#cobertura">{t.nav.coverage}</a>
          <a href="#faq">{t.nav.faq}</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="language-chip"
            aria-label={t.language.switchLabel}
            onClick={() => chooseLanguage(otherLang)}
          >
            <Languages size={17} aria-hidden="true" />
            <span className="language-code">{t.language.current}</span>
            <span className="language-name">{t.language.currentName}</span>
          </button>
          <StaticAction
            variant="call"
            className="header-call"
            ariaLabel={`Llamar a ServeiCat al ${site.phoneDisplay}`}
            href={`tel:${site.phoneTel}`}
          >
            <Phone size={17} aria-hidden="true" />
            {site.phoneDisplay}
          </StaticAction>
          <StaticAction
            variant="whatsapp"
            className="header-whatsapp"
            ariaLabel="Contactar con ServeiCat por WhatsApp"
            href={whatsappUrl(whatsappMessage[lang])}
          >
            <WhatsAppIcon />
            WhatsApp
          </StaticAction>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu">
              <Menu size={24} />
            </summary>
            <div>
              <a href="#servicios">{t.nav.service}</a>
              <a href="#precios">{t.nav.prices}</a>
              <a href="#cobertura">{t.nav.coverage}</a>
              <a href="#faq">{t.nav.faq}</a>
              <button type="button" onClick={() => chooseLanguage(otherLang)}>
                <span>{t.language.otherCode}</span>
                {otherLang === "ca" ? "Català" : "Español"}
              </button>
            </div>
          </details>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>
              {t.hero.title} <span>{t.hero.highlight}</span>
            </h1>
            <p>{t.hero.text}</p>
            <div className="hero-actions">
              <CallButton label={t.actions.call} />
              <WhatsAppButton label={t.actions.whatsapp} message={whatsappMessage[lang]} />
            </div>
            <div className="quick-trust" aria-label="Ventajas principales">
              <div>
                <Clock3 size={20} />
                <span>{t.hero.trust[0]}</span>
              </div>
              <div>
                <BadgeEuro size={20} />
                <span>{t.hero.trust[1]}</span>
              </div>
              <div>
                <ShieldCheck size={20} />
                <span>{t.hero.trust[2]}</span>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/images/desatascos-hero-serveicat.jpg"
              width={1200}
              height={900}
              alt={
                lang === "es"
                  ? "Técnico de ServeiCat realizando un desatasco urgente en una bañera con máquina profesional"
                  : "Tècnic de ServeiCat fent un desembús urgent en una banyera amb màquina professional"
              }
              priority
            />
            <div className="hero-card">
              <Droplets size={28} />
              <strong>{t.hero.cardTitle}</strong>
              <span>{t.hero.cardText}</span>
            </div>
          </div>
        </section>

        <section className="price-band" id="precios" aria-labelledby="precios-title">
          <div className="section-heading">
            <span className="eyebrow">{t.prices.eyebrow}</span>
            <h2 id="precios-title">{t.prices.title}</h2>
            <p>{t.prices.text}</p>
          </div>
          <div className="price-grid">
            <article className="price-card featured">
              <div className="price-icon">
                <Clock3 />
              </div>
              <h3>{t.prices.urgentTitle}</h3>
              <p className="price">
                180 € <span>+ IVA</span>
              </p>
              <p>{t.prices.urgentText}</p>
              <CallButton label={t.actions.call} />
            </article>
            <article className="price-card">
              <div className="price-icon">
                <CalendarClock />
              </div>
              <h3>{t.prices.scheduledTitle}</h3>
              <p className="price">
                90 € <span>+ IVA</span>
              </p>
              <p>{t.prices.scheduledText}</p>
              <WhatsAppButton label={t.actions.whatsapp} message={whatsappMessage[lang]} />
            </article>
          </div>
        </section>

        <section className="section split" id="servicios">
          <div className="section-heading align-left">
            <span className="eyebrow">{t.servicesIntro.eyebrow}</span>
            <h2>{t.servicesIntro.title}</h2>
            <p>{t.servicesIntro.text}</p>
          </div>
          <div className="service-grid">
            {t.services.map((item) => {
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
            <span className="eyebrow">{t.steps.eyebrow}</span>
            <h2>{t.steps.title}</h2>
          </div>
          <div className="steps-grid">
            {t.steps.items.map(([title, text], index) => {
              const icons = [Phone, MapPin, CheckCircle2];
              const Icon = icons[index];
              return (
                <article key={title}>
                  <span>{index + 1}</span>
                  <Icon size={32} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="coverage" id="cobertura">
          <div>
            <span className="eyebrow">{t.coverage.eyebrow}</span>
            <h2>{t.coverage.title}</h2>
            <p>{t.coverage.text}</p>
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
            <span className="eyebrow">{t.trust.eyebrow}</span>
            <h2>{t.trust.title}</h2>
          </div>
          <div className="trust-grid">
            {t.trust.items.map(([title, text]) => (
              <article key={title}>
                <Sparkles size={30} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-section section" aria-labelledby="reviews-title">
          <div className="section-heading">
            <span className="eyebrow">{t.reviews.eyebrow}</span>
            <h2 id="reviews-title">{t.reviews.title}</h2>
            <p>{t.reviews.text}</p>
          </div>
          <div className="reviews-panel">
            <div className="reviews-score">
              <span>{t.reviews.badge}</span>
              <div aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={24} />
                ))}
              </div>
              <strong>{t.reviews.pending}</strong>
            </div>
            <div className="review-proof-grid">
              {t.reviews.items.map(([title, text]) => (
                <article key={title}>
                  <CheckCircle2 size={26} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-copy section">
          <div className="section-heading">
            <span className="eyebrow">{t.seoBlock.eyebrow}</span>
            <h2>{t.seoBlock.title}</h2>
            <p>{t.seoBlock.text}</p>
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
          </div>
          <div className="cta-actions">
            <CallButton label={t.actions.call} />
            <WhatsAppButton label={t.actions.whatsapp} message={whatsappMessage[lang]} />
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading align-left">
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h2>{t.faq.title}</h2>
          </div>
          <div className="faq-grid">
            {t.faq.items.map(([question, answer]) => (
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
            <Image src="/brand/serveicat-icon.png" width={56} height={56} alt="ServeiCat 24H" />
            <span>
              ServeiCat <strong>24H</strong>
            </span>
          </a>
          <p>{t.footer.summary}</p>
        </div>
        <div>
          <h2>{t.footer.contact}</h2>
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{t.footer.hours}</span>
        </div>
        <div>
          <h2>{t.footer.service}</h2>
          <a href="#servicios">{t.nav.service}</a>
          <a href="#precios">{t.nav.prices}</a>
          <a href="#cobertura">{t.nav.coverage}</a>
        </div>
        <div>
          <h2>{t.footer.legal}</h2>
          <a href="/aviso-legal">{t.footer.legalLinks[0]}</a>
          <a href="/politica-privacidad">{t.footer.legalLinks[1]}</a>
          <a href="/cookies">{t.footer.legalLinks[2]}</a>
        </div>
        <p className="copyright">
          © {currentYear} ServeiCat 24H. {t.footer.rights}
        </p>
      </footer>

      <div className="floating-actions" aria-label="Accesos rapidos de contacto">
        <StaticAction
          variant="call"
          className="floating-call"
          ariaLabel={`Llamar a ServeiCat al ${site.phoneDisplay}`}
          href={`tel:${site.phoneTel}`}
        >
          <Phone size={30} aria-hidden="true" />
          <span>{t.actions.call}</span>
        </StaticAction>
        <StaticAction
          variant="whatsapp"
          className="floating-whatsapp"
          ariaLabel="Contactar con ServeiCat por WhatsApp"
          href={whatsappUrl(whatsappMessage[lang])}
        >
          <WhatsAppIcon size={24} />
          <span>{t.actions.whatsapp}</span>
        </StaticAction>
      </div>
    </>
  );
}
