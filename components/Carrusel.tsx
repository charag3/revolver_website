"use client";

import { useRef, useState } from "react";
import styles from "./Escenas.module.css";

// Tarjetas: cuadrícula en escritorio; en celular, carrusel lateral con tope por tarjeta y puntos.
export default function Carrusel({ children, className = "" }: { children: React.ReactNode[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const n = children.length;

  const onScroll = () => {
    const el = ref.current;
    if (!el || n < 2) return;
    const max = el.scrollWidth - el.clientWidth;
    setI(Math.round((el.scrollLeft / Math.max(1, max)) * (n - 1)));
  };

  return (
    <div className={`${styles.carrusel} ${className}`}>
      <div ref={ref} className={styles.cards} onScroll={onScroll}>{children}</div>
      <div className={styles.puntos} aria-hidden="true">
        {children.map((_, k) => <span key={k} className={k === i ? styles.puntoOn : styles.punto} />)}
      </div>
    </div>
  );
}
