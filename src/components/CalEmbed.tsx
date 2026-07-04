"use client";

// Cal.com booking modal, loaded lazily. The embed script is only fetched the
// first time a visitor actually clicks a booking CTA, so it never weighs on
// the initial page load of any route (keeps Lighthouse clean on the new pages).

const DEFAULT_CAL_LINK = "alvaro-de-la-fuente-dp0fx0/cork-fountain-diagnostic";

let initialized = false;

function ensureCal() {
  if (typeof window === "undefined") return;
  const w = window as Window & { Cal?: any };

  if (!w.Cal) {
    (function (C: Window & { Cal?: any }, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal!;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            script.async = true;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = args[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
  }

  if (!initialized) {
    (window as any).Cal("init", { origin: "https://cal.com" });
    (window as any).Cal("ui", {
      theme: "dark",
      cssVarsPerTheme: {
        dark: {
          "cal-brand": "#7dd3fc",
        },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
    initialized = true;
  }
}

// Kept for backward compatibility; no longer required to mount anywhere.
export default function CalEmbed() {
  return null;
}

export function openCalModal(calLink: string = DEFAULT_CAL_LINK) {
  if (typeof window === "undefined") return;
  ensureCal();
  (window as any).Cal("modal", {
    calLink,
    config: {
      layout: "month_view",
      theme: "dark",
    },
  });
}
