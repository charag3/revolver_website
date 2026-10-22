"use client";

import { useEffect } from "react";

// Convierte los clics en enlaces de contacto en eventos de dataLayer con los
// nombres estándar de medición (whatsapp_click, phone_click, email_click).
// GTM los toma como "evento personalizado" y los manda a GA4.
// `ubicacion` sale del atributo data-ubicacion más cercano al enlace.

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

function eventFor(href: string): string | null {
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) return "whatsapp_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  return null;
}

export default function ClickTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const event = eventFor(link.getAttribute("href") ?? "");
      if (!event) return;
      const ubicacion =
        link.closest("[data-ubicacion]")?.getAttribute("data-ubicacion") ?? "pagina";
      const w = window as DataLayerWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event, ubicacion });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
