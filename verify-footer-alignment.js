/* temp: optical alignment check — icon ink centre vs the band the eye reads on the label.
   The rule used to be "always the x-height band" (baseline - xh/2). That only holds for a
   label with a descender to balance its ascenders ("tg@chaakre.com", "Copyright.", ...):
   there the visible band really is centred on the x-height band. A descender-less label
   ("LinkedIn") reads cap-top -> baseline instead, where the x-height target sits ~2px too
   low — that is what left the LinkedIn badge looking low. Chrome rounds actualBoundingBox*
   to whole px, so a >1.5px descent means the label really dips below the baseline. */
const { chromium } = require("playwright");

const MEASURE = () => {
  const ctx = document.createElement("canvas").getContext("2d");

  const xHeight = (cs) => {
    ctx.font = cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily;
    return ctx.measureText("x").actualBoundingBoxAscent;
  };

  const rows = [];
  const report = (el, label) => {
    const svg = el.querySelector("svg");
    const txt = el.querySelector("span");
    const cs = getComputedStyle(txt);
    const box = txt.getBoundingClientRect();
    ctx.font = cs.fontWeight + " " + cs.fontSize + " " + cs.fontFamily;
    const m = ctx.measureText(txt.textContent.trim());
    const lh = parseFloat(cs.lineHeight);
    const baseline = box.top + (lh - (m.fontBoundingBoxAscent + m.fontBoundingBoxDescent)) / 2 + m.fontBoundingBoxAscent;
    const xh = xHeight(cs);
    const cap = ctx.measureText("L").actualBoundingBoxAscent;
    const descends = m.actualBoundingBoxDescent > 1.5;
    // optical centre of the text line as the eye reads it
    const target = baseline - (descends ? xh : cap) / 2;
    const kids = [...svg.querySelectorAll("path,rect,circle,line")].map((k) => k.getBoundingClientRect());
    const iconCenter = (Math.min(...kids.map((k) => k.top)) + Math.max(...kids.map((k) => k.bottom))) / 2;
    rows.push({
      label,
      align: getComputedStyle(el).alignItems,
      rowH: +el.getBoundingClientRect().height.toFixed(1),
      lineH: lh,
      wrapped: box.height > lh + 0.5,
      xh: +xh.toFixed(2),
      band: descends ? "x-height" : "cap",
      // > 0 means the icon sits lower than the band the label reads on
      delta: +(iconCenter - target).toFixed(2),
      gapFirstTwo: null,
    });
  };

  document.querySelectorAll(".footer__row").forEach((el, i) =>
    report(el, el.classList.contains("footer__row--linkedin") ? "linkedin" : "email" + i)
  );
  document.querySelectorAll(".footer__bar").forEach((el) => report(el, "copyright"));

  // horizontal: icon right edge -> text left edge
  const gaps = [...document.querySelectorAll(".footer__row, .footer__bar")].map((el) => {
    const svg = el.querySelector("svg");
    const txt = el.querySelector("span");
    return +(txt.getBoundingClientRect().left - svg.getBoundingClientRect().right).toFixed(1);
  });

  return { rows, gaps, w: window.innerWidth, scrollW: document.documentElement.scrollWidth };
};

(async () => {
  const widths = [1440, 1280, 1120, 1024, 940, 880, 820, 780, 769, 768, 700, 600, 500, 430, 402, 380, 360, 320];
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let bad = 0;
  for (const w of widths) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.goto("http://localhost:3000", { waitUntil: "load" });
    await page.locator(".footer").scrollIntoViewIfNeeded();
    await page.waitForTimeout(120);
    const r = await page.evaluate(MEASURE);
    const line = r.rows
      .map((x) => x.label.padEnd(9) + " " + x.band.padEnd(9) + " a=" + x.align.slice(0, 6).padEnd(6) + " d=" + String(x.delta).padStart(6) + (x.wrapped ? " WRAP" : ""))
      .join(" | ");
    const off = r.rows.filter((x) => Math.abs(x.delta) > 0.75 || x.wrapped).length;
    bad += off;
    console.log(
      "w=" + String(w).padStart(4) +
        "  " + line +
        "   gaps=[" + r.gaps.join(", ") + "]" +
        (r.scrollW > w ? "  OVERFLOW" : "") +
        (off ? "   <-- needs work" : "   ok")
    );
  }
  console.log(bad === 0 ? "\nALL ROWS OPTICALLY ALIGNED (|delta| <= 0.75px)" : "\n" + bad + " row(s) still off");
  await browser.close();
})();
