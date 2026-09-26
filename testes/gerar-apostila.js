/* =====================================================================
   GERADOR DE APOSTILA
   Transforma um arquivo de conteúdo do app (app/conteudo/modulo-XX.js)
   em uma apostila em Markdown para ler, imprimir ou estudar fora do app.
   Assim o conteúdo tem UMA fonte só (o arquivo de dados) e não duplica.
   Uso:  node testes/gerar-apostila.js modulo-02.js curso/03-modulo-02-projetos.md
   ===================================================================== */
const fs = require('fs');
const path = require('path');
const [arq, saida] = process.argv.slice(2);
if (!arq || !saida) { console.error('Uso: node testes/gerar-apostila.js modulo-XX.js saida.md'); process.exit(1); }

global.window = global.self = globalThis;
require(path.resolve(__dirname, '../app/parametros.js'));
require(path.resolve(__dirname, '../app/conteudo', arq));
const m = window.MODULOS[0];
// Junta as questões do banco extra que pertencem a este módulo
require(path.resolve(__dirname, '../app/conteudo/banco-questoes.js'));
(window.BANCO || []).forEach(item => {
  const l = m.licoes.find(x => x.id === item.licao);
  if (l) { const q = Object.assign({}, item); delete q.licao; l.questoes.push(q); }
});

const NIVEIS = { facil: '🌱 Fácil — Fundamentos', medio: '🔧 Médio — Aplicação', dificil: '🧠 Difícil — Aprofundamento' };
const ROTULO = {
  conceito: '🔴 Conceito-chave', atencao: '🟡 Atenção', dica: '🟢 Dica prática', formula: '🔵 Fórmula', conexao: '🟣 Conexão',
  bobo: '😂 Exemplo do dia a dia', serio: '🏭 Na empresa', mnemonico: '🔊 Para memorizar', recall: '🤔 Antes de ler…',
  mapa: '🧠 Mapa', texto: '📖', contexto: '🏭 Por que isso importa', exemplo: '🧮 Exemplo resolvido', passos: '🛠️ Passo a passo',
  limitacao: '⚖️ Limitações e trade-offs', referencia: '📚 Para aprofundar'
};
const letra = i => 'abcdefgh'[i];
const quebra = t => String(t || '').replace(/\n/g, '  \n');
const niveisDaLicao = l => { const s = new Set(); [...(l.blocos || []), ...(l.questoes || [])].forEach(x => x.nivel && s.add(x.nivel)); const r = ['facil', 'medio', 'dificil'].filter(n => s.has(n)); return r.length ? r : ['unico']; };
const doNivel = (lista, n) => (lista || []).filter(x => n === 'unico' || !x.nivel || x.nivel === n);
const porNivel = (v, n) => v == null ? null : (typeof v === 'string' || Array.isArray(v)) ? v : v[n];

let md = `# ${m.icone} Módulo ${m.numero} — ${m.titulo}\n\n`;
md += `> 📄 Apostila gerada automaticamente a partir de \`app/conteudo/${arq}\` (a mesma fonte do app).\n`;
md += `> Exemplos numéricos são ilustrativos, criados para fins didáticos.\n\n`;
md += `## 🎯 Objetivo do módulo\n\n${m.objetivo}\n\n`;
md += `## 🗺️ Lições\n\n| # | Lição | Níveis |\n|---|---|---|\n`;
m.licoes.forEach((l, i) => { md += `| ${i + 1} | ${l.titulo} | ${niveisDaLicao(l).map(n => NIVEIS[n] ? NIVEIS[n].split(' ')[0] : '📘').join(' ')} |\n`; });
md += `\n## 🎧 Resumo para ouvir\n\n> ${m.resumoAudio}\n\n---\n\n`;

