/* =====================================================================
   PÁGINAS PÚBLICAS PARA O GOOGLE (SEO) — geradas no build, sem mudar o app
   A partir dos arquivos de conteúdo, cria páginas HTML estáticas e indexáveis:
     /ferramentas/<id>/   fichas das ferramentas (o que é, quando usar, fórmula, exemplo)
     /problemas/<id>/     situações reais e as ferramentas que ajudam
     /disciplinas/<slug>/ resumo das disciplinas da grade (tópicos, fórmulas, glossário)
     /glossario/<letra>/  todos os termos, agrupados por letra
   Cada página: title/description próprios, H1, dados estruturados (schema.org),
   links internos, canonical, Open Graph com imagem gerada e o botão
   "Praticar isso no app", que abre o ponto certo do app.
   Também gera sitemap.xml, robots.txt e 404.html.
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const RAIZ = path.resolve(__dirname, ".."), CONT = path.join(RAIZ, "app", "conteudo");
const SITE = (process.env.URL || "https://prodlean.netlify.app").replace(/\/$/, "");
const MARCA = "ProdLean", SLOGAN = "Engenharia de Produção descomplicada";

// ---------- conteúdo ----------
function carregarTudo() {
  const ctx = { MODULOS: [], DISCIPLINAS: [], BANCO: [] }; ctx.window = ctx.self = ctx;
  vm.runInNewContext(fs.readFileSync(path.join(CONT, "indice.js"), "utf8"), ctx);
  for (const arq of ctx.ARQUIVOS_MODULOS) vm.runInNewContext(fs.readFileSync(path.join(CONT, arq), "utf8"), ctx, { filename: arq });
  return ctx;
}

// ---------- texto ----------
const esc = t => String(t ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const limpar = t => String(t ?? "").replace(/\*\*/g, "").replace(/\*/g, "").replace(/\s+/g, " ").trim();
const norm = t => String(t ?? "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const slug = t => norm(t).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const resumo = (t, n = 155) => { const s = limpar(t); return s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…"; };
let SIG = null;
// Siglas com o significado entre parênteses na 1ª vez de cada texto (mesma regra do app, sem o bloqueio de questões)
function siglas(t, lista) {
  if (!SIG) {
    const por = new Map();
    lista.forEach(([s, sig, ctx]) => { if (!por.has(s)) por.set(s, []); por.get(s).push({ sig, ctx: ctx ? new RegExp(ctx) : null }); });
    const ch = [...por.keys()].sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\&]/g, "\\$&"));
    SIG = { por, re: new RegExp(`(?<![A-Za-zÀ-ÿ0-9&/])(${ch.join("|")})((?<=NR|ISO|NBR)[- ]\\d(?:[\\d./:-]*\\d)?)?(?![A-Za-zÀ-ÿ0-9&/])`, "g") };
  }
  const feitas = new Set();
  return String(t).replace(SIG.re, (m, s, num, pos, txt) => {
    if (feitas.has(s)) return m;
    const antes = txt.slice(Math.max(0, pos - 3), pos), depois = txt.slice(pos + m.length);
    if (/\(\s*\**$/.test(antes) || /^\**\s*\(/.test(depois)) { feitas.add(s); return m; }
    const e = SIG.por.get(s).find(x => !x.ctx || x.ctx.test(txt));
    if (!e) return m;
    feitas.add(s);
    return `${m} (${e.sig})`;
  });
}
let LISTA_SIGLAS = [];
// Markdown simples do conteúdo: **negrito**, *itálico*, quebras de linha e tabelas com "|"
function md(t) {
  const inl = x => esc(siglas(x, LISTA_SIGLAS)).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
  const linhas = String(t ?? "").split("\n"), out = [];
  for (let i = 0; i < linhas.length; i++) {
    if (!/^\s*\|/.test(linhas[i])) { out.push(inl(linhas[i]) + (i < linhas.length - 1 && !/^\s*\|/.test(linhas[i + 1] || "") ? "<br>" : "")); continue; }
    const tab = []; while (i < linhas.length && /^\s*\|/.test(linhas[i])) tab.push(linhas[i++]); i--;
    const cel = l => l.trim().replace(/^\||\|$/g, "").split("|").map(c => c.trim());
    const corpo = tab.filter(l => !/^\s*\|[\s:|-]+\|\s*$/.test(l));
    out.push('<div class="tab"><table>' + corpo.map((l, k) => "<tr>" + cel(l).map(c => k === 0 ? `<th>${inl(c)}</th>` : `<td>${inl(c)}</td>`).join("") + "</tr>").join("") + "</table></div>");
  }
  return out.join("");
}

// ---------- página ----------
const CSS = `:root{--bg:#f4f6f3;--s:#fff;--t:#17201c;--m:#5c6863;--p:#1f8a4c;--pt:#166a39;--b:#dfe5df;--soft:#dcf2e4}
@media (prefers-color-scheme:dark){:root{--bg:#121715;--s:#1b2220;--t:#e8eeea;--m:#9aa8a1;--p:#2fae66;--pt:#3fc77a;--b:#2f3a36;--soft:#1d3a2a}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--t);font:16px/1.6 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
a{color:var(--pt)}header,main,footer{max-width:760px;margin:0 auto;padding:0 16px}
header{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:center;padding-top:14px;padding-bottom:10px;border-bottom:1px solid var(--b)}
header .marca{font-weight:800;color:var(--t);text-decoration:none;font-size:1.15rem;margin-right:auto}header nav a{font-size:.92rem;text-decoration:none;font-weight:600}
.mig{font-size:.85rem;color:var(--m);margin:14px 0 0}.mig a{color:var(--m)}h1{font-size:1.8rem;line-height:1.25;margin:10px 0 6px}
h2{font-size:1.2rem;margin:26px 0 8px}.lead{color:var(--m);font-size:1.05rem;margin-top:0}
.cta{display:inline-block;background:#166a39;color:#fff;font-weight:800;text-decoration:none;padding:12px 18px;border-radius:12px;margin:8px 8px 8px 0}
.cta.sec{background:var(--s);color:var(--pt);border:2px solid var(--p)}
.card{background:var(--s);border:1px solid var(--b);border-radius:14px;padding:14px 16px;margin:10px 0}
.lista{list-style:none;padding:0;margin:0}.lista li{margin:0 0 8px}.lista a{font-weight:700}.lista .d{display:block;color:var(--m);font-size:.92rem}
.tab{overflow-x:auto}table{border-collapse:collapse;width:100%;font-size:.93rem}th,td{border:1px solid var(--b);padding:6px 8px;text-align:left;vertical-align:top}
th{background:var(--soft)}.fx{font-family:ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap}
details{background:var(--s);border:1px solid var(--b);border-radius:12px;padding:10px 14px;margin:10px 0}summary{cursor:pointer;font-weight:700}
dl dt{font-weight:800;margin-top:12px}dl dd{margin:2px 0 0}.letras{display:flex;flex-wrap:wrap;gap:6px}.letras a{padding:4px 10px;border:1px solid var(--b);border-radius:8px;text-decoration:none;font-weight:700;background:var(--s)}
.chips{display:flex;flex-wrap:wrap;gap:8px}.chips a{padding:6px 12px;border-radius:999px;border:1px solid var(--b);background:var(--s);text-decoration:none;font-weight:600;font-size:.92rem}
footer{color:var(--m);font-size:.85rem;padding-top:24px;padding-bottom:40px;border-top:1px solid var(--b);margin-top:36px}`;
const NAV = `<nav><a href="/ferramentas/">Ferramentas</a> · <a href="/problemas/">Problemas</a> · <a href="/disciplinas/">Disciplinas</a> · <a href="/glossario/">Glossário</a> · <a href="/">Abrir o app</a></nav>`;
function pagina({ caminho, titulo, desc, migalhas = [], corpo, jsonld = [], og }) {
  const url = SITE + caminho;
  const bread = migalhas.length ? { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ nome: "Início", url: "/" }].concat(migalhas).map((m, i) => ({ "@type": "ListItem", position: i + 1, name: m.nome, item: SITE + (m.url || caminho) })) } : null;
  const ld = jsonld.concat(bread ? [bread] : []).map(j => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`).join("");
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titulo)}</title><meta name="description" content="${esc(desc)}"><link rel="canonical" href="${url}">
<meta property="og:type" content="article"><meta property="og:site_name" content="${MARCA}"><meta property="og:locale" content="pt_BR">
<meta property="og:title" content="${esc(titulo)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}${og}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image"><meta name="theme-color" content="#1f8a4c">
<link rel="icon" href="/icone.svg" type="image/svg+xml"><link rel="manifest" href="/manifest.json"><style>${CSS}</style>${ld}</head>
<body><header><a class="marca" href="/">🏭 ${MARCA}</a>${NAV}</header><main>
${migalhas.length ? `<p class="mig"><a href="/">Início</a>${migalhas.map(m => m.url ? ` › <a href="${m.url}">${esc(m.nome)}</a>` : ` › ${esc(m.nome)}`).join("")}</p>` : ""}
${corpo}
<!-- espaço para anúncio (desligado por padrão; ver scripts/seo.js: ANUNCIOS) -->${ANUNCIOS ? `<div class="anuncio">${ANUNCIOS}</div>` : ""}
</main><footer>${MARCA} · ${SLOGAN}. Conteúdo próprio, escrito para estudo, com a bibliografia indicada em cada disciplina. Grátis e funciona offline no celular: <a href="/">abra o app</a>.</footer></body></html>`;
}
const ANUNCIOS = process.env.ANUNCIOS_HTML || ""; // anúncios só nas páginas públicas, nunca nas lições (desligado)

