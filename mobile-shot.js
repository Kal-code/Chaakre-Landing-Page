const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath:
      'C:\\Users\\DELL\\AppData\\Local\\ms-playwright\\chromium_headless_shell-1234\\chrome-headless-shell-win64\\chrome-headless-shell.exe',
  });
  const context = await browser.newContext({
    viewport: { width: 402, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'comparison/site-mobile-full.png', fullPage: true });
  const h = await page.evaluate(() => document.body.scrollHeight);
  console.log('Render height:', h);
  const metrics = await page.evaluate(() => {
    const pick = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const y = window.scrollY;
      return { top: Math.round(r.top + y), height: Math.round(r.height) };
    };
    const heroTitle = pick('.hero__title');
    const heroSub = pick('.hero__sub');
    const heroCta = pick('.hero__cta-mobile');
    const heroCtaWrap = pick('.hero__cta-wrap');
    const funnel = pick('.hero__funnel-mobile');
    return {
      // hero
      header: pick('.site-header'),
      heroInner: pick('.hero__inner'),
      heroTitle,
      heroSub,
      heroSubGap: heroSub ? heroSub.top - heroTitle.top - heroTitle.height : null,
      heroCta,
      heroCtaGap: heroCta ? heroCta.top - heroSub.top - heroSub.height : null,
      funnel,
      funnelGap: funnel ? funnel.top - heroCta.top - heroCta.height : null,
      // letter
      letterCard: pick('.letter__card'),
      letterTitle: pick('.letter .section-title'),
      // footer
      footer: pick('.site-footer'),
    };
  });
  console.log(JSON.stringify(metrics, null, 2));
  await browser.close();
})();