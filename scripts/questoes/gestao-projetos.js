/* =====================================================================
   BANCO DE QUESTÕES — GESTÃO DE PROJETOS (CPM/PERT, compressão, valor
   agregado, riscos e PMBOK)
   ---------------------------------------------------------------------
   Questões originais. Todo número de gabarito é CALCULADO aqui pelo motor
   (gp-motor.js) a partir dos dados do enunciado. Cada questão entra na
   lição do Módulo 2 do seu assunto (campo "licao").
   Gera app/conteudo/questoes/gp/gestao-projetos.{json,js}
   Uso: node scripts/questoes/gestao-projetos.js [--checar]
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path");
const { cpm, te, vari, phi, compressao, evm } = require("./gp-motor");
const DIR = path.resolve(__dirname, "../../app/conteudo/questoes/gp"), NOME = "gestao-projetos";
const L = { proj: "m02-l1", tap: "m02-l2", eap: "m02-l3", cpm: "m02-l4", pert: "m02-l5", risco: "m02-l6", evm: "m02-l7" };
const REF = {
  pmbok6: "PMI. Um Guia do Conhecimento em Gerenciamento de Projetos (Guia PMBOK), 6ª ed., 2017.",
  pmbok7: "PMI. Guia PMBOK, 7ª ed., 2021: princípios e domínios de desempenho.",
  vargas: "VARGAS, R. Gerenciamento de Projetos: estabelecendo diferenciais competitivos. Brasport.",
  kerzner: "KERZNER, H. Gestão de Projetos: as melhores práticas. Bookman.",
  evm: "PMI. Practice Standard for Earned Value Management; VARGAS, R. Análise de Valor Agregado em Projetos. Brasport.",
  moder: "MOREIRA, D. A. Administração da Produção e Operações. Cengage (CPM, PERT e compressão)."
};
const fmtN = n => n.toLocaleString("pt-BR");
const R$ = n => "R$ " + fmtN(n);
const dec = (n, c = 2) => n.toFixed(c).replace(".", ",");
const Q = [];
const add = q => Q.push(Object.assign({ topico: "gestao-projetos", estilo: "autoral" }, q));

// Redes usadas nas questões e nos guias
const REDE_SIMPLES = [{ id: "A", dur: 2 }, { id: "B", dur: 3, pred: ["A"] }, { id: "C", dur: 4, pred: ["A"] }, { id: "D", dur: 1, pred: ["B", "C"] }];
const REDE = [{ id: "A", dur: 3 }, { id: "B", dur: 4, pred: ["A"] }, { id: "C", dur: 2, pred: ["A"] }, { id: "D", dur: 5, pred: ["B"] }, { id: "E", dur: 3, pred: ["C"] }, { id: "F", dur: 2, pred: ["D", "E"] }];
const COMP = { A: { max: 1, custoDia: 800 }, B: { max: 2, custoDia: 500 }, C: { max: 1, custoDia: 300 }, D: { max: 2, custoDia: 700 }, E: { max: 1, custoDia: 200 }, F: { max: 1, custoDia: 1000 } };
const PERT = [["A", 2, 4, 6], ["B", 3, 5, 13], ["D", 4, 6, 8]]; // caminho crítico: [atividade, a, m, b]
const EV0 = { bac: 200000, pv: 100000, ev: 80000, ac: 90000 };
const rede = (ativ, mostrar) => ({ tipo: "rede", atividades: ativ, mostrar, legenda: mostrar === "duracao" ? "Rede de atividades (atividade no nó). O número é a duração em dias." : "" });

/* =============================== FÁCIL =============================== */
add({ id: "gp-f01", licao: L.proj, nivel: "facil", tipo: "multipla", tags: ["conceito de projeto", "PMBOK"], referencia: REF.pmbok6,
  pergunta: "Segundo o Guia PMBOK, projeto é um esforço **temporário** para criar um resultado **único**. Qual destas iniciativas é um projeto?",
  opcoes: ["Implantar uma nova linha de envase até março", "Programar a produção de toda semana", "Fazer a manutenção preventiva mensal das prensas", "Emitir as notas fiscais de saída todos os dias"], correta: 0,
  justificativas: ["Certo: tem início, fim e entrega única (a linha funcionando).", "É rotina que se repete: operação (processo contínuo).", "Repetitiva e contínua: operação de manutenção.", "Atividade diária e repetitiva: operação."],
  explicacao: "Temporário não quer dizer curto: quer dizer que tem fim definido. Único: o resultado não é igual ao de antes." });
