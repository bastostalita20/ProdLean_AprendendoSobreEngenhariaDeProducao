/* =====================================================================
   TESTE AUTOMÁTICO DO APP (para quem desenvolve; não precisa para usar)
   Percorre todos os módulos e níveis errando de propósito, zera e recupera
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
  await p.evaluate(() => ir('inicio')); await p.waitForTimeout(150);
  checar((await p.$$('.hub-card')).length === 3, 'início com Exercícios, Mapas mentais e Conteúdo');
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

  // Todas as telas
  for (const r of ['inicio', 'exercicios', 'trilha', 'trilha/grade/5', 'conteudo', 'mapas', 'mapa/g-po1', 'revisar', 'ouvir', 'perfil', 'conquistas', 'config', 'glossario/m02']) {
    await p.evaluate(x => ir(x), r); await p.waitForTimeout(150);
    await p.screenshot({ path: `${SP}/n-${r.replace('/', '-')}.png`, fullPage: true });
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
    const pg = await cx.newPage(); await pg.goto('http://localhost:8765/index.html#licao/m01-l1'); await pg.waitForTimeout(400);
    const larg = await pg.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    checar(larg, `sem rolagem horizontal em ${nome}`);
    await pg.screenshot({ path: `${SP}/n-largura-${nome}.png`, fullPage: true });
    await cx.close();
  }
  await b.close();
  log(falhas.length ? `\n❌ ${falhas.length} FALHA(S):\n- ` + falhas.join('\n- ') : '\n✅ TODOS OS TESTES PASSARAM');
  process.exit(falhas.length ? 1 : 0);
})().catch(e => { console.error('FALHOU:', e.message); process.exit(1); });
