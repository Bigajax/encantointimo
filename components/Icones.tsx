/**
 * Ícones de linha da loja, um traço só: o pijama pendurado, a renda,
 * o frasco do body splash, a lua, a caixa do pedido, o coração, o
 * caminhão da entrega. Herdam a cor do texto; o tamanho vem da
 * className. Os da base (maquiagem, esporte…) seguem no arquivo, sem uso.
 */
export type NomeIcone =
  | "pijama"
  | "renda"
  | "frasco"
  | "lua"
  | "caixa"
  | "laco"
  | "novidade"
  | "labios"
  | "olhos"
  | "rosto"
  | "pinceis"
  | "perfume"
  | "coracao"
  | "moto"
  | "feira"
  | "revenda"
  | "natacao"
  | "esportes"
  | "lazer"
  | "roupas"
  | "acessorios"
  | "loja"
  | "lupa"
  | "whats"
  | "caminhao"
  | "conversa"
  | "etiqueta"
  | "cartao"
  | "pino"
  | "check"
  | "seta"
  | "seta-esq"
  | "fechar";

const TRACOS: Record<Exclude<NomeIcone, "whats">, React.ReactNode> = {
  /* o pijama de alcinha no cabide */
  pijama: (
    <>
      <path d="M12 2.5a1.3 1.3 0 0 1 1.3 1.3c0 .8-1.3 1.1-1.3 2" />
      <path d="M3.5 9.5L12 5.8l8.5 3.7" />
      <path d="M8 9.8v11.7M16 9.8v11.7" />
      <path d="M8 21.5c1.3-.9 2.7-.9 4 0 1.3-.9 2.7-.9 4 0" />
      <path d="M8 13.5c1.3.9 2.7.9 4 0 1.3.9 2.7.9 4 0" />
    </>
  ),
  /* a renda: a barra ondulada com o furinho */
  renda: (
    <>
      <path d="M2.5 8.5h19" />
      <path d="M2.5 8.5c0 3.2 1.5 4.5 3.2 4.5s3.2-1.3 3.2-4.5c0 3.2 1.4 4.5 3.1 4.5s3.2-1.3 3.2-4.5c0 3.2 1.4 4.5 3.1 4.5s3.2-1.3 3.2-4.5" />
      <path d="M5.7 15.5v.01M12 15.5v.01M18.3 15.5v.01" />
      <path d="M2.5 8.5V6a1.5 1.5 0 0 1 1.5-1.5h16A1.5 1.5 0 0 1 21.5 6v2.5" />
    </>
  ),
  /* o frasco do body splash com o borrifador */
  frasco: (
    <>
      <path d="M8 9.5h8v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
      <path d="M10 9.5V6.5h4v3" />
      <path d="M10.5 4h3" />
      <path d="M12 6.5V4" />
      <path d="M16.5 5.5l2 .5M16.5 7.5l2-.5" />
      <path d="M9.5 13.5h5" />
    </>
  ),
  /* a lua, para a hora de dormir */
  lua: <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" />,
  /* a caixa do pedido embalado */
  caixa: (
    <>
      <path d="M3.5 8.5l8.5-4 8.5 4v9l-8.5 4-8.5-4z" />
      <path d="M3.5 8.5l8.5 4 8.5-4M12 12.5v9" />
      <path d="M7.5 6.4l8.5 4v3" />
    </>
  ),
  /* o laço de cetim */
  laco: (
    <>
      <path d="M12 12c-2-3-6-4.5-8-2.5S5.5 15 9 14.5" />
      <path d="M12 12c2-3 6-4.5 8-2.5S18.5 15 15 14.5" />
      <circle cx="12" cy="12" r="1.5" />
      <path d="M11 13.5L9 20M13 13.5l2 6.5" />
    </>
  ),
  novidade: <path d="M12 3.4l2.5 5.6 6.1.6-4.6 4.1 1.4 6L12 16.6l-5.4 3.1 1.4-6-4.6-4.1 6.1-.6z" />,
  /* o batom: o tubo e a ponta em bisel */
  labios: (
    <>
      <path d="M9 21h6v-8H9z" />
      <path d="M10 13V6.5a2 2 0 0 1 2-2 2 2 0 0 1 2 2V13" />
      <path d="M10 9.5l4-2" />
    </>
  ),
  /* o olho com os cílios */
  olhos: (
    <>
      <path d="M2.5 12.5c2.6-3.6 5.8-5.4 9.5-5.4s6.9 1.8 9.5 5.4c-2.6 3.6-5.8 5.4-9.5 5.4s-6.9-1.8-9.5-5.4z" />
      <circle cx="12" cy="12.5" r="2.6" />
      <path d="M6.5 8.4l-1.2-1.6M12 7.1V5M17.5 8.4l1.2-1.6" />
    </>
  ),
  /* o blush: o estojo redondo aberto, com o espelho */
  rosto: (
    <>
      <circle cx="12" cy="15" r="6" />
      <circle cx="12" cy="15" r="2.5" />
      <path d="M6.5 10.5A6 6 0 0 1 17.5 10.5" />
      <path d="M6.5 10.5V5a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 17.5 5v5.5" />
    </>
  ),
  /* o pincel: o cabo e as cerdas */
  pinceis: (
    <>
      <path d="M13.5 3.5l7 7-8.5 8.5a3.5 3.5 0 0 1-5-5z" />
      <path d="M7 14l3 3" />
      <path d="M4.5 20.5c1.5-.3 2.5-1 3-2" />
    </>
  ),
  /* o vidro de perfume com a tampa e o borrifador */
  perfume: (
    <>
      <path d="M8 10.5h8l1.5 3v6a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5v-6z" />
      <path d="M10 10.5V8h4v2.5" />
      <path d="M12 8V5.5M14 5.5h3.5M17.5 5.5l1.5-1.5M17.5 5.5l1.5 1.5" />
    </>
  ),
  coracao: <path d="M12 20.5s-7.5-4.6-7.5-10A4 4 0 0 1 12 8a4 4 0 0 1 7.5 2.5c0 5.4-7.5 10-7.5 10z" />,
  /* a moto de entrega */
  moto: (
    <>
      <circle cx="6" cy="16.5" r="3" />
      <circle cx="18" cy="16.5" r="3" />
      <path d="M6 16.5l3-6h5l2.5 3.5H18M14 10.5V8h3" />
      <path d="M9 10.5H5.5" />
    </>
  ),
  /* a barraca da feira */
  feira: (
    <>
      <path d="M3.5 9.5 5 5h14l1.5 4.5" />
      <path d="M3.5 9.5a2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0" />
      <path d="M5 11.5v8h14v-8M10 19.5v-5h4v5" />
    </>
  ),
  /* duas mãos: a revenda */
  revenda: (
    <>
      <path d="M3 12.5l4-1.5 4 3 2-1" />
      <path d="M21 12.5l-4-1.5-3 2.5" />
      <path d="M7 11l3-3.5h4l3 3.5" />
      <path d="M5 16l4 3.5 3 .5 3-.5 4-3.5" />
    </>
  ),
  /* os óculos de natação: duas lentes, a ponte, a tira */
  natacao: (
    <>
      <path d="M3.5 12.5a3.5 3 0 1 0 7 0 3.5 3 0 1 0-7 0z" />
      <path d="M13.5 12.5a3.5 3 0 1 0 7 0 3.5 3 0 1 0-7 0z" />
      <path d="M10.5 12.5h3" />
      <path d="M3.6 11.5C4.5 8.5 7 7.5 9.5 8.2M20.4 11.5c-.9-3-3.4-4-5.9-3.3" />
    </>
  ),
  /* a bola: círculo com os gomos */
  esportes: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5c-2 2.6-3 5.4-3 8.5s1 5.9 3 8.5M12 3.5c2 2.6 3 5.4 3 8.5s-1 5.9-3 8.5M3.6 10.5c2.7-1 5.5-1.5 8.4-1.5s5.7.5 8.4 1.5M3.6 13.5c2.7 1 5.5 1.5 8.4 1.5s5.7-.5 8.4-1.5" />
    </>
  ),
  /* o sol sobre a água */
  lazer: (
    <>
      <path d="M6.5 14a5.5 5.5 0 1 1 11 0" />
      <path d="M12 3.5v2M4.2 7.2l1.4 1.4M19.8 7.2l-1.4 1.4M2.5 14h2M19.5 14h2" />
      <path d="M2.5 18c1.6 0 1.6 1.5 3.2 1.5s1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5 1.6 1.5 3.2 1.5 1.6-1.5 3.2-1.5" />
    </>
  ),
  roupas: (
    <>
      <path d="M8.6 3.8c.5 1.5 1.8 2.4 3.4 2.4s2.9-.9 3.4-2.4l5 2.2 1.1 4.3-3.3 1.1v9.1H5.8v-9.1L2.5 10.3l1.1-4.3z" />
      <path d="M9.6 3.8h4.8" />
    </>
  ),
  /* a garrafa esportiva */
  acessorios: (
    <>
      <path d="M9.5 3h5v2.5h-5z" />
      <path d="M9 5.5h6l1 3v10.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8.5z" />
      <path d="M8 13h8" />
    </>
  ),
  loja: (
    <>
      <path d="M3.5 9.5 5 4.5h14l1.5 5" />
      <path d="M3.5 9.5a2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0" />
      <path d="M5 11.5v8h14v-8" />
      <path d="M10 19.5v-4.5h4v4.5" />
    </>
  ),
  lupa: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
    </>
  ),
  caminhao: (
    <>
      <path d="M2.5 6.5h11v9h-11z" />
      <path d="M13.5 9.5h4l3 3.5v2.5h-7z" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  conversa: (
    <>
      <path d="M4 5.5h16v10H9l-4 3.5z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  etiqueta: (
    <>
      <path d="M3.5 12.5v-8h8l9 9-8 8z" />
      <circle cx="7.5" cy="8.5" r="1.3" />
    </>
  ),
  cartao: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="M2.5 10h19M6.5 14.5h4" />
    </>
  ),
  pino: (
    <>
      <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  seta: <path d="M9.5 6l6 6-6 6" />,
  "seta-esq": <path d="M14.5 6l-6 6 6 6" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
};

export function Icone({ nome, className = "h-6 w-6", peso = 1.5 }: { nome: NomeIcone; className?: string; peso?: number }) {
  if (nome === "whats") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="currentColor">
        <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2zm0 17.9c-1.5 0-3-.4-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 1 1 12 20.1zm4.5-6c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.3-.4.3-.4.8-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6a2.7 2.7 0 0 0 1.8-1.2c.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth={peso} strokeLinecap="round" strokeLinejoin="round">
      {TRACOS[nome]}
    </svg>
  );
}