add({ id: "gp-f02", licao: L.proj, nivel: "facil", tipo: "ordenar", tags: ["grupos de processos", "PMBOK 6ª ed."], referencia: REF.pmbok6,
  pergunta: "Coloque em ordem os **grupos de processos** do Guia PMBOK (6ª edição), pela primeira vez em que aparecem no projeto:",
  itens: ["Iniciação", "Planejamento", "Execução", "Monitoramento e controle", "Encerramento"],
  explicacao: "Os grupos se sobrepõem: monitoramento e controle acompanha o projeto inteiro. A 7ª edição troca a lógica de processos por princípios e domínios de desempenho, mas os grupos continuam muito cobrados em prova." });
add({ id: "gp-f03", licao: L.tap, nivel: "facil", tipo: "multipla", tags: ["TAP", "termo de abertura"], referencia: REF.pmbok6,
  pergunta: "Qual documento **autoriza formalmente** o projeto e dá ao gerente autoridade para usar recursos da organização?",
  opcoes: ["Termo de abertura do projeto (TAP)", "Estrutura analítica do projeto (EAP)", "Cronograma do projeto", "Registro de lições aprendidas"], correta: 0,
  justificativas: ["Certo: o TAP (project charter) é emitido pelo patrocinador e marca o início formal.", "A EAP decompõe o escopo; vem depois, no planejamento.", "O cronograma organiza as atividades no tempo; não autoriza o projeto.", "Lições aprendidas registram experiência; não autorizam nada."],
  explicacao: "No TAP: justificativa, objetivos mensuráveis, requisitos de alto nível, marcos, orçamento resumido, riscos iniciais, gerente e patrocinador." });
