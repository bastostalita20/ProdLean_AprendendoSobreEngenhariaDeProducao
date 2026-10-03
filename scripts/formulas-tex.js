/* =====================================================================
   FÓRMULAS → LaTeX (KaTeX)
   Lê todas as fórmulas do conteúdo (disciplinas, ferramentas, blocos de fórmula dos
   módulos), converte a notação em texto ("Q* = √(2 · D · S ÷ H)") para LaTeX
   ("Q^* = \sqrt{\dfrac{2 D S}{H}}"), confere cada uma com o KaTeX e grava
   app/conteudo/formulas-tex.js. Frases que não são fórmulas ficam como texto.
   Correções manuais: app/conteudo/formulas-tex-manual.js (têm prioridade).
   Uso: node scripts/formulas-tex.js            (gera + relatório em dist-relatorio/)
        node scripts/formulas-tex.js --checar   (falha se houver fórmula sem conversão)
   ===================================================================== */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const katex = require("katex");
const RAIZ = path.resolve(__dirname, ".."), CONT = path.join(RAIZ, "app", "conteudo");

// ---------- coleta ----------
function coletar() {
  const ctx = { MODULOS: [], DISCIPLINAS: [], BANCO: [] }; ctx.window = ctx.self = ctx;
  vm.runInNewContext(fs.readFileSync(path.join(CONT, "indice.js"), "utf8"), ctx);
  for (const a of ctx.ARQUIVOS_MODULOS) vm.runInNewContext(fs.readFileSync(path.join(CONT, a), "utf8"), ctx);
  const set = new Set();
  ctx.DISCIPLINAS.forEach(d => d.topicos.forEach(t => (t.formulas || []).forEach(f => set.add(f[0]))));
  Object.values(ctx.PROBLEMAS.ferramentas).forEach(f => (f.formulas || []).forEach(x => set.add(x[0])));
  ctx.MODULOS.forEach(m => m.licoes.forEach(l => (l.blocos || []).forEach(b => {
    if (b.tipo !== "formula") return;
    for (const mm of String(b.texto || "").matchAll(/\*\*([^*\n]+)\*\*/g)) if (/[=≈≤≥]/.test(mm[1])) set.add(mm[1].trim());
  })));
  return [...set];
}

// ---------- conversão ----------
const GREGO = { α: "\\alpha", β: "\\beta", γ: "\\gamma", δ: "\\delta", ε: "\\varepsilon", ζ: "\\zeta", η: "\\eta", θ: "\\theta", κ: "\\kappa", λ: "\\lambda", μ: "\\mu", ν: "\\nu", ξ: "\\xi", π: "\\pi", ρ: "\\rho", σ: "\\sigma", τ: "\\tau", φ: "\\varphi", ϕ: "\\phi", χ: "\\chi", ψ: "\\psi", ω: "\\omega",
  Γ: "\\Gamma", Δ: "\\Delta", Θ: "\\Theta", Λ: "\\Lambda", Ξ: "\\Xi", Φ: "\\Phi", Ψ: "\\Psi", Ω: "\\Omega" };
const OPS = { "·": "\\cdot", "×": "\\times", "−": "-", "–": "-", "≈": "\\approx", "≤": "\\le", "≥": "\\ge", "≠": "\\ne", "±": "\\pm", "→": "\\to", "⇒": "\\Rightarrow", "⇔": "\\Leftrightarrow", "←": "\\leftarrow", "∈": "\\in",
  "∞": "\\infty", "∂": "\\partial", "∇": "\\nabla", "°": "^{\\circ}", "∝": "\\propto", "≡": "\\equiv", "⊥": "\\perp", "∥": "\\parallel", "∩": "\\cap", "∪": "\\cup", "…": "\\ldots", "%": "\\%", "$": "\\$", "<": "<", ">": ">", "=": "=", "+": "+", ",": ",", ":": ":", "!": "!", "'": "'", "*": "^{*}", "′": "'", "~": "\\sim" };
