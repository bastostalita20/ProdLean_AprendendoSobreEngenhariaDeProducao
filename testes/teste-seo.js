/* Confere as páginas públicas geradas pelo build (dist/): title, description, canonical,
   H1 único, dados estruturados válidos, imagem de prévia, links internos e sitemap.
   Uso: node scripts/build.js && node testes/teste-seo.js */
const fs = require('fs'), path = require('path');
const DIST = path.resolve(__dirname, '../dist'), erros = [];
const paginas = [];
const andar = d => fs.readdirSync(d, { withFileTypes: true }).forEach(e => { const p = path.join(d, e.name); if (e.isDirectory()) andar(p); else if (e.name === 'index.html' && d !== DIST && !paginas.includes(p)) paginas.push(p); });
['ferramentas', 'problemas', 'disciplinas', 'glossario', 'professores'].forEach(s => andar(path.join(DIST, s)));
const existe = href => { const u = href.split('#')[0].split('?')[0]; if (!u || u === '/') return true; const f = path.join(DIST, u, u.endsWith('/') ? 'index.html' : ''); return fs.existsSync(f); };
const titulos = new Set();
for (const f of paginas) {
  const h = fs.readFileSync(f, 'utf8'), rel = '/' + path.relative(DIST, path.dirname(f)) + '/';
  const e = m => erros.push(`${rel}: ${m}`);
  const t = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  if (!t || t.length < 15) e('sem title'); else if (titulos.has(t)) e('title repetido'); else titulos.add(t);
  const d = (h.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!d || d.length < 50 || d.length > 170) e(`description com ${d ? d.length : 0} caracteres`);
  if (!h.includes(`<link rel="canonical" href="`) || !h.includes(rel + '">')) e('canonical');
  if ((h.match(/<h1>/g) || []).length !== 1) e('precisa de exatamente 1 H1');
  const og = (h.match(/<meta property="og:image" content="[^"]*?(\/og\/[^"]+)"/) || [])[1];
  if (!og || !fs.existsSync(path.join(DIST, og))) e('imagem de prévia ausente');
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch (x) { e('JSON-LD inválido'); } }
  for (const m of h.matchAll(/href="(\/[^"#]*)(#[^"]*)?"/g)) if (!m[1].startsWith('/#') && !existe(m[1])) e('link quebrado ' + m[1]);
  if (/GPRO-|CEFET|Cefet|cefet/.test(h)) e('menção à instituição ou código de disciplina');
}
const sm = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
const nSm = (sm.match(/<loc>/g) || []).length;
if (nSm !== paginas.length + 1) erros.push(`sitemap com ${nSm} endereços para ${paginas.length + 1} páginas`);
if (!fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8').includes('Sitemap:')) erros.push('robots.txt sem sitemap');
const app = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!app.includes('rel="canonical"') || !app.includes('og:image') || !app.includes('application/ld+json')) erros.push('index.html do app sem canonical/og/ld+json');
console.log(`${paginas.length} páginas públicas, ${nSm} no sitemap`);
if (erros.length) { console.log('❌ ' + erros.length + ' problema(s):\n' + erros.slice(0, 40).join('\n')); process.exit(1); } else console.log('✓ páginas públicas OK');
