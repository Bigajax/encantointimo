import { Borboleta, LogoInteira } from "./Marca";
import { Icone } from "./Icones";
import { site } from "@/data/site.config";

/**
 * A loja em uma dobra: o monograma da logo em vinho sobre o papel, a
 * linha de baixo da logo como voz, e o que a bio diz, palavra por
 * palavra (pijamas, lingeries, body splash; escolhidos com carinho;
 * entrega para toda a região; Itaporanga-SP). À direita, a logo como
 * ela postou ("nossa logo"): o quadrado vinho com o babado no pé.
 * Nada aqui foi inventado.
 */
export function Sobre({ instagram }: { instagram: string }) {
  return (
    <section aria-labelledby="titulo-sobre" className="miolo pt-14 lg:pt-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div className="relative">
          <span className="text-agua" aria-hidden="true">
            <Borboleta altura={56} className="lg:!h-[72px] lg:!w-[64px]" />
          </span>
          <h2 id="titulo-sobre" className="manchete mt-4 max-w-[16ch] text-[clamp(2rem,4.5vw,3.25rem)] text-tinta">
            {site.posicionamento}.
          </h2>
          <p className="falada mt-5 max-w-[46ch] text-[1.0625rem] text-tinta">
            A Encanto Íntimo é uma loja de {site.cidade.split(" | ")[0]}, SP, que escolhe pijama, lingerie e body splash com muito carinho e entrega para toda a região. Cada peça daqui está no Instagram dela, e o pedido é pelo WhatsApp.
          </p>
          <dl className="mt-7 grid gap-x-8 gap-y-4 text-[0.9375rem] sm:grid-cols-3">
            <div>
              <dt className="romana text-[1.5rem] text-agua">Pijamas</dt>
              <dd className="mt-1 text-tinta-fraca">short doll de alcinha, camiseta e short</dd>
            </div>
            <div>
              <dt className="romana text-[1.5rem] text-agua">Lingerie</dt>
              <dd className="mt-1 text-tinta-fraca">babydoll com renda</dd>
            </div>
            <div>
              <dt className="romana text-[1.5rem] text-agua">Body splash</dt>
              <dd className="mt-1 text-tinta-fraca">Victoria&apos;s Secret, 250 ml</dd>
            </div>
          </dl>
          <a href={`https://instagram.com/${instagram}`} target="_blank" rel="noreferrer" className="btn btn--linha mt-8">
            <Icone nome="coracao" className="h-[1.125rem] w-[1.125rem] text-raia" peso={1.8} />
            @{instagram} no Instagram
          </a>
        </div>

        <figure className="relative lg:justify-self-end lg:w-[min(100%,30rem)]">
          <span className="agua babado-pe flex aspect-square items-center justify-center rounded-[var(--raio)] [--onda-cor:var(--agua)]">
            <LogoInteira altura={260} className="w-[62%] !h-auto" />
          </span>
          <figcaption className="voz mt-6 text-[1.25rem] text-agua">A logo, como ela postou: a borboleta pousada no monograma.</figcaption>
        </figure>
      </div>
    </section>
  );
}
