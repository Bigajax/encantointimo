# Encanto Íntimo, vitrine digital

Site público + painel da loja para a **Encanto Íntimo** (@encant0.intim0s),
loja de pijamas, lingerie e body splash de Itaporanga, SP: "uma nova versão
de sensualidade e delicadeza". A conversão é pelo WhatsApp: não existe
carrinho, checkout nem login de cliente.

- **Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Supabase (opcional)
- **Catálogo:** 9 peças, todas com a foto do Instagram da loja (7 pijamas,
  1 babydoll com renda, 1 body splash com 4 fragrâncias). Nenhuma foto é
  genérica e nenhum preço foi inventado: a bio não traz preço, o site
  também não.
- **Base:** duplicada da vitrine da Mimos da Mah (que veio da Fantoche, que
  veio da Picorelli). A lógica (dados, painel, menu com abas) é a mesma;
  identidade, textos e dados são desta loja.

## Modo prévia

Enquanto a vitrine é uma amostra, `PREVIA` em `data/site.config.ts` faz TODO
botão de WhatsApp apontar para o estúdio, com uma mensagem só. Quando a loja
contratar: `PREVIA = null`, e o número da loja (que a bio não tem: o link é
um grupo do WhatsApp) entra em `site.whatsapp`.

## Como rodar

```bash
npm install
npx next dev -p 3140
```

Sem as chaves do Supabase o projeto roda em modo local: lê `data/catalogo.json`
e serve as fotos de `public/produtos`. A senha do painel nesse modo é
`PAINEL_SENHA_LOCAL` (padrão: `encanto`).

## Trocar fotos e peças

`data/fonte.json` é a fonte: cada peça tem nome, categoria, `linha` (o que
vem: "alcinha e short", "250 ml"), `humor` (fofa, divertida, sexy, cheirosa),
descrição e o arquivo da foto em `_fonte/encanto/` (a colheita do Instagram
feita pela oficina do estúdio). Depois:

```bash
node scripts/montar-catalogo.mjs   # escreve data/catalogo.json e public/produtos
node scripts/gerar-icones.mjs      # favicon e imagem de compartilhamento
```

## A identidade, em uma linha

"O babado": o vinho da logo é o chão da marca (hero, botões, rodapé), o rosé
é o lençol onde as peças deitam (cartões, prateleira, fila das portas), o
branco é a renda, o batom é o único acento (o botão que fecha, a seleção).
A barra ondulada que todo pijama dela tem virou o `.babado` em CSS, desenhado
onde uma superfície termina: o pé do hero, o topo do rodapé, o pé da foto no
cartão. Cormorant Garamond nos títulos (a itálica é a voz da marca, uma
linha por seção) e Mulish no corpo. A marca é a logo real, recortada do
post "nossa logo" em PNG com alfa (`public/marca/`: logo, monograma, nome,
borboleta). O momento da casa é "Como você quer dormir hoje?": as estampas
são personalidades, e os quatro chips apagam o que não é daquele jeito.

## Capturas

```bash
npm i --no-save puppeteer-core
node scripts/capturar.mjs http://localhost:3140/ saida.png 390 844 full
```
