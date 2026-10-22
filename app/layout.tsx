import localFont from "next/font/local";
import type { Metadata } from "next";
import Script from "next/script";
import ClickTracking from "@/components/ClickTracking";
import "./globals.css";

const zingRust = localFont({
  src: "../public/fonts/zing.rust-demo-base.otf",
  variable: "--font-zing",
});

const title = "Taller de motos en Toluca, Bajaj y KTM | Revolver Garaje";
const description =
  "Mantenimiento, diagnóstico y refacciones originales para tu moto en Toluca: Bajaj, KTM, Vento y alta cilindrada. 4.8★ en Google. Agenda tu cita por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.revolvergaraje.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://www.revolvergaraje.com/",
    siteName: "Revolver Garaje",
    type: "website",
    locale: "es_MX",
  },
};

// GTM se activa solo cuando existe la variable de entorno (Vercel).
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={zingRust.variable}>
      <body>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        {gtmId && <ClickTracking />}
      </body>
      {gtmId && (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      )}
    </html>
  );
}