add({ id: "gp-f04", licao: L.eap, nivel: "facil", tipo: "vf", tags: ["EAP", "regra dos 100%"], referencia: REF.pmbok6,
  pergunta: "Pela regra dos 100%, a EAP deve conter todo o escopo do projeto, e os níveis de baixo somam exatamente o trabalho do nível de cima.",
  correta: true, explicacao: "Nada de fora do escopo entra, e nada do escopo fica de fora. O último nível da EAP são os pacotes de trabalho." });
{
  const r = cpm(REDE_SIMPLES);
  add({ id: "gp-f05", licao: L.cpm, nivel: "facil", tipo: "calculo", tags: ["CPM", "duração do projeto"], referencia: REF.moder,
    figura: rede(REDE_SIMPLES, "duracao"),
    pergunta: "Qual é a **duração mínima** do projeto representado na rede acima?",
    resposta: r.T, unidade: "dias", tolerancia: 0,
    resolucao: `Caminhos: \\(A \\to B \\to D = 2 + 3 + 1 = 6\\) e \\(A \\to C \\to D = 2 + 4 + 1 = 7\\).\nA duração é a do caminho mais longo (caminho crítico): \\(${r.T}\\) dias.`,
    explicacao: "O caminho crítico é o mais longo da rede: qualquer atraso nele atrasa o projeto." });
}
{
  const t = te(4, 6, 14);
  add({ id: "gp-f06", licao: L.pert, nivel: "facil", tipo: "calculo", tags: ["PERT", "tempo esperado"], referencia: REF.moder,
    pergunta: "Uma atividade tem estimativas otimista de 4 dias, mais provável de 6 dias e pessimista de 14 dias. Qual é o **tempo esperado** pelo PERT?",
    resposta: t, unidade: "dias", tolerancia: 0.01,
    resolucao: `\\(t_e = \\dfrac{a + 4m + b}{6} = \\dfrac{4 + 4 \\times 6 + 14}{6} = \\dfrac{42}{6} = ${dec(t, 0)}\\)`,
    explicacao: "O PERT dá peso 4 ao mais provável. A estimativa pessimista alta puxa o tempo esperado para cima." });
}
{
  const cpi = 40000 / 50000;
  add({ id: "gp-f07", licao: L.evm, nivel: "facil", tipo: "calculo", tags: ["valor agregado", "CPI"], referencia: REF.evm,
    pergunta: `Até hoje o projeto **agregou** ${R$(40000)} de trabalho (EV) e **gastou** ${R$(50000)} (AC). Qual é o índice de desempenho de custo (CPI)?`,
    resposta: cpi, tolerancia: 0.01,
    resolucao: `\\(CPI = \\dfrac{EV}{AC} = \\dfrac{40\\,000}{50\\,000} = ${dec(cpi)}\\)\nPara cada R$ 1,00 gasto, o projeto entregou R$ ${dec(cpi)} de trabalho: está acima do orçamento.`,
    explicacao: "CPI < 1: gastando mais do que o planejado para o que foi feito. CPI > 1: abaixo do orçamento." });
}
add({ id: "gp-f08", licao: L.risco, nivel: "facil", tipo: "multipla", tags: ["riscos", "respostas"], referencia: REF.pmbok6,
  pergunta: "A empresa contrata um **seguro** contra atraso na entrega de um equipamento importado. Que resposta ao risco é essa?",
  opcoes: ["Transferir", "Evitar", "Mitigar", "Aceitar"], correta: 0,
  justificativas: ["Certo: o impacto financeiro passa para um terceiro (a seguradora).", "Evitar seria eliminar a causa, por exemplo comprando um equipamento nacional.", "Mitigar reduziria a probabilidade ou o impacto, como antecipar o pedido.", "Aceitar seria não agir (ou só reservar contingência)."],
  explicacao: "Ameaças: evitar, transferir, mitigar, aceitar e escalar. Oportunidades: explorar, compartilhar, melhorar, aceitar e escalar." });

