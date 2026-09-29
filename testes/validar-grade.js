/* Valida os arquivos da grade (app/conteudo/grade/*.js): ids únicos, tópicos com
   exercícios, campos obrigatórios das questões e modelos com números sorteados.
   Uso: node testes/validar-grade.js */
const fs = require('fs'), path = require('path');
global.window = global.self = globalThis;
require('../app/parametros.js');
const dir = path.resolve(__dirname, '../app/conteudo/grade');
fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort().forEach(f => require(path.join(dir, f)));
require('../app/conteudo/indice.js');
self.ARQUIVOS_MODULOS.filter(f => !f.startsWith('grade/')).forEach(f => require(path.resolve(__dirname, '../app/conteudo', f)));
const D = window.DISCIPLINAS || [], erros = [];
const ids = new Set();
(window.MODULOS || []).forEach(m => m.licoes.forEach(l => (l.questoes || []).forEach(q => ids.add(q.id))));
(window.BANCO || []).forEach(q => ids.add(q.id));
const idsD = new Set();
D.forEach(d => {
  const e = m => erros.push(`${d.id}: ${m}`);
  if (idsD.has(d.id)) e('id de disciplina repetido'); idsD.add(d.id);
  ['codigo', 'nome', 'periodo', 'area', 'intro'].forEach(k => d[k] || e('falta ' + k));
  (d.prereq || []).forEach(p => D.some(x => x.id === p) || e('pré-requisito inexistente ' + p));
  d.topicos.forEach((t, i) => { const n = d.questoes.filter(q => q.t === i).length; if (n < 2) e(`tópico ${i} com ${n} questões`); (t.formulas || []).forEach(f => Array.isArray(f) && f.length === 2 || e('fórmula mal formada no tópico ' + i)); });
  d.questoes.forEach(q => {
    if (ids.has(q.id)) e('id repetido ' + q.id); ids.add(q.id);
    if (!(q.t >= 0 && q.t < d.topicos.length)) e(q.id + ': t inválido');
    if (!q.pergunta) e(q.id + ': sem pergunta');
    if (['multipla', 'lacuna', 'caso'].includes(q.tipo) && !(q.correta >= 0 && q.correta < (q.opcoes || []).length)) e(q.id + ': correta inválida');
    if (q.tipo === 'vf' && typeof q.correta !== 'boolean') e(q.id + ': vf sem boolean');
    if (q.tipo === 'calculo' && typeof q.resposta !== 'number' && !q.variaveis) e(q.id + ': cálculo sem resposta');
    if (q.justificativas && q.justificativas.length !== q.opcoes.length) e(q.id + ': justificativas');
    if (!['multipla', 'lacuna', 'caso', 'vf', 'ligar', 'ordenar', 'calculo', 'discursiva'].includes(q.tipo)) e(q.id + ': tipo ' + q.tipo);
    if (q.variaveis) Parametros.validar(q, 300).forEach(m => e(q.id + ': ' + m));
  });
});
(window.SIGLAS || []).forEach(([sg, sig, ctx]) => { if (!sg || !sig) erros.push('sigla incompleta ' + sg); if (ctx) try { new RegExp(ctx); } catch (x) { erros.push('contexto inválido na sigla ' + sg); } });
const porP = {}; D.forEach(d => porP[d.periodo] = (porP[d.periodo] || 0) + 1);
console.log(`${D.length} disciplinas · ${D.reduce((s, d) => s + d.questoes.length, 0)} questões · por período ${JSON.stringify(porP)}`);
if (erros.length) { console.log(erros.join('\n')); process.exit(1); } else console.log('✓ grade sem erros');
