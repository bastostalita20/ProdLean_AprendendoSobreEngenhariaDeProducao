/* =====================================================================
   BANCO DE QUESTÕES EXTRA
   ---------------------------------------------------------------------
   Questões que entram nas lições já existentes (campo "licao").
   A cada vez que o aluno faz a lição, o app SORTEIA parte das questões
   do banco (⚙️ Configurações → Questões por lição), então as repetições
   não são iguais.
   Questões com "variaveis" são MODELOS: os números mudam a cada vez
   (veja o cabeçalho de parametros.js para a sintaxe).
   Para acrescentar questões: copie um item, troque o "id" (único) e a
   "licao". Este arquivo deve ser o último da lista em indice.js.
   ===================================================================== */
(function () {
  const add = (licao, lista) => lista.forEach(q => (window.BANCO = window.BANCO || []).push(Object.assign({ licao }, q)));

  /* ================= MÓDULO 1 — FUNDAMENTOS ================= */
  add("m01-l1", [
    { id: "m01-b01", tipo: "multipla", pergunta: "Qual destas vagas é típica para um engenheiro de produção recém-formado?",
      opcoes: ["Analista de PCP", "Médico do trabalho", "Advogado trabalhista", "Arquiteto de interiores"], correta: 0,
      explicacao: "Também aparecem: analista de processos, melhoria contínua, qualidade, supply chain e trainee." },
    { id: "m01-b02", tipo: "vf", pergunta: "A ART (Anotação de Responsabilidade Técnica) é exigida para assinar projetos técnicos de engenharia.",
      correta: true, explicacao: "É registrada no CREA e identifica o responsável técnico pelo serviço." },
    { id: "m01-b03", tipo: "caso", contexto: "Você resolveu um problema de atraso na expedição do seu estágio e quer registrar isso no seu portfólio.",
      pergunta: "Qual registro é mais forte para uma entrevista?",
      opcoes: ["“Ajudei na expedição”", "“Mapeei o fluxo, apliquei 5 Porquês e reduzi o atraso médio de 2 dias para 6 horas”", "“Participei de reuniões”", "“Aprendi muito”"], correta: 1,
      explicacao: "Problema → ferramenta → resultado em número." }
  ]);
  add("m01-l2", [
    { id: "m01-b04", tipo: "multipla", pergunta: "O que a linha de montagem móvel de Ford (1913) permitiu principalmente?",
      opcoes: ["Produção em massa a custo muito menor", "Personalização total de cada carro", "O fim da divisão do trabalho", "A eliminação de todos os estoques"], correta: 0,
      explicacao: "Alto volume, pouca variedade e custo unitário baixo." },
    { id: "m01-b05", tipo: "lacuna", pergunta: "O controle estatístico de processo nasceu dos trabalhos de ___ nos anos 1920 e 1930.",
      opcoes: ["Shewhart", "Ford", "Gantt", "Adam Smith"], correta: 0,
      explicacao: "Walter Shewhart criou as cartas de controle (Módulo 5)." },
    { id: "m01-b06", tipo: "vf", pergunta: "Adam Smith descreveu a divisão do trabalho com o exemplo de uma fábrica de alfinetes.",
      correta: true, explicacao: "Em *A Riqueza das Nações* (1776)." }
  ]);
  add("m01-l3", [
    { id: "m01-b07", tipo: "ligar", pergunta: "Ligue a atividade à área da ABEPRO:",
      pares: [["Previsão de demanda e sequenciamento", "Operações"], ["Análise de investimento", "Econômica"], ["Desenvolvimento de novo produto", "Produto"], ["Gestão ambiental e eficiência energética", "Sustentabilidade"]],
      explicacao: "Cada problema real costuma envolver várias áreas, mas tem uma área principal." },
    { id: "m01-b08", tipo: "multipla", pergunta: "A análise ergonômica de um posto de trabalho pertence principalmente a qual área?",
      opcoes: ["Engenharia do Trabalho", "Logística", "Engenharia Econômica", "Engenharia do Produto"], correta: 0,
      explicacao: "Ergonomia, segurança e organização do trabalho." },
    { id: "m01-b09", tipo: "caso", contexto: "Um vazamento de óleo das prensas contamina o piso e escorre para o solo do pátio.",
      pergunta: "Qual área da ABEPRO está mais diretamente envolvida?",
      opcoes: ["Engenharia da Sustentabilidade", "Engenharia Econômica", "Engenharia do Produto", "Educação em Engenharia de Produção"], correta: 0,
      explicacao: "Gestão ambiental. Também há risco de segurança (Trabalho) e custo (Econômica)." }
  ]);
  add("m01-l4", [
    { id: "m01-b10", tipo: "multipla", pergunta: "Num salão de beleza, qual é a principal entrada transformada?",
      opcoes: ["O próprio cliente", "A tesoura", "O cabeleireiro", "A cadeira"], correta: 0,
      explicacao: "Tesoura, cadeira e cabeleireiro são recursos transformadores." },
    { id: "m01-b11", tipo: "vf", pergunta: "Serviços costumam ter alto contato com o cliente durante a produção.",
      correta: true, explicacao: "Produção e consumo acontecem ao mesmo tempo." },
    { id: "m01-b12", tipo: "caso", contexto: "Uma companhia aérea não consegue estocar os assentos vazios do voo de hoje.",
      pergunta: "Qual a principal implicação para a gestão da operação?",
      opcoes: ["Nenhuma", "Precisa ajustar capacidade e demanda (preços por horário, overbooking controlado)", "Deve produzir assentos em lotes maiores", "Deve estocar passageiros"], correta: 1,
      explicacao: "Capacidade não usada em serviços se perde: equilibrar oferta e demanda é central." }
  ]);
  add("m01-l5", [
    { id: "m01-b13", tipo: "multipla", pergunta: "Uma gráfica que imprime pequenas tiragens personalizadas para muitos clientes, compartilhando as mesmas máquinas, está mais próxima de qual tipo de processo?",
      opcoes: ["Jobbing", "Contínuo", "Massa", "Projeto"], correta: 0,
      explicacao: "Baixo volume, alta variedade, recursos compartilhados." },
    { id: "m01-b14", tipo: "ligar", pergunta: "Ligue o serviço ao tipo de processo:",
      pares: [["Consultoria jurídica", "Serviço profissional"], ["Agência bancária", "Loja de serviços"], ["Metrô", "Serviço de massa"]],
      explicacao: "“O Padre Leva a Missa”." },
    { id: "m01-b15", tipo: "vf", pergunta: "Quanto maior o volume de produção, maior costuma ser a variedade de produtos.",
      correta: false, explicacao: "É o contrário: volume alto costuma vir com variedade baixa." }
  ]);
  add("m01-l6", [
    { id: "m01-b16", tipo: "ligar", pergunta: "Ligue a promessa ao objetivo de desempenho:",
      pares: [["Entregar em 24 horas", "Rapidez"], ["Chegar exatamente no dia combinado", "Confiabilidade"], ["Fazer sob medida para cada cliente", "Flexibilidade"], ["Zero defeito", "Qualidade"]],
      explicacao: "“Qual Rato Come Farinha Cara?”" },
    { id: "m01-b17", tipo: "multipla", pergunta: "Escolher o local de uma nova fábrica é uma decisão:",
      opcoes: ["Estratégica", "Tática", "Operacional", "Rotineira"], correta: 0,
      explicacao: "Longo prazo e difícil de reverter." },
    { id: "m01-b18", tipo: "vf", pergunta: "Decisões operacionais costumam ter horizonte de dias ou horas.",
      correta: true, explicacao: "Ex.: sequência das ordens de amanhã." }
  ]);
  add("m01-l7", [
    { id: "m01-t01", tipo: "calculo",
      variaveis: { op: { min: 6, max: 15 }, p1: { min: 600, max: 1500, passo: 50 }, g: { min: 5, max: 30 } },
      calc: { p2: "round(p1*(1+g/100))", a: "p1/op", b: "p2/op" },
      resposta: "(b-a)/a*100", tolerancia: 0.15, unidade: "%",
      pergunta: "Uma linha fazia {p1} peças por turno com {op} operadores. Após uma melhoria, passou a {p2} peças com os mesmos {op} operadores. Qual a variação de produtividade (%)? (1 casa decimal)",
      resolucao: "Antes: {p1} ÷ {op} = {a:2} peças/operador\nDepois: {p2} ÷ {op} = {b:2} peças/operador\nVariação = ({b:2} − {a:2}) ÷ {a:2} × 100 ≈ {=(b-a)/a*100:1}%",
      explicacao: "Mesmas pessoas produzindo mais = produtividade da mão de obra maior." },
    { id: "m01-t02", tipo: "calculo",
      variaveis: { saidas: { min: 300, max: 1500, passo: 30 }, horas: { min: 4, max: 12 } },
      resposta: "saidas/horas", tolerancia: 0.05, unidade: "un/h·h",
      pergunta: "Uma equipe produziu {saidas} unidades usando {horas} horas-homem. Qual a produtividade parcial (unidades por hora-homem)? (2 casas)",
      resolucao: "Produtividade = saídas ÷ entradas = {saidas} ÷ {horas} ≈ {=saidas/horas:2}",
      explicacao: "Parcial porque considera só a mão de obra." },
    { id: "m01-t03", tipo: "calculo",
      variaveis: { p1: { min: 1000, max: 2000, passo: 100 }, h1: { min: 1500, max: 3000, passo: 100 }, ap: { min: 10, max: 50, passo: 5 }, ah: { min: 15, max: 70, passo: 5 } },
      condicao: "ah != ap",
      calc: { p2: "p1*(1+ap/100)", h2: "h1*(1+ah/100)", a: "p1/h1", b: "p2/h2" },
      resposta: "(b/a-1)*100", tolerancia: 0.2, unidade: "%",
      pergunta: "A produção passou de {p1} para {p2} unidades e as horas trabalhadas de {h1} para {h2}. Qual a variação da produtividade da mão de obra (%)? (use sinal negativo se caiu; 1 casa)",
      resolucao: "Antes: {p1} ÷ {h1} = {a:4} un/h\nDepois: {p2} ÷ {h2} = {b:4} un/h\nVariação = ({b:4} ÷ {a:4} − 1) × 100 ≈ {=(b/a-1)*100:1}%",
      explicacao: "Produzir mais não é o mesmo que ser mais produtivo: compare saídas e entradas." }
  ]);
  add("m01-l8", [
    { id: "m01-b19", tipo: "caso", contexto: "Na Doces Serra, a produtividade é medida em peças produzidas por hora, incluindo as que vão para o refugo.",
      pergunta: "Qual o risco desse indicador?",
      opcoes: ["Nenhum", "Premia produzir rápido mesmo gerando refugo; o certo é medir peças boas", "Mede demais a qualidade", "Só funciona em serviços"], correta: 1,
      explicacao: "O indicador precisa refletir o que o cliente recebe: peças boas." },
    { id: "m01-b20", tipo: "multipla", pergunta: "Ao chegar na Doces Serra para entender os atrasos, qual dado você pediria primeiro?",
      opcoes: ["% de entregas no prazo e lead time por pedido", "A cor preferida da diretoria", "O número de vagas do estacionamento", "O preço das ações da concorrente"], correta: 0,
      explicacao: "Comece pelo indicador que descreve o problema." }
  ]);
  add("m01-l9", [
    { id: "m01-t04", tipo: "calculo",
      variaveis: { padrao: { min: 600, max: 2000, passo: 50 }, pct: { min: 75, max: 110 } },
      calc: { real: "round(padrao*pct/100)" },
      resposta: "real/padrao*100", tolerancia: 0.1, unidade: "%",
      pergunta: "O padrão da linha é {padrao} peças por turno. Hoje ela produziu {real}. Qual a eficiência operacional (%)? (1 casa)",
      resolucao: "Eficiência = {real} ÷ {padrao} × 100 ≈ {=real/padrao*100:1}%",
      explicacao: "Compara o realizado com o padrão para os mesmos recursos." },
    { id: "m01-b21", tipo: "vf", pergunta: "Eficácia sem eficiência significa atingir a meta gastando recursos demais.",
      correta: true, explicacao: "Acertou o alvo, mas gastou flechas demais." }
  ]);

  /* ================= MÓDULO 13 — ESTATÍSTICA ================= */
  add("m13-l1", [
    { id: "m13-b01", tipo: "multipla", pergunta: "O que caracteriza uma amostra aleatória simples?",
      opcoes: ["Escolher as peças mais fáceis de pegar", "Cada elemento da população tem a mesma chance de ser escolhido", "Medir apenas o primeiro lote do dia", "Escolher as peças que parecem defeituosas"], correta: 1,
      explicacao: "A aleatoriedade protege contra vieses de seleção." },
    { id: "m13-b02", tipo: "vf", pergunta: "A letra grega σ representa o desvio-padrão da população.",
      correta: true, explicacao: "Na amostra, usa-se s." },
    { id: "m13-b03", tipo: "ligar", pergunta: "Classifique a variável:",
      pares: [["Tempo de espera do cliente", "Quantitativa contínua"], ["Número de reclamações por semana", "Quantitativa discreta"], ["Turno (manhã, tarde, noite)", "Qualitativa nominal"], ["Grau de risco (baixo, médio, alto)", "Qualitativa ordinal"]],
      explicacao: "Discreta se conta, contínua se mede; ordinal tem ordem." }
  ]);
  add("m13-l2", [
    { id: "m13-b04", tipo: "multipla", pergunta: "Para acompanhar o refugo diário ao longo de 3 meses, o melhor gráfico é:",
      opcoes: ["Linha", "Pizza", "Radar", "Pictograma"], correta: 0,
      explicacao: "Evolução no tempo → linha." },
    { id: "m13-b05", tipo: "vf", pergunta: "Um gráfico de pizza com 12 fatias é a melhor escolha para comparar 12 fornecedores.",
      correta: false, explicacao: "Use barras ordenadas: ninguém compara 12 ângulos." }
  ]);
  add("m13-l3", [
    { id: "m13-t01", tipo: "calculo",
      variaveis: { x: { lista: 5, min: 10, max: 60 } },
      resposta: "media(x)", tolerancia: 0.01, unidade: "min",
      pergunta: "Tempos de setup (min): {x}. Qual a média? (2 casas)",
      resolucao: "Soma = {=soma(x)}\nMédia = {=soma(x)} ÷ 5 = {=media(x):2} min",
      explicacao: "Média = soma ÷ quantidade." },
    { id: "m13-t02", tipo: "calculo",
      variaveis: { x: { lista: 6, min: 10, max: 80 } },
      resposta: "mediana(x)", tolerancia: 0.01, unidade: "min",
      pergunta: "Tempos de atendimento (min): {x}. Qual a mediana?",
      resolucao: "Ordenados: {=ordenar(x)}\nn = 6 (par) → média do 3º e do 4º valores = {=mediana(x):2} min",
      explicacao: "Primeiro ordene; com n par, a mediana é a média dos dois centrais." },
    { id: "m13-b06", tipo: "caso", contexto: "O tempo de atendimento de um call center tem muitos casos rápidos e alguns muito longos (clientes com problemas complexos).",
      pergunta: "Qual medida de centro deve ser reportada junto com a média?",
      opcoes: ["A mediana, porque resiste aos valores extremos", "A moda, sempre", "A amplitude", "Nenhuma"], correta: 0,
      explicacao: "Distribuição assimétrica: a média é puxada pelos casos longos." }
  ]);
  add("m13-l4", [
    { id: "m13-t03", tipo: "calculo",
      variaveis: { q1: { min: 20, max: 50 }, iqr: { min: 4, max: 15 } },
      calc: { q3: "q1+iqr" },
      resposta: "q3+1.5*iqr", tolerancia: 0.01, unidade: "",
      pergunta: "Q1 = {q1} e Q3 = {q3}. Acima de qual valor um dado é considerado outlier (regra 1,5 × IQR)?",
      resolucao: "IQR = {q3} − {q1} = {iqr}\nLimite superior = {q3} + 1,5 × {iqr} = {=q3+1.5*iqr:2}",
      explicacao: "O limite inferior seria Q1 − 1,5 × IQR." },
    { id: "m13-b07", tipo: "vf", pergunta: "Um ponto além do bigode no boxplot deve ser apagado imediatamente da base de dados.",
      correta: false, explicacao: "Investigue a causa primeiro: pode ser erro de registro ou um problema real do processo." }
  ]);
  add("m13-l5", [
    { id: "m13-t04", tipo: "calculo",
      variaveis: { x: { lista: 5, min: 18, max: 30 } },
      condicao: "desvio(x) > 0.5",
      resposta: "desvio(x)", tolerancia: 0.02, unidade: "",
      pergunta: "Amostra de tempos (s): {x}. Qual o desvio-padrão amostral? (2 casas)",
      resolucao: "Média = {=media(x):2}\nSoma dos quadrados dos desvios = {=soma(x.map(v=>(v-media(x))**2)):2}\ns² = {=soma(x.map(v=>(v-media(x))**2)):2} ÷ (5 − 1) = {=desvio(x)**2:2}\ns = √{=desvio(x)**2:2} ≈ {=desvio(x):2}",
      explicacao: "A amostra divide por n − 1." },
    { id: "m13-t05", tipo: "calculo",
      variaveis: { m: { min: 20, max: 200, passo: 5 }, s: { min: 1, max: 30 } },
      condicao: "s < m/2",
      resposta: "s/m*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Um processo tem média {m} e desvio-padrão {s}. Qual o coeficiente de variação (%)? (1 casa)",
      resolucao: "CV = {s} ÷ {m} × 100 ≈ {=s/m*100:1}%",
      explicacao: "Referência prática: < 15% baixa; 15–30% média; > 30% alta dispersão." }
  ]);
  add("m13-l6", [
    { id: "m13-b08", tipo: "caso", contexto: "Dois fornecedores entregam eixos com diâmetro médio de 20,00 mm. O desvio-padrão do fornecedor X é 0,01 mm; o do Y é 0,04 mm. A tolerância é ±0,05 mm.",
      pergunta: "Qual fornecedor é melhor para a qualidade?",
      opcoes: ["X: mesma média e muito menos variação", "Y: variação maior dá mais flexibilidade", "São iguais", "Não dá para saber sem o preço"], correta: 0,
      explicacao: "Com σ = 0,04, os limites ficam a apenas 1,25 σ da média (muitas peças fora)." }
  ]);
  add("m13-l7", [
    { id: "m13-t06", tipo: "calculo",
      variaveis: { p: { valores: [0.9, 0.92, 0.95, 0.97, 0.98, 0.99] }, n: { min: 2, max: 6 } },
      resposta: "pow(p,n)*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Uma linha tem {n} máquinas em série, cada uma com confiabilidade {p} (independentes). Qual a confiabilidade da linha (%)? (1 casa)",
      resolucao: "Regra do E: {p}^{n} = {=pow(p,n):4} → {=pow(p,n)*100:1}%",
      explicacao: "Quanto mais etapas em série, menor a confiabilidade." },
    { id: "m13-t07", tipo: "calculo",
      variaveis: { taxa: { min: 1, max: 10 }, n: { min: 3, max: 20 } },
      resposta: "(1-pow(1-taxa/100,n))*100", tolerancia: 0.15, unidade: "%",
      pergunta: "A taxa de defeito é {taxa}%. Numa amostra de {n} peças, qual a probabilidade (%) de encontrar PELO MENOS UMA defeituosa? (1 casa)",
      resolucao: "P(nenhuma) = (1 − {=taxa/100:2})^{n} = {=pow(1-taxa/100,n):4}\nP(pelo menos uma) = 1 − {=pow(1-taxa/100,n):4} ≈ {=(1-pow(1-taxa/100,n))*100:1}%",
      explicacao: "Pelo menos um = um menos nenhum." }
  ]);
  add("m13-l8", [
    { id: "m13-t08", tipo: "calculo",
      variaveis: { mu: { min: 20, max: 80 }, sg: { min: 2, max: 10 }, k: { valores: [-2, -1.5, -1, 1, 1.5, 2, 2.5] } },
      calc: { x: "mu+k*sg" },
      resposta: "k", tolerancia: 0.01, unidade: "",
      pergunta: "Um processo tem média {mu} e desvio-padrão {sg}. Qual o escore Z de um valor igual a {x}?",
      resolucao: "Z = ({x} − {mu}) ÷ {sg} = {k}",
      explicacao: "Z é a distância em desvios." },
    { id: "m13-t09", tipo: "calculo",
      variaveis: { mu: { min: 20, max: 80 }, sg: { min: 2, max: 10 }, k: { valores: [-1, -0.5, 1, 1.5, 2, 2.5] } },
      calc: { x: "mu+k*sg" },
      resposta: "(1-Phi(k))*100", tolerancia: 0.15, unidade: "%",
      pergunta: "Processo normal com média {mu} e desvio-padrão {sg}. Qual a porcentagem de valores ACIMA de {x}? (use a tabela Z; 2 casas)",
      resolucao: "Z = ({x} − {mu}) ÷ {sg} = {k}\nP(Z > {k}) = 1 − Φ({k}) ≈ {=(1-Phi(k))*100:2}%",
      explicacao: "No Excel: 1 − DIST.NORMP.N(z; VERDADEIRO)." }
  ]);
  add("m13-l9", [
    { id: "m13-t10", tipo: "calculo",
      variaveis: { sg: { min: 2, max: 20 }, n: { valores: [4, 9, 16, 25, 36, 49, 64, 81, 100] } },
      resposta: "sg/sqrt(n)", tolerancia: 0.01, unidade: "",
      pergunta: "σ = {sg} e n = {n}. Qual o erro padrão da média? (2 casas)",
      resolucao: "EP = σ ÷ √n = {sg} ÷ {=sqrt(n)} = {=sg/sqrt(n):2}",
      explicacao: "Médias tremem menos que valores individuais." },
    { id: "m13-t11", tipo: "calculo",
      variaveis: { sg: { min: 2, max: 10 }, erro: { valores: [0.5, 1, 1.5, 2] } },
      resposta: "ceil(pow(1.96*sg/erro,2))", tolerancia: 0, unidade: "medições",
      pergunta: "σ ≈ {sg}. Quantas medições são necessárias para estimar a média com erro máximo de ±{erro} e 95% de confiança?",
      resolucao: "n = (1,96 × {sg} ÷ {erro})² = {=pow(1.96*sg/erro,2):2} → arredonda para cima: {=ceil(pow(1.96*sg/erro,2))}",
      explicacao: "Sempre arredonde para cima." }
  ]);
  add("m13-l10", [
    { id: "m13-t12", tipo: "calculo",
      variaveis: { mu0: { min: 100, max: 500, passo: 10 }, delta: { valores: [-6, -4, -3, -2, 2, 3, 4, 6] }, s: { valores: [5, 8, 10] }, n: { valores: [16, 25, 36, 64] } },
      calc: { xb: "mu0+delta", ep: "s/sqrt(n)" },
      resposta: "(xb-mu0)/ep", tolerancia: 0.01, unidade: "",
      pergunta: "Valor de referência μ₀ = {mu0}. Amostra: n = {n}, x̄ = {xb}, s = {s}. Qual a estatística t? (2 casas)",
      resolucao: "EP = {s} ÷ √{n} = {ep:3}\nt = ({xb} − {mu0}) ÷ {ep:3} ≈ {=(xb-mu0)/ep:2}",
      explicacao: "Compare |t| com o valor crítico (≈ 2 para amostras médias e 95%)." },
    { id: "m13-b09", tipo: "multipla", pergunta: "O teste deu p-valor = 0,20 com α = 0,05. Qual a decisão?",
      opcoes: ["Rejeitar H0", "Não rejeitar H0 (não há evidência suficiente de diferença)", "Provar que H0 é verdadeira", "Refazer com α = 0,30"], correta: 1,
      explicacao: "p alto: sem evidência. E não rejeitar não prova H0." }
  ]);
  add("m13-l11", [
    { id: "m13-t13", tipo: "calculo",
      variaveis: { a: { min: 5, max: 20 }, b: { min: 1, max: 5, passo: 0.1 }, x: { min: 5, max: 15 } },
      resposta: "a+b*x", tolerancia: 0.01, unidade: "",
      pergunta: "A reta de regressão é ŷ = {a} + {b}·x. Qual o valor previsto para x = {x}?",
      resolucao: "ŷ = {a} + {b} × {x} = {=a+b*x:2}",
      explicacao: "Cuidado ao extrapolar para fora da faixa dos dados." },
    { id: "m13-b10", tipo: "vf", pergunta: "Um R² de 0,64 corresponde a um coeficiente de correlação r de ±0,8.",
      correta: true, explicacao: "R² = r² → r = ±√0,64 = ±0,8 (o sinal vem da inclinação)." }
  ]);
  add("m13-l12", [
    { id: "m13-t14", tipo: "calculo",
      variaveis: { s: { valores: [0.05, 0.1, 0.2] }, k: { valores: [1.5, 2, 2.5, 3] } },
      calc: { L: "k*s" },
      resposta: "2*(1-Phi(k))*100", tolerancia: 0.05, unidade: "%",
      pergunta: "Processo centrado em 50,0 mm com σ = {s} mm. Especificação: 50,0 ± {L:2} mm. Qual a porcentagem total fora da especificação? (2 casas)",
      resolucao: "Z = ±{L:2} ÷ {s} = ±{k}\nCada cauda: {=(1-Phi(k))*100:3}%\nTotal = {=2*(1-Phi(k))*100:2}%",
      explicacao: "Com Z = 3 nos dois lados: 0,27%." }
  ]);

  /* ================= MÓDULO 2 — PROJETOS ================= */
  add("m02-l4", [
    { id: "m02-t01", nivel: "medio", tipo: "calculo",
      variaveis: { dA: { min: 2, max: 5 }, dB: { min: 4, max: 12 }, dC: { min: 3, max: 10 }, dD: { min: 2, max: 6 } },
      condicao: "dB != dC",
      resposta: "dA+max(dB,dC)+dD", tolerancia: 0, unidade: "dias",
      pergunta: "Rede: A ({dA} d) → B ({dB} d) e C ({dC} d) em paralelo → D ({dD} d), que depende de B e C. Qual a duração do projeto?",
      resolucao: "A-B-D = {=dA+dB+dD} dias; A-C-D = {=dA+dC+dD} dias\nO mais longo é o caminho crítico: {=dA+max(dB,dC)+dD} dias",
      explicacao: "Ida pega o maior." },
    { id: "m02-t02", nivel: "medio", tipo: "calculo",
      variaveis: { dA: { min: 2, max: 5 }, dB: { min: 4, max: 12 }, dC: { min: 3, max: 10 }, dD: { min: 2, max: 6 } },
      condicao: "dB != dC",
      resposta: "abs(dB-dC)", tolerancia: 0, unidade: "dias",
      pergunta: "Rede: A ({dA} d) → B ({dB} d) e C ({dC} d) em paralelo → D ({dD} d). Qual a folga total da atividade NÃO crítica entre B e C?",
      resolucao: "Via B: {=dA+dB+dD} d; via C: {=dA+dC+dD} d\nFolga da atividade do caminho mais curto = {=abs(dB-dC)} dias",
      explicacao: "Folga total = quanto pode atrasar sem atrasar o projeto." }
  ]);
  add("m02-l5", [
    { id: "m02-t03", nivel: "facil", tipo: "calculo",
      variaveis: { a: { min: 2, max: 8 }, dm: { min: 1, max: 5 }, db: { min: 2, max: 12 } },
      calc: { m: "a+dm", b: "m+db" },
      resposta: "(a+4*m+b)/6", tolerancia: 0.01, unidade: "dias",
      pergunta: "Estimativas: otimista {a}, mais provável {m} e pessimista {b} dias. Qual a duração esperada PERT? (2 casas)",
      resolucao: "te = ({a} + 4 × {m} + {b}) ÷ 6 = {=a+4*m+b} ÷ 6 ≈ {=(a+4*m+b)/6:2} dias",
      explicacao: "O pessimista puxa a média para cima." },
    { id: "m02-t04", nivel: "medio", tipo: "calculo",
      variaveis: { a: { min: 2, max: 8 }, dm: { min: 1, max: 5 }, db: { min: 2, max: 12 } },
      calc: { m: "a+dm", b: "m+db" },
      resposta: "(b-a)/6", tolerancia: 0.01, unidade: "dias",
      pergunta: "Estimativas: otimista {a}, mais provável {m} e pessimista {b} dias. Qual o desvio-padrão PERT? (2 casas)",
      resolucao: "σ = (b − a) ÷ 6 = ({b} − {a}) ÷ 6 ≈ {=(b-a)/6:2} dias",
      explicacao: "No caminho, somam-se as variâncias (σ²)." },
    { id: "m02-t05", nivel: "medio", tipo: "calculo",
      variaveis: { Te: { min: 15, max: 40 }, sg: { valores: [1, 1.5, 2, 2.5, 3, 4] }, k: { valores: [0.5, 1, 1.5, 2] } },
      calc: { prazo: "Te+k*sg" },
      resposta: "Phi(k)*100", tolerancia: 0.15, unidade: "%",
      pergunta: "Caminho crítico com Te = {Te} dias e σ = {sg} dias. Qual a probabilidade (%) de terminar em até {prazo} dias? (1 casa)",
      resolucao: "Z = ({prazo} − {Te}) ÷ {sg} = {k}\nP(Z < {k}) ≈ {=Phi(k)*100:1}%",
      explicacao: "Prometer o Te dá só ~50% de chance." },
    { id: "m02-t06", nivel: "medio", tipo: "calculo",
      variaveis: { dn: { min: 8, max: 15 }, red: { min: 2, max: 5 }, cn: { min: 10000, max: 40000, passo: 1000 }, cpd: { valores: [500, 800, 1000, 1200, 1500, 2000] } },
      calc: { da: "dn-red", ca: "cn+cpd*red" },
      resposta: "(ca-cn)/(dn-da)", tolerancia: 0, unidade: "R$/dia",
      pergunta: "Normal: {dn} dias por R$ {cn}. Acelerada: {da} dias por R$ {ca}. Qual o custo de compressão por dia (R$)?",
      resolucao: "({ca} − {cn}) ÷ ({dn} − {da}) = {=ca-cn} ÷ {red} = R$ {=(ca-cn)/(dn-da)} por dia",
      explicacao: "Compare esse número entre as atividades críticas." }
  ]);
  add("m02-l6", [
    { id: "m02-t07", nivel: "medio", tipo: "calculo",
      variaveis: { p: { min: 5, max: 60, passo: 5 }, imp: { min: 10000, max: 200000, passo: 5000 } },
      resposta: "p/100*imp", tolerancia: 0, unidade: "R$",
      pergunta: "Um risco tem {p}% de probabilidade e impacto de R$ {imp}. Qual o valor monetário esperado (R$, valor absoluto)?",
      resolucao: "VME = {=p/100} × {imp} = R$ {=p/100*imp}",
      explicacao: "Base para reservas e decisões de resposta." },
    { id: "m02-t08", nivel: "dificil", tipo: "calculo",
      variaveis: { p1: { min: 20, max: 50, passo: 5 }, imp: { min: 20000, max: 100000, passo: 10000 }, p2: { min: 5, max: 15, passo: 5 }, custo: { min: 1000, max: 10000, passo: 1000 } },
      resposta: "p1/100*imp-(custo+p2/100*imp)", tolerancia: 0, unidade: "R$",
      pergunta: "Risco: P = {p1}%, impacto R$ {imp}. Uma resposta custa R$ {custo} e reduz P para {p2}%. Qual a economia esperada (R$) ao adotá-la? (negativo = não compensa)",
      resolucao: "VME original = {=p1/100} × {imp} = {=p1/100*imp}\nCom a resposta: {custo} + {=p2/100} × {imp} = {=custo+p2/100*imp}\nEconomia = {=p1/100*imp-(custo+p2/100*imp)}",
      explicacao: "Vale se custo + VME residual < VME original (considere também a aversão ao risco)." }
  ]);
  add("m02-l7", [
    { id: "m02-t09", nivel: "medio", tipo: "calculo",
      variaveis: { ev: { min: 60, max: 150, passo: 5 }, ac: { min: 60, max: 160, passo: 5 } },
      condicao: "ac != ev",
      resposta: "ev/ac", tolerancia: 0.002, unidade: "",
      pergunta: "EV = R$ {ev} mil e AC = R$ {ac} mil. Qual o CPI? (3 casas)",
      resolucao: "CPI = EV ÷ AC = {ev} ÷ {ac} ≈ {=ev/ac:3}",
      explicacao: "Abaixo de 1: gastando mais do que o valor produzido." },
    { id: "m02-t10", nivel: "medio", tipo: "calculo",
      variaveis: { bac: { min: 200, max: 500, passo: 10 }, ev: { min: 50, max: 150, passo: 5 }, ac: { min: 50, max: 170, passo: 5 } },
      condicao: "ac != ev",
      resposta: "bac*ac/ev", tolerancia: 0.5, unidade: "mil R$",
      pergunta: "BAC = R$ {bac} mil; EV = R$ {ev} mil; AC = R$ {ac} mil. Qual a EAC (mil R$), supondo que o CPI atual continue? (1 casa)",
      resolucao: "CPI = {ev} ÷ {ac} = {=ev/ac:4}\nEAC = BAC ÷ CPI = {bac} ÷ {=ev/ac:4} ≈ {=bac*ac/ev:1} mil",
      explicacao: "Se o desvio for atípico, use AC + (BAC − EV)." },
    { id: "m02-t11", nivel: "dificil", tipo: "calculo",
      variaveis: { bac: { min: 200, max: 500, passo: 10 }, ev: { min: 50, max: 150, passo: 5 }, ac: { min: 50, max: 170, passo: 5 } },
      condicao: "ac < bac && ev < bac && ac != ev",
      resposta: "(bac-ev)/(bac-ac)", tolerancia: 0.002, unidade: "",
      pergunta: "BAC = {bac} mil, EV = {ev} mil, AC = {ac} mil. Qual o TCPI para terminar dentro do BAC? (3 casas)",
      resolucao: "TCPI = (BAC − EV) ÷ (BAC − AC) = {=bac-ev} ÷ {=bac-ac} ≈ {=(bac-ev)/(bac-ac):3}",
      explicacao: "Compare com o CPI atual para ver se é realista." }
  ]);
  add("m02-l8", [
    { id: "m02-t12", nivel: "medio", tipo: "calculo",
      variaveis: { v1: { min: 15, max: 30 }, v2: { min: 15, max: 30 }, v3: { min: 15, max: 30 }, pts: { min: 60, max: 200, passo: 5 } },
      resposta: "ceil(pts/((v1+v2+v3)/3))", tolerancia: 0, unidade: "sprints",
      pergunta: "As três últimas sprints entregaram {v1}, {v2} e {v3} pontos. Faltam {pts} pontos. Quantas sprints faltam pela velocidade média? (arredonde para cima)",
      resolucao: "Média = ({v1} + {v2} + {v3}) ÷ 3 ≈ {=(v1+v2+v3)/3:2}\n{pts} ÷ {=(v1+v2+v3)/3:2} ≈ {=pts/((v1+v2+v3)/3):2} → {=ceil(pts/((v1+v2+v3)/3))} sprints",
      explicacao: "Comunique como faixa usando a menor e a maior velocidade." }
  ]);
  add("m02-l9", [
    { id: "m02-t13", nivel: "medio", tipo: "calculo",
      variaveis: { wip: { min: 6, max: 40 }, th: { min: 2, max: 10 } },
      resposta: "wip/th", tolerancia: 0.01, unidade: "semanas",
      pergunta: "Um time tem em média {wip} itens em andamento e entrega {th} itens por semana. Qual o lead time médio (semanas)? (2 casas)",
      resolucao: "Lei de Little: lead time = WIP ÷ throughput = {wip} ÷ {th} ≈ {=wip/th:2} semanas",
      explicacao: "Vale para médias num sistema estável." },
    { id: "m02-t14", nivel: "medio", tipo: "calculo",
      variaveis: { th: { min: 2, max: 10 }, lt: { valores: [1, 1.5, 2, 3, 4] } },
      resposta: "th*lt", tolerancia: 0.01, unidade: "itens",
      pergunta: "Para um lead time médio de {lt} semanas, com throughput de {th} itens por semana, qual deve ser o WIP médio?",
      resolucao: "WIP = throughput × lead time = {th} × {lt} = {=th*lt}",
      explicacao: "Esse é um bom ponto de partida para o limite de WIP." }
  ]);

  /* ================= MÓDULO 4 — MÉTODOS ================= */
  add("m04-l2", [
    { id: "m04-t01", nivel: "medio", tipo: "calculo",
      variaveis: { xb: { min: 1, max: 5, passo: 0.5 }, cvp: { valores: [0.05, 0.08, 0.1, 0.12, 0.15] } },
      calc: { s: "arred(xb*cvp,3)" },
      resposta: "ceil(pow(1.96*s/(0.05*xb),2))", tolerancia: 0, unidade: "ciclos",
      pergunta: "Amostra piloto: x̄ = {xb} min e s = {s:3} min. Para erro relativo de 5% com 95% de confiança (z = 1,96), quantos ciclos são necessários?",
      resolucao: "n = (1,96 × {s:3} ÷ (0,05 × {xb}))² ≈ {=pow(1.96*s/(0.05*xb),2):2} → {=ceil(pow(1.96*s/(0.05*xb),2))} ciclos",
      explicacao: "Arredonde sempre para cima." },
    { id: "m04-t02", nivel: "dificil", tipo: "calculo",
      variaveis: { p: { valores: [0.1, 0.15, 0.2, 0.25, 0.3] }, erro: { valores: [0.02, 0.03, 0.04, 0.05] } },
      resposta: "ceil(1.96*1.96*p*(1-p)/(erro*erro))", tolerancia: 0, unidade: "observações",
      pergunta: "Amostragem do trabalho: proporção estimada p = {p}, erro absoluto de ±{erro}, 95% de confiança. Quantas observações?",
      resolucao: "n = 1,96² × {p} × (1 − {p}) ÷ {erro}² = {=1.96*1.96*p*(1-p)/(erro*erro):2} → {=ceil(1.96*1.96*p*(1-p)/(erro*erro))}",
      explicacao: "Metade do erro → quatro vezes mais observações." }
  ]);
  add("m04-l3", [
    { id: "m04-t03", nivel: "facil", tipo: "calculo",
      variaveis: { to: { min: 1.5, max: 4, passo: 0.1 }, r: { valores: [90, 95, 105, 110, 115, 120] } },
      resposta: "to*r/100", tolerancia: 0.01, unidade: "min",
      pergunta: "Tempo observado médio = {to} min; fator de ritmo = {r}%. Qual o tempo normal (min)? (2 casas)",
      resolucao: "TN = TO × FR = {to} × {=r/100} = {=to*r/100:2} min",
      explicacao: "Ritmo acima de 100% aumenta o tempo normal." },
    { id: "m04-t04", nivel: "facil", tipo: "calculo",
      variaveis: { tn: { min: 1.5, max: 5, passo: 0.1 }, t: { valores: [10, 12, 15, 18, 20] } },
      resposta: "tn*(1+t/100)", tolerancia: 0.01, unidade: "min",
      pergunta: "Tempo normal = {tn} min; tolerância de {t}% sobre o tempo normal. Qual o tempo padrão (min)? (2 casas)",
      resolucao: "TP = TN × (1 + T) = {tn} × {=1+t/100} = {=tn*(1+t/100):2} min",
      explicacao: "Convenção (a): tolerância sobre o tempo normal." },
    { id: "m04-t05", nivel: "medio", tipo: "calculo",
      variaveis: { tp: { valores: [1.8, 2.1, 2.53, 2.75, 3.2, 3.6, 4.15] }, disp: { valores: [440, 450, 480] } },
      resposta: "floor(disp/tp)", tolerancia: 0, unidade: "peças",
      pergunta: "TP = {tp} min e {disp} min de tempo disponível. Qual a capacidade do turno (peças inteiras)?",
      resolucao: "{disp} ÷ {tp} ≈ {=disp/tp:2} → arredonda para baixo: {=floor(disp/tp)} peças",
      explicacao: "Capacidade se arredonda para baixo." },
    { id: "m04-t06", nivel: "medio", tipo: "calculo",
      variaveis: { tn: { min: 1.5, max: 5, passo: 0.1 }, t: { valores: [10, 12, 15, 18, 20] } },
      resposta: "tn/(1-t/100)", tolerancia: 0.01, unidade: "min",
      pergunta: "TN = {tn} min e tolerância de {t}% definida como fração da JORNADA. Use TP = TN ÷ (1 − T). Qual o TP (min)? (2 casas)",
      resolucao: "TP = {tn} ÷ (1 − {=t/100}) = {tn} ÷ {=1-t/100} ≈ {=tn/(1-t/100):2} min",
      explicacao: "Convenção (b): tolerância como fração do tempo total." }
  ]);
  add("m04-l4", [
    { id: "m04-t07", nivel: "facil", tipo: "calculo",
      variaveis: { pecas: { min: 100, max: 300, passo: 5 }, tp: { valores: [1.5, 1.8, 2, 2.2, 2.5] }, h: { valores: [420, 450, 480] } },
      condicao: "pecas*tp/h < 1.3",
      resposta: "pecas*tp/h*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Um operador produziu {pecas} peças com TP de {tp} min, trabalhando {h} min. Qual a eficiência (%)? (1 casa)",
      resolucao: "Minutos-padrão = {pecas} × {tp} = {=pecas*tp:1}\nEficiência = {=pecas*tp:1} ÷ {h} × 100 ≈ {=pecas*tp/h*100:1}%",
      explicacao: "Acima de ~115–120% de forma persistente, revise o TP." },
    { id: "m04-t08", nivel: "dificil", tipo: "calculo",
      variaveis: { t1: { min: 50, max: 200, passo: 10 }, taxa: { valores: [0.75, 0.8, 0.85, 0.9] }, n: { valores: [2, 4, 8, 16] } },
      resposta: "t1*pow(n,log(taxa)/log(2))", tolerancia: 0.1, unidade: "min",
      pergunta: "Curva de aprendizagem de {=taxa*100:0}%, primeira unidade em {t1} min. Qual o tempo da unidade número {n} (min)? (1 casa)",
      resolucao: "A cada dobro, multiplica por {taxa}.\nT{n} = {t1} × {taxa}^{=log(n)/log(2)} ≈ {=t1*pow(n,log(taxa)/log(2)):1} min",
      explicacao: "A queda acontece a cada DOBRO da produção acumulada." }
  ]);
  add("m04-l5", [
    { id: "m04-t09", nivel: "facil", tipo: "calculo",
      variaveis: { disp: { valores: [25200, 26400, 27000, 28800] }, dem: { valores: [240, 300, 360, 400, 480, 600, 720] } },
      resposta: "disp/dem", tolerancia: 0.01, unidade: "s",
      pergunta: "Tempo disponível de {disp} s por turno e demanda de {dem} unidades. Qual o takt time (s)? (2 casas)",
      resolucao: "Takt = {disp} ÷ {dem} ≈ {=disp/dem:2} s",
      explicacao: "Takt é o ritmo do cliente." },
    { id: "m04-t10", nivel: "facil", tipo: "calculo",
      variaveis: { st: { min: 100, max: 400, passo: 5 }, takt: { valores: [30, 40, 45, 50, 55, 60] } },
      resposta: "ceil(st/takt)", tolerancia: 0, unidade: "postos",
      pergunta: "A soma dos tempos das tarefas é {st} s e o takt é {takt} s. Qual o número mínimo teórico de postos?",
      resolucao: "{st} ÷ {takt} ≈ {=st/takt:2} → arredonda para cima: {=ceil(st/takt)} postos",
      explicacao: "É um limite inferior: a precedência pode exigir mais." },
    { id: "m04-t11", nivel: "medio", tipo: "calculo",
      variaveis: { t: { lista: 4, min: 30, max: 55 } },
      resposta: "soma(t)/(4*max(...t))*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Uma linha tem 4 postos com tempos de {t} s. Qual a eficiência do balanceamento (%)? (1 casa)",
      resolucao: "Σt = {=soma(t)}; TC = maior tempo = {=max(...t)}\nEficiência = {=soma(t)} ÷ (4 × {=max(...t)}) ≈ {=soma(t)/(4*max(...t))*100:1}%",
      explicacao: "O posto mais lento define o ciclo de todos." }
  ]);
  add("m04-l6", [
    { id: "m04-t12", nivel: "facil", tipo: "calculo",
      variaveis: { t: { lista: 4, min: 35, max: 60 } },
      resposta: "floor(26400/max(...t))", tolerancia: 0, unidade: "unidades",
      pergunta: "Postos com tempos de {t} s e 26.400 s disponíveis no turno. Quantas unidades inteiras a linha produz?",
      resolucao: "TC = maior tempo = {=max(...t)} s (gargalo)\n26.400 ÷ {=max(...t)} ≈ {=26400/max(...t):1} → {=floor(26400/max(...t))} unidades",
      explicacao: "A linha anda no ritmo do gargalo." },
    { id: "m04-t13", nivel: "medio", tipo: "calculo",
      variaveis: { tc1: { min: 45, max: 60 }, tc2: { min: 35, max: 50 } },
      condicao: "tc2 < tc1",
      resposta: "(tc1/tc2-1)*100", tolerancia: 0.1, unidade: "%",
      pergunta: "O tempo de ciclo da linha caiu de {tc1} s para {tc2} s. Qual o ganho percentual de capacidade? (1 casa)",
      resolucao: "Ganho = {tc1} ÷ {tc2} − 1 ≈ {=(tc1/tc2-1)*100:1}%",
      explicacao: "Capacidade é inversamente proporcional ao tempo de ciclo." }
  ]);

  /* ================= MÓDULO 3 — PCP ================= */
  add("m03-l2", [
    { id: "m03-t01", nivel: "facil", tipo: "calculo",
      variaveis: { d1: { min: 80, max: 160, passo: 2 }, d2: { min: 80, max: 160, passo: 2 }, d3: { min: 80, max: 160, passo: 2 } },
      resposta: "(d1+d2+d3)/3", tolerancia: 0.01, unidade: "unidades",
      pergunta: "Demanda dos últimos 3 meses: {d1}, {d2} e {d3} unidades. Qual a previsão pela média móvel de 3 meses? (2 casas)",
      resolucao: "({d1} + {d2} + {d3}) ÷ 3 = {=d1+d2+d3} ÷ 3 = {=(d1+d2+d3)/3:2}",
      explicacao: "A janela anda: no mês seguinte, sai o mais antigo e entra o novo." },
    { id: "m03-t02", nivel: "medio", tipo: "calculo",
      variaveis: { d1: { min: 40, max: 80 }, d2: { min: 40, max: 80 }, d3: { min: 40, max: 80 }, w3: { valores: [0.5, 0.6] } },
      calc: { w2: "arred((1-w3)*0.6,2)", w1: "arred(1-w3-arred((1-w3)*0.6,2),2)" },
      resposta: "w1*d1+w2*d2+w3*d3", tolerancia: 0.01, unidade: "unidades",
      pergunta: "Demandas: mês 1 = {d1}, mês 2 = {d2}, mês 3 (mais recente) = {d3}. Pesos {w1}, {w2} e {w3}, respectivamente. Qual a previsão ponderada para o mês 4? (2 casas)",
      resolucao: "{w1} × {d1} + {w2} × {d2} + {w3} × {d3} = {=w1*d1+w2*d2+w3*d3:2}",
      explicacao: "O período mais recente recebe o maior peso; os pesos somam 1." },
    { id: "m03-t03", nivel: "medio", tipo: "calculo",
      variaveis: { f: { min: 150, max: 300, passo: 5 }, dif: { min: -40, max: 40, passo: 5 }, alfa: { valores: [0.1, 0.2, 0.3, 0.4, 0.5] } },
      condicao: "dif != 0",
      calc: { a: "f+dif" },
      resposta: "f+alfa*(a-f)", tolerancia: 0.01, unidade: "unidades",
      pergunta: "Previsão do mês = {f}; demanda real = {a}; α = {alfa}. Qual a previsão do próximo mês pela suavização exponencial? (2 casas)",
      resolucao: "F = {f} + {alfa} × ({a} − {f}) = {f} + {=alfa*(a-f):2} = {=f+alfa*(a-f):2}",
      explicacao: "A previsão anda uma fração α do erro na direção da demanda real." }
  ]);
  add("m03-l3", [
    { id: "m03-t04", nivel: "facil", tipo: "calculo",
      variaveis: { e: { lista: 4, min: -12, max: 12 } },
      calc: { ab: "e.map(x => abs(x))" },
      condicao: "soma(ab) > 0",
      resposta: "media(ab)", tolerancia: 0.01, unidade: "unidades",
      pergunta: "Erros de previsão (real − previsto) em 4 meses: {e}. Qual o MAD? (2 casas)",
      resolucao: "Erros em valor absoluto: {ab}\nMAD = {=soma(ab)} ÷ 4 = {=media(ab):2}",
      explicacao: "No MAD, os erros entram em valor absoluto." },
    { id: "m03-t05", nivel: "medio", tipo: "calculo",
      variaveis: { r1: { min: 80, max: 200, passo: 5 }, r2: { min: 80, max: 200, passo: 5 }, d1: { min: -30, max: 30, passo: 5 }, d2: { min: -30, max: 30, passo: 5 } },
      calc: { p1: "r1+d1", p2: "r2+d2" },
      condicao: "d1 != 0 || d2 != 0",
      resposta: "(abs(r1-p1)/r1+abs(r2-p2)/r2)/2*100", tolerancia: 0.05, unidade: "%",
      pergunta: "Mês 1: real {r1}, previsto {p1}. Mês 2: real {r2}, previsto {p2}. Qual o MAPE (%)? (2 casas)",
      resolucao: "|{r1} − {p1}| ÷ {r1} = {=abs(r1-p1)/r1*100:2}% · |{r2} − {p2}| ÷ {r2} = {=abs(r2-p2)/r2*100:2}%\nMAPE = {=(abs(r1-p1)/r1+abs(r2-p2)/r2)/2*100:2}%",
      explicacao: "Cada erro é dividido pela demanda real do próprio período." },
    { id: "m03-t06", nivel: "medio", tipo: "calculo",
      variaveis: { a0: { min: 10, max: 30, passo: 0.5 }, b: { min: 1, max: 5, passo: 0.2 }, x: { min: 6, max: 12 } },
      resposta: "a0+b*x", tolerancia: 0.01, unidade: "mil caixas",
      pergunta: "A reta de tendência da demanda é F = {a0} + {b}·x. Qual a previsão para o período x = {x}? (2 casas)",
      resolucao: "F = {a0} + {b} × {x} = {=a0+b*x:2}",
      explicacao: "Cuidado ao extrapolar muito além dos dados usados na regressão." },
    { id: "m03-t07", nivel: "medio", tipo: "calculo",
      variaveis: { anual: { min: 320, max: 800, passo: 20 }, ind: { valores: [0.7, 0.8, 0.9, 1.1, 1.2, 1.3] } },
      resposta: "anual/4*ind", tolerancia: 0.01, unidade: "unidades",
      pergunta: "Previsão anual = {anual} unidades, distribuída em 4 trimestres. O índice sazonal do trimestre é {ind}. Qual a previsão do trimestre?",
      resolucao: "Base = {anual} ÷ 4 = {=anual/4:2}\nPrevisão = {=anual/4:2} × {ind} = {=anual/4*ind:2}",
      explicacao: "Modelo multiplicativo: base × índice." },
    { id: "m03-t08", nivel: "dificil", tipo: "calculo",
      variaveis: { rsfe: { min: -40, max: 40, passo: 2 }, mad: { min: 4, max: 12 } },
      condicao: "rsfe != 0",
      resposta: "rsfe/mad", tolerancia: 0.01, unidade: "",
      pergunta: "Soma dos erros (real − previsto) = {rsfe}; MAD = {mad}. Qual o sinal de rastreamento? (2 casas)",
      resolucao: "TS = {rsfe} ÷ {mad} = {=rsfe/mad:2}",
      explicacao: "Fora de ±4 (limite usual), há viés: positivo = previsão baixa; negativo = previsão alta." }
  ]);
  add("m03-l4", [
    { id: "m03-t09", nivel: "medio", tipo: "calculo",
      variaveis: { d1: { min: 500, max: 1500, passo: 50 }, d2: { min: 500, max: 1500, passo: 50 }, d3: { min: 500, max: 1500, passo: 50 }, d4: { min: 500, max: 1500, passo: 50 } },
      condicao: "(d1+d2+d3+d4) % 4 == 0",
      resposta: "(d1+d2+d3+d4)/4", tolerancia: 0, unidade: "unidades/mês",
      pergunta: "Demanda em 4 meses: {d1}, {d2}, {d3} e {d4}. Estoque inicial e final desejado = 0. Qual a produção mensal no plano nivelado?",
      resolucao: "({d1} + {d2} + {d3} + {d4}) ÷ 4 = {=d1+d2+d3+d4} ÷ 4 = {=(d1+d2+d3+d4)/4}",
      explicacao: "Verifique também se o estoque não fica negativo em algum mês; se ficar, é preciso estoque inicial ou outra estratégia." },
    { id: "m03-t10", nivel: "medio", tipo: "calculo",
      variaveis: { e0: { min: 20, max: 120, passo: 5 }, pmp: { valores: [0, 100, 150] }, prev: { min: 30, max: 80, passo: 5 }, ped: { min: 20, max: 90, passo: 5 } },
      condicao: "e0 + pmp - max(prev, ped) >= 0",
      resposta: "e0+pmp-max(prev,ped)", tolerancia: 0, unidade: "unidades",
      pergunta: "Estoque inicial = {e0}; PMP da semana = {pmp}; previsão = {prev}; pedidos firmes = {ped}. Qual o estoque projetado ao fim da semana?",
      resolucao: "E = {e0} + {pmp} − max({prev}; {ped}) = {=e0+pmp-max(prev,ped)}",
      explicacao: "Usa-se o maior entre previsão e pedidos firmes." }
  ]);
  add("m03-l5", [
    { id: "m03-t11", nivel: "facil", tipo: "calculo",
      variaveis: { pai: { min: 50, max: 400, passo: 10 }, qpu: { valores: [2, 4, 6, 8, 12, 16, 24] } },
      resposta: "pai*qpu", tolerancia: 0, unidade: "unidades",
      pergunta: "PMP = {pai} caixas; cada caixa usa {qpu} unidades do componente. Qual a necessidade bruta do componente?",
      resolucao: "NB = {pai} × {qpu} = {=pai*qpu}",
      explicacao: "Demanda dependente: calcula-se, não se prevê." },
    { id: "m03-t12", nivel: "medio", tipo: "calculo",
      variaveis: { nb: { min: 800, max: 3000, passo: 100 }, est: { min: 0, max: 600, passo: 50 }, rp: { valores: [0, 200, 300, 500] }, es: { valores: [0, 100, 200] } },
      condicao: "nb - est - rp + es > 0",
      resposta: "nb-est-rp+es", tolerancia: 0, unidade: "unidades",
      pergunta: "NB = {nb}; estoque disponível = {est}; recebimento programado = {rp}; estoque de segurança = {es}. Qual a necessidade líquida?",
      resolucao: "NL = {nb} − {est} − {rp} + {es} = {=nb-est-rp+es}",
      explicacao: "Desconte o que tem e o que já vem; acrescente o estoque de segurança." },
    { id: "m03-t13", nivel: "medio", tipo: "calculo",
      variaveis: { nl: { min: 60, max: 900, passo: 10 }, lote: { valores: [100, 150, 200, 250] } },
      condicao: "nl % lote != 0",
      resposta: "ceil(nl/lote)*lote", tolerancia: 0, unidade: "unidades",
      pergunta: "Necessidade líquida = {nl}; o fornecedor só vende em lotes de {lote}. Qual o recebimento planejado?",
      resolucao: "{nl} ÷ {lote} = {=nl/lote:2} → {=ceil(nl/lote)} lotes × {lote} = {=ceil(nl/lote)*lote} (sobram {=ceil(nl/lote)*lote-nl})",
      explicacao: "Lote fixo: arredonde para cima para o múltiplo do lote." }
  ]);
  add("m03-l6", [
    { id: "m03-t14", nivel: "facil", tipo: "calculo",
      variaveis: { rec: { min: 2, max: 8 }, h: { valores: [6, 8, 9] }, tur: { min: 1, max: 3 }, dias: { valores: [5, 6] } },
      resposta: "rec*h*tur*dias", tolerancia: 0, unidade: "h",
      pergunta: "{rec} máquinas, {h} h por turno, {tur} turno(s) por dia, {dias} dias por semana. Qual a capacidade semanal em horas?",
      resolucao: "{rec} × {h} × {tur} × {dias} = {=rec*h*tur*dias} h",
      explicacao: "Recursos × horas × turnos × dias." },
    { id: "m03-t15", nivel: "medio", tipo: "calculo",
      variaveis: { proj: { min: 800, max: 1500, passo: 50 }, pp: { valores: [0.8, 0.85, 0.9] }, ef: { valores: [0.7, 0.75, 0.8, 0.85, 0.9] } },
      calc: { efet: "round(proj*pp)", real: "round(proj*pp*ef)" },
      resposta: "real/efet*100", tolerancia: 0.05, unidade: "%",
      pergunta: "Capacidade projetada = {proj}; efetiva = {efet}; produção realizada = {real} caixas. Qual a eficiência (%), pela definição de Slack? (2 casas)",
      resolucao: "Eficiência = {real} ÷ {efet} × 100 = {=real/efet*100:2}%\n(Utilização = {real} ÷ {proj} = {=real/proj*100:2}%)",
      explicacao: "Eficiência compara com a efetiva; utilização, com a projetada." },
    { id: "m03-t16", nivel: "medio", tipo: "calculo",
      variaveis: { qx: { min: 200, max: 600, passo: 20 }, tx: { valores: [0.2, 0.25, 0.3, 0.4] }, qy: { min: 100, max: 400, passo: 20 }, ty: { valores: [0.4, 0.5, 0.6] }, cap: { valores: [160, 200, 240, 280] } },
      condicao: "(qx*tx+qy*ty)/cap >= 0.7 && (qx*tx+qy*ty)/cap <= 1.3",
      resposta: "(qx*tx+qy*ty)/cap*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Plano: {qx} unidades de X ({tx} h cada) e {qy} de Y ({ty} h cada). Capacidade = {cap} h. Qual a ocupação (%)? (1 casa)",
      resolucao: "Carga = {qx} × {tx} + {qy} × {ty} = {=qx*tx+qy*ty:2} h\nOcupação = {=qx*tx+qy*ty:2} ÷ {cap} × 100 = {=(qx*tx+qy*ty)/cap*100:1}%",
      explicacao: "Acima de 100%: sobrecarga; ajuste a carga ou a capacidade." }
  ]);
  add("m03-l7", [
    { id: "m03-t17", nivel: "medio", tipo: "calculo",
      variaveis: { pt: { lista: 4, min: 1, max: 9 } },
      calc: { o: "ordenar(pt)" },
      resposta: "(4*o[0]+3*o[1]+2*o[2]+o[3])/4", tolerancia: 0.01, unidade: "h",
      pergunta: "Quatro ordens numa máquina, todas disponíveis no instante 0, com tempos {pt} h. Sequenciando pela regra MTP, qual o tempo médio de fluxo (h)? (2 casas)",
      resolucao: "Ordem MTP: {o}\nTérminos: {=o[0]}, {=o[0]+o[1]}, {=o[0]+o[1]+o[2]}, {=soma(o)}\nMédia = {=4*o[0]+3*o[1]+2*o[2]+o[3]} ÷ 4 = {=(4*o[0]+3*o[1]+2*o[2]+o[3])/4:2} h",
      explicacao: "O MTP minimiza o tempo médio de fluxo numa máquina." },
    { id: "m03-t18", nivel: "dificil", tipo: "calculo",
      variaveis: { wip: { min: 100, max: 800, passo: 20 }, taxa: { valores: [20, 25, 40, 50] } },
      resposta: "wip/taxa", tolerancia: 0.01, unidade: "dias",
      pergunta: "A fábrica conclui {taxa} ordens por dia e tem {wip} ordens em processo. Pela lei de Little, qual o lead time médio (dias)? (2 casas)",
      resolucao: "Lead time = WIP ÷ taxa = {wip} ÷ {taxa} = {=wip/taxa:2} dias",
      explicacao: "Reduzir o WIP com a mesma taxa reduz o lead time." }
  ]);

  /* ================= MÓDULO 14 — DADOS ================= */
  add("m14-l1", [
    { id: "m14-t01", nivel: "medio", tipo: "calculo",
      variaveis: { tot: { min: 500, max: 3000, passo: 100 }, falt: { min: 20, max: 400, passo: 10 } },
      condicao: "falt < tot",
      resposta: "(tot-falt)/tot*100", tolerancia: 0.1, unidade: "%",
      pergunta: "De {tot} registros de parada, {falt} estão sem motivo. Qual a completude do campo “motivo” (%)? (1 casa)",
      resolucao: "Completude = ({tot} − {falt}) ÷ {tot} × 100 ≈ {=(tot-falt)/tot*100:1}%",
      explicacao: "Antes de concluir sobre motivos de parada, confira a completude." }
  ]);
  add("m14-l2", [
    { id: "m14-t02", nivel: "medio", tipo: "calculo",
      variaveis: { p1: { min: 500, max: 1500, passo: 100 }, r1: { min: 5, max: 60 }, p2: { min: 500, max: 1500, passo: 100 }, r2: { min: 5, max: 60 } },
      resposta: "(r1+r2)/(p1+p2)*100", tolerancia: 0.01, unidade: "%",
      pergunta: "Linha L1: manhã com {p1} produzidas e {r1} refugadas; noite com {p2} produzidas e {r2} refugadas. Qual o refugo da linha (%)? (2 casas)",
      resolucao: "Razão das somas: ({r1} + {r2}) ÷ ({p1} + {p2}) × 100 = {=r1+r2} ÷ {=p1+p2} × 100 ≈ {=(r1+r2)/(p1+p2)*100:2}%",
      explicacao: "Não use a média das duas porcentagens." }
  ]);
  add("m14-l3", [
    { id: "m14-t03", nivel: "facil", tipo: "calculo",
      variaveis: { d: { min: 80, max: 98 }, pf: { min: 80, max: 98 }, q: { min: 90, max: 99 } },
      resposta: "d*pf*q/10000", tolerancia: 0.1, unidade: "%",
      pergunta: "Disponibilidade {d}%, performance {pf}% e qualidade {q}%. Qual o OEE (%)? (1 casa)",
      resolucao: "OEE = {=d/100} × {=pf/100} × {=q/100} ≈ {=d*pf*q/1000000:4} → {=d*pf*q/10000:1}%",
      explicacao: "As perdas se multiplicam." },
    { id: "m14-t04", nivel: "medio", tipo: "calculo",
      variaveis: { plan: { valores: [420, 450, 460] }, par: { min: 10, max: 90, passo: 5 } },
      resposta: "(plan-par)/plan*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Tempo planejado de {plan} min e {par} min de paradas não planejadas. Qual a disponibilidade (%)? (1 casa)",
      resolucao: "Tempo operando = {plan} − {par} = {=plan-par}\nD = {=plan-par} ÷ {plan} × 100 ≈ {=(plan-par)/plan*100:1}%",
      explicacao: "Paradas planejadas já saíram do tempo planejado." },
    { id: "m14-t05", nivel: "medio", tipo: "calculo",
      variaveis: { plan: { min: 420, max: 460, passo: 10 }, par: { min: 20, max: 80, passo: 5 }, ciclo: { valores: [0.5, 1, 1.5, 2] }, perf: { min: 0.8, max: 0.98, passo: 0.01 }, qual: { min: 0.9, max: 0.99, passo: 0.01 } },
      calc: { prod: "floor((plan-par)/ciclo*perf)", boas: "floor(prod*qual)" },
      resposta: "boas*ciclo/plan*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Tempo planejado de {plan} min; ciclo ideal de {ciclo} min por peça; {boas} peças boas no turno. Qual o OEE (%)? (1 casa)",
      resolucao: "Atalho: OEE = peças boas × ciclo ideal ÷ tempo planejado\n= {boas} × {ciclo} ÷ {plan} ≈ {=boas*ciclo/plan*100:1}%",
      explicacao: "É o mesmo que D × P × Q." }
  ]);
  add("m14-l6", [
    { id: "m14-t06", nivel: "medio", tipo: "calculo",
      variaveis: { sem: { min: 10000, max: 50000, passo: 1000 }, com: { min: 500, max: 5000, passo: 100 }, c: { valores: [5, 8, 10, 12, 15, 20] } },
      resposta: "(sem-com)*c", tolerancia: 0, unidade: "R$",
      pergunta: "Recall: sem rastreabilidade seriam {sem} caixas; com rastreabilidade por lote, {com}. Custo de R$ {c} por caixa recolhida. Qual a economia (R$)?",
      resolucao: "({sem} − {com}) × {c} = {=sem-com} × {c} = R$ {=(sem-com)*c}",
      explicacao: "Rastreabilidade reduz o tamanho do recall." }
  ]);
  add("m14-l7", [
    { id: "m14-t07", nivel: "medio", tipo: "calculo",
      variaveis: { vp: { min: 20, max: 80 }, fp: { min: 5, max: 100 }, fn: { min: 2, max: 30 }, vn: { min: 800, max: 1000, passo: 10 } },
      resposta: "vp/(vp+fp)*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Matriz de confusão: VP = {vp}, FP = {fp}, FN = {fn}, VN = {vn}. Qual a precisão (%)? (1 casa)",
      resolucao: "Precisão = VP ÷ (VP + FP) = {vp} ÷ {=vp+fp} ≈ {=vp/(vp+fp)*100:1}%",
      explicacao: "Dos alarmes, quantos eram defeito de verdade." },
    { id: "m14-t08", nivel: "medio", tipo: "calculo",
      variaveis: { vp: { min: 20, max: 80 }, fp: { min: 5, max: 100 }, fn: { min: 2, max: 30 }, vn: { min: 800, max: 1000, passo: 10 } },
      resposta: "vp/(vp+fn)*100", tolerancia: 0.1, unidade: "%",
      pergunta: "Matriz de confusão: VP = {vp}, FP = {fp}, FN = {fn}, VN = {vn}. Qual o recall (%)? (1 casa)",
      resolucao: "Recall = VP ÷ (VP + FN) = {vp} ÷ {=vp+fn} ≈ {=vp/(vp+fn)*100:1}%",
      explicacao: "Dos defeitos reais, quantos o modelo pegou." },
    { id: "m14-t09", nivel: "dificil", tipo: "calculo",
      variaveis: { fn: { min: 1, max: 20 }, fp: { min: 10, max: 150, passo: 5 }, cfn: { valores: [100, 200, 500, 1000] }, cfp: { valores: [5, 10, 20, 50] } },
      resposta: "fn*cfn+fp*cfp", tolerancia: 0, unidade: "R$",
      pergunta: "Um limiar gera {fn} falsos negativos (R$ {cfn} cada) e {fp} falsos positivos (R$ {cfp} cada). Qual o custo esperado dos erros (R$)?",
      resolucao: "{fn} × {cfn} + {fp} × {cfp} = {=fn*cfn} + {=fp*cfp} = R$ {=fn*cfn+fp*cfp}",
      explicacao: "Escolha o limiar pelo custo dos erros, não pela acurácia." }
  ]);
})();
