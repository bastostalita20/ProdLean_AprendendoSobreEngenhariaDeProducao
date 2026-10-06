/* =====================================================================
   BANCO DE QUESTÕES — PILOTO: MRP (Planejamento das Necessidades de Materiais)
   ---------------------------------------------------------------------
   Questões originais. Todo número de gabarito (registro MRP, explosão da
   estrutura, custos de lote, lead time acumulado) é CALCULADO por este
   script a partir dos dados do enunciado — nada é digitado à mão.
   Gera:
     app/conteudo/questoes/pcp/mrp.json  (fonte legível, segue questoes/schema.json)
     app/conteudo/questoes/pcp/mrp.js    (o que o app carrega: entra em window.BANCO)
   Uso: node scripts/questoes/mrp.js [--checar]
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path");
const RAIZ = path.resolve(__dirname, "../..");
const DIR = path.join(RAIZ, "app/conteudo/questoes/pcp");
const LICAO = "m03-l5"; // "MRP: calculando materiais" (Módulo 3 — PCP)

const REF = {
  slack: "SLACK, N.; BRANDON-JONES, A.; JOHNSTON, R. Administração da Produção. Atlas, cap. de MRP e ERP.",
  correa: "CORRÊA, H. L.; GIANESI, I. G. N.; CAON, M. Planejamento, Programação e Controle da Produção: MRP II/ERP. Atlas.",
  tubino: "TUBINO, D. F. Planejamento e Controle da Produção: teoria e prática. Atlas.",
  fernandes: "FERNANDES, F. C. F.; GODINHO FILHO, M. Planejamento e Controle da Produção: dos fundamentos ao essencial. Atlas."
};

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
const fmtN = n => n.toLocaleString("pt-BR");
const sem = n => Array.from({ length: n }, (_, i) => String(i + 1));

/* ---------- dados dos cenários ---------- */
const BOM_SIMPLES = { item: "A", nome: "Caixa", filhos: [{ item: "B", nome: "Bandeja", qtd: 2, filhos: [{ item: "D", nome: "Bombom", qtd: 3 }] }] };
const BOM_COMUM = { item: "A", nome: "Kit", filhos: [{ item: "B", nome: "Módulo", qtd: 2, filhos: [{ item: "C", nome: "Parafuso", qtd: 1 }, { item: "D", nome: "Chapa", qtd: 4 }] }, { item: "C", nome: "Parafuso", qtd: 1 }] };
const BOM_LT = { item: "A", nome: "Luminária", lt: 1, filhos: [{ item: "B", nome: "Corpo", qtd: 1, lt: 2, filhos: [{ item: "D", nome: "Chapa", qtd: 2, lt: 3 }] }, { item: "C", nome: "Driver LED", qtd: 1, lt: 4 }] };

const Q = [];
const add = q => Q.push(Object.assign({ licao: LICAO, topico: "mrp", estilo: "autoral" }, q));

/* =============================== FÁCIL =============================== */
add({ id: "mrp-f01", nivel: "facil", tipo: "multipla", tags: ["demanda dependente", "conceito"], referencia: REF.slack,
  pergunta: "Uma fábrica de bombons vende caixas prontas e monta cada caixa com bandejas plásticas compradas. Qual item tem **demanda dependente**?",
  opcoes: ["A bandeja plástica usada na montagem da caixa", "A caixa de bombons vendida ao supermercado", "A caixa de bombons vendida pelo site", "A caixa avulsa vendida como peça de reposição a um cliente"], correta: 0,
  justificativas: ["Certo: a quantidade de bandejas é calculada a partir do plano de caixas; depende de outro item.",
    "A caixa vendida ao varejo é produto final: sua demanda vem do mercado (independente) e é prevista.",
    "Mesmo canal diferente, continua sendo venda de produto final: demanda independente.",
    "Peça vendida diretamente a um cliente tem demanda independente, ainda que também seja componente de outro produto."],
  explicacao: "Demanda dependente é calculada (vem do plano de outro item); demanda independente é prevista (vem do mercado). O MRP existe para os itens de demanda dependente." });
