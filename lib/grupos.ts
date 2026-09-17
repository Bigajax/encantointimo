/**
 * As portas que juntam categorias. A Encanto Íntimo tem três categorias
 * diretas (pijamas, lingerie, body splash), nenhuma agrupada: o mapa
 * fica vazio até precisar.
 */
export const GRUPOS: Record<string, { nome: string; categorias: string[] }> = {};

export function categoriasDoGrupo(slug: string): string[] | null {
  return GRUPOS[slug]?.categorias ?? null;
}