const GRANDES = { "Σ": "\\sum", "Π": "\\prod", "∫": "\\int", "∑": "\\sum", "∏": "\\prod", "∮": "\\oint", "∬": "\\iint", "∭": "\\iiint" };
const SUB = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9", "₊": "+", "₋": "-", "ₐ": "a", "ₑ": "e", "ₒ": "o", "ₓ": "x", "ₕ": "h", "ₖ": "k", "ₗ": "l", "ₘ": "m", "ₙ": "n", "ₚ": "p", "ₛ": "s", "ₜ": "t", "ᵢ": "i", "ⱼ": "j", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "₌": "=", "₍": "(", "₎": ")" };
const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁺": "+", "⁻": "-", "ⁿ": "n", "ⁱ": "i", "⁽": "(", "⁾": ")", "ᵐ": "m", "ʲ": "j", "ᵗ": "t", "ᵀ": "T", "ᵏ": "k", "ˣ": "x", "⁼": "=", "ᵇ": "b", "ᵃ": "a", "ᶜ": "c", "ᵈ": "d", "ᵉ": "e", "ᵖ": "p", "ʳ": "r", "ˢ": "s", "ᵘ": "u", "ᵛ": "v", "ʸ": "y", "ᶻ": "z", "ᴬ": "A", "ᴮ": "B", "ᴺ": "N" };
const FUNC = { "máx": "\\max", "max": "\\max", "mín": "\\min", "min": "\\min", "ln": "\\ln", "log": "\\log", "exp": "\\exp", "sen": "\\operatorname{sen}", "sin": "\\sin", "cos": "\\cos", "tg": "\\operatorname{tg}", "tan": "\\tan", "lim": "\\lim", "det": "\\det", "arred": "\\operatorname{arred}" };
const LETRA = /[A-Za-zÀ-ÖØ-öø-ÿºª]/;