/* =============================== MÉDIO =============================== */
{
  const r = cpm(REDE), ids = r.ordem;
  add({ id: "gp-m01", licao: L.cpm, nivel: "medio", tipo: "tabela", tags: ["CPM", "ida e volta", "folga", "tabela"], referencia: REF.moder,
    figura: rede(REDE, "duracao"),
    pergunta: "Faça a ida e a volta na rede acima (durações em dias) e complete a tabela: início mais cedo (IC), término mais cedo (TC), início mais tarde (IT), término mais tarde (TT) e folga total (FT).",
    tabela: { canto: "Atividade", colunas: ids, linhas: [
      { rotulo: "Duração", valores: ids.map(i => r.por[i].dur) },
      { rotulo: "IC", valores: ids.map(i => r.por[i].es), editar: [1, 2, 3, 4, 5] },
      { rotulo: "TC", valores: ids.map(i => r.por[i].ef), editar: [1, 2, 3, 4, 5] },
      { rotulo: "IT", valores: ids.map(i => r.por[i].ls), editar: [0, 1, 2, 3, 4] },
      { rotulo: "TT", valores: ids.map(i => r.por[i].lf), editar: [0, 1, 2, 3, 4] },
      { rotulo: "FT", valores: ids.map(i => r.por[i].ft), editar: [0, 1, 2, 3, 4, 5] }] },
    resolucao: "Ida: \\(IC = \\max(TC_{\\text{predecessoras}})\\), \\(TC = IC + d\\). Volta (do fim para o começo): \\(TT = \\min(IT_{\\text{sucessoras}})\\), \\(IT = TT - d\\). Folga total: \\(FT = IT - IC\\).",
    explicacao: `Caminho crítico (folga zero): ${r.critico.join(" → ")}, com ${r.T} dias.` });
}
{
  const r = cpm(REDE);
  add({ id: "gp-m02", licao: L.cpm, nivel: "medio", tipo: "calculo", tags: ["CPM", "folga total"], referencia: REF.moder,
    figura: rede(REDE, "duracao"),
    pergunta: "Na rede acima, quantos dias a atividade **E** pode atrasar sem atrasar o projeto (folga total)?",
    resposta: r.por.E.ft, unidade: "dias", tolerancia: 0,
    resolucao: `Caminho de E: \\(A \\to C \\to E \\to F = 3 + 2 + 3 + 2 = 10\\). Caminho crítico: \\(${r.T}\\) dias.\n\\(FT_E = IT_E - IC_E = ${r.por.E.ls} - ${r.por.E.es} = ${r.por.E.ft}\\)`,
    explicacao: "A folga de um caminho não crítico é a diferença entre a duração do projeto e a duração desse caminho, e é compartilhada pelas atividades dele." });
}
{
  const T = PERT.reduce((s, x) => s + te(x[1], x[2], x[3]), 0), v = PERT.reduce((s, x) => s + vari(x[1], x[3]), 0), s = Math.sqrt(v), z = (18 - T) / s, p = phi(z) * 100;
  add({ id: "gp-m03", licao: L.pert, nivel: "medio", tipo: "calculo", tags: ["PERT", "probabilidade", "distribuição normal"], referencia: REF.moder,
    pergunta: `O caminho crítico tem três atividades, com estimativas (otimista; mais provável; pessimista) em dias: ${PERT.map(x => `${x[0]} (${x[1]}; ${x[2]}; ${x[3]})`).join(", ")}. Qual a **probabilidade (%)** de terminar em até 18 dias?`,
    resposta: Math.round(p * 10) / 10, unidade: "%", tolerancia: 1,
    resolucao: `\\(T_e = \\sum t_e = ${PERT.map(x => dec(te(x[1], x[2], x[3]), 0)).join(" + ")} = ${dec(T, 0)}\\)\n\\(\\sigma^2 = \\sum \\left(\\dfrac{b-a}{6}\\right)^2 = ${PERT.map(x => dec(vari(x[1], x[3]), 3)).join(" + ")} = ${dec(v, 3)}\\Rightarrow \\sigma = ${dec(s, 3)}\\)\n\\(Z = \\dfrac{18 - ${dec(T, 0)}}{${dec(s, 3)}} = ${dec(z, 2)}\\Rightarrow P \\approx ${dec(p, 1)}\\%\\) (tabela da normal)`,
    explicacao: "Soma-se a variância (não o desvio-padrão) das atividades do caminho crítico. Aceita-se ±1 ponto percentual pelo arredondamento da tabela." });
}
{
  const cd = (26000 - 20000) / (10 - 7);
  add({ id: "gp-m04", licao: L.pert, nivel: "medio", tipo: "calculo", tags: ["compressão", "crashing", "custo por dia"], referencia: REF.moder,
    pergunta: `Uma atividade leva 10 dias a um custo de ${R$(20000)}. Com hora extra, pode ser feita em 7 dias por ${R$(26000)}. Qual é o **custo de compressão por dia**?`,
    resposta: cd, unidade: "R$/dia", tolerancia: 0.01,
    resolucao: `\\(\\text{Custo/dia} = \\dfrac{C_{\\text{acelerado}} - C_{\\text{normal}}}{D_{\\text{normal}} - D_{\\text{acelerada}}} = \\dfrac{26\\,000 - 20\\,000}{10 - 7} = ${fmtN(cd)}\\)`,
    explicacao: "Na compressão, reduz-se primeiro a atividade crítica de menor custo por dia." });
}
{
  const e = evm(EV0);
  add({ id: "gp-m05", licao: L.evm, nivel: "medio", tipo: "tabela", tags: ["valor agregado", "variações", "EAC"], referencia: REF.evm,
    pergunta: `Projeto com orçamento total (BAC) de ${R$(EV0.bac)}. Na semana 10: valor planejado (PV) ${R$(EV0.pv)}, valor agregado (EV) ${R$(EV0.ev)} e custo real (AC) ${R$(EV0.ac)}. Complete em reais (sem centavos):`,
    tabela: { canto: "Indicador", colunas: ["Valor (R$)"], linhas: [
      { rotulo: "CV = EV − AC", valores: [e.cv], editar: [0] }, { rotulo: "SV = EV − PV", valores: [e.sv], editar: [0] },
      { rotulo: "EAC = BAC ÷ CPI", valores: [e.eacTipico], editar: [0] }, { rotulo: "VAC = BAC − EAC", valores: [e.vacTipico], editar: [0] }] },
    resolucao: `\\(CPI = \\dfrac{80\\,000}{90\\,000} = ${dec(e.cpi, 3)}\\); \\(EAC = \\dfrac{200\\,000}{${dec(e.cpi, 3)}} = ${fmtN(e.eacTipico)}\\); \\(VAC = 200\\,000 - ${fmtN(e.eacTipico)} = ${fmtN(e.vacTipico)}\\)`,
    explicacao: "Variação negativa é desfavorável: o projeto está atrasado (SV < 0) e acima do orçamento (CV < 0)." });
}
{
  const R = [[0.2, -50000], [0.1, -120000], [0.3, 40000]], vme = R.reduce((s, [p, i]) => s + p * i, 0);
  add({ id: "gp-m06", licao: L.risco, nivel: "medio", tipo: "calculo", tags: ["riscos", "VME", "reserva de contingência"], referencia: REF.pmbok6,
    pergunta: `Riscos identificados: ameaça 1 (probabilidade 20%, impacto −${R$(50000)}), ameaça 2 (10%, −${R$(120000)}) e uma oportunidade (30%, +${R$(40000)}). Qual **reserva de contingência** cobre o valor monetário esperado (VME) líquido?`,
    resposta: -vme, unidade: "R$", tolerancia: 0.01,
    resolucao: `\\(VME = \\sum P \\times I = 0{,}2(-50\\,000) + 0{,}1(-120\\,000) + 0{,}3(40\\,000) = ${fmtN(vme)}\\)\nReserva \\(= ${fmtN(-vme)}\\)`,
    explicacao: "Oportunidades entram com sinal positivo e compensam parte das ameaças. A reserva de contingência cobre riscos identificados; a de gerenciamento, os desconhecidos." });
}
add({ id: "gp-m07", licao: L.proj, nivel: "medio", tipo: "multipla", estilo: "concurso", tags: ["PMBOK 7ª ed.", "princípios", "domínios"], referencia: REF.pmbok7,
  pergunta: "Sobre a 7ª edição do Guia PMBOK (2021), assinale a alternativa correta.",
  opcoes: ["Organiza o conhecimento em 12 princípios e 8 domínios de desempenho, com foco em entrega de valor.",
    "Mantém os 49 processos da 6ª edição como estrutura central, apenas reagrupados.",
    "Substitui o gerenciamento de riscos por métodos ágeis.",
    "Torna obrigatório o ciclo de vida preditivo (cascata) em todos os projetos.",
    "Elimina o papel do gerente de projetos em equipes autogerenciadas."], correta: 0,
  justificativas: ["Correta.", "Os processos com entradas, ferramentas e saídas são o centro da 6ª edição, não da 7ª.", "A incerteza (riscos) é um dos 8 domínios de desempenho.", "A 7ª edição é agnóstica: vale para preditivo, adaptativo e híbrido.", "A liderança continua sendo um princípio; o papel pode ser exercido de formas diferentes."],
  explicacao: "Domínios: partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho do projeto, entrega, medição e incerteza." });
