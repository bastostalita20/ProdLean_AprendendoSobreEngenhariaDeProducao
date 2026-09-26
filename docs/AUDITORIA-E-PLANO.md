# 🔎 ProdLean — Auditoria, plano de aprofundamento e sistema de níveis

> Documento de trabalho da reestruturação acadêmica do app. Atualizado a cada entrega.
> Legenda de prioridade: 🔴 alta · 🟡 média · 🟢 baixa.

---

## ETAPA 1 — Auditoria técnica

### 1.1 Arquitetura encontrada
| Parte | Arquivo | Função |
|---|---|---|
| App (HTML + CSS + JS, sem dependências) | `app/index.html` | Telas, rotas por `#`, gamificação, revisão espaçada, quiz, voz, backup |
| Índice de conteúdo | `app/conteudo/indice.js` | Lista dos arquivos de módulo (lido também pelo modo offline) |
| Conteúdo (dados puros) | `app/conteudo/modulo-XX.js` | Lições → blocos → questões; flashcards; resumo em áudio |
| Offline (PWA) | `app/sw.js`, `app/manifest.json` | Cache de todos os arquivos no 1º acesso |
| Progresso | `localStorage` (`engprod_play_v1`) | XP, ofensiva, vidas, lições, estatísticas por questão, revisões, cartas, conquistas |
| Testes | `testes/teste-app.js` | Teste ponta a ponta com navegador (Playwright) |

**Fluxo de aprendizagem (antes):** trilha → lição (blocos um a um → exercícios, erro volta para o fim e custa ❤️) → resultado → revisão espaçada D+1…D+30 das questões erradas → flashcards → quiz.

### 1.2 O que já funcionava bem (preservado)
Trilha com desbloqueio, chunking em blocos curtos, recuperação ativa (“Antes de ler…”), 7 tipos de exercício com explicação, revisão espaçada, flashcards com autoavaliação, Quiz Relâmpago solo/grupo, voz em português, backup, modo offline, validador de conteúdo e teste automático.

### 1.3 Problemas encontrados
| # | Problema | Prioridade | Por quê |
|---|---|---|---|
| 1 | **Um único nível de profundidade** por lição | 🔴 | O mesmo texto não atende o 1º e o 9º período; o aluno avançado não encontra hipóteses, limitações nem decisões. |
| 2 | Lições **sem objetivos de aprendizagem** explícitos | 🔴 | O aluno não sabe o que deve conseguir fazer; avaliação sem alvo. |
| 3 | **Pré-requisitos** não indicados | 🟡 | Ex.: PERT depende de normal/Z; sem aviso, o aluno trava. |
| 4 | Sem **resumo** ao fim da lição nem **glossário** | 🟡 | Dificulta revisão e leitura de termos técnicos. |
| 5 | Fórmulas **sem legenda** das variáveis | 🟡 | Contraria o rigor pedido (toda fórmula com variáveis e condições). |
| 6 | Múltipla escolha só explicava a correta | 🟡 | Distratores bem explicados ensinam tanto quanto a resposta certa. |
| 7 | Sem **questões discursivas** (análise, justificativa) | 🔴 | Nível avançado exige argumentar decisões, não só marcar. |
| 8 | Indicador “acerto por módulo” podia ser lido como **domínio** | 🟡 | Concluir ≠ acertar ≠ reter; indicador enganoso. |
| 9 | Testes identificavam questões pelo texto (frágil) | 🟢 | Colisões entre questões parecidas. |

---

## ETAPA 2 — Avaliação pedagógica dos módulos existentes

### Módulo 1 — Fundamentos (9 lições, 47 questões, nível único)
| Lição | Tema | Profundidade atual | O que falta (principalmente p/ nível Difícil) | Prioridade |
|---|---|---|---|---|
| l1 | O que faz o EP | Boa introdução | Atribuições profissionais (CONFEA), campos de atuação com casos | 🟢 |
| l2 | História | Boa (linha do tempo) | Crítica ao taylorismo/fordismo; transição massa → enxuta → personalização em massa | 🟡 |
| l3 | Áreas ABEPRO | Boa | Subáreas e interfaces entre áreas em um problema real | 🟢 |
| l4 | Sistema de produção | Boa | Pacote de valor, servitização, variabilidade e visibilidade (4 Vs de Slack) | 🟡 |
| l5 | Tipos de processo | Boa | **Matriz produto-processo** (Hayes & Wheelwright) e consequências de sair da diagonal | 🔴 |
| l6 | Objetivos e decisões | Boa | **Trade-offs** entre objetivos, estratégia de operações, efeitos internos × externos dos objetivos | 🔴 |
| l7 | Produtividade | Boa com cálculos | Produtividade **multifatorial/total** em R$, eficiência × utilização, armadilhas de indicadores | 🟡 |
| l8 | Caso Doces Serra | Boa | Versão com informação incompleta e justificativa escrita | 🟡 |
| l9 | Chefão | Boa (intercalação) | Discursivas | 🟢 |

