/* =====================================================================
   SERVICE WORKER — faz o app funcionar OFFLINE depois do 1º acesso.
   Estratégia "stale-while-revalidate": responde com o que está salvo
   (rápido e offline) e, se houver internet, atualiza o cache por trás.
   Ao mudar o código do app, aumente o número da VERSAO abaixo.
   ===================================================================== */
const VERSAO = "engprod-v18";
// Lê a lista de módulos (conteudo/indice.js) para já guardar todos no 1º acesso.
// Quando você edita o indice.js, o navegador percebe e atualiza o cache sozinho.
importScripts("conteudo/indice.js");
const ARQUIVOS_BASE = [
  "./", "./index.html", "./manifest.json", "./icone.svg", "./icone-192.png", "./icone-512.png",
  "./conteudo/indice.js", "./parametros.js"
].concat((self.ARQUIVOS_MODULOS || []).map(arq => "./conteudo/" + arq));

self.addEventListener("install", evento => {
  evento.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS_BASE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", evento => {
  // apaga caches de versões antigas
  evento.waitUntil(
    caches.keys().then(chaves => Promise.all(chaves.filter(k => k !== VERSAO).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", evento => {
  const req = evento.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  evento.respondWith(
    caches.open(VERSAO).then(async cache => {
      const salvo = await cache.match(req, { ignoreSearch: true });
      const daRede = fetch(req).then(resp => {
        if (resp && resp.ok) cache.put(req, resp.clone()); // guarda também os módulos novos
        return resp;
      }).catch(() => salvo);
      return salvo || daRede;
    })
  );
});