const gabarito = [];
m.licoes.forEach((l, i) => {
  md += `## ${i + 1}. ${l.icone || ''} ${l.titulo}\n\n`;
  if (l.prerequisitos && l.prerequisitos.length) md += `**🧩 Pré-requisitos:** ${l.prerequisitos.map(p => p.texto).join('; ')}.\n\n`;
  niveisDaLicao(l).forEach(n => {
    md += `### ${NIVEIS[n] || '📘 Nível único'}\n\n`;
    const obj = porNivel(l.objetivos, n);
    if (obj && obj.length) md += `**🎯 Ao final, você será capaz de:**\n${obj.map(o => `- ${o}`).join('\n')}\n\n`;
    doNivel(l.blocos, n).forEach(b => {
      if (b.tipo === 'recall') { md += `> **${ROTULO.recall}** ${b.pergunta}\n>\n> <details><summary>Revelar</summary>${b.resposta}</details>\n\n`; return; }
      const rep = b.titulo && (ROTULO[b.tipo] || '').toLowerCase().endsWith(b.titulo.toLowerCase());
      md += `**${ROTULO[b.tipo] || ''}${b.titulo && !rep ? ' — ' + b.titulo : ''}**\n\n`;
      md += b.tipo === 'mapa' ? '```\n' + b.texto + '\n```\n\n' : quebra(b.texto) + '\n\n';
      if (b.legenda) md += `| Símbolo | Significado |\n|---|---|\n${b.legenda.map(([s, d]) => `| ${s} | ${d} |`).join('\n')}\n\n`;
    });
    const qs = doNivel(l.questoes, n);
    if (qs.length) {
      md += `#### ✍️ Exercícios\n\n`;
      qs.forEach((q0, k) => {
        // Questões-modelo: a apostila mostra um exemplo sorteado (no app os números mudam a cada vez)
        const q = Parametros.instanciar(q0);
        const dado = q0.variaveis ? ' 🎲 *(números sorteados; no app mudam a cada vez)*' : '';
        const num = `${i + 1}.${n === 'unico' ? '' : n[0].toUpperCase()}${k + 1}`;
        md += `**${num}** ${q.tipo === 'caso' && q.contexto ? '*' + q.contexto + '* ' : ''}${q.pergunta}${dado}\n`;
        if (q.opcoes && q.tipo !== 'lacuna') md += q.opcoes.map((o, j) => `   ${letra(j)}) ${o}`).join('\n') + '\n';
        if (q.tipo === 'lacuna') md += `   Opções: ${q.opcoes.join(' · ')}\n`;
        if (q.tipo === 'vf') md += `   ( ) Verdadeiro  ( ) Falso\n`;
        if (q.tipo === 'ligar') md += q.pares.map((p, j) => `   ${j + 1}. ${p[0]}`).join('\n') + '\n   Ligar com: ' + q.pares.map(p => p[1]).sort().join(' · ') + '\n';
        if (q.tipo === 'ordenar') md += `   Itens (fora de ordem): ${q.itens.slice().sort().join(' · ')}\n`;
        md += '\n';
        let r = '';
        if (q.tipo === 'multipla' || q.tipo === 'caso' || q.tipo === 'lacuna') r = `${letra(q.correta)}) ${q.opcoes[q.correta]}`;
        if (q.tipo === 'vf') r = q.correta ? 'Verdadeiro' : 'Falso';
        if (q.tipo === 'ligar') r = q.pares.map(p => `${p[0]} → ${p[1]}`).join('; ');
        if (q.tipo === 'ordenar') r = q.itens.join(' → ');
        if (q.tipo === 'calculo') r = `${(+(+q.resposta).toFixed(4)).toLocaleString('pt-BR')} ${q.unidade || ''}  \n${quebra(q.resolucao)}`;
        if (q.tipo === 'discursiva') r = `${q.respostaModelo}${q.criterios ? '  \nCritérios: ' + q.criterios.join('; ') + '.' : ''}`;
        let extra = q.explicacao ? `  \n${q.explicacao}` : '';
        if (q.justificativas) extra += '  \n' + q.opcoes.map((o, j) => `${j === q.correta ? '✅' : '❌'} ${letra(j)}) ${q.justificativas[j]}`).join('  \n');
        gabarito.push(`**${num}** ${r}${extra}`);
      });
    }
    const res = porNivel(l.resumo, n);
    if (res) md += `#### 📝 Resumo (${(NIVEIS[n] || 'nível único').split(' — ')[0]})\n\n${res}\n\n`;
  });
  md += `---\n\n`;
});

if (m.glossario) md += `## 📖 Glossário\n\n| Termo | Definição |\n|---|---|\n${m.glossario.slice().sort((a, b) => a.termo.localeCompare(b.termo, 'pt-BR')).map(g => `| **${g.termo}** | ${g.definicao} |`).join('\n')}\n\n`;
if (m.flashcards) md += `## 🃏 Flashcards\n\n| Frente | Verso |\n|---|---|\n${m.flashcards.map(c => `| ${c.frente} | ${c.verso} |`).join('\n')}\n\n`;
md += `## 📝 Gabarito comentado\n\n${gabarito.join('\n\n')}\n`;
fs.writeFileSync(path.resolve(process.cwd(), saida), md.replace(/\*\*\*\*/g, ''));
console.log(`Apostila gerada: ${saida} (${m.licoes.length} lições, ${gabarito.length} exercícios)`);