function tokens(s) {
  const t = []; let i = 0;
  const push = (tipo, v, extra) => t.push(Object.assign({ tipo, v }, extra || {}));
  while (i < s.length) {
    const c = s[i];
    if (c === " " || c === " ") { push("esp", " "); i++; continue; }
    if (/[0-9]/.test(c)) { let j = i; while (j < s.length && /[0-9.,]/.test(s[j]) && !(/[.,]/.test(s[j]) && !/[0-9]/.test(s[j + 1] || ""))) j++; push("num", s.slice(i, j)); i = j; continue; }
    if (SUB[c]) { let j = i, v = ""; while (SUB[s[j]]) v += SUB[s[j++]];
      if (s[j] === "≠" && SUB[s[j + 1]]) { v += "\\ne "; j++; while (SUB[s[j]]) v += SUB[s[j++]]; } // Σⱼ≠ᵢ
      push("sub", v); i = j; continue; }
    if (SUP[c]) { let j = i, v = ""; while (SUP[s[j]]) v += SUP[s[j++]]; push("sup", v); i = j; continue; }
    if (c === "̿") { push("acento", "dbar"); i++; continue; }
    if (c === "$") { push("op", "$"); i++; continue; }
    if (c === "̄" || c === "̂" || c === "̇") { push("acento", c === "̄" ? "\\bar" : c === "̂" ? "\\hat" : "\\dot"); i++; continue; }
    if (c === "∂" || c === "∇") { push("id", c === "∂" ? "\\partial" : "\\nabla", { grego: true, um: true }); i++; continue; }
    if (GREGO[c]) { push("id", GREGO[c], { grego: true, um: true }); i++; continue; }
    if (GRANDES[c]) { push("grande", GRANDES[c]); i++; continue; }
    if (c === "√") { push("raiz", "\\sqrt"); i++; continue; }
    if (c === "÷") { push("div", "÷"); i++; continue; }
    if ("([{".includes(c)) { push("abre", c); i++; continue; }
    if (")]}".includes(c)) { push("fecha", c); i++; continue; }
    if (c === "|") { push("barra", "|"); i++; continue; }
    if (c === "/") { push("op", "/"); i++; continue; }
    if (c === "^") { push("pot", "^"); i++; continue; }
    if (c === "_") { push("und", "_"); i++; continue; }
    if (c === ";") { push("pv", ";"); i++; continue; }
    if (c === "ŷ") { push("id", "y", { acento: "\\hat", um: true }); i++; continue; }
    if (c === "p̂") { i++; continue; }
    if (LETRA.test(c)) { let j = i; while (j < s.length && (LETRA.test(s[j]) || (s[j] === "-" && LETRA.test(s[j + 1] || "") && LETRA.test(s[j - 1])))) j++; const w = s.slice(i, j); push("id", w, { um: w.length === 1 }); i = j; continue; }
    if (OPS[c] !== undefined) { push("op", c); i++; continue; }
    push("op", c); i++;
  }
  return t;
}
// Junta palavras separadas por espaço numa frase de texto ("custo total", "P anterior")
function frases(t) {
  const out = [];
  for (let i = 0; i < t.length; i++) {
    const x = t[i];
    const ehPal = y => y && y.tipo === "id" && !y.grego && y.v.toLowerCase() !== "lim";
    const palavra = y => ehPal(y) && y.v.length > 1 && /[a-zà-ÿ]/.test(y.v) && !(/^[A-Z]/.test(y.v) && y.v.length <= 3);
    if (ehPal(x) && !(out.length && out[out.length - 1].tipo === "und")) {
      let j = i, partes = [x.v], tem = palavra(x);
      while (t[j + 1] && t[j + 1].tipo === "esp" && ehPal(t[j + 2]) && !(t[j + 3] && t[j + 3].tipo === "sub")) { partes.push(t[j + 2].v); tem = tem || palavra(t[j + 2]); j += 2; }
      if (partes.length > 1 && tem && !(t[j + 1] && ["sub", "sup", "acento"].includes(t[j + 1].tipo))) { out.push({ tipo: "id", v: partes.join(" "), frase: true }); i = j; continue; }
    }
    out.push(x);
  }
  return out.filter(x => x.tipo !== "esp" || true);
}
function idTex(x) {
  let b;
  if (x.conj) return `\\;\\text{${x.v}}\\;`;
  if (x.frase) b = `\\text{${x.v}}`;
  else if (x.grego) b = x.v;
  else if (FUNC[x.v.toLowerCase()] && x.funcao) b = FUNC[x.v.toLowerCase()];
  else if (x.v.length === 1) b = x.v;
  else if (/^[A-Z][A-Z0-9]*$/.test(x.v) || /^[A-Z][a-z]?[A-Z]+$/.test(x.v)) b = `\\mathrm{${x.v}}`;
  else if (/^[A-Z][a-z]$/.test(x.v)) b = `\\mathrm{${x.v}}`;
  else b = `\\text{${x.v}}`;
  if (x.acento) b = `${x.acento}{${b}}`;
  return b;
}
// Parser: expressão → lista de "itens" LaTeX; trata ÷ como fração (numerador = cadeia de fatores à esquerda; denominador = próximo fator)
function converter(s) {
  let t = frases(tokens(s));
  t.forEach((x, k) => { if (x.tipo === "id" && FUNC[x.v.toLowerCase()] && t[k + 1] && t[k + 1].tipo === "abre") x.funcao = true;
    if (x.tipo === "id" && ["e", "ou", "se"].includes(x.v) && t[k - 1] && t[k - 1].tipo === "esp" && t[k + 1] && t[k + 1].tipo === "esp" && !(t[k + 2] && t[k + 2].tipo === "pot")) x.conj = true; });
  let p = 0;
  const pular = () => { while (t[p] && t[p].tipo === "esp") p++; };
  function grupo() { // depois de "abre": até o "fecha" correspondente
    const ab = t[p++].v, fe = { "(": ")", "[": "]", "{": "}" }[ab];
    const dentro = expr(fe);
    if (t[p] && t[p].tipo === "fecha") p++;
    return { tex: `\\left${ab === "{" ? "\\{" : ab}${dentro}\\right${fe === "}" ? "\\}" : fe}`, interno: dentro, par: true };
  }
  function sufixos(base) {
    let tex = base.tex, par = base.par; const tex0 = base.tex;
    for (;;) {
      if (t[p] && t[p].tipo === "acento") { tex = t[p].v === "dbar" ? `\\bar{\\bar{${tex}}}` : `${t[p].v}{${tex}}`; p++; continue; }
      if (t[p] && t[p].tipo === "sub") { tex = `{${tex}}_{${t[p].v}}`; p++; par = false; continue; }
      if (t[p] && t[p].tipo === "sup") { tex = `{${tex}}^{${t[p].v}}`; p++; par = false; continue; }
      if (t[p] && t[p].tipo === "op" && t[p].v === "*" ) { tex = `{${tex}}^{*}`; p++; continue; }
      if (t[p] && t[p].tipo === "op" && (t[p].v === "'" || t[p].v === "′")) { tex = `${tex}'`; p++; continue; }
      if (t[p] && t[p].tipo === "und" && t[p + 1] && ["id", "num"].includes(t[p + 1].tipo)) { tex = `{${tex}}_{${t[p + 1].tipo === "id" ? (t[p + 1].v.length > 1 ? `\\mathrm{${t[p + 1].v}}` : t[p + 1].v) : t[p + 1].v}}`; p += 2; continue; }
      if (t[p] && t[p].tipo === "pot") {
        p++; let e;
        if (t[p] && t[p].tipo === "abre") e = grupo().interno; else { const a = atomo(); e = a ? a.tex : ""; }
        tex = `{${tex}}^{${e}}`; par = false; continue;
      }
      break;
    }
    return tex === tex0 ? Object.assign({}, base) : { tex, par, grande: base.grande, lim: base.lim };
  }
  function atomo() {
    pular();
    const x = t[p]; if (!x) return null;
    if (x.tipo === "abre") return sufixos(grupo());
    if (x.tipo === "num") {
      p++; let tex = x.v.replace(/,/g, "{,}");
      // "2π", "2e⁻": número colado num símbolo é um único fator
      if (t[p] && t[p].tipo === "id" && (t[p].um || t[p].grego)) { const y = t[p++]; tex += idTex(y); }
      return sufixos({ tex });
    }
    if (x.tipo === "id") {
      p++;
      // Δ, ∂ e ∇ colados na variável formam um só fator ("ΔQ", "∂f")
      if (["\\Delta", "\\nabla"].includes(x.v) && t[p] && t[p].tipo === "id") { const y = t[p++]; return sufixos({ tex: `${x.v} ${idTex(y)}` }); }
      if (x.v.toLowerCase() === "lim") { pular(); if (t[p] && t[p].tipo === "abre") { const g = grupo(); return { tex: `\\lim_{${g.interno}}`, lim: true }; } return { tex: "\\lim", lim: true }; }
      if (FUNC[x.v.toLowerCase()] && t[p] && t[p].tipo === "abre") { const g = grupo(); return sufixos({ tex: `${FUNC[x.v.toLowerCase()]}${g.tex}` }); }
      const base = sufixos({ tex: idTex(x) });
      if (t[p] && t[p].tipo === "abre" && t[p].v === "(" && (x.um || /^[A-Z]/.test(x.v)) && !x.frase && !x.conj) { const g = grupo(); return sufixos({ tex: `${base.tex}${g.tex}` }); }
      return base;
    }
    if (x.tipo === "raiz") { p++; pular(); const a = atomo(); return { tex: `\\sqrt{${a ? (a.par ? a.interno || a.tex : a.tex) : ""}}` }; }
    if (x.tipo === "grande") {
      p++; const op = sufixos({ tex: x.v });
      const nx = t[p];
      if (nx && ["id", "num", "abre", "barra", "raiz", "grande"].includes(nx.tipo)) { const a = atomo(); if (a) return { tex: `${op.tex} ${a.tex}`, grande: true }; }
      return { tex: op.tex, grande: true };
    }
    if (x.tipo === "barra") {
      let k = p + 1, prof = 0, fecha = false;
      for (; k < t.length; k++) { if (t[k].tipo === "abre") prof++; else if (t[k].tipo === "fecha") { if (prof-- === 0) break; } else if (t[k].tipo === "barra" && prof === 0) { fecha = true; break; } }
      p++;
      if (!fecha) return { tex: "\\mid" };
      const dentro = expr("|"); if (t[p] && t[p].tipo === "barra") p++; return sufixos({ tex: `\\left|${dentro}\\right|` });
    }
    return null;
  }
  // termo multiplicativo: fatores ligados por · × ou justaposição; ÷ vira fração
  function termo(fim) {
    let partes = [];
    for (;;) {
      const tinhaEsp = t[p] && t[p].tipo === "esp";
      pular();
      const x = t[p];
      if (!x || (x.tipo === "fecha") || (fim === "|" && x.tipo === "barra")) break;
      if (x.tipo === "op" && ["·", "×"].includes(x.v)) { partes.push({ op: OPS[x.v] }); p++; continue; }
      if (x.tipo === "op" && x.v === "/") { partes.push({ op: "/" }); p++; continue; }
      if (x.tipo === "div") {
        p++;
        // numerador: fatores desde o último "+, −, =" (já em partes)
        let fora = [];
        while (partes.length > 1 && partes[0].lim) fora.push(partes.shift());
        const num = partes.map(q => q.op ? ` ${q.op} ` : q.tex).join(" ").replace(/\s+/g, " ").trim();
        let den = atomo(); if (!den) break;
        const limpa = a => a.par && a.interno !== undefined ? a.interno : a.tex;
        const numTex = partes.length === 1 && partes[0].par && partes[0].interno !== undefined ? partes[0].interno : num;
        partes = fora.concat([{ tex: `\\dfrac{${numTex}}{${limpa(den)}}` }]);
        continue;
      }
      if (x.tipo === "op" || x.tipo === "pv" || x.tipo === "div") break;
      const a = atomo(); if (!a) { break; }
      const ant = partes[partes.length - 1];
      if (tinhaEsp && ant && !ant.op) {
        const textual = q => /\\text|\\mathrm|^[0-9{},]+$/.test(q.tex) || /\\operatorname/.test(q.tex);
        partes.push({ tex: textual(ant) || textual(a) ? "\\ " : "\\," });
      }
      partes.push(a);
    }
    return partes.map(q => q.op ? ` ${q.op} ` : q.tex).join(" ").replace(/\s+/g, " ").trim();
  }
  function expr(fim) {
    let out = [];
    for (;;) {
      pular();
      const x = t[p];
      if (!x) break;
      if (x.tipo === "fecha" && fim !== "|") break;
      if (fim === "|" && x.tipo === "barra") break;
      if (x.tipo === "pv") { out.push(";\\;"); p++; continue; }
      if (x.tipo === "op" && !["·", "×", "/"].includes(x.v)) { out.push(` ${OPS[x.v] !== undefined ? OPS[x.v] : x.v} `); p++; continue; }
      const antes = p;
      const tt = termo(fim);
      if (p === antes) { // não andou: token inesperado
        out.push(x.v === undefined ? "" : String(x.v)); p++; continue;
      }
      out.push(tt);
    }
    return out.join(" ").replace(/\s+/g, " ").trim();
  }
  return expr(null);
}
// Frase que não é fórmula (texto corrido sem "=")
const ehCodigo = s => /\bJOIN\b|\bSELECT\b|\bWHERE\b|\bdef\b|\breturn\b|\bfor\b.*\bin\b|\+=|"|^=|=[A-Z]{2,}\(|\bprint\(|\bimport\b|^[a-z_]+ = [\[{]/.test(s);
const ehTexto = s => ehCodigo(s) || !/[=≈≤≥<>⇒→∝÷×·√Σ∫^²³⁻₀-₉]/.test(s) || !/[=≈≤≥<>⇒→∝]/.test(s) && s.split(/\s+/).filter(w => /^[a-zà-ÿ]{3,}$/i.test(w)).length >= 3;

