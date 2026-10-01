/* =====================================================================
   ÍNDICE DE CONTEÚDO
   ---------------------------------------------------------------------
   Para adicionar um módulo novo:
   1) Crie um arquivo nesta pasta (ex.: "modulo-13.js") seguindo o modelo
      de "modulo-01.js".
   2) Acrescente o nome do arquivo na lista abaixo (entre aspas, com vírgula).
   Pronto! O app carrega os arquivos nessa ordem e monta a trilha usando
   o campo "ordem" de cada módulo.
   ===================================================================== */
// Carregamento sob demanda: o app abre só com estes arquivos (o catálogo é gerado por
// "node scripts/build.js --catalogo") e baixa o texto de cada módulo quando ele é aberto.
self.ARQUIVOS_INICIAIS = ["catalogo.js", "problemas.js", "desafios.js", "siglas.js"];
self.ARQUIVO_BUSCA = "catalogo-busca.js"; // glossário, flashcards e fórmulas (logo depois da 1ª tela)
self.ARQUIVOS_MODULOS = [ // "self" funciona no app e no modo offline (service worker)
  "modulo-01.js",
  "modulo-13.js",
  "modulo-02.js",
  "modulo-04.js",
  "modulo-03.js",
  "modulo-06.js",
  "modulo-14.js",
  "grade/p01.js", "grade/p02.js", "grade/p03.js", "grade/p04.js", "grade/p05.js",
  "grade/p06.js", "grade/p07.js", "grade/p08.js", "grade/p09.js",   // disciplinas da grade (por período)
  "problemas.js",       // 🚨 problemas → ferramentas → conteúdo (e Modo Estágio)
  "desafios.js",        // ⚡ desafio do dia
  "siglas.js",          // 🔤 significado das siglas, mostrado entre parênteses
  "banco-questoes.js"   // questões extras e com números sorteados (sempre por último)
];
