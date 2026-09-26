/* =====================================================================
   MÓDULO 6 — LEAN MANUFACTURING
   Sistema Toyota de Produção, desperdícios, 5S e trabalho padronizado,
   JIT/kanban, mapeamento do fluxo de valor, SMED e heijunka, jidoka,
   poka-yoke, TPM/OEE e kaizen.
   Formato com níveis: veja o cabeçalho de "modulo-02.js".
   Exemplos numéricos são ILUSTRATIVOS (criados para ensino).
   ===================================================================== */
(window.MODULOS = window.MODULOS || []).push({
  id: "m06",
  numero: 6,
  ordem: 6,
  titulo: "Lean Manufacturing",
  icone: "♻️",
  objetivo: "Enxergar valor e desperdício com os olhos do cliente e usar as ferramentas do Lean (5S, kanban, VSM, SMED, heijunka, poka-yoke, TPM e kaizen) para fazer o fluxo andar com menos estoque, menos defeito e menos esforço.",
  conquista: { id: "mod-m06", nome: "Caçador de Desperdícios", icone: "♻️", descricao: "Concluiu o Módulo 6 — Lean Manufacturing." },

  resumoAudio:
    "Lean é fazer mais com menos, olhando pelo olho do cliente. " +
    "Nasceu no Sistema Toyota de Produção, com Taiichi Ohno, e se apoia em dois pilares: just in time e jidoka. " +
    "Os cinco princípios: valor, fluxo de valor, fluxo, puxar e perfeição. " +
    "Os desperdícios, lembrando TIM WOODS: transporte, inventário, movimentação, espera, superprodução, superprocessamento, defeitos e talento não aproveitado. A superprodução é o pior, porque gera os outros. " +
    "5S organiza a base: utilização, ordenação, limpeza, padronização e disciplina. " +
    "Puxar é produzir só o que o cliente consumiu; o kanban é o sinal. " +
    "O mapa do fluxo de valor mostra o lead time e quanto dele agrega valor, quase sempre muito pouco. " +
    "SMED separa o setup interno do externo e transforma interno em externo. Heijunka nivela volume e mix. " +
    "Poka-yoke impede o erro; jidoka para ao detectar o problema. OEE é disponibilidade vezes performance vezes qualidade. " +
    "E o kaizen é melhoria contínua, pequena e diária, com PDCA e indo ao gemba.",

  licoes: [
    /* ==================================================================
       LIÇÃO 1 — ORIGENS E PRINCÍPIOS
       ================================================================== */
    {
      id: "m06-l1",
      titulo: "Origens e princípios do Lean",
      icone: "🏯",
      objetivos: {
        facil: ["Explicar o que é Lean e de onde veio", "Citar os cinco princípios do pensamento enxuto", "Reconhecer os dois pilares da “casa” do Sistema Toyota"],
        medio: ["Aplicar os cinco princípios a um processo", "Diferenciar produção em massa e produção enxuta", "Explicar a lógica de reduzir estoques para expor problemas"],
        dificil: ["Distinguir Lean como sistema de gestão de Lean como caixa de ferramentas", "Analisar críticas e limites do Lean", "Discutir resiliência × enxugamento nas cadeias de suprimento"]
      },
      prerequisitos: [
        { texto: "História: de Taylor à Toyota (Módulo 1)", licao: "m01-l2" },
        { texto: "Gargalo e melhoria da linha (Módulo 4)", licao: "m04-l6" }
      ],
      resumo: {
        facil: "**Lean** é uma forma de gerir a produção que busca **entregar valor ao cliente com o mínimo de desperdício**. Nasceu no **Sistema Toyota de Produção (STP/TPS)**, com Taiichi Ohno. Os cinco princípios (Womack e Jones): **valor, fluxo de valor, fluxo, puxar e perfeição**. A “casa” do TPS tem dois pilares: **just in time** e **jidoka**.",
        medio: "A produção em massa busca escala com lotes grandes e estoques; o Lean busca **fluxo** com lotes pequenos, qualidade na fonte e flexibilidade. Estoque esconde problemas (a metáfora do rio e das pedras): reduzir estoque de forma controlada **expõe** as causas para resolvê-las.",
        dificil: "Lean é um **sistema de gestão** (pessoas, aprendizado, liderança) e não só um conjunto de ferramentas; copiar ferramentas sem a cultura tende a falhar. Críticas: intensificação do trabalho quando mal aplicado e **fragilidade** de cadeias com pouco estoque diante de rupturas (pandemia, falta de semicondutores). Enxuto não é “sem proteção”: estoques estratégicos podem ser decisão racional."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Na maioria dos processos, **a maior parte do tempo que o produto passa na empresa ele está parado**: esperando, em estoque, sendo transportado. O Lean ensina a enxergar isso e a atacar o desperdício antes de comprar máquina nova ou contratar." },
        { nivel: "facil", tipo: "conceito", titulo: "De onde veio", texto: "No pós-guerra, a Toyota não tinha dinheiro nem mercado para copiar a produção em massa de Ford. **Taiichi Ohno**, com apoio de **Eiji Toyoda**, desenvolveu entre os anos 1950 e 1970 o **Sistema Toyota de Produção**.\nO termo **“lean”** (enxuto) foi usado por John Krafcik (1988) e popularizado pelo livro *A Máquina que Mudou o Mundo* (Womack, Jones e Roos, 1990), fruto de um estudo do MIT sobre a indústria automobilística." },
        { nivel: "facil", tipo: "conceito", titulo: "Os cinco princípios", texto: "Segundo Womack e Jones (*Lean Thinking*, 1996):\n1. **Valor:** definido pelo **cliente**.\n2. **Fluxo de valor:** mapear todas as etapas, separar o que agrega valor do que não agrega.\n3. **Fluxo:** fazer o produto andar sem paradas.\n4. **Puxar:** produzir só quando o cliente (ou o processo seguinte) pede.\n5. **Perfeição:** melhorar continuamente." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Vale Fazer Fluir, Puxando a Perfeição”**: Valor, Fluxo de valor, Fluxo, Puxar, Perfeição." },
        { nivel: "facil", tipo: "mapa", titulo: "A casa do Sistema Toyota", texto:
"   Telhado: qualidade, custo,\n     prazo, segurança, moral\n ┌────────────┬────────────┐\n │ JUST IN    │  JIDOKA    │\n │ TIME       │ (qualidade │\n │ (fluxo,    │  na fonte, │\n │  puxar,    │  parar no  │\n │  takt)     │  problema) │\n ├────────────┴────────────┤\n │ Pessoas e kaizen        │\n ├─────────────────────────┤\n │ Base: heijunka, trabalho│\n │ padrão, estabilidade    │\n └─────────────────────────┘" },
        { nivel: "facil", tipo: "bobo", titulo: "A lanchonete", texto: "Lanchonete “em massa”: frita 50 hambúrgueres de manhã e deixa esfriando na estufa. Lanchonete “lean”: monta o lanche quando o cliente pede, em minutos. A segunda desperdiça menos comida e o lanche chega melhor, mas precisa de **processo rápido e confiável**." },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum", texto: "Achar que Lean é “cortar gente” ou “trabalhar mais rápido”. O foco é **eliminar desperdício no processo**, não aumentar o esforço das pessoas. Lean mal aplicado, que só corta, costuma perder o apoio de quem faz o trabalho." },

        { nivel: "medio", tipo: "conceito", titulo: "Massa × enxuta", texto: "| Aspecto | Produção em massa | Produção enxuta |\n|---|---|---|\n| Lotes | Grandes | Pequenos |\n| Estoques | Altos, “por segurança” | Baixos e controlados |\n| Qualidade | Inspeção no fim | Na fonte (jidoka) |\n| Programação | Empurrar pela previsão | Puxar pelo consumo |\n| Pessoas | Executam | Executam e melhoram |\n| Variedade | Pouca | Maior, com setups curtos |" },
        { nivel: "medio", tipo: "conceito", titulo: "O rio e as pedras", texto: "O nível da água é o **estoque**; as pedras são os **problemas** (quebras, defeitos, setups longos, fornecedor atrasado). Com muita água, o barco passa e ninguém vê as pedras. Baixando a água aos poucos, as pedras aparecem e podem ser removidas.\nCuidado: baixar a água de uma vez, sem resolver as pedras, **encalha o barco** (falta produto)." },
        { nivel: "medio", tipo: "serio", titulo: "Na empresa", texto: "Na Doces Serra, havia 3 dias de bombons em estoque entre o banho e a embalagem. Ao reduzir para 1 dia, apareceram paradas frequentes da banhadeira por limpeza mal feita. Tratada a causa (procedimento de limpeza padronizado), o estoque menor passou a ser seguro e liberou espaço na câmara fria." },
        { nivel: "medio", tipo: "conexao", titulo: "Conexão", texto: "O **takt time** e o **gargalo** do Módulo 4 são peças centrais do Lean. O **PCP** do Módulo 3 “empurra” pelo plano; o Lean propõe **puxar** onde o consumo é regular. A **qualidade na fonte** conecta com o Módulo 5." },

        { nivel: "dificil", tipo: "conceito", titulo: "Sistema, não caixa de ferramentas", texto: "Liker (*O Modelo Toyota*, 2004) descreve 14 princípios, agrupados em filosofia de longo prazo, processo certo, desenvolvimento das pessoas e solução de problemas. Muitas empresas copiam **ferramentas** (5S, kanban) sem o **sistema de gestão** (liderança que vai ao gemba, padrões, solução de problemas diária) e obtêm ganhos que não se sustentam." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Críticas e limites", texto: "• **Intensificação do trabalho:** retirar folgas sem melhorar o método pode aumentar ritmo e risco ergonômico (Módulo 10).\n• **Fragilidade:** cadeias com estoques mínimos sofrem com rupturas. Na pandemia de covid-19 e na falta de semicondutores (2020–2022), várias montadoras pararam linhas. A própria Toyota, segundo a imprensa (Reuters, 2021), passou a manter estoques maiores de chips após o terremoto de 2011.\n• **Contexto:** alta variedade, demanda muito instável ou baixo volume exigem adaptações (ex.: POLCA, CONWIP)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Enxuto e resiliente", texto: "Reduzir estoque é meio, não fim. Estoques **estratégicos e posicionados** (itens críticos, fornecedor único, longo lead time) são compatíveis com o Lean quando a decisão é **consciente, dimensionada e revista**. O que o Lean combate é o estoque que **esconde** problemas." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• OHNO, T. *O Sistema Toyota de Produção: além da produção em larga escala*. Bookman.\n• WOMACK, J. P.; JONES, D. T.; ROOS, D. *A Máquina que Mudou o Mundo*. Campus/Elsevier.\n• WOMACK, J. P.; JONES, D. T. *A Mentalidade Enxuta nas Empresas (Lean Thinking)*. Campus/Elsevier.\n• LIKER, J. K. *O Modelo Toyota: 14 princípios de gestão*. Bookman.\n• KRAFCIK, J. F. Triumph of the lean production system. *Sloan Management Review*, v. 30, n. 1, 1988." }
      ],
      questoes: [
        { id: "m06-q001", nivel: "facil", tipo: "ordenar", pergunta: "Ordene os cinco princípios do pensamento enxuto:",
          itens: ["Valor", "Fluxo de valor", "Fluxo", "Puxar", "Perfeição"],
          explicacao: "“Vale Fazer Fluir, Puxando a Perfeição”." },
        { id: "m06-q002", nivel: "facil", tipo: "multipla", pergunta: "Quem define o que é valor no Lean?",
          opcoes: ["O engenheiro de processos", "O cliente", "O diretor financeiro", "O fornecedor"], correta: 1,
          explicacao: "Valor é aquilo pelo qual o cliente está disposto a pagar." },
        { id: "m06-q003", nivel: "facil", tipo: "ligar", pergunta: "Ligue o nome à contribuição:",
          pares: [["Taiichi Ohno", "Desenvolveu o Sistema Toyota de Produção"], ["Womack e Jones", "Cinco princípios do pensamento enxuto"], ["John Krafcik", "Usou o termo “lean production” (1988)"]],
          explicacao: "Lean é o nome ocidental para a lógica do STP." },
        { id: "m06-q004", nivel: "facil", tipo: "lacuna", pergunta: "Os dois pilares da casa do Sistema Toyota são o just in time e o ___.",
          opcoes: ["jidoka", "MRP", "Gantt", "orçamento"], correta: 0,
          explicacao: "Jidoka: qualidade na fonte, parar ao detectar anormalidade." },
        { id: "m06-q005", nivel: "facil", tipo: "vf", pergunta: "O objetivo principal do Lean é fazer as pessoas trabalharem mais rápido.",
          correta: false, explicacao: "O foco é eliminar desperdício do processo, não aumentar o esforço." },
        { id: "m06-q006", nivel: "medio", tipo: "multipla", pergunta: "Na metáfora do rio e das pedras, o que acontece ao reduzir o estoque (nível da água)?",
          opcoes: ["Os problemas desaparecem", "Os problemas escondidos aparecem e podem ser resolvidos", "O lead time aumenta", "A demanda cai"], correta: 1,
          explicacao: "Reduzir aos poucos e resolver cada “pedra” que aparece." },
        { id: "m06-q007", nivel: "medio", tipo: "caso", contexto: "Após ler sobre Lean, um gerente zerou de uma vez o estoque entre dois setores. Na semana seguinte, a embalagem parou várias vezes por falta de produto.",
          pergunta: "O que deu errado?",
          opcoes: ["Lean não funciona em alimentos", "Baixou a água de uma vez sem resolver as pedras: reduzir aos poucos e tratar as causas das paradas", "Precisava aumentar o estoque para 10 dias", "Faltou comprar outra máquina"], correta: 1,
          explicacao: "Redução de estoque é gradual e acompanhada de solução de problemas." },
        { id: "m06-q008", nivel: "medio", tipo: "vf", pergunta: "Na produção enxuta, a qualidade é garantida principalmente pela inspeção no final da linha.",
          correta: false, explicacao: "Qualidade na fonte (jidoka): o problema é detectado e tratado onde nasce." },
        { id: "m06-q009", nivel: "medio", tipo: "ligar", pergunta: "Ligue o aspecto ao modelo enxuto:",
          pares: [["Lotes", "Pequenos"], ["Programação", "Puxar pelo consumo"], ["Qualidade", "Na fonte"], ["Pessoas", "Executam e melhoram"]],
          explicacao: "Contraste com lotes grandes, empurrar, inspeção final e pessoas só executando." },
        { id: "m06-q010", nivel: "dificil", tipo: "multipla", pergunta: "Por que muitas implantações de Lean não se sustentam?",
          opcoes: ["Porque as ferramentas são caras", "Porque copiam ferramentas sem o sistema de gestão (liderança no gemba, padrões, solução diária de problemas)", "Porque o Lean só funciona no Japão", "Porque exige ERP"], correta: 1,
          explicacao: "Liker: Lean é sistema de gestão, não só caixa de ferramentas." },
        { id: "m06-q011", nivel: "dificil", tipo: "caso", contexto: "Uma montadora compra um chip de fornecedor único, com lead time de 20 semanas, e mantém 2 dias de estoque “porque Lean é estoque zero”.",
          pergunta: "Qual a melhor análise?",
          opcoes: ["Correto: estoque é sempre desperdício", "Arriscado: item crítico, fornecedor único e lead time longo justificam estoque estratégico dimensionado e revisto", "Deveria ter 5 anos de estoque", "Deveria trocar por MRP"], correta: 1,
          justificativas: ["O Lean combate o estoque que esconde problemas, não toda proteção.", "Estoque consciente e dimensionado para risco de ruptura é decisão racional.", "Excesso também é desperdício e risco de obsolescência.", "MRP não resolve o risco de ruptura do fornecedor."],
          explicacao: "Enxuto e resiliente não são opostos." },
        { id: "m06-q012", nivel: "dificil", tipo: "discursiva", pergunta: "“Lean é só um jeito elegante de cortar pessoal.” Analise essa afirmação.",
          respostaModelo: "A afirmação descreve o **Lean mal aplicado**. No sistema original, o foco é eliminar **desperdício do processo** (espera, estoque, defeitos, movimentação) e desenvolver as pessoas para melhorar o trabalho; a Toyota associava a melhoria à estabilidade do emprego. Quando se retiram folgas sem melhorar o método, há **intensificação do trabalho**, risco ergonômico e perda de adesão, e os ganhos não se sustentam. Boa prática: realocar as pessoas liberadas para melhoria ou crescimento, envolver os operadores, avaliar ergonomia.",
          criterios: ["Distingue Lean como sistema de Lean mal aplicado", "Explica o foco no desperdício do processo", "Menciona riscos de intensificação/ergonomia", "Propõe tratamento das pessoas liberadas ou participação"] },
        { id: "m06-q013", nivel: "dificil", tipo: "vf", pergunta: "Houve relatos de montadoras parando linhas por falta de semicondutores entre 2020 e 2022, o que reacendeu o debate sobre estoques mínimos.",
          correta: true, explicacao: "O episódio mostrou a importância de avaliar riscos de ruptura na cadeia." }
      ]
    },

    /* ==================================================================
       LIÇÃO 2 — DESPERDÍCIOS
       ================================================================== */
    {
      id: "m06-l2",
      titulo: "Os desperdícios (muda, mura, muri)",
      icone: "🗑️",
      objetivos: {
        facil: ["Citar os 7 desperdícios de Ohno e o 8º", "Reconhecer desperdícios em exemplos do dia a dia", "Diferenciar atividade que agrega valor e que não agrega"],
        medio: ["Classificar atividades em agrega valor, necessária sem valor e desperdício", "Explicar por que a superprodução é o pior desperdício", "Relacionar muda, mura e muri"],
        dificil: ["Analisar a relação causal entre os desperdícios", "Aplicar a lógica de desperdícios a serviços", "Avaliar quando uma atividade sem valor é obrigatória"]
      },
      prerequisitos: [
        { texto: "Origens e princípios", licao: "m06-l1" },
        { texto: "Estudo de métodos (Módulo 4)", licao: "m04-l1" }
      ],
      resumo: {
        facil: "Os **7 desperdícios** de Ohno: **superprodução, espera, transporte, processamento excessivo, estoque, movimentação e defeitos**. O 8º, popularizado por Liker: **talento (criatividade) não aproveitado**. Mnemônico: **TIM WOODS**. Agregar valor = transformar o produto de um jeito que o cliente paga.",
        medio: "Atividades: **agregam valor (AV)**, **necessárias sem valor (NNAV)** (reduzir) e **desperdício puro** (eliminar). A **superprodução** é o pior desperdício porque gera estoque, transporte, espera e esconde defeitos. **Muda** = desperdício; **mura** = irregularidade; **muri** = sobrecarga — a mura gera muri, que gera muda.",
        dificil: "Os desperdícios formam uma cadeia causal: superprodução → estoque → transporte e movimentação → defeitos escondidos. Em serviços: filas (espera), retrabalho de cadastro (defeito), aprovações redundantes (processamento excessivo). Atividades exigidas por lei ou segurança não agregam valor ao cliente, mas são **obrigatórias**: o objetivo é executá-las com o mínimo de esforço, não eliminá-las."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Não dá para melhorar o que não se enxerga. Os desperdícios são as “lentes” do Lean: com elas, uma caminhada de 5 minutos pela fábrica revela dezenas de oportunidades." },
        { nivel: "facil", tipo: "conceito", titulo: "Os 7 + 1 desperdícios", texto: "1. **Superprodução:** produzir antes ou mais do que o necessário.\n2. **Espera:** pessoas ou produtos parados.\n3. **Transporte:** mover material sem necessidade.\n4. **Processamento excessivo:** fazer mais do que o cliente pede (polir o que não aparece, aprovar 3 vezes).\n5. **Estoque:** material parado além do necessário.\n6. **Movimentação:** deslocamentos e gestos desnecessários das pessoas.\n7. **Defeitos:** retrabalho, refugo, inspeção de correção.\n8. **Talento não aproveitado:** não ouvir as ideias de quem faz." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**TIM WOODS** (em inglês): **T**ransport, **I**nventory, **M**otion, **W**aiting, **O**verproduction, **O**verprocessing, **D**efects, **S**kills (talento não aproveitado)." },
        { nivel: "facil", tipo: "bobo", titulo: "Desperdícios na cozinha", texto: "Fazer arroz para 10 quando vêm 4 (superprodução) · esperar a panela de pressão parado olhando (espera) · ir à despensa 6 vezes (movimentação) · a geladeira lotada de potes esquecidos (estoque) · queimar o feijão e fazer de novo (defeito) · descascar a batata que vai virar purê em cubinhos perfeitos (processamento excessivo)." },
        { nivel: "facil", tipo: "conceito", titulo: "O que agrega valor?", texto: "Três condições (todas juntas):\n• O cliente **está disposto a pagar** por ela.\n• **Transforma** o produto ou serviço (forma, ajuste, função).\n• É feita **certa da primeira vez**." },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum", texto: "Confundir **transporte** (mover material) com **movimentação** (movimento das pessoas). Carregar a caixa de um setor a outro é transporte; o operador se esticar para pegar a peça é movimentação." },

        { nivel: "medio", tipo: "conceito", titulo: "Três tipos de atividade", texto: "**Agrega valor (AV):** transforma e o cliente paga. → **manter e melhorar**.\n**Necessária, mas não agrega valor (NNAV):** hoje não dá para eliminar (ex.: registrar lote para rastreabilidade, desembalar peça do fornecedor). → **reduzir**.\n**Desperdício puro:** não agrega e não é necessária (ex.: procurar ferramenta, retrabalho). → **eliminar**." },
        { nivel: "medio", tipo: "conceito", titulo: "Por que a superprodução é o pior", texto: "Produzir antes ou além do necessário **gera outros desperdícios**: precisa de estoque, transporte até o armazém, movimentação para guardar e buscar, e o defeito só aparece semanas depois, quando há um lote inteiro com o mesmo problema. Além disso, consome capacidade e material de itens que o cliente precisa agora." },
        { nivel: "medio", tipo: "conceito", titulo: "Muda, mura, muri", texto: "**Muda:** desperdício (os 7 + 1).\n**Mura:** irregularidade, variação (demanda em picos, ritmo desigual).\n**Muri:** sobrecarga de pessoas ou máquinas.\nCadeia típica: a **mura** (pico na sexta-feira) gera **muri** (hora extra, máquina forçada), que gera **muda** (defeitos, quebras, estoque). Por isso o Lean ataca também a variação (heijunka, lição 6)." },
        { nivel: "medio", tipo: "serio", titulo: "Na empresa", texto: "Caminhada no gemba da Doces Serra: operador anda 8 m por ciclo para buscar caixas (movimentação); bombons esperam 2 dias entre banho e embalagem (estoque/espera); etiqueta conferida por 2 pessoas (processamento excessivo); 3% de caixas refeitas por tampa torta (defeito); ideias dos operadores não registradas (talento)." },

        { nivel: "dificil", tipo: "conceito", titulo: "Desperdícios em serviços", texto: "| Desperdício | Exemplo em serviço |\n|---|---|\n| Espera | Paciente na fila; processo parado aguardando aprovação |\n| Transporte | Documento que passa por 5 mesas |\n| Estoque | Caixa de entrada com 300 e-mails; pedidos em fila |\n| Processamento excessivo | Relatório que ninguém lê; dados digitados 2 vezes |\n| Defeito | Cadastro errado; retrabalho de nota fiscal |\n| Talento | Atendente que conhece a solução e não é ouvido |" },
        { nivel: "dificil", tipo: "limitacao", titulo: "Atividade obrigatória", texto: "Inspeções exigidas por norma (ex.: segurança de alimentos, registros de rastreabilidade de lote) **não agregam valor ao cliente** no sentido estrito, mas são **obrigatórias** por lei ou por risco. Classifique-as como NNAV e busque executá-las com menos esforço (automatizar registro, integrar à operação), nunca simplesmente eliminá-las." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Cadeia causal", texto: "Na Doces Serra, a embalagem produzia 2 dias à frente da expedição (**superprodução**) → câmara fria cheia (**estoque**) → paletes empilhados longe da doca (**transporte, movimentação**) → um lote com etiqueta errada só foi descoberto na expedição (**defeito** multiplicado por 2 dias de produção). Atacar a superprodução resolve vários sintomas de uma vez." }
      ],
      questoes: [
        { id: "m06-q020", nivel: "facil", tipo: "ligar", pergunta: "Ligue a situação ao desperdício:",
          pares: [["Produzir 500 caixas quando o pedido é de 300", "Superprodução"], ["Operador parado esperando a máquina terminar", "Espera"], ["Refazer caixas com tampa torta", "Defeitos"], ["Operador se abaixar e esticar para pegar a peça", "Movimentação"]],
          explicacao: "TIM WOODS." },
        { id: "m06-q021", nivel: "facil", tipo: "multipla", pergunta: "Qual destes é o 8º desperdício, acrescentado aos 7 de Ohno?",
          opcoes: ["Excesso de lucro", "Talento/criatividade das pessoas não aproveitado", "Uso de computadores", "Falta de estoque"], correta: 1,
          explicacao: "Popularizado por Liker em *O Modelo Toyota*." },
        { id: "m06-q022", nivel: "facil", tipo: "vf", pergunta: "Levar um palete do setor de banho até o armazém é um exemplo de transporte.",
          correta: true, explicacao: "Transporte = mover material; movimentação = movimento das pessoas." },
        { id: "m06-q023", nivel: "facil", tipo: "lacuna", pergunta: "Fazer mais do que o cliente pede, como aprovar o mesmo documento três vezes, é ___.",
          opcoes: ["processamento excessivo", "agregar valor", "puxar", "takt time"], correta: 0,
          explicacao: "Também chamado de superprocessamento." },
        { id: "m06-q024", nivel: "facil", tipo: "vf", pergunta: "Inspecionar um produto e retrabalhar os defeitos agrega valor, porque deixa o produto certo.",
          correta: false, explicacao: "Agregar valor exige fazer certo da primeira vez; retrabalho é defeito." },
        { id: "m06-q025", nivel: "medio", tipo: "ligar", pergunta: "Classifique cada atividade:",
          pares: [["Banhar o bombom no chocolate", "Agrega valor"], ["Registrar o lote para rastreabilidade", "Necessária, sem valor"], ["Procurar a espátula na bancada", "Desperdício puro"]],
          explicacao: "AV: manter · NNAV: reduzir · desperdício: eliminar." },
        { id: "m06-q026", nivel: "medio", tipo: "multipla", pergunta: "Por que a superprodução é considerada o pior desperdício?",
          opcoes: ["Porque é o mais fácil de ver", "Porque gera outros desperdícios (estoque, transporte, espera) e esconde defeitos", "Porque é proibida por lei", "Porque só acontece em fábricas grandes"], correta: 1,
          explicacao: "É um “desperdício multiplicador”." },
        { id: "m06-q027", nivel: "medio", tipo: "ligar", pergunta: "Ligue o termo japonês ao significado:",
          pares: [["Muda", "Desperdício"], ["Mura", "Irregularidade, variação"], ["Muri", "Sobrecarga"]],
          explicacao: "Mura gera muri, que gera muda." },
        { id: "m06-q028", nivel: "medio", tipo: "caso", contexto: "A demanda chega concentrada na sexta-feira. Nesse dia há hora extra, a máquina roda acima da velocidade recomendada e o refugo dobra.",
          pergunta: "Qual a relação correta?",
          opcoes: ["Muda gera mura", "Mura (pico) gera muri (sobrecarga), que gera muda (refugo)", "Muri gera mura", "Não há relação"], correta: 1,
          explicacao: "Atacar a variação (nivelar) reduz sobrecarga e desperdício." },
        { id: "m06-q029", nivel: "medio", tipo: "vf", pergunta: "Atividades necessárias que não agregam valor devem ser reduzidas, e não necessariamente eliminadas.",
          correta: true, explicacao: "Hoje não dá para eliminar; busca-se fazer com menos esforço." },
        { id: "m06-q030", nivel: "dificil", tipo: "multipla", pergunta: "Num hospital, pacientes esperam 3 horas por um exame que leva 15 minutos. Qual desperdício predomina e o que ele indica?",
          opcoes: ["Defeito; o exame está errado", "Espera; o fluxo tem filas por desbalanceamento entre chegadas e capacidade", "Superprodução de exames", "Transporte"], correta: 1,
          explicacao: "Espera em serviço é a fila; analise chegadas, capacidade e sequenciamento." },
        { id: "m06-q031", nivel: "dificil", tipo: "caso", contexto: "Um analista propõe eliminar o registro de lote dos bombons “porque não agrega valor ao cliente”.",
          pergunta: "Qual a melhor resposta?",
          opcoes: ["Aprovar: tudo que não agrega valor deve sair", "Manter: é exigência de rastreabilidade e segurança de alimentos (NNAV); buscar reduzir o esforço, por exemplo com leitura automática", "Fazer o registro duas vezes para garantir", "Terceirizar o registro"], correta: 1,
          justificativas: ["Ignora exigências legais e o risco de não conseguir rastrear um recall.", "Classificação correta: necessária, sem valor; reduzir o esforço.", "Isso seria processamento excessivo.", "Não resolve e continua custando."],
          explicacao: "Obrigatório ≠ desperdício puro." },
        { id: "m06-q032", nivel: "dificil", tipo: "discursiva", pergunta: "Descreva, com exemplos, como a superprodução pode gerar pelo menos três outros desperdícios numa fábrica de bombons.",
          respostaModelo: "Produzir antes do necessário cria **estoque** (câmara fria cheia, capital parado, risco de vencimento); exige **transporte** até o armazém e de volta, e **movimentação** para guardar e procurar; gera **espera** de outros produtos que precisavam da máquina; e **esconde defeitos**: um erro de etiqueta só aparece na expedição, afetando dias de produção. Solução: produzir no ritmo do consumo (puxar, takt), com lotes menores.",
          criterios: ["Cita pelo menos três desperdícios gerados", "Explica o mecanismo de cada um", "Menciona defeitos escondidos", "Propõe puxar/lotes menores"] },
        { id: "m06-q033", nivel: "dificil", tipo: "vf", pergunta: "Os desperdícios do Lean só se aplicam a fábricas.",
          correta: false, explicacao: "Serviços, hospitais e escritórios têm filas, retrabalho e processamento excessivo." }
      ]
    },

    /* ==================================================================
       LIÇÃO 3 — 5S, GESTÃO VISUAL E TRABALHO PADRONIZADO
       ================================================================== */
    {
      id: "m06-l3",
      titulo: "5S, gestão visual e trabalho padronizado",
      icone: "🧹",
      objetivos: {
        facil: ["Explicar os cinco sensos do 5S", "Dar exemplos de gestão visual", "Explicar para que serve o trabalho padronizado"],
        medio: ["Aplicar o 5S a um posto de trabalho", "Citar os três elementos do trabalho padronizado", "Diferenciar padrão como base para melhoria e como engessamento"],
        dificil: ["Explicar por que o 5S falha quando vira campanha", "Avaliar auditorias de 5S e seus riscos", "Relacionar padrão, kaizen e estabilidade"]
      },
      prerequisitos: [{ texto: "Os desperdícios", licao: "m06-l2" }],
      resumo: {
        facil: "**5S:** **Seiri** (utilização/descarte), **Seiton** (ordenação), **Seiso** (limpeza), **Seiketsu** (padronização/saúde) e **Shitsuke** (disciplina). **Gestão visual:** a situação é visível de relance (demarcações, quadros, andon). **Trabalho padronizado:** a melhor forma conhecida hoje de fazer o trabalho.",
        medio: "Trabalho padronizado tem três elementos: **takt time**, **sequência de trabalho** e **estoque padrão em processo**. “Sem padrão não há melhoria”: o padrão é a base para medir o efeito de uma mudança. O 5S prepara o terreno para enxergar anormalidades.",
        dificil: "5S que vira **campanha** (mutirão antes da auditoria) regride. Sustentar exige o 4º e o 5º S: padrões simples, rotina curta diária, liderança que verifica no gemba. Padrão não é engessamento: é o **ponto de partida** do kaizen, revisto sempre que se encontra um jeito melhor."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Num posto bagunçado, perde-se tempo procurando, erra-se de peça e ninguém percebe quando algo está fora do lugar. O 5S e a gestão visual criam a **base estável** sobre a qual as outras ferramentas funcionam." },
        { nivel: "facil", tipo: "conceito", titulo: "Os cinco sensos", texto: "1. **Seiri — Utilização:** separar o necessário do desnecessário e descartar o que não se usa.\n2. **Seiton — Ordenação:** um lugar para cada coisa, cada coisa no seu lugar, identificado.\n3. **Seiso — Limpeza:** limpar e, limpando, **inspecionar** (vazamentos, desgaste).\n4. **Seiketsu — Padronização/saúde:** criar padrões para manter os três primeiros.\n5. **Shitsuke — Disciplina:** seguir os padrões como hábito." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Usa, Ordena, Limpa, Padroniza e Disciplina”** — os três primeiros **fazem**, os dois últimos **mantêm**." },
        { nivel: "facil", tipo: "bobo", titulo: "5S no guarda-roupa", texto: "Seiri: doar a roupa que você não usa há 2 anos. Seiton: camisetas numa gaveta, calças em outra. Seiso: limpar e ver que a traça apareceu. Seiketsu: regra “entrou uma peça, sai uma”. Shitsuke: manter isso sem precisar de mutirão a cada 6 meses." },
        { nivel: "facil", tipo: "conceito", titulo: "Gestão visual", texto: "A situação deve ser entendida **de relance**, sem perguntar a ninguém:\n• Faixas no chão demarcando corredores e áreas.\n• **Quadro de sombras** para ferramentas (a falta aparece).\n• Quadro de produção hora a hora (planejado × realizado).\n• **Andon:** luz ou sinal que avisa um problema na linha." },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum", texto: "Achar que 5S é faxina. Limpeza é só o 3º senso. O ponto central é **organizar para o trabalho fluir** e tornar visível o que está fora do normal." },

        { nivel: "medio", tipo: "conceito", titulo: "Trabalho padronizado", texto: "É a descrição da **melhor forma conhecida hoje** de fazer uma operação, com três elementos:\n• **Takt time:** o ritmo exigido pelo cliente.\n• **Sequência de trabalho:** a ordem dos passos que o operador segue.\n• **Estoque padrão em processo:** a quantidade mínima de peças no posto para o trabalho fluir.\nDocumentos típicos: folha de trabalho padronizado, tabela de combinação de trabalho." },
        { nivel: "medio", tipo: "passos", titulo: "Implantando o 5S num posto", texto: "1. Fotografar o antes.\n2. **Seiri:** etiqueta vermelha nos itens duvidosos; área de quarentena; decidir em prazo definido.\n3. **Seiton:** posição pelo uso (mais usado = mais perto), identificação, quadro de sombras.\n4. **Seiso:** limpeza com checklist de inspeção.\n5. **Seiketsu:** padrão visual (foto do “como deve ficar”), rotina de 5 minutos por turno.\n6. **Shitsuke:** verificação pela liderança, auditoria simples, reconhecimento." },
        { nivel: "medio", tipo: "conceito", titulo: "Sem padrão, não há melhoria", texto: "Se cada turno faz de um jeito, não se sabe se uma mudança melhorou ou piorou: a variação esconde o efeito. O padrão estabiliza o processo; o **kaizen** muda o padrão para melhor; o novo padrão vira a base da próxima melhoria." },
        { nivel: "medio", tipo: "serio", titulo: "Na empresa", texto: "Na embalagem da Doces Serra, o quadro hora a hora mostrou que a meta de 80 caixas/hora falhava sempre depois do almoço. Investigação: o abastecimento de caixas vazias acontecia no horário do almoço da logística. Mudou-se o horário; o quadro passou a ficar verde." },

        { nivel: "dificil", tipo: "limitacao", titulo: "5S como campanha", texto: "Mutirões antes da visita da diretoria deixam o setor bonito por semanas e depois tudo volta. Causas: padrões inexistentes ou complexos, nenhuma rotina curta diária, liderança que não verifica, 5S desconectado dos problemas reais do setor. Sinal de 5S sustentado: **anormalidades aparecem e são tratadas**." },
        { nivel: "dificil", tipo: "conceito", titulo: "Auditoria de 5S", texto: "Útil para acompanhar, mas vira fim em si mesma quando a nota importa mais que o resultado. Boas práticas: poucos itens, fotos do padrão, feita pelas próprias equipes em rodízio, ligada a ações. Evite rankings punitivos, que estimulam “maquiar” o setor." },
        { nivel: "dificil", tipo: "conceito", titulo: "Padrão e ergonomia", texto: "A sequência padronizada deve considerar **ergonomia** (NR-17, Módulo 10): alcance, postura, repetitividade. Um padrão que exige ritmo acima do takt, ou que ignora pausas, não é sustentável." }
      ],
      questoes: [
        { id: "m06-q040", nivel: "facil", tipo: "ordenar", pergunta: "Ordene os sensos do 5S:",
          itens: ["Seiri — Utilização", "Seiton — Ordenação", "Seiso — Limpeza", "Seiketsu — Padronização", "Shitsuke — Disciplina"],
          explicacao: "“Usa, Ordena, Limpa, Padroniza e Disciplina”." },
        { id: "m06-q041", nivel: "facil", tipo: "multipla", pergunta: "Separar o necessário do desnecessário e descartar o que não se usa é qual senso?",
          opcoes: ["Seiri", "Seiso", "Shitsuke", "Seiketsu"], correta: 0,
          explicacao: "Seiri: senso de utilização." },
        { id: "m06-q042", nivel: "facil", tipo: "vf", pergunta: "O 5S é, basicamente, fazer faxina no setor.",
          correta: false, explicacao: "Limpeza é só um dos sensos; o foco é organizar e tornar visível o anormal." },
        { id: "m06-q043", nivel: "facil", tipo: "lacuna", pergunta: "O painel com o contorno de cada ferramenta, que mostra na hora qual está faltando, é o quadro de ___.",
          opcoes: ["sombras", "Gantt", "Pareto", "controle"], correta: 0,
          explicacao: "Exemplo clássico de gestão visual." },
        { id: "m06-q044", nivel: "facil", tipo: "multipla", pergunta: "O que é o andon?",
          opcoes: ["Um tipo de estoque", "Um sinal luminoso ou sonoro que avisa um problema na linha", "Um método de previsão", "Um relatório mensal"], correta: 1,
          explicacao: "Torna o problema visível para que alguém ajude imediatamente." },
        { id: "m06-q045", nivel: "medio", tipo: "ligar", pergunta: "Ligue o elemento do trabalho padronizado ao significado:",
          pares: [["Takt time", "Ritmo exigido pelo cliente"], ["Sequência de trabalho", "Ordem dos passos do operador"], ["Estoque padrão em processo", "Mínimo de peças no posto para o trabalho fluir"]],
          explicacao: "Os três elementos clássicos." },
        { id: "m06-q046", nivel: "medio", tipo: "caso", contexto: "Cada turno monta a caixa de um jeito. A engenharia testou uma melhoria e o tempo médio não mudou.",
          pergunta: "Qual o problema mais provável?",
          opcoes: ["A melhoria é inútil", "Sem padrão, a variação entre turnos esconde o efeito; padronizar primeiro e depois comparar", "Precisa de mais turnos", "O cronômetro está errado"], correta: 1,
          explicacao: "Sem padrão não há base para medir melhoria." },
        { id: "m06-q047", nivel: "medio", tipo: "vf", pergunta: "No Seiso (limpeza), limpar também é uma forma de inspecionar o equipamento.",
          correta: true, explicacao: "Limpando se percebem vazamentos, folgas e desgaste." },
        { id: "m06-q048", nivel: "medio", tipo: "ordenar", pergunta: "Ordene a implantação do 5S num posto:",
          itens: ["Fotografar o antes", "Etiquetar e separar itens desnecessários", "Definir lugar e identificação de cada item", "Limpar e inspecionar", "Criar padrão visual e rotina", "Verificar e manter"],
          explicacao: "Três sensos para fazer, dois para manter." },
        { id: "m06-q049", nivel: "dificil", tipo: "multipla", pergunta: "Qual o melhor sinal de que o 5S está sustentado?",
          opcoes: ["Nota alta na auditoria anual", "Setor pintado recentemente", "Anormalidades aparecem de relance e são tratadas no dia a dia", "Muitas placas de 5S nas paredes"], correta: 2,
          explicacao: "5S é meio para enxergar e resolver problemas." },
        { id: "m06-q050", nivel: "dificil", tipo: "caso", contexto: "A empresa criou um ranking mensal de 5S com punição ao pior setor. As notas subiram, mas os problemas de produção continuam.",
          pergunta: "Qual a análise?",
          opcoes: ["O ranking funciona: as notas subiram", "A auditoria virou fim em si mesma e estimula maquiar; ligar o 5S aos problemas reais, auditorias pelas próprias equipes e verificação no gemba", "Aumentar a punição", "Acabar com o 5S"], correta: 1,
          justificativas: ["Nota alta sem efeito nos resultados indica maquiagem.", "Reconecta o 5S ao seu propósito e evita incentivos perversos.", "Aumenta a maquiagem e o medo.", "Joga fora a base; o problema é o modo de gestão."],
          explicacao: "Métricas que viram meta deixam de medir (lei de Goodhart)." },
        { id: "m06-q051", nivel: "dificil", tipo: "discursiva", pergunta: "Explique a relação entre padrão e kaizen e por que “padrão não é engessamento”.",
          respostaModelo: "O padrão registra a **melhor forma conhecida hoje**. Ele estabiliza o processo, reduz variação e permite **medir** o efeito de uma mudança. O kaizen testa uma melhoria; se ela funciona, vira o **novo padrão**, que é a base da próxima melhoria. Padrão engessado é o que não pode ser mudado; o padrão Lean é revisto sempre que alguém encontra um jeito melhor, com participação de quem executa e atenção à ergonomia.",
          criterios: ["Define padrão como melhor forma atual", "Explica o papel do padrão na medição", "Descreve o ciclo padrão → kaizen → novo padrão", "Menciona participação ou revisão contínua"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 4 — JIT, PUXAR E KANBAN
       ================================================================== */
    {
      id: "m06-l4",
      titulo: "Just in time, produção puxada e kanban",
      icone: "🔁",
      objetivos: {
        facil: ["Explicar just in time", "Diferenciar produção empurrada e puxada", "Explicar o que é um kanban"],
        medio: ["Calcular o número de kanbans", "Citar as regras do kanban", "Explicar o supermercado e o fluxo contínuo"],
        dificil: ["Avaliar quando puxar e quando empurrar", "Relacionar kanban, WIP e lei de Little", "Comparar kanban, CONWIP e MRP"]
      },
      prerequisitos: [
        { texto: "MRP (Módulo 3)", licao: "m03-l5" },
        { texto: "Sequenciamento e lei de Little (Módulo 3)", licao: "m03-l7" }
      ],
      resumo: {
        facil: "**Just in time (JIT):** o item certo, na quantidade certa, no momento certo. **Empurrar:** produz pelo plano, mesmo que o seguinte não precise. **Puxar:** produz só para repor o que o processo seguinte consumiu. **Kanban:** cartão (ou sinal) que autoriza produzir ou movimentar.",
        medio: "Número de kanbans: **N = D × L × (1 + α) ÷ C** (demanda × lead time de reposição × margem ÷ capacidade do contêiner), arredondando para cima. Regras de Ohno: o processo seguinte retira; o anterior produz só o retirado; nada sem kanban; kanban acompanha as peças; defeito não segue; reduzir kanbans aos poucos.",
        dificil: "Kanban **limita o WIP** e, pela lei de Little, o lead time. Funciona melhor com demanda estável, poucos itens e setups curtos; com demanda irregular e alta variedade, MRP, CONWIP ou sistemas híbridos são mais adequados. É comum: MRP para planejar e comprar a longo prazo, kanban para executar no chão de fábrica."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Empurrar pelo plano, quando a previsão erra, gera estoque do que não vende e falta do que vende. Puxar liga a produção ao **consumo real**, com estoques pequenos e controlados." },
        { nivel: "facil", tipo: "conceito", titulo: "Empurrar × puxar", texto: "**Empurrar (push):** cada processo produz conforme o programa e “empurra” para o seguinte, precise ele ou não.\n**Puxar (pull):** o processo seguinte **retira** o que precisa, e o anterior **produz só para repor** o que foi retirado.\nInspiração conhecida: os supermercados americanos, que repõem a prateleira conforme o cliente retira." },
        { nivel: "facil", tipo: "conceito", titulo: "Kanban", texto: "“Kanban” significa **cartão/sinal** em japonês. Tipos principais:\n• **Kanban de produção:** autoriza o processo a produzir uma quantidade.\n• **Kanban de retirada (movimentação):** autoriza buscar peças no processo anterior.\nO sinal pode ser cartão, caixa vazia, espaço vazio no chão ou sinal eletrônico." },
        { nivel: "facil", tipo: "bobo", titulo: "A garrafa de água", texto: "Você tem duas garrafas na geladeira. Bebeu uma? Enche e põe para gelar. A garrafa vazia é o **kanban**: você só enche quando alguém consome. Ninguém enche 20 garrafas “por previsão”." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Consumiu, puxou; sem cartão, sem produção.”**" },
        { nivel: "facil", tipo: "atencao", titulo: "Erro comum", texto: "Achar que JIT significa **estoque zero**. JIT usa estoques **pequenos, dimensionados e controlados** (supermercados); o objetivo é reduzir aos poucos, conforme os problemas são resolvidos." },

        { nivel: "medio", tipo: "formula", titulo: "Número de kanbans", texto: "N = D × L × (1 + α) ÷ C   (arredondar para cima)", legenda: [["D", "Demanda por unidade de tempo"], ["L", "Lead time de reposição (produzir + transportar + esperar)"], ["α", "Margem de segurança (ex.: 0,1 = 10%)"], ["C", "Peças por contêiner (por kanban)"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Kanbans de berços plásticos", texto: "A linha consome 400 berços/hora. A reposição leva 0,5 h. Margem de 10%. Cada caixa tem 20 berços.\nN = 400 × 0,5 × 1,1 ÷ 20 = 220 ÷ 20 = **11 kanbans**.\nEstoque máximo no circuito ≈ 11 × 20 = 220 berços." },
        { nivel: "medio", tipo: "conceito", titulo: "As regras do kanban (Ohno)", texto: "1. O processo **seguinte retira** do anterior.\n2. O processo anterior **produz só a quantidade retirada**, na sequência retirada.\n3. **Nada** é produzido ou transportado sem kanban.\n4. O kanban **acompanha** sempre as peças.\n5. **Defeito não segue** para o processo seguinte.\n6. **Reduzir** o número de kanbans aos poucos (expor problemas)." },
        { nivel: "medio", tipo: "conceito", titulo: "Fluxo contínuo e supermercado", texto: "**Fluxo contínuo (peça a peça):** quando os processos podem ser ligados, a peça passa direto de um a outro, sem estoque — o ideal.\n**Supermercado:** quando não dá para ligar (tempos muito diferentes, setup longo, processo compartilhado), cria-se um estoque controlado, reposto por kanban.\n**FIFO lane (pista PEPS):** fila com limite máximo entre processos; cheia, o anterior para." },
        { nivel: "medio", tipo: "serio", titulo: "Na empresa", texto: "A Doces Serra instalou um supermercado de caixas vazias ao lado da embalagem, com 6 kanbans. Quando uma pilha acaba, o cartão vai para o quadro da logística interna, que repõe em até 30 minutos. Acabaram as idas do operador ao almoxarifado." },

        { nivel: "dificil", tipo: "conceito", titulo: "Kanban limita o WIP", texto: "O número de kanbans é um **teto de estoque em processo**. Pela lei de Little (Módulo 3), **lead time = WIP ÷ taxa**: limitando o WIP com a mesma taxa, limita-se o lead time. Reduzir 1 kanban de cada vez mostra qual problema impede operar com menos." },
        { nivel: "dificil", tipo: "conceito", titulo: "Quando puxar, quando empurrar", texto: "| Situação | Tende a funcionar melhor |\n|---|---|\n| Demanda estável, itens repetitivos | Kanban (puxar) |\n| Alta variedade, baixo volume, sob encomenda | MRP/programação, CONWIP |\n| Itens com lead time longo de compra | MRP para planejar, kanban para executar |\n| Demanda muito irregular | Nivelar (heijunka) antes de puxar |\n**CONWIP:** limita o WIP total de uma linha (um cartão por ordem em qualquer ponto), mais simples para alta variedade." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites do kanban", texto: "O kanban **reage** ao consumo: não antecipa picos (Páscoa, Natal). Para picos previsíveis, é preciso recalcular o número de kanbans ou planejar estoque antecipado (Módulo 3). Com setups longos, o kanban força lotes grandes — por isso SMED (lição 6) é pré-requisito prático." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• MONDEN, Y. *Sistema Toyota de Produção: uma abordagem integrada ao just-in-time*. Bookman.\n• HOPP, W. J.; SPEARMAN, M. L. *Factory Physics*. Waveland (push × pull e CONWIP).\n• SPEARMAN, M. L.; WOODRUFF, D. L.; HOPP, W. J. CONWIP: a pull alternative to kanban. *International Journal of Production Research*, v. 28, n. 5, 1990." }
      ],
      questoes: [
        { id: "m06-q060", nivel: "facil", tipo: "multipla", pergunta: "O que caracteriza a produção puxada?",
          opcoes: ["Produzir o máximo possível para aproveitar a máquina", "Produzir só para repor o que o processo seguinte consumiu", "Produzir conforme a previsão, sem olhar o consumo", "Produzir só no fim do mês"], correta: 1,
          explicacao: "O consumo real dispara a produção." },
        { id: "m06-q061", nivel: "facil", tipo: "vf", pergunta: "Just in time significa operar sempre com estoque zero.",
          correta: false, explicacao: "Usa estoques pequenos e controlados, reduzidos aos poucos." },
        { id: "m06-q062", nivel: "facil", tipo: "lacuna", pergunta: "O cartão ou sinal que autoriza produzir ou movimentar peças é o ___.",
          opcoes: ["kanban", "MRP", "Gantt", "andon"], correta: 0,
          explicacao: "Pode ser cartão, caixa vazia ou sinal eletrônico." },
        { id: "m06-q063", nivel: "facil", tipo: "ligar", pergunta: "Ligue o tipo de kanban à função:",
          pares: [["Kanban de produção", "Autoriza produzir"], ["Kanban de retirada", "Autoriza buscar peças no processo anterior"]],
          explicacao: "Os dois circulam juntos no sistema de dois cartões." },
        { id: "m06-q064", nivel: "medio", tipo: "calculo", pergunta: "Demanda = 400 peças/h; lead time de reposição = 0,5 h; margem = 10%; 20 peças por caixa. Quantos kanbans?",
          resposta: 11, tolerancia: 0, unidade: "kanbans",
          resolucao: "N = 400 × 0,5 × 1,1 ÷ 20 = 220 ÷ 20 = 11",
          explicacao: "Se der fração, arredonde para cima." },
        { id: "m06-q065", nivel: "medio", tipo: "calculo", pergunta: "Demanda = 300 peças/h; reposição = 2 h; margem = 0; 50 peças por contêiner. Quantos kanbans?",
          resposta: 12, tolerancia: 0, unidade: "kanbans",
          resolucao: "N = 300 × 2 × 1 ÷ 50 = 600 ÷ 50 = 12",
          explicacao: "Lead time menor → menos kanbans → menos estoque." },
        { id: "m06-q066", nivel: "medio", tipo: "multipla", pergunta: "Qual destas é uma regra do kanban?",
          opcoes: ["O processo anterior produz o máximo que puder", "Peças defeituosas podem seguir e ser separadas depois", "Nada é produzido ou transportado sem kanban", "O número de kanbans deve aumentar sempre"], correta: 2,
          explicacao: "Sem sinal, sem produção." },
        { id: "m06-q067", nivel: "medio", tipo: "caso", contexto: "O recheio tem setup de 2 horas e abastece três linhas de banho diferentes.",
          pergunta: "Qual ligação é mais adequada entre recheio e banho?",
          opcoes: ["Fluxo contínuo peça a peça", "Supermercado reposto por kanban", "Empurrar pelo plano semanal sem limite", "Nenhuma: estocar tudo no armazém"], correta: 1,
          explicacao: "Setup longo e recurso compartilhado impedem fluxo contínuo; o supermercado controla o estoque." },
        { id: "m06-q068", nivel: "medio", tipo: "vf", pergunta: "Numa FIFO lane, quando a fila atinge o limite, o processo anterior deve parar de produzir.",
          correta: true, explicacao: "O limite impede o acúmulo de estoque." },
        { id: "m06-q069", nivel: "dificil", tipo: "calculo", pergunta: "Uma linha tem 240 peças em processo (limitadas por kanban) e produz 60 peças/h. Qual o lead time médio (h)?",
          resposta: 4, tolerancia: 0, unidade: "h",
          resolucao: "Lei de Little: 240 ÷ 60 = 4 h",
          explicacao: "Reduzir kanbans (WIP) com a mesma taxa reduz o lead time." },
        { id: "m06-q070", nivel: "dificil", tipo: "caso", contexto: "Uma fábrica de máquinas especiais, com cada pedido diferente e baixo volume, quer implantar kanban para todos os componentes.",
          pergunta: "Qual a melhor recomendação?",
          opcoes: ["Kanban para tudo", "Usar MRP/programação por pedido (ou CONWIP) e kanban só para itens comuns e repetitivos (parafusos, consumíveis)", "Nenhum sistema de controle", "Estoque de todos os componentes possíveis"], correta: 1,
          justificativas: ["Kanban de item que talvez nunca se repita vira estoque parado.", "Cada sistema no contexto em que funciona.", "Perde o controle do WIP e dos prazos.", "Capital parado e obsolescência."],
          explicacao: "Kanban funciona com demanda repetitiva." },
        { id: "m06-q071", nivel: "dificil", tipo: "vf", pergunta: "O kanban, sozinho, antecipa picos sazonais previsíveis como a Páscoa.",
          correta: false, explicacao: "Ele reage ao consumo; picos exigem recalcular kanbans ou planejar estoque antecipado." },
        { id: "m06-q072", nivel: "dificil", tipo: "discursiva", pergunta: "Explique como MRP e kanban podem conviver numa mesma empresa.",
          respostaModelo: "O **MRP** planeja a médio e longo prazo: calcula necessidades a partir do PMP, dispara compras de itens com lead time longo e dimensiona capacidade. O **kanban** executa no curto prazo e no chão de fábrica: repõe o que foi consumido nos itens repetitivos, limitando WIP. O MRP também pode recalcular o **número de kanbans** quando a demanda muda (ex.: antes da Páscoa). Itens sob encomenda ou de baixo giro ficam no MRP/programação.",
          criterios: ["Descreve o papel do MRP (planejamento, compras)", "Descreve o papel do kanban (execução, reposição)", "Menciona recalcular kanbans com a demanda", "Separa itens repetitivos de itens sob encomenda"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 5 — MAPEAMENTO DO FLUXO DE VALOR (VSM)
       ================================================================== */
    {
      id: "m06-l5",
      titulo: "Mapeamento do fluxo de valor (VSM)",
      icone: "🗺️",
      objetivos: {
        facil: ["Explicar para que serve o VSM", "Reconhecer os principais elementos do mapa", "Calcular dias de estoque"],
        medio: ["Calcular o lead time e o tempo de agregação de valor", "Calcular a eficiência do ciclo do processo", "Seguir os passos para desenhar o estado atual"],
        dificil: ["Propor o estado futuro com base nas perguntas-guia", "Transformar o estado futuro em plano de ação", "Reconhecer as limitações do VSM"]
      },
      prerequisitos: [
        { texto: "Takt time (Módulo 4)", licao: "m04-l5" },
        { texto: "Kanban", licao: "m06-l4" }
      ],
      resumo: {
        facil: "O **VSM** desenha, numa folha, o caminho do produto e da informação, do fornecedor ao cliente. Mostra processos, estoques entre eles, tempos e a **linha do tempo** com o lead time. **Dias de estoque = estoque ÷ demanda diária**.",
        medio: "**Lead time** ≈ soma dos dias de estoque + tempos de processo. **Tempo de agregação de valor (TAV)** = soma dos tempos que transformam o produto. **Eficiência do ciclo (PCE) = TAV ÷ lead time** — costuma ser muito menor que 1%. Desenhe o estado atual **no gemba**, andando o fluxo.",
        dificil: "O estado futuro responde às perguntas-guia de Rother e Shook: takt, supermercado ou fluxo contínuo, processo puxador, nivelamento, incremento de liberação e melhorias necessárias. Vira **plano de ação** com loops e prazos. Limites: é uma foto de uma família de produtos, representa mal alta variedade e não mostra variabilidade."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Melhorar um processo isolado pode não mudar nada para o cliente se o produto passa 10 dias parado em estoques. O VSM mostra o **sistema inteiro** e onde está o tempo perdido." },
        { nivel: "facil", tipo: "conceito", titulo: "O que o mapa mostra", texto: "• **Fluxo de material** (embaixo): processos, estoques (triângulos) entre eles, transporte.\n• **Fluxo de informação** (em cima): pedidos do cliente, previsão, programação, kanbans.\n• **Caixas de dados** de cada processo: tempo de ciclo, setup, disponibilidade, pessoas.\n• **Linha do tempo** (embaixo de tudo): dias de estoque × tempo de processo." },
        { nivel: "facil", tipo: "formula", titulo: "Dias de estoque", texto: "Dias de estoque = quantidade em estoque ÷ demanda diária do cliente", legenda: [["Demanda diária", "Consumo médio do cliente por dia"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Estoque em dias", texto: "Entre o banho e a embalagem há 1.200 caixas de bombons; o cliente consome 600 caixas por dia.\nDias de estoque = 1.200 ÷ 600 = **2 dias**." },
        { nivel: "facil", tipo: "bobo", titulo: "O VSM da pizza", texto: "Você pede a pizza às 20h e ela chega às 21h. Mas o forno assa em 8 minutos! O resto é fila de pedidos, massa esperando, pizza esperando o motoboy, trânsito. O VSM mostra que **o problema não está no forno**." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“O produto passa mais tempo parado do que sendo feito.”** A linha do tempo do VSM prova isso quase sempre." },

        { nivel: "medio", tipo: "mapa", titulo: "VSM atual (simplificado)", texto:
"Fornecedor ─▶ ▲ 5 d\n              │\n        [Recheio]  TC 20 s\n              ▲ 2 d\n        [ Banho ]  TC 40 s\n              ▲ 1,5 d\n        [Embalagem] TC 35 s\n              ▲ 3 d\n              ▼\n           Cliente (600 caixas/dia)\n\nLinha do tempo:\n 5 d | 2 d | 1,5 d | 3 d  → 11,5 dias\n 20 s  40 s   35 s      → 95 s" },
        { nivel: "medio", tipo: "formula", titulo: "Lead time e eficiência do ciclo", texto: "Lead time ≈ Σ dias de estoque + Σ tempos de processo\nPCE = tempo de agregação de valor ÷ lead time", legenda: [["PCE", "Eficiência do ciclo do processo (process cycle efficiency)"], ["TAV", "Soma dos tempos que transformam o produto"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Calculando a PCE", texto: "Lead time ≈ 5 + 2 + 1,5 + 3 = **11,5 dias** (os 95 s de processo são desprezíveis nessa escala).\nConvenção: 1 dia = 1 turno de 7,5 h = 27.000 s.\nLead time = 11,5 × 27.000 = 310.500 s.\nPCE = 95 ÷ 310.500 ≈ **0,03%**.\nLeitura: de cada 10.000 segundos que a caixa passa na empresa, só 3 agregam valor." },
        { nivel: "medio", tipo: "passos", titulo: "Desenhando o estado atual", texto: "1. Escolher **uma família de produtos** (mesmo roteiro).\n2. Começar pelo **cliente**: demanda, takt.\n3. Andar o fluxo **de trás para a frente**, no gemba, anotando processos e estoques (contar, não perguntar).\n4. Preencher as caixas de dados.\n5. Desenhar o fluxo de informação.\n6. Desenhar a linha do tempo e calcular lead time e TAV.\nUse lápis: o mapa é feito à mão, na hora." },
        { nivel: "medio", tipo: "atencao", titulo: "Convenção de tempo", texto: "No VSM, os estoques entram em **dias** e o processo em **segundos**. Para calcular a PCE, converta para a mesma unidade e **declare a convenção** (dia de calendário ou dia útil de trabalho). Com dias de calendário, a PCE fica ainda menor." },

        { nivel: "dificil", tipo: "conceito", titulo: "Perguntas do estado futuro", texto: "Rother e Shook (*Aprendendo a Enxergar*):\n1. Qual o **takt**?\n2. Produzir para um **supermercado** de produtos acabados ou direto para a expedição?\n3. Onde usar **fluxo contínuo**?\n4. Onde usar **supermercados** para puxar?\n5. Qual o **processo puxador** (o único que recebe a programação)?\n6. Como **nivelar o mix** nesse processo?\n7. Qual o **incremento de trabalho** liberado (pitch)?\n8. Que **melhorias** (SMED, TPM, 5S) são necessárias para o estado futuro funcionar?" },
        { nivel: "dificil", tipo: "exemplo", titulo: "Estado futuro da Doces Serra", texto: "• Banho + embalagem em **fluxo contínuo** (FIFO lane de 30 min) → elimina 1,5 dia.\n• **Supermercado** de recheios (0,5 dia), reposto por kanban → elimina 1,5 dia.\n• Embalagem como **processo puxador**, com heijunka.\n• Estoque de produto acabado de 3 para 1 dia com nivelamento.\n• Matéria-prima de 5 para 3 dias, com entregas mais frequentes.\nLead time ≈ 3 + 0,5 + 1 ≈ **4,5 dias** (−61%)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limitações do VSM", texto: "• É uma **foto** de um dia: não mostra a variabilidade (use dados de várias semanas).\n• Representa mal ambientes de **alta variedade** com roteiros diferentes (job shop).\n• Não mostra filas causadas por variabilidade nem custos; simulação (Módulo 9) complementa.\n• Mapa sem plano de ação e sem dono é só um desenho bonito." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• ROTHER, M.; SHOOK, J. *Aprendendo a Enxergar: mapeando o fluxo de valor para agregar valor e eliminar o desperdício*. Lean Institute Brasil.\n• ROTHER, M.; HARRIS, R. *Criando Fluxo Contínuo*. Lean Institute Brasil." }
      ],
      questoes: [
        { id: "m06-q080", nivel: "facil", tipo: "calculo", pergunta: "Há 1.800 caixas em estoque e o cliente consome 600 por dia. Quantos dias de estoque?",
          resposta: 3, tolerancia: 0, unidade: "dias",
          resolucao: "1.800 ÷ 600 = 3 dias",
          explicacao: "No VSM, estoque é convertido em dias de demanda." },
        { id: "m06-q081", nivel: "facil", tipo: "multipla", pergunta: "Qual a principal vantagem do VSM em relação a olhar um processo isolado?",
          opcoes: ["Mostra o sistema inteiro, do fornecedor ao cliente, incluindo o tempo parado", "Calcula o salário dos operadores", "Substitui o MRP", "Mostra só as máquinas"], correta: 0,
          explicacao: "Evita otimizar uma parte sem efeito no todo." },
        { id: "m06-q082", nivel: "facil", tipo: "vf", pergunta: "No VSM, o fluxo de informação costuma ser desenhado na parte de cima e o de material na parte de baixo.",
          correta: true, explicacao: "Com a linha do tempo embaixo de tudo." },
        { id: "m06-q083", nivel: "facil", tipo: "lacuna", pergunta: "No VSM, os estoques entre processos são representados por ___.",
          opcoes: ["triângulos", "círculos verdes", "estrelas", "setas duplas"], correta: 0,
          explicacao: "Triângulo com “I” (inventory)." },
        { id: "m06-q084", nivel: "medio", tipo: "calculo", pergunta: "Estoques do VSM: 5, 2, 1,5 e 3 dias. Tempos de processo desprezíveis nessa escala. Qual o lead time (dias)?",
          resposta: 11.5, tolerancia: 0.01, unidade: "dias",
          resolucao: "5 + 2 + 1,5 + 3 = 11,5 dias",
          explicacao: "É o tempo que uma caixa leva do fornecedor ao cliente." },
        { id: "m06-q085", nivel: "medio", tipo: "calculo", pergunta: "Tempos de processo: recheio 20 s, banho 40 s, embalagem 35 s. Qual o tempo de agregação de valor (s)?",
          resposta: 95, tolerancia: 0, unidade: "s",
          resolucao: "20 + 40 + 35 = 95 s",
          explicacao: "Soma dos tempos que transformam o produto." },
        { id: "m06-q086", nivel: "medio", tipo: "calculo", pergunta: "TAV = 120 s; lead time = 2 dias de 8 h. Qual a PCE (%)? (3 casas)",
          resposta: 0.2083, tolerancia: 0.001, unidade: "%",
          resolucao: "Lead time = 2 × 8 × 3.600 = 57.600 s\nPCE = 120 ÷ 57.600 × 100 ≈ 0,208%",
          explicacao: "Mesmo com lead time curto, a PCE fica bem abaixo de 1%." },
        { id: "m06-q087", nivel: "medio", tipo: "ordenar", pergunta: "Ordene os passos para desenhar o VSM atual:",
          itens: ["Escolher a família de produtos", "Levantar a demanda do cliente e o takt", "Andar o fluxo no gemba, de trás para a frente", "Preencher as caixas de dados", "Desenhar o fluxo de informação", "Desenhar a linha do tempo e calcular lead time"],
          explicacao: "Começa pelo cliente e anda o fluxo real." },
        { id: "m06-q088", nivel: "medio", tipo: "vf", pergunta: "O VSM do estado atual deve ser desenhado na sala de reunião a partir dos dados do ERP.",
          correta: false, explicacao: "Deve ser feito no gemba, contando e observando; o sistema pode estar desatualizado." },
        { id: "m06-q089", nivel: "dificil", tipo: "multipla", pergunta: "No estado futuro, o “processo puxador” é:",
          opcoes: ["O processo mais lento", "O único ponto que recebe a programação do cliente; os anteriores são puxados por kanban/supermercado", "O almoxarifado", "O fornecedor"], correta: 1,
          explicacao: "Programar um só ponto evita programas conflitantes." },
        { id: "m06-q090", nivel: "dificil", tipo: "caso", contexto: "A equipe desenhou um VSM excelente do estado futuro, apresentou à diretoria e nada mudou em 6 meses.",
          pergunta: "O que provavelmente faltou?",
          opcoes: ["Um software de VSM", "Plano de ação com loops, responsáveis, prazos e acompanhamento no gemba", "Mais cores no mapa", "Um mapa de todas as famílias ao mesmo tempo"], correta: 1,
          explicacao: "O mapa é um meio; o resultado vem da implantação." },
        { id: "m06-q091", nivel: "dificil", tipo: "vf", pergunta: "O VSM mostra bem a variabilidade dos tempos e das filas, dispensando simulação.",
          correta: false, explicacao: "É uma foto; variabilidade e filas pedem dados de várias semanas ou simulação." },
        { id: "m06-q092", nivel: "dificil", tipo: "discursiva", pergunta: "A partir do VSM atual da Doces Serra (lead time de 11,5 dias), proponha um estado futuro e estime o novo lead time.",
          respostaModelo: "Takt: 27.000 s ÷ 600 = 45 s. Propostas: (1) banho + embalagem em **fluxo contínuo** com FIFO lane curta (elimina 1,5 dia); (2) **supermercado** de recheios de 0,5 dia com kanban (de 2 para 0,5); (3) embalagem como **processo puxador** com **heijunka**, reduzindo produto acabado de 3 para 1 dia; (4) matéria-prima de 5 para 3 dias com entregas mais frequentes. Lead time ≈ 3 + 0,5 + 1 = 4,5 dias (−61%). Melhorias necessárias: SMED no recheio, TPM na banhadeira, padrão de limpeza. Plano com responsáveis e prazos.",
          criterios: ["Calcula ou usa o takt", "Propõe fluxo contínuo e/ou supermercado com justificativa", "Define processo puxador/nivelamento", "Estima o novo lead time", "Lista melhorias necessárias ou plano de ação"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 6 — SMED E HEIJUNKA
       ================================================================== */
    {
      id: "m06-l6",
      titulo: "SMED e heijunka: troca rápida e nivelamento",
      icone: "⚡",
      objetivos: {
        facil: ["Explicar o que é setup e por que reduzi-lo", "Diferenciar setup interno e externo", "Explicar o que é heijunka"],
        medio: ["Aplicar as etapas do SMED", "Calcular o ganho de capacidade de um SMED", "Montar uma sequência nivelada de mix"],
        dificil: ["Relacionar setup, tamanho de lote e EPEI", "Calcular o pitch e usar a caixa heijunka", "Avaliar quando nivelar e seus custos"]
      },
      prerequisitos: [
        { texto: "Kanban", licao: "m06-l4" },
        { texto: "Capacidade (Módulo 3)", licao: "m03-l6" }
      ],
      resumo: {
        facil: "**Setup** é o tempo entre a última peça boa do produto A e a primeira peça boa do produto B. **SMED** (Shingo) reduz o setup. **Setup interno:** só com a máquina parada. **Setup externo:** pode ser feito com a máquina rodando. **Heijunka:** nivelar o volume e o **mix** da produção.",
        medio: "Etapas do SMED: (1) **separar** interno e externo; (2) **converter** interno em externo; (3) **racionalizar** tudo (fixações rápidas, eliminar ajustes, trabalho em paralelo). Heijunka: em vez de “toda a semana A, depois B”, produzir **A B A C A B…** em pequenos lotes.",
        dificil: "Setup curto permite **lotes menores** e trocas mais frequentes: **EPEI** (every part every interval) = com que frequência cada produto pode ser feito. **Pitch** = takt × quantidade da embalagem: intervalo de liberação da caixa heijunka. Nivelar tem custo (mais setups, estoque de produto acabado); vale quando a variação causa mura/muri."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Com setup de 2 horas, ninguém quer trocar de produto: fazem-se lotes enormes, o estoque cresce e o cliente espera pelo sabor que não está no lote da vez. Setup curto é o que torna possível produzir **pouco de cada, muitas vezes**." },
        { nivel: "facil", tipo: "conceito", titulo: "Setup interno × externo", texto: "**Setup:** da última peça boa do produto anterior até a primeira peça boa do seguinte (inclui ajustes e testes).\n**Interno:** só pode ser feito com a máquina **parada** (trocar o molde).\n**Externo:** pode ser feito com a máquina **rodando** (buscar o molde, pré-aquecer, separar ferramentas)." },
        { nivel: "facil", tipo: "conceito", titulo: "SMED", texto: "**Single-Minute Exchange of Die** (troca de ferramenta em um dígito de minutos, isto é, menos de 10 min). Desenvolvido por **Shigeo Shingo** a partir dos anos 1950, publicado em livro em 1985. O nome é uma meta: nem todo setup chega a menos de 10 min, mas quase todos caem muito." },
        { nivel: "facil", tipo: "bobo", titulo: "O pit stop", texto: "Na Fórmula 1, a troca de pneus leva poucos segundos porque **tudo é preparado antes** (pneus aquecidos ao lado, cada pessoa com uma função, pistola de uma porca só). Isso é SMED: o que dá para fazer com o carro andando, faz-se antes." },
        { nivel: "facil", tipo: "conceito", titulo: "Heijunka", texto: "**Nivelamento** do volume e do mix da produção ao longo do tempo. Em vez de produzir 200 de A na segunda e 100 de B na terça, produz-se todo dia um pouco de A, de B e de C, na proporção da demanda." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Separa, Converte, Racionaliza”** — as três etapas do SMED." },

        { nivel: "medio", tipo: "passos", titulo: "As etapas do SMED", texto: "0. **Filmar e registrar** o setup atual (tudo misturado).\n1. **Separar** o que é interno e o que é externo (checklist, preparar antes).\n2. **Converter** interno em externo (pré-aquecer o molde fora, pré-montar, padronizar alturas).\n3. **Racionalizar** o interno e o externo: fixações rápidas (¼ de volta, grampos), eliminar ajustes (batentes, gabaritos), operações em paralelo (duas pessoas).\n4. **Padronizar** o novo procedimento." },
        { nivel: "medio", tipo: "exemplo", titulo: "SMED na banhadeira", texto: "Setup atual: **60 min**, dos quais 25 min são externos feitos com a máquina parada (buscar bicos, separar chocolate, esperar a temperatura).\nEtapa 1 (separar): → **35 min**.\nEtapa 2 e 3 (pré-aquecer chocolate em tacho auxiliar, bicos com engate rápido): → **12 min**.\nCom 4 trocas por dia: 4 × (60 − 12) = **192 min/dia** liberados." },
        { nivel: "medio", tipo: "exemplo", titulo: "Sequência nivelada", texto: "Demanda semanal: A 200, B 100, C 100 (proporção 2 : 1 : 1).\nSem nivelar: seg–ter só A, qua B, qui C.\nNivelado (lotes de 50): **A B A C | A B A C | …** todos os dias.\nO cliente de C não espera até quinta, e as etapas anteriores recebem uma carga regular." },
        { nivel: "medio", tipo: "atencao", titulo: "Erro comum", texto: "Nivelar sem reduzir o setup: mais trocas com setup longo **derrubam a capacidade**. SMED vem antes (ou junto) do heijunka." },

        { nivel: "dificil", tipo: "formula", titulo: "EPEI", texto: "Nº de setups possíveis por dia = tempo disponível para setups ÷ tempo de setup\nEPEI (dias) = nº de produtos ÷ setups por dia", legenda: [["EPEI", "Every part every interval: intervalo para produzir todos os produtos uma vez"]] },
        { nivel: "dificil", tipo: "exemplo", titulo: "EPEI antes e depois do SMED", texto: "Há 60 min/dia disponíveis para setups e 6 produtos.\nSetup de 30 min → 2 setups/dia → EPEI = 6 ÷ 2 = **3 dias** (cada produto a cada 3 dias; estoque de ~3 dias de cada).\nSetup de 10 min → 6 setups/dia → EPEI = **1 dia**." },
        { nivel: "dificil", tipo: "formula", titulo: "Pitch", texto: "Pitch = takt time × quantidade por embalagem", legenda: [["Pitch", "Intervalo de liberação de trabalho ao processo puxador"]] },
        { nivel: "dificil", tipo: "exemplo", titulo: "Caixa heijunka", texto: "Takt = 45 s; embalagem de expedição = 20 caixas → pitch = 45 × 20 = 900 s = **15 min**.\nA **caixa heijunka** tem uma coluna para cada intervalo de 15 min e uma linha por produto; o kanban de cada intervalo é retirado na hora e libera exatamente um pitch de trabalho. Assim a supervisão vê, a cada 15 min, se a linha está no ritmo." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Custos do nivelamento", texto: "Nivelar pede **mais setups** e algum **estoque de produto acabado** para absorver a diferença entre pedidos reais e a sequência nivelada. Vale a pena quando a variação gera mura/muri (hora extra, quebras) nos processos anteriores e nos fornecedores. Com demanda muito instável, nivele por período (semana) em vez de por hora." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• SHINGO, S. *Sistema de Troca Rápida de Ferramenta: uma revolução nos sistemas produtivos*. Bookman.\n• SMALLEY, A. *Criando o Sistema Puxado Nivelado*. Lean Institute Brasil." }
      ],
      questoes: [
        { id: "m06-q100", nivel: "facil", tipo: "ligar", pergunta: "Classifique a atividade de setup:",
          pares: [["Trocar o molde da máquina", "Interno"], ["Buscar o molde no almoxarifado", "Externo"], ["Pré-aquecer o próximo molde", "Externo"], ["Soltar os parafusos de fixação", "Interno"]],
          explicacao: "Externo: pode ser feito com a máquina rodando." },
        { id: "m06-q101", nivel: "facil", tipo: "multipla", pergunta: "O que significa a meta “single-minute” no SMED?",
          opcoes: ["Setup de exatamente 1 minuto", "Setup com um dígito de minutos (menos de 10 min)", "Uma troca por minuto", "Um operador por minuto"], correta: 1,
          explicacao: "Single-digit minute: de 1 a 9 minutos." },
        { id: "m06-q102", nivel: "facil", tipo: "vf", pergunta: "Heijunka é produzir todo o volume de um produto de uma vez, para depois passar ao próximo.",
          correta: false, explicacao: "É o contrário: nivelar volume e mix, um pouco de cada, com frequência." },
        { id: "m06-q103", nivel: "facil", tipo: "lacuna", pergunta: "O SMED foi desenvolvido por ___.",
          opcoes: ["Shigeo Shingo", "Henry Ford", "Frederick Taylor", "Walter Shewhart"], correta: 0,
          explicacao: "Shingo também popularizou o poka-yoke." },
        { id: "m06-q104", nivel: "medio", tipo: "ordenar", pergunta: "Ordene as etapas do SMED:",
          itens: ["Registrar o setup atual", "Separar interno e externo", "Converter interno em externo", "Racionalizar todas as atividades", "Padronizar o novo procedimento"],
          explicacao: "“Separa, Converte, Racionaliza”." },
        { id: "m06-q105", nivel: "medio", tipo: "calculo", pergunta: "O setup caiu de 60 para 12 minutos e há 4 trocas por dia. Quantos minutos por dia foram liberados?",
          resposta: 192, tolerancia: 0, unidade: "min",
          resolucao: "4 × (60 − 12) = 4 × 48 = 192 min",
          explicacao: "Tempo que pode virar produção ou mais trocas (lotes menores)." },
        { id: "m06-q106", nivel: "medio", tipo: "multipla", pergunta: "Demanda semanal: A 300, B 150, C 150. Qual sequência diária é nivelada?",
          opcoes: ["AAAAAA BBB CCC na semana", "A B A C repetido ao longo do dia", "Só A na segunda, só B na quarta", "C C C A A A"], correta: 1,
          explicacao: "Proporção 2 : 1 : 1 distribuída ao longo do dia." },
        { id: "m06-q107", nivel: "medio", tipo: "caso", contexto: "A equipe quer nivelar o mix da embalagem trocando de produto 8 vezes por dia, mas cada troca leva 45 minutos.",
          pergunta: "Qual o problema?",
          opcoes: ["Nenhum", "Com setup longo, 8 trocas consomem 6 h por dia; fazer SMED antes ou junto do nivelamento", "Deveria trocar 20 vezes", "Heijunka não se aplica a embalagem"], correta: 1,
          explicacao: "8 × 45 min = 360 min parados." },
        { id: "m06-q108", nivel: "medio", tipo: "vf", pergunta: "Converter setup interno em externo reduz o tempo de máquina parada mesmo sem acelerar as atividades.",
          correta: true, explicacao: "A atividade continua existindo, mas acontece com a máquina rodando." },
        { id: "m06-q109", nivel: "dificil", tipo: "calculo", pergunta: "Há 90 min/dia para setups, 9 produtos e setup de 15 min. Qual o EPEI (dias)?",
          resposta: 1.5, tolerancia: 0.01, unidade: "dias",
          resolucao: "Setups/dia = 90 ÷ 15 = 6\nEPEI = 9 ÷ 6 = 1,5 dia",
          explicacao: "Cada produto pode ser feito a cada 1,5 dia." },
        { id: "m06-q110", nivel: "dificil", tipo: "calculo", pergunta: "Takt = 40 s; embalagem de expedição com 30 unidades. Qual o pitch (min)?",
          resposta: 20, tolerancia: 0, unidade: "min",
          resolucao: "Pitch = 40 × 30 = 1.200 s = 20 min",
          explicacao: "A caixa heijunka libera trabalho a cada 20 minutos." },
        { id: "m06-q111", nivel: "dificil", tipo: "caso", contexto: "Depois do SMED, o setup da banhadeira caiu de 30 para 10 minutos. O gerente quer usar todo o ganho para produzir mais do mesmo lote grande.",
          pergunta: "Qual alternativa aproveita melhor o ganho na lógica Lean?",
          opcoes: ["Manter lotes grandes e produzir mais estoque", "Usar parte do ganho para trocar mais vezes (lotes menores, EPEI menor) e reduzir estoque e lead time, e o resto como capacidade se a demanda pedir", "Demitir o preparador", "Voltar ao setup antigo"], correta: 1,
          justificativas: ["Gera superprodução, o pior desperdício.", "Transforma o ganho de setup em flexibilidade e menos estoque.", "Não é o objetivo do SMED.", "Perde o ganho."],
          explicacao: "Setup menor → lote menor → menos estoque." },
        { id: "m06-q112", nivel: "dificil", tipo: "discursiva", pergunta: "Explique a relação entre tempo de setup, tamanho de lote, estoque e lead time.",
          respostaModelo: "Setup longo incentiva **lotes grandes** para diluir o tempo parado. Lotes grandes significam cada produto feito com pouca frequência (**EPEI alto**), logo **estoque** maior de cada item para cobrir o intervalo e **lead time** maior (pela lei de Little, mais WIP → mais tempo). Reduzindo o setup (SMED), pode-se trocar mais vezes, fazer lotes menores, reduzir estoque e lead time, e responder melhor ao mix do cliente (heijunka).",
          criterios: ["Relaciona setup longo e lote grande", "Relaciona lote grande e estoque/EPEI", "Relaciona estoque e lead time (Little)", "Conclui o efeito do SMED"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 7 — JIDOKA, POKA-YOKE E TPM
       ================================================================== */
    {
      id: "m06-l7",
      titulo: "Jidoka, poka-yoke, TPM e OEE",
      icone: "🛡️",
      objetivos: {
        facil: ["Explicar o jidoka", "Dar exemplos de poka-yoke", "Calcular o OEE a partir de D, P e Q"],
        medio: ["Diferenciar poka-yoke de controle e de advertência", "Calcular disponibilidade, performance e qualidade", "Citar as seis grandes perdas"],
        dificil: ["Relacionar as seis grandes perdas aos componentes do OEE", "Descrever os pilares do TPM", "Avaliar o uso do OEE como meta"]
      },
      prerequisitos: [
        { texto: "Indicadores e OEE (Módulo 14)", licao: "m14-l3" },
        { texto: "5S", licao: "m06-l3" }
      ],
      resumo: {
        facil: "**Jidoka:** parar ao detectar uma anormalidade, para não produzir defeito em série. **Poka-yoke:** dispositivo à prova de erro (Shingo). **TPM:** manutenção produtiva total, com os operadores cuidando do equipamento. **OEE = disponibilidade × performance × qualidade**.",
        medio: "Poka-yoke de **controle** impede o erro (a peça não encaixa errado); de **advertência** avisa (alarme). As **seis grandes perdas**: quebras, setup e ajustes, pequenas paradas, velocidade reduzida, defeitos e retrabalho, perdas de partida.",
        dificil: "Quebras e setup reduzem a **disponibilidade**; pequenas paradas e velocidade, a **performance**; defeitos e partida, a **qualidade**. O TPM (JIPM) tem **8 pilares**, com a manutenção autônoma e a planejada no centro. OEE como meta isolada gera manipulação (tempo planejado “ajustado”); use-o para achar a maior perda."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Um defeito descoberto no fim da linha já contaminou o lote inteiro. Uma máquina que quebra para toda a linha puxada (não há estoque para amortecer). Com estoques baixos, **qualidade na fonte e máquina confiável** deixam de ser opcionais." },
        { nivel: "facil", tipo: "conceito", titulo: "Jidoka", texto: "“Automação com toque humano”. A ideia vem do tear automático de **Sakichi Toyoda**, que parava sozinho quando um fio se rompia. Princípio: **detectar a anormalidade → parar → corrigir a causa → melhorar**. Na linha, o operador pode **puxar a corda do andon** para parar ou pedir ajuda." },
        { nivel: "facil", tipo: "conceito", titulo: "Poka-yoke", texto: "Dispositivo ou método **à prova de erro**, popularizado por **Shigeo Shingo**. Exemplos:\n• Pino-guia que só deixa a peça entrar na posição certa.\n• Tomada USB-C que encaixa dos dois lados (elimina o erro).\n• Balança que bloqueia a caixa com peso fora da faixa (falta bombom).\n• Micro-ondas que não liga com a porta aberta." },
        { nivel: "facil", tipo: "bobo", titulo: "O cartão do metrô", texto: "A catraca só libera com o cartão válido: é um poka-yoke. O pen drive antigo, que entrava de um lado só (depois de três tentativas), era um poka-yoke que ainda deixava tentar errado." },
        { nivel: "facil", tipo: "formula", titulo: "OEE", texto: "OEE = D × P × Q\nD = tempo operando ÷ tempo planejado\nP = (produção × ciclo ideal) ÷ tempo operando\nQ = peças boas ÷ peças produzidas", legenda: [["D", "Disponibilidade"], ["P", "Performance (desempenho)"], ["Q", "Qualidade"]] },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Disponível, Performando e com Qualidade”** — OEE = D × P × Q. E jidoka: **“viu problema, para a linha”**." },

        { nivel: "medio", tipo: "exemplo", titulo: "OEE da banhadeira", texto: "Tempo planejado = 480 min; paradas não planejadas = 60 min → operando = 420 min.\nCiclo ideal = 0,5 min/lote; produziu 700 lotes; 665 bons.\nD = 420 ÷ 480 = **87,5%** · P = 700 × 0,5 ÷ 420 = **83,3%** · Q = 665 ÷ 700 = **95%**\nOEE = 0,875 × 0,833 × 0,95 ≈ **69,3%** (confira: 665 × 0,5 ÷ 480 = 69,3%)." },
        { nivel: "medio", tipo: "conceito", titulo: "Tipos de poka-yoke", texto: "Pela **função**:\n• **Controle (bloqueio):** impede o erro ou para o processo (a peça não encaixa; a máquina não liga).\n• **Advertência:** avisa (luz, alarme), mas depende de alguém reagir.\nPelo **método de detecção** (Shingo): **contato** (forma, dimensão), **valor fixo** (contar peças: sobrou parafuso = faltou apertar) e **etapa do movimento** (sequência obrigatória).\nPrefira o controle quando o erro for grave." },
        { nivel: "medio", tipo: "conceito", titulo: "As seis grandes perdas", texto: "1. **Quebras** (falhas do equipamento)\n2. **Setup e ajustes**\n3. **Pequenas paradas** e ociosidade (travamentos curtos)\n4. **Velocidade reduzida**\n5. **Defeitos e retrabalho**\n6. **Perdas de partida** (refugo até estabilizar)" },
        { nivel: "medio", tipo: "dica", titulo: "Leia o OEE pela maior perda", texto: "No exemplo, a menor parcela é a **performance (83,3%)**: investigar pequenas paradas e velocidade. Aumentar o OEE “em geral” não diz onde agir; a decomposição diz." },

        { nivel: "dificil", tipo: "conceito", titulo: "Perdas × componentes do OEE", texto: "| Componente | Perdas |\n|---|---|\n| Disponibilidade | Quebras · setup e ajustes |\n| Performance | Pequenas paradas · velocidade reduzida |\n| Qualidade | Defeitos e retrabalho · perdas de partida |" },
        { nivel: "dificil", tipo: "conceito", titulo: "TPM e seus pilares", texto: "**TPM (Total Productive Maintenance):** sistematizado no Japão por **Seiichi Nakajima** e pelo **JIPM** (anos 1970). Objetivo: zero quebra, zero defeito, zero acidente. Os 8 pilares do JIPM:\n1. **Manutenção autônoma** (operador limpa, inspeciona, lubrifica)\n2. **Manutenção planejada** (preventiva e preditiva)\n3. **Melhoria específica** (kaizen nas perdas)\n4. **Educação e treinamento**\n5. **Controle inicial** (projeto de novos equipamentos)\n6. **Manutenção da qualidade**\n7. **TPM administrativo** (áreas de apoio)\n8. **Segurança, saúde e meio ambiente**" },
        { nivel: "dificil", tipo: "limitacao", titulo: "OEE como meta", texto: "O valor de **85%** é frequentemente citado como “classe mundial” (atribuído à literatura de TPM), mas é uma referência genérica, não um padrão para todo setor. Como **meta isolada**, o OEE convida à manipulação: “tirar” paradas do tempo planejado, usar ciclo ideal folgado. Use a **mesma definição ao longo do tempo** e foque na decomposição das perdas." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: jidoka na embalagem", texto: "A balança da embalagem bloqueia caixas com menos de 12 bombons (poka-yoke de controle). Três bloqueios seguidos acendem o andon e param a alimentação (jidoka). O líder vai ao posto, resolve a causa (bico da dosadora entupido) e registra no quadro. O problema, que antes aparecia como reclamação de cliente, passou a ser resolvido em minutos." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• SHINGO, S. *Zero Quality Control: Source Inspection and the Poka-Yoke System*. Productivity Press.\n• NAKAJIMA, S. *Introdução ao TPM: Total Productive Maintenance*. IMC Internacional.\n• Japan Institute of Plant Maintenance (JIPM): materiais sobre os pilares do TPM." }
      ],
      questoes: [
        { id: "m06-q120", nivel: "facil", tipo: "multipla", pergunta: "Qual a ideia central do jidoka?",
          opcoes: ["Produzir o máximo sem parar", "Detectar a anormalidade, parar e corrigir a causa, para não produzir defeito em série", "Inspecionar tudo no final", "Automatizar todas as tarefas"], correta: 1,
          explicacao: "Vem do tear de Sakichi Toyoda, que parava quando o fio rompia." },
        { id: "m06-q121", nivel: "facil", tipo: "multipla", pergunta: "Qual destes é um poka-yoke?",
          opcoes: ["Um cartaz pedindo atenção", "Um pino-guia que só deixa a peça encaixar na posição certa", "Uma reunião mensal de qualidade", "Aumentar a inspeção final"], correta: 1,
          explicacao: "Poka-yoke atua no processo, sem depender só da atenção." },
        { id: "m06-q122", nivel: "facil", tipo: "calculo", pergunta: "D = 90%, P = 80%, Q = 95%. Qual o OEE (%)?",
          resposta: 68.4, tolerancia: 0.05, unidade: "%",
          resolucao: "OEE = 0,90 × 0,80 × 0,95 = 0,684 = 68,4%",
          explicacao: "Os três componentes se multiplicam." },
        { id: "m06-q123", nivel: "facil", tipo: "vf", pergunta: "No TPM, os operadores participam da manutenção do equipamento (limpeza, inspeção, lubrificação).",
          correta: true, explicacao: "É a manutenção autônoma." },
        { id: "m06-q124", nivel: "medio", tipo: "calculo", pergunta: "Tempo planejado = 480 min; paradas não planejadas = 60 min; ciclo ideal = 0,5 min; produção = 700; boas = 665. Qual o OEE (%)?",
          resposta: 69.27, tolerancia: 0.1, unidade: "%",
          resolucao: "D = 420 ÷ 480 = 0,875\nP = 700 × 0,5 ÷ 420 = 0,8333\nQ = 665 ÷ 700 = 0,95\nOEE = 0,875 × 0,8333 × 0,95 ≈ 69,27%",
          explicacao: "Atalho: boas × ciclo ideal ÷ tempo planejado = 665 × 0,5 ÷ 480." },
        { id: "m06-q125", nivel: "medio", tipo: "ligar", pergunta: "Ligue o poka-yoke ao tipo:",
          pares: [["A peça não encaixa se estiver invertida", "Controle (bloqueio)"], ["Alarme sonoro quando falta etiqueta", "Advertência"], ["Contar parafusos: se sobrou, faltou apertar", "Método do valor fixo"]],
          explicacao: "Controle impede; advertência avisa." },
        { id: "m06-q126", nivel: "medio", tipo: "multipla", pergunta: "Qual destas NÃO é uma das seis grandes perdas?",
          opcoes: ["Quebras", "Pequenas paradas", "Velocidade reduzida", "Férias coletivas planejadas"], correta: 3,
          explicacao: "Paradas planejadas saem do tempo planejado; não entram nas seis perdas." },
        { id: "m06-q127", nivel: "medio", tipo: "caso", contexto: "OEE da envasadora: D = 92%, P = 71%, Q = 98%.",
          pergunta: "Onde concentrar a melhoria?",
          opcoes: ["Disponibilidade: quebras", "Performance: pequenas paradas e velocidade reduzida", "Qualidade: defeitos", "Em todos igualmente"], correta: 1,
          explicacao: "A menor parcela indica a maior perda." },
        { id: "m06-q128", nivel: "medio", tipo: "vf", pergunta: "Um poka-yoke de advertência é mais seguro que um de controle para erros graves.",
          correta: false, explicacao: "O de controle impede o erro; o de advertência depende de alguém reagir." },
        { id: "m06-q129", nivel: "dificil", tipo: "ligar", pergunta: "Ligue a perda ao componente do OEE que ela reduz:",
          pares: [["Quebras", "Disponibilidade"], ["Setup e ajustes", "Disponibilidade"], ["Pequenas paradas", "Performance"], ["Perdas de partida", "Qualidade"]],
          explicacao: "D: quebras e setup · P: pequenas paradas e velocidade · Q: defeitos e partida." },
        { id: "m06-q130", nivel: "dificil", tipo: "multipla", pergunta: "Qual pilar do TPM trata do projeto de novos equipamentos para que já nasçam fáceis de operar e manter?",
          opcoes: ["Manutenção autônoma", "Controle inicial", "TPM administrativo", "Educação e treinamento"], correta: 1,
          explicacao: "Também chamado de gestão antecipada do equipamento." },
        { id: "m06-q131", nivel: "dificil", tipo: "caso", contexto: "A diretoria definiu meta de OEE de 85% para todas as máquinas. Em dois meses, o OEE subiu de 62% para 84% sem nenhuma melhoria visível na produção.",
          pergunta: "O que provavelmente aconteceu?",
          opcoes: ["Melhoria real", "Manipulação da base: paradas reclassificadas como planejadas, ciclo ideal folgado; auditar definições e focar nas perdas", "Erro da balança", "As máquinas ficaram mais rápidas sozinhas"], correta: 1,
          justificativas: ["Produção igual com OEE muito maior é incoerente.", "Meta isolada incentiva mudar a régua em vez do processo.", "Não explica o salto em todas as máquinas.", "Sem ação, não há mudança física."],
          explicacao: "Indicador que vira meta deixa de medir (Goodhart)." },
        { id: "m06-q132", nivel: "dificil", tipo: "discursiva", pergunta: "Proponha um sistema de jidoka + poka-yoke para evitar caixas de bombom com falta de unidades.",
          respostaModelo: "**Poka-yoke de controle:** berço com 12 cavidades e sensor/balança que **bloqueia** caixas fora da faixa de peso; berço que só fecha a tampa com todas as cavidades cheias (detecção por contato ou visão). **Jidoka:** repetição de bloqueios (ex.: 3 seguidos) aciona o **andon** e para a alimentação; o líder atende, identifica a causa (dosadora, abastecimento) e registra. **Melhoria:** análise das causas registradas (Pareto) e ação definitiva; revisão do padrão. Considerar calibração da balança e o custo de falsos alarmes.",
          criterios: ["Propõe poka-yoke de controle (bloqueio)", "Inclui parada/andon (jidoka)", "Inclui resposta e análise de causa", "Considera calibração ou falsos alarmes"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 8 — KAIZEN E CULTURA
       ================================================================== */
    {
      id: "m06-l8",
      titulo: "Kaizen, PDCA e A3",
      icone: "📈",
      objetivos: {
        facil: ["Explicar o que é kaizen", "Descrever as etapas do PDCA", "Explicar o que é ir ao gemba"],
        medio: ["Diferenciar kaizen contínuo e evento kaizen", "Estruturar um problema no formato A3", "Aplicar os 5 porquês com cuidado"],
        dificil: ["Avaliar a sustentação de melhorias", "Explicar o papel da liderança no Lean", "Relacionar Lean e Seis Sigma"]
      },
      prerequisitos: [{ texto: "Jidoka e TPM", licao: "m06-l7" }],
      resumo: {
        facil: "**Kaizen:** melhoria contínua, em pequenos passos, com todos. **PDCA:** Planejar, Fazer, Checar, Agir. **Gemba:** o lugar onde o trabalho acontece — ir ver com os próprios olhos.",
        medio: "**Kaizen diário** (pequenas melhorias, ideias dos operadores) × **evento kaizen** (equipe dedicada por 3 a 5 dias a um problema). O **A3** resume um problema numa folha: contexto, situação atual, meta, análise de causa, contramedidas, plano, acompanhamento. **5 porquês**: pergunte “por quê?” até chegar a uma causa acionável.",
        dificil: "Melhorias regridem sem **padrão**, **verificação** e **dono**. A liderança Lean ensina a resolver problemas (pergunta mais do que manda), vai ao gemba e protege tempo para melhoria. Lean foca fluxo e desperdício; Seis Sigma foca variação e defeitos com estatística (Módulo 5); combinados, formam o **Lean Seis Sigma**."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Ferramentas implantadas uma vez envelhecem. O que mantém uma operação melhorando por décadas é a **rotina de melhoria**: todos, todo dia, um pouco." },
        { nivel: "facil", tipo: "conceito", titulo: "Kaizen", texto: "“Kai” = mudança; “zen” = para melhor. Melhoria **contínua e incremental**, feita por **todos**, com pouco ou nenhum investimento. O livro de Masaaki Imai (*Kaizen*, 1986) difundiu o termo no Ocidente." },
        { nivel: "facil", tipo: "conceito", titulo: "PDCA", texto: "**P — Planejar:** entender o problema, a causa, definir meta e ação.\n**D — Fazer (Do):** executar a ação, de preferência em teste.\n**C — Checar:** medir se funcionou.\n**A — Agir:** padronizar se funcionou; se não, voltar ao P.\nAssociado a Shewhart e difundido por Deming (que depois preferiu PDSA, com “Study”)." },
        { nivel: "facil", tipo: "conceito", titulo: "Gemba", texto: "“O lugar real”. Problemas se entendem **indo ver**: observar o processo, falar com quem faz, ver os dados na origem. Relatório e planilha não substituem o gemba." },
        { nivel: "facil", tipo: "bobo", titulo: "PDCA do café", texto: "P: o café está amargo; hipótese: água fervendo demais; meta: café bom amanhã. D: tirar a água antes de ferver. C: provar. A: ficou bom? Vira o jeito da casa. Ficou fraco? Nova hipótese (mais pó) e gira de novo." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Planeja, Faz, Checa e Age — e gira de novo.”**" },

        { nivel: "medio", tipo: "conceito", titulo: "Kaizen diário × evento kaizen", texto: "| | Kaizen diário | Evento kaizen |\n|---|---|---|\n| Duração | Contínuo | 3 a 5 dias |\n| Quem | Equipe do setor | Equipe multifuncional dedicada |\n| Escopo | Pequenas melhorias | Problema definido (ex.: setup da banhadeira) |\n| Risco | Falta de tempo protegido | Regredir depois do evento |" },
        { nivel: "medio", tipo: "passos", titulo: "O relatório A3", texto: "Numa folha A3 (a lógica do PDCA):\n1. **Contexto:** por que o problema importa.\n2. **Situação atual:** dados e fatos do gemba.\n3. **Meta:** o que, quanto, até quando.\n4. **Análise de causa:** 5 porquês, Ishikawa.\n5. **Contramedidas:** ações ligadas às causas.\n6. **Plano:** quem, o quê, quando.\n7. **Acompanhamento:** resultados e padronização." },
        { nivel: "medio", tipo: "exemplo", titulo: "5 porquês", texto: "Caixas com tampa torta.\nPor quê? A tampa não assenta.\nPor quê? O berço está 2 mm mais alto.\nPor quê? O novo fornecedor de berços mudou a espessura.\nPor quê? A especificação não tinha tolerância de altura.\nPor quê? A ficha técnica foi feita só com o fornecedor antigo.\n→ Contramedida: incluir tolerância na especificação e inspecionar o primeiro lote de novo fornecedor." },
        { nivel: "medio", tipo: "atencao", titulo: "Cuidado com os 5 porquês", texto: "“5” é indicativo. Os erros comuns: parar em “falha humana” (pergunte por que o processo permitiu o erro), seguir um só caminho quando há várias causas, e responder por opinião sem verificar no gemba." },

        { nivel: "dificil", tipo: "conceito", titulo: "Sustentando melhorias", texto: "Melhorias regridem quando falta: **padrão** atualizado, **verificação** rotineira (quadro, auditoria de processo pela liderança), **dono** do indicador, e **tempo protegido** para melhoria. Uma prática comum é a gestão diária em camadas (reuniões curtas em cascata, do posto à diretoria)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Liderança Lean", texto: "O líder **vai ao gemba**, faz perguntas (“qual o problema? qual a causa? o que você vai testar?”) em vez de dar a resposta, e desenvolve a capacidade das pessoas de resolver problemas. Rother (*Toyota Kata*, 2009) descreve rotinas de melhoria e de coaching para isso." },
        { nivel: "dificil", tipo: "conceito", titulo: "Lean e Seis Sigma", texto: "**Lean:** fluxo, velocidade, desperdício; ferramentas visuais, simples, de chão de fábrica.\n**Seis Sigma:** variação e defeitos; estatística, projetos DMAIC (Módulo 5).\n**Lean Seis Sigma:** combina os dois — Lean para tornar o fluxo rápido e simples, Seis Sigma para problemas de variação que exigem análise estatística." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• IMAI, M. *Kaizen: a estratégia para o sucesso competitivo*. IMAM.\n• SHOOK, J. *Gerenciando para o Aprendizado: usando o processo de gerenciamento A3*. Lean Institute Brasil.\n• ROTHER, M. *Toyota Kata*. Bookman.\n• DEMING, W. E. *Saia da Crise (Out of the Crisis)*. Futura." }
      ],
      questoes: [
        { id: "m06-q140", nivel: "facil", tipo: "ordenar", pergunta: "Ordene o ciclo PDCA:",
          itens: ["Planejar", "Fazer", "Checar", "Agir"],
          explicacao: "E gira de novo." },
        { id: "m06-q141", nivel: "facil", tipo: "multipla", pergunta: "O que significa “ir ao gemba”?",
          opcoes: ["Ir a uma reunião na diretoria", "Ir ao lugar onde o trabalho acontece para ver o problema com os próprios olhos", "Ler o relatório mensal", "Enviar um e-mail à equipe"], correta: 1,
          explicacao: "Fatos no local, não suposições." },
        { id: "m06-q142", nivel: "facil", tipo: "vf", pergunta: "Kaizen depende principalmente de grandes investimentos em tecnologia.",
          correta: false, explicacao: "Kaizen são melhorias incrementais, com pouco ou nenhum investimento, feitas por todos." },
        { id: "m06-q143", nivel: "facil", tipo: "lacuna", pergunta: "No PDCA, se a ação funcionou na etapa Checar, na etapa Agir ela deve ser ___.",
          opcoes: ["padronizada", "esquecida", "escondida", "repetida sem medir"], correta: 0,
          explicacao: "O novo padrão é a base da próxima melhoria." },
        { id: "m06-q144", nivel: "medio", tipo: "ligar", pergunta: "Ligue a etapa do A3 ao conteúdo:",
          pares: [["Situação atual", "Dados e fatos observados no gemba"], ["Meta", "O que, quanto e até quando"], ["Análise de causa", "5 porquês, Ishikawa"], ["Contramedidas", "Ações ligadas às causas"]],
          explicacao: "O A3 é o PDCA numa folha." },
        { id: "m06-q145", nivel: "medio", tipo: "caso", contexto: "Nos 5 porquês sobre um erro de etiqueta, a equipe parou em “o operador se distraiu”.",
          pergunta: "O que fazer?",
          opcoes: ["Advertir o operador", "Continuar perguntando por que o processo permitiu o erro (ex.: etiquetas parecidas, sem conferência automática) e buscar poka-yoke", "Encerrar a análise", "Contratar outro operador"], correta: 1,
          explicacao: "“Falha humana” raramente é causa-raiz: o processo deve impedir o erro." },
        { id: "m06-q146", nivel: "medio", tipo: "multipla", pergunta: "Qual a principal diferença entre kaizen diário e evento kaizen?",
          opcoes: ["Não há diferença", "O diário é contínuo com a equipe do setor; o evento reúne uma equipe dedicada por alguns dias a um problema definido", "O evento é só para diretores", "O diário exige consultoria"], correta: 1,
          explicacao: "Os dois são complementares." },
        { id: "m06-q147", nivel: "medio", tipo: "vf", pergunta: "Nos 5 porquês, é preciso perguntar exatamente cinco vezes.",
          correta: false, explicacao: "Cinco é indicativo; pare quando chegar a uma causa acionável e verificada." },
        { id: "m06-q148", nivel: "dificil", tipo: "caso", contexto: "Um evento kaizen reduziu o setup da banhadeira de 60 para 15 min. Seis meses depois, o setup voltou a 45 min.",
          pergunta: "Qual a causa mais provável e a correção?",
          opcoes: ["O SMED não funciona", "Faltaram padrão atualizado, verificação rotineira e dono; criar padrão visual, medir o setup em cada troca e revisar na gestão diária", "Os operadores são preguiçosos", "Precisa de outro evento a cada mês"], correta: 1,
          justificativas: ["Os 15 min foram atingidos: o método funciona.", "Sustentação exige sistema de gestão.", "Culpar pessoas não resolve o sistema.", "Repetir eventos sem sustentação desperdiça esforço."],
          explicacao: "Melhoria sem rotina de verificação regride." },
        { id: "m06-q149", nivel: "dificil", tipo: "ligar", pergunta: "Ligue a abordagem ao foco principal:",
          pares: [["Lean", "Fluxo e eliminação de desperdício"], ["Seis Sigma", "Redução de variação e defeitos com estatística"], ["Lean Seis Sigma", "Combinação dos dois"]],
          explicacao: "Seis Sigma é detalhado no Módulo 5." },
        { id: "m06-q150", nivel: "dificil", tipo: "vf", pergunta: "Na liderança Lean, o líder tende a fazer perguntas e desenvolver a capacidade da equipe de resolver problemas, em vez de dar todas as respostas.",
          correta: true, explicacao: "Toyota Kata descreve essa rotina de coaching." },
        { id: "m06-q151", nivel: "dificil", tipo: "discursiva", pergunta: "Monte um A3 resumido para o problema “3% das caixas de bombom são refeitas por tampa torta”.",
          respostaModelo: "**Contexto:** retrabalho custa horas da embalagem e já houve reclamação de cliente. **Situação atual:** 3% de retrabalho (dados de 4 semanas), concentrado nos lotes com berço do novo fornecedor. **Meta:** < 0,5% em 60 dias. **Causa (5 porquês):** berço 2 mm mais alto; especificação sem tolerância de altura. **Contramedidas:** incluir tolerância na especificação; inspeção do primeiro lote de novo fornecedor; gabarito de altura na recepção (poka-yoke). **Plano:** responsáveis e datas. **Acompanhamento:** % de retrabalho semanal; padronizar se atingir a meta.",
          criterios: ["Tem contexto e situação atual com dados", "Define meta mensurável com prazo", "Apresenta análise de causa coerente", "Liga contramedidas às causas e define acompanhamento"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 9 — CHEFÃO
       ================================================================== */
    {
      id: "m06-l9",
      titulo: "👾 Chefão: a Doces Serra enxuta",
      icone: "👾",
      objetivos: {
        facil: ["Relacionar cada ferramenta Lean ao problema que ela resolve", "Identificar desperdícios num caso", "Conectar Lean a métodos (Módulo 4) e PCP (Módulo 3)"],
        medio: ["Calcular dias de estoque, PCE, kanbans, ganho de SMED e OEE no mesmo caso", "Escolher a ferramenta adequada para cada problema", "Interpretar os resultados"],
        dificil: ["Propor um plano de transformação Lean com sequência lógica", "Avaliar riscos e trade-offs do plano", "Definir indicadores e rotina de sustentação"]
      },
      prerequisitos: [{ texto: "Todas as lições do Módulo 6", licao: "m06-l1" }],
      resumo: {
        facil: "Cada ferramenta resolve um problema: **5S** (bagunça, procura), **kanban** (excesso ou falta de estoque), **VSM** (visão do fluxo), **SMED** (setup longo), **heijunka** (picos de mix), **poka-yoke** (erro humano), **TPM/OEE** (máquina parando), **kaizen** (sustentar e continuar melhorando).",
        medio: "No caso: 2 dias de estoque entre banho e embalagem; lead time de 11,5 dias e PCE ≈ 0,03%; 11 kanbans de berços; SMED liberando 192 min/dia; OEE da banhadeira ≈ 69%, com a maior perda na performance.",
        dificil: "Sequência típica: estabilizar (5S, trabalho padronizado, TPM básico) → criar fluxo (VSM, fluxo contínuo, SMED) → puxar e nivelar (kanban, heijunka) → sustentar (gestão diária, kaizen). Riscos: reduzir estoque antes de estabilizar, meta de OEE manipulável, esquecer a ergonomia."
      },
      blocos: [
        { tipo: "serio", titulo: "O caso: um ano de transformação", texto: "A Doces Serra quer reduzir o lead time e o estoque da linha de bombons antes do próximo Natal.\n• Demanda: 600 caixas/dia; turno de 7,5 h (27.000 s); takt = 45 s.\n• VSM atual: estoques de 5 · 2 · 1,5 · 3 dias; processos de 20 · 40 · 35 s.\n• Entre banho e embalagem: 1.200 caixas.\n• Berços: consumo de 400/h, reposição em 0,5 h, margem de 10%, 20 por caixa.\n• Banhadeira: setup de 60 min (4 trocas/dia); OEE com 480 min planejados, 60 min de paradas, ciclo ideal 0,5 min, 700 lotes, 665 bons." },
        { nivel: "facil", tipo: "conceito", titulo: "✅ Checklist (Fácil)", texto: "• 5 princípios e casa do TPS\n• TIM WOODS\n• 5S e gestão visual\n• Empurrar × puxar · kanban\n• VSM e dias de estoque\n• Setup interno × externo · heijunka\n• Jidoka, poka-yoke, OEE\n• Kaizen, PDCA, gemba" },
        { nivel: "medio", tipo: "conceito", titulo: "✅ Checklist (Médio)", texto: "• Massa × enxuta · rio e pedras\n• AV, NNAV, desperdício · muda, mura, muri\n• Trabalho padronizado (3 elementos)\n• Número de kanbans · regras · supermercado\n• Lead time e PCE\n• Etapas do SMED · sequência nivelada\n• Tipos de poka-yoke · seis grandes perdas\n• A3 · 5 porquês" },
        { nivel: "dificil", tipo: "conceito", titulo: "✅ Checklist (Difícil)", texto: "• Sistema × ferramentas · resiliência\n• Desperdícios em serviços · atividade obrigatória\n• Sustentação do 5S\n• Kanban × CONWIP × MRP\n• Estado futuro do VSM\n• EPEI e pitch\n• Perdas × OEE · pilares do TPM · OEE como meta\n• Liderança Lean · Lean Seis Sigma" }
      ],
      questoes: [
        { id: "m06-q160", nivel: "facil", tipo: "ligar", pergunta: "Ligue o problema à ferramenta Lean mais direta:",
          pares: [["Operadores perdem tempo procurando ferramentas", "5S"], ["Troca de sabor leva 1 hora", "SMED"], ["Caixas saem com bombom faltando", "Poka-yoke"], ["Ninguém sabe onde o produto fica parado", "VSM"]],
          explicacao: "Cada ferramenta resolve um tipo de problema." },
        { id: "m06-q161", nivel: "facil", tipo: "multipla", pergunta: "O takt de 45 s usado no Lean da Doces Serra veio de qual módulo?",
          opcoes: ["Módulo 4 — Engenharia de Métodos", "Módulo 13 — Estatística", "Módulo 2 — Projetos", "Módulo 14 — Dados"], correta: 0,
          explicacao: "Takt = tempo disponível ÷ demanda = 27.000 ÷ 600." },
        { id: "m06-q162", nivel: "facil", tipo: "vf", pergunta: "Há 1.200 caixas entre o banho e a embalagem e o cliente consome 600 por dia: são 2 dias de estoque.",
          correta: true, explicacao: "1.200 ÷ 600 = 2 dias." },
        { id: "m06-q163", nivel: "medio", tipo: "calculo", pergunta: "Qual o número de kanbans de berços (400/h, reposição 0,5 h, margem 10%, 20 por caixa)?",
          resposta: 11, tolerancia: 0, unidade: "kanbans",
          resolucao: "400 × 0,5 × 1,1 ÷ 20 = 11",
          explicacao: "Estoque máximo ≈ 220 berços." },
        { id: "m06-q164", nivel: "medio", tipo: "calculo", pergunta: "Qual o OEE da banhadeira (%) no caso?",
          resposta: 69.27, tolerancia: 0.1, unidade: "%",
          resolucao: "665 × 0,5 ÷ 480 = 332,5 ÷ 480 ≈ 69,27%",
          explicacao: "D = 87,5% · P = 83,3% · Q = 95%: maior perda na performance." },
        { id: "m06-q165", nivel: "medio", tipo: "calculo", pergunta: "Lead time de 11,5 dias de 27.000 s e TAV de 95 s. Qual a PCE (%)? (3 casas)",
          resposta: 0.0306, tolerancia: 0.001, unidade: "%",
          resolucao: "11,5 × 27.000 = 310.500 s\n95 ÷ 310.500 × 100 ≈ 0,031%",
          explicacao: "Quase todo o tempo é espera em estoque." },
        { id: "m06-q166", nivel: "medio", tipo: "multipla", pergunta: "Com o setup caindo de 60 para 12 min (4 trocas/dia), qual o uso mais alinhado ao Lean dos 192 min liberados?",
          opcoes: ["Fazer lotes ainda maiores", "Trocar mais vezes (lotes menores, EPEI menor) e usar o restante como capacidade se necessário", "Desligar a máquina mais cedo sem critério", "Nenhum"], correta: 1,
          explicacao: "Setup menor → flexibilidade e menos estoque." },
        { id: "m06-q167", nivel: "dificil", tipo: "ordenar", pergunta: "Ordene uma sequência lógica de transformação Lean:",
          itens: ["Estabilizar: 5S, trabalho padronizado, TPM básico", "Enxergar: VSM atual e futuro", "Criar fluxo: fluxo contínuo e SMED", "Puxar e nivelar: kanban e heijunka", "Sustentar: gestão diária e kaizen"],
          explicacao: "Reduzir estoque antes de estabilizar gera falta." },
        { id: "m06-q168", nivel: "dificil", tipo: "caso", contexto: "O diretor quer começar a transformação cortando pela metade todos os estoques na primeira semana, “para criar senso de urgência”.",
          pergunta: "Qual a melhor resposta?",
          opcoes: ["Aprovar", "Propor redução gradual, começando por estabilizar os processos (TPM, SMED, padrão) e baixando os estoques à medida que as causas são resolvidas", "Aumentar os estoques", "Esperar um ano sem mudar nada"], correta: 1,
          justificativas: ["Baixa a água de uma vez: faltas e perda de confiança no Lean.", "Rio e pedras: baixar e resolver.", "Contraria o objetivo.", "Não é preciso esperar; é preciso sequenciar."],
          explicacao: "Urgência sim, mas com método." },
        { id: "m06-q169", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva o plano de transformação Lean de 12 meses para a linha de bombons: fases, ferramentas, metas e indicadores.",
          respostaModelo: "**Meses 1–3 (estabilizar):** 5S e trabalho padronizado na embalagem; TPM básico na banhadeira (manutenção autônoma, atacar pequenas paradas); meta OEE de 69% → 75%. **Meses 3–6 (enxergar e fluir):** VSM atual/futuro; SMED na banhadeira (60 → 15 min); banho + embalagem em fluxo contínuo com FIFO lane. **Meses 6–9 (puxar e nivelar):** supermercado de recheios com kanban; kanban de berços (11 cartões); heijunka na embalagem (pitch 15 min). **Meses 9–12 (sustentar):** gestão diária em camadas, A3 para problemas, kaizen contínuo. Indicadores: lead time (11,5 → ~4,5 dias), dias de estoque, OEE, setup, OTIF, retrabalho, acidentes/ergonomia. Riscos: reduzir estoque antes de estabilizar; meta de OEE manipulada; sobrecarga dos operadores.",
          criterios: ["Organiza fases em sequência lógica", "Associa ferramentas adequadas a cada fase", "Define metas com números", "Define indicadores e riscos"] }
      ]
    }
  ],

  glossario: [
    { termo: "Lean", definicao: "Sistema de gestão que busca entregar valor ao cliente com o mínimo de desperdício." },
    { termo: "Sistema Toyota de Produção (STP/TPS)", definicao: "Sistema desenvolvido na Toyota por Taiichi Ohno; origem do Lean." },
    { termo: "Cinco princípios", definicao: "Valor, fluxo de valor, fluxo, puxar e perfeição (Womack e Jones)." },
    { termo: "Just in time (JIT)", definicao: "Item certo, na quantidade certa, no momento certo; pilar do TPS." },
    { termo: "Jidoka", definicao: "Automação com toque humano: detectar a anormalidade, parar e corrigir; pilar do TPS." },
    { termo: "Muda", definicao: "Desperdício." },
    { termo: "Mura", definicao: "Irregularidade, variação." },
    { termo: "Muri", definicao: "Sobrecarga de pessoas ou equipamentos." },
    { termo: "TIM WOODS", definicao: "Mnemônico dos 8 desperdícios: transporte, inventário, movimentação, espera, superprodução, superprocessamento, defeitos, talento." },
    { termo: "Superprodução", definicao: "Produzir antes ou mais do que o necessário; considerado o pior desperdício." },
    { termo: "Atividade que agrega valor", definicao: "Transforma o produto, o cliente paga por ela e é feita certa da primeira vez." },
    { termo: "NNAV", definicao: "Atividade necessária que não agrega valor; deve ser reduzida." },
    { termo: "5S", definicao: "Seiri, Seiton, Seiso, Seiketsu, Shitsuke: utilização, ordenação, limpeza, padronização e disciplina." },
    { termo: "Gestão visual", definicao: "Tornar a situação e as anormalidades visíveis de relance." },
    { termo: "Andon", definicao: "Sinal luminoso ou sonoro que indica um problema na linha." },
    { termo: "Trabalho padronizado", definicao: "Melhor forma atual de fazer a operação: takt, sequência e estoque padrão em processo." },
    { termo: "Gemba", definicao: "O lugar onde o trabalho acontece." },
    { termo: "Produção empurrada", definicao: "Produzir conforme o plano, independentemente do consumo do processo seguinte." },
    { termo: "Produção puxada", definicao: "Produzir apenas para repor o que foi consumido." },
    { termo: "Kanban", definicao: "Cartão ou sinal que autoriza produzir ou movimentar." },
    { termo: "Supermercado", definicao: "Estoque controlado, reposto por kanban, entre processos que não podem fluir continuamente." },
    { termo: "FIFO lane", definicao: "Fila PEPS com limite máximo entre dois processos." },
    { termo: "Fluxo contínuo", definicao: "Produção peça a peça, sem estoque entre processos." },
    { termo: "CONWIP", definicao: "Sistema puxado que limita o WIP total de uma linha." },
    { termo: "VSM", definicao: "Mapeamento do fluxo de valor: desenho do fluxo de material e informação, com linha do tempo." },
    { termo: "Dias de estoque", definicao: "Estoque ÷ demanda diária." },
    { termo: "PCE", definicao: "Eficiência do ciclo do processo: tempo de agregação de valor ÷ lead time." },
    { termo: "Processo puxador", definicao: "Único processo que recebe a programação do cliente no estado futuro." },
    { termo: "Setup", definicao: "Tempo da última peça boa de um produto até a primeira peça boa do seguinte." },
    { termo: "Setup interno", definicao: "Parte do setup feita apenas com a máquina parada." },
    { termo: "Setup externo", definicao: "Parte do setup que pode ser feita com a máquina rodando." },
    { termo: "SMED", definicao: "Single-Minute Exchange of Die: método de Shingo para reduzir o setup." },
    { termo: "EPEI", definicao: "Every part every interval: intervalo para produzir todos os produtos uma vez." },
    { termo: "Heijunka", definicao: "Nivelamento do volume e do mix da produção." },
    { termo: "Pitch", definicao: "Takt × quantidade por embalagem: intervalo de liberação de trabalho." },
    { termo: "Poka-yoke", definicao: "Dispositivo ou método à prova de erro." },
    { termo: "TPM", definicao: "Manutenção produtiva total: operadores e manutenção juntos pela confiabilidade do equipamento." },
    { termo: "Manutenção autônoma", definicao: "Pilar do TPM em que o operador limpa, inspeciona e lubrifica o equipamento." },
    { termo: "OEE", definicao: "Eficiência global do equipamento: disponibilidade × performance × qualidade." },
    { termo: "Seis grandes perdas", definicao: "Quebras, setup/ajustes, pequenas paradas, velocidade reduzida, defeitos, perdas de partida." },
    { termo: "Kaizen", definicao: "Melhoria contínua e incremental feita por todos." },
    { termo: "Evento kaizen", definicao: "Equipe dedicada por alguns dias a um problema definido." },
    { termo: "PDCA", definicao: "Planejar, Fazer, Checar, Agir: ciclo de melhoria." },
    { termo: "A3", definicao: "Relatório de uma folha que estrutura a solução de um problema pela lógica do PDCA." },
    { termo: "5 porquês", definicao: "Perguntar “por quê?” sucessivamente até chegar a uma causa acionável." }
  ],

  flashcards: [
    { id: "m06-f01", frente: "5 princípios Lean", verso: "Valor, fluxo de valor, fluxo, puxar, perfeição (“Vale Fazer Fluir, Puxando a Perfeição”)." },
    { id: "m06-f02", frente: "Pilares da casa do TPS", verso: "Just in time e jidoka." },
    { id: "m06-f03", frente: "8 desperdícios", verso: "TIM WOODS: transporte, inventário, movimentação, espera, superprodução, superprocessamento, defeitos, talento." },
    { id: "m06-f04", frente: "Pior desperdício", verso: "Superprodução: gera estoque, transporte, espera e esconde defeitos." },
    { id: "m06-f05", frente: "Muda, mura, muri", verso: "Desperdício, irregularidade, sobrecarga. Mura → muri → muda." },
    { id: "m06-f06", frente: "AV × NNAV × desperdício", verso: "Manter/melhorar · reduzir · eliminar." },
    { id: "m06-f07", frente: "5S", verso: "Utilização, ordenação, limpeza, padronização, disciplina." },
    { id: "m06-f08", frente: "Trabalho padronizado", verso: "Takt + sequência de trabalho + estoque padrão em processo." },
    { id: "m06-f09", frente: "Empurrar × puxar", verso: "Empurrar: pelo plano. Puxar: repõe o consumido." },
    { id: "m06-f10", frente: "Número de kanbans", verso: "N = D × L × (1 + α) ÷ C, arredondando para cima." },
    { id: "m06-f11", frente: "Regras do kanban", verso: "Seguinte retira; anterior produz só o retirado; nada sem kanban; kanban junto; defeito não segue; reduzir kanbans." },
    { id: "m06-f12", frente: "Rio e pedras", verso: "Estoque esconde problemas; baixe aos poucos e resolva as causas." },
    { id: "m06-f13", frente: "VSM: dias de estoque", verso: "Estoque ÷ demanda diária." },
    { id: "m06-f14", frente: "PCE", verso: "Tempo de agregação de valor ÷ lead time (quase sempre < 1%)." },
    { id: "m06-f15", frente: "Etapas do SMED", verso: "Separar interno/externo, converter interno em externo, racionalizar (“Separa, Converte, Racionaliza”)." },
    { id: "m06-f16", frente: "EPEI", verso: "Nº de produtos ÷ setups possíveis por dia." },
    { id: "m06-f17", frente: "Pitch", verso: "Takt × quantidade por embalagem." },
    { id: "m06-f18", frente: "Poka-yoke controle × advertência", verso: "Controle impede o erro; advertência avisa." },
    { id: "m06-f19", frente: "OEE", verso: "D × P × Q = boas × ciclo ideal ÷ tempo planejado." },
    { id: "m06-f20", frente: "Seis grandes perdas", verso: "D: quebras, setup · P: pequenas paradas, velocidade · Q: defeitos, partida." },
    { id: "m06-f21", frente: "PDCA", verso: "Planejar, Fazer, Checar, Agir." },
    { id: "m06-f22", frente: "A3", verso: "Contexto, situação atual, meta, causa, contramedidas, plano, acompanhamento." }
  ]
});