add({ id: "gp-m08", licao: L.proj, nivel: "medio", tipo: "multipla", tags: ["estrutura organizacional", "autoridade do GP"], referencia: REF.kerzner,
  pergunta: "Em qual estrutura organizacional o gerente de projetos costuma ter **mais autoridade** sobre recursos e orçamento?",
  opcoes: ["Projetizada", "Funcional", "Matricial fraca", "Matricial balanceada"], correta: 0,
  justificativas: ["Certo: a equipe é dedicada e responde ao gerente do projeto.", "Na funcional, quem manda é o gerente funcional; o GP é quase um coordenador.", "Na matricial fraca, o GP tem pouca autoridade (expeditor).", "Na balanceada, a autoridade é dividida com o gerente funcional."],
  explicacao: "Funcional → matricial fraca → balanceada → forte → projetizada: a autoridade do GP cresce nessa ordem." });

/* =============================== DIFÍCIL =============================== */
{
  const e = evm(EV0);
  add({ id: "gp-d01", licao: L.evm, nivel: "dificil", tipo: "calculo", tags: ["valor agregado", "EAC", "previsão"], referencia: REF.evm,
    pergunta: `Com BAC = ${R$(EV0.bac)}, PV = ${R$(EV0.pv)}, EV = ${R$(EV0.ev)} e AC = ${R$(EV0.ac)}, o patrocinador quer cumprir o prazo final mesmo com o atraso, o que pressiona custos. Qual é a **EAC** (estimativa no término) considerando os desempenhos de custo **e** de prazo?`,
    resposta: Math.round(e.eacCombinado), unidade: "R$", tolerancia: 1,
    resolucao: `\\(CPI = ${dec(e.cpi, 4)}\\), \\(SPI = ${dec(e.spi, 2)}\\)\n\\(EAC = AC + \\dfrac{BAC - EV}{CPI \\times SPI} = 90\\,000 + \\dfrac{120\\,000}{${dec(e.cpi * e.spi, 4)}} = ${fmtN(Math.round(e.eacCombinado))}\\)`,
    explicacao: `Comparação: EAC típica (BAC ÷ CPI) = ${R$(e.eacTipico)}; atípica (AC + BAC − EV) = ${R$(e.eacAtipico)}. Escolher a fórmula é decidir que desempenho deve continuar.` });
  add({ id: "gp-d02", licao: L.evm, nivel: "dificil", tipo: "calculo", tags: ["valor agregado", "TCPI"], referencia: REF.evm,
    pergunta: `No mesmo projeto (BAC ${R$(EV0.bac)}, EV ${R$(EV0.ev)}, AC ${R$(EV0.ac)}), qual **CPI** o restante do trabalho precisa ter para terminar dentro do BAC (TCPI)?`,
    resposta: Math.round(e.tcpi * 100) / 100, tolerancia: 0.01,
    resolucao: `\\(TCPI = \\dfrac{BAC - EV}{BAC - AC} = \\dfrac{200\\,000 - 80\\,000}{200\\,000 - 90\\,000} = \\dfrac{120\\,000}{110\\,000} = ${dec(e.tcpi)}\\)`,
    explicacao: `O projeto vem com CPI ${dec(e.cpi, 2)} e precisaria passar a ${dec(e.tcpi)}. Um TCPI muito acima do CPI atual indica que o BAC não é mais realista.` });
}
{
  const m = compressao(REDE, COMP, 9), r0 = cpm(REDE);
  add({ id: "gp-d03", licao: L.pert, nivel: "dificil", tipo: "calculo", tags: ["compressão", "crashing", "caminhos paralelos"], referencia: REF.moder,
    figura: rede(REDE, "duracao"),
    pergunta: `O projeto da rede acima dura ${r0.T} dias e precisa terminar em **9 dias**. Redução máxima e custo por dia: ${Object.entries(COMP).map(([id, c]) => `${id} (até ${c.max} d; ${R$(c.custoDia)}/d)`).join(", ")}. Qual o **menor custo** de compressão?`,
    resposta: m.custo, unidade: "R$", tolerancia: 0,
    resolucao: `Reduza sempre a atividade crítica mais barata e confira os outros caminhos:\n1) B em 2 dias (R$ 500/d): \\(14 \\to 12\\)\n2) D em 2 dias (R$ 700/d): \\(12 \\to 10\\). Agora \\(A \\to C \\to E \\to F\\) também tem 10 dias: são dois caminhos críticos.\n3) O último dia precisa sair dos dois caminhos ao mesmo tempo. B e D já estão no limite, então só servem atividades comuns aos dois: A (R$ 800/d) ou F (R$ 1.000/d). Escolha A.\nTotal: \\(2 \\times 500 + 2 \\times 700 + 1 \\times 800 = ${fmtN(m.custo)}\\)`,
    explicacao: "Quando outro caminho também fica crítico, cada dia a mais exige reduzir todos os caminhos críticos ao mesmo tempo: atividades comuns a eles ficam atraentes." });
}
{
  const r = cpm(REDE);
  add({ id: "gp-d04", licao: L.cpm, nivel: "dificil", tipo: "multipla", estilo: "concurso", tags: ["folga total", "folga livre"], referencia: REF.moder,
    figura: rede(REDE, "duracao"),
    pergunta: "Na rede acima, sobre a atividade **C**, é correto afirmar que:",
    opcoes: [`tem folga total de ${r.por.C.ft} dias e folga livre de ${r.por.C.fl} dia(s): atrasá-la não atrasa o projeto, mas atrasa o início mais cedo de E`,
      `tem folga total e folga livre de ${r.por.C.ft} dias`, "é crítica, pois está no início da rede", `tem folga livre de ${r.por.C.ft} dias e folga total zero`, "não tem folga, pois E depende dela"], correta: 0,
    justificativas: ["Correta: FT = IT − IC = 7 − 3 = 4; FL = IC(E) − TC(C) = 5 − 5 = 0.", "A folga livre de C é zero: qualquer atraso empurra E.", "C está fora do caminho crítico (A-B-D-F).", "É o contrário: a folga total é 4.", "Depender de C não tira a folga total do caminho C-E."],
    explicacao: "Folga total: atraso possível sem atrasar o projeto. Folga livre: atraso possível sem atrasar nenhuma sucessora. A folga do caminho C → E (4 dias) fica toda na última atividade, E." });
}
add({ id: "gp-d05", licao: L.evm, nivel: "dificil", tipo: "caso", tags: ["valor agregado", "interpretação"], referencia: REF.evm,
  contexto: "No relatório mensal, o projeto de automação mostra SPI = 1,15 e CPI = 0,82. A equipe comemora estar adiantada.",
  pergunta: "Qual é a leitura mais correta?",
  opcoes: ["O projeto está adiantado, mas gastando bem mais que o previsto pelo que entregou; possivelmente comprando prazo com hora extra ou recursos a mais", "Está tudo bem: SPI acima de 1 compensa o CPI", "O projeto está atrasado e abaixo do orçamento", "Os índices se anulam e a EAC fica igual ao BAC"], correta: 0,
  justificativas: ["Certo: SPI > 1 = adiantado; CPI < 1 = acima do orçamento. Juntos sugerem aceleração cara.", "Índices diferentes medem coisas diferentes; um não compensa o outro.", "É o contrário nos dois índices.", "Com CPI 0,82, a EAC típica fica cerca de 22% acima do BAC."],
  explicacao: "Avalie sempre os dois índices juntos e investigue a causa antes de comemorar." });
{
  const T = PERT.reduce((s, x) => s + te(x[1], x[2], x[3]), 0), s = Math.sqrt(PERT.reduce((t, x) => t + vari(x[1], x[3]), 0)), prazo = T + 1.645 * s;
  add({ id: "gp-d06", licao: L.pert, nivel: "dificil", tipo: "calculo", tags: ["PERT", "nível de confiança", "prazo"], referencia: REF.moder,
    pergunta: `No mesmo caminho crítico (Te = ${dec(T, 0)} dias, σ = ${dec(s, 3)} dias), que prazo (em dias, uma casa decimal) o gerente deve prometer para ter **95% de confiança**? Use z = 1,645.`,
    resposta: Math.round(prazo * 10) / 10, unidade: "dias", tolerancia: 0.1,
    resolucao: `\\(T_{95\\%} = T_e + z\\,\\sigma = ${dec(T, 0)} + 1{,}645 \\times ${dec(s, 3)} = ${dec(prazo, 1)}\\)`,
    explicacao: "Prometer o tempo esperado (Te) dá só 50% de chance de cumprir. A margem cresce com a incerteza (σ) do caminho crítico." });
}
add({ id: "gp-d07", licao: L.eap, nivel: "dificil", tipo: "caso", tags: ["controle integrado de mudanças", "linha de base"], referencia: REF.pmbok6,
  contexto: "Na metade do projeto, o cliente pede uma função a mais no software do equipamento. O técnico responsável acha simples e já começou a programar.",
  pergunta: "O que o gerente de projetos deve fazer?",
  opcoes: ["Registrar a solicitação de mudança, avaliar impacto em escopo, prazo, custo e riscos e submeter ao controle integrado de mudanças antes de executar", "Deixar o técnico seguir, já que é simples e agrada o cliente", "Recusar qualquer mudança depois da linha de base", "Aceitar a mudança e cortar testes para não atrasar"], correta: 0,
  justificativas: ["Certo: mudanças aprovadas atualizam a linha de base; as não aprovadas não entram.", "Isso é scope creep (aumento de escopo sem controle): o trabalho extra não estava na linha de base.", "Mudanças podem ser aprovadas; o problema é fazê-las sem análise.", "Cortar qualidade para absorver escopo cria outro problema."],
  explicacao: "Toda mudança em escopo, prazo ou custo passa pelo controle integrado de mudanças (comitê ou patrocinador)." });