// ---------- imagens de prévia (Open Graph) ----------
const OG = [];
function og(nome, tipo, titulo, sub) { OG.push({ nome, tipo, titulo, sub }); return `/og/${nome}.png`; }
function quebrar(t, max) {
  const linhas = [], pal = String(t).split(" "); let l = "";
  for (const p of pal) { if ((l + " " + p).trim().length > max && l) { linhas.push(l); l = p; } else l = (l + " " + p).trim(); }
  if (l) linhas.push(l);
  return linhas;
}
function svgOG({ tipo, titulo, sub }) {
  const tam = titulo.length > 60 ? 52 : titulo.length > 34 ? 62 : 76, max = Math.floor(1040 / (tam * 0.62));
  const lt = quebrar(titulo, max).slice(0, 3), ls = quebrar(sub || "", 52).slice(0, lt.length >= 3 ? 1 : 2);
  const y0 = 230;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#f4f6f3"/><rect width="1200" height="14" fill="#1f8a4c"/>
<rect x="80" y="70" width="${24 + (MARCA + " · " + tipo).length * 21}" height="54" rx="27" fill="#dcf2e4"/>
<text x="104" y="107" font-family="DejaVu Sans" font-weight="bold" font-size="32" fill="#166a39">${esc(MARCA + " · " + tipo)}</text>
${lt.map((l, i) => `<text x="80" y="${y0 + i * tam * 1.18}" font-family="DejaVu Sans" font-weight="bold" font-size="${tam}" fill="#17201c">${esc(l)}</text>`).join("")}
${ls.map((l, i) => `<text x="80" y="${y0 + lt.length * tam * 1.18 + 30 + i * 44}" font-family="DejaVu Sans" font-size="34" fill="#5c6863">${esc(l)}</text>`).join("")}
<text x="80" y="592" font-family="DejaVu Sans" font-size="26" fill="#5c6863">${esc(SLOGAN)} · grátis no celular</text></svg>`;
}
function gerarOG(dist) {
  const { Resvg } = require("@resvg/resvg-js");
  const fontes = ["DejaVuSans.ttf", "DejaVuSans-Bold.ttf"].map(f => path.join(__dirname, "fontes", f));
  fs.mkdirSync(path.join(dist, "og"), { recursive: true });
  for (const o of OG) {
    const png = new Resvg(svgOG(o), { font: { fontFiles: fontes, loadSystemFonts: false, defaultFontFamily: "DejaVu Sans" } }).render().asPng();
    fs.writeFileSync(path.join(dist, "og", o.nome + ".png"), png);
  }
}

// ---------- geração ----------
function gerar(dist) {
  const C = carregarTudo(), P = C.PROBLEMAS, FER = P.ferramentas, DES = C.DESAFIOS || [];
  LISTA_SIGLAS = C.SIGLAS || [];
  const urls = [], escrever = (caminho, html) => { const f = path.join(dist, caminho, "index.html"); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); urls.push(caminho); };
  const discs = C.DISCIPLINAS.slice().sort((a, b) => a.periodo - b.periodo || a.nome.localeCompare(b.nome, "pt-BR"));
  const slugDisc = new Map(discs.map(d => [d.id, slug(d.nome)]));
  const mods = C.MODULOS;
  const lic = new Map(); // id da lição → { titulo, modulo }
  mods.forEach(m => m.licoes.forEach(l => lic.set(l.id, { titulo: l.titulo, mod: m })));
  discs.forEach(d => d.topicos.forEach((t, i) => lic.set(`${d.id}-l${i + 1}`, { titulo: t.t, disc: d })));
  const linkLicao = id => { const x = lic.get(id); if (!x) return null; return x.disc ? { href: `/disciplinas/${slugDisc.get(x.disc.id)}/#t${id.split("-l").pop()}`, titulo: x.titulo, origem: x.disc.nome } : { href: `/#conteudo/${x.mod.id}/${id}`, titulo: x.titulo, origem: `Módulo ${x.mod.numero} — ${x.mod.titulo}` }; };
  const probsDaFerr = id => P.problemas.filter(p => p.ferramentas.includes(id));
  const AREA = { exatas: "Ciências exatas", engenharia: "Engenharia básica", producao: "Engenharia de Produção", gestao: "Gestão e economia", humanas: "Humanidades" };

  // --- ferramentas ---
  const idsF = Object.keys(FER).sort((a, b) => FER[a].nome.localeCompare(FER[b].nome, "pt-BR"));
  for (const id of idsF) {
    const f = FER[id], probs = probsDaFerr(id), d = DES.find(x => x.ferramenta === id);
    const rel = [...new Set(probs.flatMap(p => p.ferramentas))].filter(x => x !== id && FER[x]).slice(0, 8);
    const ver = (f.ver || []).map(linkLicao).filter(Boolean);
    const corpo = `<h1>${esc(f.nome)}: o que é, quando usar e exemplo</h1>
<p class="lead">${md(f.oque)}</p>
<a class="cta" href="/#ferramenta/${id}">▶ Praticar isso no app</a>
<h2>Para que serve</h2><p>${md(f.paraque)}</p>
<h2>Quando usar</h2><p>${md(f.quando)}</p>
${(f.dados || []).length ? `<h2>Dados necessários</h2><ul>${f.dados.map(x => `<li>${md(x)}</li>`).join("")}</ul>` : ""}
${(f.formulas || []).length ? `<h2>Fórmulas</h2><div class="tab"><table><tr><th>Fórmula</th><th>Significado</th></tr>${f.formulas.map(([a, b]) => `<tr><td class="fx">${esc(a)}</td><td>${md(b)}</td></tr>`).join("")}</table></div>` : ""}
<h2>Exemplo resolvido</h2><div class="card">${md(f.exemplo)}</div>
${f.erros ? `<h2>Erros comuns</h2><p>${md(f.erros)}</p>` : ""}
${d ? `<h2>Teste rápido</h2><div class="card"><p><strong>${md(d.pergunta)}</strong></p><ol type="a">${d.opcoes.map(o => `<li>${md(o)}</li>`).join("")}</ol>
<details><summary>Ver a resposta</summary><p><strong>Resposta:</strong> ${md(d.opcoes[d.correta])}</p><p>${md(d.porque)}</p><p><em>Na prática:</em> ${md(d.pratica)}</p></details></div>` : ""}
${probs.length ? `<h2>Problemas em que ajuda</h2><ul class="lista">${probs.map(p => `<li><a href="/problemas/${p.id}/">${esc(p.titulo)}</a><span class="d">${esc(limpar(p.desc))}</span></li>`).join("")}</ul>` : ""}
${rel.length ? `<h2>Ferramentas relacionadas</h2><div class="chips">${rel.map(x => `<a href="/ferramentas/${x}/">${esc(FER[x].nome)}</a>`).join("")}</div>` : ""}
${ver.length ? `<h2>Para estudar a fundo</h2><ul class="lista">${ver.map(v => `<li><a href="${v.href}">${esc(v.titulo)}</a><span class="d">${esc(v.origem)}</span></li>`).join("")}</ul>` : ""}
<p><a class="cta" href="/#ferramenta/${id}">▶ Praticar isso no app</a></p>`;
    const faq = [["O que é " + f.nome + "?", f.oque], ["Para que serve " + f.nome + "?", f.paraque], ["Quando usar " + f.nome + "?", f.quando]];
    escrever(`/ferramentas/${id}/`, pagina({
      caminho: `/ferramentas/${id}/`, titulo: `${f.nome}: o que é, fórmula e exemplo | ${MARCA}`, desc: resumo(`${f.nome}: ${limpar(f.oque)} Quando usar, fórmula e exemplo resolvido.`),
      migalhas: [{ nome: "Ferramentas", url: "/ferramentas/" }, { nome: f.nome }], corpo, og: og("ferramenta-" + id, "Ferramenta", f.nome, limpar(f.oque)),
      jsonld: [{ "@context": "https://schema.org", "@type": "DefinedTerm", name: f.nome, description: limpar(f.oque), url: `${SITE}/ferramentas/${id}/`, inDefinedTermSet: `${SITE}/ferramentas/` },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: limpar(a) } })) }]
    }));
  }
  escrever("/ferramentas/", pagina({
    caminho: "/ferramentas/", titulo: `Ferramentas de Engenharia de Produção: ${idsF.length} fichas com fórmula e exemplo | ${MARCA}`,
    desc: resumo(`As ${idsF.length} ferramentas mais usadas na Engenharia de Produção — OEE, Curva ABC, LEC, MRP, CEP, VSM e mais — com o que é, quando usar, fórmula e exemplo resolvido.`),
    migalhas: [{ nome: "Ferramentas" }], og: og("ferramentas", "Ferramentas", `${idsF.length} ferramentas de Engenharia de Produção`, "O que é, quando usar, fórmula e exemplo resolvido"),
    corpo: `<h1>Ferramentas de Engenharia de Produção</h1><p class="lead">${idsF.length} fichas rápidas: o que é, para que serve, quando usar, fórmula e exemplo resolvido.</p>
<ul class="lista">${idsF.map(id => `<li><a href="/ferramentas/${id}/">${esc(FER[id].nome)}</a><span class="d">${esc(resumo(FER[id].oque, 140))}</span></li>`).join("")}</ul>`,
    jsonld: [{ "@context": "https://schema.org", "@type": "DefinedTermSet", name: "Ferramentas de Engenharia de Produção", url: `${SITE}/ferramentas/`, hasDefinedTerm: idsF.map(id => ({ "@type": "DefinedTerm", name: FER[id].nome, url: `${SITE}/ferramentas/${id}/` })) }]
  }));

  // --- problemas ---
  for (const p of P.problemas) {
    const cat = P.categorias.find(c => c.id === p.cat) || { nome: "" };
    const fs_ = p.ferramentas.filter(x => FER[x]);
    const corpo = `<h1>${esc(p.titulo)}</h1><p class="lead">${md(p.desc)}</p>
<h2>Por onde começar</h2><div class="card">${md(p.comecar)}</div>
<h2>Ferramentas que ajudam</h2><ul class="lista">${fs_.map(x => `<li><a href="/ferramentas/${x}/">${esc(FER[x].nome)}</a><span class="d">${esc(resumo(FER[x].oque, 150))}</span></li>`).join("")}</ul>
<p><a class="cta" href="/#problema/${p.id}">▶ Resolver no app</a><a class="cta sec" href="/problemas/">Outros problemas</a></p>`;
    escrever(`/problemas/${p.id}/`, pagina({
      caminho: `/problemas/${p.id}/`, titulo: `${p.titulo}: o que fazer | ${MARCA}`, desc: resumo(`${p.titulo}? ${limpar(p.comecar)}`),
      migalhas: [{ nome: "Problemas", url: "/problemas/" }, { nome: p.titulo }], corpo, og: og("problema-" + p.id, "Problema · " + cat.nome, p.titulo, limpar(p.desc)),
      jsonld: [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: p.titulo.replace(/[.?!]$/, "") + ": o que fazer?",
        acceptedAnswer: { "@type": "Answer", text: limpar(p.comecar) + " Ferramentas: " + fs_.map(x => FER[x].nome).join(", ") + "." } }] }]
    }));
  }
  escrever("/problemas/", pagina({
    caminho: "/problemas/", titulo: `Problemas reais de produção e como resolver | ${MARCA}`,
    desc: resumo(`${P.problemas.length} situações do dia a dia de fábrica, estoque, qualidade, logística e projetos — e as ferramentas de Engenharia de Produção que ajudam a resolver cada uma.`),
    migalhas: [{ nome: "Problemas" }], og: og("problemas", "Problemas", "Tem um problema? Veja por onde começar", `${P.problemas.length} situações reais e as ferramentas que resolvem`),
    corpo: `<h1>Problemas reais e por onde começar</h1><p class="lead">Escolha a situação parecida com a sua: cada uma mostra por onde começar e quais ferramentas ajudam.</p>
${P.categorias.map(c => { const ps = P.problemas.filter(p => p.cat === c.id); return ps.length ? `<h2>${c.icone} ${esc(c.nome)}</h2><ul class="lista">${ps.map(p => `<li><a href="/problemas/${p.id}/">${esc(p.titulo)}</a><span class="d">${esc(limpar(p.desc))}</span></li>`).join("")}</ul>` : ""; }).join("")}`
  }));

  // --- disciplinas ---
  for (const d of discs) {
    const s = slugDisc.get(d.id);
    const pre = (d.prereq || []).map(id => discs.find(x => x.id === id)).filter(Boolean);
    const corpo = `<h1>${esc(d.nome)}: resumo, fórmulas e exemplos</h1>
<p class="lead">${d.periodo}º período · ${esc(AREA[d.area] || "")}</p><p>${md(d.intro)}</p>
<a class="cta" href="/#conteudo/${d.id}">▶ Estudar no app</a><a class="cta sec" href="/#licao/${d.id}-l1">🎮 Fazer os exercícios</a>
${pre.length ? `<p><strong>Pré-requisitos:</strong> ${pre.map(x => `<a href="/disciplinas/${slugDisc.get(x.id)}/">${esc(x.nome)}</a>`).join(", ")}</p>` : ""}
<h2>Tópicos</h2><ol>${d.topicos.map((t, i) => `<li><a href="#t${i + 1}">${esc(t.t)}</a></li>`).join("")}</ol>
${d.topicos.map((t, i) => `<section id="t${i + 1}"><h2>${i + 1}. ${esc(t.t)}</h2>
<ul>${(t.pontos || []).map(p => `<li>${md(p)}</li>`).join("")}</ul>
${(t.formulas || []).length ? `<div class="tab"><table><tr><th>Fórmula</th><th>Significado</th></tr>${t.formulas.map(([a, b]) => `<tr><td class="fx">${esc(a)}</td><td>${md(b)}</td></tr>`).join("")}</table></div>` : ""}
${t.producao ? `<p><strong>Na Engenharia de Produção:</strong> ${md(t.producao)}</p>` : ""}
${t.exemplo ? `<div class="card"><strong>Exemplo:</strong> ${md(t.exemplo)}</div>` : ""}
<p><a href="/#licao/${d.id}-l${i + 1}">🎮 Exercícios deste tópico no app</a></p></section>`).join("")}
${(d.glossario || []).length ? `<h2>Glossário</h2><dl>${d.glossario.map(([a, b]) => `<dt>${esc(a)}</dt><dd>${md(b)}</dd>`).join("")}</dl>` : ""}
${(d.referencias || []).length ? `<h2>Bibliografia</h2><ul>${d.referencias.map(r => `<li>${md(r)}</li>`).join("")}</ul>` : ""}
<p><a class="cta" href="/#conteudo/${d.id}">▶ Estudar no app</a></p>`;
    escrever(`/disciplinas/${s}/`, pagina({
      caminho: `/disciplinas/${s}/`, titulo: `${d.nome}: resumo, fórmulas e exercícios | ${MARCA}`, desc: resumo(`${d.nome} (${d.periodo}º período de Engenharia de Produção): ${limpar(d.intro)}`),
      migalhas: [{ nome: "Disciplinas", url: "/disciplinas/" }, { nome: d.nome }], corpo, og: og("disciplina-" + s, `Disciplina · ${d.periodo}º período`, d.nome, resumo(d.intro, 100)),
      jsonld: [{ "@context": "https://schema.org", "@type": "Course", name: d.nome, description: limpar(d.intro), inLanguage: "pt-BR", url: `${SITE}/disciplinas/${s}/`,
        provider: { "@type": "Organization", name: MARCA, sameAs: SITE + "/" }, isAccessibleForFree: true,
        hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: "PT" + Math.max(1, d.topicos.length) + "H" } }]
    }));
  }
  escrever("/disciplinas/", pagina({
    caminho: "/disciplinas/", titulo: `Disciplinas de Engenharia de Produção: resumos do 1º ao 10º período | ${MARCA}`,
    desc: resumo(`Resumos das ${discs.length} disciplinas da graduação em Engenharia de Produção, do cálculo ao PCP, com fórmulas, exemplos, glossário e exercícios no app.`),
    migalhas: [{ nome: "Disciplinas" }], og: og("disciplinas", "Disciplinas", `${discs.length} disciplinas de Engenharia de Produção`, "Resumos, fórmulas, exemplos e exercícios"),
    corpo: `<h1>Disciplinas de Engenharia de Produção</h1><p class="lead">Resumos por período, com fórmulas, exemplos e glossário. Os exercícios ficam no app.</p>
${[...new Set(discs.map(d => d.periodo))].map(p => `<h2>${p}º período</h2><ul class="lista">${discs.filter(d => d.periodo === p).map(d => `<li><a href="/disciplinas/${slugDisc.get(d.id)}/">${esc(d.nome)}</a><span class="d">${esc(resumo(d.intro, 140))}</span></li>`).join("")}</ul>`).join("")}`
  }));

  // --- glossário (por letra) ---
  const termos = [], vistos = new Set();
  const addT = (termo, def, fonte, href) => { const n = norm(termo); if (vistos.has(n)) return; vistos.add(n); termos.push({ termo, def, fonte, href }); };
  discs.forEach(d => (d.glossario || []).forEach(([t, g]) => addT(t, g, d.nome, `/disciplinas/${slugDisc.get(d.id)}/`)));
  mods.forEach(m => (m.glossario || []).forEach(g => addT(g.termo, g.definicao, `Módulo ${m.numero} — ${m.titulo}`, `/#conteudo/${m.id}`)));
  termos.sort((a, b) => a.termo.localeCompare(b.termo, "pt-BR"));
  const letra = t => { const c = norm(t.termo).replace(/[^a-z0-9]/g, "")[0] || "#"; return /[a-z]/.test(c) ? c : "0-9"; };
  const letras = [...new Set(termos.map(letra))].sort((a, b) => a === "0-9" ? -1 : b === "0-9" ? 1 : a.localeCompare(b));
  const navL = atual => `<div class="letras">${letras.map(l => l === atual ? `<strong>${l.toUpperCase()}</strong>` : `<a href="/glossario/${l}/">${l.toUpperCase()}</a>`).join("")}</div>`;
  for (const l of letras) {
    const ts = termos.filter(t => letra(t) === l);
    escrever(`/glossario/${l}/`, pagina({
      caminho: `/glossario/${l}/`, titulo: `Glossário de Engenharia de Produção — letra ${l.toUpperCase()} | ${MARCA}`,
      desc: resumo(`Termos de Engenharia de Produção com a letra ${l.toUpperCase()}: ${ts.slice(0, 8).map(t => t.termo).join(", ")} e mais ${Math.max(0, ts.length - 8)}.`),
      migalhas: [{ nome: "Glossário", url: "/glossario/" }, { nome: "Letra " + l.toUpperCase() }], og: og("glossario-" + l, "Glossário", `Termos com ${l.toUpperCase()}`, ts.slice(0, 6).map(t => t.termo).join(" · ")),
      corpo: `<h1>Glossário — ${l.toUpperCase()}</h1><p class="lead">${ts.length} termo(s) de Engenharia de Produção.</p>${navL(l)}
<dl>${ts.map(t => `<dt id="${slug(t.termo)}">${esc(t.termo)}</dt><dd>${md(t.def)} <a href="${t.href}" title="${esc(t.fonte)}">↗ ${esc(t.fonte)}</a></dd>`).join("")}</dl>`,
      jsonld: [{ "@context": "https://schema.org", "@type": "DefinedTermSet", name: `Glossário de Engenharia de Produção — ${l.toUpperCase()}`, url: `${SITE}/glossario/${l}/`,
        hasDefinedTerm: ts.map(t => ({ "@type": "DefinedTerm", name: t.termo, description: limpar(t.def), url: `${SITE}/glossario/${l}/#${slug(t.termo)}` })) }]
    }));
  }
  escrever("/glossario/", pagina({
    caminho: "/glossario/", titulo: `Glossário de Engenharia de Produção: ${termos.length} termos explicados | ${MARCA}`,
    desc: resumo(`${termos.length} termos de Engenharia de Produção explicados em linguagem simples: PCP, OEE, MRP, Lean, qualidade, logística, custos, projetos e estatística.`),
    migalhas: [{ nome: "Glossário" }], og: og("glossario", "Glossário", `${termos.length} termos de Engenharia de Produção`, "Explicados em linguagem simples"),
    corpo: `<h1>Glossário de Engenharia de Produção</h1><p class="lead">${termos.length} termos explicados em linguagem simples. Escolha a letra:</p>${navL(null)}`
  }));

  // --- sitemap, robots, 404, imagem da página inicial ---
  og("inicio", "App grátis", `${MARCA}: ${SLOGAN}`, "Consulta rápida, problemas reais, desafio do dia e a graduação inteira no celular");
  const hoje = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    ["/"].concat(urls).map(u => `<url><loc>${SITE}${u}</loc><lastmod>${hoje}</lastmod></url>`).join("\n") + "\n</urlset>\n");
  fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
  fs.writeFileSync(path.join(dist, "404.html"), pagina({ caminho: "/404.html", titulo: `Página não encontrada | ${MARCA}`, desc: "Página não encontrada.", og: "/og/inicio.png",
    corpo: `<h1>Página não encontrada</h1><p>Talvez ela tenha mudado de endereço. Tente as <a href="/ferramentas/">ferramentas</a>, os <a href="/problemas/">problemas</a>, as <a href="/disciplinas/">disciplinas</a> ou o <a href="/glossario/">glossário</a>.</p><a class="cta" href="/">Abrir o app</a>` }).replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex">'));
  gerarOG(dist);
  return { paginas: urls.length, imagens: OG.length, termos: termos.length };
}
module.exports = { gerar, SITE };
