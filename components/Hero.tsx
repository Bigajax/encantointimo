import Image from "next/image";
import Link from "next/link";
import { Icone } from "./Icones";
import { Borboleta } from "./Marca";
import { site } from "@/data/site.config";
import type { Produto } from "@/lib/tipos";

/**
 * A abertura, no vinho da logo: à esquerda a manchete em serifa alta
 * (a frase do post dela, "sinta-se linda até na hora de dormir"), a
 * linha de apoio com o que a bio promete e os dois botões. À direita,
 * a estrela da vez numa foto em pé, com a etiqueta de cetim costurada
 * no canto e a borboleta da logo pousada na borda. O vinho termina em
 * babado sobre o papel: é o pé do pijama. No celular o texto vem
 * primeiro e a foto senta embaixo.
 */
export function Hero({ frase, estrelas, linkWhats, totais }: { frase: string; estrelas: Produto[]; linkWhats: string; totais: { produtos: number; categorias: number } }) {
  const principal = estrelas.find((p) => p.slug.startsWith("babydoll")) ?? estrelas[0];
  const capa = principal?.imagens[0];

  return (
    <section aria-labelledby="titulo-hero" className="agua babado-pe relative [--onda-cor:var(--agua)] [--onda:18px]">
      <div className="miolo relative grid gap-10 py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:py-20">
        <div className="hero-texto">
          <p className="text-[0.9375rem] text-marfim-fraco">Pijamas, lingerie e body splash em {site.cidade.split(" | ")[0]}</p>
          <h1 id="titulo-hero" className="manchete mt-4 max-w-[14ch] text-[clamp(2.75rem,9vw,4rem)] text-branco lg:text-[clamp(3.5rem,5.6vw,5.5rem)]">
            {frase}
          </h1>
          <p className="falada mt-6 max-w-[38ch] text-[1.0625rem] text-white/85 lg:text-[1.125rem]">
            {totais.produtos} peças escolhidas com carinho, do short doll de alcinha ao body splash da Victoria&apos;s Secret. Escolhe aqui, pede no WhatsApp, e a entrega chega em {site.cidade.split(" | ")[0]} e região.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/catalogo" className="btn btn--agua">
              Ver as peças
            </Link>
            <a href={linkWhats} target="_blank" rel="noreferrer" className="btn btn--placa-fio">
              <Icone nome="whats" className="h-[1.125rem] w-[1.125rem]" />
              Pedir no WhatsApp
            </a>
          </div>
        </div>

        {principal && capa ? (
          <Link href={`/produto/${principal.slug}`} className="hero-foto group relative block lg:justify-self-end lg:w-[min(100%,30rem)]">
            <span className="foto block aspect-[4/5] rounded-[var(--raio)] bg-[var(--agua-clara)]">
              <Image src={capa.url} alt={capa.alt ?? principal.nome} fill priority sizes="(max-width: 1024px) 100vw, 30rem" placeholder={capa.blur ? "blur" : "empty"} blurDataURL={capa.blur ?? undefined} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
              <span className="etiqueta-cetim absolute left-4 top-4 z-[1]">
                {principal.linha ?? "Na foto"}
              </span>
            </span>
            <span className="hero-borboleta pointer-events-none absolute -right-3 -top-5 text-branco lg:-right-6 lg:-top-8" aria-hidden="true">
              <Borboleta altura={64} className="lg:!h-[88px] lg:!w-[79px]" />
            </span>
            <span className="mt-3 flex items-center justify-between gap-3 text-[0.9375rem] text-marfim-fraco">
              <span>
                Na foto: <span className="font-bold text-branco group-hover:underline group-hover:decoration-white group-hover:underline-offset-4">{principal.nome}</span>
              </span>
              <Icone nome="seta" className="h-5 w-5 shrink-0 text-branco" peso={2} />
            </span>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