function gerar() {
  const todas = coletar();
  const manual = fs.existsSync(path.join(CONT, "formulas-tex-manual.js")) ? (() => { const c = {}; c.window = c; vm.runInNewContext(fs.readFileSync(path.join(CONT, "formulas-tex-manual.js"), "utf8"), c); return c.FORMULAS_TEX_MANUAL || {}; })() : {};
  const mapa = {}, falhas = [], texto = [];
  for (const f of todas) {
    if (manual[f] !== undefined) { if (manual[f]) mapa[f] = manual[f]; else texto.push(f); continue; }
    if (ehTexto(f)) { texto.push(f); continue; }
    let tex;
    try { tex = converter(f); katex.renderToString(tex, { throwOnError: true, displayMode: true, strict: "ignore" }); mapa[f] = tex; }
    catch (e) { falhas.push([f, tex, e.message.slice(0, 80)]); }
  }
  const js = "/* Gerado por scripts/formulas-tex.js — fórmula em texto → LaTeX (KaTeX). Correções: formulas-tex-manual.js */\nwindow.FORMULAS_TEX = " + JSON.stringify(mapa) + ";\n";
  fs.writeFileSync(path.join(CONT, "formulas-tex.js"), js);
  // relatório visual para revisão
  const dir = path.join(RAIZ, "dist-relatorio"); fs.mkdirSync(dir, { recursive: true });
  const kcss = fs.readFileSync(path.join(RAIZ, "node_modules/katex/dist/katex.min.css"), "utf8").replace(/url\(fonts\//g, "url(../node_modules/katex/dist/fonts/");
  fs.writeFileSync(path.join(dir, "formulas.html"), `<!doctype html><meta charset=utf-8><style>${kcss} body{font:14px system-ui;margin:20px} tr:nth-child(odd){background:#f5f5f5} td{padding:6px 10px;vertical-align:middle} td:first-child{font-family:monospace;width:40%}</style><table>` +
    Object.entries(mapa).map(([f, t]) => `<tr><td>${f.replace(/</g, "&lt;")}</td><td>${katex.renderToString(t, { displayMode: false, throwOnError: false, strict: "ignore" })}</td></tr>`).join("") + "</table>");
  console.log(`fórmulas: ${todas.length} · em LaTeX: ${Object.keys(mapa).length} · texto (não é fórmula): ${texto.length} · falhas: ${falhas.length}`);
  if (falhas.length) console.log(falhas.slice(0, 30).map(x => " ✗ " + x.join(" | ")).join("\n"));
  if (process.argv.includes("--listar-texto")) console.log(texto.join("\n"));
  return { falhas, texto };
}
if (require.main === module) { const r = gerar(); if (process.argv.includes("--checar") && r.falhas.length) process.exit(1); }
module.exports = { converter, gerar };