**Erros conceituais:** nenhum encontrado. Pontos de atenção: afirmações históricas estão corretas, mas sem referências; convém adicionar “Para aprofundar” (Slack, Chambers & Johnston; Hayes & Wheelwright).
**Nível recomendado atual:** equivale ao **Fácil + parte do Médio**.

### Módulo 13 — Estatística (12 lições, 61 questões, nível único)
| Lição | Tema | Profundidade atual | O que falta | Prioridade |
|---|---|---|---|---|
| l1–l2 | Amostra, variáveis, gráficos | Boa | Tipos de amostragem (aleatória simples, estratificada, sistemática), vieses | 🟡 |
| l3–l5 | Posição e dispersão | Boa, com cálculos | Assimetria/curtose com interpretação, dados agrupados | 🟢 |
| l7 | Probabilidade | Boa | Probabilidade condicional e Bayes (ex.: inspeção com falso positivo) | 🔴 |
| l8 | Normal e Z | Boa | Verificar normalidade (histograma, gráfico de probabilidade normal) | 🟡 |
| l9 | IC e amostra | Boa | IC com **t de Student** calculado, IC para proporção, IC × intervalo de predição | 🔴 |
| l10 | Testes de hipóteses | Boa (conceito + t) | Teste para proporção, duas amostras, **significância estatística × relevância prática**, pressupostos, ANOVA (introdução) | 🔴 |
| l11 | Correlação e regressão | Boa | Resíduos, pressupostos, regressão múltipla (noção), intervalo de previsão | 🔴 |
| l12 | Chefão | Boa | Discursivas | 🟡 |

**Erros conceituais:** nenhum encontrado; as limitações (t de Student para n pequeno, extrapolação, correlação ≠ causa) já são sinalizadas.
**Prioridade geral:** 🔴 **alta**, porque é a base quantitativa de PCP, Qualidade, Logística e PO, e o nível Difícil é o que prepara para TCC.

### Módulo 2 — Gestão de Projetos (novo)
Construído já no padrão novo (ver Etapa 4).

---

## Cobertura curricular (auditoria das áreas pedidas)

| Área / tema | Onde entra | Situação |
|---|---|---|
| Sistemas de produção, PCP, previsão, planejamento agregado, MPS, MRP, capacidade, sequenciamento | M3 | 🟡 planejado (cronograma D10–D12). **Incluir:** planejamento agregado, S&OP, lead time e gargalo |
| Teoria das Restrições, sistemas puxados × empurrados | M3 + M6 | ➕ **adicionar** TOC (5 passos, tambor-pulmão-corda) ao plano do M6 |
| Qualidade: TQM, PDCA, DMAIC, ferramentas, CEP, capabilidade, ISO 9001 | M5 | 🟡 planejado. **Incluir:** Cp/Cpk no Médio/Difícil e **custos da qualidade** (prevenção, avaliação, falhas) |
| PO: modelagem, PL, Simplex, dualidade/sensibilidade, transporte, designação, inteira, não linear, filas, simulação | M9 | 🟡 planejado. **Incluir:** dualidade/preço-sombra, programação inteira e noção de não linear no Difícil |
| Logística: estoques, compras, armazenagem, transporte, nível de serviço, riscos, resiliência | M7 | 🟡 planejado. **Incluir:** nível de serviço e risco/resiliência da cadeia |
| Engenharia econômica e custos: VPL, TIR, payback, depreciação, custeio | M8 | 🟡 planejado. **Incluir:** depreciação e efeito fiscal no fluxo de caixa |
| Gestão de projetos: EAP, cronograma, CPM/PERT, riscos, custos, EVM, ágil | M2 | ✅ **implementado em 3 níveis** |
| Organizacional e pessoas: estrutura, processos, KPIs, equipes, comunicação | M11 (+ M2 l1/l2) | 🟡 planejado. **Incluir:** gestão de equipes e comunicação |
| Engenharia do trabalho: ergonomia, tempos e métodos, segurança, fatores humanos | M4 + M10 | 🟡 planejado |
| Dados e Indústria 4.0: qualidade de dados, análise exploratória, IoT, sistemas ciberfísicos, IA, rastreabilidade, riscos de modelos | M12 + M13 | ➕ **lacuna**: proposta de um **Módulo 14 — Dados e Analytics** (ver decisões pendentes) |

