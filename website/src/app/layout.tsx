import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { GoogleAds } from "@/components/GoogleAds";
import { site } from "@/lib/site";
import { seoImages } from "@/lib/seo";

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
  applicationName: site.name,
  category: "local business",
  icons: {
    icon: seoImages.icon,
    apple: seoImages.icon
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-serveicat-pathname") || "/";
  const lang = pathname.startsWith("/ca") ? "ca" : "es";

  return (
    <html lang={lang} className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <GoogleAds />
        {children}
      </body>
    </html>
  );
}
