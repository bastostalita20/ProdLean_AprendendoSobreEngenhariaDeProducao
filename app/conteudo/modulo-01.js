/* =====================================================================
   MÓDULO 1 — FUNDAMENTOS DA ENGENHARIA DE PRODUÇÃO
   ---------------------------------------------------------------------
   Este arquivo contém SÓ conteúdo (nenhuma lógica do app).
   Use-o como modelo para os próximos módulos.

   Tipos de bloco de conteúdo (campo "tipo" em "blocos"):
     "conceito" 🔴  | "atencao" 🟡 | "dica" 🟢 | "formula" 🔵 | "conexao" 🟣
     "texto" (neutro) | "bobo" 😂 | "serio" 🏭 | "mnemonico" 🔊 | "mapa" 🧠
     "recall" 🤔  -> pergunta antes da explicação (tem "pergunta" e "resposta")
   Negrito: coloque entre **asteriscos duplos**. Quebra de linha: \n

   Tipos de questão (campo "tipo" em "questoes"):
     "multipla"  -> opcoes: [4 textos], correta: índice (0 = primeira)
     "vf"        -> correta: true ou false
     "lacuna"    -> pergunta com ___ ; opcoes: [palavras]; correta: índice
     "ligar"     -> pares: [["esquerda","direita"], ...]
     "ordenar"   -> itens: [na ORDEM CERTA] (o app embaralha)
     "caso"      -> contexto: "...", pergunta, opcoes, correta
     "calculo"   -> resposta: número, tolerancia: número, unidade: "texto",
                    resolucao: "passo a passo"
   Toda questão tem "id" ÚNICO e "explicacao".
   ===================================================================== */
