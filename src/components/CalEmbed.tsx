"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    // Load Cal.com embed script
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
  }, []);

  return null;
}

export function openCalModal() {
  if (typeof window !== "undefined" && (window as any).Cal) {
    (window as any).Cal("modal", {
      calLink: "alvaro-de-la-fuente-dp0fx0/30min",
      config: {
        layout: "month_view",
        theme: "dark",
      },
    });
  }
}
