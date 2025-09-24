// src/lib/gtag.ts
export const GA_ID: string = process.env.NEXT_PUBLIC_GA_ID ?? "";

// gtag の最低限型
type GtagCommand = "js" | "config" | "event" | "set";
type Gtag = (...args: [GtagCommand, ...unknown[]]) => void;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: Gtag;
  }
}

// PV計測
export const pageview = (url: string): void => {
  if (typeof window === "undefined" || !GA_ID || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
};

// 任意イベント
export const gaEvent = (
  action: string,
  params: Record<string, unknown> = {}
): void => {
  if (typeof window === "undefined" || !GA_ID || !window.gtag) return;
  window.gtag("event", action, params);
};
