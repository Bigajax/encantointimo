"use client";

import { useState } from "react";
import Link from "next/link";
import { CardProduto } from "./CardProduto";
import { Icone } from "./Icones";
import type { Categoria, Humor as NomeHumor, Produto } from "@/lib/tipos";

/**
 * "Como você quer dormir hoje?": o momento da casa. As estampas dela
 * são personalidades (a vaquinha e a margarida são fofas, o Monstros
 * S.A. e os beijos são divertidos, a renda e o VS preto são sexy, o
 * body splash é cheiroso), então a pergunta que ela faria no direct
 * vira quatro chips. Escolher um não esconde as outras peças: elas
 * apagam, para a prateleira não pular e a comparação continuar à vista.
 */
const HUMORES: { chave: NomeHumor; nome: string; linha: string }[] = [
  { chave: "fofa", nome: "fofa", linha: "vaquinha, margaridas, listras rosa" },
  { chave: "divertida", nome: "divertida", linha: "Monstros S.A., beijos e corações" },
  { chave: "sexy", nome: "sexy", linha: "renda preta, Victoria's Secret" },
  { chave: "cheirosa", nome: "cheirosa", linha: "body splash" },
];

export function Humor({ produtos, categorias }: { produtos: Produto[]; categorias: Map<string, Categoria> }) {
  const [humor, setHumor] = useState<NomeHumor | null>(null);
  const comHumor = produtos.filter((p) => p.humor);
  if (comHumor.length < 4) return null;

  const escolhido = HUMORES.find((h) => h.chave === humor);
  const dentro = humor ? comHumor.filter((p) => p.humor === humor) : comHumor;
  /* as do humor escolhido vêm primeiro; as outras seguem atrás, apagadas */
  const ordenadas = humor ? [...dentro, ...comHumor.filter((p) => p.humor !== humor)] : comHumor;

  return (
    <section id="humor" aria-labelledby="titulo-humor" className="rose babado-topo babado-pe mt-14 scroll-mt-24 py-12 [--onda-cor:var(--piscina)] lg:mt-20 lg:py-16">
      <div className="miolo">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h2 id="titulo-humor" className="secao">
              Como você quer dormir hoje?
            </h2>
            <p className="voz mt-2 text-[1.375rem] text-agua">Cada estampa tem um jeito. Escolhe o seu.</p>
          </div>
          <p className="text-[0.9375rem] text-tinta-fraca lg:max-w-[28ch] lg:text-right" aria-live="polite">
            {escolhido ? `${dentro.length} ${dentro.length === 1 ? "peça" : "peças"} para dormir ${escolhido.nome}: ${escolhido.linha}.` : `${comHumor.length} peças, quatro jeitos de dormir.`}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5" role="group" aria-label="Jeito de dormir">
          {HUMORES.map((h) => (
            <button key={h.chave} type="button" className="humor" aria-pressed={humor === h.chave} onClick={() => setHumor(humor === h.chave ? null : h.chave)}>
              {h.nome}
            </button>
          ))}
          {humor ? (
            <button type="button" className="btn btn--texto ml-1" onClick={() => setHumor(null)}>
              <Icone nome="fechar" className="h-4 w-4" />
              Ver todas
            </button>
          ) : null}
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {ordenadas.map((p) => (
            <li key={p.id} className="humor-peca" data-fora={humor ? p.humor !== humor : false}>
              <CardProduto produto={p} categoria={categorias.get(p.categoria_slug ?? "")} tamanhos="(max-width: 1024px) 46vw, 30vw" />
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[0.9375rem] text-tinta-fraca">
          Não achou o seu jeito?{" "}
          <Link href="/catalogo" className="font-bold text-agua underline decoration-raia underline-offset-4 hover:text-raia">
            Veja as {produtos.length} peças
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
