/* =====================================================================
   MÓDULO 14 — DADOS E ANALYTICS PARA ENGENHARIA DE PRODUÇÃO
   Trilha paralela: libera assim que o Módulo 13 (Estatística) é concluído
   (campo "liberaApos"), mesmo ficando no fim da trilha.
   Formato com níveis: veja o cabeçalho de "modulo-02.js".
   Exemplos numéricos são ILUSTRATIVOS (criados para ensino).
   ===================================================================== */
(window.MODULOS = window.MODULOS || []).push({
  id: "m14",
  numero: 14,
  ordem: 14,
  liberaApos: ["m13"],
  titulo: "Dados e Analytics",
  icone: "📊",
  objetivo: "Coletar, tratar, analisar e comunicar dados de produção com qualidade, usando planilhas, SQL, Python, BI e modelos preditivos com senso crítico.",
  conquista: { id: "mod-m14", nome: "Engenheiro(a) de Dados de Chão de Fábrica", icone: "📊", descricao: "Concluiu o Módulo 14 — Dados e Analytics." },

  resumoAudio:
    "Lixo entra, lixo sai: antes de analisar, verifique a qualidade dos dados. Completude, exatidão, consistência, atualidade, validade e unicidade. " +
    "Corrigir na origem é melhor que limpar depois. " +
    "Numa planilha bem feita, cada variável é uma coluna e cada observação é uma linha. Não misture dado com relatório. " +
    "Indicador bom tem fórmula, fonte, frequência, dono e meta. OEE é disponibilidade vezes performance vezes qualidade. " +
    "Média de razões não é razão das somas, e o paradoxo de Simpson mostra que o total pode contar outra história. " +
    "SQL: selecione, filtre, agrupe e junte tabelas; cuidado com junções que duplicam linhas. " +
    "Dashboard responde uma pergunta para uma decisão. Medida calcula no contexto; coluna calculada, linha a linha. " +
    "Do sensor ao ERP: níveis da automação. Rastreabilidade por lote reduz o tamanho do recall. " +
    "Em modelos preditivos, acurácia alta pode enganar: olhe precisão e recall e o custo de cada erro. " +
    "Dado é meio, decisão é o fim.",

  licoes: [
    /* ==================================================================
       LIÇÃO 1 — FONTES E QUALIDADE DOS DADOS
       ================================================================== */
    {
      id: "m14-l1",
      titulo: "Dados na produção: fontes e qualidade",
      icone: "🗃️",
      objetivos: {
        facil: ["Identificar as principais fontes de dados de uma fábrica", "Diferenciar dado, informação e decisão", "Reconhecer problemas comuns de qualidade de dados"],
        medio: ["Avaliar um conjunto de dados pelas dimensões de qualidade", "Calcular completude e taxa de duplicidade", "Propor regras de validação na origem"],
        dificil: ["Analisar mecanismos de dados faltantes e o risco de viés", "Desenhar governança mínima (dono, dicionário, linhagem)", "Considerar a LGPD ao tratar dados de pessoas"]
      },
      prerequisitos: [{ texto: "População, amostra e tipos de variável (Módulo 13)", licao: "m13-l1" }],
      resumo: {
        facil: "Dados vêm do **ERP, MES, CLP/SCADA, sensores, sistemas de qualidade, planilhas e apontamentos manuais**. Problemas comuns: campos vazios, duplicados, erros de digitação, unidades e formatos misturados. **Lixo entra, lixo sai.**",
        medio: "Dimensões de qualidade: **completude, exatidão, consistência, atualidade, validade e unicidade**. Meça (ex.: completude = preenchidos ÷ total) e **corrija na origem** com listas, faixas válidas, campos obrigatórios e registro automático.",
        dificil: "Dados faltantes podem ser aleatórios ou **não aleatórios** (MNAR): excluir ou imputar pode enviesar. Governança exige **dono, dicionário e linhagem** dos dados. Dados de operadores são **dados pessoais** (LGPD): finalidade, necessidade, transparência e segurança."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Decisões de PCP, qualidade, manutenção e custos dependem de dados. Uma análise sofisticada sobre dados ruins produz **conclusões erradas com cara de verdade**." },
        { nivel: "facil", tipo: "conceito", titulo: "De onde vêm os dados", texto: "**ERP:** pedidos, estoques, compras, custos.\n**MES:** ordens de produção, apontamentos, paradas, refugo.\n**CLP/SCADA:** sinais das máquinas (ligada, velocidade, temperatura).\n**Sensores IoT:** vibração, consumo de energia.\n**Sistemas de qualidade:** inspeções e não conformidades.\n**Planilhas e apontamento manual:** ainda muito comuns." },
        { nivel: "facil", tipo: "conceito", titulo: "Do dado à decisão", texto: "**Dado:** registro bruto (“máquina 3 parada às 14h05”).\n**Informação:** dado organizado com contexto (“máquina 3 parou 5 vezes esta semana, 4 por falta de material”).\n**Decisão/ação:** “rever o abastecimento da máquina 3”." },
        { nivel: "facil", tipo: "bobo", titulo: "A planilha de gastos", texto: "Categorias “mercado”, “Mercado”, “supermercado” e “merc.”: quatro nomes para a mesma coisa. Na hora de somar, o gasto com mercado aparece picado e **menor** do que é." },
        { nivel: "facil", tipo: "conceito", titulo: "Problemas comuns", texto: "Campos vazios · registros duplicados · erros de digitação · **unidades misturadas** (kg e g) · datas em formatos diferentes · códigos de produto inconsistentes · relógios de máquinas desalinhados." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Lixo entra, lixo sai.”** (GIGO: garbage in, garbage out)" },

        { nivel: "medio", tipo: "conceito", titulo: "Dimensões de qualidade", texto: "**Completude:** o que deveria estar preenchido está?\n**Exatidão:** o valor corresponde à realidade?\n**Consistência:** o mesmo dado bate entre sistemas?\n**Atualidade:** está disponível a tempo de decidir?\n**Validade:** respeita formato e faixa (temperatura entre 0 e 300 °C)?\n**Unicidade:** cada evento aparece uma vez só?" },
        { nivel: "medio", tipo: "formula", titulo: "Medindo a qualidade", texto: "**Completude = registros preenchidos ÷ registros totais**\n**Taxa de duplicidade = registros duplicados ÷ registros totais**\nEx.: 1.200 apontamentos de parada; 180 sem motivo → completude do campo “motivo” = 1.020 ÷ 1.200 = **85%**. 36 duplicados → **3%**.",
          legenda: [["registros totais", "quantidade de linhas avaliadas"]] },
        { nivel: "medio", tipo: "passos", titulo: "Validação na origem", texto: "1. **Listas suspensas** para motivos e códigos (nada de texto livre).\n2. **Faixas válidas** (quantidade não negativa, temperatura plausível).\n3. **Campos obrigatórios** para o que é essencial.\n4. **Data e hora automáticas** (não digitadas).\n5. **Leitura de código de barras/QR** em vez de digitar." },
        { nivel: "medio", tipo: "atencao", titulo: "Corrigir na origem", texto: "Limpar os dados toda semana em planilha é trabalho que se repete para sempre e depende de quem limpa. Corrigir **na coleta** resolve de vez." },

        { nivel: "dificil", tipo: "conceito", titulo: "Dados faltantes não são neutros", texto: "Classificação de Rubin (1976): **MCAR** (falta totalmente ao acaso), **MAR** (falta depende de outra variável observada) e **MNAR** (falta depende do próprio valor).\nEx. MNAR: o operador deixa de apontar paradas quando a causa é dele → o banco **subestima** paradas por erro operacional.\nExcluir linhas ou preencher com a média pode **distorcer** a análise: primeiro entenda por que falta." },
        { nivel: "dificil", tipo: "conceito", titulo: "Governança mínima", texto: "**Dono do dado:** quem responde pela definição e qualidade.\n**Dicionário de dados:** significado, unidade, formato e fonte de cada campo.\n**Linhagem:** de onde o dado veio e que transformações sofreu.\n**Fonte única da verdade:** um número oficial para cada indicador." },
        { nivel: "dificil", tipo: "conceito", titulo: "LGPD e dados de pessoas", texto: "Produtividade individual, biometria de ponto e imagens de câmeras são **dados pessoais** (Lei 13.709/2018). Princípios como **finalidade, necessidade, transparência e segurança** se aplicam: colete o necessário, informe o uso, proteja o acesso." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Dado de máquina também erra", texto: "Sensores descalibrados, contagem dupla na esteira, relógios fora de sincronia e paradas curtas não detectadas. Valide o dado automático contra observação direta antes de confiar." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• DAMA International. *DAMA-DMBOK: Data Management Body of Knowledge*.\n• RUBIN, D. B. Inference and missing data. *Biometrika*, 1976.\n• Brasil. Lei nº 13.709/2018 (LGPD)." }
      ],
      questoes: [
        { id: "m14-q001", nivel: "facil", tipo: "ligar", pergunta: "Ligue o sistema ao dado típico:",
          pares: [["ERP", "Pedidos, estoques e custos"], ["MES", "Ordens, apontamentos e paradas"], ["CLP/SCADA", "Sinais das máquinas"], ["Sistema de qualidade", "Inspeções e não conformidades"]],
          explicacao: "Cada sistema cobre uma camada da operação." },
        { id: "m14-q002", nivel: "facil", tipo: "multipla", pergunta: "“A máquina 3 parou 5 vezes nesta semana, 4 delas por falta de material.” Isso é:",
          opcoes: ["Um dado bruto", "Informação (dado organizado com contexto)", "Uma decisão", "Um sensor"], correta: 1,
          explicacao: "A decisão viria depois: “rever o abastecimento da máquina 3”." },
        { id: "m14-q003", nivel: "facil", tipo: "vf", pergunta: "Registrar o mesmo material ora em kg, ora em g, na mesma coluna, é um problema de qualidade de dados.",
          correta: true, explicacao: "Unidades misturadas geram somas e médias erradas." },
        { id: "m14-q004", nivel: "facil", tipo: "lacuna", pergunta: "Na análise de dados vale a regra: lixo entra, lixo ___.",
          opcoes: ["sai", "some", "melhora", "fica"], correta: 0,
          explicacao: "Dados ruins produzem conclusões ruins, por melhor que seja a análise." },
        { id: "m14-q005", nivel: "medio", tipo: "calculo", pergunta: "De 1.200 apontamentos de parada, 180 estão sem motivo. Qual a completude do campo “motivo” (%)?",
          resposta: 85, tolerancia: 0.1, unidade: "%",
          resolucao: "Completude = (1.200 − 180) ÷ 1.200 × 100 = 1.020 ÷ 1.200 × 100 = 85%",
          explicacao: "15% das paradas não podem ser analisadas por causa." },
        { id: "m14-q006", nivel: "medio", tipo: "ligar", pergunta: "Ligue o problema à dimensão de qualidade afetada:",
          pares: [["O mesmo apontamento aparece duas vezes", "Unicidade"], ["Temperatura registrada: 950 °C num forno de 200 °C", "Validade"], ["O ERP e o MES mostram estoques diferentes", "Consistência"], ["O relatório de paradas chega só no fim do mês", "Atualidade"]],
          explicacao: "Nomear a dimensão ajuda a escolher a correção." },
        { id: "m14-q007", nivel: "medio", tipo: "multipla", pergunta: "Qual a melhor forma de reduzir os motivos de parada escritos de mil jeitos diferentes?",
          opcoes: ["Limpar a planilha toda sexta-feira", "Usar uma lista suspensa de motivos padronizados na coleta", "Pedir que escrevam com mais cuidado", "Ignorar o campo motivo"], correta: 1,
          explicacao: "Corrigir na origem resolve de vez; a limpeza manual se repete para sempre." },
        { id: "m14-q008", nivel: "medio", tipo: "calculo", pergunta: "Numa base de 1.200 registros, 36 são duplicados. Qual a taxa de duplicidade (%)?",
          resposta: 3, tolerancia: 0.01, unidade: "%",
          resolucao: "36 ÷ 1.200 × 100 = 3%",
          explicacao: "Duplicados inflam contagens e somas." },
        { id: "m14-q009", nivel: "dificil", tipo: "caso", contexto: "Os operadores apontam paradas no MES, mas deixam de apontar quando a causa é um erro deles. A análise mostra que “erro operacional” é só 2% das paradas.",
          pergunta: "Qual a leitura correta?",
          opcoes: ["Erro operacional é mesmo desprezível", "Os faltantes não são aleatórios (MNAR); o número subestima o erro operacional e é preciso mudar a forma de coleta", "Basta preencher os vazios com a média", "Excluir todas as paradas sem motivo resolve"], correta: 1,
          justificativas: ["Ignora o viés da coleta.", "A falta depende do próprio valor: o dado é enviesado. Coleta automática ou cultura sem punição ajudam.", "A média de paradas não diz nada sobre a causa.", "Excluir mantém o viés."],
          explicacao: "Antes de analisar, pergunte POR QUE o dado falta." },
        { id: "m14-q010", nivel: "dificil", tipo: "multipla", pergunta: "O que é a linhagem (lineage) de um dado?",
          opcoes: ["O nome do dono do dado", "O registro de onde o dado veio e que transformações sofreu até o relatório", "A cor do gráfico", "A senha do banco de dados"], correta: 1,
          explicacao: "Sem linhagem, ninguém sabe explicar por que dois relatórios mostram números diferentes." },
        { id: "m14-q011", nivel: "dificil", tipo: "vf", pergunta: "Dados de produtividade individual de operadores identificados pelo nome são dados pessoais para a LGPD.",
          correta: true, explicacao: "Identificam uma pessoa; valem finalidade, necessidade, transparência e segurança." },
        { id: "m14-q012", nivel: "dificil", tipo: "discursiva", pergunta: "Você vai criar um painel de paradas de máquina. Proponha uma governança mínima para os dados que o alimentarão.",
          respostaModelo: "Definir o **dono** de cada dado (ex.: supervisor de produção para motivos de parada); criar um **dicionário** (o que conta como parada, unidade em minutos, lista de motivos, fonte MES); registrar a **linhagem** (MES → extração → tratamento → painel); estabelecer **regras de validação** na coleta; medir **completude e duplicidade** mensalmente; declarar o painel como **fonte única** do indicador; cuidar da LGPD se houver dados de pessoas.",
          criterios: ["Define dono(s) dos dados", "Propõe dicionário com definições e unidades", "Menciona linhagem e fonte única", "Inclui validação e medição da qualidade"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 2 — PLANILHAS QUE NÃO MENTEM
       ================================================================== */
    {
      id: "m14-l2",
      titulo: "Planilhas que não mentem",
      icone: "📑",
      objetivos: {
        facil: ["Organizar dados em formato de tabela (uma linha por observação)", "Usar funções básicas (SOMA, MÉDIA, CONT.SE)", "Montar uma tabela dinâmica simples"],
        medio: ["Usar SOMASES, CONT.SES e PROCX (ou PROCV corretamente)", "Calcular indicadores por grupo", "Diferenciar razão das somas de média das razões"],
        dificil: ["Aplicar boas práticas para reduzir erros em planilhas", "Decidir quando migrar da planilha para banco de dados ou BI", "Garantir que os cálculos possam ser auditados"]
      },
      prerequisitos: [{ texto: "Fontes e qualidade dos dados", licao: "m14-l1" }],
      resumo: {
        facil: "Dados organizados: **cada variável numa coluna, cada observação numa linha**, sem células mescladas nem totais no meio. Separe a aba de **dados** da aba de **relatório**. Tabela dinâmica resume por grupos sem fórmulas.",
        medio: "**SOMASES/CONT.SES** somam e contam com critérios; **PROCX** (ou PROCV com correspondência exata) busca valores em outra tabela. Indicador por grupo = **soma do numerador ÷ soma do denominador**, não a média das porcentagens.",
        dificil: "Erros de planilha são frequentes e silenciosos. Boas práticas: separar entradas, cálculos e saídas; tabelas nomeadas; nada de números fixos dentro das fórmulas; totais de conferência; versão e revisão. Migre para banco de dados/BI quando houver muitos usuários, grande volume ou necessidade de histórico e integração."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "A planilha é a ferramenta mais usada pelo engenheiro de produção em início de carreira. Uma planilha bem estruturada vira análise em minutos; uma mal feita vira horas de retrabalho e números errados." },
        { nivel: "facil", tipo: "conceito", titulo: "Dados em formato de tabela", texto: "Princípio dos dados organizados (“tidy data”, Wickham, 2014):\n• cada **variável** é uma **coluna**;\n• cada **observação** é uma **linha**;\n• cada tipo de coisa observada tem sua própria **tabela**." },
        { nivel: "facil", tipo: "bobo", titulo: "A planilha “bonita”", texto: "Cabeçalho mesclado, subtotal entre as linhas, cores indicando o turno e mês escrito como título. Fica bonita para imprimir, mas **impossível de filtrar, somar ou analisar**." },
        { nivel: "facil", tipo: "mapa", titulo: "Tabela de produção organizada", texto:
          "Data   | Linha | Turno | Produzidas | Refugo\n" +
          "01/03  | L1    | Manhã |   1000     |   20\n" +
          "01/03  | L1    | Noite |    800     |   40\n" +
          "01/03  | L2    | Manhã |   1200     |   12\n" +
          "01/03  | L2    | Noite |   1000     |   30" },
        { nivel: "facil", tipo: "passos", titulo: "Tabela dinâmica em 4 passos", texto: "1. Selecione a tabela de dados (sem linhas em branco).\n2. Inserir → Tabela dinâmica.\n3. Arraste **Linha** para Linhas e **Produzidas** e **Refugo** para Valores (soma).\n4. Crie a porcentagem a partir das **somas**." },
        { nivel: "facil", tipo: "atencao", titulo: "Dado × relatório", texto: "Não digite totais, cores ou comentários na aba de dados. Ela é a **fonte**; o relatório (gráficos, tabelas dinâmicas) fica em outra aba e é gerado a partir dela." },

        { nivel: "medio", tipo: "formula", titulo: "Funções com critérios", texto: "**=SOMASES(Produzidas; Linha; \"L1\"; Turno; \"Noite\")** → 800\n**=CONT.SES(Linha; \"L2\")** → 2\n**=PROCX(código; Produtos[Código]; Produtos[Custo])** → busca o custo do produto",
          legenda: [["SOMASES", "soma os valores que atendem a todos os critérios"], ["CONT.SES", "conta as linhas que atendem aos critérios"], ["PROCX", "procura um valor e devolve o correspondente de outra coluna"]] },
        { nivel: "medio", tipo: "atencao", titulo: "A armadilha do PROCV", texto: "No **PROCV**, o 4º argumento vazio ou VERDADEIRO faz **correspondência aproximada**: pode devolver o valor de outro produto **sem dar erro**. Use sempre **FALSO** (correspondência exata) ou prefira **PROCX** / **ÍNDICE + CORRESP**. O PROCV também quebra se colunas forem inseridas no meio." },
        { nivel: "medio", tipo: "exemplo", titulo: "Refugo por linha", texto: "L1: refugo = 20 + 40 = 60; produzidas = 1.800 → **3,33%**\nL2: refugo = 12 + 30 = 42; produzidas = 2.200 → **1,91%**\nCerto: **soma do refugo ÷ soma das produzidas**." },
        { nivel: "medio", tipo: "atencao", titulo: "Média das razões ≠ razão das somas", texto: "L1 tem 2% de refugo de manhã e 5% à noite. A média das porcentagens daria **3,5%**, mas o correto é **3,33%**, porque os turnos produziram quantidades diferentes. Porcentagens só podem ser somadas ou tiradas a média se forem ponderadas." },

        { nivel: "dificil", tipo: "limitacao", titulo: "Planilhas erram em silêncio", texto: "Pesquisas sobre planilhas (por exemplo, os estudos de R. Panko) encontraram erros com frequência, inclusive em planilhas usadas para decisões. Referência trocada, intervalo que não inclui a última linha, número digitado por cima de uma fórmula: nada disso gera mensagem de erro." },
        { nivel: "dificil", tipo: "passos", titulo: "Boas práticas de controle", texto: "1. Abas separadas: **entradas → cálculos → saídas**.\n2. Tabelas nomeadas (o intervalo cresce sozinho).\n3. **Nada de números fixos dentro de fórmulas** (use células de parâmetro).\n4. **Totais de conferência** (a soma por linha deve bater com o total geral).\n5. Versão e registro de alterações; revisão por outra pessoa em planilhas críticas." },
        { nivel: "dificil", tipo: "conceito", titulo: "Quando sair da planilha", texto: "Sinais: muitas pessoas editando o mesmo arquivo, dezenas de milhares de linhas, cópias “v2_final_agora_vai”, necessidade de histórico e integração com ERP/MES.\nCaminho: **banco de dados** (SQL) para guardar, **BI** para visualizar, planilha para análises pontuais." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: custo subestimado", texto: "Uma planilha de custos somava =SOMA(C2:C50), mas os produtos novos foram inseridos nas linhas 51 a 60. O custo total ficou subestimado por meses.\nPrevenção: tabela nomeada, total de conferência contra o ERP e revisão mensal." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• WICKHAM, H. Tidy Data. *Journal of Statistical Software*, 2014.\n• Estudos de R. R. Panko sobre erros em planilhas." }
      ],
      questoes: [
        { id: "m14-q013", nivel: "facil", tipo: "multipla", pergunta: "Qual estrutura facilita filtrar, somar e analisar dados?",
          opcoes: ["Cabeçalhos mesclados e subtotais entre as linhas", "Cada variável numa coluna e cada observação numa linha", "Um mês por aba, com formatos diferentes", "Cores indicando o turno, sem coluna de turno"], correta: 1,
          explicacao: "É o formato de dados organizados (tidy)." },
        { id: "m14-q014", nivel: "facil", tipo: "vf", pergunta: "Digitar os totais no meio da aba de dados facilita a análise.",
          correta: false, explicacao: "Totais misturados aos dados quebram filtros e somas. Totais ficam no relatório." },
        { id: "m14-q015", nivel: "facil", tipo: "ordenar", pergunta: "Ordene os passos para montar uma tabela dinâmica:",
          itens: ["Selecionar a tabela de dados", "Inserir a tabela dinâmica", "Colocar o campo de agrupamento em Linhas", "Colocar os valores numéricos em Valores (soma)"],
          explicacao: "A tabela dinâmica resume sem fórmulas." },
        { id: "m14-q016", nivel: "facil", tipo: "lacuna", pergunta: "Para contar quantas linhas atendem a um critério, usa-se a função ___.",
          opcoes: ["CONT.SE", "SOMA", "HOJE", "ARRED"], correta: 0,
          explicacao: "CONT.SE conta; SOMASE soma; com vários critérios, CONT.SES e SOMASES." },
        { id: "m14-q017", nivel: "medio", tipo: "calculo", pergunta: "Na tabela: L1 Manhã (1.000 produzidas, 20 refugo), L1 Noite (800, 40), L2 Manhã (1.200, 12), L2 Noite (1.000, 30). Qual o refugo da linha L1 (%)?",
          resposta: 3.33, tolerancia: 0.01, unidade: "%",
          resolucao: "Refugo L1 = 20 + 40 = 60\nProduzidas L1 = 1.000 + 800 = 1.800\n60 ÷ 1.800 × 100 ≈ 3,33%",
          explicacao: "Soma do numerador ÷ soma do denominador." },
        { id: "m14-q018", nivel: "medio", tipo: "calculo", pergunta: "Na mesma tabela, qual o refugo do turno da Noite, somando as duas linhas (%)?",
          resposta: 3.89, tolerancia: 0.01, unidade: "%",
          resolucao: "Refugo Noite = 40 + 30 = 70\nProduzidas Noite = 800 + 1.000 = 1.800\n70 ÷ 1.800 × 100 ≈ 3,89%",
          explicacao: "Compare com a Manhã: 32 ÷ 2.200 ≈ 1,45%." },
        { id: "m14-q019", nivel: "medio", tipo: "multipla", pergunta: "O PROCV foi usado sem o 4º argumento e devolveu o custo errado, sem mensagem de erro. Por quê?",
          opcoes: ["O arquivo está corrompido", "Sem FALSO, o PROCV faz correspondência aproximada e pode devolver o valor de outro código", "O PROCV só funciona com textos", "Falta atualizar o Excel"], correta: 1,
          explicacao: "Use PROCV(...; FALSO) ou PROCX." },
        { id: "m14-q020", nivel: "medio", tipo: "caso", contexto: "L1 teve 2% de refugo de manhã (1.000 peças) e 5% à noite (800 peças). Um colega informou “refugo médio de 3,5%”.",
          pergunta: "O que está errado?",
          opcoes: ["Nada", "Fez a média das porcentagens sem ponderar pelas quantidades; o correto é 60 ÷ 1.800 ≈ 3,33%", "Deveria somar 2% + 5% = 7%", "Deveria usar só o turno da manhã"], correta: 1,
          explicacao: "Média das razões ≠ razão das somas." },
        { id: "m14-q021", nivel: "dificil", tipo: "multipla", pergunta: "Qual prática MAIS reduz o risco de erro silencioso numa planilha de custos?",
          opcoes: ["Usar cores fortes", "Totais de conferência que precisam bater com outra fonte, sem números fixos dentro das fórmulas", "Juntar tudo numa aba só", "Proteger a planilha com senha"], correta: 1,
          explicacao: "Conferências cruzadas pegam erros que ninguém vê." },
        { id: "m14-q022", nivel: "dificil", tipo: "caso", contexto: "Oito analistas editam a mesma planilha de apontamentos, com 80 mil linhas e várias cópias “final_v3”. A diretoria quer histórico de 3 anos.",
          pergunta: "Qual a recomendação?",
          opcoes: ["Dividir em várias planilhas menores", "Migrar o armazenamento para um banco de dados e a visualização para uma ferramenta de BI", "Proibir edições", "Imprimir tudo mensalmente"], correta: 1,
          explicacao: "Volume, múltiplos usuários e histórico são sinais claros para sair da planilha." },
        { id: "m14-q023", nivel: "dificil", tipo: "vf", pergunta: "Se uma planilha não mostra nenhuma mensagem de erro, os cálculos estão corretos.",
          correta: false, explicacao: "Os erros mais perigosos (referência errada, intervalo incompleto, valor fixo) não geram mensagem." },
        { id: "m14-q024", nivel: "dificil", tipo: "discursiva", pergunta: "Descreva como você reestruturaria uma planilha de controle de produção “bonita”, com células mescladas, subtotais no meio e um mês por aba, para torná-la analisável e confiável.",
          respostaModelo: "Criar uma **aba única de dados** em formato de tabela (Data, Linha, Turno, Produto, Produzidas, Refugo…), uma linha por registro, sem mesclas nem subtotais, com **tabela nomeada** e **validação** (listas para Linha/Turno/Produto, números não negativos). Relatórios em outras abas via **tabela dinâmica** e fórmulas com critérios, calculando porcentagens pela **razão das somas**. Adicionar **totais de conferência**, uma aba de parâmetros, registro de versão e revisão por outra pessoa.",
          criterios: ["Converte para formato tidy numa tabela única", "Separa dados e relatório", "Inclui validação e tabela nomeada", "Inclui conferências e controle de versão"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 3 — INDICADORES E ANÁLISE EXPLORATÓRIA
       ================================================================== */
    {
      id: "m14-l3",
      titulo: "Indicadores e análise exploratória",
      icone: "🔎",
      objetivos: {
        facil: ["Descrever os elementos de uma ficha de indicador", "Calcular o OEE", "Ler um indicador ao longo do tempo antes de olhar a média"],
        medio: ["Decompor o OEE em disponibilidade, performance e qualidade e apontar a maior perda", "Seguir um roteiro de análise exploratória", "Diferenciar indicadores de resultado e de processo"],
        dificil: ["Reconhecer o paradoxo de Simpson em dados de produção", "Identificar distorções de indicadores (Goodhart, sobrevivência, correlação)", "Separar variação comum de especial antes de reagir ao número"]
      },
      prerequisitos: [
        { texto: "Planilhas que não mentem", licao: "m14-l2" },
        { texto: "Estatística descritiva (Módulo 13)", licao: "m13-l5" }
      ],
      resumo: {
        facil: "Indicador bem definido tem **nome, fórmula, unidade, fonte, frequência, dono, meta e polaridade**. **OEE = disponibilidade × performance × qualidade**, calculado sobre o tempo planejado. Olhe o gráfico no tempo antes da média.",
        medio: "Na análise exploratória: entender a pergunta → conhecer e limpar as variáveis → resumir → visualizar distribuição e tempo → **segmentar** → formular e validar hipóteses. Combine indicadores de **resultado** (refugo do mês) com indicadores de **processo** (setups padronizados).",
        dificil: "O **paradoxo de Simpson** mostra que o total pode inverter a conclusão dos grupos por causa do mix. Indicadores viram metas e se distorcem (**Goodhart**). Antes de reagir a um número ruim, verifique se é variação comum ou especial (CEP, Módulo 5)."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Sem indicador, não há gestão. Com indicador mal definido, há gestão **errada**: cada setor calcula de um jeito e as reuniões viram discussão sobre o número, não sobre o problema." },
        { nivel: "facil", tipo: "conceito", titulo: "Ficha do indicador", texto: "**Nome** · **objetivo** · **fórmula** · **unidade** · **fonte** · **frequência** · **dono** · **meta** · **polaridade** (maior é melhor ou menor é melhor?)." },
        { nivel: "facil", tipo: "formula", titulo: "OEE (eficiência global do equipamento)", texto: "**OEE = Disponibilidade × Performance × Qualidade**\nDisponibilidade = tempo operando ÷ tempo planejado\nPerformance = (produção × ciclo ideal) ÷ tempo operando\nQualidade = peças boas ÷ peças produzidas",
          legenda: [["tempo planejado", "turno menos paradas planejadas"], ["ciclo ideal", "tempo por peça na velocidade de projeto"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Calculando o OEE", texto: "Turno de 480 min, 30 min de paradas planejadas → **450 min planejados**. Paradas não planejadas: 45 min → **405 min operando**.\nCiclo ideal: 1 min/peça. Produziu 360; boas 342.\n• D = 405 ÷ 450 = **90%**\n• P = 360 × 1 ÷ 405 = **88,9%**\n• Q = 342 ÷ 360 = **95%**\n• **OEE = 0,90 × 0,889 × 0,95 ≈ 76%** (= 342 peças boas × 1 min ÷ 450 min)." },
        { nivel: "facil", tipo: "bobo", titulo: "O OEE da sua noite de estudo", texto: "Reservou 2 h (planejado). Perdeu 20 min no celular (disponibilidade). Leu devagar por sono (performance). Metade dos resumos ficou confusa (qualidade)." },
        { nivel: "facil", tipo: "atencao", titulo: "Olhe no tempo", texto: "Uma média mensal esconde tendências e picos. Faça primeiro um **gráfico de linha dia a dia**; depois calcule médias." },

        { nivel: "medio", tipo: "passos", titulo: "Roteiro de análise exploratória", texto: "1. Qual **pergunta** a análise precisa responder?\n2. Conhecer as variáveis (dicionário) e **limpar**.\n3. **Resumir** (média, mediana, desvio; Módulo 13).\n4. **Visualizar** distribuição (histograma, boxplot) e tempo (linha).\n5. **Segmentar** por linha, turno, produto, fornecedor.\n6. Formular **hipóteses** e validá-las (dados, Gemba, teste)." },
        { nivel: "medio", tipo: "conceito", titulo: "Resultado × processo", texto: "**Indicadores de resultado (lagging):** mostram o que já aconteceu (refugo do mês, OTIF, custo por unidade).\n**Indicadores de processo (leading):** antecipam o resultado (% de setups com checklist, temperatura dentro da faixa, horas de treinamento).\nGestão só por resultado reage tarde demais." },
        { nivel: "medio", tipo: "dica", titulo: "Leia o OEE pela maior perda", texto: "No exemplo, a maior perda é a **performance (88,9%)**: pequenas paradas e velocidade reduzida. É ali que um Kaizen tende a render mais." },
        { nivel: "medio", tipo: "conexao", titulo: "Conexão", texto: "OEE é um indicador central da **TPM** (Nakajima) e aparece no Módulo 6. Eficiência e utilização (Módulo 4) seguem a mesma lógica para pessoas." },

        { nivel: "dificil", tipo: "exemplo", titulo: "Paradoxo de Simpson", texto: "Refugo por turno e tipo de produto:\n• **Turno A:** simples 27/900 (3%) · complexo 11/100 (11%) → total **3,8%**\n• **Turno B:** simples 2/100 (2%) · complexo 90/900 (10%) → total **9,2%**\nB é **melhor nos dois produtos**, mas pior no total, porque produz muito mais o complexo. Comparar só o total levaria a “premiar” o turno errado." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Armadilhas de indicadores", texto: "• **Goodhart:** meta de OEE pode levar a “esconder” paradas planejadas.\n• **Sobrevivência:** analisar só lotes aprovados esconde os problemas dos reprovados.\n• **Correlação ≠ causa** (Módulo 13).\n• **Mix:** mudanças no mix de produtos mudam o indicador sem que o processo mude." },
        { nivel: "dificil", tipo: "conceito", titulo: "Antes de reagir ao número", texto: "Todo processo varia. Um mês pior pode ser só **variação comum**. Reagir a cada oscilação (ajustar, cobrar, trocar procedimento) pode **aumentar** a variação.\nUse gráficos de controle (Módulo 5) para separar variação comum de **causa especial**." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• NAKAJIMA, S. *Introdução ao TPM* (OEE).\n• TUKEY, J. W. *Exploratory Data Analysis* (1977).\n• Módulo 5 deste curso: CEP." }
      ],
      questoes: [
        { id: "m14-q025", nivel: "facil", tipo: "multipla", pergunta: "Qual item NÃO faz parte da ficha de um indicador?",
          opcoes: ["Fórmula", "Dono", "Frequência de atualização", "Cor favorita do diretor"], correta: 3,
          explicacao: "Ficha: nome, objetivo, fórmula, unidade, fonte, frequência, dono, meta e polaridade." },
        { id: "m14-q026", nivel: "facil", tipo: "calculo", pergunta: "Disponibilidade 90%, performance 88,9% e qualidade 95%. Qual o OEE (%)?",
          resposta: 76, tolerancia: 0.1, unidade: "%",
          resolucao: "OEE = 0,90 × 0,889 × 0,95 ≈ 0,760 → 76%",
          explicacao: "As três perdas se multiplicam." },
        { id: "m14-q027", nivel: "facil", tipo: "vf", pergunta: "Antes de calcular a média mensal, é recomendável olhar o gráfico do indicador dia a dia.",
          correta: true, explicacao: "O gráfico no tempo revela tendências e picos que a média esconde." },
        { id: "m14-q028", nivel: "facil", tipo: "lacuna", pergunta: "OEE = disponibilidade × performance × ___.",
          opcoes: ["qualidade", "custo", "velocidade", "estoque"], correta: 0,
          explicacao: "Qualidade = peças boas ÷ peças produzidas." },
        { id: "m14-q029", nivel: "medio", tipo: "calculo", pergunta: "Tempo planejado 450 min; paradas não planejadas 45 min. Qual a disponibilidade (%)?",
          resposta: 90, tolerancia: 0.1, unidade: "%",
          resolucao: "Tempo operando = 450 − 45 = 405 min\nD = 405 ÷ 450 = 90%",
          explicacao: "Paradas planejadas já saíram do tempo planejado." },
        { id: "m14-q030", nivel: "medio", tipo: "calculo", pergunta: "Tempo operando 405 min; ciclo ideal 1 min/peça; produziu 360 peças. Qual a performance (%)?",
          resposta: 88.9, tolerancia: 0.1, unidade: "%",
          resolucao: "P = (360 × 1) ÷ 405 ≈ 0,889 → 88,9%",
          explicacao: "Perdas de velocidade e pequenas paradas aparecem aqui." },
        { id: "m14-q031", nivel: "medio", tipo: "ordenar", pergunta: "Ordene o roteiro de análise exploratória:",
          itens: ["Definir a pergunta", "Conhecer e limpar as variáveis", "Resumir com estatísticas", "Visualizar distribuição e tempo", "Segmentar por grupos", "Formular e validar hipóteses"],
          explicacao: "A pergunta guia tudo; as hipóteses precisam de validação." },
        { id: "m14-q032", nivel: "medio", tipo: "ligar", pergunta: "Classifique cada indicador:",
          pares: [["Refugo do mês", "Resultado"], ["% de setups feitos com checklist", "Processo"], ["OTIF do trimestre", "Resultado"], ["Temperatura do forno dentro da faixa", "Processo"]],
          explicacao: "Indicadores de processo antecipam o resultado." },
        { id: "m14-q033", nivel: "dificil", tipo: "calculo", pergunta: "Turno B: produto simples 2 refugos em 100; complexo 90 em 900. Qual o refugo total do turno B (%)?",
          resposta: 9.2, tolerancia: 0.01, unidade: "%",
          resolucao: "(2 + 90) ÷ (100 + 900) × 100 = 92 ÷ 1.000 = 9,2%",
          explicacao: "O mix (muito produto complexo) puxa o total para cima." },
        { id: "m14-q034", nivel: "dificil", tipo: "caso", contexto: "Turno A: 3% (simples) e 11% (complexo), total 3,8%. Turno B: 2% (simples) e 10% (complexo), total 9,2%. A diretoria quer premiar o turno A “pelo menor refugo”.",
          pergunta: "Qual a análise correta?",
          opcoes: ["Premiar A: tem o menor total", "B é melhor em cada produto; o total de A é menor porque produz mais o produto simples (paradoxo de Simpson)", "Os turnos são iguais", "Não é possível concluir nada"], correta: 1,
          justificativas: ["O total mistura o efeito do mix com o desempenho.", "Comparando dentro de cada produto, B tem menos refugo.", "Há diferença clara dentro de cada grupo.", "A segmentação permite concluir."],
          explicacao: "Sempre segmente antes de comparar totais." },
        { id: "m14-q035", nivel: "dificil", tipo: "vf", pergunta: "Se o refugo deste mês ficou um pouco acima do anterior, o processo certamente piorou e precisa de ação corretiva.",
          correta: false, explicacao: "Pode ser variação comum. Use um gráfico de controle para identificar causa especial." },
        { id: "m14-q036", nivel: "dificil", tipo: "discursiva", pergunta: "O OEE virou meta de bônus e subiu de 65% para 80% em dois meses, sem melhoria visível na produção entregue. Analise possíveis causas e proponha ajustes.",
          respostaModelo: "Possível efeito **Goodhart**: reclassificar paradas não planejadas como planejadas (reduz o tempo planejado), ajustar o ciclo ideal para um valor mais lento, deixar de registrar pequenas paradas ou refugo. Ajustes: **ficha do indicador** com regras claras (o que é parada planejada, ciclo ideal de projeto), **auditoria** dos apontamentos, acompanhar junto indicadores de **resultado** (peças boas entregues, OTIF), usar OEE para diagnóstico de perdas e não como meta isolada.",
          criterios: ["Identifica o efeito Goodhart", "Aponta formas concretas de manipular o OEE", "Propõe regras claras e auditoria", "Propõe acompanhar indicadores de resultado"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 4 — SQL E PYTHON
       ================================================================== */
    {
      id: "m14-l4",
      titulo: "SQL e Python para engenheiros",
      icone: "🐍",
      objetivos: {
        facil: ["Explicar tabela, linha, coluna e chave num banco relacional", "Ler uma consulta SELECT simples", "Descrever o que o Python com pandas faz numa análise"],
        medio: ["Ler e escrever consultas com WHERE, GROUP BY e JOIN", "Prever o resultado de uma agregação", "Traduzir um SOMASES para GROUP BY"],
        dificil: ["Identificar junções que duplicam linhas e inflam somas", "Diferenciar WHERE e HAVING", "Escolher entre planilha, SQL, Python e BI e garantir reprodutibilidade"]
      },
      prerequisitos: [{ texto: "Planilhas que não mentem", licao: "m14-l2" }],
      resumo: {
        facil: "Banco relacional = **tabelas** com linhas e colunas; a **chave primária** identifica cada linha e a **chave estrangeira** liga tabelas. **SELECT … FROM … WHERE** escolhe colunas e filtra linhas. **Python com pandas** lê, limpa, agrupa e gera gráficos com scripts reaproveitáveis.",
        medio: "**GROUP BY** agrupa e calcula (SUM, COUNT, AVG); é o SOMASES do SQL. **JOIN** junta tabelas pela chave. Ordem lógica: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.",
        dificil: "Juntar por uma chave **não única** multiplica linhas e **infla somas** sem erro. WHERE filtra linhas antes de agrupar; HAVING filtra grupos depois. Scripts versionados tornam a análise **reprodutível**; automatizar dado ruim só automatiza o erro."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Os dados de ERP e MES ficam em **bancos de dados**. Saber consultar diretamente, sem esperar o relatório pronto, é um diferencial concreto em estágios e entrevistas." },
        { nivel: "facil", tipo: "conceito", titulo: "Banco de dados relacional", texto: "**Tabela:** conjunto de registros de um tipo (produção, produtos).\n**Linha:** um registro. **Coluna:** um atributo.\n**Chave primária:** identifica cada linha de forma única (id).\n**Chave estrangeira:** coluna que aponta para outra tabela (produção.produto → produtos.código)." },
        { nivel: "facil", tipo: "mapa", titulo: "Tabela “producao” e uma consulta", texto:
          "id | linha | produto | qtd\n" +
          " 1 | L1    | A       | 100\n" +
          " 2 | L1    | B       |  50\n" +
          " 3 | L2    | A       |  70\n" +
          " 4 | L2    | A       |  30\n" +
          " 5 | L1    | A       |  20\n\n" +
          "SELECT produto, qtd\n" +
          "FROM producao\n" +
          "WHERE linha = 'L1';\n" +
          "→ devolve as linhas 1, 2 e 5" },
        { nivel: "facil", tipo: "conceito", titulo: "Python e pandas", texto: "**Python** é uma linguagem de programação; a biblioteca **pandas** trabalha com tabelas (DataFrames): ler arquivos, limpar, filtrar, agrupar e gerar gráficos. A vantagem sobre a planilha: o **script** registra cada passo e pode ser rodado de novo com os dados novos." },
        { nivel: "facil", tipo: "bobo", titulo: "A agenda de contatos", texto: "Uma tabela de contatos (nome, telefone) e outra de aniversários (nome, data). Para mandar parabéns, você **junta** as duas pelo nome. Se houver dois “João”, a junção se confunde: por isso existem chaves únicas." },
        { nivel: "facil", tipo: "dica", titulo: "Não precisa ser programador", texto: "Ler e escrever consultas simples e entender um script curto já diferencia muito um estagiário de engenharia de produção." },

        { nivel: "medio", tipo: "mapa", titulo: "GROUP BY = SOMASES", texto:
          "SELECT linha, SUM(qtd) AS total\n" +
          "FROM producao\n" +
          "GROUP BY linha;\n\n" +
          "linha | total\n" +
          "L1    | 170\n" +
          "L2    | 100\n\n" +
          "Em pandas:\n" +
          "df.groupby('linha')['qtd'].sum()" },
        { nivel: "medio", tipo: "mapa", titulo: "JOIN: juntando tabelas", texto:
          "SELECT p.linha, SUM(p.qtd * c.custo) AS custo_total\n" +
          "FROM producao p\n" +
          "JOIN produtos c ON c.codigo = p.produto\n" +
          "GROUP BY p.linha;\n\n" +
          "Junta cada registro de produção ao custo do produto." },
        { nivel: "medio", tipo: "conceito", titulo: "Ordem lógica da consulta", texto: "Escrevemos SELECT primeiro, mas o banco processa na ordem:\n**FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY**.\nPor isso o WHERE filtra **linhas** antes de agrupar e o HAVING filtra **grupos** depois." },
        { nivel: "medio", tipo: "atencao", titulo: "WHERE × HAVING", texto: "“Linhas com total acima de 150” é filtro de **grupo** → **HAVING SUM(qtd) > 150**. Colocar isso no WHERE dá erro, porque a soma ainda não existe nessa etapa." },

        { nivel: "dificil", tipo: "exemplo", titulo: "O JOIN que duplica", texto: "A tabela de preços tem, por erro, **duas linhas para o produto A**. Ao juntar produção × preços por produto, cada registro de A aparece **duas vezes**.\nSUM(qtd) de A passa de 220 para **440**, sem nenhuma mensagem de erro.\nPrevenção: verificar se a chave é única antes de juntar e comparar o total antes × depois da junção." },
        { nivel: "dificil", tipo: "conceito", titulo: "Reprodutibilidade", texto: "Uma análise feita com cliques manuais não pode ser repetida nem auditada. Script (SQL/Python) **versionado** (ex.: Git), com os dados de entrada identificados, permite repetir, revisar e automatizar." },
        { nivel: "dificil", tipo: "conceito", titulo: "Qual ferramenta usar", texto: "**Planilha:** análise pontual, poucos dados, uma pessoa.\n**SQL:** extrair e agregar dados de sistemas.\n**Python:** limpeza complexa, estatística, automação, modelos.\n**BI:** painéis recorrentes para muitas pessoas.\nNa prática, se combinam: SQL extrai, Python trata, BI mostra." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Automatizar não corrige", texto: "Automatizar um relatório com dados ruins só entrega o erro **mais rápido e para mais gente**. Qualidade de dados (lição 1) vem antes." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• McKINNEY, W. *Python para Análise de Dados* (autor do pandas).\n• Documentação oficial do pandas e tutoriais de SQL do seu banco de dados." }
      ],
      questoes: [
        { id: "m14-q037", nivel: "facil", tipo: "ligar", pergunta: "Ligue o termo ao significado:",
          pares: [["Chave primária", "Identifica cada linha de forma única"], ["Chave estrangeira", "Aponta para uma linha de outra tabela"], ["Coluna", "Um atributo do registro"], ["Linha", "Um registro"]],
          explicacao: "Chaves ligam as tabelas de um banco relacional." },
        { id: "m14-q038", nivel: "facil", tipo: "calculo", pergunta: "Tabela producao: (L1, A, 100), (L1, B, 50), (L2, A, 70), (L2, A, 30), (L1, A, 20). Quantas linhas a consulta SELECT * FROM producao WHERE linha = 'L1' devolve?",
          resposta: 3, tolerancia: 0, unidade: "linhas",
          resolucao: "Linhas com linha = 'L1': (L1, A, 100), (L1, B, 50), (L1, A, 20) → 3 linhas.",
          explicacao: "O WHERE filtra as linhas." },
        { id: "m14-q039", nivel: "facil", tipo: "vf", pergunta: "Uma vantagem do script em Python sobre cliques manuais é poder repetir a mesma análise com dados novos.",
          correta: true, explicacao: "O script registra cada passo." },
        { id: "m14-q040", nivel: "facil", tipo: "lacuna", pergunta: "No SQL, a cláusula que filtra linhas por uma condição é o ___.",
          opcoes: ["WHERE", "SELECT", "FROM", "ORDER BY"], correta: 0,
          explicacao: "SELECT escolhe colunas; FROM indica a tabela; WHERE filtra." },
        { id: "m14-q041", nivel: "medio", tipo: "calculo", pergunta: "Na mesma tabela, qual o total de L1 em SELECT linha, SUM(qtd) FROM producao GROUP BY linha?",
          resposta: 170, tolerancia: 0, unidade: "",
          resolucao: "L1: 100 + 50 + 20 = 170 (L2: 70 + 30 = 100).",
          explicacao: "GROUP BY é o SOMASES do SQL." },
        { id: "m14-q042", nivel: "medio", tipo: "calculo", pergunta: "Qual o total de L1 em: SELECT linha, SUM(qtd) FROM producao WHERE produto = 'A' GROUP BY linha?",
          resposta: 120, tolerancia: 0, unidade: "",
          resolucao: "O WHERE deixa só o produto A: L1 → 100 + 20 = 120 (L2 → 100).",
          explicacao: "WHERE filtra antes de agrupar." },
        { id: "m14-q043", nivel: "medio", tipo: "ordenar", pergunta: "Ordene como o banco processa logicamente uma consulta:",
          itens: ["FROM", "WHERE", "GROUP BY", "HAVING", "SELECT", "ORDER BY"],
          explicacao: "Por isso HAVING pode usar agregados e WHERE não." },
        { id: "m14-q044", nivel: "medio", tipo: "multipla", pergunta: "Qual comando pandas equivale a somar qtd por linha?",
          opcoes: ["df.sort_values('qtd')", "df.groupby('linha')['qtd'].sum()", "df.head()", "df.dropna()"], correta: 1,
          explicacao: "groupby + sum = GROUP BY + SUM." },
        { id: "m14-q045", nivel: "dificil", tipo: "calculo", pergunta: "O produto A tem 220 unidades produzidas no total. A tabela de preços tem, por erro, duas linhas para A. Após o JOIN por produto, quanto dará SUM(qtd) de A?",
          resposta: 440, tolerancia: 0, unidade: "",
          resolucao: "Cada registro de A casa com 2 linhas de preço → aparece duas vezes.\n220 × 2 = 440.",
          explicacao: "Junção por chave não única duplica linhas sem erro." },
        { id: "m14-q046", nivel: "dificil", tipo: "multipla", pergunta: "Você quer mostrar só as linhas com total produzido acima de 150. Qual a forma correta?",
          opcoes: ["WHERE SUM(qtd) > 150", "GROUP BY linha HAVING SUM(qtd) > 150", "ORDER BY qtd > 150", "SELECT qtd > 150"], correta: 1,
          explicacao: "Filtro sobre agregado vai no HAVING, depois do GROUP BY." },
        { id: "m14-q047", nivel: "dificil", tipo: "caso", contexto: "Todo mês, um analista gera o relatório de custos com 40 cliques no Excel. Às vezes o resultado muda e ninguém sabe por quê.",
          pergunta: "Qual a melhor evolução?",
          opcoes: ["Gravar um vídeo dos cliques", "Transformar o processo em consulta SQL e/ou script versionado, com checagens de totais", "Fazer o relatório a cada trimestre", "Pedir a dois analistas que façam em paralelo"], correta: 1,
          explicacao: "Script versionado torna a análise reprodutível e auditável." },
        { id: "m14-q048", nivel: "dificil", tipo: "discursiva", pergunta: "Um relatório de custo por linha mostrou um custo 2 vezes maior que o do mês anterior logo após alguém alterar a consulta SQL. Como você investigaria?",
          respostaModelo: "Comparar a **versão anterior e a nova** da consulta; verificar **JOINs** e se as chaves das tabelas juntadas são **únicas** (contar linhas por chave); comparar **contagens e totais antes e depois** de cada junção; checar filtros (WHERE) e mudanças nos dados de origem; validar com um total de referência (ERP). Corrigir, documentar e criar checagens automáticas.",
          criterios: ["Compara versões da consulta", "Suspeita de JOIN duplicando linhas e verifica unicidade das chaves", "Compara contagens/totais antes e depois", "Propõe checagens para evitar recorrência"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 5 — VISUALIZAÇÃO E DASHBOARDS
       ================================================================== */
    {
      id: "m14-l5",
      titulo: "Visualização e dashboards",
      icone: "📈",
      objetivos: {
        facil: ["Escolher o gráfico adequado a cada pergunta", "Reconhecer erros comuns de visualização", "Explicar o que um dashboard precisa responder"],
        medio: ["Planejar um dashboard a partir do público e da decisão", "Entender o modelo estrela (fatos e dimensões) do BI", "Diferenciar medida e coluna calculada"],
        dificil: ["Avaliar criticamente um dashboard (carga, contexto, metas, alertas)", "Garantir uma fonte única da verdade e atualização confiável", "Representar variação e incerteza nos visuais"]
      },
      prerequisitos: [
        { texto: "Qual gráfico usar? (Módulo 13)", licao: "m13-l2" },
        { texto: "Indicadores e análise exploratória", licao: "m14-l3" }
      ],
      resumo: {
        facil: "Gráfico certo para cada pergunta: **linha** para o tempo, **barras** para comparar, **histograma/boxplot** para distribuição, **dispersão** para relação. Evite pizza com muitas fatias, 3D e barras com eixo que não começa no zero.",
        medio: "Dashboard nasce de **público, decisão, indicadores, frequência**. No BI, o **modelo estrela** tem tabela **fato** (eventos, com números) e **dimensões** (data, linha, produto). **Medida** calcula no contexto do filtro (agrega certo); **coluna calculada** calcula linha a linha.",
        dificil: "Bom painel mostra **contexto** (meta, histórico), destaca exceções e leva à ação. Uma **fonte única** evita “dois números para a mesma coisa”. Mostre a variação (faixas, gráfico de controle) para não reagir a ruído."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Um gráfico pode esclarecer uma decisão em segundos ou induzir ao erro. Na fábrica, o painel da reunião diária define **onde a equipe vai agir hoje**." },
        { nivel: "facil", tipo: "conceito", titulo: "Pergunta → gráfico", texto: "Evolução no tempo → **linha**\nComparar categorias → **barras** (ordenadas)\nDistribuição → **histograma** ou **boxplot**\nRelação entre duas variáveis → **dispersão**\nUm único número importante → **cartão com meta e tendência**" },
        { nivel: "facil", tipo: "atencao", titulo: "Erros comuns", texto: "• **Barras com eixo que não começa no zero:** exageram diferenças.\n• **Pizza com muitas fatias** e gráficos **3D:** distorcem a leitura.\n• **Dois eixos Y** no mesmo gráfico: fácil de manipular a impressão.\n• Cores sem significado e excesso de elementos." },
        { nivel: "facil", tipo: "bobo", titulo: "O gráfico da propaganda", texto: "“Nossa marca vende 3 vezes mais!”: a barra de 52% parece 3 vezes maior que a de 48% porque o eixo começa em 45%. É o erro clássico do eixo cortado." },
        { nivel: "facil", tipo: "conceito", titulo: "O que um dashboard deve responder", texto: "**Para quem é?** **Que decisão apoia?** **Com que frequência é olhado?** Se não houver resposta, o painel vira decoração." },

        { nivel: "medio", tipo: "passos", titulo: "Planejando um dashboard", texto: "1. **Público** (supervisor de turno? diretor?).\n2. **Decisões** que ele toma com o painel.\n3. **Indicadores** mínimos (com ficha).\n4. **Nível de detalhe** e filtros (linha, turno, produto).\n5. **Frequência** de atualização.\n6. **Protótipo** no papel e teste com o usuário." },
        { nivel: "medio", tipo: "conceito", titulo: "Modelo estrela", texto: "Popularizado por Ralph **Kimball** para data warehouses e usado em ferramentas de BI:\n• **Tabela fato:** eventos com números (produção por turno: produzidas, refugo, minutos parados).\n• **Dimensões:** descrevem os fatos (calendário, linha, produto, turno).\nFatos no centro, dimensões ao redor: facilita filtros e evita duplicidade." },
        { nivel: "medio", tipo: "conceito", titulo: "Medida × coluna calculada", texto: "**Coluna calculada:** calculada **linha a linha** e armazenada.\n**Medida:** calculada **no momento**, conforme os filtros do visual.\nEx. (DAX, Power BI): **Refugo % = DIVIDE(SUM(Refugo); SUM(Produzidas))** como medida dá a razão das somas correta em qualquer filtro. Uma coluna de % por linha, depois agregada com média, cai na armadilha da média das razões." },
        { nivel: "medio", tipo: "dica", titulo: "Hierarquia visual", texto: "O que exige ação primeiro e em destaque (canto superior esquerdo); detalhes depois. Cores reservadas para sinalizar **fora da meta**." },

        { nivel: "dificil", tipo: "conceito", titulo: "Avaliando um painel", texto: "• Cada número tem **contexto** (meta, mês anterior, tendência)?\n• Destaca **exceções** ou obriga a procurar?\n• Leva a uma **ação** clara?\n• Carga cognitiva: dá para entender em menos de um minuto?\n• Há **data de atualização** e fonte visíveis?" },
        { nivel: "dificil", tipo: "conceito", titulo: "Fonte única da verdade", texto: "Se a Produção e o Financeiro calculam o refugo de formas diferentes, cada um traz o seu número para a reunião. Defina a ficha do indicador e **um conjunto de dados oficial** alimentando todos os painéis." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Ruído parece sinal", texto: "Setas verdes e vermelhas a cada variação levam a reagir a **ruído**. Mostre a variação natural (faixas, limites de controle, Módulo 5) e sinalize só o que sai do padrão." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• KIMBALL, R.; ROSS, M. *The Data Warehouse Toolkit*.\n• FEW, S. *Information Dashboard Design*.\n• TUFTE, E. R. *The Visual Display of Quantitative Information*." }
      ],
      questoes: [
        { id: "m14-q049", nivel: "facil", tipo: "ligar", pergunta: "Ligue a pergunta ao gráfico:",
          pares: [["Como o OEE evoluiu nos últimos 30 dias?", "Linha"], ["Qual linha tem mais refugo?", "Barras ordenadas"], ["Como se distribuem os tempos de setup?", "Histograma ou boxplot"], ["Velocidade da máquina tem relação com refugo?", "Dispersão"]],
          explicacao: "Revisão do Módulo 13, aplicada a painéis." },
        { id: "m14-q050", nivel: "facil", tipo: "vf", pergunta: "Num gráfico de barras, começar o eixo Y em um valor acima de zero pode exagerar visualmente as diferenças.",
          correta: true, explicacao: "O comprimento da barra deixa de ser proporcional ao valor." },
        { id: "m14-q051", nivel: "facil", tipo: "multipla", pergunta: "Qual pergunta deve vir primeiro ao criar um dashboard?",
          opcoes: ["Quais cores usar?", "Para quem é e que decisão ele apoia?", "Quantos gráficos cabem na tela?", "Qual fonte de letra?"], correta: 1,
          explicacao: "Sem público e decisão, o painel vira decoração." },
        { id: "m14-q052", nivel: "facil", tipo: "lacuna", pergunta: "Para mostrar a evolução de um indicador ao longo do tempo, o gráfico mais adequado é o de ___.",
          opcoes: ["linha", "pizza", "radar", "rosca 3D"], correta: 0,
          explicacao: "Linha mostra tendência e sazonalidade." },
        { id: "m14-q053", nivel: "medio", tipo: "ligar", pergunta: "No modelo estrela, classifique cada tabela:",
          pares: [["Produção por turno (produzidas, refugo)", "Fato"], ["Calendário", "Dimensão"], ["Cadastro de produtos", "Dimensão"], ["Paradas registradas (minutos)", "Fato"]],
          explicacao: "Fatos têm os eventos e números; dimensões descrevem." },
        { id: "m14-q054", nivel: "medio", tipo: "multipla", pergunta: "Por que calcular “Refugo %” como MEDIDA (DIVIDE(SUM(Refugo); SUM(Produzidas))) e não como coluna agregada por média?",
          opcoes: ["Porque medidas são mais coloridas", "Porque a medida calcula a razão das somas no contexto de cada filtro, evitando a média das razões", "Porque colunas não aceitam divisão", "Não há diferença"], correta: 1,
          explicacao: "A média de porcentagens por linha ignora os pesos (lição 2)." },
        { id: "m14-q055", nivel: "medio", tipo: "ordenar", pergunta: "Ordene os passos para planejar um dashboard:",
          itens: ["Definir o público", "Definir as decisões apoiadas", "Escolher os indicadores (com ficha)", "Definir filtros e frequência", "Prototipar e testar com o usuário"],
          explicacao: "Protótipo no papel economiza horas de BI." },
        { id: "m14-q056", nivel: "medio", tipo: "vf", pergunta: "Uma coluna calculada é recalculada conforme os filtros aplicados no visual.",
          correta: false, explicacao: "Isso descreve a medida. A coluna calculada é calculada linha a linha e armazenada." },
        { id: "m14-q057", nivel: "dificil", tipo: "caso", contexto: "Na reunião, a Produção mostra refugo de 2,1% e o Financeiro mostra 3,4% para o mesmo mês.",
          pergunta: "Qual a causa provável e a solução?",
          opcoes: ["Um dos dois errou a conta; basta refazer", "Definições e fontes diferentes; criar ficha do indicador e uma fonte oficial para todos os painéis", "Usar a média dos dois", "Parar de medir refugo"], correta: 1,
          explicacao: "Sem fonte única e definição comum, cada área tem “seu” número." },
        { id: "m14-q058", nivel: "dificil", tipo: "multipla", pergunta: "Um painel pinta de vermelho qualquer dia com OEE abaixo do dia anterior. Qual o problema?",
          opcoes: ["Nenhum", "Leva a reagir a ruído (variação comum); o ideal é sinalizar o que sai dos limites naturais do processo", "Vermelho é uma cor ruim", "Deveria comparar com o ano anterior só"], correta: 1,
          explicacao: "Metade dos dias sempre será “pior que ontem”." },
        { id: "m14-q059", nivel: "dificil", tipo: "vf", pergunta: "Mostrar a data da última atualização e a fonte dos dados aumenta a confiança no painel.",
          correta: true, explicacao: "Evita decidir com dado desatualizado sem saber." },
        { id: "m14-q060", nivel: "dificil", tipo: "discursiva", pergunta: "Critique um dashboard com 18 gráficos, cores aleatórias, sem metas, atualizado manualmente “quando dá” e usado na reunião diária de produção. Proponha uma versão melhor.",
          respostaModelo: "Problemas: **excesso de informação** (carga cognitiva), cores sem significado, **sem contexto** (metas, tendência), atualização incerta (risco de decidir com dado velho), não aponta **ação**. Proposta: 4 a 6 indicadores para as decisões do dia (segurança, OEE com D-P-Q, refugo, atendimento do plano), **meta e histórico** em cada um, cores só para fora da meta ou dos limites, **atualização automática** com data visível, filtros por linha/turno e link para o detalhe das principais perdas.",
          criterios: ["Aponta excesso e falta de contexto", "Aponta a atualização incerta", "Propõe poucos indicadores ligados a decisões", "Propõe metas, cores com significado e atualização automática"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 6 — IOT, AUTOMAÇÃO E RASTREABILIDADE
       ================================================================== */
    {
      id: "m14-l6",
      titulo: "IoT, automação e rastreabilidade",
      icone: "🛰️",
      objetivos: {
        facil: ["Explicar o papel de sensor, CLP, SCADA, MES e ERP", "Definir IoT industrial e sistema ciberfísico", "Explicar rastreabilidade de lote"],
        medio: ["Posicionar sistemas nos níveis do modelo ISA-95", "Calcular o impacto de um recall com e sem rastreabilidade", "Definir os dados mínimos de rastreabilidade"],
        dificil: ["Avaliar trade-offs de conectar máquinas (custo, segurança, interoperabilidade)", "Analisar quando um gêmeo digital compensa", "Discutir riscos de segurança em redes industriais"]
      },
      prerequisitos: [{ texto: "Fontes e qualidade dos dados", licao: "m14-l1" }],
      resumo: {
        facil: "**Sensor** mede; **CLP** controla a máquina; **SCADA** supervisiona; **MES** gerencia a execução da produção; **ERP** gerencia o negócio. **IoT industrial** conecta equipamentos para coletar dados; **sistema ciberfísico** integra o físico e o digital. **Rastreabilidade** liga cada lote aos insumos, máquinas e clientes.",
        medio: "Níveis ISA-95: 0 processo, 1 sensores/atuadores, 2 controle (CLP, SCADA), 3 operações (MES), 4 negócio (ERP). Com rastreabilidade por lote, o recall atinge só os lotes afetados, não todo o período.",
        dificil: "Conectar máquinas custa (sensores, rede, integração) e cria **riscos de segurança** (redes OT expostas; normas como a IEC 62443). Padrões como **OPC UA** facilitam a interoperabilidade. Gêmeo digital compensa quando o custo de testar no real é alto e há dados confiáveis."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "A Indústria 4.0 depende de dados de chão de fábrica coletados automaticamente. Entender quem gera e quem usa cada dado evita projetos caros que não conversam entre si." },
        { nivel: "facil", tipo: "conceito", titulo: "Do sensor ao ERP", texto: "**Sensor:** mede (temperatura, presença, vibração).\n**CLP (controlador lógico programável):** comanda a máquina.\n**SCADA:** supervisão e controle de vários equipamentos em tela.\n**MES:** gerencia a execução (ordens, apontamentos, rastreabilidade).\n**ERP:** gerencia o negócio (pedidos, compras, finanças)." },
        { nivel: "facil", tipo: "conceito", titulo: "IoT industrial e sistema ciberfísico", texto: "**IoT industrial:** equipamentos e sensores conectados enviando dados.\n**Sistema ciberfísico:** integração entre o processo físico e o modelo digital, que monitora e às vezes decide (ex.: ajustar a velocidade quando a temperatura sobe)." },
        { nivel: "facil", tipo: "conceito", titulo: "Rastreabilidade", texto: "Capacidade de saber, para cada lote: **quais insumos** entraram, **quando e onde** foi feito, **por quem/qual máquina**, **com quais parâmetros** e **para qual cliente** foi. Em alimentos, fármacos e automotivo, é exigência." },
        { nivel: "facil", tipo: "bobo", titulo: "A encomenda", texto: "O código de rastreio mostra onde seu pacote está. Na fábrica, é o caminho ao contrário também: de uma reclamação do cliente até o lote de chocolate usado." },

        { nivel: "medio", tipo: "mapa", titulo: "Níveis ISA-95", texto:
          "Nível 4  ERP ............ negócio (dias/meses)\n" +
          "Nível 3  MES ............ operações (turnos/horas)\n" +
          "Nível 2  SCADA / CLP .... controle (segundos)\n" +
          "Nível 1  Sensores/atuad.  medição e atuação\n" +
          "Nível 0  Processo físico\n\n" +
          "(modelo da norma ISA-95 / IEC 62264)" },
        { nivel: "medio", tipo: "exemplo", titulo: "Recall com e sem rastreabilidade", texto: "Um lote de cacau contaminado entrou na fábrica.\n• **Sem rastreabilidade:** recolher toda a produção do mês = 30.000 caixas × R$ 12 = **R$ 360.000**.\n• **Com rastreabilidade por lote de insumo:** só 2 lotes de produção afetados = 1.800 caixas × R$ 12 = **R$ 21.600**.\nDiferença: **R$ 338.400**, sem contar a imagem da marca." },
        { nivel: "medio", tipo: "passos", titulo: "Dados mínimos de rastreabilidade", texto: "1. **Lote do insumo** (recebido do fornecedor).\n2. **Ordem e lote de produção** (data, turno, linha).\n3. **Parâmetros críticos** (temperatura, tempo).\n4. **Resultados de inspeção.**\n5. **Expedição:** lote → cliente → nota fiscal." },
        { nivel: "medio", tipo: "atencao", titulo: "Erro comum", texto: "Registrar o lote só na expedição. Se o insumo não for ligado ao lote de produção **no momento do consumo**, a genealogia fica quebrada e o recall volta a ser total." },

        { nivel: "dificil", tipo: "limitacao", titulo: "Conectar tem custo e risco", texto: "Custos: sensores, rede, integração com sistemas antigos, armazenamento, manutenção.\nRiscos: redes de automação (OT) conectadas à internet podem ser atacadas e **parar a fábrica**. Normas como a **IEC 62443** tratam da segurança de sistemas de automação industrial.\nInteroperabilidade: padrões abertos como **OPC UA** evitam depender de um único fornecedor." },
        { nivel: "dificil", tipo: "conceito", titulo: "Gêmeo digital", texto: "Modelo digital atualizado com dados do ativo real, usado para **simular, prever e otimizar** (ex.: testar uma nova sequência de produção sem parar a linha).\nCompensa quando o **custo de testar no real é alto** e há **dados confiáveis** e modelo validado. Sem isso, vira uma animação cara." },
        { nivel: "dificil", tipo: "conceito", titulo: "Latência e decisão", texto: "Nem todo dado precisa ir à nuvem: controle de máquina exige resposta em milissegundos (fica no CLP ou em computação de borda); indicadores de turno podem ir ao MES; análises de tendência, à nuvem. Decida **onde processar** pela velocidade que a decisão exige." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• ISA-95 / IEC 62264 (integração empresa-controle).\n• IEC 62443 (segurança de automação industrial).\n• OPC Foundation: especificação OPC UA." }
      ],
      questoes: [
        { id: "m14-q061", nivel: "facil", tipo: "ligar", pergunta: "Ligue o sistema à função:",
          pares: [["Sensor", "Medir uma grandeza física"], ["CLP", "Comandar a máquina"], ["MES", "Gerenciar a execução da produção"], ["ERP", "Gerenciar o negócio (pedidos, finanças)"]],
          explicacao: "Cada camada opera numa escala de tempo diferente." },
        { id: "m14-q062", nivel: "facil", tipo: "vf", pergunta: "Rastreabilidade permite saber quais insumos entraram em um lote e para quais clientes ele foi.",
          correta: true, explicacao: "É a genealogia do lote, nos dois sentidos." },
        { id: "m14-q063", nivel: "facil", tipo: "multipla", pergunta: "O que é um sistema ciberfísico?",
          opcoes: ["Um computador de escritório", "A integração entre o processo físico e um sistema digital que o monitora e pode atuar sobre ele", "Um sistema de folha de pagamento", "Um robô sem sensores"], correta: 1,
          explicacao: "É a base conceitual da Indústria 4.0." },
        { id: "m14-q064", nivel: "facil", tipo: "lacuna", pergunta: "O sistema que gerencia a execução da produção no chão de fábrica é o ___.",
          opcoes: ["MES", "CRM", "RH", "BI"], correta: 0,
          explicacao: "MES = Manufacturing Execution System." },
        { id: "m14-q065", nivel: "medio", tipo: "ordenar", pergunta: "Ordene os níveis ISA-95 do mais baixo ao mais alto:",
          itens: ["Processo físico", "Sensores e atuadores", "Controle (CLP, SCADA)", "Operações (MES)", "Negócio (ERP)"],
          explicacao: "Do físico ao negócio: níveis 0 a 4." },
        { id: "m14-q066", nivel: "medio", tipo: "calculo", pergunta: "Recall: sem rastreabilidade, 30.000 caixas; com rastreabilidade, 1.800 caixas. Custo de R$ 12 por caixa recolhida. Qual a economia (R$)?",
          resposta: 338400, tolerancia: 0, unidade: "R$",
          resolucao: "Sem: 30.000 × 12 = 360.000\nCom: 1.800 × 12 = 21.600\nEconomia = 360.000 − 21.600 = R$ 338.400",
          explicacao: "Rastreabilidade é seguro contra recall total." },
        { id: "m14-q067", nivel: "medio", tipo: "multipla", pergunta: "Qual falha mais compromete a rastreabilidade?",
          opcoes: ["Registrar o lote do insumo no momento do consumo", "Registrar o lote só na expedição, sem ligar aos insumos usados", "Guardar os parâmetros de processo", "Imprimir o lote na embalagem"], correta: 1,
          explicacao: "Sem a ligação insumo → produção, a genealogia quebra." },
        { id: "m14-q068", nivel: "medio", tipo: "vf", pergunta: "No modelo ISA-95, o SCADA fica no mesmo nível do ERP.",
          correta: false, explicacao: "SCADA/CLP estão no nível 2 (controle); ERP no nível 4 (negócio)." },
        { id: "m14-q069", nivel: "dificil", tipo: "caso", contexto: "Para ver os dados no celular, um técnico ligou o CLP da linha diretamente à internet, sem firewall.",
          pergunta: "Qual a avaliação correta?",
          opcoes: ["Ótimo, aumenta a visibilidade", "Risco grave: a rede de automação fica exposta a ataques que podem parar ou danificar a linha; segregar redes e seguir boas práticas (ex.: IEC 62443)", "Só é problema se o celular for antigo", "Basta trocar a senha padrão depois"], correta: 1,
          explicacao: "Segurança de OT é requisito, não opcional." },
        { id: "m14-q070", nivel: "dificil", tipo: "multipla", pergunta: "Qual o principal benefício de padrões abertos como o OPC UA?",
          opcoes: ["Deixar as máquinas mais rápidas", "Interoperabilidade: sistemas de fornecedores diferentes trocam dados de forma padronizada", "Eliminar a necessidade de sensores", "Substituir o ERP"], correta: 1,
          explicacao: "Evita soluções presas a um único fornecedor." },
        { id: "m14-q071", nivel: "dificil", tipo: "vf", pergunta: "Todo dado da fábrica deve ser enviado à nuvem para processamento, inclusive o controle das máquinas.",
          correta: false, explicacao: "Controle exige milissegundos: fica no CLP ou na borda. A nuvem serve para análises menos urgentes." },
        { id: "m14-q072", nivel: "dificil", tipo: "discursiva", pergunta: "A diretoria quer um “gêmeo digital” da fábrica. Como você avaliaria se o investimento compensa?",
          respostaModelo: "Definir a **decisão** que o gêmeo vai apoiar (ex.: testar sequências de produção, prever falhas); estimar o **valor** (custo de testar no real, paradas evitadas); verificar a **disponibilidade e qualidade dos dados** e a capacidade de **validar o modelo** contra a realidade; estimar custos (sensores, integração, software, equipe, manutenção do modelo); começar por um **piloto** em um ativo crítico com indicador de sucesso; considerar segurança e interoperabilidade.",
          criterios: ["Parte da decisão/uso concreto", "Compara valor e custo", "Exige dados confiáveis e validação do modelo", "Propõe piloto com indicador de sucesso"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 7 — IA E MODELOS PREDITIVOS
       ================================================================== */
    {
      id: "m14-l7",
      titulo: "IA e modelos preditivos",
      icone: "🤖",
      objetivos: {
        facil: ["Diferenciar aprendizado supervisionado e não supervisionado", "Citar aplicações de IA na produção", "Explicar por que se separam dados de treino e de teste"],
        medio: ["Montar a matriz de confusão e calcular acurácia, precisão e recall", "Escolher a métrica pelo custo de cada tipo de erro", "Reconhecer sobreajuste"],
        dificil: ["Analisar o paradoxo da acurácia em dados desbalanceados", "Identificar vazamento de dados e mudança de padrão (drift)", "Escolher o limiar de decisão pelo custo esperado e discutir riscos éticos"]
      },
      prerequisitos: [
        { texto: "Probabilidade (Módulo 13)", licao: "m13-l7" },
        { texto: "Correlação e regressão (Módulo 13)", licao: "m13-l11" }
      ],
      resumo: {
        facil: "**Supervisionado:** aprende com exemplos rotulados (peça boa/defeituosa; tempo até falhar). **Não supervisionado:** encontra grupos sem rótulo. Aplicações: inspeção visual, manutenção preditiva, previsão de demanda. O modelo é avaliado em dados de **teste** que ele não viu no treino.",
        medio: "Matriz de confusão: VP, FP, FN, VN. **Acurácia** = acertos ÷ total; **precisão** = VP ÷ (VP + FP); **recall** = VP ÷ (VP + FN). Quando deixar passar defeito é caro, priorize o **recall**. Treino muito melhor que teste indica **sobreajuste**.",
        dificil: "Com poucos defeitos, um modelo que diz “tudo OK” tem acurácia alta e recall zero (**paradoxo da acurácia**). Cuidado com **vazamento de dados** (variável que só se conhece depois) e com **drift** (o processo muda). Escolha o limiar pelo **custo esperado** dos erros e considere explicabilidade, LGPD e o papel humano na decisão."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "IA já aparece em inspeção por câmera, manutenção preditiva e previsão de demanda. O engenheiro de produção não precisa construir o algoritmo, mas precisa **avaliar se o modelo resolve o problema** e se é seguro confiar nele." },
        { nivel: "facil", tipo: "conceito", titulo: "Tipos de aprendizado", texto: "**Supervisionado:** aprende com exemplos que têm a resposta (rótulo).\n• Classificação: peça **boa ou defeituosa**.\n• Regressão: **quantos dias** até a falha.\n**Não supervisionado:** encontra padrões sem rótulo (agrupar máquinas com comportamento parecido, detectar anomalias)." },
        { nivel: "facil", tipo: "conceito", titulo: "Aplicações na produção", texto: "Inspeção visual por câmera · manutenção preditiva (vibração, temperatura) · previsão de demanda · otimização de parâmetros de processo · detecção de anomalias em sensores." },
        { nivel: "facil", tipo: "conceito", titulo: "Treino e teste", texto: "O modelo aprende com os dados de **treino** e é avaliado com dados de **teste**, que ele nunca viu. Avaliar com os mesmos dados do treino é como fazer a prova com o gabarito na mão." },
        { nivel: "facil", tipo: "bobo", titulo: "O filtro de spam", texto: "Aprendeu com milhares de e-mails marcados como spam ou não. Às vezes manda um e-mail importante para o spam (falso positivo) ou deixa passar um golpe (falso negativo). Qual erro é pior depende do caso." },

        { nivel: "medio", tipo: "mapa", titulo: "Matriz de confusão (inspeção de 1.000 peças)", texto:
          "                  Real: defeito   Real: OK\n" +
          "Previu defeito        VP = 40      FP = 30\n" +
          "Previu OK             FN = 10      VN = 920\n\n" +
          "50 peças defeituosas e 950 boas." },
        { nivel: "medio", tipo: "formula", titulo: "Métricas", texto: "**Acurácia = (VP + VN) ÷ total** = 960 ÷ 1.000 = **96%**\n**Precisão = VP ÷ (VP + FP)** = 40 ÷ 70 = **57,1%** (dos alarmes, quantos eram defeito)\n**Recall = VP ÷ (VP + FN)** = 40 ÷ 50 = **80%** (dos defeitos, quantos foram pegos)",
          legenda: [["VP", "verdadeiro positivo: previu defeito e era defeito"], ["FP", "falso positivo: alarme falso"], ["FN", "falso negativo: defeito que passou"], ["VN", "verdadeiro negativo: previu OK e era OK"]] },
        { nivel: "medio", tipo: "conceito", titulo: "Qual métrica priorizar?", texto: "**Defeito que chega ao cliente é caro** (segurança, recall) → priorize **recall** (pegar quase todos), aceitando mais alarmes falsos.\n**Alarme falso é caro** (parar a linha, descartar peça boa cara) → dê mais peso à **precisão**." },
        { nivel: "medio", tipo: "atencao", titulo: "Sobreajuste (overfitting)", texto: "Acurácia de 99% no treino e 70% no teste: o modelo **decorou** os exemplos em vez de aprender o padrão. Mais dados, modelo mais simples e validação adequada ajudam." },

        { nivel: "dificil", tipo: "conceito", titulo: "Paradoxo da acurácia", texto: "Com 5% de peças defeituosas, um “modelo” que sempre diz **“OK”** tem **95% de acurácia** e **recall zero**: não pega nenhum defeito.\nEm dados **desbalanceados**, acurácia sozinha engana. Use recall, precisão e a matriz completa." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Limiar pelo custo esperado", texto: "Custos: defeito que passa (FN) = **R$ 500**; alarme falso (FP) = **R$ 20** (reinspeção).\n• Limiar atual: FN = 10, FP = 30 → 10 × 500 + 30 × 20 = **R$ 5.600**.\n• Limiar mais sensível: VP = 48, FN = 2, FP = 120 → 2 × 500 + 120 × 20 = **R$ 3.400**, com acurácia **menor** (87,8%).\nO melhor modelo para o negócio **não** é o de maior acurácia." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Vazamento de dados e drift", texto: "**Vazamento:** usar uma variável que só existe **depois** do fato (ex.: “peça foi retrabalhada” para prever defeito). No teste parece ótimo; em produção, falha.\n**Drift:** o processo muda (fornecedor novo, máquina reformada) e o modelo perde desempenho. Monitore as métricas continuamente e retreine." },
        { nivel: "dificil", tipo: "conceito", titulo: "Ética, LGPD e papel humano", texto: "Modelos que avaliam pessoas (produtividade, segurança) exigem cuidado com **dados pessoais (LGPD)**, vieses e transparência. Em decisões críticas, mantenha **revisão humana** e explique as bases da decisão. Um modelo que ninguém entende dificilmente será usado corretamente." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• JAMES, G.; WITTEN, D.; HASTIE, T.; TIBSHIRANI, R. *An Introduction to Statistical Learning* (2013).\n• Brasil. Lei nº 13.709/2018 (LGPD)." }
      ],
      questoes: [
        { id: "m14-q073", nivel: "facil", tipo: "ligar", pergunta: "Ligue a tarefa ao tipo de aprendizado:",
          pares: [["Classificar peça em boa ou defeituosa a partir de fotos rotuladas", "Supervisionado (classificação)"], ["Prever quantos dias faltam para a falha", "Supervisionado (regressão)"], ["Agrupar máquinas com comportamento parecido, sem rótulo", "Não supervisionado"]],
          explicacao: "Com rótulo → supervisionado; sem rótulo → não supervisionado." },
        { id: "m14-q074", nivel: "facil", tipo: "vf", pergunta: "Um modelo deve ser avaliado com dados que ele não viu durante o treino.",
          correta: true, explicacao: "Senão, a avaliação mede memória, não aprendizado." },
        { id: "m14-q075", nivel: "facil", tipo: "multipla", pergunta: "Qual destas NÃO é uma aplicação típica de IA na produção?",
          opcoes: ["Inspeção visual por câmera", "Manutenção preditiva", "Previsão de demanda", "Substituir a necessidade de definir objetivos do negócio"], correta: 3,
          explicacao: "O modelo apoia decisões; os objetivos continuam sendo definidos por pessoas." },
        { id: "m14-q076", nivel: "facil", tipo: "lacuna", pergunta: "Quando o modelo diz que uma peça boa é defeituosa, temos um falso ___.",
          opcoes: ["positivo", "negativo", "verdadeiro", "resultado"], correta: 0,
          explicacao: "Alarme falso = falso positivo (a classe “positiva” aqui é defeito)." },
        { id: "m14-q077", nivel: "medio", tipo: "calculo", pergunta: "VP = 40, FP = 30, FN = 10, VN = 920. Qual a acurácia (%)?",
          resposta: 96, tolerancia: 0.1, unidade: "%",
          resolucao: "Acurácia = (VP + VN) ÷ total = (40 + 920) ÷ 1.000 = 96%",
          explicacao: "Parece ótima, mas veja precisão e recall." },
        { id: "m14-q078", nivel: "medio", tipo: "calculo", pergunta: "Com VP = 40 e FP = 30, qual a precisão (%)?",
          resposta: 57.1, tolerancia: 0.1, unidade: "%",
          resolucao: "Precisão = VP ÷ (VP + FP) = 40 ÷ 70 ≈ 57,1%",
          explicacao: "Quase metade dos alarmes é falsa." },
        { id: "m14-q079", nivel: "medio", tipo: "calculo", pergunta: "Com VP = 40 e FN = 10, qual o recall (%)?",
          resposta: 80, tolerancia: 0.1, unidade: "%",
          resolucao: "Recall = VP ÷ (VP + FN) = 40 ÷ 50 = 80%",
          explicacao: "20% dos defeitos passam." },
        { id: "m14-q080", nivel: "medio", tipo: "caso", contexto: "Um modelo de inspeção de freios automotivos precisa decidir quais peças vão para reinspeção humana.",
          pergunta: "Qual métrica deve ter prioridade?",
          opcoes: ["Precisão, para reduzir alarmes falsos", "Recall, porque deixar passar um defeito de freio é muito mais grave que reinspecionar peças boas", "Acurácia, porque resume tudo", "Nenhuma"], correta: 1,
          explicacao: "O custo (e o risco) do falso negativo domina." },
        { id: "m14-q081", nivel: "medio", tipo: "vf", pergunta: "Um modelo com 99% de acurácia no treino e 70% no teste provavelmente está sobreajustado.",
          correta: true, explicacao: "Decorou os exemplos de treino." },
        { id: "m14-q082", nivel: "dificil", tipo: "calculo", pergunta: "FN custa R$ 500 e FP custa R$ 20. Um limiar gera FN = 2 e FP = 120. Qual o custo total esperado dos erros (R$)?",
          resposta: 3400, tolerancia: 0, unidade: "R$",
          resolucao: "2 × 500 + 120 × 20 = 1.000 + 2.400 = R$ 3.400\n(Limiar anterior: 10 × 500 + 30 × 20 = R$ 5.600)",
          explicacao: "Menor custo mesmo com acurácia menor (87,8%)." },
        { id: "m14-q083", nivel: "dificil", tipo: "caso", contexto: "Numa linha com 5% de defeitos, um fornecedor apresenta um modelo com “95% de acurácia”.",
          pergunta: "Qual a primeira pergunta a fazer?",
          opcoes: ["Qual a marca do computador?", "Qual o recall e a precisão? Um modelo que diz sempre “OK” também teria 95% de acurácia", "Quanto custa por mês?", "Nenhuma: 95% é excelente"], correta: 1,
          explicacao: "Paradoxo da acurácia em dados desbalanceados." },
        { id: "m14-q084", nivel: "dificil", tipo: "multipla", pergunta: "Um modelo usa a variável “peça foi retrabalhada” para prever se a peça terá defeito. Qual o problema?",
          opcoes: ["Nenhum", "Vazamento de dados: essa informação só existe depois do defeito ser detectado", "Falta de cores no gráfico", "Sobreajuste por excesso de dados"], correta: 1,
          explicacao: "No teste parece ótimo; na hora de prever, a variável ainda não existe." },
        { id: "m14-q085", nivel: "dificil", tipo: "discursiva", pergunta: "Um modelo de manutenção preditiva funcionou bem por 8 meses e passou a errar muito depois da troca de fornecedor de rolamentos. Explique o que aconteceu e como gerenciar esse risco.",
          respostaModelo: "Houve **drift**: a mudança de fornecedor alterou o comportamento dos dados (vibração, desgaste), e o modelo treinado com o padrão antigo perdeu validade. Gestão: **monitorar** continuamente as métricas (recall, precisão) e as distribuições das variáveis de entrada; registrar **mudanças de processo** (fornecedor, reforma) como gatilhos de revisão; **retreinar** com dados novos e validar; manter **revisão humana** em decisões críticas enquanto o modelo é recalibrado.",
          criterios: ["Identifica drift ligado à mudança de processo", "Propõe monitoramento contínuo de métricas/entradas", "Propõe retreino e validação", "Mantém papel humano e gatilhos de revisão"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 8 — CHEFÃO
       ================================================================== */
    {
      id: "m14-l8",
      titulo: "👾 Chefão: do dado à decisão",
      icone: "👾",
      objetivos: {
        facil: ["Ordenar o caminho do dado à decisão", "Relacionar cada ferramenta ao seu uso", "Conectar dados aos módulos de Métodos, Projetos e Estatística"],
        medio: ["Calcular indicadores e métricas num caso integrado", "Detectar erros de agregação e de qualidade de dados", "Escolher a ferramenta adequada para cada etapa"],
        dificil: ["Recomendar uma ação com base em dados incompletos, declarando premissas", "Avaliar a proposta de um modelo de IA pelo custo dos erros", "Integrar qualidade de dados, indicadores e decisão"]
      },
      prerequisitos: [{ texto: "Todas as lições do Módulo 14", licao: "m14-l1" }],
      resumo: {
        facil: "Do dado à decisão: **pergunta → coleta com qualidade → organização → análise → visualização → decisão → acompanhamento**.",
        medio: "No caso da Doces Serra, o OEE revela a maior perda, a segmentação evita o paradoxo de Simpson e a qualidade dos apontamentos precisa ser verificada antes de concluir.",
        dificil: "Uma recomendação baseada em dados declara as **premissas**, mostra a **incerteza** e compara alternativas pelo **custo**, inclusive o custo dos erros de um modelo."
      },
      blocos: [
        { tipo: "serio", titulo: "O caso: refugo na linha de bombons", texto: "A Doces Serra quer reduzir o refugo da linha nova (Módulos 2 e 4).\n• Apontamentos de parada: 1.200 no mês, 180 sem motivo.\n• Turno A: refugo total 3,8%; turno B: 9,2%. Por produto, B é melhor nos dois.\n• OEE do mês: D = 90%, P = 88,9%, Q = 95%.\n• Um fornecedor oferece câmera com IA: recall de 80% e precisão de 57%, a R$ 4.000/mês." },
        { nivel: "facil", tipo: "conceito", titulo: "✅ Checklist (Fácil)", texto: "• Fontes de dados e problemas de qualidade\n• Tabela organizada, CONT.SE e tabela dinâmica\n• Ficha do indicador e OEE\n• SELECT e WHERE\n• Gráfico certo para cada pergunta\n• Sensor → CLP → MES → ERP; rastreabilidade\n• Supervisionado × não supervisionado; treino × teste" },
        { nivel: "medio", tipo: "conceito", titulo: "✅ Checklist (Médio)", texto: "• Completude e duplicidade\n• SOMASES, PROCX; razão das somas\n• D, P, Q e maior perda; roteiro exploratório\n• GROUP BY, JOIN, ordem lógica\n• Modelo estrela; medida × coluna\n• ISA-95; custo do recall\n• Acurácia, precisão, recall" },
        { nivel: "dificil", tipo: "conceito", titulo: "✅ Checklist (Difícil)", texto: "• Faltantes não aleatórios; governança; LGPD\n• Erros silenciosos de planilha\n• Simpson, Goodhart, variação comum\n• JOIN que duplica; reprodutibilidade\n• Fonte única; ruído × sinal\n• Segurança OT; gêmeo digital\n• Paradoxo da acurácia; vazamento; drift; limiar por custo" }
      ],
      questoes: [
        { id: "m14-q086", nivel: "facil", tipo: "ordenar", pergunta: "Ordene o caminho do dado à decisão:",
          itens: ["Definir a pergunta", "Coletar dados com qualidade", "Organizar e tratar", "Analisar", "Visualizar e comunicar", "Decidir e acompanhar"],
          explicacao: "Sem pergunta clara, sobram dados e faltam respostas." },
        { id: "m14-q087", nivel: "facil", tipo: "ligar", pergunta: "Ligue a ferramenta ao uso:",
          pares: [["Tabela dinâmica", "Resumo rápido por grupos"], ["SQL", "Extrair e agregar dados de sistemas"], ["Dashboard", "Acompanhar indicadores recorrentes"], ["Modelo preditivo", "Antecipar falhas ou defeitos"]],
          explicacao: "Cada ferramenta tem seu lugar." },
        { id: "m14-q088", nivel: "facil", tipo: "vf", pergunta: "(M4 + M14) O tempo padrão e o OEE ajudam a separar perdas de ritmo, de parada e de qualidade.",
          correta: true, explicacao: "Eficiência/utilização (pessoas) e D-P-Q (equipamento) isolam tipos de perda." },
        { id: "m14-q089", nivel: "medio", tipo: "calculo", pergunta: "Com D = 90%, P = 88,9% e Q = 95%, qual componente do OEE representa a maior perda? Responda com a perda em pontos percentuais (100 − componente).",
          resposta: 11.1, tolerancia: 0.1, unidade: "p.p.",
          resolucao: "Perdas: D → 10; P → 11,1; Q → 5.\nMaior perda: performance, 11,1 pontos.",
          explicacao: "Pequenas paradas e velocidade reduzida são o primeiro alvo." },
        { id: "m14-q090", nivel: "medio", tipo: "multipla", pergunta: "Antes de concluir que “a maioria das paradas é falta de material”, o que você verificaria primeiro?",
          opcoes: ["A cor do gráfico", "A completude do campo motivo (15% das paradas estão sem motivo) e se os faltantes são aleatórios", "O preço do material", "Nada"], correta: 1,
          explicacao: "Qualidade dos dados antes da conclusão." },
        { id: "m14-q091", nivel: "medio", tipo: "caso", contexto: "O relatório diz que o turno A é o melhor (3,8% × 9,2%). Por produto, o turno B tem menos refugo nos dois.",
          pergunta: "O que recomendar?",
          opcoes: ["Replicar as práticas do turno A", "Comparar dentro de cada produto; estudar as práticas do turno B e o efeito do mix", "Demitir o supervisor de B", "Ignorar a diferença"], correta: 1,
          explicacao: "Paradoxo de Simpson: o mix explica o total." },
        { id: "m14-q092", nivel: "dificil", tipo: "calculo", pergunta: "A câmera com IA tem recall de 80%. Se passam 50 bombons defeituosos por dia pela inspeção, quantos defeituosos ainda passariam por dia com a câmera?",
          resposta: 10, tolerancia: 0, unidade: "por dia",
          resolucao: "Pegos = 80% de 50 = 40\nPassam = 50 − 40 = 10 por dia",
          explicacao: "O recall diz quantos defeitos são pegos, não quantos alarmes aparecem." },
        { id: "m14-q093", nivel: "dificil", tipo: "caso", contexto: "A câmera custa R$ 4.000/mês, pega 40 dos 50 defeitos diários e gera 30 alarmes falsos por dia. Cada defeito que chega ao cliente custa R$ 15; cada reinspeção custa R$ 0,50. São 22 dias por mês.",
          pergunta: "Pelos custos, a câmera compensa?",
          opcoes: ["Não: o custo mensal é maior que qualquer economia", "Sim: evita 40 × 15 × 22 = R$ 13.200 por mês, gasta 30 × 0,50 × 22 = R$ 330 com reinspeção e R$ 4.000 com a câmera; o saldo esperado é de cerca de R$ 8.870 por mês", "Só compensa com 100% de recall", "Impossível avaliar"], correta: 1,
          explicacao: "Avalie o modelo pelo custo esperado dos acertos e erros, não pela acurácia." },
        { id: "m14-q094", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva uma recomendação (até 6 linhas) à diretoria da Doces Serra sobre o refugo da linha de bombons, usando os dados do caso e declarando as premissas.",
          respostaModelo: "**Recomendação:** atacar primeiro a **perda de performance** do OEE (11 pontos) com Kaizen de pequenas paradas; **estudar as práticas do turno B**, que tem menos refugo em cada produto (o total de A é menor por causa do mix); **corrigir a coleta** de motivos de parada (15% sem motivo) com lista padronizada. **Câmera com IA:** piloto de 2 meses; saldo esperado de ~R$ 8,9 mil/mês se recall e precisão se confirmarem na linha. **Premissas:** custos por defeito e reinspeção estimados; faltantes supostamente aleatórios; desempenho do modelo medido pelo fornecedor, a validar.",
          criterios: ["Prioriza ações com base nos dados (maior perda do OEE)", "Trata corretamente o paradoxo de Simpson", "Inclui ação sobre a qualidade dos dados", "Avalia a IA por custo e propõe piloto, declarando premissas"] }
      ]
    }
  ],

  glossario: [
    { termo: "ERP", definicao: "Sistema de gestão empresarial: pedidos, estoques, compras, finanças." },
    { termo: "MES", definicao: "Sistema de execução da manufatura: ordens, apontamentos, paradas, rastreabilidade." },
    { termo: "CLP", definicao: "Controlador lógico programável: computador industrial que comanda máquinas." },
    { termo: "SCADA", definicao: "Sistema de supervisão e aquisição de dados de equipamentos industriais." },
    { termo: "IoT industrial", definicao: "Equipamentos e sensores conectados que enviam dados do processo." },
    { termo: "Sistema ciberfísico", definicao: "Integração entre processo físico e sistema digital que monitora e atua." },
    { termo: "Gêmeo digital", definicao: "Modelo digital atualizado com dados do ativo real, usado para simular e prever." },
    { termo: "ISA-95", definicao: "Modelo de níveis que integra o chão de fábrica (controle) aos sistemas de negócio." },
    { termo: "OPC UA", definicao: "Padrão aberto de comunicação industrial para interoperabilidade entre sistemas." },
    { termo: "Rastreabilidade", definicao: "Capacidade de ligar cada lote aos insumos, processos e clientes." },
    { termo: "Qualidade de dados", definicao: "Grau de completude, exatidão, consistência, atualidade, validade e unicidade dos dados." },
    { termo: "Completude", definicao: "Proporção de registros preenchidos em relação ao esperado." },
    { termo: "Dicionário de dados", definicao: "Documento com significado, unidade, formato e fonte de cada campo." },
    { termo: "Linhagem de dados", definicao: "Registro da origem e das transformações de um dado até o relatório." },
    { termo: "MCAR / MAR / MNAR", definicao: "Tipos de dados faltantes: totalmente ao acaso, ao acaso condicionado, não ao acaso." },
    { termo: "LGPD", definicao: "Lei Geral de Proteção de Dados (Lei 13.709/2018), que regula dados pessoais." },
    { termo: "Tidy data", definicao: "Organização em que cada variável é uma coluna e cada observação uma linha." },
    { termo: "SOMASES / CONT.SES", definicao: "Funções que somam ou contam com vários critérios." },
    { termo: "PROCX", definicao: "Função de busca que devolve o valor correspondente de outra coluna (substitui o PROCV)." },
    { termo: "Tabela dinâmica", definicao: "Ferramenta que resume dados por grupos sem fórmulas." },
    { termo: "OEE", definicao: "Eficiência global do equipamento: disponibilidade × performance × qualidade." },
    { termo: "Paradoxo de Simpson", definicao: "Quando a tendência nos grupos se inverte ao agregar os dados, por efeito do mix." },
    { termo: "Indicador de resultado × de processo", definicao: "Resultado mostra o que aconteceu; processo antecipa o resultado." },
    { termo: "SQL", definicao: "Linguagem para consultar e manipular bancos de dados relacionais." },
    { termo: "Chave primária / estrangeira", definicao: "Primária identifica a linha; estrangeira liga uma tabela a outra." },
    { termo: "GROUP BY / HAVING", definicao: "Agrupa linhas para agregar; HAVING filtra os grupos depois da agregação." },
    { termo: "JOIN", definicao: "Junção de tabelas por uma chave comum." },
    { termo: "pandas", definicao: "Biblioteca Python para manipular tabelas de dados." },
    { termo: "Modelo estrela", definicao: "Estrutura de BI com tabela fato no centro e dimensões ao redor." },
    { termo: "Medida × coluna calculada", definicao: "Medida calcula conforme os filtros; coluna calculada, linha a linha." },
    { termo: "Aprendizado supervisionado", definicao: "Modelo aprende com exemplos rotulados (classificação ou regressão)." },
    { termo: "Matriz de confusão", definicao: "Tabela com verdadeiros/falsos positivos e negativos de um classificador." },
    { termo: "Precisão e recall", definicao: "Precisão: VP ÷ (VP + FP). Recall: VP ÷ (VP + FN)." },
    { termo: "Sobreajuste (overfitting)", definicao: "Modelo que decora o treino e generaliza mal." },
    { termo: "Vazamento de dados", definicao: "Uso de informação que só existe depois do evento a prever." },
    { termo: "Drift", definicao: "Mudança nos dados ou no processo que degrada o desempenho do modelo." }
  ],

  flashcards: [
    { id: "m14-f01", frente: "Lixo entra…", verso: "…lixo sai. Qualidade de dados vem antes da análise." },
    { id: "m14-f02", frente: "6 dimensões de qualidade de dados", verso: "Completude, exatidão, consistência, atualidade, validade, unicidade." },
    { id: "m14-f03", frente: "Onde corrigir dados ruins?", verso: "Na origem: listas, faixas válidas, campos obrigatórios, registro automático." },
    { id: "m14-f04", frente: "MNAR", verso: "Dado falta por causa do próprio valor (ex.: paradas por erro não apontadas). Gera viés." },
    { id: "m14-f05", frente: "Governança mínima", verso: "Dono, dicionário, linhagem, fonte única." },
    { id: "m14-f06", frente: "Tidy data", verso: "Cada variável uma coluna, cada observação uma linha." },
    { id: "m14-f07", frente: "Armadilha do PROCV", verso: "Sem FALSO faz correspondência aproximada e erra em silêncio. Prefira PROCX." },
    { id: "m14-f08", frente: "Porcentagem por grupo", verso: "Razão das somas, não média das razões." },
    { id: "m14-f09", frente: "Ficha do indicador", verso: "Nome, objetivo, fórmula, unidade, fonte, frequência, dono, meta, polaridade." },
    { id: "m14-f10", frente: "OEE", verso: "Disponibilidade × Performance × Qualidade, sobre o tempo planejado." },
    { id: "m14-f11", frente: "Paradoxo de Simpson", verso: "O total pode inverter a conclusão dos grupos por causa do mix." },
    { id: "m14-f12", frente: "Ordem lógica do SQL", verso: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY." },
    { id: "m14-f13", frente: "JOIN perigoso", verso: "Chave não única duplica linhas e infla somas sem erro." },
    { id: "m14-f14", frente: "Modelo estrela", verso: "Fato (eventos e números) no centro; dimensões (data, linha, produto) ao redor." },
    { id: "m14-f15", frente: "Medida × coluna calculada", verso: "Medida: calcula no contexto dos filtros. Coluna: linha a linha, armazenada." },
    { id: "m14-f16", frente: "Erros de visualização", verso: "Eixo cortado em barras, pizza com muitas fatias, 3D, dois eixos Y." },
    { id: "m14-f17", frente: "Níveis ISA-95", verso: "0 processo · 1 sensores · 2 CLP/SCADA · 3 MES · 4 ERP." },
    { id: "m14-f18", frente: "Rastreabilidade", verso: "Liga insumo → lote → processo → cliente. Reduz o tamanho do recall." },
    { id: "m14-f19", frente: "Segurança OT", verso: "Não expor CLP à internet; segregar redes; IEC 62443." },
    { id: "m14-f20", frente: "Supervisionado × não supervisionado", verso: "Com rótulo (classificação/regressão) × sem rótulo (agrupamento, anomalias)." },
    { id: "m14-f21", frente: "Precisão × recall", verso: "Precisão: dos alarmes, quantos são reais. Recall: dos defeitos, quantos foram pegos." },
    { id: "m14-f22", frente: "Paradoxo da acurácia", verso: "Com poucos defeitos, “tudo OK” tem acurácia alta e recall zero." },
    { id: "m14-f23", frente: "Vazamento de dados", verso: "Variável que só existe depois do fato; ótimo no teste, falha em produção." },
    { id: "m14-f24", frente: "Drift", verso: "O processo muda e o modelo perde desempenho: monitore e retreine." },
    { id: "m14-f25", frente: "Escolha do limiar", verso: "Pelo custo esperado dos erros (FN × custo + FP × custo), não pela acurácia." }
  ]
});
