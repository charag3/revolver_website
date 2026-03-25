import styles from "./Autoridad.module.css";

const cards = [
  {
    icon: "⚡",
    accent: "var(--accent)",
    title: "Stock Inmediato Multimarca",
    body: "Estamos a minutos del CEDIS Bajaj en Parque Toluca 2000 y con vínculos directos con distribuidores Vento y KTM. La pieza que necesitas llega antes que en cualquier otro taller del Estado de México.",
  },
  {
    icon: "🔩",
    accent: "var(--primary)",
    title: "Solo Piezas Genuinas",
    body: "No instalamos imitaciones. Cada refacción que ponemos en tu moto es original de fábrica, con la documentación que lo respalda. Tu garantía de fabricante se mantiene intacta.",
  },
  {
    icon: "🏍️",
    accent: "var(--secondary)",
    title: "Técnicos por Modelo",
    body: "Nuestros mecánicos no son generalistas — están entrenados por marca y modelo. Eso se traduce en diagnósticos más rápidos, menos errores y tu moto lista el mismo día.",
  },
];

export default function Autoridad() {
  return (
    <section className={styles.section} id="nosotros">
      <div className="container">
        <div className="section-header">
          <span className="badge">Por qué elegirnos</span>
          <h2>El taller que conoce tu moto,<br />sin importar la marca</h2>
        </div>

        <div className={`grid-3 ${styles.grid}`}>
          {cards.map((c) => (
            <div
              key={c.title}
              className={`card ${styles.card}`}
              style={{ borderTop: `3px solid ${c.accent}` }}
            >
              <div className={styles.icon}>{c.icon}</div>
              <h3 style={{ color: c.accent }}>{c.title}</h3>
              <div className="line-accent" />
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
