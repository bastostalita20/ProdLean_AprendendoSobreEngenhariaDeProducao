/* Motor de cálculo do MRP usado pelas questões (scripts/questoes/mrp.js) e pelo guia visual
   (scripts/guias/mrp.js): registro MRP, explosão da estrutura, lead time acumulado e custo de lotes. */
"use strict";
/* ---------- motor de cálculo ---------- */
// Registro MRP de um item. Períodos 1..n; índices 0..n-1.
// lote: { tipo: "l4l" } | { tipo: "multiplo", q } | { tipo: "minimo", q }
function registroMRP({ nb, estoque, rp = [], lt, lote = { tipo: "l4l" }, es = 0 }) {
  const n = nb.length, r = { nb: nb.slice(), rp: [], disp: [], nl: [], rec: [], lib: Array(n).fill(0) };
  let ant = estoque;
  for (let t = 0; t < n; t++) {
    const rpt = rp[t] || 0, d0 = ant + rpt;
    const nl = Math.max(0, nb[t] + es - d0);
    let rec = 0;
    if (nl > 0) rec = lote.tipo === "multiplo" ? Math.ceil(nl / lote.q) * lote.q : lote.tipo === "minimo" ? Math.max(lote.q, nl) : nl;
    const fim = d0 + rec - nb[t];
    r.rp.push(rpt); r.nl.push(nl); r.rec.push(rec); r.disp.push(fim);
    if (rec) { if (t - lt < 0) throw new Error(`liberação antes do período 1 (t=${t + 1}, LT=${lt}): ajuste os dados`); r.lib[t - lt] += rec; }
    ant = fim;
  }
  return r;
}
// Explosão da estrutura: quantidade total de cada item para "qtd" unidades da raiz
function explodir(no, qtd = 1, tot = {}) {
  tot[no.item] = (tot[no.item] || 0) + qtd;
  (no.filhos || []).forEach(f => explodir(f, qtd * f.qtd, tot));
  return tot;
}
// Lead time acumulado (caminho mais longo da raiz até uma folha)
const ltAcumulado = no => (no.lt || 0) + Math.max(0, ...(no.filhos || []).map(ltAcumulado));
// Custo de um plano de lotes: preparação por pedido + manutenção sobre o estoque no fim de cada período
function custoPlano(nb, pedidos, S, h) {
  let est = 0, custo = 0;
  nb.forEach((d, t) => { est += (pedidos[t] || 0) - d; if (est < 0) throw new Error("plano não atende a demanda"); custo += (pedidos[t] ? S : 0) + est * h; });
  return custo;
}
module.exports = { registroMRP, explodir, ltAcumulado, custoPlano };