(window.MODULOS = window.MODULOS || []).push({
  id: "m01",
  numero: 1,
  ordem: 1, // posição na trilha (ordem de estudo do cronograma)
  titulo: "Fundamentos da Engenharia de Produção",
  icone: "🏁",
  objetivo: "Entender o que a Engenharia de Produção é, de onde veio, suas 10 áreas e como enxergar qualquer operação como um sistema.",
  conquista: {
    id: "mod-m01",
    nome: "Fundador da Fábrica",
    icone: "🏗️",
    descricao: "Concluiu o Módulo 1 — Fundamentos."
  },

  resumoAudio:
    "Engenharia de Produção é a engenharia do sistema. Não é só a máquina: é a fábrica inteira funcionando. " +
    "Pessoas, materiais, máquinas, informação, energia e dinheiro, tudo junto, entregando valor com qualidade, prazo e custo baixo. " +
    "A história em quatro nomes: Taylor mediu o tempo. Ford montou a linha. Deming cuidou da qualidade. E a Toyota ensinou a cortar o desperdício. " +
    "São dez as áreas da ABEPRO. Onde Logo Pesquisei Qual Produto O Engenheiro Traria Sem Erro: " +
    "Operações, Logística, Pesquisa Operacional, Qualidade, Produto, Organizacional, Econômica, Trabalho, Sustentabilidade e Educação. " +
    "Todo sistema tem entrada, transformação e saída. Entram materiais, informação e clientes. Transformam as instalações e as pessoas. Saem bens e serviços. " +
    "Pra Já Levo Mais Coisa: Projeto, Jobbing, Lotes, Massa e Contínuo. Mais volume, menos variedade. " +
    "Qual Rato Come Farinha Cara? Qualidade, Rapidez, Confiabilidade, Flexibilidade e Custo. Rápido é chegar logo. Confiável é chegar quando prometeu. " +
    "Estratégico decide a direção, tático decide os recursos, operacional executa. " +
    "Produtividade é o que sai dividido pelo que entra. Eficaz acerta o alvo, eficiente poupa a flecha, efetivo ganha a guerra.",

  licoes: [
    /* ------------------------------------------------------------ */
    {
      id: "m01-l1",
      titulo: "O que faz um Eng. de Produção",
      icone: "👷",
      blocos: [
        { tipo: "mapa", titulo: "Mapa do módulo", texto:
          "🏭 ENGENHARIA DE PRODUÇÃO\n" +
          "├ 🔴 O que é: projeta e melhora SISTEMAS\n" +
          "├ 📜 História: Taylor→Ford→Deming→Toyota\n" +
          "├ 🗂️ 10 áreas ABEPRO (O-L-P-Q-P-O-E-T-S-E)\n" +
          "├ 🔄 Entrada → Transformação → Saída\n" +
          "├ 🏷️ Processos: Projeto→Jobbing→Lotes\n" +
          "│              →Massa→Contínuo\n" +
          "├ 🎯 Objetivos: Q-R-C-F-C\n" +
          "├ 🪜 Decisão: Estratégico→Tático→Operac.\n" +
          "└ 🔵 Produtividade = Saídas ÷ Entradas" },
        { tipo: "recall", pergunta: "Se você tivesse que explicar sua profissão para sua avó em uma frase, o que diria?", resposta: "\"Eu faço as coisas funcionarem melhor, mais rápido e mais barato, sem perder a qualidade.\"" },
        { tipo: "conceito", titulo: "Definição", texto: "A Engenharia de Produção **projeta, melhora e implanta sistemas produtivos integrados** de pessoas, materiais, informação, equipamentos, energia e dinheiro." },
        { tipo: "texto", titulo: "Engenheiro do sistema", texto: "O engenheiro mecânico projeta **a máquina**.\nO engenheiro de produção projeta **como a fábrica inteira funciona** com aquela máquina dentro.\nEle enxerga o todo e as conexões entre as partes." },
        { tipo: "conceito", titulo: "Onde trabalha", texto: "Em qualquer lugar que **transforma algo** para um cliente: indústria, logística, varejo, hospitais, bancos, tecnologia, setor público, energia, consultoria." },
        { tipo: "dica", titulo: "Nomes de vaga", texto: "Procure também por: Analista de Processos, Analista de PCP, Melhoria Contínua, Supply Chain, Operações, Qualidade e Trainee." },
        { tipo: "dica", titulo: "Mercado", texto: "Registro no **CREA** para atuar como engenheiro(a). Habilidades mais pedidas: Excel avançado, Power BI, SQL/Python básico, Lean/Seis Sigma, gestão de projetos e comunicação." },
        { tipo: "atencao", titulo: "Erro comum em entrevista", texto: "Dizer \"sei Lean\" sem exemplo com número. O recrutador quer ouvir: **\"reduzi o setup de 40 para 18 minutos\"**." }
      ],
      questoes: [
        { id: "m01-q01", tipo: "multipla", pergunta: "Qual frase descreve MELHOR a Engenharia de Produção?",
          opcoes: ["Projeta máquinas e componentes mecânicos", "Projeta, melhora e implanta sistemas produtivos integrados", "Cuida apenas da contabilidade da fábrica", "Faz somente a manutenção dos equipamentos"],
          correta: 1, explicacao: "Ela integra pessoas, materiais, informação, equipamentos, energia e dinheiro em um SISTEMA. Projetar a máquina é papel típico do engenheiro mecânico." },
        { id: "m01-q02", tipo: "vf", pergunta: "Um hospital pode empregar um engenheiro de produção.",
          correta: true, explicacao: "Hospital é um sistema produtivo de serviço: tem entradas (pacientes), transformação (atendimento) e saídas (paciente tratado). Filas, escalas e estoques de medicamentos são problemas típicos da área." },
        { id: "m01-q03", tipo: "lacuna", pergunta: "Para atuar legalmente como engenheiro(a) no Brasil é preciso ter registro no ___.",
          opcoes: ["CREA", "CRC", "CRM", "INMETRO"], correta: 0, explicacao: "O sistema CONFEA/CREA regula a profissão. Assinar projetos técnicos exige ART (Anotação de Responsabilidade Técnica)." },
        { id: "m01-q04", tipo: "multipla", pergunta: "Numa entrevista, qual é a forma mais forte de mostrar que você sabe Lean?",
          opcoes: ["Dizer que fez um curso de Lean", "Listar todas as ferramentas Lean de memória", "Contar um problema real, a ferramenta usada e o resultado em número", "Dizer que a Toyota é a melhor empresa do mundo"],
          correta: 2, explicacao: "Problema → ferramenta → resultado medido. Ex.: \"reduzi o setup de 40 para 18 min com SMED\". Comece hoje seu portfólio de melhorias." },
        { id: "m01-q05", tipo: "vf", pergunta: "Engenharia de Produção só existe dentro de fábricas.",
          correta: false, explicacao: "Ela atua em qualquer sistema que transforma algo para um cliente: bancos, hospitais, e-commerce, setor público, tecnologia…" }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l2",
      titulo: "De onde veio: a história",
      icone: "📜",
      blocos: [
        { tipo: "recall", pergunta: "Você sabe quem foi Frederick Taylor?", resposta: "O \"pai\" da Administração Científica (1911): estudou o trabalho com método, mediu tempos e padronizou tarefas." },
        { tipo: "texto", titulo: "Revolução Industrial (séc. XVIII)", texto: "Surgem as fábricas. Adam Smith (1776) descreve a **divisão do trabalho** na fábrica de alfinetes." },
        { tipo: "conceito", titulo: "Taylor e os Gilbreth", texto: "**Taylor (1911)**: Administração Científica, estudo de **tempos**, padronização.\n**Frank e Lillian Gilbreth**: estudo de **movimentos** (therbligs)." },
        { tipo: "conceito", titulo: "Ford e Gantt", texto: "**Henry Ford (1913)**: linha de montagem móvel → **produção em massa**.\n**Henry Gantt**: o gráfico de Gantt para planejar atividades no tempo." },
        { tipo: "conceito", titulo: "Qualidade e Toyota", texto: "**Shewhart**: controle estatístico de processo.\n**Deming e Juran** (pós-guerra, Japão): qualidade como estratégia, ciclo PDCA.\n**Taiichi Ohno (Toyota)**: Sistema Toyota de Produção → base do **Lean**." },
        { tipo: "texto", titulo: "No Brasil e hoje", texto: "Primeiro curso no Brasil: **Poli-USP, 1958**.\nHoje: **Indústria 4.0**, dados, automação e sustentabilidade." },
        { tipo: "mnemonico", titulo: "Linha do tempo", texto: "**\"Tá Fácil De Otimizar\"** → Taylor, Ford, Deming, Ohno." },
        { tipo: "conexao", titulo: "Conexão com o curso", texto: "Taylor → Módulo 4 (Métodos) · Deming → Módulo 5 (Qualidade) · Toyota → Módulo 6 (Lean)." }
      ],
      questoes: [
        { id: "m01-q06", tipo: "ligar", pergunta: "Ligue cada personagem à sua contribuição:",
          pares: [["Taylor", "Administração Científica"], ["Ford", "Linha de montagem móvel"], ["Deming", "Qualidade e PDCA"], ["Taiichi Ohno", "Sistema Toyota de Produção"]],
          explicacao: "Taylor mediu o tempo, Ford montou a linha, Deming cuidou da qualidade e Ohno criou o Sistema Toyota (base do Lean)." },
        { id: "m01-q07", tipo: "ordenar", pergunta: "Coloque os marcos em ordem cronológica:",
          itens: ["Divisão do trabalho (Adam Smith)", "Administração Científica (Taylor)", "Linha de montagem (Ford)", "Sistema Toyota de Produção", "Indústria 4.0"],
          explicacao: "1776 → 1911 → 1913 → 1950-70 → 2011 em diante." },
        { id: "m01-q08", tipo: "multipla", pergunta: "O estudo de MOVIMENTOS (therbligs) é associado a:",
          opcoes: ["Henry Ford", "Frank e Lillian Gilbreth", "Henry Gantt", "Adam Smith"],
          correta: 1, explicacao: "Os Gilbreth focaram nos movimentos; Taylor, nos tempos. Juntos formam o \"estudo de tempos e movimentos\" (Módulo 4)." },
        { id: "m01-q09", tipo: "lacuna", pergunta: "O gráfico de barras usado para planejar atividades no tempo leva o nome de ___.",
          opcoes: ["Gantt", "Pareto", "Ishikawa", "Shewhart"], correta: 0, explicacao: "Henry Gantt, contemporâneo de Taylor. Você vai usá-lo muito em Gestão de Projetos (Módulo 2)." },
        { id: "m01-q10", tipo: "vf", pergunta: "O Lean Manufacturing tem origem no Sistema Toyota de Produção.",
          correta: true, explicacao: "O termo \"Lean\" foi popularizado nos anos 1990 (livro \"A Máquina que Mudou o Mundo\") para descrever o sistema criado na Toyota por Ohno e Toyoda." }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l3",
      titulo: "As 10 áreas da ABEPRO",
      icone: "🗂️",
      blocos: [
        { tipo: "recall", pergunta: "Quantas áreas da Engenharia de Produção a ABEPRO define? Consegue citar 3?", resposta: "São 10 áreas. Vamos a elas!" },
        { tipo: "conceito", titulo: "Áreas 1 a 5", texto: "**1. Operações e Processos da Produção** (PCP, métodos, layout)\n**2. Logística** (estoques, transporte, cadeia de suprimentos)\n**3. Pesquisa Operacional** (modelos matemáticos para decidir)\n**4. Qualidade** (controle, normas, estatística)\n**5. Produto** (desenvolvimento de produtos)" },
        { tipo: "conceito", titulo: "Áreas 6 a 10", texto: "**6. Organizacional** (estratégia, indicadores, inovação)\n**7. Econômica** (investimentos e custos)\n**8. do Trabalho** (ergonomia e segurança)\n**9. da Sustentabilidade** (ambiental, energia, social)\n**10. Educação em Eng. de Produção**" },
        { tipo: "bobo", titulo: "As 10 áreas na cozinha da Tia Cida", texto: "1. **Operações:** em que ordem fazer as panelas?\n2. **Logística:** quanto leite condensado ter no armário?\n3. **Pesquisa Operacional:** qual mix de sabores dá mais lucro?\n4. **Qualidade:** por que a última panela queimou?\n5. **Produto:** lançar o brigadeiro fit?\n6. **Organizacional:** ser a mais barata ou a mais gourmet?\n7. **Econômica:** vale comprar uma batedeira de R$ 800?\n8. **Trabalho:** o sobrinho enrola 300 brigadeiros com dor nas costas.\n9. **Sustentabilidade:** o que fazer com as embalagens?\n10. **Educação:** ensinar o sobrinho a enrolar do jeito padrão." },
        { tipo: "mnemonico", titulo: "Mnemônico O-L-P-Q-P-O-E-T-S-E", texto: "**\"Onde Logo Pesquisei Qual Produto O Engenheiro Traria Sem Erro\"**" },
        { tipo: "atencao", titulo: "Pegadinhas", texto: "Engenharia do **Trabalho** ≠ direito trabalhista (é ergonomia e segurança).\nPesquisa **Operacional** ≠ pesquisa de campo (é matemática para decidir).\n**Organizacional** = estratégia e gestão." },
        { tipo: "atencao", titulo: "Lean e Seis Sigma", texto: "Lean e Seis Sigma **não** são áreas da ABEPRO: são **abordagens** que atravessam várias áreas." }
      ],
      questoes: [
        { id: "m01-q11", tipo: "multipla", pergunta: "Quantas áreas a ABEPRO define para a Engenharia de Produção?",
          opcoes: ["5", "7", "10", "12"], correta: 2, explicacao: "São 10: \"Onde Logo Pesquisei Qual Produto O Engenheiro Traria Sem Erro\"." },
        { id: "m01-q12", tipo: "ligar", pergunta: "Ligue o problema à área da ABEPRO:",
          pares: [["Operador com dor nas costas", "Eng. do Trabalho"], ["Falta matéria-prima no armário", "Logística"], ["Vale comprar uma máquina nova?", "Eng. Econômica"], ["Qual mix de produtos dá mais lucro?", "Pesquisa Operacional"]],
          explicacao: "Ergonomia → Trabalho; estoques → Logística; investimento → Econômica; otimização matemática → Pesquisa Operacional." },
        { id: "m01-q13", tipo: "vf", pergunta: "Engenharia do Trabalho é a área que estuda direito trabalhista e contratos.",
          correta: false, explicacao: "Ela estuda ergonomia, segurança, higiene e organização do trabalho." },
        { id: "m01-q14", tipo: "multipla", pergunta: "Definir missão, visão, indicadores e estratégia da empresa pertence a qual área?",
          opcoes: ["Engenharia do Produto", "Engenharia Organizacional", "Logística", "Engenharia da Qualidade"],
          correta: 1, explicacao: "Engenharia Organizacional cuida de gestão estratégica, estrutura, indicadores, informação e inovação." },
        { id: "m01-q15", tipo: "lacuna", pergunta: "Otimização, simulação e teoria das filas fazem parte da área de ___.",
          opcoes: ["Pesquisa Operacional", "Engenharia do Produto", "Sustentabilidade", "Educação"], correta: 0,
          explicacao: "Pesquisa Operacional = modelos matemáticos para apoiar decisões (Módulo 9)." },
        { id: "m01-q16", tipo: "multipla", pergunta: "Qual destes NÃO é uma das 10 áreas da ABEPRO?",
          opcoes: ["Engenharia da Sustentabilidade", "Engenharia Lean", "Educação em Engenharia de Produção", "Engenharia do Produto"],
          correta: 1, explicacao: "Lean é uma abordagem/filosofia que usa várias áreas ao mesmo tempo; não é uma área formal da ABEPRO." }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l4",
      titulo: "Sistema de produção",
      icone: "🔄",
      blocos: [
        { tipo: "recall", pergunta: "Numa padaria, o que \"entra\" e o que \"sai\"?", resposta: "Entram farinha, ovos, pedidos (e clientes). Saem pães e atendimento." },
        { tipo: "conceito", titulo: "Input → Transformação → Output", texto: "**Entradas a transformar:** materiais, informações, clientes.\n**Recursos transformadores:** instalações e pessoas.\n**Saídas:** bens e serviços que geram valor." },
        { tipo: "bobo", titulo: "Fábrica de brigadeiros da Tia Cida", texto: "Entradas: leite condensado, chocolate, pedidos no WhatsApp.\nTransformadores: fogão, panela, Tia Cida e o sobrinho.\nSaída: brigadeiros + entrega na festa." },
        { tipo: "conceito", titulo: "Bens × Serviços", texto: "**Bens:** tangíveis, **estocáveis**, produção separada do consumo.\n**Serviços:** intangíveis, **não estocáveis**, produção e consumo **simultâneos**, alto contato com o cliente." },
        { tipo: "atencao", titulo: "Quase tudo é mistura", texto: "Restaurante = comida (bem) + atendimento (serviço). Por isso falamos em \"pacote de valor\"." },
        { tipo: "conexao", titulo: "Conexão", texto: "Esse modelo vira o **SIPOC** (Módulo 5) e o **VSM** (Módulo 6)." }
      ],
      questoes: [
        { id: "m01-q17", tipo: "multipla", pergunta: "No modelo Input-Transformação-Output, os FUNCIONÁRIOS de um hospital são:",
          opcoes: ["Entradas a serem transformadas", "Recursos transformadores", "Saídas", "Clientes"],
          correta: 1, explicacao: "Pessoas e instalações são recursos transformadores. Os PACIENTES é que são entradas transformadas." },
        { id: "m01-q18", tipo: "vf", pergunta: "Um assento vazio num voo que já decolou pode ser estocado para vender amanhã.",
          correta: false, explicacao: "Serviços não são estocáveis: a capacidade não usada se perde. Por isso capacidade e demanda são críticas em serviços." },
        { id: "m01-q19", tipo: "ligar", pergunta: "Classifique cada elemento de uma padaria:",
          pares: [["Farinha", "Entrada transformada"], ["Forno", "Recurso transformador"], ["Pão", "Saída"], ["Pedido de encomenda", "Informação (entrada)"]],
          explicacao: "Materiais e informação são transformados; forno (instalação) e padeiro (pessoa) transformam; o pão é a saída." },
        { id: "m01-q20", tipo: "multipla", pergunta: "Qual característica é típica de SERVIÇOS?",
          opcoes: ["Podem ser estocados", "Produção e consumo simultâneos", "Baixo contato com o cliente", "Qualidade fácil de medir"],
          correta: 1, explicacao: "O corte de cabelo é produzido e consumido ao mesmo tempo, com o cliente presente." },
        { id: "m01-q21", tipo: "lacuna", pergunta: "Materiais, informações e ___ são os três tipos de entradas a serem transformadas.",
          opcoes: ["clientes", "máquinas", "prédios", "impostos"], correta: 0,
          explicacao: "Em serviços como hospital e salão de beleza, o próprio cliente é transformado." }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l5",
      titulo: "Tipos de processo",
      icone: "🏷️",
      blocos: [
        { tipo: "conceito", titulo: "Volume × Variedade", texto: "Quanto **maior o volume**, **menor a variedade**. Do menor para o maior volume:\n**Projeto → Jobbing → Lotes → Massa → Contínuo**" },
        { tipo: "texto", titulo: "Exemplos (manufatura)", texto: "**Projeto:** navio, ponte, usina.\n**Jobbing:** ferramentaria, alfaiate.\n**Lotes:** confecção, peças usinadas.\n**Massa:** carros, geladeiras.\n**Contínuo:** refinaria, papel, cimento." },
        { tipo: "texto", titulo: "Serviços", texto: "**Serviços profissionais** (advogado, consultor) → **Loja de serviços** (banco, loja) → **Serviços de massa** (call center, metrô)." },
        { tipo: "mnemonico", titulo: "Mnemônicos", texto: "Manufatura: **\"Pra Já Levo Mais Coisa\"** (Projeto, Jobbing, Lotes, Massa, Contínuo).\nServiços: **\"o Padre Leva a Missa\"** (Profissional, Loja, Massa)." },
        { tipo: "dica", titulo: "Na prática", texto: "O tipo de processo define o layout, o tipo de PCP e até o perfil das pessoas. Sempre pergunte primeiro: **qual o volume e qual a variedade?**" }
      ],
      questoes: [
        { id: "m01-q22", tipo: "ordenar", pergunta: "Ordene do MENOR para o MAIOR volume de produção:",
          itens: ["Projeto", "Jobbing", "Lotes", "Massa", "Contínuo"], explicacao: "\"Pra Já Levo Mais Coisa\". Volume sobe, variedade desce." },
        { id: "m01-q23", tipo: "ligar", pergunta: "Ligue o exemplo ao tipo de processo:",
          pares: [["Refinaria de petróleo", "Contínuo"], ["Construção de um navio", "Projeto"], ["Montadora de geladeiras", "Massa"], ["Confecção que troca de modelo a cada 500 peças", "Lotes"]],
          explicacao: "Refinaria roda 24h sem parar (contínuo); navio é único (projeto); geladeira em linha (massa); confecção por bateladas (lotes)." },
        { id: "m01-q24", tipo: "multipla", pergunta: "Uma ferramentaria que faz moldes sob medida, em pequenas quantidades e muito variados, é um processo de:",
          opcoes: ["Massa", "Contínuo", "Jobbing", "Serviço de massa"], correta: 2,
          explicacao: "Jobbing: baixo volume, alta variedade, recursos compartilhados entre muitos pedidos diferentes." },
        { id: "m01-q25", tipo: "vf", pergunta: "Um call center de operadora de celular é um exemplo de serviço de massa.",
          correta: true, explicacao: "Alto volume de atendimentos, processos padronizados, pouca customização." }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l6",
      titulo: "Objetivos e níveis de decisão",
      icone: "🎯",
      blocos: [
        { tipo: "conceito", titulo: "5 objetivos de desempenho", texto: "**Qualidade** (fazer certo) · **Rapidez** (fazer rápido) · **Confiabilidade** (fazer no prazo) · **Flexibilidade** (ser capaz de mudar) · **Custo** (fazer barato)." },
        { tipo: "mnemonico", titulo: "Mnemônico", texto: "**\"Qual Rato Come Farinha Cara?\"** → Q-R-C-F-C." },
        { tipo: "atencao", titulo: "Rapidez ≠ Confiabilidade", texto: "A pizzaria que promete 90 min e entrega em 60 é **confiável**, mas não é **rápida**.\nRápido = chega logo. Confiável = chega quando prometeu." },
        { tipo: "conceito", titulo: "Níveis de decisão", texto: "**Estratégico** (anos): o que produzir, onde construir a fábrica.\n**Tático** (meses): quanto produzir por mês, quantos turnos.\n**Operacional** (dias/horas): ordem das tarefas na máquina hoje." },
        { tipo: "mnemonico", titulo: "E-T-O", texto: "**\"Enxergo, Traço, Opero\"** → Estratégico, Tático, Operacional." },
        { tipo: "dica", titulo: "Entrevista", texto: "Quando perguntarem \"que decisão você tomaria?\", comece dizendo **em qual nível** ela está. Mostra visão de sistema." }
      ],
      questoes: [
        { id: "m01-q26", tipo: "multipla", pergunta: "Uma transportadora que abastece uma montadora em Just in Time compete principalmente em:",
          opcoes: ["Custo", "Confiabilidade", "Flexibilidade de produto", "Qualidade estética"], correta: 1,
          explicacao: "No JIT a montadora tem pouco estoque: atrasar 1 hora pode parar a linha. Cumprir o prazo prometido é o principal." },
        { id: "m01-q27", tipo: "vf", pergunta: "Entregar ANTES do prazo prometido é a definição de confiabilidade.",
          correta: false, explicacao: "Confiabilidade é cumprir o que foi prometido. Entregar muito rápido é RAPIDEZ." },
        { id: "m01-q28", tipo: "ligar", pergunta: "Ligue a decisão ao nível:",
          pares: [["Abrir uma fábrica no Nordeste", "Estratégico"], ["Quantos turnos no próximo trimestre", "Tático"], ["Quem faz hora extra hoje", "Operacional"]],
          explicacao: "Anos → estratégico; meses → tático; dias/horas → operacional." },
        { id: "m01-q29", tipo: "lacuna", pergunta: "Qual Rato Come Farinha Cara: Qualidade, Rapidez, Confiabilidade, ___ e Custo.",
          opcoes: ["Flexibilidade", "Faturamento", "Fidelidade", "Função"], correta: 0,
          explicacao: "Flexibilidade = capacidade de mudar produto, volume, mix ou prazo." },
        { id: "m01-q30", tipo: "multipla", pergunta: "Uma companhia aérea low-cost compete principalmente em:",
          opcoes: ["Custo", "Flexibilidade", "Rapidez", "Qualidade de luxo"], correta: 0,
          explicacao: "O modelo de negócio é a passagem barata; tudo é desenhado para cortar custo." },
        { id: "m01-q31", tipo: "multipla", pergunta: "\"Definir o plano de produção mensal para os próximos 6 meses\" é uma decisão:",
          opcoes: ["Estratégica", "Tática", "Operacional", "Pessoal"], correta: 1,
          explicacao: "Médio prazo (meses) e uso dos recursos existentes → tática. No PCP (Módulo 3) isso vira o Plano Agregado." }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l7",
      titulo: "Produtividade e eficiência",
      icone: "📈",
      blocos: [
        { tipo: "formula", titulo: "Produtividade", texto: "**Produtividade = Saídas ÷ Entradas**\nParcial: um recurso (peças/hora-homem).\nTotal: todas as entradas (em R$)." },
        { tipo: "formula", titulo: "Variação", texto: "**Variação (%) = (P atual − P anterior) ÷ P anterior × 100**\nEx.: 50 → 60 peças/operador = **+20%**." },
        { tipo: "atencao", titulo: "Produzir mais ≠ ser mais produtivo", texto: "Se as saídas subiram 50% e as entradas subiram 60%, a produtividade **caiu**." },
        { tipo: "conceito", titulo: "Eficácia × Eficiência × Efetividade", texto: "**Eficácia:** atingir o objetivo (a coisa certa).\n**Eficiência:** usar bem os recursos (fazer certo a coisa).\n**Efetividade:** gerar impacto duradouro (eficaz + eficiente)." },
        { tipo: "formula", titulo: "Eficiência operacional", texto: "**Eficiência (%) = Produção real ÷ Produção padrão × 100**\nEx.: padrão de 1.800 peças/turno, produziu 1.710 → **95%**." },
        { tipo: "mnemonico", titulo: "Rima", texto: "**\"Eficaz acerta o alvo, eficiente poupa a flecha, efetivo ganha a guerra.\"**" },
        { tipo: "bobo", titulo: "Tia Cida", texto: "Antes: 200 brigadeiros em 4 h = 50/h.\nCom batedeira: 300 em 4 h = 75/h → **+50%** de produtividade." }
      ],
      questoes: [
        { id: "m01-q32", tipo: "calculo", pergunta: "Uma linha fazia 1.200 peças/turno com 10 operadores. Após um Kaizen, faz 1.380 peças/turno com os mesmos 10. Qual a variação de produtividade (%)?",
          resposta: 15, tolerancia: 0.5, unidade: "%",
          resolucao: "Antes: 1200 ÷ 10 = 120 peças/operador.\nDepois: 1380 ÷ 10 = 138 peças/operador.\nVariação = (138 − 120) ÷ 120 × 100 = 15%.",
          explicacao: "Mesmo número de pessoas produzindo mais = aumento de produtividade da mão de obra." },
        { id: "m01-q33", tipo: "calculo", pergunta: "A produção subiu de 1.000 para 1.500 un/mês, mas as horas trabalhadas foram de 2.000 para 3.200 h. Qual a variação da produtividade (%)? (use sinal negativo se caiu)",
          resposta: -6.25, tolerancia: 0.3, unidade: "%",
          resolucao: "Antes: 1000 ÷ 2000 = 0,50 un/h.\nDepois: 1500 ÷ 3200 = 0,46875 un/h.\nVariação = (0,46875 − 0,50) ÷ 0,50 × 100 = −6,25%.",
          explicacao: "Produção +50%, horas +60% → produtividade caiu. Produzir mais não é o mesmo que ser mais produtivo." },
        { id: "m01-q34", tipo: "calculo", pergunta: "Uma padaria fez 900 pães usando 6 horas-homem. Qual a produtividade em pães por hora-homem?",
          resposta: 150, tolerancia: 0.5, unidade: "pães/h·h",
          resolucao: "Produtividade = Saídas ÷ Entradas = 900 ÷ 6 = 150 pães por hora-homem.",
          explicacao: "É uma produtividade PARCIAL, pois considera só o recurso mão de obra." },
        { id: "m01-q35", tipo: "multipla", pergunta: "A linha bateu a meta de 800 peças, mas gastou 20% a mais de horas extras que o previsto. Ela foi:",
          opcoes: ["Eficaz e eficiente", "Eficaz, mas não eficiente", "Eficiente, mas não eficaz", "Nem eficaz nem eficiente"], correta: 1,
          explicacao: "Atingiu o objetivo (eficaz), mas usou recursos demais (não eficiente)." },
        { id: "m01-q36", tipo: "vf", pergunta: "Eficiência é \"fazer a coisa certa\" e eficácia é \"fazer certo a coisa\".",
          correta: false, explicacao: "É o contrário: EFICÁCIA = fazer a coisa certa (objetivo); EFICIÊNCIA = fazer certo a coisa (recursos)." }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l8",
      titulo: "Caso: 1º dia na Doces Serra",
      icone: "🏭",
      blocos: [
        { tipo: "serio", titulo: "O cenário", texto: "A Tia Cida cresceu: agora é a **Doces Serra Ltda.**, 120 funcionários, 3 linhas (brigadeiro, bombom, trufa), vendendo para 2 redes de supermercados.\nVocê é o(a) novo(a) **Engenheiro(a) de Produção Júnior**.\nO diretor: *\"Temos atrasos, muito refugo e o custo subiu. Se vira.\"*" },
        { tipo: "serio", titulo: "Passos 1 a 3", texto: "**1. Entender o sistema:** desenhar Input → Transformação → Output e ir ao chão de fábrica (Gemba). Não propor nada ainda.\n**2. Descobrir em que a empresa compete:** prazo? preço? variedade?\n**3. Levantar números:** produtividade, % no prazo, % refugo, custo/kg." },
        { tipo: "serio", titulo: "Passos 4 a 7", texto: "**4. Classificar problemas por área** da ABEPRO.\n**5. Separar níveis de decisão.**\n**6. Priorizar** (Pareto, Módulo 5) e abrir um projeto (TAP, Módulo 2).\n**7. Medir de novo** e mostrar o resultado em R$." },
        { tipo: "dica", titulo: "Regra de ouro", texto: "**Sem número não existe melhoria, só opinião.** Meça antes e depois." }
      ],
      questoes: [
        { id: "m01-q37", tipo: "caso", contexto: "Você acabou de entrar na Doces Serra. O diretor quer resultados rápidos para atrasos, refugo e custo alto.",
          pergunta: "Qual deve ser seu PRIMEIRO passo?",
          opcoes: ["Comprar uma máquina nova para a linha de bombom", "Entender o sistema: mapear o fluxo e ir ao chão de fábrica", "Demitir os operadores da linha com mais refugo", "Implantar Seis Sigma em todas as linhas imediatamente"],
          correta: 1, explicacao: "Antes de propor, entenda o sistema e colete dados. Soluções sem diagnóstico costumam atacar o sintoma e não a causa." },
        { id: "m01-q38", tipo: "caso", contexto: "Na Doces Serra, os operadores da embalagem relatam dor no punho e o refugo dessa etapa é o maior da fábrica.",
          pergunta: "Qual a leitura MAIS completa, com visão de sistema?",
          opcoes: ["É só problema de qualidade: trocar a máquina", "É só problema de RH: treinar de novo", "Ergonomia (Trabalho) pode estar causando erros (Qualidade) que elevam o custo (Econômica)", "É problema de Logística: falta embalagem"],
          correta: 2, explicacao: "Postura ruim → fadiga → erros → refugo → custo. As áreas se conectam; o engenheiro de produção enxerga a cadeia inteira." },
        { id: "m01-q39", tipo: "caso", contexto: "O comercial conta que as redes de supermercado multam a Doces Serra quando a entrega atrasa, mesmo que por algumas horas.",
          pergunta: "Qual objetivo de desempenho deve ser priorizado?",
          opcoes: ["Confiabilidade", "Flexibilidade de produto", "Custo", "Rapidez"],
          correta: 0, explicacao: "Multa por atraso = o cliente valoriza cumprir o prazo prometido → confiabilidade." },
        { id: "m01-q40", tipo: "ordenar", pergunta: "Ordene os passos do seu plano de primeiro mês:",
          itens: ["Entender o sistema e ir ao chão de fábrica", "Descobrir em que a empresa compete", "Levantar indicadores (números)", "Priorizar o problema e abrir um projeto", "Medir de novo e mostrar o resultado"],
          explicacao: "Entender → objetivo → medir → priorizar/agir → medir de novo. É o raciocínio de um PDCA (Módulo 5)." }
      ]
    }
    /* ------------------------------------------------------------ */
    ,{
      id: "m01-l9",
      titulo: "👾 Chefão do Módulo 1",
      icone: "👾",
      blocos: [
        { tipo: "texto", titulo: "Hora do chefão!", texto: "Esta lição **mistura tudo** o que você viu no módulo (intercalação). Misturar assuntos dá mais trabalho, mas fixa muito mais." },
        { tipo: "conceito", titulo: "✅ Você só avança se souber…", texto: "• Explicar o que faz um engenheiro de produção\n• Citar as **10 áreas da ABEPRO**\n• Contar a linha do tempo Taylor → Ford → Deming → Toyota\n• Desenhar **Entrada → Transformação → Saída**\n• Diferenciar **bens × serviços**\n• Ordenar os **tipos de processo**\n• Citar os **5 objetivos** (rapidez ≠ confiabilidade)\n• Classificar decisões **E-T-O**\n• Calcular **produtividade** e sua variação\n• Diferenciar **eficácia, eficiência e efetividade**" },
        { tipo: "dica", titulo: "Estratégia", texto: "Errou alguma? Ela volta na aba 🔁 Revisar amanhã (D+1). Não tente decorar a resposta: tente entender o **porquê** da explicação." }
      ],
      questoes: [
        { id: "m01-q41", tipo: "ligar", pergunta: "Ligue o mnemônico ao que ele ajuda a lembrar:",
          pares: [["Onde Logo Pesquisei Qual Produto…", "10 áreas da ABEPRO"], ["Qual Rato Come Farinha Cara?", "5 objetivos de desempenho"], ["Pra Já Levo Mais Coisa", "Tipos de processo"], ["Enxergo, Traço, Opero", "Níveis de decisão"]],
          explicacao: "Os mnemônicos organizam listas longas. Repita-os em voz alta no ônibus!" },
        { id: "m01-q42", tipo: "calculo", pergunta: "O padrão da linha é 1.800 peças por turno. Hoje ela produziu 1.710. Qual a eficiência operacional (%)?",
          resposta: 95, tolerancia: 0.5, unidade: "%",
          resolucao: "Eficiência = Produção real ÷ Produção padrão × 100\n= 1710 ÷ 1800 × 100 = 95%.",
          explicacao: "Eficiência compara o que foi feito com o que deveria ser feito com os mesmos recursos." },
        { id: "m01-q43", tipo: "caso", contexto: "Num hospital, o pronto-socorro tem espera média de 3h40. 60% dos pacientes chegam entre 18h e 23h, mas a escala de médicos é igual em todos os horários.",
          pergunta: "Qual a ação mais alinhada à Engenharia de Produção?",
          opcoes: ["Contratar o dobro de médicos para todos os horários", "Ajustar a escala à curva de chegada, reforçando 18h-23h", "Pedir aos pacientes que não venham à noite", "Comprar mais cadeiras para a sala de espera"],
          correta: 1, explicacao: "Casar capacidade com demanda (área de Operações; filas → Pesquisa Operacional). Dobrar tudo aumenta o custo; cadeiras tratam o sintoma." },
        { id: "m01-q44", tipo: "vf", pergunta: "Se a produção subiu 50% e as horas trabalhadas subiram 60%, a produtividade da mão de obra aumentou.",
          correta: false, explicacao: "Caiu cerca de 6%: as entradas cresceram mais que as saídas. Produzir mais ≠ ser mais produtivo." },
        { id: "m01-q45", tipo: "ordenar", pergunta: "Ordene as decisões do MAIOR para o MENOR horizonte de tempo:",
          itens: ["Construir uma nova fábrica (estratégica)", "Definir turnos do próximo trimestre (tática)", "Sequenciar as ordens de amanhã (operacional)"],
          explicacao: "Estratégico (anos) → Tático (meses) → Operacional (dias/horas)." },
        { id: "m01-q46", tipo: "lacuna", pergunta: "Numa refinaria, que funciona 24h com fluxo ininterrupto, o tipo de processo é ___.",
          opcoes: ["contínuo", "jobbing", "por projeto", "em lotes"], correta: 0,
          explicacao: "Contínuo: altíssimo volume, pouquíssima variedade, sem parar." },
        { id: "m01-q47", tipo: "multipla", pergunta: "Qual área da ABEPRO cuida de missão, visão, indicadores (KPIs) e estrutura da empresa?",
          opcoes: ["Engenharia do Trabalho", "Engenharia Organizacional", "Engenharia do Produto", "Logística"], correta: 1,
          explicacao: "Engenharia Organizacional = gestão estratégica, organizacional e de desempenho (Módulo 11)." }
      ]
    }
  ],

  /* ------------------------------------------------------------ */
  flashcards: [
    { id: "m01-f01", frente: "O que faz a Engenharia de Produção?", verso: "Projeta, melhora e implanta sistemas produtivos integrados (pessoas, materiais, informação, equipamentos, energia e dinheiro)." },
    { id: "m01-f02", frente: "Mnemônico das 10 áreas da ABEPRO", verso: "\"Onde Logo Pesquisei Qual Produto O Engenheiro Traria Sem Erro\"" },
    { id: "m01-f03", frente: "10 áreas da ABEPRO", verso: "Operações, Logística, Pesquisa Operacional, Qualidade, Produto, Organizacional, Econômica, Trabalho, Sustentabilidade, Educação." },
    { id: "m01-f04", frente: "Engenharia do Trabalho estuda…", verso: "Ergonomia, segurança, higiene e organização do trabalho (NÃO é direito trabalhista)." },
    { id: "m01-f05", frente: "Pesquisa Operacional é…", verso: "Uso de modelos matemáticos para apoiar decisões: otimização, simulação, filas." },
    { id: "m01-f06", frente: "Taylor (1911)", verso: "Administração Científica: estudo de tempos e padronização do trabalho." },
    { id: "m01-f07", frente: "Ford (1913)", verso: "Linha de montagem móvel → produção em massa." },
    { id: "m01-f08", frente: "Taiichi Ohno", verso: "Sistema Toyota de Produção → base do Lean." },
    { id: "m01-f09", frente: "Modelo de sistema de produção", verso: "Entradas (materiais, informações, clientes) → Transformação (instalações e pessoas) → Saídas (bens e serviços)." },
    { id: "m01-f10", frente: "3 diferenças entre bens e serviços", verso: "Serviços são intangíveis, não estocáveis e produzidos/consumidos ao mesmo tempo (alto contato com cliente)." },
    { id: "m01-f11", frente: "Tipos de processo (manufatura), menor → maior volume", verso: "Projeto → Jobbing → Lotes → Massa → Contínuo (\"Pra Já Levo Mais Coisa\")." },
    { id: "m01-f12", frente: "Tipos de processo em serviços", verso: "Serviços profissionais → Loja de serviços → Serviços de massa." },
    { id: "m01-f13", frente: "5 objetivos de desempenho", verso: "Qualidade, Rapidez, Confiabilidade, Flexibilidade, Custo (\"Qual Rato Come Farinha Cara?\")." },
    { id: "m01-f14", frente: "Rapidez × Confiabilidade", verso: "Rapidez = entregar logo. Confiabilidade = entregar quando prometeu." },
    { id: "m01-f15", frente: "Níveis de decisão", verso: "Estratégico (anos) → Tático (meses) → Operacional (dias/horas)." },
    { id: "m01-f16", frente: "Fórmula da produtividade", verso: "Produtividade = Saídas ÷ Entradas." },
    { id: "m01-f17", frente: "Variação da produtividade", verso: "(P atual − P anterior) ÷ P anterior × 100." },
    { id: "m01-f18", frente: "Eficácia × Eficiência × Efetividade", verso: "Eficaz acerta o alvo, eficiente poupa a flecha, efetivo ganha a guerra." },
    { id: "m01-f19", frente: "Primeiro curso de Eng. de Produção no Brasil", verso: "Escola Politécnica da USP, 1958." },
    { id: "m01-f21", frente: "Fórmula da eficiência operacional", verso: "Produção real ÷ Produção padrão × 100." },
    { id: "m01-f22", frente: "Entradas transformadas × recursos transformadores", verso: "Transformadas: materiais, informações, clientes. Transformadores: instalações e pessoas." },
    { id: "m01-f20", frente: "Regra de ouro da melhoria", verso: "Sem número não existe melhoria, só opinião: meça antes e depois." }
  ]
});
