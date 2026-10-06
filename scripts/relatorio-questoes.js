/* =====================================================================
   RELATÓRIO PARA REVISÃO DE UM BANCO DE QUESTÕES (professor/autor)
   Gera dist-relatorio/questoes-<topico>.html: todas as questões com
   gabarito, justificativa de cada alternativa, tabelas preenchidas,
   figura da estrutura e resolução com fórmulas (KaTeX), num arquivo só.
   Uso: node scripts/relatorio-questoes.js mrp
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), katex = require("katex");
const RAIZ = path.resolve(__dirname, "..");
const topico = process.argv[2] || "mrp";
const src = path.join(RAIZ, "app/conteudo/questoes/pcp", topico + ".json");
const dados = JSON.parse(fs.readFileSync(src, "utf8"));

// htmlFigura do próprio app (mesmo desenho da estrutura do produto)
const idx = fs.readFileSync(path.join(RAIZ, "app/index.html"), "utf8");
const ini = idx.indexOf("function htmlFigura(f) {"), fim = idx.indexOf("\n}\n", ini) + 2;
const ctx = { esc: t => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") };
vm.runInNewContext(idx.slice(ini, fim) + "\nthis.htmlFigura = htmlFigura;", ctx);
const esc = ctx.esc;

const tex = t => katex.renderToString(t, { throwOnError: false, strict: "ignore" });
const numBR = n => typeof n === "number" ? n.toLocaleString("pt-BR") : n;
// texto do conteúdo → HTML: \( LaTeX \), **negrito**, *itálico*, tabelas Markdown e quebras de linha
function fmt(t) {
  const linhas = String(t || "").split("\n"), out = [];
  const inl = x => esc(x).replace(/\\\((.+?)\\\)/g, (m, s) => tex(s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")))
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>");
  for (let i = 0; i < linhas.length; i++) {
    if (!/^\s*\|/.test(linhas[i])) { out.push(inl(linhas[i])); continue; }
    const tab = []; while (i < linhas.length && /^\s*\|/.test(linhas[i])) tab.push(linhas[i++]); i--;
    const cel = l => l.trim().replace(/^\||\|$/g, "").split("|").map(c => c.trim());
    out.push("<table>" + tab.filter(l => !/^\s*\|[\s:|-]+\|\s*$/.test(l)).map((l, k) => "<tr>" + cel(l).map(c => k ? `<td>${inl(c)}</td>` : `<th>${inl(c)}</th>`).join("") + "</tr>").join("") + "</table>");
  }
  return out.join("<br>").replace(/<br><table>/g, "<table>").replace(/<\/table><br>/g, "</table>");
}
const NV = { facil: "Fácil", medio: "Médio", dificil: "Difícil" };
const TIPO = { multipla: "Múltipla escolha", caso: "Estudo de caso", vf: "Verdadeiro ou falso", calculo: "Cálculo", ordenar: "Ordenar", tabela: "Completar tabela", ligar: "Ligar", lacuna: "Lacuna", discursiva: "Discursiva" };
function questao(q, n) {
  let corpo = "";
  if (q.figura) corpo += ctx.htmlFigura(q.figura);
  if (q.contexto) corpo += `<p class="ctx">${fmt(q.contexto)}</p>`;
  corpo += `<p class="perg">${fmt(q.pergunta)}</p>`;
  if (q.opcoes) corpo += `<ol class="ops" type="A">${q.opcoes.map((o, i) => `<li class="${i === q.correta ? "ok" : ""}"><b>${fmt(o)}</b>${q.justificativas ? `<div class="just">${i === q.correta ? "Correta" : "Incorreta"}: ${fmt(q.justificativas[i])}</div>` : ""}</li>`).join("")}</ol>`;
  if (q.tipo === "vf") corpo += `<p class="gab">Gabarito: <b>${q.correta ? "Verdadeiro" : "Falso"}</b></p>`;
  if (q.tipo === "calculo") corpo += `<p class="gab">Gabarito: <b>${numBR(q.resposta)} ${esc(q.unidade || "")}</b>${q.tolerancia ? ` (tolerância ±${q.tolerancia})` : " (valor exato)"}</p>`;
  if (q.tipo === "ordenar") corpo += `<p class="gab">Ordem correta:</p><ol>${q.itens.map(x => `<li>${fmt(x)}</li>`).join("")}</ol>`;
  if (q.tipo === "tabela") { const T = q.tabela;
    corpo += `<p class="gab">Gabarito (células a preencher em destaque):</p><table><tr><th>${esc(T.canto || "")}</th>${T.colunas.map(c => `<th>${esc(c)}</th>`).join("")}</tr>${T.linhas.map(l => `<tr><td>${esc(l.rotulo)}</td>${l.valores.map((v, c) => `<td class="${(l.editar || []).includes(c) ? "ed" : ""}">${numBR(v)}</td>`).join("")}</tr>`).join("")}</table>`; }
  if (q.resolucao) corpo += `<div class="res"><b>Resolução</b><br>${fmt(q.resolucao)}</div>`;
  if (q.explicacao) corpo += `<p class="exp">${fmt(q.explicacao)}</p>`;
  return `<article class="q"><header><span class="n">${n}</span><span class="tag ${q.nivel}">${NV[q.nivel]}</span><span class="tag">${TIPO[q.tipo] || q.tipo}</span>${q.estilo && q.estilo !== "autoral" ? `<span class="tag est">Estilo ${q.estilo}</span>` : ""}<code>${q.id}</code></header>
    ${corpo}<footer>Tags: ${q.tags.map(esc).join(" · ")}<br>Referência: ${esc(q.referencia)}${q.fonte ? `<br>Fonte: ${esc(q.fonte)}` : ""}</footer></article>`;
}
// CSS do KaTeX com as fontes embutidas (o arquivo abre sozinho, sem internet)
const kdir = path.join(RAIZ, "node_modules/katex/dist");
const kcss = fs.readFileSync(path.join(kdir, "katex.min.css"), "utf8").replace(/url\((fonts\/[^)]+\.woff2)\)/g, (m, f) => `url(data:font/woff2;base64,${fs.readFileSync(path.join(kdir, f)).toString("base64")})`).replace(/,url\(fonts\/[^)]+\) format\("(woff|truetype)"\)/g, "");
const cont = { facil: 0, medio: 0, dificil: 0 }; dados.questoes.forEach(q => cont[q.nivel]++);
const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Banco de questões — ${esc(topico.toUpperCase())}</title>
<style>${kcss}
:root{--p:#0f4c5c;--a:#c27803;--b:#d5dde0;--m:#5b6b70;--bg:#f6f8f8;--s:#fff;--t:#16232a;--ok:#1e7f4f;--oks:#e3f4ea}
@media (prefers-color-scheme:dark){:root{--b:#2b3a3f;--m:#9aabb0;--bg:#0f1719;--s:#172226;--t:#e6eef0;--oks:#16352a;--ok:#5fcf93}}
body{font:15px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif;background:var(--bg);color:var(--t);margin:0}
main{max-width:860px;margin:0 auto;padding:20px 16px 60px}h1{color:var(--p);margin:0 0 4px;font-size:1.6rem}
.sub{color:var(--m);margin:0 0 18px}.q{background:var(--s);border:1px solid var(--b);border-radius:12px;padding:16px;margin:14px 0}
.q header{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px}.n{font-weight:700;color:var(--p);margin-right:4px}
.tag{font-size:.75rem;font-weight:600;padding:2px 8px;border-radius:6px;background:var(--bg);border:1px solid var(--b)}
.tag.facil{color:var(--ok)}.tag.medio{color:#1d5fbf}.tag.dificil{color:var(--a)}.tag.est{color:var(--a)}
code{margin-left:auto;font-size:.8rem;color:var(--m)}.perg{font-weight:600}.ctx{color:var(--m)}
.ops li{margin:6px 0}.ops li.ok>b{color:var(--ok)}.just{font-size:.88rem;color:var(--m)}
table{border-collapse:collapse;margin:8px 0;font-size:.88rem;display:block;overflow-x:auto}th,td{border:1px solid var(--b);padding:4px 8px;text-align:right}th:first-child,td:first-child{text-align:left}
td.ed{background:var(--oks);font-weight:700}.gab{margin:8px 0 0}.res{background:var(--bg);border-left:3px solid var(--p);padding:8px 12px;margin:10px 0;border-radius:4px}
.exp{color:var(--m);font-size:.92rem}footer{border-top:1px solid var(--b);margin-top:10px;padding-top:8px;font-size:.8rem;color:var(--m)}
.fig-bom svg{display:block;max-width:100%;height:auto;margin:0 auto}.bom-n{fill:var(--s);stroke:var(--p);stroke-width:1.5}.bom-l{fill:none;stroke:var(--m);stroke-width:1.5}
.bom-t{font:600 15px system-ui;fill:var(--t)}.bom-s{font:400 11px system-ui;fill:var(--m)}.bom-q{fill:var(--a)}.bom-qt{font:600 11px monospace;fill:#fff}figcaption{text-align:center;color:var(--m);font-size:.82rem}
</style></head><body><main><h1>Banco de questões — ${esc(dados.disciplina)}: ${esc(topico.toUpperCase())}</h1>
<p class="sub">${dados.questoes.length} questões originais · Fácil ${cont.facil} · Médio ${cont.medio} · Difícil ${cont.dificil} · gabaritos calculados e conferidos por <code>${esc(dados.gerado_por)}</code> · lição ${esc(dados.licao)}</p>
${dados.questoes.map((q, i) => questao(q, i + 1)).join("\n")}</main></body></html>`;
const out = path.join(RAIZ, "dist-relatorio", `questoes-${topico}.html`);
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log(`relatório: ${path.relative(RAIZ, out)} (${(html.length / 1024).toFixed(0)} KB)`);
