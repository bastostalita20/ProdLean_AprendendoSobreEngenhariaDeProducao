/* =====================================================================
   TESTE AUTOMÁTICO DO APP (para quem desenvolve; não precisa para usar)
   Percorre a nova experiência (início, consultar, problemas, desafio,
   estudar, Modo Estágio, favoritos) e todos os módulos e níveis errando de propósito, zera e recupera
   vidas, revisa até D+30, testa congelamento da ofensiva, capa/níveis,
   discursivas, glossário, retenção, quiz solo/grupo, flashcards, telas,
   modo offline, abertura por arquivo e larguras de tela.
   Como rodar (precisa de Node.js e Playwright):
     cd app && python3 -m http.server 8765 &
     node testes/teste-app.js /tmp     (capturas de tela vão para /tmp)
   ===================================================================== */
const { chromium, devices } = require('playwright');
const path = require('path');
const fs = require('fs');
const SP = process.argv[2] || '/tmp';
const log = (...a) => console.log(...a);
const falhas = [];
const checar = (cond, msg) => { if (!cond) { falhas.push(msg); log('   ❌ ' + msg); } };

async function novaPagina(b, url, extra = {}) {
  const ctx = await b.newContext({ ...devices['Pixel 7'], ...extra });
  const p = await ctx.newPage();
  p.erros = [];
  p.on('pageerror', e => p.erros.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error') p.erros.push('console: ' + m.text()); });
  p.on('dialog', d => d.accept());
  await p.goto(url);
  await p.waitForSelector('.topbar');
  return { ctx, p };
}
async function qAtual(p) {
  // a questão exibida (já com os números sorteados, se for modelo)
  return p.evaluate(() => document.querySelector('#qarea')._q);
}
// Responde a questão atual (certo ou errado) e avança
async function responder(p, certo = true) {
  const q = await qAtual(p);
  if (!q) throw new Error('questão não identificada');
  if (q.tipo === 'discursiva') {
    await p.click('#verificar');
    await p.click(`#disc-aval [data-a="${certo ? 2 : 0}"]`);
    return q;
  }
  if (q.tipo === 'multipla' || q.tipo === 'caso' || q.tipo === 'lacuna')
    await p.click(`#qarea [data-i="${certo ? q.correta : (q.correta + 1) % q.opcoes.length}"]`);
  else if (q.tipo === 'vf') await p.click(`[data-v="${(q.correta === certo) ? 1 : 0}"]`);
  else if (q.tipo === 'ligar') {
    if (!certo) { await p.click('[data-l="0"]'); await p.click('[data-r="1"]'); }
    for (let i = 0; i < q.pares.length; i++) { await p.click(`[data-l="${i}"]`); await p.click(`[data-r="${i}"]`); }
  } else if (q.tipo === 'ordenar') {
    const ordem = q.itens.map((_, i) => i); if (!certo) [ordem[0], ordem[1]] = [ordem[1], ordem[0]];
    for (const i of ordem) await p.click(`[data-add="${i}"]`);
  } else if (q.tipo === 'calculo') await p.fill('#num', certo ? String(q.resposta).replace('.', ',') : '99999');
  await p.click('#verificar');
  const ok = !!(await p.$('.sheet.ok'));
  if (ok !== certo) throw new Error(`esperava ${certo ? 'acerto' : 'erro'} em ${q.id} (${q.tipo})`);
  await p.click('#continuar-q');
  return q;
}
// Faz uma lição num nível; "errarTipos" = tipos em que erra uma vez
async function fazerLicao(p, lid, errarTipos = [], nivel = null) {
  const nv = nivel || await p.evaluate(id => niveisDaLicao(LICOES.find(l => l.id === id))[0], lid);
  await p.evaluate(r => ir(r), `licao/${lid}/${nv}`);
  const errados = new Set();
  p.vistas = new Set();
  for (let g = 0; g < 120; g++) {
    if (await p.$('#prox')) { if (await p.$('[data-revelar]')) await p.click('[data-revelar]'); await p.click('#prox'); continue; }
    if (await p.$('#qarea')) {
      const q = await qAtual(p);
      p.vistas.add(q.id);
      const errar = (errarTipos.includes(q.tipo) || errarTipos.includes('*')) && !errados.has(q.id) && !(errarTipos.includes('*') ? false : errados.has(q.tipo));
      if (errar) { errados.add(q.id); errados.add(q.tipo); }
      await responder(p, !errar);
      continue;
    }
    break;
  }
  return (await p.textContent('h1')).trim();
}
async function recuperarVidas(p) {
  await p.click('text=Revisar para recuperar vidas'); await p.waitForSelector('#qarea');
  while (await p.$('#qarea')) await responder(p, true);
}

(async () => {
  const b = await chromium.launch();

  // ===== 1) Fluxo completo via http =====
  const { ctx, p } = await novaPagina(b, 'http://localhost:8765/index.html');
  const info = await p.evaluate(() => ({ mods: MODS.map(m => m.id), licoes: LICOES.length, q: Object.keys(Q).length, erros: errosConteudo }));
  log('módulos:', info.mods.join(', '), '| lições:', info.licoes, '| questões:', info.q, '| erros de conteúdo:', info.erros.length ? info.erros : 'nenhum');
  checar(!info.erros.length, 'conteúdo com erros de validação');

  // Banco de questões e números sorteados
  const banco = await p.evaluate(() => {
    const modelos = Object.values(Q).filter(q => q.variaveis);
    let variaram = 0;
    modelos.forEach(q => { const a = Parametros.instanciar(q), b = Parametros.instanciar(q), c = Parametros.instanciar(q);
      if (a.pergunta !== b.pergunta || b.pergunta !== c.pergunta) variaram++; });
    return { total: Object.keys(Q).length, modelos: modelos.length, variaram, extras: (window.BANCO || []).length };
  });
  log(`banco: ${banco.total} questões (${banco.extras} do banco extra, ${banco.modelos} com números sorteados; ${banco.variaram} mudaram entre sorteios)`);
  checar(banco.modelos >= 50 && banco.variaram >= banco.modelos - 2, 'modelos com números sorteados variam a cada vez');

  // Trilha paralela: M14 libera após o M13, mesmo sem M2/M4
  const par = await p.evaluate(() => {
    const salvo = JSON.stringify(S.licoes);
    LICOES.filter(l => ['m01', 'm13'].includes(l.modulo)).forEach(l => S.licoes[l.id] = { data: hoje(), acertos: 1, total: 1, vezes: 1 });
    const r = { m14: licaoLiberada('m14-l1'), m04: licaoLiberada('m04-l1'), m14l2: licaoLiberada('m14-l2') };
    S.licoes = JSON.parse(salvo);
    r.m14antes = licaoLiberada('m14-l1');
    return r;
  });
  checar(par.m14 && !par.m04 && !par.m14l2 && !par.m14antes, 'trilha paralela do M14 (libera após o M13)');

  // Capa da lição com nível único (M1)
  await p.evaluate(() => ir('licao/m01-l1')); await p.waitForTimeout(150);
  checar(await p.$('#comecar') && (await p.$$('.lvl-card')).length === 3, 'capa da lição do M1 com os 3 níveis');

  // Módulos do curso: todas as lições em todos os níveis. Grade: 1º tópico de cada disciplina (amostra de todas).
  const licoes = await p.evaluate(() => LICOES.filter(l => !modulo(l.modulo).grade || modulo(l.modulo).licoes[0].id === l.id).map(l => ({ id: l.id, niveis: niveisDaLicao(l) })));
  const errosPorLicao = { 'm01-l1': ['multipla'], 'm01-l2': ['ligar', 'ordenar'], 'm01-l4': ['lacuna'], 'm01-l7': ['calculo'], 'm13-l3': ['calculo', 'caso'], 'm13-l10': ['ligar', 'vf'], 'm02-l2': ['discursiva'], 'm02-l4': ['calculo'] };
  let vidasZeradas = 0;
  for (const l of licoes) {
    for (const nv of l.niveis) {
      const erros = nv === l.niveis[0] ? (errosPorLicao[l.id] || []) : [];
      let r = await fazerLicao(p, l.id, erros, nv);
      if (r.includes('Acabaram as vidas')) { vidasZeradas++; await recuperarVidas(p); r = await fazerLicao(p, l.id, [], nv); }
      if (!r.includes('Lição concluída')) throw new Error(`lição não concluiu: ${l.id}/${nv} → ${r}`);
    }
  }
  const st = await p.evaluate(() => ({ xp: S.xpTotal, revisao: Object.keys(S.revisao).length, conq: Object.keys(S.conquistas),
    m02niveis: LICOES.filter(l => l.modulo === 'm02').every(l => ['facil', 'medio', 'dificil'].every(n => nivelConcluido(l.id, n))) }));
  log(`após todas as lições e níveis: XP ${st.xp} · revisões pendentes ${st.revisao} · vidas zeraram ${vidasZeradas}x e foram recuperadas`);
  log('   conquistas:', st.conq.join(', '));
  checar(st.m02niveis, 'M2: todos os níveis de todas as lições concluídos');
  checar(st.conq.includes('mod-m02') && st.conq.includes('dificil-5'), 'conquistas do M2 e do nível Difícil');

  // Recomendação quando o desempenho é baixo (erra quase tudo no Fácil de m02-l6)
  await p.evaluate(() => { S.vidas = 5; salvar(); });
  const rr = await fazerLicao(p, 'm02-l6', ['*'], 'facil');
  if (rr.includes('Lição concluída')) {
    const txt = await p.textContent('body');
    checar(txt.includes('Recomendação') && txt.includes('Resumo da lição'), 'recomendação + resumo após desempenho baixo');
    await p.screenshot({ path: SP + '/n-resultado-baixo.png', fullPage: true });
  } else checar(false, 'lição de recomendação não concluiu: ' + rr);

  // Sorteio: com 4 questões por lição, a lição mostra só 4 do banco
  await p.evaluate(() => { S.config.porSessao = 4; S.vidas = 5; salvar(); });
  const rs = await fazerLicao(p, 'm02-l5', [], 'medio');
  const poolMedio = await p.evaluate(() => doNivel(LICOES.find(l => l.id === 'm02-l5').questoes, 'medio').length);
  checar(rs.includes('Lição concluída') && p.vistas.size === 4 && poolMedio > 4, `sorteio de 4 questões de um banco de ${poolMedio}`);
  await p.evaluate(() => { S.config.porSessao = 6; salvar(); });

  // Capa com níveis (M2)
  await p.evaluate(() => { S.config.nivel = 'facil'; salvar(); ir('licao/m02-l5'); }); await p.waitForTimeout(150);
  checar((await p.$$('.lvl-card')).length === 3, 'capa mostra 3 níveis');
  await p.click('.lvl-card[data-n="dificil"]');
  checar((await p.textContent('#comecar')).includes('Difícil'), 'seleção de nível na capa');
  checar((await p.textContent('body')).includes('Pré-requisitos') && (await p.textContent('body')).includes('Ao final, você será capaz de'), 'capa com objetivos e pré-requisitos');
  await p.screenshot({ path: SP + '/n-capa.png', fullPage: true });
  await p.click('#comecar'); await p.waitForTimeout(150);
  checar(await p.evaluate(() => location.hash) === '#licao/m02-l5/dificil' && await p.evaluate(() => S.config.nivel) === 'dificil', 'começar no nível escolhido e lembrar preferência');
  for (let i = 0; i < 2; i++) await p.click('#prox');
  await p.screenshot({ path: SP + '/n-bloco-legenda.png', fullPage: true });

  // Revisão D+1 → … → D+30
  for (let etapa = 0; etapa < 5; etapa++) {
    await p.evaluate(() => { for (const k in S.revisao) S.revisao[k].proxima = hoje(); salvar(); ir('revisao/pendentes'); });
    await p.waitForTimeout(100);
    while (await p.$('#qarea')) await responder(p, true);
  }
  const rev = await p.evaluate(() => ({ pendentes: Object.keys(S.revisao).length, dominadas: S.dominadas }));
  log('revisão até dominar:', JSON.stringify(rev));
  checar(rev.pendentes === 0, 'todas as revisões dominadas');

  // Retenção confirmada: acertar de novo 7+ dias depois
  const ret = await p.evaluate(() => {
    const q = Q['m02-q038']; S.questoes[q.id] = { acertos: 1, erros: 0, desde: hoje(-8) };
    registrarResposta(q, true); return !!S.questoes[q.id].confirmada;
  });
  checar(ret, 'retenção confirmada após 7 dias');

  // Congelamento da ofensiva
  const cong = await p.evaluate(() => {
    const r = {};
    S.ofensiva = { atual: 5, recorde: 5, ultimoDia: hoje(-2), congeladoEm: null };
    r.visivelAntes = ofensivaVisivel(); ganharXP(1); r.depois = S.ofensiva.atual;
    S.ofensiva.ultimoDia = hoje(-2); r.segundaFalta = ofensivaVisivel();
    S.ofensiva = { atual: 6, recorde: 6, ultimoDia: hoje(), congeladoEm: hoje(-1) }; salvar();
    return r;
  });
  checar(cong.visivelAntes === 5 && cong.depois === 6 && cong.segundaFalta === 0, 'congelamento da ofensiva');

  // Quiz: filtro por nível e partida perfeita
  const filtro = await p.evaluate(() => { S.config.nivel = 'facil'; const a = perguntasQuiz(999).every(x => !x.q.nivel || x.q.nivel === 'facil'); S.config.nivel = 'dificil'; const b2 = perguntasQuiz(999).some(x => x.q.nivel === 'dificil'); salvar(); return a && b2; });
  checar(filtro, 'quiz respeita o nível padrão');
  await p.evaluate(() => ir('quiz')); await p.click('#solo');
  for (let i = 0; i < 10; i++) {
    await p.waitForSelector('.k-tile');
    const certa = await p.evaluate(() => {
      const alts = [...document.querySelectorAll('.k-tile')].map(x => x.textContent.slice(1).trim());
      const q = Q[document.querySelector('.k-question').dataset.qid];
      return alts.indexOf(q.tipo === 'vf' ? (q.correta ? 'Verdadeiro' : 'Falso') : q.opcoes[q.correta]);
    });
    await p.click(`.k-tile[data-i="${certa}"]`); await p.click('#seg');
  }
  log('quiz perfeito:', (await p.textContent('h1')).trim());
  await p.evaluate(() => ir('quiz')); await p.click('#grupo'); await p.click('#add'); await p.click('#comecar');
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 3; j++) { await p.click('#pronto'); await p.click(`.k-tile[data-i="${j % 2}"]`); await p.click('#seg'); }
    await p.click('#seg');
  }
  checar((await p.textContent('h1')).includes('Pódio'), 'quiz em grupo');

  // Flashcards do M2
  await p.evaluate(() => ir('flashcards/m02'));
  let c = 0; while (await p.$('#carta') && c < 80) { await p.click('#carta'); await p.click(`[data-a="${c === 0 ? 0 : 2}"]`); c++; }
  checar((await p.textContent('h1')).includes('Baralho concluído'), 'flashcards do M2');

  // Glossário com busca
  await p.evaluate(() => ir('glossario')); await p.fill('#busca', 'folga');
  const nGlos = await p.$$eval('.glos-item', x => x.length);
  checar(nGlos >= 2, 'glossário com busca (achou ' + nGlos + ' termos para “folga”)');
  await p.screenshot({ path: SP + '/n-glossario.png', fullPage: true });

  // Grade curricular: disciplinas convertidas, trilha por período, conteúdo e mapas mentais A4
  const g = await p.evaluate(() => ({ n: disciplinas().length, periodos: new Set(disciplinas().map(m => m.periodo)).size,
    semQuestao: LICOES.filter(l => modulo(l.modulo).grade && !l.questoes.length).length,
    feitas: disciplinas().filter(m => licaoConcluida(m.licoes[0].id)).length }));
  log(`grade: ${g.n} disciplinas em ${g.periodos} períodos; 1º tópico concluído em ${g.feitas}`);
  checar(g.n >= 50 && g.periodos === 10 && !g.semQuestao && g.feitas === g.n, 'grade: todas as disciplinas carregadas e com exercícios');
  await p.evaluate(() => ir('estudar')); await p.waitForTimeout(150);
  checar((await p.$$('.hub-card')).length === 3, 'Estudar mantém Exercícios, Mapas mentais e Conteúdo');
  await p.click('.hub-card.ex'); await p.waitForTimeout(150);
  checar((await p.textContent('h1')).includes('Exercícios') && await p.$('a[href="#trilha/grade/1"]'), 'Exercícios abre a interface de estudo (com acesso à grade)');
  await p.evaluate(() => ir('trilha/grade/3')); await p.waitForTimeout(150);
  checar((await p.$$('.pchips a')).length === 10 && (await p.textContent('body')).includes('Equações Diferenciais Ordinárias'), 'trilha da grade por período');
  await p.evaluate(() => ir('conteudo/g-calc1')); await p.waitForTimeout(150);
  const tc = await p.textContent('body');
  checar(tc.includes('Derivadas') && tc.includes('Na produção') && (await p.$$('.topico')).length >= 3, 'conteúdo da disciplina com tópicos e aplicações');
  await p.evaluate(() => ir('conteudo/m03')); await p.waitForTimeout(150);
  checar((await p.$$('details.periodo')).length >= 5, 'conteúdo de um módulo do curso');
  for (const id of ['g-calc1', 'g-engeco', 'm06']) {
    await p.evaluate(x => ir('mapa/' + x), id); await p.waitForTimeout(300);
    const mp = await p.evaluate(() => { const a = document.querySelector('#a4'); return { h: a.scrollHeight, ramos: a.querySelectorAll('.ramo').length, linhas: a.querySelectorAll('#lig path').length, aviso: document.querySelector('#aviso-mapa').textContent }; });
    checar(mp.ramos >= 3 && mp.linhas === mp.ramos && mp.h <= 1123 && !mp.aviso.startsWith('⚠️'), `mapa mental A4 de ${id} (${mp.ramos} ramos)`);
  }
  await p.click('[data-op="formulas"]'); await p.waitForTimeout(150);
  checar(!(await p.$('#a4 .fx')), 'mapa: desmarcar “Fórmulas” remove as fórmulas');
  await p.evaluate(() => ir('mapa/g-calc1')); await p.waitForTimeout(300);
  await p.pdf({ path: SP + '/mapa-a4.pdf', format: 'A4', printBackground: true });
  const pdf = fs.readFileSync(SP + '/mapa-a4.pdf', 'latin1');
  checar((pdf.match(/\/Type\s*\/Page[^s]/g) || []).length === 1, 'mapa impresso ocupa exatamente 1 folha A4');


  // ===== Nova experiência: Início, Consultar, Problemas, Desafio, Estudar, Modo Estágio =====
  await p.evaluate(() => ir('inicio')); await p.waitForTimeout(150);
  checar((await p.$$('.path-card')).length === 4 && await p.$('#busca-home'), 'início com pesquisa e os 4 caminhos');
  checar(JSON.stringify(await p.$$eval('#nav a', a => a.map(x => x.dataset.tab))) === JSON.stringify(['inicio', 'consultar', 'problemas', 'desafio', 'estudar']), 'navegação: Início + 4 caminhos');
  checar((await p.textContent('body')).includes('Continue de onde parou') && (await p.textContent('body')).includes('Seu progresso'), 'início mostra continuar e progresso reais');
  await p.fill('#busca-home', 'estoque de segurança'); await p.waitForTimeout(100);
  checar(await p.$eval('#res-home .mini', a => a.getAttribute('href')) === '#ferramenta/estoque-seguranca', 'pesquisa do início acha a ferramenta primeiro');
  await p.press('#busca-home', 'Enter'); await p.waitForTimeout(150);
  checar((await p.evaluate(() => location.hash)).startsWith('#consultar/') && (await p.$$('#res .mini')).length >= 5, 'Enter abre Consultar com os resultados');
  for (const [q, esperado] of [['takt', '#ferramenta/takt'], ['OEE', '#ferramenta/oee'], ['derivada', null], ['NR-17', null]]) {
    const r = await p.evaluate(x => buscar(x).map(e => e.href), q);
    checar(r.length > 0 && (!esperado || r[0] === esperado), `busca “${q}” (${r.length} resultados)`);
  }
  // Ficha de ferramenta: 30 s → 3 min → prática → teste → aprofunde
  await p.evaluate(() => ir('ferramenta/estoque-seguranca')); await p.waitForTimeout(150);
  const fic = await p.evaluate(() => ({ s: [...document.querySelectorAll('.csec')].map(x => x.id), links: [...document.querySelectorAll('#c-aprofunde a')].map(a => a.getAttribute('href')), txt: document.body.textContent }));
  checar(['c-30s', 'c-3min', 'c-pratica', 'c-teste', 'c-aprofunde'].every(x => fic.s.includes(x)), 'ficha com os 5 níveis de consulta');
  checar(['O que é', 'Para que serve', 'Quando usar', 'Quais dados preciso', 'Erros comuns', 'Exemplo prático'].every(t => fic.txt.includes(t)), 'ficha: o que é, para que serve, quando usar, dados, exemplo e erros');
  checar(fic.links.includes('#conteudo/g-logist/g-logist-l2') && fic.links.some(h => h.startsWith('#problema/')), 'ficha leva ao conteúdo completo e aos problemas');
  const xpAntes = await p.evaluate(() => S.xpTotal);
  await p.click('#testar'); await responder(p, true); await p.waitForTimeout(100);
  checar((await p.textContent('#teste-area')).includes('Você acertou') && await p.evaluate(() => S.xpTotal) > xpAntes, 'teste rápido dentro da ficha');
  await p.click('#fav');
  checar(await p.evaluate(() => S.favoritos.length === 1 && S.favoritos[0].k === 'f:estoque-seguranca'), 'salvar nos favoritos');
  await p.click('#c-aprofunde a[href="#conteudo/g-logist/g-logist-l2"]'); await p.waitForTimeout(200);
  checar(!!(await p.$('#tp-g-logist-l2')) && /estoque de segurança/i.test(await p.textContent('#tp-g-logist-l2')), 'link direto para o tópico do conteúdo');
  await p.evaluate(() => ir('conteudo/m03/m03-l6')); await p.waitForTimeout(150);
  checar(await p.$eval('#lic-m03-l6', d => d.open), 'link direto abre a lição certa no conteúdo do módulo');
  // Ficha de conceito (glossário) e de lição
  const termo = await p.evaluate(() => modulo('m03').glossario[0].termo);
  await p.evaluate(t => ir('consulta/' + encodeURIComponent('g:m03:' + t)), termo); await p.waitForTimeout(150);
  checar((await p.$$('.csec')).length >= 3 && (await p.textContent('.resumo-box')).length > 20, `ficha de conceito (“${termo}”)`);
  await p.evaluate(() => ir('consulta/' + encodeURIComponent('l:m04-l5'))); await p.waitForTimeout(150);
  checar((await p.textContent('body')).includes('Takt') && await p.$('#c-aprofunde a[href="#licao/m04-l5"]'), 'ficha de lição com link para os exercícios');
  // Problemas: categoria → problema → ferramentas
  await p.evaluate(() => ir('problemas')); await p.waitForTimeout(150);
  checar((await p.$$('.cat-card')).length === 12, 'Problemas com 12 categorias');
  await p.click('.cat-card[href="#problemas/estoque"]'); await p.waitForTimeout(100);
  await p.click('.mini[href="#problema/estoque-demais"]'); await p.waitForTimeout(100);
  const fer = await p.$$eval('.mini', a => a.map(x => x.getAttribute('href')));
  checar(['curva-abc', 'giro-estoque', 'lec', 'estoque-seguranca', 'ponto-pedido', 'previsao-demanda'].every(f => fer.includes('#ferramenta/' + f)), '“Tenho estoque demais” → 6 ferramentas');
  await p.evaluate(() => ir('problemas')); await p.fill('#busca-prob', 'estoque alto'); await p.waitForTimeout(100);
  checar(await p.$eval('#res-prob .mini', a => a.getAttribute('href')) === '#problema/estoque-demais', 'busca por problema em linguagem do dia a dia');
  // Desafio do dia
  const xpD = await p.evaluate(() => S.xpTotal);
  await p.evaluate(() => ir('desafio')); await p.waitForTimeout(150);
  const idDia = await p.evaluate(() => S.desafioDia.id);
  await responder(p, true); await p.waitForTimeout(100);
  const td = await p.textContent('body');
  checar(td.includes('Por quê?') && td.includes('Na prática') && td.includes('Quer entender melhor?') && await p.evaluate(id => S.desafios[id].acertou, idDia) && await p.evaluate(() => S.xpTotal) === xpD + 10, 'desafio do dia: resposta, por quê, na prática, conteúdo e +10 XP');
  await p.evaluate(() => ir('desafio')); await p.waitForTimeout(100);
  checar(!(await p.$('#qarea')) && (await p.textContent('body')).includes('Resposta certa'), 'desafio do dia não repete no mesmo dia');
  await p.evaluate(() => ir('desafio/historico')); await p.waitForTimeout(100);
  checar((await p.$$('.mini')).length === 1, 'histórico de desafios');
  // Modo Estágio (opcional) prioriza a área
  await p.evaluate(() => ir('estagio')); await p.click('[data-a="pcp"]'); await p.waitForTimeout(100);
  checar(await p.evaluate(() => S.config.estagio) === 'pcp', 'ativar Modo Estágio');
  await p.evaluate(() => ir('problemas')); await p.waitForTimeout(100);
  checar(await p.$eval('.cat-card', a => a.classList.contains('fav')), 'Modo Estágio: categorias da área primeiro');
  await p.evaluate(() => ir('desafio/extra')); await p.waitForTimeout(100);
  checar((await p.textContent('body')).includes('📅 PCP'), 'Modo Estágio: desafio da área');
  await p.evaluate(() => ir('estagio')); await p.click('#desligar');
  checar(await p.evaluate(() => S.config.estagio) === null, 'desativar Modo Estágio');
  // Estudar: por assunto, área e nível
  await p.evaluate(() => ir('estudar/assuntos')); await p.waitForTimeout(100);
  checar((await p.$$('.card')).length === 7, 'Estudar por assunto: 7 módulos');
  await p.evaluate(() => ir('estudar/areas/exatas')); await p.waitForTimeout(100);
  checar((await p.textContent('body')).includes('Cálculo a Uma Variável') && (await p.textContent('body')).includes('Estatística Aplicada'), 'Estudar por área');
  await p.evaluate(() => ir('estudar/nivel/medio')); await p.waitForTimeout(100);
  checar(await p.evaluate(() => S.config.nivel) === 'medio', 'Estudar por nível define o nível padrão');
  // Persistência: recarregar mantém favoritos, histórico e desafios
  await p.reload(); await p.waitForSelector('.topbar');
  checar(await p.evaluate(() => S.favoritos.length === 1 && S.historico.length >= 3 && Object.keys(S.desafios).length >= 1), 'favoritos, histórico e desafios persistem após recarregar');
  await p.evaluate(() => ir('salvos')); await p.waitForTimeout(100);
  checar((await p.$$('.mini')).length >= 4, 'tela de favoritos e histórico');
  // Todas as telas
  for (const r of ['inicio', 'consultar', 'ferramentas', 'ferramenta/oee', 'problemas', 'problemas/qualidade', 'problema/maquina-para', 'desafio', 'estudar', 'estudar/aprofundar', 'estagio', 'salvos', 'exercicios', 'trilha', 'trilha/grade/5', 'conteudo', 'mapas', 'mapa/g-po1', 'revisar', 'ouvir', 'perfil', 'conquistas', 'config', 'glossario/m02']) {
    await p.evaluate(x => ir(x), r); await p.waitForTimeout(150);
    await p.screenshot({ path: `${SP}/n-${r.replace(/\//g, '-')}.png`, fullPage: true });
  }
  checar((await p.textContent('body')).includes('Glossário'), 'tela de glossário por módulo');
  await p.evaluate(() => ir('perfil')); await p.waitForTimeout(100);
  checar((await p.textContent('body')).includes('Retenção confirmada'), 'perfil com conclusão × acerto × retenção');
  log('erros de página (http):', p.erros.length ? p.erros : 'nenhum');
  checar(!p.erros.length, 'sem erros de JavaScript');
  await ctx.close();

  // ===== 2) Primeiro acesso e depois offline =====
  const o = await novaPagina(b, 'http://localhost:8765/index.html');
  await o.p.evaluate(() => navigator.serviceWorker.ready); await o.p.waitForTimeout(1200);
  await o.ctx.setOffline(true);
  await o.p.reload(); await o.p.waitForSelector('.topbar');
  const off = await o.p.evaluate(() => ({ m: MODS.length, l: LICOES.length }));
  log('offline no 1º acesso → módulos:', off.m, '| lições:', off.l);
  checar(off.m === info.mods.length, 'offline carrega todos os módulos');
  await o.ctx.close();

  // ===== 3) Abrindo pelo arquivo (dois cliques) =====
  const f = await novaPagina(b, 'file://' + path.resolve(__dirname, '../app/index.html'));
  const rf = await fazerLicao(f.p, 'm01-l1');
  checar(rf.includes('Lição concluída') && !f.p.erros.length, 'abrir pelo arquivo (file://)');
  await f.ctx.close();

  // ===== 4) Larguras de tela: 320 px (celular pequeno), tablet e desktop =====
  for (const [nome, vp] of [['320', { width: 320, height: 640 }], ['tablet', { width: 768, height: 1024 }], ['desktop', { width: 1280, height: 800 }]]) {
    const cx = await b.newContext({ viewport: vp });
    const pg = await cx.newPage(); let larg = true;
    for (const r of ['licao/m01-l1', 'inicio', 'ferramenta/mrp', 'problemas', 'desafio', 'estudar', 'conteudo/g-logist', 'conteudo/g-calc1', 'conteudo/m03', 'consulta/l%3Ag-logist-l2']) {
      await pg.goto('http://localhost:8765/index.html#' + r); await pg.waitForTimeout(400);
      if (!(await pg.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1))) { larg = false; log('   rolagem horizontal em', nome, r); }
    }
    checar(larg, `sem rolagem horizontal em ${nome}`);
    await pg.screenshot({ path: `${SP}/n-largura-${nome}.png`, fullPage: true });
    await cx.close();
  }
  // ===== 5) Ouvir o conteúdo (a fala é interceptada: o teste confere o que seria lido) =====
  const ov = await b.newContext({ ...devices['Pixel 7'] });
  const po = await ov.newPage(); const errosOv = []; po.on('pageerror', e => errosOv.push(e.message));
  await po.addInitScript(() => { window.__falas = []; SpeechSynthesis.prototype.speak = function (u) { window.__falas.push(u.text); }; });
  await po.goto('http://localhost:8765/index.html'); await po.waitForSelector('.topbar');
  for (const [rota, sel, deveTer] of [
    ['conteudo/m03', '#ouvir-mod', 'Planejamento'], ['conteudo/m03/m03-l6', '[data-ouvir-l="m03-l6"]', 'Capacidade'],
    ['conteudo/g-logist', '#ouvir-tudo', 'Curva ABC'], ['conteudo/g-logist', '[data-ouvir-tp="1"]', 'Gestão de estoques'], ['conteudo/g-logist', '#ouvir', 'Logística'],
    ['ferramenta/lec', '#ouvir-ficha', 'O que é'], ['consulta/l%3Am04-l5', '#ouvir-ficha', 'Takt'], ['problema/estoque-demais', '#ouvir-prob', 'Por onde começar']]) {
    await po.evaluate(r => ir(r), rota); await po.waitForTimeout(150);
    await po.evaluate(() => { window.__falas = []; }); await po.click(sel); await po.waitForTimeout(50);
    const r = await po.evaluate(() => ({ n: __falas.length, txt: __falas.join(' '), barra: !document.querySelector('#listenbar').classList.contains('hidden') }));
    checar(r.n > 0 && r.barra && r.txt.includes(deveTer) && !r.txt.includes('|'), `ouvir: ${rota} ${sel} (${r.n} frases)`);
    await po.click('#listen-stop');
  }
  checar(await po.evaluate(() => document.querySelector('#listenbar').classList.contains('hidden')), 'botão Parar encerra a leitura');
  checar(!errosOv.length, 'ouvir sem erros de JavaScript');
  await ov.close();
  await b.close();
  log(falhas.length ? `\n❌ ${falhas.length} FALHA(S):\n- ` + falhas.join('\n- ') : '\n✅ TODOS OS TESTES PASSARAM');
  process.exit(falhas.length ? 1 : 0);
})().catch(e => { console.error('FALHOU:', e.message); process.exit(1); });
