/* Temporary check: measure rendered footer geometry vs the Zeplin S10 specs. */
const { chromium } = require("playwright");

const SELECTORS = [
  "footer",
  ".footer__main",
  ".footer__brand",
  ".footer__logo",
  ".footer__name",
  ".footer__tagline",
  ".footer__contact",
  ".footer__contact h3",
  ".footer__row",
  ".footer__row--linkedin",
  ".footer__row--linkedin svg",
  ".footer__bar",
  ".footer__bar svg",
  ".footer__bar span",
];

const EXPECT = {
  desktop: {
    footer: { w: 1440, h: 473 },
    ".footer__logo": { x: 80, y: 100, w: 62, h: 62 },
    ".footer__name": { x: 80, y: 173, h: 26 },
    ".footer__tagline": { x: 80, y: 223, w: 415, h: 56 },
    ".footer__contact h3": { right: 1360, y: 129, h: 26 },
    ".footer__row": { right: 1360, y: 171, h: 28 },
    ".footer__row--linkedin": { right: 1360, y: 215, h: 28 },
    ".footer__bar": { x: 0, y: 397, w: 1440 },
    ".footer__bar svg": { x: 80, y: 423, w: 24, h: 24 },
    ".footer__bar span": { x: 112, y: 421, w: 298, h: 28 },
  },
  mobile: {
    footer: { w: 402, h: 355 },
    ".footer__logo": { x: 20, y: 24, w: 46, h: 46 },
    ".footer__name": { x: 20, y: 81, h: 36 },
    ".footer__tagline": { x: 20, y: 133, w: 362, h: 44 },
    ".footer__contact h3": { x: 20, y: 201, h: 36 },
    ".footer__row": { x: 20, y: 245, h: 22 },
    ".footer__row--linkedin": { x: 20, y: 275, h: 24 },
    ".footer__bar": { x: 0, y: 323, w: 402 },
    ".footer__bar svg": { x: 20, y: 331, w: 16, h: 16 },
    ".footer__bar span": { x: 44, y: 331, w: 172, h: 16 },
  },
};

const MEASURE = (selectors) => {
  const f = document.querySelector(".footer");
  const fr = f.getBoundingClientRect();
  const out = {};
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (!el) {
      out[sel] = "MISSING";
      continue;
    }
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    out[sel] = {
      x: +(r.left - fr.left).toFixed(1),
      y: +(r.top - fr.top).toFixed(1),
      right: +(r.right - fr.left).toFixed(1),
      w: +r.width.toFixed(1),
      h: +r.height.toFixed(1),
      font: cs.fontSize + "/" + cs.lineHeight + " w" + cs.fontWeight,
      color: cs.color,
      gap: cs.gap || "",
      pad: cs.padding || "",
      border: cs.borderTopWidth + " " + cs.borderTopColor,
      radius: cs.borderRadius,
      text: (el.textContent || "").trim().slice(0, 24),
    };
  }
  const prev = f.previousElementSibling
    ? f.previousElementSibling.getBoundingClientRect()
    : null;
  out["*gap-above"] = prev
    ? +(fr.top - prev.bottom).toFixed(1)
    : "n/a";
  out["*page-scroll-width"] = document.documentElement.scrollWidth;
  return out;
};

(async () => {
  const browser = await chromium.launch();
  for (const cfg of [
    { label: "desktop", width: 1440, height: 900 },
    { label: "mobile", width: 402, height: 875 },
  ]) {
    const page = await browser.newPage({
      viewport: { width: cfg.width, height: cfg.height },
    });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.locator(".footer").scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    const m = await page.evaluate(MEASURE, SELECTORS);
    const exp = EXPECT[cfg.label];
    console.log(
      "\n===== " + cfg.label + " @ " + cfg.width + "px ====="
    );
    for (const sel of SELECTORS) {
      const a = m[sel];
      const e = exp[sel] || {};
      if (a === "MISSING") {
        console.log("MISSING ELEMENT: " + sel);
        continue;
      }
      const deltas = [];
      for (const k of ["x", "y", "right", "w", "h"]) {
        if (e[k] !== undefined) {
          const d = +(a[k] - e[k]).toFixed(1);
          deltas.push(k + "=" + (d > 0 ? "+" : "") + d);
        }
      }
      console.log(
        sel.padEnd(26) +
          " x=" + String(a.x).padStart(6) +
          " y=" + String(a.y).padStart(6) +
          " right=" + String(a.right).padStart(6) +
          " w=" + String(a.w).padStart(6) +
          " h=" + String(a.h).padStart(5) +
          "  Δ[" + deltas.join(" ") + "]" +
          "\n    " + a.font + " | " + a.color + " | gap=" + a.gap +
          " | pad=" + a.pad + " | borderTop=" + a.border +
          " | radius=" + a.radius + " | \"" + a.text + "\""
      );
    }
    console.log("gap above footer: " + m["*gap-above"]);
    console.log("document scrollWidth: " + m["*page-scroll-width"]);
    await page.close();
  }
  await browser.close();
})();