add({ id: "mrp-f02", nivel: "facil", tipo: "multipla", tags: ["entradas do MRP"], referencia: REF.correa,
  pergunta: "Qual destas informações **não** é uma entrada básica do cálculo do MRP?",
  opcoes: ["Previsão de vendas de cada componente feita pelo time comercial", "Plano mestre de produção (PMP)", "Estrutura do produto (lista de materiais)", "Registros de estoque, recebimentos programados e lead times"], correta: 0,
  justificativas: ["Certo: componentes não são previstos; a necessidade deles é calculada pela explosão do PMP na estrutura.",
    "O PMP diz quanto e quando de cada produto final: é o ponto de partida do MRP.",
    "A estrutura (BOM) diz quantos componentes entram em cada unidade do item pai.",
    "Sem estoque, recebimentos e lead times não dá para calcular a necessidade líquida nem quando liberar as ordens."],
  explicacao: "Entradas do MRP: PMP + estrutura do produto + registros de estoque (com recebimentos programados e lead times). Saídas: ordens planejadas de compra e de produção." });
add({ id: "mrp-f03", nivel: "facil", tipo: "vf", tags: ["necessidade líquida"], referencia: REF.tubino,
  pergunta: "Se o estoque disponível é maior que a necessidade bruta do período, a necessidade líquida fica negativa e reduz as compras do período seguinte.",
  correta: false,
  resolucao: "A necessidade líquida nunca é negativa: \\(NL = \\max(0;\\ NB - \\text{estoque disponível} - RP)\\). O que sobra não vira “necessidade negativa”: vira **estoque projetado**, que é abatido no período seguinte.",
  explicacao: "Quando sobra estoque, NL = 0 e a sobra passa para o próximo período como estoque projetado." });
{
  const nb = 500, est = 180, rp = 120, nl = Math.max(0, nb - est - rp);
  add({ id: "mrp-f04", nivel: "facil", tipo: "calculo", tags: ["necessidade líquida", "cálculo"], referencia: REF.tubino,
    pergunta: `Na semana 6 a necessidade bruta de bandejas é de ${fmtN(nb)} unidades. Haverá ${fmtN(est)} bandejas em estoque e um recebimento programado de ${fmtN(rp)}. Qual é a necessidade líquida?`,
    resposta: nl, unidade: "bandejas", tolerancia: 0,
    resolucao: `\\(NL = \\max(0;\\ NB - E - RP)\\)\n\\(NL = \\max(0;\\ ${nb} - ${est} - ${rp}) = ${nl}\\)`,
    explicacao: "Recebimento programado é uma ordem já emitida que vai chegar: conta como disponível." });
}
{
  const tot = explodir(BOM_SIMPLES, 40);
  add({ id: "mrp-f05", nivel: "facil", tipo: "calculo", tags: ["explosão da estrutura", "BOM"], referencia: REF.slack,
    figura: { tipo: "bom", raiz: BOM_SIMPLES, legenda: "Estrutura do produto: os números indicam a quantidade por unidade do item pai." },
    pergunta: "Pela estrutura acima, quantos bombons (D) são necessários para montar **40 caixas** (A)? Considere estoque zero.",
    resposta: tot.D, unidade: "bombons", tolerancia: 0,
    resolucao: `Multiplique as quantidades ao longo do caminho A → B → D:\n\\(B = 40 \\times 2 = ${tot.B}\\)\n\\(D = ${tot.B} \\times 3 = ${tot.D}\\)`,
    explicacao: "Na explosão, a quantidade de cada componente é a do pai vezes a quantidade por unidade, nível a nível." });
}
add({ id: "mrp-f06", nivel: "facil", tipo: "multipla", tags: ["lead time", "liberação"], referencia: REF.correa,
  pergunta: "Um componente com **lead time de 2 semanas** precisa estar disponível no início da semana 6. Em que semana a ordem deve ser liberada?",
  opcoes: ["Semana 4", "Semana 6", "Semana 8", "Semana 3"], correta: 0,
  justificativas: ["Certo: liberação = semana da necessidade − lead time = 6 − 2 = 4.", "Liberar na semana 6 faz o item chegar na 8: atrasado.", "Somar o lead time em vez de subtrair é o erro clássico da defasagem.", "Liberar na 3 também atende, mas antecipa uma semana sem necessidade e gera estoque."],
  resolucao: "\\(\\text{Liberação} = \\text{semana da necessidade} - LT = 6 - 2 = 4\\)",
  explicacao: "A defasagem pelo lead time (time phasing) é o que transforma “quanto” em “quando”." });
