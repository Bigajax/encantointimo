/**
 * Dados fixos do negócio. O que a dona da loja edita no dia a dia
 * (aviso do topo, frase do hero, WhatsApp) vive na tabela `config` e é
 * editável em /painel/config, não aqui.
 */

function resolverUrl(): string {
  const candidatos = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.NEXT_PUBLIC_VERCEL_URL,
    process.env.VERCEL_URL,
  ];

  for (const bruto of candidatos) {
    const valor = bruto?.trim();
    if (!valor) continue;
    const comProtocolo = /^https?:\/\//i.test(valor) ? valor : `https://${valor}`;
    try {
      return new URL(comProtocolo).origin;
    } catch {
      // valor malformado: tenta o próximo em vez de derrubar o build
    }
  }

  return "http://localhost:3140";
}

export const site = {
  nome: "Encanto Íntimo",
  marca: "Encanto Íntimo",
  /* a linha de baixo da logo, palavra por palavra */
  posicionamento: "Uma nova versão de sensualidade e delicadeza",
  cidade: "Itaporanga | SP",
  /* a bio não traz número: o link é um grupo do WhatsApp. Enquanto a
     loja não passar o número, o pedido vai pelo grupo (ver `grupo`). */
  whatsapp: "",
  grupo: "https://chat.whatsapp.com/FF1O3ZNq1kD5R6A55QWyTF",
  instagram: "encant0.intim0s",
  url: resolverUrl(),
  /* a loja não tem endereço público: vende pelo direct e entrega na região */
  endereco: "",
  maps: "",
  /* o que a bio promete, palavra por palavra */
  entrega: "Entregamos para toda a região",
  escolha: "Produtos escolhidos com muito carinho",
} as const;

/**
 * MODO PRÉVIA. Enquanto a vitrine é uma amostra, TODO botão de WhatsApp
 * aponta para o estúdio com a mesma mensagem. Quando a loja contratar:
 * PREVIA = null e o número acima passa a valer.
 */
export const PREVIA: { whatsapp: string; mensagem: string } | null = {
  whatsapp: "5544999997219",
  mensagem: "Oi! Vi a prévia da vitrine da Encanto Íntimo e quero colocar no ar.",
};

/** Valores iniciais da tabela `config`. Sobrescritos pelo banco quando existirem. */
export const configPadrao: Record<string, string> = {
  whatsapp: site.whatsapp,
  instagram: site.instagram,
  cidade: site.cidade,
  /* frases separadas por "|": o cabeçalho reveza uma de cada vez */
  aviso_topo: "Pijamas, lingeries e body splash | Entregamos para toda a região de Itaporanga | Pedido pelo WhatsApp, sem cadastro",
  frase_hero: "Sinta-se linda até na hora de dormir.",
  endereco: "",
  horario: "",
};
