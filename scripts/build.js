/* =====================================================================
   BUILD DO PRODLEAN (Netlify: "npm run build")
   1) Gera app/conteudo/catalogo.js: um índice leve de todo o conteúdo
      (módulos, disciplinas, títulos das lições, glossário, flashcards e só
      o id/tipo/nível de cada questão). O app abre com ele e carrega o texto
      completo de cada módulo quando o assunto é aberto.
   2) Copia app/ para dist/ minificando HTML, CSS e JavaScript.
   Uso: node scripts/build.js            → catálogo + dist/
        node scripts/build.js --catalogo → só o catálogo
        node scripts/build.js --checar   → falha se o catálogo estiver desatualizado
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path"), crypto = require("crypto"), vm = require("vm");
const RAIZ = path.resolve(__dirname, ".."), APP = path.join(RAIZ, "app"), DIST = path.join(RAIZ, "dist");
const CONT = path.join(APP, "conteudo"), ARQ_CATALOGO = path.join(CONT, "catalogo.js"), ARQ_BUSCA = path.join(CONT, "catalogo-busca.js");

// Carrega um arquivo de conteúdo num contexto isolado e devolve o que ele registrou
function carregar(arq) {
  const ctx = { MODULOS: [], DISCIPLINAS: [], BANCO: [] };
  ctx.window = ctx.self = ctx;
  vm.runInNewContext(fs.readFileSync(path.join(CONT, arq), "utf8"), ctx, { filename: arq });
  return ctx;
}
function lerIndice() {
  const ctx = {}; ctx.self = ctx.window = ctx;
  vm.runInNewContext(fs.readFileSync(path.join(CONT, "indice.js"), "utf8"), ctx);
  return { todos: ctx.ARQUIVOS_MODULOS, iniciais: ctx.ARQUIVOS_INICIAIS || [] };
}
const primeiraLinha = t => String(t || "").split("\n")[0];
const modDaLicao = id => id.replace(/-l\d+$/, "");
// Questões no catálogo: "id|tipo|nivel|v|t" separadas por ";" (o app expande em objetos-esboço)
const codQ = q => [q.id, q.tipo, q.nivel || "", q.variaveis ? 1 : "", q.t ?? "", q.licao || ""].join("|").replace(/\|+$/, "");
const niveisDe = lista => [...new Set((lista || []).map(x => x.nivel).filter(Boolean))];

// Dois arquivos: catalogo.js (estrutura mínima, abre o app) e catalogo-busca.js (glossário,
// flashcards e fórmulas, carregado logo depois da primeira tela para a busca e o glossário)
function gerarCatalogo() {
  const { todos } = lerIndice();
  const cat = { modulos: [], disciplinas: [], banco: "", arquivos: {}, bancoMods: [], hashes: {} };
  const busca = {};
  const banco = [];
  for (const arq of todos) {
    if (!/^(modulo-|grade\/|banco-questoes)/.test(arq)) continue;
    const c = carregar(arq);
    cat.hashes[arq] = crypto.createHash("sha1").update(fs.readFileSync(path.join(CONT, arq))).digest("hex").slice(0, 8);
    c.MODULOS.forEach(m => {
      const s = {};
      Object.keys(m).forEach(k => { if (!["licoes", "resumoAudio", "glossario", "flashcards"].includes(k)) s[k] = m[k]; });
      s.licoes = m.licoes.map(l => ({ id: l.id, titulo: l.titulo, icone: l.icone, bn: niveisDe(l.blocos), q: (l.questoes || []).map(codQ).join(";") }));
      s.cartas = (m.flashcards || []).map(c => c.id).join(";");
      cat.modulos.push(s); cat.arquivos[m.id] = arq;
      busca[m.id] = { glossario: m.glossario || [], flashcards: m.flashcards || [],
        formulas: Object.fromEntries(m.licoes.map(l => [l.id, (l.blocos || []).filter(b => b.tipo === "formula").map(b => { const f = { titulo: b.titulo, texto: primeiraLinha(b.texto) }; if (b.nivel) f.nivel = b.nivel; return f; })]).filter(x => x[1].length)) };
    });
    c.DISCIPLINAS.forEach(d => {
      const s = {};
      Object.keys(d).forEach(k => { if (!["topicos", "questoes", "glossario", "intro", "referencias"].includes(k)) s[k] = d[k]; });
      s.topicos = d.topicos.map(tp => ({ t: tp.t, icone: tp.icone }));
      s.q = (d.questoes || []).map(codQ).join(";");
      cat.disciplinas.push(s); cat.arquivos[d.id] = arq;
      busca[d.id] = { glossario: d.glossario || [], intro: d.intro, formulas: d.topicos.map(tp => tp.formulas || []) };
    });
    c.BANCO.forEach(q => banco.push(q));
  }
  cat.banco = banco.map(codQ).join(";");
  cat.bancoMods = [...new Set(banco.map(q => modDaLicao(q.licao)))];
  const v = crypto.createHash("sha1").update(JSON.stringify([cat, busca])).digest("hex").slice(0, 10);
  cat.versao = v;
  const cab = "/* Gerado por scripts/build.js — NÃO edite à mão (rode: node scripts/build.js --catalogo). */\n";
  return {
    catalogo: cab + "window.CATALOGO = " + JSON.stringify(cat) + ";\n",
    busca: cab + "window.CATALOGO_BUSCA = " + JSON.stringify({ versao: v, modulos: busca }) + ";\n"
  };
}

