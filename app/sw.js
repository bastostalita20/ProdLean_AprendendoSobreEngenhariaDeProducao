/* =====================================================================
   SERVICE WORKER — faz o app funcionar OFFLINE.
   - "Núcleo" (app + catálogo + problemas/desafios/siglas + busca): guardado na instalação,
     num cache com a VERSAO (trocado a cada atualização).
   - Conteúdo dos módulos (conteudo/modulo-*.js, conteudo/grade/*, banco): guardado aos poucos,
     conforme o aluno abre cada assunto, num cache que NÃO é apagado nas atualizações
     (assim o que já foi baixado continua offline). "Baixar tudo para offline", em
     Configurações, baixa o resto de uma vez.
   Estratégia "stale-while-revalidate": responde com o que está salvo e atualiza por trás.
   Ao mudar o código do app, aumente o número da VERSAO (o build acrescenta uma impressão digital).
   ===================================================================== */
const VERSAO = "engprod-v20";
const CACHE_CONTEUDO = "engprod-conteudo";
importScripts("conteudo/indice.js");
const NUCLEO = [
  "./", "./index.html", "./manifest.json", "./icone.svg", "./icone-192.png", "./icone-512.png",
  "./conteudo/indice.js", "./parametros.js", "./conteudo/formulas-tex.js",
  "./vendor/katex/katex.min.js", "./vendor/katex/katex.min.css",
  "./vendor/fontes/inter-latin-400-normal.woff2", "./vendor/fontes/inter-latin-600-normal.woff2", "./vendor/fontes/jetbrains-mono-latin-400-normal.woff2"
].concat((self.ARQUIVOS_INICIAIS || self.ARQUIVOS_MODULOS || []).concat(self.ARQUIVO_BUSCA || []).map(arq => "./conteudo/" + arq));
const ehModulo = url => /\/conteudo\/(modulo-|grade\/|banco-questoes)/.test(url);

self.addEventListener("install", evento => {
  evento.waitUntil(caches.open(VERSAO).then(c => c.addAll(NUCLEO)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", evento => {
  // apaga os núcleos de versões antigas (o cache de conteúdo fica)
  evento.waitUntil(
    caches.keys().then(chaves => Promise.all(chaves.filter(k => k !== VERSAO && k !== CACHE_CONTEUDO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", evento => {
  const req = evento.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (ehModulo(req.url)) return evento.respondWith(conteudo(req));
  const nome = VERSAO;
  evento.respondWith(
    caches.open(nome).then(async cache => {
      const salvo = await cache.match(req, { ignoreSearch: true });
      const daRede = fetch(req).then(resp => {
        if (resp && resp.ok) cache.put(req, resp.clone());
        return resp;
      }).catch(() => salvo || Response.error());
      return salvo || daRede;
    })
  );
});

// Módulos: o endereço traz a impressão digital do arquivo (?v=…). Se já está guardado, responde do cache;
// senão baixa, guarda e apaga as versões antigas do mesmo arquivo. Offline e sem a versão exata: usa a que houver.
async function conteudo(req) {
  const cache = await caches.open(CACHE_CONTEUDO);
  const exato = await cache.match(req);
  if (exato) return exato;
  try {
    const resp = await fetch(req);
    if (resp && resp.ok) {
      const caminho = new URL(req.url).pathname;
      const velhos = (await cache.keys()).filter(k => new URL(k.url).pathname === caminho);
      await Promise.all(velhos.map(k => cache.delete(k)));
      await cache.put(req, resp.clone());
    }
    return resp;
  } catch (e) {
    return (await cache.match(req, { ignoreSearch: true })) || Response.error();
  }
}
