import Link from "next/link";
import type { Metadata } from "next";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Página no encontrada | Revolver Garaje",
};

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <div>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>
          No encontramos esta página. Pudo moverse o ya no existe.
        </p>
        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
