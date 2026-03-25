import Image from "next/image";
import styles from "./Testimonios.module.css";

const reviews = [
  {
    stars: 5,
    text: "Desde que mandas mensaje y llegas al lugar te hacen sentir en confianza, el chico que te recibe muy amable te explica lo que se debe hacer y siempre al tanto de los detalles que le pides que revise, los demás del servicio súper amables también, me agrada que te vayan mandando fotos de cómo van progresando con tu moto súper contenta de traer mi moto aquí la dejan al 100",
    author: "Andrea H.",
    bike: "Yamaha MT-03",
    initial: "A",
    date: "Hace 1 semana"
  },
  {
    stars: 5,
    text: "Excelente atención y trato por parte del personal, te explican las cosas de manera clara precisa y con paciencia, recomiendo este lugar para un buen servicio.",
    author: "Eduardo G.",
    bike: "KTM Duke 200",
    initial: "E",
    date: "Hace 3 semanas"
  },
  {
    stars: 5,
    text: "Muy recomendado, explican todo por detalle muy buena comunicación y un excelente servicio rapidez y eficacia, en cuanto a costos igual muy accesibles. Si tienen la oportunidad de llevar su moto no la desaprovechen",
    author: "Daniel C.",
    bike: "Bajaj Pulsar NS 200",
    initial: "D",
    accent: true,
    date: "Hace 1 mes"
  },
];

export default function Testimonios() {
  return (
    <section className={styles.section} id="resenas">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.googleBadge}>
            <div className={styles.googleBrand}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.14-4.53z" fill="#EA4335"/>
              </svg>
              <span>Reseñas de Google</span>
            </div>
            <div className={styles.ratingInfo}>
              <span className={styles.score}>4.6</span>
              <div className={styles.starsStatic}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} className={i < 4 ? styles.full : styles.half}>★</span>
                ))}
              </div>
              <span className={styles.count}>(84 reseñas)</span>
            </div>
          </div>
          <h2 className={styles.title}>Confianza que ruge en Toluca</h2>
          <p className={styles.subtitle}>Lo que dicen nuestros clientes sobre la precisión y honestidad de nuestro taller.</p>
        </div>

        <div className={`grid-3 ${styles.grid}`}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`card ${styles.card} ${r.accent ? styles.featured : ""}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.authorInfo}>
                  <div className={styles.avatar}>{r.initial}</div>
                  <div className={styles.meta}>
                    <div className={styles.name}>{r.author}</div>
                    <div className={styles.date}>{r.date}</div>
                  </div>
                </div>
                <div className={styles.googleIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.14-4.53z" fill="#EA4335"/></svg>
                </div>
              </div>
              <div className={styles.stars}>
                {"★★★★★"}
              </div>
              <p className={styles.text}>&quot;{r.text}&quot;</p>
              <div className={styles.bikeTag}>{r.bike}</div>
            </div>
          ))}
        </div>

        <div className={styles.footerAction}>
          <a
            href="https://g.page/r/revolver-garaje/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Escribir Reseña
          </a>
        </div>
      </div>
    </section>
  );
}
