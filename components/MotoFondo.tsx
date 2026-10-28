"use client";

import { useEffect, useRef } from "react";

// Fondo animado: una moto que se arma mientras se hace scroll en toda la página.
// Secuencia de cuadros (12 fps) en un canvas fijo detrás del contenido.
// Cuadros de reposo (cuadro del animatic a 24 fps → índice a 12 fps).
const TOTAL = 252;
// Cuadros (a 24 fps) donde la moto descansa en cada composición. Escritorio = video real calibrado
// contra los cuadros clave; celular = animatic del blocking (hasta tener el video vertical).
const REST_D = [48, 115, 202, 285, 363, 437, 485].map((f) => (f - 1) / 2);
const REST_M = [48, 120, 192, 264, 336, 408, 480].map((f) => (f - 1) / 2);
const HOLD = 0.22; // fracción del tramo entre escenas en que la moto se queda quieta

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

// Mapea el scroll (px) a un cuadro y a qué tan "quieta" está la moto en cada escena.
// anchors[i] = scroll en que la escena i queda centrada (la moto descansa ahí).
function mapScroll(y: number, anchors: number[], vh: number, REST: number[]) {
  const n = anchors.length;
  const vis = new Array(n).fill(0);
  // Antes de la primera escena: empuje inicial del faro (cuadros 0 → reposo C1)
  const a0 = Math.max(anchors[0], vh * 0.35);
  if (y <= a0) {
    vis[0] = 1;
    return { frame: REST[0] * clamp(y / a0), vis };
  }
  let i = 0;
  while (i < n - 2 && y >= anchors[i + 1]) i++;
  const len = anchors[i + 1] - anchors[i];
  const f = clamp((y - anchors[i]) / len);
  // Visibilidad del texto: 1 en la zona de reposo de cada extremo y se apaga en la transición
  const fade = (d: number) => clamp(1 - (d - HOLD) / 0.18);
  vis[i] = fade(f);
  vis[i + 1] = fade(1 - f);
  const t = smooth(clamp((f - HOLD) / (1 - 2 * HOLD)));
  let frame = REST[i] + (REST[i + 1] - REST[i]) * t;
  if (i === n - 2 && f > 1 - HOLD) frame = REST[n - 1] + (TOTAL - 1 - REST[n - 1]) * ((f - (1 - HOLD)) / HOLD);
  return { frame, vis };
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
    const order = [...(portrait ? REST_M : REST_D).map(Math.round), ...Array.from({ length: TOTAL }, (_, k) => k)];
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

    let scenes: HTMLElement[] = [];
    let anchors: number[] = [];
    const measure = () => {
      scenes = [...document.querySelectorAll<HTMLElement>("[data-escena]")];
      const vh = window.innerHeight;
      anchors = scenes.map((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        return top + el.offsetHeight / 2 - vh / 2;
      });
    };
    const onScroll = () => {
      if (!anchors.length) return;
      const { frame, vis } = mapScroll(window.scrollY, anchors, window.innerHeight, portrait ? REST_M : REST_D);
      target = frame;
      scenes.forEach((el, k) => {
        const pin = el.firstElementChild as HTMLElement | null;
        if (pin) pin.style.setProperty("--vis", String(vis[k] ?? 0));
      });
    };

    const tick = () => {
      shown += (target - shown) * 0.2; // inercia suave
      if (Math.abs(target - shown) < 0.02) shown = target;
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      resize();
      measure();
      onScroll();
    };
    resize();
    measure();
    onScroll();
    shown = target;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    raf = requestAnimationFrame(tick);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, []);

  return <canvas ref={ref} className="moto-fondo" aria-hidden="true" />;
}
