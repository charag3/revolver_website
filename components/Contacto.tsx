import styles from "./Contacto.module.css";

export default function Contacto() {
  return (
    <section className={styles.section} id="contacto">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <span className="badge" style={{ borderColor: "var(--primary)", color: "var(--primary)" }}>
              Visítanos
            </span>
            <h2>
              Visita el<br />
              <span style={{ color: "var(--primary)" }}>Cuartel</span>
            </h2>
            <p className={styles.address}>
              Av. Cuauhtémoc 238, <br />
              <strong>El Carmen Totoltepec (San Pedro)</strong>, CP 50226, Toluca, Méx.
            </p>
            <p className={styles.landmarks}>
              📍 Cerca del <strong>Parque Industrial Exportec</strong> y el <strong>Aeropuerto de Toluca</strong>, a un paso de Paseo Tollocan.
            </p>
            <p className={styles.hours}>
              <strong>Lunes – Viernes:</strong> 9:00 AM – 7:00 PM<br />
              <strong>Sábados:</strong> 9:00 AM – 4:00 PM
            </p>
            <a
              href="https://wa.me/527225663204"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-primary btn-whatsapp ${styles.cta}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Cita por WhatsApp
            </a>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.0517467838545!2d-99.593971!3d19.298411899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8b60b00a8279%3A0x4bc70df8791ac31a!2sRevolver%20Garaje!5e1!3m2!1ses-419!2smx!4v1774411452802!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Revolver Garaje en Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
