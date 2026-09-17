import Image from "next/image";
import Link from "next/link";
import { Icone, type NomeIcone } from "./Icones";
import type { Produto } from "@/lib/tipos";

export type Porta = {
  nome: string;
  href: string;
  icone: NomeIcone;
  peca?: Produto | null;
  total: number;
  linha: string;
};

/**
 * As três portas da loja, as três da bio: a foto da estrela da
 * categoria ocupa o azulejo, e por cima, no pé, a faixa vinho com o
 * ícone, o nome em serifa e quantas peças tem. No hover a foto cresce
 * e a faixa vira batom. No celular rolam de lado, duas por tela.
 */
export function Portas({ portas }: { portas: Porta[] }) {
  return (
    <section aria-labelledby="titulo-portas" className="miolo pt-12 lg:pt-16">
      <div className="regua">
        <div>
          <h2 id="titulo-portas" className="secao">
            O que tem na loja
          </h2>
          <span className="raia raia--curta mt-3" aria-hidden="true" />
        </div>
        <Link href="/catalogo" className="btn btn--texto shrink-0">
          Ver tudo
        </Link>
      </div>
      <ul className="faixa-scroll sangra mt-5 flex gap-3 overflow-x-auto pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0">
        {portas.map((p) => {
          const capa = p.peca?.imagens[0];
          return (
            <li key={p.nome} className="w-[64vw] shrink-0 sm:w-[18rem] lg:w-auto">
              <Link href={p.href} className="azulejo group">
                <span className="foto block aspect-[4/5] rounded-none lg:aspect-[5/4]">
                  {capa ? (
                    <Image src={capa.url} alt="" fill sizes="(max-width: 640px) 64vw, (max-width: 1024px) 30vw, 30vw" placeholder={capa.blur ? "blur" : "empty"} blurDataURL={capa.blur ?? undefined} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                  ) : null}
                </span>
                <span className="azulejo-faixa">
                  <Icone nome={p.icone} className="h-7 w-7 shrink-0" peso={1.5} />
                  <span className="min-w-0">
                    <span className="romana block text-[1.375rem] leading-none">{p.nome}</span>
                    <span className="block text-[0.8125rem] opacity-85">
                      {p.total} {p.total === 1 ? "peça" : "peças"}: {p.linha}
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