add({ id: "mrp-f07", nivel: "facil", tipo: "ordenar", tags: ["registro MRP", "sequência de cálculo"], referencia: REF.fernandes,
  pergunta: "Coloque em ordem os passos do cálculo de um item no registro do MRP:",
  itens: ["Obter a necessidade bruta (do PMP ou das ordens do item pai)", "Descontar estoque disponível e recebimentos programados", "Calcular a necessidade líquida", "Aplicar a regra de lote (recebimento planejado)", "Defasar pelo lead time (liberação planejada)"],
  explicacao: "As liberações planejadas de um item viram necessidade bruta dos seus componentes: é assim que a explosão desce nível a nível." });

/* =============================== MÉDIO =============================== */
{
  const d = { nb: [80, 120, 150, 90, 200], estoque: 150, rp: [0, 100, 0, 0, 0], lt: 1 };
  const r = registroMRP(d), cols = sem(5);
  add({ id: "mrp-m01", nivel: "medio", tipo: "tabela", tags: ["registro MRP", "lote a lote", "tabela"], referencia: REF.tubino,
    pergunta: `Complete o registro MRP da **bandeja (B)**: estoque inicial ${d.estoque}, lead time ${d.lt} semana, lote a lote (pede exatamente a necessidade líquida).`,
    tabela: { canto: "Semana", colunas: cols, linhas: [
      { rotulo: "Necessidade bruta", valores: r.nb },
      { rotulo: "Recebimento programado", valores: r.rp },
      { rotulo: "Estoque projetado (fim)", valores: r.disp, editar: [0, 1, 2, 3, 4] },
      { rotulo: "Necessidade líquida", valores: r.nl, editar: [0, 1, 2, 3, 4] },
      { rotulo: "Liberação planejada", valores: r.lib, editar: [0, 1, 2, 3, 4] }] },
    resolucao: "Período a período: \\(\\text{disponível} = E_{t-1} + RP_t\\); \\(NL_t = \\max(0;\\ NB_t - \\text{disponível})\\); lote a lote: recebimento = NL; \\(E_t = \\text{disponível} + \\text{recebimento} - NB_t\\); a liberação fica 1 semana antes do recebimento.",
    explicacao: "Note que o recebimento programado da semana 2 adia a primeira necessidade líquida para a semana 3." });
}
{
  const nl = 230, q = 100, rec = Math.ceil(nl / q) * q;
  add({ id: "mrp-m02", nivel: "medio", tipo: "calculo", tags: ["regra de lote", "múltiplo"], referencia: REF.correa,
    pergunta: `O fornecedor de tampas só entrega em **múltiplos de ${q}** unidades. A necessidade líquida da semana é de ${nl} tampas. Qual deve ser o recebimento planejado?`,
    resposta: rec, unidade: "tampas", tolerancia: 0,
    resolucao: `\\(\\text{Recebimento} = \\lceil ${nl} / ${q} \\rceil \\times ${q} = ${Math.ceil(nl / q)} \\times ${q} = ${rec}\\)\nSobra de \\(${rec} - ${nl} = ${rec - nl}\\) tampas, que entram no estoque projetado.`,
    explicacao: "A regra de lote muda o recebimento planejado, não a necessidade líquida. A sobra reduz a necessidade dos períodos seguintes." });
}
add({ id: "mrp-m03", nivel: "medio", tipo: "multipla", estilo: "concurso", tags: ["explosão", "conceito"], referencia: REF.correa,
  pergunta: "Em relação ao MRP (planejamento das necessidades de materiais), assinale a alternativa correta.",
  opcoes: ["A explosão da lista de materiais converte as ordens planejadas do item pai em necessidades brutas dos componentes, nível a nível.",
    "O MRP é indicado sobretudo para itens de demanda independente, como produtos acabados vendidos ao mercado.",
    "O MRP considera a capacidade dos recursos produtivos e, por isso, sempre gera planos viáveis.",
    "A necessidade líquida é obtida somando o estoque disponível à necessidade bruta.",
    "O lead time é usado apenas para calcular o estoque de segurança, sem efeito na data de liberação das ordens."], correta: 0,
  justificativas: ["Correta: é exatamente o mecanismo de explosão.", "É o contrário: MRP calcula demanda dependente; itens independentes são previstos.",
    "O MRP clássico assume capacidade infinita; a verificação é feita depois, no CRP (planejamento detalhado da capacidade).",
    "A necessidade líquida subtrai (não soma) o disponível.", "O lead time define a defasagem: liberação = necessidade − lead time."],
  explicacao: "Questão no formato de concurso (cinco alternativas, uma correta)." });
{
  const tot = explodir(BOM_COMUM, 50);
  add({ id: "mrp-m04", nivel: "medio", tipo: "calculo", tags: ["explosão da estrutura", "componente comum", "BOM"], referencia: REF.fernandes,
    figura: { tipo: "bom", raiz: BOM_COMUM, legenda: "O parafuso (C) aparece em dois níveis da estrutura." },
    pergunta: "Quantos parafusos (C) são necessários, no total, para **50 kits** (A)? Considere estoque zero.",
    resposta: tot.C, unidade: "parafusos", tolerancia: 0,
    resolucao: `C entra direto no kit e também dentro de cada módulo B:\n\\(C_{\\text{direto}} = 50 \\times 1 = 50\\)\n\\(B = 50 \\times 2 = ${tot.B}\\Rightarrow C_{\\text{via B}} = ${tot.B} \\times 1 = ${tot.B}\\)\n\\(C_{\\text{total}} = 50 + ${tot.B} = ${tot.C}\\)`,
    explicacao: "Componente comum (que aparece em mais de um ponto da estrutura) soma as necessidades de todos os caminhos." });
}
add({ id: "mrp-m05", nivel: "medio", tipo: "caso", tags: ["nervosismo", "congelamento"], referencia: REF.correa,
  contexto: "A cada replanejamento semanal, o MRP da empresa muda as quantidades e as datas de dezenas de ordens já liberadas. Fornecedores e chão de fábrica reclamam que “o plano muda o tempo todo”.",
  pergunta: "Qual medida ataca diretamente esse problema?",
  opcoes: ["Congelar o horizonte próximo do PMP (time fence) e firmar as ordens planejadas desse período", "Rodar o MRP todo dia, em vez de toda semana", "Eliminar o estoque de segurança de todos os itens", "Trocar a regra de lote de todos os itens para lote a lote"], correta: 0,
  justificativas: ["Certo: o congelamento protege o curto prazo; mudanças passam a valer só fora da zona congelada.",
    "Replanejar com mais frequência tende a aumentar o nervosismo, não diminuir.",
    "Sem estoque de segurança, qualquer variação vira urgência e novo replanejamento.",
    "Lote a lote reduz estoque, mas não impede que pequenas mudanças no PMP se propaguem pela estrutura."],
  explicacao: "Esse fenômeno é o **nervosismo do MRP**: pequenas mudanças no nível de cima se amplificam nos níveis de baixo." });
{
  const nb = 300, disp = 120, es = 50, nl = Math.max(0, nb + es - disp);
  add({ id: "mrp-m06", nivel: "medio", tipo: "calculo", tags: ["estoque de segurança", "necessidade líquida"], referencia: REF.tubino,
    pergunta: `Um item tem necessidade bruta de ${nb} unidades na semana, ${disp} unidades disponíveis e política de **estoque de segurança de ${es}** unidades. Qual é a necessidade líquida?`,
    resposta: nl, unidade: "unidades", tolerancia: 0,
    resolucao: `Com estoque de segurança, o disponível precisa cobrir a necessidade e ainda manter o ES:\n\\(NL = \\max(0;\\ NB + ES - \\text{disponível}) = \\max(0;\\ ${nb} + ${es} - ${disp}) = ${nl}\\)`,
    explicacao: "No MRP, o estoque de segurança funciona como uma necessidade a mais, protegendo contra atrasos e variação." });
}
add({ id: "mrp-m07", nivel: "medio", tipo: "multipla", tags: ["capacidade", "CRP", "MRP II"], referencia: REF.slack,
  pergunta: "O MRP gerou ordens que exigem 520 horas na estamparia numa semana em que há 400 horas disponíveis. O que isso revela?",
  opcoes: ["O MRP calcula materiais com capacidade infinita; é preciso verificar a carga (CRP) e ajustar o plano", "Houve erro na estrutura do produto", "O lead time da estamparia está curto demais e deve ser reduzido", "A demanda foi superestimada pelo MRP"], correta: 0,
  justificativas: ["Certo: o MRP não olha capacidade. O CRP converte as ordens em horas por recurso e mostra a sobrecarga.", "A estrutura pode estar certa; o problema é de capacidade, não de quantidade por unidade.", "Encurtar o lead time no cadastro não cria horas de máquina.", "O MRP não estima demanda: ele explode o PMP."],
  explicacao: "MRP II = MRP + verificação de capacidade (RCCP no PMP, CRP nas ordens) + integração com finanças e vendas." });

