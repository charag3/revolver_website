import styles from "./Servicios.module.css";

const services = [
  {
    tag: "Servicio completo",
    title: "Mantenimiento Preventivo",
    desc: "Afinación completa de 20 puntos para Bajaj, Vento, KTM y más — sin importar los kilómetros que acumule.",
    bullets: [
      "Cambio de aceite, bujía y filtros",
      "Limpieza de carburador / inyección",
      "Limpieza y lubricación de cadena",
      "Revisión de frenos, luces y tornillería",
    ],
  },
  {
    tag: "Stock inmediato",
    title: "Refacciones y Accesorios",
    desc: "Piezas originales en stock o en 24-48 hrs para los modelos más populares del mercado en Toluca.",
    bullets: [
      "Kits de tracción y frenos originales",
      "Sistemas de escape y escape deportivo",
      "Iluminación LED y protecciones",
      "Accesorios de viaje y touring",
    ],
  },
  {
    tag: "Sin adivinanzas",
    title: "Diagnóstico Técnico",
    desc: "Scanner OBD y diagnóstico manual por técnico especialista. Sin cobros innecesarios.",
    bullets: [
      "Diagnóstico electrónico por modelo",
      "Revisión de motor y transmisión",
      "Detección de fallas eléctricas",
      "Informe técnico sin costo extra",
    ],
  },
];

export default function Servicios() {
  return (
    <section className={styles.section} id="servicios">
      <div className="container">
        <div className="section-header">
          <span className="badge">Nuestras especialidades</span>
          <h2>Servicio profesional<br />para todas las marcas</h2>
        </div>

        <div className={`grid-3 ${styles.grid}`}>
          {services.map((s) => (
            <div key={s.title} className={`card ${styles.card}`}>
              <span className={styles.tag}>{s.tag}</span>
              <h3 style={{ color: "var(--primary)", marginBottom: "8px" }}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <ul className={styles.bullets}>
                {s.bullets.map((b) => (
                  <li key={b}>
                    <span className={styles.dot} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