---

## ETAPA 3 — Plano de reestruturação

**Princípio:** não reescrever tudo de uma vez. Primeiro o motor e um módulo modelo (M2), depois os módulos existentes por prioridade, e cada módulo novo já nasce no padrão.

**Padrão de cada lição (implementado):**
1. Capa: 🎯 objetivos observáveis por nível · 🧩 pré-requisitos com link para revisão · ⏱️ tempo estimado · 📖 glossário.
2. 🏭 Contexto (por que importa).
3. Fundamentação em blocos curtos, com 🔵 fórmulas **com legenda**, 🧮 exemplos resolvidos, 🛠️ passo a passo de ferramentas e ⚖️ limitações e trade-offs.
4. 😂 Exemplo simples (Fácil) → 🏭 caso real (Médio/Difícil).
5. Exercícios coerentes com o nível (Fácil: identificar e explicar; Médio: aplicar e interpretar; Difícil: modelar, justificar e avaliar alternativas), com justificativa de cada alternativa e discursivas com resposta-modelo e critérios.
6. 📝 Resumo por nível e 📚 referências verificáveis.

**Ordem proposta das próximas entregas:**
| Ordem | Entrega | Motivo |
|---|---|---|
| 1 | **M4 Métodos** e **M3 PCP** já em 3 níveis (seguindo o cronograma) | Continuidade do curso |
| 2 | **Aprofundar M13** (Difícil: Bayes, IC t e proporção, testes de 2 amostras e proporção, ANOVA introdutória, resíduos) | 🔴 Base quantitativa |
| 3 | **Aprofundar M1** (matriz produto-processo, trade-offs, produtividade multifatorial) | 🟡 |
| 4 | M6, M5, M7, M8, M9, M10, M11, M12 em 3 níveis, com as inclusões da tabela de cobertura | Cronograma |
| 5 | (Se aprovado) M14 Dados e Analytics | Lacuna curricular |

---

## ETAPA 4 — Implementação (entrega atual)

### Mudança de arquitetura (aditiva, sem quebrar nada)
Os níveis foram implementados como **campos opcionais nos dados**, sem duplicar conteúdo:
- `nivel: "facil" | "medio" | "dificil"` em blocos e questões (sem `nivel` = aparece em todos os níveis da lição);
- `objetivos`, `resumo` (por nível) e `prerequisitos` na lição; `glossario` no módulo;
- lições sem nenhum item com nível continuam funcionando como **“nível único”** (M1 e M13 hoje).

### Funcionalidades novas
| Funcionalidade | Onde |
|---|---|
| **Capa da lição** com escolha de nível, objetivos, pré-requisitos (com link), tempo e glossário | `#licao/<id>` |
| Lição por nível, com selo do nível e XP maior nos níveis mais altos (10/15/20) | `#licao/<id>/<nivel>` |
| Progresso **por nível** (🌱🔧🧠 acendem na trilha e na faixa do módulo) e melhor % por nível | Trilha, capa |
| **Resumo da lição** ao final + recomendação honesta (≥ 80%: sugerir próximo nível; < 60%: revisar/refazer) | Resultado |
| **Nível padrão** nas configurações (também filtra o Quiz Relâmpago) | ⚙️ |
| **Glossário** com busca (sem acento), por módulo ou geral | `#glossario` |
| Blocos novos: contexto, exemplo resolvido, passo a passo, limitações, referências; fórmulas com **legenda** | Lições |
| Questão **discursiva** com resposta-modelo, critérios e autoavaliação (parcial volta na revisão) | Lições |
| **Justificativa de cada alternativa** nas múltiplas escolhas | Feedback |
| Perfil com **3 medidas separadas**: lições concluídas · acerto nos exercícios · **retenção confirmada** (acertou de novo ≥ 7 dias depois) + recomendações | 👤 |
| Conquista “Raciocínio de Engenheiro” (5 lições no Difícil) | 🏅 |
| Apostila gerada automaticamente dos dados (uma fonte só) | `testes/gerar-apostila.js` |