/* =============================== DIFÍCIL =============================== */
{
  const A = registroMRP({ nb: [0, 60, 0, 80, 50], estoque: 20, lt: 1 });
  const nbB = A.lib.map(x => x * 2);
  const B = registroMRP({ nb: nbB, estoque: 90, lt: 1 }), cols = sem(5);
  add({ id: "mrp-d01", nivel: "dificil", tipo: "tabela", tags: ["registro MRP", "multinível", "explosão", "tabela"], referencia: REF.fernandes,
    pergunta: `O kit **A** usa **2 módulos B**. Registro de A (estoque inicial 20, lead time 1, lote a lote):\n` +
      `| Semana | ${cols.join(" | ")} |\n|${"---|".repeat(6)}\n| Necessidade bruta | ${A.nb.join(" | ")} |\n| Liberação planejada | ${A.lib.join(" | ")} |\n` +
      `Complete o registro de **B** (estoque inicial 90, lead time 1, lote a lote).`,
    tabela: { canto: "Semana", colunas: cols, linhas: [
      { rotulo: "Necessidade bruta de B", valores: B.nb, editar: [0, 1, 2, 3, 4] },
      { rotulo: "Estoque projetado (fim)", valores: B.disp },
      { rotulo: "Necessidade líquida", valores: B.nl, editar: [0, 1, 2, 3, 4] },
      { rotulo: "Liberação planejada de B", valores: B.lib, editar: [0, 1, 2, 3, 4] }] },
    resolucao: "A necessidade bruta de B vem das **liberações** de A (não da necessidade bruta de A): \\(NB_B(t) = 2 \\times L_A(t)\\). Depois, calcule o registro de B normalmente e defase 1 semana.",
    explicacao: "Erro mais comum: multiplicar a necessidade bruta de A por 2. O componente precisa estar pronto quando a ordem do pai é liberada." });
}
{
  const nb = [100, 60, 0, 80], S = 150, h = 1.5;
  const l4l = custoPlano(nb, nb, S, h), poq = custoPlano(nb, [160, 0, 0, 80], S, h), dif = l4l - poq;
  add({ id: "mrp-d02", nivel: "dificil", tipo: "calculo", tags: ["regra de lote", "custo", "POQ"], referencia: REF.tubino,
    pergunta: `Necessidades líquidas de um item nas semanas 1 a 4: ${nb.join(", ")}. Custo de pedido R$ ${S} e custo de manter R$ ${String(h).replace(".", ",")} por unidade por semana (sobre o estoque no fim da semana). Quanto o **lote por período fixo de 2 semanas** (POQ) economiza em relação ao **lote a lote**?`,
    resposta: dif, unidade: "R$", tolerancia: 0.01,
    resolucao: `Lote a lote: ${nb.filter(Boolean).length} pedidos, sem estoque: \\(${nb.filter(Boolean).length} \\times ${S} = ${l4l}\\).\nPOQ: pede 160 na semana 1 (cobre 1 e 2) e 80 na semana 4. Sobra 60 no fim da semana 1: \\(2 \\times ${S} + 60 \\times ${h} = ${poq}\\).\nEconomia: \\(${l4l} - ${poq} = ${dif}\\).`,
    explicacao: "Juntar períodos troca custo de pedido por custo de manter. Compensa enquanto o custo de manter a sobra for menor que o custo de mais um pedido." });
}
add({ id: "mrp-d03", nivel: "dificil", tipo: "multipla", estilo: "concurso", tags: ["código de nível mais baixo", "componente comum"], referencia: REF.correa,
  pergunta: "No processamento do MRP, os itens são calculados pelo **código de nível mais baixo** (low-level code). A razão dessa regra é:",
  opcoes: ["garantir que um componente que aparece em vários níveis só seja calculado depois de somadas todas as necessidades brutas vindas de seus pais",
    "reduzir o lead time dos componentes comprados",
    "permitir que cada item seja processado uma vez em cada nível em que aparece, com regras de lote diferentes",
    "dar prioridade aos itens de maior valor na curva ABC",
    "evitar a necessidade de registros de estoque para os itens de nível mais baixo"], correta: 0,
  justificativas: ["Correta: processar o item no nível mais baixo em que aparece evita recalcular e garante uma necessidade bruta completa.",
    "A regra é de sequência de cálculo; não altera lead time.", "É o oposto: o item é processado uma única vez.", "Curva ABC não define a ordem de processamento do MRP.", "Todos os itens precisam de registro de estoque."],
  explicacao: "Questão no formato de concurso (cinco alternativas, uma correta)." });
{
  const plano = 400, porA = 2, cad = 3, real = 2, excesso = plano * porA * (cad - real);
  add({ id: "mrp-d04", nivel: "dificil", tipo: "calculo", tags: ["acurácia da estrutura", "erro de cadastro"], referencia: REF.slack,
    pergunta: `Cada caixa (A) leva ${porA} bandejas (B). Na estrutura cadastrada, cada bandeja leva **${cad}** divisórias (D), mas o correto é **${real}**. Para um plano de ${plano} caixas, quantas divisórias o MRP mandará comprar **a mais**?`,
    resposta: excesso, unidade: "divisórias", tolerancia: 0,
    resolucao: `\\(B = ${plano} \\times ${porA} = ${plano * porA}\\)\nCadastrado: \\(${plano * porA} \\times ${cad} = ${plano * porA * cad}\\); correto: \\(${plano * porA} \\times ${real} = ${plano * porA * real}\\)\nExcesso: \\(${plano * porA * cad} - ${plano * porA * real} = ${excesso}\\)`,
    explicacao: "O MRP multiplica o erro da estrutura por todos os níveis acima. Por isso se exige acurácia de estrutura e de estoque próxima de 100%." });
}
{
  const lt = ltAcumulado(BOM_LT);
  add({ id: "mrp-d05", nivel: "dificil", tipo: "calculo", tags: ["lead time acumulado", "BOM"], referencia: REF.fernandes,
    figura: { tipo: "bom", raiz: BOM_LT, legenda: "LT = lead time em semanas (produção ou compra)." },
    pergunta: "Qual é o **lead time acumulado** da luminária (A), isto é, o prazo mínimo entre decidir produzir e ter o produto pronto, sem nenhum item em estoque?",
    resposta: lt, unidade: "semanas", tolerancia: 0,
    resolucao: `Some os lead times de cada caminho da raiz até as folhas e pegue o maior:\n\\(A \\to B \\to D = 1 + 2 + 3 = 6\\)\n\\(A \\to C = 1 + 4 = 5\\)\nLead time acumulado \\(= \\max(6;\\ 5) = ${lt}\\) semanas.`,
    explicacao: "O caminho mais longo da estrutura funciona como o caminho crítico de um projeto: define o horizonte mínimo do PMP." });
}
add({ id: "mrp-d06", nivel: "dificil", tipo: "multipla", estilo: "concurso", tags: ["MRP × kanban", "sistemas de PCP"], referencia: REF.slack,
  pergunta: "Uma empresa fabrica equipamentos sob encomenda, com estruturas de 6 níveis, centenas de componentes e demanda irregular. Para os componentes, o sistema mais adequado é:",
  opcoes: ["MRP, porque calcula necessidades dependentes de estruturas complexas a partir de um plano com datas",
    "kanban, porque a demanda irregular favorece a reposição puxada por consumo",
    "ponto de pedido para todos os itens, porque dispensa a estrutura do produto",
    "OPT/tambor-pulmão-corda, porque elimina a necessidade de lista de materiais",
    "nenhum sistema formal: com encomendas, basta comprar quando o pedido chegar"], correta: 0,
  justificativas: ["Correta: estrutura complexa + demanda irregular e sob encomenda é o terreno típico do MRP.",
    "O kanban funciona melhor com demanda estável e repetitiva; com demanda irregular, os cartões viram estoque parado ou falta.",
    "Ponto de pedido trata cada item como demanda independente e ignora a dependência entre eles.",
    "TPC programa o gargalo, mas não dispensa saber o que comprar; é complementar.",
    "Com 6 níveis e lead times acumulados, comprar só ao receber o pedido estoura o prazo."],
  explicacao: "Questão no formato de concurso (cinco alternativas, uma correta)." });

