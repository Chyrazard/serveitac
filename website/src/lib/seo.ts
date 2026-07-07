import type { Metadata } from "next";
import { site } from "@/lib/site";

const baseUrl = `https://${site.domain}`;

export const seoImages = {
  og: "/images/og-desatascos-serveicat.jpg",
  hero: "/images/desatascos-hero-serveicat.jpg",
  icon: "/brand/serveicat-icon.png"
};

export const spanishMetadata: Metadata = {
  title: "Desatascos 24 horas urgentes | ServeiCat 24H",
  description:
    "Desatascos 24 horas y desatascos urgentes en Vilanova, Garraf y Baix Penedes. WC, fregaderos, bajantes, arquetas y tuberias desde 90 € + IVA.",
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "ca-ES": "/ca"
    }
  },
  openGraph: {
    title: "Desatascos 24 horas urgentes | ServeiCat 24H",
    description:
      "Servicio de desatascos urgentes y cita agendada en Vilanova, Garraf y Baix Penedes. Precios claros desde 90 € + IVA.",
    url: "/",
    siteName: site.name,
    images: [
      {
        url: seoImages.og,
        width: 1200,
        height: 630,
        alt: "ServeiCat 24H servicio de desatascos urgentes"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Desatascos 24 horas urgentes | ServeiCat 24H",
    description:
      "Desatascos 24 horas y urgentes en Vilanova, Garraf y Baix Penedes con precios visibles.",
    images: [seoImages.og]
  }
};

export const catalanMetadata: Metadata = {
  title: "Desembussos 24 hores urgents | ServeiCat 24H",
  description:
    "Desembussos 24 hores i urgents a Vilanova, Garraf i Baix Penedes. WC, aigueres, baixants, arquetes i canonades des de 90 € + IVA.",
  alternates: {
    canonical: "/ca",
    languages: {
      "es-ES": "/",
      "ca-ES": "/ca"
    }
  },
  openGraph: {
    title: "Desembussos 24 hores urgents | ServeiCat 24H",
    description:
      "Servei de desembussos urgents i cita programada a Vilanova, Garraf i Baix Penedes. Preus clars des de 90 € + IVA.",
    url: "/ca",
    siteName: site.name,
    images: [
      {
        url: seoImages.og,
        width: 1200,
        height: 630,
        alt: "ServeiCat 24H servei de desembussos urgents"
      }
    ],
    locale: "ca_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Desembussos 24 hores urgents | ServeiCat 24H",
    description:
      "Desembussos 24 hores i urgents a Vilanova, Garraf i Baix Penedes amb preus visibles.",
    images: [seoImages.og]
  }
};

const faqEs = [
  [
    "¿Cuánto cuesta un desatasco urgente?",
    "La urgencia tiene una tarifa base de 180 € + IVA e incluye desplazamiento y primera hora de trabajo."
  ],
  [
    "¿Y si puedo esperar a una cita?",
    "La cita agendada cuesta 90 € + IVA e incluye desplazamiento y primera hora."
  ],
  [
    "¿En qué zonas trabajáis?",
    "Principalmente Vilanova i la Geltrú, Sitges, Sant Pere de Ribes, Cubelles, Cunit, Calafell, El Vendrell, Garraf y Baix Penedès."
  ]
];

const faqCa = [
  [
    "Quant costa un desembús urgent?",
    "La urgència té una tarifa base de 180 € + IVA i inclou desplaçament i primera hora de treball."
  ],
  [
    "I si puc esperar una cita?",
    "La cita programada costa 90 € + IVA i inclou desplaçament i primera hora."
  ],
  [
    "En quines zones treballeu?",
    "Principalment Vilanova i la Geltrú, Sitges, Sant Pere de Ribes, Cubelles, Cunit, Calafell, El Vendrell, Garraf i Baix Penedès."
  ]
];

export function jsonLd(lang: "es" | "ca") {
  const isSpanish = lang === "es";
  const path = isSpanish ? "/" : "/ca";
  const faqs = isSpanish ? faqEs : faqCa;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Plumber",
        "@id": `${baseUrl}/#business`,
        name: site.name,
        url: `${baseUrl}${path}`,
        image: `${baseUrl}${seoImages.og}`,
        logo: `${baseUrl}${seoImages.icon}`,
        telephone: site.phoneTel,
        email: site.email,
        areaServed: site.coverage.map((name) => ({
          "@type": "Place",
          name
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vilanova i la Geltrú",
          addressRegion: "Barcelona",
          addressCountry: "ES"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 41.2242,
          longitude: 1.7256
        },
        priceRange: "90 EUR - 180 EUR + IVA",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59"
          }
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: isSpanish ? "Desatascos urgentes 24 horas" : "Desembussos urgents 24 hores",
            price: "180",
            priceCurrency: "EUR"
          },
          {
            "@type": "Offer",
            name: isSpanish ? "Cita agendada de desatascos" : "Cita programada de desembussos",
            price: "90",
            priceCurrency: "EUR"
          }
        ],
        serviceType: isSpanish
          ? "Desatascos 24 horas, desatascos urgentes, tuberias, WC, fregaderos, bajantes y arquetas"
          : "Desembussos 24 hores, urgencies, canonades, WC, aigueres, baixants i arquetes"
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}${path}#service`,
        serviceType: isSpanish ? "Desatascos 24 horas" : "Desembussos 24 hores",
        provider: {
          "@id": `${baseUrl}/#business`
        },
        areaServed: site.coverage
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}${path}#faq`,
        mainEntity: faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: {
            "@type": "Answer",
            text
          }
        }))
      }
    ]
  };
}
