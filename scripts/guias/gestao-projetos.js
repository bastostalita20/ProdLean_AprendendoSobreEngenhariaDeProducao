/* =====================================================================
   GUIAS VISUAIS — GESTÃO DE PROJETOS
   02 Caminho crítico (CPM) e PERT · 03 Valor agregado (EVM) · 04 PMBOK
   Os números dos exemplos vêm do mesmo motor e dos mesmos dados das
   questões (scripts/questoes/gp-motor.js e gestao-projetos.js).
   Gera app/conteudo/guias/gestao-projetos.js · uso: node scripts/guias/gestao-projetos.js [--checar]
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path");
const { cpm, te, vari, phi, compressao, evm } = require("../questoes/gp-motor");
const SAIDA = path.resolve(__dirname, "../../app/conteudo/guias/gestao-projetos.js");
const dec = (n, c = 2) => n.toFixed(c).replace(".", ",");
const fmtN = n => Math.round(n).toLocaleString("pt-BR");

// mesmos dados das questões
const REDE = [{ id: "A", dur: 3 }, { id: "B", dur: 4, pred: ["A"] }, { id: "C", dur: 2, pred: ["A"] }, { id: "D", dur: 5, pred: ["B"] }, { id: "E", dur: 3, pred: ["C"] }, { id: "F", dur: 2, pred: ["D", "E"] }];
const COMP = { A: { max: 1, custoDia: 800 }, B: { max: 2, custoDia: 500 }, C: { max: 1, custoDia: 300 }, D: { max: 2, custoDia: 700 }, E: { max: 1, custoDia: 200 }, F: { max: 1, custoDia: 1000 } };
const PERT = [["A", 2, 4, 6], ["B", 3, 5, 13], ["D", 4, 6, 8]];
const EV0 = { bac: 200000, pv: 100000, ev: 80000, ac: 90000 };

const r = cpm(REDE), m12 = compressao(REDE, COMP, 12);
const Te = PERT.reduce((s, x) => s + te(x[1], x[2], x[3]), 0), sg = Math.sqrt(PERT.reduce((s, x) => s + vari(x[1], x[3]), 0)), p18 = phi((18 - Te) / sg) * 100;
const e = evm(EV0);
// curva S: PV logístico até o BAC em 20 semanas (metade na semana 10); EV e AC até a semana 10 (hoje)
const sem = Array.from({ length: 21 }, (_, i) => i), s = t => 1 / (1 + Math.exp(-(t - 10) / 2.6)), s0 = s(0), s20 = s(20);
const pv = sem.map(t => Math.round(EV0.bac / 1000 * (s(t) - s0) / (s20 - s0)));
const ev = sem.map(t => t <= 10 ? Math.round(pv[t] * EV0.ev / EV0.pv) : null), ac = sem.map(t => t <= 10 ? Math.round(pv[t] * EV0.ac / EV0.pv) : null);
if (r.T !== 14 || r.critico.join("") !== "ABDF" || m12.custo !== 1000 || Math.abs(p18 - 85.2) > 0.05 || pv[10] !== 100 || e.eacTipico !== 225000) { console.error("❌ guias de projetos: números não conferem"); process.exit(1); }

const REF = { pmbok6: "PMI. Guia PMBOK, 6ª ed. (2017).", pmbok7: "PMI. Guia PMBOK, 7ª ed. (2021).", moreira: "MOREIRA, D. A. Administração da Produção e Operações. Cengage.", vargas: "VARGAS, R. Análise de Valor Agregado em Projetos. Brasport." };
const G = [
  { id: "cpm-pert", numero: 2, categoria: "Gestão de Projetos", titulo: "Caminho crítico e PERT", subtitulo: "Duração, folgas, probabilidade e compressão", assunto: "f:caminho-critico", disciplina: "Gestão de Projetos",
    blocos: [
      { tipo: "texto", cor: 0, titulo: "O que é", ic: "info", texto: "**CPM** acha a sequência de atividades que define a duração do projeto (caminho crítico). **PERT** acrescenta a incerteza: três estimativas por atividade e a probabilidade de cumprir um prazo.", destaque: "Atrasou no caminho crítico, atrasou o projeto." },
      { tipo: "figura", cor: 1, titulo: "Rede com ida e volta", ic: "projeto", largo: true, figura: { tipo: "rede", atividades: REDE, mostrar: "completo" } },
      { tipo: "passos", cor: 2, titulo: "Ida e volta", ic: "lista", itens: ["Ida: IC = maior TC das predecessoras", "TC = IC + duração", "Duração do projeto = maior TC", "Volta: TT = menor IT das sucessoras", "IT = TT − duração", "Folga total = IT − IC; zero = crítica"] },
      { tipo: "tabela", cor: 3, titulo: "Cálculo do exemplo", ic: "tabela", largo: true, nota: `Duração ${r.T} dias · crítico ${r.critico.join("–")}`,
        tabela: { canto: "Atividade", colunas: r.ordem, linhas: [["IC", "es"], ["TC", "ef"], ["IT", "ls"], ["TT", "lf"], ["Folga total", "ft"], ["Folga livre", "fl"]].map(([rot, k]) => ({ rotulo: rot, valores: r.ordem.map(i => r.por[i][k]), forte: k === "ft" })) } },
      { tipo: "formulas", cor: 4, titulo: "Fórmulas", ic: "formula", itens: [
        { tex: "FT = IT - IC = TT - TC", legenda: [["FT", "folga total", "dias"], ["FL", "folga livre = IC da sucessora − TC", "dias"]] },
        { tex: "t_e = \\dfrac{a + 4m + b}{6} \\quad \\sigma^2 = \\left(\\dfrac{b-a}{6}\\right)^2", legenda: [["a, m, b", "otimista, mais provável, pessimista", "dias"]] },
        { tex: "Z = \\dfrac{T - T_e}{\\sigma_{\\text{caminho}}}", legenda: [["σ", "raiz da soma das variâncias do caminho crítico", "dias"]] }] },
      { tipo: "texto", cor: 5, titulo: "PERT: exemplo", ic: "grafico",
        texto: `Caminho crítico com \\(T_e = ${dec(Te, 0)}\\) e \\(\\sigma = ${dec(sg, 2)}\\) dias.\nPrazo de 18 dias: \\(Z = ${dec((18 - Te) / sg, 2)} \\Rightarrow P \\approx ${dec(p18, 0)}\\%\\).\nPara 95%: \\(T = ${dec(Te, 0)} + 1{,}645 \\times ${dec(sg, 2)} \\approx ${dec(Te + 1.645 * sg, 1)}\\) dias.`,
        destaque: "Prometer o Te dá só 50% de chance de cumprir." },
      { tipo: "texto", cor: 0, titulo: "Compressão (crashing)", ic: "relogio",
        texto: `\\(\\text{custo/dia} = \\dfrac{C_{acel} - C_{normal}}{D_{normal} - D_{acel}}\\)\nReduza a atividade **crítica** mais barata, um dia por vez, e reveja os caminhos. No exemplo, ir de ${r.T} para 12 dias custa R$ ${fmtN(m12.custo)} (B em 2 dias).` },
      { tipo: "lista", cor: 1, titulo: "Erros comuns", ic: "alerta", estilo: "erro", itens: ["Somar desvios-padrão em vez de variâncias", "Comprimir atividade fora do caminho crítico", "Esquecer que outro caminho pode virar crítico", "Confundir folga total com folga livre"] },
      { tipo: "lista", cor: 2, titulo: "Na prova", ic: "lampada", estilo: "dica", itens: ["Caminho crítico = mais longo = folga zero", "Folga de um caminho = duração do projeto − duração do caminho", "Na volta, use o **menor** IT das sucessoras", "z = 1,645 para 95%; z = 1,28 para 90%"] },
      { tipo: "lista", cor: 3, titulo: "Conecta com", ic: "ligacao", estilo: "ok", itens: ["**EAP:** de onde saem as atividades", "**Gantt:** o mesmo cronograma em barras", "**Corrente crítica:** pulmões em vez de folgas escondidas", "**Valor agregado:** controla prazo e custo"] }
    ], referencias: [REF.moreira, REF.pmbok6] },
  { id: "valor-agregado", numero: 3, categoria: "Gestão de Projetos", titulo: "Valor agregado (EVM)", subtitulo: "Prazo e custo medidos em dinheiro", assunto: "f:valor-agregado", disciplina: "Gestão de Projetos",
    blocos: [
      { tipo: "texto", cor: 0, titulo: "O que é", ic: "info", texto: "Técnica que compara **o que foi planejado**, **o que foi feito** e **o que foi gasto**, tudo em dinheiro, para saber se o projeto está atrasado e se está caro.", destaque: "Gastou metade do orçamento? Isso não diz nada sem saber quanto foi entregue." },
      { tipo: "comparacao", cor: 1, titulo: "Os três números", ic: "dados", lados: [
        { titulo: "PV", sub: "valor planejado", itens: ["Quanto deveria estar pronto até hoje (em R$)"] },
        { titulo: "EV / AC", sub: "valor agregado / custo real", itens: ["EV: quanto do trabalho foi entregue (em R$ do orçamento)", "AC: quanto foi gasto de fato"] }] },
      { tipo: "figura", cor: 2, titulo: "Curva S (em R$ mil)", ic: "grafico", largo: true,
        figura: { tipo: "curva", x: sem.map(String), marca: 10, rotuloMarca: "hoje (sem. 10)", rotuloY: "R$ mil", legenda: "Curva S do projeto: valor planejado, valor agregado e custo real acumulados por semana",
          series: [{ nome: "PV (planejado)", rotulo: "PV", valores: pv, tracejado: true }, { nome: "AC (custo real)", rotulo: "AC 90", valores: ac, dy: -4 }, { nome: "EV (agregado)", rotulo: "EV 80", valores: ev, dy: 8 }] } },
      { tipo: "formulas", cor: 3, titulo: "Variações e índices", ic: "formula", itens: [
        { tex: "CV = EV - AC \\qquad SV = EV - PV", legenda: [["CV", "variação de custo (< 0: acima do orçamento)", "R$"], ["SV", "variação de prazo (< 0: atrasado)", "R$"]] },
        { tex: "CPI = \\dfrac{EV}{AC} \\qquad SPI = \\dfrac{EV}{PV}", legenda: [["CPI", "desempenho de custo (< 1: caro)", "—"], ["SPI", "desempenho de prazo (< 1: atrasado)", "—"]] }] },
      { tipo: "tabela", cor: 4, titulo: "Previsões no término", ic: "tabela", largo: true,
        tabela: { canto: "Indicador", colunas: ["Fórmula", "Quando usar", "Exemplo"], texto: true, linhas: [
          { rotulo: "EAC típica", valores: ["\\(BAC / CPI\\)", "o desempenho de custo vai continuar", `R$ ${fmtN(e.eacTipico)}`] },
          { rotulo: "EAC atípica", valores: ["\\(AC + (BAC - EV)\\)", "o desvio foi pontual", `R$ ${fmtN(e.eacAtipico)}`] },
          { rotulo: "EAC com prazo", valores: ["\\(AC + \\dfrac{BAC - EV}{CPI \\cdot SPI}\\)", "precisa cumprir a data final", `R$ ${fmtN(e.eacCombinado)}`] },
          { rotulo: "VAC", valores: ["\\(BAC - EAC\\)", "folga ou estouro no fim", `R$ ${fmtN(e.vacTipico)}`] },
          { rotulo: "TCPI", valores: ["\\(\\dfrac{BAC - EV}{BAC - AC}\\)", "CPI necessário daqui em diante", dec(e.tcpi)] }] } },
      { tipo: "texto", cor: 5, titulo: "Exemplo (semana 10)", ic: "calculadora",
        texto: `BAC R$ 200 mil · PV 100 · EV 80 · AC 90 (R$ mil)\n\\(CPI = 80/90 = ${dec(e.cpi)}\\) · \\(SPI = 80/100 = ${dec(e.spi)}\\)\n\\(CV = -10\\) mil · \\(SV = -20\\) mil`,
        destaque: "Atrasado e acima do orçamento." },
      { tipo: "tabela", cor: 0, titulo: "Como ler", ic: "olho", tabela: { canto: "", colunas: ["CPI < 1", "CPI ≥ 1"], texto: true, linhas: [
        { rotulo: "SPI < 1", valores: ["atrasado e caro", "atrasado, no orçamento"] }, { rotulo: "SPI ≥ 1", valores: ["adiantado, mas caro", "adiantado e econômico"] }] } },
      { tipo: "lista", cor: 1, titulo: "Erros comuns", ic: "alerta", estilo: "erro", itens: ["Comparar só AC com PV (sem o EV)", "Medir EV por horas gastas e não por entrega", "Usar sempre a mesma fórmula de EAC", "Comemorar SPI > 1 sem olhar o CPI"] },
      { tipo: "lista", cor: 3, titulo: "Conecta com", ic: "ligacao", estilo: "ok", itens: ["**EAP:** o EV é medido por pacote entregue", "**Cronograma:** dá o PV semana a semana", "**Riscos:** reservas entram no orçamento", "**Mudanças:** aprovadas atualizam o BAC"] },
      { tipo: "lista", cor: 2, titulo: "Na prova", ic: "lampada", estilo: "dica", itens: ["Tudo começa com **EV**: EV − AC, EV − PV, EV/AC, EV/PV", "Variação negativa ou índice < 1 = ruim", "ETC = EAC − AC", "TCPI > 1: terá de ser mais eficiente que o planejado"] }
    ], referencias: [REF.vargas, REF.pmbok6] },
  { id: "pmbok", numero: 4, categoria: "Gestão de Projetos", titulo: "PMBOK", subtitulo: "Visão geral do guia de gerenciamento de projetos", assunto: "g:g-gproj:PMBOK", disciplina: "Gestão de Projetos",
    blocos: [
      { tipo: "texto", cor: 0, titulo: "O que é", ic: "info", texto: "Guia de boas práticas publicado pelo **PMI** (Project Management Institute). Não é metodologia pronta: é um conjunto de conhecimentos que cada empresa adapta.", destaque: "Projeto: esforço temporário para criar um produto, serviço ou resultado único." },
      { tipo: "linha", cor: 1, titulo: "5 grupos de processos (6ª ed.)", ic: "processos", largo: true, etapas: [["Iniciação", "TAP, partes interessadas", "autoriza"], ["Planejamento", "escopo, EAP, cronograma", "detalha"], ["Execução", "equipe, entregas", "faz"], ["Monitoramento e controle", "o projeto inteiro", "compara e corrige"], ["Encerramento", "aceite, lições", "fecha"]] },
      { tipo: "lista", cor: 2, titulo: "10 áreas de conhecimento", ic: "modulo", estilo: "ok", itens: ["Integração · Escopo · Cronograma", "Custos · Qualidade · Recursos", "Comunicações · Riscos", "Aquisições · Partes interessadas"] },
      { tipo: "comparacao", cor: 3, titulo: "6ª × 7ª edição", ic: "historico", lados: [
        { titulo: "6ª (2017)", sub: "processos", itens: ["5 grupos, 10 áreas, 49 processos", "Entradas, ferramentas e técnicas, saídas"] },
        { titulo: "7ª (2021)", sub: "princípios e valor", itens: ["12 princípios", "8 domínios de desempenho", "Vale para preditivo, ágil e híbrido"] }] },
      { tipo: "lista", cor: 4, titulo: "8 domínios de desempenho (7ª ed.)", ic: "alvo", estilo: "ok", itens: ["Partes interessadas · Equipe", "Abordagem de desenvolvimento e ciclo de vida", "Planejamento · Trabalho do projeto", "Entrega · Medição · Incerteza"] },
      { tipo: "tabela", cor: 5, titulo: "Documentos-chave", ic: "conteudo", largo: true, tabela: { canto: "Documento", colunas: ["Para que serve", "Quando"], texto: true, linhas: [
        { rotulo: "TAP", valores: ["autoriza o projeto e nomeia o gerente", "iniciação"] }, { rotulo: "Declaração de escopo", valores: ["o que está dentro e fora", "planejamento"] },
        { rotulo: "EAP", valores: ["decompõe o escopo em pacotes (regra dos 100%)", "planejamento"] }, { rotulo: "Linhas de base", valores: ["escopo, prazo e custo aprovados para comparar", "planejamento"] },
        { rotulo: "Registro de riscos", valores: ["riscos, probabilidade, impacto e respostas", "o tempo todo"] }, { rotulo: "Lições aprendidas", valores: ["o que repetir e o que evitar", "o tempo todo e no fim"] }] } },
      { tipo: "tabela", cor: 0, titulo: "Estrutura × autoridade do GP", ic: "pessoas", tabela: { canto: "Estrutura", colunas: ["Autoridade"], texto: true, linhas: [
        { rotulo: "Funcional", valores: ["baixa"] }, { rotulo: "Matricial fraca", valores: ["baixa"] }, { rotulo: "Matricial balanceada", valores: ["média"] }, { rotulo: "Matricial forte", valores: ["alta"] }, { rotulo: "Projetizada", valores: ["total"] }] } },
      { tipo: "comparacao", cor: 1, titulo: "Ciclo de vida", ic: "trilha", lados: [
        { titulo: "Preditivo", sub: "cascata", itens: ["escopo definido no início", "mudança passa pelo controle"] },
        { titulo: "Adaptativo", sub: "ágil", itens: ["escopo evolui por iteração", "mudança é esperada"] }] },
      { tipo: "lista", cor: 3, titulo: "Erros comuns", ic: "alerta", estilo: "erro", itens: ["Tratar o PMBOK como metodologia pronta", "Achar que grupos de processos são fases", "Confundir TAP (autoriza) com declaração de escopo (detalha)", "Usar a estrutura de 6ª ed. para responder sobre a 7ª"] },
      { tipo: "lista", cor: 2, titulo: "Na prova", ic: "lampada", estilo: "dica", itens: ["Quem emite o TAP é o **patrocinador**", "Monitoramento e controle ocorre o tempo **todo**", "Mudança aprovada atualiza a linha de base", "Riscos: evitar, transferir, mitigar, aceitar, escalar"] }
    ], referencias: [REF.pmbok6, REF.pmbok7] }
];
const js = "/* Gerado por scripts/guias/gestao-projetos.js — NÃO edite à mão. */\n(window.GUIAS = window.GUIAS || []).push(..." + JSON.stringify(G) + ");\n";
if (process.argv.includes("--checar")) {
  if (!fs.existsSync(SAIDA) || fs.readFileSync(SAIDA, "utf8") !== js) { console.error("❌ guias de Gestão de Projetos desatualizados: rode  node scripts/guias/gestao-projetos.js"); process.exit(1); }
  console.log("✓ guias de Gestão de Projetos em dia");
} else { fs.mkdirSync(path.dirname(SAIDA), { recursive: true }); fs.writeFileSync(SAIDA, js); console.log(`guias visuais: ${G.map(g => g.titulo).join(", ")} → app/conteudo/guias/gestao-projetos.js`); }