/* ---------- conferências ---------- */
const erros = [], ids = new Set(), cont = { facil: 0, medio: 0, dificil: 0 };
Q.forEach(q => {
  if (ids.has(q.id)) erros.push("id repetido " + q.id); ids.add(q.id); cont[q.nivel]++;
  if (!Object.values(L).includes(q.licao)) erros.push(q.id + ": lição inválida");
  if (["multipla", "caso"].includes(q.tipo) && (!q.justificativas || q.justificativas.length !== q.opcoes.length)) erros.push(q.id + ": justificativas");
  if (!q.referencia) erros.push(q.id + ": referência");
});
if (Q.length < 20 || cont.facil < 7 || cont.medio < 7 || cont.dificil < 6) erros.push("distribuição " + JSON.stringify(cont));
const chk = (id, v, tol = 0) => { const q = Q.find(x => x.id === id); if (Math.abs(q.resposta - v) > tol) erros.push(`${id}: ${q.resposta} ≠ ${v}`); };
chk("gp-f05", 7); chk("gp-f06", 7, 1e-9); chk("gp-f07", 0.8, 1e-9); chk("gp-m02", 4); chk("gp-m03", 85.2, 0.05); chk("gp-m04", 2000); chk("gp-m06", 10000, 1e-6);
chk("gp-d01", 258750); chk("gp-d02", 1.09); chk("gp-d03", 3200); chk("gp-d06", 19.1);
if (erros.length) { console.error("❌ " + erros.join("\n❌ ")); process.exit(1); }

