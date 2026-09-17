import { Icone } from "./Icones";
import { site } from "@/data/site.config";

/**
 * A faixa do pedido, no vinho fundo: o jeito de comprar em três passos
 * (é uma sequência de fato) e o botão batom que fecha. Entrega como a bio diz:
 * para toda a região.
 */
const PASSOS = [
  { n: "1", texto: "Escolhe a peça aqui na vitrine (o tamanho e a fragrância você escreve na mensagem)" },
  { n: "2", texto: "Manda a mensagem que o botão já monta" },
  { n: "3", texto: `Ela confirma, passa o valor e combina a entrega: ${site.entrega.toLowerCase()} de Itaporanga` },
];

export function FaixaWhats({ linkWhats }: { linkWhats: string }) {
  return (
    <section id="pedido" aria-labelledby="titulo-faixa" className="miolo scroll-mt-24 pt-12 lg:pt-16">
      <div className="escuro bloco grid overflow-hidden lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center">
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="flex items-center gap-4">
            <Icone nome="whats" className="h-10 w-10 shrink-0 text-raia sm:h-12 sm:w-12" />
            <div>
              <h2 id="titulo-faixa" className="manchete text-[clamp(1.75rem,3.4vw,2.5rem)] text-branco">
                Escolheu? Manda no WhatsApp.
              </h2>
              <p className="mt-1 text-[0.9375rem] text-marfim-fraco">Sem cadastro, sem carrinho: quem responde é a dona da loja.</p>
            </div>
          </div>

        </div>
        <div className="px-6 pb-6 sm:px-10 sm:pb-10 lg:p-12 lg:pl-0">
          <ol className="flex flex-col gap-3">
            {PASSOS.map((p) => (
              <li key={p.n} className="flex items-baseline gap-3 text-[0.9375rem] text-branco">
                <span className="romana grid h-7 w-7 shrink-0 place-items-center rounded-full bg-raia text-[1rem] text-white">{p.n}</span>
                {p.texto}
              </li>
            ))}
          </ol>
          <a href={linkWhats} target="_blank" rel="noreferrer" className="btn btn--raia mt-8">
            <Icone nome="whats" className="h-[1.125rem] w-[1.125rem]" />
            Chamar agora
          </a>
        </div>
      </div>
    </section>
  );
}
