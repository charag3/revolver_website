import hero from "./Hero.module.css";
import styles from "./Escenas.module.css";
import Carrusel from "./Carrusel";

const WA = "https://wa.me/527225663204";
const TEL = "tel:+527225663204";

function Escena({ id, lado, vertical = "medio", ancho, children }: {
  id?: string; lado: "izq" | "der" | "centro"; vertical?: "arriba" | "medio"; ancho?: boolean; children: React.ReactNode;
}) {
  return (
    <section id={id} data-escena className={`${styles.escena} ${styles[lado]} ${ancho ? styles.ancho : ""}`}>
      <div className={`${styles.pin} ${styles[vertical]}`}>{children}</div>
    </section>
  );
}

function Servicio({ tag, titulo, desc, puntos }: { tag: string; titulo: string; desc: string; puntos: string[] }) {
  return (
    <div className={styles.texto}>
      <div className={styles.cab}>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.titulo}>{titulo}</h2>
      </div>
      <div className={styles.det}>
        <p className={styles.desc}>{desc}</p>
        <ul className={styles.lista}>{puntos.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </div>
  );
}

const resenas = [
  { a: "Andrea H.", m: "Yamaha MT-03", t: "Desde que mandas mensaje y llegas al lugar te hacen sentir en confianza, el chico que te recibe muy amable te explica lo que se debe hacer y siempre al tanto de los detalles que le pides que revise…" },
  { a: "Eduardo G.", m: "KTM Duke 200", t: "Excelente atención y trato por parte del personal, te explican las cosas de manera clara precisa y con paciencia, recomiendo este lugar para un buen servicio." },
  { a: "Daniel C.", m: "Bajaj Pulsar NS 200", t: "Muy recomendado, explican todo por detalle muy buena comunicación y un excelente servicio rapidez y eficacia, en cuanto a costos igual muy accesibles." },
];

const porQue = [
  { t: "Stock inmediato multimarca", b: "A minutos del CEDIS Bajaj en Parque Toluca 2000 y con vínculos directos con distribuidores Vento y KTM. La pieza que necesitas llega antes que en cualquier otro taller del Estado de México." },
  { t: "Solo piezas genuinas", b: "No instalamos imitaciones. Cada refacción es original de fábrica, con la documentación que la respalda. Tu garantía de fabricante se mantiene intacta." },
  { t: "Técnicos por modelo", b: "Nuestros mecánicos están entrenados por marca y modelo: diagnósticos más rápidos, menos errores y tu moto lista el mismo día." },
];

