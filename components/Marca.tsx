import Image from "next/image";

/**
 * A marca é a logo de verdade, tirada do post "Nossa logo" do Instagram
 * (branca sobre vinho) e convertida em PNG com alfa em três pedaços:
 * a logo inteira (monograma + nome + linha de baixo), só o monograma
 * (o C, o I e a borboleta), só o nome e só a borboleta. São brancas: funcionam
 * sobre o vinho como imagem, e sobre o claro entram como MÁSCARA
 * pintada pela cor do texto.
 */
type Peca = "logo" | "monograma" | "nome" | "borboleta";
const MEDIDAS: Record<Peca, [number, number]> = {
  logo: [603, 459],
  monograma: [273, 296],
  nome: [591, 69],
  borboleta: [125, 140],
};

function Mascara({ peca, altura, className = "", rotulo }: { peca: Peca; altura: number; className?: string; rotulo?: string }) {
  const [w, h] = MEDIDAS[peca];
  const url = `url(/marca/${peca}.png)`;
  return (
    <span
      role={rotulo ? "img" : undefined}
      aria-label={rotulo}
      aria-hidden={rotulo ? undefined : true}
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        height: altura,
        width: Math.round(altura * (w / h)),
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

/** A logo do cabeçalho e do rodapé: monograma e nome lado a lado, na cor do texto. */
export function Logo({ className = "", altura = 44 }: { className?: string; altura?: number }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} role="img" aria-label="Encanto Íntimo">
      <Mascara peca="monograma" altura={altura} />
      <Mascara peca="nome" altura={Math.round(altura * 0.3)} />
    </span>
  );
}

/** A logo completa, branca, sobre o vinho: só como imagem mesmo. */
export function LogoInteira({ altura, className = "", priority = false }: { altura: number; className?: string; priority?: boolean }) {
  const [w, h] = MEDIDAS.logo;
  return <Image src="/marca/logo.png" alt="Encanto Íntimo: uma nova versão de sensualidade e delicadeza" width={Math.round(altura * (w / h))} height={altura} priority={priority} className={`shrink-0 ${className}`} />;
}

/** A borboleta sozinha, pintada pela cor do texto. */
export function Borboleta({ altura, className = "" }: { altura: number; className?: string }) {
  return <Mascara peca="borboleta" altura={altura} className={className} />;
}

/* a assinatura do estúdio, em máscara, pintada pela cor do texto */
export function MarcaEstudio({ altura, className = "" }: { altura: number; className?: string }) {
  return (
    <span
      role="img"
      aria-label="Rafael Razeira Estúdio"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        height: altura,
        width: Math.round(altura * (956 / 519)),
        WebkitMaskImage: "url(/marca/rafael-razeira.png)",
        maskImage: "url(/marca/rafael-razeira.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
