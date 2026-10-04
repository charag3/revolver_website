import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Autoridad from "@/components/Autoridad";
import Servicios from "@/components/Servicios";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Revolver Garaje",
  url: "https://www.revolvergaraje.com/",
  logo: "https://www.revolvergaraje.com/logo_escudo.png",
  telephone: "+52 722 566 3204",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Cuauhtémoc 238",
    addressLocality: "El Carmen Totoltepec (San Pedro), Toluca",
    addressRegion: "Estado de México",
    postalCode: "50226",
    addressCountry: "MX",
  },
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
      <Navbar />
      <Hero />
      <Autoridad />
      <Servicios />
      <Testimonios />
      <Contacto />
      <Footer />
    </main>
  );
}
