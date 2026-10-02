/**
 * Measures the edge -> content spacing (the "gutter") the Zeplin design specifies
 * as 80px (1440 artboard, content 80..1360), for every page-level content box.
 *
 * Usage: node measure-gutters.js   (expects the dev/prod server on :3000)
 */
const { chromium } = require("playwright");

const WIDTHS = [360, 390, 402, 414, 768, 1440, 1920];
const PROBES = {
  container: ".site-header .container",
  headerBrand: ".brand",
  headerCta: ".cta-pill--header",
  questionsGrid: ".questions__grid",
  questionsCol1: ".questions__grid > div:first-child",
  questionsList: ".questions__list",
  testimonialCard: ".testimonial__card",
  fitCard: ".fit__card",
  offerCard: ".offer__card",
  footerGrid: ".footer__grid",
  heroFunnel: ".funnel-card",
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

  // Wait until the dev server has compiled and served the page (retry loop).
  let ready = false;
  for (let i = 0; i < 25 && !ready; i++) {
    try {
      await page.goto("http://localhost:3000", { waitUntil: "load", timeout: 8000 });
      ready = await page.evaluate(
        () => !!document.querySelector(".site-header") && !!document.querySelector(".offer__card")
      );
    } catch (e) {
      ready = false;
    }
    if (!ready) await page.waitForTimeout(1000);
  }
  if (!ready) {
    console.log("SERVER NOT READY");
    await browser.close();
    process.exit(1);
  }
  await page.waitForTimeout(500);

  const rows = [];
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 1000 });
    await page.waitForTimeout(400);
    const data = await page.evaluate((probes) => {
      const vw = document.documentElement.clientWidth;
      const out = { viewport: vw, boxes: {} };
      for (const [key, sel] of Object.entries(probes)) {
        const el = document.querySelector(sel);
        if (!el) {
          out.boxes[key] = null;
          continue;
        }
        const r = el.getBoundingClientRect();
        out.boxes[key] = {
          left: +r.left.toFixed(1),
          right: +(vw - r.right).toFixed(1),
          w: +r.width.toFixed(1),
        };
      }
      const t = document.querySelector(".questions__title");
      if (t) {
        const cs = getComputedStyle(t);
        const h = t.getBoundingClientRect().height;
        const lh = parseFloat(cs.lineHeight);
        out.questionsTitle = {
          font: cs.fontSize,
          lines: Math.round(h / lh),
          h: +h.toFixed(1),
        };
      }
      out.containers = [...document.querySelectorAll(".container")].map((el) => {
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        const pl = parseFloat(cs.paddingLeft) || 0;
        const pr = parseFloat(cs.paddingRight) || 0;
        const p = el.parentElement;
        return {
          sec: p && p.className ? String(p.className).trim().split(/\s+/)[0] : "?",
          left: +(r.left + pl).toFixed(1),
          right: +(vw - (r.right - pr)).toFixed(1),
          w: +(r.width - pl - pr).toFixed(1),
        };
      });
      return out;
    }, PROBES);
    rows.push({ width, ...data });
  }

  await browser.close();
  for (const r of rows) {
    console.log(`\n=== requested ${r.width}px (layout viewport ${r.viewport}px)`);
    for (const [k, v] of Object.entries(r.boxes)) {
      if (!v) {
        console.log(`  ${k.padEnd(16)} MISSING`);
        continue;
      }
      console.log(
        `  ${k.padEnd(16)} edge->content: ${String(v.left).padStart(6)}px left / ${String(v.right).padStart(6)}px right   width ${v.w}`
      );
    }
    if (r.questionsTitle) {
      console.log(`  questions title  font ${r.questionsTitle.font}  lines ${r.questionsTitle.lines}`);
    }
    if (r.containers) {
      for (const c of r.containers) {
        console.log(
          `  .container in ${c.sec.padEnd(24)} gutter L=${String(c.left).padStart(6)}  R=${String(
            c.right
          ).padStart(6)}   width ${c.w}`
        );
      }
    }
  }
})();