async function minificarDist() {
  const esbuild = require("esbuild");
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.cpSync(APP, DIST, { recursive: true, filter: src => !/\.md$/.test(src) });
  const arquivos = [];
  const andar = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => { const p = path.join(d, e.name); e.isDirectory() ? andar(p) : arquivos.push(p); });
  andar(DIST);
  const hash = crypto.createHash("sha1");
  for (const f of arquivos.sort()) {
    if (f.endsWith(".js")) {
      const r = await esbuild.transform(fs.readFileSync(f, "utf8"), { loader: "js", minify: true, legalComments: "none", charset: "utf8", target: "es2020" });
      fs.writeFileSync(f, r.code);
    } else if (f.endsWith(".html")) {
      let h = fs.readFileSync(f, "utf8");
      h = await substituirAsync(h, /<style>([\s\S]*?)<\/style>/g, async css => "<style>" + (await esbuild.transform(css, { loader: "css", minify: true, charset: "utf8" })).code.trim() + "</style>");
      h = await substituirAsync(h, /<script>([\s\S]*?)<\/script>/g, async js => "<script>" + (await esbuild.transform(js, { loader: "js", minify: true, legalComments: "none", charset: "utf8", target: "es2020" })).code.trim() + "</script>");
      // parametros.js e indice.js são pequenos: entram no próprio HTML (não bloqueiam a 1ª pintura)
      for (const pequeno of ["parametros.js", "conteudo/indice.js"]) {
        const cod = (await esbuild.transform(fs.readFileSync(path.join(APP, pequeno), "utf8"), { loader: "js", minify: true, legalComments: "none", charset: "utf8", target: "es2020" })).code.trim();
        h = h.replace(`<script src="${pequeno}"></script>`, () => "<script>" + cod + "</script>");
      }
      h = h.replace(/<!--(?!\[)[\s\S]*?-->/g, "").replace(/\n\s+/g, "\n");
      fs.writeFileSync(f, h);
    }
    if (!f.endsWith("sw.js")) hash.update(fs.readFileSync(f));
  }
  // O service worker ganha a "impressão digital" do build: qualquer mudança atualiza o cache sozinha
  const sw = path.join(DIST, "sw.js");
  fs.writeFileSync(sw, fs.readFileSync(sw, "utf8").replace(/(engprod-v\d+)/, `$1-${hash.digest("hex").slice(0, 8)}`));
  const tam = arquivos.reduce((t, f) => t + fs.statSync(f).size, 0);
  console.log(`dist/: ${arquivos.length} arquivos, ${(tam / 1024).toFixed(0)} KB`);
}
// Cloudflare Web Analytics (sem cookies): só entra se a variável CF_ANALYTICS_TOKEN existir na Netlify.
// O token é público (aparece no HTML), mas fica fora do repositório para poder trocar sem mexer no código.
function instalarAnalytics() {
  const token = (process.env.CF_ANALYTICS_TOKEN || "").trim();
  if (!token) { console.log("Analytics: desligado (defina CF_ANALYTICS_TOKEN para ligar)"); return; }
  if (!/^[a-f0-9]{32}$/i.test(token)) throw new Error("CF_ANALYTICS_TOKEN inválido: copie só o token (32 caracteres) do painel do Cloudflare");
  const tag = `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${token}", "spa": true}'></script>`;
  let n = 0;
  const andar = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) return andar(p);
    if (!e.name.endsWith(".html")) return;
    const h = fs.readFileSync(p, "utf8");
    if (h.includes("</body>") && !h.includes("cloudflareinsights")) { fs.writeFileSync(p, h.replace("</body>", tag + "</body>")); n++; }
  });
  andar(DIST);
  console.log(`Analytics: Cloudflare instalado em ${n} páginas`);
}
async function substituirAsync(txt, re, fn) {
  const partes = [], ms = [...txt.matchAll(re)];
  let i = 0;
  for (const m of ms) { partes.push(txt.slice(i, m.index), await fn(m[1])); i = m.index + m[0].length; }
  partes.push(txt.slice(i));
  return partes.join("");
}

(async () => {
  const novo = gerarCatalogo();
  const ler = f => fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "";
  if (process.argv.includes("--checar")) {
    if (ler(ARQ_CATALOGO) !== novo.catalogo || ler(ARQ_BUSCA) !== novo.busca) { console.error("❌ catálogo desatualizado: rode  node scripts/build.js --catalogo"); process.exit(1); }
    console.log("✓ catálogo em dia"); return;
  }
  fs.writeFileSync(ARQ_CATALOGO, novo.catalogo);
  fs.writeFileSync(ARQ_BUSCA, novo.busca);
  console.log(`catalogo.js: ${(novo.catalogo.length / 1024).toFixed(0)} KB · catalogo-busca.js: ${(novo.busca.length / 1024).toFixed(0)} KB`);
  if (!process.argv.includes("--catalogo")) {
    const fx = require("./formulas-tex").gerar(); // fórmulas em texto → LaTeX (KaTeX)
    if (fx.falhas.length) throw new Error("fórmulas sem conversão para LaTeX: veja a lista acima");
    await minificarDist();
    const seo = require("./seo");
    const r = seo.gerar(DIST);
    // endereço do site (a Netlify informa em URL; o padrão é prodlean.netlify.app)
    const idx = path.join(DIST, "index.html");
    fs.writeFileSync(idx, fs.readFileSync(idx, "utf8").split("https://prodlean.netlify.app").join(seo.SITE));
    console.log(`SEO: ${r.paginas} páginas, ${r.imagens} imagens de prévia, ${r.termos} termos no glossário`);
    instalarAnalytics();
  }
})().catch(e => { console.error(e); process.exit(1); });
