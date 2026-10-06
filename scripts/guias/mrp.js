/* =====================================================================
   GUIA VISUAL — MRP
   Uma página por tema (tela e A4 paisagem): blocos numerados e coloridos
   com definição, fluxo, figura, fórmulas, registro de exemplo, regras e
   cuidados. Os números do exemplo são calculados com o mesmo motor das
   questões (scripts/questoes/mrp.js), então guia e exercícios batem.
   Gera app/conteudo/guias/mrp.js · uso: node scripts/guias/mrp.js [--checar]
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path");
const { registroMRP, explodir } = require("../questoes/mrp-motor");
const SAIDA = path.resolve(__dirname, "../../app/conteudo/guias/mrp.js");

const ex = { nb: [80, 120, 150, 90, 200], estoque: 150, rp: [0, 100, 0, 0, 0], lt: 1 };
const r = registroMRP(ex);
const BOM = { item: "A", nome: "Caixa", filhos: [{ item: "B", nome: "Bandeja", qtd: 2, filhos: [{ item: "D", nome: "Bombom", qtd: 3 }] }, { item: "C", nome: "Tampa", qtd: 1 }] };
const tot = explodir(BOM, 100);

const G = {
  id: "mrp", numero: 1, categoria: "PCP", titulo: "MRP", subtitulo: "Planejamento das necessidades de materiais",
  assunto: "f:mrp", disciplina: "Planejamento e Controle da Produção",
  blocos: [
    { tipo: "texto", cor: 0, titulo: "O que é", ic: "info",
      texto: "Técnica que calcula **quanto** e **quando** comprar ou produzir cada componente, a partir do plano mestre (PMP), da estrutura do produto e dos estoques.",
      destaque: "Pergunta que o MRP responde: “o que preciso, em que quantidade e para quando?”" },
    { tipo: "fluxo", cor: 1, titulo: "Entradas → MRP → saídas", ic: "processos",
      colunas: [["PMP", "Estrutura (BOM)", "Estoques e lead times"], ["Cálculo do MRP"], ["Ordens de compra", "Ordens de produção", "Mensagens de ação"]] },
    { tipo: "comparacao", cor: 2, titulo: "Demanda dependente × independente", ic: "ligacao",
      lados: [{ titulo: "Dependente", sub: "calculada", itens: ["Componentes, embalagens, matéria-prima", "Vem do plano do item pai", "Use MRP"] },
              { titulo: "Independente", sub: "prevista", itens: ["Produto final, peça de reposição", "Vem do mercado", "Use previsão + estoque"] }] },
    { tipo: "figura", cor: 3, titulo: "Estrutura do produto (BOM)", ic: "mapa",
      figura: { tipo: "bom", raiz: BOM },
      texto: `Para **100 caixas**: \\(B = 100 \\times 2 = ${tot.B}\\), \\(D = ${tot.B} \\times 3 = ${tot.D}\\), \\(C = ${tot.C}\\).` },
    { tipo: "formulas", cor: 4, titulo: "Fórmulas", ic: "formula",
      itens: [
        { tex: "NL_t = \\max(0;\\ NB_t + ES - E_{t-1} - RP_t)", legenda: [["NL", "necessidade líquida", "un"], ["NB", "necessidade bruta", "un"], ["ES", "estoque de segurança", "un"], ["E", "estoque projetado", "un"], ["RP", "recebimento programado", "un"]] },
        { tex: "E_t = E_{t-1} + RP_t + REC_t - NB_t", legenda: [["REC", "recebimento planejado (após o lote)", "un"]] },
        { tex: "\\text{Liberação} = \\text{necessidade} - LT", legenda: [["LT", "lead time", "semanas"]] }] },
    { tipo: "tabela", cor: 5, titulo: "Registro MRP (exemplo)", ic: "tabela", largo: true,
      nota: `Bandeja B · estoque inicial ${ex.estoque} · LT ${ex.lt} semana · lote a lote`,
      tabela: { canto: "Semana", colunas: ["1", "2", "3", "4", "5"], linhas: [
        { rotulo: "Necessidade bruta", valores: r.nb }, { rotulo: "Receb. programado", valores: r.rp },
        { rotulo: "Estoque projetado", valores: r.disp }, { rotulo: "Necessidade líquida", valores: r.nl, forte: true },
        { rotulo: "Liberação planejada", valores: r.lib, forte: true }] } },
    { tipo: "passos", cor: 0, titulo: "Passo a passo", ic: "lista",
      itens: ["Pegue a necessidade bruta (PMP ou liberações do pai)", "Desconte estoque e recebimentos", "Calcule a necessidade líquida", "Aplique a regra de lote", "Volte o lead time: liberação", "Desça para os componentes"] },
    { tipo: "tabela", cor: 1, titulo: "Regras de lote", ic: "estoque", largo: true,
      tabela: { canto: "Regra", colunas: ["Quanto pede", "Quando usar"], texto: true, linhas: [
        { rotulo: "Lote a lote", valores: ["exatamente a NL", "item caro, demanda irregular"] },
        { rotulo: "Lote fixo/múltiplo", valores: ["múltiplos de Q", "embalagem ou fornecedor exigem"] },
        { rotulo: "Período fixo (POQ)", valores: ["soma n períodos", "custo de pedido alto"] },
        { rotulo: "LEC", valores: ["\\(\\sqrt{2DS/H}\\)", "demanda estável"] }] } },
    { tipo: "lista", cor: 2, titulo: "Erros comuns", ic: "alerta", estilo: "erro",
      itens: ["Estrutura ou estoque errados: o MRP multiplica o erro", "Lead time irreal (otimista)", "Esquecer que o MRP supõe capacidade infinita", "Replanejar sem congelar o curto prazo (nervosismo)"] },
    { tipo: "lista", cor: 3, titulo: "Na prova", ic: "lampada", estilo: "dica",
      itens: ["Liberação = necessidade **menos** LT", "NB do filho = liberações do pai × quantidade", "NL nunca é negativa", "Componente comum: some todos os caminhos"] },
    { tipo: "lista", cor: 5, titulo: "Conecta com", ic: "ligacao", estilo: "ok", largo: true,
      itens: ["**PMP:** dá a necessidade bruta do produto final", "**CRP:** confere se há capacidade para as ordens", "**Estoque de segurança:** entra como necessidade a mais", "**ERP:** onde o MRP roda na empresa"] },
    { tipo: "linha", cor: 4, titulo: "Evolução", ic: "historico", largo: true,
      etapas: [["MRP", "anos 1960–70", "materiais"], ["MRP II", "anos 1980", "+ capacidade e finanças"], ["ERP", "anos 1990+", "toda a empresa integrada"]] }
  ],
  referencias: ["CORRÊA, H. L.; GIANESI, I. G. N.; CAON, M. Planejamento, Programação e Controle da Produção: MRP II/ERP. Atlas.", "TUBINO, D. F. Planejamento e Controle da Produção: teoria e prática. Atlas."]
};

// conferências
if (r.lib.join(",") !== "0,100,90,200,0" || tot.D !== 600) { console.error("❌ guia MRP: números do exemplo não conferem"); process.exit(1); }
const js = "/* Gerado por scripts/guias/mrp.js — NÃO edite à mão. */\n(window.GUIAS = window.GUIAS || []).push(" + JSON.stringify(G) + ");\n";
if (process.argv.includes("--checar")) {
  if (!fs.existsSync(SAIDA) || fs.readFileSync(SAIDA, "utf8") !== js) { console.error("❌ guia visual de MRP desatualizado: rode  node scripts/guias/mrp.js"); process.exit(1); }
  console.log("✓ guia MRP em dia");
} else { fs.mkdirSync(path.dirname(SAIDA), { recursive: true }); fs.writeFileSync(SAIDA, js); console.log(`guia visual: MRP (${G.blocos.length} blocos) → app/conteudo/guias/mrp.js`); }
