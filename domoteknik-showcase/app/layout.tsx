import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domoteknik | Eficiencia energética en Barcelona",
  description:
    "Instalaciones de fotovoltaica, aerotermia, domótica, cargadores de coche y electricidad en Barcelona.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
