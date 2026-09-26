/* =====================================================================
   MÓDULO 4 — ENGENHARIA DE MÉTODOS (estudo de métodos e tempos,
   tempo padrão, takt time, balanceamento e gargalos)
   Formato com níveis: veja o cabeçalho de "modulo-02.js".
   Exemplos numéricos são ILUSTRATIVOS (criados para ensino).
   ===================================================================== */
(window.MODULOS = window.MODULOS || []).push({
  id: "m04",
  numero: 4,
  ordem: 4,
  titulo: "Engenharia de Métodos",
  icone: "⏱️",
  objetivo: "Melhorar métodos de trabalho, medir tempos com rigor, calcular o tempo padrão e usá-lo para balancear linhas e atacar gargalos.",
  conquista: { id: "mod-m04", nome: "Mestre do Cronômetro", icone: "⏱️", descricao: "Concluiu o Módulo 4 — Engenharia de Métodos." },

  resumoAudio:
    "Antes de medir, melhore o método: medir um método ruim é padronizar desperdício. " +
    "No fluxograma, só a operação costuma agregar valor; transporte, inspeção, espera e armazenagem não transformam o produto. " +
    "Eliminar, Combinar, Rearranjar e Simplificar, nessa ordem. " +
    "Na cronoanálise, divida em elementos, explique o objetivo ao operador e calcule quantos ciclos medir. " +
    "Observo, Normalizo, Padronizo: o tempo observado vezes o ritmo dá o tempo normal; com as tolerâncias, o tempo padrão. " +
    "Com o tempo padrão calculamos capacidade, custo, eficiência e utilização. " +
    "Takt é o cliente, ciclo é a linha: takt é o tempo disponível dividido pela demanda. " +
    "O número mínimo de postos é a soma dos tempos dividida pelo takt, arredondada para cima. " +
    "A linha anda no ritmo do posto mais lento, o gargalo. Uma hora perdida no gargalo é uma hora perdida no sistema inteiro.",

  licoes: [
    /* ==================================================================
       LIÇÃO 1 — ESTUDO DE MÉTODOS
       ================================================================== */
    {
      id: "m04-l1",
      titulo: "Estudo de métodos",
      icone: "🔍",
      objetivos: {
        facil: ["Diferenciar estudo de métodos (como fazer) e medida do trabalho (quanto tempo)", "Reconhecer os cinco símbolos do fluxograma de processo", "Aplicar perguntas básicas (o quê, por quê, onde, quando, quem, como) a uma tarefa"],
        medio: ["Montar um fluxograma de processo e calcular a parcela do tempo que agrega valor", "Aplicar a lógica ECRS para gerar melhorias", "Aplicar princípios de economia de movimentos a um posto de trabalho"],
        dificil: ["Escolher a ferramenta de análise adequada ao problema (fluxograma, espaguete, mapa de fluxo de valor)", "Analisar trade-offs entre rapidez, ergonomia e flexibilidade de um método", "Criticar a separação taylorista entre planejar e executar e propor análise participativa"]
      },
      prerequisitos: [{ texto: "História: Taylor e os Gilbreth (Módulo 1)", licao: "m01-l2" }],
      resumo: {
        facil: "O **estudo do trabalho** tem duas partes: **estudo de métodos** (como fazer melhor) e **medida do trabalho** (quanto tempo leva). Primeiro se melhora o método, depois se mede. O fluxograma usa cinco símbolos: **operação, transporte, inspeção, espera e armazenagem**; em geral só a operação transforma o produto.",
        medio: "O fluxograma registra cada etapa com tempo e distância e mostra quanto do tempo agrega valor. As melhorias seguem **ECRS**: Eliminar, Combinar, Rearranjar, Simplificar. Os princípios de economia de movimentos (Barnes) organizam o corpo, o posto e as ferramentas.",
        dificil: "A ferramenta depende do problema: fluxograma (sequência de um item), espaguete (deslocamentos), mapa de fluxo de valor (sistema inteiro). O método mais rápido pode ser pior para a ergonomia ou a flexibilidade. Métodos duráveis nascem da participação de quem executa, não apenas do analista."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Antes de cronometrar, pergunte: **esse é o melhor jeito de fazer?** Medir um método ruim é **padronizar desperdício**. Muitas melhorias de produtividade vêm só de mudar a sequência, o posto ou a ferramenta, sem investimento." },
        { nivel: "facil", tipo: "conceito", titulo: "Estudo do trabalho", texto: "Segundo a tradição da OIT, o estudo do trabalho tem duas partes:\n• **Estudo de métodos:** registrar e melhorar **como** o trabalho é feito.\n• **Medida do trabalho:** determinar **quanto tempo** um trabalhador qualificado leva para fazê-lo.\nOrdem certa: **método primeiro, tempo depois**." },
        { nivel: "facil", tipo: "conceito", titulo: "Os cinco símbolos do fluxograma", texto: "**○ Operação:** transforma o produto (usinar, montar, embalar).\n**⇨ Transporte:** move de um lugar a outro.\n**□ Inspeção:** verifica quantidade ou qualidade.\n**D Espera:** atraso, o item parado aguardando.\n**▽ Armazenagem:** guardado de forma controlada." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“O Tio Ignorou a Espera no Armazém”**: Operação, Transporte, Inspeção, Espera, Armazenagem." },
        { nivel: "facil", tipo: "bobo", titulo: "O sanduíche", texto: "Fazer um sanduíche: ir à geladeira (transporte), esperar o pão tostar (espera), ver se o queijo não está vencido (inspeção), montar (operação).\nSó **montar** transforma o sanduíche. O resto é necessário, mas não agrega valor: é o que se tenta reduzir." },
        { nivel: "facil", tipo: "conceito", titulo: "Perguntas básicas", texto: "Para cada etapa: **O quê** está sendo feito? **Por quê** é necessário? **Onde, quando, quem, como?** E, para cada resposta: **dá para fazer de outro jeito?**" },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum", texto: "Achar que transporte e inspeção “agregam valor” porque dão trabalho. O cliente paga pela transformação, não pelo passeio da peça pela fábrica." },

        { nivel: "medio", tipo: "passos", titulo: "Como montar um fluxograma de processo", texto: "1. Escolha **o que seguir**: o material ou o operador (não misture).\n2. Registre **cada etapa** com símbolo, tempo e distância.\n3. **Resuma** por símbolo (quantidade, tempo, metros).\n4. **Questione** cada etapa (por quê? dá para eliminar?).\n5. Proponha o método novo e **compare** antes × depois." },
        { nivel: "medio", tipo: "exemplo", titulo: "Recebimento de matéria-prima (ilustrativo)", texto: "12 etapas registradas:\n○ 3 operações = 6 min\n⇨ 4 transportes = 8 min, 120 m\n□ 2 inspeções = 4 min\nD 2 esperas = 25 min\n▽ 1 armazenagem\nTempo total = **43 min**; tempo de operação = 6 min → **14% agrega valor**. As esperas (25 min) são o primeiro alvo." },
        { nivel: "medio", tipo: "conceito", titulo: "ECRS", texto: "Ordem de ataque das melhorias:\n**E**liminar (a etapa é mesmo necessária?)\n**C**ombinar (duas inspeções numa só)\n**R**earranjar (mudar a sequência ou o local)\n**S**implificar (dispositivo, gabarito, ferramenta melhor)\nEliminar vem primeiro porque dá o maior ganho com o menor custo." },
        { nivel: "medio", tipo: "conceito", titulo: "Economia de movimentos (Barnes)", texto: "**Corpo:** as duas mãos começam e terminam juntas; movimentos simétricos, curtos e contínuos.\n**Posto:** materiais em **local fixo e próximo**, dentro da área de alcance; alimentação por gravidade.\n**Ferramentas:** dispositivos para segurar a peça (libera as mãos), ferramentas combinadas, pré-posicionadas." },
        { nivel: "medio", tipo: "conceito", titulo: "Therbligs", texto: "Frank e Lillian **Gilbreth** decompuseram o trabalho manual em micromovimentos (therbligs): procurar, selecionar, pegar, transportar, posicionar, montar, usar, soltar, inspecionar, segurar, esperar…\nAlvo: eliminar os **ineficientes** (procurar, selecionar, segurar, esperar)." },
        { nivel: "medio", tipo: "dica", titulo: "Na prática", texto: "Filmar o posto (com consentimento e explicando o objetivo) e rever em câmera lenta revela movimentos que ninguém percebe ao vivo." },

        { nivel: "dificil", tipo: "conceito", titulo: "Qual ferramenta usar?", texto: "**Fluxograma de processo:** sequência detalhada de um item ou operador.\n**Diagrama de espaguete:** traça o caminho real sobre a planta; mostra deslocamentos e cruzamentos.\n**Mapa de fluxo de valor (VSM, Módulo 6):** visão do sistema, com fluxo de material e informação e lead time.\nEscolha pelo **problema**: deslocamento excessivo pede espaguete; lead time longo pede VSM." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Rápido nem sempre é melhor", texto: "Um método mais rápido pode concentrar **movimentos curtos e repetitivos** no punho, aumentando risco de LER/DORT (Módulo 10). Um posto superespecializado pode perder **flexibilidade** para trocar de produto.\nAvalie tempo, ergonomia, qualidade e flexibilidade juntos. A NR-17 exige que a organização do trabalho considere as características dos trabalhadores." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Crítica ao taylorismo", texto: "Taylor separava quem **planeja** (analista) de quem **executa** (operador). Isso gera métodos que ignoram o saber de quem faz e resistência à mudança.\nAbordagens atuais (Kaizen, Lean) envolvem os operadores na análise: o método fica melhor e é mantido." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: posto de embalagem", texto: "O operador anda **8 m por ciclo** para buscar caixas vazias.\nProposta: **flow rack** (estante com rolos inclinados) ao lado do posto, abastecido pela logística interna.\nGanhos: tempo e fadiga. Custos e riscos: compra da estante, espaço, nova rotina de abastecimento (se falhar, o posto para).\nDecisão: comparar ganho de tempo × custo, testar em piloto com o operador." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• BARNES, R. M. *Estudo de Movimentos e de Tempos: projeto e medida do trabalho*.\n• KANAWATY, G. (org.). *Introduction to Work Study*. OIT.\n• PEINADO, J.; GRAEML, A. R. *Administração da Produção: operações industriais e de serviços* (2007)." }
      ],
      questoes: [
        { id: "m04-q001", nivel: "facil", tipo: "multipla", pergunta: "Qual a diferença entre estudo de métodos e medida do trabalho?",
          opcoes: ["São a mesma coisa", "Métodos: como fazer melhor; medida: quanto tempo leva", "Métodos: quanto tempo leva; medida: como fazer", "Medida do trabalho é só para escritórios"], correta: 1,
          explicacao: "Primeiro se melhora o método; depois se mede o tempo do método melhorado." },
        { id: "m04-q002", nivel: "facil", tipo: "ligar", pergunta: "Ligue o símbolo ao significado no fluxograma de processo:",
          pares: [["○", "Operação"], ["⇨", "Transporte"], ["□", "Inspeção"], ["D", "Espera"], ["▽", "Armazenagem"]],
          explicacao: "“O Tio Ignorou a Espera no Armazém”." },
        { id: "m04-q003", nivel: "facil", tipo: "vf", pergunta: "Transportar a peça de um setor para outro agrega valor ao produto.",
          correta: false, explicacao: "Transporte é necessário, mas não transforma o produto. É candidato a redução." },
        { id: "m04-q004", nivel: "facil", tipo: "lacuna", pergunta: "Antes de medir o tempo, deve-se melhorar o ___.",
          opcoes: ["método", "salário", "estoque", "logotipo"], correta: 0,
          explicacao: "Medir um método ruim é padronizar desperdício." },
        { id: "m04-q005", nivel: "medio", tipo: "calculo", pergunta: "Num fluxograma, o tempo total é 43 min e as operações somam 6 min. Qual a porcentagem do tempo que agrega valor?",
          resposta: 13.95, tolerancia: 0.2, unidade: "%",
          resolucao: "% valor = tempo de operação ÷ tempo total × 100 = 6 ÷ 43 × 100 ≈ 13,95%",
          explicacao: "É comum encontrar menos de 20% de tempo que agrega valor em processos não melhorados." },
        { id: "m04-q006", nivel: "medio", tipo: "ordenar", pergunta: "Ordene as perguntas do ECRS na ordem de ataque:",
          itens: ["Eliminar", "Combinar", "Rearranjar", "Simplificar"],
          explicacao: "Eliminar primeiro: a etapa que não existe não custa nada." },
        { id: "m04-q007", nivel: "medio", tipo: "multipla", pergunta: "Qual destas é uma recomendação de economia de movimentos para o arranjo do posto?",
          opcoes: ["Guardar os materiais onde houver espaço livre", "Manter materiais e ferramentas em local fixo, próximo e dentro da área de alcance", "Usar uma só mão para ter a outra livre", "Fazer movimentos com mudanças bruscas de direção"], correta: 1,
          explicacao: "Local fixo e próximo elimina procurar e reduz o alcance." },
        { id: "m04-q008", nivel: "medio", tipo: "caso", contexto: "No posto de montagem, o operador procura a chave certa numa caixa com várias ferramentas a cada ciclo.",
          pergunta: "Qual therblig ineficiente aparece e qual a melhoria mais direta?",
          opcoes: ["“Montar”; trocar a peça", "“Procurar”; ferramenta em local fixo (quadro de sombras) ou pendurada no ponto de uso", "“Inspecionar”; eliminar a inspeção final", "“Transportar carregado”; comprar uma esteira"], correta: 1,
          explicacao: "Procurar e selecionar são therbligs ineficientes; 5S e ponto de uso resolvem." },
        { id: "m04-q009", nivel: "medio", tipo: "vf", pergunta: "No ECRS, “simplificar” deve ser tentado antes de “eliminar”.",
          correta: false, explicacao: "Eliminar vem primeiro: simplificar uma etapa desnecessária é desperdiçar esforço." },
        { id: "m04-q010", nivel: "dificil", tipo: "caso", contexto: "Um método novo reduz o tempo de ciclo em 15%, mas dobra o número de flexões de punho por minuto.",
          pergunta: "Qual a decisão mais adequada?",
          opcoes: ["Implantar já, pois o ganho de tempo é certo", "Avaliar o risco ergonômico (AET, NR-17), buscar alternativa com dispositivo ou rodízio e só então padronizar", "Descartar qualquer mudança de método", "Implantar e pagar um adicional aos operadores"], correta: 1,
          justificativas: ["Ignora o risco de LER/DORT, que gera afastamentos, custo e queda de qualidade.", "Equilibra produtividade e saúde com análise formal e alternativas.", "Joga fora o ganho sem buscar solução.", "Dinheiro não elimina o risco à saúde."],
          explicacao: "Método bom é rápido, seguro e sustentável." },
        { id: "m04-q011", nivel: "dificil", tipo: "multipla", pergunta: "Você quer mostrar ao gerente que os operadores andam demais no setor. Qual ferramenta comunica isso melhor?",
          opcoes: ["Diagrama de espaguete sobre a planta do setor", "Gráfico de pizza dos tipos de defeito", "Cronograma de Gantt", "Curva de aprendizagem"], correta: 0,
          explicacao: "O espaguete desenha o caminho real e evidencia distâncias e cruzamentos." },
        { id: "m04-q012", nivel: "dificil", tipo: "discursiva", pergunta: "Um analista redesenhou sozinho o método de um posto e os operadores continuaram fazendo do jeito antigo. Analise o que deu errado e proponha uma abordagem melhor.",
          respostaModelo: "O problema é a **separação taylorista** entre quem planeja e quem executa: o método ignorou o conhecimento prático e não teve adesão. Melhor: envolver os operadores desde o registro do método atual (filmagem com consentimento, fluxograma junto), gerar ideias com eles (ECRS), testar em **piloto**, medir antes × depois, documentar o **trabalho padronizado** e treinar. Considerar ergonomia e explicar o porquê da mudança.",
          criterios: ["Identifica a falta de participação como causa", "Propõe envolver os operadores na análise e nas ideias", "Inclui piloto e medição antes × depois", "Menciona padronização/treinamento e ergonomia"] },
        { id: "m04-q013", nivel: "dificil", tipo: "vf", pergunta: "O método que produz no menor tempo é sempre o melhor método.",
          correta: false, explicacao: "Também contam ergonomia, qualidade, segurança e flexibilidade." }
      ]
    },

    /* ==================================================================
       LIÇÃO 2 — CRONOANÁLISE
       ================================================================== */
    {
      id: "m04-l2",
      titulo: "Cronoanálise: medindo o tempo",
      icone: "⏱️",
      objetivos: {
        facil: ["Explicar para que serve a cronoanálise", "Dividir uma operação em elementos com início e fim claros", "Calcular o tempo médio observado"],
        medio: ["Calcular o número de ciclos a medir a partir de uma amostra piloto", "Tratar elementos estranhos e valores atípicos", "Escolher entre leitura contínua e repetitiva"],
        dificil: ["Avaliar a confiabilidade de um estudo de tempos", "Escolher entre cronoanálise, amostragem do trabalho e tempos predeterminados", "Calcular o número de observações na amostragem do trabalho"]
      },
      prerequisitos: [
        { texto: "Estudo de métodos", licao: "m04-l1" },
        { texto: "Amostragem e tamanho de amostra (Módulo 13)", licao: "m13-l9" }
      ],
      resumo: {
        facil: "A cronoanálise mede o tempo de uma operação **com método padronizado** e operador qualificado. A operação é dividida em **elementos** (pegar, posicionar, parafusar…), cronometram-se vários ciclos e calcula-se o **tempo médio observado (TO)**. Sempre com transparência para o operador.",
        medio: "Número de ciclos: **n = (z · s ÷ (Er · x̄))²**, a partir de uma amostra piloto. Elementos estranhos (peça que caiu) saem do elemento regular; valores atípicos são investigados antes de descartar. Leitura contínua não zera o cronômetro; a repetitiva zera a cada elemento.",
        dificil: "Variabilidade alta indica método não padronizado: padronize antes de medir. **Amostragem do trabalho** estima percentuais de tempo com observações aleatórias (n = z² p(1 − p) ÷ E²). **Tempos predeterminados** (MTM, MOST) permitem estimar tempos sem cronometrar, inclusive antes de a linha existir."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "O tempo padrão alimenta **custo do produto, capacidade, PCP, balanceamento de linha e metas**. Um tempo errado contamina todas essas decisões." },
        { nivel: "facil", tipo: "passos", titulo: "Roteiro da cronoanálise", texto: "1. Explicar o **objetivo** ao operador e à supervisão.\n2. Garantir o **método padronizado** e registrá-lo.\n3. Escolher operador **qualificado e treinado**.\n4. Dividir a operação em **elementos** com início e fim claros.\n5. **Cronometrar** vários ciclos.\n6. Calcular o **tempo médio observado**.\n7. Avaliar o **ritmo** e aplicar **tolerâncias** (próxima lição)." },
        { nivel: "facil", tipo: "conceito", titulo: "Elementos", texto: "Partes da operação com **início e fim observáveis**. Ex.: parafusar tampa → (1) pegar tampa, (2) posicionar, (3) parafusar 4 parafusos, (4) soltar na esteira.\nDividir ajuda a padronizar, ver onde está a variação e reaproveitar tempos de elementos comuns." },
        { nivel: "facil", tipo: "exemplo", titulo: "Tempo médio observado", texto: "Cinco ciclos: 2,1 · 1,9 · 2,0 · 2,2 · 1,8 min.\nTO = (2,1 + 1,9 + 2,0 + 2,2 + 1,8) ÷ 5 = 10,0 ÷ 5 = **2,0 min**." },
        { nivel: "facil", tipo: "bobo", titulo: "Cronometrando o café", texto: "Esquentar água, colocar pó, coar, servir. Se um dia a chaleira demorou porque a boca do fogão estava ruim, isso é um **elemento estranho**: não representa o método normal." },
        { nivel: "facil", tipo: "atencao", titulo: "Nunca cronometre escondido", texto: "Além de antiético, destrói a confiança. E as pessoas mudam o comportamento quando descobrem que estão sendo observadas. Explique o objetivo: medir o **método**, não vigiar a pessoa." },

        { nivel: "medio", tipo: "formula", titulo: "Quantos ciclos medir?", texto: "**n = (z · s ÷ (Er · x̄))²** (arredonde para cima)\nUsa uma **amostra piloto** para estimar x̄ e s.",
          legenda: [["n", "número de ciclos necessários"], ["z", "valor da normal para a confiança (1,96 para 95%)"], ["s", "desvio-padrão da amostra piloto"], ["Er", "erro relativo aceito (ex.: 5% = 0,05)"], ["x̄", "média da amostra piloto"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Aplicando", texto: "Piloto de 10 ciclos: x̄ = 2,0 min; s = 0,2 min. Erro de ±5% com 95% de confiança.\nn = (1,96 × 0,2 ÷ (0,05 × 2,0))² = (0,392 ÷ 0,1)² = 3,92² ≈ 15,4 → **16 ciclos**. Como já há 10, faltam **6**.\nCom amostra piloto pequena, alguns livros usam t de Student ou tabelas próprias; a lógica é a mesma." },
        { nivel: "medio", tipo: "conceito", titulo: "Leitura contínua × repetitiva", texto: "**Contínua:** o cronômetro não para; anota-se a leitura no fim de cada elemento e subtrai-se depois. Não perde tempo entre elementos; exige cálculo.\n**Repetitiva (zero):** zera a cada elemento. Leitura direta, mas pode perder frações de tempo nas trocas." },
        { nivel: "medio", tipo: "atencao", titulo: "Estranhos e atípicos", texto: "**Elemento estranho** (peça caiu, conversa, ajuste inesperado): registre à parte, não misture ao elemento regular.\n**Valor atípico** (outlier, Módulo 13): investigue a causa **antes** de descartar; pode revelar um problema real do processo." },
        { nivel: "medio", tipo: "conexao", titulo: "Conexão", texto: "A fórmula de n é a do **tamanho de amostra** para estimar a média (Módulo 13), com o erro expresso em % da média." },

        { nivel: "dificil", tipo: "conceito", titulo: "Amostragem do trabalho", texto: "Técnica de **observações instantâneas em momentos aleatórios** (proposta por Tippett nos anos 1930) para estimar a **porcentagem do tempo** em cada estado: trabalhando, parado, esperando material…\nIdeal para atividades longas e variadas (manutenção, logística, escritório), onde cronometrar ciclos não faz sentido." },
        { nivel: "dificil", tipo: "formula", titulo: "Observações na amostragem do trabalho", texto: "**n = z² · p · (1 − p) ÷ E²**\nEx.: estima-se ociosidade p ≈ 20%, erro absoluto E = ±3 pontos percentuais, 95% → n = 1,96² × 0,2 × 0,8 ÷ 0,03² ≈ **683 observações**.\nReduzir E pela metade **quadruplica** n.",
          legenda: [["p", "proporção estimada do estado de interesse"], ["E", "erro absoluto aceito (em proporção)"], ["z", "1,96 para 95% de confiança"]] },
        { nivel: "dificil", tipo: "conceito", titulo: "Tempos predeterminados", texto: "Sistemas como **MTM** (Methods-Time Measurement, 1948) e **MOST** atribuem tempos tabelados a micromovimentos (alcançar, pegar, mover…). Unidade do MTM: **TMU = 0,036 s**.\nVantagens: estimar tempos **antes de a linha existir**, sem cronometrar e sem avaliação de ritmo.\nLimites: exige analista treinado; menos adequado a tarefas longas e pouco repetitivas." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Quando não confiar no estudo", texto: "• **Variabilidade alta** (ex.: CV acima de ~15–20%) costuma indicar método **não padronizado**: padronize primeiro.\n• Medir em condições **atípicas** (início de turno, material novo, operador em treinamento) distorce o tempo.\n• Amostra pequena subestima a variação." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• BARNES, R. M. *Estudo de Movimentos e de Tempos*.\n• KANAWATY, G. (org.). *Introduction to Work Study*. OIT.\n• Módulo 13 deste curso: intervalo de confiança e tamanho de amostra." }
      ],
      questoes: [
        { id: "m04-q014", nivel: "facil", tipo: "ordenar", pergunta: "Ordene as etapas iniciais de uma cronoanálise:",
          itens: ["Explicar o objetivo ao operador e à supervisão", "Padronizar e registrar o método", "Dividir a operação em elementos", "Cronometrar vários ciclos", "Calcular o tempo médio observado"],
          explicacao: "Transparência e método padronizado vêm antes do cronômetro." },
        { id: "m04-q015", nivel: "facil", tipo: "calculo", pergunta: "Cinco ciclos medidos: 2,1 · 1,9 · 2,0 · 2,2 · 1,8 min. Qual o tempo médio observado (min)?",
          resposta: 2.0, tolerancia: 0.01, unidade: "min",
          resolucao: "TO = (2,1 + 1,9 + 2,0 + 2,2 + 1,8) ÷ 5 = 10,0 ÷ 5 = 2,0 min",
          explicacao: "O TO ainda não é o tempo padrão: falta avaliar o ritmo e aplicar tolerâncias." },
        { id: "m04-q016", nivel: "facil", tipo: "vf", pergunta: "É recomendado cronometrar o operador escondido para ele não mudar o ritmo.",
          correta: false, explicacao: "É antiético e destrói a confiança. Explica-se o objetivo e mede-se o método." },
        { id: "m04-q017", nivel: "facil", tipo: "multipla", pergunta: "Por que dividir a operação em elementos?",
          opcoes: ["Para aumentar o número de anotações", "Para padronizar, localizar a variação e reaproveitar tempos de elementos comuns", "Porque o cronômetro não mede ciclos inteiros", "Para esconder o estudo do operador"], correta: 1,
          explicacao: "Elementos com início e fim claros tornam a medida mais precisa e útil." },
        { id: "m04-q018", nivel: "medio", tipo: "calculo", pergunta: "Amostra piloto: x̄ = 2,0 min; s = 0,2 min. Para erro relativo de 5% com 95% de confiança (z = 1,96), quantos ciclos são necessários?",
          resposta: 16, tolerancia: 0, unidade: "ciclos",
          resolucao: "n = (z · s ÷ (Er · x̄))² = (1,96 × 0,2 ÷ (0,05 × 2,0))²\n= (0,392 ÷ 0,1)² = 3,92² ≈ 15,4 → arredonda para cima: 16",
          explicacao: "Sempre arredonde para cima para garantir o erro desejado." },
        { id: "m04-q019", nivel: "medio", tipo: "calculo", pergunta: "Amostra piloto: x̄ = 50 s; s = 4 s. Erro relativo de 5%, 95% de confiança. Quantos ciclos medir?",
          resposta: 10, tolerancia: 0, unidade: "ciclos",
          resolucao: "n = (1,96 × 4 ÷ (0,05 × 50))² = (7,84 ÷ 2,5)² = 3,136² ≈ 9,83 → 10 ciclos",
          explicacao: "Menos variação relativa → menos ciclos." },
        { id: "m04-q020", nivel: "medio", tipo: "multipla", pergunta: "Na leitura CONTÍNUA do cronômetro:",
          opcoes: ["Zera-se o cronômetro a cada elemento", "O cronômetro não para; os tempos de cada elemento são obtidos por subtração", "Mede-se só o ciclo inteiro", "Usa-se um cronômetro por elemento"], correta: 1,
          explicacao: "Evita perder frações de tempo nas trocas, mas exige cálculo posterior." },
        { id: "m04-q021", nivel: "medio", tipo: "caso", contexto: "Ciclos em torno de 2,0 min e um ciclo de 3,5 min, porque a peça caiu no chão e o operador foi buscá-la.",
          pergunta: "Como tratar o ciclo de 3,5 min?",
          opcoes: ["Incluir na média normalmente", "Registrar como elemento estranho, fora do elemento regular, e verificar se a queda é recorrente", "Refazer o estudo inteiro", "Dobrar o tempo padrão por segurança"], correta: 1,
          explicacao: "Eventos estranhos não representam o método; se forem frequentes, viram problema a resolver (ou tolerância justificada)." },
        { id: "m04-q022", nivel: "dificil", tipo: "calculo", pergunta: "Amostragem do trabalho: ociosidade estimada p = 20%, erro absoluto de ±3 pontos percentuais, 95% (z = 1,96). Quantas observações?",
          resposta: 683, tolerancia: 0, unidade: "observações",
          resolucao: "n = z² · p · (1 − p) ÷ E² = 3,8416 × 0,2 × 0,8 ÷ 0,0009\n= 0,6147 ÷ 0,0009 ≈ 682,95 → 683",
          explicacao: "Observações em momentos aleatórios, ao longo de vários dias e turnos." },
        { id: "m04-q023", nivel: "dificil", tipo: "multipla", pergunta: "Uma nova linha ainda está no projeto e você precisa estimar os tempos das operações. Qual técnica é a mais adequada?",
          opcoes: ["Cronoanálise", "Amostragem do trabalho", "Tempos predeterminados (MTM, MOST)", "Pesquisa de satisfação"], correta: 2,
          explicacao: "Não há o que cronometrar ainda; os tempos tabelados de micromovimentos permitem estimar." },
        { id: "m04-q024", nivel: "dificil", tipo: "caso", contexto: "No estudo de uma operação, o coeficiente de variação dos ciclos deu 25% e cada operador faz de um jeito.",
          pergunta: "Qual a atitude correta?",
          opcoes: ["Aumentar muito o número de ciclos e seguir", "Padronizar o método primeiro; depois medir", "Usar a mediana e ignorar a variação", "Descartar os ciclos mais longos"], correta: 1,
          justificativas: ["Mais amostra mede com precisão um processo sem padrão: o tempo não vale para nada.", "Variação alta com métodos diferentes indica falta de padrão.", "Esconde o problema.", "Descartar sem causa distorce o tempo."],
          explicacao: "Tempo padrão só faz sentido para um método padrão." },
        { id: "m04-q025", nivel: "dificil", tipo: "discursiva", pergunta: "Os operadores (e o sindicato) desconfiam do estudo de tempos que você vai fazer. Planeje como conduzir o estudo para ter dados confiáveis e aceitos.",
          respostaModelo: "Comunicar **antes** o objetivo (dimensionar capacidade, balancear a linha, não punir), com supervisão e representantes; mostrar o método de cálculo (ritmo, tolerâncias); padronizar o método com os operadores; escolher operadores qualificados e medir em condições normais; calcular o número de ciclos; registrar elementos estranhos; validar os resultados com a equipe; considerar ergonomia (NR-17) e revisar os tempos quando o método mudar.",
          criterios: ["Propõe transparência e participação desde o início", "Garante método padronizado e condições normais", "Usa critério estatístico para o número de ciclos", "Prevê validação dos resultados e revisão"] },
        { id: "m04-q026", nivel: "dificil", tipo: "vf", pergunta: "Na amostragem do trabalho, reduzir o erro admissível pela metade quadruplica o número de observações necessárias.",
          correta: true, explicacao: "E aparece ao quadrado no denominador: E/2 → n × 4." }
      ]
    },

    /* ==================================================================
       LIÇÃO 3 — RITMO, TOLERÂNCIAS E TEMPO PADRÃO
       ================================================================== */
    {
      id: "m04-l3",
      titulo: "Ritmo, tolerâncias e tempo padrão",
      icone: "📏",
      objetivos: {
        facil: ["Definir tempo observado, tempo normal e tempo padrão", "Explicar o fator de ritmo", "Calcular um tempo padrão simples"],
        medio: ["Aplicar e comparar as duas convenções de tolerância", "Calcular a capacidade de produção por turno a partir do tempo padrão", "Classificar tolerâncias (pessoais, fadiga, esperas) e evitar contagem dupla"],
        dificil: ["Criticar a subjetividade da avaliação de ritmo e propor controles", "Analisar o efeito do tempo padrão em custos, metas e incentivos", "Relacionar ritmo e tolerâncias à ergonomia (NR-17)"]
      },
      prerequisitos: [{ texto: "Cronoanálise", licao: "m04-l2" }],
      resumo: {
        facil: "**TO** (tempo observado médio) → **TN = TO × fator de ritmo** → **TP = TN × (1 + tolerância)**. Ritmo de 100% é o normal; operador rápido tem ritmo acima de 100% e seu tempo normal fica **maior** que o observado.",
        medio: "Tolerâncias: pessoais, fadiga e esperas inevitáveis. Duas convenções: **TP = TN × (1 + T)** (T sobre o tempo normal) ou **TP = TN ÷ (1 − T)** (T como fração da jornada). **Capacidade = tempo disponível ÷ TP**, arredondada para baixo. Não desconte pausas duas vezes.",
        dificil: "A avaliação de ritmo é **subjetiva**: calibre analistas (vídeos padrão, sistema Westinghouse, comparação com tempos predeterminados). O TP define custo e metas: folgado gera custo; apertado gera pressão, risco ergonômico e refugo. A NR-17 exige considerar ritmo, pausas e exigências de tempo."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "O tempo cronometrado ainda não é o tempo “justo”: o operador medido pode estar mais rápido ou mais lento que o normal, e ninguém trabalha 480 minutos sem nenhuma pausa." },
        { nivel: "facil", tipo: "formula", titulo: "Do observado ao padrão", texto: "**TN = TO × FR**\n**TP = TN × (1 + T)**",
          legenda: [["TO", "tempo observado médio"], ["FR", "fator de ritmo (100% = ritmo normal)"], ["TN", "tempo normal"], ["T", "tolerância (fração, ex.: 15% = 0,15)"], ["TP", "tempo padrão"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Aplicando", texto: "TO = 2,0 min; o analista avaliou ritmo de **110%** (operador mais rápido que o normal).\nTN = 2,0 × 1,10 = **2,2 min**.\nTolerância de 15%: TP = 2,2 × 1,15 = **2,53 min**." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Observo, Normalizo, Padronizo”**: TO → TN → TP." },
        { nivel: "facil", tipo: "bobo", titulo: "Caminhando com amigos", texto: "Se você cronometra seu amigo que anda muito rápido, o tempo dele não serve para planejar o passeio do grupo. É preciso “normalizar” para o ritmo de uma pessoa comum." },
        { nivel: "facil", tipo: "atencao", titulo: "Pegadinha do ritmo", texto: "Ritmo **acima de 100%** → operador rápido → TN **maior** que o TO (um operador normal levaria mais tempo). Ritmo abaixo de 100% → TN menor que o TO." },

        { nivel: "medio", tipo: "conceito", titulo: "Tipos de tolerância", texto: "**Pessoais:** necessidades fisiológicas, beber água.\n**Fadiga:** recuperação do esforço físico e mental, postura, ambiente (calor, ruído).\n**Esperas/atrasos inevitáveis:** pequenas interrupções que fazem parte do trabalho.\nOs valores dependem das condições e da política da empresa; a OIT publica tabelas de referência." },
        { nivel: "medio", tipo: "formula", titulo: "Duas convenções", texto: "**(a) TP = TN × (1 + T):** T aplicada sobre o tempo normal.\n**(b) TP = TN ÷ (1 − T):** T como fração da **jornada** (ex.: 72 min de 480 = 15%).\nCom TN = 2,2 e T = 15%: (a) **2,53 min** · (b) **2,59 min**.\nUse a convenção coerente com a forma como T foi definida e **declare qual usou**.",
          legenda: [["T (a)", "fração do tempo normal"], ["T (b)", "fração do tempo total da jornada"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Tolerância como % da jornada", texto: "Pausas 2 × 10 min + necessidades pessoais 24 min + fadiga 28 min = **72 min** em uma jornada de 480 min → T = 72 ÷ 480 = **15%**." },
        { nivel: "medio", tipo: "formula", titulo: "Capacidade por turno", texto: "**Capacidade = tempo disponível ÷ TP** (arredondada para **baixo**)\nEx.: 480 min ÷ 2,53 min = 189,7 → **189 peças**.",
          legenda: [["tempo disponível", "tempo do turno considerado no cálculo"]] },
        { nivel: "medio", tipo: "atencao", titulo: "Contagem dupla", texto: "Se as pausas já estão **no TP** (tolerâncias), não desconte as mesmas pausas também do tempo disponível. Fazer as duas coisas **subestima** a capacidade." },

        { nivel: "dificil", tipo: "limitacao", titulo: "Ritmo é subjetivo", texto: "Analistas diferentes avaliam ritmos diferentes para o mesmo operador. Controles:\n• treinar com **vídeos de referência** de ritmos conhecidos;\n• usar um sistema estruturado, como o **Westinghouse** (habilidade, esforço, condições, consistência);\n• comparar com **tempos predeterminados**;\n• mais de um analista e revisão dos resultados." },
        { nivel: "dificil", tipo: "conceito", titulo: "O TP decide dinheiro", texto: "**Custo de mão de obra por peça** = TP × custo por minuto.\n**Metas e incentivos** usam o TP: folgado → custo alto e capacidade subestimada; apertado → pressão, horas extras, **risco ergonômico e refugo**.\nPor isso o TP precisa ser tecnicamente defensável e revisado quando o método muda." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Custo por peça", texto: "TP = 2,53 min; custo da mão de obra direta (salário + encargos) = R$ 0,80/min.\nCusto MOD por peça = 2,53 × 0,80 = **R$ 2,02**." },
        { nivel: "dificil", tipo: "conexao", titulo: "Ergonomia e NR-17", texto: "A NR-17 determina que a organização do trabalho considere, entre outros, **normas de produção, ritmo, exigências de tempo e pausas**. Ritmo excessivo é fator de risco (Módulo 10)." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: meta sem tolerância", texto: "Uma empresa definiu a meta usando só o **TO** (sem ritmo nem tolerâncias). Resultado: ninguém batia a meta, houve horas extras, aumento de refugo no fim do turno e queixas de dor.\nCorreção: recalcular o TP com ritmo e tolerâncias justificadas, rever a meta e acompanhar refugo e absenteísmo." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• KANAWATY, G. (org.). *Introduction to Work Study*. OIT (tolerâncias).\n• BARNES, R. M. *Estudo de Movimentos e de Tempos* (avaliação de ritmo).\n• Brasil. **NR-17 — Ergonomia**." }
      ],
      questoes: [
        { id: "m04-q027", nivel: "facil", tipo: "calculo", pergunta: "Tempo observado médio = 2,0 min; fator de ritmo = 110%. Qual o tempo normal (min)?",
          resposta: 2.2, tolerancia: 0.01, unidade: "min",
          resolucao: "TN = TO × FR = 2,0 × 1,10 = 2,2 min",
          explicacao: "O operador estava mais rápido que o normal; um operador normal levaria 2,2 min." },
        { id: "m04-q028", nivel: "facil", tipo: "calculo", pergunta: "Tempo normal = 2,2 min; tolerância de 15% sobre o tempo normal. Qual o tempo padrão (min)?",
          resposta: 2.53, tolerancia: 0.01, unidade: "min",
          resolucao: "TP = TN × (1 + T) = 2,2 × 1,15 = 2,53 min",
          explicacao: "As tolerâncias cobrem necessidades pessoais, fadiga e pequenas esperas." },
        { id: "m04-q029", nivel: "facil", tipo: "ordenar", pergunta: "Ordene o cálculo do tempo:",
          itens: ["Tempo observado (TO)", "Tempo normal (TN)", "Tempo padrão (TP)"],
          explicacao: "Observo, Normalizo, Padronizo." },
        { id: "m04-q030", nivel: "facil", tipo: "vf", pergunta: "Um operador trabalhando mais rápido que o normal recebe fator de ritmo acima de 100%.",
          correta: true, explicacao: "E por isso o tempo normal dele fica maior que o tempo observado." },
        { id: "m04-q031", nivel: "medio", tipo: "calculo", pergunta: "TN = 2,2 min e tolerância de 15% definida como fração da JORNADA. Use TP = TN ÷ (1 − T). Qual o TP (min)?",
          resposta: 2.59, tolerancia: 0.01, unidade: "min",
          resolucao: "TP = 2,2 ÷ (1 − 0,15) = 2,2 ÷ 0,85 ≈ 2,588 → 2,59 min",
          explicacao: "Ligeiramente maior que na convenção (a), que daria 2,53 min." },
        { id: "m04-q032", nivel: "medio", tipo: "calculo", pergunta: "Com TP = 2,53 min e 480 min de tempo disponível, qual a capacidade do turno (peças inteiras)?",
          resposta: 189, tolerancia: 0, unidade: "peças",
          resolucao: "480 ÷ 2,53 = 189,7 → arredonda para baixo = 189 peças",
          explicacao: "Capacidade se arredonda para baixo: a 190ª peça não fica pronta." },
        { id: "m04-q033", nivel: "medio", tipo: "ligar", pergunta: "Ligue a situação ao tipo de tolerância:",
          pares: [["Ir ao banheiro, beber água", "Pessoal"], ["Recuperar do esforço físico e da postura", "Fadiga"], ["Pequena falta momentânea de material", "Espera/atraso inevitável"]],
          explicacao: "Cada tipo deve ser justificado pelas condições do posto." },
        { id: "m04-q034", nivel: "medio", tipo: "calculo", pergunta: "Pausas e tolerâncias somam 72 min numa jornada de 480 min. Qual a tolerância em % da jornada?",
          resposta: 15, tolerancia: 0.1, unidade: "%",
          resolucao: "T = 72 ÷ 480 × 100 = 15%",
          explicacao: "Nesse caso, a convenção coerente é TP = TN ÷ (1 − T)." },
        { id: "m04-q035", nivel: "medio", tipo: "multipla", pergunta: "O analista incluiu as pausas nas tolerâncias do TP e também descontou as mesmas pausas do tempo disponível. Qual o efeito?",
          opcoes: ["Nenhum", "Capacidade subestimada, por contagem dupla das pausas", "Capacidade superestimada", "O TP fica menor"], correta: 1,
          explicacao: "As pausas foram descontadas duas vezes." },
        { id: "m04-q036", nivel: "dificil", tipo: "calculo", pergunta: "TP = 2,53 min; custo da mão de obra direta = R$ 0,80 por minuto. Qual o custo de MOD por peça (R$)?",
          resposta: 2.02, tolerancia: 0.01, unidade: "R$",
          resolucao: "Custo = 2,53 × 0,80 = R$ 2,024 ≈ R$ 2,02",
          explicacao: "Um erro de 10% no TP vira 10% de erro no custo de MOD." },
        { id: "m04-q037", nivel: "dificil", tipo: "caso", contexto: "Dois analistas cronometraram o mesmo operador: um avaliou ritmo de 90%, o outro de 115%.",
          pergunta: "O que fazer?",
          opcoes: ["Usar a média (102,5%) e seguir", "Calibrar os analistas (vídeos de referência, sistema estruturado, comparação com tempos predeterminados) e reavaliar", "Usar o maior ritmo", "Usar o menor ritmo"], correta: 1,
          explicacao: "Divergência grande indica falta de calibração; tirar a média esconde o problema." },
        { id: "m04-q038", nivel: "dificil", tipo: "discursiva", pergunta: "Uma empresa calculou a meta de produção usando apenas o tempo observado, sem ritmo nem tolerâncias. Quais as consequências prováveis e como corrigir?",
          respostaModelo: "Consequências: meta **inatingível** para um operador normal; horas extras; pressa → **refugo** e acidentes; risco de LER/DORT; desmotivação e conflito. Correção: recalcular **TN** com avaliação de ritmo calibrada e **TP** com tolerâncias justificadas (pessoais, fadiga, esperas), declarar a convenção usada, rever a meta, comunicar e acompanhar indicadores (produção, refugo, absenteísmo, queixas).",
          criterios: ["Aponta a meta irreal e suas consequências operacionais", "Menciona efeitos em qualidade e saúde", "Propõe recalcular TN e TP corretamente", "Propõe acompanhamento com indicadores"] },
        { id: "m04-q039", nivel: "dificil", tipo: "vf", pergunta: "Um tempo padrão apertado demais pode aumentar o risco ergonômico e o refugo.",
          correta: true, explicacao: "Ritmo excessivo é fator de risco (NR-17) e a pressa aumenta erros." }
      ]
    },

    /* ==================================================================
       LIÇÃO 4 — TEMPO PADRÃO NA GESTÃO
       ================================================================== */
    {
      id: "m04-l4",
      titulo: "Eficiência, utilização e aprendizagem",
      icone: "📈",
      objetivos: {
        facil: ["Explicar para que o tempo padrão é usado na empresa", "Calcular horas-padrão produzidas", "Diferenciar eficiência e utilização"],
        medio: ["Calcular eficiência e utilização de um setor", "Interpretar a combinação dos dois indicadores", "Identificar se a perda é de ritmo ou de gestão"],
        dificil: ["Aplicar a curva de aprendizagem para prever tempos", "Avaliar os limites da curva de aprendizagem", "Analisar o conflito entre eficiência local e resultado global"]
      },
      prerequisitos: [
        { texto: "Tempo padrão", licao: "m04-l3" },
        { texto: "Produtividade e eficiência (Módulo 1)", licao: "m01-l7" }
      ],
      resumo: {
        facil: "O tempo padrão serve para custo, capacidade, PCP, balanceamento e metas. **Horas-padrão = peças × TP**. **Eficiência** = horas-padrão ÷ horas trabalhadas; **utilização** = horas trabalhadas ÷ horas disponíveis.",
        medio: "Eficiência alta com utilização baixa indica **problema de gestão** (falta de material, quebras, setups), não de ritmo. O produto das duas dá a produtividade sobre o tempo disponível.",
        dificil: "**Curva de aprendizagem** (Wright, 1936): Tn = T1 · n^b, com b = log(taxa) ÷ log 2; a cada **dobro** da produção acumulada o tempo cai a uma taxa fixa. Tem platô e esquecimento. Maximizar a eficiência de postos que não são gargalo gera estoque, não saída (Teoria das Restrições)."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Para que serve o tempo padrão", texto: "Custo do produto · orçamento de mão de obra · capacidade e PCP · balanceamento de linha · metas e acompanhamento de desempenho · comparação entre métodos." },
        { nivel: "facil", tipo: "formula", titulo: "Horas-padrão, eficiência e utilização", texto: "**Horas-padrão produzidas = peças × TP**\n**Eficiência = horas-padrão ÷ horas trabalhadas**\n**Utilização = horas trabalhadas ÷ horas disponíveis**",
          legenda: [["horas-padrão", "trabalho produzido, medido em tempo padrão"], ["horas trabalhadas", "tempo em que houve trabalho efetivo"], ["horas disponíveis", "tempo total em que a pessoa estava à disposição"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Um operador num turno", texto: "180 peças × 2,53 min = **455,4 min-padrão**. Trabalhou 480 min.\nEficiência = 455,4 ÷ 480 = **94,9%**." },
        { nivel: "facil", tipo: "bobo", titulo: "Estudando para a prova", texto: "Utilização: das 3 horas reservadas, quanto você de fato estudou (sem celular)? Eficiência: nas horas que estudou, rendeu o que deveria?" },
        { nivel: "facil", tipo: "atencao", titulo: "Eficiência acima de 100%", texto: "É possível: o operador está acima do padrão **ou** o TP está folgado. Valores persistentes acima de ~115–120% pedem revisão do tempo padrão." },

        { nivel: "medio", tipo: "exemplo", titulo: "Um setor em um dia", texto: "3 operadores × 480 min = **1.440 min disponíveis**. Cada um ficou 60 min parado por falta de material → **1.260 min trabalhados**.\nProduziram 480 peças × 2,53 = **1.214,4 min-padrão**.\n• Eficiência = 1.214,4 ÷ 1.260 = **96,4%**\n• Utilização = 1.260 ÷ 1.440 = **87,5%**\n• Produtividade sobre o disponível = 1.214,4 ÷ 1.440 = **84,3%**" },
        { nivel: "medio", tipo: "conceito", titulo: "Lendo os indicadores juntos", texto: "**Eficiência alta + utilização baixa:** as pessoas rendem quando trabalham, mas faltam condições (material, máquina, programação). Problema de **gestão**.\n**Eficiência baixa + utilização alta:** trabalham o tempo todo, mas abaixo do padrão (treinamento, método, TP apertado?)." },
        { nivel: "medio", tipo: "conexao", titulo: "Conexão", texto: "A mesma lógica aparece no **OEE** (disponibilidade × performance × qualidade), aplicado a equipamentos (Módulos 6 e 14)." },

        { nivel: "dificil", tipo: "formula", titulo: "Curva de aprendizagem (Wright, 1936)", texto: "**Tn = T1 · n^b**, com **b = log(taxa) ÷ log 2**\nTaxa de 80%: a cada vez que a produção **acumulada dobra**, o tempo por unidade cai para 80% do anterior.\nT1 = 100 min → T2 = 80 → T4 = 64 → T8 = 51,2 → T10 ≈ 47,7 min.",
          legenda: [["Tn", "tempo da n-ésima unidade"], ["T1", "tempo da primeira unidade"], ["taxa", "fração a cada dobro (ex.: 0,80)"], ["b", "expoente (negativo)"]] },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites da curva", texto: "Vale bem para trabalho com forte componente manual e de aprendizado (montagem complexa, lotes pequenos). Tende a um **platô**; interrupções causam **esquecimento**; a taxa varia por tipo de trabalho e precisa ser estimada com dados. Não extrapole muito além do observado." },
        { nivel: "dificil", tipo: "conceito", titulo: "Eficiência local × resultado global", texto: "Fazer um posto que **não é gargalo** produzir no máximo só **acumula estoque** antes do gargalo: a saída da fábrica não aumenta (Goldratt e Cox, *A Meta*, 1984).\nIndicadores de eficiência individual como meta podem incentivar produzir o que não é necessário." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Indicador vira meta", texto: "**Lei de Goodhart:** quando eficiência vira meta de bônus, surgem distorções (apontamento maquiado, preferência por lotes grandes, resistência a setups). Combine com indicadores do sistema (atendimento ao cliente, estoque, qualidade)." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• WRIGHT, T. P. Factors affecting the cost of airplanes. *Journal of the Aeronautical Sciences*, 1936.\n• GOLDRATT, E. M.; COX, J. *A Meta* (1984)." }
      ],
      questoes: [
        { id: "m04-q040", nivel: "facil", tipo: "calculo", pergunta: "Um operador produziu 180 peças com TP de 2,53 min. Quantos minutos-padrão ele produziu?",
          resposta: 455.4, tolerancia: 0.1, unidade: "min",
          resolucao: "Minutos-padrão = 180 × 2,53 = 455,4 min",
          explicacao: "É o “trabalho produzido” medido em tempo padrão." },
        { id: "m04-q041", nivel: "facil", tipo: "calculo", pergunta: "Ele produziu 455,4 min-padrão trabalhando 480 min. Qual a eficiência (%)?",
          resposta: 94.9, tolerancia: 0.1, unidade: "%",
          resolucao: "Eficiência = 455,4 ÷ 480 × 100 ≈ 94,9%",
          explicacao: "Rendeu quase o padrão nas horas trabalhadas." },
        { id: "m04-q042", nivel: "facil", tipo: "vf", pergunta: "Eficiência acima de 100% é impossível.",
          correta: false, explicacao: "Ocorre quando o operador supera o padrão ou quando o TP está folgado." },
        { id: "m04-q043", nivel: "facil", tipo: "multipla", pergunta: "Qual destes NÃO é um uso típico do tempo padrão?",
          opcoes: ["Calcular o custo de mão de obra do produto", "Dimensionar a capacidade da linha", "Balancear postos de trabalho", "Escolher a cor da embalagem"], correta: 3,
          explicacao: "Os três primeiros dependem diretamente do tempo padrão." },
        { id: "m04-q044", nivel: "medio", tipo: "calculo", pergunta: "Setor: 1.260 min trabalhados; produziram 480 peças com TP de 2,53 min. Qual a eficiência (%)?",
          resposta: 96.4, tolerancia: 0.1, unidade: "%",
          resolucao: "Minutos-padrão = 480 × 2,53 = 1.214,4\nEficiência = 1.214,4 ÷ 1.260 × 100 ≈ 96,4%",
          explicacao: "Quando trabalharam, renderam quase o padrão." },
        { id: "m04-q045", nivel: "medio", tipo: "calculo", pergunta: "O mesmo setor tinha 1.440 min disponíveis e trabalhou 1.260 min. Qual a utilização (%)?",
          resposta: 87.5, tolerancia: 0.1, unidade: "%",
          resolucao: "Utilização = 1.260 ÷ 1.440 × 100 = 87,5%",
          explicacao: "12,5% do tempo foi perdido por falta de material." },
        { id: "m04-q046", nivel: "medio", tipo: "caso", contexto: "Um setor tem eficiência de 96% e utilização de 70%.",
          pergunta: "Onde está a maior oportunidade?",
          opcoes: ["No ritmo dos operadores", "Na gestão: falta de material, quebras, setups, programação", "No tempo padrão, que está folgado", "Não há oportunidade"], correta: 1,
          explicacao: "Quando trabalham, rendem; o problema é o tempo em que não conseguem trabalhar." },
        { id: "m04-q047", nivel: "medio", tipo: "ligar", pergunta: "Ligue o indicador à pergunta que ele responde:",
          pares: [["Eficiência", "Quando trabalha, rende o padrão?"], ["Utilização", "Quanto do tempo disponível foi trabalhado?"], ["Horas-padrão", "Quanto trabalho foi produzido, em tempo padrão?"]],
          explicacao: "Cada indicador isola um tipo de perda." },
        { id: "m04-q048", nivel: "dificil", tipo: "calculo", pergunta: "Curva de aprendizagem de 80%, primeira unidade em 100 min. Qual o tempo da 4ª unidade (min)?",
          resposta: 64, tolerancia: 0.1, unidade: "min",
          resolucao: "A cada dobro: T2 = 100 × 0,8 = 80; T4 = 80 × 0,8 = 64 min.",
          explicacao: "A queda acontece a cada DOBRO da produção acumulada." },
        { id: "m04-q049", nivel: "dificil", tipo: "calculo", pergunta: "Mesma curva (80%, T1 = 100 min). Qual o tempo da 10ª unidade (min)? Use Tn = T1 · n^b, b = log(0,8) ÷ log 2.",
          resposta: 47.65, tolerancia: 0.1, unidade: "min",
          resolucao: "b = log 0,8 ÷ log 2 ≈ −0,3219\n10^(−0,3219) ≈ 0,4765\nT10 = 100 × 0,4765 ≈ 47,65 min",
          explicacao: "Útil para orçar lotes-piloto e prazos de ramp-up." },
        { id: "m04-q050", nivel: "dificil", tipo: "caso", contexto: "A fábrica paga bônus por eficiência individual. O posto 1 (que não é gargalo) passou a produzir 20% a mais.",
          pergunta: "Qual o efeito mais provável na fábrica?",
          opcoes: ["A saída da fábrica aumenta 20%", "Acumula estoque antes do gargalo, sem aumentar a saída", "O lead time diminui", "O gargalo desaparece"], correta: 1,
          justificativas: ["A saída é limitada pelo gargalo.", "Produzir mais antes do gargalo vira fila (estoque em processo).", "Com mais estoque na fila, o lead time tende a aumentar.", "O gargalo continua onde estava."],
          explicacao: "Eficiência local não garante resultado global (Teoria das Restrições)." },
        { id: "m04-q051", nivel: "dificil", tipo: "discursiva", pergunta: "O gerente quer usar a eficiência individual como única base do bônus. Analise os riscos e proponha uma alternativa.",
          respostaModelo: "Riscos: produção de itens desnecessários e **estoque** em postos não gargalo; resistência a setups e a ajudar colegas; maquiagem de apontamentos; pressa com **refugo** e risco ergonômico; TPs contestados. Alternativa: combinar indicadores do **sistema** (atendimento à demanda/OTIF, qualidade, segurança) com metas de equipe, usar eficiência como diagnóstico e não como meta isolada, revisar os TPs e envolver a equipe.",
          criterios: ["Aponta distorções de eficiência local", "Menciona efeitos em qualidade/segurança", "Propõe indicadores de sistema ou de equipe", "Trata eficiência como diagnóstico"] },
        { id: "m04-q052", nivel: "dificil", tipo: "vf", pergunta: "Com taxa de aprendizagem de 80%, o tempo cai 20% a cada nova unidade produzida.",
          correta: false, explicacao: "Cai 20% a cada DOBRO da produção acumulada (1→2, 2→4, 4→8…)." }
      ]
    },

    /* ==================================================================
       LIÇÃO 5 — TAKT TIME E BALANCEAMENTO
       ================================================================== */
    {
      id: "m04-l5",
      titulo: "Takt time e balanceamento de linha",
      icone: "⚖️",
      objetivos: {
        facil: ["Calcular o takt time", "Diferenciar takt time de tempo de ciclo", "Calcular o número mínimo teórico de postos"],
        medio: ["Montar o diagrama de precedência", "Balancear uma linha com a heurística do maior tempo", "Calcular eficiência do balanceamento e ociosidade"],
        dificil: ["Reconhecer que heurísticas não garantem o ótimo", "Tratar tarefas maiores que o takt", "Balancear linhas multimodelo e com variabilidade"]
      },
      prerequisitos: [
        { texto: "Tempo padrão", licao: "m04-l3" },
        { texto: "Redes de precedência (cronograma, Módulo 2)", licao: "m02-l4" }
      ],
      resumo: {
        facil: "**Takt = tempo disponível ÷ demanda**: o ritmo que o cliente pede. **Tempo de ciclo** é o ritmo em que a linha consegue produzir (o maior tempo de posto). Se o ciclo for maior que o takt, a demanda não é atendida. **N mínimo = ⌈Σt ÷ takt⌉**.",
        medio: "Balancear = distribuir tarefas entre postos respeitando **precedência** e **takt**. Heurística do maior tempo: entre as tarefas liberadas que cabem no posto, escolha a mais longa. **Eficiência = Σt ÷ (N × TC)**; **ociosidade = N × TC − Σt**.",
        dificil: "Heurísticas não garantem o ótimo (o problema é combinatório). Tarefa maior que o takt pede divisão, **postos em paralelo** ou automação. Com variabilidade, carregar 100% do takt gera atrasos. Em linhas multimodelo, balanceie pelo tempo ponderado e sequencie de forma nivelada."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Numa linha de montagem, cada posto faz uma parte do trabalho. Se um posto demora mais, **a linha inteira anda no ritmo dele**. Balancear bem significa atender a demanda com o menor número de pessoas e sem sobrecarregar ninguém." },
        { nivel: "facil", tipo: "formula", titulo: "Takt time", texto: "**Takt = tempo disponível ÷ demanda**\nEx.: turno de 480 min − 40 min de pausas = 440 min = **26.400 s**; demanda = 480 ventiladores → takt = **55 s**.",
          legenda: [["tempo disponível", "tempo do turno menos pausas planejadas"], ["demanda", "unidades necessárias no mesmo período"]] },
        { nivel: "facil", tipo: "conceito", titulo: "Takt × tempo de ciclo", texto: "**Takt:** ritmo que o **cliente** exige (uma unidade a cada 55 s).\n**Tempo de ciclo (TC):** ritmo real da **linha** = maior tempo entre os postos.\nSe TC > takt, a demanda **não** é atendida. Se TC < takt, sobra capacidade." },
        { nivel: "facil", tipo: "formula", titulo: "Número mínimo de postos", texto: "**N mínimo = Σt ÷ takt**, arredondado para **cima**.\nEx.: soma das tarefas do ventilador = 180 s → 180 ÷ 55 = 3,27 → **4 postos**.",
          legenda: [["Σt", "soma dos tempos de todas as tarefas"]] },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Takt é o cliente, ciclo é a linha.”**" },
        { nivel: "facil", tipo: "bobo", titulo: "Linha de sanduíches", texto: "Quatro amigos montando 40 sanduíches para a festa: um passa a manteiga, outro põe o recheio, outro fecha e outro embala. Se quem põe recheio é o mais lento, os outros ficam esperando." },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum", texto: "No tempo disponível, desconte **pausas planejadas** (refeição, ginástica laboral). **Não** desconte quebras e paradas não planejadas: elas são perdas a eliminar, não parte do plano." },

        { nivel: "medio", tipo: "mapa", titulo: "Tarefas do ventilador (ilustrativo)", texto:
          "Tarefa  Tempo  Precede-se de\n" +
          "  A      20 s   —\n" +
          "  B      35 s   A\n" +
          "  C      15 s   A\n" +
          "  D      40 s   B\n" +
          "  E      25 s   C\n" +
          "  F      30 s   D, E\n" +
          "  G      15 s   F\n" +
          "Σt = 180 s · takt = 55 s\n\n" +
          "      ┌→ B ─→ D ─┐\n" +
          "  A ──┤          ├→ F → G\n" +
          "      └→ C ─→ E ─┘" },
        { nivel: "medio", tipo: "passos", titulo: "Heurística do maior tempo", texto: "1. Liste as tarefas **liberadas** (predecessoras já alocadas).\n2. Entre as que **cabem** no tempo restante do posto, escolha a **mais longa**.\n3. Repita até nenhuma caber; abra o próximo posto.\n4. Calcule TC, eficiência e ociosidade." },
        { nivel: "medio", tipo: "exemplo", titulo: "Resultado do balanceamento", texto: "Posto 1: A (20) + B (35) = **55 s**\nPosto 2: D (40) + C (15) = **55 s**\nPosto 3: E (25) + F (30) = **55 s**\nPosto 4: G (15) = **15 s**\nTC = 55 s = takt ✓ · 4 postos (= N mínimo)." },
        { nivel: "medio", tipo: "formula", titulo: "Eficiência e ociosidade", texto: "**Eficiência = Σt ÷ (N × TC)** = 180 ÷ (4 × 55) = **81,8%**\n**Ociosidade = N × TC − Σt** = 220 − 180 = **40 s por ciclo**",
          legenda: [["N", "número de postos"], ["TC", "tempo de ciclo (maior tempo de posto)"]] },
        { nivel: "medio", tipo: "atencao", titulo: "Posto com pouca carga", texto: "O posto 4 fica ocioso 40 s por ciclo. Opções: atribuir tarefas de apoio (abastecimento, inspeção), rever a divisão de tarefas ou compartilhar o operador com outra área. Não esconda a ociosidade: ela é um dado para melhorar." },

        { nivel: "dificil", tipo: "conceito", titulo: "Heurísticas não garantem o ótimo", texto: "Outras regras: **mais sucessores** e **peso posicional** (tempo da tarefa + tempos de todas as sucessoras; Helgeson e Birnie, 1961).\nO balanceamento de linhas é um problema **combinatório** (NP-difícil): heurísticas dão boas soluções rápidas, mas não garantem a melhor. Para o ótimo, usam-se modelos de **Pesquisa Operacional** (Módulo 9)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Tarefa maior que o takt", texto: "Se uma tarefa leva 90 s e o takt é 55 s:\n• **Dividir** a tarefa em partes (se tecnicamente possível);\n• **Postos em paralelo**: 2 operadores alternando as unidades → ciclo efetivo do posto = 90 ÷ 2 = 45 s;\n• **Automatizar** ou mudar o método." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Variabilidade", texto: "Os tempos são médias. Com postos carregados a 100% do takt, os ciclos mais lentos atrasam a linha inteira. Por isso muitas empresas carregam os postos **abaixo do takt** (margem definida por política), reduzem a variação padronizando o trabalho ou usam pequenos estoques de proteção.\nOutras restrições reais: lado da linha, habilidades, ferramentas e **ergonomia** (não concentrar tarefas pesadas num posto)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Linha multimodelo", texto: "Modelos com tempos diferentes na mesma linha: balanceie pelo **tempo médio ponderado pelo mix** e verifique cada modelo; **sequencie** de forma nivelada (não dez unidades do modelo pesado seguidas) — ligação com o Heijunka (Módulo 6)." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• HELGESON, W. B.; BIRNIE, D. P. Assembly line balancing using the ranked positional weight technique. *Journal of Industrial Engineering*, 1961.\n• SCHOLL, A. *Balancing and Sequencing of Assembly Lines* (1999).\n• PEINADO, J.; GRAEML, A. R. *Administração da Produção*." }
      ],
      questoes: [
        { id: "m04-q053", nivel: "facil", tipo: "calculo", pergunta: "Tempo disponível de 26.400 s por turno e demanda de 480 unidades. Qual o takt time (s)?",
          resposta: 55, tolerancia: 0.01, unidade: "s",
          resolucao: "Takt = 26.400 ÷ 480 = 55 s",
          explicacao: "A linha precisa entregar uma unidade a cada 55 s." },
        { id: "m04-q054", nivel: "facil", tipo: "calculo", pergunta: "A soma dos tempos das tarefas é 180 s e o takt é 55 s. Qual o número mínimo teórico de postos?",
          resposta: 4, tolerancia: 0, unidade: "postos",
          resolucao: "180 ÷ 55 = 3,27 → arredonda para cima = 4 postos",
          explicacao: "Com 3 postos, cada um teria de fazer 60 s, acima do takt." },
        { id: "m04-q055", nivel: "facil", tipo: "multipla", pergunta: "Qual a diferença entre takt time e tempo de ciclo?",
          opcoes: ["São sinônimos", "Takt é o ritmo que o cliente pede; tempo de ciclo é o ritmo que a linha consegue produzir", "Takt é o tempo do posto mais rápido", "Tempo de ciclo é definido pelo cliente"], correta: 1,
          explicacao: "Takt é o cliente, ciclo é a linha." },
        { id: "m04-q056", nivel: "facil", tipo: "vf", pergunta: "Se o tempo de ciclo da linha for maior que o takt, a demanda não será atendida.",
          correta: true, explicacao: "A linha entregaria mais devagar do que o cliente precisa." },
        { id: "m04-q057", nivel: "medio", tipo: "calculo", pergunta: "Linha balanceada com 4 postos e tempo de ciclo de 55 s; soma das tarefas = 180 s. Qual a eficiência do balanceamento (%)?",
          resposta: 81.8, tolerancia: 0.1, unidade: "%",
          resolucao: "Eficiência = Σt ÷ (N × TC) = 180 ÷ (4 × 55) = 180 ÷ 220 ≈ 81,8%",
          explicacao: "18,2% do tempo pago dos postos é ociosidade." },
        { id: "m04-q058", nivel: "medio", tipo: "calculo", pergunta: "Na mesma linha (4 postos, TC 55 s, Σt 180 s), qual a ociosidade total por ciclo (s)?",
          resposta: 40, tolerancia: 0, unidade: "s",
          resolucao: "Ociosidade = N × TC − Σt = 220 − 180 = 40 s",
          explicacao: "Concentrada no posto 4 (15 s de trabalho em 55 s)." },
        { id: "m04-q059", nivel: "medio", tipo: "ordenar", pergunta: "Ordene os passos do balanceamento:",
          itens: ["Calcular o takt time", "Calcular o número mínimo de postos", "Montar o diagrama de precedência", "Alocar as tarefas aos postos respeitando takt e precedência", "Calcular eficiência e ociosidade"],
          explicacao: "Takt e N mínimo dão a meta; precedência e alocação dão a solução." },
        { id: "m04-q060", nivel: "medio", tipo: "caso", contexto: "Ventilador (takt 55 s): o posto 1 já tem a tarefa A (20 s). Tarefas: B 35 s (após A), C 15 s (após A), D 40 s (após B), G 15 s (após F).",
          pergunta: "Pela heurística do maior tempo, qual tarefa entra no posto 1?",
          opcoes: ["B (35 s)", "C (15 s)", "D (40 s)", "G (15 s)"], correta: 0,
          justificativas: ["Liberada (A já alocada), cabe (20 + 35 = 55) e é a mais longa entre as que cabem.", "Liberada e cabe, mas é mais curta que B.", "Não está liberada: depende de B.", "Não está liberada: depende de F."],
          explicacao: "Só entram tarefas liberadas que cabem; entre elas, a mais longa." },
        { id: "m04-q061", nivel: "medio", tipo: "calculo", pergunta: "A demanda caiu para 440 unidades por turno (tempo disponível 26.400 s; Σt = 180 s). Qual o novo número mínimo de postos?",
          resposta: 3, tolerancia: 0, unidade: "postos",
          resolucao: "Takt = 26.400 ÷ 440 = 60 s\nN mínimo = 180 ÷ 60 = 3 postos",
          explicacao: "É um limite inferior: a precedência pode impedir que 3 postos sejam de fato alcançados." },
        { id: "m04-q062", nivel: "dificil", tipo: "calculo", pergunta: "Uma tarefa indivisível leva 90 s e o takt é 55 s. Quantos postos em paralelo, no mínimo, são necessários para essa tarefa?",
          resposta: 2, tolerancia: 0, unidade: "postos",
          resolucao: "90 ÷ 55 = 1,64 → 2 postos em paralelo\nCiclo efetivo = 90 ÷ 2 = 45 s ≤ 55 s ✓",
          explicacao: "Cada operador faz unidades alternadas." },
        { id: "m04-q063", nivel: "dificil", tipo: "multipla", pergunta: "Sobre as heurísticas de balanceamento (maior tempo, peso posicional), é correto afirmar:",
          opcoes: ["Sempre encontram a solução ótima", "Dão boas soluções rapidamente, mas não garantem o ótimo", "Só funcionam com 3 postos", "Ignoram a precedência"], correta: 1,
          explicacao: "O problema é combinatório; o ótimo exige modelos de otimização." },
        { id: "m04-q064", nivel: "dificil", tipo: "caso", contexto: "Todos os postos foram carregados com exatamente 55 s para um takt de 55 s, mas os tempos reais variam cerca de ±10% de ciclo para ciclo.",
          pergunta: "O que tende a acontecer e o que fazer?",
          opcoes: ["Nada, a média está no takt", "Ciclos lentos atrasam a linha; carregar abaixo do takt, reduzir a variação ou usar pequenos pulmões", "Aumentar o takt artificialmente", "Eliminar as pausas para compensar"], correta: 1,
          explicacao: "Média no takt com variação = atrasos frequentes." },
        { id: "m04-q065", nivel: "dificil", tipo: "discursiva", pergunta: "Uma linha monta dois modelos: A (60% do mix, 180 s de trabalho) e B (40%, 220 s). Como você definiria a base de balanceamento e o que cuidaria na operação?",
          respostaModelo: "Tempo médio ponderado = 0,6 × 180 + 0,4 × 220 = **196 s** por unidade; balancear por ele e **verificar cada modelo** posto a posto (B pode estourar o takt em alguns postos). Na operação: **sequenciamento nivelado** (alternar A e B, evitando vários B seguidos), postos com folga para absorver B, padronização por modelo, ergonomia e monitoramento dos postos críticos.",
          criterios: ["Calcula o tempo ponderado (196 s)", "Verifica a carga de cada modelo por posto", "Propõe sequenciamento nivelado do mix", "Considera folga/variabilidade e ergonomia"] },
        { id: "m04-q066", nivel: "dificil", tipo: "calculo", pergunta: "Modelo A: 60% do mix, 180 s; modelo B: 40%, 220 s. Qual o tempo médio ponderado por unidade (s)?",
          resposta: 196, tolerancia: 0, unidade: "s",
          resolucao: "0,6 × 180 + 0,4 × 220 = 108 + 88 = 196 s",
          explicacao: "Base para o balanceamento de linhas multimodelo." }
      ]
    },

    /* ==================================================================
       LIÇÃO 6 — GARGALO E MELHORIA DA LINHA
       ================================================================== */
    {
      id: "m04-l6",
      titulo: "Gargalo e melhoria da linha",
      icone: "🚧",
      objetivos: {
        facil: ["Identificar o gargalo de uma linha", "Calcular a produção máxima a partir do tempo de ciclo", "Explicar por que melhorar fora do gargalo não aumenta a saída"],
        medio: ["Calcular o ganho de produção ao atacar o gargalo", "Escolher ações para o gargalo", "Identificar o novo gargalo após a melhoria"],
        dificil: ["Aplicar os 5 passos da Teoria das Restrições", "Avaliar um investimento no gargalo pelo ganho de saída e pela demanda", "Analisar variabilidade e estoques de proteção"]
      },
      prerequisitos: [{ texto: "Takt time e balanceamento", licao: "m04-l5" }],
      resumo: {
        facil: "O **gargalo** é o posto de maior tempo de ciclo: ele dita a saída da linha. **Produção máxima = tempo disponível ÷ TC**. Melhorar um posto que não é gargalo não aumenta a produção.",
        medio: "Redistribuir tarefas, dividir, paralelizar, reduzir setups e paradas **no gargalo**, inspecionar **antes** dele. Depois da melhoria, o gargalo **muda de lugar**: recalcule.",
        dificil: "TOC: **identificar, explorar, subordinar, elevar e repetir**. Investir no gargalo só vale se houver **demanda**; se o mercado for a restrição, capacidade extra vira estoque. Pulmões antes do gargalo protegem a saída contra a variabilidade."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Toda linha tem um ponto que limita a produção. Encontrar e atacar esse ponto é o caminho mais rápido para produzir mais sem contratar nem comprar máquinas desnecessárias." },
        { nivel: "facil", tipo: "exemplo", titulo: "Linha de 4 postos", texto: "Tempos: 40 s · **52 s** · 45 s · 38 s.\nTC = 52 s (posto 2 é o gargalo).\nProdução máxima = 26.400 s ÷ 52 s = 507,7 → **507 unidades/turno**." },
        { nivel: "facil", tipo: "conceito", titulo: "Gargalo", texto: "Recurso cuja capacidade é **menor ou igual à demanda** colocada sobre ele. Na linha, é o posto com **maior tempo de ciclo**. Antes dele forma-se fila; depois dele, os postos esperam." },
        { nivel: "facil", tipo: "bobo", titulo: "O caixa do restaurante", texto: "A cozinha é rápida, os garçons também, mas há um só caixa: a fila se forma ali. Colocar mais garçons não faz ninguém sair mais rápido." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Uma hora perdida no gargalo é uma hora perdida no sistema inteiro.”** (Goldratt)" },
        { nivel: "facil", tipo: "atencao", titulo: "Melhoria no lugar errado", texto: "Reduzir o posto 1 de 40 para 30 s **não muda nada**: a linha continua a 52 s por unidade." },

        { nivel: "medio", tipo: "exemplo", titulo: "Redistribuindo tarefas", texto: "Passar 7 s de trabalho do posto 2 (52 → 45 s) para o posto 4 (38 → 45 s).\nNovo TC = 45 s → 26.400 ÷ 45 = 586,7 → **586 unidades** (+79).\nGanho = 52 ÷ 45 − 1 ≈ **15,6%**, sem investimento." },
        { nivel: "medio", tipo: "conceito", titulo: "O que fazer no gargalo", texto: "• **Redistribuir** tarefas para postos com folga.\n• **Dividir** a tarefa ou fazer **postos em paralelo**.\n• **Reduzir setup** e paradas no gargalo (SMED, manutenção).\n• **Inspecionar antes** do gargalo: não gastar tempo dele com peça ruim.\n• **Horas extras e intervalos cobertos** preferencialmente no gargalo." },
        { nivel: "medio", tipo: "atencao", titulo: "O gargalo muda", texto: "Depois da melhoria, os postos 2, 3 e 4 ficaram com 45 s. Qualquer nova melhoria precisa atacar **todos** os postos que agora limitam, ou será inútil." },

        { nivel: "dificil", tipo: "conceito", titulo: "Os 5 passos da TOC", texto: "Teoria das Restrições (Goldratt):\n1. **Identificar** a restrição.\n2. **Explorar**: tirar o máximo dela (sem paradas, sem refugo, sem setups desnecessários).\n3. **Subordinar** o resto do sistema ao ritmo dela.\n4. **Elevar**: aumentar a capacidade (investir) se ainda for preciso.\n5. **Repetir**, sem deixar a inércia virar a nova restrição." },
        { nivel: "dificil", tipo: "conceito", titulo: "Tambor, pulmão e corda", texto: "**Tambor:** o gargalo dita o ritmo. **Pulmão:** estoque de proteção antes do gargalo, para que ele nunca pare por falta de material. **Corda:** liberar material na entrada no ritmo do gargalo (evita estoque em excesso no resto da linha)." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Vale investir no gargalo?", texto: "Um robô de **R$ 150 mil** reduz o gargalo de 52 para 45 s: +79 unidades por turno.\nMargem de contribuição de R$ 4/unidade × 79 × 2 turnos × 22 dias = **R$ 13.904/mês**.\nPayback ≈ 150.000 ÷ 13.904 ≈ **10,8 meses**, **se houver demanda** para as unidades extras." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Quando a restrição é o mercado", texto: "Se a demanda é de 450 unidades por turno e a linha já faz 507, **a restrição é o mercado**. Aumentar a capacidade só gera estoque e custo. Nesse caso, o esforço vai para vendas, mix, qualidade ou redução de custo." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• GOLDRATT, E. M.; COX, J. *A Meta* (1984).\n• Módulo 6 (Lean) e Módulo 8 (payback) deste curso." }
      ],
      questoes: [
        { id: "m04-q067", nivel: "facil", tipo: "calculo", pergunta: "Uma linha tem postos com tempos de 40, 52, 45 e 38 s. Qual o tempo de ciclo da linha (s)?",
          resposta: 52, tolerancia: 0, unidade: "s",
          resolucao: "TC = maior tempo de posto = 52 s (posto 2, o gargalo).",
          explicacao: "A linha anda no ritmo do posto mais lento." },
        { id: "m04-q068", nivel: "facil", tipo: "calculo", pergunta: "Com TC de 52 s e 26.400 s disponíveis, quantas unidades inteiras a linha produz por turno?",
          resposta: 507, tolerancia: 0, unidade: "unidades",
          resolucao: "26.400 ÷ 52 = 507,7 → 507 unidades",
          explicacao: "A capacidade se arredonda para baixo." },
        { id: "m04-q069", nivel: "facil", tipo: "multipla", pergunta: "O posto 1 (40 s) foi melhorado para 30 s. O gargalo (posto 2) continua com 52 s. O que acontece com a produção?",
          opcoes: ["Aumenta 25%", "Não muda", "Diminui", "Aumenta 10 unidades"], correta: 1,
          explicacao: "Sem mexer no gargalo, a saída continua limitada a 52 s por unidade." },
        { id: "m04-q070", nivel: "facil", tipo: "vf", pergunta: "O gargalo de uma linha é o posto com o menor tempo de ciclo.",
          correta: false, explicacao: "É o posto com o MAIOR tempo: ele limita o ritmo." },
        { id: "m04-q071", nivel: "medio", tipo: "calculo", pergunta: "Após redistribuir tarefas, o maior tempo de posto passou para 45 s. Quantas unidades inteiras a linha produz em 26.400 s?",
          resposta: 586, tolerancia: 0, unidade: "unidades",
          resolucao: "26.400 ÷ 45 = 586,7 → 586 unidades (+79 em relação a 507)",
          explicacao: "Ganho sem investimento, só redistribuindo trabalho." },
        { id: "m04-q072", nivel: "medio", tipo: "calculo", pergunta: "O tempo de ciclo caiu de 52 s para 45 s. Qual o ganho percentual de capacidade?",
          resposta: 15.6, tolerancia: 0.1, unidade: "%",
          resolucao: "Ganho = 52 ÷ 45 − 1 = 0,1556 → 15,6%",
          explicacao: "Capacidade é inversamente proporcional ao tempo de ciclo." },
        { id: "m04-q073", nivel: "medio", tipo: "ligar", pergunta: "Ligue a ação ao que ela faz pelo gargalo:",
          pares: [["Redistribuir tarefas", "Passa trabalho do gargalo para postos com folga"], ["Postos em paralelo", "Duplica a capacidade da etapa"], ["Reduzir setup (SMED)", "Devolve tempo produtivo ao gargalo"], ["Inspecionar antes do gargalo", "Evita gastar o gargalo com peça ruim"]],
          explicacao: "Todas protegem ou ampliam a capacidade da restrição." },
        { id: "m04-q074", nivel: "medio", tipo: "multipla", pergunta: "Se for necessário fazer horas extras para atender um pico de demanda, onde elas devem ser priorizadas?",
          opcoes: ["Em todos os postos igualmente", "No posto gargalo", "No posto mais rápido", "Na expedição"], correta: 1,
          explicacao: "Hora extra fora do gargalo só gera estoque intermediário." },
        { id: "m04-q075", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene os 5 passos da Teoria das Restrições:",
          itens: ["Identificar a restrição", "Explorar a restrição", "Subordinar o resto do sistema", "Elevar a restrição", "Repetir (evitar a inércia)"],
          explicacao: "Explorar e subordinar vêm ANTES de investir (elevar)." },
        { id: "m04-q076", nivel: "dificil", tipo: "calculo", pergunta: "Um investimento aumenta a saída em 79 unidades por turno. Margem de contribuição R$ 4/unidade, 2 turnos por dia, 22 dias por mês. Qual o ganho mensal (R$)?",
          resposta: 13904, tolerancia: 0, unidade: "R$",
          resolucao: "79 × 4 × 2 × 22 = R$ 13.904 por mês",
          explicacao: "Só é ganho real se houver demanda para essas unidades." },
        { id: "m04-q077", nivel: "dificil", tipo: "calculo", pergunta: "O investimento custa R$ 150.000 e gera R$ 13.904 por mês. Qual o payback simples (meses)?",
          resposta: 10.8, tolerancia: 0.1, unidade: "meses",
          resolucao: "Payback = 150.000 ÷ 13.904 ≈ 10,8 meses",
          explicacao: "Veja o Módulo 8 para métodos que consideram o valor do dinheiro no tempo." },
        { id: "m04-q078", nivel: "dificil", tipo: "caso", contexto: "A linha produz 507 unidades por turno e a demanda estável é de 450. A engenharia propõe o robô de R$ 150 mil para chegar a 586.",
          pergunta: "Qual a recomendação?",
          opcoes: ["Comprar: mais capacidade é sempre melhor", "Não comprar agora: a restrição é o mercado; capacidade extra viraria estoque", "Comprar e demitir operadores", "Reduzir a demanda"], correta: 1,
          explicacao: "Sem demanda, o ganho do investimento não se realiza." },
        { id: "m04-q079", nivel: "dificil", tipo: "discursiva", pergunta: "Numa linha, o gargalo “passeia”: em alguns dias é o posto 2, em outros o posto 3. Explique a provável causa e proponha um plano de ação.",
          respostaModelo: "Postos com cargas **muito próximas** e **variabilidade** alta (tempos, paradas, qualidade do material) fazem o gargalo alternar. Plano: medir tempos e paradas por posto com dados (e não por impressão); **padronizar** o trabalho para reduzir a variação; decidir **onde** a restrição deve ficar (idealmente num recurso estável e caro) e dar folga aos outros; usar **pulmão** antes do gargalo escolhido; acompanhar diariamente.",
          criterios: ["Relaciona o gargalo móvel à carga parecida e à variabilidade", "Propõe coletar dados por posto", "Propõe padronização e redução de variação", "Propõe escolher/proteger a restrição (pulmão)"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 7 — CHEFÃO
       ================================================================== */
    {
      id: "m04-l7",
      titulo: "👾 Chefão: a linha de bombons",
      icone: "👾",
      objetivos: {
        facil: ["Ordenar o raciocínio da engenharia de métodos, do método ao gargalo", "Relacionar cada conceito à pergunta que ele responde", "Conectar métodos a projetos (Módulo 2) e produtividade (Módulo 1)"],
        medio: ["Calcular tempo padrão, takt, número mínimo de postos, eficiência e capacidade no mesmo caso", "Verificar se a linha atende a demanda", "Interpretar a diferença entre o mínimo teórico e o obtido"],
        dificil: ["Justificar por que o mínimo teórico nem sempre é alcançável", "Propor alternativas com trade-offs para a linha", "Integrar tempos, ergonomia e investimento na recomendação"]
      },
      prerequisitos: [{ texto: "Todas as lições do Módulo 4", licao: "m04-l1" }],
      resumo: {
        facil: "Engenharia de métodos em sequência: **melhorar o método → medir → tempo padrão → takt → balancear → atacar o gargalo**.",
        medio: "Na linha de bombons: TP do elemento C ≈ 40 s; takt = 45 s; N mínimo = 3; o balanceamento com precedência dá **4 postos**, TC = 40 s, eficiência de 81% e capacidade de 675 caixas, acima da demanda de 600.",
        dificil: "O N mínimo é um **limite inferior**: a precedência e as tarefas indivisíveis podem impedir alcançá-lo. As alternativas (dividir C, automatizar C, dar tarefas de apoio ao posto 4) devem ser comparadas por custo, ergonomia e flexibilidade."
      },
      blocos: [
        { tipo: "serio", titulo: "O caso: linha de caixas de bombom", texto: "A nova linha da Doces Serra (Módulo 2) precisa de **600 caixas por turno**, com **450 min** disponíveis (27.000 s).\nTarefas: **A** montar caixa 20 s · **B** inserir berço 15 s (após A) · **C** colocar bombons 40 s (após B) · **D** fechar tampa 10 s (após C) · **E** etiquetar 12 s (após D) · **F** inspecionar 8 s (após D) · **G** encaixotar 25 s (após E e F). Σt = **130 s**.\nNa cronoanálise de C: TO = 36 s, ritmo 100%, tolerância de 11% sobre o TN." },
        { nivel: "facil", tipo: "conceito", titulo: "✅ Checklist (Fácil)", texto: "• Método antes do tempo · símbolos do fluxograma\n• Elementos e tempo médio\n• TO → TN → TP\n• Eficiência × utilização\n• Takt × ciclo · N mínimo\n• Gargalo e produção máxima" },
        { nivel: "medio", tipo: "conceito", titulo: "✅ Checklist (Médio)", texto: "• ECRS e economia de movimentos\n• Número de ciclos\n• Convenções de tolerância e capacidade\n• Eficiência e utilização de setor\n• Heurística do maior tempo, eficiência e ociosidade\n• Ganho ao atacar o gargalo" },
        { nivel: "dificil", tipo: "conceito", titulo: "✅ Checklist (Difícil)", texto: "• Trade-offs de método (ergonomia, flexibilidade)\n• Amostragem do trabalho e tempos predeterminados\n• Subjetividade do ritmo e efeito do TP em custos\n• Curva de aprendizagem · eficiência local × global\n• Paralelismo, variabilidade e multimodelo\n• TOC e investimento no gargalo" }
      ],
      questoes: [
        { id: "m04-q080", nivel: "facil", tipo: "ordenar", pergunta: "Ordene o raciocínio para montar a linha de bombons:",
          itens: ["Melhorar o método de cada tarefa", "Medir os tempos (cronoanálise)", "Calcular o tempo padrão", "Calcular o takt time", "Balancear a linha", "Acompanhar e atacar o gargalo"],
          explicacao: "Método → medida → padrão → ritmo do cliente → distribuição → melhoria contínua." },
        { id: "m04-q081", nivel: "facil", tipo: "ligar", pergunta: "Ligue o conceito à pergunta que ele responde:",
          pares: [["Takt time", "Em que ritmo o cliente precisa das caixas?"], ["Tempo padrão", "Quanto tempo um operador normal leva, com tolerâncias?"], ["Gargalo", "Qual posto limita a produção?"], ["N mínimo de postos", "Qual o menor número possível de postos?"]],
          explicacao: "Cada ferramenta responde uma pergunta diferente." },
        { id: "m04-q082", nivel: "facil", tipo: "calculo", pergunta: "Qual o takt time da linha de bombons (27.000 s disponíveis, 600 caixas)?",
          resposta: 45, tolerancia: 0, unidade: "s",
          resolucao: "Takt = 27.000 ÷ 600 = 45 s",
          explicacao: "A linha precisa entregar uma caixa a cada 45 s." },
        { id: "m04-q083", nivel: "facil", tipo: "vf", pergunta: "Balancear a linha nova faz parte da partida do projeto da Doces Serra (Módulo 2).",
          correta: true, explicacao: "A partida só é aceita se a linha atender a demanda com qualidade." },
        { id: "m04-q084", nivel: "medio", tipo: "calculo", pergunta: "Elemento C: TO = 36 s, ritmo 100%, tolerância de 11% sobre o tempo normal. Qual o tempo padrão (s)?",
          resposta: 39.96, tolerancia: 0.05, unidade: "s",
          resolucao: "TN = 36 × 1,00 = 36 s\nTP = 36 × 1,11 = 39,96 s ≈ 40 s",
          explicacao: "É o valor usado no balanceamento (40 s)." },
        { id: "m04-q085", nivel: "medio", tipo: "calculo", pergunta: "Σt = 130 s e takt = 45 s. Qual o número mínimo teórico de postos?",
          resposta: 3, tolerancia: 0, unidade: "postos",
          resolucao: "130 ÷ 45 = 2,89 → 3 postos",
          explicacao: "É um limite inferior: falta verificar a precedência." },
        { id: "m04-q086", nivel: "medio", tipo: "calculo", pergunta: "O balanceamento com precedência resultou em 4 postos (35, 40, 30 e 25 s). Qual a eficiência do balanceamento (%)?",
          resposta: 81.25, tolerancia: 0.1, unidade: "%",
          resolucao: "TC = 40 s\nEficiência = 130 ÷ (4 × 40) = 130 ÷ 160 = 81,25%",
          explicacao: "Postos: P1 = A + B (35), P2 = C (40), P3 = D + E + F (30), P4 = G (25)." },
        { id: "m04-q087", nivel: "medio", tipo: "calculo", pergunta: "Com TC = 40 s e 27.000 s disponíveis, quantas caixas a linha produz por turno?",
          resposta: 675, tolerancia: 0, unidade: "caixas",
          resolucao: "27.000 ÷ 40 = 675 caixas ≥ 600 ✓",
          explicacao: "Atende a demanda com 12,5% de folga." },
        { id: "m04-q088", nivel: "dificil", tipo: "vf", pergunta: "O número mínimo teórico de postos é sempre alcançável quando se usa uma boa heurística.",
          correta: false, explicacao: "Precedência e tarefas indivisíveis podem impedir. Aqui, A + B = 35 s e C = 40 s não cabem juntas; G não cabe com D + E + F." },
        { id: "m04-q089", nivel: "dificil", tipo: "caso", contexto: "A linha tem 4 postos (35, 40, 30 e 25 s) para um takt de 45 s. O diretor pergunta se dá para operar com 3 pessoas.",
          pergunta: "Qual a melhor resposta técnica?",
          opcoes: ["Sim: o N mínimo é 3, basta juntar postos", "Com as tarefas atuais, não: a precedência impede 3 postos dentro de 45 s. Seria preciso mudar o método (ex.: dividir ou automatizar C) ou aceitar um takt maior", "Sim, desde que os operadores trabalhem mais rápido", "Não, e é preciso contratar mais gente"], correta: 1,
          justificativas: ["Juntar P3 e P4 daria 55 s > 45 s; juntar P1 e P2 daria 75 s.", "Responde com base nos dados e aponta as alternativas reais.", "Exigir ritmo acima do padrão gera refugo e risco ergonômico.", "4 postos atendem; não há necessidade de mais gente."],
          explicacao: "Decisão de engenharia: dados + alternativas + trade-offs." },
        { id: "m04-q090", nivel: "dificil", tipo: "discursiva", pergunta: "Proponha duas alternativas para reduzir a ociosidade da linha de bombons (eficiência de 81%) e compare os trade-offs.",
          respostaModelo: "(1) **Tarefas de apoio ao posto 4** (abastecimento de caixas, inspeção por amostragem, 5S): custo baixo, mantém 4 pessoas, aproveita a folga; risco de virar “posto coringa” sem padrão. (2) **Automatizar ou dividir C** (dispositivo que posiciona os bombons): pode permitir 3 postos; exige investimento, prazo e validação de qualidade; avaliar payback e flexibilidade para outros produtos. Em ambos: considerar ergonomia (C é repetitivo) e demanda futura (com mais demanda, a folga atual pode ser necessária).",
          criterios: ["Apresenta pelo menos duas alternativas concretas", "Compara custo, prazo e flexibilidade", "Considera ergonomia", "Considera a demanda futura"] }
      ]
    }
  ],

  glossario: [
    { termo: "Estudo do trabalho", definicao: "Conjunto de estudo de métodos (como fazer) e medida do trabalho (quanto tempo)." },
    { termo: "Fluxograma de processo", definicao: "Registro sequencial das etapas com os símbolos operação, transporte, inspeção, espera e armazenagem." },
    { termo: "ECRS", definicao: "Eliminar, Combinar, Rearranjar, Simplificar: ordem de ataque das melhorias de método." },
    { termo: "Therbligs", definicao: "Micromovimentos do trabalho manual definidos pelos Gilbreth (procurar, pegar, posicionar…)." },
    { termo: "Diagrama de espaguete", definicao: "Desenho do caminho real percorrido por pessoas ou materiais sobre a planta." },
    { termo: "Cronoanálise", definicao: "Medição de tempos com cronômetro de uma operação padronizada, dividida em elementos." },
    { termo: "Elemento", definicao: "Parte de uma operação com início e fim observáveis." },
    { termo: "Elemento estranho", definicao: "Evento que não faz parte do método normal (peça que cai, conversa); registrado à parte." },
    { termo: "Tempo observado (TO)", definicao: "Média dos tempos cronometrados." },
    { termo: "Fator de ritmo", definicao: "Avaliação do ritmo do operador em relação ao normal (100%)." },
    { termo: "Tempo normal (TN)", definicao: "TO × fator de ritmo: tempo de um operador qualificado em ritmo normal." },
    { termo: "Tolerâncias", definicao: "Acréscimos para necessidades pessoais, fadiga e esperas inevitáveis." },
    { termo: "Tempo padrão (TP)", definicao: "Tempo normal acrescido das tolerâncias." },
    { termo: "Amostragem do trabalho", definicao: "Observações instantâneas aleatórias para estimar a porcentagem de tempo em cada atividade." },
    { termo: "MTM / MOST", definicao: "Sistemas de tempos predeterminados baseados em micromovimentos tabelados." },
    { termo: "TMU", definicao: "Unidade de tempo do MTM: 0,00001 hora = 0,036 s." },
    { termo: "Horas-padrão", definicao: "Quantidade produzida × tempo padrão." },
    { termo: "Eficiência", definicao: "Horas-padrão produzidas ÷ horas trabalhadas." },
    { termo: "Utilização", definicao: "Horas trabalhadas ÷ horas disponíveis." },
    { termo: "Curva de aprendizagem", definicao: "Queda do tempo por unidade a uma taxa fixa a cada dobro da produção acumulada (Wright, 1936)." },
    { termo: "Takt time", definicao: "Tempo disponível ÷ demanda: ritmo que o cliente exige." },
    { termo: "Tempo de ciclo", definicao: "Ritmo real da linha, dado pelo maior tempo entre os postos." },
    { termo: "Balanceamento de linha", definicao: "Distribuição das tarefas entre postos respeitando precedência e takt." },
    { termo: "Diagrama de precedência", definicao: "Rede que mostra quais tarefas precisam ser feitas antes de outras." },
    { termo: "Eficiência do balanceamento", definicao: "Σt ÷ (N × TC)." },
    { termo: "Ociosidade", definicao: "N × TC − Σt: tempo parado por ciclo somando todos os postos." },
    { termo: "Postos em paralelo", definicao: "Dois ou mais operadores fazendo a mesma tarefa em unidades alternadas." },
    { termo: "Gargalo", definicao: "Recurso que limita a saída do sistema; na linha, o posto de maior tempo." },
    { termo: "Teoria das Restrições (TOC)", definicao: "Abordagem de Goldratt: identificar, explorar, subordinar, elevar e repetir." },
    { termo: "Tambor-pulmão-corda", definicao: "Programação pela TOC: o gargalo dita o ritmo, o pulmão o protege e a corda controla a liberação." }
  ],

  flashcards: [
    { id: "m04-f01", frente: "Estudo do trabalho = ?", verso: "Estudo de métodos (como) + medida do trabalho (quanto tempo). Método primeiro." },
    { id: "m04-f02", frente: "5 símbolos do fluxograma", verso: "Operação, Transporte, Inspeção, Espera, Armazenagem (“O Tio Ignorou a Espera no Armazém”)." },
    { id: "m04-f03", frente: "ECRS", verso: "Eliminar, Combinar, Rearranjar, Simplificar." },
    { id: "m04-f04", frente: "Therbligs ineficientes", verso: "Procurar, selecionar, segurar, esperar." },
    { id: "m04-f05", frente: "Número de ciclos da cronoanálise", verso: "n = (z · s ÷ (Er · x̄))², arredondando para cima." },
    { id: "m04-f06", frente: "Leitura contínua × repetitiva", verso: "Contínua: não zera, subtrai depois. Repetitiva: zera a cada elemento." },
    { id: "m04-f07", frente: "TO → TN → TP", verso: "TN = TO × ritmo; TP = TN × (1 + T) ou TN ÷ (1 − T)." },
    { id: "m04-f08", frente: "Ritmo acima de 100%", verso: "Operador rápido: TN maior que o TO." },
    { id: "m04-f09", frente: "Tipos de tolerância", verso: "Pessoais, fadiga, esperas inevitáveis." },
    { id: "m04-f10", frente: "Capacidade por turno", verso: "Tempo disponível ÷ TP, arredondado para baixo." },
    { id: "m04-f11", frente: "Amostragem do trabalho", verso: "n = z² · p(1 − p) ÷ E². Observações instantâneas aleatórias." },
    { id: "m04-f12", frente: "Tempos predeterminados", verso: "MTM, MOST: tempos tabelados de micromovimentos; servem antes de a linha existir." },
    { id: "m04-f13", frente: "Eficiência × utilização", verso: "Eficiência: horas-padrão ÷ horas trabalhadas. Utilização: trabalhadas ÷ disponíveis." },
    { id: "m04-f14", frente: "Curva de aprendizagem 80%", verso: "A cada DOBRO da produção acumulada, o tempo cai para 80%." },
    { id: "m04-f15", frente: "Takt time", verso: "Tempo disponível ÷ demanda. “Takt é o cliente, ciclo é a linha.”" },
    { id: "m04-f16", frente: "N mínimo de postos", verso: "⌈Σt ÷ takt⌉ — é um limite inferior." },
    { id: "m04-f17", frente: "Heurística do maior tempo", verso: "Entre as tarefas liberadas que cabem no posto, escolha a mais longa." },
    { id: "m04-f18", frente: "Eficiência do balanceamento", verso: "Σt ÷ (N × TC). Ociosidade = N × TC − Σt." },
    { id: "m04-f19", frente: "Tarefa maior que o takt", verso: "Dividir, postos em paralelo ou automatizar." },
    { id: "m04-f20", frente: "Gargalo", verso: "Posto de maior tempo de ciclo; dita a saída. Melhorar fora dele não aumenta a produção." },
    { id: "m04-f21", frente: "5 passos da TOC", verso: "Identificar, explorar, subordinar, elevar, repetir." },
    { id: "m04-f22", frente: "Quando não investir no gargalo", verso: "Quando a restrição é o mercado (demanda menor que a capacidade)." }
  ]
});
