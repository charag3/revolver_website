"use client";

import { useEffect, useRef } from "react";

// Fondo animado: una moto que se arma mientras se hace scroll en toda la página.
// Secuencia de cuadros (12 fps) en un canvas fijo detrás del contenido.
// Cuadros de reposo (cuadro del animatic a 24 fps → índice a 12 fps).
const TOTAL = 252;
const REST = [48, 120, 192, 264, 336, 408, 480].map((f) => (f - 1) / 2);
const HOLD = 0.18; // fracción de cada tramo en que la moto se queda quieta

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

// Progreso de scroll (0–1) → cuadro. La moto descansa en cada composición y
// se anima entre ellas, para que el texto se lea con la moto quieta.
function frameAt(p: number): number {
  const slots = REST.length - 1;
  const u = clamp(p) * slots;
  const i = Math.min(slots - 1, Math.floor(u));
  const f = u - i;
  if (i === 0 && f < HOLD) return REST[0] * (f / HOLD); // empuje inicial del faro
  if (i === slots - 1 && f > 1 - HOLD)
    return REST[slots] + (TOTAL - 1 - REST[slots]) * ((f - (1 - HOLD)) / HOLD);
  const t = smooth(clamp((f - HOLD) / (1 - 2 * HOLD)));
  return REST[i] + (REST[i + 1] - REST[i]) * t;
}

export default function MotoFondo() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const portrait = window.innerHeight > window.innerWidth;
    const dir = portrait ? "m" : "d";
    const frames: (HTMLImageElement | undefined)[] = new Array(TOTAL);
    let target = 0;
    let shown = 0;
    let raf = 0;
    let alive = true;

    // Carga progresiva: primero cuadros de reposo y saltos grandes, luego el resto.
    const order = [...REST.map(Math.round), ...Array.from({ length: TOTAL }, (_, k) => k)];
    const queue = [...new Set(order)];
    let next = 0;
    const loadNext = () => {
      if (!alive || next >= queue.length) return;
      const k = queue[next++];
      const img = new Image();
      img.onload = () => {
        frames[k] = img;
        loadNext();
      };
      img.onerror = loadNext;
      img.src = `/moto/${dir}/${String(k).padStart(3, "0")}.webp`;
    };
    for (let c = 0; c < 4; c++) loadNext();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
    };

    const nearest = (k: number) => {
      for (let d = 0; d < TOTAL; d++) {
        const a = frames[Math.round(k) - d];
        if (a) return a;
        const b = frames[Math.round(k) + d];
        if (b) return b;
      }
      return undefined;
    };

    const draw = () => {
      const img = nearest(shown);
      if (!img) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight); // cover
      const w = img.naturalWidth * s;
      const h = img.naturalHeight * s;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = frameAt(max > 0 ? window.scrollY / max : 0);
    };

    const tick = () => {
      shown += (target - shown) * 0.2; // inercia suave
      if (Math.abs(target - shown) < 0.02) shown = target;
      draw();
      raf = requestAnimationFrame(tick);
    };

    resize();
    onScroll();
    shown = target;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      resize();
      onScroll();
    });
    raf = requestAnimationFrame(tick);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <canvas ref={ref} className="moto-fondo" aria-hidden="true" />;
}
