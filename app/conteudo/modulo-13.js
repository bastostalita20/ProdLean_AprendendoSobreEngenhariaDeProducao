/* =====================================================================
   MÓDULO 13 — ESTATÍSTICA APLICADA À ENGENHARIA
   (Na trilha vem logo depois do Módulo 1: é base para PCP, Qualidade,
   Logística e Pesquisa Operacional.)
   Parte 1 (Dia 2): lições 1 a 6 — Estatística descritiva
   Parte 2 (Dia 3): lições 7 a 12 — Probabilidade e inferência
   Formato dos dados: veja o cabeçalho de "modulo-01.js".
   ===================================================================== */
(window.MODULOS = window.MODULOS || []).push({
  id: "m13",
  numero: 13,
  ordem: 2,
  titulo: "Estatística Aplicada",
  icone: "📈",
  objetivo: "Resumir dados com números e gráficos, medir a variação, usar a distribuição normal e tirar conclusões sobre um processo a partir de uma amostra.",
  conquista: {
    id: "mod-m13",
    nome: "Mestre da Média",
    icone: "📈",
    descricao: "Concluiu o Módulo 13 — Estatística Aplicada."
  },

  resumoAudio:
    "Parte um. Na fábrica, tudo varia. A Estatística descreve, prevê e decide. " +
    "População é o todo; amostra é a parte que eu meço. Discreta se conta, contínua se mede. " +
    "A média soma e divide. A mediana fica no meio. A moda é o que mais aparece. " +
    "A média se deixa levar pelo exagerado; a mediana fica parada. " +
    "Mas centro não basta: é preciso medir a variação. Amplitude é o maior menos o menor. " +
    "Desvio-padrão é a variação típica, na mesma unidade dos dados. A amostra é humilde: divide por n menos um. " +
    "CV é o desvio sobre a média: compara o que não se compara. " +
    "Quartis cortam em quatro; o boxplot mostra os cinco números e denuncia o outlier. " +
    "Duas máquinas com a mesma média podem ser muito diferentes. Olhe sempre a variação. " +
    "Parte dois. OU soma, E multiplica. Pelo menos um é um menos nenhum. " +
    "Binomial conta defeituosas numa amostra. Poisson conta eventos no tempo. " +
    "A normal é o sino: simétrica, com média, mediana e moda no centro. " +
    "Um, dois, três: sessenta e oito, noventa e cinco, noventa e nove vírgula sete. " +
    "Z é a distância em desvios: x menos a média, dividido pelo desvio. " +
    "Para achar o percentual fora da especificação: calcula Z, olha a tabela, soma as caudas. " +
    "Médias tremem menos: o erro padrão é o desvio dividido pela raiz de n. " +
    "Intervalo de confiança: média mais ou menos z vezes o erro padrão. Ele fala da média, não das peças. " +
    "No teste de hipóteses, H zero diz que nada mudou. P baixo, H zero pro buraco. " +
    "Tipo um: grito sem lobo. Tipo dois: lobo sem grito. " +
    "Correlação mede se andam juntos, de menos um a mais um. Mas sorvete não afoga ninguém. " +
    "A regressão traça a reta: y igual a a mais b x. E R quadrado diz quanto ela explica.",

  licoes: [
    /* ================= PARTE 1 — DESCREVER ================= */
    {
      id: "m13-l1",
      titulo: "População, amostra e variáveis",
      icone: "📋",
      blocos: [
        { tipo: "mapa", titulo: "Mapa do módulo", texto:
          "📈 ESTATÍSTICA APLICADA\n" +
          "├ 🧩 PARTE 1 — DESCREVER\n" +
          "│ ├ População × Amostra\n" +
          "│ ├ Variáveis: NO-OR / DI-CO\n" +
          "│ ├ Gráficos: barras, linha, histograma,\n" +
          "│ │           boxplot, dispersão\n" +
          "│ ├ Posição: média, mediana, moda, quartis\n" +
          "│ └ Dispersão: desvio-padrão, CV, IQR\n" +
          "└ 🎲 PARTE 2 — CONCLUIR\n" +
          "  ├ Probabilidade: OU soma, E multiplica\n" +
          "  ├ Binomial · Poisson · NORMAL (Z)\n" +
          "  ├ Amostragem · Intervalo de confiança\n" +
          "  ├ Teste de hipóteses (H0, p-valor)\n" +
          "  └ Correlação e regressão" },
        { tipo: "recall", pergunta: "Para saber a média de peso de 1 milhão de parafusos, é preciso pesar todos?", resposta: "Não! Pesa-se uma **amostra aleatória** e usa-se a Estatística para estimar a média da população inteira." },
        { tipo: "conceito", titulo: "Para que serve", texto: "Na fábrica **tudo varia**: peso, tempo de ciclo, demanda, diâmetro.\nA Estatística serve para **descrever** a variação, **prever** e **decidir com dados**, não com opinião.\n\"Em Deus nós confiamos; todos os outros, tragam dados.\"" },
        { tipo: "conceito", titulo: "População × Amostra", texto: "**População:** o conjunto inteiro (todos os parafusos do mês).\n**Amostra:** a parte que você mede (50 parafusos sorteados).\n**Parâmetro** (da população): média **μ**, desvio **σ**.\n**Estatística** (da amostra): média **x̄**, desvio **s**." },
        { tipo: "atencao", titulo: "Amostra viciada", texto: "Amostra boa é **aleatória e representativa**. Pegar só as peças do começo do turno, ou só da máquina boa, gera conclusão errada." },
        { tipo: "conceito", titulo: "Tipos de variável", texto: "**Qualitativa nominal:** sem ordem (cor, fornecedor).\n**Qualitativa ordinal:** com ordem (ruim, bom, ótimo).\n**Quantitativa discreta:** contagem (nº de defeitos).\n**Quantitativa contínua:** medição (peso, tempo)." },
        { tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"NO-OR / DI-CO\"**: Qualitativa NOminal e ORdinal; Quantitativa DIscreta e COntínua.\n**\"Discreta se conta, contínua se mede.\"**" },
        { tipo: "conexao", titulo: "Conexão", texto: "No CEP (Módulo 5), o tipo de variável escolhe a carta de controle: contínua → carta X̄-R; contagem de defeituosos → carta p." }
      ],
      questoes: [
        { id: "m13-q01", tipo: "multipla", pergunta: "Os 50 parafusos sorteados da produção do mês formam:",
          opcoes: ["A população", "Uma amostra", "Um parâmetro", "Um censo"], correta: 1,
          explicacao: "Amostra = a parte medida. A população são TODOS os parafusos do mês." },
        { id: "m13-q02", tipo: "ligar", pergunta: "Ligue a variável ao tipo:",
          pares: [["Nº de defeitos por lote", "Quantitativa discreta"], ["Peso do pacote", "Quantitativa contínua"], ["Satisfação: ruim/bom/ótimo", "Qualitativa ordinal"], ["Nome do fornecedor", "Qualitativa nominal"]],
          explicacao: "Discreta se conta, contínua se mede. Ordinal tem ordem; nominal não." },
        { id: "m13-q03", tipo: "lacuna", pergunta: "A média da população é representada por ___ e a média da amostra por x̄.",
          opcoes: ["μ", "σ", "s", "n"], correta: 0,
          explicacao: "Letras gregas (μ, σ) = população (parâmetros). Letras latinas (x̄, s) = amostra (estatísticas)." },
        { id: "m13-q04", tipo: "vf", pergunta: "Medir só as peças produzidas no começo do turno gera uma amostra representativa do dia.",
          correta: false, explicacao: "É uma amostra viciada: o começo do turno pode ter máquina fria, operador descansado etc. A amostra deve ser aleatória ao longo do dia." },
        { id: "m13-q05", tipo: "multipla", pergunta: "Uma avaliação de 1 a 5 estrelas é uma variável:",
          opcoes: ["Quantitativa contínua", "Qualitativa ordinal", "Qualitativa nominal", "Quantitativa discreta"], correta: 1,
          explicacao: "Apesar dos números, as estrelas são categorias ordenadas (pior → melhor). Pegadinha clássica!" }
      ]
    },

    {
      id: "m13-l2",
      titulo: "Qual gráfico usar?",
      icone: "📊",
      blocos: [
        { tipo: "conceito", titulo: "Pergunta → gráfico", texto: "Comparar categorias → **barras** (ordenadas viram Pareto)\nPartes de um todo → **pizza** (poucas fatias)\nEvolução no tempo → **linha**\nForma da distribuição → **histograma**\nMediana, quartis e outliers → **boxplot**\nRelação entre duas variáveis → **dispersão**" },
        { tipo: "atencao", titulo: "Histograma ≠ barras", texto: "No **histograma** as barras ficam **coladas**, porque o eixo X é contínuo (faixas de valores). No gráfico de barras, cada barra é uma categoria separada." },
        { tipo: "atencao", titulo: "Pizza com muitas fatias", texto: "Evite pizza com **mais de 5 fatias**: ninguém compara ângulos pequenos. Use barras ordenadas." },
        { tipo: "dica", titulo: "Na fábrica", texto: "Para comparar **turnos, máquinas ou fornecedores**, coloque **boxplots lado a lado**. Convence a diretoria em 5 segundos." }
      ],
      questoes: [
        { id: "m13-q06", tipo: "ligar", pergunta: "Ligue a pergunta ao gráfico certo:",
          pares: [["Demanda mês a mês", "Linha"], ["Temperatura × refugo", "Dispersão"], ["Forma dos pesos de 200 pacotes", "Histograma"], ["Comparar turnos mostrando outliers", "Boxplot"]],
          explicacao: "Tempo → linha; relação entre duas variáveis → dispersão; distribuição → histograma; comparação com outliers → boxplot." },
        { id: "m13-q07", tipo: "vf", pergunta: "No histograma, as barras ficam separadas, como no gráfico de barras.",
          correta: false, explicacao: "No histograma elas ficam coladas: o eixo X é uma escala contínua dividida em faixas." },
        { id: "m13-q08", tipo: "multipla", pergunta: "Para mostrar os tipos de defeito do mais frequente para o menos frequente, use:",
          opcoes: ["Pizza com 12 fatias", "Barras ordenadas (Pareto)", "Gráfico de linha", "Gráfico de dispersão"], correta: 1,
          explicacao: "Barras em ordem decrescente = base do Diagrama de Pareto (Módulo 5)." },
        { id: "m13-q09", tipo: "lacuna", pergunta: "Para ver se duas variáveis andam juntas, usamos o gráfico de ___.",
          opcoes: ["dispersão", "pizza", "histograma", "Gantt"], correta: 0,
          explicacao: "Cada ponto é um par (x, y). É a base da correlação e da regressão." }
      ]
    },

    {
      id: "m13-l3",
      titulo: "Média, mediana e moda",
      icone: "🎯",
      blocos: [
        { tipo: "recall", pergunta: "9 funcionários ganham R$ 3 mil e o diretor ganha R$ 50 mil. A média representa bem os funcionários?", resposta: "Não! A média dá R$ 7,7 mil, puxada pelo diretor. A **mediana** (R$ 3 mil) representa muito melhor." },
        { tipo: "formula", titulo: "As três medidas de posição", texto: "**Média:** x̄ = Σx ÷ n (soma tudo, divide pela quantidade)\n**Mediana:** o valor do meio com os dados **ordenados** (n par → média dos dois do meio)\n**Moda:** o valor que **mais aparece**" },
        { tipo: "formula", titulo: "Média ponderada", texto: "**x̄ = Σ(x · peso) ÷ Σ(pesos)**\nEx.: 100 un a R$ 10 + 300 un a R$ 12 → (1.000 + 3.600) ÷ 400 = **R$ 11,50**" },
        { tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"A moda é o que mais aparece\"** (a roupa que todo mundo usa).\n**\"A média se deixa levar pelo exagerado; a mediana fica no meio, parada.\"**" },
        { tipo: "atencao", titulo: "Quando a média engana", texto: "A média é **sensível a outliers**; a mediana não.\nSalários, tempo de atendimento e lead time costumam ter valores extremos → reporte a **mediana** junto." },
        { tipo: "conceito", titulo: "Assimetria", texto: "Média **>** mediana → cauda à **direita** (positiva).\nMédia **<** mediana → cauda à **esquerda** (negativa).\nMédia ≈ mediana → simétrico." }
      ],
      questoes: [
        { id: "m13-q10", tipo: "calculo", pergunta: "Dados: 4, 7, 7, 8, 9, 12, 16. Qual a média?",
          resposta: 9, tolerancia: 0.01, unidade: "",
          resolucao: "Soma = 4 + 7 + 7 + 8 + 9 + 12 + 16 = 63\nn = 7\nMédia = 63 ÷ 7 = 9",
          explicacao: "Média = soma dividida pela quantidade." },
        { id: "m13-q11", tipo: "multipla", pergunta: "Nos dados 4, 7, 7, 8, 9, 12, 16, a mediana e a moda são:",
          opcoes: ["Mediana 8 e moda 7", "Mediana 9 e moda 7", "Mediana 7 e moda 8", "Mediana 8 e moda 16"], correta: 0,
          explicacao: "Com 7 valores ordenados, a mediana é o 4º (8). O 7 aparece duas vezes (moda). Como a média (9) > mediana (8), há cauda à direita." },
        { id: "m13-q12", tipo: "calculo", pergunta: "Tempos de ônibus (min), já ordenados: 52, 55, 56, 57, 58, 59, 60, 61, 62, 90. Qual a mediana?",
          resposta: 58.5, tolerancia: 0.01, unidade: "min",
          resolucao: "n = 10 (par) → média dos dois do meio (5º e 6º)\n(58 + 59) ÷ 2 = 58,5 min",
          explicacao: "A média daria 61 min, puxada pelo dia do temporal (90). A mediana é mais honesta para o dia a dia." },
        { id: "m13-q13", tipo: "caso", contexto: "O RH vai divulgar o salário \"típico\" de um setor com 9 pessoas ganhando R$ 3 mil e 1 diretor ganhando R$ 50 mil.",
          pergunta: "Qual medida representa melhor o salário típico?",
          opcoes: ["A média (R$ 7,7 mil)", "A mediana (R$ 3 mil)", "O salário do diretor", "A amplitude (R$ 47 mil)"], correta: 1,
          explicacao: "Com um valor extremo, a mediana resiste e representa a maioria. Divulgar a média passaria uma imagem falsa." },
        { id: "m13-q14", tipo: "vf", pergunta: "Se a média é maior que a mediana, a distribuição tem cauda à direita (assimetria positiva).",
          correta: true, explicacao: "Valores altos puxam a média para cima, criando a cauda à direita." },
        { id: "m13-q15", tipo: "calculo", pergunta: "Você comprou 100 unidades a R$ 10 e 300 unidades a R$ 12. Qual o custo médio ponderado por unidade (R$)?",
          resposta: 11.5, tolerancia: 0.01, unidade: "R$",
          resolucao: "(100 × 10 + 300 × 12) ÷ (100 + 300)\n= (1.000 + 3.600) ÷ 400\n= 4.600 ÷ 400 = R$ 11,50",
          explicacao: "🟡 A média simples (R$ 11) estaria errada: o lote mais caro é três vezes maior. Esse cálculo aparece no custo médio de estoque (Módulo 7)." }
      ]
    },

    {
      id: "m13-l4",
      titulo: "Quartis, boxplot e outliers",
      icone: "📦",
      blocos: [
        { tipo: "conceito", titulo: "Quartis", texto: "Cortam os dados ordenados em **4 partes** de 25%:\n**Q1** (25% abaixo) · **Q2 = mediana** (50%) · **Q3** (75% abaixo)." },
        { tipo: "formula", titulo: "IQR e outliers (regra de Tukey)", texto: "**IQR = Q3 − Q1** (onde estão os 50% centrais)\n**Outlier:** valor < Q1 − 1,5·IQR **ou** > Q3 + 1,5·IQR" },
        { tipo: "mapa", titulo: "Boxplot dos tempos de ônibus", texto:
          "52 ├──┤56[████│████]61├┤62      ● 90\n" +
          "mín    Q1  Md=58,5  Q3            outlier\n" +
          "       └─ caixa = 50% centrais ─┘\n\n" +
          "Q1 = 56, Q3 = 61 → IQR = 5\n" +
          "Limite sup. = 61 + 1,5 × 5 = 68,5\n" +
          "90 > 68,5 → OUTLIER (dia do temporal)" },
        { tipo: "atencao", titulo: "Métodos diferentes", texto: "Existem vários jeitos de calcular quartis (no Excel, QUARTIL.INC e QUARTIL.EXC dão valores um pouco diferentes). Na prova, use o método do professor. Aqui usamos \"mediana de cada metade\"." },
        { tipo: "dica", titulo: "Outlier não é lixo", texto: "Antes de apagar um outlier, **investigue**: pode ser erro de medição… ou o sinal de um problema real (máquina quebrando, fornecedor novo)." }
      ],
      questoes: [
        { id: "m13-q16", tipo: "calculo", pergunta: "Q1 = 56 e Q3 = 61. Acima de qual valor um dado é considerado outlier (regra 1,5 × IQR)?",
          resposta: 68.5, tolerancia: 0.01, unidade: "",
          resolucao: "IQR = Q3 − Q1 = 61 − 56 = 5\nLimite superior = Q3 + 1,5 × IQR = 61 + 7,5 = 68,5",
          explicacao: "Tudo acima de 68,5 (ou abaixo de 56 − 7,5 = 48,5) é outlier." },
        { id: "m13-q17", tipo: "ordenar", pergunta: "Ordene os 5 números do boxplot, do menor para o maior:",
          itens: ["Mínimo", "Q1", "Mediana (Q2)", "Q3", "Máximo"],
          explicacao: "O boxplot resume os dados com esses 5 números e ainda marca os outliers como pontos." },
        { id: "m13-q18", tipo: "multipla", pergunta: "A \"caixa\" do boxplot representa:",
          opcoes: ["Todos os dados", "Os 50% centrais (de Q1 a Q3)", "Somente os outliers", "A média ± 1 desvio-padrão"], correta: 1,
          explicacao: "A caixa vai de Q1 a Q3 (o IQR), com uma linha na mediana." },
        { id: "m13-q19", tipo: "vf", pergunta: "A mediana é o mesmo que o segundo quartil (Q2).",
          correta: true, explicacao: "Q2 deixa 50% dos dados abaixo: é exatamente a mediana." }
      ]
    },

    {
      id: "m13-l5",
      titulo: "Desvio-padrão e CV",
      icone: "↔️",
      blocos: [
        { tipo: "recall", pergunta: "Duas máquinas enchem pacotes de 500 g com a MESMA média. Como saber qual é a melhor?", resposta: "Olhando a **variação** (desvio-padrão, CV, boxplot). Média igual não quer dizer qualidade igual." },
        { tipo: "formula", titulo: "Medidas de dispersão", texto: "**Amplitude:** A = máximo − mínimo\n**Variância amostral:** s² = Σ(x − x̄)² ÷ (n − 1)\n**Desvio-padrão:** s = √s² (mesma unidade dos dados)" },
        { tipo: "atencao", titulo: "Por que n − 1?", texto: "A amostra tende a **subestimar** a variação real; dividir por n − 1 corrige isso.\nPopulação inteira → divide por N.\nExcel: **DESVPAD.A** (amostra) × **DESVPAD.P** (população)." },
        { tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"A amostra é humilde: divide por um a menos.\"**" },
        { tipo: "formula", titulo: "Coeficiente de variação", texto: "**CV = s ÷ x̄ × 100%**\nCompara variações com médias ou unidades diferentes.\nReferência prática: < 15% baixa · 15–30% média · > 30% alta." },
        { tipo: "conexao", titulo: "Conexão", texto: "No Módulo 7 (Logística), o CV da demanda classifica itens na análise **XYZ**: estáveis × erráticos." }
      ],
      questoes: [
        { id: "m13-q20", tipo: "calculo", pergunta: "Tempos de setup (min): 22, 25, 19, 30, 24. Qual o desvio-padrão amostral? (média = 24)",
          resposta: 4.06, tolerancia: 0.02, unidade: "min",
          resolucao: "Desvios: −2, +1, −5, +6, 0\nQuadrados: 4 + 1 + 25 + 36 + 0 = 66\ns² = 66 ÷ (5 − 1) = 16,5\ns = √16,5 ≈ 4,06 min",
          explicacao: "Roteiro: média → desvios → quadrados → soma → divide por n − 1 → raiz." },
        { id: "m13-q21", tipo: "calculo", pergunta: "Média do setup = 24 min e desvio-padrão = 4,06 min. Qual o CV (%)?",
          resposta: 16.9, tolerancia: 0.2, unidade: "%",
          resolucao: "CV = 4,06 ÷ 24 × 100 ≈ 16,9%",
          explicacao: "Dispersão média: vale padronizar o setup (SMED, Módulo 6)." },
        { id: "m13-q22", tipo: "multipla", pergunta: "Por que se divide por n − 1 na variância da amostra?",
          opcoes: ["Porque é mais fácil de calcular", "Para corrigir a tendência da amostra de subestimar a variação", "Para eliminar os outliers", "Porque o Excel exige"], correta: 1,
          explicacao: "É a correção de Bessel: deixa a estimativa da variância sem viés." },
        { id: "m13-q23", tipo: "caso", contexto: "Tempo de ciclo: média 50 s, desvio 5 s. Peso do produto: média 2.000 g, desvio 40 g.",
          pergunta: "O gerente quer saber qual processo é RELATIVAMENTE mais estável.",
          opcoes: ["O ciclo, porque 5 é menor que 40", "O peso, porque o CV é 2% contra 10% do ciclo", "Não dá para comparar unidades diferentes", "O ciclo, porque tem CV maior"], correta: 1,
          explicacao: "CV compara o que não se compara: ciclo = 5 ÷ 50 = 10%; peso = 40 ÷ 2.000 = 2%. O peso varia menos em termos relativos." },
        { id: "m13-q24", tipo: "lacuna", pergunta: "No Excel, o desvio-padrão de uma AMOSTRA é calculado com ___.",
          opcoes: ["DESVPAD.A", "DESVPAD.P", "MÉDIA", "CORREL"], correta: 0,
          explicacao: "DESVPAD.A divide por n − 1 (amostra). DESVPAD.P divide por N (população inteira)." }
      ]
    },

    {
      id: "m13-l6",
      titulo: "Caso: as envasadoras de café",
      icone: "☕",
      blocos: [
        { tipo: "bobo", titulo: "O tempo real do seu ônibus", texto: "10 viagens: média **61 min**, mediana **58,5 min**, desvio **≈ 10,6 min**, e um outlier (90 min, dia do temporal).\nPara o dia a dia, a mediana é mais honesta. Para **não perder a prova**, saia com folga de ~1 desvio-padrão (≈ 11 min).\nÉ a lógica do **estoque de segurança** (M7) e da **folga no cronograma** (M2)." },
        { tipo: "serio", titulo: "Café Serra: o cenário", texto: "Especificação do pacote: **500 g ± 10 g** (490 a 510 g).\n**Máquina A:** 498, 502, 500, 499, 501 → média 500, s = **1,58 g**\n**Máquina B:** 490, 510, 495, 505, 500 → média 500, s = **7,91 g**" },
        { tipo: "serio", titulo: "A análise", texto: "1. As médias são **iguais**: olhando só a média, \"está tudo certo\".\n2. A dispersão de B é **5 vezes maior**: ela trabalha encostada nos limites.\n3. B gera pacotes fora da especificação (reclamação ou café de graça).\n4. Ação: investigar B com **Ishikawa** (Módulo 5).\n5. Mostrar **boxplots lado a lado** à diretoria." },
        { tipo: "dica", titulo: "Regra de ouro", texto: "**Nunca decida só pela média.** Pergunte sempre: \"e a variação?\"" }
      ],
      questoes: [
        { id: "m13-q25", tipo: "calculo", pergunta: "Máquina A: 498, 502, 500, 499, 501 g (média 500). Qual o desvio-padrão amostral (g)?",
          resposta: 1.58, tolerancia: 0.02, unidade: "g",
          resolucao: "Desvios: −2, +2, 0, −1, +1\nQuadrados: 4 + 4 + 0 + 1 + 1 = 10\ns² = 10 ÷ 4 = 2,5\ns = √2,5 ≈ 1,58 g",
          explicacao: "Pouca variação: os pacotes ficam bem longe dos limites de 490 e 510 g." },
        { id: "m13-q26", tipo: "caso", contexto: "As máquinas A e B têm média de 500 g. Desvios: A = 1,58 g; B = 7,91 g. Especificação: 490 a 510 g.",
          pergunta: "Qual a conclusão correta?",
          opcoes: ["São equivalentes, pois as médias são iguais", "B vai gerar muito mais pacotes fora da especificação", "A é pior, pois varia menos", "Basta aumentar a tolerância para ±20 g"], correta: 1,
          explicacao: "Com desvio 5× maior, B trabalha encostada nos limites: ≈ 21% dos pacotes ficam fora (você calcula isso na lição da Normal). Mudar a especificação não resolve o problema do cliente." },
        { id: "m13-q27", tipo: "ordenar", pergunta: "Ordene os passos da análise das envasadoras:",
          itens: ["Coletar amostras aleatórias de cada máquina", "Calcular média e desvio-padrão", "Comparar a variação com a especificação", "Investigar as causas da variação de B (Ishikawa)", "Mostrar boxplots lado a lado à diretoria"],
          explicacao: "Coletar → calcular → comparar → investigar a causa → comunicar." },
        { id: "m13-q28", tipo: "vf", pergunta: "Olhando só a média, as duas máquinas parecem iguais.",
          correta: true, explicacao: "Exatamente por isso a média sozinha é perigosa. A diferença está na dispersão." }
      ]
    },

    /* ================= PARTE 2 — CONCLUIR ================= */
    {
      id: "m13-l7",
      titulo: "Probabilidade",
      icone: "🎲",
      blocos: [
        { tipo: "recall", pergunta: "Uma linha tem 3 máquinas em série, cada uma com 95% de chance de funcionar o dia todo. A linha funciona com 95%?", resposta: "Não! 0,95 × 0,95 × 0,95 = **85,7%**. Cada etapa em série \"come\" um pouco da confiabilidade." },
        { tipo: "formula", titulo: "Regras básicas", texto: "**P(A)** = favoráveis ÷ possíveis (de 0 a 1)\n**Complemento:** P(não A) = 1 − P(A)\n**OU:** P(A ou B) = P(A) + P(B) − P(A e B)\n**E (independentes):** P(A e B) = P(A) × P(B)" },
        { tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"OU soma, E multiplica.\"**\n**\"Pelo menos um = um menos nenhum.\"**" },
        { tipo: "formula", titulo: "Binomial", texto: "n tentativas, probabilidade p de \"sucesso\" (ex.: peça defeituosa).\n**P(X = k) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ** · média = n·p\nEx.: 2% de defeito, amostra de 10 → P(nenhuma) = 0,98¹⁰ = **81,7%**" },
        { tipo: "formula", titulo: "Poisson", texto: "Eventos num intervalo de tempo, com taxa média λ.\n**P(X = k) = e^(−λ) · λᵏ ÷ k!** · média = variância = λ\nEx.: 3 chamadas/hora → P(nenhuma) = e⁻³ ≈ **5%**" },
        { tipo: "conexao", titulo: "Conexão", texto: "Confiabilidade em série → TPM e OEE (Módulo 6). Poisson → chegadas em filas (Módulo 9)." }
      ],
      questoes: [
        { id: "m13-q29", tipo: "calculo", pergunta: "3 máquinas em série, cada uma com confiabilidade 0,95 (independentes). Qual a confiabilidade da linha (%)?",
          resposta: 85.7, tolerancia: 0.1, unidade: "%",
          resolucao: "Regra do E: 0,95 × 0,95 × 0,95 = 0,857 → 85,7%",
          explicacao: "Quanto mais etapas em série, menor a confiabilidade total." },
        { id: "m13-q30", tipo: "calculo", pergunta: "4 estações em série, cada uma com confiabilidade 0,97. Qual a probabilidade de PELO MENOS UMA falhar (%)?",
          resposta: 11.5, tolerancia: 0.1, unidade: "%",
          resolucao: "P(todas funcionam) = 0,97⁴ = 0,8853\nP(pelo menos uma falha) = 1 − 0,8853 = 0,1147 → 11,5%",
          explicacao: "\"Pelo menos um = um menos nenhum\"." },
        { id: "m13-q31", tipo: "calculo", pergunta: "Taxa de defeito de 5%. Numa amostra de 5 peças, qual a probabilidade de NENHUMA ser defeituosa (%)?",
          resposta: 77.4, tolerancia: 0.1, unidade: "%",
          resolucao: "Binomial com k = 0: 0,95⁵ = 0,7738 → 77,4%",
          explicacao: "Logo, em 22,6% das amostras aparece pelo menos uma defeituosa." },
        { id: "m13-q32", tipo: "ligar", pergunta: "Ligue a situação à distribuição:",
          pares: [["Nº de defeituosas numa amostra de 20", "Binomial"], ["Nº de chamadas de manutenção por hora", "Poisson"], ["Peso de pacotes de café", "Normal"]],
          explicacao: "Binomial: contagem em n tentativas. Poisson: eventos no tempo. Normal: medições contínuas." },
        { id: "m13-q33", tipo: "vf", pergunta: "Se A e B são independentes, P(A e B) = P(A) + P(B).",
          correta: false, explicacao: "E multiplica: P(A e B) = P(A) × P(B). A soma é da regra do OU." }
      ]
    },

    {
      id: "m13-l8",
      titulo: "Distribuição normal e escore Z",
      icone: "🔔",
      blocos: [
        { tipo: "conceito", titulo: "A curva de sino", texto: "Aparece quando muitas pequenas causas somam efeitos (peso, dimensão, tempo).\n**Simétrica**, média = mediana = moda, definida por **μ** (centro) e **σ** (largura)." },
        { tipo: "mapa", titulo: "Regra empírica", texto:
          "            ▁▂▄▆█▆▄▂▁\n" +
          "        ▁▃▆█████████▆▃▁\n" +
          "   ▁▂▄███████████████████▄▂▁\n" +
          "──┼────┼────┼────┼────┼────┼────┼──\n" +
          " -3σ  -2σ  -1σ   μ   +1σ  +2σ  +3σ\n" +
          "            |← 68% →|\n" +
          "       |←──── 95% ────→|\n" +
          "  |←────── 99,7% ──────→|" },
        { tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"Um, dois, três: 68, 95, 99,7.\"**\n**\"Noventa, noventa e cinco, noventa e nove: 1,645 · 1,96 · 2,58.\"**" },
        { tipo: "formula", titulo: "Escore Z", texto: "**Z = (x − μ) ÷ σ**\nZ diz **quantos desvios** o valor está longe da média. Com ele, uma única tabela serve para qualquer processo.\n\"Z é a distância em desvios.\"" },
        { tipo: "formula", titulo: "Tabela Z para decorar", texto: "Cauda acima de Z:\nZ = 1 → 15,87%\nZ = 1,645 → 5%\nZ = 1,96 → 2,5%\nZ = 2 → **2,28%**\nZ = 2,5 → **0,62%**\nZ = 3 → **0,135%**\nPor simetria, a cauda abaixo de −Z é igual." },
        { tipo: "serio", titulo: "% fora da especificação", texto: "1. Desenhe a curva e marque os limites.\n2. Calcule o **Z** de cada limite.\n3. Veja na tabela a área **fora** de cada limite.\n4. **Some** as caudas e multiplique pela produção.\nEx.: rolamento μ = 20,00; σ = 0,02; limites 19,95–20,05 → Z = ±2,5 → 0,62% + 0,62% = **1,24%**." },
        { tipo: "bobo", titulo: "A pizzaria \"Chega Logo\"", texto: "Entrega em 40 min em média, σ = 5 min. Passou de 50 min, é grátis.\nZ = (50 − 40) ÷ 5 = **2** → **2,28%** das pizzas saem de graça (≈ 23 em cada 1.000)." }
      ],
      questoes: [
        { id: "m13-q34", tipo: "multipla", pergunta: "Numa distribuição normal, cerca de 95% dos dados ficam entre:",
          opcoes: ["μ ± 1σ", "μ ± 2σ", "μ ± 3σ", "μ ± 6σ"], correta: 1,
          explicacao: "68% em ±1σ, 95% em ±2σ (exato: 1,96σ), 99,7% em ±3σ." },
        { id: "m13-q35", tipo: "calculo", pergunta: "Pizzaria: μ = 40 min, σ = 5 min. Qual o Z de uma entrega de 50 min?",
          resposta: 2, tolerancia: 0.01, unidade: "",
          resolucao: "Z = (x − μ) ÷ σ = (50 − 40) ÷ 5 = 2",
          explicacao: "50 min está 2 desvios-padrão acima da média." },
        { id: "m13-q36", tipo: "calculo", pergunta: "Tempo de montagem normal com μ = 12 min e σ = 1,5 min. Qual a % de montagens acima de 15 min?",
          resposta: 2.28, tolerancia: 0.05, unidade: "%",
          resolucao: "Z = (15 − 12) ÷ 1,5 = 2\nP(Z > 2) = 2,28%",
          explicacao: "Z = 2 é um dos valores para decorar: cauda de 2,28%." },
        { id: "m13-q37", tipo: "calculo", pergunta: "Rolamento: μ = 20,00 mm, σ = 0,02 mm, especificação 19,95 a 20,05 mm. Qual a % total fora da especificação?",
          resposta: 1.24, tolerancia: 0.05, unidade: "%",
          resolucao: "Z(sup) = (20,05 − 20,00) ÷ 0,02 = +2,5 → 0,62%\nZ(inf) = (19,95 − 20,00) ÷ 0,02 = −2,5 → 0,62%\nTotal = 1,24% (124 peças a cada 10.000)",
          explicacao: "Sempre some as DUAS caudas quando há limite inferior e superior." },
        { id: "m13-q38", tipo: "ordenar", pergunta: "Ordene o roteiro para calcular a % fora da especificação:",
          itens: ["Desenhar a curva e marcar os limites", "Calcular o Z de cada limite", "Achar na tabela a área fora de cada limite", "Somar as caudas e multiplicar pela produção"],
          explicacao: "Desenhar evita o erro mais comum: esquecer uma das caudas." },
        { id: "m13-q39", tipo: "lacuna", pergunta: "Na fórmula do escore Z, Z = (x − μ) ÷ ___.",
          opcoes: ["σ", "n", "μ", "√n"], correta: 0,
          explicacao: "Divide-se pelo desvio-padrão: o resultado é a distância em \"número de desvios\"." }
      ]
    },

    {
      id: "m13-l9",
      titulo: "Amostragem e intervalo de confiança",
      icone: "📏",
      blocos: [
        { tipo: "conceito", titulo: "Teorema Central do Limite", texto: "As **médias** de muitas amostras de tamanho n:\n• seguem aproximadamente uma **normal** (para n ≥ 30), mesmo que os dados não sejam normais;\n• têm média **μ**;\n• têm desvio **σ ÷ √n** (o **erro padrão**)." },
        { tipo: "formula", titulo: "Erro padrão", texto: "**EP = σ ÷ √n** (ou s ÷ √n)\n\"Médias tremem menos.\"\nPara reduzir o erro **pela metade**, é preciso **4 vezes** mais amostra." },
        { tipo: "formula", titulo: "Intervalo de confiança (IC)", texto: "**IC = x̄ ± z · s ÷ √n**\nz = 1,645 (90%) · **1,96 (95%)** · 2,58 (99%)\nEx.: n = 36, x̄ = 48 s, s = 6 s → EP = 1 → IC95% = **[46,04 ; 49,96] s**" },
        { tipo: "atencao", titulo: "Leitura correta do IC", texto: "\"Estamos 95% confiantes de que a **MÉDIA do processo** está no intervalo.\"\n**Não** quer dizer que 95% das peças individuais estão ali!" },
        { tipo: "atencao", titulo: "Amostra pequena", texto: "Com n < 30 e σ desconhecido, use o **t de Student** no lugar do z (intervalo mais largo). Ex.: n = 25, 95% → t = 2,064." },
        { tipo: "formula", titulo: "Tamanho de amostra", texto: "**n = (z · σ ÷ E)²** (arredonde **para cima**)\nEx.: σ ≈ 6 s, erro de ±1 s, 95% → (1,96 × 6 ÷ 1)² = 138,3 → **139 medições**." },
        { tipo: "conexao", titulo: "Conexão", texto: "É a mesma lógica do **número de ciclos na cronoanálise** (Módulo 4) e dos subgrupos do CEP (Módulo 5)." }
      ],
      questoes: [
        { id: "m13-q40", tipo: "calculo", pergunta: "σ = 6 s e n = 36 medições. Qual o erro padrão da média (s)?",
          resposta: 1, tolerancia: 0.01, unidade: "s",
          resolucao: "EP = σ ÷ √n = 6 ÷ √36 = 6 ÷ 6 = 1 s",
          explicacao: "A média de 36 medições varia 6 vezes menos que uma medição isolada." },
        { id: "m13-q41", tipo: "calculo", pergunta: "49 pedidos: lead time médio de 6 dias, s = 2,1 dias. Qual o LIMITE SUPERIOR do IC 95% para a média (dias)?",
          resposta: 6.59, tolerancia: 0.01, unidade: "dias",
          resolucao: "EP = 2,1 ÷ √49 = 2,1 ÷ 7 = 0,3\nMargem = 1,96 × 0,3 = 0,588\nIC95% = 6 ± 0,588 = [5,41 ; 6,59]",
          explicacao: "O limite inferior é 5,41 dias. O intervalo fala do lead time MÉDIO, não de cada pedido." },
        { id: "m13-q42", tipo: "multipla", pergunta: "O IC 95% do tempo de ciclo médio é [46,04 ; 49,96] s. A interpretação correta é:",
          opcoes: ["95% dos ciclos individuais duram entre 46 e 50 s", "Temos 95% de confiança de que a média do processo está entre 46,04 e 49,96 s", "A média é exatamente 48 s", "5% dos ciclos têm defeito"], correta: 1,
          explicacao: "O IC é sobre a MÉDIA. Ciclos individuais variam muito mais (±1,96 × 6 ≈ ±12 s)." },
        { id: "m13-q43", tipo: "calculo", pergunta: "Quantas medições são necessárias para estimar o tempo médio com erro máximo de ±0,5 s, 95% de confiança, e σ ≈ 3 s?",
          resposta: 139, tolerancia: 0, unidade: "medições",
          resolucao: "n = (z · σ ÷ E)² = (1,96 × 3 ÷ 0,5)² = (11,76)² = 138,3\nArredonda para CIMA → 139",
          explicacao: "Arredondar para baixo daria um erro um pouco maior que o desejado." },
        { id: "m13-q44", tipo: "vf", pergunta: "Para reduzir o erro padrão pela metade, basta dobrar o tamanho da amostra.",
          correta: false, explicacao: "O erro cai com a RAIZ de n: para reduzir pela metade, é preciso 4 vezes mais amostra." }
      ]
    },

    {
      id: "m13-l10",
      titulo: "Teste de hipóteses",
      icone: "⚖️",
      blocos: [
        { tipo: "conceito", titulo: "Os 5 passos", texto: "1. **H0 (nula):** nada mudou (ex.: μ = 500 g).\n2. **H1 (alternativa):** o que você quer provar (μ ≠ 500 g).\n3. Escolha **α** (normalmente 5%).\n4. Calcule **t = (x̄ − μ₀) ÷ (s ÷ √n)** e o **p-valor**.\n5. **p-valor < α → rejeita H0.**" },
        { tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"p baixo, H0 pro buraco.\"**" },
        { tipo: "conceito", titulo: "Erros tipo I e tipo II", texto: "**Tipo I (α):** rejeitar H0 verdadeira → \"alarme falso\" (parar a linha à toa).\n**Tipo II (β):** não rejeitar H0 falsa → \"deixar passar\" (processo desregulado vai para o cliente).\nPoder do teste = 1 − β." },
        { tipo: "mnemonico", titulo: "O lobo", texto: "**\"Tipo I: grito sem lobo. Tipo II: lobo sem grito.\"**" },
        { tipo: "atencao", titulo: "Não rejeitar ≠ provar", texto: "\"Não rejeitar H0\" **não prova** que H0 é verdadeira. Só diz que não há evidência suficiente contra ela (às vezes falta amostra)." },
        { tipo: "serio", titulo: "Exemplo", texto: "Fornecedor promete 500 g. Amostra: n = 25, x̄ = 497 g, s = 5 g.\nt = (497 − 500) ÷ (5 ÷ 5) = **−3**\n|−3| > 2,064 (t crítico, 95%) → **rejeita H0**: o pacote está vindo mais leve." }
      ],
      questoes: [
        { id: "m13-q45", tipo: "multipla", pergunta: "O teste deu p-valor = 0,01, com α = 0,05. Qual a decisão?",
          opcoes: ["Rejeitar H0", "Não rejeitar H0", "Aumentar α para 0,10", "Refazer sem H0"], correta: 0,
          explicacao: "p (0,01) < α (0,05): \"p baixo, H0 pro buraco\". A diferença é estatisticamente significativa." },
        { id: "m13-q46", tipo: "ligar", pergunta: "Ligue cada situação ao conceito:",
          pares: [["Parar a linha à toa (processo estava ok)", "Erro tipo I"], ["Deixar passar um processo desregulado", "Erro tipo II"], ["Probabilidade do alarme falso", "α"], ["Probabilidade de deixar passar", "β"]],
          explicacao: "Tipo I: grito sem lobo (α). Tipo II: lobo sem grito (β)." },
        { id: "m13-q47", tipo: "calculo", pergunta: "Fornecedor promete 500 g. Amostra: n = 25, x̄ = 497 g, s = 5 g. Qual a estatística t?",
          resposta: -3, tolerancia: 0.01, unidade: "",
          resolucao: "t = (x̄ − μ₀) ÷ (s ÷ √n)\n= (497 − 500) ÷ (5 ÷ √25)\n= −3 ÷ 1 = −3",
          explicacao: "|−3| > 2,064 (t crítico para n = 25 e 95%): rejeita H0. O pacote está mais leve que o prometido." },
        { id: "m13-q48", tipo: "vf", pergunta: "Não rejeitar H0 prova que H0 é verdadeira.",
          correta: false, explicacao: "Só significa que não houve evidência suficiente contra H0. Com mais dados, a conclusão pode mudar." },
        { id: "m13-q49", tipo: "lacuna", pergunta: "H0, a hipótese ___, afirma que nada mudou.",
          opcoes: ["nula", "alternativa", "principal", "final"], correta: 0,
          explicacao: "H0 = hipótese nula (\"não há diferença\"). H1 = hipótese alternativa (o que se quer provar)." }
      ]
    },

    {
      id: "m13-l11",
      titulo: "Correlação e regressão",
      icone: "🔗",
      blocos: [
        { tipo: "recall", pergunta: "Quanto mais sorvete se vende, mais pessoas se afogam. O sorvete causa afogamento?", resposta: "Não! Os dois aumentam no **verão** (variável oculta: calor). Correlação não é causalidade." },
        { tipo: "formula", titulo: "Correlação de Pearson (r)", texto: "Mede a força da relação **linear**, de −1 a +1.\n**r = Sxy ÷ √(Sxx · Syy)**\n|r| > 0,7 forte · 0,3 a 0,7 moderada · < 0,3 fraca.\nExcel: **CORREL**." },
        { tipo: "atencao", titulo: "Correlação ≠ causa", texto: "\"O refugo sobe quando o João trabalha.\" Pode ser o João… ou o turno da noite, com matéria-prima de outro fornecedor.\nCorrelação é **pista** para investigar (Ishikawa, 5 Porquês), não conclusão.\n🔊 **\"Sorvete não afoga ninguém.\"**" },
        { tipo: "formula", titulo: "Regressão linear simples", texto: "**ŷ = a + b·x**\n**b = Sxy ÷ Sxx** · **a = ȳ − b·x̄**\n**R² = r²**: fração da variação de y explicada por x." },
        { tipo: "atencao", titulo: "Cuidado ao extrapolar", texto: "Não use a reta muito fora da faixa dos dados. Ex.: uma reta de treinamento × erros pode prever \"−0,6 erros\" para 12 horas, o que é impossível." },
        { tipo: "serio", titulo: "Custo × volume", texto: "Produção (mil peças): 2, 4, 6, 8, 10\nCusto (mil R$): 15, 19, 26, 29, 36\nSxy = 104; Sxx = 40 → b = **2,6**; a = 25 − 2,6 × 6 = **9,4**\n**ŷ = 9,4 + 2,6x** → custo fixo ≈ R$ 9,4 mil; variável ≈ R$ 2,60/peça\nr = 0,993 · R² = 0,987" },
        { tipo: "conexao", titulo: "Conexão", texto: "Regressão com o tempo no eixo x = **previsão de demanda com tendência** (Módulo 3). Com volume no eixo x = separar **custo fixo e variável** (Módulo 8)." }
      ],
      questoes: [
        { id: "m13-q50", tipo: "multipla", pergunta: "Um coeficiente de correlação r = −0,9 indica:",
          opcoes: ["Relação fraca", "Relação forte e negativa", "Ausência de relação", "Que x causa y"], correta: 1,
          explicacao: "|r| = 0,9 é forte; o sinal negativo diz que, quando uma sobe, a outra desce. E correlação não prova causa!" },
        { id: "m13-q51", tipo: "calculo", pergunta: "Na regressão custo × volume, Sxy = 104 e Sxx = 40. Qual a inclinação b?",
          resposta: 2.6, tolerancia: 0.01, unidade: "",
          resolucao: "b = Sxy ÷ Sxx = 104 ÷ 40 = 2,6",
          explicacao: "Cada mil peças a mais custa R$ 2,6 mil a mais: é o custo variável (R$ 2,60 por peça)." },
        { id: "m13-q52", tipo: "calculo", pergunta: "A reta é ŷ = 9,4 + 2,6x (custo em mil R$, x em mil peças). Qual o custo previsto para 12 mil peças (mil R$)?",
          resposta: 40.6, tolerancia: 0.01, unidade: "mil R$",
          resolucao: "ŷ = 9,4 + 2,6 × 12 = 9,4 + 31,2 = 40,6 mil R$",
          explicacao: "12 está pouco acima da faixa dos dados (2 a 10): extrapolação leve, aceitável com cautela." },
        { id: "m13-q53", tipo: "caso", contexto: "O refugo é maior sempre que o operador João trabalha. O João trabalha só no turno da noite, quando chega o lote de outro fornecedor.",
          pergunta: "Qual a melhor atitude?",
          opcoes: ["Demitir o João", "Investigar variáveis ocultas (turno, lote, máquina) antes de concluir", "Ignorar, porque correlação não significa nada", "Trocar o gráfico de dispersão por pizza"], correta: 1,
          explicacao: "Correlação é pista, não prova. Pode ser o fornecedor, a temperatura da noite etc. Use Ishikawa e, se possível, um teste controlado." },
        { id: "m13-q54", tipo: "calculo", pergunta: "A correlação entre duas variáveis é r = 0,9. Qual o R² em %?",
          resposta: 81, tolerancia: 0.1, unidade: "%",
          resolucao: "R² = r² = 0,9² = 0,81 → 81%",
          explicacao: "81% da variação de y é explicada por x; 19% vem de outras causas." }
      ]
    },

    {
      id: "m13-l12",
      titulo: "👾 Chefão do Módulo 13",
      icone: "👾",
      blocos: [
        { tipo: "serio", titulo: "Parafusos Serra", texto: "O cliente ameaçou trocar de fornecedor. Especificação: **50,0 ± 0,3 mm** (49,7 a 50,3).\nAmostra de 30 parafusos: **x̄ = 50,1 mm**, **s = 0,1 mm** (normal).\nProdução: **200.000/mês**. Cada defeituoso custa **R$ 0,50**.\nO supervisor quer resolver com **inspeção 100%**." },
        { tipo: "conceito", titulo: "✅ Você só avança se souber…", texto: "• População × amostra; tipos de variável\n• Escolher o gráfico certo\n• Média, mediana, moda, quartis e outliers\n• Desvio-padrão (n − 1) e CV\n• OU soma, E multiplica; Binomial e Poisson\n• Regra 68-95-99,7 e o escore Z\n• % fora da especificação\n• Erro padrão, IC e tamanho de amostra\n• H0/H1, p-valor, erros I e II\n• r, R² e regressão, sem confundir com causa" },
        { tipo: "dica", titulo: "Estratégia", texto: "Esta lição mistura **Estatística com o Módulo 1** (intercalação). Se errar, a questão volta na revisão amanhã." }
      ],
      questoes: [
        { id: "m13-q55", tipo: "calculo", pergunta: "Parafusos: x̄ = 50,1 mm, s = 0,1 mm, LSE = 50,3 mm. Qual a % acima do limite superior?",
          resposta: 2.28, tolerancia: 0.05, unidade: "%",
          resolucao: "Z = (50,3 − 50,1) ÷ 0,1 = 2\nP(Z > 2) = 2,28%\n(Abaixo do LIE: Z = −4 → ≈ 0,003%, desprezível)",
          explicacao: "O processo está descentralizado para cima: quase todo o defeito vem do limite superior." },
        { id: "m13-q56", tipo: "calculo", pergunta: "Com 2,28% de defeituosos e 200.000 parafusos por mês, quantos defeituosos saem por mês?",
          resposta: 4560, tolerancia: 15, unidade: "parafusos",
          resolucao: "200.000 × 0,0228 = 4.560 parafusos/mês\nCusto: 4.560 × R$ 0,50 = R$ 2.280/mês",
          explicacao: "Transformar % em quantidade e em R$ é o que convence a diretoria." },
        { id: "m13-q57", tipo: "calculo", pergunta: "Se o processo for recentralizado em 50,0 mm (mesmo s = 0,1), qual a % total fora de 49,7–50,3 mm?",
          resposta: 0.27, tolerancia: 0.02, unidade: "%",
          resolucao: "Z = ±0,3 ÷ 0,1 = ±3\nCada cauda: 0,135% → total 0,27%\n540 defeituosos/mês → R$ 270 (economia de R$ 2.010/mês)",
          explicacao: "Centralizar a média é, muitas vezes, a melhoria mais barata que existe." },
        { id: "m13-q58", tipo: "caso", contexto: "O supervisor dos Parafusos Serra propõe inspecionar 100% dos parafusos no final da linha.",
          pergunta: "Qual a visão de engenharia de produção sobre isso?",
          opcoes: ["Resolve de vez, pois nenhum defeito chega ao cliente", "Não ataca a causa: é melhor centralizar o processo e controlar a variação com CEP", "Basta inspecionar metade dos parafusos", "O problema é do cliente, que é exigente demais"], correta: 1,
          explicacao: "Inspeção só separa o defeito já produzido, custa caro e falha por fadiga (erro tipo II). Qualidade se constrói no processo (Deming)." },
        { id: "m13-q59", tipo: "multipla", pergunta: "(M1 + M13) O objetivo de desempenho CONFIABILIDADE (entregar no prazo prometido) depende mais de:",
          opcoes: ["A média do lead time", "A variação do lead time", "A moda do preço", "O número de fornecedores"], correta: 1,
          explicacao: "Com pouca variação, dá para prometer um prazo e cumprir. Com muita variação, qualquer promessa vira aposta." },
        { id: "m13-q60", tipo: "calculo", pergunta: "(M1 + M13) A produtividade de uma equipe tem média 50 peças/h e s = 5. Num dia foram 38 peças/h. Qual o Z?",
          resposta: -2.4, tolerancia: 0.01, unidade: "",
          resolucao: "Z = (38 − 50) ÷ 5 = −12 ÷ 5 = −2,4",
          explicacao: "|Z| > 2 é raro (≈ 0,8% abaixo): não foi um dia normal. Investigue a causa especial (máquina parada? falta de material?). É a lógica do CEP." },
        { id: "m13-q61", tipo: "vf", pergunta: "(M1 + M13) A Estatística é mais usada na Engenharia da Qualidade, mas também aparece em Operações, Logística e Pesquisa Operacional.",
          correta: true, explicacao: "Previsão de demanda (Operações), estoque de segurança (Logística), simulação e filas (Pesquisa Operacional)…" }
      ]
    }
  ],

  flashcards: [
    { id: "m13-f01", frente: "População × Amostra", verso: "População = o conjunto inteiro. Amostra = a parte que você mede (aleatória e representativa)." },
    { id: "m13-f02", frente: "Parâmetro × Estatística", verso: "Parâmetro descreve a população (μ, σ). Estatística é calculada na amostra (x̄, s)." },
    { id: "m13-f03", frente: "Tipos de variável (NO-OR / DI-CO)", verso: "Qualitativa nominal e ordinal; quantitativa discreta (conta) e contínua (mede)." },
    { id: "m13-f04", frente: "Histograma × gráfico de barras", verso: "Histograma: barras coladas, eixo contínuo (faixas). Barras: categorias separadas." },
    { id: "m13-f05", frente: "Média, mediana e moda", verso: "Média = soma ÷ n. Mediana = valor do meio (ordenado). Moda = o que mais aparece." },
    { id: "m13-f06", frente: "Quando usar a mediana?", verso: "Com outliers ou dados assimétricos (salários, lead time, atendimento)." },
    { id: "m13-f07", frente: "Média > mediana indica…", verso: "Assimetria positiva (cauda à direita)." },
    { id: "m13-f08", frente: "IQR e regra do outlier", verso: "IQR = Q3 − Q1. Outlier: < Q1 − 1,5·IQR ou > Q3 + 1,5·IQR." },
    { id: "m13-f09", frente: "Os 5 números do boxplot", verso: "Mínimo, Q1, mediana, Q3, máximo (+ outliers como pontos)." },
    { id: "m13-f10", frente: "Variância e desvio-padrão amostral", verso: "s² = Σ(x − x̄)² ÷ (n − 1); s = √s². \"A amostra é humilde: divide por um a menos.\"" },
    { id: "m13-f11", frente: "Coeficiente de variação", verso: "CV = s ÷ x̄ × 100%. Compara variações com médias/unidades diferentes." },
    { id: "m13-f12", frente: "Regras do OU e do E", verso: "OU soma: P(A)+P(B)−P(A e B). E multiplica (independentes): P(A)×P(B)." },
    { id: "m13-f13", frente: "\"Pelo menos um\"", verso: "P(pelo menos 1) = 1 − P(nenhum)." },
    { id: "m13-f14", frente: "Binomial × Poisson", verso: "Binomial: nº de sucessos em n tentativas (defeituosas). Poisson: nº de eventos por tempo (chegadas)." },
    { id: "m13-f15", frente: "Regra empírica da Normal", verso: "68% em ±1σ; 95% em ±2σ; 99,7% em ±3σ." },
    { id: "m13-f16", frente: "Escore Z", verso: "Z = (x − μ) ÷ σ: quantos desvios o valor está da média." },
    { id: "m13-f17", frente: "Z de cor (90%, 95%, 99%)", verso: "1,645 · 1,96 · 2,58." },
    { id: "m13-f18", frente: "Cauda acima de Z = 2 e Z = 3", verso: "Z = 2 → 2,28%. Z = 3 → 0,135%." },
    { id: "m13-f19", frente: "Teorema Central do Limite", verso: "Médias de amostras (n ≥ 30) seguem ~normal com média μ e desvio σ ÷ √n." },
    { id: "m13-f20", frente: "Erro padrão", verso: "EP = σ ÷ √n. Metade do erro exige 4× mais amostra." },
    { id: "m13-f21", frente: "Intervalo de confiança da média", verso: "x̄ ± z · s ÷ √n. Fala da MÉDIA, não das peças individuais." },
    { id: "m13-f22", frente: "Tamanho de amostra", verso: "n = (z · σ ÷ E)², arredondando para cima." },
    { id: "m13-f23", frente: "Decisão no teste de hipóteses", verso: "p-valor < α → rejeita H0. \"p baixo, H0 pro buraco.\"" },
    { id: "m13-f24", frente: "Erro tipo I × tipo II", verso: "I (α): alarme falso, \"grito sem lobo\". II (β): deixar passar, \"lobo sem grito\"." },
    { id: "m13-f25", frente: "Correlação r e R²", verso: "r de −1 a +1 (força e sentido da relação linear). R² = r² = % explicada. Correlação ≠ causa." },
    { id: "m13-f26", frente: "Reta de regressão", verso: "ŷ = a + b·x; b = Sxy ÷ Sxx; a = ȳ − b·x̄. Cuidado ao extrapolar." }
  ]
});