### Módulo 2 — Gestão de Projetos (novo, 3 níveis)
10 lições: projeto × operação · partes interessadas e TAP · escopo e EAP · cronograma e CPM · estimativas, PERT e compressão · riscos · custos e valor agregado · ágil e Scrum · Kanban e fluxo · chefão integrador.
**128 questões** (40 Fácil, 45 Médio, 43 Difícil), das quais 34 de cálculo e 10 discursivas; **45 termos** no glossário; **32 flashcards**; referências verificáveis (PMBOK 6ª e 7ª, Guia do Scrum 2020, Manifesto Ágil, Goldratt, Brooks, Little, Lipke, Anderson, Hubbard, Doran).
Exemplos numéricos são **ilustrativos** e estão sinalizados como tal.

### Arquivos alterados
- `app/index.html` — motor de níveis, capa, glossário, discursiva, justificativas, legenda de fórmulas, perfil, configurações.
- `app/conteudo/modulo-02.js` (novo) · `app/conteudo/indice.js` · `app/sw.js` (cache v4).
- `curso/03-modulo-02-projetos.md` (apostila gerada) · `testes/teste-app.js` · `testes/gerar-apostila.js` (novo) · `app/PROJETO.md` · este documento.

### Entrega 2 — Módulos 4 e 14, banco de questões e números sorteados
| Item | O que foi feito |
|---|---|
| **Módulo 4 — Engenharia de Métodos** | 7 lições × 3 níveis: estudo de métodos, cronoanálise, ritmo/tolerâncias/tempo padrão, eficiência e curva de aprendizagem, takt e balanceamento, gargalo e TOC, chefão |
| **Módulo 14 — Dados e Analytics** (novo) | 8 lições × 3 níveis: qualidade de dados e LGPD, planilhas, indicadores/OEE/Simpson, SQL e Python, dashboards e modelo estrela, IoT/ISA-95/rastreabilidade, IA (matriz de confusão, custo dos erros, drift), chefão. Trilha paralela após o M13 |
| **Banco de questões** | Sorteio de questões por lição, com prioridade para as não vistas e as erradas, variando os tipos. Configurável (4, 6, 8, todas) |
| **Números sorteados** | Motor `app/parametros.js` + 54 modelos de cálculo nos 5 módulos; 31 questões conceituais extras (M1 e M13) |
| **Cronograma** | 31 dias (M14 no D29), plano pós-curso atualizado |
| **Total** | 5 módulos, 46 lições, **505 questões** (54 com números que mudam a cada vez) |

---

## ETAPA 5 — Validação
Teste automático (`testes/teste-app.js`), todos passando (entrega 2 incluída: sorteio de questões, variação dos números, trilha paralela do M14, 46 lições em todos os níveis):
- 31 lições, **todas as lições em todos os níveis** (M2: 30 combinações lição × nível), errando de propósito em 7 tipos de questão, incluindo discursiva;
- vidas zerando e recuperando; revisão D+1 → D+30 até “dominada”; retenção confirmada; congelamento da ofensiva;
- capa: 3 níveis, seleção, objetivos, pré-requisitos, preferência lembrada; resultado com recomendação e resumo;
- quiz respeitando o nível padrão; quiz perfeito; grupo com 3 jogadores; flashcards; glossário com busca;
- todas as telas sem erro de JavaScript; offline no 1º acesso com os 3 módulos; abertura por arquivo;
- sem rolagem horizontal em 320 px, tablet e desktop.

Validação técnica do conteúdo: todos os cálculos do M2 foram conferidos (CPM ida/volta, folga livre, compressão ótima, PERT/Z, VME, EVM/EAC/TCPI, Little, percentis).

---

## Pendências e decisões
| Item | Tipo |
|---|---|
| **Aprofundar M13 e M1 em 3 níveis** (tabelas da Etapa 2) | Próximas entregas |
| ~~Criar o Módulo 14 — Dados e Analytics~~ | ✅ Feito (entrega 2) |
| Aumentar as questões **conceituais** (não só de cálculo) nos bancos dos módulos 2, 4 e 14, para o sorteio variar mais também nelas | Próximas entregas |
| Incluir as lacunas da tabela de cobertura nos módulos planejados (TOC, S&OP, custos da qualidade, dualidade, programação inteira, resiliência, depreciação) | Será feito em cada módulo |
| Tempo estimado na capa é aproximado (≈ 0,8 min por bloco + 0,9 min por exercício) | Ajustar com o uso real |
| Discursivas são autoavaliadas (não há correção automática de texto) | Limitação consciente |
