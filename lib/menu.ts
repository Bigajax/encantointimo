import type { Produto } from "./tipos";
import { site } from "@/data/site.config";

/**
 * O menu das portas, montado do catálogo: cada porta do cabeçalho abre
 * uma aba ao passar o mouse, e o que está na aba vem dos produtos (os
 * atalhos só aparecem se acham algo) e do WhatsApp. Assim a aba nunca
 * promete o que a vitrine não tem. São três portas, as três da bio:
 * pijamas, lingerie, body splash.
 */
export type NomeIconeMenu = "pijama" | "renda" | "frasco" | "lua" | "caixa" | "laco" | "coracao" | "moto" | "etiqueta" | "pino" | "conversa" | "caminhao";

export type ItemMenu = {
  nome: string;
  href: string;
  icone?: NomeIconeMenu;
  nota?: string;
  externa?: boolean;
};

export type Aba = {
  chave: string;
  nome: string;
  href: string;
  icone: NomeIconeMenu;
  externa?: boolean;
  titulo?: string;
  itens: ItemMenu[];
  colunas: 1 | 2 | 3 | 4;
  total?: number;
  nota?: string;
};

export const PORTAS: { slug: string; nome: string; tudo: string; icone: NomeIconeMenu; linha: string; atalhos: string[] }[] = [
  { slug: "pijamas", nome: "Pijamas", tudo: "Todos os pijamas", icone: "pijama", linha: "short doll de alcinha, camiseta e short", atalhos: ["Short doll", "Camiseta", "Victoria's Secret"] },
  { slug: "lingerie", nome: "Lingerie", tudo: "Toda a lingerie", icone: "renda", linha: "babydoll com renda", atalhos: ["Babydoll", "Renda"] },
  { slug: "body-splash", nome: "Body splash", tudo: "Todos os body splash", icone: "frasco", linha: "Victoria's Secret 250 ml", atalhos: ["Victoria's Secret"] },
];

export function montarMenu(produtos: Produto[], linkWhats: string): Aba[] {
  const ativos = produtos.filter((p) => p.ativo);
  const conta = (slug: string) => ativos.filter((p) => p.categoria_slug === slug).length;
  const busca = (cat: string, termo: string) => `/catalogo/${cat}?busca=${encodeURIComponent(termo)}`;
  const existe = (cat: string, termo: string) => ativos.some((p) => p.categoria_slug === cat && `${p.nome} ${p.descricao ?? ""}`.toLowerCase().includes(termo.toLowerCase()));

  return [
    ...PORTAS.map((porta): Aba => {
      const total = conta(porta.slug);
      return {
        chave: porta.slug,
        nome: porta.nome,
        href: `/catalogo/${porta.slug}`,
        icone: porta.icone,
        total,
        titulo: `${total} ${total === 1 ? "peça" : "peças"}: ${porta.linha}`,
        colunas: 2,
        itens: [
          ...porta.atalhos.filter((t) => existe(porta.slug, t)).map((t) => ({ nome: t, href: busca(porta.slug, t) })),
          { nome: porta.tudo, href: `/catalogo/${porta.slug}`, icone: porta.icone },
        ],
      };
    }),
    {
      chave: "pedido",
      nome: "Como pedir",
      href: "/#pedido",
      icone: "caixa",
      nota: "pelo WhatsApp",
      colunas: 1,
      itens: [
        { nome: "Falar no WhatsApp", href: linkWhats, icone: "conversa", nota: "peça, tamanho e entrega", externa: true },
        { nome: site.entrega, href: "/#pedido", icone: "caminhao", nota: "Itaporanga e região, combinado no pedido" },
        { nome: "Como você quer dormir hoje?", href: "/#humor", icone: "lua", nota: "fofa, divertida, sexy ou cheirosa" },
      ],
    },
  ];
}
