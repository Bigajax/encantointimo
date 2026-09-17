/* Captura uma página em PNG. Rola até o pé antes de fotografar, para
   as imagens preguiçosas carregarem. Precisa do puppeteer-core (só
   está instalado na Aurum_sagrado: copie o script para lá ou rode
   `npm i --no-save puppeteer-core` aqui).
     node scripts/capturar.mjs http://localhost:3140/ saida.png 390 844 full */
import puppeteer from "puppeteer-core";
const [url, out, w, h, full] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: [`--window-size=${w},${h}`] });
const p = await b.newPage();
await p.setViewport({ width: Number(w), height: Number(h), deviceScaleFactor: 2, isMobile: Number(w) < 600, hasTouch: Number(w) < 600 });
await p.goto(url, { waitUntil: "networkidle0", timeout: 90000 });
if (full === "full") {
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 1200));
}
await new Promise((r) => setTimeout(r, 800));
await p.screenshot({ path: out, fullPage: full === "full" });
await b.close();
console.log("ok", out);
