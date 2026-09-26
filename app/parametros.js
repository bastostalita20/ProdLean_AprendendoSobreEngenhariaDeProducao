/* =====================================================================
   QUESTÕES COM NÚMEROS SORTEADOS ("paramétricas")
   ---------------------------------------------------------------------
   Uma questão vira "modelo" quando tem o campo "variaveis". A cada vez
   que aparece, os números são sorteados de novo e a resposta é calculada
   pela fórmula. Assim o aluno precisa refazer a conta, não decorar.

   Campos:
     variaveis: { nome: { min, max, passo } | { valores: [..] } | { lista: 5, min, max, passo } }
     calc:      { nome: "expressão" }         (valores derivados, em ordem)
     condicao:  "expressão verdadeira"        (sorteia de novo se falhar)
     resposta:  "expressão"                   (a resposta numérica)
   Nos textos: {nome} mostra um valor; {nome:2} com 2 casas; {=expressão:1} calcula.
   Nas expressões valem as funções de Math (sqrt, pow, ceil, floor, round,
   log, abs, min, max…) e: Phi(z) (normal padrão acumulada), soma(lista),
   media(lista), mediana(lista), desvio(lista) (amostral), arred(x, casas).
   ===================================================================== */
(function (raiz) {
  // Normal padrão acumulada (aproximação de Abramowitz e Stegun 26.2.17; erro < 1e-7)
  function Phi(z) {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989422804014327 * Math.exp(-z * z / 2);
    const p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
    return z >= 0 ? 1 - p : p;
  }
  const soma = a => a.reduce((s, x) => s + x, 0);
  const media = a => soma(a) / a.length;
  const AUX = {
    Phi, soma, media,
    mediana: a => { const b = a.slice().sort((x, y) => x - y), n = b.length; return n % 2 ? b[(n - 1) / 2] : (b[n / 2 - 1] + b[n / 2]) / 2; },
    desvio: a => { const m = media(a); return Math.sqrt(a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1)); },
    arred: (x, c = 2) => Math.round(x * 10 ** c) / 10 ** c,
    // floor/ceil tolerantes a erros mínimos de ponto flutuante (ex.: 450 ÷ 1,8 = 249,99999…)
    floor: x => Math.floor(x + 1e-9),
    ceil: x => Math.ceil(x - 1e-9),
    ordenar: a => a.slice().sort((x, y) => x - y)
  };

  function avaliar(expr, vars) {
    const nomes = Object.keys(vars);
    // "with" deixa as fórmulas curtas (sqrt em vez de Math.sqrt); o conteúdo é do próprio app
    const f = new Function("AUX", ...nomes, "with (Math) { with (AUX) { return (" + expr + "); } }");
    return f(AUX, ...nomes.map(n => vars[n]));
  }
  function sortearNumero(spec, rnd) {
    if (spec.valores) return spec.valores[Math.floor(rnd() * spec.valores.length)];
    const passo = spec.passo || 1;
    const n = Math.round((spec.max - spec.min) / passo);
    return +(spec.min + Math.floor(rnd() * (n + 1)) * passo).toFixed(6);
  }
  function sortear(spec, rnd) {
    if (spec.lista) return Array.from({ length: spec.lista }, () => sortearNumero(spec, rnd));
    return sortearNumero(spec, rnd);
  }
  function formatar(v, casas) {
    if (Array.isArray(v)) return v.map(x => formatar(x, casas)).join(" · ");
    if (typeof v !== "number") return String(v);
    return v.toLocaleString("pt-BR", { maximumFractionDigits: casas === undefined ? 2 : casas, minimumFractionDigits: 0 });
  }
  // Troca {nome}, {nome:2}, {=expr} e {=expr:1} pelos valores
  function preencher(texto, vars) {
    return String(texto == null ? "" : texto).replace(/\{(=?)([^{}]+?)(?::(\d))?\}/g, (m, calcula, corpo, casas) => {
      let v;
      if (calcula) v = avaliar(corpo, vars);
      else if (Object.prototype.hasOwnProperty.call(vars, corpo)) v = vars[corpo];
      else return m;
      return formatar(v, casas === undefined ? undefined : +casas);
    });
  }
  function instanciar(q, rnd) {
    if (!q || !q.variaveis) return q;
    rnd = rnd || Math.random;
    for (let tentativa = 0; tentativa < 50; tentativa++) {
      const vars = {};
      Object.entries(q.variaveis).forEach(([k, spec]) => { vars[k] = sortear(spec, rnd); });
      Object.entries(q.calc || {}).forEach(([k, expr]) => { vars[k] = avaliar(expr, vars); });
      if (q.condicao && !avaliar(q.condicao, vars)) continue;
      const inst = Object.assign({}, q, {
        pergunta: preencher(q.pergunta, vars),
        resolucao: preencher(q.resolucao, vars),
        explicacao: preencher(q.explicacao, vars),
        resposta: avaliar(String(q.resposta), vars),
        valores: vars,
        parametrica: true
      });
      if (q.opcoes) inst.opcoes = q.opcoes.map(o => preencher(o, vars));
      return inst;
    }
    throw new Error(q.id + ": não consegui sortear valores que atendam à condição");
  }
  // Usado pelo verificador de conteúdo: sorteia várias vezes e procura problemas
  function validar(q, vezes) {
    const problemas = [];
    // Nomes de variáveis não podem coincidir com funções de Math ou auxiliares (seriam “escondidos”)
    Object.keys(q.variaveis || {}).concat(Object.keys(q.calc || {})).forEach(n => {
      if (n in Math || n in AUX) problemas.push(`o nome de variável "${n}" coincide com uma função; troque o nome`);
    });
    if (problemas.length) return problemas;
    for (let i = 0; i < (vezes || 25); i++) {
      try {
        const inst = instanciar(q);
        if (typeof inst.resposta !== "number" || !isFinite(inst.resposta)) { problemas.push("resposta não numérica"); break; }
        if (/\{[^}]*\}/.test(inst.pergunta + inst.resolucao)) { problemas.push("marcador {…} não preenchido"); break; }
      } catch (e) { problemas.push(e.message); break; }
    }
    return problemas;
  }
  raiz.Parametros = { instanciar, validar, avaliar, preencher, Phi };
})(typeof self !== "undefined" ? self : globalThis);
