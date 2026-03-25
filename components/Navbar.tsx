"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo_text.png"
            alt="Revolver Garaje — Taller Multimarca Toluca"
            width={180}
            height={60}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          <Link href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</Link>
          <Link href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link href="#resenas" onClick={() => setMenuOpen(false)}>Reseñas</Link>
          <Link href="#contacto" onClick={() => setMenuOpen(false)}>Ubicación</Link>
        </div>

        <div className={styles.actions}>
          <a
            href="https://wa.me/527225663204"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Cita
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