export default function Escenas() {
  return (
    <>
      {/* C1 — faro. Texto a la izquierda; el faro queda al lado derecho */}
      <Escena id="inicio" lado="izq" vertical="medio" ancho>
        <div className={`${hero.copy} ${styles.texto}`}>
          <div className={styles.cab}>
            <span className={hero.preheader}>Toluca, Méx.</span>
            <h1 className={hero.title}>Taller de motos <br />en <span className={hero.accent}>Toluca.</span></h1>
          </div>
          <p className={`${hero.subtitle} ${styles.det}`}>
            Especialista certificado: <strong>KTM, Bajaj, Vento y Alta Cilindrada.</strong> <br className={styles.soloEscritorio} />
            <span className={styles.soloEscritorio}>Atención profesional en <strong>Metepec, Lerma y Zinacantepec.</strong></span>
          </p>
        </div>
        <div className={`${styles.heroAcc} ${hero.copy}`}>
          <div className={hero.actions}>
            <a href={WA} data-ubicacion="hero" target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Cita</a>
            <a href={TEL} data-ubicacion="hero" className={hero.linkSec}>Llamar →</a>
          </div>
          <div className={`${hero.brands} ${styles.soloEscritorio}`}>{["BAJAJ", "VENTO", "KTM", "Y MÁS"].map((b) => <span key={b} className={hero.pill}>{b}</span>)}</div>
        </div>
      </Escena>

      {/* C2 — manubrio y tablero. Texto a la derecha */}
      <Escena id="servicios" lado="der" vertical="medio">
        <Servicio tag="Sin adivinanzas" titulo="Diagnóstico técnico" desc="Scanner OBD y diagnóstico manual por técnico especialista. Sin cobros innecesarios."
          puntos={["Diagnóstico electrónico por modelo", "Revisión de motor y transmisión", "Detección de fallas eléctricas", "Informe técnico sin costo extra"]} />
      </Escena>

      {/* C3 — motor. Texto a la derecha */}
      <Escena lado="der" vertical="medio">
        <Servicio tag="Servicio completo" titulo="Mantenimiento preventivo" desc="Afinación completa de 20 puntos para Bajaj, Vento, KTM y más, sin importar los kilómetros que acumule."
          puntos={["Cambio de aceite, bujía y filtros", "Limpieza de carburador / inyección", "Limpieza y lubricación de cadena", "Revisión de frenos, luces y tornillería"]} />
      </Escena>

      {/* C4 — ruedas y escape. Texto a la izquierda */}
      <Escena lado="izq" vertical="medio">
        <Servicio tag="Stock inmediato" titulo="Refacciones y accesorios" desc="Piezas originales en stock o en 24-48 hrs para los modelos más populares del mercado en Toluca."
          puntos={["Kits de tracción y frenos originales", "Sistemas de escape y escape deportivo", "Iluminación LED y protecciones", "Accesorios de viaje y touring"]} />
      </Escena>

      {/* C5 — moto completa. Título arriba a la izquierda y 3 tarjetas abajo */}
      <Escena id="nosotros" lado="izq" vertical="arriba">
        <div className={styles.texto}>
          <span className={styles.tag}>Por qué elegirnos</span>
          <h2 className={`${styles.titulo} ${styles.chico}`}>El taller que conoce tu moto</h2>
        </div>
        <Carrusel className={styles.abajo}>
          {porQue.map((c) => <div key={c.t} className={styles.card}><h3>{c.t}</h3><p>{c.b}</p></div>)}
        </Carrusel>
      </Escena>

      {/* C6 — perfil. Calificación arriba y tarjetas de reseñas translúcidas desde la mitad de la moto */}
      <Escena id="resenas" lado="centro" vertical="arriba">
        <div className={styles.texto}>
          <div className={styles.rating}>
            <span className={styles.score}>4.8</span>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.autor}>+90 reseñas en Google</span>
          </div>
          <h2 className={styles.titulo}>Confianza que ruge en Toluca</h2>
        </div>
        <Carrusel className={styles.abajo}>
          {resenas.map((r) => (
            <figure key={r.a} className={`${styles.card} ${styles.resena}`}>
              <blockquote>“{r.t}”</blockquote>
              <figcaption><strong>{r.a}</strong> · {r.m}</figcaption>
            </figure>
          ))}
        </Carrusel>
        <a href="https://g.page/r/CRrDGnn4DcdLEAE/review" target="_blank" rel="noopener noreferrer" className={`${hero.linkSec} ${styles.escribir}`}>Escribir reseña →</a>
      </Escena>

      {/* C7 — moto armada, 3/4 frontal. Texto a la izquierda */}
      <Escena id="contacto" lado="izq" vertical="medio">
        <div className={styles.texto}>
          <div className={styles.cab}>
            <span className={styles.tag}>Visítanos</span>
            <h2 className={styles.titulo}>Visita el <em>Cuartel</em></h2>
          </div>
          <div className={styles.det}>
          <p className={styles.dato}><strong>Av. Cuauhtémoc 238</strong>, El Carmen Totoltepec, Santa María Totoltepec, CP 50240, Toluca, Méx.</p>
          <p className={styles.dato}>Lunes a viernes 9:00–19:00 · Sábados 9:00–16:00</p>
          <div className={styles.acciones}>
            <a href={WA} data-ubicacion="contacto" target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar cita por WhatsApp</a>
            <a href={TEL} data-ubicacion="contacto" className={hero.linkSec}>O llama al 722 566 3204 →</a>
          </div>
        </div>
        </div>
        </Escena>

      <section id="ubicacion" className={styles.mapa}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.0517467838545!2d-99.593971!3d19.298411899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8b60b00a8279%3A0x4bc70df8791ac31a!2sRevolver%20Garaje!5e1!3m2!1ses-419!2smx!4v1774411452802!5m2!1ses-419!2smx"
          allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Revolver Garaje en Google Maps" />
      </section>
    </>
  );
}
