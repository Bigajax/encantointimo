/**
 * Gera o favicon e a imagem de compartilhamento da Encanto Íntimo a
 * partir das peças da logo em public/marca (recortadas do post "nossa
 * logo" do Instagram): app/icon.png (512) e app/apple-icon.png (180)
 * com o monograma branco sobre o vinho; public/og/site.jpg (1200x630)
 * com a logo inteira sobre o vinho e o babado no pé, o que aparece
 * quando alguém manda o link no WhatsApp.
 *
 *   node scripts/gerar-icones.mjs
 */
import fs from "node:fs";
import sharp from "sharp";

const VINHO = "#3a0a1a";
const PAPEL = "#fbf5f3";

async function icone(tamanho, destino) {
  const fundo = Buffer.from(`<svg width="${tamanho}" height="${tamanho}" viewBox="0 0 512 512"><rect width="512" height="512" rx="110" fill="${VINHO}"/></svg>`);
  const marca = await sharp("public/marca/monograma.png").resize({ height: Math.round(tamanho * 0.62) }).toBuffer();
  const m = await sharp(marca).metadata();
  await sharp(fundo)
    .composite([{ input: marca, left: Math.round((tamanho - m.width) / 2), top: Math.round((tamanho - m.height) / 2) }])
    .png()
    .toFile(destino);
  console.log(destino, tamanho);
}

async function og() {
  const L = 1200, A = 630, ONDA = 28;
  /* o babado: meias-luas de papel no pé do vinho */
  const ondas = Array.from({ length: Math.ceil(L / ONDA) + 1 }, (_, i) => `<circle cx="${i * ONDA + ONDA / 2}" cy="${A}" r="${ONDA / 2}" fill="${PAPEL}"/>`).join("");
  const fundo = Buffer.from(`<svg width="${L}" height="${A}"><rect width="${L}" height="${A}" fill="${VINHO}"/>${ondas}</svg>`);
  const logo = await sharp("public/marca/logo.png").resize({ height: 400 }).toBuffer();
  const m = await sharp(logo).metadata();
  fs.mkdirSync("public/og", { recursive: true });
  await sharp(fundo)
    .composite([{ input: logo, left: Math.round((L - m.width) / 2), top: Math.round((A - ONDA - m.height) / 2) }])
    .jpeg({ quality: 88 })
    .toFile("public/og/site.jpg");
  console.log("public/og/site.jpg", `${L}x${A}`);
}

await icone(512, "app/icon.png");
await icone(180, "app/apple-icon.png");
await og();
