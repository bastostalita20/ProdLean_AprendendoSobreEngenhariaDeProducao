/* =====================================================================
   MÓDULO 1 — FUNDAMENTOS DA ENGENHARIA DE PRODUÇÃO
   ---------------------------------------------------------------------
   Este arquivo contém SÓ conteúdo (nenhuma lógica do app).
   Em 3 níveis (Fácil, Médio, Difícil): o conteúdo original virou o nível
   Fácil e cada lição ganhou os níveis Médio e Difícil (veja modulo-02.js).

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
      objetivos: {
        facil: ["Definir Engenharia de Produção em uma frase", "Citar setores onde o engenheiro de produção atua", "Reconhecer vagas típicas da área"],
        medio: ["Relacionar funções típicas às entregas e aos indicadores de cada uma", "Diferenciar competências técnicas e comportamentais exigidas", "Explicar a regulação profissional (Confea/Crea, ART, atribuições)"],
        dificil: ["Explicar a subotimização e por que a visão de sistema evita soluções locais ruins", "Analisar dilemas éticos típicos da profissão", "Planejar o próprio desenvolvimento de carreira (perfil em T) com evidências"]
      },
      prerequisitos: [],
      resumo: {
        facil: "A Engenharia de Produção **projeta, melhora e implanta sistemas produtivos integrados** (pessoas, materiais, informação, equipamentos, energia e dinheiro). Atua em qualquer lugar que transforma algo para um cliente: indústria, logística, saúde, bancos, serviços públicos.",
        medio: "Cada função tem **entregas e indicadores**: o analista de PCP entrega o plano e responde pela aderência e pelo nível de serviço; o de qualidade, pelos defeitos; o de melhoria contínua, pelos ganhos medidos. A profissão é regulada pelo sistema **Confea/Crea**, com registro e **ART** quando há responsabilidade técnica.",
        dificil: "O valor do engenheiro de produção está em evitar a **subotimização**: melhorar uma parte piorando o todo. Isso exige visão de sistema, dados e ética (segurança, integridade dos indicadores). A carreira costuma seguir um **perfil em T**: base ampla e uma ou duas especialidades profundas."
      },
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
        { nivel: "facil", tipo: "recall", pergunta: "Se você tivesse que explicar sua profissão para sua avó em uma frase, o que diria?", resposta: "\"Eu faço as coisas funcionarem melhor, mais rápido e mais barato, sem perder a qualidade.\"" },
        { nivel: "facil", tipo: "conceito", titulo: "Definição", texto: "A Engenharia de Produção **projeta, melhora e implanta sistemas produtivos integrados** de pessoas, materiais, informação, equipamentos, energia e dinheiro." },
        { nivel: "facil", tipo: "texto", titulo: "Engenheiro do sistema", texto: "O engenheiro mecânico projeta **a máquina**.\nO engenheiro de produção projeta **como a fábrica inteira funciona** com aquela máquina dentro.\nEle enxerga o todo e as conexões entre as partes." },
        { nivel: "facil", tipo: "conceito", titulo: "Onde trabalha", texto: "Em qualquer lugar que **transforma algo** para um cliente: indústria, logística, varejo, hospitais, bancos, tecnologia, setor público, energia, consultoria." },
        { nivel: "facil", tipo: "dica", titulo: "Nomes de vaga", texto: "Procure também por: Analista de Processos, Analista de PCP, Melhoria Contínua, Supply Chain, Operações, Qualidade e Trainee." },
        { nivel: "facil", tipo: "dica", titulo: "Mercado", texto: "Registro no **CREA** para atuar como engenheiro(a). Habilidades mais pedidas: Excel avançado, Power BI, SQL/Python básico, Lean/Seis Sigma, gestão de projetos e comunicação." },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum em entrevista", texto: "Dizer \"sei Lean\" sem exemplo com número. O recrutador quer ouvir: **\"reduzi o setup de 40 para 18 minutos\"**." },
        { nivel: "medio", tipo: "contexto", titulo: "Por que isso importa", texto: "Saber **o que cada função entrega** e **como é medida** ajuda a escolher estágios, montar o currículo e conversar com gestores na linguagem deles." },
        { nivel: "medio", tipo: "conceito", titulo: "Funções, entregas e indicadores", texto: "| Função | Entrega principal | Indicador típico |\n|---|---|---|\n| PCP | Plano de produção e materiais | Aderência ao plano, OTIF |\n| Processos/Métodos | Método e tempo padrão | Produtividade, tempo de ciclo |\n| Qualidade | Controle e melhoria da qualidade | % defeitos, reclamações |\n| Logística | Estoques e distribuição | Giro, custo logístico, OTIF |\n| Melhoria contínua | Projetos de melhoria | Ganho medido em R$ |" },
        { nivel: "medio", tipo: "conceito", titulo: "Competências", texto: "**Técnicas:** estatística, planilhas e dados, PCP, qualidade, custos, modelagem.\n**Comportamentais:** comunicação, trabalho em equipe, liderança, negociação, visão sistêmica.\nAs Diretrizes Curriculares Nacionais das engenharias (Resolução CNE/CES nº 2/2019) organizam a formação por **competências**, incluindo as comportamentais." },
        { nivel: "medio", tipo: "conceito", titulo: "Regulação profissional", texto: "O exercício da engenharia é regulado pelo sistema **Confea/Crea**. Para atuar como engenheiro é preciso **registro no Crea**; trabalhos com responsabilidade técnica exigem **ART** (Anotação de Responsabilidade Técnica). As atribuições do engenheiro de produção são definidas em resolução do Confea (Resolução nº 235/1975)." },
        { nivel: "medio", tipo: "serio", titulo: "Na empresa", texto: "Na Doces Serra, a analista de PCP apresenta toda segunda-feira: aderência da semana anterior (92%), pedidos atrasados e causas. Sem esses números, a reunião vira troca de opiniões." },
        { nivel: "dificil", tipo: "conceito", titulo: "Subotimização", texto: "**Subotimizar** é melhorar uma parte e piorar o sistema. Exemplos:\n• Compras compra lote enorme para ganhar desconto → estoque e vencimentos.\n• Uma máquina roda sem parar para aumentar a “eficiência” local → estoque parado na frente do gargalo.\n• Vendas promete prazo impossível → hora extra e atrasos em outros pedidos.\nO engenheiro de produção olha o **resultado do sistema** (lead time, custo total, serviço ao cliente)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Dilemas éticos", texto: "• Liberar lote fora de especificação para cumprir prazo.\n• “Ajustar” um indicador para bater meta.\n• Reduzir custo retirando proteção de máquina.\nO Código de Ética Profissional do sistema Confea/Crea orienta a priorizar a segurança, a saúde e o interesse público; integridade dos dados é inegociável." },
        { nivel: "dificil", tipo: "dica", titulo: "Carreira em T", texto: "**Barra horizontal:** visão ampla das áreas (PCP, qualidade, custos, pessoas).\n**Barra vertical:** profundidade em uma ou duas (ex.: dados + PCP).\nMonte um **portfólio de evidências**: problema → método → resultado medido → aprendizado." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• SLACK, N.; BRANDON-JONES, A.; JOHNSTON, R. *Administração da Produção*. Atlas.\n• BATALHA, M. O. (org.). *Introdução à Engenharia de Produção*. Elsevier.\n• ABEPRO — Associação Brasileira de Engenharia de Produção (portal institucional)." }
      ],
      questoes: [
        { id: "m01-q01", nivel: "facil", tipo: "multipla", pergunta: "Qual frase descreve MELHOR a Engenharia de Produção?",
          opcoes: ["Projeta máquinas e componentes mecânicos", "Projeta, melhora e implanta sistemas produtivos integrados", "Cuida apenas da contabilidade da fábrica", "Faz somente a manutenção dos equipamentos"],
          correta: 1, explicacao: "Ela integra pessoas, materiais, informação, equipamentos, energia e dinheiro em um SISTEMA. Projetar a máquina é papel típico do engenheiro mecânico." },
        { id: "m01-q02", nivel: "facil", tipo: "vf", pergunta: "Um hospital pode empregar um engenheiro de produção.",
          correta: true, explicacao: "Hospital é um sistema produtivo de serviço: tem entradas (pacientes), transformação (atendimento) e saídas (paciente tratado). Filas, escalas e estoques de medicamentos são problemas típicos da área." },
        { id: "m01-q03", nivel: "facil", tipo: "lacuna", pergunta: "Para atuar legalmente como engenheiro(a) no Brasil é preciso ter registro no ___.",
          opcoes: ["CREA", "CRC", "CRM", "INMETRO"], correta: 0, explicacao: "O sistema CONFEA/CREA regula a profissão. Assinar projetos técnicos exige ART (Anotação de Responsabilidade Técnica)." },
        { id: "m01-q04", nivel: "facil", tipo: "multipla", pergunta: "Numa entrevista, qual é a forma mais forte de mostrar que você sabe Lean?",
          opcoes: ["Dizer que fez um curso de Lean", "Listar todas as ferramentas Lean de memória", "Contar um problema real, a ferramenta usada e o resultado em número", "Dizer que a Toyota é a melhor empresa do mundo"],
          correta: 2, explicacao: "Problema → ferramenta → resultado medido. Ex.: \"reduzi o setup de 40 para 18 min com SMED\". Comece hoje seu portfólio de melhorias." },
        { id: "m01-q05", nivel: "facil", tipo: "vf", pergunta: "Engenharia de Produção só existe dentro de fábricas.",
          correta: false, explicacao: "Ela atua em qualquer sistema que transforma algo para um cliente: bancos, hospitais, e-commerce, setor público, tecnologia…" },
        { id: "m01-q48", nivel: "medio", tipo: "ligar", pergunta: "Ligue a função ao indicador mais típico:",
          pares: [["Analista de PCP", "Aderência ao plano / OTIF"], ["Analista de qualidade", "% de defeitos e reclamações"], ["Analista de logística", "Giro de estoque e custo logístico"], ["Melhoria contínua", "Ganho medido em R$"]],
          explicacao: "Cada função responde por entregas e números diferentes." },
        { id: "m01-q49", nivel: "medio", tipo: "multipla", pergunta: "Um engenheiro vai assinar o projeto de um novo layout com responsabilidade técnica. O que é exigido?",
          opcoes: ["Nada, basta o diploma", "Registro no Crea e ART do serviço", "Apenas autorização do diretor", "Registro no CRA"], correta: 1,
          explicacao: "Registro profissional e Anotação de Responsabilidade Técnica." },
        { id: "m01-q50", nivel: "medio", tipo: "vf", pergunta: "Comunicação e trabalho em equipe fazem parte das competências esperadas do engenheiro, e não apenas as técnicas.",
          correta: true, explicacao: "As DCN de 2019 organizam a formação por competências, incluindo as comportamentais." },
        { id: "m01-q51", nivel: "medio", tipo: "multipla", pergunta: "Na reunião semanal, qual apresentação do PCP é mais útil para a decisão?",
          opcoes: ["“A semana foi boa”", "Aderência de 92%, 6 pedidos atrasados, 4 deles por falta de embalagem", "Lista de todas as ordens sem análise", "Opinião dos supervisores"], correta: 1,
          explicacao: "Número + causa principal permitem agir." },
        { id: "m01-q52", nivel: "dificil", tipo: "caso", contexto: "Compras conseguiu 12% de desconto comprando um ano inteiro de embalagens de uma vez. Seis meses depois, parte das embalagens está obsoleta (mudou o design) e o armazém está lotado.",
          pergunta: "Como classificar a decisão?",
          opcoes: ["Ótima: o desconto foi alto", "Subotimização: ganho local (preço) com perda no sistema (estoque, obsolescência, espaço)", "Problema só do marketing", "Decisão sem impacto"], correta: 1,
          justificativas: ["O desconto não considerou custos de estoque e obsolescência.", "Visão de custo total evita isso.", "O marketing mudou o design, mas a decisão de lote foi de compras sem visão do sistema.", "Houve impacto em custo e espaço."],
          explicacao: "Olhe o custo total e o sistema, não só o indicador da área." },
        { id: "m01-q53", nivel: "dificil", tipo: "vf", pergunta: "Maximizar a eficiência de cada máquina isoladamente sempre maximiza o resultado da fábrica.",
          correta: false, explicacao: "Máquinas fora do gargalo produzindo sem parar geram estoque, não produção vendida." },
        { id: "m01-q54", nivel: "dificil", tipo: "multipla", pergunta: "O que caracteriza um perfil profissional “em T”?",
          opcoes: ["Saber só de uma área", "Visão ampla de várias áreas e profundidade em uma ou duas", "Trabalhar em turnos", "Ter muitos certificados sem prática"], correta: 1,
          explicacao: "Base ampla + especialidade." },
        { id: "m01-q55", nivel: "dificil", tipo: "discursiva", pergunta: "Seu gestor pede para “arredondar” o índice de refugo do mês para baixo, porque a meta é 2% e o real foi 2,6%. Como você responde, de forma ética e útil?",
          respostaModelo: "Não altero o dado: o indicador precisa refletir a realidade para orientar decisões, e a integridade da informação é dever profissional. Proponho apresentar o valor real (2,6%) junto com a **análise de causas** (Pareto dos defeitos), as **ações já em andamento** e a previsão de quando voltaremos à meta. Assim a gestão mostra controle do problema sem falsear dados.",
          criterios: ["Recusa a alteração do dado", "Justifica pela integridade/ética", "Propõe apresentar causas e plano de ação", "Mantém postura colaborativa com o gestor"] }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l2",
      titulo: "De onde veio: a história",
      icone: "📜",
      objetivos: {
        facil: ["Ordenar os principais marcos da história da Engenharia de Produção", "Associar Taylor, Ford, Deming e Ohno às suas contribuições", "Situar o primeiro curso no Brasil"],
        medio: ["Explicar o problema que cada paradigma resolveu (artesanal, massa, enxuta)", "Relacionar Hawthorne e a escola de Relações Humanas ao fator humano", "Conectar cada marco a ferramentas usadas hoje"],
        dificil: ["Analisar críticas ao taylorismo e ao fordismo", "Explicar por que a variedade derrubou a produção em massa rígida", "Avaliar criticamente modismos de gestão (inclusive a Indústria 4.0)"]
      },
      prerequisitos: [{ texto: "O que faz um Eng. de Produção", licao: "m01-l1" }],
      resumo: {
        facil: "**Taylor** mediu o tempo, **Ford** montou a linha, **Deming** cuidou da qualidade e a **Toyota (Ohno)** ensinou a cortar o desperdício. No Brasil, o primeiro curso foi na **Poli-USP (1958)**.",
        medio: "Três paradigmas: **artesanal** (variedade, alto custo), **em massa** (escala, baixo custo, pouca variedade) e **enxuta** (variedade com baixo custo, qualidade na fonte). Os estudos de **Hawthorne** mostraram que fatores sociais afetam a produtividade.",
        dificil: "O taylorismo foi criticado por separar planejar de executar e **desqualificar** o trabalho (Braverman); o fordismo, pela **rigidez** diante da demanda por variedade (a GM de Sloan ganhou mercado oferecendo modelos e cores). Cada “nova onda” deve ser avaliada por evidências, não por moda."
      },
      blocos: [
        { nivel: "facil", tipo: "recall", pergunta: "Você sabe quem foi Frederick Taylor?", resposta: "O \"pai\" da Administração Científica (1911): estudou o trabalho com método, mediu tempos e padronizou tarefas." },
        { nivel: "facil", tipo: "texto", titulo: "Revolução Industrial (séc. XVIII)", texto: "Surgem as fábricas. Adam Smith (1776) descreve a **divisão do trabalho** na fábrica de alfinetes." },
        { nivel: "facil", tipo: "conceito", titulo: "Taylor e os Gilbreth", texto: "**Taylor (1911)**: Administração Científica, estudo de **tempos**, padronização.\n**Frank e Lillian Gilbreth**: estudo de **movimentos** (therbligs)." },
        { nivel: "facil", tipo: "conceito", titulo: "Ford e Gantt", texto: "**Henry Ford (1913)**: linha de montagem móvel → **produção em massa**.\n**Henry Gantt**: o gráfico de Gantt para planejar atividades no tempo." },
        { nivel: "facil", tipo: "conceito", titulo: "Qualidade e Toyota", texto: "**Shewhart**: controle estatístico de processo.\n**Deming e Juran** (pós-guerra, Japão): qualidade como estratégia, ciclo PDCA.\n**Taiichi Ohno (Toyota)**: Sistema Toyota de Produção → base do **Lean**." },
        { nivel: "facil", tipo: "texto", titulo: "No Brasil e hoje", texto: "Primeiro curso no Brasil: **Poli-USP, 1958**.\nHoje: **Indústria 4.0**, dados, automação e sustentabilidade." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Linha do tempo", texto: "**\"Tá Fácil De Otimizar\"** → Taylor, Ford, Deming, Ohno." },
        { nivel: "facil", tipo: "conexao", titulo: "Conexão com o curso", texto: "Taylor → Módulo 4 (Métodos) · Deming → Módulo 5 (Qualidade) · Toyota → Módulo 6 (Lean)." },
        { nivel: "medio", tipo: "conceito", titulo: "Três paradigmas de produção", texto: "| Paradigma | Força | Fraqueza |\n|---|---|---|\n| Artesanal | Variedade, sob medida | Custo alto, pouco volume |\n| Em massa (Ford) | Escala, custo baixo | Pouca variedade, estoques |\n| Enxuta (Toyota) | Variedade com custo baixo, qualidade | Exige estabilidade e disciplina |\nWomack, Jones e Roos (*A Máquina que Mudou o Mundo*, 1990) popularizaram essa comparação." },
        { nivel: "medio", tipo: "conceito", titulo: "Hawthorne e o fator humano", texto: "Nos estudos de Hawthorne (Western Electric, anos 1920–30), conduzidos com participação de Elton Mayo, a produtividade mudava com fatores **sociais** (atenção, grupo), não só físicos (iluminação). Deu origem à **Escola de Relações Humanas** e ao olhar para motivação e equipes." },
        { nivel: "medio", tipo: "conexao", titulo: "Da história às ferramentas de hoje", texto: "Taylor → cronoanálise e tempo padrão (Módulo 4).\nGantt → cronogramas de projeto (Módulo 2) e programação da produção (Módulo 3).\nShewhart/Deming → CEP e PDCA (Módulo 5).\nOhno → kanban, JIT, jidoka (Módulo 6)." },
        { nivel: "medio", tipo: "bobo", titulo: "Três jeitos de fazer bolo", texto: "**Artesanal:** a confeiteira faz cada bolo sob encomenda, lindo e caro.\n**Massa:** a fábrica faz 10 mil bolos de chocolate iguais por dia, barato.\n**Enxuta:** a padaria faz vários sabores em pequenas fornadas, sem sobras, conforme a venda do dia." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Críticas ao taylorismo", texto: "• Separação entre quem **planeja** e quem **executa**: desperdiça o conhecimento dos trabalhadores.\n• **Desqualificação** do trabalho e perda de sentido (Braverman, *Trabalho e Capital Monopolista*, 1974).\n• Intensificação do ritmo e riscos à saúde.\nAbordagens atuais (Lean, sociotécnica) tentam recuperar a participação." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites do fordismo", texto: "O Modelo T era barato, mas praticamente igual para todos. Nos anos 1920, a **General Motors**, sob Alfred Sloan, ganhou mercado com vários modelos, faixas de preço e trocas anuais. Lição: **escala sem flexibilidade** perde quando o cliente passa a valorizar variedade." },
        { nivel: "dificil", tipo: "conceito", titulo: "Como avaliar “ondas” de gestão", texto: "Perguntas úteis diante de uma novidade (Indústria 4.0, IA, novas metodologias):\n1. Que **problema** ela resolve aqui?\n2. Há **evidências** independentes de resultado?\n3. Quais **pré-requisitos** (dados, processos estáveis, pessoas)?\n4. Como **medir** se funcionou?" },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• TAYLOR, F. W. *Princípios de Administração Científica*. Atlas.\n• WOMACK, J. P.; JONES, D. T.; ROOS, D. *A Máquina que Mudou o Mundo*. Campus/Elsevier.\n• BRAVERMAN, H. *Trabalho e Capital Monopolista*. Zahar.\n• OHNO, T. *O Sistema Toyota de Produção*. Bookman." }
      ],
      questoes: [
        { id: "m01-q06", nivel: "facil", tipo: "ligar", pergunta: "Ligue cada personagem à sua contribuição:",
          pares: [["Taylor", "Administração Científica"], ["Ford", "Linha de montagem móvel"], ["Deming", "Qualidade e PDCA"], ["Taiichi Ohno", "Sistema Toyota de Produção"]],
          explicacao: "Taylor mediu o tempo, Ford montou a linha, Deming cuidou da qualidade e Ohno criou o Sistema Toyota (base do Lean)." },
        { id: "m01-q07", nivel: "facil", tipo: "ordenar", pergunta: "Coloque os marcos em ordem cronológica:",
          itens: ["Divisão do trabalho (Adam Smith)", "Administração Científica (Taylor)", "Linha de montagem (Ford)", "Sistema Toyota de Produção", "Indústria 4.0"],
          explicacao: "1776 → 1911 → 1913 → 1950-70 → 2011 em diante." },
        { id: "m01-q08", nivel: "facil", tipo: "multipla", pergunta: "O estudo de MOVIMENTOS (therbligs) é associado a:",
          opcoes: ["Henry Ford", "Frank e Lillian Gilbreth", "Henry Gantt", "Adam Smith"],
          correta: 1, explicacao: "Os Gilbreth focaram nos movimentos; Taylor, nos tempos. Juntos formam o \"estudo de tempos e movimentos\" (Módulo 4)." },
        { id: "m01-q09", nivel: "facil", tipo: "lacuna", pergunta: "O gráfico de barras usado para planejar atividades no tempo leva o nome de ___.",
          opcoes: ["Gantt", "Pareto", "Ishikawa", "Shewhart"], correta: 0, explicacao: "Henry Gantt, contemporâneo de Taylor. Você vai usá-lo muito em Gestão de Projetos (Módulo 2)." },
        { id: "m01-q10", nivel: "facil", tipo: "vf", pergunta: "O Lean Manufacturing tem origem no Sistema Toyota de Produção.",
          correta: true, explicacao: "O termo \"Lean\" foi popularizado nos anos 1990 (livro \"A Máquina que Mudou o Mundo\") para descrever o sistema criado na Toyota por Ohno e Toyoda." },
        { id: "m01-q56", nivel: "medio", tipo: "ligar", pergunta: "Ligue o paradigma à característica:",
          pares: [["Artesanal", "Sob medida, custo alto"], ["Em massa", "Escala e custo baixo, pouca variedade"], ["Enxuta", "Variedade com custo baixo e qualidade na fonte"]],
          explicacao: "Três paradigmas de produção." },
        { id: "m01-q57", nivel: "medio", tipo: "multipla", pergunta: "Qual foi a principal conclusão associada aos estudos de Hawthorne?",
          opcoes: ["A iluminação é o único fator de produtividade", "Fatores sociais e a atenção aos trabalhadores influenciam o desempenho", "A linha de montagem é sempre melhor", "Salário é a única motivação"], correta: 1,
          explicacao: "Origem da Escola de Relações Humanas." },
        { id: "m01-q58", nivel: "medio", tipo: "ligar", pergunta: "Ligue o marco histórico à ferramenta usada hoje:",
          pares: [["Taylor", "Cronoanálise e tempo padrão"], ["Gantt", "Cronogramas e programação"], ["Shewhart", "Cartas de controle (CEP)"], ["Ohno", "Kanban e JIT"]],
          explicacao: "A história explica o porquê das ferramentas." },
        { id: "m01-q59", nivel: "medio", tipo: "vf", pergunta: "A produção enxuta busca oferecer variedade com custo baixo, algo que a produção em massa rígida tinha dificuldade em fazer.",
          correta: true, explicacao: "Lotes pequenos, setups rápidos e qualidade na fonte." },
        { id: "m01-q60", nivel: "dificil", tipo: "multipla", pergunta: "Qual é uma crítica central ao taylorismo?",
          opcoes: ["Usar dados demais", "Separar quem planeja de quem executa, desqualificando o trabalho", "Ser flexível demais", "Não medir tempos"], correta: 1,
          explicacao: "Braverman e outros autores discutem essa desqualificação." },
        { id: "m01-q61", nivel: "dificil", tipo: "caso", contexto: "Nos anos 1920, a Ford vendia o Modelo T praticamente igual para todos. A GM passou a oferecer vários modelos e faixas de preço.",
          pergunta: "Qual a lição para a estratégia de operações?",
          opcoes: ["Variedade nunca importa", "Quando o cliente passa a valorizar variedade, escala sem flexibilidade perde competitividade", "Custo baixo garante liderança para sempre", "A Ford não tinha linha de montagem"], correta: 1,
          explicacao: "O objetivo de desempenho valorizado pelo mercado mudou." },
        { id: "m01-q62", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene as perguntas para avaliar uma “nova onda” de gestão:",
          itens: ["Que problema ela resolve aqui?", "Há evidências independentes de resultado?", "Quais pré-requisitos ela exige?", "Como vamos medir se funcionou?"],
          explicacao: "Evidência antes de moda." },
        { id: "m01-q63", nivel: "dificil", tipo: "discursiva", pergunta: "Compare a produção em massa e a produção enxuta quanto a estoques, variedade e papel das pessoas.",
          respostaModelo: "**Massa:** lotes grandes e estoques altos para aproveitar escala; pouca variedade; pessoas executam tarefas padronizadas e fragmentadas definidas por especialistas. **Enxuta:** lotes pequenos e estoques baixos (estoque esconde problemas); variedade maior graças a setups rápidos; pessoas executam e **melhoram** o processo (kaizen, jidoka). A enxuta exige estabilidade e disciplina; a massa é mais rígida diante da variação da demanda.",
          criterios: ["Compara estoques", "Compara variedade/flexibilidade", "Compara o papel das pessoas", "Menciona requisitos ou limitações"] }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l3",
      titulo: "As 10 áreas da ABEPRO",
      icone: "🗂️",
      objetivos: {
        facil: ["Citar as 10 áreas da ABEPRO", "Associar problemas simples a cada área", "Diferenciar áreas de abordagens (Lean, Seis Sigma)"],
        medio: ["Relacionar subáreas e ferramentas típicas de cada área", "Mostrar como um mesmo problema envolve várias áreas", "Escolher a área de uma vaga ou projeto pela sua descrição"],
        dificil: ["Estruturar um problema complexo em causas de várias áreas", "Montar a equipe de um projeto multidisciplinar", "Avaliar em que áreas aprofundar a própria carreira"]
      },
      prerequisitos: [{ texto: "O que faz um Eng. de Produção", licao: "m01-l1" }],
      resumo: {
        facil: "São **10 áreas**: Operações, Logística, Pesquisa Operacional, Qualidade, Produto, Organizacional, Econômica, Trabalho, Sustentabilidade e Educação (“Onde Logo Pesquisei Qual Produto O Engenheiro Traria Sem Erro”). Lean e Seis Sigma são **abordagens**, não áreas.",
        medio: "Cada área tem ferramentas típicas: Operações (PCP, métodos, layout), Logística (estoques, transporte), PO (programação linear, simulação, filas), Qualidade (CEP, ISO 9001), Produto (QFD, DFM), Organizacional (estratégia, BSC), Econômica (VPL, custos), Trabalho (NR-17, segurança), Sustentabilidade (ISO 14001, ACV). Problemas reais **atravessam áreas**.",
        dificil: "Problemas complexos têm causas em várias áreas ao mesmo tempo; tratar só uma delas costuma deslocar o problema. Projetos eficazes montam equipes multidisciplinares e medem o resultado no sistema."
      },
      blocos: [
        { nivel: "facil", tipo: "recall", pergunta: "Quantas áreas da Engenharia de Produção a ABEPRO define? Consegue citar 3?", resposta: "São 10 áreas. Vamos a elas!" },
        { nivel: "facil", tipo: "conceito", titulo: "Áreas 1 a 5", texto: "**1. Operações e Processos da Produção** (PCP, métodos, layout)\n**2. Logística** (estoques, transporte, cadeia de suprimentos)\n**3. Pesquisa Operacional** (modelos matemáticos para decidir)\n**4. Qualidade** (controle, normas, estatística)\n**5. Produto** (desenvolvimento de produtos)" },
        { nivel: "facil", tipo: "conceito", titulo: "Áreas 6 a 10", texto: "**6. Organizacional** (estratégia, indicadores, inovação)\n**7. Econômica** (investimentos e custos)\n**8. do Trabalho** (ergonomia e segurança)\n**9. da Sustentabilidade** (ambiental, energia, social)\n**10. Educação em Eng. de Produção**" },
        { nivel: "facil", tipo: "bobo", titulo: "As 10 áreas na cozinha da Tia Cida", texto: "1. **Operações:** em que ordem fazer as panelas?\n2. **Logística:** quanto leite condensado ter no armário?\n3. **Pesquisa Operacional:** qual mix de sabores dá mais lucro?\n4. **Qualidade:** por que a última panela queimou?\n5. **Produto:** lançar o brigadeiro fit?\n6. **Organizacional:** ser a mais barata ou a mais gourmet?\n7. **Econômica:** vale comprar uma batedeira de R$ 800?\n8. **Trabalho:** o sobrinho enrola 300 brigadeiros com dor nas costas.\n9. **Sustentabilidade:** o que fazer com as embalagens?\n10. **Educação:** ensinar o sobrinho a enrolar do jeito padrão." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Mnemônico O-L-P-Q-P-O-E-T-S-E", texto: "**\"Onde Logo Pesquisei Qual Produto O Engenheiro Traria Sem Erro\"**" },
        { nivel: "facil", tipo: "atencao", titulo: "Pegadinhas", texto: "Engenharia do **Trabalho** ≠ direito trabalhista (é ergonomia e segurança).\nPesquisa **Operacional** ≠ pesquisa de campo (é matemática para decidir).\n**Organizacional** = estratégia e gestão." },
        { nivel: "facil", tipo: "atencao", titulo: "Lean e Seis Sigma", texto: "Lean e Seis Sigma **não** são áreas da ABEPRO: são **abordagens** que atravessam várias áreas." },
        { nivel: "medio", tipo: "conceito", titulo: "Ferramentas típicas por área", texto: "| Área | Exemplos de ferramentas |\n|---|---|\n| Operações | PCP, MRP, cronoanálise, layout, balanceamento |\n| Logística | Curva ABC, lote econômico, roteirização |\n| Pesquisa Operacional | Programação linear, simulação, filas |\n| Qualidade | CEP, Pareto, ISO 9001, Seis Sigma |\n| Produto | QFD, DFM/DFA, FMEA |\n| Organizacional | SWOT, BSC, gestão por processos |\n| Econômica | VPL, TIR, custeio, payback |\n| Trabalho | NR-17, AET, NR-12, análise de riscos |\n| Sustentabilidade | ISO 14001, ACV, P+L |\n| Educação | Ensino, treinamento, extensão |" },
        { nivel: "medio", tipo: "serio", titulo: "Um problema, várias áreas", texto: "Atraso na entrega de bombons:\n• **Operações:** plano de produção irreal.\n• **Logística:** falta de embalagem.\n• **Qualidade:** lote retido por defeito.\n• **Trabalho:** absenteísmo por dores.\n• **Econômica:** multa contratual.\nResolver só uma causa não resolve o atraso." },
        { nivel: "medio", tipo: "dica", titulo: "Lendo uma vaga", texto: "“Analista de S&OP” → Operações + Organizacional. “Analista de supply chain” → Logística + PO. “Técnico de SGI” → Qualidade + Sustentabilidade + Trabalho. Leia as **atividades**, não só o título." },
        { nivel: "dificil", tipo: "conceito", titulo: "Mapeando causas entre áreas", texto: "Use perguntas por área para não esquecer causas:\n• O processo é capaz? (Qualidade)\n• O plano cabe na capacidade? (Operações)\n• Os materiais chegam a tempo? (Logística)\n• As pessoas conseguem trabalhar bem? (Trabalho)\n• A decisão se paga? (Econômica)\n• A estrutura e os incentivos ajudam? (Organizacional)" },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites da classificação", texto: "As 10 áreas organizam o conhecimento, mas **o mundo não vem dividido em áreas**. Classificar demais pode criar silos (“isso não é da minha área”). Use as áreas como checklist, não como fronteira." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• ABEPRO. Áreas e subáreas da Engenharia de Produção (portal da associação).\n• BATALHA, M. O. (org.). *Introdução à Engenharia de Produção*. Elsevier." }
      ],
      questoes: [
        { id: "m01-q11", nivel: "facil", tipo: "multipla", pergunta: "Quantas áreas a ABEPRO define para a Engenharia de Produção?",
          opcoes: ["5", "7", "10", "12"], correta: 2, explicacao: "São 10: \"Onde Logo Pesquisei Qual Produto O Engenheiro Traria Sem Erro\"." },
        { id: "m01-q12", nivel: "facil", tipo: "ligar", pergunta: "Ligue o problema à área da ABEPRO:",
          pares: [["Operador com dor nas costas", "Eng. do Trabalho"], ["Falta matéria-prima no armário", "Logística"], ["Vale comprar uma máquina nova?", "Eng. Econômica"], ["Qual mix de produtos dá mais lucro?", "Pesquisa Operacional"]],
          explicacao: "Ergonomia → Trabalho; estoques → Logística; investimento → Econômica; otimização matemática → Pesquisa Operacional." },
        { id: "m01-q13", nivel: "facil", tipo: "vf", pergunta: "Engenharia do Trabalho é a área que estuda direito trabalhista e contratos.",
          correta: false, explicacao: "Ela estuda ergonomia, segurança, higiene e organização do trabalho." },
        { id: "m01-q14", nivel: "facil", tipo: "multipla", pergunta: "Definir missão, visão, indicadores e estratégia da empresa pertence a qual área?",
          opcoes: ["Engenharia do Produto", "Engenharia Organizacional", "Logística", "Engenharia da Qualidade"],
          correta: 1, explicacao: "Engenharia Organizacional cuida de gestão estratégica, estrutura, indicadores, informação e inovação." },
        { id: "m01-q15", nivel: "facil", tipo: "lacuna", pergunta: "Otimização, simulação e teoria das filas fazem parte da área de ___.",
          opcoes: ["Pesquisa Operacional", "Engenharia do Produto", "Sustentabilidade", "Educação"], correta: 0,
          explicacao: "Pesquisa Operacional = modelos matemáticos para apoiar decisões (Módulo 9)." },
        { id: "m01-q16", nivel: "facil", tipo: "multipla", pergunta: "Qual destes NÃO é uma das 10 áreas da ABEPRO?",
          opcoes: ["Engenharia da Sustentabilidade", "Engenharia Lean", "Educação em Engenharia de Produção", "Engenharia do Produto"],
          correta: 1, explicacao: "Lean é uma abordagem/filosofia que usa várias áreas ao mesmo tempo; não é uma área formal da ABEPRO." },
        { id: "m01-q64", nivel: "medio", tipo: "ligar", pergunta: "Ligue a ferramenta à área da ABEPRO:",
          pares: [["Programação linear", "Pesquisa Operacional"], ["QFD", "Engenharia do Produto"], ["VPL e TIR", "Engenharia Econômica"], ["Análise Ergonômica do Trabalho", "Engenharia do Trabalho"]],
          explicacao: "Cada área tem suas ferramentas típicas." },
        { id: "m01-q65", nivel: "medio", tipo: "multipla", pergunta: "Uma vaga de “analista de SGI” (qualidade, meio ambiente e segurança) envolve principalmente quais áreas?",
          opcoes: ["Só Econômica", "Qualidade, Sustentabilidade e Trabalho", "Só Pesquisa Operacional", "Só Produto"], correta: 1,
          explicacao: "Sistema de gestão integrado." },
        { id: "m01-q66", nivel: "medio", tipo: "vf", pergunta: "Um atraso de entrega pode ter causas em Operações, Logística, Qualidade e Trabalho ao mesmo tempo.",
          correta: true, explicacao: "Problemas reais atravessam as áreas." },
        { id: "m01-q67", nivel: "medio", tipo: "multipla", pergunta: "Implantar a ISO 14001 numa fábrica é tarefa principalmente de qual área?",
          opcoes: ["Engenharia da Sustentabilidade", "Pesquisa Operacional", "Engenharia do Produto", "Educação"], correta: 0,
          explicacao: "Gestão ambiental." },
        { id: "m01-q68", nivel: "dificil", tipo: "caso", contexto: "O refugo da embalagem subiu. A gerência quer comprar uma máquina nova (R$ 400 mil). Você nota que os operadores trabalham com o punho torcido e que o treinamento foi reduzido.",
          pergunta: "Qual abordagem é mais adequada?",
          opcoes: ["Comprar a máquina imediatamente", "Investigar causas em várias áreas (Trabalho, Qualidade, Organizacional) antes de investir, comparando alternativas pelo custo e pelo efeito", "Demitir os operadores", "Ignorar, o refugo é normal"], correta: 1,
          justificativas: ["Pode não atacar a causa e custa caro.", "Visão multidisciplinar com dados.", "Não resolve causas de processo e ergonomia.", "Refugo crescente é sinal de problema."],
          explicacao: "Causas em várias áreas; decisão econômica depois do diagnóstico." },
        { id: "m01-q69", nivel: "dificil", tipo: "vf", pergunta: "Usar as 10 áreas como fronteiras rígidas (“isso não é da minha área”) ajuda a resolver problemas complexos.",
          correta: false, explicacao: "Cria silos; use as áreas como checklist." },
        { id: "m01-q70", nivel: "dificil", tipo: "discursiva", pergunta: "Monte a equipe (por áreas) de um projeto para reduzir em 30% os atrasos de entrega da Doces Serra e justifique cada participante.",
          respostaModelo: "**PCP/Operações:** plano e capacidade (líder técnico). **Logística:** materiais e expedição. **Qualidade:** retenções e defeitos que atrasam lotes. **Trabalho/segurança:** absenteísmo e ergonomia na embalagem. **Comercial/Organizacional:** prazos prometidos e prioridades dos clientes. **Econômica/controladoria:** custo das multas e das alternativas. Patrocinador da diretoria, meta (−30%), indicador (OTIF) e cronograma.",
          criterios: ["Inclui ao menos quatro áreas pertinentes", "Justifica cada participante", "Define meta e indicador", "Menciona patrocínio ou liderança"] }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l4",
      titulo: "Sistema de produção",
      icone: "🔄",
      objetivos: {
        facil: ["Descrever o modelo entrada → transformação → saída", "Diferenciar recursos transformados e transformadores", "Diferenciar bens e serviços"],
        medio: ["Montar um SIPOC de um processo", "Analisar uma operação pelos 4 Vs", "Explicar o papel da realimentação (controle)"],
        dificil: ["Explicar as particularidades da gestão de serviços (capacidade perecível, variabilidade do cliente)", "Analisar operações de frente e de retaguarda", "Discutir os limites do modelo linear e a servitização"]
      },
      prerequisitos: [{ texto: "As 10 áreas da ABEPRO", licao: "m01-l3" }],
      resumo: {
        facil: "Todo sistema de produção transforma **entradas** (materiais, informações, clientes) usando **recursos transformadores** (instalações e pessoas) em **saídas** (bens e serviços). Serviços são intangíveis, não estocáveis e produzidos junto com o consumo.",
        medio: "O **SIPOC** detalha o sistema: fornecedores, entradas, processo, saídas e clientes. Os **4 Vs** (volume, variedade, variação da demanda e visibilidade) explicam por que operações diferentes têm custos e desafios diferentes. A **realimentação** compara o resultado com o objetivo e corrige o processo.",
        dificil: "Em serviços, a capacidade **não se estoca** e o cliente traz **variabilidade**; separar **linha de frente** (contato) e **retaguarda** (processamento) ajuda a combinar atendimento e eficiência. O modelo linear é uma simplificação: empresas combinam bens e serviços (**servitização**) e interagem com o ambiente como sistemas abertos."
      },
      blocos: [
        { nivel: "facil", tipo: "recall", pergunta: "Numa padaria, o que \"entra\" e o que \"sai\"?", resposta: "Entram farinha, ovos, pedidos (e clientes). Saem pães e atendimento." },
        { nivel: "facil", tipo: "conceito", titulo: "Input → Transformação → Output", texto: "**Entradas a transformar:** materiais, informações, clientes.\n**Recursos transformadores:** instalações e pessoas.\n**Saídas:** bens e serviços que geram valor." },
        { nivel: "facil", tipo: "bobo", titulo: "Fábrica de brigadeiros da Tia Cida", texto: "Entradas: leite condensado, chocolate, pedidos no WhatsApp.\nTransformadores: fogão, panela, Tia Cida e o sobrinho.\nSaída: brigadeiros + entrega na festa." },
        { nivel: "facil", tipo: "conceito", titulo: "Bens × Serviços", texto: "**Bens:** tangíveis, **estocáveis**, produção separada do consumo.\n**Serviços:** intangíveis, **não estocáveis**, produção e consumo **simultâneos**, alto contato com o cliente." },
        { nivel: "facil", tipo: "atencao", titulo: "Quase tudo é mistura", texto: "Restaurante = comida (bem) + atendimento (serviço). Por isso falamos em \"pacote de valor\"." },
        { nivel: "facil", tipo: "conexao", titulo: "Conexão", texto: "Esse modelo vira o **SIPOC** (Módulo 5) e o **VSM** (Módulo 6)." },
        { nivel: "medio", tipo: "conceito", titulo: "SIPOC", texto: "**S**uppliers (fornecedores) → **I**nputs (entradas) → **P**rocess (processo, 4 a 7 etapas) → **O**utputs (saídas) → **C**ustomers (clientes).\nMostra o sistema numa linha e define as **fronteiras** do problema antes de mergulhar nos detalhes." },
        { nivel: "medio", tipo: "exemplo", titulo: "SIPOC do bombom", texto: "**S:** fornecedores de cacau, açúcar, embalagem.\n**I:** chocolate, recheio, caixas, pedidos.\n**P:** preparar recheio → moldar → banhar → resfriar → embalar.\n**O:** caixas de bombom, nota fiscal.\n**C:** redes de supermercado, consumidor final." },
        { nivel: "medio", tipo: "conceito", titulo: "Os 4 Vs", texto: "**Volume:** alto volume → repetição, especialização, custo unitário menor.\n**Variedade:** alta variedade → flexibilidade, custo maior.\n**Variação da demanda:** picos → capacidade ociosa ou falta.\n**Visibilidade:** quanto o cliente vê do processo → exige habilidades de atendimento.\nRegra geral: volume alto e os outros três baixos tendem a dar **custo menor**." },
        { nivel: "medio", tipo: "conceito", titulo: "Realimentação e controle", texto: "O sistema compara a **saída real** com o **objetivo** (meta de produção, especificação) e usa a diferença para **corrigir** o processo. É a ideia do controle da produção, do CEP e do PDCA." },
        { nivel: "dificil", tipo: "conceito", titulo: "Particularidades dos serviços", texto: "• **Capacidade perecível:** hora de consulta vaga não volta.\n• **Cliente como entrada:** traz variabilidade (chega quando quer, pede coisas diferentes).\n• **Qualidade percebida** depende da experiência, não só do resultado.\n• Estratégias: gerenciar a demanda (agendamento, preços por horário) e flexibilizar a capacidade (escalas, autosserviço)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Linha de frente × retaguarda", texto: "**Linha de frente (front office):** contato com o cliente, alta visibilidade, foco em atendimento e flexibilidade.\n**Retaguarda (back office):** processamento sem o cliente, pode ser padronizada e otimizada como uma fábrica.\nEx.: banco — caixa e gerente (frente) × compensação de cheques e crédito (retaguarda)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites do modelo", texto: "O modelo entrada-transformação-saída é **linear e simplificado**: sistemas reais têm várias saídas (inclusive resíduos e emissões), interagem com o ambiente e com outras empresas (cadeia). A **servitização** (vender o uso ou o resultado, com serviços agregados, em vez de só o produto) mistura bens e serviços no mesmo pacote de valor." }
      ],
      questoes: [
        { id: "m01-q17", nivel: "facil", tipo: "multipla", pergunta: "No modelo Input-Transformação-Output, os FUNCIONÁRIOS de um hospital são:",
          opcoes: ["Entradas a serem transformadas", "Recursos transformadores", "Saídas", "Clientes"],
          correta: 1, explicacao: "Pessoas e instalações são recursos transformadores. Os PACIENTES é que são entradas transformadas." },
        { id: "m01-q18", nivel: "facil", tipo: "vf", pergunta: "Um assento vazio num voo que já decolou pode ser estocado para vender amanhã.",
          correta: false, explicacao: "Serviços não são estocáveis: a capacidade não usada se perde. Por isso capacidade e demanda são críticas em serviços." },
        { id: "m01-q19", nivel: "facil", tipo: "ligar", pergunta: "Classifique cada elemento de uma padaria:",
          pares: [["Farinha", "Entrada transformada"], ["Forno", "Recurso transformador"], ["Pão", "Saída"], ["Pedido de encomenda", "Informação (entrada)"]],
          explicacao: "Materiais e informação são transformados; forno (instalação) e padeiro (pessoa) transformam; o pão é a saída." },
        { id: "m01-q20", nivel: "facil", tipo: "multipla", pergunta: "Qual característica é típica de SERVIÇOS?",
          opcoes: ["Podem ser estocados", "Produção e consumo simultâneos", "Baixo contato com o cliente", "Qualidade fácil de medir"],
          correta: 1, explicacao: "O corte de cabelo é produzido e consumido ao mesmo tempo, com o cliente presente." },
        { id: "m01-q21", nivel: "facil", tipo: "lacuna", pergunta: "Materiais, informações e ___ são os três tipos de entradas a serem transformadas.",
          opcoes: ["clientes", "máquinas", "prédios", "impostos"], correta: 0,
          explicacao: "Em serviços como hospital e salão de beleza, o próprio cliente é transformado." },
        { id: "m01-q71", nivel: "medio", tipo: "ordenar", pergunta: "Ordene as letras do SIPOC:",
          itens: ["Suppliers (fornecedores)", "Inputs (entradas)", "Process (processo)", "Outputs (saídas)", "Customers (clientes)"],
          explicacao: "Mostra o sistema numa linha e define fronteiras." },
        { id: "m01-q72", nivel: "medio", tipo: "multipla", pergunta: "Qual combinação dos 4 Vs tende a gerar o MENOR custo unitário?",
          opcoes: ["Volume alto, variedade baixa, pouca variação e baixa visibilidade", "Volume baixo, variedade alta, muita variação e alta visibilidade", "Volume baixo e visibilidade alta", "Variedade alta e volume alto"], correta: 0,
          explicacao: "Repetição e estabilidade reduzem custo." },
        { id: "m01-q73", nivel: "medio", tipo: "ligar", pergunta: "Ligue o “V” ao exemplo:",
          pares: [["Volume", "Fábrica de refrigerante com milhões de latas/mês"], ["Variedade", "Gráfica que faz convites personalizados"], ["Variação da demanda", "Loja de fantasias antes do Carnaval"], ["Visibilidade", "Restaurante com cozinha aberta"]],
          explicacao: "Os 4 Vs caracterizam a operação." },
        { id: "m01-q74", nivel: "medio", tipo: "vf", pergunta: "Na realimentação, a diferença entre o resultado real e o objetivo é usada para corrigir o processo.",
          correta: true, explicacao: "Base do controle da produção e do PDCA." },
        { id: "m01-q75", nivel: "dificil", tipo: "multipla", pergunta: "Numa clínica, as consultas vagas das 14h não podem ser “guardadas” para as 18h, quando há fila. Qual estratégia ataca esse problema?",
          opcoes: ["Estocar consultas", "Gerenciar a demanda (agendamento, incentivos para horários vazios) e ajustar a capacidade (escalas)", "Aumentar o preço de todos os horários", "Nada pode ser feito"], correta: 1,
          explicacao: "Capacidade perecível exige casar oferta e demanda." },
        { id: "m01-q76", nivel: "dificil", tipo: "ligar", pergunta: "Classifique as atividades de um banco:",
          pares: [["Atendimento do gerente", "Linha de frente"], ["Análise de crédito", "Retaguarda"], ["Compensação de pagamentos", "Retaguarda"], ["Caixa da agência", "Linha de frente"]],
          explicacao: "Retaguarda pode ser padronizada como uma fábrica." },
        { id: "m01-q77", nivel: "dificil", tipo: "vf", pergunta: "Um fabricante que passa a vender “horas de compressor funcionando” com manutenção incluída, em vez do compressor, é um exemplo de servitização.",
          correta: true, explicacao: "Vende o uso/resultado com serviço agregado." },
        { id: "m01-q78", nivel: "dificil", tipo: "discursiva", pergunta: "Aplique o modelo de sistema de produção a um pronto-socorro e identifique uma particularidade de serviço que afeta a gestão.",
          respostaModelo: "**Entradas:** pacientes (transformados), informações (exames, histórico), materiais (medicamentos). **Transformadores:** médicos, enfermeiros, equipamentos, instalações. **Saídas:** pacientes tratados, encaminhamentos, registros; também resíduos hospitalares. **Particularidade:** a capacidade não se estoca e a chegada dos pacientes varia muito ao longo do dia; é preciso ajustar escalas à curva de chegada e priorizar por gravidade (triagem). Há alta visibilidade: a experiência do paciente importa.",
          criterios: ["Identifica entradas transformadas e transformadores", "Identifica saídas", "Aponta uma particularidade de serviço (capacidade perecível, variabilidade, visibilidade)", "Relaciona a particularidade a uma ação de gestão"] }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l5",
      titulo: "Tipos de processo",
      icone: "🏷️",
      objetivos: {
        facil: ["Ordenar os tipos de processo por volume", "Dar exemplos de cada tipo", "Citar os tipos de processo em serviços"],
        medio: ["Relacionar o tipo de processo ao layout, às pessoas e ao custo unitário", "Posicionar uma operação na matriz produto-processo", "Justificar o tipo de processo pelo volume e pela variedade"],
        dificil: ["Explicar os riscos de operar fora da diagonal da matriz", "Analisar customização em massa e processos híbridos", "Discutir a mudança do processo ao longo do ciclo de vida do produto"]
      },
      prerequisitos: [{ texto: "Sistema de produção", licao: "m01-l4" }],
      resumo: {
        facil: "Do menor ao maior volume: **projeto, jobbing, lotes, massa e contínuo** (“Pra Já Levo Mais Coisa”). Em serviços: **profissionais, loja de serviços, serviços de massa**. Mais volume, menos variedade.",
        medio: "O tipo de processo define **layout** (posicional → funcional → celular → linha), perfil das pessoas (generalistas → especializadas), tecnologia (universal → dedicada) e **custo unitário** (alto → baixo). A **matriz produto-processo** (Hayes e Wheelwright) liga volume/variedade ao processo adequado.",
        dificil: "Operar **fora da diagonal** gera custos: alta variedade num processo rígido (perde flexibilidade) ou baixo volume num processo dedicado (capacidade ociosa). **Customização em massa** e processos **híbridos** (módulos em massa, montagem sob pedido) buscam o melhor dos dois. O processo muda com o **ciclo de vida** do produto."
      },
      blocos: [
        { nivel: "facil", tipo: "conceito", titulo: "Volume × Variedade", texto: "Quanto **maior o volume**, **menor a variedade**. Do menor para o maior volume:\n**Projeto → Jobbing → Lotes → Massa → Contínuo**" },
        { nivel: "facil", tipo: "texto", titulo: "Exemplos (manufatura)", texto: "**Projeto:** navio, ponte, usina.\n**Jobbing:** ferramentaria, alfaiate.\n**Lotes:** confecção, peças usinadas.\n**Massa:** carros, geladeiras.\n**Contínuo:** refinaria, papel, cimento." },
        { nivel: "facil", tipo: "texto", titulo: "Serviços", texto: "**Serviços profissionais** (advogado, consultor) → **Loja de serviços** (banco, loja) → **Serviços de massa** (call center, metrô)." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Mnemônicos", texto: "Manufatura: **\"Pra Já Levo Mais Coisa\"** (Projeto, Jobbing, Lotes, Massa, Contínuo).\nServiços: **\"o Padre Leva a Missa\"** (Profissional, Loja, Massa)." },
        { nivel: "facil", tipo: "dica", titulo: "Na prática", texto: "O tipo de processo define o layout, o tipo de PCP e até o perfil das pessoas. Sempre pergunte primeiro: **qual o volume e qual a variedade?**" },
        { nivel: "medio", tipo: "conceito", titulo: "O que muda com o tipo de processo", texto: "| | Projeto/Jobbing | Lotes | Massa/Contínuo |\n|---|---|---|---|\n| Layout | Posicional/funcional | Funcional/celular | Linha/fluxo |\n| Pessoas | Generalistas, qualificadas | Mistas | Especializadas |\n| Tecnologia | Universal | Mista | Dedicada, automatizada |\n| Custo unitário | Alto | Médio | Baixo |\n| Flexibilidade | Alta | Média | Baixa |" },
        { nivel: "medio", tipo: "conceito", titulo: "Matriz produto-processo", texto: "Proposta por **Hayes e Wheelwright (1979)**: no eixo horizontal, volume/padronização do produto; no vertical, o tipo de processo. As empresas bem-sucedidas tendem a ficar perto da **diagonal**: processo compatível com o volume e a variedade." },
        { nivel: "medio", tipo: "exemplo", titulo: "Posicionando operações", texto: "• Estaleiro (navio único) → projeto.\n• Oficina de manutenção de máquinas variadas → jobbing.\n• Confecção com coleções de 500 peças por modelo → lotes.\n• Linha de bombons com poucos sabores e alto volume → massa.\n• Fábrica de chocolate em barra, líquido correndo 24 h → contínuo (na etapa de processamento)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Fora da diagonal", texto: "**Acima da diagonal** (processo flexível para produto de alto volume): custo alto demais, perde para concorrentes com linha dedicada.\n**Abaixo da diagonal** (processo dedicado para baixo volume e alta variedade): capacidade ociosa, setups longos, dificuldade de mudar.\nMudanças de mercado podem “empurrar” a empresa para fora da diagonal sem que ela perceba." },
        { nivel: "dificil", tipo: "conceito", titulo: "Customização em massa e híbridos", texto: "**Customização em massa:** variedade para o cliente com custos próximos aos da massa, usando **modularidade**, adiamento da diferenciação (**postponement**) e processos flexíveis.\nEx.: caixa de bombons montada com o sabor escolhido pelo cliente a partir de bombons produzidos em massa.\nUma mesma empresa pode ter etapas **contínuas** (chocolate), **massa** (bombons) e **lotes/sob pedido** (montagem personalizada)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Ciclo de vida e processo", texto: "**Introdução:** baixo volume, projeto mudando → processo flexível.\n**Crescimento:** volume sobe → investir em capacidade e padronizar.\n**Maturidade:** custo é decisivo → processo dedicado, eficiente.\n**Declínio:** reduzir capacidade, racionalizar." }
      ],
      questoes: [
        { id: "m01-q22", nivel: "facil", tipo: "ordenar", pergunta: "Ordene do MENOR para o MAIOR volume de produção:",
          itens: ["Projeto", "Jobbing", "Lotes", "Massa", "Contínuo"], explicacao: "\"Pra Já Levo Mais Coisa\". Volume sobe, variedade desce." },
        { id: "m01-q23", nivel: "facil", tipo: "ligar", pergunta: "Ligue o exemplo ao tipo de processo:",
          pares: [["Refinaria de petróleo", "Contínuo"], ["Construção de um navio", "Projeto"], ["Montadora de geladeiras", "Massa"], ["Confecção que troca de modelo a cada 500 peças", "Lotes"]],
          explicacao: "Refinaria roda 24h sem parar (contínuo); navio é único (projeto); geladeira em linha (massa); confecção por bateladas (lotes)." },
        { id: "m01-q24", nivel: "facil", tipo: "multipla", pergunta: "Uma ferramentaria que faz moldes sob medida, em pequenas quantidades e muito variados, é um processo de:",
          opcoes: ["Massa", "Contínuo", "Jobbing", "Serviço de massa"], correta: 2,
          explicacao: "Jobbing: baixo volume, alta variedade, recursos compartilhados entre muitos pedidos diferentes." },
        { id: "m01-q25", nivel: "facil", tipo: "vf", pergunta: "Um call center de operadora de celular é um exemplo de serviço de massa.",
          correta: true, explicacao: "Alto volume de atendimentos, processos padronizados, pouca customização." },
        { id: "m01-q79", nivel: "medio", tipo: "multipla", pergunta: "Qual layout é típico de um processo em massa?",
          opcoes: ["Posicional", "Funcional", "Por produto (linha)", "Nenhum"], correta: 2,
          explicacao: "A linha segue a sequência das operações." },
        { id: "m01-q80", nivel: "medio", tipo: "ligar", pergunta: "Ligue a característica ao processo em que ela é típica:",
          pares: [["Pessoas generalistas e muito qualificadas", "Projeto/Jobbing"], ["Tecnologia dedicada e automatizada", "Massa/Contínuo"], ["Custo unitário mais alto", "Projeto/Jobbing"], ["Baixa flexibilidade de produto", "Massa/Contínuo"]],
          explicacao: "Volume e variedade definem o perfil do processo." },
        { id: "m01-q81", nivel: "medio", tipo: "vf", pergunta: "Na matriz produto-processo, empresas bem-sucedidas tendem a ficar perto da diagonal (processo compatível com volume e variedade).",
          correta: true, explicacao: "Hayes e Wheelwright, 1979." },
        { id: "m01-q82", nivel: "medio", tipo: "multipla", pergunta: "Uma confecção que produz coleções com cerca de 500 peças por modelo, trocando de modelo com frequência, é um processo:",
          opcoes: ["Contínuo", "Em lotes", "Por projeto", "Serviço de massa"], correta: 1,
          explicacao: "Produção por bateladas de modelos diferentes." },
        { id: "m01-q83", nivel: "dificil", tipo: "caso", contexto: "Uma fábrica com linha dedicada de alto volume passou a receber pedidos pequenos e muito variados. Os setups aumentaram muito e a ocupação caiu.",
          pergunta: "Qual o diagnóstico pela matriz produto-processo?",
          opcoes: ["Está na diagonal", "Ficou abaixo da diagonal: processo dedicado para produto de baixo volume e alta variedade", "Ficou acima da diagonal", "Não há relação com a matriz"], correta: 1,
          explicacao: "Mudança de mercado tirou a operação da diagonal." },
        { id: "m01-q84", nivel: "dificil", tipo: "multipla", pergunta: "Produzir bombons em massa e montar a caixa com os sabores escolhidos pelo cliente no momento do pedido é exemplo de:",
          opcoes: ["Processo por projeto", "Customização em massa com adiamento da diferenciação", "Processo contínuo puro", "Jobbing"], correta: 1,
          explicacao: "Módulos em massa + montagem sob pedido." },
        { id: "m01-q85", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene a prioridade típica das operações ao longo do ciclo de vida do produto:",
          itens: ["Flexibilidade (introdução)", "Capacidade e padronização (crescimento)", "Custo e eficiência (maturidade)", "Racionalização (declínio)"],
          explicacao: "O processo evolui com o produto." },
        { id: "m01-q86", nivel: "dificil", tipo: "discursiva", pergunta: "A Doces Serra quer lançar caixas personalizadas (o cliente escolhe os 12 sabores pelo site). Proponha como organizar o processo sem perder eficiência.",
          respostaModelo: "Manter a produção dos **bombons em massa/lotes** por sabor (eficiente, com estoque controlado de cada sabor, respeitando a validade) e criar uma **célula de montagem sob pedido** que monta as caixas personalizadas a partir desse estoque (**adiamento da diferenciação**). Usar sistema de pedidos integrado, kanban para repor os sabores, poka-yoke na montagem (conferência por peso/visão) e prazo de entrega compatível. Acompanhar custo por caixa, prazo e erros de montagem.",
          criterios: ["Separa produção em massa dos bombons e montagem personalizada", "Menciona adiamento/modularidade", "Considera controle de estoque/validade", "Define indicadores ou controles de erro"] }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l6",
      titulo: "Objetivos e níveis de decisão",
      icone: "🎯",
      objetivos: {
        facil: ["Citar os 5 objetivos de desempenho", "Diferenciar rapidez e confiabilidade", "Classificar decisões em estratégicas, táticas e operacionais"],
        medio: ["Explicar os efeitos internos de cada objetivo de desempenho", "Diferenciar critérios ganhadores de pedido e qualificadores", "Relacionar os níveis de decisão ao PCP"],
        dificil: ["Analisar trade-offs entre objetivos (fábrica focada)", "Explicar o modelo do cone de areia", "Avaliar o alinhamento entre estratégia e decisões de operações"]
      },
      prerequisitos: [{ texto: "Tipos de processo", licao: "m01-l5" }],
      resumo: {
        facil: "Cinco objetivos: **qualidade, rapidez, confiabilidade, flexibilidade e custo** (“Qual Rato Come Farinha Cara?”). Rapidez é entregar logo; confiabilidade é entregar quando prometeu. Decisões: **estratégicas** (anos), **táticas** (meses), **operacionais** (dias).",
        medio: "Cada objetivo tem **efeitos internos**: qualidade reduz retrabalho e custo; rapidez reduz estoques; confiabilidade dá estabilidade; flexibilidade reduz tempo de resposta. **Ganhadores de pedido** fazem o cliente escolher; **qualificadores** são o mínimo para ser considerado (Hill).",
        dificil: "Há **trade-offs** (Skinner: fábrica focada), mas melhorias na base podem melhorar vários objetivos: o **cone de areia** (Ferdows e De Meyer) propõe construir capacidades na ordem qualidade → confiabilidade → flexibilidade/rapidez → custo. Decisões de operações precisam ser **coerentes** com a estratégia."
      },
      blocos: [
        { nivel: "facil", tipo: "conceito", titulo: "5 objetivos de desempenho", texto: "**Qualidade** (fazer certo) · **Rapidez** (fazer rápido) · **Confiabilidade** (fazer no prazo) · **Flexibilidade** (ser capaz de mudar) · **Custo** (fazer barato)." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Mnemônico", texto: "**\"Qual Rato Come Farinha Cara?\"** → Q-R-C-F-C." },
        { nivel: "facil", tipo: "atencao", titulo: "Rapidez ≠ Confiabilidade", texto: "A pizzaria que promete 90 min e entrega em 60 é **confiável**, mas não é **rápida**.\nRápido = chega logo. Confiável = chega quando prometeu." },
        { nivel: "facil", tipo: "conceito", titulo: "Níveis de decisão", texto: "**Estratégico** (anos): o que produzir, onde construir a fábrica.\n**Tático** (meses): quanto produzir por mês, quantos turnos.\n**Operacional** (dias/horas): ordem das tarefas na máquina hoje." },
        { nivel: "facil", tipo: "mnemonico", titulo: "E-T-O", texto: "**\"Enxergo, Traço, Opero\"** → Estratégico, Tático, Operacional." },
        { nivel: "facil", tipo: "dica", titulo: "Entrevista", texto: "Quando perguntarem \"que decisão você tomaria?\", comece dizendo **em qual nível** ela está. Mostra visão de sistema." },
        { nivel: "medio", tipo: "conceito", titulo: "Efeitos internos dos objetivos", texto: "| Objetivo | Efeito externo (cliente) | Efeito interno (operação) |\n|---|---|---|\n| Qualidade | Produto certo | Menos retrabalho, custo menor |\n| Rapidez | Entrega logo | Menos estoque e menos risco |\n| Confiabilidade | Entrega no prometido | Estabilidade, menos urgência |\n| Flexibilidade | Muda produto, volume, prazo | Resposta a imprevistos |\n| Custo | Preço baixo | Margem |" },
        { nivel: "medio", tipo: "conceito", titulo: "Ganhadores de pedido × qualificadores", texto: "**Qualificadores:** o mínimo para o cliente considerar a empresa (abaixo disso, ela é descartada; acima, não ganha mais pedidos).\n**Ganhadores de pedido:** o que faz o cliente escolher a empresa (quanto melhor, mais pedidos).\nConceito de Terry Hill; muda com o mercado e com o tempo." },
        { nivel: "medio", tipo: "conexao", titulo: "Níveis de decisão no PCP", texto: "**Estratégico:** capacidade e fábricas (plano de produção de longo prazo).\n**Tático:** planejamento agregado, S&OP, plano mestre.\n**Operacional:** MRP, programação e sequenciamento.\nDetalhes no Módulo 3." },
        { nivel: "dificil", tipo: "conceito", titulo: "Trade-offs e fábrica focada", texto: "**Skinner (1969, 1974):** uma fábrica não consegue ser a melhor em tudo; tentar agradar todos os objetivos gera uma operação medíocre. A **fábrica focada** concentra-se em poucos objetivos coerentes com o mercado que atende." },
        { nivel: "dificil", tipo: "conceito", titulo: "Cone de areia", texto: "**Ferdows e De Meyer (1990)** observaram empresas que melhoraram vários objetivos ao mesmo tempo construindo capacidades em sequência, como camadas de um cone de areia: **qualidade → confiabilidade → flexibilidade/rapidez → custo**. A base (qualidade) sustenta as outras. É um modelo proposto a partir de observações, não uma lei." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: alinhamento", texto: "A Doces Serra quer competir no mercado **premium de presentes** (ganhadores: qualidade e aparência; qualificador: entrega confiável no Natal), mas mede os supervisores só por **custo por kg**. Resultado: ninguém quer parar a linha para ajustar a aparência. Estratégia e indicadores estão **desalinhados**." }
      ],
      questoes: [
        { id: "m01-q26", nivel: "facil", tipo: "multipla", pergunta: "Uma transportadora que abastece uma montadora em Just in Time compete principalmente em:",
          opcoes: ["Custo", "Confiabilidade", "Flexibilidade de produto", "Qualidade estética"], correta: 1,
          explicacao: "No JIT a montadora tem pouco estoque: atrasar 1 hora pode parar a linha. Cumprir o prazo prometido é o principal." },
        { id: "m01-q27", nivel: "facil", tipo: "vf", pergunta: "Entregar ANTES do prazo prometido é a definição de confiabilidade.",
          correta: false, explicacao: "Confiabilidade é cumprir o que foi prometido. Entregar muito rápido é RAPIDEZ." },
        { id: "m01-q28", nivel: "facil", tipo: "ligar", pergunta: "Ligue a decisão ao nível:",
          pares: [["Abrir uma fábrica no Nordeste", "Estratégico"], ["Quantos turnos no próximo trimestre", "Tático"], ["Quem faz hora extra hoje", "Operacional"]],
          explicacao: "Anos → estratégico; meses → tático; dias/horas → operacional." },
        { id: "m01-q29", nivel: "facil", tipo: "lacuna", pergunta: "Qual Rato Come Farinha Cara: Qualidade, Rapidez, Confiabilidade, ___ e Custo.",
          opcoes: ["Flexibilidade", "Faturamento", "Fidelidade", "Função"], correta: 0,
          explicacao: "Flexibilidade = capacidade de mudar produto, volume, mix ou prazo." },
        { id: "m01-q30", nivel: "facil", tipo: "multipla", pergunta: "Uma companhia aérea low-cost compete principalmente em:",
          opcoes: ["Custo", "Flexibilidade", "Rapidez", "Qualidade de luxo"], correta: 0,
          explicacao: "O modelo de negócio é a passagem barata; tudo é desenhado para cortar custo." },
        { id: "m01-q31", nivel: "facil", tipo: "multipla", pergunta: "\"Definir o plano de produção mensal para os próximos 6 meses\" é uma decisão:",
          opcoes: ["Estratégica", "Tática", "Operacional", "Pessoal"], correta: 1,
          explicacao: "Médio prazo (meses) e uso dos recursos existentes → tática. No PCP (Módulo 3) isso vira o Plano Agregado." },
        { id: "m01-q87", nivel: "medio", tipo: "ligar", pergunta: "Ligue o objetivo ao seu efeito INTERNO:",
          pares: [["Qualidade", "Menos retrabalho e custo menor"], ["Rapidez", "Menos estoque e menos risco"], ["Confiabilidade", "Estabilidade e menos urgências"], ["Flexibilidade", "Resposta a imprevistos"]],
          explicacao: "Objetivos têm efeitos para o cliente e para a operação." },
        { id: "m01-q88", nivel: "medio", tipo: "multipla", pergunta: "Para um cliente, “ter o selo de segurança do alimento” é o mínimo para comprar; entre os fornecedores com selo, ele escolhe o de melhor sabor. O selo é:",
          opcoes: ["Ganhador de pedido", "Qualificador", "Irrelevante", "Custo"], correta: 1,
          explicacao: "Sem ele, a empresa nem é considerada." },
        { id: "m01-q89", nivel: "medio", tipo: "vf", pergunta: "Melhorar a qualidade pode reduzir o custo, porque diminui retrabalho, refugo e inspeção.",
          correta: true, explicacao: "Efeito interno da qualidade." },
        { id: "m01-q90", nivel: "medio", tipo: "ligar", pergunta: "Ligue a ferramenta do PCP ao nível de decisão:",
          pares: [["Planejamento agregado / S&OP", "Tático"], ["Sequenciamento das ordens", "Operacional"], ["Plano de capacidade de longo prazo", "Estratégico"]],
          explicacao: "Níveis de decisão aplicados ao PCP." },
        { id: "m01-q91", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene as camadas do modelo do cone de areia (da base para o topo):",
          itens: ["Qualidade", "Confiabilidade", "Flexibilidade/rapidez", "Custo"],
          explicacao: "Ferdows e De Meyer (1990)." },
        { id: "m01-q92", nivel: "dificil", tipo: "caso", contexto: "A empresa diz competir por qualidade e aparência (mercado premium), mas o bônus dos supervisores depende só do custo por kg.",
          pergunta: "Qual o problema e a correção?",
          opcoes: ["Nenhum problema", "Desalinhamento entre estratégia e indicadores; incluir qualidade/aparência e entrega nos indicadores e nas metas", "Eliminar o bônus e não medir nada", "Reduzir o preço"], correta: 1,
          explicacao: "As pessoas seguem o que é medido e recompensado." },
        { id: "m01-q93", nivel: "dificil", tipo: "vf", pergunta: "Segundo Skinner, uma fábrica consegue ser a melhor simultaneamente em todos os objetivos de desempenho, sem trade-offs.",
          correta: false, explicacao: "Ele defende a fábrica focada justamente pelos trade-offs." },
        { id: "m01-q94", nivel: "dificil", tipo: "discursiva", pergunta: "Para o mercado de presentes premium de Natal, defina ganhadores de pedido e qualificadores e proponha dois indicadores de operações alinhados.",
          respostaModelo: "**Ganhadores:** qualidade percebida (sabor, aparência, embalagem) e, talvez, personalização. **Qualificadores:** segurança do alimento, entrega confiável antes do Natal, preço dentro da faixa premium. **Indicadores:** índice de conformidade de aparência (auditoria de produto acabado) e OTIF nas semanas de pico; complementar com custo por caixa, sem ser o único critério.",
          criterios: ["Distingue ganhadores e qualificadores", "Escolhe objetivos coerentes com o mercado premium", "Propõe ao menos dois indicadores alinhados", "Evita focar apenas em custo"] }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l7",
      titulo: "Produtividade e eficiência",
      icone: "📈",
      objetivos: {
        facil: ["Calcular a produtividade parcial", "Calcular a variação da produtividade", "Diferenciar eficácia, eficiência e efetividade"],
        medio: ["Calcular a produtividade multifatorial", "Calcular a eficiência em relação ao padrão", "Explicar por que produzir mais não é ser mais produtivo"],
        dificil: ["Explicar como a produtividade parcial pode enganar", "Separar efeito preço e efeito quantidade em indicadores em R$", "Discutir a manipulação de indicadores (lei de Goodhart)"]
      },
      prerequisitos: [{ texto: "Objetivos e níveis de decisão", licao: "m01-l6" }],
      resumo: {
        facil: "**Produtividade = saídas ÷ entradas.** Parcial: um recurso (peças por hora-homem). Variação = (atual − anterior) ÷ anterior × 100. **Eficácia:** atingir o objetivo; **eficiência:** usar bem os recursos; **efetividade:** impacto duradouro.",
        medio: "**Multifatorial:** saídas ÷ (mão de obra + materiais + energia + capital), tudo em R$. **Eficiência** = produção real ÷ produção padrão. Produzir mais só é ser mais produtivo se as saídas crescerem mais que as entradas.",
        dificil: "A produtividade **parcial** pode subir porque outro recurso substituiu o medido (automação aumenta peças/hora-homem, mas consome capital e energia). Indicadores em R$ misturam **preço e quantidade**: use preços constantes. Conte só produção **boa**. Indicador que vira meta tende a ser manipulado (**lei de Goodhart**)."
      },
      blocos: [
        { nivel: "facil", tipo: "formula", titulo: "Produtividade", texto: "**Produtividade = Saídas ÷ Entradas**\nParcial: um recurso (peças/hora-homem).\nTotal: todas as entradas (em R$)." },
        { nivel: "facil", tipo: "formula", titulo: "Variação", texto: "**Variação (%) = (P atual − P anterior) ÷ P anterior × 100**\nEx.: 50 → 60 peças/operador = **+20%**." },
        { nivel: "facil", tipo: "atencao", titulo: "Produzir mais ≠ ser mais produtivo", texto: "Se as saídas subiram 50% e as entradas subiram 60%, a produtividade **caiu**." },
        { nivel: "facil", tipo: "conceito", titulo: "Eficácia × Eficiência × Efetividade", texto: "**Eficácia:** atingir o objetivo (a coisa certa).\n**Eficiência:** usar bem os recursos (fazer certo a coisa).\n**Efetividade:** gerar impacto duradouro (eficaz + eficiente)." },
        { nivel: "facil", tipo: "formula", titulo: "Eficiência operacional", texto: "**Eficiência (%) = Produção real ÷ Produção padrão × 100**\nEx.: padrão de 1.800 peças/turno, produziu 1.710 → **95%**." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Rima", texto: "**\"Eficaz acerta o alvo, eficiente poupa a flecha, efetivo ganha a guerra.\"**" },
        { nivel: "facil", tipo: "bobo", titulo: "Tia Cida", texto: "Antes: 200 brigadeiros em 4 h = 50/h.\nCom batedeira: 300 em 4 h = 75/h → **+50%** de produtividade." },
        { nivel: "medio", tipo: "formula", titulo: "Produtividade multifatorial", texto: "**PMF = valor das saídas ÷ (mão de obra + materiais + energia + capital)**", legenda: [["Saídas", "Produção valorizada (R$)"], ["Entradas", "Custos dos recursos usados (R$), no mesmo período"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Multifatorial na prática", texto: "Mês 1: saídas R$ 500 mil; entradas R$ 400 mil ⇒ PMF = **1,25**.\nMês 2: saídas R$ 540 mil; entradas R$ 420 mil ⇒ PMF ≈ **1,286** (+2,9%).\nA produção cresceu 8%, mas a produtividade total cresceu bem menos, porque as entradas também subiram." },
        { nivel: "medio", tipo: "formula", titulo: "Eficiência em relação ao padrão", texto: "**Eficiência = produção real ÷ produção padrão × 100%**\nProdução padrão = tempo disponível ÷ tempo padrão (Módulo 4).", legenda: [["Produção padrão", "O que deveria ser feito no tempo disponível, no ritmo normal"]] },
        { nivel: "medio", tipo: "atencao", titulo: "Mais produção ≠ mais produtividade", texto: "Compare **taxas de crescimento**: se as saídas crescem 10% e as entradas 15%, a produtividade cai cerca de 4,3% (1,10 ÷ 1,15 − 1)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Quando a produtividade parcial engana", texto: "Um robô na embalagem pode dobrar as **caixas por hora-homem**, mas aumentar energia, manutenção e depreciação. Só a **multifatorial** (ou a análise econômica) mostra se o sistema ficou melhor. Terceirizar uma etapa também “melhora” a produtividade da mão de obra interna sem melhorar o sistema." },
        { nivel: "dificil", tipo: "conceito", titulo: "Preço × quantidade", texto: "Se o preço do produto sobe 10%, o **faturamento** por hora sobe 10% sem nenhuma melhoria física. Para medir produtividade real, use **quantidades físicas** ou **preços constantes** (deflacionar). Da mesma forma, conte só a produção **boa** (sem refugo), para não premiar volume com defeito." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Lei de Goodhart", texto: "“Quando uma medida vira meta, deixa de ser uma boa medida” (formulação popular, derivada da ideia de Charles Goodhart). Ex.: meta de peças/hora leva a produzir itens fáceis e deixar os difíceis para depois. Use conjuntos equilibrados de indicadores (produtividade + qualidade + prazo + segurança)." }
      ],
      questoes: [
        { id: "m01-q32", nivel: "facil", tipo: "calculo", pergunta: "Uma linha fazia 1.200 peças/turno com 10 operadores. Após um Kaizen, faz 1.380 peças/turno com os mesmos 10. Qual a variação de produtividade (%)?",
          resposta: 15, tolerancia: 0.5, unidade: "%",
          resolucao: "Antes: 1200 ÷ 10 = 120 peças/operador.\nDepois: 1380 ÷ 10 = 138 peças/operador.\nVariação = (138 − 120) ÷ 120 × 100 = 15%.",
          explicacao: "Mesmo número de pessoas produzindo mais = aumento de produtividade da mão de obra." },
        { id: "m01-q33", nivel: "facil", tipo: "calculo", pergunta: "A produção subiu de 1.000 para 1.500 un/mês, mas as horas trabalhadas foram de 2.000 para 3.200 h. Qual a variação da produtividade (%)? (use sinal negativo se caiu)",
          resposta: -6.25, tolerancia: 0.3, unidade: "%",
          resolucao: "Antes: 1000 ÷ 2000 = 0,50 un/h.\nDepois: 1500 ÷ 3200 = 0,46875 un/h.\nVariação = (0,46875 − 0,50) ÷ 0,50 × 100 = −6,25%.",
          explicacao: "Produção +50%, horas +60% → produtividade caiu. Produzir mais não é o mesmo que ser mais produtivo." },
        { id: "m01-q34", nivel: "facil", tipo: "calculo", pergunta: "Uma padaria fez 900 pães usando 6 horas-homem. Qual a produtividade em pães por hora-homem?",
          resposta: 150, tolerancia: 0.5, unidade: "pães/h·h",
          resolucao: "Produtividade = Saídas ÷ Entradas = 900 ÷ 6 = 150 pães por hora-homem.",
          explicacao: "É uma produtividade PARCIAL, pois considera só o recurso mão de obra." },
        { id: "m01-q35", nivel: "facil", tipo: "multipla", pergunta: "A linha bateu a meta de 800 peças, mas gastou 20% a mais de horas extras que o previsto. Ela foi:",
          opcoes: ["Eficaz e eficiente", "Eficaz, mas não eficiente", "Eficiente, mas não eficaz", "Nem eficaz nem eficiente"], correta: 1,
          explicacao: "Atingiu o objetivo (eficaz), mas usou recursos demais (não eficiente)." },
        { id: "m01-q36", nivel: "facil", tipo: "vf", pergunta: "Eficiência é \"fazer a coisa certa\" e eficácia é \"fazer certo a coisa\".",
          correta: false, explicacao: "É o contrário: EFICÁCIA = fazer a coisa certa (objetivo); EFICIÊNCIA = fazer certo a coisa (recursos)." },
        { id: "m01-q95", nivel: "medio", tipo: "calculo", pergunta: "Saídas de R$ 540 mil e entradas (mão de obra + materiais + energia + capital) de R$ 420 mil. Qual a produtividade multifatorial? (3 casas)",
          resposta: 1.286, tolerancia: 0.002, unidade: "",
          resolucao: "PMF = 540 ÷ 420 ≈ 1,286",
          explicacao: "Cada R$ 1 de recursos gera cerca de R$ 1,29 de produção." },
        { id: "m01-q96", nivel: "medio", tipo: "calculo", pergunta: "As saídas cresceram 10% e as entradas cresceram 15%. Qual a variação da produtividade (%)? (1 casa, com sinal)",
          resposta: -4.3, tolerancia: 0.1, unidade: "%",
          resolucao: "1,10 ÷ 1,15 − 1 = −0,0435 ≈ −4,3%",
          explicacao: "Entradas cresceram mais que as saídas." },
        { id: "m01-q97", nivel: "medio", tipo: "multipla", pergunta: "O tempo padrão é 0,5 min/peça e há 450 min disponíveis. A linha fez 810 peças. Qual a eficiência?",
          opcoes: ["81%", "90%", "111%", "50%"], correta: 1,
          explicacao: "Produção padrão = 450 ÷ 0,5 = 900; eficiência = 810 ÷ 900 = 90%." },
        { id: "m01-q98", nivel: "medio", tipo: "vf", pergunta: "A produtividade multifatorial considera vários recursos (mão de obra, materiais, energia, capital) em unidades monetárias.",
          correta: true, explicacao: "A parcial considera só um recurso." },
        { id: "m01-q99", nivel: "dificil", tipo: "caso", contexto: "Após instalar um robô, as caixas por hora-homem dobraram. A diretoria quer anunciar “produtividade +100%”.",
          pergunta: "Qual o alerta técnico?",
          opcoes: ["Nenhum: dobrou", "É produtividade parcial; é preciso considerar energia, manutenção e capital (multifatorial ou análise econômica)", "Deveria medir só as horas", "Robôs não afetam produtividade"], correta: 1,
          justificativas: ["O robô substituiu mão de obra por capital; a parcial exagera o ganho.", "Visão do sistema.", "Seria ainda mais parcial.", "Afetam, mas precisam ser medidos corretamente."],
          explicacao: "Produtividade parcial pode enganar quando um recurso substitui outro." },
        { id: "m01-q100", nivel: "dificil", tipo: "multipla", pergunta: "O faturamento por hora trabalhada subiu 10% porque o preço subiu 10%. A produtividade física:",
          opcoes: ["Subiu 10%", "Não mudou (efeito preço, não quantidade)", "Caiu 10%", "Dobrou"], correta: 1,
          explicacao: "Use preços constantes ou quantidades físicas." },
        { id: "m01-q101", nivel: "dificil", tipo: "vf", pergunta: "Contar a produção total, incluindo o refugo, é a forma correta de medir produtividade.",
          correta: false, explicacao: "Conte a produção boa; senão, volume com defeito parece produtividade." },
        { id: "m01-q102", nivel: "dificil", tipo: "discursiva", pergunta: "A meta dos supervisores passou a ser “peças por hora”. Três meses depois, a produtividade subiu, mas os pedidos de itens complexos atrasaram. Explique o que aconteceu e proponha um sistema de indicadores melhor.",
          respostaModelo: "Efeito **Goodhart**: a medida virou meta e foi “otimizada” — os supervisores priorizaram itens simples e rápidos, adiando os complexos. Proposta: **cesta equilibrada** de indicadores — produtividade em **horas-padrão** produzidas (que valoriza itens complexos pelo seu tempo padrão), **aderência ao programa/OTIF**, **qualidade** (refugo) e **segurança**; revisar as metas em conjunto e acompanhar o mix produzido.",
          criterios: ["Identifica o efeito de a medida virar meta", "Explica o comportamento (priorizar itens fáceis)", "Propõe indicadores equilibrados", "Sugere medir em horas-padrão ou considerar o mix"] }
      ]
    },

    /* ------------------------------------------------------------ */
    {
      id: "m01-l8",
      titulo: "Caso: 1º dia na Doces Serra",
      icone: "🏭",
      objetivos: {
        facil: ["Ordenar os passos do primeiro mês de um engenheiro de produção", "Relacionar problemas às áreas da ABEPRO", "Identificar o objetivo de desempenho prioritário"],
        medio: ["Calcular indicadores do caso (OTIF, refugo, produtividade)", "Priorizar problemas com o princípio de Pareto", "Transformar um problema em meta mensurável"],
        dificil: ["Montar um plano de ação com trade-offs, riscos e partes interessadas", "Estimar o impacto financeiro de uma melhoria", "Comunicar recomendações à diretoria com evidências"]
      },
      prerequisitos: [{ texto: "Produtividade e eficiência", licao: "m01-l7" }],
      resumo: {
        facil: "No primeiro mês: **entender o sistema** (ir ao chão de fábrica), descobrir **em que a empresa compete**, **medir**, **priorizar** e **medir de novo**. Sem número não existe melhoria, só opinião.",
        medio: "Indicadores do caso: **OTIF** (entregas no prazo e completas), **% de refugo**, **produtividade**. O **Pareto** mostra os poucos problemas que causam a maior parte do impacto. Meta boa: indicador, valor atual, alvo e prazo.",
        dificil: "Um plano de ação considera **custo, prazo, riscos e partes interessadas** (operadores, clientes, diretoria). Traduzir o ganho em **R$** e apresentar com evidências (antes × depois) aumenta a chance de aprovação."
      },
      blocos: [
        { nivel: "facil", tipo: "serio", titulo: "O cenário", texto: "A Tia Cida cresceu: agora é a **Doces Serra Ltda.**, 120 funcionários, 3 linhas (brigadeiro, bombom, trufa), vendendo para 2 redes de supermercados.\nVocê é o(a) novo(a) **Engenheiro(a) de Produção Júnior**.\nO diretor: *\"Temos atrasos, muito refugo e o custo subiu. Se vira.\"*" },
        { nivel: "facil", tipo: "serio", titulo: "Passos 1 a 3", texto: "**1. Entender o sistema:** desenhar Input → Transformação → Output e ir ao chão de fábrica (Gemba). Não propor nada ainda.\n**2. Descobrir em que a empresa compete:** prazo? preço? variedade?\n**3. Levantar números:** produtividade, % no prazo, % refugo, custo/kg." },
        { nivel: "facil", tipo: "serio", titulo: "Passos 4 a 7", texto: "**4. Classificar problemas por área** da ABEPRO.\n**5. Separar níveis de decisão.**\n**6. Priorizar** (Pareto, Módulo 5) e abrir um projeto (TAP, Módulo 2).\n**7. Medir de novo** e mostrar o resultado em R$." },
        { nivel: "facil", tipo: "dica", titulo: "Regra de ouro", texto: "**Sem número não existe melhoria, só opinião.** Meça antes e depois." },
        { nivel: "medio", tipo: "serio", titulo: "Os números do mês", texto: "Pedidos entregues: 180; no prazo e completos: 144.\nProduzido: 50.000 caixas; refugo: 2.500.\nHoras trabalhadas: 12.000.\nMotivos de atraso: falta de embalagem 18, retenção de qualidade 9, quebra da banhadeira 6, outros 3." },
        { nivel: "medio", tipo: "formula", titulo: "Indicadores do caso", texto: "OTIF = pedidos no prazo e completos ÷ pedidos entregues\n% refugo = refugo ÷ produzido × 100\nProdutividade = caixas boas ÷ horas trabalhadas", legenda: [["OTIF", "On time, in full"], ["Caixas boas", "Produzido − refugo"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Calculando", texto: "OTIF = 144 ÷ 180 = **80%**.\nRefugo = 2.500 ÷ 50.000 = **5%**.\nProdutividade = 47.500 ÷ 12.000 ≈ **3,96 caixas boas/h**.\nPareto dos atrasos: embalagem 18 de 36 = **50%**; com qualidade (9), **75%** das causas." },
        { nivel: "medio", tipo: "dica", titulo: "Meta bem escrita", texto: "“Aumentar o OTIF de **80%** para **92%** até **março**, atacando a falta de embalagem e as retenções de qualidade.” Indicador + atual + alvo + prazo + foco." },
        { nivel: "dificil", tipo: "conceito", titulo: "Plano de ação com trade-offs", texto: "Para cada ação: **o quê, quem, quando, custo, ganho esperado, risco**.\nEx.: estoque de segurança de embalagem (custo de estoque × multas evitadas); kanban com o fornecedor (prazo de implantação × estabilidade); manutenção preventiva na banhadeira (horas de parada planejada × quebras evitadas)." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Impacto em R$", texto: "Cada pedido atrasado gera multa média de R$ 1.500. Resolver a falta de embalagem (18 atrasos/mês) evita até **R$ 27.000/mês** em multas. Se o estoque adicional de embalagem custa R$ 3.000/mês, o ganho líquido estimado é de **R$ 24.000/mês** (números ilustrativos)." },
        { nivel: "dificil", tipo: "dica", titulo: "Comunicando à diretoria", texto: "Uma página: **problema** (com número), **causa principal** (Pareto), **proposta**, **custo e ganho** (R$), **riscos** e **como vamos medir**. Termine com a decisão que você precisa (“aprovar o estoque de segurança de embalagem”)." }
      ],
      questoes: [
        { id: "m01-q37", nivel: "facil", tipo: "caso", contexto: "Você acabou de entrar na Doces Serra. O diretor quer resultados rápidos para atrasos, refugo e custo alto.",
          pergunta: "Qual deve ser seu PRIMEIRO passo?",
          opcoes: ["Comprar uma máquina nova para a linha de bombom", "Entender o sistema: mapear o fluxo e ir ao chão de fábrica", "Demitir os operadores da linha com mais refugo", "Implantar Seis Sigma em todas as linhas imediatamente"],
          correta: 1, explicacao: "Antes de propor, entenda o sistema e colete dados. Soluções sem diagnóstico costumam atacar o sintoma e não a causa." },
        { id: "m01-q38", nivel: "facil", tipo: "caso", contexto: "Na Doces Serra, os operadores da embalagem relatam dor no punho e o refugo dessa etapa é o maior da fábrica.",
          pergunta: "Qual a leitura MAIS completa, com visão de sistema?",
          opcoes: ["É só problema de qualidade: trocar a máquina", "É só problema de RH: treinar de novo", "Ergonomia (Trabalho) pode estar causando erros (Qualidade) que elevam o custo (Econômica)", "É problema de Logística: falta embalagem"],
          correta: 2, explicacao: "Postura ruim → fadiga → erros → refugo → custo. As áreas se conectam; o engenheiro de produção enxerga a cadeia inteira." },
        { id: "m01-q39", nivel: "facil", tipo: "caso", contexto: "O comercial conta que as redes de supermercado multam a Doces Serra quando a entrega atrasa, mesmo que por algumas horas.",
          pergunta: "Qual objetivo de desempenho deve ser priorizado?",
          opcoes: ["Confiabilidade", "Flexibilidade de produto", "Custo", "Rapidez"],
          correta: 0, explicacao: "Multa por atraso = o cliente valoriza cumprir o prazo prometido → confiabilidade." },
        { id: "m01-q40", nivel: "facil", tipo: "ordenar", pergunta: "Ordene os passos do seu plano de primeiro mês:",
          itens: ["Entender o sistema e ir ao chão de fábrica", "Descobrir em que a empresa compete", "Levantar indicadores (números)", "Priorizar o problema e abrir um projeto", "Medir de novo e mostrar o resultado"],
          explicacao: "Entender → objetivo → medir → priorizar/agir → medir de novo. É o raciocínio de um PDCA (Módulo 5)." },
        { id: "m01-q103", nivel: "medio", tipo: "calculo", pergunta: "De 180 pedidos entregues no mês, 144 chegaram no prazo e completos. Qual o OTIF (%)?",
          resposta: 80, tolerancia: 0, unidade: "%",
          resolucao: "144 ÷ 180 × 100 = 80%",
          explicacao: "OTIF = on time, in full." },
        { id: "m01-q104", nivel: "medio", tipo: "calculo", pergunta: "Produção de 50.000 caixas, refugo de 2.500 e 12.000 horas trabalhadas. Qual a produtividade em caixas boas por hora? (2 casas)",
          resposta: 3.96, tolerancia: 0.01, unidade: "caixas/h",
          resolucao: "Caixas boas = 50.000 − 2.500 = 47.500\n47.500 ÷ 12.000 ≈ 3,96",
          explicacao: "Conte só a produção boa." },
        { id: "m01-q105", nivel: "medio", tipo: "multipla", pergunta: "Motivos de atraso: embalagem 18, qualidade 9, quebra 6, outros 3. Que porcentagem as duas primeiras causas representam?",
          opcoes: ["50%", "75%", "83%", "27%"], correta: 1,
          explicacao: "(18 + 9) ÷ 36 = 75%: foco nelas (Pareto)." },
        { id: "m01-q106", nivel: "medio", tipo: "multipla", pergunta: "Qual é a meta mais bem escrita?",
          opcoes: ["Melhorar as entregas", "Aumentar o OTIF de 80% para 92% até março", "Ser a melhor fábrica", "Entregar mais rápido que a concorrência"], correta: 1,
          explicacao: "Indicador, valor atual, alvo e prazo." },
        { id: "m01-q107", nivel: "dificil", tipo: "calculo", pergunta: "Cada pedido atrasado gera multa de R$ 1.500. A ação elimina 18 atrasos por mês e custa R$ 3.000/mês. Qual o ganho líquido mensal estimado (R$)?",
          resposta: 24000, tolerancia: 0, unidade: "R$",
          resolucao: "Multas evitadas = 18 × 1.500 = 27.000\nGanho líquido = 27.000 − 3.000 = 24.000",
          explicacao: "Traduzir o ganho em R$ facilita a aprovação." },
        { id: "m01-q108", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene uma apresentação de uma página para a diretoria:",
          itens: ["Problema com número", "Causa principal (Pareto)", "Proposta de ação", "Custo, ganho e riscos", "Como vamos medir", "Decisão solicitada"],
          explicacao: "Evidência → proposta → decisão." },
        { id: "m01-q109", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva um plano de ação resumido para elevar o OTIF da Doces Serra de 80% para 92% em três meses, com pelo menos três ações, responsáveis e riscos.",
          respostaModelo: "1) **Embalagem** (50% dos atrasos): estoque de segurança + kanban com o fornecedor — Logística, 2 semanas; risco: custo de estoque e espaço. 2) **Retenções de qualidade**: análise de causa dos defeitos que mais retêm lotes e poka-yoke — Qualidade, 6 semanas; risco: depender de investimento. 3) **Quebras da banhadeira**: plano de manutenção preventiva e peças críticas em estoque — Manutenção, 4 semanas; risco: paradas planejadas reduzirem a capacidade. Acompanhamento semanal do OTIF e dos motivos (Pareto), com revisão no mês 2.",
          criterios: ["Ataca as causas principais do Pareto", "Define responsáveis e prazos", "Aponta riscos ou trade-offs", "Define acompanhamento do indicador"] }
      ]
    }
    /* ------------------------------------------------------------ */
    ,{
      id: "m01-l9",
      titulo: "👾 Chefão do Módulo 1",
      icone: "👾",
      objetivos: {
        facil: ["Revisar os conceitos-chave do módulo", "Associar mnemônicos às listas que eles representam", "Resolver exercícios intercalados"],
        medio: ["Aplicar SIPOC, 4 Vs, indicadores e objetivos num mesmo caso", "Calcular indicadores e interpretar os resultados", "Classificar decisões e problemas por nível e área"],
        dificil: ["Integrar visão de sistema, estratégia e indicadores numa recomendação", "Identificar subotimização e desalinhamentos", "Justificar decisões com dados e trade-offs"]
      },
      prerequisitos: [{ texto: "Todas as lições do Módulo 1", licao: "m01-l1" }],
      resumo: {
        facil: "Engenharia de Produção = engenharia do sistema. História (Taylor, Ford, Deming, Ohno), 10 áreas, entrada → transformação → saída, tipos de processo, 5 objetivos, níveis de decisão e produtividade.",
        medio: "No caso da Doces Serra: SIPOC para delimitar, 4 Vs para caracterizar, OTIF, refugo e produtividade para medir, Pareto para priorizar e metas SMART para agir.",
        dificil: "Recomendações fortes integram estratégia (ganhadores e qualificadores), processo (tipo e capacidade) e indicadores equilibrados, evitam subotimização e apresentam custo, ganho e risco."
      },
      blocos: [
        { nivel: "facil", tipo: "texto", titulo: "Hora do chefão!", texto: "Esta lição **mistura tudo** o que você viu no módulo (intercalação). Misturar assuntos dá mais trabalho, mas fixa muito mais." },
        { nivel: "facil", tipo: "conceito", titulo: "✅ Você só avança se souber…", texto: "• Explicar o que faz um engenheiro de produção\n• Citar as **10 áreas da ABEPRO**\n• Contar a linha do tempo Taylor → Ford → Deming → Toyota\n• Desenhar **Entrada → Transformação → Saída**\n• Diferenciar **bens × serviços**\n• Ordenar os **tipos de processo**\n• Citar os **5 objetivos** (rapidez ≠ confiabilidade)\n• Classificar decisões **E-T-O**\n• Calcular **produtividade** e sua variação\n• Diferenciar **eficácia, eficiência e efetividade**" },
        { nivel: "facil", tipo: "dica", titulo: "Estratégia", texto: "Errou alguma? Ela volta na aba 🔁 Revisar amanhã (D+1). Não tente decorar a resposta: tente entender o **porquê** da explicação." },
        { nivel: "medio", tipo: "conceito", titulo: "✅ Checklist (Médio)", texto: "• Funções, entregas e indicadores · Confea/Crea e ART\n• Paradigmas artesanal, massa e enxuto · Hawthorne\n• Ferramentas por área · problemas multiárea\n• SIPOC · 4 Vs · realimentação\n• Matriz produto-processo\n• Efeitos internos · ganhadores × qualificadores\n• Produtividade multifatorial · eficiência\n• OTIF, refugo, Pareto e metas" },
        { nivel: "dificil", tipo: "conceito", titulo: "✅ Checklist (Difícil)", texto: "• Subotimização e ética profissional\n• Críticas ao taylorismo e ao fordismo\n• Causas entre áreas e limites da classificação\n• Serviços: capacidade perecível, frente × retaguarda, servitização\n• Fora da diagonal · customização em massa · ciclo de vida\n• Fábrica focada · cone de areia · alinhamento\n• Produtividade parcial enganosa · preço × quantidade · Goodhart\n• Plano de ação com R$ e riscos" }
      ],
      questoes: [
        { id: "m01-q41", nivel: "facil", tipo: "ligar", pergunta: "Ligue o mnemônico ao que ele ajuda a lembrar:",
          pares: [["Onde Logo Pesquisei Qual Produto…", "10 áreas da ABEPRO"], ["Qual Rato Come Farinha Cara?", "5 objetivos de desempenho"], ["Pra Já Levo Mais Coisa", "Tipos de processo"], ["Enxergo, Traço, Opero", "Níveis de decisão"]],
          explicacao: "Os mnemônicos organizam listas longas. Repita-os em voz alta no ônibus!" },
        { id: "m01-q42", nivel: "facil", tipo: "calculo", pergunta: "O padrão da linha é 1.800 peças por turno. Hoje ela produziu 1.710. Qual a eficiência operacional (%)?",
          resposta: 95, tolerancia: 0.5, unidade: "%",
          resolucao: "Eficiência = Produção real ÷ Produção padrão × 100\n= 1710 ÷ 1800 × 100 = 95%.",
          explicacao: "Eficiência compara o que foi feito com o que deveria ser feito com os mesmos recursos." },
        { id: "m01-q43", nivel: "facil", tipo: "caso", contexto: "Num hospital, o pronto-socorro tem espera média de 3h40. 60% dos pacientes chegam entre 18h e 23h, mas a escala de médicos é igual em todos os horários.",
          pergunta: "Qual a ação mais alinhada à Engenharia de Produção?",
          opcoes: ["Contratar o dobro de médicos para todos os horários", "Ajustar a escala à curva de chegada, reforçando 18h-23h", "Pedir aos pacientes que não venham à noite", "Comprar mais cadeiras para a sala de espera"],
          correta: 1, explicacao: "Casar capacidade com demanda (área de Operações; filas → Pesquisa Operacional). Dobrar tudo aumenta o custo; cadeiras tratam o sintoma." },
        { id: "m01-q44", nivel: "facil", tipo: "vf", pergunta: "Se a produção subiu 50% e as horas trabalhadas subiram 60%, a produtividade da mão de obra aumentou.",
          correta: false, explicacao: "Caiu cerca de 6%: as entradas cresceram mais que as saídas. Produzir mais ≠ ser mais produtivo." },
        { id: "m01-q45", nivel: "facil", tipo: "ordenar", pergunta: "Ordene as decisões do MAIOR para o MENOR horizonte de tempo:",
          itens: ["Construir uma nova fábrica (estratégica)", "Definir turnos do próximo trimestre (tática)", "Sequenciar as ordens de amanhã (operacional)"],
          explicacao: "Estratégico (anos) → Tático (meses) → Operacional (dias/horas)." },
        { id: "m01-q46", nivel: "facil", tipo: "lacuna", pergunta: "Numa refinaria, que funciona 24h com fluxo ininterrupto, o tipo de processo é ___.",
          opcoes: ["contínuo", "jobbing", "por projeto", "em lotes"], correta: 0,
          explicacao: "Contínuo: altíssimo volume, pouquíssima variedade, sem parar." },
        { id: "m01-q47", nivel: "facil", tipo: "multipla", pergunta: "Qual área da ABEPRO cuida de missão, visão, indicadores (KPIs) e estrutura da empresa?",
          opcoes: ["Engenharia do Trabalho", "Engenharia Organizacional", "Engenharia do Produto", "Logística"], correta: 1,
          explicacao: "Engenharia Organizacional = gestão estratégica, organizacional e de desempenho (Módulo 11)." },
        { id: "m01-q110", nivel: "medio", tipo: "ligar", pergunta: "Ligue a ferramenta à pergunta que ela responde:",
          pares: [["SIPOC", "Quais são as fronteiras do processo?"], ["4 Vs", "Que tipo de operação é esta?"], ["Pareto", "Quais causas atacar primeiro?"], ["OTIF", "Estamos entregando no prazo e completo?"]],
          explicacao: "Cada ferramenta tem seu papel no diagnóstico." },
        { id: "m01-q111", nivel: "medio", tipo: "multipla", pergunta: "Uma gráfica de convites personalizados, com pedidos pequenos e muito variados, deveria usar qual processo e layout?",
          opcoes: ["Contínuo com linha dedicada", "Jobbing/lotes pequenos com layout funcional ou celular", "Massa com linha", "Projeto posicional"], correta: 1,
          explicacao: "Baixo volume e alta variedade." },
        { id: "m01-q112", nivel: "medio", tipo: "calculo", pergunta: "Tempo padrão de 0,4 min/caixa; 480 min disponíveis; produção real de 1.080 caixas. Qual a eficiência (%)?",
          resposta: 90, tolerancia: 0, unidade: "%",
          resolucao: "Produção padrão = 480 ÷ 0,4 = 1.200\nEficiência = 1.080 ÷ 1.200 × 100 = 90%",
          explicacao: "Real ÷ padrão." },
        { id: "m01-q113", nivel: "dificil", tipo: "caso", contexto: "A Doces Serra compete no mercado premium. A linha de bombons bate recorde de produção, mas acumula estoque de sabores que não vendem, enquanto faltam os sabores mais pedidos.",
          pergunta: "Qual o diagnóstico mais completo?",
          opcoes: ["Tudo certo: recorde de produção", "Subotimização e desalinhamento: produção medida por volume, não pelo que o cliente pede; ajustar planejamento (PCP) e indicadores (OTIF, mix)", "Falta de máquinas", "Problema só do marketing"], correta: 1,
          explicacao: "Volume sem aderência à demanda gera estoque e falta ao mesmo tempo." },
        { id: "m01-q114", nivel: "dificil", tipo: "vf", pergunta: "Uma recomendação forte à diretoria apresenta custo, ganho em R$, riscos e como o resultado será medido.",
          correta: true, explicacao: "Evidências e trade-offs." },
        { id: "m01-q115", nivel: "dificil", tipo: "discursiva", pergunta: "Em até 8 linhas, faça um diagnóstico da Doces Serra usando pelo menos quatro conceitos do módulo e proponha a primeira ação.",
          respostaModelo: "**Sistema:** a empresa transforma cacau, embalagens e pedidos em caixas de bombom para redes de varejo (SIPOC). **4 Vs:** volume médio, variedade crescente, variação forte (Páscoa/Natal). **Estratégia:** mercado premium — qualidade e aparência são ganhadores; entrega confiável é qualificador. **Indicadores:** OTIF de 80% e refugo de 5% mostram problema de confiabilidade e qualidade; a produtividade por hora não deve ser o único indicador (Goodhart). **Pareto:** embalagem e qualidade explicam 75% dos atrasos. **Primeira ação:** estoque de segurança e kanban de embalagem, com meta de OTIF 92% em 3 meses e acompanhamento semanal.",
          criterios: ["Usa pelo menos quatro conceitos do módulo corretamente", "Relaciona estratégia e indicadores", "Usa dados para priorizar", "Propõe primeira ação com meta mensurável"] }
      ]
    }
  ],

  glossario: [
    { termo: "Engenharia de Produção", definicao: "Engenharia que projeta, melhora e implanta sistemas produtivos integrados de pessoas, materiais, informação, equipamentos, energia e dinheiro." },
    { termo: "ART", definicao: "Anotação de Responsabilidade Técnica, registrada no Crea para serviços de engenharia." },
    { termo: "Subotimização", definicao: "Melhorar uma parte do sistema piorando o resultado do todo." },
    { termo: "Administração Científica", definicao: "Abordagem de Taylor: estudo de tempos, padronização e separação entre planejamento e execução." },
    { termo: "Produção em massa", definicao: "Alto volume de produtos padronizados, com linhas dedicadas e economia de escala." },
    { termo: "Produção enxuta", definicao: "Sistema derivado da Toyota que busca variedade com baixo custo, eliminando desperdícios." },
    { termo: "Estudos de Hawthorne", definicao: "Pesquisas (anos 1920–30) que evidenciaram a influência de fatores sociais no desempenho." },
    { termo: "ABEPRO", definicao: "Associação Brasileira de Engenharia de Produção; define 10 áreas da profissão." },
    { termo: "Sistema de produção", definicao: "Conjunto que transforma entradas em saídas de valor, com realimentação." },
    { termo: "Recursos transformados", definicao: "Materiais, informações e clientes que são processados." },
    { termo: "Recursos transformadores", definicao: "Instalações e pessoas que realizam a transformação." },
    { termo: "SIPOC", definicao: "Fornecedores, entradas, processo, saídas e clientes: visão do processo numa linha." },
    { termo: "4 Vs", definicao: "Volume, variedade, variação da demanda e visibilidade." },
    { termo: "Linha de frente / retaguarda", definicao: "Atividades com contato com o cliente × atividades de processamento sem o cliente." },
    { termo: "Servitização", definicao: "Oferta de serviços ou resultados associados ao produto, em vez de só o produto." },
    { termo: "Matriz produto-processo", definicao: "Relação entre volume/variedade do produto e o tipo de processo adequado (Hayes e Wheelwright)." },
    { termo: "Customização em massa", definicao: "Oferta de variedade com custos próximos aos da produção em massa." },
    { termo: "Objetivos de desempenho", definicao: "Qualidade, rapidez, confiabilidade, flexibilidade e custo." },
    { termo: "Ganhador de pedido", definicao: "Critério que faz o cliente escolher a empresa." },
    { termo: "Qualificador", definicao: "Critério mínimo para a empresa ser considerada pelo cliente." },
    { termo: "Fábrica focada", definicao: "Operação concentrada em poucos objetivos coerentes (Skinner)." },
    { termo: "Cone de areia", definicao: "Modelo de construção cumulativa de capacidades: qualidade, confiabilidade, flexibilidade, custo." },
    { termo: "Produtividade", definicao: "Saídas ÷ entradas." },
    { termo: "Produtividade multifatorial", definicao: "Saídas ÷ soma de vários recursos, em unidades monetárias." },
    { termo: "Eficiência", definicao: "Uso dos recursos; produção real ÷ produção padrão." },
    { termo: "Eficácia", definicao: "Atingir o objetivo." },
    { termo: "Efetividade", definicao: "Gerar impacto duradouro (eficaz e eficiente)." },
    { termo: "OTIF", definicao: "Pedidos entregues no prazo e completos ÷ total de pedidos." },
    { termo: "Lei de Goodhart", definicao: "Quando uma medida vira meta, tende a deixar de ser uma boa medida." }
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
