import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const zingRust = localFont({
  src: "../public/fonts/zing.rust-demo-base.otf",
  variable: "--font-zing",
});

export const metadata: Metadata = {
  title: "Revolver Garaje | Taller de Motos en Toluca | Especialista KTM, Bajaj, Vento",
  description: "El mejor taller de motos multimarca en Toluca. Especialistas en KTM, Bajaj, Vento y alta cilindrada. Mantenimiento, reparaciones y refacciones originales.",
  keywords: ["taller de motos Toluca", "mecánico de motos Toluca", "KTM Toluca", "Bajaj Toluca", "Vento Toluca", "refacciones motos Toluca"],
  openGraph: {
    title: "Revolver Garaje — Taller Multimarca Toluca",
    description:
      "Tu moto no debería estar parada esperando. Atendemos Bajaj, Vento, KTM y más.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={zingRust.variable}>
      <body>{children}</body>
    </html>
  );
}