/* ---------- conferências ---------- */
const erros = [];
const ids = new Set();
const cont = { facil: 0, medio: 0, dificil: 0 };
Q.forEach(q => {
  if (ids.has(q.id)) erros.push("id repetido " + q.id); ids.add(q.id);
  cont[q.nivel]++;
  if (["multipla", "caso"].includes(q.tipo) && (!q.justificativas || q.justificativas.length !== q.opcoes.length)) erros.push(q.id + ": falta justificar cada alternativa");
  if (!q.referencia) erros.push(q.id + ": falta referência");
  if (q.tipo === "tabela") q.tabela.linhas.forEach(l => { if (l.valores.length !== q.tabela.colunas.length) erros.push(q.id + ": linha com tamanho errado"); });
});
if (Q.length < 20 || cont.facil < 7 || cont.medio < 7 || cont.dificil < 6) erros.push(`distribuição insuficiente: ${JSON.stringify(cont)}`);
// conferência independente de alguns gabaritos com contas feitas à mão
const chk = (id, v) => { const q = Q.find(x => x.id === id); if (q.resposta !== v) erros.push(`${id}: gabarito ${q.resposta} ≠ conferência ${v}`); };
chk("mrp-f04", 200); chk("mrp-f05", 240); chk("mrp-m02", 300); chk("mrp-m04", 150); chk("mrp-m06", 230); chk("mrp-d02", 60); chk("mrp-d04", 800); chk("mrp-d05", 6);
const lib = id => Q.find(x => x.id === id).tabela.linhas.find(l => /Liberação/.test(l.rotulo)).valores.join(",");
if (lib("mrp-m01") !== "0,100,90,200,0") erros.push("mrp-m01: liberações " + lib("mrp-m01"));
if (lib("mrp-d01") !== "0,150,100,0,0") erros.push("mrp-d01: liberações " + lib("mrp-d01"));
if (erros.length) { console.error("❌ " + erros.join("\n❌ ")); process.exit(1); }

