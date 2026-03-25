import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Autoridad from "@/components/Autoridad";
import Servicios from "@/components/Servicios";
import Testimonios from "@/components/Testimonios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
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
