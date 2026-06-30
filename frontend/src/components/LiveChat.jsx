import { useEffect } from "react";

/**
 * Loads the Tawk.to live-chat widget script once, after the page has
 * become interactive, so it doesn't block initial render/PageSpeed score.
 * Replace YOUR_PROPERTY_ID / YOUR_WIDGET_ID with the values from your
 * Tawk.to dashboard (Administration > Channels > Chat Widget).
 */
const TAWK_PROPERTY_ID = "YOUR_PROPERTY_ID";
const TAWK_WIDGET_ID = "YOUR_WIDGET_ID";

export default function LiveChat() {
  useEffect(() => {
    if (document.getElementById("tawk-script")) return;

    // Defer loading until the browser is idle so it never competes with
    // critical rendering work (helps protect the PageSpeed score).
    const load = () => {
      const s = document.createElement("script");
      s.id = "tawk-script";
      s.async = true;
      s.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
      s.charset = "UTF-8";
      s.setAttribute("crossorigin", "*");
      document.body.appendChild(s);
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(load, { timeout: 4000 });
    } else {
      setTimeout(load, 2500);
    }
  }, []);

  return null;
}
