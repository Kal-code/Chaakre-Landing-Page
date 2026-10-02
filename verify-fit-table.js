/**
 * Verifies the mobile fit-comparison table:
 *  - both columns are the design's 212px (equal widths)
 *  - the table is horizontally scrollable (not clipped), scrolls fully right
 *    and back left
 *  - no page-level horizontal scrollbar; gutters stay 20px (mobile) / 80px (desktop)
 *
 * Usage: node verify-fit-table.js   (expects the dev server on :3000)
 */
const { chromium } = require("playwright");

const WIDTHS = [360, 390, 402, 414, 464, 768, 1440];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 402, height: 1000 } });

  // Wait until the dev server has compiled and served the page (retry loop).
  let ready = false;
  for (let i = 0; i < 25 && !ready; i++) {
    try {
      await page.goto("http://localhost:3000", { waitUntil: "load", timeout: 8000 });
      ready = await page.evaluate(() => !!document.querySelector(".fit__scroller"));
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

  let failures = 0;
  const fail = (msg) => {
    failures++;
    console.log(`  FAIL  ${msg}`);
  };

  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 1000 });
    await page.waitForTimeout(350);
    console.log(`\n=== ${width}px`);

    const d = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const row = document.querySelector(".fit__row");
      const cells = [...row.children].map((c) => c.getBoundingClientRect());
      const card = document.querySelector(".fit__card").getBoundingClientRect();
      const scr = document.querySelector(".fit__scroller");
      const scrRect = scr.getBoundingClientRect();
      const cont = document.querySelector(".fit .container");
      const contRect = cont.getBoundingClientRect();
      const cs = getComputedStyle(cont);
      const gutterL = contRect.left + (parseFloat(cs.paddingLeft) || 0);
      const gutterR = vw - (contRect.right - (parseFloat(cs.paddingRight) || 0));
      return {
        vw,
        col1: cells[0].width,
        col2: cells[1].width,
        cardW: card.width,
        cardL: card.left,
        scrollable: scr.scrollWidth > scr.clientWidth,
        scrollW: scr.scrollWidth,
        clientW: scr.clientWidth,
        scrollH: scr.scrollHeight,
        clientH: scr.clientHeight,
        scrB: scrRect.bottom,
        cardB: card.bottom,
        pageOverflow:
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
        gutterL,
        gutterR,
      };
    });

    // 1. columns equal (and exactly the design's 212px at 402)
    if (near(d.col1, d.col2, 0.6)) ok(`columns equal: ${d.col1.toFixed(1)} / ${d.col2.toFixed(1)}`);
    else fail(`columns NOT equal: ${d.col1.toFixed(1)} / ${d.col2.toFixed(1)}`);
    if (width === 402) {
      if (near(d.col1, 212, 0.6)) ok(`402: left column = design 212px`);
      else fail(`402: left column ${d.col1.toFixed(1)} != 212`);
      if (near(d.cardW, 426, 1)) ok(`402: card border-box = 426px`);
      else fail(`402: card width ${d.cardW.toFixed(1)} != 426`);
      if (near(d.cardL, 19, 1)) ok(`402: card starts at design x19`);
      else fail(`402: card left ${d.cardL.toFixed(1)} != 19`);
    }

    // 2. scrollable below ~466px viewport, no scrollbar above
    const shouldScroll = width <= 464;
    if (shouldScroll && d.scrollable)
      ok(`scrollable: scrollWidth ${d.scrollW} > clientWidth ${d.clientW}`);
    else if (shouldScroll) fail(`expected scrollable: scroll=${d.scrollW} client=${d.clientW}`);
    if (!shouldScroll && !d.scrollable) ok(`no scrollbar needed (card fills content box)`);
    else if (!shouldScroll) fail(`unexpected scrollbar at ${width}px`);

    // 3. scroll fully right -> card right edge on the content edge; back -> x19
    if (shouldScroll) {
      const end = await page.evaluate(() => {
        const scr = document.querySelector(".fit__scroller");
        const cont = document.querySelector(".fit .container");
        scr.scrollLeft = scr.scrollWidth;
        const cs = getComputedStyle(cont);
        const contentR =
          cont.getBoundingClientRect().right - (parseFloat(cs.paddingRight) || 0);
        const delta =
          document.querySelector(".fit__card").getBoundingClientRect().right - contentR;
        scr.scrollLeft = 0;
        const cardL = document.querySelector(".fit__card").getBoundingClientRect().left;
        return { delta, cardL };
      });
      if (near(end.delta, 0, 2))
        ok(`scrolled right: card right edge = content edge (delta ${end.delta.toFixed(1)}px)`);
      else fail(`scrolled right: right-edge delta ${end.delta.toFixed(1)}px`);
      if (near(end.cardL, 19, 1)) ok(`scrolled back left: card at x${end.cardL.toFixed(1)}`);
      else fail(`after scroll back, card left = ${end.cardL.toFixed(1)}`);
    }

    // 4. no page-level horizontal scrollbar
    if (d.pageOverflow <= 1) ok(`no page overflow (${d.pageOverflow}px)`);
    else fail(`page overflows horizontally by ${d.pageOverflow}px`);

    // 5. gutters unchanged
    const exp = width <= 768 ? 20 : 80;
    if (near(d.gutterL, exp, 0.6) && near(d.gutterR, exp, 0.6))
      ok(`fit gutters ${d.gutterL}/${d.gutterR}px`);
    else fail(`fit gutters ${d.gutterL}/${d.gutterR}px != ${exp}`);

    // 6. scrollbar sits in the scroller's bottom padding (card not clipped)
    if (shouldScroll) {
      const room = d.scrB - d.cardB;
      const vScroll = d.scrollH - d.clientH;
      if (room >= 8) ok(`card bottom -> scroller bottom = ${room.toFixed(1)}px (scrollbar room)`);
      else fail(`only ${room.toFixed(1)}px below card for scrollbar`);
      if (vScroll <= 14) ok(`no meaningful vertical scroll in scroller (${vScroll}px)`);
      else fail(`scroller vertical overflow ${vScroll}px`);
    }

    // Screenshots of the fit section at 402px (initial + scrolled)
    if (width === 402) {
      await page.locator(".fit").screenshot({ path: "fit-402-initial.png" });
      await page.evaluate(() => {
        const scr = document.querySelector(".fit__scroller");
        scr.scrollLeft = scr.scrollWidth;
      });
      await page.locator(".fit").screenshot({ path: "fit-402-scrolled.png" });
      await page.evaluate(() => {
        document.querySelector(".fit__scroller").scrollLeft = 0;
      });
    }
  }

  await browser.close();
  console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
  process.exit(failures === 0 ? 0 : 1);
})();

  const ok = (msg) => console.log(`  ok    ${msg}`);
  const near = (a, b, tol) => Math.abs(a - b) <= tol;