const json = JSON.stringify({ $schema: "../schema.json", topico: "gestao-projetos", disciplina: "Gestão de Projetos", licoes: Object.values(L), gerado_por: "scripts/questoes/gestao-projetos.js", questoes: Q }, null, 2) + "\n";
const js = "/* Gerado por scripts/questoes/gestao-projetos.js — NÃO edite à mão. */\n(window.BANCO = window.BANCO || []).push(...JSON.parse(" + JSON.stringify(JSON.stringify(Q)) + "));\n";
const alvo = { [NOME + ".json"]: json, [NOME + ".js"]: js };
if (process.argv.includes("--checar")) {
  if (Object.keys(alvo).some(f => !fs.existsSync(path.join(DIR, f)) || fs.readFileSync(path.join(DIR, f), "utf8") !== alvo[f])) { console.error("❌ questões de Gestão de Projetos desatualizadas: rode  node scripts/questoes/gestao-projetos.js"); process.exit(1); }
  console.log(`✓ Gestão de Projetos: ${Q.length} questões em dia`);
} else {
  fs.mkdirSync(DIR, { recursive: true }); Object.entries(alvo).forEach(([f, c]) => fs.writeFileSync(path.join(DIR, f), c));
  console.log(`Gestão de Projetos: ${Q.length} questões (fácil ${cont.facil} · médio ${cont.medio} · difícil ${cont.dificil}) → app/conteudo/questoes/gp/`);
}
module.exports = { REDE, COMP, PERT, EV0 };
