import { FaixaWhats } from "@/components/FaixaWhats";
import { Garantias } from "@/components/Garantias";
import { Hero } from "@/components/Hero";
import { Humor } from "@/components/Humor";
import { Portas } from "@/components/Portas";
import { Sobre } from "@/components/Sobre";
import { carregarCatalogo, obterConfig } from "@/lib/dados";
import { PORTAS as PORTAS_MENU } from "@/lib/menu";
import { linkGeral } from "@/lib/whatsapp";
import { configPadrao, site } from "@/data/site.config";

/* a ordem e a cara das portas na home */
const PORTAS = PORTAS_MENU.map((p) => ({ slug: p.slug, nome: p.nome, icone: p.icone, linha: p.linha }));

/**
 * A home: o hero vinho com a frase dela e o babydoll de renda, as três
 * garantias da bio, as três portas, "como você quer dormir hoje?" (o
 * momento da casa, e também a prateleira inteira: são 9 peças, cabem
 * todas), a loja em uma dobra e a faixa do pedido. Tudo montado do
 * catálogo. Prateleira e Vitrines seguem em components/ para quando o
 * catálogo crescer.
 */
export default async function Home() {
  const [{ categorias, produtos, hero }, config] = await Promise.all([carregarCatalogo(), obterConfig()]);

  const whats = linkGeral(config.whatsapp);
  const ativos = produtos.filter((p) => p.ativo);
  const ativas = categorias.filter((c) => c.ativo);
  const porSlug = new Map(ativas.map((c) => [c.slug, c]));
  const da = (slug: string) => ativos.filter((p) => p.categoria_slug === slug).sort((a, b) => a.ordem - b.ordem);

  const destaques = hero
    .map((h) => ativos.find((p) => p.slug === h.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 8);
  const estrelaDe = (slug: string) => destaques.find((p) => p.categoria_slug === slug) ?? da(slug)[0] ?? null;

  return (
    <>
      <Hero frase={config.frase_hero || configPadrao.frase_hero} estrelas={destaques} linkWhats={whats} totais={{ produtos: ativos.length, categorias: ativas.length }} />

      <Garantias linkWhats={whats} />

      <Portas portas={PORTAS.map((p) => ({ nome: p.nome, href: `/catalogo/${p.slug}`, icone: p.icone, peca: estrelaDe(p.slug), total: da(p.slug).length, linha: p.linha }))} />

      <Humor produtos={ativos} categorias={porSlug} />

      <Sobre instagram={config.instagram || site.instagram} />

      <FaixaWhats linkWhats={whats} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Encanto Íntimo",
            url: site.url,
            areaServed: "Itaporanga, SP",
            address: { "@type": "PostalAddress", addressLocality: "Itaporanga", addressRegion: "SP", addressCountry: "BR" },
          }),
        }}
      />
    </>
  );
}
