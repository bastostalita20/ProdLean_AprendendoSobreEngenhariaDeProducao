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
  "banco-questoes.js"   // questões extras e com números sorteados (sempre por último)
];
