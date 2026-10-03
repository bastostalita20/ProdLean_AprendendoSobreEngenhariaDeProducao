/* =====================================================================
   VENDOR: copia para app/vendor/ o que o app usa de terceiros, para
   funcionar offline e sem CDN (rode depois de mudar versões ou ícones):
     node scripts/vendor.js
   - KaTeX (fórmulas): katex.min.js + katex.min.css + fontes woff2
   - Fontes: Inter (texto) e JetBrains Mono (números, fórmulas, tabelas)
   - Ícones de linha (Lucide): só os usados, num "sprite" SVG embutido no index.html
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path");
const RAIZ = path.resolve(__dirname, ".."), NM = path.join(RAIZ, "node_modules"), V = path.join(RAIZ, "app", "vendor");
fs.rmSync(V, { recursive: true, force: true });
fs.mkdirSync(path.join(V, "katex", "fonts"), { recursive: true });
fs.mkdirSync(path.join(V, "fontes"), { recursive: true });

// KaTeX: só woff2 (todos os navegadores atuais)
fs.copyFileSync(path.join(NM, "katex/dist/katex.min.js"), path.join(V, "katex/katex.min.js"));
let css = fs.readFileSync(path.join(NM, "katex/dist/katex.min.css"), "utf8");
css = css.replace(/src:url\((fonts\/[^)]+\.woff2)\) format\("woff2"\)(,url\([^)]+\) format\("[^"]+"\))*/g, 'src:url($1) format("woff2")');
fs.writeFileSync(path.join(V, "katex/katex.min.css"), css);
fs.readdirSync(path.join(NM, "katex/dist/fonts")).filter(f => f.endsWith(".woff2")).forEach(f => fs.copyFileSync(path.join(NM, "katex/dist/fonts", f), path.join(V, "katex/fonts", f)));

// Fontes do texto
const fontes = [["@fontsource/inter", "inter", [400, 500, 600, 700]], ["@fontsource/jetbrains-mono", "jetbrains-mono", [400, 600]]];
let ff = "";
for (const [pac, nome, pesos] of fontes) for (const p of pesos) {
  const arq = `${nome}-latin-${p}-normal.woff2`;
  fs.copyFileSync(path.join(NM, pac, "files", arq), path.join(V, "fontes", arq));
  ff += `@font-face{font-family:"${nome === "inter" ? "Inter" : "JetBrains Mono"}";font-style:normal;font-weight:${p};font-display:swap;src:url(vendor/fontes/${arq}) format("woff2")}\n`;
}
fs.writeFileSync(path.join(V, "fontes", "fontes.css"), ff);

// Ícones Lucide usados no app (nome do app → nome no Lucide)
const ICONES = {
  inicio: "house", buscar: "search", trilha: "route", exercicios: "dumbbell", perfil: "user-round", problema: "triangle-alert",
  ofensiva: "flame", xp: "gem", config: "settings", voltar: "chevron-left", seta: "chevron-right", fechar: "x", check: "check",
  ferramenta: "wrench", conceito: "book-open-text", licao: "graduation-cap", topico: "notebook-text", formula: "sigma", disciplina: "library",
  modulo: "layers", mapa: "network", desafio: "zap", revisar: "rotate-ccw", flashcard: "copy", quiz: "timer", ouvir: "headphones",
  play: "play", compartilhar: "share-2", salvar: "bookmark", salvo: "bookmark-check", estrela: "star", trofeu: "trophy", medalha: "medal",
  alvo: "target", grafico: "chart-column", tabela: "table-2", calculadora: "calculator", lista: "list-checks", imprimir: "printer",
  filtro: "sliders-horizontal", relogio: "clock", erro: "circle-x", ok: "circle-check", info: "info", alerta: "circle-alert",
  lampada: "lightbulb", fabrica: "factory", ligacao: "link-2", exemplo: "square-function", livro: "book-marked", baixar: "download",
  caderno: "notebook-pen", especialista: "shield-check", nivel: "signal", historico: "history", tema: "sun-moon", professor: "presentation",
  estagio: "briefcase", glossario: "book-a", conteudo: "file-text", dados: "database", projeto: "kanban", qualidade: "badge-check",
  estoque: "package", logistica: "truck", compras: "shopping-cart", custos: "circle-dollar-sign", pessoas: "users", planejamento: "calendar-range",
  processos: "workflow", producao: "cog", po: "function-square", mais: "plus", menos: "minus", editar: "pencil", olho: "eye", cadeado: "lock"
};
const faltam = [];
let sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">';
for (const [nome, luc] of Object.entries(ICONES)) {
  const f = path.join(NM, "lucide-static/icons", luc + ".svg");
  if (!fs.existsSync(f)) { faltam.push(luc); continue; }
  const corpo = fs.readFileSync(f, "utf8").replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").replace(/\s+/g, " ").trim();
  sprite += `<symbol id="i-${nome}" viewBox="0 0 24 24">${corpo}</symbol>`;
}
sprite += "</svg>";
if (faltam.length) { console.error("Ícones não encontrados no Lucide:", faltam.join(", ")); process.exit(1); }
// Embute no index.html entre os marcadores
const IDX = path.join(RAIZ, "app", "index.html");
let h = fs.readFileSync(IDX, "utf8");
const ini = "<!--ICONES-->", fim = "<!--/ICONES-->";
if (!h.includes(ini)) h = h.replace("<body>", `<body>\n${ini}${fim}`);
h = h.replace(new RegExp(ini + "[\\s\\S]*?" + fim), ini + sprite + fim);
fs.writeFileSync(IDX, h);
fs.writeFileSync(path.join(V, "LEIA-ME.txt"), "Gerado por scripts/vendor.js. KaTeX (MIT), Inter e JetBrains Mono (SIL OFL 1.1), ícones Lucide (ISC). Não edite à mão.\n");
const tam = d => fs.readdirSync(d, { withFileTypes: true }).reduce((t, e) => t + (e.isDirectory() ? tam(path.join(d, e.name)) : fs.statSync(path.join(d, e.name)).size), 0);
console.log(`vendor/: ${(tam(V) / 1024).toFixed(0)} KB · sprite com ${Object.keys(ICONES).length} ícones (${(sprite.length / 1024).toFixed(1)} KB)`);