/* ---------- saída ---------- */
const json = JSON.stringify({ $schema: "../schema.json", topico: "mrp", disciplina: "Planejamento e Controle da Produção", licao: LICAO, gerado_por: "scripts/questoes/mrp.js", questoes: Q }, null, 2) + "\n";
const js = "/* Gerado por scripts/questoes/mrp.js — NÃO edite à mão. Questões do piloto de MRP (entram na lição " + LICAO + "). */\n" +
  "(window.BANCO = window.BANCO || []).push(...JSON.parse(" + JSON.stringify(JSON.stringify(Q)) + "));\n";
const alvo = { "mrp.json": json, "mrp.js": js };
if (process.argv.includes("--checar")) {
  const velho = Object.keys(alvo).filter(f => !fs.existsSync(path.join(DIR, f)) || fs.readFileSync(path.join(DIR, f), "utf8") !== alvo[f]);
  if (velho.length) { console.error("❌ questões de MRP desatualizadas: rode  node scripts/questoes/mrp.js"); process.exit(1); }
  console.log(`✓ MRP: ${Q.length} questões em dia`);
} else {
  fs.mkdirSync(DIR, { recursive: true });
  Object.entries(alvo).forEach(([f, c]) => fs.writeFileSync(path.join(DIR, f), c));
  console.log(`MRP: ${Q.length} questões (fácil ${cont.facil} · médio ${cont.medio} · difícil ${cont.dificil}) → app/conteudo/questoes/pcp/`);
}
module.exports = { registroMRP, explodir, ltAcumulado, custoPlano };
