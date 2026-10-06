/* Motor de cálculo de Gestão de Projetos usado pelas questões (scripts/questoes/gestao-projetos.js)
   e pelos guias visuais (scripts/guias/*.js): CPM (ida e volta, folgas, caminho crítico),
   PERT (tempo esperado, variância, probabilidade), compressão de menor custo e valor agregado. */
"use strict";

// CPM. atividades: [{ id, dur, pred: [] }] em qualquer ordem (sem ciclos)
function cpm(atividades) {
  const por = Object.fromEntries(atividades.map(a => [a.id, Object.assign({}, a, { pred: a.pred || [] })]));
  const ordem = [], visto = new Set();
  const visita = id => { if (visto.has(id)) return; por[id].pred.forEach(visita); visto.add(id); ordem.push(id); };
  atividades.forEach(a => visita(a.id));
  ordem.forEach(id => { const a = por[id]; a.es = Math.max(0, ...a.pred.map(p => por[p].ef)); a.ef = a.es + a.dur; });
  const T = Math.max(...ordem.map(id => por[id].ef));
  const suc = id => ordem.filter(x => por[x].pred.includes(id));
  [...ordem].reverse().forEach(id => { const a = por[id], s = suc(id); a.lf = s.length ? Math.min(...s.map(x => por[x].ls)) : T; a.ls = a.lf - a.dur; });
  ordem.forEach(id => { const a = por[id], s = suc(id); a.ft = a.ls - a.es; a.fl = (s.length ? Math.min(...s.map(x => por[x].es)) : T) - a.ef; a.critica = a.ft === 0; });
  return { T, ordem, por, critico: ordem.filter(id => por[id].critica) };
}
// PERT
const te = (a, m, b) => (a + 4 * m + b) / 6;
const vari = (a, b) => ((b - a) / 6) ** 2;
// Normal padrão acumulada (Abramowitz e Stegun 7.1.26, erro < 1,5e-7)
function phi(z) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z / 2);
  return z >= 0 ? (1 + y) / 2 : (1 - y) / 2;
}
// Compressão de menor custo por força bruta: comp = { id: { max, custoDia } }; reduz até "alvo"
function compressao(atividades, comp, alvo) {
  const ids = Object.keys(comp);
  let melhor = null;
  const tenta = (k, red) => {
    if (k === ids.length) {
      const r = cpm(atividades.map(a => Object.assign({}, a, { dur: a.dur - (red[a.id] || 0) })));
      if (r.T > alvo) return;
      const custo = ids.reduce((s, id) => s + (red[id] || 0) * comp[id].custoDia, 0);
      if (!melhor || custo < melhor.custo) melhor = { custo, red: Object.assign({}, red), T: r.T };
      return;
    }
    for (let d = 0; d <= comp[ids[k]].max; d++) { red[ids[k]] = d; tenta(k + 1, red); }
    delete red[ids[k]];
  };
  tenta(0, {});
  return melhor;
}
// Valor agregado
function evm({ bac, pv, ev, ac }) {
  const cpi = ev / ac, spi = ev / pv;
  return { cv: ev - ac, sv: ev - pv, cpi, spi, eacTipico: bac / cpi, eacAtipico: ac + (bac - ev), eacCombinado: ac + (bac - ev) / (cpi * spi), vacTipico: bac - bac / cpi, tcpi: (bac - ev) / (bac - ac) };
}
module.exports = { cpm, te, vari, phi, compressao, evm };
