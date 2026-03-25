import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Image
              src="/logo_text.png"
              alt="Revolver Garaje"
              width={140}
              height={50}
              className={styles.logo}
              style={{ objectFit: "contain" }}
            />
            <p className={styles.tagline}>
              Donde la confianza<br />se construye sobre ruedas.
            </p>
          </div>

          <div className={styles.links}>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#resenas">Reseñas</a>
            <a href="#contacto">Ubicación</a>
          </div>

          <div className={styles.contact}>
            <a
              href="https://wa.me/527225663204"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.wa}
            >
              WhatsApp: (722) 566-3204
            </a>
            <p>Av. Cuauhtémoc 238, Toluca, Méx.</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Revolver Garaje × Maddox Agency</span>
          <div className={styles.legal}>
            <a href="#">Aviso de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
