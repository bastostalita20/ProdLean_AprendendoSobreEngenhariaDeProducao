/* =====================================================================
   MÓDULO 2 — GESTÃO DE PROJETOS  (primeiro módulo no padrão com NÍVEIS)
   ---------------------------------------------------------------------
   Novidades de formato (todas opcionais; módulos antigos continuam válidos):
   • Lição:  objetivos   { facil:[...], medio:[...], dificil:[...] }
             prerequisitos [ { texto, licao: "id-da-lição" } ]
             resumo      { facil:"...", medio:"...", dificil:"..." }
   • Bloco e questão: nivel: "facil" | "medio" | "dificil"
     (sem "nivel" = aparece em todos os níveis da lição)
   • Blocos novos: "contexto", "exemplo", "passos", "limitacao", "referencia"
   • Fórmula com legenda: legenda: [["símbolo","significado"], ...]
   • Questão "discursiva": pergunta, respostaModelo, criterios:[...]
   • Múltipla escolha/caso com "justificativas": [uma por alternativa]
   • Módulo: glossario [ { termo, definicao } ]
   Exemplos numéricos são ILUSTRATIVOS (criados para ensino), não dados reais.
   ===================================================================== */
(window.MODULOS = window.MODULOS || []).push({
  id: "m02",
  numero: 2,
  ordem: 3,
  titulo: "Gestão de Projetos",
  icone: "📋",
  objetivo: "Estruturar, planejar, controlar e entregar projetos em fábricas e serviços, escolhendo entre abordagens preditivas, ágeis e híbridas.",
  conquista: { id: "mod-m02", nome: "Gerente de Projetos", icone: "📋", descricao: "Concluiu o Módulo 2 — Gestão de Projetos." },

  resumoAudio:
    "Projeto é temporário, único e progressivo: tem começo, fim e cria algo novo. Operação é o trabalho contínuo que sustenta o negócio. " +
    "Tudo começa com o Termo de Abertura, assinado pelo patrocinador: ele autoriza o projeto e dá autoridade ao gerente. " +
    "Partes interessadas são todos que afetam ou são afetados pelo projeto. Poder e interesse dizem como engajar cada um. " +
    "Escopo diz o que entra e o que não entra. A EAP quebra todo o trabalho em entregas, até o pacote de trabalho. Regra dos cem por cento: nada a mais, nada a menos. " +
    "No cronograma, ida pega o maior, volta pega o menor. O caminho crítico é o mais longo e tem folga zero. " +
    "PERT usa otimista, mais provável e pessimista: a mais quatro m mais b, dividido por seis. Prazo sem probabilidade é chute. " +
    "Para encurtar, crashing coloca recurso e custa dinheiro; fast tracking paraleliza e aumenta risco. " +
    "Risco é incerteza que afeta objetivos: ameaça ou oportunidade. Valor monetário esperado é probabilidade vezes impacto. " +
    "No valor agregado: planejei, entreguei, achei na conta. PV, EV e AC. CPI é EV sobre AC; SPI é EV sobre PV. Abaixo de um é ruim. " +
    "No ágil, entregas curtas e aprendizado. Scrum: três responsabilidades, cinco eventos, três artefatos. " +
    "No Kanban, pare de começar e comece a terminar: limite o trabalho em progresso. Lei de Little: lead time é WIP dividido pelo throughput.",

  licoes: [
    /* ==================================================================
       LIÇÃO 1 — PROJETO, PROCESSO E OPERAÇÃO
       ================================================================== */
    {
      id: "m02-l1",
      titulo: "Projeto, processo e operação",
      icone: "🧭",
      objetivos: {
        facil: ["Definir projeto, processo e operação e dar um exemplo de cada", "Reconhecer as três características de um projeto: temporário, único e de elaboração progressiva", "Citar as restrições clássicas de um projeto"],
        medio: ["Classificar iniciativas reais como projeto ou operação, justificando", "Descrever o ciclo de vida e os grupos de processos do PMBOK", "Escolher entre ciclo de vida preditivo, adaptativo ou híbrido a partir do grau de incerteza"],
        dificil: ["Analisar como a estrutura organizacional afeta a autoridade do gerente de projetos", "Avaliar trade-offs entre escopo, prazo, custo e qualidade em uma decisão", "Diferenciar sucesso do gerenciamento do projeto e sucesso em benefícios"]
      },
      prerequisitos: [
        { texto: "Modelo entrada → transformação → saída (Módulo 1)", licao: "m01-l4" },
        { texto: "Níveis de decisão estratégico, tático e operacional (Módulo 1)", licao: "m01-l6" }
      ],
      resumo: {
        facil: "Projeto é um esforço **temporário** (tem início e fim), **único** e de **elaboração progressiva**. Operação é o trabalho **contínuo e repetitivo**. Processo é o conjunto de atividades que transforma entradas em saídas e existe nos dois. Escopo, prazo e custo (mais qualidade, recursos e riscos) são restrições que se influenciam.",
        medio: "O projeto passa por um **ciclo de vida** com fases e portões de decisão. O PMBOK 6ª ed. organiza o trabalho em **5 grupos de processos** (Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento) e **10 áreas de conhecimento**. Incerteza baixa → **preditivo**; requisitos incertos → **adaptativo (ágil)**; mistura → **híbrido**.",
        dificil: "A **estrutura organizacional** (funcional → matricial → projetizada) define quanta autoridade o GP tem sobre recursos. O triângulo de ferro é necessário, mas insuficiente: sucesso também é **benefício entregue**. O PMBOK 7ª ed. troca a lógica de processos por **12 princípios e 8 domínios de desempenho**, orientados a valor."
      },
      blocos: [
        /* ---------- FÁCIL ---------- */
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Lançar um produto, instalar uma máquina, implantar um sistema de PCP, fazer um evento Kaizen: **tudo isso é projeto**.\nO engenheiro de produção passa boa parte da carreira conduzindo projetos de melhoria. Saber separar projeto de rotina evita tratar tudo como “urgente e sem fim”." },
        { nivel: "facil", tipo: "recall", pergunta: "Organizar a sua festa de formatura e preparar o almoço de todo dia num restaurante: qual é projeto?", resposta: "A **festa de formatura**: tem data, começo e fim e é única. O almoço diário é **operação**: contínuo e repetitivo." },
        { nivel: "facil", tipo: "conceito", titulo: "O que é projeto", texto: "Segundo o Guia PMBOK (PMI): **esforço temporário empreendido para criar um produto, serviço ou resultado único**.\n• **Temporário:** tem início e fim definidos.\n• **Único:** o resultado não é igual a nada feito antes.\n• **Elaboração progressiva:** o detalhamento aumenta à medida que se aprende." },
        { nivel: "facil", tipo: "conceito", titulo: "Operação e processo", texto: "**Operação:** trabalho contínuo e repetitivo que sustenta o negócio (envasar 10 mil garrafas por dia).\n**Processo:** conjunto de atividades inter-relacionadas que transforma entradas em saídas. Existe tanto na operação (processo de envase) quanto no projeto (processo de compras do projeto)." },
        { nivel: "facil", tipo: "bobo", titulo: "O churrasco", texto: "Organizar o churrasco da turma no sábado = **projeto** (data, orçamento, resultado único).\nO restaurante que serve churrasco todo dia = **operação**.\nA receita padronizada de acender a churrasqueira = **processo** (usado nos dois casos)." },
        { nivel: "facil", tipo: "conceito", titulo: "As restrições", texto: "Todo projeto equilibra **escopo** (o que entregar), **prazo** e **custo**: o chamado triângulo de ferro. Hoje também se consideram **qualidade, recursos e riscos**.\nMexer em uma afeta as outras: quer mais escopo no mesmo prazo? Vai custar mais ou arriscar a qualidade." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Projeto é TUP”**: Temporário, Único e Progressivo." },
        { nivel: "facil", tipo: "atencao", titulo: "Temporário ≠ curto", texto: "Uma usina hidrelétrica leva anos e **é projeto**. O que define projeto é ter fim, não durar pouco.\nTambém não confunda o fim do projeto com o fim do produto: a linha instalada vai operar por 20 anos (operação)." },

        /* ---------- MÉDIO ---------- */
        { nivel: "medio", tipo: "contexto", titulo: "Onde isso aparece na empresa", texto: "Na indústria, um mesmo tema vira projeto ou operação conforme o objetivo: **implantar 5S na expedição** (projeto, com meta e prazo) × **auditoria semanal de 5S** (operação de rotina)." },
        { nivel: "medio", tipo: "conceito", titulo: "Ciclo de vida do projeto", texto: "Sequência de **fases** do início ao fim, por exemplo: concepção → planejamento → execução → encerramento.\nEntre fases há **portões (stage-gates)**: pontos de decisão em que se aprova continuar, ajustar ou cancelar. Custo de mudança **cresce** ao longo do ciclo; a influência das partes interessadas **diminui**." },
        { nivel: "medio", tipo: "conceito", titulo: "PMBOK 6ª ed.: grupos e áreas", texto: "**5 grupos de processos:** Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento. Eles **se sobrepõem** (não são fases): o monitoramento acontece o tempo todo.\n**10 áreas de conhecimento:** integração, escopo, cronograma, custos, qualidade, recursos, comunicações, riscos, aquisições e partes interessadas." },
        { nivel: "medio", tipo: "mnemonico", titulo: "Grupos de processos", texto: "**“Iniciei, Planejei, Executei, Monitorei e Encerrei.”**" },
        { nivel: "medio", tipo: "conceito", titulo: "Preditivo, adaptativo ou híbrido?", texto: "**Preditivo (cascata):** escopo claro e estável, mudanças caras (obra civil, instalação de máquina).\n**Adaptativo (ágil):** requisitos incertos, entregas em ciclos curtos com feedback (aplicativo, painel de indicadores).\n**Híbrido:** partes físicas no preditivo + partes de software no ágil. É muito comum na indústria." },
        { nivel: "medio", tipo: "serio", titulo: "Classificando iniciativas", texto: "• Implantar um MES na fábrica → **projeto** (híbrido)\n• Emitir notas fiscais todo dia → **operação**\n• Evento Kaizen de 5 dias para reduzir setup → **projeto** curto\n• Melhoria contínua diária do time → **operação** (rotina de gestão)" },
        { nivel: "medio", tipo: "atencao", titulo: "Erro comum", texto: "Chamar qualquer tarefa de “projeto” dilui a gestão. Se não há objetivo, prazo e entrega definidos, provavelmente é rotina ou uma demanda solta." },

        /* ---------- DIFÍCIL ---------- */
        { nivel: "dificil", tipo: "conceito", titulo: "Estrutura organizacional × autoridade do GP", texto: "**Funcional:** pessoas ficam nos departamentos; GP com pouca autoridade (às vezes é um “coordenador”).\n**Matricial fraca / balanceada / forte:** autoridade do GP cresce da fraca para a forte; o funcionário responde a dois chefes.\n**Projetizada:** equipe dedicada; GP com alta autoridade.\nTrade-off: projetizada dá foco e velocidade, mas **duplica recursos** e cria o problema de realocar a equipe no fim; funcional aproveita especialistas, mas projetos disputam prioridade com a rotina." },
        { nivel: "dificil", tipo: "conceito", titulo: "PMBOK 6ª × 7ª edição", texto: "**6ª ed. (2017):** 5 grupos, 10 áreas, 49 processos com entradas, ferramentas e saídas. Útil como checklist.\n**7ª ed. (2021):** **12 princípios** e **8 domínios de desempenho** (partes interessadas, equipe, abordagem de desenvolvimento e ciclo de vida, planejamento, trabalho do projeto, entrega, medição, incerteza). Foco em **valor e resultados**, não em seguir processos.\nImplicação: nenhuma edição é receita. O PMI publica novas edições; confira a vigente antes de citar em TCC." },
        { nivel: "dificil", tipo: "limitacao", titulo: "O triângulo não basta", texto: "Um projeto pode terminar **no prazo e no custo** e ainda assim fracassar: a nova linha opera abaixo da capacidade e ninguém a usa.\nDistinga **sucesso do gerenciamento** (entregas dentro das restrições) de **sucesso em benefícios** (o resultado de negócio que justificou o projeto). Os critérios de benefício devem estar no TAP e ser medidos depois do encerramento." },
        { nivel: "dificil", tipo: "serio", titulo: "Caso: GP sem autoridade", texto: "Você lidera o projeto de novo layout numa empresa **matricial fraca**. A manutenção, que responde ao gerente industrial, sempre prioriza a rotina e os marcos atrasam.\nOpções: executar sozinho (inviável), aceitar o atraso (fere o objetivo) ou **formalizar**: patrocinador forte, acordo de alocação com o gerente funcional (horas por semana), RACI claro e regra de escalonamento. A terceira ataca a causa (conflito de prioridades), não o sintoma." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• PMI. *Guia PMBOK*, 6ª ed. (2017) e 7ª ed. (2021).\n• KERZNER, H. *Gestão de Projetos: as melhores práticas*.\n• VARGAS, R. V. *Manual Prático do Plano de Projeto*." }
      ],
      questoes: [
        /* FÁCIL */
        { id: "m02-q001", nivel: "facil", tipo: "multipla", pergunta: "Qual destas iniciativas é um PROJETO?",
          opcoes: ["Produzir 5 mil garrafas por dia", "Implantar um novo software de PCP na fábrica", "Emitir as notas fiscais diárias", "Limpar a linha ao fim de cada turno"], correta: 1,
          justificativas: ["Contínuo e repetitivo: operação.", "Temporário, com entrega única (sistema implantado): projeto.", "Rotina diária: operação.", "Rotina de fim de turno: operação."],
          explicacao: "Projeto = temporário + único + elaboração progressiva." },
        { id: "m02-q002", nivel: "facil", tipo: "vf", pergunta: "“Temporário” significa que o projeto dura pouco tempo.",
          correta: false, explicacao: "Temporário = tem início e fim definidos. Uma usina leva anos e continua sendo projeto." },
        { id: "m02-q003", nivel: "facil", tipo: "ligar", pergunta: "Ligue cada item ao conceito:",
          pares: [["Organizar a festa de formatura", "Projeto"], ["Servir o almoço do restaurante todo dia", "Operação"], ["Receita padronizada de preparo", "Processo"]],
          explicacao: "Processo é o “como fazer”, presente tanto em projetos quanto em operações." },
        { id: "m02-q004", nivel: "facil", tipo: "lacuna", pergunta: "As três restrições clássicas do projeto são escopo, prazo e ___.",
          opcoes: ["custo", "marketing", "estoque", "layout"], correta: 0,
          explicacao: "O triângulo de ferro: escopo, prazo e custo. Hoje se somam qualidade, recursos e riscos." },
        /* MÉDIO */
        { id: "m02-q005", nivel: "medio", tipo: "ordenar", pergunta: "Ordene os grupos de processos do PMBOK 6ª ed. pela primeira vez em que aparecem no projeto:",
          itens: ["Iniciação", "Planejamento", "Execução", "Monitoramento e Controle", "Encerramento"],
          explicacao: "Atenção: eles se sobrepõem. O Monitoramento e Controle acontece durante todo o projeto, não só depois da execução." },
        { id: "m02-q006", nivel: "medio", tipo: "caso", contexto: "Uma empresa vai desenvolver um aplicativo para os vendedores. O cliente interno muda de ideia sobre as telas quase toda semana.",
          pergunta: "Qual abordagem de ciclo de vida é mais adequada?",
          opcoes: ["Preditiva (cascata), congelando todos os requisitos no início", "Adaptativa (ágil), com entregas curtas e feedback frequente", "Nenhuma: não dá para planejar", "Tratar como operação de rotina"], correta: 1,
          justificativas: ["Congelar requisitos instáveis gera retrabalho caro e produto errado.", "Requisitos incertos pedem ciclos curtos para aprender com o usuário.", "Há incerteza, mas é possível planejar em ondas curtas.", "Tem início, fim e entrega única: é projeto."],
          explicacao: "Quanto maior a incerteza dos requisitos, mais o ciclo adaptativo compensa." },
        { id: "m02-q007", nivel: "medio", tipo: "multipla", pergunta: "Qual destas NÃO é uma das 10 áreas de conhecimento do PMBOK 6ª ed.?",
          opcoes: ["Riscos", "Aquisições", "Marketing", "Partes interessadas"], correta: 2,
          explicacao: "As 10 áreas: integração, escopo, cronograma, custos, qualidade, recursos, comunicações, riscos, aquisições e partes interessadas." },
        { id: "m02-q008", nivel: "medio", tipo: "vf", pergunta: "O grupo de processos de Monitoramento e Controle acontece somente no final do projeto.",
          correta: false, explicacao: "Ele acompanha o projeto inteiro, comparando o realizado com o planejado e disparando correções." },
        { id: "m02-q009", nivel: "medio", tipo: "caso", contexto: "Uma fábrica vai instalar uma nova linha (obra, compra e montagem de equipamentos) e, junto, um software MES para coletar dados da linha.",
          pergunta: "Qual abordagem faz mais sentido?",
          opcoes: ["Tudo preditivo", "Tudo ágil, em sprints de 2 semanas", "Híbrida: obra e instalação no preditivo; software em ciclos ágeis", "Sem planejamento formal"], correta: 2,
          explicacao: "Partes físicas têm escopo estável e mudanças caras (preditivo); software tem requisitos que emergem com o uso (ágil)." },
        /* DIFÍCIL */
        { id: "m02-q010", nivel: "dificil", tipo: "caso", contexto: "Você é GP numa organização matricial fraca. A manutenção prioriza a rotina e seus marcos atrasam. Você não tem autoridade formal sobre os técnicos.",
          pergunta: "Qual ação ataca a causa do problema?",
          opcoes: ["Fazer você mesmo o trabalho da manutenção", "Formalizar patrocínio, acordo de alocação com o gerente funcional e regra de escalonamento", "Exigir que a empresa vire projetizada imediatamente", "Aceitar o atraso e replanejar todo mês"], correta: 1,
          justificativas: ["Inviável e não resolve a disputa de prioridade.", "Transforma um conflito informal de prioridade em compromisso explícito, com quem tem autoridade para decidir.", "Mudança estrutural é decisão estratégica, lenta e fora do seu alcance.", "Trata o sintoma; o objetivo do projeto continua em risco."],
          explicacao: "Em estruturas matriciais fracas, a autoridade vem do patrocinador e de acordos formais." },
        { id: "m02-q011", nivel: "dificil", tipo: "multipla", pergunta: "No PMBOK 7ª edição (2021), a estrutura central do guia é formada por:",
          opcoes: ["5 grupos de processos e 49 processos", "12 princípios e 8 domínios de desempenho", "3 responsabilidades, 5 eventos e 3 artefatos", "7 ferramentas da qualidade"], correta: 1,
          explicacao: "A 7ª edição é orientada a princípios e resultados. Os 49 processos são da 6ª; 3-5-3 é do Scrum." },
        { id: "m02-q012", nivel: "dificil", tipo: "discursiva", pergunta: "Um projeto de nova linha terminou no prazo e dentro do orçamento, mas a linha opera 30% abaixo da capacidade prevista e a produção evita usá-la. O projeto foi um sucesso? Justifique e diga o que deveria ter sido feito de diferente.",
          respostaModelo: "Houve **sucesso do gerenciamento** (prazo e custo), mas **não sucesso em benefícios**: o motivo do projeto (capacidade e uso) não foi alcançado. Os critérios de sucesso deveriam estar no TAP (ex.: “linha a 40 caixas/min por 8 h com refugo ≤ 1% e aceite da produção”), com critérios de aceitação nas entregas, envolvimento dos usuários (produção) desde o planejamento e medição dos benefícios após o encerramento. As lições aprendidas devem registrar a causa da baixa capacidade (especificação, treinamento, ramp-up).",
          criterios: ["Distingue sucesso do gerenciamento de sucesso em benefícios", "Aponta que o triângulo de ferro é insuficiente", "Propõe critérios de sucesso/aceitação mensuráveis definidos no início", "Menciona envolver os usuários (partes interessadas) e medir benefícios após a entrega"] },
        { id: "m02-q013", nivel: "dificil", tipo: "vf", pergunta: "Numa estrutura projetizada, o gerente de projetos costuma ter mais autoridade sobre os recursos do que numa estrutura funcional.",
          correta: true, explicacao: "Na projetizada a equipe é dedicada e responde ao GP; na funcional, os recursos respondem ao gerente do departamento." }
      ]
    },

    /* ==================================================================
       LIÇÃO 2 — PARTES INTERESSADAS E TERMO DE ABERTURA
       ================================================================== */
    {
      id: "m02-l2",
      titulo: "Partes interessadas e TAP",
      icone: "📜",
      objetivos: {
        facil: ["Definir parte interessada e listar as principais de um projeto industrial", "Explicar para que serve o Termo de Abertura (TAP) e quem o assina", "Listar os itens essenciais de um TAP"],
        medio: ["Classificar partes interessadas na matriz poder × interesse e definir a estratégia de cada quadrante", "Redigir objetivos SMART", "Montar uma matriz RACI com um único aprovador por atividade"],
        dificil: ["Distinguir premissa de restrição e tratar premissas como fonte de risco", "Avaliar um TAP e corrigir lacunas", "Propor uma estratégia para conflitos entre partes interessadas com base em interesses e dados"]
      },
      prerequisitos: [{ texto: "Projeto, processo e operação", licao: "m02-l1" }],
      resumo: {
        facil: "**Parte interessada** é quem afeta, é afetado ou se sente afetado pelo projeto. O **TAP** autoriza formalmente o projeto e dá autoridade ao gerente; é assinado pelo **patrocinador**. Ele traz justificativa, objetivos, escopo de alto nível, marcos, orçamento resumido, riscos, premissas, restrições e critérios de sucesso.",
        medio: "Na **matriz poder × interesse**: gerenciar de perto (alto/alto), manter satisfeito (alto poder), manter informado (alto interesse), monitorar (baixo/baixo). Objetivos **SMART**: específicos, mensuráveis, atingíveis, relevantes e com prazo. **RACI**: um único **A** (aprovador) por atividade; C é consultado antes, I é informado depois.",
        dificil: "**Premissa** é o que se assume como verdadeiro sem prova; **restrição** é um limite imposto. Toda premissa é um risco potencial e deve ser validada. Conflitos se resolvem por **interesses** (não posições), dados e alternativas, com decisão do patrocinador segundo os critérios do TAP."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Projetos raramente falham só por causa técnica. É comum falharem porque alguém importante **não foi ouvido**: os operadores rejeitam a máquina nova, a segurança do trabalho barra a partida, o financeiro não libera a verba." },
        { nivel: "facil", tipo: "conceito", titulo: "Parte interessada (stakeholder)", texto: "Pessoa, grupo ou organização que **afeta, é afetada ou se percebe afetada** pelo projeto.\nNuma nova linha: patrocinador (diretor), cliente interno (produção), operadores, manutenção, qualidade, segurança do trabalho, compras, fornecedores, sindicato e até a vizinhança (ruído)." },
        { nivel: "facil", tipo: "conceito", titulo: "Termo de Abertura do Projeto (TAP)", texto: "Documento que **autoriza formalmente** o projeto e dá ao gerente de projeto **autoridade para usar recursos**. É emitido e assinado pelo **patrocinador**, quem financia e responde pelo projeto na organização.\nSem TAP, o projeto vira “favor” e perde prioridade na primeira crise." },
        { nivel: "facil", tipo: "passos", titulo: "O que um TAP precisa ter", texto: "1. **Justificativa:** por que fazer (problema ou oportunidade).\n2. **Objetivos mensuráveis** e critérios de sucesso.\n3. **Escopo de alto nível:** o que entra e o que **não** entra.\n4. **Marcos** e prazo final.\n5. **Orçamento resumido.**\n6. **Principais partes interessadas.**\n7. **Riscos de alto nível, premissas e restrições.**\n8. **Gerente designado** e assinatura do patrocinador." },
        { nivel: "facil", tipo: "bobo", titulo: "O TAP do churrasco", texto: "Objetivo: churrasco para 40 pessoas, sábado 12h, até R$ 1.200.\nFora do escopo: bebida alcoólica (cada um leva a sua).\nPatrocinador: quem paga. Parte interessada esquecida: o vizinho (barulho!)." },
        { nivel: "facil", tipo: "atencao", titulo: "TAP não é plano detalhado", texto: "O TAP é curto (1 a 3 páginas) e serve para **dar início e alinhar**. O cronograma detalhado e o orçamento completo vêm depois, no planejamento." },

        { nivel: "medio", tipo: "conceito", titulo: "Matriz poder × interesse", texto: "Classifica as partes interessadas em quatro quadrantes:\n• **Alto poder, alto interesse:** gerenciar de perto (envolver nas decisões).\n• **Alto poder, baixo interesse:** manter satisfeito (informações objetivas, sem sobrecarregar).\n• **Baixo poder, alto interesse:** manter informado (comunicação frequente).\n• **Baixo poder, baixo interesse:** monitorar." },
        { nivel: "medio", tipo: "conceito", titulo: "Objetivos SMART (Doran, 1981)", texto: "**S**pecífico · **M**ensurável · **A**tingível · **R**elevante · **T**emporal.\n❌ “Melhorar o setup da prensa.”\n✅ “Reduzir o setup da prensa 3 de 45 para 20 min até 30/11, mantendo o refugo ≤ 1%.”" },
        { nivel: "medio", tipo: "conceito", titulo: "Matriz RACI", texto: "Para cada atividade, quem é:\n**R** Responsável (executa) · **A** Aprovador (presta contas, **só um**) · **C** Consultado (opina **antes**) · **I** Informado (sabe **depois**).\nEx.: “Aprovar layout” → A: gerente industrial; R: engenheiro de processos; C: segurança e manutenção; I: operadores." },
        { nivel: "medio", tipo: "atencao", titulo: "Erros comuns no RACI", texto: "Dois **A** na mesma atividade = ninguém decide. Nenhum **R** = ninguém faz. Todo mundo **C** = reuniões infinitas." },
        { nivel: "medio", tipo: "serio", titulo: "TAP resumido (exemplo ilustrativo)", texto: "**Projeto:** Nova linha de embalagem automática.\n**Justificativa:** a rede de supermercados exige +30% de volume a partir de março.\n**Objetivo:** linha operando a 40 caixas/min, refugo ≤ 1%, até 15/02.\n**Fora do escopo:** reforma do vestiário; novo sistema ERP.\n**Orçamento:** até R$ 480 mil. **Marcos:** compra (15/10), instalação (recesso de dezembro), aceite (15/02).\n**Premissa:** o fornecedor entrega em 10 dias úteis. **Restrição:** parada só no recesso." },

        { nivel: "dificil", tipo: "conceito", titulo: "Premissa × restrição", texto: "**Premissa:** algo tratado como verdadeiro sem comprovação (“o fornecedor entrega em 10 dias”).\n**Restrição:** limite imposto ao projeto (“parada só no recesso de 20/12 a 05/01”; “orçamento máximo R$ 480 mil”).\nToda premissa é uma **fonte potencial de risco**: registre, defina um dono e valide cedo (contrato, visita, histórico do fornecedor)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Engajamento: do atual ao desejado", texto: "O PMBOK sugere mapear o engajamento de cada parte: **desinformado, resistente, neutro, apoiador, líder**. O plano define como mover do **atual** para o **desejado**.\nEx.: operadores resistentes à automação → envolver no desenho do posto, piloto com voluntários, explicar o porquê e o que muda para eles." },
        { nivel: "dificil", tipo: "serio", titulo: "Conflito de prioridades", texto: "**Produção** quer instalar em julho (demanda baixa). **Comercial** quer a linha pronta antes do Natal. **Manutenção** só tem equipe em agosto.\nCaminho de engenharia: separar **posições** de **interesses** (Produção: não perder volume; Comercial: contrato; Manutenção: carga de trabalho), trazer **dados** (custo de parada por dia, multa contratual, horas disponíveis), gerar **alternativas** (instalação em duas etapas, montagem terceirizada) e levar ao **patrocinador**, que decide pelos critérios do TAP." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites da matriz poder × interesse", texto: "É estática e simplifica: poder e interesse **mudam** ao longo do projeto (o sindicato ganha poder na hora da negociação). Partes “invisíveis”, como operadores do 3º turno ou a comunidade, costumam ser esquecidas. Revise o registro de partes interessadas em cada fase." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• PMI. *Guia PMBOK* (partes interessadas; termo de abertura).\n• DORAN, G. T. There's a S.M.A.R.T. way to write management's goals and objectives. *Management Review*, 1981.\n• Matriz poder × interesse, atribuída a A. Mendelow." }
      ],
      questoes: [
        { id: "m02-q014", nivel: "facil", tipo: "multipla", pergunta: "Quem normalmente emite e assina o Termo de Abertura do Projeto?",
          opcoes: ["O estagiário da equipe", "O patrocinador", "O fornecedor do equipamento", "O consumidor final"], correta: 1,
          justificativas: ["Não tem autoridade para autorizar o projeto.", "Quem financia e responde pelo projeto autoriza e dá autoridade ao GP.", "É parte interessada externa, não autoriza o projeto.", "Pode ser beneficiado, mas não autoriza internamente."],
          explicacao: "O patrocinador autoriza o projeto e dá autoridade ao gerente." },
        { id: "m02-q015", nivel: "facil", tipo: "vf", pergunta: "Os operadores que vão usar a máquina nova são partes interessadas do projeto.",
          correta: true, explicacao: "São afetados diretamente e, se ignorados, podem rejeitar a solução." },
        { id: "m02-q016", nivel: "facil", tipo: "multipla", pergunta: "Qual item NÃO costuma fazer parte do TAP?",
          opcoes: ["Justificativa do projeto", "Objetivos mensuráveis", "Cronograma detalhado de todas as tarefas de cada dia", "Riscos de alto nível"], correta: 2,
          explicacao: "O TAP é de alto nível. O cronograma detalhado nasce no planejamento." },
        { id: "m02-q017", nivel: "facil", tipo: "lacuna", pergunta: "O TAP autoriza ___ o projeto e dá autoridade ao gerente para usar recursos.",
          opcoes: ["formalmente", "informalmente", "verbalmente", "provisoriamente"], correta: 0,
          explicacao: "É o documento formal de início do projeto." },
        { id: "m02-q018", nivel: "medio", tipo: "ligar", pergunta: "Ligue cada parte interessada à estratégia da matriz poder × interesse:",
          pares: [["Diretor financeiro (alto poder, baixo interesse)", "Manter satisfeito"], ["Gerente de produção afetado (alto poder, alto interesse)", "Gerenciar de perto"], ["Operadores da linha (baixo poder, alto interesse)", "Manter informados"], ["Empresa de coleta de lixo (baixo, baixo)", "Monitorar"]],
          explicacao: "A estratégia depende da combinação de poder e interesse." },
        { id: "m02-q019", nivel: "medio", tipo: "multipla", pergunta: "Qual objetivo está escrito de forma SMART?",
          opcoes: ["Melhorar o setup da prensa", "Reduzir bastante o setup o quanto antes", "Reduzir o setup da prensa 3 de 45 para 20 min até 30/11, mantendo o refugo ≤ 1%", "Ter o melhor setup do Brasil"], correta: 2,
          justificativas: ["Não é mensurável nem tem prazo.", "“Bastante” e “o quanto antes” não são mensuráveis.", "Específico, mensurável, com prazo e restrição de qualidade.", "Vago e provavelmente inatingível."],
          explicacao: "SMART: específico, mensurável, atingível, relevante e temporal." },
        { id: "m02-q020", nivel: "medio", tipo: "caso", contexto: "Na matriz RACI do projeto, a atividade “Aprovar o layout” tem dois “A”: o gerente de produção e o gerente de engenharia.",
          pergunta: "Qual é o problema?",
          opcoes: ["Nenhum: dois aprovadores dão mais segurança", "Com dois aprovadores, a decisão tende a travar e ninguém presta contas sozinho", "Falta um “I”", "Há “R” demais"], correta: 1,
          explicacao: "Regra do RACI: um único A por atividade. Os demais podem ser C (consultados)." },
        { id: "m02-q021", nivel: "medio", tipo: "vf", pergunta: "No RACI, o “C” (consultado) é avisado depois que a decisão foi tomada.",
          correta: false, explicacao: "O C é ouvido ANTES (comunicação de mão dupla). Quem é avisado depois é o I (informado)." },
        { id: "m02-q022", nivel: "dificil", tipo: "multipla", pergunta: "“A parada da fábrica para a instalação só pode ocorrer no recesso de 20/12 a 05/01.” Isso é:",
          opcoes: ["Uma premissa", "Uma restrição", "Um risco", "Um objetivo"], correta: 1,
          justificativas: ["Premissa é algo assumido como verdadeiro sem prova; aqui é um limite imposto.", "É um limite imposto ao projeto (janela de tempo).", "Pode gerar riscos, mas em si é um limite conhecido.", "Não descreve o resultado desejado."],
          explicacao: "Restrição limita as opções; premissa é uma suposição que precisa ser validada." },
        { id: "m02-q023", nivel: "dificil", tipo: "caso", contexto: "Produção quer instalar em julho; Comercial quer antes do Natal; Manutenção só tem equipe em agosto. As reuniões viraram disputa.",
          pergunta: "Qual abordagem é mais adequada?",
          opcoes: ["Seguir quem tem o cargo mais alto na reunião", "Levantar interesses e dados (custo de parada, multa, horas), gerar alternativas e levar ao patrocinador para decidir pelos critérios do TAP", "Adiar até haver consenso espontâneo", "Seguir sempre o Comercial, porque traz receita"], correta: 1,
          explicacao: "Negociação baseada em interesses e dados, com decisão de quem tem autoridade (patrocinador)." },
        { id: "m02-q024", nivel: "dificil", tipo: "discursiva", pergunta: "Um TAP traz: objetivo “melhorar a eficiência da embalagem”; orçamento “a definir”; nenhum critério de sucesso; premissa “o fornecedor entregará no prazo”. Aponte três problemas e proponha correções.",
          respostaModelo: "1) **Objetivo vago:** reescrever como SMART (ex.: “elevar o OEE da embalagem de 62% para 75% até 30/06”). 2) **Orçamento indefinido:** registrar uma estimativa de ordem de grandeza (o PMBOK cita faixa de −25% a +75%) e um teto aprovado. 3) **Sem critérios de sucesso:** definir como o resultado será aceito e medido (OEE, refugo, aceite da produção). 4) **Premissa não tratada:** registrar como risco, validar com o fornecedor (histórico, visita) e proteger em contrato (multa, entregas parciais).",
          criterios: ["Reescreve o objetivo com indicador, meta e prazo", "Trata o orçamento com estimativa inicial e limite", "Define critérios de sucesso mensuráveis", "Transforma a premissa em risco com ação de validação"] },
        { id: "m02-q025", nivel: "dificil", tipo: "vf", pergunta: "Toda premissa registrada no projeto deve ser tratada como uma potencial fonte de risco.",
          correta: true, explicacao: "Se a premissa se mostrar falsa, o plano quebra. Por isso ela precisa de dono e validação." }
      ]
    },

    /* ==================================================================
       LIÇÃO 3 — ESCOPO E EAP
       ================================================================== */
    {
      id: "m02-l3",
      titulo: "Escopo e EAP",
      icone: "🧱",
      objetivos: {
        facil: ["Diferenciar escopo do produto e escopo do projeto", "Registrar o que está dentro e fora do escopo", "Montar uma EAP simples em dois níveis"],
        medio: ["Aplicar a regra dos 100% e decompor até pacotes de trabalho", "Redigir critérios de aceitação verificáveis", "Identificar scope creep e gold plating e conduzir uma mudança pelo controle integrado"],
        dificil: ["Avaliar a qualidade de uma EAP (orientação a entregas, sobreposição, lacunas)", "Justificar o nível de decomposição em função do risco", "Analisar o impacto de uma mudança de escopo em prazo, custo e risco"]
      },
      prerequisitos: [{ texto: "Termo de abertura e partes interessadas", licao: "m02-l2" }],
      resumo: {
        facil: "**Escopo do produto** descreve o que será entregue (a linha faz 40 caixas/min); **escopo do projeto** é o trabalho para entregar (comprar, instalar, treinar). Escrever o que **não** está no escopo evita conflito. A **EAP** decompõe todo o trabalho em entregas até o **pacote de trabalho**. EAP não é cronograma.",
        medio: "**Regra dos 100%**: a EAP contém todo o trabalho, inclusive o gerenciamento, e nada além. Pacotes de trabalho devem ser estimáveis e controláveis (a regra prática 8/80 ajuda). A **linha de base do escopo** = declaração de escopo + EAP + dicionário. Mudanças passam por solicitação → análise de impacto → aprovação → atualização da linha de base.",
        dificil: "Boa EAP é **orientada a entregas**, **sem sobreposição** e **completa**. O detalhe deve ser proporcional ao **risco e à incerteza** (planejamento em ondas sucessivas). Mudanças de escopo exigem quantificar o efeito no caminho crítico, no custo e nos riscos, gerar alternativas e decidir pelo valor para o negócio."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Escopo mal definido é uma causa clássica de atraso, estouro de orçamento e briga com o cliente: “achei que o treinamento estava incluído!”." },
        { nivel: "facil", tipo: "conceito", titulo: "Escopo do produto × do projeto", texto: "**Escopo do produto:** características do que será entregue. Ex.: linha que embala **40 caixas/min** com refugo ≤ 1%.\n**Escopo do projeto:** o **trabalho** necessário para entregar o produto. Ex.: especificar, comprar, instalar, treinar, testar." },
        { nivel: "facil", tipo: "bobo", titulo: "O que NÃO está no escopo", texto: "No churrasco: carne, carvão e som estão no escopo. Bebida alcoólica e sobremesa **não**.\nEscrever as exclusões evita o clássico “achei que você ia trazer o gelo”." },
        { nivel: "facil", tipo: "conceito", titulo: "EAP (Estrutura Analítica do Projeto)", texto: "Em inglês, WBS. É a **decomposição hierárquica de todo o trabalho** do projeto em partes menores e gerenciáveis, orientada a **entregas**.\nO último nível chama-se **pacote de trabalho**: é ali que se estima custo e duração e se define um responsável." },
        { nivel: "facil", tipo: "mapa", titulo: "Exemplo de EAP", texto:
          "1 Nova linha de embalagem\n" +
          "├ 1.1 Gestão do projeto\n" +
          "├ 1.2 Equipamento\n" +
          "│ ├ 1.2.1 Especificação\n" +
          "│ ├ 1.2.2 Compra\n" +
          "│ └ 1.2.3 Instalação\n" +
          "├ 1.3 Infraestrutura\n" +
          "│ ├ 1.3.1 Piso\n" +
          "│ └ 1.3.2 Elétrica\n" +
          "├ 1.4 Pessoas\n" +
          "│ ├ 1.4.1 Treinamento\n" +
          "│ └ 1.4.2 Procedimentos\n" +
          "└ 1.5 Partida\n" +
          "  ├ 1.5.1 Testes\n" +
          "  └ 1.5.2 Aceite" },
        { nivel: "facil", tipo: "atencao", titulo: "EAP não é cronograma", texto: "A EAP mostra **o que** será entregue, não **quando** nem em que ordem. A ordem e as datas vêm no cronograma (próxima lição)." },

        { nivel: "medio", tipo: "conceito", titulo: "Regra dos 100%", texto: "A EAP inclui **100% do trabalho** do projeto, inclusive o de gerenciamento, **nada a mais e nada a menos**. Em cada nível, os “filhos” somam exatamente o “pai”.\nSe algo não está na EAP, não está no projeto (e não terá orçamento)." },
        { nivel: "medio", tipo: "dica", titulo: "Até onde decompor?", texto: "Regra prática **8/80**: um pacote de trabalho costuma ter entre ~8 e ~80 horas de esforço, ou caber em um ciclo de acompanhamento (ex.: uma semana). É heurística, não lei: use o bom senso e o risco." },
        { nivel: "medio", tipo: "conceito", titulo: "Dicionário e linha de base", texto: "O **dicionário da EAP** descreve cada pacote: entrega, responsável, critérios de aceitação, premissas e estimativas.\n**Linha de base do escopo** = declaração de escopo + EAP + dicionário, aprovados. Ela é a referência para medir desvios." },
        { nivel: "medio", tipo: "conceito", titulo: "Critério de aceitação", texto: "Como o cliente dirá “aceito”. Precisa ser **verificável**:\n❌ “Linha funcionando bem.”\n✅ “Linha opera 8 h seguidas a 40 caixas/min com refugo ≤ 1%, com procedimento assinado pela Qualidade.”" },
        { nivel: "medio", tipo: "atencao", titulo: "Scope creep e gold plating", texto: "**Scope creep:** o escopo cresce sem controle (“já que está aí, coloca mais uma esteira”) sem ajustar prazo e custo.\n**Gold plating:** a equipe entrega **a mais** por conta própria. Parece gentileza, mas consome recursos, cria risco e não foi pedido.\nCaminho correto: **solicitação de mudança → análise de impacto → aprovação → atualização da linha de base e comunicação**." },

        { nivel: "dificil", tipo: "conceito", titulo: "Como avaliar uma EAP", texto: "• **Orientada a entregas** (substantivos: “Sistema elétrico instalado”), não a uma lista solta de verbos.\n• **Mutuamente exclusiva:** o mesmo trabalho não aparece em dois ramos (senão o custo é contado duas vezes).\n• **Coletivamente exaustiva:** regra dos 100%.\n• **Detalhe proporcional ao risco:** decompor mais onde há incerteza; o futuro distante pode ficar agregado (planejamento em ondas sucessivas)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Decompor demais ou de menos", texto: "**Demais:** custo de gestão alto, microgestão, planilhas que ninguém atualiza.\n**De menos:** estimativas ruins, responsabilidades difusas, desvios descobertos tarde.\nEm projetos ágeis, o escopo detalhado vive no **backlog priorizado**; a EAP pode existir só em alto nível (épicos e entregas)." },
        { nivel: "dificil", tipo: "serio", titulo: "Mudança na semana 8 de 12", texto: "O cliente pede um formato de caixa novo. Análise:\n• Pacotes afetados: 1.2.1 Especificação, 1.2.2 Compra (ferramental extra) e 1.5.1 Testes.\n• Impacto: +R$ 35 mil e +2 semanas no **caminho crítico** (ilustrativo).\n• Alternativas: (a) aceitar com novo prazo e custo; (b) entregar como **fase 2**, após o aceite da linha; (c) rejeitar.\n• Decisão pelo valor: se o formato novo só vende a partir de junho, a fase 2 protege o marco de março." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• PMI. *Practice Standard for Work Breakdown Structures* (origem da regra dos 100%).\n• PMI. *Guia PMBOK* (escopo e controle integrado de mudanças)." }
      ],
      questoes: [
        { id: "m02-q026", nivel: "facil", tipo: "multipla", pergunta: "“A linha deve embalar 40 caixas por minuto” descreve:",
          opcoes: ["O escopo do projeto", "O escopo do produto", "O cronograma", "O orçamento"], correta: 1,
          explicacao: "É uma característica do que será entregue (produto). O trabalho para chegar lá é o escopo do projeto." },
        { id: "m02-q027", nivel: "facil", tipo: "vf", pergunta: "A EAP mostra a ordem em que as atividades serão executadas.",
          correta: false, explicacao: "A EAP mostra O QUE será entregue. Ordem e datas ficam no cronograma." },
        { id: "m02-q028", nivel: "facil", tipo: "ordenar", pergunta: "Ordene do mais geral ao mais detalhado:",
          itens: ["Projeto: nova linha de embalagem", "Entrega: equipamento", "Subentrega: instalação do equipamento", "Pacote de trabalho: fixação e nivelamento da máquina"],
          explicacao: "A EAP desce do projeto até os pacotes de trabalho." },
        { id: "m02-q029", nivel: "facil", tipo: "lacuna", pergunta: "O último nível da EAP chama-se ___ de trabalho.",
          opcoes: ["pacote", "caixa", "lote", "turno"], correta: 0,
          explicacao: "No pacote de trabalho se estimam custo e duração e se define o responsável." },
        { id: "m02-q030", nivel: "medio", tipo: "caso", contexto: "A EAP de uma nova linha tem apenas: Equipamento, Infraestrutura e Treinamento.",
          pergunta: "Pela regra dos 100%, o que está faltando?",
          opcoes: ["Nada, está completa", "Gestão do projeto e partida/testes com aceite", "Cores diferentes para cada ramo", "As datas de cada entrega"], correta: 1,
          explicacao: "A EAP precisa conter TODO o trabalho, inclusive gerenciar o projeto e colocar a linha em operação. Datas não fazem parte da EAP." },
        { id: "m02-q031", nivel: "medio", tipo: "multipla", pergunta: "Qual situação é um exemplo de scope creep?",
          opcoes: ["O patrocinador aprova formalmente uma mudança, com novo prazo e custo", "Durante a instalação, o supervisor pede “só mais uma esteira” e a equipe acrescenta sem registrar", "A equipe entrega exatamente o combinado", "O projeto é cancelado no portão de fase"], correta: 1,
          explicacao: "Scope creep é crescimento de escopo sem controle. Mudança aprovada com impacto analisado é gestão de escopo." },
        { id: "m02-q032", nivel: "medio", tipo: "ordenar", pergunta: "Ordene o fluxo correto de uma mudança de escopo:",
          itens: ["Registrar a solicitação de mudança", "Analisar o impacto em prazo, custo, qualidade e riscos", "Aprovar ou rejeitar (patrocinador ou comitê)", "Atualizar a linha de base e comunicar"],
          explicacao: "É o controle integrado de mudanças: nada muda na linha de base sem análise e aprovação." },
        { id: "m02-q033", nivel: "medio", tipo: "vf", pergunta: "“A linha opera 8 h seguidas a 40 caixas/min com refugo ≤ 1%” é um bom critério de aceitação.",
          correta: true, explicacao: "É objetivo e verificável. Critérios vagos (“funcionando bem”) geram conflito no aceite." },
        { id: "m02-q034", nivel: "dificil", tipo: "caso", contexto: "Na EAP, o pacote “Comprar cabos e eletrocalhas” aparece em 1.2 Equipamento e também em 1.3 Infraestrutura, com os mesmos itens.",
          pergunta: "Qual é o problema principal?",
          opcoes: ["Sobreposição: o custo será contado duas vezes e a responsabilidade fica difusa", "Nenhum: redundância traz segurança", "Falta um verbo no nome do pacote", "O pacote é pequeno demais"], correta: 0,
          justificativas: ["Viola a exclusividade mútua da EAP: duplica orçamento e cria dois donos.", "Redundância na EAP gera erro de orçamento, não segurança.", "Pacotes devem ser nomeados como entregas; esse não é o problema central.", "O tamanho não é a questão aqui."],
          explicacao: "Cada trabalho deve aparecer em um único ramo da EAP." },
        { id: "m02-q035", nivel: "dificil", tipo: "multipla", pergunta: "No projeto, o comissionamento da linha tem alta incerteza técnica; a pintura das grades de proteção é simples. Como decompor?",
          opcoes: ["Decompor tudo no mesmo nível de detalhe", "Decompor mais o comissionamento e manter a pintura em nível mais agregado", "Não decompor nada para ganhar tempo", "Decompor só a pintura, que é fácil de estimar"], correta: 1,
          explicacao: "O detalhe da EAP deve ser proporcional ao risco e à incerteza." },
        { id: "m02-q036", nivel: "dificil", tipo: "discursiva", pergunta: "Na semana 8 de 12, o cliente pede um novo formato de caixa. Descreva como você analisaria o pedido e que recomendação levaria ao patrocinador.",
          respostaModelo: "Registrar a solicitação; identificar os **pacotes da EAP afetados** (especificação, compra de ferramental, testes); estimar o **impacto no caminho crítico, no custo e nos riscos** (ex.: +2 semanas e +R$ 35 mil); gerar **alternativas** (aceitar com nova linha de base; fazer como fase 2 após o aceite; rejeitar); recomendar pela **necessidade do negócio** (se o formato só vende em junho, fase 2 preserva o marco de março) e, após a decisão, atualizar a linha de base e comunicar as partes interessadas.",
          criterios: ["Usa a EAP para identificar os pacotes afetados", "Quantifica impacto em prazo (caminho crítico), custo e risco", "Apresenta pelo menos duas alternativas", "Recomenda com base no valor para o negócio e segue o controle de mudanças"] },
        { id: "m02-q037", nivel: "dificil", tipo: "vf", pergunta: "Gold plating (entregar além do combinado por iniciativa da equipe) é uma boa prática porque aumenta a satisfação do cliente.",
          correta: false, explicacao: "Consome recursos não previstos, cria riscos e expectativas. O certo é propor como mudança." }
      ]
    },

    /* ==================================================================
       LIÇÃO 4 — CRONOGRAMA E CAMINHO CRÍTICO (CPM)
       ================================================================== */
    {
      id: "m02-l4",
      titulo: "Cronograma e caminho crítico",
      icone: "🗓️",
      objetivos: {
        facil: ["Montar uma lista de atividades com duração e predecessoras", "Ler um gráfico de Gantt", "Explicar o que é caminho crítico e por que ele define o prazo"],
        medio: ["Calcular ES, EF, LS, LF e folga total pelo método CPM (ida e volta)", "Identificar o caminho crítico e a duração do projeto", "Reconhecer dependências (TI, II, TT, IT) e esperas/antecipações"],
        dificil: ["Distinguir folga total de folga livre e usar essa diferença na gestão", "Avaliar caminhos quase críticos e o risco de o caminho crítico mudar", "Analisar o efeito de recursos limitados sobre o cronograma"]
      },
      prerequisitos: [{ texto: "EAP: as atividades nascem dos pacotes de trabalho", licao: "m02-l3" }],
      resumo: {
        facil: "Cronograma = atividades + ordem + duração. O **Gantt** mostra barras no tempo. O **caminho crítico** é a sequência **mais longa** da rede: define o prazo do projeto, e suas atividades têm **folga zero**.",
        medio: "**Ida:** ES = maior EF dos predecessores; EF = ES + d. **Volta:** LF = menor LS dos sucessores; LS = LF − d. **Folga total** = LS − ES. Dependências: TI (mais comum), II, TT, IT; com esperas (lag) e antecipações (lead).",
        dificil: "**Folga livre** = menor ES dos sucessores − EF; usar só a livre não afeta ninguém. Caminhos com pouca folga são **quase críticos** e podem virar críticos. O CPM assume **recursos ilimitados**: com recurso compartilhado, o nivelamento pode alongar o projeto; priorize as atividades de menor folga."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "O cronograma responde duas perguntas que todo diretor faz: **“quando termina?”** e **“o que não pode atrasar?”**. Numa fábrica, a instalação costuma ter janela fixa (recesso): perder a janela significa perder produção." },
        { nivel: "facil", tipo: "passos", titulo: "Do escopo ao cronograma", texto: "1. **Listar atividades** a partir dos pacotes da EAP.\n2. **Sequenciar**: quem depende de quem.\n3. **Estimar durações.**\n4. **Montar a rede** e calcular datas e caminho crítico.\n5. **Desenhar o Gantt** para comunicar." },
        { nivel: "facil", tipo: "serio", titulo: "Projeto “nova linha” (ilustrativo)", texto: "**A** Levantar requisitos — 3 dias — sem predecessora\n**B** Comprar e receber o equipamento — 10 dias — após A\n**C** Preparar piso e elétrica — 6 dias — após A\n**D** Instalar o equipamento — 4 dias — após B e C\n**E** Treinar operadores — 5 dias — após A\n**F** Testes e aceite — 2 dias — após D e E" },
        { nivel: "facil", tipo: "mapa", titulo: "Gantt do projeto", texto:
          "Dia    0    5    10   15  19\n" +
          "A      ███\n" +
          "B         ██████████\n" +
          "C         ██████\n" +
          "E         █████\n" +
          "D                   ████\n" +
          "F                       ██" },
        { nivel: "facil", tipo: "conceito", titulo: "Caminho crítico", texto: "É a sequência **mais longa** de atividades dependentes. Define a **duração do projeto**.\nAqui: **A → B → D → F = 3 + 10 + 4 + 2 = 19 dias**.\nAtividades críticas têm **folga zero**: atrasou 1 dia, o projeto atrasa 1 dia. C e E têm folga." },
        { nivel: "facil", tipo: "bobo", titulo: "No churrasco", texto: "Comprar a carne → temperar → assar: **crítico** (se atrasar, todo mundo espera).\nComprar guardanapo: tem **folga** (pode ser feito a qualquer momento antes do almoço)." },
        { nivel: "facil", tipo: "conceito", titulo: "Gantt: vantagens e limites", texto: "Criado por **Henry Gantt** (início do século XX). Ótimo para **comunicar**, mas um Gantt mal desenhado **esconde as dependências**: você vê barras, não vê o que empurra o quê." },

        { nivel: "medio", tipo: "formula", titulo: "Método do caminho crítico (CPM)", texto: "**Ida (forward pass):** ES = maior EF entre os predecessores (0 no início); EF = ES + d.\n**Volta (backward pass):** LF = menor LS entre os sucessores (= duração do projeto no fim); LS = LF − d.\n**Folga total** = LS − ES = LF − EF. Caminho crítico: folga total zero.",
          legenda: [["ES", "início mais cedo (early start)"], ["EF", "término mais cedo (early finish)"], ["LS", "início mais tarde sem atrasar o projeto (late start)"], ["LF", "término mais tarde (late finish)"], ["d", "duração da atividade"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Resolvendo o projeto “nova linha”", texto: "**Ida:** A 0–3 · B 3–13 · C 3–9 · E 3–8 · D começa no **maior** EF de B e C = 13 → 13–17 · F começa no maior EF de D e E = 17 → 17–19.\n**Volta:** F 17–19 · D 13–17 · E: LF = 17, LS = 12 · B: LF = 13, LS = 3 · C: LF = 13, LS = 7 · A: LF = **menor** LS de B, C, E = 3 → LS 0.\n**Folgas:** A 0 · B 0 · C **4** · D 0 · E **9** · F 0 → crítico **A-B-D-F**, 19 dias." },
        { nivel: "medio", tipo: "mnemonico", titulo: "Para não errar", texto: "**“Ida pega o maior, volta pega o menor.”**" },
        { nivel: "medio", tipo: "conceito", titulo: "Tipos de dependência", texto: "**TI (término-início):** B só começa quando A termina (a mais comum).\n**II (início-início):** começam juntas (ou defasadas).\n**TT (término-término):** terminam juntas.\n**IT (início-término):** rara.\n**Lag (espera):** “instalar 2 dias após concretar o piso” = TI + 2.\n**Lead (antecipação):** começar o treinamento 2 dias antes do fim da instalação." },
        { nivel: "medio", tipo: "atencao", titulo: "Erros comuns", texto: "Na volta, usar o **maior** LS dos sucessores (o certo é o **menor**). Esquecer uma predecessora e “encurtar” o projeto no papel. Somar durações de atividades paralelas." },

        { nivel: "dificil", tipo: "formula", titulo: "Folga livre × folga total", texto: "**Folga total** = LS − ES: quanto a atividade pode atrasar **sem atrasar o projeto**.\n**Folga livre** = (menor ES dos sucessores) − EF: quanto pode atrasar **sem atrasar nenhum sucessor**.\nUsar a folga livre não afeta ninguém; passar dela consome a folga das atividades seguintes.",
          legenda: [["FT", "folga total"], ["FL", "folga livre (sempre ≤ FT)"]] },
        { nivel: "dificil", tipo: "exemplo", titulo: "Quando as folgas diferem", texto: "Rede: **P** (2 d) → **Q** (3 d) → **S** (2 d); e **R** (1 d) → **T** (1 d) → S.\nIda: P 0–2, Q 2–5, R 0–1, T 1–2, S começa em 5 (maior EF) → 5–7.\nVolta: S 5–7, Q LS 2, T LF 5 → LS 4, R LF 4 → LS 3.\n**R:** folga total 3, mas folga **livre 0** (se R atrasar, T começa depois). **T:** total 3 e livre 3." },
        { nivel: "dificil", tipo: "conceito", titulo: "Caminhos quase críticos", texto: "No projeto “nova linha”, A-C-D-F soma 15 dias (4 de folga). Se C atrasar **5 dias**, esse caminho passa a 20 dias: o projeto atrasa 1 dia e **o caminho crítico muda**.\nMonitore caminhos com folga pequena; quanto mais caminhos paralelos quase críticos, maior a chance real de atraso." },
        { nivel: "dificil", tipo: "limitacao", titulo: "CPM supõe recursos ilimitados", texto: "Se a mesma equipe precisa fazer duas atividades paralelas, as datas do CPM são inviáveis. O **nivelamento de recursos** pode alongar o projeto e criar um caminho crítico “de recursos”.\nA **Corrente Crítica** (Goldratt, 1997) trata isso com pulmões de tempo. Estimativas também sofrem com a **Lei de Parkinson** (o trabalho se expande para ocupar o tempo disponível) e a **síndrome do estudante** (deixar para a última hora)." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• GOLDRATT, E. M. *Corrente Crítica* (1997).\n• KERZNER, H. *Gestão de Projetos*.\n• PMI. *Guia PMBOK* (gerenciamento do cronograma)." }
      ],
      questoes: [
        { id: "m02-q038", nivel: "facil", tipo: "multipla", pergunta: "O caminho crítico de um projeto é:",
          opcoes: ["O caminho mais curto da rede", "O caminho mais longo, que define a duração do projeto", "O caminho com mais atividades", "O caminho de maior custo"], correta: 1,
          justificativas: ["O mais curto tem folga; não define o prazo.", "É a sequência mais longa: define o prazo e tem folga zero.", "Número de atividades não importa, e sim a soma das durações.", "Custo não define o caminho crítico."],
          explicacao: "Atrasou uma atividade crítica, atrasou o projeto." },
        { id: "m02-q039", nivel: "facil", tipo: "calculo", pergunta: "Projeto “nova linha”: A (3 d), B (10 d, após A), C (6 d, após A), D (4 d, após B e C), E (5 d, após A), F (2 d, após D e E). Qual a duração do projeto em dias?",
          resposta: 19, tolerancia: 0, unidade: "dias",
          resolucao: "Caminhos:\nA-B-D-F = 3 + 10 + 4 + 2 = 19\nA-C-D-F = 3 + 6 + 4 + 2 = 15\nA-E-F = 3 + 5 + 2 = 10\nO mais longo (19) é o caminho crítico.",
          explicacao: "A duração do projeto é a do caminho mais longo." },
        { id: "m02-q040", nivel: "facil", tipo: "vf", pergunta: "Uma atividade com folga zero pode atrasar 1 dia sem atrasar o projeto.",
          correta: false, explicacao: "Folga zero = atividade crítica. Qualquer atraso vai direto para a data final." },
        { id: "m02-q041", nivel: "facil", tipo: "lacuna", pergunta: "O gráfico de barras que mostra as atividades ao longo do tempo é o gráfico de ___.",
          opcoes: ["Gantt", "Pareto", "Ishikawa", "controle"], correta: 0,
          explicacao: "Henry Gantt, contemporâneo de Taylor (Módulo 1)." },
        { id: "m02-q042", nivel: "medio", tipo: "calculo", pergunta: "A atividade D tem duas predecessoras: B termina no dia 13 (EF) e C termina no dia 9 (EF). Qual o ES de D?",
          resposta: 13, tolerancia: 0, unidade: "",
          resolucao: "Na ida, ES = MAIOR EF entre os predecessores = max(13, 9) = 13.",
          explicacao: "D só pode começar quando TODAS as predecessoras terminarem." },
        { id: "m02-q043", nivel: "medio", tipo: "calculo", pergunta: "No projeto “nova linha”, a atividade E tem ES = 3 e LS = 12. Qual a sua folga total (dias)?",
          resposta: 9, tolerancia: 0, unidade: "dias",
          resolucao: "Folga total = LS − ES = 12 − 3 = 9 dias.",
          explicacao: "O treinamento pode começar até 9 dias depois do mais cedo sem atrasar o projeto." },
        { id: "m02-q044", nivel: "medio", tipo: "ligar", pergunta: "Ligue a situação ao tipo de relação:",
          pares: [["Instalar só depois que o piso estiver pronto", "Término-início"], ["Pintura e secagem começam juntas, defasadas", "Início-início"], ["Testes e documentação terminam juntos", "Término-término"], ["Esperar 2 dias de cura do concreto", "Lag (espera)"]],
          explicacao: "TI é a mais comum; lags e leads ajustam as relações." },
        { id: "m02-q045", nivel: "medio", tipo: "multipla", pergunta: "Na volta (backward pass), o LF de uma atividade com vários sucessores é:",
          opcoes: ["O maior LS entre os sucessores", "O menor LS entre os sucessores", "A média dos LS dos sucessores", "A soma das durações dos sucessores"], correta: 1,
          explicacao: "“Volta pega o menor”: a atividade precisa terminar a tempo do sucessor mais apertado." },
        { id: "m02-q046", nivel: "medio", tipo: "calculo", pergunta: "Rede: A (2 d); B (4 d, após A); C (3 d, após A); D (1 d, após B e C). Qual a duração do projeto?",
          resposta: 7, tolerancia: 0, unidade: "dias",
          resolucao: "A 0–2; B 2–6; C 2–5; D começa no maior EF de B e C = 6 → 6–7.\nDuração = 7 dias (caminho A-B-D).",
          explicacao: "C tem 1 dia de folga." },
        { id: "m02-q047", nivel: "dificil", tipo: "calculo", pergunta: "Rede: P (2 d) → Q (3 d) → S (2 d); R (1 d) → T (1 d) → S. Qual a folga LIVRE da atividade R?",
          resposta: 0, tolerancia: 0, unidade: "dias",
          resolucao: "Ida: R 0–1; T 1–2.\nFolga livre de R = ES do sucessor (T = 1) − EF de R (1) = 0.",
          explicacao: "Se R atrasar, T começa depois (mas o projeto não atrasa, porque há folga total)." },
        { id: "m02-q048", nivel: "dificil", tipo: "calculo", pergunta: "Na mesma rede (P→Q→S e R→T→S), qual a folga TOTAL da atividade R?",
          resposta: 3, tolerancia: 0, unidade: "dias",
          resolucao: "Ida: P 0–2, Q 2–5, R 0–1, T 1–2, S 5–7.\nVolta: S LS = 5 → T LF = 5, LS = 4 → R LF = 4, LS = 3.\nFolga total de R = LS − ES = 3 − 0 = 3.",
          explicacao: "R e T “dividem” a mesma folga de 3 dias do caminho R-T." },
        { id: "m02-q049", nivel: "dificil", tipo: "caso", contexto: "No projeto “nova linha” (crítico A-B-D-F = 19 dias; C tem 4 dias de folga), o fornecedor de cabos avisa que a atividade C vai atrasar 5 dias.",
          pergunta: "Qual o efeito?",
          opcoes: ["Nenhum, porque C tem folga", "O projeto atrasa 1 dia e A-C-D-F passa a ser o caminho crítico", "O projeto atrasa 5 dias", "O projeto atrasa 4 dias"], correta: 1,
          justificativas: ["A folga (4) é menor que o atraso (5).", "A-C-D-F passa de 15 para 20 dias: 1 dia além dos 19.", "Os primeiros 4 dias são absorvidos pela folga.", "O atraso é o excedente sobre a folga: 5 − 4 = 1."],
          explicacao: "Atraso além da folga total vai para o prazo e pode mudar o caminho crítico." },
        { id: "m02-q050", nivel: "dificil", tipo: "discursiva", pergunta: "No projeto “nova linha”, uma única equipe de elétrica precisa fazer C (piso e elétrica, 6 d) e também preparar a sala de treinamento, o que condiciona E (5 d). As duas não podem ocorrer em paralelo. Qual ordem você escolheria e por quê? Qual o efeito no prazo?",
          respostaModelo: "Fazer **C primeiro** (menor folga: 4 dias contra 9 de E): C 3–9, E 9–14; D começa em 13 (EF de B) → 13–17; F começa no maior entre 17 e 14 → 17–19. **Prazo mantido: 19 dias.** Se fizesse E primeiro: E 3–8, C 8–14, D 14–18, F 18–20 → **20 dias**. Regra prática do nivelamento: priorizar a atividade de **menor folga**. Alternativas: contratar outra equipe ou fazer horas extras, se o custo compensar.",
          criterios: ["Reconhece que o CPM supôs recursos ilimitados", "Calcula as duas sequências (19 × 20 dias)", "Prioriza a atividade de menor folga", "Cita alternativa de recurso adicional com análise de custo"] },
        { id: "m02-q051", nivel: "dificil", tipo: "vf", pergunta: "O cálculo do CPM considera automaticamente a disponibilidade limitada de pessoas e equipamentos.",
          correta: false, explicacao: "O CPM supõe recursos ilimitados. Restrições de recursos exigem nivelamento (ou Corrente Crítica)." }
      ]
    },

    /* ==================================================================
       LIÇÃO 5 — ESTIMATIVAS, PERT E COMPRESSÃO
       ================================================================== */
    {
      id: "m02-l5",
      titulo: "Estimativas, PERT e compressão",
      icone: "⏱️",
      objetivos: {
        facil: ["Explicar por que durações são incertas", "Diferenciar estimativas análoga, paramétrica, de três pontos e bottom-up", "Calcular a duração esperada PERT de uma atividade"],
        medio: ["Calcular desvio-padrão e variância PERT", "Calcular a probabilidade de terminar o projeto até uma data", "Diferenciar compressão (crashing) de paralelismo (fast tracking) e calcular o custo por dia de compressão"],
        dificil: ["Escolher a compressão de menor custo, respeitando limites e mudanças do caminho crítico", "Criticar as hipóteses do PERT (independência, caminho único, viés de convergência)", "Propor prazo com nível de confiança e reservas"]
      },
      prerequisitos: [
        { texto: "Caminho crítico e folgas", licao: "m02-l4" },
        { texto: "Distribuição normal e escore Z (Módulo 13)", licao: "m13-l8" }
      ],
      resumo: {
        facil: "Estimativas podem ser **análogas** (projeto parecido), **paramétricas** (taxa × quantidade), de **três pontos** (otimista a, mais provável m, pessimista b) ou **bottom-up**. No PERT, **te = (a + 4m + b) ÷ 6**: uma média ponderada que é puxada pelo cenário pessimista.",
        medio: "No PERT, **σ = (b − a) ÷ 6**. No caminho crítico, somam-se as médias e as **variâncias**; Z = (prazo − Te) ÷ σ. Prometer Te dá só ~50% de chance. Para encurtar: **crashing** (recursos, custa mais) ou **fast tracking** (paralelizar, mais risco).",
        dificil: "Comprima sempre a atividade **crítica de menor custo por dia**, respeitando limites e reavaliando o caminho crítico a cada passo. O PERT supõe independência e olha **um** caminho: subestima o prazo quando há caminhos paralelos quase críticos (**viés de convergência**). Use prazos com nível de confiança (P80, P90), reservas e, quando possível, simulação de Monte Carlo."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Dizer “fica pronto em 19 dias” sem dizer **a chance** de cumprir é o jeito mais comum de perder credibilidade. Estimar é lidar com incerteza, não adivinhar um número." },
        { nivel: "facil", tipo: "conceito", titulo: "Tipos de estimativa", texto: "**Análoga:** baseada em projeto parecido (“a última linha levou 20 dias”). Rápida, menos precisa.\n**Paramétrica:** taxa × quantidade (2 h/m² × 300 m² = 600 h).\n**Três pontos:** otimista, mais provável e pessimista.\n**Bottom-up:** estima cada pacote de trabalho e soma. Mais precisa, dá mais trabalho." },
        { nivel: "facil", tipo: "formula", titulo: "Duração esperada (PERT)", texto: "**te = (a + 4m + b) ÷ 6**\nMédia ponderada: o mais provável tem peso 4.",
          legenda: [["a", "duração otimista (tudo dá certo)"], ["m", "duração mais provável"], ["b", "duração pessimista (muita coisa dá errado)"], ["te", "duração esperada (média)"]] },
        { nivel: "facil", tipo: "exemplo", titulo: "Compra do equipamento", texto: "a = 8, m = 10, b = 18 dias.\nte = (8 + 4 × 10 + 18) ÷ 6 = (8 + 40 + 18) ÷ 6 = 66 ÷ 6 = **11 dias**.\nRepare: o pessimista longo **puxa** a média acima do “mais provável”." },
        { nivel: "facil", tipo: "bobo", titulo: "O seu ônibus", texto: "Melhor dia 50 min, normal 58, dia de temporal 90.\nte = (50 + 4 × 58 + 90) ÷ 6 = 372 ÷ 6 = **62 min**. Por isso sair “no horário normal” faz você chegar atrasado com frequência." },
        { nivel: "facil", tipo: "atencao", titulo: "te não é garantia", texto: "A duração esperada é uma **média**. Em cerca de metade das vezes a atividade vai demorar mais do que ela." },

        { nivel: "medio", tipo: "formula", titulo: "Incerteza no PERT", texto: "**σ = (b − a) ÷ 6** · variância = σ²\nNo caminho crítico: **Te = Σ te** e **σ²(caminho) = Σ σ²** (supondo atividades independentes).\n**Z = (prazo − Te) ÷ σ(caminho)** → probabilidade pela tabela normal.",
          legenda: [["σ", "desvio-padrão da atividade"], ["σ²", "variância (é ela que se soma, não o σ)"], ["Te", "duração esperada do projeto"], ["Z", "distância do prazo à média, em desvios"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Chance de cumprir o prazo", texto: "Caminho crítico com Te = 19 dias e soma das variâncias = 4 → σ = 2.\n• P(terminar até 22) → Z = (22 − 19) ÷ 2 = 1,5 → **93,3%**.\n• P(até 19) → Z = 0 → **50%**.\n• Prazo para 95%: 19 + 1,645 × 2 = **22,3 dias**." },
        { nivel: "medio", tipo: "conceito", titulo: "Como encurtar o projeto", texto: "**Crashing (compressão):** adicionar recursos às atividades **críticas** (horas extras, frete expresso, outra equipe). Aumenta o custo.\n**Fast tracking (paralelismo):** fazer em paralelo o que era sequencial (começar o treinamento antes do fim da instalação). Aumenta o **risco de retrabalho**." },
        { nivel: "medio", tipo: "formula", titulo: "Custo de compressão por dia", texto: "**Custo/dia = (custo acelerado − custo normal) ÷ (duração normal − duração acelerada)**\nEx.: compra normal 10 d por R$ 20.000; acelerada 7 d por R$ 24.500 → 4.500 ÷ 3 = **R$ 1.500/dia**.",
          legenda: [["custo acelerado", "custo com a atividade no menor prazo possível"], ["duração acelerada", "menor duração possível (limite técnico)"]] },
        { nivel: "medio", tipo: "atencao", titulo: "Erro comum", texto: "Comprimir atividade **não crítica** não reduz o prazo: só gasta dinheiro. E some **variâncias**, não desvios-padrão." },

        { nivel: "dificil", tipo: "exemplo", titulo: "Compressão ótima passo a passo", texto: "Projeto “nova linha” (19 d, crítico A-B-D-F). Opções: **B** de 10 → 7 d a R$ 1.500/dia; **D** de 4 → 3 d a R$ 2.000/dia; A e F não comprimem.\n• Para **16 d**: 3 dias em B (mais barato) = **R$ 4.500**. Atenção: A-C-D-F (15 d) fica quase crítico.\n• Para **15 d**: B esgotou; comprimir D em 1 dia (está nos dois caminhos) = +R$ 2.000 → **R$ 6.500** no total.\n• **14 d é impossível**: B e D no limite; A e F fixas." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Hipóteses do PERT", texto: "• Durações seguem aproximadamente uma distribuição **beta**; a fórmula de σ é aproximação.\n• Atividades **independentes** (na prática, um fornecedor atrasado afeta várias).\n• Olha só o **caminho crítico**: quando há caminhos paralelos quase críticos, a data real de junção é o **máximo** de vários caminhos incertos, e o PERT **subestima** o prazo (**viés de convergência**, *merge bias*).\nSaída prática: **simulação de Monte Carlo** da rede (Módulo 9)." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Compressão não é linear", texto: "A **Lei de Brooks** (Brooks, 1975), formulada para software, lembra que acrescentar pessoas a um projeto atrasado pode atrasá-lo mais (treinamento, comunicação). Na fábrica: dois eletricistas no mesmo quadro podem render menos que o dobro.\nFast tracking aumenta retrabalho; custo por dia pode crescer à medida que se comprime." },
        { nivel: "dificil", tipo: "conceito", titulo: "Prazo com confiança e reservas", texto: "Comunique prazos como faixas ou percentis (**P80, P90**). Reservas: **contingência** (riscos identificados, sob gestão do GP) e **gerencial** (desconhecidos, sob gestão da direção).\nPrometer o Te é prometer uma **moeda ao ar**." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• BROOKS, F. P. *The Mythical Man-Month* (1975).\n• PMI. *Guia PMBOK* (estimativas e compressão do cronograma).\n• Módulo 9 deste curso: simulação de Monte Carlo." }
      ],
      questoes: [
        { id: "m02-q052", nivel: "facil", tipo: "calculo", pergunta: "Uma atividade tem a = 4, m = 6 e b = 14 dias. Qual a duração esperada PERT (te)?",
          resposta: 7, tolerancia: 0.01, unidade: "dias",
          resolucao: "te = (a + 4m + b) ÷ 6 = (4 + 24 + 14) ÷ 6 = 42 ÷ 6 = 7 dias.",
          explicacao: "O pessimista (14) puxa a média para cima do mais provável (6)." },
        { id: "m02-q053", nivel: "facil", tipo: "ligar", pergunta: "Ligue a situação ao tipo de estimativa:",
          pares: [["“Obra parecida levou 20 dias no ano passado”", "Análoga"], ["“2 horas por m² × 300 m²”", "Paramétrica"], ["“Otimista, mais provável e pessimista”", "Três pontos"], ["“Somei a estimativa de cada pacote de trabalho”", "Bottom-up"]],
          explicacao: "Cada método troca precisão por esforço de estimativa." },
        { id: "m02-q054", nivel: "facil", tipo: "vf", pergunta: "A duração esperada PERT é sempre igual à duração mais provável.",
          correta: false, explicacao: "Só se o otimista e o pessimista forem simétricos em relação ao mais provável." },
        { id: "m02-q055", nivel: "facil", tipo: "calculo", pergunta: "Compra do equipamento: a = 8, m = 10, b = 18 dias. Qual o te?",
          resposta: 11, tolerancia: 0.01, unidade: "dias",
          resolucao: "te = (8 + 4 × 10 + 18) ÷ 6 = 66 ÷ 6 = 11 dias.",
          explicacao: "O cenário pessimista longo empurra a média." },
        { id: "m02-q056", nivel: "medio", tipo: "calculo", pergunta: "Uma atividade tem a = 4 e b = 14 dias. Qual o desvio-padrão PERT (dias)?",
          resposta: 1.67, tolerancia: 0.01, unidade: "dias",
          resolucao: "σ = (b − a) ÷ 6 = (14 − 4) ÷ 6 = 10 ÷ 6 ≈ 1,67 dia.\nVariância = 1,67² ≈ 2,78.",
          explicacao: "Quanto mais distantes o otimista e o pessimista, maior a incerteza." },
        { id: "m02-q057", nivel: "medio", tipo: "calculo", pergunta: "Caminho crítico com Te = 19 dias e σ = 2 dias. Qual a probabilidade (%) de terminar em até 22 dias?",
          resposta: 93.3, tolerancia: 0.2, unidade: "%",
          resolucao: "Z = (22 − 19) ÷ 2 = 1,5\nP(Z < 1,5) = 0,9332 → 93,3%",
          explicacao: "Revise o escore Z no Módulo 13 se precisar." },
        { id: "m02-q058", nivel: "medio", tipo: "multipla", pergunta: "“Começar o treinamento dos operadores antes do fim da instalação, em paralelo, aceitando risco de retrabalho.” Isso é:",
          opcoes: ["Crashing", "Fast tracking", "Nivelamento de recursos", "Gold plating"], correta: 1,
          explicacao: "Fast tracking paraleliza atividades que eram sequenciais; crashing acrescenta recursos." },
        { id: "m02-q059", nivel: "medio", tipo: "calculo", pergunta: "Uma atividade normal leva 10 dias e custa R$ 20.000; acelerada leva 7 dias e custa R$ 24.500. Qual o custo de compressão por dia (R$)?",
          resposta: 1500, tolerancia: 0, unidade: "R$/dia",
          resolucao: "(24.500 − 20.000) ÷ (10 − 7) = 4.500 ÷ 3 = R$ 1.500 por dia.",
          explicacao: "É esse número que se compara entre as atividades críticas." },
        { id: "m02-q060", nivel: "medio", tipo: "vf", pergunta: "Reduzir a duração de uma atividade que tem folga reduz o prazo do projeto.",
          correta: false, explicacao: "Só atividades críticas encurtam o projeto. Comprimir a não crítica só aumenta o custo." },
        { id: "m02-q061", nivel: "dificil", tipo: "calculo", pergunta: "Projeto de 19 dias (crítico A-B-D-F). B pode cair de 10 para 7 d a R$ 1.500/dia; D de 4 para 3 d a R$ 2.000/dia; A e F não comprimem. Qual o custo mínimo (R$) para terminar em 16 dias?",
          resposta: 4500, tolerancia: 0, unidade: "R$",
          resolucao: "Precisa tirar 3 dias do caminho crítico.\nAtividade crítica mais barata: B (R$ 1.500/dia), que aceita 3 dias.\n3 × 1.500 = R$ 4.500.\nConferência: A-B-D-F = 16; A-C-D-F = 15; A-E-F = 10. OK.",
          explicacao: "Sempre comprima a atividade crítica de menor custo por dia." },
        { id: "m02-q062", nivel: "dificil", tipo: "calculo", pergunta: "No mesmo projeto, qual o MENOR prazo possível (dias) com as compressões disponíveis?",
          resposta: 15, tolerancia: 0, unidade: "dias",
          resolucao: "B no limite (7 d): A-B-D-F = 16.\nD no limite (3 d): A-B-D-F = 15 e A-C-D-F = 14.\nA e F não comprimem → mínimo = 15 dias (custo total R$ 6.500).",
          explicacao: "Acabou a compressão possível no caminho crítico." },
        { id: "m02-q063", nivel: "dificil", tipo: "multipla", pergunta: "Qual é uma limitação importante do PERT clássico?",
          opcoes: ["Superestima o prazo em projetos com muitos caminhos paralelos", "Subestima o prazo quando há caminhos paralelos quase críticos (viés de convergência)", "Não calcula a duração média", "Não permite calcular probabilidades"], correta: 1,
          justificativas: ["É o contrário: ele tende a subestimar.", "Ao olhar só um caminho, ignora que a junção depende do máximo de vários caminhos incertos.", "Calcula: te e Te.", "Permite, via Z, com as hipóteses do modelo."],
          explicacao: "Por isso a simulação de Monte Carlo é recomendada em redes com muitos caminhos quase críticos." },
        { id: "m02-q064", nivel: "dificil", tipo: "calculo", pergunta: "Com Te = 19 dias e σ = 2 dias, qual prazo (dias) dá 95% de chance de cumprimento? (Z = 1,645)",
          resposta: 22.29, tolerancia: 0.05, unidade: "dias",
          resolucao: "Prazo = Te + Z × σ = 19 + 1,645 × 2 = 22,29 dias.",
          explicacao: "Prometer 19 dias = ~50% de chance. Com 22,3 dias, ~95% (dentro das hipóteses do PERT)." },
        { id: "m02-q065", nivel: "dificil", tipo: "discursiva", pergunta: "A diretoria quer prometer ao cliente o prazo de 19 dias, que é exatamente o Te do PERT (σ = 2). Explique o risco dessa promessa e proponha como definir e comunicar o prazo.",
          respostaModelo: "Prometer o Te significa cerca de **50% de chance** de atraso. Propor prazo com nível de confiança: P90 ≈ 19 + 1,28 × 2 ≈ 21,6 dias; P95 ≈ 22,3 dias. Se o cliente exige 19, avaliar **compressão** (custo) e/ou **fast tracking** (risco) para trazer o Te para baixo, criar **reserva de contingência** e plano de resposta a riscos. Comunicar como faixa com probabilidade. Lembrar que o PERT **subestima** o prazo com caminhos quase críticos: validar com **Monte Carlo**.",
          criterios: ["Explica que o Te corresponde a ~50% de chance", "Calcula um prazo com nível de confiança (P90 ou P95)", "Propõe alternativas (compressão, reservas, plano de riscos)", "Menciona a limitação do PERT e a simulação"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 6 — GESTÃO DE RISCOS
       ================================================================== */
    {
      id: "m02-l6",
      titulo: "Gestão de riscos",
      icone: "⚠️",
      objetivos: {
        facil: ["Definir risco (ameaça e oportunidade) e diferenciá-lo de problema", "Escrever um risco no formato causa–evento–efeito", "Citar técnicas para identificar riscos"],
        medio: ["Priorizar riscos com a matriz probabilidade × impacto", "Escolher respostas para ameaças e oportunidades", "Calcular o valor monetário esperado (VME)"],
        dificil: ["Decidir sobre uma resposta a risco comparando seu custo com a redução do VME", "Diferenciar reserva de contingência e reserva gerencial", "Criticar as matrizes qualitativas e escolher análises quantitativas"]
      },
      prerequisitos: [
        { texto: "Estimativas e incerteza de prazo", licao: "m02-l5" },
        { texto: "Probabilidade: regras do “e” e do “ou” (Módulo 13)", licao: "m13-l7" }
      ],
      resumo: {
        facil: "**Risco** é um evento incerto que, se ocorrer, afeta os objetivos: pode ser **ameaça** ou **oportunidade**. **Problema** é o que já aconteceu. Escreva no formato **causa → evento → efeito** e identifique com brainstorming, lições aprendidas, checklists e análise de premissas.",
        medio: "Priorize com **probabilidade × impacto**. Respostas a ameaças: **evitar, transferir, mitigar, aceitar, escalar**; a oportunidades: **explorar, compartilhar, melhorar, aceitar, escalar**. **VME = P × impacto**. Transferir (seguro) não elimina a ameaça.",
        dificil: "Uma resposta vale a pena quando **custo da resposta + VME residual < VME original** (considerando também a aversão ao risco). **Contingência** cobre riscos identificados e faz parte da linha de base; **gerencial** cobre desconhecidos e fica fora dela. Matrizes qualitativas multiplicam escalas ordinais e escondem riscos raros e catastróficos: complemente com árvores de decisão e Monte Carlo."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Todo projeto tem incerteza. Gestão de riscos é **pensar antes** no que pode dar errado (ou certo) e decidir o que fazer, em vez de apagar incêndio depois." },
        { nivel: "facil", tipo: "conceito", titulo: "Risco × problema", texto: "**Risco:** evento **incerto** que, se ocorrer, afeta objetivos (prazo, custo, qualidade, escopo).\n**Problema (issue):** algo que **já aconteceu** e precisa ser resolvido.\nRisco pode ser **ameaça** (fornecedor atrasar) ou **oportunidade** (câmbio favorável baratear o equipamento)." },
        { nivel: "facil", tipo: "conceito", titulo: "Como escrever um risco", texto: "**“Devido a [causa], pode ocorrer [evento], o que causaria [efeito].”**\nEx.: Devido ao **fornecedor único importado**, pode ocorrer **atraso na entrega do equipamento**, o que **atrasaria a partida em até 3 semanas**." },
        { nivel: "facil", tipo: "conceito", titulo: "Como identificar", texto: "Brainstorming com a equipe, **lições aprendidas** de projetos anteriores, listas de verificação (checklists), entrevistas com especialistas e **análise das premissas** do TAP (toda premissa pode falhar)." },
        { nivel: "facil", tipo: "bobo", titulo: "No churrasco", texto: "Risco: chover no sábado. Respostas possíveis: alugar tenda (reduz o impacto), mudar para um salão (evita), ou aceitar e torcer. Oportunidade: promoção de carne no atacado." },

        { nivel: "medio", tipo: "conceito", titulo: "Matriz probabilidade × impacto", texto: "Escalas de 1 a 5 para probabilidade (P) e impacto (I); pontuação = **P × I**.\nCada empresa define a política de cores. Exemplo: ≥ 15 alto (vermelho), 6 a 14 médio (amarelo), ≤ 5 baixo (verde).\nPrioriza a atenção: riscos altos ganham dono, plano e acompanhamento semanal." },
        { nivel: "medio", tipo: "conceito", titulo: "Respostas (PMBOK 6ª ed.)", texto: "**Ameaças:** evitar (eliminar a causa), transferir (seguro, contrato), mitigar (reduzir P ou I), aceitar (ativa, com reserva; ou passiva), escalar (fora da alçada do projeto).\n**Oportunidades:** explorar (garantir que ocorra), compartilhar (parceria), melhorar (aumentar P ou I), aceitar, escalar." },
        { nivel: "medio", tipo: "formula", titulo: "Valor monetário esperado", texto: "**VME = P × impacto** (ameaça com sinal negativo; oportunidade positivo).\nEx.: atraso do fornecedor: 30% × R$ 40.000 = **−R$ 12.000**. Desconto no câmbio: 20% × R$ 10.000 = **+R$ 2.000**. VME líquido = **−R$ 10.000**.",
          legenda: [["P", "probabilidade de ocorrer (0 a 1)"], ["impacto", "efeito financeiro se ocorrer (R$)"]] },
        { nivel: "medio", tipo: "atencao", titulo: "Erros comuns", texto: "**Seguro é transferir**, não eliminar: a ameaça continua podendo ocorrer, só o prejuízo financeiro muda de mão.\n**Aceitar não é ignorar**: aceitação ativa cria reserva e plano de contingência." },
        { nivel: "medio", tipo: "dica", titulo: "Registro de riscos (planilha)", texto: "Colunas mínimas: ID · descrição causa–evento–efeito · P · I · pontuação · **dono** · resposta · **gatilho** (sinal de que vai ocorrer) · status. Revise em toda reunião de acompanhamento." },

        { nivel: "dificil", tipo: "exemplo", titulo: "Vale a pena pagar pela resposta?", texto: "Risco: atraso do fornecedor, P = 30%, impacto R$ 40.000 → VME = R$ 12.000.\nResposta: pagar **R$ 5.000** por entregas escalonadas, reduzindo P para **10%** → VME residual = R$ 4.000.\nCusto total esperado = 5.000 + 4.000 = **R$ 9.000 < R$ 12.000** → vale, economia esperada de **R$ 3.000**.\nSe a resposta custasse R$ 9.000, o total seria R$ 13.000 > R$ 12.000: pelo VME não vale, salvo aversão ao risco (ex.: multa contratual que ameaça o cliente-chave)." },
        { nivel: "dificil", tipo: "conceito", titulo: "Reservas", texto: "**Reserva de contingência:** para riscos **identificados** (“desconhecidos conhecidos”); faz parte da **linha de base de custos**; usada pelo GP conforme o plano.\n**Reserva gerencial:** para o que **não foi identificado**; fica **fora** da linha de base; liberada pela direção.\n**Orçamento do projeto** = linha de base de custos + reserva gerencial." },
        { nivel: "dificil", tipo: "conceito", titulo: "Árvore de decisão simples", texto: "Equipamento **A**: R$ 100 mil, 20% de chance de falha na partida com custo de R$ 50 mil → custo esperado = 100 + 0,2 × 50 = **R$ 110 mil**.\nEquipamento **B**: R$ 115 mil, 5% de falha → 115 + 0,05 × 50 = **R$ 117,5 mil**.\nPelo VME, A. Mas se a falha paralisar o cliente-chave, o impacto real é maior que R$ 50 mil: a modelagem do impacto muda a decisão." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites das matrizes qualitativas", texto: "Multiplicar escalas **ordinais** (1 a 5) trata números como se fossem medidas reais. Um risco **raro e catastrófico** (P = 1, I = 5 → 5) pode ficar “verde”, abaixo de um risco frequente e leve (P = 3, I = 2 → 6). Riscos correlacionados também somem na matriz.\nBoas práticas: regra de escalonamento para qualquer impacto máximo, análise **quantitativa** (VME, árvores de decisão, Monte Carlo, análise de sensibilidade) nos riscos principais." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• PMI. *Guia PMBOK* (gerenciamento dos riscos).\n• HUBBARD, D. W. *The Failure of Risk Management* (2009): crítica às matrizes qualitativas." }
      ],
      questoes: [
        { id: "m02-q066", nivel: "facil", tipo: "multipla", pergunta: "Qual a diferença entre risco e problema?",
          opcoes: ["Nenhuma: são sinônimos", "Risco é incerto (pode ocorrer); problema já ocorreu", "Risco é sempre negativo; problema pode ser positivo", "Problema é o risco com maior impacto"], correta: 1,
          explicacao: "Risco olha para o futuro incerto; problema é presente e exige solução." },
        { id: "m02-q067", nivel: "facil", tipo: "vf", pergunta: "Um risco pode ser positivo (uma oportunidade).",
          correta: true, explicacao: "Ex.: câmbio favorável que barateia o equipamento importado." },
        { id: "m02-q068", nivel: "facil", tipo: "ligar", pergunta: "Separe as partes do risco:",
          pares: [["Fornecedor único importado", "Causa"], ["Atraso na entrega do equipamento", "Evento (o risco)"], ["Partida atrasa em até 3 semanas", "Efeito"]],
          explicacao: "Formato: devido a [causa], pode ocorrer [evento], o que causaria [efeito]." },
        { id: "m02-q069", nivel: "facil", tipo: "multipla", pergunta: "Qual destas NÃO é uma técnica de identificação de riscos?",
          opcoes: ["Brainstorming com a equipe", "Consulta a lições aprendidas", "Análise das premissas do TAP", "Cálculo da folga livre das atividades"], correta: 3,
          explicacao: "Folga livre é cálculo de cronograma. As outras três ajudam a encontrar riscos." },
        { id: "m02-q070", nivel: "medio", tipo: "ligar", pergunta: "Ligue a ação à resposta à ameaça:",
          pares: [["Contratar seguro do equipamento", "Transferir"], ["Trocar a tecnologia para eliminar a causa", "Evitar"], ["Manter uma peça reserva para reduzir o impacto", "Mitigar"], ["Registrar e criar reserva de contingência", "Aceitar (ativamente)"]],
          explicacao: "Cada resposta atua de forma diferente sobre probabilidade, impacto ou quem arca com o prejuízo." },
        { id: "m02-q071", nivel: "medio", tipo: "calculo", pergunta: "Um risco tem 25% de probabilidade e impacto de R$ 60.000. Qual o valor monetário esperado (em R$, valor absoluto)?",
          resposta: 15000, tolerancia: 0, unidade: "R$",
          resolucao: "VME = P × impacto = 0,25 × 60.000 = R$ 15.000 (custo esperado).",
          explicacao: "É uma média ponderada: o risco não vai custar exatamente isso, mas é a referência para reservas e decisões." },
        { id: "m02-q072", nivel: "medio", tipo: "calculo", pergunta: "Na matriz 1–5, um risco tem probabilidade 4 e impacto 5. Qual a pontuação?",
          resposta: 20, tolerancia: 0, unidade: "",
          resolucao: "Pontuação = P × I = 4 × 5 = 20.",
          explicacao: "Na política de exemplo (≥ 15 = alto), é um risco alto: precisa de dono e plano." },
        { id: "m02-q073", nivel: "medio", tipo: "vf", pergunta: "Contratar um seguro elimina a ameaça.",
          correta: false, explicacao: "O seguro transfere o impacto financeiro. O evento continua podendo ocorrer (e atrasar o projeto)." },
        { id: "m02-q074", nivel: "dificil", tipo: "calculo", pergunta: "Risco: P = 30%, impacto R$ 40.000. Uma resposta custa R$ 5.000 e reduz P para 10%. Qual a economia esperada (R$) ao adotar a resposta?",
          resposta: 3000, tolerancia: 0, unidade: "R$",
          resolucao: "VME original = 0,30 × 40.000 = 12.000\nCom a resposta: custo 5.000 + VME residual 0,10 × 40.000 = 4.000 → 9.000\nEconomia esperada = 12.000 − 9.000 = R$ 3.000",
          explicacao: "A resposta vale quando custo + VME residual < VME original." },
        { id: "m02-q075", nivel: "dificil", tipo: "multipla", pergunta: "Sobre as reservas do projeto, é correto afirmar:",
          opcoes: ["A reserva gerencial cobre riscos identificados e faz parte da linha de base", "A reserva de contingência cobre riscos identificados e faz parte da linha de base; a gerencial cobre o não identificado e fica fora dela", "As duas são a mesma coisa", "Nenhuma reserva deve existir se o planejamento for bom"], correta: 1,
          explicacao: "Orçamento = linha de base de custos (com contingência) + reserva gerencial." },
        { id: "m02-q076", nivel: "dificil", tipo: "calculo", pergunta: "Equipamento A custa R$ 100.000 e tem 20% de chance de falha na partida, que custaria R$ 50.000. Qual o custo esperado de A (R$)?",
          resposta: 110000, tolerancia: 0, unidade: "R$",
          resolucao: "Custo esperado = 100.000 + 0,20 × 50.000 = 100.000 + 10.000 = R$ 110.000",
          explicacao: "Compare com B (R$ 117.500) — mas revise o impacto se a falha afetar clientes-chave." },
        { id: "m02-q077", nivel: "dificil", tipo: "discursiva", pergunta: "Na matriz do projeto, um risco raro e catastrófico (P = 1, I = 5) pontua 5 e fica “verde”, abaixo de um risco frequente e leve (P = 3, I = 2 → 6). Explique o problema e proponha melhorias no processo.",
          respostaModelo: "A matriz multiplica **escalas ordinais** como se fossem medidas, perdendo informação: o risco catastrófico some na priorização. Melhorias: (1) **regra de escalonamento**: todo risco com impacto máximo recebe análise e dono sênior, independente da pontuação; (2) usar **análise quantitativa** nos riscos principais (VME, árvore de decisão, Monte Carlo); (3) considerar **aversão ao risco** (um evento que ameaça a empresa não se avalia só pela média); (4) calibrar as escalas e revisar riscos correlacionados.",
          criterios: ["Identifica o problema das escalas ordinais", "Propõe tratar impactos catastróficos independentemente da pontuação", "Sugere análise quantitativa", "Menciona aversão ao risco ou correlação entre riscos"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 7 — CUSTOS E VALOR AGREGADO (EVM)
       ================================================================== */
    {
      id: "m02-l7",
      titulo: "Custos e valor agregado",
      icone: "💰",
      objetivos: {
        facil: ["Diferenciar estimativa, orçamento e linha de base de custos", "Explicar PV, EV e AC com um exemplo simples", "Dizer se o projeto está atrasado e se está gastando mais do que produz"],
        medio: ["Calcular e interpretar CV, SV, CPI e SPI", "Projetar EAC, ETC e VAC", "Ler uma curva S"],
        dificil: ["Escolher a fórmula de EAC coerente com a causa do desvio", "Calcular e interpretar o TCPI", "Criticar limitações do valor agregado (SPI no fim, medição do progresso, caminho crítico)"]
      },
      prerequisitos: [{ texto: "Cronograma e caminho crítico", licao: "m02-l4" }],
      resumo: {
        facil: "**PV**: quanto deveria estar feito até hoje (em R$ do orçamento). **EV**: quanto foi realmente feito (em R$ do orçamento). **AC**: quanto foi gasto. EV < PV → atrasado. EV < AC → gastando mais do que o valor produzido.",
        medio: "**CV = EV − AC**, **SV = EV − PV**, **CPI = EV ÷ AC**, **SPI = EV ÷ PV** (abaixo de 1 é ruim). Se a eficiência de custo continuar: **EAC = BAC ÷ CPI**, **ETC = EAC − AC**, **VAC = BAC − EAC**.",
        dificil: "A fórmula do EAC depende da causa: desvio **atípico** → AC + (BAC − EV); desvio **persistente** → BAC ÷ CPI; custo e prazo pressionando → AC + (BAC − EV) ÷ (CPI × SPI). **TCPI** mostra a eficiência necessária no restante. O SPI tende a 1 no fim mesmo com atraso (use Earned Schedule), e o EVM agregado pode esconder o caminho crítico atrasado."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "“Gastei R$ 90 mil de R$ 200 mil” não diz se o projeto vai bem. A pergunta certa é: **quanto do trabalho foi feito** com esse dinheiro, e quanto **deveria** estar feito?" },
        { nivel: "facil", tipo: "conceito", titulo: "Do custo à linha de base", texto: "**Estimativa:** quanto cada pacote deve custar.\n**Orçamento:** soma aprovada das estimativas (+ reservas).\n**Linha de base de custos:** orçamento aprovado distribuído no tempo (sem a reserva gerencial). Em gráfico acumulado, forma a **curva S**." },
        { nivel: "facil", tipo: "conceito", titulo: "Os três números do valor agregado", texto: "**PV (valor planejado):** quanto do trabalho **deveria** estar feito até hoje, em R$ do orçamento.\n**EV (valor agregado):** quanto do trabalho **foi** feito, em R$ do orçamento.\n**AC (custo real):** quanto foi **gasto** de verdade." },
        { nivel: "facil", tipo: "bobo", titulo: "A reforma do quarto", texto: "Reforma de R$ 10 mil em 10 dias. No dia 5:\n• Deveria estar na metade → **PV = R$ 5.000**.\n• Pintou só 40% → **EV = R$ 4.000**.\n• Já pagou R$ 6.000 → **AC = R$ 6.000**.\nConclusão: atrasado (EV < PV) e gastando mais do que produziu (EV < AC)." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“Planejei, Entreguei, Achei na conta”**: PV, EV, AC." },

        { nivel: "medio", tipo: "formula", titulo: "Variações e índices", texto: "**CV = EV − AC** (custo) · **SV = EV − PV** (prazo, em R$)\n**CPI = EV ÷ AC** · **SPI = EV ÷ PV**\nVariação negativa ou índice < 1 = ruim.",
          legenda: [["CV", "variação de custo"], ["SV", "variação de prazo (em R$, não em dias)"], ["CPI", "índice de desempenho de custo: R$ produzidos por R$ gasto"], ["SPI", "índice de desempenho de prazo"]] },
        { nivel: "medio", tipo: "exemplo", titulo: "Projeto de R$ 200 mil (ilustrativo)", texto: "BAC = R$ 200.000 em 12 semanas. Na semana 6: PV = 100.000, EV = 80.000, AC = 90.000.\n• CV = 80 − 90 = **−R$ 10 mil** · SV = 80 − 100 = **−R$ 20 mil**\n• CPI = 80 ÷ 90 = **0,889** (cada R$ 1 gasto rende R$ 0,89 de trabalho)\n• SPI = 80 ÷ 100 = **0,80**" },
        { nivel: "medio", tipo: "formula", titulo: "Projeções", texto: "**EAC = BAC ÷ CPI** (se o desempenho de custo continuar)\n**ETC = EAC − AC** · **VAC = BAC − EAC**\nNo exemplo: EAC = 200 ÷ 0,889 = **R$ 225 mil**; ETC = **R$ 135 mil**; VAC = **−R$ 25 mil**.",
          legenda: [["BAC", "orçamento no término (budget at completion)"], ["EAC", "estimativa no término"], ["ETC", "estimativa para terminar (o que ainda vai gastar)"], ["VAC", "variação no término"]] },
        { nivel: "medio", tipo: "mapa", titulo: "Curva S em números (acumulado)", texto:
          "Semana    PV     EV     AC   (R$ mil)\n" +
          "   2      30     25     28\n" +
          "   4      65     52     60\n" +
          "   6     100     80     90   ← hoje\n" +
          "  12     200     —      —    (BAC)\n\n" +
          "Em gráfico, as três curvas têm forma de S.\n" +
          "EV abaixo de PV → atraso.\n" +
          "AC acima de EV → custo acima do valor produzido." },
        { nivel: "medio", tipo: "atencao", titulo: "Pegadinhas", texto: "SV está em **R$**, não em dias: SPI = 0,80 não quer dizer exatamente “20% dos dias atrasados”.\nNão confunda AC (gasto) com EV (trabalho feito valorizado pelo orçamento)." },

        { nivel: "dificil", tipo: "formula", titulo: "Qual EAC usar?", texto: "**1) EAC = AC + (BAC − EV):** o desvio foi **atípico** (não se repete); o resto segue o plano.\n**2) EAC = BAC ÷ CPI:** o desempenho de custo atual vai **persistir**.\n**3) EAC = AC + (BAC − EV) ÷ (CPI × SPI):** custo e prazo pressionam juntos (ex.: acelerar custará caro).\nNo exemplo: (1) R$ 210 mil · (2) R$ 225 mil · (3) 90 + 120 ÷ 0,711 = **R$ 258,75 mil**.",
          legenda: [["BAC − EV", "valor do trabalho que falta fazer"], ["CPI × SPI", "índice composto de custo e prazo"]] },
        { nivel: "dificil", tipo: "formula", titulo: "TCPI: a eficiência necessária", texto: "**TCPI = (BAC − EV) ÷ (BAC − AC)**: eficiência de custo necessária no **restante** para terminar dentro do BAC.\nNo exemplo: (200 − 80) ÷ (200 − 90) = 120 ÷ 110 = **1,091**. Com CPI histórico de 0,889, exigir 1,09 é pouco realista → renegociar o orçamento, reduzir escopo ou buscar ganhos concretos.",
          legenda: [["TCPI", "índice de desempenho para término (to-complete performance index)"]] },
        { nivel: "dificil", tipo: "limitacao", titulo: "Limites do valor agregado", texto: "• **SPI tende a 1 no fim**: quando todo o trabalho termina, EV = BAC = PV final, mesmo com meses de atraso. O **Earned Schedule** (Lipke, 2003) mede o prazo em tempo.\n• EV depende de **medir o progresso** com honestidade (regras 0/100, 50/50, marcos ponderados). “90% pronto” por semanas é sinal de medição ruim.\n• Não mede **qualidade**: trabalho com defeito também gera EV.\n• Atividades **não críticas adiantadas** podem esconder **críticas atrasadas**: sempre olhe o EVM junto com o caminho crítico." },
        { nivel: "dificil", tipo: "dica", titulo: "Regras de medição do progresso", texto: "**0/100:** só conta ao terminar (conservador, bom para pacotes curtos). **50/50:** metade ao iniciar, metade ao terminar. **% físico:** só com critério objetivo (metros instalados, pontos testados)." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• FLEMING, Q. W.; KOPPELMAN, J. M. *Earned Value Project Management*.\n• LIPKE, W. Schedule is different. *The Measurable News*, 2003 (Earned Schedule).\n• PMI. *Guia PMBOK* (custos)." }
      ],
      questoes: [
        { id: "m02-q078", nivel: "facil", tipo: "ligar", pergunta: "Ligue cada sigla ao seu significado:",
          pares: [["Quanto deveria estar feito até hoje (R$)", "PV"], ["Quanto do trabalho foi feito (R$ do orçamento)", "EV"], ["Quanto foi gasto de fato", "AC"]],
          explicacao: "Planejei, Entreguei, Achei na conta." },
        { id: "m02-q079", nivel: "facil", tipo: "calculo", pergunta: "Uma reforma orçada em R$ 10.000 está com 40% do trabalho feito. Qual o EV (R$)?",
          resposta: 4000, tolerancia: 0, unidade: "R$",
          resolucao: "EV = % concluído × orçamento = 0,40 × 10.000 = R$ 4.000",
          explicacao: "O EV valoriza o trabalho feito pelo orçamento, não pelo que foi gasto." },
        { id: "m02-q080", nivel: "facil", tipo: "vf", pergunta: "Se o EV é menor que o PV, o projeto está atrasado em relação ao plano.",
          correta: true, explicacao: "Foi feito menos trabalho do que o planejado até a data." },
        { id: "m02-q081", nivel: "facil", tipo: "multipla", pergunta: "Um projeto tem AC = R$ 6.000 e EV = R$ 4.000. Isso indica que ele está:",
          opcoes: ["Economizando", "Gastando mais do que o valor do trabalho produzido", "Adiantado", "Exatamente no plano"], correta: 1,
          explicacao: "EV < AC → custo acima do valor produzido (CPI < 1)." },
        { id: "m02-q082", nivel: "medio", tipo: "calculo", pergunta: "EV = R$ 80.000 e AC = R$ 90.000. Qual o CPI?",
          resposta: 0.889, tolerancia: 0.002, unidade: "",
          resolucao: "CPI = EV ÷ AC = 80.000 ÷ 90.000 ≈ 0,889",
          explicacao: "Cada R$ 1 gasto produziu cerca de R$ 0,89 de trabalho." },
        { id: "m02-q083", nivel: "medio", tipo: "calculo", pergunta: "EV = R$ 80.000 e PV = R$ 100.000. Qual o SPI?",
          resposta: 0.8, tolerancia: 0.001, unidade: "",
          resolucao: "SPI = EV ÷ PV = 80.000 ÷ 100.000 = 0,80",
          explicacao: "Foi feito 80% do trabalho que deveria estar feito." },
        { id: "m02-q084", nivel: "medio", tipo: "calculo", pergunta: "BAC = R$ 200.000 e CPI = 0,889 (use 80/90). Qual a EAC (R$), supondo que o desempenho de custo continue?",
          resposta: 225000, tolerancia: 150, unidade: "R$",
          resolucao: "EAC = BAC ÷ CPI = 200.000 ÷ (80/90) = 200.000 × 90/80 = R$ 225.000",
          explicacao: "Se nada mudar, o projeto vai custar R$ 25 mil acima do orçamento." },
        { id: "m02-q085", nivel: "medio", tipo: "multipla", pergunta: "Um projeto tem CPI = 1,10 e SPI = 0,90. Interpretação:",
          opcoes: ["Acima do custo e adiantado", "Gastando menos do que o valor produzido, mas atrasado", "Acima do custo e atrasado", "Abaixo do custo e adiantado"], correta: 1,
          explicacao: "CPI > 1: custo bom. SPI < 1: prazo ruim. Pode ser falta de recursos alocados (gasta pouco porque faz pouco)." },
        { id: "m02-q086", nivel: "medio", tipo: "calculo", pergunta: "BAC = R$ 200.000 e EAC = R$ 225.000. Qual o VAC (R$)?",
          resposta: -25000, tolerancia: 0, unidade: "R$",
          resolucao: "VAC = BAC − EAC = 200.000 − 225.000 = −R$ 25.000",
          explicacao: "Negativo = previsão de estouro de orçamento." },
        { id: "m02-q087", nivel: "dificil", tipo: "calculo", pergunta: "BAC = 200 mil, EV = 80 mil, AC = 90 mil. Qual o TCPI para terminar dentro do BAC?",
          resposta: 1.091, tolerancia: 0.002, unidade: "",
          resolucao: "TCPI = (BAC − EV) ÷ (BAC − AC) = (200 − 80) ÷ (200 − 90) = 120 ÷ 110 ≈ 1,091",
          explicacao: "Seria preciso ser 9% mais eficiente que o plano no restante, partindo de um CPI de 0,889: pouco realista sem mudanças." },
        { id: "m02-q088", nivel: "dificil", tipo: "caso", contexto: "BAC = 200 mil, EV = 80 mil, AC = 90 mil. A análise mostra que o estouro de R$ 10 mil veio de uma multa única de importação, que não vai se repetir.",
          pergunta: "Qual fórmula de EAC é mais coerente?",
          opcoes: ["EAC = BAC ÷ CPI", "EAC = AC + (BAC − EV)", "EAC = AC + (BAC − EV) ÷ (CPI × SPI)", "EAC = BAC"], correta: 1,
          justificativas: ["Supõe que a ineficiência continuará, o que não é o caso.", "Desvio atípico: o restante segue o plano → 90 + 120 = R$ 210 mil.", "Supõe pressão de custo e prazo persistentes.", "Ignora o desvio já ocorrido."],
          explicacao: "A escolha da fórmula depende da CAUSA do desvio." },
        { id: "m02-q089", nivel: "dificil", tipo: "calculo", pergunta: "Com BAC = 200.000, EV = 80.000, AC = 90.000, CPI = 80/90 e SPI = 0,8, calcule EAC = AC + (BAC − EV) ÷ (CPI × SPI) em R$.",
          resposta: 258750, tolerancia: 200, unidade: "R$",
          resolucao: "CPI × SPI = 0,8889 × 0,8 = 0,7111\n(BAC − EV) = 120.000\n120.000 ÷ 0,7111 = 168.750\nEAC = 90.000 + 168.750 = R$ 258.750",
          explicacao: "Usada quando recuperar o prazo vai pressionar o custo (ex.: horas extras)." },
        { id: "m02-q090", nivel: "dificil", tipo: "vf", pergunta: "No fim de um projeto muito atrasado, o SPI tende a 1 mesmo assim.",
          correta: true, explicacao: "Quando todo o trabalho é concluído, EV = BAC = PV final. Por isso existe o Earned Schedule, que mede prazo em tempo." },
        { id: "m02-q091", nivel: "dificil", tipo: "discursiva", pergunta: "O relatório mensal mostra CPI = 0,95 e SPI = 1,10, mas o caminho crítico está 2 semanas atrasado. Como isso é possível e o que você faria?",
          respostaModelo: "O EVM é **agregado**: atividades **não críticas adiantadas** geram EV e inflam o SPI, escondendo o atraso das **críticas**. Ações: analisar o EVM **por caminho crítico ou por pacote**; usar Earned Schedule ou datas do cronograma; realocar recursos das não críticas para as críticas; revisar a medição de progresso; reportar à direção o risco real de prazo, não só os índices.",
          criterios: ["Explica que o índice agregado mistura críticas e não críticas", "Propõe olhar o EVM junto com o caminho crítico", "Sugere realocar recursos para as atividades críticas", "Menciona comunicar o risco real de prazo"] }
      ]
    },

    /* ==================================================================
       LIÇÃO 8 — ÁGIL: MANIFESTO E SCRUM
       ================================================================== */
    {
      id: "m02-l8",
      titulo: "Ágil: Manifesto e Scrum",
      icone: "🔄",
      objetivos: {
        facil: ["Explicar por que surgiram os métodos ágeis e os 4 valores do Manifesto", "Identificar as responsabilidades, eventos e artefatos do Scrum", "Descrever um ciclo de sprint"],
        medio: ["Prever quantas sprints faltam a partir da velocidade, com faixa", "Escrever histórias de usuário com critérios de aceitação", "Diferenciar Meta do Produto, Meta da Sprint e Definição de Pronto"],
        dificil: ["Avaliar quando o Scrum é ou não adequado no contexto industrial", "Criticar o uso de métricas ágeis como metas", "Desenhar uma governança híbrida (preditivo + ágil)"]
      },
      prerequisitos: [{ texto: "Ciclos de vida preditivo, adaptativo e híbrido", licao: "m02-l1" }],
      resumo: {
        facil: "O **Manifesto Ágil** (2001) valoriza pessoas, produto funcionando, colaboração com o cliente e resposta a mudanças, **mais** do que processos, documentação, contratos e planos (que continuam tendo valor). **Scrum 3-5-3**: Product Owner, Scrum Master e Developers; Sprint, Planning, Daily, Review e Retrospectiva; Product Backlog, Sprint Backlog e Incremento.",
        medio: "Cada artefato tem um compromisso: **Meta do Produto**, **Meta da Sprint** e **Definição de Pronto**. Histórias: “Como [papel], quero [algo] para [benefício]” + critérios de aceitação. Previsão = pontos restantes ÷ velocidade, comunicada como **faixa**.",
        dificil: "Scrum funciona melhor em problemas **complexos** com entregas incrementais utilizáveis; em trabalho físico indivisível, **preditivo, Kanban ou híbrido** costumam servir melhor. Velocidade não é meta (**Lei de Goodhart**) e story points não se comparam entre times. No híbrido, integre por marcos e riscos comuns."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que surgiu o ágil", texto: "Em projetos com requisitos incertos (software, produto novo), planejar tudo no início e entregar só no fim costuma gerar o produto errado. A resposta foi **entregar em ciclos curtos e aprender com o uso**." },
        { nivel: "facil", tipo: "conceito", titulo: "Manifesto Ágil (2001)", texto: "Valorizamos mais:\n• **Indivíduos e interações** que processos e ferramentas\n• **Software em funcionamento** que documentação abrangente\n• **Colaboração com o cliente** que negociação de contratos\n• **Responder a mudanças** que seguir um plano\n“Os itens à direita têm valor, mas valorizamos mais os da esquerda.”" },
        { nivel: "facil", tipo: "conceito", titulo: "Scrum: responsabilidades", texto: "Segundo o Guia do Scrum (2020):\n**Product Owner:** maximiza o valor do produto e ordena o Product Backlog.\n**Scrum Master:** zela pela eficácia do time, ensina Scrum e ajuda a remover impedimentos.\n**Developers:** criam o incremento a cada sprint.\nTime pequeno, em geral **10 pessoas ou menos**." },
        { nivel: "facil", tipo: "conceito", titulo: "Eventos e artefatos", texto: "**Eventos:** Sprint (até **1 mês**, contém os demais), Sprint Planning, **Daily Scrum (15 min)**, Sprint Review e Sprint Retrospective.\n**Artefatos:** Product Backlog, Sprint Backlog e Incremento." },
        { nivel: "facil", tipo: "mnemonico", titulo: "Para memorizar", texto: "**“3-5-3”**: 3 responsabilidades, 5 eventos, 3 artefatos." },
        { nivel: "facil", tipo: "bobo", titulo: "A reforma por cômodos", texto: "Em vez de reformar a casa toda e só mostrar no fim, você entrega **um cômodo pronto a cada 2 semanas**, vê como ficou e ajusta o próximo. Isso é pensar em incrementos." },
        { nivel: "facil", tipo: "atencao", titulo: "A Daily não é reunião de status", texto: "É dos **Developers**, para inspecionar o progresso rumo à Meta da Sprint e adaptar o plano do dia. Não é prestação de contas ao chefe." },

        { nivel: "medio", tipo: "conceito", titulo: "Compromissos, pilares e valores", texto: "Cada artefato tem um compromisso: Product Backlog → **Meta do Produto**; Sprint Backlog → **Meta da Sprint**; Incremento → **Definição de Pronto (DoD)**.\n**Pilares:** transparência, inspeção e adaptação. **Valores:** compromisso, foco, abertura, respeito e coragem." },
        { nivel: "medio", tipo: "conceito", titulo: "História de usuário", texto: "**“Como [papel], quero [algo] para [benefício].”**\nEx.: Como **supervisor**, quero ver o **OEE por turno no painel** para **agir no mesmo dia**.\nCritério de aceitação (formato Dado/Quando/Então): **dado** o fim do turno, **quando** abro o painel, **então** vejo o OEE com disponibilidade, performance e qualidade." },
        { nivel: "medio", tipo: "atencao", titulo: "Critério de aceitação ≠ Definição de Pronto", texto: "**Critério de aceitação:** específico de **uma** história.\n**Definição de Pronto:** padrão de qualidade para **todo** incremento (testado, integrado, documentado)." },
        { nivel: "medio", tipo: "formula", titulo: "Previsão por velocidade", texto: "**Sprints restantes = pontos restantes ÷ velocidade média**\nEx.: velocidades 21, 24 e 27 → média 24; backlog de 120 pontos → **5 sprints** (~10 semanas com sprints de 2 semanas).\nFaixa: 120 ÷ 27 ≈ 4,4 e 120 ÷ 21 ≈ 5,7 → **“5 a 6 sprints”**.",
          legenda: [["velocidade", "pontos concluídos (dentro da DoD) por sprint"], ["pontos", "tamanho relativo estimado pelo próprio time"]] },

        { nivel: "dificil", tipo: "conceito", titulo: "Quando o Scrum faz sentido", texto: "Brilha em problemas **complexos**, com requisitos que emergem e possibilidade de entregar **incrementos utilizáveis**.\nÉ pouco natural em trabalho físico **indivisível** (instalar uma prensa não gera algo utilizável a cada 2 semanas) ou em contextos regulados sem flexibilidade de escopo. Aí preditivo, **Kanban** ou **híbrido** tendem a servir melhor.\nA **matriz de Stacey** (incerteza de requisitos × incerteza técnica) ajuda a posicionar o problema." },
        { nivel: "dificil", tipo: "limitacao", titulo: "Métricas que viram metas", texto: "**Lei de Goodhart:** quando uma medida vira meta, deixa de ser uma boa medida. Metas de velocidade inflam as estimativas sem aumentar a entrega real.\nStory points são **relativos a cada time**: não compare times. Cuidado com o “Scrum de fachada”: rituais sem autonomia e PO sem poder de decisão." },
        { nivel: "dificil", tipo: "serio", titulo: "Governança híbrida", texto: "Projeto “nova linha + MES”:\n• Obra, compra e instalação: **preditivo** (CPM, EVM, marcos).\n• Software MES e painel: **Scrum** com sprints de 2 semanas e backlog priorizado pelo PO (cliente interno).\n• Integração: **marcos comuns** (ex.: interface com o CLP testada antes da partida), **registro de riscos único**, reunião semanal GP + PO, e o cronograma mestre reserva janelas para as entregas de software." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• BECK, K. et al. *Manifesto para Desenvolvimento Ágil de Software* (2001).\n• SCHWABER, K.; SUTHERLAND, J. *O Guia do Scrum* (2020).\n• PMI; Agile Alliance. *Agile Practice Guide* (2017)." }
      ],
      questoes: [
        { id: "m02-q092", nivel: "facil", tipo: "multipla", pergunta: "No Scrum, quem é responsável por ordenar (priorizar) o Product Backlog?",
          opcoes: ["O Scrum Master", "O Product Owner", "Os Developers", "O gerente funcional"], correta: 1,
          justificativas: ["Zela pela eficácia do time e pelo Scrum, não prioriza o backlog.", "É responsável por maximizar o valor e ordenar o backlog.", "Decidem COMO fazer o trabalho da sprint, não a prioridade do produto.", "Não é uma responsabilidade do Scrum."],
          explicacao: "PO = valor e prioridade; Developers = como construir; SM = eficácia do time." },
        { id: "m02-q093", nivel: "facil", tipo: "vf", pergunta: "O Manifesto Ágil afirma que documentação e planos não têm valor.",
          correta: false, explicacao: "Eles têm valor; o Manifesto apenas valoriza MAIS os itens da esquerda (pessoas, produto funcionando, colaboração, resposta a mudanças)." },
        { id: "m02-q094", nivel: "facil", tipo: "ligar", pergunta: "Ligue o objetivo ao evento do Scrum:",
          pares: [["Planejar o trabalho da sprint", "Sprint Planning"], ["15 minutos diários dos Developers", "Daily Scrum"], ["Mostrar o incremento às partes interessadas", "Sprint Review"], ["Melhorar a forma de trabalhar do time", "Sprint Retrospective"]],
          explicacao: "Todos acontecem dentro da Sprint." },
        { id: "m02-q095", nivel: "facil", tipo: "lacuna", pergunta: "No Scrum, uma sprint dura no máximo ___.",
          opcoes: ["um mês", "uma semana", "seis meses", "um ano"], correta: 0,
          explicacao: "Sprints de até um mês mantêm o ciclo de inspeção e adaptação curto." },
        { id: "m02-q096", nivel: "medio", tipo: "calculo", pergunta: "As três últimas sprints entregaram 21, 24 e 27 pontos. Faltam 120 pontos no backlog. Quantas sprints (pela média) faltam?",
          resposta: 5, tolerancia: 0, unidade: "sprints",
          resolucao: "Velocidade média = (21 + 24 + 27) ÷ 3 = 24\n120 ÷ 24 = 5 sprints\nFaixa: 120 ÷ 27 ≈ 4,4 e 120 ÷ 21 ≈ 5,7 → comunique “5 a 6 sprints”.",
          explicacao: "Previsão ágil é estimativa com faixa, não promessa." },
        { id: "m02-q097", nivel: "medio", tipo: "multipla", pergunta: "Qual a diferença entre critério de aceitação e Definição de Pronto?",
          opcoes: ["São sinônimos", "Critério de aceitação é de uma história; Definição de Pronto é o padrão de qualidade de todo incremento", "Definição de Pronto é escrita pelo cliente de cada história", "Critério de aceitação só existe no preditivo"], correta: 1,
          explicacao: "Uma história só está pronta quando atende aos seus critérios E à Definição de Pronto." },
        { id: "m02-q098", nivel: "medio", tipo: "multipla", pergunta: "Qual é a história de usuário mais bem escrita?",
          opcoes: ["Fazer o painel", "Como supervisor, quero ver o OEE por turno no painel para agir no mesmo dia", "O sistema deve ser rápido e bonito", "Criar tabela OEE no banco"], correta: 1,
          explicacao: "Tem papel, necessidade e benefício. As outras são tarefas vagas ou técnicas, sem valor explícito para o usuário." },
        { id: "m02-q099", nivel: "medio", tipo: "vf", pergunta: "A Meta da Sprint é o compromisso associado ao Sprint Backlog.",
          correta: true, explicacao: "Product Backlog → Meta do Produto; Sprint Backlog → Meta da Sprint; Incremento → Definição de Pronto." },
        { id: "m02-q100", nivel: "dificil", tipo: "caso", contexto: "A diretoria quer “usar Scrum” para instalar uma prensa de 800 toneladas: fundação, compra importada, montagem e comissionamento, com parada única da fábrica.",
          pergunta: "Qual a recomendação mais adequada?",
          opcoes: ["Scrum puro, com sprints de 2 semanas para todo o projeto", "Abordagem preditiva (ou híbrida), com CPM e marcos; práticas ágeis só onde houver entregas incrementais, como software", "Nenhum planejamento formal, para ganhar agilidade", "Adiar até existir um time Scrum dedicado"], correta: 1,
          justificativas: ["Trabalho físico indivisível não gera incremento utilizável a cada sprint.", "Escopo estável e dependências fortes pedem planejamento preditivo; o ágil entra onde agrega.", "Aumenta muito o risco em um projeto caro e com janela única.", "Não resolve a inadequação do método ao problema."],
          explicacao: "Escolha o método pelo tipo de problema, não pela moda." },
        { id: "m02-q101", nivel: "dificil", tipo: "multipla", pergunta: "O diretor define como meta “aumentar a velocidade do time em 20% no trimestre”. A consequência mais provável é:",
          opcoes: ["Aumento real de 20% na entrega de valor", "Inflação das estimativas em pontos, sem aumento real de entrega", "Redução do número de defeitos", "Melhor previsibilidade"], correta: 1,
          explicacao: "Lei de Goodhart: a métrica vira alvo e perde o significado. Meça resultados (valor, lead time, qualidade)." },
        { id: "m02-q102", nivel: "dificil", tipo: "discursiva", pergunta: "Descreva uma governança híbrida para o projeto “nova linha de embalagem + software MES”, indicando o que fica no preditivo, o que fica no ágil e como integrar.",
          respostaModelo: "**Preditivo:** obra, compra, instalação e comissionamento, com EAP, CPM, EVM e marcos (recesso). **Ágil (Scrum):** MES e painéis, com PO do cliente interno, backlog priorizado e sprints de 2 semanas. **Integração:** marcos comuns (interface com o CLP testada antes da partida), registro de riscos único, reunião semanal GP + PO, cronograma mestre com janelas para as entregas de software, critérios de aceitação conjuntos para a partida.",
          criterios: ["Coloca as partes físicas no preditivo com justificativa", "Coloca o software no ágil com PO definido", "Define pontos de integração (marcos, riscos, reuniões)", "Define aceite conjunto na partida"] },
        { id: "m02-q103", nivel: "dificil", tipo: "vf", pergunta: "Comparar a velocidade em story points de dois times diferentes é uma boa forma de saber qual é mais produtivo.",
          correta: false, explicacao: "Pontos são relativos a cada time; cada time calibra sua própria escala." }
      ]
    },

    /* ==================================================================
       LIÇÃO 9 — KANBAN E FLUXO
       ================================================================== */
    {
      id: "m02-l9",
      titulo: "Kanban e fluxo",
      icone: "📌",
      objetivos: {
        facil: ["Explicar o quadro Kanban e o limite de WIP", "Diferenciar lead time de cycle time", "Montar um quadro simples com as etapas do fluxo"],
        medio: ["Aplicar a Lei de Little para estimar lead time ou WIP", "Identificar gargalos no quadro e propor ações", "Comparar Scrum e Kanban"],
        dificil: ["Avaliar as hipóteses da Lei de Little e quando ela falha", "Usar métricas de fluxo (throughput, idade do item, CFD, percentis) para decidir", "Propor políticas explícitas e classes de serviço"]
      },
      prerequisitos: [{ texto: "Ágil e Scrum", licao: "m02-l8" }],
      resumo: {
        facil: "O **quadro Kanban** mostra as etapas do fluxo em colunas e os itens em cartões. O **limite de WIP** restringe quantos itens ficam em cada etapa: “pare de começar, comece a terminar”. **Lead time** vai do pedido à entrega; **cycle time**, do início do trabalho à entrega.",
        medio: "**Lei de Little:** WIP = throughput × lead time → lead time = WIP ÷ throughput. Menos WIP com o mesmo throughput = entregas mais rápidas. Fila acumulando antes de uma coluna indica **gargalo**. Scrum trabalha em sprints com papéis definidos; Kanban, em fluxo contínuo com WIP limitado.",
        dificil: "Little vale para **médias de longo prazo em sistema estável**. Use **percentis** para prever (“80% em até 7 dias”), acompanhe a **idade dos itens** e o **CFD**. **Políticas explícitas** e **classes de serviço** (padrão, data fixa, urgente) protegem o fluxo; urgências demais destroem a previsibilidade."
      },
      blocos: [
        { nivel: "facil", tipo: "contexto", titulo: "Por que isso importa", texto: "Equipes de engenharia (e estudantes!) sofrem com **muita coisa começada e pouca terminada**. Cada tarefa parada é valor que ainda não chegou ao cliente." },
        { nivel: "facil", tipo: "conceito", titulo: "Quadro Kanban", texto: "Colunas = etapas do fluxo (**A fazer → Fazendo → Validando → Feito**). Cartões = itens de trabalho.\nO quadro torna o trabalho **visível**: todos veem onde as coisas estão paradas." },
        { nivel: "facil", tipo: "conceito", titulo: "Limite de WIP", texto: "**WIP (work in progress)** = trabalho em progresso. O limite de WIP define o **máximo de cartões por coluna**.\nSe a coluna está cheia, ninguém puxa item novo: a equipe ajuda a **terminar** o que já começou.\n“Pare de começar, comece a terminar.”" },
        { nivel: "facil", tipo: "conceito", titulo: "Lead time × cycle time", texto: "**Lead time:** do **pedido** (item entra no sistema) até a **entrega**. É o tempo que o cliente sente.\n**Cycle time:** do **início do trabalho** até a entrega.\nPor isso, lead time ≥ cycle time." },
        { nivel: "facil", tipo: "bobo", titulo: "Os seis trabalhos da faculdade", texto: "Você começou 6 trabalhos ao mesmo tempo e nenhum termina. Limite a **2 simultâneos**: você troca menos de contexto e começa a entregar." },
        { nivel: "facil", tipo: "conexao", titulo: "De onde veio", texto: "O kanban nasceu na **Toyota** como cartão de reposição na produção (Módulo 6: Lean). O **Método Kanban** de David Anderson levou a ideia para o trabalho do conhecimento (engenharia, software, serviços)." },

        { nivel: "medio", tipo: "formula", titulo: "Lei de Little", texto: "**WIP = throughput × lead time** (L = λW)\n→ **lead time = WIP ÷ throughput**\nEx.: 20 itens em andamento e 5 entregues por semana → lead time médio de **4 semanas**. Limitando o WIP a 10 com o mesmo throughput → **2 semanas**.",
          legenda: [["WIP", "itens em andamento (média)"], ["throughput", "itens entregues por unidade de tempo (média)"], ["lead time", "tempo médio que um item passa no sistema"]] },
        { nivel: "medio", tipo: "conceito", titulo: "Gargalo no quadro", texto: "Sinal: **fila acumulando antes de uma coluna** (ex.: 8 cartões esperando “Validando”, que depende de um único engenheiro de qualidade).\nAções: o time **ajuda o gargalo** (swarming), **limita a entrada**, revisa a política da etapa ou adiciona capacidade.\n🟣 É a mesma lógica da Teoria das Restrições." },
        { nivel: "medio", tipo: "conceito", titulo: "Scrum × Kanban", texto: "**Scrum:** sprints de duração fixa, papéis e eventos definidos, compromisso com a Meta da Sprint.\n**Kanban:** fluxo contínuo, sem papéis obrigatórios, WIP limitado por etapa, prioridades podem mudar a qualquer momento (respeitando o WIP).\nMuitos times combinam os dois." },
        { nivel: "medio", tipo: "atencao", titulo: "Quadro não é Kanban", texto: "Um mural com colunas e **sem limite de WIP** é só uma lista de tarefas visual. O que transforma em sistema puxado é o **limite**." },

        { nivel: "dificil", tipo: "limitacao", titulo: "Hipóteses da Lei de Little", texto: "Demonstrada por **Little (1961)**, vale para **médias de longo prazo** num sistema **estável**: entradas ≈ saídas, WIP não crescendo sem parar e mesma unidade de medida.\n**Não** prevê o prazo de um item específico. Itens muito heterogêneos (um de 1 dia, outro de 3 meses) distorcem a leitura." },
        { nivel: "dificil", tipo: "conceito", titulo: "Métricas de fluxo", texto: "**Throughput:** itens por semana.\n**Idade do item em andamento:** alerta precoce de item “encalhado”.\n**CFD (diagrama de fluxo cumulativo):** faixa que se **alarga** = acúmulo nessa etapa (gargalo); distância horizontal entre as curvas ≈ lead time médio.\n**Previsão por percentis:** em vez da média, “85% dos itens terminam em até X dias”." },
        { nivel: "dificil", tipo: "exemplo", titulo: "Percentil × média", texto: "Cycle times de 10 itens (dias): 2, 3, 3, 4, 4, 5, 6, 7, 9, 15.\nMédia = 58 ÷ 10 = **5,8** (puxada pelo 15). Mediana = **4,5**.\n80% (8 de 10) terminaram em até **7 dias** → promessa mais honesta: “8 em cada 10 itens ficam prontos em até 7 dias”." },
        { nivel: "dificil", tipo: "conceito", titulo: "Políticas explícitas e classes de serviço", texto: "Regras escritas: quando um item está “pronto” para passar de coluna, quem puxa, limites de WIP.\n**Classes de serviço:** padrão (ordem de chegada), **data fixa** (ex.: exigência legal), **urgente/expedite** (fura a fila, limite de 1 por vez), intangível (melhorias).\nUrgências demais aumentam o lead time e a variabilidade dos outros itens." },
        { nivel: "dificil", tipo: "referencia", titulo: "Para aprofundar", texto: "• ANDERSON, D. J. *Kanban: Successful Evolutionary Change for Your Technology Business* (2010).\n• LITTLE, J. D. C. A proof for the queuing formula L = λW. *Operations Research*, 1961.\n• Módulo 6 (Lean) e Módulo 9 (filas) deste curso." }
      ],
      questoes: [
        { id: "m02-q104", nivel: "facil", tipo: "multipla", pergunta: "Qual o principal objetivo do limite de WIP?",
          opcoes: ["Deixar o quadro mais bonito", "Forçar a terminar antes de começar coisas novas, reduzindo o tempo de entrega", "Aumentar o número de tarefas em paralelo", "Controlar as horas trabalhadas"], correta: 1,
          explicacao: "Menos trabalho em paralelo = menos troca de contexto e entregas mais rápidas." },
        { id: "m02-q105", nivel: "facil", tipo: "vf", pergunta: "O lead time é sempre menor que o cycle time.",
          correta: false, explicacao: "É o contrário: o lead time inclui a espera antes de o trabalho começar, então lead time ≥ cycle time." },
        { id: "m02-q106", nivel: "facil", tipo: "ordenar", pergunta: "Ordene as colunas de um quadro Kanban simples:",
          itens: ["A fazer", "Fazendo", "Validando", "Feito"],
          explicacao: "As colunas representam as etapas reais do fluxo de trabalho." },
        { id: "m02-q107", nivel: "facil", tipo: "lacuna", pergunta: "WIP significa trabalho ___.",
          opcoes: ["em progresso", "em pausa", "entregue", "planejado"], correta: 0,
          explicacao: "Work in progress: itens já começados e ainda não terminados." },
        { id: "m02-q108", nivel: "medio", tipo: "calculo", pergunta: "Um time tem, em média, 20 itens em andamento e entrega 5 itens por semana. Qual o lead time médio (semanas)?",
          resposta: 4, tolerancia: 0, unidade: "semanas",
          resolucao: "Lei de Little: lead time = WIP ÷ throughput = 20 ÷ 5 = 4 semanas.",
          explicacao: "Vale para médias num sistema estável." },
        { id: "m02-q109", nivel: "medio", tipo: "calculo", pergunta: "O mesmo time (throughput de 5 itens/semana) passa a limitar o WIP em 10 itens. Qual o novo lead time médio (semanas)?",
          resposta: 2, tolerancia: 0, unidade: "semanas",
          resolucao: "Lead time = 10 ÷ 5 = 2 semanas.",
          explicacao: "Com o mesmo ritmo de entrega, menos WIP significa itens chegando mais rápido ao cliente." },
        { id: "m02-q110", nivel: "medio", tipo: "caso", contexto: "No quadro de engenharia, 8 cartões esperam na coluna “Validando”, que depende de um único engenheiro de qualidade. As outras colunas estão quase vazias.",
          pergunta: "Qual a ação mais adequada?",
          opcoes: ["Puxar mais itens para “Fazendo” para ninguém ficar parado", "O time ajuda na validação (swarming) e limita a entrada de novos itens", "Remover a coluna “Validando” do quadro", "Aumentar o limite de WIP de “Fazendo”"], correta: 1,
          explicacao: "O gargalo dita o ritmo do sistema. Produzir mais antes dele só aumenta a fila." },
        { id: "m02-q111", nivel: "medio", tipo: "ligar", pergunta: "Ligue a característica ao método:",
          pares: [["Sprints de duração fixa", "Scrum"], ["Fluxo contínuo com WIP limitado por etapa", "Kanban"], ["Papéis definidos (PO, SM, Developers)", "Scrum"], ["Mudar prioridades a qualquer momento, respeitando o WIP", "Kanban"]],
          explicacao: "Não são excludentes: muitos times combinam práticas dos dois." },
        { id: "m02-q112", nivel: "dificil", tipo: "multipla", pergunta: "Sobre as hipóteses da Lei de Little, é correto afirmar:",
          opcoes: ["Ela prevê o prazo exato de cada item", "Vale para médias de longo prazo em um sistema estável", "Exige que os tempos sigam distribuição normal", "Só vale em fábricas"], correta: 1,
          justificativas: ["É uma relação entre médias, não prevê um item individual.", "Correto: entradas ≈ saídas, WIP estável, unidades consistentes.", "Não exige distribuição específica.", "Vale para qualquer sistema com fluxo (filas, serviços, projetos)."],
          explicacao: "Little (1961) é geral, mas pede estabilidade e médias." },
        { id: "m02-q113", nivel: "dificil", tipo: "calculo", pergunta: "Cycle times de 10 itens (dias): 2, 3, 3, 4, 4, 5, 6, 7, 9, 15. Em até quantos dias terminaram 80% dos itens?",
          resposta: 7, tolerancia: 0, unidade: "dias",
          resolucao: "Ordenados: 2, 3, 3, 4, 4, 5, 6, 7, 9, 15.\n80% de 10 = 8 itens → o 8º valor = 7 dias.\n(A média seria 5,8, puxada pelo outlier de 15.)",
          explicacao: "Previsão por percentil é mais honesta que a média com dados assimétricos." },
        { id: "m02-q114", nivel: "dificil", tipo: "multipla", pergunta: "No diagrama de fluxo cumulativo (CFD), a faixa da etapa “Validando” está se alargando semana após semana. Isso indica:",
          opcoes: ["Que a validação está mais rápida", "Acúmulo de itens na validação: provável gargalo", "Que o throughput aumentou", "Que o lead time caiu"], correta: 1,
          explicacao: "Faixa larga = muitos itens parados naquela etapa. O lead time tende a subir." },
        { id: "m02-q115", nivel: "dificil", tipo: "discursiva", pergunta: "Numa equipe de engenharia, 40% dos cartões chegam marcados como “urgente”. Analise o efeito no fluxo e proponha políticas.",
          respostaModelo: "Urgências furam a fila e interrompem o trabalho em andamento: aumentam o **lead time e a variabilidade** dos itens normais, pioram a previsibilidade e, com tanta urgência, o conceito perde sentido. Políticas: **classe expedite com limite de 1** por vez; critérios **explícitos** (ex.: parada de linha, risco de segurança, custo do atraso); separar **data fixa** de urgente; revisar com as partes interessadas a origem das urgências (planejamento? falta de capacidade?) e acompanhar métricas antes e depois.",
          criterios: ["Explica o impacto no lead time e na previsibilidade", "Propõe limite para itens urgentes", "Define critérios explícitos de urgência", "Busca a causa-raiz das urgências"] },
        { id: "m02-q116", nivel: "dificil", tipo: "vf", pergunta: "Um quadro com colunas, mas sem limite de WIP, já é um sistema Kanban completo.",
          correta: false, explicacao: "Sem limite de WIP não há sistema puxado: é só visualização." }
      ]
    },

    /* ==================================================================
       LIÇÃO 10 — CHEFÃO: PROJETO NA FÁBRICA (integração)
       ================================================================== */
    {
      id: "m02-l10",
      titulo: "👾 Chefão: projeto na fábrica",
      icone: "👾",
      objetivos: {
        facil: ["Ordenar o ciclo de um projeto, do TAP ao encerramento", "Relacionar cada documento à pergunta que ele responde", "Conectar objetivos de desempenho (Módulo 1) ao projeto"],
        medio: ["Calcular compressão, prazo e desempenho em um mesmo caso", "Relacionar incerteza de prazo (Módulo 13) ao cronograma", "Dimensionar a contingência pelos riscos identificados"],
        dificil: ["Decidir com informação incompleta, declarando premissas", "Recomendar ao patrocinador com custos, riscos e alternativas", "Integrar escopo, prazo, custo, risco e pessoas em uma decisão"]
      },
      prerequisitos: [
        { texto: "Todas as lições do Módulo 2", licao: "m02-l1" },
        { texto: "Objetivos de desempenho (Módulo 1)", licao: "m01-l6" }
      ],
      resumo: {
        facil: "O ciclo do projeto: **TAP → escopo e EAP → cronograma → riscos e orçamento → execução e monitoramento → encerramento com lições aprendidas**. Cada documento responde uma pergunta: por quê, o quê, quando, o que pode dar errado, como estamos.",
        medio: "Na Doces Serra, o projeto de 19 dias precisa caber em 16: comprimir B (R$ 4.500). Mas com Te = 16 e a mesma incerteza, a chance de cumprir é **~50%**. Contingência = soma dos VMEs dos riscos identificados.",
        dificil: "Recomendação de engenharia = decisão + números + riscos + alternativas + premissas declaradas. Prometer exatamente o Te, com CPI abaixo de 1 e um fornecedor incerto, é uma aposta: negocie a janela, crie reservas, tenha um plano B e monitore os caminhos quase críticos."
      },
      blocos: [
        { tipo: "serio", titulo: "O caso: Doces Serra", texto: "A Doces Serra (Módulo 1) precisa de uma **nova linha de embalagem** para atender a rede de supermercados, que **multa atrasos**.\n• Rede do projeto: A 3 · B 10 · C 6 · D 4 · E 5 · F 2 dias (a mesma da lição de cronograma) → **19 dias**.\n• A parada da fábrica no recesso permite **16 dias**.\n• Compressão: B até −3 dias a R$ 1.500/dia; D até −1 dia a R$ 2.000/dia.\n• Incerteza do caminho crítico: σ ≈ 2 dias.\n• Riscos: atraso do fornecedor (30%, R$ 40 mil); falha no comissionamento (10%, R$ 100 mil); retrabalho elétrico (50%, R$ 6 mil)." },
        { nivel: "facil", tipo: "conceito", titulo: "✅ Checklist (Fácil)", texto: "• Projeto × operação\n• O que tem num TAP e quem assina\n• Escopo, exclusões e EAP\n• Caminho crítico e folga\n• Risco × problema\n• PV, EV, AC\n• Scrum 3-5-3 e limite de WIP" },
        { nivel: "medio", tipo: "conceito", titulo: "✅ Checklist (Médio)", texto: "• Matriz poder × interesse, SMART e RACI\n• Regra dos 100% e controle de mudanças\n• CPM completo (ida e volta)\n• PERT: te, σ e probabilidade\n• Crashing × fast tracking\n• VME e respostas a riscos\n• CPI, SPI, EAC\n• Velocidade e Lei de Little" },
        { nivel: "dificil", tipo: "conceito", titulo: "✅ Checklist (Difícil)", texto: "• Estrutura organizacional e autoridade\n• Premissa × restrição\n• Folga livre × total; recursos limitados\n• Compressão ótima; viés de convergência\n• Custo da resposta × VME; reservas\n• Escolha do EAC; TCPI; limites do EVM\n• Quando usar ágil, Kanban ou híbrido" },
        { nivel: "dificil", tipo: "dica", titulo: "Informação incompleta", texto: "No mundo real faltam dados. Uma boa resposta **declara as premissas** (“assumindo que a variância se mantém após a compressão…”), mostra os números e diz **o que mudaria a decisão**." }
      ],
      questoes: [
        { id: "m02-q117", nivel: "facil", tipo: "ordenar", pergunta: "Ordene as etapas do projeto da nova linha:",
          itens: ["Termo de abertura (TAP) assinado", "Escopo e EAP", "Cronograma e caminho crítico", "Plano de riscos e orçamento", "Execução e monitoramento (EVM)", "Encerramento e lições aprendidas"],
          explicacao: "Na prática, o planejamento é iterativo, mas essa é a espinha dorsal." },
        { id: "m02-q118", nivel: "facil", tipo: "ligar", pergunta: "Ligue o documento à pergunta que ele responde:",
          pares: [["TAP", "Por que fazer e com que autoridade?"], ["EAP", "O que exatamente será entregue?"], ["Cronograma (CPM)", "Quando termina e o que não pode atrasar?"], ["Registro de riscos", "O que pode dar errado (ou certo)?"]],
          explicacao: "Cada documento tem um papel; juntos formam o plano do projeto." },
        { id: "m02-q119", nivel: "facil", tipo: "vf", pergunta: "Instalar a nova linha é um projeto; operar a linha depois de instalada é operação.",
          correta: true, explicacao: "O projeto termina no aceite; a produção diária é operação (Módulo 1)." },
        { id: "m02-q120", nivel: "facil", tipo: "multipla", pergunta: "Como a rede de supermercados multa atrasos, qual objetivo de desempenho (Módulo 1) o projeto deve proteger acima de tudo?",
          opcoes: ["Confiabilidade (cumprir o prazo prometido)", "Flexibilidade de produto", "Custo mínimo a qualquer preço", "Variedade de embalagens"], correta: 0,
          explicacao: "Multa por atraso = cliente valoriza cumprir o prometido." },
        { id: "m02-q121", nivel: "medio", tipo: "calculo", pergunta: "O projeto dura 19 dias e a janela de parada permite 16. Quantos dias precisam ser comprimidos?",
          resposta: 3, tolerancia: 0, unidade: "dias",
          resolucao: "19 − 16 = 3 dias no caminho crítico (A-B-D-F).",
          explicacao: "Comprimir fora do caminho crítico não ajuda." },
        { id: "m02-q122", nivel: "medio", tipo: "calculo", pergunta: "Qual o custo mínimo (R$) para o projeto durar 15 dias? (B: até −3 d a R$ 1.500/dia; D: até −1 d a R$ 2.000/dia)",
          resposta: 6500, tolerancia: 0, unidade: "R$",
          resolucao: "3 dias em B: 3 × 1.500 = 4.500 → 16 dias.\nMais 1 dia: B esgotou; D (nos dois caminhos longos) = 2.000.\nTotal = 6.500 → 15 dias.",
          explicacao: "Sempre a atividade crítica mais barata primeiro, reavaliando o caminho crítico." },
        { id: "m02-q123", nivel: "medio", tipo: "calculo", pergunta: "Após comprimir para Te = 16 dias (mantendo σ = 2), qual a probabilidade (%) de terminar dentro dos 16 dias da janela?",
          resposta: 50, tolerancia: 0.5, unidade: "%",
          resolucao: "Z = (16 − 16) ÷ 2 = 0 → P = 50%.",
          explicacao: "Encaixar o Te exatamente na janela é uma moeda ao ar (Módulo 13 + PERT)." },
        { id: "m02-q124", nivel: "medio", tipo: "calculo", pergunta: "Na semana 4: PV = R$ 180 mil, EV = R$ 150 mil, AC = R$ 170 mil. Qual o SPI?",
          resposta: 0.833, tolerancia: 0.002, unidade: "",
          resolucao: "SPI = EV ÷ PV = 150 ÷ 180 ≈ 0,833",
          explicacao: "Atrasado. E o CPI = 150 ÷ 170 ≈ 0,88 também está abaixo de 1." },
        { id: "m02-q125", nivel: "medio", tipo: "calculo", pergunta: "Riscos identificados: (30%, R$ 40 mil), (10%, R$ 100 mil) e (50%, R$ 6 mil). Qual a reserva de contingência pelo VME (R$)?",
          resposta: 25000, tolerancia: 0, unidade: "R$",
          resolucao: "0,30 × 40.000 = 12.000\n0,10 × 100.000 = 10.000\n0,50 × 6.000 = 3.000\nTotal = R$ 25.000",
          explicacao: "Contingência cobre riscos identificados; o não identificado vai para a reserva gerencial." },
        { id: "m02-q126", nivel: "dificil", tipo: "caso", contexto: "Com a compressão, Te = 16 dias = exatamente a janela do recesso. O fornecedor tem 30% de chance de atrasar. O diretor pergunta: “Posso prometer 16 dias à rede?”",
          pergunta: "Qual a melhor recomendação?",
          opcoes: ["Sim, prometa 16 dias: o cálculo fecha", "Não prometer 16 como certo: a chance é ~50%. Negociar janela maior ou turnos extras no recesso, criar reservas, ter plano B (instalação em duas etapas) e monitorar os caminhos quase críticos", "Não comprimir nada e prometer 19 dias sem falar com a rede", "Cancelar o projeto"], correta: 1,
          justificativas: ["Ignora a incerteza: é uma moeda ao ar, com multa em jogo.", "Reconhece o risco, age sobre prazo e risco e protege a confiabilidade.", "Quebra a restrição da janela e a relação com o cliente.", "Desproporcional: há alternativas."],
          explicacao: "Recomendação de engenharia = números + riscos + alternativas." },
        { id: "m02-q127", nivel: "dificil", tipo: "discursiva", pergunta: "Escreva um relatório executivo (até 6 linhas) ao diretor da Doces Serra com recomendação, custo, riscos, alternativas e premissas.",
          respostaModelo: "**Recomendação:** aprovar a compressão da compra (R$ 4.500) e preparar alternativa de instalação em duas etapas. **Prazo:** 16 dias com ~50% de chance; P90 ≈ 18,6 dias (16 + 1,28 × 2). **Riscos:** fornecedor (VME R$ 12 mil) e comissionamento (VME R$ 10 mil); contingência de R$ 25 mil. **Ações:** entregas escalonadas com o fornecedor; turno extra no recesso; testes antecipados. **Premissas:** σ mantido após a compressão; janela de 16 dias fixa. **Decisão pedida:** aprovar custos e autorizar negociação de 2–3 dias extras com a rede.",
          criterios: ["Dá uma recomendação clara", "Apresenta custo e prazo com probabilidade", "Lista os principais riscos e a contingência", "Declara premissas e pede uma decisão objetiva"] },
        { id: "m02-q128", nivel: "dificil", tipo: "vf", pergunta: "Se o CPI está em 0,88 na metade do projeto, é realista prometer terminar dentro do orçamento original sem nenhuma mudança.",
          correta: false, explicacao: "O TCPI necessário ficaria bem acima de 1. Sem mudança (escopo, eficiência, orçamento), a tendência é estourar." }
      ]
    }
  ],

  /* ------------------------------------------------------------ */
  glossario: [
    { termo: "Projeto", definicao: "Esforço temporário empreendido para criar um produto, serviço ou resultado único (Guia PMBOK)." },
    { termo: "Operação", definicao: "Trabalho contínuo e repetitivo que sustenta o negócio." },
    { termo: "Patrocinador", definicao: "Quem financia e responde pelo projeto na organização; emite o TAP e decide nos conflitos maiores." },
    { termo: "Parte interessada (stakeholder)", definicao: "Pessoa, grupo ou organização que afeta, é afetada ou se percebe afetada pelo projeto." },
    { termo: "TAP (Termo de Abertura do Projeto)", definicao: "Documento que autoriza formalmente o projeto e dá ao gerente autoridade para usar recursos." },
    { termo: "Premissa", definicao: "Algo considerado verdadeiro sem comprovação; é fonte potencial de risco." },
    { termo: "Restrição", definicao: "Limite imposto ao projeto (prazo, orçamento, janela de parada, norma)." },
    { termo: "Objetivo SMART", definicao: "Objetivo específico, mensurável, atingível, relevante e com prazo." },
    { termo: "Matriz RACI", definicao: "Define para cada atividade quem é Responsável, Aprovador (um só), Consultado e Informado." },
    { termo: "Escopo do produto", definicao: "Características e funções do que será entregue." },
    { termo: "Escopo do projeto", definicao: "Trabalho necessário para entregar o produto com as características especificadas." },
    { termo: "EAP (WBS)", definicao: "Decomposição hierárquica de todo o trabalho do projeto, orientada a entregas." },
    { termo: "Pacote de trabalho", definicao: "Último nível da EAP, onde se estimam custo e duração e se atribui um responsável." },
    { termo: "Regra dos 100%", definicao: "A EAP contém todo o trabalho do projeto (inclusive o gerenciamento) e nada além." },
    { termo: "Linha de base", definicao: "Versão aprovada do escopo, cronograma ou custos, usada como referência para medir desvios." },
    { termo: "Scope creep", definicao: "Crescimento descontrolado do escopo, sem ajuste de prazo, custo e riscos." },
    { termo: "Gold plating", definicao: "Entregar mais do que o combinado por iniciativa da equipe, sem solicitação." },
    { termo: "Caminho crítico", definicao: "Sequência mais longa de atividades dependentes; define a duração do projeto; folga total zero." },
    { termo: "Folga total", definicao: "Quanto uma atividade pode atrasar sem atrasar o projeto (LS − ES)." },
    { termo: "Folga livre", definicao: "Quanto uma atividade pode atrasar sem atrasar nenhum sucessor (menor ES dos sucessores − EF)." },
    { termo: "ES, EF, LS, LF", definicao: "Início e término mais cedo; início e término mais tarde, calculados no CPM." },
    { termo: "Lag e lead", definicao: "Lag: espera entre atividades dependentes. Lead: antecipação do sucessor." },
    { termo: "PERT", definicao: "Técnica de três pontos: te = (a + 4m + b) ÷ 6 e σ = (b − a) ÷ 6." },
    { termo: "Crashing", definicao: "Comprimir o cronograma adicionando recursos às atividades críticas; aumenta o custo." },
    { termo: "Fast tracking", definicao: "Comprimir o cronograma fazendo em paralelo atividades antes sequenciais; aumenta o risco." },
    { termo: "Viés de convergência", definicao: "Tendência do PERT de subestimar o prazo quando vários caminhos paralelos incertos convergem." },
    { termo: "Risco", definicao: "Evento incerto que, se ocorrer, afeta os objetivos do projeto; pode ser ameaça ou oportunidade." },
    { termo: "VME", definicao: "Valor monetário esperado: probabilidade × impacto." },
    { termo: "Reserva de contingência", definicao: "Recursos para riscos identificados; faz parte da linha de base de custos." },
    { termo: "Reserva gerencial", definicao: "Recursos para trabalho não identificado; fora da linha de base, liberada pela direção." },
    { termo: "PV, EV, AC", definicao: "Valor planejado, valor agregado (trabalho feito valorizado pelo orçamento) e custo real." },
    { termo: "CPI e SPI", definicao: "Índices de desempenho de custo (EV ÷ AC) e de prazo (EV ÷ PV)." },
    { termo: "BAC, EAC, ETC, VAC", definicao: "Orçamento no término, estimativa no término, estimativa para terminar e variação no término." },
    { termo: "TCPI", definicao: "Eficiência de custo necessária no restante do projeto para cumprir uma meta de custo: (BAC − EV) ÷ (BAC − AC)." },
    { termo: "Manifesto Ágil", definicao: "Declaração de 2001 com 4 valores e 12 princípios para desenvolvimento ágil." },
    { termo: "Product Owner", definicao: "Responsável por maximizar o valor do produto e ordenar o Product Backlog." },
    { termo: "Scrum Master", definicao: "Responsável pela eficácia do time Scrum, ensinando e facilitando o uso do Scrum." },
    { termo: "Sprint", definicao: "Ciclo de duração fixa, de até um mês, que contém os demais eventos do Scrum." },
    { termo: "Definição de Pronto", definicao: "Padrão de qualidade que todo incremento precisa atender." },
    { termo: "Velocidade", definicao: "Pontos concluídos por sprint; serve para previsão do próprio time, não como meta." },
    { termo: "WIP", definicao: "Trabalho em progresso: itens começados e ainda não terminados." },
    { termo: "Lead time e cycle time", definicao: "Lead: do pedido à entrega. Cycle: do início do trabalho à entrega." },
    { termo: "Throughput", definicao: "Quantidade de itens entregues por unidade de tempo." },
    { termo: "Lei de Little", definicao: "Em sistema estável: WIP médio = throughput × lead time médio." },
    { termo: "CFD", definicao: "Diagrama de fluxo cumulativo: mostra o acúmulo de itens por etapa ao longo do tempo." }
  ],

  flashcards: [
    { id: "m02-f01", frente: "Projeto é TUP", verso: "Temporário, Único e de elaboração Progressiva." },
    { id: "m02-f02", frente: "Projeto × operação × processo", verso: "Projeto: temporário e único. Operação: contínua e repetitiva. Processo: atividades que transformam entradas em saídas (existe nos dois)." },
    { id: "m02-f03", frente: "5 grupos de processos (PMBOK 6ª)", verso: "Iniciação, Planejamento, Execução, Monitoramento e Controle, Encerramento." },
    { id: "m02-f04", frente: "PMBOK 7ª edição", verso: "12 princípios e 8 domínios de desempenho, orientados a valor." },
    { id: "m02-f05", frente: "Para que serve o TAP?", verso: "Autorizar formalmente o projeto e dar autoridade ao GP. Assinado pelo patrocinador." },
    { id: "m02-f06", frente: "Matriz poder × interesse", verso: "Alto/alto: gerenciar de perto. Alto poder: manter satisfeito. Alto interesse: manter informado. Baixo/baixo: monitorar." },
    { id: "m02-f07", frente: "RACI", verso: "Responsável, Aprovador (só um), Consultado (antes), Informado (depois)." },
    { id: "m02-f08", frente: "Premissa × restrição", verso: "Premissa: suposição não comprovada (vira risco). Restrição: limite imposto." },
    { id: "m02-f09", frente: "Regra dos 100% da EAP", verso: "Todo o trabalho do projeto (inclusive gerenciamento), nada a mais e nada a menos." },
    { id: "m02-f10", frente: "Scope creep × gold plating", verso: "Scope creep: escopo cresce sem controle. Gold plating: equipe entrega a mais por conta própria." },
    { id: "m02-f11", frente: "CPM: ida e volta", verso: "Ida pega o MAIOR EF dos predecessores; volta pega o MENOR LS dos sucessores." },
    { id: "m02-f12", frente: "Folga total × folga livre", verso: "Total: LS − ES (não atrasa o projeto). Livre: menor ES dos sucessores − EF (não atrasa ninguém)." },
    { id: "m02-f13", frente: "PERT: te e σ", verso: "te = (a + 4m + b) ÷ 6; σ = (b − a) ÷ 6. No caminho, somam-se as variâncias." },
    { id: "m02-f14", frente: "Prometer o Te do projeto dá quanto de chance?", verso: "Cerca de 50%." },
    { id: "m02-f15", frente: "Crashing × fast tracking", verso: "Crashing: mais recurso, mais custo. Fast tracking: paralelizar, mais risco." },
    { id: "m02-f16", frente: "Viés de convergência", verso: "PERT subestima o prazo quando há caminhos paralelos quase críticos. Solução: Monte Carlo." },
    { id: "m02-f17", frente: "Formato de um risco", verso: "Devido a [causa], pode ocorrer [evento], o que causaria [efeito]." },
    { id: "m02-f18", frente: "Respostas a ameaças", verso: "Evitar, transferir, mitigar, aceitar, escalar." },
    { id: "m02-f19", frente: "Respostas a oportunidades", verso: "Explorar, compartilhar, melhorar, aceitar, escalar." },
    { id: "m02-f20", frente: "VME", verso: "Probabilidade × impacto." },
    { id: "m02-f21", frente: "Contingência × gerencial", verso: "Contingência: riscos identificados, dentro da linha de base. Gerencial: desconhecidos, fora dela." },
    { id: "m02-f22", frente: "PV, EV, AC", verso: "Planejei, Entreguei, Achei na conta." },
    { id: "m02-f23", frente: "CPI e SPI", verso: "CPI = EV ÷ AC; SPI = EV ÷ PV. Abaixo de 1 = ruim." },
    { id: "m02-f24", frente: "EAC (desempenho continua)", verso: "EAC = BAC ÷ CPI; ETC = EAC − AC; VAC = BAC − EAC." },
    { id: "m02-f25", frente: "TCPI", verso: "(BAC − EV) ÷ (BAC − AC): eficiência necessária no restante." },
    { id: "m02-f26", frente: "Por que o SPI engana no fim?", verso: "Tende a 1 quando tudo termina, mesmo com atraso. Use Earned Schedule." },
    { id: "m02-f27", frente: "4 valores do Manifesto Ágil", verso: "Indivíduos e interações; software funcionando; colaboração com o cliente; responder a mudanças." },
    { id: "m02-f28", frente: "Scrum 3-5-3", verso: "PO, SM, Developers; Sprint, Planning, Daily, Review, Retro; Product Backlog, Sprint Backlog, Incremento." },
    { id: "m02-f29", frente: "Compromissos dos artefatos Scrum", verso: "Meta do Produto, Meta da Sprint, Definição de Pronto." },
    { id: "m02-f30", frente: "Lei de Little", verso: "WIP = throughput × lead time (médias, sistema estável)." },
    { id: "m02-f31", frente: "Lead time × cycle time", verso: "Lead: do pedido à entrega. Cycle: do início do trabalho à entrega." },
    { id: "m02-f32", frente: "Lei de Goodhart", verso: "Quando uma medida vira meta, deixa de ser uma boa medida." }
  ]
});
