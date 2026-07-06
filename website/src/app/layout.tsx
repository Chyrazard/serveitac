import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAds } from "@/components/GoogleAds";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: "Desatascos 24H en Vilanova, Garraf y Baix Penedes | ServeiCat 24H",
  description:
    "Desatascos urgentes y con cita en Vilanova i la Geltru, Garraf y Baix Penedes. WC, fregaderos, bajantes, arquetas y tuberias. Precios claros desde 90 € + IVA.",
  keywords: [
    "desatascos Vilanova",
    "desatascos Garraf",
    "desatasco tuberias",
    "desatrancos",
    "fontanero urgente Vilanova",
    "desatascar WC",
    "desatascar fregadero",
    "desatascos 24 horas"
  ],
  openGraph: {
    title: "Desatascos 24H | ServeiCat 24H",
    description:
      "Servicio rapido de desatascos con precios transparentes: urgencias y citas agendadas en Garraf y Baix Penedes.",
    url: "/",
    siteName: "ServeiCat 24H",
    images: [
      {
        url: "/images/desatascos-hero.jpg",
        width: 500,
        height: 330,
        alt: "Tecnico de ServeiCat 24H realizando servicio de fontaneria"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <GoogleAds />
        {children}
      </body>
    </html>
  );
}
