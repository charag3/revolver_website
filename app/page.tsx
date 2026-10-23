import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotoFondo from "@/components/MotoFondo";
import Escenas from "@/components/Escenas";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const SITE = "https://www.revolvergaraje.com";
const GOOGLE_PROFILE = "https://www.google.com/maps?cid=5460348434044863258";

// Mismos datos que el perfil de Google (nombre, dirección, teléfono, horario).
// Sin aggregateRating: Google no muestra estrellas que el negocio pone sobre sí mismo.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": `${SITE}/#organization`,
      name: "Revolver Garaje",
      description:
        "Taller de motos en Toluca: mantenimiento, diagnóstico y refacciones originales para Bajaj, KTM, Vento y alta cilindrada.",
      url: `${SITE}/`,
      logo: `${SITE}/logo_escudo.png`,
      image: `${SITE}/opengraph-image.jpg`,
      telephone: "+52 722 566 3204",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Cuauhtémoc 238, El Carmen Totoltepec",
        addressLocality: "Santa María Totoltepec, Toluca",
        addressRegion: "Estado de México",
        postalCode: "50240",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.2984119,
        longitude: -99.593971,
      },
      hasMap: GOOGLE_PROFILE,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      areaServed: ["Toluca", "Metepec", "Lerma", "Zinacantepec"].map((name) => ({
        "@type": "City",
        name,
      })),
      sameAs: [GOOGLE_PROFILE],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "Revolver Garaje",
      url: `${SITE}/`,
      inLanguage: "es-MX",
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE}/#webpage`,
      url: `${SITE}/`,
      name: "Taller de motos en Toluca, Bajaj y KTM | Revolver Garaje",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#organization` },
      inLanguage: "es-MX",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <MotoFondo />
      <Navbar />
      <Escenas />
      <Footer />
    </main>
  );
}
