/* =====================================================================
   MÓDULO 3 — PLANEJAMENTO E CONTROLE DA PRODUÇÃO (PCP)
   Hierarquia do planejamento, previsão de demanda, planejamento
   agregado, PMP/MPS, MRP, capacidade, sequenciamento e controle.
   Formato com níveis: veja o cabeçalho de "modulo-02.js".
   Exemplos numéricos são ILUSTRATIVOS (criados para ensino).
   ===================================================================== */
(window.MODULOS = window.MODULOS || []).push({
  id: "m03",
  numero: 3,
  ordem: 5,
  titulo: "Planejamento e Controle da Produção",
  icone: "🗓️",
  objetivo: "Decidir o que, quanto, quando e onde produzir: prever a demanda, planejar em níveis, calcular materiais e capacidade, sequenciar as ordens e controlar o que foi planejado.",
  conquista: { id: "mod-m03", nome: "Maestro do PCP", icone: "🗓️", descricao: "Concluiu o Módulo 3 — Planejamento e Controle da Produção." },

  resumoAudio:
    "O PCP responde quatro perguntas: o que, quanto, quando e onde produzir. " +
    "O planejamento desce em níveis: estratégico, com anos e fábricas; tático, com meses e famílias de produtos; operacional, com dias, ordens e máquinas. " +
    "Tudo começa pela previsão de demanda. Toda previsão erra; a pergunta é quanto e para que lado. " +
    "Média móvel suaviza, suavização exponencial dá mais peso ao recente, regressão pega a tendência e o índice sazonal pega o padrão do ano. " +
    "Meça o erro com MAD e MAPE e vigie o viés com o sinal de rastreamento. " +
    "No planejamento agregado, escolha entre acompanhar a demanda ou produzir nivelado e usar estoque. " +
    "O plano mestre diz quantos produtos finais em cada semana; o MRP explode a lista de materiais e calcula o que comprar e fabricar, descontando estoque e recebimentos e recuando o lead time. " +
    "Carga maior que capacidade não fecha: ajuste o plano ou a capacidade. " +
    "No sequenciamento, menor tempo primeiro reduz o tempo médio no sistema; menor data de entrega primeiro reduz o maior atraso. " +
    "Para duas máquinas em série, use a regra de Johnson. E planejar sem controlar é só desejar.",

  licoes: [
    /* ==================================================================
       LIÇÃO 1 — O QUE É PCP
       ================================================================== */
    {
      id: "m03-l1",
      titulo: "O que é PCP e a hierarquia do planejamento",
      icone: "🧭",
      objetivos: {
        facil: ["Explicar as quatro perguntas que o PCP responde", "Diferenciar os níveis estratégico, tático e operacional", "Reconhecer as estratégias de resposta à demanda (MTS, MTO, ATO, ETO)"],
        medio: ["Associar cada ferramenta do PCP ao seu nível e horizonte", "Explicar o papel do S&OP na integração entre áreas", "Escolher a estratégia de resposta mais adequada a um produto"],
        dificil: ["Analisar a coerência entre os níveis do planejamento", "Relacionar ponto de desacoplamento, estoque e prazo de entrega", "Criticar o planejamento feito apenas por uma área"]
      },
      prerequisitos: [
        { texto: "Objetivos e níveis de decisão (Módulo 1)", licao: "m01-l6" },
        { texto: "Tempo padrão (Módulo 4)", licao: "m04-l3" }
      ],
      resumo: {
        facil: "O PCP decide **o que, quanto, quando e onde** produzir e acompanha se o plano foi cumprido. Os níveis são: **estratégico** (anos), **tático** (meses) e **operacional** (dias e horas). A empresa pode produzir **para estoque (MTS)**, **sob encomenda (MTO)**, **montar sob encomenda (ATO)** ou **projetar sob encomenda (ETO)**.",
        medio: "Cada nível tem ferramentas: plano de produção e capacidade (estratégico); **S&OP**, planejamento agregado e **PMP/MPS** (tático); **MRP**, programação e sequenciamento (operacional). O **S&OP** alinha vendas, produção, compras e finanças num plano único por família de produtos.",
        dificil: "Os níveis precisam ser **coerentes**: a soma do PMP deve caber no plano agregado, e este na capacidade instalada. O **ponto de desacoplamento** separa o que é feito por previsão do que é feito por pedido: quanto mais perto do cliente, menor o prazo e maior o estoque. Plano feito só por uma área tende a falhar na execução."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Sem PCP, a fábrica produz o que é mais fácil, e não o que o cliente pediu: falta o produto que vende e sobra o que encalha. O PCP é o **cérebro da operação**: transforma a demanda em ordens de compra e de produção, no tempo certo." },
        { nivel: "facil", tipo: "conceito", titulo: "As quatro perguntas", texto: "O PCP responde:\n• **O quê** produzir?\n• **Quanto** produzir?\n• **Quando** produzir?\n• **Onde** (em que recurso) produzir?\nE depois **controla**: o que foi feito bate com o planejado? Se não, por quê?" },
        { nivel: "facil", tipo: "mapa", titulo: "Mapa do módulo", texto:
"📈 Previsão de demanda\n   │\n   ▼\nESTRATÉGICO (anos)\n Plano de produção · capacidade\n   │\n   ▼\nTÁTICO (meses)\n S&OP · planejamento agregado\n PMP/MPS (semanas, produto)\n   │\n   ▼\nOPERACIONAL (dias, horas)\n MRP (materiais) · CRP (capac.)\n Programação · sequenciamento\n   │\n   ▼\n🔁 Controle: planejado × realizado" },
        { nivel: "facil", tipo: "conceito", titulo: "Três níveis", texto: "**Estratégico (longo prazo, anos):** quanto de capacidade ter, novas fábricas, grandes investimentos.\n**Tático (médio prazo, meses):** quanto produzir por família de produtos, quantas pessoas, turnos, estoques.\n**Operacional (curto prazo, dias e horas):** quais ordens, em que máquina, em que sequência." },
        { nivel: "facil", tipo: "bobo", titulo: "A festa de aniversário", texto: "**Estratégico:** alugar o salão ou fazer em casa? (decide meses antes e é difícil voltar atrás).\n**Tático:** quantos convidados, quantos salgados, quem ajuda.\n**Operacional:** às 15h fritar a coxinha, às 15h30 montar a mesa.\nSe o salão comporta 50 pessoas, não adianta convidar 120: os níveis precisam **conversar**." },
        { nivel: "facil", tipo: "conceito", titulo: "Estratégias de resposta à demanda", texto: "**MTS (make to stock):** produz para estoque, antes do pedido. Ex.: refrigerante.\n**ATO (assemble to order):** fabrica módulos antes e **monta** quando chega o pedido. Ex.: computador configurável.\n**MTO (make to order):** fabrica só depois do pedido. Ex.: móvel planejado com projeto padrão.\n**ETO (engineer to order):** projeta e fabrica depois do pedido. Ex.: navio, máquina especial." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Estoque, Monta, Faz, Projeta”**: MTS → ATO → MTO → ETO. Da esquerda para a direita, o cliente espera **mais** e a empresa guarda **menos** estoque de produto pronto." },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum", texto: "Achar que PCP é só “fazer a programação da semana”. A programação é o último degrau. Se a previsão e o plano mestre estão errados, nenhuma programação salva a entrega." },

        { nivel: "medio", tipo: "conceito", titulo: "Ferramentas por nível", texto: "| Nível | Horizonte | Unidade | Ferramentas |\n|---|---|---|---|\n| Estratégico | 1 a 5+ anos | Fábricas, capacidade | Plano de produção, plano de capacidade |\n| Tático | 3 a 18 meses | Famílias de produtos | S&OP, planejamento agregado |\n| Tático/operacional | semanas | Produto final | PMP/MPS, RCCP |\n| Operacional | dias, horas | Itens, ordens, máquinas | MRP, CRP, programação, sequenciamento |\nHorizontes são indicativos: variam com o setor e o lead time do produto." },
        { nivel: "medio", tipo: "conceito", titulo: "S&OP", texto: "**S&OP (Sales and Operations Planning)** é um processo mensal em que vendas, marketing, produção, compras e finanças chegam a **um único plano** por família de produtos. Etapas típicas: revisão da demanda → revisão do suprimento/capacidade → pré-reunião de conciliação → reunião executiva de decisão.\nObjetivo: acabar com o “cada área com seu número”." },
        { nivel: "medio", tipo: "serio", titulo: "Na empresa", texto: "Na Doces Serra, vendas prevê 60 mil caixas de bombom para dezembro, finanças orçou 45 mil e a produção sabe que a capacidade é de 50 mil. Sem S&OP, cada área trabalha com um número e o resultado aparece como falta, excesso ou hora extra de última hora. No S&OP, a diretoria decide: antecipar produção em outubro e novembro, contratar temporários ou aceitar vender menos." },
        { nivel: "medio", tipo: "dica", titulo: "Como escolher MTS, ATO, MTO ou ETO", texto: "Pergunte: (1) quanto o cliente aceita esperar? (2) a demanda é previsível? (3) quanta variedade existe? (4) o produto perece ou fica obsoleto?\nDemanda estável, pouca variedade e cliente sem paciência → **MTS**. Muitas combinações de poucos módulos → **ATO**. Produto caro e personalizado → **MTO/ETO**." },
        { nivel: "medio", tipo: "conexao", titulo: "Conexão", texto: "Os níveis do PCP espelham os níveis de decisão do **Módulo 1**. O tempo padrão do **Módulo 4** é a base para calcular a capacidade usada em todos os níveis. O **Módulo 6 (Lean)** vai questionar parte dessa lógica, trocando “empurrar pelo plano” por “puxar pelo consumo”." },

        { nivel: "dificil", tipo: "conceito", titulo: "Coerência entre níveis", texto: "Cada nível **restringe** o seguinte: o plano agregado cabe na capacidade estratégica; o PMP, somado por família, bate com o plano agregado (**desagregação**); o MRP só é viável se o PMP respeitar a capacidade (verificada pelo **RCCP**). Quando um nível ignora o de cima, surgem planos impossíveis e o chão de fábrica passa a trabalhar por “urgência”." },
        { nivel: "dificil", tipo: "conceito", titulo: "Ponto de desacoplamento", texto: "É o ponto da cadeia até onde se produz por **previsão** e a partir do qual se produz por **pedido**. Estoque fica guardado exatamente nesse ponto.\nMTS: desacoplamento no produto acabado. ATO: nos módulos. MTO: na matéria-prima. ETO: antes do projeto.\nMover o ponto para perto do cliente reduz o prazo de entrega, mas aumenta estoque e risco de obsolescência. Adiar a diferenciação (**postponement**) é uma forma de ter prazo curto com menos estoque." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limitações do planejamento hierárquico", texto: "• A previsão sempre erra; planos longos acumulam erro.\n• Congelar o plano dá estabilidade, mas reduz a capacidade de responder ao cliente.\n• A desagregação pode gerar combinações que a fábrica não consegue fazer (setups, gargalos).\nPor isso existem **zonas de congelamento** no PMP, replanejamento periódico e mecanismos de puxar (Módulo 6)." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• TUBINO, D. F. *Planejamento e Controle da Produção: teoria e prática*. Atlas.\n• CORRÊA, H. L.; GIANESI, I. G. N.; CAON, M. *Planejamento, Programação e Controle da Produção: MRP II/ERP*. Atlas.\n• SLACK, N.; BRANDON-JONES, A.; JOHNSTON, R. *Administração da Produção*. Atlas.\n• VOLLMANN, T. E. et al. *Manufacturing Planning and Control Systems for Supply Chain Management*. McGraw-Hill." }
      ],
      questoes: [
        { id: "m03-q001", nivel: "facil", tipo: "multipla", pergunta: "Quais são as perguntas centrais do PCP?",
          opcoes: ["Quem contratar, quanto pagar e onde anunciar", "O que, quanto, quando e onde produzir", "Qual o preço, a margem e o lucro", "Qual fornecedor, qual banco e qual contador"], correta: 1,
          explicacao: "Depois de planejar, o PCP controla se o plano foi cumprido." },
        { id: "m03-q002", nivel: "facil", tipo: "ligar", pergunta: "Ligue o nível ao tipo de decisão:",
          pares: [["Estratégico", "Construir uma nova fábrica"], ["Tático", "Quantas caixas por mês e quantos turnos"], ["Operacional", "Qual ordem entra primeiro na máquina hoje"]],
          explicacao: "Quanto mais alto o nível, maior o horizonte e mais agregada a informação." },
        { id: "m03-q003", nivel: "facil", tipo: "ligar", pergunta: "Ligue a estratégia de resposta ao exemplo:",
          pares: [["MTS", "Refrigerante no supermercado"], ["ATO", "Notebook configurado na compra"], ["MTO", "Uniforme com o logotipo da empresa"], ["ETO", "Máquina especial projetada para o cliente"]],
          explicacao: "“Estoque, Monta, Faz, Projeta”." },
        { id: "m03-q004", nivel: "facil", tipo: "vf", pergunta: "No MTS (produzir para estoque), o produto é fabricado antes de o cliente fazer o pedido.",
          correta: true, explicacao: "Por isso o MTS depende muito da previsão de demanda." },
        { id: "m03-q005", nivel: "facil", tipo: "lacuna", pergunta: "O planejamento de ___ prazo decide capacidade e novas fábricas.",
          opcoes: ["longo", "curto", "nenhum", "diário"], correta: 0,
          explicacao: "É o nível estratégico, com horizonte de anos." },
        { id: "m03-q006", nivel: "facil", tipo: "vf", pergunta: "PCP é apenas a programação diária das máquinas.",
          correta: false, explicacao: "A programação é o último degrau; antes vêm previsão, planos agregado e mestre, MRP e capacidade." },
        { id: "m03-q007", nivel: "medio", tipo: "ordenar", pergunta: "Ordene do nível mais agregado ao mais detalhado:",
          itens: ["Plano de produção (capacidade)", "Planejamento agregado / S&OP", "PMP / MPS", "MRP", "Sequenciamento"],
          explicacao: "Cada nível desagrega o anterior." },
        { id: "m03-q008", nivel: "medio", tipo: "multipla", pergunta: "Qual o principal objetivo do S&OP?",
          opcoes: ["Calcular o tempo padrão das operações", "Chegar a um plano único entre vendas, produção, compras e finanças", "Definir a sequência das ordens na máquina", "Substituir o MRP"], correta: 1,
          explicacao: "O S&OP é um processo de decisão integrada, em geral mensal, por família de produtos." },
        { id: "m03-q009", nivel: "medio", tipo: "caso", contexto: "Uma loja de móveis oferece 3 tamanhos, 5 cores e 4 tipos de puxador para o mesmo armário. O cliente aceita esperar 3 dias, mas a fabricação completa leva 15 dias.",
          pergunta: "Qual estratégia de resposta é mais adequada?",
          opcoes: ["ETO", "MTO", "ATO: fabricar os módulos antes e montar no pedido", "MTS de todas as 60 combinações"], correta: 2,
          explicacao: "Com muitas combinações de poucos módulos e prazo curto, o ATO equilibra estoque e prazo." },
        { id: "m03-q010", nivel: "medio", tipo: "vf", pergunta: "O PMP (plano mestre de produção) trabalha com famílias de produtos, e o planejamento agregado trabalha com produtos finais.",
          correta: false, explicacao: "É o contrário: o agregado usa famílias; o PMP detalha produtos finais por semana." },
        { id: "m03-q011", nivel: "dificil", tipo: "multipla", pergunta: "Mover o ponto de desacoplamento para mais perto do cliente tende a:",
          opcoes: ["Aumentar o prazo de entrega e reduzir o estoque", "Reduzir o prazo de entrega e aumentar o estoque e o risco de obsolescência", "Não alterar prazo nem estoque", "Eliminar a necessidade de previsão"], correta: 1,
          explicacao: "Quanto mais pronto o item guardado, mais rápido se entrega e mais se arrisca em estoque." },
        { id: "m03-q012", nivel: "dificil", tipo: "caso", contexto: "O plano agregado prevê 50 mil caixas em dezembro. Somando o PMP de cada sabor, chega-se a 58 mil caixas.",
          pergunta: "Qual o problema e o que fazer?",
          opcoes: ["Nenhum: o PMP sempre pode superar o agregado", "Incoerência entre níveis: revisar o PMP (ou o agregado no S&OP) e verificar a capacidade com o RCCP", "Aumentar o preço para reduzir a demanda", "Ignorar o plano agregado"], correta: 1,
          justificativas: ["A desagregação deve bater com o nível superior; senão o plano não cabe na capacidade.", "Conciliar os níveis e checar a capacidade é o papel do PCP.", "Pode ser uma decisão de S&OP, mas não resolve a incoerência técnica.", "O agregado foi decidido considerando capacidade e recursos."],
          explicacao: "Planos incoerentes viram urgência no chão de fábrica." },
        { id: "m03-q013", nivel: "dificil", tipo: "discursiva", pergunta: "Uma empresa faz o planejamento só na área de vendas e manda o número para a fábrica. Explique os riscos e proponha uma melhoria.",
          respostaModelo: "Riscos: plano **sem considerar capacidade**, materiais e lead times; incentivos de vendas (metas otimistas) viram excesso de estoque ou promessas impossíveis; produção cria um “número paralelo”. Melhoria: implantar **S&OP** mensal com vendas, produção, compras e finanças; trabalhar por família, verificar capacidade, registrar premissas e decidir trade-offs na reunião executiva; medir a acurácia da previsão e o cumprimento do plano.",
          criterios: ["Aponta a falta de verificação de capacidade e materiais", "Menciona conflito de números entre áreas", "Propõe S&OP ou processo integrado", "Inclui medição/acompanhamento"] },
        { id: "m03-q014", nivel: "dificil", tipo: "vf", pergunta: "Congelar o PMP nas próximas semanas aumenta a estabilidade da fábrica, mas reduz a flexibilidade para atender mudanças do cliente.",
          correta: true, explicacao: "É um trade-off clássico: zonas congeladas, semicongeladas e livres." }
      ]
    },

    /* ==================================================================
       LIÇÃO 2 — PREVISÃO I: MÉTODOS BÁSICOS
       ================================================================== */
    {
      id: "m03-l2",
      titulo: "Previsão de demanda I: médias e suavização",
      icone: "🔮",
      objetivos: {
        facil: ["Diferenciar métodos qualitativos e quantitativos", "Calcular a média móvel simples", "Explicar por que toda previsão tem erro"],
        medio: ["Calcular a média móvel ponderada", "Calcular a previsão por suavização exponencial", "Explicar o efeito do número de períodos e de α"],
        dificil: ["Escolher o método conforme o padrão da série", "Explicar o atraso das médias diante de tendência", "Justificar a escolha de α com base no erro histórico"]
      },
      prerequisitos: [
        { texto: "Média e desvio-padrão (Módulo 13)", licao: "m13-l3" },
        { texto: "O que é PCP", licao: "m03-l1" }
      ],
      resumo: {
        facil: "Previsão **qualitativa** usa opinião (especialistas, Delphi, pesquisa de mercado); **quantitativa** usa dados históricos. A **média móvel simples** faz a média dos últimos n períodos. Toda previsão erra: o objetivo é errar pouco e sem viés.",
        medio: "**Média ponderada:** pesos maiores para os períodos recentes (pesos somam 1). **Suavização exponencial:** Fₜ₊₁ = Fₜ + α(Aₜ − Fₜ). n grande ou α pequeno → previsão estável e lenta; n pequeno ou α grande → rápida, mas nervosa.",
        dificil: "Médias e suavização simples servem para séries **sem tendência nem sazonalidade**; com tendência, elas ficam **sempre atrasadas**. α é escolhido comparando o erro histórico (MAD, MSE) de vários valores. Quando há tendência, usa-se Holt ou regressão; com sazonalidade, índices sazonais ou Holt-Winters."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Quase todo o PCP começa pela previsão: quanto comprar, quantas pessoas escalar, quanto estoque manter. Previsão ruim vira **falta** (cliente perdido) ou **excesso** (dinheiro parado e produto vencido)." },
        { nivel: "facil", tipo: "conceito", titulo: "Qualitativos × quantitativos", texto: "**Qualitativos:** opinião de especialistas, equipe de vendas, **método Delphi** (rodadas anônimas até o consenso), pesquisa de mercado. Úteis para produto novo ou sem histórico.\n**Quantitativos:** usam dados.\n• **Séries temporais:** o passado da própria demanda (médias, suavização, tendência, sazonalidade).\n• **Causais:** relacionam a demanda a outra variável (preço, temperatura, renda), por exemplo com regressão." },
        { nivel: "facil", tipo: "conceito", titulo: "Padrões de uma série", texto: "**Nível** (média), **tendência** (sobe ou desce), **sazonalidade** (padrão que se repete: mês, dia da semana), **ciclo** (ondas longas da economia) e **aleatoriedade** (o que não se explica)." },
        { nivel: "facil", tipo: "formula", titulo: "Média móvel simples (MMS)", texto: "Fₜ₊₁ = (Aₜ + Aₜ₋₁ + … + Aₜ₋ₙ₊₁) ÷ n", legenda: [["F", "Previsão (forecast)"], ["A", "Demanda real (actual)"], ["n", "Número de períodos na média"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Média móvel de 3 meses", texto: "Demanda de caixas de bombom (mil): jan 40 · fev 44 · mar 42 · abr 46 · mai 48 · jun 50.\nPrevisão para julho (n = 3): (46 + 48 + 50) ÷ 3 = **48 mil caixas**.\nPara agosto, a janela “anda”: sai abril, entra julho." },
        { nivel: "facil", tipo: "bobo", titulo: "Quanto pão comprar?", texto: "Você compra pão para a casa olhando as últimas 3 semanas: 10, 12 e 11 pães. Média = 11. Isso é média móvel. Se chega visita, a média não sabe: é aí que entra a opinião (método qualitativo) ou uma variável causal." },
        { nivel: "facil", tipo: "atencao", titulo: "Toda previsão erra", texto: "A pergunta não é “a previsão está certa?”, mas **“quanto ela erra e para que lado?”**. Por isso toda previsão deve vir com a medida do erro (próxima lição) e ser revisada periodicamente." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Média móvel anda, média ponderada escolhe, exponencial corrige.”**" },

        { nivel: "medio", tipo: "formula", titulo: "Média móvel ponderada", texto: "Fₜ₊₁ = Σ wᵢ · Aᵢ   com Σ wᵢ = 1", legenda: [["wᵢ", "Peso do período i (maior para os recentes)"], ["Aᵢ", "Demanda do período i"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Ponderada 0,5 / 0,3 / 0,2", texto: "Com jun = 50, mai = 48, abr = 46 e pesos 0,5 (mais recente), 0,3 e 0,2:\nF(jul) = 0,5 × 50 + 0,3 × 48 + 0,2 × 46 = 25 + 14,4 + 9,2 = **48,6 mil**.\nMais próxima da tendência de alta do que a média simples (48)." },
        { nivel: "medio", tipo: "formula", titulo: "Suavização exponencial simples", texto: "Fₜ₊₁ = Fₜ + α · (Aₜ − Fₜ)   ou   Fₜ₊₁ = α · Aₜ + (1 − α) · Fₜ", legenda: [["α", "Constante de suavização, entre 0 e 1"], ["Aₜ − Fₜ", "Erro do período"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Suavização com α = 0,3", texto: "Previsão de junho = 47; demanda real de junho = 50.\nF(jul) = 47 + 0,3 × (50 − 47) = 47 + 0,9 = **47,9 mil**.\nLeitura: a previsão “anda” 30% do erro na direção da realidade." },
        { nivel: "medio", tipo: "dica", titulo: "Efeito de n e de α", texto: "**n grande / α pequeno:** previsão suave, filtra o ruído, mas reage devagar a mudanças reais.\n**n pequeno / α grande:** reage rápido, mas “persegue” o ruído.\nValores de α entre 0,1 e 0,3 são comuns em demanda estável; o melhor valor se escolhe pelo erro histórico." },
        { nivel: "medio", tipo: "recall", pergunta: "Na suavização exponencial, se α = 1, qual será a previsão do próximo período?", resposta: "Igual à última demanda real (Fₜ₊₁ = Aₜ): é a previsão “ingênua”." },

        { nivel: "dificil", tipo: "conceito", titulo: "Por que “exponencial”?", texto: "Expandindo a fórmula: Fₜ₊₁ = αAₜ + α(1−α)Aₜ₋₁ + α(1−α)²Aₜ₋₂ + …\nOs pesos dos períodos passados caem em **progressão geométrica**: todo o histórico entra, mas o recente pesa mais. Por isso basta guardar a última previsão e a última demanda." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Médias atrasam na tendência", texto: "Se a demanda cresce 2 mil por mês, a MMS de 3 meses fica, em média, **2 períodos atrasada** em relação ao último ponto (erra cerca de 4 mil para baixo, sempre). A suavização simples também gera erro sistemático. Sinal disso: erros com o **mesmo sinal** em sequência (viés). Solução: métodos com tendência (Holt, regressão) — próxima lição." },
        { nivel: "dificil", tipo: "conceito", titulo: "Como escolher α", texto: "1. Separe o histórico em uma parte para ajuste e outra para teste.\n2. Calcule as previsões com vários α (0,1; 0,2; …; 0,9).\n3. Compare o erro (MAD, MSE ou MAPE) na parte de teste.\n4. Escolha o α de menor erro e **reavalie** periodicamente.\nSoftwares fazem isso por otimização, mas a lógica é a mesma." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• HYNDMAN, R. J.; ATHANASOPOULOS, G. *Forecasting: Principles and Practice*. OTexts (livre, online).\n• TUBINO, D. F. *Planejamento e Controle da Produção: teoria e prática*. Atlas (capítulo de previsão de demanda).\n• MAKRIDAKIS, S.; WHEELWRIGHT, S. C.; HYNDMAN, R. J. *Forecasting: Methods and Applications*. Wiley." }
      ],
      questoes: [
        { id: "m03-q020", nivel: "facil", tipo: "multipla", pergunta: "Um produto totalmente novo, sem histórico de vendas, precisa de previsão. Qual abordagem é mais indicada no início?",
          opcoes: ["Média móvel de 12 meses", "Métodos qualitativos (especialistas, Delphi, pesquisa de mercado)", "Suavização exponencial com α = 0,9", "Nenhuma: não se prevê produto novo"], correta: 1,
          explicacao: "Sem dados, a opinião estruturada é o ponto de partida; os dados reais entram depois." },
        { id: "m03-q021", nivel: "facil", tipo: "calculo", pergunta: "Demanda dos últimos 3 meses: 120, 130 e 140 unidades. Qual a previsão pela média móvel de 3 meses?",
          resposta: 130, tolerancia: 0, unidade: "unidades",
          resolucao: "(120 + 130 + 140) ÷ 3 = 390 ÷ 3 = 130",
          explicacao: "Repare: com demanda subindo, a média fica abaixo do último valor." },
        { id: "m03-q022", nivel: "facil", tipo: "ligar", pergunta: "Ligue o padrão da série à descrição:",
          pares: [["Tendência", "A demanda sobe ou desce ao longo do tempo"], ["Sazonalidade", "Padrão que se repete a cada ano, mês ou semana"], ["Aleatoriedade", "Variação que não se consegue explicar"], ["Nível", "Valor médio em torno do qual a série oscila"]],
          explicacao: "Identificar o padrão é o primeiro passo para escolher o método." },
        { id: "m03-q023", nivel: "facil", tipo: "vf", pergunta: "Uma boa previsão de demanda não tem erro.",
          correta: false, explicacao: "Toda previsão erra; o objetivo é errar pouco e sem viés, e medir esse erro." },
        { id: "m03-q024", nivel: "facil", tipo: "lacuna", pergunta: "No método ___, especialistas respondem em rodadas anônimas até chegar a um consenso.",
          opcoes: ["Delphi", "MRP", "Johnson", "PEPS"], correta: 0,
          explicacao: "O anonimato reduz a influência de quem fala mais alto." },
        { id: "m03-q025", nivel: "medio", tipo: "calculo", pergunta: "Demandas: abr 46, mai 48, jun 50. Pesos 0,2 (abr), 0,3 (mai) e 0,5 (jun). Qual a previsão ponderada para julho?",
          resposta: 48.6, tolerancia: 0.01, unidade: "mil caixas",
          resolucao: "0,2 × 46 + 0,3 × 48 + 0,5 × 50 = 9,2 + 14,4 + 25 = 48,6",
          explicacao: "Os pesos devem somar 1." },
        { id: "m03-q026", nivel: "medio", tipo: "calculo", pergunta: "Previsão de maio = 200; demanda real de maio = 220; α = 0,2. Qual a previsão de junho pela suavização exponencial?",
          resposta: 204, tolerancia: 0, unidade: "unidades",
          resolucao: "F = 200 + 0,2 × (220 − 200) = 200 + 4 = 204",
          explicacao: "A previsão corrige 20% do erro." },
        { id: "m03-q027", nivel: "medio", tipo: "multipla", pergunta: "A demanda mudou de patamar de forma definitiva (nova rede de clientes). Qual ajuste faz a suavização reagir mais rápido?",
          opcoes: ["Diminuir α", "Aumentar α", "Aumentar o número de períodos da média", "Usar pesos iguais"], correta: 1,
          explicacao: "α maior dá mais peso ao dado recente." },
        { id: "m03-q028", nivel: "medio", tipo: "vf", pergunta: "Na média móvel ponderada, os pesos devem somar 1.",
          correta: true, explicacao: "Senão a previsão fica sistematicamente inflada ou reduzida." },
        { id: "m03-q029", nivel: "medio", tipo: "caso", contexto: "A demanda de embalagens varia bastante de semana para semana, mas sem mudança de patamar. A previsão atual usa α = 0,8 e muda muito a cada semana.",
          pergunta: "O que fazer?",
          opcoes: ["Aumentar α para 0,95", "Reduzir α (ex.: 0,1 a 0,3) e comparar o erro histórico", "Parar de prever", "Usar só a demanda da última semana"], correta: 1,
          explicacao: "Com ruído alto e nível estável, α menor filtra a variação; confirme pelo erro." },
        { id: "m03-q030", nivel: "dificil", tipo: "multipla", pergunta: "A demanda cresce de forma constante e a previsão por média móvel erra sempre para baixo. O que isso indica?",
          opcoes: ["Erro aleatório normal", "Viés causado pela tendência: a média atrasa; usar método com tendência (Holt ou regressão)", "Que α está baixo demais", "Que a demanda é sazonal"], correta: 1,
          explicacao: "Erros com o mesmo sinal em sequência indicam viés." },
        { id: "m03-q031", nivel: "dificil", tipo: "vf", pergunta: "Na suavização exponencial simples, todos os dados passados influenciam a previsão, com pesos que diminuem geometricamente.",
          correta: true, explicacao: "Pesos α, α(1−α), α(1−α)², …" },
        { id: "m03-q032", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene o procedimento para escolher α:",
          itens: ["Separar histórico em ajuste e teste", "Gerar previsões com vários valores de α", "Calcular o erro de cada α no teste", "Escolher o α de menor erro", "Reavaliar periodicamente"],
          explicacao: "A escolha é empírica, pelo desempenho fora da amostra de ajuste." },
        { id: "m03-q033", nivel: "dificil", tipo: "discursiva", pergunta: "O gerente quer usar a média móvel de 12 meses para prever a venda mensal de panetones. Avalie a proposta.",
          respostaModelo: "Panetone tem **sazonalidade forte** (pico no fim do ano). A MMS de 12 meses produz praticamente o **mesmo valor em todos os meses** (a média anual), prevendo demais de janeiro a setembro e de menos em novembro e dezembro. Melhor: usar **índices sazonais** (ou Holt-Winters) sobre uma base de nível/tendência, combinar com informação qualitativa (pedidos do varejo, campanhas) e medir o erro por mês.",
          criterios: ["Identifica a sazonalidade", "Explica o efeito da média de 12 meses (achata o pico)", "Propõe índice sazonal ou método sazonal", "Menciona medir o erro ou combinar com informação qualitativa"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 3 — PREVISÃO II: TENDÊNCIA, SAZONALIDADE E ERRO
       ================================================================== */
    {
      id: "m03-l3",
      titulo: "Previsão de demanda II: tendência, sazonalidade e erro",
      icone: "📉",
      objetivos: {
        facil: ["Calcular o erro de previsão de um período", "Calcular o MAD", "Reconhecer um índice sazonal"],
        medio: ["Calcular MAPE e MSE e interpretar cada um", "Projetar a demanda por regressão linear", "Aplicar índices sazonais a uma previsão"],
        dificil: ["Usar o sinal de rastreamento para detectar viés", "Comparar métodos pelo erro e escolher o mais adequado", "Reconhecer os limites da decomposição simples e dos métodos causais"]
      },
      prerequisitos: [
        { texto: "Previsão I", licao: "m03-l2" },
        { texto: "Correlação e regressão (Módulo 13)", licao: "m13-l11" }
      ],
      resumo: {
        facil: "Erro = **real − previsto**. O **MAD** é a média dos erros em valor absoluto. Um **índice sazonal** de 1,2 significa 20% acima da média; 0,8, 20% abaixo.",
        medio: "**MAPE** = média de |erro| ÷ real, em %: compara produtos de volumes diferentes. **MSE** = média dos erros ao quadrado: pune erros grandes. **Regressão:** y = a + b·x, com b = (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²) e a = ȳ − b·x̄. **Sazonal:** previsão = base × índice.",
        dificil: "**Sinal de rastreamento** = soma dos erros ÷ MAD; saindo de uma faixa (em geral ±4), há viés e o modelo deve ser revisto. Métodos se comparam pelo erro **fora da amostra**. A decomposição simples por médias ignora a tendência dentro do cálculo dos índices; a decomposição clássica usa médias móveis centradas. Modelos causais exigem prever também a variável explicativa."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Um método de previsão só é bom se **erra pouco e não erra sempre para o mesmo lado**. Medir o erro permite escolher o método, dimensionar o estoque de segurança (Módulo 7) e saber quando o modelo parou de funcionar." },
        { nivel: "facil", tipo: "formula", titulo: "Erro e MAD", texto: "eₜ = Aₜ − Fₜ\nMAD = Σ |eₜ| ÷ n", legenda: [["eₜ", "Erro do período t"], ["MAD", "Desvio absoluto médio (mean absolute deviation)"], ["n", "Número de períodos"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Calculando o MAD", texto: "Real: 100 · 110 · 90 · 120\nPrevisto: 105 · 100 · 100 · 110\nErros: −5 · +10 · −10 · +10\nMAD = (5 + 10 + 10 + 10) ÷ 4 = 35 ÷ 4 = **8,75 unidades**." },
        { nivel: "facil", tipo: "conceito", titulo: "Índice sazonal", texto: "Mostra quanto um período costuma ficar **acima ou abaixo da média**.\n• Índice 1,2 → 20% acima da média.\n• Índice 0,8 → 20% abaixo.\nA média dos índices de um ciclo completo é 1 (ex.: 4 trimestres somam 4)." },
        { nivel: "facil", tipo: "bobo", titulo: "Sorvete e guarda-chuva", texto: "A sorveteria vende mais no verão todo ano (sazonalidade) e, com o bairro crescendo, vende um pouco mais a cada ano (tendência). Prever só pela média do ano faria faltar sorvete em janeiro e sobrar em julho." },
        { nivel: "facil", tipo: "atencao", titulo: "Erro positivo × negativo", texto: "Pela convenção eₜ = real − previsto: erro **positivo** = vendeu mais do que o previsto (**previsão baixa**, risco de falta). Erro **negativo** = previsão alta (risco de sobra). Alguns livros usam o sinal contrário: confira a convenção." },

        { nivel: "medio", tipo: "formula", titulo: "MAPE e MSE", texto: "MAPE = (Σ |eₜ| ÷ Aₜ) ÷ n × 100%\nMSE = Σ eₜ² ÷ n", legenda: [["MAPE", "Erro percentual absoluto médio"], ["MSE", "Erro quadrático médio"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "MAPE e MSE do exemplo", texto: "|e|/A: 5/100 = 5,0% · 10/110 = 9,09% · 10/90 = 11,11% · 10/120 = 8,33%\nMAPE = 33,53% ÷ 4 ≈ **8,38%**\nMSE = (25 + 100 + 100 + 100) ÷ 4 = **81,25**" },
        { nivel: "medio", tipo: "dica", titulo: "Qual medida usar?", texto: "**MAD:** fácil de explicar, na unidade do produto.\n**MAPE:** em %, compara itens de volumes diferentes; distorce quando a demanda real é próxima de zero.\n**MSE:** pune muito os erros grandes; útil quando um erro grande é muito caro." },
        { nivel: "medio", tipo: "formula", titulo: "Regressão linear para tendência", texto: "F = a + b · x\nb = (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)\na = ȳ − b · x̄", legenda: [["x", "Período (1, 2, 3…)"], ["b", "Inclinação: quanto a demanda cresce por período"], ["a", "Intercepto"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Tendência de 5 meses", texto: "x: 1 · 2 · 3 · 4 · 5 | y: 20 · 24 · 27 · 30 · 34 (mil caixas)\nΣx = 15 · Σy = 135 · Σxy = 439 · Σx² = 55\nb = (5 × 439 − 15 × 135) ÷ (5 × 55 − 15²) = (2.195 − 2.025) ÷ 50 = **3,4**\na = 27 − 3,4 × 3 = **16,8**\nPrevisão para x = 6: 16,8 + 3,4 × 6 = **37,2 mil caixas**." },
        { nivel: "medio", tipo: "exemplo", titulo: "Índices sazonais trimestrais", texto: "Médias por trimestre (2 anos): T1 84 · T2 126 · T3 105 · T4 105. Média geral = 105.\nÍndices: T1 = 84/105 = **0,8** · T2 = **1,2** · T3 = **1,0** · T4 = **1,0**.\nSe a previsão anual for 480 (base trimestral = 120): T2 = 120 × 1,2 = **144**." },
        { nivel: "medio", tipo: "conexao", titulo: "Conexão", texto: "A regressão é a mesma do **Módulo 13** (lição de correlação e regressão). Lá ela explicava uma variável por outra; aqui a variável explicativa é o **tempo**. O desvio dos erros de previsão alimenta o **estoque de segurança** do Módulo 7." },

        { nivel: "dificil", tipo: "formula", titulo: "Sinal de rastreamento (tracking signal)", texto: "TS = Σ eₜ ÷ MAD", legenda: [["Σ eₜ", "Soma dos erros com sinal (RSFE)"], ["MAD", "Desvio absoluto médio"]] },
        { nivel: "dificil", tipo: "conceito", titulo: "Lendo o sinal de rastreamento", texto: "Se os erros se compensam, a soma fica perto de zero e o TS também. Se a previsão erra sempre para o mesmo lado, a soma cresce e o TS sai da faixa de controle — são comuns limites de **±4 MAD** (alguns autores usam de ±3 a ±8, conforme o custo de reagir).\nNo exemplo: Σe = −5 + 10 − 10 + 10 = 5; TS = 5 ÷ 8,75 ≈ **0,57** → sem viés relevante." },
        { nivel: "dificil", tipo: "conceito", titulo: "Holt e Holt-Winters", texto: "**Holt:** suavização exponencial com duas equações, uma para o **nível** (α) e outra para a **tendência** (β). Previsão k períodos à frente = nível + k × tendência.\n**Holt-Winters:** acrescenta uma terceira equação para a **sazonalidade** (γ), em versão aditiva ou multiplicativa." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Cuidados", texto: "• Índices calculados por médias simples misturam tendência e sazonalidade; a **decomposição clássica** remove a tendência com médias móveis centradas antes de calcular os índices.\n• Regressão extrapolada para longe dos dados supõe que a tendência continua para sempre.\n• Modelo **causal** (ex.: vendas × temperatura) só ajuda se a variável explicativa puder ser prevista ou for conhecida antes.\n• Compare métodos pelo erro em dados **não usados no ajuste**; senão, o mais complexo sempre parece melhor." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: promoção que enganou o modelo", texto: "Uma promoção em março dobrou as vendas. Sem marcar esse mês como atípico, o modelo passou a prever mais para abril e maio, e sobrou estoque. Boa prática: registrar **eventos** (promoção, greve, falta de produto) e tratar esses pontos antes de ajustar o modelo. Venda perdida por falta de estoque também distorce: a venda registrada fica abaixo da demanda real." }
      ],
      questoes: [
        { id: "m03-q040", nivel: "facil", tipo: "calculo", pergunta: "Previsão = 500 unidades; demanda real = 460. Qual o erro (real − previsto)?",
          resposta: -40, tolerancia: 0, unidade: "unidades",
          resolucao: "e = 460 − 500 = −40",
          explicacao: "Erro negativo: a previsão ficou alta (sobrou produto)." },
        { id: "m03-q041", nivel: "facil", tipo: "calculo", pergunta: "Erros de 4 meses: +6, −4, +2, −8. Qual o MAD?",
          resposta: 5, tolerancia: 0, unidade: "unidades",
          resolucao: "MAD = (6 + 4 + 2 + 8) ÷ 4 = 20 ÷ 4 = 5",
          explicacao: "No MAD, os erros entram em valor absoluto." },
        { id: "m03-q042", nivel: "facil", tipo: "multipla", pergunta: "O índice sazonal de dezembro é 1,5. O que isso significa?",
          opcoes: ["Dezembro vende 1,5 unidade", "Dezembro costuma vender 50% acima da média", "Dezembro vende 15% abaixo", "A tendência é de 1,5 por mês"], correta: 1,
          explicacao: "Índice > 1: acima da média; < 1: abaixo." },
        { id: "m03-q043", nivel: "facil", tipo: "vf", pergunta: "Pela convenção erro = real − previsto, um erro positivo indica que a previsão ficou abaixo da demanda.",
          correta: true, explicacao: "Vendeu mais do que o previsto: risco de falta." },
        { id: "m03-q044", nivel: "medio", tipo: "calculo", pergunta: "Real: 100 e 80. Previsto: 90 e 88. Qual o MAPE (%)?",
          resposta: 10, tolerancia: 0.01, unidade: "%",
          resolucao: "|10|/100 = 10% · |−8|/80 = 10%\nMAPE = (10% + 10%) ÷ 2 = 10%",
          explicacao: "O MAPE divide cada erro pela demanda real do período." },
        { id: "m03-q045", nivel: "medio", tipo: "calculo", pergunta: "Regressão da demanda: F = 16,8 + 3,4x. Qual a previsão para o período 8?",
          resposta: 44, tolerancia: 0.01, unidade: "mil caixas",
          resolucao: "F = 16,8 + 3,4 × 8 = 16,8 + 27,2 = 44",
          explicacao: "Cuidado ao extrapolar muito além dos dados." },
        { id: "m03-q046", nivel: "medio", tipo: "calculo", pergunta: "Base trimestral prevista = 120; índice sazonal do trimestre = 0,8. Qual a previsão do trimestre?",
          resposta: 96, tolerancia: 0, unidade: "unidades",
          resolucao: "120 × 0,8 = 96",
          explicacao: "Modelo multiplicativo: base × índice." },
        { id: "m03-q047", nivel: "medio", tipo: "multipla", pergunta: "Você precisa comparar a acurácia da previsão de um item que vende 50 unidades/mês com outro que vende 50 mil. Qual medida é mais adequada?",
          opcoes: ["MAD", "MSE", "MAPE", "Soma dos erros"], correta: 2,
          explicacao: "O MAPE é relativo (em %), então compara itens de escalas diferentes." },
        { id: "m03-q048", nivel: "medio", tipo: "vf", pergunta: "O MSE pune erros grandes mais do que o MAD, porque eleva os erros ao quadrado.",
          correta: true, explicacao: "Um erro de 10 vale 100 no MSE; dois erros de 5 valem 50." },
        { id: "m03-q049", nivel: "dificil", tipo: "calculo", pergunta: "Soma dos erros (com sinal) nos últimos 6 meses = 36; MAD = 6. Qual o sinal de rastreamento?",
          resposta: 6, tolerancia: 0, unidade: "",
          resolucao: "TS = 36 ÷ 6 = 6",
          explicacao: "Fora de ±4: a previsão está sistematicamente baixa; revise o modelo." },
        { id: "m03-q050", nivel: "dificil", tipo: "caso", contexto: "O sinal de rastreamento de um item passou de +1 para +5,5 em quatro meses. O MAD não mudou muito.",
          pergunta: "Qual a interpretação e a ação?",
          opcoes: ["Tudo normal: o MAD está estável", "Viés: a previsão está sistematicamente abaixo da demanda; investigar mudança de patamar ou tendência e ajustar o modelo", "A previsão está alta demais; reduzir a produção", "Erro aleatório; ignorar"], correta: 1,
          justificativas: ["O MAD mede o tamanho do erro, não a direção.", "Soma positiva crescente = real sempre acima do previsto.", "TS positivo (convenção real − previsto) indica previsão baixa, não alta.", "O acúmulo de erros de mesmo sinal não é aleatório."],
          explicacao: "O TS é o “alarme” de viés." },
        { id: "m03-q051", nivel: "dificil", tipo: "vf", pergunta: "Para escolher entre dois métodos, deve-se comparar o erro nos mesmos dados usados para ajustar os modelos.",
          correta: false, explicacao: "Compare em dados não usados no ajuste; senão, o modelo mais complexo sempre parece melhor." },
        { id: "m03-q052", nivel: "dificil", tipo: "multipla", pergunta: "Qual método de suavização trata nível, tendência e sazonalidade?",
          opcoes: ["Média móvel simples", "Suavização exponencial simples", "Holt", "Holt-Winters"], correta: 3,
          explicacao: "Holt trata nível e tendência; Holt-Winters acrescenta sazonalidade." },
        { id: "m03-q053", nivel: "dificil", tipo: "discursiva", pergunta: "Em março houve uma promoção e, em abril, faltou produto por 2 semanas. Como tratar esses dados antes de ajustar o modelo de previsão?",
          respostaModelo: "Março: marcar como **evento atípico** (promoção) e substituir ou ajustar o valor (ex.: média dos meses vizinhos ajustada), ou modelar o efeito da promoção como variável causal. Abril: a venda registrada é **menor que a demanda real** (venda perdida); estimar a demanda perdida (ex.: pela taxa de venda nas semanas com estoque) antes de usar o dado. Registrar os eventos num calendário para uso futuro.",
          criterios: ["Trata a promoção como atípica ou como variável", "Reconhece que a falta de estoque subestima a demanda", "Propõe ajuste/estimativa dos valores", "Menciona registro de eventos"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 4 — PLANEJAMENTO AGREGADO E PMP
       ================================================================== */
    {
      id: "m03-l4",
      titulo: "Planejamento agregado e plano mestre (PMP)",
      icone: "📋",
      objetivos: {
        facil: ["Explicar o que é o planejamento agregado", "Diferenciar estratégia de acompanhamento e nivelada", "Explicar o que o PMP/MPS define"],
        medio: ["Calcular o estoque de um plano nivelado", "Montar o estoque projetado de um PMP", "Calcular a quantidade disponível para promessa (ATP)"],
        dificil: ["Comparar planos agregados pelo custo total", "Considerar restrições trabalhistas e de capacidade nas alternativas", "Explicar as zonas de congelamento do PMP"]
      },
      prerequisitos: [
        { texto: "Hierarquia do planejamento", licao: "m03-l1" },
        { texto: "Previsão de demanda", licao: "m03-l3" }
      ],
      resumo: {
        facil: "O **planejamento agregado** define, por família e por mês, quanto produzir, com quantas pessoas e quanto estoque. **Acompanhar (chase)**: produção segue a demanda. **Nivelar (level)**: produção constante e o estoque absorve a diferença. O **PMP/MPS** diz **quanto de cada produto final** produzir em cada semana.",
        medio: "Plano nivelado: produção = demanda total ÷ períodos; estoque final = estoque inicial + produção − demanda. No PMP: estoque projetado = anterior + PMP − max(previsão, pedidos). **ATP** = quanto do estoque ou lote ainda pode ser prometido a novos pedidos.",
        dificil: "Compare planos pelo **custo total**: contratação, demissão, hora extra, ociosidade, estoque, falta e subcontratação. No Brasil, contratar e demitir tem custos trabalhistas relevantes; banco de horas e férias coletivas são alternativas. O PMP usa **zonas**: congelada (não se muda), semicongelada (muda com aprovação) e livre."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "A demanda de bombons triplica antes da Páscoa e do Natal. Contratar e demitir toda vez custa caro; produzir tudo em cima da hora é impossível. O planejamento agregado decide **como atravessar os picos** com o menor custo." },
        { nivel: "facil", tipo: "conceito", titulo: "Planejamento agregado", texto: "Trabalha com **famílias de produtos** (ex.: “bombons”, não cada sabor), por **mês**, num horizonte de 6 a 18 meses. Variáveis de decisão: taxa de produção, número de pessoas, horas extras, estoque, subcontratação, atrasos." },
        { nivel: "facil", tipo: "conceito", titulo: "Duas estratégias puras", texto: "**Acompanhar a demanda (chase):** produz em cada mês o que vende. Pouco estoque, mas muda a força de trabalho ou as horas.\n**Produção nivelada (level):** produz sempre a mesma quantidade. Força de trabalho estável; o **estoque** acumula nos meses fracos e é consumido nos fortes.\n**Mista:** combina as duas (o mais comum na prática)." },
        { nivel: "facil", tipo: "bobo", titulo: "A marmita da semana", texto: "**Acompanhar:** cozinhar todo dia só o almoço do dia. **Nivelar:** cozinhar no domingo e congelar as marmitas da semana. Nivelar economiza esforço, mas precisa de freezer (estoque) e a comida pode enjoar (obsolescência)." },
        { nivel: "facil", tipo: "conceito", titulo: "PMP / MPS", texto: "**Plano Mestre de Produção (Master Production Schedule):** quanto de **cada produto final** (ex.: caixa de bombom sortida 250 g) será produzido **em cada semana**. É a “ponte” entre o plano agregado e o MRP." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Agregado agrupa, Mestre detalha.”** Agregado: família × mês. Mestre: produto × semana." },

        { nivel: "medio", tipo: "exemplo", titulo: "Plano nivelado", texto: "Demanda (caixas): mês 1 = 800 · mês 2 = 1.000 · mês 3 = 1.200 · mês 4 = 1.000. Total = 4.000. Estoque inicial = 0.\nProdução nivelada = 4.000 ÷ 4 = **1.000/mês**.\nEstoque final: m1 = 0 + 1.000 − 800 = 200 · m2 = 200 · m3 = 200 + 1.000 − 1.200 = 0 · m4 = 0.\nSoma dos estoques finais = 400 caixas·mês. A R$ 2,00 por caixa·mês → **R$ 800** de custo de estoque." },
        { nivel: "medio", tipo: "formula", titulo: "Estoque projetado no PMP", texto: "Eₜ = Eₜ₋₁ + PMPₜ − max(Previsãoₜ, Pedidosₜ)", legenda: [["Eₜ", "Estoque projetado ao fim do período t"], ["PMPₜ", "Quantidade no plano mestre em t"], ["Pedidosₜ", "Pedidos firmes de clientes em t"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "PMP com lote de 100", texto: "Estoque inicial = 50. Previsão = 40 por semana. Pedidos firmes: s1 45 · s2 30 · s3 20 · s4 10 · s5 0 · s6 0. Lote do PMP = 100.\ns1: 50 − 45 = 5 · s2: 5 − 40 < 0 → **PMP 100** → 65 · s3: 25 · s4: 25 − 40 < 0 → **PMP 100** → 85 · s5: 45 · s6: 5." },
        { nivel: "medio", tipo: "conceito", titulo: "ATP — disponível para promessa", texto: "Quanto ainda pode ser **prometido** a novos pedidos sem mexer no plano.\n• 1º período: estoque inicial + PMP − pedidos até o próximo PMP.\n• Períodos com PMP: PMP − pedidos até o próximo PMP.\nNo exemplo: ATP s1 = 50 − 45 = **5** · ATP s2 = 100 − (30 + 20) = **50** · ATP s4 = 100 − (10 + 0 + 0) = **90**." },
        { nivel: "medio", tipo: "atencao", titulo: "Previsão × pedidos", texto: "No curto prazo, os **pedidos firmes** costumam superar a previsão (clientes já pediram); mais à frente, vale a previsão. Por isso se usa o **maior** dos dois no estoque projetado, e só os **pedidos** no ATP." },

        { nivel: "dificil", tipo: "conceito", titulo: "Custos do planejamento agregado", texto: "• **Contratar:** recrutamento, treinamento, curva de aprendizagem.\n• **Demitir:** verbas rescisórias, perda de conhecimento, clima.\n• **Hora extra:** adicional mínimo de 50% (Constituição, art. 7º, XVI), fadiga.\n• **Ociosidade:** pessoas pagas sem produzir.\n• **Estoque:** capital parado, armazenagem, perdas.\n• **Falta/atraso:** venda perdida, multa, imagem.\n• **Subcontratação:** custo unitário maior, risco de qualidade." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Comparando planos (ilustrativo)", texto: "Mesma demanda do exemplo nivelado, capacidade normal de 1.000/mês.\n**Nivelado:** estoque 400 caixas·mês × R$ 2 = **R$ 800**.\n**Acompanhar com hora extra e ociosidade:** m1 produz 800 (200 de ociosidade × R$ 1,50 = R$ 300); m3 produz 1.200 (200 em hora extra × R$ 3 = R$ 600) → **R$ 900**.\nAqui o nivelado ganha; se o estoque fosse perecível ou caro, a conclusão poderia mudar." },
        { nivel: "dificil", tipo: "conceito", titulo: "Alternativas no Brasil", texto: "**Banco de horas** (CLT, art. 59): compensa horas extras de um período com folgas em outro, conforme acordo ou convenção coletiva.\n**Férias coletivas** nos meses fracos.\n**Contrato temporário** (Lei 6.019/1974) para picos.\nCada alternativa tem regras e limites legais; o plano precisa passar pelo RH e, quando for o caso, pelo sindicato." },
        { nivel: "dificil", tipo: "conceito", titulo: "Zonas de congelamento do PMP", texto: "**Congelada** (ex.: próximas 2 semanas): materiais comprados, sequência pronta; mudar custa caro.\n**Semicongelada** (ex.: semanas 3 a 6): muda com aprovação e análise de impacto.\n**Livre:** o plano ainda pode ser ajustado à vontade.\nOs limites dependem do lead time acumulado do produto." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limitações", texto: "Modelos de planejamento agregado (inclusive por programação linear, Módulo 9) dependem de custos difíceis de estimar, como o custo de falta. Resultados devem ser lidos como **apoio à decisão**, com análise de sensibilidade, e não como resposta única." }
      ],
      questoes: [
        { id: "m03-q060", nivel: "facil", tipo: "ligar", pergunta: "Ligue a estratégia à característica:",
          pares: [["Acompanhar a demanda", "Produção varia mês a mês; pouco estoque"], ["Produção nivelada", "Produção constante; estoque absorve a variação"], ["Mista", "Combina variação de produção e estoque"]],
          explicacao: "Na prática, a estratégia mista é a mais comum." },
        { id: "m03-q061", nivel: "facil", tipo: "multipla", pergunta: "O que o PMP (plano mestre) define?",
          opcoes: ["Quanto de cada produto final produzir em cada semana", "O salário de cada operador", "A sequência das ordens numa máquina", "O preço de venda de cada produto"], correta: 0,
          explicacao: "Produto final × período (geralmente semana)." },
        { id: "m03-q062", nivel: "facil", tipo: "vf", pergunta: "O planejamento agregado trabalha com famílias de produtos, e não com cada item.",
          correta: true, explicacao: "Agregar reduz o erro de previsão e simplifica a decisão." },
        { id: "m03-q063", nivel: "facil", tipo: "lacuna", pergunta: "Na estratégia ___, a produção é constante e o estoque absorve os picos.",
          opcoes: ["nivelada", "de acompanhamento", "Johnson", "PEPS"], correta: 0,
          explicacao: "Level: força de trabalho estável, estoque variável." },
        { id: "m03-q064", nivel: "medio", tipo: "calculo", pergunta: "Demanda: 600, 900, 1.200 e 900 unidades (4 meses). Estoque inicial = 0. Qual a produção mensal no plano nivelado?",
          resposta: 900, tolerancia: 0, unidade: "unidades/mês",
          resolucao: "(600 + 900 + 1.200 + 900) ÷ 4 = 3.600 ÷ 4 = 900",
          explicacao: "Confira se o estoque nunca fica negativo: m1 = 300, m2 = 300, m3 = 0, m4 = 0 ✓" },
        { id: "m03-q065", nivel: "medio", tipo: "calculo", pergunta: "Estoque inicial = 50; PMP da semana = 0; previsão = 40; pedidos firmes = 45. Qual o estoque projetado ao fim da semana?",
          resposta: 5, tolerancia: 0, unidade: "unidades",
          resolucao: "E = 50 + 0 − max(40, 45) = 5",
          explicacao: "Usa-se o maior entre previsão e pedidos." },
        { id: "m03-q066", nivel: "medio", tipo: "calculo", pergunta: "PMP de 100 unidades na semana 2; pedidos firmes: semana 2 = 30, semana 3 = 20; o próximo PMP é na semana 4. Qual o ATP da semana 2?",
          resposta: 50, tolerancia: 0, unidade: "unidades",
          resolucao: "ATP = 100 − (30 + 20) = 50",
          explicacao: "Soma dos pedidos até o período anterior ao próximo PMP." },
        { id: "m03-q067", nivel: "medio", tipo: "caso", contexto: "Um cliente liga pedindo 70 caixas para a semana 3. O ATP da semana 2 é 50 e o da semana 4 é 90.",
          pergunta: "Qual a melhor resposta do vendedor?",
          opcoes: ["Prometer as 70 na semana 3", "Prometer 50 na semana 3 e 20 na semana 4 (ou as 70 na semana 4), sem mexer no plano", "Recusar o pedido", "Prometer e pedir hora extra à fábrica sem consultar"], correta: 1,
          explicacao: "O ATP mostra o que pode ser prometido sem desmontar o plano." },
        { id: "m03-q068", nivel: "medio", tipo: "vf", pergunta: "No ATP, usa-se a previsão de demanda para calcular quanto ainda pode ser prometido.",
          correta: false, explicacao: "O ATP desconta só os pedidos firmes (já prometidos)." },
        { id: "m03-q069", nivel: "dificil", tipo: "calculo", pergunta: "Plano nivelado gera estoques finais de 300, 300, 0 e 0 unidades em 4 meses. Custo de estoque = R$ 3 por unidade·mês. Qual o custo de estoque do plano (R$)?",
          resposta: 1800, tolerancia: 0, unidade: "R$",
          resolucao: "(300 + 300 + 0 + 0) × 3 = R$ 1.800",
          explicacao: "Convenção simples: custo sobre o estoque final de cada mês." },
        { id: "m03-q070", nivel: "dificil", tipo: "caso", contexto: "A demanda de bombons tem pico na Páscoa. O produto tem validade de 4 meses e a fábrica tem pouca câmara fria.",
          pergunta: "Qual estratégia agregada tende a ser mais adequada?",
          opcoes: ["Nivelada pura, produzindo o ano todo para estoque", "Mista: antecipar parte da produção dentro da validade e da câmara disponível, e cobrir o resto com hora extra, banco de horas ou temporários", "Acompanhar pura, contratando e demitindo todo mês", "Subcontratar 100% do pico sem avaliar qualidade"], correta: 1,
          justificativas: ["Estoque de meses viraria perda por validade e falta de espaço.", "Respeita validade e espaço e distribui o pico entre alternativas.", "Custos trabalhistas e de aprendizagem altos.", "Risco de qualidade e custo maior sem análise."],
          explicacao: "Restrições do produto mudam a melhor estratégia." },
        { id: "m03-q071", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene as zonas do PMP da mais próxima à mais distante no tempo:",
          itens: ["Congelada", "Semicongelada", "Livre"],
          explicacao: "Quanto mais perto, mais caro mudar." },
        { id: "m03-q072", nivel: "dificil", tipo: "discursiva", pergunta: "Compare as estratégias de acompanhar a demanda e de produção nivelada para uma fábrica de bombons com pico de Natal, citando pelo menos três custos envolvidos.",
          respostaModelo: "**Acompanhar:** pouco estoque (bom para produto perecível), mas exige contratar/demitir, hora extra ou ociosidade; custos de recrutamento, treinamento, rescisão e adicional de hora extra (mín. 50%); risco de qualidade com gente nova. **Nivelar:** força de trabalho estável e aprendida, mas estoque alto antes do pico; custo de capital, armazenagem refrigerada e risco de vencimento. Solução provável: **mista**, com antecipação limitada pela validade, banco de horas e temporários. Decidir pelo custo total e pelas restrições.",
          criterios: ["Descreve as duas estratégias", "Cita pelo menos três custos", "Considera a perecibilidade", "Chega a uma recomendação justificada"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 5 — MRP
       ================================================================== */
    {
      id: "m03-l5",
      titulo: "MRP: calculando materiais",
      icone: "🧮",
      objetivos: {
        facil: ["Explicar o que é a lista de materiais (BOM)", "Diferenciar demanda independente e dependente", "Calcular a necessidade bruta de um componente"],
        medio: ["Calcular a necessidade líquida", "Recuar o lead time para definir a liberação de ordens", "Aplicar lote a lote e lote fixo"],
        dificil: ["Explicar MRP II e ERP", "Analisar o nervosismo do MRP e suas causas", "Discutir as premissas do MRP (lead time fixo, capacidade infinita)"]
      },
      prerequisitos: [{ texto: "Plano mestre (PMP)", licao: "m03-l4" }],
      resumo: {
        facil: "A **lista de materiais (BOM)** diz do que o produto é feito e em que quantidade. A demanda do produto final é **independente** (vem do mercado); a dos componentes é **dependente** (calculada). Necessidade bruta = quantidade do pai × quantidade por unidade.",
        medio: "**Necessidade líquida** = bruta − estoque disponível − recebimentos programados (+ estoque de segurança), nunca negativa. O **recebimento planejado** cobre a necessidade líquida conforme o lote; a **liberação da ordem** acontece **lead time antes**. Lote a lote: pede exatamente o necessário; lote fixo: múltiplos do lote.",
        dificil: "**MRP II** acrescenta capacidade (CRP) e custos; o **ERP** integra toda a empresa. O MRP supõe **lead time fixo e capacidade infinita**; replanejar com frequência gera **nervosismo** (ordens mudando a cada rodada). Soluções: congelamento, regras de lote estáveis, pegging e verificação de capacidade."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Uma caixa de bombom precisa de caixa de papelão, berço, bombons, fita e etiqueta. Se faltar **uma** etiqueta, a caixa não sai. O MRP calcula **o que, quanto e quando** comprar ou fabricar de cada componente para cumprir o PMP." },
        { nivel: "facil", tipo: "conceito", titulo: "Demanda independente × dependente", texto: "**Independente:** vem do mercado e precisa ser **prevista** (caixas de bombom vendidas).\n**Dependente:** decorre de outro item e pode ser **calculada** (se vou montar 200 caixas com 12 bombons, preciso de 2.400 bombons).\nOrlicky (1975) popularizou o MRP justamente por essa ideia: não se prevê o que se pode calcular." },
        { nivel: "facil", tipo: "mapa", titulo: "Lista de materiais (BOM)", texto:
"Caixa presente (nível 0)\n├─ Embalagem ×1\n│    comprada · LT 2 sem\n├─ Bombom ×12\n│    fabricado · LT 1 sem\n│    └─ Chocolate 0,01 kg\n│         comprado · LT 1 sem\n└─ Fita 0,5 m\n     comprada · LT 1 sem" },
        { nivel: "facil", tipo: "formula", titulo: "Necessidade bruta", texto: "NB(componente) = quantidade planejada do pai × quantidade por unidade", legenda: [["NB", "Necessidade bruta"], ["Pai", "Item de nível superior na BOM"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Explosão simples", texto: "PMP: 200 caixas presente.\nBombons: 200 × 12 = **2.400**. Embalagens: 200 × 1 = **200**. Fita: 200 × 0,5 = **100 m**.\nChocolate (nível 2): 2.400 bombons × 0,01 kg = **24 kg**." },
        { nivel: "facil", tipo: "bobo", titulo: "A receita de bolo", texto: "Para 3 bolos, com 4 ovos por bolo, você precisa de 12 ovos (bruta). Tem 5 na geladeira: compra 7 (líquida). E o mercado só entrega amanhã: pede **hoje** (lead time). Isso é MRP de cozinha." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Bruta, tira o que tem, tira o que vem, recua o tempo.”** Necessidade bruta → − estoque → − recebimentos programados → liberação lead time antes." },

        { nivel: "medio", tipo: "formula", titulo: "Necessidade líquida", texto: "NL = max(0; NB − Estoque disponível − Recebimentos programados + Estoque de segurança)", legenda: [["Recebimentos programados", "Ordens já emitidas, com data de chegada"], ["Estoque de segurança", "Quantidade mínima a manter"]] },
        { nivel: "medio", tipo: "conceito", titulo: "Registro do MRP (por período)", texto: "• **Necessidade bruta**\n• **Recebimentos programados** (ordens já abertas)\n• **Estoque projetado disponível**\n• **Necessidade líquida**\n• **Recebimento planejado** (ordem nova, conforme o lote)\n• **Liberação de ordem planejada** (= recebimento planejado recuado do lead time)" },
        { nivel: "medio", tipo: "exemplo", titulo: "Bombons na semana 4", texto: "A montagem das caixas leva 1 semana e o PMP pede 200 caixas na semana 5 → a ordem de montagem é liberada na semana 4 → NB de bombons na **semana 4** = 2.400.\nEstoque de bombons = 400; recebimento programado de 500 na semana 3.\nNL = 2.400 − 400 − 500 = **1.500**.\nLote a lote → recebimento planejado de 1.500 na semana 4 → **liberação na semana 3** (LT 1)." },
        { nivel: "medio", tipo: "exemplo", titulo: "Embalagem com lote fixo", texto: "NB semana 4 = 200; estoque = 50 → NL = 150.\nLote fixo de 250 → recebimento planejado = **250** (sobram 100 em estoque).\nLT 2 semanas → **liberação na semana 2**." },
        { nivel: "medio", tipo: "dica", titulo: "Regras de lote", texto: "**Lote a lote (L4L):** pede exatamente a NL; menos estoque, mais pedidos.\n**Lote fixo:** múltiplos de um tamanho (caixa do fornecedor, capacidade do tacho).\n**Período fixo:** junta a necessidade de N períodos num só pedido.\n**Lote econômico (LEC):** equilibra custo de pedir e de estocar (Módulo 7)." },
        { nivel: "medio", tipo: "atencao", titulo: "Erro comum", texto: "Esquecer de descontar o **recebimento programado** (ordem já aberta) e pedir de novo. Ou esquecer o **lead time**: a ordem sai na semana em que o material precisa chegar, e chega atrasada." },

        { nivel: "dificil", tipo: "conceito", titulo: "MRP → MRP II → ERP", texto: "**MRP (anos 1960–70):** calcula materiais a partir do PMP, BOM e estoques.\n**MRP II (Manufacturing Resource Planning):** acrescenta capacidade (RCCP, CRP), roteiros, custos e integração com finanças.\n**ERP:** sistema integrado de toda a empresa (vendas, compras, estoque, produção, finanças, RH) sobre uma base de dados única." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Premissas do MRP", texto: "• **Capacidade infinita:** o MRP não verifica se a máquina dá conta; precisa do CRP.\n• **Lead time fixo:** na realidade, o lead time depende da fila, que depende da carga.\n• **Dados exatos:** BOM, estoques e lead times errados geram planos errados (“lixo entra, lixo sai”). Acuracidade de inventário é pré-requisito." },
        { nivel: "dificil", tipo: "conceito", titulo: "Nervosismo do sistema", texto: "Pequenas mudanças no PMP ou no estoque mudam muitas ordens nos níveis inferiores, a cada rodada do MRP. Causas: lotes fixos/econômicos que “amplificam” mudanças, replanejamento frequente, dados instáveis.\nMitigações: **zona congelada**, **firmar** ordens planejadas, regras de lote mais estáveis, **pegging** (rastrear qual necessidade gerou cada ordem) e filtros de mensagens de reprogramação." },
        { nivel: "dificil", tipo: "conexao", titulo: "Conexão", texto: "O **Módulo 6 (Lean)** propõe puxar a produção por kanban nos itens de consumo regular, deixando o MRP para o planejamento de longo prazo e itens de demanda irregular. Abordagens como o **DDMRP** combinam MRP com pulmões posicionados; convém estudá-las com cuidado, pois há muita literatura comercial e menos avaliação independente." }
      ],
      questoes: [
        { id: "m03-q080", nivel: "facil", tipo: "multipla", pergunta: "Qual item tem demanda dependente?",
          opcoes: ["Caixa de bombom vendida no supermercado", "Bombom usado para montar a caixa", "Peça de reposição vendida ao consumidor", "Produto em promoção"], correta: 1,
          explicacao: "A demanda de bombons para montagem é calculada a partir do PMP das caixas." },
        { id: "m03-q081", nivel: "facil", tipo: "calculo", pergunta: "PMP = 150 caixas; cada caixa leva 12 bombons. Qual a necessidade bruta de bombons?",
          resposta: 1800, tolerancia: 0, unidade: "bombons",
          resolucao: "150 × 12 = 1.800",
          explicacao: "NB = quantidade do pai × quantidade por unidade." },
        { id: "m03-q082", nivel: "facil", tipo: "vf", pergunta: "A demanda dos componentes de um produto deve ser prevista separadamente, como a do produto final.",
          correta: false, explicacao: "Ela é dependente: calcula-se a partir do PMP e da BOM." },
        { id: "m03-q083", nivel: "facil", tipo: "lacuna", pergunta: "A lista que mostra os componentes e as quantidades de um produto é a ___.",
          opcoes: ["BOM (lista de materiais)", "EAP", "Carta de controle", "Curva ABC"], correta: 0,
          explicacao: "Bill of Materials." },
        { id: "m03-q084", nivel: "medio", tipo: "calculo", pergunta: "NB = 2.400; estoque disponível = 400; recebimento programado = 500; estoque de segurança = 0. Qual a necessidade líquida?",
          resposta: 1500, tolerancia: 0, unidade: "unidades",
          resolucao: "NL = 2.400 − 400 − 500 = 1.500",
          explicacao: "Desconte o que tem e o que já vem." },
        { id: "m03-q085", nivel: "medio", tipo: "calculo", pergunta: "NL = 150 unidades; lote fixo de 250. Quanto sobra em estoque após o recebimento e o consumo?",
          resposta: 100, tolerancia: 0, unidade: "unidades",
          resolucao: "Recebimento planejado = 250\nSobra = 250 − 150 = 100",
          explicacao: "Lote fixo gera sobras que entram no período seguinte." },
        { id: "m03-q086", nivel: "medio", tipo: "multipla", pergunta: "Um componente precisa chegar na semana 6 e tem lead time de 2 semanas. Em que semana a ordem deve ser liberada?",
          opcoes: ["Semana 4", "Semana 6", "Semana 8", "Semana 2"], correta: 0,
          explicacao: "Liberação = data de necessidade − lead time." },
        { id: "m03-q087", nivel: "medio", tipo: "ordenar", pergunta: "Ordene o cálculo do MRP para um item:",
          itens: ["Calcular a necessidade bruta", "Descontar estoque e recebimentos programados", "Aplicar a regra de lote", "Recuar o lead time e liberar a ordem", "Passar a necessidade para os componentes do nível abaixo"],
          explicacao: "O cálculo desce nível a nível da BOM." },
        { id: "m03-q088", nivel: "medio", tipo: "caso", contexto: "O MRP sugeriu comprar 500 etiquetas, mas já existe uma ordem de 500 aberta com o fornecedor, com chegada prevista para a mesma semana.",
          pergunta: "O que provavelmente aconteceu?",
          opcoes: ["O MRP está certo; é preciso comprar em dobro", "A ordem aberta não está registrada como recebimento programado no sistema", "A BOM está sem etiqueta", "O lead time é zero"], correta: 1,
          explicacao: "Sem o recebimento programado registrado, o MRP não o desconta." },
        { id: "m03-q089", nivel: "dificil", tipo: "multipla", pergunta: "Qual premissa do MRP clássico mais frequentemente causa planos impossíveis no chão de fábrica?",
          opcoes: ["BOM com vários níveis", "Capacidade infinita e lead time fixo", "Uso de lote a lote", "Uso de semanas como período"], correta: 1,
          explicacao: "O MRP não verifica a capacidade; o CRP (MRP II) faz isso." },
        { id: "m03-q090", nivel: "dificil", tipo: "vf", pergunta: "O MRP II acrescenta ao MRP a verificação de capacidade e a integração com custos e finanças.",
          correta: true, explicacao: "Manufacturing Resource Planning." },
        { id: "m03-q091", nivel: "dificil", tipo: "caso", contexto: "A cada rodada semanal do MRP, dezenas de ordens de componentes mudam de data e quantidade, e os compradores já não confiam nas sugestões.",
          pergunta: "Qual conjunto de ações mais ataca o problema?",
          opcoes: ["Rodar o MRP todos os dias", "Congelar o PMP no curto prazo, firmar ordens próximas, revisar regras de lote e melhorar a acuracidade dos dados", "Eliminar o estoque de segurança", "Voltar a planejar em planilha"], correta: 1,
          justificativas: ["Rodar mais vezes tende a aumentar o nervosismo.", "Ataca as causas típicas do nervosismo.", "Não resolve e aumenta risco de falta.", "Perde a integração e piora o controle."],
          explicacao: "Estabilidade de plano + dados confiáveis." },
        { id: "m03-q092", nivel: "dificil", tipo: "discursiva", pergunta: "A acuracidade de estoque da fábrica é de 70% (30% dos itens com saldo errado). Explique o efeito disso no MRP e proponha ações.",
          respostaModelo: "O MRP desconta o estoque do sistema: saldo maior que o real gera **falta** (a ordem não é criada); saldo menor gera **compra desnecessária**. Resultado: urgências, estoque excessivo e perda de confiança no sistema. Ações: **inventário rotativo** (contagem cíclica, priorizando itens A), causa-raiz das divergências (apontamento, baixas, perdas não registradas), disciplina de transações, endereçamento, e meta de acuracidade (ex.: acima de 95%) acompanhada como indicador.",
          criterios: ["Explica os dois efeitos (falta e excesso)", "Relaciona com perda de confiança/urgências", "Propõe inventário rotativo ou contagem cíclica", "Propõe atacar as causas das divergências"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 6 — CAPACIDADE
       ================================================================== */
    {
      id: "m03-l6",
      titulo: "Capacidade: quanto a fábrica aguenta",
      icone: "🏋️",
      objetivos: {
        facil: ["Definir capacidade", "Diferenciar capacidade projetada, efetiva e realizada", "Calcular a capacidade disponível em horas"],
        medio: ["Calcular utilização e eficiência pelas definições de capacidade", "Comparar carga e capacidade de um recurso", "Diferenciar RCCP e CRP"],
        dificil: ["Escolher ações para resolver sobrecarga ou ociosidade", "Relacionar utilização alta com filas e lead time", "Integrar capacidade, gargalo e PMP"]
      },
      prerequisitos: [
        { texto: "Eficiência e utilização (Módulo 4)", licao: "m04-l4" },
        { texto: "MRP", licao: "m03-l5" }
      ],
      resumo: {
        facil: "**Capacidade** é o máximo que um recurso produz num período. **Projetada:** o máximo teórico. **Efetiva:** descontadas as perdas planejadas (setups, manutenção, pausas). **Realizada:** o que de fato saiu. Capacidade em horas = recursos × horas por turno × turnos × dias.",
        medio: "Pelas definições de Slack: **utilização** = realizada ÷ projetada; **eficiência** = realizada ÷ efetiva. **Carga** = Σ (quantidade × tempo padrão). Carga > capacidade → sobrecarga. **RCCP:** verificação grosseira do PMP nos recursos críticos. **CRP:** verificação detalhada das ordens do MRP por centro de trabalho.",
        dificil: "Sobrecarga se resolve ajustando a **capacidade** (hora extra, turno, terceirização, recurso alternativo) ou a **carga** (antecipar, adiar, renegociar). Utilização perto de 100% em recursos com variabilidade faz **filas e lead times explodirem** (teoria das filas, Módulo 9). A capacidade do sistema é a do **gargalo** (Módulo 4)."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Um plano que não cabe na capacidade não é plano: é desejo. Verificar a capacidade evita prometer ao cliente o que a fábrica não consegue entregar e mostra, com antecedência, onde vai faltar máquina ou gente." },
        { nivel: "facil", tipo: "conceito", titulo: "Três capacidades", texto: "**Projetada (de projeto):** máximo teórico, operando sem paradas.\n**Efetiva:** projetada menos as perdas **planejadas** (setups, manutenção preventiva, pausas, reuniões).\n**Realizada (real):** o que saiu de fato, após as perdas **não planejadas** (quebras, falta de material, retrabalho)." },
        { nivel: "facil", tipo: "formula", titulo: "Capacidade em horas", texto: "Capacidade = nº de recursos × horas por turno × turnos por dia × dias", legenda: [["Recursos", "Máquinas ou pessoas equivalentes"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Setor de embalagem", texto: "3 embaladoras × 8 h × 2 turnos × 5 dias = **240 h por semana**." },
        { nivel: "facil", tipo: "bobo", titulo: "O forno de casa", texto: "Seu forno assa 2 formas por vez, 1 hora cada: em 4 horas, **8 bolos** (projetada). Mas você precisa pré-aquecer e lavar as formas (perdas planejadas): **6 bolos** (efetiva). Um bolo solou e a luz caiu por meia hora: saíram **5** (realizada)." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Projeto sonha, Efetiva planeja, Realizada entrega.”**" },

        { nivel: "medio", tipo: "formula", titulo: "Utilização e eficiência (Slack)", texto: "Utilização = produção realizada ÷ capacidade projetada\nEficiência = produção realizada ÷ capacidade efetiva", legenda: [["Realizada", "O que efetivamente saiu"], ["Efetiva", "Projetada menos perdas planejadas"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Utilização × eficiência", texto: "Projetada = 1.000 caixas/semana; efetiva = 850; realizada = 680.\nUtilização = 680 ÷ 1.000 = **68%** · Eficiência = 680 ÷ 850 = **80%**." },
        { nivel: "medio", tipo: "atencao", titulo: "Definições diferentes", texto: "No **Módulo 4**, eficiência = horas-padrão ÷ horas trabalhadas (desempenho da pessoa) e utilização = horas trabalhadas ÷ disponíveis. Aqui, as definições de Slack comparam **volumes** com capacidades. As duas são usadas: sempre diga **qual fórmula** está usando no relatório." },
        { nivel: "medio", tipo: "formula", titulo: "Carga × capacidade", texto: "Carga = Σ (quantidade do item × tempo padrão do item)\nOcupação = carga ÷ capacidade × 100%", legenda: [["Carga", "Horas necessárias para cumprir o plano"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "A embalagem aguenta?", texto: "Plano: 500 caixas X × 0,3 h + 200 caixas Y × 0,5 h = 150 + 100 = **250 h**.\nCapacidade = 240 h → ocupação = 250 ÷ 240 ≈ **104%** → **sobrecarga de 10 h**." },
        { nivel: "medio", tipo: "conceito", titulo: "RCCP × CRP", texto: "**RCCP (rough-cut capacity planning):** verificação **grosseira** do PMP, só nos recursos críticos, usando um perfil de horas por produto. Rápida; feita antes de rodar o MRP.\n**CRP (capacity requirements planning):** verificação **detalhada**, usando as ordens do MRP, os roteiros e os tempos por centro de trabalho, período a período." },

        { nivel: "dificil", tipo: "conceito", titulo: "Resolvendo sobrecarga", texto: "**Aumentar a capacidade:** hora extra, turno adicional, recurso alternativo, terceirizar, reduzir setups (SMED, Módulo 6), melhorar o gargalo.\n**Ajustar a carga:** antecipar ordens para períodos com folga (gera estoque), adiar (gera atraso — negociar), dividir lotes, mudar o mix.\nNa ociosidade: puxar ordens futuras, manutenção, treinamento, melhoria." },
        { nivel: "dificil", tipo: "conceito", titulo: "Utilização alta e filas", texto: "Com variabilidade nas chegadas e nos tempos, o tempo de fila cresce de forma **não linear** com a utilização: de 80% para 95%, a fila pode multiplicar várias vezes. Por isso lead time “fixo” (premissa do MRP) é uma ilusão em recursos muito carregados. A teoria das filas (Módulo 9) quantifica esse efeito." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: capacidade de dezembro", texto: "A Doces Serra precisa de 5.200 h de banhadeira em dezembro e tem 4.600 h. Opções: (1) antecipar 400 h para novembro (estoque dentro da validade); (2) 200 h de hora extra aos sábados; (3) terceirizar um sabor simples. Decisão no S&OP, comparando custo, validade, qualidade e risco." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Capacidade depende do mix", texto: "Dizer “a fábrica faz 1.000 caixas/semana” só vale para um **mix** de produtos. Se o mix muda para produtos com tempo maior (ou mais setups), a capacidade em unidades cai. Por isso a capacidade se mede melhor em **horas do recurso gargalo**." }
      ],
      questoes: [
        { id: "m03-q100", nivel: "facil", tipo: "ligar", pergunta: "Ligue o tipo de capacidade à definição:",
          pares: [["Projetada", "Máximo teórico, sem paradas"], ["Efetiva", "Descontadas as perdas planejadas"], ["Realizada", "O que de fato foi produzido"]],
          explicacao: "“Projeto sonha, Efetiva planeja, Realizada entrega.”" },
        { id: "m03-q101", nivel: "facil", tipo: "calculo", pergunta: "4 máquinas trabalham 8 h por turno, 2 turnos por dia, 6 dias por semana. Qual a capacidade semanal em horas?",
          resposta: 384, tolerancia: 0, unidade: "h",
          resolucao: "4 × 8 × 2 × 6 = 384 h",
          explicacao: "Recursos × horas × turnos × dias." },
        { id: "m03-q102", nivel: "facil", tipo: "vf", pergunta: "Setups e manutenção preventiva são perdas planejadas, descontadas para chegar à capacidade efetiva.",
          correta: true, explicacao: "Perdas não planejadas (quebras) explicam a diferença entre efetiva e realizada." },
        { id: "m03-q103", nivel: "facil", tipo: "multipla", pergunta: "Uma quebra inesperada de máquina afeta principalmente qual capacidade?",
          opcoes: ["Projetada", "Efetiva", "Realizada", "Nenhuma"], correta: 2,
          explicacao: "É uma perda não planejada: reduz o que de fato sai." },
        { id: "m03-q104", nivel: "medio", tipo: "calculo", pergunta: "Capacidade projetada = 1.000; efetiva = 850; realizada = 680. Qual a eficiência (%), pela definição de Slack?",
          resposta: 80, tolerancia: 0.01, unidade: "%",
          resolucao: "Eficiência = 680 ÷ 850 = 0,80 = 80%",
          explicacao: "Utilização seria 680 ÷ 1.000 = 68%." },
        { id: "m03-q105", nivel: "medio", tipo: "calculo", pergunta: "Plano: 500 caixas X (0,3 h cada) e 200 caixas Y (0,5 h cada). Capacidade = 240 h. Qual a ocupação (%)?",
          resposta: 104.17, tolerancia: 0.1, unidade: "%",
          resolucao: "Carga = 500 × 0,3 + 200 × 0,5 = 250 h\nOcupação = 250 ÷ 240 × 100 ≈ 104,17%",
          explicacao: "Acima de 100%: sobrecarga de 10 h." },
        { id: "m03-q106", nivel: "medio", tipo: "multipla", pergunta: "Qual a diferença entre RCCP e CRP?",
          opcoes: ["São iguais", "RCCP verifica o PMP de forma grosseira nos recursos críticos; CRP verifica em detalhe as ordens do MRP por centro de trabalho", "RCCP é para compras e CRP para vendas", "CRP é feito antes do PMP"], correta: 1,
          explicacao: "Grosseiro e rápido antes; detalhado depois." },
        { id: "m03-q107", nivel: "medio", tipo: "vf", pergunta: "A eficiência (realizada ÷ efetiva) é sempre menor ou igual à utilização (realizada ÷ projetada).",
          correta: false, explicacao: "Como a efetiva é menor que a projetada, a eficiência é maior ou igual à utilização." },
        { id: "m03-q108", nivel: "medio", tipo: "caso", contexto: "O CRP mostra que a embaladora está com 125% de ocupação na semana 3 e 70% nas semanas 2 e 4.",
          pergunta: "Qual a ação mais simples a avaliar primeiro?",
          opcoes: ["Comprar outra embaladora", "Antecipar parte das ordens da semana 3 para a semana 2 (se houver material e validade) ou adiar para a 4 negociando com o cliente", "Demitir na semana 2", "Ignorar: a média das 3 semanas é menor que 100%"], correta: 1,
          explicacao: "Nivelar a carga entre períodos antes de investir." },
        { id: "m03-q109", nivel: "dificil", tipo: "multipla", pergunta: "Por que planejar um recurso com variabilidade para 98% de utilização é arriscado?",
          opcoes: ["Porque a máquina quebra ao passar de 95%", "Porque as filas e o lead time crescem de forma não linear perto de 100%", "Porque a eficiência cai para zero", "Não há risco: quanto mais utilização, melhor"], correta: 1,
          explicacao: "Teoria das filas: a espera explode quando a utilização se aproxima de 100%." },
        { id: "m03-q110", nivel: "dificil", tipo: "vf", pergunta: "A capacidade de uma fábrica em unidades por semana independe do mix de produtos.",
          correta: false, explicacao: "Produtos com mais tempo ou setups consomem mais capacidade; ela varia com o mix." },
        { id: "m03-q111", nivel: "dificil", tipo: "discursiva", pergunta: "A banhadeira precisa de 5.200 h em dezembro e tem 4.600 h. Proponha e compare pelo menos três alternativas.",
          respostaModelo: "Faltam 600 h. (1) **Antecipar** carga para novembro: sem custo de hora extra, mas gera estoque — limitado pela validade e pela câmara fria. (2) **Hora extra/turno extra** aos sábados: rápido, custo de adicional (mín. 50%), fadiga e limites legais. (3) **Terceirizar** um sabor simples: libera o gargalo, mas custo unitário maior e risco de qualidade. (4) **Reduzir setups** na banhadeira (agrupar sabores, SMED): ganho permanente, requer preparo. Recomendar combinação, decidida no S&OP pelo custo total e pelo risco.",
          criterios: ["Quantifica a falta (600 h)", "Apresenta ao menos três alternativas", "Compara custos e riscos", "Recomenda uma combinação justificada"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 7 — SEQUENCIAMENTO E CONTROLE
       ================================================================== */
    {
      id: "m03-l7",
      titulo: "Sequenciamento e controle da produção",
      icone: "🔢",
      objetivos: {
        facil: ["Explicar o que é sequenciamento", "Aplicar as regras PEPS, MTP e DD", "Ler um gráfico de Gantt de programação"],
        medio: ["Calcular tempo médio de fluxo, atraso médio e número de atrasados", "Comparar regras de prioridade pelos indicadores", "Aplicar a regra de Johnson para duas máquinas"],
        dificil: ["Justificar quando cada regra é ótima", "Calcular o makespan de uma sequência de Johnson", "Estruturar o controle da produção com indicadores"]
      },
      prerequisitos: [{ texto: "Capacidade", licao: "m03-l6" }],
      resumo: {
        facil: "**Sequenciar** é decidir a ordem das tarefas num recurso. **PEPS:** primeiro a chegar, primeiro a sair. **MTP (SPT):** menor tempo de processamento primeiro. **DD (EDD):** menor data de entrega primeiro.",
        medio: "Tempo de fluxo = data de término − chegada; atraso = max(0; término − data de entrega). Numa máquina, **MTP minimiza o tempo médio de fluxo** e **DD minimiza o maior atraso**. **Johnson (2 máquinas em série):** menor tempo na máquina 1 vai para o início; menor tempo na máquina 2 vai para o fim.",
        dificil: "A regra de Johnson **minimiza o makespan** em duas máquinas em série com a mesma ordem. Nenhuma regra é boa em tudo: escolha pelo indicador que importa. O **controle** compara planejado × realizado (aderência ao plano, OTIF, WIP, lead time) e dispara ação corretiva."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Com as mesmas máquinas e as mesmas ordens, **mudar só a sequência** pode reduzir atrasos e o tempo que os pedidos ficam na fábrica. É melhoria sem investimento." },
        { nivel: "facil", tipo: "conceito", titulo: "Regras de prioridade", texto: "**PEPS / FIFO:** primeiro que entra, primeiro que sai. Justo, simples.\n**MTP / SPT:** menor tempo de processamento primeiro. Libera muitas ordens rápido.\n**DD / EDD:** menor data de entrega primeiro. Foca no prazo.\nOutras: maior tempo primeiro, razão crítica (tempo até a entrega ÷ tempo de processamento)." },
        { nivel: "facil", tipo: "bobo", titulo: "A fila do micro-ondas", texto: "No escritório, três pessoas querem usar o micro-ondas: pipoca (3 min), marmita (2 min) e sopa (5 min). Se a marmita vai primeiro (menor tempo), a espera média do grupo é a menor possível. Mas se a sopa é de quem tem reunião em 6 minutos… a data de entrega pesa." },
        { nivel: "facil", tipo: "conceito", titulo: "Gráfico de Gantt", texto: "Barras horizontais no tempo mostram **qual ordem ocupa cada recurso e quando**. É a ferramenta visual clássica da programação (Henry Gantt, início do século XX), a mesma usada para cronogramas de projeto no Módulo 2." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Menor tempo esvazia a fila, menor prazo salva o cliente.”** MTP → menor tempo médio de fluxo; DD → menor atraso máximo." },
        { nivel: "facil", tipo: "exemplo", titulo: "Quatro ordens numa máquina", texto: "Ordem (tempo; entrega): A (6; 8) · B (2; 6) · C (8; 18) · D (3; 15). Todas disponíveis no instante 0.\n**PEPS (A-B-C-D):** termina em 6, 8, 16, 19.\n**MTP (B-D-A-C):** termina em 2, 5, 11, 19.\n**DD (B-A-D-C):** termina em 2, 8, 11, 19." },

        { nivel: "medio", tipo: "formula", titulo: "Indicadores de sequenciamento", texto: "Tempo de fluxo = término − liberação\nAtraso = max(0; término − data de entrega)\nMakespan = término da última tarefa", legenda: [["Tempo de fluxo", "Quanto tempo a ordem fica no sistema"], ["Atraso (tardiness)", "Quanto passou do prazo; zero se no prazo"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Comparando as regras", texto: "| Regra | Fluxo médio | Atraso médio | Nº atrasadas |\n|---|---|---|---|\n| PEPS | 49 ÷ 4 = 12,25 | (0+2+0+4) ÷ 4 = 1,5 | 2 |\n| MTP | 37 ÷ 4 = 9,25 | (0+0+3+1) ÷ 4 = 1,0 | 2 |\n| DD | 40 ÷ 4 = 10,0 | (0+0+0+1) ÷ 4 = 0,25 | 1 |\nMTP ganha no fluxo; DD ganha no atraso. O makespan é 19 em todas (uma máquina)." },
        { nivel: "medio", tipo: "passos", titulo: "Regra de Johnson (2 máquinas em série)", texto: "1. Liste os tempos de cada tarefa na máquina 1 (M1) e na máquina 2 (M2).\n2. Encontre o **menor tempo** entre todos os não programados.\n3. Se estiver em **M1**, coloque a tarefa na **primeira** posição livre; se estiver em **M2**, na **última** posição livre.\n4. Retire a tarefa da lista e repita até acabar.\nEmpate: escolha qualquer uma." },
        { nivel: "medio", tipo: "exemplo", titulo: "Johnson: recheio → banho", texto: "Tarefa (M1 recheio; M2 banho): J1 (4; 6) · J2 (7; 3) · J3 (2; 5) · J4 (6; 8) · J5 (5; 2).\nMenor = 2: J3 em M1 → **1ª**; J5 em M2 → **última**. Próximo menor = 3: J2 em M2 → **penúltima**. Próximo = 4: J1 em M1 → **2ª**. Sobra J4.\nSequência: **J3 – J1 – J4 – J2 – J5**." },
        { nivel: "medio", tipo: "mapa", largo: true, titulo: "Gantt da sequência de Johnson (arraste para o lado →)", texto:
"h   0         5         10        15        20        25\nM1  |J3 |  J1   |    J4     |     J2      |   J5    |\nM2      |   J3    |    J1     |      J4       | J2  |J5 |" },
        { nivel: "medio", tipo: "recall", pergunta: "Na regra de Johnson, se o menor tempo da lista está na máquina 2, onde a tarefa vai?", resposta: "Para a última posição livre da sequência." },

        { nivel: "dificil", tipo: "conceito", titulo: "Quando cada regra é ótima", texto: "Para **uma máquina** com todas as tarefas disponíveis no início:\n• **MTP (SPT)** minimiza o tempo médio de fluxo (e o WIP médio).\n• **DD (EDD)** minimiza o **maior atraso** (regra de Jackson, 1955).\n• O algoritmo de **Moore-Hodgson** minimiza o número de tarefas atrasadas.\nPara **duas máquinas em série** (flow shop), a **regra de Johnson (1954)** minimiza o makespan. Com mais máquinas, o problema é, em geral, NP-difícil e se usam heurísticas." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Makespan de Johnson", texto: "M1: J3 0–2 · J1 2–6 · J4 6–12 · J2 12–19 · J5 19–24.\nM2 (começa quando a tarefa sai de M1 e M2 está livre): J3 2–7 · J1 7–13 · J4 13–21 · J2 21–24 · J5 24–26.\n**Makespan = 26**. Limite inferior: soma de M1 (24) + menor tempo de M2 da última (2) = 26 → é ótimo." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limitações do MTP", texto: "O MTP pode deixar ordens longas **esperando indefinidamente** se sempre chegam ordens curtas. Na prática, combina-se o MTP com um limite de espera ou com a data de entrega. Regras simples também ignoram setups dependentes da sequência (ex.: chocolate branco antes do amargo)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Controle da produção", texto: "Planejar sem controlar é só desejar. Indicadores típicos:\n• **Aderência ao plano** (quanto do programado foi feito no período).\n• **OTIF** (entregas no prazo e completas).\n• **WIP** e **lead time** (lei de Little: WIP = taxa × lead time).\n• **Acuracidade de estoque**.\nCiclo: medir → comparar com o plano → analisar causas → agir → replanejar." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• JOHNSON, S. M. Optimal two- and three-stage production schedules with setup times included. *Naval Research Logistics Quarterly*, v. 1, n. 1, p. 61–68, 1954.\n• PINEDO, M. L. *Scheduling: Theory, Algorithms, and Systems*. Springer.\n• HOPP, W. J.; SPEARMAN, M. L. *Factory Physics*. Waveland (lei de Little e filas na fábrica)." }
      ],
      questoes: [
        { id: "m03-q120", nivel: "facil", tipo: "ligar", pergunta: "Ligue a regra ao critério:",
          pares: [["PEPS", "Ordem de chegada"], ["MTP", "Menor tempo de processamento"], ["DD", "Menor data de entrega"]],
          explicacao: "PEPS = FIFO; MTP = SPT; DD = EDD." },
        { id: "m03-q121", nivel: "facil", tipo: "multipla", pergunta: "Ordens: X (5 h), Y (2 h), Z (8 h). Qual a sequência pela regra MTP?",
          opcoes: ["X – Y – Z", "Y – X – Z", "Z – X – Y", "Y – Z – X"], correta: 1,
          explicacao: "Do menor para o maior tempo: 2, 5, 8." },
        { id: "m03-q122", nivel: "facil", tipo: "vf", pergunta: "Mudar apenas a sequência das ordens pode reduzir atrasos sem nenhum investimento.",
          correta: true, explicacao: "A mesma carga em outra ordem gera outros indicadores." },
        { id: "m03-q123", nivel: "facil", tipo: "lacuna", pergunta: "O gráfico de barras no tempo que mostra qual ordem ocupa cada recurso é o gráfico de ___.",
          opcoes: ["Gantt", "Pareto", "Ishikawa", "controle"], correta: 0,
          explicacao: "Henry Gantt, início do século XX." },
        { id: "m03-q124", nivel: "medio", tipo: "calculo", pergunta: "Sequência MTP numa máquina: B (2 h), D (3 h), A (6 h), C (8 h), todas disponíveis no instante 0. Qual o tempo médio de fluxo (h)?",
          resposta: 9.25, tolerancia: 0.01, unidade: "h",
          resolucao: "Términos: 2, 5, 11, 19\nMédia = (2 + 5 + 11 + 19) ÷ 4 = 37 ÷ 4 = 9,25 h",
          explicacao: "É o menor tempo médio de fluxo possível para essas ordens." },
        { id: "m03-q125", nivel: "medio", tipo: "calculo", pergunta: "Sequência DD: B (2; entrega 6), A (6; entrega 8), D (3; entrega 15), C (8; entrega 18). Qual o atraso médio (h)?",
          resposta: 0.25, tolerancia: 0.01, unidade: "h",
          resolucao: "Términos: B 2, A 8, D 11, C 19\nAtrasos: 0, 0, 0, 19 − 18 = 1\nMédia = 1 ÷ 4 = 0,25 h",
          explicacao: "Só C atrasa, e por 1 hora." },
        { id: "m03-q126", nivel: "medio", tipo: "multipla", pergunta: "Na regra de Johnson, o menor tempo da lista é 1 h, da tarefa K na máquina 1. Onde K entra?",
          opcoes: ["Na primeira posição livre", "Na última posição livre", "No meio", "Fica de fora"], correta: 0,
          explicacao: "Menor tempo em M1 → início; em M2 → fim." },
        { id: "m03-q127", nivel: "medio", tipo: "ordenar", pergunta: "Tarefas (M1; M2): J1 (4; 6), J2 (7; 3), J3 (2; 5), J4 (6; 8), J5 (5; 2). Ordene pela regra de Johnson:",
          itens: ["J3", "J1", "J4", "J2", "J5"],
          explicacao: "J3 (2 em M1) início; J5 (2 em M2) fim; J2 (3 em M2) penúltima; J1 (4 em M1) segunda." },
        { id: "m03-q128", nivel: "medio", tipo: "caso", contexto: "O cliente mais importante reclama de atrasos. O gerente quer reduzir o maior atraso entre as ordens da semana numa máquina gargalo.",
          pergunta: "Qual regra usar?",
          opcoes: ["MTP", "PEPS", "DD (menor data de entrega primeiro)", "Maior tempo primeiro"], correta: 2,
          explicacao: "Numa máquina, DD minimiza o atraso máximo." },
        { id: "m03-q129", nivel: "dificil", tipo: "calculo", pergunta: "Sequência J3–J1–J4–J2–J5 com (M1; M2): J3 (2; 5), J1 (4; 6), J4 (6; 8), J2 (7; 3), J5 (5; 2). Qual o makespan?",
          resposta: 26, tolerancia: 0, unidade: "h",
          resolucao: "M1 termina: 2, 6, 12, 19, 24\nM2: J3 2–7, J1 7–13, J4 13–21, J2 21–24, J5 24–26\nMakespan = 26",
          explicacao: "Em M2, cada tarefa começa no maior entre o fim em M1 e o fim da anterior em M2." },
        { id: "m03-q130", nivel: "dificil", tipo: "vf", pergunta: "Numa única máquina com todas as ordens disponíveis, a regra MTP minimiza o tempo médio de fluxo.",
          correta: true, explicacao: "Resultado clássico da teoria de sequenciamento." },
        { id: "m03-q131", nivel: "dificil", tipo: "caso", contexto: "Com a regra MTP, uma ordem grande de um cliente pequeno está parada há 3 semanas, porque sempre chegam ordens mais curtas.",
          pergunta: "Qual o problema e a melhor correção?",
          opcoes: ["Nenhum: MTP é ótima", "Inanição da ordem longa; combinar MTP com limite de espera ou considerar a data de entrega", "Trocar tudo por maior tempo primeiro", "Recusar ordens grandes"], correta: 1,
          justificativas: ["MTP otimiza a média, não garante que toda ordem saia.", "Corrige a inanição mantendo boa parte do ganho do MTP.", "Pioraria o fluxo médio.", "Perde clientes sem necessidade."],
          explicacao: "Regras puras têm efeitos colaterais." },
        { id: "m03-q132", nivel: "dificil", tipo: "calculo", pergunta: "Lei de Little: a fábrica produz 50 ordens por dia e tem 400 ordens em processo (WIP). Qual o lead time médio (dias)?",
          resposta: 8, tolerancia: 0, unidade: "dias",
          resolucao: "Lead time = WIP ÷ taxa = 400 ÷ 50 = 8 dias",
          explicacao: "Reduzir WIP, com a mesma taxa, reduz o lead time." },
        { id: "m03-q133", nivel: "dificil", tipo: "discursiva", pergunta: "Proponha um painel de controle da produção semanal para o PCP da Doces Serra: quais indicadores, como calcular e o que fazer quando saírem da meta.",
          respostaModelo: "Indicadores: **aderência ao programa** (ordens concluídas no período ÷ programadas); **OTIF** (pedidos entregues no prazo e completos ÷ total); **WIP** e **lead time** (lei de Little); **ocupação do gargalo**; **acuracidade de estoque**; **erro de previsão** (MAPE/TS). Cada um com meta, dono e frequência. Fora da meta: análise de causa (Pareto dos motivos: falta de material, quebra, mudança de prioridade), ação corretiva e replanejamento; revisão na reunião semanal de PCP e mensal no S&OP.",
          criterios: ["Propõe pelo menos quatro indicadores relevantes", "Define como calcular", "Inclui meta/dono/frequência", "Define ação quando fora da meta"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 8 — CHEFÃO
       ================================================================== */
    {
      id: "m03-l8",
      titulo: "👾 Chefão: o Natal da Doces Serra",
      icone: "👾",
      objetivos: {
        facil: ["Ordenar o fluxo do PCP, da previsão ao controle", "Relacionar cada ferramenta à pergunta que responde", "Conectar PCP a métodos (Módulo 4) e projetos (Módulo 2)"],
        medio: ["Calcular previsão, estoque projetado, necessidade líquida, ocupação e sequência no mesmo caso", "Verificar se o plano cabe na capacidade", "Interpretar os resultados para decidir"],
        dificil: ["Propor um plano para o pico com trade-offs", "Avaliar o risco do plano diante do erro de previsão", "Integrar previsão, capacidade e sequenciamento numa recomendação"]
      },
      prerequisitos: [{ texto: "Todas as lições do Módulo 3", licao: "m03-l1" }],
      resumo: {
        facil: "PCP em sequência: **previsão → plano agregado → PMP → MRP → capacidade → sequenciamento → controle**.",
        medio: "No caso: previsão por suavização de 47,9 mil caixas; PMP semanal com ATP; bombons: NL = 1.500 e liberação na semana 3; embaladora com 104% de ocupação (sobrecarga de 10 h); sequência de Johnson com makespan de 26 h.",
        dificil: "O plano de pico combina antecipação (limitada pela validade), hora extra e ajuste de sequência. Como a previsão erra (MAD conhecido), o plano deve ter proteção (estoque de segurança ou capacidade de reserva) e ser revisto semanalmente com o sinal de rastreamento."
      },
      blocos: [
        { tipo: "serio", titulo: "O caso: preparando o Natal", texto: "A Doces Serra precisa planejar a linha de caixas de bombom (a mesma dos Módulos 2 e 4) para o fim do ano.\n• Previsão de junho = 47 mil caixas; real = 50 mil; α = 0,3.\n• Caixa presente: 12 bombons + 1 embalagem. PMP de 200 caixas na semana 5; montagem com LT de 1 semana.\n• Bombons: estoque 400, recebimento programado 500 (semana 3), LT 1 semana, lote a lote.\n• Embaladora: 240 h/semana; plano de 500 caixas X (0,3 h) e 200 Y (0,5 h).\n• Recheio → banho: 5 lotes, J1 (4; 6), J2 (7; 3), J3 (2; 5), J4 (6; 8), J5 (5; 2) horas." },
        { nivel: "facil", tipo: "conceito", titulo: "✅ Checklist (Fácil)", texto: "• As 4 perguntas do PCP e os 3 níveis\n• MTS, ATO, MTO, ETO\n• Média móvel e erro\n• Acompanhar × nivelar · o que é o PMP\n• BOM e demanda dependente\n• Capacidade projetada, efetiva, realizada\n• PEPS, MTP, DD" },
        { nivel: "medio", tipo: "conceito", titulo: "✅ Checklist (Médio)", texto: "• S&OP\n• Ponderada e exponencial\n• MAD, MAPE, MSE · regressão · índice sazonal\n• Estoque projetado e ATP\n• Necessidade líquida, lote e lead time\n• Utilização × eficiência · carga × capacidade · RCCP × CRP\n• Indicadores de sequência · Johnson" },
        { nivel: "dificil", tipo: "conceito", titulo: "✅ Checklist (Difícil)", texto: "• Coerência entre níveis e desacoplamento\n• Escolha de α e viés das médias\n• Sinal de rastreamento · Holt-Winters\n• Custos do agregado e zonas do PMP\n• MRP II/ERP e nervosismo\n• Filas e utilização alta\n• Otimalidade das regras · makespan · controle" }
      ],
      questoes: [
        { id: "m03-q140", nivel: "facil", tipo: "ordenar", pergunta: "Ordene o fluxo do PCP para o Natal:",
          itens: ["Prever a demanda", "Fazer o plano agregado (S&OP)", "Montar o plano mestre (PMP)", "Calcular materiais (MRP)", "Verificar a capacidade", "Sequenciar as ordens", "Controlar planejado × realizado"],
          explicacao: "Do agregado ao detalhado, fechando com o controle." },
        { id: "m03-q141", nivel: "facil", tipo: "ligar", pergunta: "Ligue a ferramenta à pergunta que ela responde:",
          pares: [["Previsão de demanda", "Quanto o mercado vai pedir?"], ["PMP", "Quantas caixas de cada tipo em cada semana?"], ["MRP", "Que componentes pedir e quando?"], ["Sequenciamento", "Em que ordem processar os lotes?"]],
          explicacao: "Cada ferramenta responde uma parte do “o quê, quanto, quando, onde”." },
        { id: "m03-q142", nivel: "facil", tipo: "vf", pergunta: "O tempo padrão calculado no Módulo 4 é usado pelo PCP para calcular a carga dos recursos.",
          correta: true, explicacao: "Carga = quantidade × tempo padrão." },
        { id: "m03-q143", nivel: "medio", tipo: "calculo", pergunta: "Previsão de junho = 47 mil; real = 50 mil; α = 0,3. Qual a previsão de julho (mil caixas)?",
          resposta: 47.9, tolerancia: 0.01, unidade: "mil caixas",
          resolucao: "F = 47 + 0,3 × (50 − 47) = 47,9",
          explicacao: "Suavização exponencial simples." },
        { id: "m03-q144", nivel: "medio", tipo: "calculo", pergunta: "Bombons: NB = 200 × 12 na semana 4; estoque 400; recebimento programado 500. Qual a necessidade líquida?",
          resposta: 1500, tolerancia: 0, unidade: "bombons",
          resolucao: "NB = 2.400\nNL = 2.400 − 400 − 500 = 1.500",
          explicacao: "Liberação na semana 3 (LT 1)." },
        { id: "m03-q145", nivel: "medio", tipo: "calculo", pergunta: "Embaladora: carga de 250 h e capacidade de 240 h. Quantas horas faltam?",
          resposta: 10, tolerancia: 0, unidade: "h",
          resolucao: "250 − 240 = 10 h (ocupação ≈ 104%)",
          explicacao: "Pequena sobrecarga: hora extra ou antecipação resolvem." },
        { id: "m03-q146", nivel: "medio", tipo: "calculo", pergunta: "Qual o makespan da sequência de Johnson para os 5 lotes do caso (h)?",
          resposta: 26, tolerancia: 0, unidade: "h",
          resolucao: "Sequência J3–J1–J4–J2–J5\nM2 termina em 7, 13, 21, 24, 26",
          explicacao: "É o mínimo possível para esses lotes." },
        { id: "m03-q147", nivel: "dificil", tipo: "caso", contexto: "O MAD da previsão de caixas é de 3 mil por mês, e o sinal de rastreamento está em +4,5 nos últimos meses.",
          pergunta: "O que isso significa para o plano de Natal?",
          opcoes: ["Nada: o MAD é pequeno", "A previsão tem viés para baixo; revisar o modelo (tendência) e reforçar a proteção (estoque de segurança ou capacidade extra) para o pico", "A previsão está alta; reduzir a produção", "Parar de usar previsão"], correta: 1,
          justificativas: ["O MAD mede o tamanho do erro, não a direção.", "TS positivo alto: real acima do previsto de forma sistemática.", "Seria o contrário (TS negativo).", "Sem previsão, não há plano."],
          explicacao: "Com viés, o plano tende a faltar produto no pico." },
        { id: "m03-q148", nivel: "dificil", tipo: "vf", pergunta: "Se a previsão tem viés para baixo, aumentar o estoque de segurança resolve o problema na raiz.",
          correta: false, explicacao: "Protege no curto prazo, mas a raiz é o modelo: é preciso corrigir o viés." },
        { id: "m03-q149", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva uma recomendação de uma página (resumida) para a diretoria sobre o plano de Natal: situação, alternativas e decisão proposta.",
          respostaModelo: "**Situação:** previsão de pico com viés para baixo (TS +4,5); embaladora com 104% de ocupação; banhadeira com déficit em dezembro; material de bombons coberto com liberação na semana 3. **Alternativas:** (1) antecipar produção dentro da validade; (2) hora extra/banco de horas; (3) terceirizar sabor simples; (4) sequenciar recheio → banho por Johnson e agrupar setups. **Decisão proposta:** combinação 1 + 2 + 4, revisar o modelo de previsão (tendência) e acompanhar semanalmente aderência, OTIF e TS; gatilho: se o TS passar de +4 de novo, acionar terceirização.",
          criterios: ["Resume a situação com números", "Apresenta alternativas com trade-offs", "Propõe decisão justificada", "Define acompanhamento e gatilhos"] }
      ]
    }
  ],

  glossario: [
    { termo: "PCP", definicao: "Planejamento e Controle da Produção: decide o que, quanto, quando e onde produzir e controla a execução." },
    { termo: "Planejamento estratégico da produção", definicao: "Nível de longo prazo: capacidade, fábricas e grandes investimentos." },
    { termo: "MTS", definicao: "Make to stock: produzir para estoque, antes do pedido." },
    { termo: "ATO", definicao: "Assemble to order: fabricar módulos antes e montar no pedido." },
    { termo: "MTO", definicao: "Make to order: fabricar depois do pedido." },
    { termo: "ETO", definicao: "Engineer to order: projetar e fabricar depois do pedido." },
    { termo: "Ponto de desacoplamento", definicao: "Ponto da cadeia que separa a produção por previsão da produção por pedido." },
    { termo: "S&OP", definicao: "Sales and Operations Planning: processo mensal que integra as áreas num plano único por família." },
    { termo: "Método Delphi", definicao: "Previsão qualitativa por rodadas anônimas de especialistas até o consenso." },
    { termo: "Média móvel simples", definicao: "Média dos últimos n períodos usada como previsão." },
    { termo: "Média móvel ponderada", definicao: "Média com pesos maiores para os períodos recentes; os pesos somam 1." },
    { termo: "Suavização exponencial", definicao: "Fₜ₊₁ = Fₜ + α(Aₜ − Fₜ): corrige a previsão por uma fração do erro." },
    { termo: "Tendência", definicao: "Movimento persistente de alta ou de baixa da série." },
    { termo: "Sazonalidade", definicao: "Padrão que se repete em intervalos regulares." },
    { termo: "Índice sazonal", definicao: "Razão entre a média do período e a média geral." },
    { termo: "MAD", definicao: "Desvio absoluto médio dos erros de previsão." },
    { termo: "MAPE", definicao: "Erro percentual absoluto médio." },
    { termo: "MSE", definicao: "Erro quadrático médio; pune erros grandes." },
    { termo: "Sinal de rastreamento", definicao: "Soma dos erros ÷ MAD; detecta viés da previsão." },
    { termo: "Holt-Winters", definicao: "Suavização exponencial com nível, tendência e sazonalidade." },
    { termo: "Planejamento agregado", definicao: "Plano por família de produtos e por mês: produção, pessoas, estoque." },
    { termo: "Estratégia de acompanhamento (chase)", definicao: "Produção acompanha a demanda período a período." },
    { termo: "Produção nivelada (level)", definicao: "Produção constante; o estoque absorve a variação da demanda." },
    { termo: "PMP / MPS", definicao: "Plano mestre: quanto de cada produto final em cada período." },
    { termo: "ATP", definicao: "Available to promise: quantidade ainda disponível para prometer a novos pedidos." },
    { termo: "Zona congelada", definicao: "Horizonte do PMP em que o plano não deve ser alterado." },
    { termo: "BOM", definicao: "Bill of materials: lista de materiais com componentes e quantidades." },
    { termo: "Demanda dependente", definicao: "Demanda de um item calculada a partir da de outro (seu pai na BOM)." },
    { termo: "MRP", definicao: "Material Requirements Planning: cálculo das necessidades de materiais." },
    { termo: "Necessidade líquida", definicao: "Necessidade bruta menos estoque e recebimentos programados (mais estoque de segurança)." },
    { termo: "Recebimento programado", definicao: "Ordem já emitida, com data de chegada prevista." },
    { termo: "Lote a lote", definicao: "Regra que pede exatamente a necessidade líquida." },
    { termo: "MRP II", definicao: "Manufacturing Resource Planning: MRP com capacidade, custos e integração." },
    { termo: "ERP", definicao: "Sistema integrado de gestão de toda a empresa." },
    { termo: "Nervosismo do MRP", definicao: "Mudanças frequentes nas ordens planejadas a cada replanejamento." },
    { termo: "Capacidade projetada", definicao: "Máximo teórico de produção, sem paradas." },
    { termo: "Capacidade efetiva", definicao: "Capacidade projetada menos as perdas planejadas." },
    { termo: "Capacidade realizada", definicao: "Produção obtida de fato." },
    { termo: "RCCP", definicao: "Verificação grosseira da capacidade do PMP nos recursos críticos." },
    { termo: "CRP", definicao: "Verificação detalhada da capacidade a partir das ordens do MRP." },
    { termo: "PEPS", definicao: "Primeiro que entra, primeiro que sai (FIFO)." },
    { termo: "MTP", definicao: "Menor tempo de processamento primeiro (SPT)." },
    { termo: "DD", definicao: "Menor data de entrega primeiro (EDD)." },
    { termo: "Regra de Johnson", definicao: "Sequenciamento ótimo (makespan) para duas máquinas em série." },
    { termo: "Makespan", definicao: "Tempo total para terminar todas as tarefas." },
    { termo: "Lei de Little", definicao: "WIP = taxa de saída × lead time." },
    { termo: "OTIF", definicao: "On time in full: entregas no prazo e completas." }
  ],

  flashcards: [
    { id: "m03-f01", frente: "4 perguntas do PCP", verso: "O que, quanto, quando e onde produzir (e depois controlar)." },
    { id: "m03-f02", frente: "3 níveis do planejamento", verso: "Estratégico (anos), tático (meses), operacional (dias/horas)." },
    { id: "m03-f03", frente: "MTS → ATO → MTO → ETO", verso: "“Estoque, Monta, Faz, Projeta”: cliente espera mais, empresa guarda menos." },
    { id: "m03-f04", frente: "S&OP", verso: "Processo mensal que integra vendas, produção, compras e finanças num plano único." },
    { id: "m03-f05", frente: "Média móvel simples", verso: "Média dos últimos n períodos. n grande = suave e lenta." },
    { id: "m03-f06", frente: "Suavização exponencial", verso: "Fₜ₊₁ = Fₜ + α(Aₜ − Fₜ). α grande = reage rápido." },
    { id: "m03-f07", frente: "Médias com tendência", verso: "Ficam atrasadas: erro sempre do mesmo lado (viés)." },
    { id: "m03-f08", frente: "MAD × MAPE × MSE", verso: "MAD: unidade. MAPE: %, compara itens. MSE: pune erros grandes." },
    { id: "m03-f09", frente: "Sinal de rastreamento", verso: "Σ erros ÷ MAD; fora de ±4 (usual) indica viés." },
    { id: "m03-f10", frente: "Índice sazonal 1,2", verso: "Período 20% acima da média. Previsão = base × índice." },
    { id: "m03-f11", frente: "Acompanhar × nivelar", verso: "Acompanhar: produção varia, pouco estoque. Nivelar: produção fixa, estoque varia." },
    { id: "m03-f12", frente: "Agregado × PMP", verso: "“Agregado agrupa (família × mês), Mestre detalha (produto × semana).”" },
    { id: "m03-f13", frente: "ATP", verso: "Disponível para promessa: PMP (+ estoque no 1º período) − pedidos até o próximo PMP." },
    { id: "m03-f14", frente: "Demanda dependente", verso: "Calculada a partir do pai na BOM; não se prevê." },
    { id: "m03-f15", frente: "Necessidade líquida", verso: "NB − estoque − recebimentos programados (+ ES), nunca negativa." },
    { id: "m03-f16", frente: "Liberação da ordem", verso: "Recebimento planejado recuado do lead time." },
    { id: "m03-f17", frente: "Premissas do MRP", verso: "Capacidade infinita e lead time fixo; exige dados exatos." },
    { id: "m03-f18", frente: "Utilização × eficiência (Slack)", verso: "Utilização = realizada ÷ projetada. Eficiência = realizada ÷ efetiva." },
    { id: "m03-f19", frente: "RCCP × CRP", verso: "RCCP: grosseiro, PMP, recursos críticos. CRP: detalhado, ordens do MRP." },
    { id: "m03-f20", frente: "MTP × DD", verso: "MTP minimiza o fluxo médio; DD minimiza o maior atraso (uma máquina)." },
    { id: "m03-f21", frente: "Regra de Johnson", verso: "Menor tempo em M1 → início; em M2 → fim. Minimiza o makespan (2 máquinas)." },
    { id: "m03-f22", frente: "Lei de Little", verso: "WIP = taxa × lead time." }
  ]
});
