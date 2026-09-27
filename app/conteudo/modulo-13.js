/* =====================================================================
   MÓDULO 13 — ESTATÍSTICA APLICADA À ENGENHARIA
   (Na trilha vem logo depois do Módulo 1: é base para PCP, Qualidade,
   Logística e Pesquisa Operacional.)
   Parte 1 (Dia 2): lições 1 a 6 — Estatística descritiva
   Parte 2 (Dia 3): lições 7 a 12 — Probabilidade e inferência
   Cada lição tem 3 níveis (Fácil, Médio e Difícil), com objetivos,
   pré-requisitos, resumo e questões próprias de cada nível.
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
      objetivos: {
        facil: ["Diferenciar população e amostra", "Classificar variáveis (nominal, ordinal, discreta, contínua)", "Reconhecer amostras viciadas"],
        medio: ["Escolher o tipo de amostragem (aleatória, estratificada, sistemática, conglomerados)", "Montar subgrupos racionais para dados de processo", "Diferenciar exatidão e precisão de uma medição"],
        dificil: ["Identificar vieses (seleção, sobrevivência, medição)", "Diferenciar dados observacionais e experimentais", "Escrever definições operacionais de indicadores"]
      },
      prerequisitos: [{ texto: "Produtividade e eficiência (Módulo 1)", licao: "m01-l7" }],
      resumo: {
        facil: "Estatística serve para decidir com dados que **variam**. **População** é o todo; **amostra**, a parte medida. Variáveis: qualitativas (nominal, ordinal) e quantitativas (discreta, contínua). Amostra boa é aleatória e representativa.",
        medio: "Tipos de amostragem: **aleatória simples**, **estratificada** (por turno, máquina), **sistemática** (a cada k peças) e **por conglomerados**. Em processos, usam-se **subgrupos racionais** (peças consecutivas). Medição: **exatidão** (sem viés) × **precisão** (pouca dispersão).",
        dificil: "Vieses comuns: **seleção**, **sobrevivência** (só se veem os que “sobreviveram”) e **medição**. Dados **observacionais** mostram associação; **experimentos** controlados permitem inferir causa. Todo indicador precisa de **definição operacional** (o quê, como, quando, com que instrumento)."
      },
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
        { nivel: "facil", tipo: "recall", pergunta: "Para saber a média de peso de 1 milhão de parafusos, é preciso pesar todos?", resposta: "Não! Pesa-se uma **amostra aleatória** e usa-se a Estatística para estimar a média da população inteira." },
        { nivel: "facil", tipo: "conceito", titulo: "Para que serve", texto: "Na fábrica **tudo varia**: peso, tempo de ciclo, demanda, diâmetro.\nA Estatística serve para **descrever** a variação, **prever** e **decidir com dados**, não com opinião.\n\"Em Deus nós confiamos; todos os outros, tragam dados.\"" },
        { nivel: "facil", tipo: "conceito", titulo: "População × Amostra", texto: "**População:** o conjunto inteiro (todos os parafusos do mês).\n**Amostra:** a parte que você mede (50 parafusos sorteados).\n**Parâmetro** (da população): média **μ**, desvio **σ**.\n**Estatística** (da amostra): média **x̄**, desvio **s**." },
        { nivel: "facil", tipo: "atencao", titulo: "Amostra viciada", texto: "Amostra boa é **aleatória e representativa**. Pegar só as peças do começo do turno, ou só da máquina boa, gera conclusão errada." },
        { nivel: "facil", tipo: "conceito", titulo: "Tipos de variável", texto: "**Qualitativa nominal:** sem ordem (cor, fornecedor).\n**Qualitativa ordinal:** com ordem (ruim, bom, ótimo).\n**Quantitativa discreta:** contagem (nº de defeitos).\n**Quantitativa contínua:** medição (peso, tempo)." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"NO-OR / DI-CO\"**: Qualitativa NOminal e ORdinal; Quantitativa DIscreta e COntínua.\n**\"Discreta se conta, contínua se mede.\"**" },
        { nivel: "facil", tipo: "conexao", titulo: "Conexão", texto: "No CEP (Módulo 5), o tipo de variável escolhe a carta de controle: contínua → carta X̄-R; contagem de defeituosos → carta p." },
        { nivel: "medio", tipo: "conceito", titulo: "Tipos de amostragem", texto: "**Aleatória simples:** cada item tem a mesma chance.\n**Estratificada:** divide em grupos (turnos, máquinas) e sorteia em cada um — garante que todos apareçam.\n**Sistemática:** uma peça a cada k (cuidado com ciclos do processo).\n**Por conglomerados:** sorteia grupos inteiros (caixas, paletes)." },
        { nivel: "medio", tipo: "conceito", titulo: "Subgrupos racionais", texto: "Em controle de processo, cada subgrupo reúne **peças produzidas nas mesmas condições** (ex.: 5 peças consecutivas a cada hora). A variação **dentro** do subgrupo mostra o ruído natural; a variação **entre** subgrupos revela mudanças do processo." },
        { nivel: "medio", tipo: "conceito", titulo: "Exatidão × precisão", texto: "**Exatidão:** a média das medições acerta o valor verdadeiro (sem viés).\n**Precisão:** as medições repetidas ficam próximas entre si.\nUma balança pode ser precisa e inexata (sempre 5 g a mais). Por isso se **calibra** e se avalia o sistema de medição (estudos R&R)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Vieses que enganam", texto: "**Seleção:** medir só o turno “bom”.\n**Sobrevivência:** analisar só os fornecedores que continuaram (os ruins saíram).\n**Medição:** instrumento descalibrado ou critério diferente entre inspetores.\n**Não resposta:** em pesquisas, quem responde pode ser diferente de quem não responde." },
        { nivel: "dificil", tipo: "conceito", titulo: "Observacional × experimental", texto: "**Observacional:** só registra o que acontece (dados do MES). Mostra **associação**.\n**Experimental:** o pesquisador **muda** fatores de forma planejada e aleatória (DOE). Permite concluir **causa** com mais segurança." },
        { nivel: "dificil", tipo: "dica", titulo: "Definição operacional", texto: "“Refugo” precisa dizer: o que conta como refugo, em que etapa, como é pesado/contado, com que frequência e quem registra. Sem isso, dois turnos medem coisas diferentes com o mesmo nome." }
      ],
      questoes: [
        { id: "m13-q01", nivel: "facil", tipo: "multipla", pergunta: "Os 50 parafusos sorteados da produção do mês formam:",
          opcoes: ["A população", "Uma amostra", "Um parâmetro", "Um censo"], correta: 1,
          explicacao: "Amostra = a parte medida. A população são TODOS os parafusos do mês." },
        { id: "m13-q02", nivel: "facil", tipo: "ligar", pergunta: "Ligue a variável ao tipo:",
          pares: [["Nº de defeitos por lote", "Quantitativa discreta"], ["Peso do pacote", "Quantitativa contínua"], ["Satisfação: ruim/bom/ótimo", "Qualitativa ordinal"], ["Nome do fornecedor", "Qualitativa nominal"]],
          explicacao: "Discreta se conta, contínua se mede. Ordinal tem ordem; nominal não." },
        { id: "m13-q03", nivel: "facil", tipo: "lacuna", pergunta: "A média da população é representada por ___ e a média da amostra por x̄.",
          opcoes: ["μ", "σ", "s", "n"], correta: 0,
          explicacao: "Letras gregas (μ, σ) = população (parâmetros). Letras latinas (x̄, s) = amostra (estatísticas)." },
        { id: "m13-q04", nivel: "facil", tipo: "vf", pergunta: "Medir só as peças produzidas no começo do turno gera uma amostra representativa do dia.",
          correta: false, explicacao: "É uma amostra viciada: o começo do turno pode ter máquina fria, operador descansado etc. A amostra deve ser aleatória ao longo do dia." },
        { id: "m13-q05", nivel: "facil", tipo: "multipla", pergunta: "Uma avaliação de 1 a 5 estrelas é uma variável:",
          opcoes: ["Quantitativa contínua", "Qualitativa ordinal", "Qualitativa nominal", "Quantitativa discreta"], correta: 1,
          explicacao: "Apesar dos números, as estrelas são categorias ordenadas (pior → melhor). Pegadinha clássica!" },
        { id: "m13-q62", nivel: "medio", tipo: "ligar", pergunta: "Ligue o tipo de amostragem ao exemplo:",
          pares: [["Aleatória simples", "Sortear 50 números de série do lote"], ["Estratificada", "Sortear 10 peças de cada turno"], ["Sistemática", "Medir 1 peça a cada 100"], ["Por conglomerados", "Sortear 3 paletes e medir tudo neles"]],
          explicacao: "Cada método tem vantagens e riscos." },
        { id: "m13-q63", nivel: "medio", tipo: "multipla", pergunta: "Uma balança sempre marca 5 g a mais, mas com medições muito próximas entre si. Ela é:",
          opcoes: ["Exata e precisa", "Precisa, mas não exata", "Exata, mas não precisa", "Nem exata nem precisa"], correta: 1,
          explicacao: "Tem viés (inexata), mas pouca dispersão (precisa). Calibrar resolve o viés." },
        { id: "m13-q64", nivel: "medio", tipo: "vf", pergunta: "Num subgrupo racional, as peças devem ser produzidas nas mesmas condições, como peças consecutivas.",
          correta: true, explicacao: "Assim a variação dentro do subgrupo mostra só o ruído natural." },
        { id: "m13-q65", nivel: "medio", tipo: "multipla", pergunta: "Qual o risco da amostragem sistemática (uma peça a cada 10) numa máquina com 10 cavidades?",
          opcoes: ["Nenhum", "Medir sempre a mesma cavidade e ignorar as outras", "Medir peças demais", "Perder a aleatoriedade do sorteio de lotes"], correta: 1,
          explicacao: "O intervalo coincide com o ciclo do processo." },
        { id: "m13-q66", nivel: "dificil", tipo: "caso", contexto: "Uma análise mostra que os fornecedores atuais têm ótimo desempenho e conclui que “o processo de seleção de fornecedores funciona”.",
          pergunta: "Qual o viés mais provável?",
          opcoes: ["Nenhum", "Viés de sobrevivência: os fornecedores ruins já saíram e não aparecem nos dados", "Erro de arredondamento", "Amostra grande demais"], correta: 1,
          explicacao: "Só se analisaram os que “sobreviveram”." },
        { id: "m13-q67", nivel: "dificil", tipo: "vf", pergunta: "Dados observacionais do sistema de produção são suficientes para provar relações de causa e efeito.",
          correta: false, explicacao: "Mostram associação; causa exige experimento ou análise cuidadosa de confundidores." },
        { id: "m13-q68", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva uma definição operacional para o indicador “tempo de setup” da banhadeira.",
          respostaModelo: "**Tempo de setup** = tempo, em minutos, desde a **última caixa boa** do produto anterior até a **primeira caixa boa** do produto seguinte, incluindo limpeza, troca de bicos e ajustes. **Medição:** registrada pelo operador no MES (início e fim), validada pelo líder; **frequência:** toda troca; **exclusões:** paradas por falta de material durante o setup são registradas à parte. **Unidade:** minutos; **responsável:** supervisor da linha.",
          criterios: ["Define início e fim do evento", "Diz como e onde é medido", "Define frequência e responsável", "Trata exceções"] }
      ]
    },

    {
      id: "m13-l2",
      titulo: "Qual gráfico usar?",
      icone: "📊",
      objetivos: {
        facil: ["Escolher o gráfico adequado à pergunta", "Diferenciar histograma e gráfico de barras", "Evitar pizzas com muitas fatias"],
        medio: ["Definir o número de classes de um histograma", "Usar gráficos de linha (sequência) para dados no tempo", "Estratificar dados para achar diferenças escondidas"],
        dificil: ["Reconhecer gráficos enganosos", "Explicar por que só estatísticas-resumo não bastam (quarteto de Anscombe)", "Projetar gráficos para decisão"]
      },
      prerequisitos: [{ texto: "População, amostra e variáveis", licao: "m13-l1" }],
      resumo: {
        facil: "Comparar categorias → **barras** (Pareto); distribuição → **histograma** (barras coladas); comparar grupos → **boxplot**; relação entre duas variáveis → **dispersão**; evolução no tempo → **linha**.",
        medio: "Número de classes do histograma: regra de **Sturges** k ≈ 1 + 3,322·log n (referência inicial). Dados de processo devem ser vistos **na ordem do tempo** (gráfico de sequência) antes do histograma. **Estratificar** (por turno, máquina, fornecedor) revela diferenças que a média geral esconde.",
        dificil: "Gráficos enganam com **eixo truncado**, 3D, escalas diferentes e áreas desproporcionais. Conjuntos de dados com a mesma média, desvio e correlação podem ser totalmente diferentes (**quarteto de Anscombe**): sempre plote os dados. Bom gráfico responde a uma pergunta e leva a uma decisão."
      },
      blocos: [
        { nivel: "facil", tipo: "conceito", titulo: "Pergunta → gráfico", texto: "Comparar categorias → **barras** (ordenadas viram Pareto)\nPartes de um todo → **pizza** (poucas fatias)\nEvolução no tempo → **linha**\nForma da distribuição → **histograma**\nMediana, quartis e outliers → **boxplot**\nRelação entre duas variáveis → **dispersão**" },
        { nivel: "facil", tipo: "atencao", titulo: "Histograma ≠ barras", texto: "No **histograma** as barras ficam **coladas**, porque o eixo X é contínuo (faixas de valores). No gráfico de barras, cada barra é uma categoria separada." },
        { nivel: "facil", tipo: "atencao", titulo: "Pizza com muitas fatias", texto: "Evite pizza com **mais de 5 fatias**: ninguém compara ângulos pequenos. Use barras ordenadas." },
        { nivel: "facil", tipo: "dica", titulo: "Na fábrica", texto: "Para comparar **turnos, máquinas ou fornecedores**, coloque **boxplots lado a lado**. Convence a diretoria em 5 segundos." },
        { nivel: "medio", tipo: "formula", titulo: "Classes do histograma (Sturges)", texto: "k ≈ 1 + 3,322 · log₁₀(n)\nAmplitude da classe ≈ (máximo − mínimo) ÷ k", legenda: [["k", "número de classes (arredonde)"], ["n", "número de dados"]] },
        { nivel: "medio", tipo: "conceito", titulo: "Primeiro o tempo, depois a distribuição", texto: "Plote os dados **na ordem em que foram produzidos** (gráfico de sequência). Tendências, saltos e ciclos aparecem aí e **desaparecem** no histograma, que mistura tudo." },
        { nivel: "medio", tipo: "serio", titulo: "Estratificação", texto: "Refugo médio de 3% parece aceitável. Estratificando por turno: manhã 1%, tarde 1,5%, **noite 6,5%**. O problema está concentrado — e a ação também." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Gráficos enganosos", texto: "• **Eixo truncado:** começar o eixo em 95% faz 96% parecer o dobro de 95,5%.\n• **3D e perspectiva:** distorcem tamanhos.\n• **Dois eixos Y:** sugerem relações que não existem.\n• **Áreas/ícones** proporcionais à altura, não à área.\nPergunte sempre: a escala começa onde? A comparação é justa?" },
        { nivel: "dificil", tipo: "conceito", titulo: "Quarteto de Anscombe", texto: "Francis Anscombe (1973) criou quatro conjuntos de dados com **mesma média, variância, correlação e reta de regressão**, mas formas completamente diferentes (uma reta, uma curva, um outlier, um ponto isolado). Lição: **plote antes de concluir**." },
        { nivel: "dificil", tipo: "dica", titulo: "Gráfico para decisão", texto: "Título com a conclusão (“Refugo da noite é 4× o do dia”), destaque o que importa, referência ou meta visível, poucas cores, fonte dos dados e período." }
      ],
      questoes: [
        { id: "m13-q06", nivel: "facil", tipo: "ligar", pergunta: "Ligue a pergunta ao gráfico certo:",
          pares: [["Demanda mês a mês", "Linha"], ["Temperatura × refugo", "Dispersão"], ["Forma dos pesos de 200 pacotes", "Histograma"], ["Comparar turnos mostrando outliers", "Boxplot"]],
          explicacao: "Tempo → linha; relação entre duas variáveis → dispersão; distribuição → histograma; comparação com outliers → boxplot." },
        { id: "m13-q07", nivel: "facil", tipo: "vf", pergunta: "No histograma, as barras ficam separadas, como no gráfico de barras.",
          correta: false, explicacao: "No histograma elas ficam coladas: o eixo X é uma escala contínua dividida em faixas." },
        { id: "m13-q08", nivel: "facil", tipo: "multipla", pergunta: "Para mostrar os tipos de defeito do mais frequente para o menos frequente, use:",
          opcoes: ["Pizza com 12 fatias", "Barras ordenadas (Pareto)", "Gráfico de linha", "Gráfico de dispersão"], correta: 1,
          explicacao: "Barras em ordem decrescente = base do Diagrama de Pareto (Módulo 5)." },
        { id: "m13-q09", nivel: "facil", tipo: "lacuna", pergunta: "Para ver se duas variáveis andam juntas, usamos o gráfico de ___.",
          opcoes: ["dispersão", "pizza", "histograma", "Gantt"], correta: 0,
          explicacao: "Cada ponto é um par (x, y). É a base da correlação e da regressão." },
        { id: "m13-q69", nivel: "medio", tipo: "calculo", pergunta: "Pela regra de Sturges, quantas classes (aproximadamente) usar num histograma de 100 medições? (arredonde para o inteiro mais próximo)",
          resposta: 8, tolerancia: 0, unidade: "classes",
          resolucao: "k = 1 + 3,322 × log(100) = 1 + 3,322 × 2 = 7,64 ≈ 8",
          explicacao: "É uma referência inicial; ajuste para a forma ficar clara." },
        { id: "m13-q70", nivel: "medio", tipo: "multipla", pergunta: "Antes de fazer o histograma do peso das caixas de um dia inteiro, o que se deve olhar?",
          opcoes: ["A pizza dos pesos", "O gráfico de sequência (ordem de produção), para ver tendências e saltos", "Só a média", "Nada"], correta: 1,
          explicacao: "O histograma esconde a ordem do tempo." },
        { id: "m13-q71", nivel: "medio", tipo: "vf", pergunta: "Estratificar os dados por turno ou máquina pode revelar um problema concentrado que a média geral esconde.",
          correta: true, explicacao: "Ex.: refugo concentrado no turno da noite." },
        { id: "m13-q72", nivel: "dificil", tipo: "multipla", pergunta: "Um gráfico de barras com eixo começando em 95% mostra a eficiência subir de 95,5% para 96%, parecendo o dobro. Isso é:",
          opcoes: ["Correto e recomendado", "Um gráfico enganoso por eixo truncado", "Um histograma", "Um boxplot"], correta: 1,
          explicacao: "Em barras, o eixo deve começar em zero." },
        { id: "m13-q73", nivel: "dificil", tipo: "vf", pergunta: "Se dois conjuntos de dados têm mesma média, desvio-padrão e correlação, eles têm necessariamente a mesma forma.",
          correta: false, explicacao: "Quarteto de Anscombe: podem ser totalmente diferentes." },
        { id: "m13-q74", nivel: "dificil", tipo: "multipla", pergunta: "Qual título de gráfico é mais útil para uma reunião de decisão?",
          opcoes: ["Gráfico 3", "Refugo por turno", "Refugo da noite (6,5%) é 4× o da manhã — investigar setup noturno", "Dados diversos"], correta: 2,
          explicacao: "O título já entrega a conclusão e a ação." }
      ]
    },

    {
      id: "m13-l3",
      titulo: "Média, mediana e moda",
      icone: "🎯",
      objetivos: {
        facil: ["Calcular média, mediana e moda", "Calcular a média ponderada", "Reconhecer quando a média engana"],
        medio: ["Calcular a média geométrica de taxas de crescimento", "Calcular a média harmônica de taxas (ex.: peças/h)", "Usar média aparada e mediana em dados com outliers"],
        dificil: ["Escolher a medida de posição adequada à decisão", "Explicar por que prazos devem usar percentis e não só a média", "Evitar médias de razões e porcentagens calculadas de forma errada"]
      },
      prerequisitos: [{ texto: "Qual gráfico usar?", licao: "m13-l2" }],
      resumo: {
        facil: "**Média** (soma ÷ n), **mediana** (valor do meio) e **moda** (mais frequente). A média é sensível a outliers; a mediana, não. Média > mediana indica cauda à direita.",
        medio: "**Média geométrica** para taxas de crescimento: (Π(1 + rᵢ))^(1/n) − 1. **Média harmônica** para taxas com o mesmo numerador (peças/h para a mesma quantidade): n ÷ Σ(1/xᵢ). **Média aparada** descarta extremos e resiste a outliers.",
        dificil: "A medida depende da decisão: custo total → média; valor típico com assimetria → mediana; promessa de prazo → **percentil** (P90, P95). Médias de porcentagens precisam ser **ponderadas** pelas bases; média de razões ≠ razão das somas."
      },
      blocos: [
        { nivel: "facil", tipo: "recall", pergunta: "9 funcionários ganham R$ 3 mil e o diretor ganha R$ 50 mil. A média representa bem os funcionários?", resposta: "Não! A média dá R$ 7,7 mil, puxada pelo diretor. A **mediana** (R$ 3 mil) representa muito melhor." },
        { nivel: "facil", tipo: "formula", titulo: "As três medidas de posição", texto: "**Média:** x̄ = Σx ÷ n (soma tudo, divide pela quantidade)\n**Mediana:** o valor do meio com os dados **ordenados** (n par → média dos dois do meio)\n**Moda:** o valor que **mais aparece**" },
        { nivel: "facil", tipo: "formula", titulo: "Média ponderada", texto: "**x̄ = Σ(x · peso) ÷ Σ(pesos)**\nEx.: 100 un a R$ 10 + 300 un a R$ 12 → (1.000 + 3.600) ÷ 400 = **R$ 11,50**" },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"A moda é o que mais aparece\"** (a roupa que todo mundo usa).\n**\"A média se deixa levar pelo exagerado; a mediana fica no meio, parada.\"**" },
        { nivel: "facil", tipo: "atencao", titulo: "Quando a média engana", texto: "A média é **sensível a outliers**; a mediana não.\nSalários, tempo de atendimento e lead time costumam ter valores extremos → reporte a **mediana** junto." },
        { nivel: "facil", tipo: "conceito", titulo: "Assimetria", texto: "Média **>** mediana → cauda à **direita** (positiva).\nMédia **<** mediana → cauda à **esquerda** (negativa).\nMédia ≈ mediana → simétrico." },
        { nivel: "medio", tipo: "formula", titulo: "Média geométrica", texto: "G = [(1 + r₁)·(1 + r₂)·…·(1 + rₙ)]^(1/n) − 1", legenda: [["rᵢ", "taxa de crescimento do período i"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Crescimento médio", texto: "Vendas cresceram 10% num ano e 30% no outro. Média aritmética: 20% (errado para taxas).\nGeométrica: √(1,10 × 1,30) − 1 ≈ **19,6% ao ano** (reproduz o crescimento total de 43%)." },
        { nivel: "medio", tipo: "formula", titulo: "Média harmônica", texto: "H = n ÷ Σ(1 ÷ xᵢ)\nUsada para taxas quando a **quantidade** é a mesma (ex.: produzir 120 peças em cada máquina).", legenda: [["xᵢ", "taxa (peças/h, km/h)"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Duas máquinas, mesmo lote", texto: "Lote de 120 peças na máquina A (60 peças/h) e 120 na B (40 peças/h): tempos 2 h e 3 h. Taxa média real = 240 ÷ 5 = **48 peças/h** = média harmônica de 60 e 40. A aritmética (50) superestima." },
        { nivel: "dificil", tipo: "conceito", titulo: "Qual medida para qual decisão", texto: "• **Custo total do mês** → média (soma importa).\n• **Tempo típico de atendimento** com casos extremos → mediana.\n• **Prometer prazo ao cliente** → percentil (ex.: P90 do lead time: 90% dos pedidos cabem nele).\n• **Tamanho mais vendido** → moda." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Média de porcentagens", texto: "Linha A: 2% de refugo em 10.000 peças; linha B: 10% em 1.000. Média simples = 6% (errado). Ponderada: (200 + 100) ÷ 11.000 ≈ **2,7%**. Sempre volte às contagens (numerador e denominador)." }
      ],
      questoes: [
        { id: "m13-q10", nivel: "facil", tipo: "calculo", pergunta: "Dados: 4, 7, 7, 8, 9, 12, 16. Qual a média?",
          resposta: 9, tolerancia: 0.01, unidade: "",
          resolucao: "Soma = 4 + 7 + 7 + 8 + 9 + 12 + 16 = 63\nn = 7\nMédia = 63 ÷ 7 = 9",
          explicacao: "Média = soma dividida pela quantidade." },
        { id: "m13-q11", nivel: "facil", tipo: "multipla", pergunta: "Nos dados 4, 7, 7, 8, 9, 12, 16, a mediana e a moda são:",
          opcoes: ["Mediana 8 e moda 7", "Mediana 9 e moda 7", "Mediana 7 e moda 8", "Mediana 8 e moda 16"], correta: 0,
          explicacao: "Com 7 valores ordenados, a mediana é o 4º (8). O 7 aparece duas vezes (moda). Como a média (9) > mediana (8), há cauda à direita." },
        { id: "m13-q12", nivel: "facil", tipo: "calculo", pergunta: "Tempos de ônibus (min), já ordenados: 52, 55, 56, 57, 58, 59, 60, 61, 62, 90. Qual a mediana?",
          resposta: 58.5, tolerancia: 0.01, unidade: "min",
          resolucao: "n = 10 (par) → média dos dois do meio (5º e 6º)\n(58 + 59) ÷ 2 = 58,5 min",
          explicacao: "A média daria 61 min, puxada pelo dia do temporal (90). A mediana é mais honesta para o dia a dia." },
        { id: "m13-q13", nivel: "facil", tipo: "caso", contexto: "O RH vai divulgar o salário \"típico\" de um setor com 9 pessoas ganhando R$ 3 mil e 1 diretor ganhando R$ 50 mil.",
          pergunta: "Qual medida representa melhor o salário típico?",
          opcoes: ["A média (R$ 7,7 mil)", "A mediana (R$ 3 mil)", "O salário do diretor", "A amplitude (R$ 47 mil)"], correta: 1,
          explicacao: "Com um valor extremo, a mediana resiste e representa a maioria. Divulgar a média passaria uma imagem falsa." },
        { id: "m13-q14", nivel: "facil", tipo: "vf", pergunta: "Se a média é maior que a mediana, a distribuição tem cauda à direita (assimetria positiva).",
          correta: true, explicacao: "Valores altos puxam a média para cima, criando a cauda à direita." },
        { id: "m13-q15", nivel: "facil", tipo: "calculo", pergunta: "Você comprou 100 unidades a R$ 10 e 300 unidades a R$ 12. Qual o custo médio ponderado por unidade (R$)?",
          resposta: 11.5, tolerancia: 0.01, unidade: "R$",
          resolucao: "(100 × 10 + 300 × 12) ÷ (100 + 300)\n= (1.000 + 3.600) ÷ 400\n= 4.600 ÷ 400 = R$ 11,50",
          explicacao: "🟡 A média simples (R$ 11) estaria errada: o lote mais caro é três vezes maior. Esse cálculo aparece no custo médio de estoque (Módulo 7)." },
        { id: "m13-q75", nivel: "medio", tipo: "calculo", pergunta: "As vendas cresceram 10% num ano e 30% no seguinte. Qual o crescimento médio anual pela média geométrica (%)? (1 casa)",
          resposta: 19.6, tolerancia: 0.1, unidade: "%",
          resolucao: "√(1,10 × 1,30) − 1 = √1,43 − 1 ≈ 0,196 = 19,6%",
          explicacao: "Para taxas compostas, use a geométrica." },
        { id: "m13-q76", nivel: "medio", tipo: "calculo", pergunta: "Um lote igual é feito na máquina A (60 peças/h) e outro igual na B (40 peças/h). Qual a taxa média real (média harmônica), em peças/h?",
          resposta: 48, tolerancia: 0, unidade: "peças/h",
          resolucao: "H = 2 ÷ (1/60 + 1/40) = 2 ÷ (0,01667 + 0,025) = 48",
          explicacao: "A aritmética (50) superestima." },
        { id: "m13-q77", nivel: "medio", tipo: "vf", pergunta: "A média aparada (que descarta os valores extremos) é menos sensível a outliers que a média comum.",
          correta: true, explicacao: "Fica entre a média e a mediana em robustez." },
        { id: "m13-q78", nivel: "dificil", tipo: "multipla", pergunta: "Para prometer ao cliente um prazo que será cumprido na grande maioria dos pedidos, qual medida usar?",
          opcoes: ["Média do lead time", "Moda do lead time", "Um percentil alto do lead time (ex.: P90 ou P95)", "Mínimo do lead time"], correta: 2,
          explicacao: "A média é cumprida em só cerca de metade dos pedidos (em distribuições simétricas)." },
        { id: "m13-q79", nivel: "dificil", tipo: "calculo", pergunta: "Linha A: 2% de refugo em 10.000 peças. Linha B: 10% em 1.000 peças. Qual o refugo total da fábrica (%)? (1 casa)",
          resposta: 2.7, tolerancia: 0.05, unidade: "%",
          resolucao: "Refugo = 200 + 100 = 300 peças; total = 11.000\n300 ÷ 11.000 ≈ 2,7%",
          explicacao: "Média simples das porcentagens (6%) estaria errada." },
        { id: "m13-q80", nivel: "dificil", tipo: "caso", contexto: "O tempo de atendimento de chamados de manutenção tem mediana de 40 min, mas alguns chamados levam mais de 8 horas. A média é 95 min.",
          pergunta: "Qual leitura é mais útil para a gestão?",
          opcoes: ["Só a média: 95 min", "Mediana (40 min) para o típico e percentis altos para a cauda; investigar os chamados longos", "Só a moda", "Ignorar os chamados longos"], correta: 1,
          explicacao: "Distribuição assimétrica: combine medidas." }
      ]
    },

    {
      id: "m13-l4",
      titulo: "Quartis, boxplot e outliers",
      icone: "📦",
      objetivos: {
        facil: ["Calcular Q1, Q2 e Q3", "Calcular o IQR e os limites de outlier", "Ler um boxplot"],
        medio: ["Calcular e interpretar percentis (ex.: P90)", "Comparar grupos com boxplots lado a lado", "Usar medidas robustas de dispersão"],
        dificil: ["Explicar por que métodos de quartis dão resultados diferentes", "Tratar outliers como possíveis causas especiais", "Definir metas de serviço baseadas em percentis"]
      },
      prerequisitos: [{ texto: "Média, mediana e moda", licao: "m13-l3" }],
      resumo: {
        facil: "Quartis dividem os dados ordenados em 4 partes. **IQR = Q3 − Q1**. Outlier (Tukey): abaixo de Q1 − 1,5·IQR ou acima de Q3 + 1,5·IQR. O boxplot mostra mínimo, Q1, mediana, Q3, máximo e outliers.",
        medio: "**Percentil p:** valor abaixo do qual estão p% dos dados (Q1 = P25, mediana = P50, Q3 = P75). **Boxplots lado a lado** comparam turnos, máquinas e fornecedores. Medidas **robustas** (mediana, IQR) resistem a outliers.",
        dificil: "Há vários métodos de cálculo de quartis (softwares diferem); em amostras pequenas os valores mudam — declare o método. Outlier pode ser erro ou **causa especial** valiosa: investigue antes de excluir. Metas como “90% dos pedidos em até 5 dias” usam percentis."
      },
      blocos: [
        { nivel: "facil", tipo: "conceito", titulo: "Quartis", texto: "Cortam os dados ordenados em **4 partes** de 25%:\n**Q1** (25% abaixo) · **Q2 = mediana** (50%) · **Q3** (75% abaixo)." },
        { nivel: "facil", tipo: "formula", titulo: "IQR e outliers (regra de Tukey)", texto: "**IQR = Q3 − Q1** (onde estão os 50% centrais)\n**Outlier:** valor < Q1 − 1,5·IQR **ou** > Q3 + 1,5·IQR" },
        { tipo: "mapa", titulo: "Boxplot dos tempos de ônibus", texto:
          "52 ├──┤56[████│████]61├┤62      ● 90\n" +
          "mín    Q1  Md=58,5  Q3            outlier\n" +
          "       └─ caixa = 50% centrais ─┘\n\n" +
          "Q1 = 56, Q3 = 61 → IQR = 5\n" +
          "Limite sup. = 61 + 1,5 × 5 = 68,5\n" +
          "90 > 68,5 → OUTLIER (dia do temporal)" },
        { nivel: "facil", tipo: "atencao", titulo: "Métodos diferentes", texto: "Existem vários jeitos de calcular quartis (no Excel, QUARTIL.INC e QUARTIL.EXC dão valores um pouco diferentes). Na prova, use o método do professor. Aqui usamos \"mediana de cada metade\"." },
        { nivel: "facil", tipo: "dica", titulo: "Outlier não é lixo", texto: "Antes de apagar um outlier, **investigue**: pode ser erro de medição… ou o sinal de um problema real (máquina quebrando, fornecedor novo)." },
        { nivel: "medio", tipo: "formula", titulo: "Percentil (posição aproximada)", texto: "Posição ≈ p × (n + 1) nos dados ordenados; interpole entre vizinhos se cair entre dois.", legenda: [["p", "fração do percentil (0,90 para P90)"], ["n", "número de dados"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "P90 do lead time", texto: "19 pedidos ordenados (dias): 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 9, 12.\nPosição = 0,9 × 20 = 18 ⇒ **P90 = 9 dias**: 90% dos pedidos levaram até 9 dias." },
        { nivel: "medio", tipo: "serio", titulo: "Boxplots lado a lado", texto: "Tempo de setup por turno: manhã (mediana 30 min, caixa estreita), tarde (32 min), noite (**45 min**, caixa larga e outliers). A comparação visual já aponta onde investigar." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Métodos de quartis", texto: "Excel (QUARTIL.INC × QUARTIL.EXC), Python e outros programas usam regras diferentes de interpolação. Com muitos dados a diferença é pequena; com poucos, pode mudar a classificação de outliers. **Declare o método** nos relatórios." },
        { nivel: "dificil", tipo: "conceito", titulo: "Outlier: erro ou sinal?", texto: "Antes de excluir: verifique **registro** (digitação, unidade), **medição** (instrumento) e **processo** (quebra, material diferente). Se for real, é uma **causa especial** — muitas vezes a informação mais valiosa do conjunto." },
        { nivel: "dificil", tipo: "dica", titulo: "Metas por percentil", texto: "“Lead time médio de 4 dias” não protege o cliente. “**90% dos pedidos em até 6 dias**” sim. Acompanhe o P90 no tempo e ataque a cauda (pedidos longos)." }
      ],
      questoes: [
        { id: "m13-q16", nivel: "facil", tipo: "calculo", pergunta: "Q1 = 56 e Q3 = 61. Acima de qual valor um dado é considerado outlier (regra 1,5 × IQR)?",
          resposta: 68.5, tolerancia: 0.01, unidade: "",
          resolucao: "IQR = Q3 − Q1 = 61 − 56 = 5\nLimite superior = Q3 + 1,5 × IQR = 61 + 7,5 = 68,5",
          explicacao: "Tudo acima de 68,5 (ou abaixo de 56 − 7,5 = 48,5) é outlier." },
        { id: "m13-q17", nivel: "facil", tipo: "ordenar", pergunta: "Ordene os 5 números do boxplot, do menor para o maior:",
          itens: ["Mínimo", "Q1", "Mediana (Q2)", "Q3", "Máximo"],
          explicacao: "O boxplot resume os dados com esses 5 números e ainda marca os outliers como pontos." },
        { id: "m13-q18", nivel: "facil", tipo: "multipla", pergunta: "A \"caixa\" do boxplot representa:",
          opcoes: ["Todos os dados", "Os 50% centrais (de Q1 a Q3)", "Somente os outliers", "A média ± 1 desvio-padrão"], correta: 1,
          explicacao: "A caixa vai de Q1 a Q3 (o IQR), com uma linha na mediana." },
        { id: "m13-q19", nivel: "facil", tipo: "vf", pergunta: "A mediana é o mesmo que o segundo quartil (Q2).",
          correta: true, explicacao: "Q2 deixa 50% dos dados abaixo: é exatamente a mediana." },
        { id: "m13-q81", nivel: "medio", tipo: "multipla", pergunta: "O P90 do lead time é 9 dias. Isso significa que:",
          opcoes: ["A média é 9 dias", "90% dos pedidos levaram até 9 dias", "10% levaram até 9 dias", "Todos levaram 9 dias"], correta: 1,
          explicacao: "Percentil = porcentagem abaixo do valor." },
        { id: "m13-q82", nivel: "medio", tipo: "ligar", pergunta: "Ligue o percentil ao nome:",
          pares: [["P25", "Primeiro quartil (Q1)"], ["P50", "Mediana"], ["P75", "Terceiro quartil (Q3)"]],
          explicacao: "Quartis são percentis específicos." },
        { id: "m13-q83", nivel: "medio", tipo: "vf", pergunta: "O IQR (Q3 − Q1) é uma medida de dispersão robusta a outliers.",
          correta: true, explicacao: "Depende só dos 50% centrais." },
        { id: "m13-q84", nivel: "dificil", tipo: "caso", contexto: "Na análise do tempo de ciclo, apareceu um valor de 5 minutos, enquanto os demais ficam entre 40 e 60 segundos.",
          pergunta: "Qual a conduta correta?",
          opcoes: ["Excluir sem olhar", "Investigar registro, medição e processo; se for real, tratar como causa especial", "Substituir pela média", "Dobrar todos os outros valores"], correta: 1,
          explicacao: "Outlier pode ser erro ou sinal importante." },
        { id: "m13-q85", nivel: "dificil", tipo: "vf", pergunta: "Excel, Python e outros programas podem dar valores ligeiramente diferentes de quartis para os mesmos dados.",
          correta: true, explicacao: "Usam métodos de interpolação diferentes." },
        { id: "m13-q86", nivel: "dificil", tipo: "multipla", pergunta: "Qual meta de serviço protege melhor o cliente?",
          opcoes: ["Lead time médio de 4 dias", "90% dos pedidos entregues em até 6 dias", "Lead time mínimo de 1 dia", "Lead time moda de 3 dias"], correta: 1,
          explicacao: "Percentis controlam a cauda." }
      ]
    },

    {
      id: "m13-l5",
      titulo: "Desvio-padrão e CV",
      icone: "↔️",
      objetivos: {
        facil: ["Calcular amplitude, variância e desvio-padrão", "Explicar a divisão por n − 1", "Calcular e usar o coeficiente de variação"],
        medio: ["Somar variâncias de variáveis independentes (acúmulo de tolerâncias)", "Comparar variabilidade com o CV", "Relacionar desvio-padrão e capacidade de atender especificações"],
        dificil: ["Estimar σ a partir de amplitudes (R̄/d₂)", "Diferenciar variação de curto e de longo prazo", "Explicar a função perda de Taguchi"]
      },
      prerequisitos: [{ texto: "Quartis, boxplot e outliers", licao: "m13-l4" }],
      resumo: {
        facil: "**Desvio-padrão** mede o quanto os dados se afastam da média (divide por n − 1 na amostra). **CV = s ÷ x̄** compara a variação de grandezas diferentes.",
        medio: "Para variáveis **independentes**, as **variâncias se somam**: σ_total = √(σ₁² + σ₂² + …). Isso explica o acúmulo de tolerâncias em montagens e em lead times com várias etapas.",
        dificil: "σ pode ser estimado por **R̄ ÷ d₂** (d₂ = 2,326 para subgrupos de 5), que mede a variação de **curto prazo**; o desvio de todos os dados inclui mudanças de **longo prazo**. Para **Taguchi**, qualquer desvio do alvo gera perda: L = k·(y − m)² — reduzir variação vale mesmo dentro da especificação."
      },
      blocos: [
        { nivel: "facil", tipo: "recall", pergunta: "Duas máquinas enchem pacotes de 500 g com a MESMA média. Como saber qual é a melhor?", resposta: "Olhando a **variação** (desvio-padrão, CV, boxplot). Média igual não quer dizer qualidade igual." },
        { nivel: "facil", tipo: "formula", titulo: "Medidas de dispersão", texto: "**Amplitude:** A = máximo − mínimo\n**Variância amostral:** s² = Σ(x − x̄)² ÷ (n − 1)\n**Desvio-padrão:** s = √s² (mesma unidade dos dados)" },
        { nivel: "facil", tipo: "atencao", titulo: "Por que n − 1?", texto: "A amostra tende a **subestimar** a variação real; dividir por n − 1 corrige isso.\nPopulação inteira → divide por N.\nExcel: **DESVPAD.A** (amostra) × **DESVPAD.P** (população)." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"A amostra é humilde: divide por um a menos.\"**" },
        { nivel: "facil", tipo: "formula", titulo: "Coeficiente de variação", texto: "**CV = s ÷ x̄ × 100%**\nCompara variações com médias ou unidades diferentes.\nReferência prática: < 15% baixa · 15–30% média · > 30% alta." },
        { nivel: "facil", tipo: "conexao", titulo: "Conexão", texto: "No Módulo 7 (Logística), o CV da demanda classifica itens na análise **XYZ**: estáveis × erráticos." },
        { nivel: "medio", tipo: "formula", titulo: "Soma de variâncias", texto: "σ²_total = σ₁² + σ₂² + … + σₙ² (variáveis independentes)\nσ_total = √(Σσᵢ²)", legenda: [["σᵢ", "desvio-padrão de cada parte ou etapa"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Acúmulo de tolerâncias", texto: "Três peças empilhadas, cada uma com σ = 0,02 mm: σ_total = √(3 × 0,02²) ≈ **0,035 mm** — menor que a soma simples (0,06), porque os desvios tendem a se compensar." },
        { nivel: "medio", tipo: "exemplo", titulo: "Lead time com etapas", texto: "Produção (σ = 1 dia) e transporte (σ = 0,5 dia), independentes: σ_total = √(1 + 0,25) ≈ **1,12 dia**. Base para dimensionar prazos e estoques de segurança." },
        { nivel: "dificil", tipo: "formula", titulo: "σ pelas amplitudes", texto: "σ̂ = R̄ ÷ d₂  (d₂ = 1,128 para n = 2; 2,059 para n = 4; 2,326 para n = 5)", legenda: [["R̄", "média das amplitudes dos subgrupos"], ["d₂", "constante tabelada que depende do tamanho do subgrupo"]] },
        { nivel: "dificil", tipo: "conceito", titulo: "Curto × longo prazo", texto: "O σ de **curto prazo** (dentro dos subgrupos) mostra o potencial do processo. O σ de **longo prazo** (todos os dados) inclui trocas de turno, lotes de material e desgaste. Se o longo é muito maior, há causas de variação entre subgrupos a eliminar." },
        { nivel: "dificil", tipo: "formula", titulo: "Função perda de Taguchi", texto: "L(y) = k · (y − m)²  ;  perda média = k·[σ² + (μ − m)²]", legenda: [["m", "valor-alvo"], ["k", "constante de custo"], ["μ, σ", "média e desvio do processo"]] }
      ],
      questoes: [
        { id: "m13-q20", nivel: "facil", tipo: "calculo", pergunta: "Tempos de setup (min): 22, 25, 19, 30, 24. Qual o desvio-padrão amostral? (média = 24)",
          resposta: 4.06, tolerancia: 0.02, unidade: "min",
          resolucao: "Desvios: −2, +1, −5, +6, 0\nQuadrados: 4 + 1 + 25 + 36 + 0 = 66\ns² = 66 ÷ (5 − 1) = 16,5\ns = √16,5 ≈ 4,06 min",
          explicacao: "Roteiro: média → desvios → quadrados → soma → divide por n − 1 → raiz." },
        { id: "m13-q21", nivel: "facil", tipo: "calculo", pergunta: "Média do setup = 24 min e desvio-padrão = 4,06 min. Qual o CV (%)?",
          resposta: 16.9, tolerancia: 0.2, unidade: "%",
          resolucao: "CV = 4,06 ÷ 24 × 100 ≈ 16,9%",
          explicacao: "Dispersão média: vale padronizar o setup (SMED, Módulo 6)." },
        { id: "m13-q22", nivel: "facil", tipo: "multipla", pergunta: "Por que se divide por n − 1 na variância da amostra?",
          opcoes: ["Porque é mais fácil de calcular", "Para corrigir a tendência da amostra de subestimar a variação", "Para eliminar os outliers", "Porque o Excel exige"], correta: 1,
          explicacao: "É a correção de Bessel: deixa a estimativa da variância sem viés." },
        { id: "m13-q23", nivel: "facil", tipo: "caso", contexto: "Tempo de ciclo: média 50 s, desvio 5 s. Peso do produto: média 2.000 g, desvio 40 g.",
          pergunta: "O gerente quer saber qual processo é RELATIVAMENTE mais estável.",
          opcoes: ["O ciclo, porque 5 é menor que 40", "O peso, porque o CV é 2% contra 10% do ciclo", "Não dá para comparar unidades diferentes", "O ciclo, porque tem CV maior"], correta: 1,
          explicacao: "CV compara o que não se compara: ciclo = 5 ÷ 50 = 10%; peso = 40 ÷ 2.000 = 2%. O peso varia menos em termos relativos." },
        { id: "m13-q24", nivel: "facil", tipo: "lacuna", pergunta: "No Excel, o desvio-padrão de uma AMOSTRA é calculado com ___.",
          opcoes: ["DESVPAD.A", "DESVPAD.P", "MÉDIA", "CORREL"], correta: 0,
          explicacao: "DESVPAD.A divide por n − 1 (amostra). DESVPAD.P divide por N (população inteira)." },
        { id: "m13-q87", nivel: "medio", tipo: "calculo", pergunta: "Três peças empilhadas, cada uma com σ = 0,02 mm (independentes). Qual o σ da altura total (mm)? (3 casas)",
          resposta: 0.035, tolerancia: 0.001, unidade: "mm",
          resolucao: "σ = √(3 × 0,02²) = √0,0012 ≈ 0,0346 mm",
          explicacao: "Variâncias se somam; desvios, não." },
        { id: "m13-q88", nivel: "medio", tipo: "calculo", pergunta: "Produção com σ = 1 dia e transporte com σ = 0,5 dia, independentes. Qual o σ do lead time total (dias)? (2 casas)",
          resposta: 1.12, tolerancia: 0.01, unidade: "dias",
          resolucao: "σ = √(1² + 0,5²) = √1,25 ≈ 1,12",
          explicacao: "Base para prazos e estoque de segurança." },
        { id: "m13-q89", nivel: "medio", tipo: "vf", pergunta: "Para variáveis independentes, o desvio-padrão da soma é a soma dos desvios-padrão.",
          correta: false, explicacao: "Somam-se as variâncias; o desvio da soma é a raiz." },
        { id: "m13-q90", nivel: "dificil", tipo: "calculo", pergunta: "Subgrupos de 5 peças com amplitude média R̄ = 4,652 g (d₂ = 2,326). Qual o σ estimado (g)?",
          resposta: 2, tolerancia: 0.01, unidade: "g",
          resolucao: "σ̂ = 4,652 ÷ 2,326 = 2,0 g",
          explicacao: "Estimativa de curto prazo usada nas cartas de controle." },
        { id: "m13-q91", nivel: "dificil", tipo: "multipla", pergunta: "O σ de longo prazo é muito maior que o de curto prazo. O que isso indica?",
          opcoes: ["Processo perfeito", "Há variação entre subgrupos (turnos, lotes, desgaste) a investigar", "Erro de cálculo sempre", "Que o subgrupo é grande demais"], correta: 1,
          explicacao: "Mudanças ao longo do tempo inflam a variação total." },
        { id: "m13-q92", nivel: "dificil", tipo: "vf", pergunta: "Pela função perda de Taguchi, reduzir a variação traz ganho mesmo quando todas as peças já estão dentro da especificação.",
          correta: true, explicacao: "A perda cresce com a distância ao alvo, não só fora dos limites." }
      ]
    },

    {
      id: "m13-l6",
      titulo: "Caso: as envasadoras de café",
      icone: "☕",
      objetivos: {
        facil: ["Comparar duas máquinas pela média e pela dispersão", "Calcular o desvio-padrão de uma amostra pequena", "Concluir que não se decide só pela média"],
        medio: ["Calcular a % fora da especificação de cada máquina pela normal", "Calcular o Cp de cada máquina", "Recomendar a máquina com base em dados"],
        dificil: ["Calcular o custo do sobreenchimento (giveaway)", "Decidir onde ajustar a média com base na variação", "Considerar exigências legais de conteúdo líquido"]
      },
      prerequisitos: [{ texto: "Desvio-padrão e CV", licao: "m13-l5" }],
      resumo: {
        facil: "As duas máquinas têm a **mesma média (500 g)**, mas dispersões muito diferentes. Nunca decida só pela média: pergunte sempre “e a variação?”.",
        medio: "Com a normal: % fora = P(Z < (LIE − μ)/σ) + P(Z > (LSE − μ)/σ). **Cp** = (LSE − LIE) ÷ 6σ compara a largura da especificação com a variação.",
        dificil: "Máquinas com muita variação exigem **média mais alta** para não gerar pacotes abaixo do declarado, o que custa **sobreenchimento** (produto dado de graça). O conteúdo líquido de pré-medidos é fiscalizado pelo Inmetro: reduzir a variação permite trabalhar mais perto do nominal com segurança."
      },
      blocos: [
        { nivel: "facil", tipo: "bobo", titulo: "O tempo real do seu ônibus", texto: "10 viagens: média **61 min**, mediana **58,5 min**, desvio **≈ 10,6 min**, e um outlier (90 min, dia do temporal).\nPara o dia a dia, a mediana é mais honesta. Para **não perder a prova**, saia com folga de ~1 desvio-padrão (≈ 11 min).\nÉ a lógica do **estoque de segurança** (M7) e da **folga no cronograma** (M2)." },
        { nivel: "facil", tipo: "serio", titulo: "Café Serra: o cenário", texto: "Especificação do pacote: **500 g ± 10 g** (490 a 510 g).\n**Máquina A:** 498, 502, 500, 499, 501 → média 500, s = **1,58 g**\n**Máquina B:** 490, 510, 495, 505, 500 → média 500, s = **7,91 g**" },
        { nivel: "facil", tipo: "serio", titulo: "A análise", texto: "1. As médias são **iguais**: olhando só a média, \"está tudo certo\".\n2. A dispersão de B é **5 vezes maior**: ela trabalha encostada nos limites.\n3. B gera pacotes fora da especificação (reclamação ou café de graça).\n4. Ação: investigar B com **Ishikawa** (Módulo 5).\n5. Mostrar **boxplots lado a lado** à diretoria." },
        { nivel: "facil", tipo: "dica", titulo: "Regra de ouro", texto: "**Nunca decida só pela média.** Pergunte sempre: \"e a variação?\"" },
        { nivel: "medio", tipo: "exemplo", titulo: "% fora e Cp", texto: "Especificação 490–510 g, média 500 g.\n**A** (σ = 1,58 g): Z = ±6,3 ⇒ praticamente 0% fora; Cp = 20 ÷ 9,5 ≈ **2,1**.\n**B** (σ = 7,91 g): Z = ±1,26 ⇒ ≈ **20,7%** fora (10,4% de cada lado); Cp = 20 ÷ 47,5 ≈ **0,42**." },
        { nivel: "medio", tipo: "dica", titulo: "Recomendação com dados", texto: "“Transferir a produção para a máquina A e investigar a B (bicos, balança, manutenção). A B produz cerca de 1 em cada 5 pacotes fora da especificação.”" },
        { nivel: "dificil", tipo: "formula", titulo: "Custo do sobreenchimento", texto: "Custo = (μ − nominal) × pacotes × custo por grama", legenda: [["μ", "peso médio ajustado"], ["nominal", "peso declarado na embalagem"]] },
        { nivel: "dificil", tipo: "exemplo", titulo: "Quanto custa a variação", texto: "Para ter poucos pacotes abaixo de 500 g, a máquina B precisaria de média ≈ 500 + 2,33 × 7,91 ≈ **518 g** (1% abaixo). A máquina A, ≈ 500 + 2,33 × 1,58 ≈ **504 g**. Diferença de 14 g × 1 milhão de pacotes = **14 t de café por mês** dadas de graça." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Exigências legais", texto: "Produtos pré-medidos têm regras metrológicas de conteúdo líquido, com fiscalização do Inmetro. Critérios e tolerâncias estão em regulamentação específica, que deve ser consultada na versão vigente. A estatística ajuda a atender a regra com o menor sobreenchimento possível." }
      ],
      questoes: [
        { id: "m13-q25", nivel: "facil", tipo: "calculo", pergunta: "Máquina A: 498, 502, 500, 499, 501 g (média 500). Qual o desvio-padrão amostral (g)?",
          resposta: 1.58, tolerancia: 0.02, unidade: "g",
          resolucao: "Desvios: −2, +2, 0, −1, +1\nQuadrados: 4 + 4 + 0 + 1 + 1 = 10\ns² = 10 ÷ 4 = 2,5\ns = √2,5 ≈ 1,58 g",
          explicacao: "Pouca variação: os pacotes ficam bem longe dos limites de 490 e 510 g." },
        { id: "m13-q26", nivel: "facil", tipo: "caso", contexto: "As máquinas A e B têm média de 500 g. Desvios: A = 1,58 g; B = 7,91 g. Especificação: 490 a 510 g.",
          pergunta: "Qual a conclusão correta?",
          opcoes: ["São equivalentes, pois as médias são iguais", "B vai gerar muito mais pacotes fora da especificação", "A é pior, pois varia menos", "Basta aumentar a tolerância para ±20 g"], correta: 1,
          explicacao: "Com desvio 5× maior, B trabalha encostada nos limites: ≈ 21% dos pacotes ficam fora (você calcula isso na lição da Normal). Mudar a especificação não resolve o problema do cliente." },
        { id: "m13-q27", nivel: "facil", tipo: "ordenar", pergunta: "Ordene os passos da análise das envasadoras:",
          itens: ["Coletar amostras aleatórias de cada máquina", "Calcular média e desvio-padrão", "Comparar a variação com a especificação", "Investigar as causas da variação de B (Ishikawa)", "Mostrar boxplots lado a lado à diretoria"],
          explicacao: "Coletar → calcular → comparar → investigar a causa → comunicar." },
        { id: "m13-q28", nivel: "facil", tipo: "vf", pergunta: "Olhando só a média, as duas máquinas parecem iguais.",
          correta: true, explicacao: "Exatamente por isso a média sozinha é perigosa. A diferença está na dispersão." },
        { id: "m13-q93", nivel: "medio", tipo: "calculo", pergunta: "Máquina B: μ = 500 g, σ = 7,91 g, especificação 490–510 g. Qual o Cp? (2 casas)",
          resposta: 0.42, tolerancia: 0.01, unidade: "",
          resolucao: "Cp = (510 − 490) ÷ (6 × 7,91) = 20 ÷ 47,46 ≈ 0,42",
          explicacao: "Cp < 1: o processo não cabe na especificação." },
        { id: "m13-q94", nivel: "medio", tipo: "calculo", pergunta: "Máquina B: μ = 500 g, σ = 7,91 g, especificação 490–510 g. Qual a % total fora da especificação? (1 casa)",
          resposta: 20.7, tolerancia: 0.3, unidade: "%",
          resolucao: "Z = 10 ÷ 7,91 ≈ 1,26 ⇒ P(Z > 1,26) ≈ 10,4% em cada cauda\nTotal ≈ 20,7%",
          explicacao: "Cerca de 1 em cada 5 pacotes." },
        { id: "m13-q95", nivel: "medio", tipo: "vf", pergunta: "Com a mesma média, a máquina de menor desvio-padrão produz menos pacotes fora da especificação.",
          correta: true, explicacao: "Menos dispersão, menos caudas fora dos limites." },
        { id: "m13-q96", nivel: "dificil", tipo: "calculo", pergunta: "Para ter no máximo 1% abaixo de 500 g (z = 2,33), qual a média mínima da máquina com σ = 1,58 g? (1 casa)",
          resposta: 503.7, tolerancia: 0.1, unidade: "g",
          resolucao: "μ = 500 + 2,33 × 1,58 ≈ 503,7 g",
          explicacao: "Menos variação permite média mais perto do nominal." },
        { id: "m13-q97", nivel: "dificil", tipo: "calculo", pergunta: "Reduzir a média de 518 g para 504 g em 1.000.000 de pacotes por mês economiza quantas toneladas de café?",
          resposta: 14, tolerancia: 0, unidade: "t",
          resolucao: "14 g × 1.000.000 = 14.000.000 g = 14 t",
          explicacao: "Variação custa dinheiro (sobreenchimento)." },
        { id: "m13-q98", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva a recomendação à diretoria sobre as envasadoras A e B, com números.",
          respostaModelo: "**Situação:** mesma média (500 g), mas a B tem σ de 7,91 g contra 1,58 g da A. **Consequência:** a B produz cerca de 20,7% dos pacotes fora da especificação (Cp ≈ 0,42), e para não gerar pacotes abaixo do declarado exigiria média de ~518 g — ~14 t/mês de sobreenchimento por milhão de pacotes. **Recomendação:** priorizar a A, investigar a B (bicos, balança, manutenção, calibração) com meta de σ ≤ 2 g, e acompanhar com carta de controle. Verificar o atendimento à regulamentação de conteúdo líquido.",
          criterios: ["Compara as dispersões com números", "Traduz em % fora ou Cp", "Traduz em custo (sobreenchimento)", "Recomenda ações e acompanhamento"] }
      ]
    },

    /* ================= PARTE 2 — CONCLUIR ================= */
    {
      id: "m13-l7",
      titulo: "Probabilidade",
      icone: "🎲",
      objetivos: {
        facil: ["Aplicar as regras básicas de probabilidade (complemento, E, OU)", "Calcular a confiabilidade de sistemas em série", "Usar binomial e Poisson em casos simples"],
        medio: ["Calcular a confiabilidade de sistemas em paralelo (redundância)", "Aplicar probabilidade condicional", "Calcular probabilidades com Poisson"],
        dificil: ["Aplicar o teorema de Bayes a inspeções com falsos positivos", "Reconhecer falhas de causa comum que quebram a independência", "Avaliar decisões com valor esperado"]
      },
      prerequisitos: [{ texto: "Caso: as envasadoras de café", licao: "m13-l6" }],
      resumo: {
        facil: "**OU soma, E multiplica** (para eventos mutuamente exclusivos / independentes). Complemento: 1 − P. Em série, todos precisam funcionar: R = ΠRᵢ. **Binomial:** k sucessos em n tentativas; **Poisson:** eventos num intervalo com taxa λ.",
        medio: "**Paralelo (redundância):** R = 1 − Π(1 − Rᵢ). **Condicional:** P(A|B) = P(A e B) ÷ P(B). Poisson para chegadas e falhas: P(X = k) = e^(−λ)·λᵏ ÷ k!.",
        dificil: "**Bayes:** mesmo com uma inspeção boa, se o defeito é raro, boa parte dos alarmes pode ser falsa. **Causas comuns** (mesma fonte de energia, mesmo lote) fazem redundâncias falharem juntas. Decisões com risco usam **valor esperado**."
      },
      blocos: [
        { nivel: "facil", tipo: "recall", pergunta: "Uma linha tem 3 máquinas em série, cada uma com 95% de chance de funcionar o dia todo. A linha funciona com 95%?", resposta: "Não! 0,95 × 0,95 × 0,95 = **85,7%**. Cada etapa em série \"come\" um pouco da confiabilidade." },
        { nivel: "facil", tipo: "formula", titulo: "Regras básicas", texto: "**P(A)** = favoráveis ÷ possíveis (de 0 a 1)\n**Complemento:** P(não A) = 1 − P(A)\n**OU:** P(A ou B) = P(A) + P(B) − P(A e B)\n**E (independentes):** P(A e B) = P(A) × P(B)" },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"OU soma, E multiplica.\"**\n**\"Pelo menos um = um menos nenhum.\"**" },
        { nivel: "facil", tipo: "formula", titulo: "Binomial", texto: "n tentativas, probabilidade p de \"sucesso\" (ex.: peça defeituosa).\n**P(X = k) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ** · média = n·p\nEx.: 2% de defeito, amostra de 10 → P(nenhuma) = 0,98¹⁰ = **81,7%**" },
        { nivel: "facil", tipo: "formula", titulo: "Poisson", texto: "Eventos num intervalo de tempo, com taxa média λ.\n**P(X = k) = e^(−λ) · λᵏ ÷ k!** · média = variância = λ\nEx.: 3 chamadas/hora → P(nenhuma) = e⁻³ ≈ **5%**" },
        { nivel: "facil", tipo: "conexao", titulo: "Conexão", texto: "Confiabilidade em série → TPM e OEE (Módulo 6). Poisson → chegadas em filas (Módulo 9)." },
        { nivel: "medio", tipo: "formula", titulo: "Redundância (paralelo)", texto: "R_paralelo = 1 − (1 − R₁)·(1 − R₂)·…", legenda: [["Rᵢ", "confiabilidade de cada componente"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Bomba reserva", texto: "Uma bomba com R = 0,90. Duas em paralelo: R = 1 − 0,1² = **0,99**. A redundância reduz a falha de 10% para 1%." },
        { nivel: "medio", tipo: "formula", titulo: "Probabilidade condicional", texto: "P(A | B) = P(A e B) ÷ P(B)", legenda: [["P(A | B)", "probabilidade de A sabendo que B ocorreu"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Poisson na manutenção", texto: "Média de 2 quebras por semana (λ = 2). P(nenhuma quebra na semana) = e^(−2) ≈ **13,5%**. P(exatamente 2) = e^(−2)·2² ÷ 2 ≈ **27,1%**." },
        { nivel: "dificil", tipo: "formula", titulo: "Teorema de Bayes", texto: "P(D | alarme) = P(alarme | D)·P(D) ÷ [P(alarme | D)·P(D) + P(alarme | não D)·P(não D)]", legenda: [["P(D)", "prevalência do defeito"], ["P(alarme | D)", "sensibilidade da inspeção"], ["P(alarme | não D)", "taxa de falsos alarmes"]] },
        { nivel: "dificil", tipo: "exemplo", titulo: "Inspeção automática", texto: "Defeito em 2% das caixas; a câmera detecta 95% dos defeitos e dá falso alarme em 2% das boas.\nP(defeito | alarme) = 0,95×0,02 ÷ (0,95×0,02 + 0,02×0,98) = 0,019 ÷ 0,0386 ≈ **49%**.\nMetade das caixas rejeitadas está boa: vale reinspecionar as rejeitadas." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Falhas de causa comum", texto: "Duas bombas “redundantes” ligadas ao mesmo painel elétrico falham juntas se o painel cair. A fórmula do paralelo supõe **independência**; causas comuns reduzem muito a confiabilidade real." }
      ],
      questoes: [
        { id: "m13-q29", nivel: "facil", tipo: "calculo", pergunta: "3 máquinas em série, cada uma com confiabilidade 0,95 (independentes). Qual a confiabilidade da linha (%)?",
          resposta: 85.7, tolerancia: 0.1, unidade: "%",
          resolucao: "Regra do E: 0,95 × 0,95 × 0,95 = 0,857 → 85,7%",
          explicacao: "Quanto mais etapas em série, menor a confiabilidade total." },
        { id: "m13-q30", nivel: "facil", tipo: "calculo", pergunta: "4 estações em série, cada uma com confiabilidade 0,97. Qual a probabilidade de PELO MENOS UMA falhar (%)?",
          resposta: 11.5, tolerancia: 0.1, unidade: "%",
          resolucao: "P(todas funcionam) = 0,97⁴ = 0,8853\nP(pelo menos uma falha) = 1 − 0,8853 = 0,1147 → 11,5%",
          explicacao: "\"Pelo menos um = um menos nenhum\"." },
        { id: "m13-q31", nivel: "facil", tipo: "calculo", pergunta: "Taxa de defeito de 5%. Numa amostra de 5 peças, qual a probabilidade de NENHUMA ser defeituosa (%)?",
          resposta: 77.4, tolerancia: 0.1, unidade: "%",
          resolucao: "Binomial com k = 0: 0,95⁵ = 0,7738 → 77,4%",
          explicacao: "Logo, em 22,6% das amostras aparece pelo menos uma defeituosa." },
        { id: "m13-q32", nivel: "facil", tipo: "ligar", pergunta: "Ligue a situação à distribuição:",
          pares: [["Nº de defeituosas numa amostra de 20", "Binomial"], ["Nº de chamadas de manutenção por hora", "Poisson"], ["Peso de pacotes de café", "Normal"]],
          explicacao: "Binomial: contagem em n tentativas. Poisson: eventos no tempo. Normal: medições contínuas." },
        { id: "m13-q33", nivel: "facil", tipo: "vf", pergunta: "Se A e B são independentes, P(A e B) = P(A) + P(B).",
          correta: false, explicacao: "E multiplica: P(A e B) = P(A) × P(B). A soma é da regra do OU." },
        { id: "m13-q99", nivel: "medio", tipo: "calculo", pergunta: "Duas bombas em paralelo, cada uma com confiabilidade 0,90 (independentes). Qual a confiabilidade do conjunto?",
          resposta: 0.99, tolerancia: 0.001, unidade: "",
          resolucao: "R = 1 − (1 − 0,9)² = 1 − 0,01 = 0,99",
          explicacao: "Basta uma funcionar." },
        { id: "m13-q100", nivel: "medio", tipo: "calculo", pergunta: "Média de 2 quebras por semana (Poisson). Qual a probabilidade de nenhuma quebra na semana (%)? (1 casa)",
          resposta: 13.5, tolerancia: 0.1, unidade: "%",
          resolucao: "P(0) = e^(−2) ≈ 0,1353 = 13,5%",
          explicacao: "Poisson com k = 0." },
        { id: "m13-q101", nivel: "medio", tipo: "multipla", pergunta: "De 1.000 peças, 60 vieram do fornecedor X; 6 dessas 60 são defeituosas. Sabendo que a peça veio de X, qual a probabilidade de ser defeituosa?",
          opcoes: ["0,6%", "6%", "10%", "60%"], correta: 2,
          explicacao: "P(D | X) = 6 ÷ 60 = 10%." },
        { id: "m13-q102", nivel: "dificil", tipo: "calculo", pergunta: "Defeito em 2% das caixas; a câmera detecta 95% dos defeitos e dá falso alarme em 2% das boas. Dada uma rejeição, qual a probabilidade de a caixa ser realmente defeituosa (%)? (inteiro)",
          resposta: 49, tolerancia: 1, unidade: "%",
          resolucao: "0,95 × 0,02 = 0,019\n0,02 × 0,98 = 0,0196\n0,019 ÷ (0,019 + 0,0196) ≈ 0,492 ≈ 49%",
          explicacao: "Com defeito raro, muitos alarmes são falsos." },
        { id: "m13-q103", nivel: "dificil", tipo: "vf", pergunta: "Duas bombas redundantes alimentadas pelo mesmo painel elétrico podem falhar juntas, o que reduz a confiabilidade calculada pela fórmula do paralelo.",
          correta: true, explicacao: "Falha de causa comum quebra a independência." },
        { id: "m13-q104", nivel: "dificil", tipo: "multipla", pergunta: "Com base no resultado de Bayes (49% das rejeições são falsas), qual ação faz sentido?",
          opcoes: ["Descartar todas as rejeitadas", "Reinspecionar as caixas rejeitadas antes de descartar e melhorar a câmera", "Desligar a câmera", "Aumentar a sensibilidade sem avaliar falsos alarmes"], correta: 1,
          explicacao: "Evita descartar caixas boas." }
      ]
    },

    {
      id: "m13-l8",
      titulo: "Distribuição normal e escore Z",
      icone: "🔔",
      objetivos: {
        facil: ["Aplicar a regra empírica 68-95-99,7", "Calcular o escore Z", "Calcular a % fora da especificação com a tabela Z"],
        medio: ["Calcular valores a partir de percentis (x = μ + z·σ)", "Calcular a probabilidade entre dois valores", "Usar a normal para planejar folgas e prazos"],
        dificil: ["Verificar se os dados são aproximadamente normais", "Reconhecer caudas pesadas e assimetria", "Explicar os riscos de supor normalidade sem checar"]
      },
      prerequisitos: [{ texto: "Probabilidade", licao: "m13-l7" }],
      resumo: {
        facil: "A normal é a curva de sino: 68% dos dados em ±1σ, 95% em ±2σ, 99,7% em ±3σ. **Z = (x − μ) ÷ σ** diz quantos desvios um valor está da média.",
        medio: "Para achar o valor de um percentil: **x = μ + z·σ** (ex.: P95 → z = 1,645). Probabilidade entre dois valores = Φ(z₂) − Φ(z₁). Útil para definir prazos, folgas e limites.",
        dificil: "Antes de usar a normal, **cheque os dados**: histograma, gráfico de probabilidade normal, assimetria. Tempos e prazos costumam ser **assimétricos** (cauda à direita); supor normalidade subestima a cauda e gera promessas não cumpridas."
      },
      blocos: [
        { nivel: "facil", tipo: "conceito", titulo: "A curva de sino", texto: "Aparece quando muitas pequenas causas somam efeitos (peso, dimensão, tempo).\n**Simétrica**, média = mediana = moda, definida por **μ** (centro) e **σ** (largura)." },
        { tipo: "mapa", titulo: "Regra empírica", texto:
          "            ▁▂▄▆█▆▄▂▁\n" +
          "        ▁▃▆█████████▆▃▁\n" +
          "   ▁▂▄███████████████████▄▂▁\n" +
          "──┼────┼────┼────┼────┼────┼────┼──\n" +
          " -3σ  -2σ  -1σ   μ   +1σ  +2σ  +3σ\n" +
          "            |← 68% →|\n" +
          "       |←──── 95% ────→|\n" +
          "  |←────── 99,7% ──────→|" },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"Um, dois, três: 68, 95, 99,7.\"**\n**\"Noventa, noventa e cinco, noventa e nove: 1,645 · 1,96 · 2,58.\"**" },
        { nivel: "facil", tipo: "formula", titulo: "Escore Z", texto: "**Z = (x − μ) ÷ σ**\nZ diz **quantos desvios** o valor está longe da média. Com ele, uma única tabela serve para qualquer processo.\n\"Z é a distância em desvios.\"" },
        { nivel: "facil", tipo: "formula", titulo: "Tabela Z para decorar", texto: "Cauda acima de Z:\nZ = 1 → 15,87%\nZ = 1,645 → 5%\nZ = 1,96 → 2,5%\nZ = 2 → **2,28%**\nZ = 2,5 → **0,62%**\nZ = 3 → **0,135%**\nPor simetria, a cauda abaixo de −Z é igual." },
        { nivel: "facil", tipo: "serio", titulo: "% fora da especificação", texto: "1. Desenhe a curva e marque os limites.\n2. Calcule o **Z** de cada limite.\n3. Veja na tabela a área **fora** de cada limite.\n4. **Some** as caudas e multiplique pela produção.\nEx.: rolamento μ = 20,00; σ = 0,02; limites 19,95–20,05 → Z = ±2,5 → 0,62% + 0,62% = **1,24%**." },
        { nivel: "facil", tipo: "bobo", titulo: "A pizzaria \"Chega Logo\"", texto: "Entrega em 40 min em média, σ = 5 min. Passou de 50 min, é grátis.\nZ = (50 − 40) ÷ 5 = **2** → **2,28%** das pizzas saem de graça (≈ 23 em cada 1.000)." },
        { nivel: "medio", tipo: "formula", titulo: "Do percentil ao valor", texto: "x = μ + z · σ", legenda: [["z", "1,282 (P90) · 1,645 (P95) · 2,326 (P99)"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Prazo com 95% de confiança", texto: "Tempo de montagem: μ = 12 min, σ = 1,5 min. Tempo que cobre 95% dos casos: 12 + 1,645 × 1,5 ≈ **14,5 min**." },
        { nivel: "medio", tipo: "exemplo", titulo: "Entre dois valores", texto: "Peso: μ = 500 g, σ = 4 g. P(496 < x < 508) = Φ(2) − Φ(−1) = 0,9772 − 0,1587 ≈ **81,9%**." },
        { nivel: "dificil", tipo: "conceito", titulo: "Checando a normalidade", texto: "• **Histograma** aproximadamente simétrico e em sino.\n• **Gráfico de probabilidade normal:** pontos alinhados numa reta.\n• **Testes** (Shapiro-Wilk, Anderson-Darling) com cautela: com muitos dados, rejeitam desvios pequenos e irrelevantes." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Caudas que enganam", texto: "Tempos de reparo, lead times e demandas costumam ter **cauda longa à direita**. Usar a normal pode prever 1% de casos acima de X quando, na realidade, são 5%. Use percentis empíricos, transformações (log) ou distribuições adequadas (lognormal, Weibull)." }
      ],
      questoes: [
        { id: "m13-q34", nivel: "facil", tipo: "multipla", pergunta: "Numa distribuição normal, cerca de 95% dos dados ficam entre:",
          opcoes: ["μ ± 1σ", "μ ± 2σ", "μ ± 3σ", "μ ± 6σ"], correta: 1,
          explicacao: "68% em ±1σ, 95% em ±2σ (exato: 1,96σ), 99,7% em ±3σ." },
        { id: "m13-q35", nivel: "facil", tipo: "calculo", pergunta: "Pizzaria: μ = 40 min, σ = 5 min. Qual o Z de uma entrega de 50 min?",
          resposta: 2, tolerancia: 0.01, unidade: "",
          resolucao: "Z = (x − μ) ÷ σ = (50 − 40) ÷ 5 = 2",
          explicacao: "50 min está 2 desvios-padrão acima da média." },
        { id: "m13-q36", nivel: "facil", tipo: "calculo", pergunta: "Tempo de montagem normal com μ = 12 min e σ = 1,5 min. Qual a % de montagens acima de 15 min?",
          resposta: 2.28, tolerancia: 0.05, unidade: "%",
          resolucao: "Z = (15 − 12) ÷ 1,5 = 2\nP(Z > 2) = 2,28%",
          explicacao: "Z = 2 é um dos valores para decorar: cauda de 2,28%." },
        { id: "m13-q37", nivel: "facil", tipo: "calculo", pergunta: "Rolamento: μ = 20,00 mm, σ = 0,02 mm, especificação 19,95 a 20,05 mm. Qual a % total fora da especificação?",
          resposta: 1.24, tolerancia: 0.05, unidade: "%",
          resolucao: "Z(sup) = (20,05 − 20,00) ÷ 0,02 = +2,5 → 0,62%\nZ(inf) = (19,95 − 20,00) ÷ 0,02 = −2,5 → 0,62%\nTotal = 1,24% (124 peças a cada 10.000)",
          explicacao: "Sempre some as DUAS caudas quando há limite inferior e superior." },
        { id: "m13-q38", nivel: "facil", tipo: "ordenar", pergunta: "Ordene o roteiro para calcular a % fora da especificação:",
          itens: ["Desenhar a curva e marcar os limites", "Calcular o Z de cada limite", "Achar na tabela a área fora de cada limite", "Somar as caudas e multiplicar pela produção"],
          explicacao: "Desenhar evita o erro mais comum: esquecer uma das caudas." },
        { id: "m13-q39", nivel: "facil", tipo: "lacuna", pergunta: "Na fórmula do escore Z, Z = (x − μ) ÷ ___.",
          opcoes: ["σ", "n", "μ", "√n"], correta: 0,
          explicacao: "Divide-se pelo desvio-padrão: o resultado é a distância em \"número de desvios\"." },
        { id: "m13-q105", nivel: "medio", tipo: "calculo", pergunta: "Tempo de montagem normal com μ = 12 min e σ = 1,5 min. Qual tempo cobre 95% dos casos (z = 1,645)? (2 casas)",
          resposta: 14.47, tolerancia: 0.02, unidade: "min",
          resolucao: "x = 12 + 1,645 × 1,5 ≈ 14,47 min",
          explicacao: "Percentil 95 da distribuição." },
        { id: "m13-q106", nivel: "medio", tipo: "calculo", pergunta: "Peso normal com μ = 500 g e σ = 4 g. Qual a probabilidade (%) de um pacote pesar entre 496 e 508 g? (1 casa)",
          resposta: 81.9, tolerancia: 0.2, unidade: "%",
          resolucao: "Z₁ = −1; Z₂ = 2\nΦ(2) − Φ(−1) = 0,9772 − 0,1587 = 0,8185",
          explicacao: "Área entre dois valores." },
        { id: "m13-q107", nivel: "medio", tipo: "vf", pergunta: "Na normal, cerca de 99,7% dos valores ficam entre μ − 3σ e μ + 3σ.",
          correta: true, explicacao: "Regra empírica." },
        { id: "m13-q108", nivel: "dificil", tipo: "multipla", pergunta: "Os tempos de reparo têm cauda longa à direita. Usar a normal para estimar o P99 tende a:",
          opcoes: ["Superestimar o P99", "Subestimar o P99 (a cauda real é mais pesada)", "Acertar sempre", "Não há relação"], correta: 1,
          explicacao: "A normal tem caudas leves." },
        { id: "m13-q109", nivel: "dificil", tipo: "vf", pergunta: "Num gráfico de probabilidade normal, dados aproximadamente normais ficam próximos de uma reta.",
          correta: true, explicacao: "Desvios da reta indicam assimetria ou caudas pesadas." },
        { id: "m13-q110", nivel: "dificil", tipo: "multipla", pergunta: "Com 100.000 dados, um teste de normalidade rejeita a normalidade por um desvio pequeno. O que fazer?",
          opcoes: ["Descartar os dados", "Avaliar se o desvio é relevante na prática (gráficos, caudas) antes de trocar o modelo", "Sempre usar a normal", "Reduzir para 10 dados"], correta: 1,
          explicacao: "Com muitos dados, testes detectam diferenças irrelevantes." }
      ]
    },

    {
      id: "m13-l9",
      titulo: "Amostragem e intervalo de confiança",
      icone: "📏",
      objetivos: {
        facil: ["Explicar o Teorema Central do Limite", "Calcular o erro padrão", "Calcular um intervalo de confiança para a média"],
        medio: ["Calcular o IC para uma proporção", "Calcular o tamanho de amostra para estimar uma proporção", "Usar o t de Student em amostras pequenas"],
        dificil: ["Interpretar corretamente o nível de confiança", "Aplicar a correção para população finita", "Reconhecer quando o IC não vale (amostra não aleatória)"]
      },
      prerequisitos: [{ texto: "Distribuição normal e escore Z", licao: "m13-l8" }],
      resumo: {
        facil: "Médias de amostras seguem aproximadamente a normal com erro padrão **σ/√n**. IC 95% = x̄ ± 1,96·s/√n. Tamanho de amostra: n = (z·σ/E)².",
        medio: "**Proporção:** IC = p̂ ± z·√(p̂(1 − p̂)/n); tamanho: n = z²·p(1 − p)/E² (use p = 0,5 se não souber). Com n pequeno e σ desconhecido, use **t** no lugar de z.",
        dificil: "“95% de confiança” refere-se ao **método**: 95% dos intervalos construídos assim contêm o parâmetro. Para amostras grandes de populações pequenas, use o fator **√((N − n)/(N − 1))**. Nenhuma fórmula corrige uma amostra **viciada**."
      },
      blocos: [
        { nivel: "facil", tipo: "conceito", titulo: "Teorema Central do Limite", texto: "As **médias** de muitas amostras de tamanho n:\n• seguem aproximadamente uma **normal** (para n ≥ 30), mesmo que os dados não sejam normais;\n• têm média **μ**;\n• têm desvio **σ ÷ √n** (o **erro padrão**)." },
        { nivel: "facil", tipo: "formula", titulo: "Erro padrão", texto: "**EP = σ ÷ √n** (ou s ÷ √n)\n\"Médias tremem menos.\"\nPara reduzir o erro **pela metade**, é preciso **4 vezes** mais amostra." },
        { nivel: "facil", tipo: "formula", titulo: "Intervalo de confiança (IC)", texto: "**IC = x̄ ± z · s ÷ √n**\nz = 1,645 (90%) · **1,96 (95%)** · 2,58 (99%)\nEx.: n = 36, x̄ = 48 s, s = 6 s → EP = 1 → IC95% = **[46,04 ; 49,96] s**" },
        { nivel: "facil", tipo: "atencao", titulo: "Leitura correta do IC", texto: "\"Estamos 95% confiantes de que a **MÉDIA do processo** está no intervalo.\"\n**Não** quer dizer que 95% das peças individuais estão ali!" },
        { nivel: "facil", tipo: "atencao", titulo: "Amostra pequena", texto: "Com n < 30 e σ desconhecido, use o **t de Student** no lugar do z (intervalo mais largo). Ex.: n = 25, 95% → t = 2,064." },
        { nivel: "facil", tipo: "formula", titulo: "Tamanho de amostra", texto: "**n = (z · σ ÷ E)²** (arredonde **para cima**)\nEx.: σ ≈ 6 s, erro de ±1 s, 95% → (1,96 × 6 ÷ 1)² = 138,3 → **139 medições**." },
        { nivel: "facil", tipo: "conexao", titulo: "Conexão", texto: "É a mesma lógica do **número de ciclos na cronoanálise** (Módulo 4) e dos subgrupos do CEP (Módulo 5)." },
        { nivel: "medio", tipo: "formula", titulo: "IC para proporção", texto: "p̂ ± z · √(p̂ · (1 − p̂) ÷ n)", legenda: [["p̂", "proporção na amostra"], ["n", "tamanho da amostra"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Defeituosos", texto: "Amostra de 400 caixas com 20 defeituosas: p̂ = 5%. Erro = 1,96 × √(0,05 × 0,95 ÷ 400) ≈ 2,1%. IC 95% ≈ **[2,9%; 7,1%]**." },
        { nivel: "medio", tipo: "formula", titulo: "Tamanho de amostra para proporção", texto: "n = z² · p · (1 − p) ÷ E²  (sem ideia de p: use p = 0,5)", legenda: [["E", "erro máximo desejado"]] },
        { nivel: "dificil", tipo: "atencao", titulo: "O que é “95% de confiança”", texto: "O parâmetro é fixo; o intervalo é que varia de amostra para amostra. Se repetíssemos a amostragem muitas vezes, cerca de **95% dos intervalos** conteriam o valor verdadeiro. Não é “95% de chance de o parâmetro estar neste intervalo específico” (na interpretação clássica)." },
        { nivel: "dificil", tipo: "formula", titulo: "População finita", texto: "Erro padrão corrigido = (σ ÷ √n) · √((N − n) ÷ (N − 1))  (use quando n > 5% de N)", legenda: [["N", "tamanho da população (lote)"]] },
        { nivel: "dificil", tipo: "limitacao", titulo: "Amostra viciada", texto: "Um IC estreito calculado com peças escolhidas “a dedo” é **precisamente errado**. A fórmula mede só o erro aleatório, não o viés de seleção ou de medição." }
      ],
      questoes: [
        { id: "m13-q40", nivel: "facil", tipo: "calculo", pergunta: "σ = 6 s e n = 36 medições. Qual o erro padrão da média (s)?",
          resposta: 1, tolerancia: 0.01, unidade: "s",
          resolucao: "EP = σ ÷ √n = 6 ÷ √36 = 6 ÷ 6 = 1 s",
          explicacao: "A média de 36 medições varia 6 vezes menos que uma medição isolada." },
        { id: "m13-q41", nivel: "facil", tipo: "calculo", pergunta: "49 pedidos: lead time médio de 6 dias, s = 2,1 dias. Qual o LIMITE SUPERIOR do IC 95% para a média (dias)?",
          resposta: 6.59, tolerancia: 0.01, unidade: "dias",
          resolucao: "EP = 2,1 ÷ √49 = 2,1 ÷ 7 = 0,3\nMargem = 1,96 × 0,3 = 0,588\nIC95% = 6 ± 0,588 = [5,41 ; 6,59]",
          explicacao: "O limite inferior é 5,41 dias. O intervalo fala do lead time MÉDIO, não de cada pedido." },
        { id: "m13-q42", nivel: "facil", tipo: "multipla", pergunta: "O IC 95% do tempo de ciclo médio é [46,04 ; 49,96] s. A interpretação correta é:",
          opcoes: ["95% dos ciclos individuais duram entre 46 e 50 s", "Temos 95% de confiança de que a média do processo está entre 46,04 e 49,96 s", "A média é exatamente 48 s", "5% dos ciclos têm defeito"], correta: 1,
          explicacao: "O IC é sobre a MÉDIA. Ciclos individuais variam muito mais (±1,96 × 6 ≈ ±12 s)." },
        { id: "m13-q43", nivel: "facil", tipo: "calculo", pergunta: "Quantas medições são necessárias para estimar o tempo médio com erro máximo de ±0,5 s, 95% de confiança, e σ ≈ 3 s?",
          resposta: 139, tolerancia: 0, unidade: "medições",
          resolucao: "n = (z · σ ÷ E)² = (1,96 × 3 ÷ 0,5)² = (11,76)² = 138,3\nArredonda para CIMA → 139",
          explicacao: "Arredondar para baixo daria um erro um pouco maior que o desejado." },
        { id: "m13-q44", nivel: "facil", tipo: "vf", pergunta: "Para reduzir o erro padrão pela metade, basta dobrar o tamanho da amostra.",
          correta: false, explicacao: "O erro cai com a RAIZ de n: para reduzir pela metade, é preciso 4 vezes mais amostra." },
        { id: "m13-q111", nivel: "medio", tipo: "calculo", pergunta: "Amostra de 400 caixas com 20 defeituosas. Qual a margem de erro (±) do IC 95% para a proporção (%)? (1 casa)",
          resposta: 2.1, tolerancia: 0.05, unidade: "%",
          resolucao: "p̂ = 0,05\nE = 1,96 × √(0,05 × 0,95 ÷ 400) ≈ 1,96 × 0,0109 ≈ 0,0214 = 2,1%",
          explicacao: "IC ≈ [2,9%; 7,1%]." },
        { id: "m13-q112", nivel: "medio", tipo: "calculo", pergunta: "Quantas caixas amostrar para estimar a proporção de defeituosas com erro de ±3%, 95% de confiança, sem ideia prévia de p?",
          resposta: 1068, tolerancia: 1, unidade: "caixas",
          resolucao: "n = 1,96² × 0,5 × 0,5 ÷ 0,03² = 0,9604 ÷ 0,0009 ≈ 1.067,1 → 1.068",
          explicacao: "p = 0,5 dá o maior n (caso mais conservador)." },
        { id: "m13-q113", nivel: "medio", tipo: "vf", pergunta: "Com amostra pequena e σ desconhecido, usa-se a distribuição t de Student no lugar de z.",
          correta: true, explicacao: "O intervalo fica mais largo." },
        { id: "m13-q114", nivel: "dificil", tipo: "multipla", pergunta: "Qual é a interpretação clássica correta de um IC de 95%?",
          opcoes: ["Há 95% de chance de a média estar neste intervalo específico", "95% dos intervalos construídos por esse método contêm a média verdadeira", "95% dos dados estão no intervalo", "A amostra tem 95% de acerto"], correta: 1,
          explicacao: "A confiança é do método." },
        { id: "m13-q115", nivel: "dificil", tipo: "calculo", pergunta: "Lote de N = 500 peças; amostra de n = 100. Qual o fator de correção para população finita? (3 casas)",
          resposta: 0.895, tolerancia: 0.002, unidade: "",
          resolucao: "√((500 − 100) ÷ (500 − 1)) = √(400 ÷ 499) ≈ 0,895",
          explicacao: "Reduz o erro padrão em cerca de 10%." },
        { id: "m13-q116", nivel: "dificil", tipo: "vf", pergunta: "Um intervalo de confiança calculado corretamente corrige o viés de uma amostra escolhida a dedo.",
          correta: false, explicacao: "Ele só considera o erro aleatório, não o viés." }
      ]
    },

    {
      id: "m13-l10",
      titulo: "Teste de hipóteses",
      icone: "⚖️",
      objetivos: {
        facil: ["Montar H0 e H1", "Decidir pelo p-valor", "Diferenciar erros tipo I e tipo II"],
        medio: ["Escolher entre teste bilateral e unilateral", "Calcular a estatística de teste para uma proporção", "Relacionar intervalo de confiança e teste de hipóteses"],
        dificil: ["Explicar poder do teste e tamanho de amostra", "Diferenciar significância estatística e importância prática", "Reconhecer os problemas de testes múltiplos"]
      },
      prerequisitos: [{ texto: "Amostragem e intervalo de confiança", licao: "m13-l9" }],
      resumo: {
        facil: "H0: nada mudou; H1: o que se quer mostrar. Se **p-valor < α**, rejeita-se H0 (“p baixo, H0 pro buraco”). Erro tipo I: alarme falso; tipo II: problema não detectado. Não rejeitar H0 não prova H0.",
        medio: "**Bilateral** (≠) quando interessa qualquer diferença; **unilateral** (< ou >) quando só um lado importa (ex.: peso abaixo do prometido). Para proporção: z = (p̂ − p₀) ÷ √(p₀(1 − p₀)/n). Se o IC 95% não contém o valor de H0, o teste bilateral a 5% rejeita H0.",
        dificil: "**Poder** = 1 − β: chance de detectar um efeito real; cresce com n e com o tamanho do efeito. Com amostras enormes, diferenças minúsculas ficam “significativas”: avalie a **importância prática**. Testar muitas hipóteses aumenta falsos positivos — planeje antes e ajuste α."
      },
      blocos: [
        { nivel: "facil", tipo: "conceito", titulo: "Os 5 passos", texto: "1. **H0 (nula):** nada mudou (ex.: μ = 500 g).\n2. **H1 (alternativa):** o que você quer provar (μ ≠ 500 g).\n3. Escolha **α** (normalmente 5%).\n4. Calcule **t = (x̄ − μ₀) ÷ (s ÷ √n)** e o **p-valor**.\n5. **p-valor < α → rejeita H0.**" },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**\"p baixo, H0 pro buraco.\"**" },
        { nivel: "facil", tipo: "conceito", titulo: "Erros tipo I e tipo II", texto: "**Tipo I (α):** rejeitar H0 verdadeira → \"alarme falso\" (parar a linha à toa).\n**Tipo II (β):** não rejeitar H0 falsa → \"deixar passar\" (processo desregulado vai para o cliente).\nPoder do teste = 1 − β." },
        { nivel: "facil", tipo: "mnemonico", titulo: "O lobo", texto: "**\"Tipo I: grito sem lobo. Tipo II: lobo sem grito.\"**" },
        { nivel: "facil", tipo: "atencao", titulo: "Não rejeitar ≠ provar", texto: "\"Não rejeitar H0\" **não prova** que H0 é verdadeira. Só diz que não há evidência suficiente contra ela (às vezes falta amostra)." },
        { nivel: "facil", tipo: "serio", titulo: "Exemplo", texto: "Fornecedor promete 500 g. Amostra: n = 25, x̄ = 497 g, s = 5 g.\nt = (497 − 500) ÷ (5 ÷ 5) = **−3**\n|−3| > 2,064 (t crítico, 95%) → **rejeita H0**: o pacote está vindo mais leve." },
        { nivel: "medio", tipo: "conceito", titulo: "Bilateral × unilateral", texto: "**Bilateral** (H1: μ ≠ 500): qualquer desvio importa (ajuste de máquina).\n**Unilateral** (H1: μ < 500): só importa um lado (fornecedor entregando menos).\nDefina **antes** de ver os dados." },
        { nivel: "medio", tipo: "formula", titulo: "Teste para proporção", texto: "z = (p̂ − p₀) ÷ √(p₀ · (1 − p₀) ÷ n)", legenda: [["p₀", "proporção sob H0"], ["p̂", "proporção observada"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "O fornecedor promete ≤ 2% de defeitos", texto: "Amostra de 500 com 16 defeituosas: p̂ = 3,2%.\nz = (0,032 − 0,02) ÷ √(0,02 × 0,98 ÷ 500) ≈ 0,012 ÷ 0,00626 ≈ **1,92**.\nUnilateral a 5% (z crítico 1,645): **rejeita H0** — evidência de que o fornecedor está acima de 2%." },
        { nivel: "dificil", tipo: "conceito", titulo: "Poder do teste", texto: "Poder = probabilidade de rejeitar H0 quando o efeito existe. Aumenta com: **n maior**, **efeito maior**, **σ menor** e **α maior**. Planejar o tamanho da amostra pelo poder evita estudos que “não acham nada” por falta de dados." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Significativo ≠ importante", texto: "Com 1 milhão de caixas, uma diferença de 0,05 g no peso médio pode dar p < 0,001, mas não muda nada na prática. Relate o **tamanho do efeito** e o **intervalo de confiança**, não só o p-valor." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Testes múltiplos", texto: "Testar 20 variáveis a α = 5% gera, em média, **1 falso positivo** mesmo sem efeito real. Defina as hipóteses antes, corrija α (ex.: Bonferroni: α ÷ nº de testes) e confirme achados com novos dados." }
      ],
      questoes: [
        { id: "m13-q45", nivel: "facil", tipo: "multipla", pergunta: "O teste deu p-valor = 0,01, com α = 0,05. Qual a decisão?",
          opcoes: ["Rejeitar H0", "Não rejeitar H0", "Aumentar α para 0,10", "Refazer sem H0"], correta: 0,
          explicacao: "p (0,01) < α (0,05): \"p baixo, H0 pro buraco\". A diferença é estatisticamente significativa." },
        { id: "m13-q46", nivel: "facil", tipo: "ligar", pergunta: "Ligue cada situação ao conceito:",
          pares: [["Parar a linha à toa (processo estava ok)", "Erro tipo I"], ["Deixar passar um processo desregulado", "Erro tipo II"], ["Probabilidade do alarme falso", "α"], ["Probabilidade de deixar passar", "β"]],
          explicacao: "Tipo I: grito sem lobo (α). Tipo II: lobo sem grito (β)." },
        { id: "m13-q47", nivel: "facil", tipo: "calculo", pergunta: "Fornecedor promete 500 g. Amostra: n = 25, x̄ = 497 g, s = 5 g. Qual a estatística t?",
          resposta: -3, tolerancia: 0.01, unidade: "",
          resolucao: "t = (x̄ − μ₀) ÷ (s ÷ √n)\n= (497 − 500) ÷ (5 ÷ √25)\n= −3 ÷ 1 = −3",
          explicacao: "|−3| > 2,064 (t crítico para n = 25 e 95%): rejeita H0. O pacote está mais leve que o prometido." },
        { id: "m13-q48", nivel: "facil", tipo: "vf", pergunta: "Não rejeitar H0 prova que H0 é verdadeira.",
          correta: false, explicacao: "Só significa que não houve evidência suficiente contra H0. Com mais dados, a conclusão pode mudar." },
        { id: "m13-q49", nivel: "facil", tipo: "lacuna", pergunta: "H0, a hipótese ___, afirma que nada mudou.",
          opcoes: ["nula", "alternativa", "principal", "final"], correta: 0,
          explicacao: "H0 = hipótese nula (\"não há diferença\"). H1 = hipótese alternativa (o que se quer provar)." },
        { id: "m13-q117", nivel: "medio", tipo: "multipla", pergunta: "Você quer verificar se o fornecedor está entregando pacotes MAIS LEVES que o prometido (500 g). Qual H1?",
          opcoes: ["μ ≠ 500", "μ < 500", "μ > 500", "μ = 500"], correta: 1,
          explicacao: "Unilateral à esquerda." },
        { id: "m13-q118", nivel: "medio", tipo: "calculo", pergunta: "H0: p = 2%. Amostra de 500 com 16 defeituosas. Qual a estatística z? (2 casas)",
          resposta: 1.92, tolerancia: 0.02, unidade: "",
          resolucao: "p̂ = 0,032\nz = (0,032 − 0,02) ÷ √(0,02 × 0,98 ÷ 500) = 0,012 ÷ 0,00626 ≈ 1,92",
          explicacao: "Unilateral a 5%: 1,92 > 1,645 ⇒ rejeita H0." },
        { id: "m13-q119", nivel: "medio", tipo: "vf", pergunta: "Se o IC 95% da média não contém o valor de H0, o teste bilateral a 5% rejeita H0.",
          correta: true, explicacao: "IC e teste são duas faces da mesma análise." },
        { id: "m13-q120", nivel: "dificil", tipo: "ligar", pergunta: "Ligue a mudança ao efeito sobre o poder do teste:",
          pares: [["Aumentar o tamanho da amostra", "Aumenta o poder"], ["Efeito real maior", "Aumenta o poder"], ["Maior variabilidade (σ)", "Diminui o poder"], ["α menor (mais rigoroso)", "Diminui o poder"]],
          explicacao: "Planeje n pelo poder desejado." },
        { id: "m13-q121", nivel: "dificil", tipo: "multipla", pergunta: "Com 1 milhão de caixas, uma diferença de 0,05 g no peso médio deu p < 0,001. O que concluir?",
          opcoes: ["É uma diferença muito importante", "É estatisticamente significativa, mas provavelmente irrelevante na prática", "O teste está errado", "Deve-se parar a linha"], correta: 1,
          explicacao: "Avalie o tamanho do efeito." },
        { id: "m13-q122", nivel: "dificil", tipo: "calculo", pergunta: "Serão feitos 10 testes e se quer manter α global de 5%. Pela correção de Bonferroni, qual o α de cada teste (%)?",
          resposta: 0.5, tolerancia: 0, unidade: "%",
          resolucao: "α = 5% ÷ 10 = 0,5%",
          explicacao: "Reduz os falsos positivos em testes múltiplos." }
      ]
    },

    {
      id: "m13-l11",
      titulo: "Correlação e regressão",
      icone: "🔗",
      objetivos: {
        facil: ["Interpretar o coeficiente de correlação r", "Calcular a inclinação e o intercepto da regressão", "Diferenciar correlação e causa"],
        medio: ["Calcular r a partir de Sxy, Sxx e Syy", "Interpretar R² e resíduos", "Usar a regressão para prever dentro da faixa dos dados"],
        dificil: ["Identificar variáveis de confusão", "Reconhecer padrões problemáticos nos resíduos", "Explicar regressão múltipla, sobreajuste e o papel de experimentos"]
      },
      prerequisitos: [{ texto: "Teste de hipóteses", licao: "m13-l10" }],
      resumo: {
        facil: "**r** vai de −1 a +1 (força e sentido da relação linear). Regressão: ŷ = a + b·x, com b = Sxy ÷ Sxx e a = ȳ − b·x̄. **Correlação não é causa.**",
        medio: "r = Sxy ÷ √(Sxx·Syy); **R² = r²** é a fração da variação explicada. **Resíduos** (y − ŷ) devem ser aleatórios. Preveja só dentro da faixa observada.",
        dificil: "**Confundidores** criam correlações sem causa direta (turno da noite afeta refugo e escala de operador). Resíduos em curva ou em funil indicam modelo inadequado. **Regressão múltipla** separa efeitos, mas modelos complexos demais **sobreajustam**. Causa se confirma melhor com **experimentos** (DOE)."
      },
      blocos: [
        { nivel: "facil", tipo: "recall", pergunta: "Quanto mais sorvete se vende, mais pessoas se afogam. O sorvete causa afogamento?", resposta: "Não! Os dois aumentam no **verão** (variável oculta: calor). Correlação não é causalidade." },
        { nivel: "facil", tipo: "formula", titulo: "Correlação de Pearson (r)", texto: "Mede a força da relação **linear**, de −1 a +1.\n**r = Sxy ÷ √(Sxx · Syy)**\n|r| > 0,7 forte · 0,3 a 0,7 moderada · < 0,3 fraca.\nExcel: **CORREL**." },
        { nivel: "facil", tipo: "atencao", titulo: "Correlação ≠ causa", texto: "\"O refugo sobe quando o João trabalha.\" Pode ser o João… ou o turno da noite, com matéria-prima de outro fornecedor.\nCorrelação é **pista** para investigar (Ishikawa, 5 Porquês), não conclusão.\n🔊 **\"Sorvete não afoga ninguém.\"**" },
        { nivel: "facil", tipo: "formula", titulo: "Regressão linear simples", texto: "**ŷ = a + b·x**\n**b = Sxy ÷ Sxx** · **a = ȳ − b·x̄**\n**R² = r²**: fração da variação de y explicada por x." },
        { nivel: "facil", tipo: "atencao", titulo: "Cuidado ao extrapolar", texto: "Não use a reta muito fora da faixa dos dados. Ex.: uma reta de treinamento × erros pode prever \"−0,6 erros\" para 12 horas, o que é impossível." },
        { nivel: "facil", tipo: "serio", titulo: "Custo × volume", texto: "Produção (mil peças): 2, 4, 6, 8, 10\nCusto (mil R$): 15, 19, 26, 29, 36\nSxy = 104; Sxx = 40 → b = **2,6**; a = 25 − 2,6 × 6 = **9,4**\n**ŷ = 9,4 + 2,6x** → custo fixo ≈ R$ 9,4 mil; variável ≈ R$ 2,60/peça\nr = 0,993 · R² = 0,987" },
        { nivel: "facil", tipo: "conexao", titulo: "Conexão", texto: "Regressão com o tempo no eixo x = **previsão de demanda com tendência** (Módulo 3). Com volume no eixo x = separar **custo fixo e variável** (Módulo 8)." },
        { nivel: "medio", tipo: "formula", titulo: "Coeficiente de correlação", texto: "r = Sxy ÷ √(Sxx · Syy)\nSxx = Σ(x − x̄)² · Syy = Σ(y − ȳ)² · Sxy = Σ(x − x̄)(y − ȳ)", legenda: [["R² = r²", "fração da variação de y explicada pela reta"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Custo × volume", texto: "Sxy = 104, Sxx = 40, Syy = 274,8.\nr = 104 ÷ √(40 × 274,8) = 104 ÷ 104,8 ≈ **0,99**; R² ≈ **98%**." },
        { nivel: "medio", tipo: "conceito", titulo: "Resíduos", texto: "Resíduo = valor real − valor previsto. Num bom modelo, os resíduos ficam **espalhados ao acaso** em torno de zero, sem padrão ao longo de x nem do tempo." },
        { nivel: "dificil", tipo: "conceito", titulo: "Variáveis de confusão", texto: "O refugo é maior quando o João trabalha — mas o João só trabalha à noite, quando a iluminação é pior e o setup é feito às pressas. O **turno** é um confundidor. Compare o João com outros operadores no **mesmo turno** (estratificação) ou planeje um experimento." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Resíduos com padrão", texto: "**Curva:** a relação não é linear (use termo quadrático ou transformação).\n**Funil:** a variação cresce com x (heterocedasticidade) — intervalos de previsão ficam errados.\n**Padrão no tempo:** falta uma variável ligada ao tempo (desgaste, sazonalidade)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Regressão múltipla e sobreajuste", texto: "Com várias variáveis (ŷ = a + b₁x₁ + b₂x₂ + …), estima-se o efeito de cada uma **mantendo as outras fixas**. Muitas variáveis para poucos dados **sobreajustam**: o modelo decora o ruído e prevê mal dados novos. Valide com dados que não foram usados no ajuste." }
      ],
      questoes: [
        { id: "m13-q50", nivel: "facil", tipo: "multipla", pergunta: "Um coeficiente de correlação r = −0,9 indica:",
          opcoes: ["Relação fraca", "Relação forte e negativa", "Ausência de relação", "Que x causa y"], correta: 1,
          explicacao: "|r| = 0,9 é forte; o sinal negativo diz que, quando uma sobe, a outra desce. E correlação não prova causa!" },
        { id: "m13-q51", nivel: "facil", tipo: "calculo", pergunta: "Na regressão custo × volume, Sxy = 104 e Sxx = 40. Qual a inclinação b?",
          resposta: 2.6, tolerancia: 0.01, unidade: "",
          resolucao: "b = Sxy ÷ Sxx = 104 ÷ 40 = 2,6",
          explicacao: "Cada mil peças a mais custa R$ 2,6 mil a mais: é o custo variável (R$ 2,60 por peça)." },
        { id: "m13-q52", nivel: "facil", tipo: "calculo", pergunta: "A reta é ŷ = 9,4 + 2,6x (custo em mil R$, x em mil peças). Qual o custo previsto para 12 mil peças (mil R$)?",
          resposta: 40.6, tolerancia: 0.01, unidade: "mil R$",
          resolucao: "ŷ = 9,4 + 2,6 × 12 = 9,4 + 31,2 = 40,6 mil R$",
          explicacao: "12 está pouco acima da faixa dos dados (2 a 10): extrapolação leve, aceitável com cautela." },
        { id: "m13-q53", nivel: "facil", tipo: "caso", contexto: "O refugo é maior sempre que o operador João trabalha. O João trabalha só no turno da noite, quando chega o lote de outro fornecedor.",
          pergunta: "Qual a melhor atitude?",
          opcoes: ["Demitir o João", "Investigar variáveis ocultas (turno, lote, máquina) antes de concluir", "Ignorar, porque correlação não significa nada", "Trocar o gráfico de dispersão por pizza"], correta: 1,
          explicacao: "Correlação é pista, não prova. Pode ser o fornecedor, a temperatura da noite etc. Use Ishikawa e, se possível, um teste controlado." },
        { id: "m13-q54", nivel: "facil", tipo: "calculo", pergunta: "A correlação entre duas variáveis é r = 0,9. Qual o R² em %?",
          resposta: 81, tolerancia: 0.1, unidade: "%",
          resolucao: "R² = r² = 0,9² = 0,81 → 81%",
          explicacao: "81% da variação de y é explicada por x; 19% vem de outras causas." },
        { id: "m13-q123", nivel: "medio", tipo: "calculo", pergunta: "Sxy = 104, Sxx = 40 e Syy = 274,8. Qual o coeficiente de correlação r? (2 casas)",
          resposta: 0.99, tolerancia: 0.01, unidade: "",
          resolucao: "r = 104 ÷ √(40 × 274,8) = 104 ÷ √10.992 ≈ 104 ÷ 104,84 ≈ 0,99",
          explicacao: "Relação linear muito forte." },
        { id: "m13-q124", nivel: "medio", tipo: "multipla", pergunta: "Num bom modelo de regressão, os resíduos devem:",
          opcoes: ["Crescer com x", "Formar uma curva", "Ficar espalhados ao acaso em torno de zero", "Ser todos positivos"], correta: 2,
          explicacao: "Padrões indicam modelo inadequado." },
        { id: "m13-q125", nivel: "medio", tipo: "vf", pergunta: "Um R² de 0,81 corresponde a r = ±0,9.",
          correta: true, explicacao: "R² = r²." },
        { id: "m13-q126", nivel: "dificil", tipo: "caso", contexto: "O refugo é maior quando o operador João trabalha. O João só trabalha no turno da noite.",
          pergunta: "Qual análise isola o efeito do operador?",
          opcoes: ["Demitir o João", "Comparar o João com outros operadores no mesmo turno (estratificar) ou fazer um experimento", "Aumentar o turno da noite", "Nenhuma: correlação prova causa"], correta: 1,
          explicacao: "O turno é uma variável de confusão." },
        { id: "m13-q127", nivel: "dificil", tipo: "ligar", pergunta: "Ligue o padrão dos resíduos ao problema:",
          pares: [["Curva", "Relação não linear"], ["Funil", "Variância que cresce com x"], ["Tendência no tempo", "Falta uma variável ligada ao tempo"]],
          explicacao: "Olhar os resíduos é obrigatório." },
        { id: "m13-q128", nivel: "dificil", tipo: "vf", pergunta: "Incluir muitas variáveis num modelo com poucos dados sempre melhora as previsões para dados novos.",
          correta: false, explicacao: "Causa sobreajuste; valide com dados não usados no ajuste." }
      ]
    },

    {
      id: "m13-l12",
      titulo: "👾 Chefão do Módulo 13",
      icone: "👾",
      objetivos: {
        facil: ["Revisar os conceitos do módulo", "Calcular % fora da especificação e custo", "Relacionar estatística com o Módulo 1"],
        medio: ["Calcular Cp, Cpk, IC e percentis no mesmo caso", "Recomendar ações com base em dados", "Transformar resultados estatísticos em R$"],
        dificil: ["Integrar amostragem, inferência e economia numa recomendação", "Avaliar riscos de decisões baseadas em amostras", "Comunicar incertezas à diretoria"]
      },
      prerequisitos: [{ texto: "Todas as lições do Módulo 13", licao: "m13-l1" }],
      resumo: {
        facil: "No caso dos parafusos: 2,28% acima do limite; centralizar a média reduz para 0,27%. Inspeção 100% não ataca a causa.",
        medio: "Cp e Cpk mostram se o problema é variação ou centralização; IC indica a incerteza da média; o custo dos defeitos em R$ convence a diretoria.",
        dificil: "Recomendações sólidas declaram a **incerteza** (IC), os **pressupostos** (normalidade, amostra aleatória) e o **plano de verificação** (CEP depois da mudança)."
      },
      blocos: [
        { nivel: "facil", tipo: "serio", titulo: "Parafusos Serra", texto: "O cliente ameaçou trocar de fornecedor. Especificação: **50,0 ± 0,3 mm** (49,7 a 50,3).\nAmostra de 30 parafusos: **x̄ = 50,1 mm**, **s = 0,1 mm** (normal).\nProdução: **200.000/mês**. Cada defeituoso custa **R$ 0,50**.\nO supervisor quer resolver com **inspeção 100%**." },
        { nivel: "facil", tipo: "conceito", titulo: "✅ Você só avança se souber…", texto: "• População × amostra; tipos de variável\n• Escolher o gráfico certo\n• Média, mediana, moda, quartis e outliers\n• Desvio-padrão (n − 1) e CV\n• OU soma, E multiplica; Binomial e Poisson\n• Regra 68-95-99,7 e o escore Z\n• % fora da especificação\n• Erro padrão, IC e tamanho de amostra\n• H0/H1, p-valor, erros I e II\n• r, R² e regressão, sem confundir com causa" },
        { nivel: "facil", tipo: "dica", titulo: "Estratégia", texto: "Esta lição mistura **Estatística com o Módulo 1** (intercalação). Se errar, a questão volta na revisão amanhã." },
        { nivel: "medio", tipo: "conceito", titulo: "✅ Checklist (Médio)", texto: "• Tipos de amostragem · exatidão × precisão\n• Sturges · gráfico de sequência · estratificação\n• Média geométrica e harmônica\n• Percentis e boxplots comparativos\n• Soma de variâncias\n• Cp e % fora · paralelo e Poisson · condicional\n• x = μ + zσ · IC para proporção · teste para proporção\n• r, R² e resíduos" },
        { nivel: "dificil", tipo: "conceito", titulo: "✅ Checklist (Difícil)", texto: "• Vieses e definição operacional · Anscombe\n• Médias de porcentagens · metas por percentil\n• R̄/d₂ · curto × longo prazo · Taguchi\n• Sobreenchimento · Bayes · causa comum\n• Normalidade e caudas · população finita\n• Poder · significância × importância · testes múltiplos\n• Confundidores · resíduos · sobreajuste" }
      ],
      questoes: [
        { id: "m13-q55", nivel: "facil", tipo: "calculo", pergunta: "Parafusos: x̄ = 50,1 mm, s = 0,1 mm, LSE = 50,3 mm. Qual a % acima do limite superior?",
          resposta: 2.28, tolerancia: 0.05, unidade: "%",
          resolucao: "Z = (50,3 − 50,1) ÷ 0,1 = 2\nP(Z > 2) = 2,28%\n(Abaixo do LIE: Z = −4 → ≈ 0,003%, desprezível)",
          explicacao: "O processo está descentralizado para cima: quase todo o defeito vem do limite superior." },
        { id: "m13-q56", nivel: "facil", tipo: "calculo", pergunta: "Com 2,28% de defeituosos e 200.000 parafusos por mês, quantos defeituosos saem por mês?",
          resposta: 4560, tolerancia: 15, unidade: "parafusos",
          resolucao: "200.000 × 0,0228 = 4.560 parafusos/mês\nCusto: 4.560 × R$ 0,50 = R$ 2.280/mês",
          explicacao: "Transformar % em quantidade e em R$ é o que convence a diretoria." },
        { id: "m13-q57", nivel: "facil", tipo: "calculo", pergunta: "Se o processo for recentralizado em 50,0 mm (mesmo s = 0,1), qual a % total fora de 49,7–50,3 mm?",
          resposta: 0.27, tolerancia: 0.02, unidade: "%",
          resolucao: "Z = ±0,3 ÷ 0,1 = ±3\nCada cauda: 0,135% → total 0,27%\n540 defeituosos/mês → R$ 270 (economia de R$ 2.010/mês)",
          explicacao: "Centralizar a média é, muitas vezes, a melhoria mais barata que existe." },
        { id: "m13-q58", nivel: "facil", tipo: "caso", contexto: "O supervisor dos Parafusos Serra propõe inspecionar 100% dos parafusos no final da linha.",
          pergunta: "Qual a visão de engenharia de produção sobre isso?",
          opcoes: ["Resolve de vez, pois nenhum defeito chega ao cliente", "Não ataca a causa: é melhor centralizar o processo e controlar a variação com CEP", "Basta inspecionar metade dos parafusos", "O problema é do cliente, que é exigente demais"], correta: 1,
          explicacao: "Inspeção só separa o defeito já produzido, custa caro e falha por fadiga (erro tipo II). Qualidade se constrói no processo (Deming)." },
        { id: "m13-q59", nivel: "facil", tipo: "multipla", pergunta: "(M1 + M13) O objetivo de desempenho CONFIABILIDADE (entregar no prazo prometido) depende mais de:",
          opcoes: ["A média do lead time", "A variação do lead time", "A moda do preço", "O número de fornecedores"], correta: 1,
          explicacao: "Com pouca variação, dá para prometer um prazo e cumprir. Com muita variação, qualquer promessa vira aposta." },
        { id: "m13-q60", nivel: "facil", tipo: "calculo", pergunta: "(M1 + M13) A produtividade de uma equipe tem média 50 peças/h e s = 5. Num dia foram 38 peças/h. Qual o Z?",
          resposta: -2.4, tolerancia: 0.01, unidade: "",
          resolucao: "Z = (38 − 50) ÷ 5 = −12 ÷ 5 = −2,4",
          explicacao: "|Z| > 2 é raro (≈ 0,8% abaixo): não foi um dia normal. Investigue a causa especial (máquina parada? falta de material?). É a lógica do CEP." },
        { id: "m13-q61", nivel: "facil", tipo: "vf", pergunta: "(M1 + M13) A Estatística é mais usada na Engenharia da Qualidade, mas também aparece em Operações, Logística e Pesquisa Operacional.",
          correta: true, explicacao: "Previsão de demanda (Operações), estoque de segurança (Logística), simulação e filas (Pesquisa Operacional)…" },
        { id: "m13-q129", nivel: "medio", tipo: "calculo", pergunta: "Parafusos: especificação 49,7–50,3 mm, x̄ = 50,1 mm, s = 0,1 mm. Qual o Cpk? (2 casas)",
          resposta: 0.67, tolerancia: 0.01, unidade: "",
          resolucao: "(LSE − x̄) ÷ 3s = 0,2 ÷ 0,3 = 0,67\n(x̄ − LIE) ÷ 3s = 0,4 ÷ 0,3 = 1,33\nCpk = 0,67 (Cp = 0,6 ÷ 0,6 = 1,0)",
          explicacao: "Cp = 1 e Cpk = 0,67: o problema principal é a centralização." },
        { id: "m13-q130", nivel: "medio", tipo: "calculo", pergunta: "Amostra de 30 parafusos: x̄ = 50,1 mm, s = 0,1 mm. Qual a margem de erro do IC 95% da média (mm)? (use z = 1,96; 3 casas)",
          resposta: 0.036, tolerancia: 0.001, unidade: "mm",
          resolucao: "E = 1,96 × 0,1 ÷ √30 ≈ 1,96 × 0,01826 ≈ 0,0358 mm",
          explicacao: "A média está entre ~50,064 e 50,136 mm: claramente acima de 50,0." },
        { id: "m13-q131", nivel: "medio", tipo: "multipla", pergunta: "Cp = 1,0 e Cpk = 0,67. Qual a ação prioritária?",
          opcoes: ["Reduzir a variação", "Centralizar a média no alvo", "Aumentar a inspeção", "Mudar a especificação"], correta: 1,
          explicacao: "Centralizar é mais barato e resolve a maior parte do defeito." },
        { id: "m13-q132", nivel: "dificil", tipo: "vf", pergunta: "Uma recomendação baseada em amostra deve declarar a incerteza (intervalo de confiança) e os pressupostos usados.",
          correta: true, explicacao: "Transparência sobre o risco da decisão." },
        { id: "m13-q133", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva a recomendação final para os Parafusos Serra com números, incerteza e plano de verificação.",
          respostaModelo: "**Diagnóstico:** média de 50,1 mm (IC 95% ≈ 50,06 a 50,14 mm) acima do alvo, s = 0,1 mm; Cp = 1,0 e Cpk = 0,67; ~2,28% acima do LSE ≈ 4.560 parafusos/mês ≈ R$ 2.280/mês. **Ação:** recentralizar a média em 50,0 mm (ajuste de máquina) — defeitos esperados ≈ 0,27% (≈ R$ 270/mês); depois, projeto para reduzir s e atingir Cpk ≥ 1,33. **Pressupostos:** normalidade aproximada e amostra representativa. **Verificação:** carta de controle X̄-R por 4 semanas e nova amostra para confirmar o Cpk; inspeção 100% não é recomendada como solução permanente.",
          criterios: ["Usa Cp/Cpk e % fora com números", "Traduz em custo", "Declara incerteza ou pressupostos", "Define plano de verificação (CEP, nova amostra)"] }
      ]
    }
  ],

  glossario: [
    { termo: "População", definicao: "Conjunto completo de itens ou pessoas que se quer estudar." },
    { termo: "Amostra", definicao: "Parte da população efetivamente medida; deve ser aleatória e representativa." },
    { termo: "Parâmetro", definicao: "Medida da população (μ, σ, p)." },
    { termo: "Estatística", definicao: "Medida calculada na amostra (x̄, s, p̂)." },
    { termo: "Variável qualitativa", definicao: "Expressa categorias (nominal ou ordinal)." },
    { termo: "Variável quantitativa", definicao: "Expressa números (discreta, por contagem; contínua, por medição)." },
    { termo: "Histograma", definicao: "Gráfico de barras coladas que mostra a distribuição de uma variável contínua por faixas." },
    { termo: "Diagrama de Pareto", definicao: "Barras em ordem decrescente com curva acumulada; separa os poucos vitais dos muitos triviais." },
    { termo: "Média", definicao: "Soma dos valores dividida pela quantidade." },
    { termo: "Mediana", definicao: "Valor central dos dados ordenados; resistente a outliers." },
    { termo: "Moda", definicao: "Valor mais frequente." },
    { termo: "Amplitude", definicao: "Maior valor menos o menor." },
    { termo: "Variância", definicao: "Média dos quadrados dos desvios em relação à média." },
    { termo: "Desvio padrão", definicao: "Raiz da variância; variação típica na unidade dos dados." },
    { termo: "Coeficiente de variação", definicao: "Desvio padrão dividido pela média, em %; compara variações de escalas diferentes." },
    { termo: "Quartis", definicao: "Valores que dividem os dados ordenados em quatro partes iguais." },
    { termo: "Boxplot", definicao: "Gráfico com mediana, quartis e outliers." },
    { termo: "Outlier", definicao: "Valor muito distante dos demais; investigar antes de descartar." },
    { termo: "Probabilidade", definicao: "Medida, de 0 a 1, da chance de um evento ocorrer." },
    { termo: "Eventos independentes", definicao: "Um não altera a probabilidade do outro; P(A e B) = P(A)·P(B)." },
    { termo: "Distribuição binomial", definicao: "Número de sucessos em n tentativas independentes com a mesma probabilidade p." },
    { termo: "Distribuição de Poisson", definicao: "Número de ocorrências em um intervalo, com taxa média λ." },
    { termo: "Distribuição normal", definicao: "Curva em forma de sino, simétrica, definida por μ e σ." },
    { termo: "Escore Z", definicao: "Quantos desvios padrão um valor está da média: Z = (x − μ)/σ." },
    { termo: "Teorema Central do Limite", definicao: "Médias de amostras tendem à normal, com desvio padrão σ/√n." },
    { termo: "Erro padrão", definicao: "Desvio padrão da média amostral: σ/√n." },
    { termo: "Intervalo de confiança", definicao: "Faixa que, com certa confiança, contém o parâmetro da população." },
    { termo: "Teste de hipóteses", definicao: "Procedimento para decidir, com dados, entre H0 e H1 controlando o risco de erro." },
    { termo: "Valor-p", definicao: "Probabilidade de observar um resultado tão extremo se H0 for verdadeira." },
    { termo: "Correlação (r)", definicao: "Força e sentido da relação linear entre duas variáveis, de −1 a 1." },
    { termo: "Regressão linear", definicao: "Reta que estima uma variável a partir de outra: y = a + b·x." },
    { termo: "Cp e Cpk", definicao: "Índices de capacidade: Cp compara a tolerância com a variação; Cpk considera também a centralização." }
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
