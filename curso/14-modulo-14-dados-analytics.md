# 📊 Módulo 14 — Dados e Analytics

> 📄 Apostila gerada automaticamente a partir de `app/conteudo/modulo-14.js` (a mesma fonte do app).
> Exemplos numéricos são ilustrativos, criados para fins didáticos.

## 🎯 Objetivo do módulo

Coletar, tratar, analisar e comunicar dados de produção com qualidade, usando planilhas, SQL, Python, BI e modelos preditivos com senso crítico.

## 🗺️ Lições

| # | Lição | Níveis |
|---|---|---|
| 1 | Dados na produção: fontes e qualidade | 🌱 🔧 🧠 |
| 2 | Planilhas que não mentem | 🌱 🔧 🧠 |
| 3 | Indicadores e análise exploratória | 🌱 🔧 🧠 |
| 4 | SQL e Python para engenheiros | 🌱 🔧 🧠 |
| 5 | Visualização e dashboards | 🌱 🔧 🧠 |
| 6 | IoT, automação e rastreabilidade | 🌱 🔧 🧠 |
| 7 | IA e modelos preditivos | 🌱 🔧 🧠 |
| 8 | 👾 Chefão: do dado à decisão | 🌱 🔧 🧠 |

## 🎧 Resumo para ouvir

> Lixo entra, lixo sai: antes de analisar, verifique a qualidade dos dados. Completude, exatidão, consistência, atualidade, validade e unicidade. Corrigir na origem é melhor que limpar depois. Numa planilha bem feita, cada variável é uma coluna e cada observação é uma linha. Não misture dado com relatório. Indicador bom tem fórmula, fonte, frequência, dono e meta. OEE é disponibilidade vezes performance vezes qualidade. Média de razões não é razão das somas, e o paradoxo de Simpson mostra que o total pode contar outra história. SQL: selecione, filtre, agrupe e junte tabelas; cuidado com junções que duplicam linhas. Dashboard responde uma pergunta para uma decisão. Medida calcula no contexto; coluna calculada, linha a linha. Do sensor ao ERP: níveis da automação. Rastreabilidade por lote reduz o tamanho do recall. Em modelos preditivos, acurácia alta pode enganar: olhe precisão e recall e o custo de cada erro. Dado é meio, decisão é o fim.

---

## 1. 🗃️ Dados na produção: fontes e qualidade

**🧩 Pré-requisitos:** População, amostra e tipos de variável (Módulo 13).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Identificar as principais fontes de dados de uma fábrica
- Diferenciar dado, informação e decisão
- Reconhecer problemas comuns de qualidade de dados

**🏭 Por que isso importa**

Decisões de PCP, qualidade, manutenção e custos dependem de dados. Uma análise sofisticada sobre dados ruins produz **conclusões erradas com cara de verdade**.

**🔴 Conceito-chave — De onde vêm os dados**

**ERP:** pedidos, estoques, compras, custos.  
**MES:** ordens de produção, apontamentos, paradas, refugo.  
**CLP/SCADA:** sinais das máquinas (ligada, velocidade, temperatura).  
**Sensores IoT:** vibração, consumo de energia.  
**Sistemas de qualidade:** inspeções e não conformidades.  
**Planilhas e apontamento manual:** ainda muito comuns.

**🔴 Conceito-chave — Do dado à decisão**

**Dado:** registro bruto (“máquina 3 parada às 14h05”).  
**Informação:** dado organizado com contexto (“máquina 3 parou 5 vezes esta semana, 4 por falta de material”).  
**Decisão/ação:** “rever o abastecimento da máquina 3”.

**😂 Exemplo do dia a dia — A planilha de gastos**

Categorias “mercado”, “Mercado”, “supermercado” e “merc.”: quatro nomes para a mesma coisa. Na hora de somar, o gasto com mercado aparece picado e **menor** do que é.

**🔴 Conceito-chave — Problemas comuns**

Campos vazios · registros duplicados · erros de digitação · **unidades misturadas** (kg e g) · datas em formatos diferentes · códigos de produto inconsistentes · relógios de máquinas desalinhados.

**🔊 Para memorizar**

**“Lixo entra, lixo sai.”** (GIGO: garbage in, garbage out)

#### ✍️ Exercícios

**1.F1** Ligue o sistema ao dado típico:
   1. ERP
   2. MES
   3. CLP/SCADA
   4. Sistema de qualidade
   Ligar com: Inspeções e não conformidades · Ordens, apontamentos e paradas · Pedidos, estoques e custos · Sinais das máquinas

**1.F2** “A máquina 3 parou 5 vezes nesta semana, 4 delas por falta de material.” Isso é:
   a) Um dado bruto
   b) Informação (dado organizado com contexto)
   c) Uma decisão
   d) Um sensor

**1.F3** Registrar o mesmo material ora em kg, ora em g, na mesma coluna, é um problema de qualidade de dados.
   ( ) Verdadeiro  ( ) Falso

**1.F4** Na análise de dados vale a regra: lixo entra, lixo ___.
   Opções: sai · some · melhora · fica

#### 📝 Resumo (🌱 Fácil)

Dados vêm do **ERP, MES, CLP/SCADA, sensores, sistemas de qualidade, planilhas e apontamentos manuais**. Problemas comuns: campos vazios, duplicados, erros de digitação, unidades e formatos misturados. **Lixo entra, lixo sai.**

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Avaliar um conjunto de dados pelas dimensões de qualidade
- Calcular completude e taxa de duplicidade
- Propor regras de validação na origem

**🔴 Conceito-chave — Dimensões de qualidade**

**Completude:** o que deveria estar preenchido está?  
**Exatidão:** o valor corresponde à realidade?  
**Consistência:** o mesmo dado bate entre sistemas?  
**Atualidade:** está disponível a tempo de decidir?  
**Validade:** respeita formato e faixa (temperatura entre 0 e 300 °C)?  
**Unicidade:** cada evento aparece uma vez só?

**🔵 Fórmula — Medindo a qualidade**

**Completude = registros preenchidos ÷ registros totais**  
**Taxa de duplicidade = registros duplicados ÷ registros totais**  
Ex.: 1.200 apontamentos de parada; 180 sem motivo → completude do campo “motivo” = 1.020 ÷ 1.200 = **85%**. 36 duplicados → **3%**.

| Símbolo | Significado |
|---|---|
| registros totais | quantidade de linhas avaliadas |

**🛠️ Passo a passo — Validação na origem**

1. **Listas suspensas** para motivos e códigos (nada de texto livre).  
2. **Faixas válidas** (quantidade não negativa, temperatura plausível).  
3. **Campos obrigatórios** para o que é essencial.  
4. **Data e hora automáticas** (não digitadas).  
5. **Leitura de código de barras/QR** em vez de digitar.

**🟡 Atenção — Corrigir na origem**

Limpar os dados toda semana em planilha é trabalho que se repete para sempre e depende de quem limpa. Corrigir **na coleta** resolve de vez.

#### ✍️ Exercícios

**1.M1** De 1.200 apontamentos de parada, 180 estão sem motivo. Qual a completude do campo “motivo” (%)?

**1.M2** Ligue o problema à dimensão de qualidade afetada:
   1. O mesmo apontamento aparece duas vezes
   2. Temperatura registrada: 950 °C num forno de 200 °C
   3. O ERP e o MES mostram estoques diferentes
   4. O relatório de paradas chega só no fim do mês
   Ligar com: Atualidade · Consistência · Unicidade · Validade

**1.M3** Qual a melhor forma de reduzir os motivos de parada escritos de mil jeitos diferentes?
   a) Limpar a planilha toda sexta-feira
   b) Usar uma lista suspensa de motivos padronizados na coleta
   c) Pedir que escrevam com mais cuidado
   d) Ignorar o campo motivo

**1.M4** Numa base de 1.200 registros, 36 são duplicados. Qual a taxa de duplicidade (%)?

**1.M5** De 1.600 registros de parada, 150 estão sem motivo. Qual a completude do campo “motivo” (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Dimensões de qualidade: **completude, exatidão, consistência, atualidade, validade e unicidade**. Meça (ex.: completude = preenchidos ÷ total) e **corrija na origem** com listas, faixas válidas, campos obrigatórios e registro automático.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Analisar mecanismos de dados faltantes e o risco de viés
- Desenhar governança mínima (dono, dicionário, linhagem)
- Considerar a LGPD ao tratar dados de pessoas

**🔴 Conceito-chave — Dados faltantes não são neutros**

Classificação de Rubin (1976): **MCAR** (falta totalmente ao acaso), **MAR** (falta depende de outra variável observada) e **MNAR** (falta depende do próprio valor).  
Ex. MNAR: o operador deixa de apontar paradas quando a causa é dele → o banco **subestima** paradas por erro operacional.  
Excluir linhas ou preencher com a média pode **distorcer** a análise: primeiro entenda por que falta.

**🔴 Conceito-chave — Governança mínima**

**Dono do dado:** quem responde pela definição e qualidade.  
**Dicionário de dados:** significado, unidade, formato e fonte de cada campo.  
**Linhagem:** de onde o dado veio e que transformações sofreu.  
**Fonte única da verdade:** um número oficial para cada indicador.

**🔴 Conceito-chave — LGPD e dados de pessoas**

Produtividade individual, biometria de ponto e imagens de câmeras são **dados pessoais** (Lei 13.709/2018). Princípios como **finalidade, necessidade, transparência e segurança** se aplicam: colete o necessário, informe o uso, proteja o acesso.

**⚖️ Limitações e trade-offs — Dado de máquina também erra**

Sensores descalibrados, contagem dupla na esteira, relógios fora de sincronia e paradas curtas não detectadas. Valide o dado automático contra observação direta antes de confiar.

**📚 Para aprofundar**

• DAMA International. *DAMA-DMBOK: Data Management Body of Knowledge*.  
• RUBIN, D. B. Inference and missing data. *Biometrika*, 1976.  
• Brasil. Lei nº 13.709/2018 (LGPD).

#### ✍️ Exercícios

**1.D1** *Os operadores apontam paradas no MES, mas deixam de apontar quando a causa é um erro deles. A análise mostra que “erro operacional” é só 2% das paradas.* Qual a leitura correta?
   a) Erro operacional é mesmo desprezível
   b) Os faltantes não são aleatórios (MNAR); o número subestima o erro operacional e é preciso mudar a forma de coleta
   c) Basta preencher os vazios com a média
   d) Excluir todas as paradas sem motivo resolve

**1.D2** O que é a linhagem (lineage) de um dado?
   a) O nome do dono do dado
   b) O registro de onde o dado veio e que transformações sofreu até o relatório
   c) A cor do gráfico
   d) A senha do banco de dados

**1.D3** Dados de produtividade individual de operadores identificados pelo nome são dados pessoais para a LGPD.
   ( ) Verdadeiro  ( ) Falso

**1.D4** Você vai criar um painel de paradas de máquina. Proponha uma governança mínima para os dados que o alimentarão.

#### 📝 Resumo (🧠 Difícil)

Dados faltantes podem ser aleatórios ou **não aleatórios** (MNAR): excluir ou imputar pode enviesar. Governança exige **dono, dicionário e linhagem** dos dados. Dados de operadores são **dados pessoais** (LGPD): finalidade, necessidade, transparência e segurança.

---

## 2. 📑 Planilhas que não mentem

**🧩 Pré-requisitos:** Fontes e qualidade dos dados.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Organizar dados em formato de tabela (uma linha por observação)
- Usar funções básicas (SOMA, MÉDIA, CONT.SE)
- Montar uma tabela dinâmica simples

**🏭 Por que isso importa**

A planilha é a ferramenta mais usada pelo engenheiro de produção em início de carreira. Uma planilha bem estruturada vira análise em minutos; uma mal feita vira horas de retrabalho e números errados.

**🔴 Conceito-chave — Dados em formato de tabela**

Princípio dos dados organizados (“tidy data”, Wickham, 2014):  
• cada **variável** é uma **coluna**;  
• cada **observação** é uma **linha**;  
• cada tipo de coisa observada tem sua própria **tabela**.

**😂 Exemplo do dia a dia — A planilha “bonita”**

Cabeçalho mesclado, subtotal entre as linhas, cores indicando o turno e mês escrito como título. Fica bonita para imprimir, mas **impossível de filtrar, somar ou analisar**.

**🧠 Mapa — Tabela de produção organizada**

```
Data   | Linha | Turno | Produzidas | Refugo
01/03  | L1    | Manhã |   1000     |   20
01/03  | L1    | Noite |    800     |   40
01/03  | L2    | Manhã |   1200     |   12
01/03  | L2    | Noite |   1000     |   30
```

**🛠️ Passo a passo — Tabela dinâmica em 4 passos**

1. Selecione a tabela de dados (sem linhas em branco).  
2. Inserir → Tabela dinâmica.  
3. Arraste **Linha** para Linhas e **Produzidas** e **Refugo** para Valores (soma).  
4. Crie a porcentagem a partir das **somas**.

**🟡 Atenção — Dado × relatório**

Não digite totais, cores ou comentários na aba de dados. Ela é a **fonte**; o relatório (gráficos, tabelas dinâmicas) fica em outra aba e é gerado a partir dela.

#### ✍️ Exercícios

**2.F1** Qual estrutura facilita filtrar, somar e analisar dados?
   a) Cabeçalhos mesclados e subtotais entre as linhas
   b) Cada variável numa coluna e cada observação numa linha
   c) Um mês por aba, com formatos diferentes
   d) Cores indicando o turno, sem coluna de turno

**2.F2** Digitar os totais no meio da aba de dados facilita a análise.
   ( ) Verdadeiro  ( ) Falso

**2.F3** Ordene os passos para montar uma tabela dinâmica:
   Itens (fora de ordem): Colocar o campo de agrupamento em Linhas · Colocar os valores numéricos em Valores (soma) · Inserir a tabela dinâmica · Selecionar a tabela de dados

**2.F4** Para contar quantas linhas atendem a um critério, usa-se a função ___.
   Opções: CONT.SE · SOMA · HOJE · ARRED

#### 📝 Resumo (🌱 Fácil)

Dados organizados: **cada variável numa coluna, cada observação numa linha**, sem células mescladas nem totais no meio. Separe a aba de **dados** da aba de **relatório**. Tabela dinâmica resume por grupos sem fórmulas.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Usar SOMASES, CONT.SES e PROCX (ou PROCV corretamente)
- Calcular indicadores por grupo
- Diferenciar razão das somas de média das razões

**🔵 Fórmula — Funções com critérios**

**=SOMASES(Produzidas; Linha; "L1"; Turno; "Noite")** → 800  
**=CONT.SES(Linha; "L2")** → 2  
**=PROCX(código; Produtos[Código]; Produtos[Custo])** → busca o custo do produto

| Símbolo | Significado |
|---|---|
| SOMASES | soma os valores que atendem a todos os critérios |
| CONT.SES | conta as linhas que atendem aos critérios |
| PROCX | procura um valor e devolve o correspondente de outra coluna |

**🟡 Atenção — A armadilha do PROCV**

No **PROCV**, o 4º argumento vazio ou VERDADEIRO faz **correspondência aproximada**: pode devolver o valor de outro produto **sem dar erro**. Use sempre **FALSO** (correspondência exata) ou prefira **PROCX** / **ÍNDICE + CORRESP**. O PROCV também quebra se colunas forem inseridas no meio.

**🧮 Exemplo resolvido — Refugo por linha**

L1: refugo = 20 + 40 = 60; produzidas = 1.800 → **3,33%**  
L2: refugo = 12 + 30 = 42; produzidas = 2.200 → **1,91%**  
Certo: **soma do refugo ÷ soma das produzidas**.

**🟡 Atenção — Média das razões ≠ razão das somas**

L1 tem 2% de refugo de manhã e 5% à noite. A média das porcentagens daria **3,5%**, mas o correto é **3,33%**, porque os turnos produziram quantidades diferentes. Porcentagens só podem ser somadas ou tiradas a média se forem ponderadas.

#### ✍️ Exercícios

**2.M1** Na tabela: L1 Manhã (1.000 produzidas, 20 refugo), L1 Noite (800, 40), L2 Manhã (1.200, 12), L2 Noite (1.000, 30). Qual o refugo da linha L1 (%)?

**2.M2** Na mesma tabela, qual o refugo do turno da Noite, somando as duas linhas (%)?

**2.M3** O PROCV foi usado sem o 4º argumento e devolveu o custo errado, sem mensagem de erro. Por quê?
   a) O arquivo está corrompido
   b) Sem FALSO, o PROCV faz correspondência aproximada e pode devolver o valor de outro código
   c) O PROCV só funciona com textos
   d) Falta atualizar o Excel

**2.M4** *L1 teve 2% de refugo de manhã (1.000 peças) e 5% à noite (800 peças). Um colega informou “refugo médio de 3,5%”.* O que está errado?
   a) Nada
   b) Fez a média das porcentagens sem ponderar pelas quantidades; o correto é 60 ÷ 1.800 ≈ 3,33%
   c) Deveria somar 2% + 5% = 7%
   d) Deveria usar só o turno da manhã

**2.M5** Linha L1: manhã com 1.300 produzidas e 60 refugadas; noite com 700 produzidas e 39 refugadas. Qual o refugo da linha (%)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

**SOMASES/CONT.SES** somam e contam com critérios; **PROCX** (ou PROCV com correspondência exata) busca valores em outra tabela. Indicador por grupo = **soma do numerador ÷ soma do denominador**, não a média das porcentagens.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Aplicar boas práticas para reduzir erros em planilhas
- Decidir quando migrar da planilha para banco de dados ou BI
- Garantir que os cálculos possam ser auditados

**⚖️ Limitações e trade-offs — Planilhas erram em silêncio**

Pesquisas sobre planilhas (por exemplo, os estudos de R. Panko) encontraram erros com frequência, inclusive em planilhas usadas para decisões. Referência trocada, intervalo que não inclui a última linha, número digitado por cima de uma fórmula: nada disso gera mensagem de erro.

**🛠️ Passo a passo — Boas práticas de controle**

1. Abas separadas: **entradas → cálculos → saídas**.  
2. Tabelas nomeadas (o intervalo cresce sozinho).  
3. **Nada de números fixos dentro de fórmulas** (use células de parâmetro).  
4. **Totais de conferência** (a soma por linha deve bater com o total geral).  
5. Versão e registro de alterações; revisão por outra pessoa em planilhas críticas.

**🔴 Conceito-chave — Quando sair da planilha**

Sinais: muitas pessoas editando o mesmo arquivo, dezenas de milhares de linhas, cópias “v2_final_agora_vai”, necessidade de histórico e integração com ERP/MES.  
Caminho: **banco de dados** (SQL) para guardar, **BI** para visualizar, planilha para análises pontuais.

**🏭 Na empresa — Caso: custo subestimado**

Uma planilha de custos somava =SOMA(C2:C50), mas os produtos novos foram inseridos nas linhas 51 a 60. O custo total ficou subestimado por meses.  
Prevenção: tabela nomeada, total de conferência contra o ERP e revisão mensal.

**📚 Para aprofundar**

• WICKHAM, H. Tidy Data. *Journal of Statistical Software*, 2014.  
• Estudos de R. R. Panko sobre erros em planilhas.

#### ✍️ Exercícios

**2.D1** Qual prática MAIS reduz o risco de erro silencioso numa planilha de custos?
   a) Usar cores fortes
   b) Totais de conferência que precisam bater com outra fonte, sem números fixos dentro das fórmulas
   c) Juntar tudo numa aba só
   d) Proteger a planilha com senha

**2.D2** *Oito analistas editam a mesma planilha de apontamentos, com 80 mil linhas e várias cópias “final_v3”. A diretoria quer histórico de 3 anos.* Qual a recomendação?
   a) Dividir em várias planilhas menores
   b) Migrar o armazenamento para um banco de dados e a visualização para uma ferramenta de BI
   c) Proibir edições
   d) Imprimir tudo mensalmente

**2.D3** Se uma planilha não mostra nenhuma mensagem de erro, os cálculos estão corretos.
   ( ) Verdadeiro  ( ) Falso

**2.D4** Descreva como você reestruturaria uma planilha de controle de produção “bonita”, com células mescladas, subtotais no meio e um mês por aba, para torná-la analisável e confiável.

#### 📝 Resumo (🧠 Difícil)

Erros de planilha são frequentes e silenciosos. Boas práticas: separar entradas, cálculos e saídas; tabelas nomeadas; nada de números fixos dentro das fórmulas; totais de conferência; versão e revisão. Migre para banco de dados/BI quando houver muitos usuários, grande volume ou necessidade de histórico e integração.

---

## 3. 🔎 Indicadores e análise exploratória

**🧩 Pré-requisitos:** Planilhas que não mentem; Estatística descritiva (Módulo 13).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Descrever os elementos de uma ficha de indicador
- Calcular o OEE
- Ler um indicador ao longo do tempo antes de olhar a média

**🏭 Por que isso importa**

Sem indicador, não há gestão. Com indicador mal definido, há gestão **errada**: cada setor calcula de um jeito e as reuniões viram discussão sobre o número, não sobre o problema.

**🔴 Conceito-chave — Ficha do indicador**

**Nome** · **objetivo** · **fórmula** · **unidade** · **fonte** · **frequência** · **dono** · **meta** · **polaridade** (maior é melhor ou menor é melhor?).

**🔵 Fórmula — OEE (eficiência global do equipamento)**

**OEE = Disponibilidade × Performance × Qualidade**  
Disponibilidade = tempo operando ÷ tempo planejado  
Performance = (produção × ciclo ideal) ÷ tempo operando  
Qualidade = peças boas ÷ peças produzidas

| Símbolo | Significado |
|---|---|
| tempo planejado | turno menos paradas planejadas |
| ciclo ideal | tempo por peça na velocidade de projeto |

**🧮 Exemplo resolvido — Calculando o OEE**

Turno de 480 min, 30 min de paradas planejadas → **450 min planejados**. Paradas não planejadas: 45 min → **405 min operando**.  
Ciclo ideal: 1 min/peça. Produziu 360; boas 342.  
• D = 405 ÷ 450 = **90%**  
• P = 360 × 1 ÷ 405 = **88,9%**  
• Q = 342 ÷ 360 = **95%**  
• **OEE = 0,90 × 0,889 × 0,95 ≈ 76%** (= 342 peças boas × 1 min ÷ 450 min).

**😂 Exemplo do dia a dia — O OEE da sua noite de estudo**

Reservou 2 h (planejado). Perdeu 20 min no celular (disponibilidade). Leu devagar por sono (performance). Metade dos resumos ficou confusa (qualidade).

**🟡 Atenção — Olhe no tempo**

Uma média mensal esconde tendências e picos. Faça primeiro um **gráfico de linha dia a dia**; depois calcule médias.

#### ✍️ Exercícios

**3.F1** Qual item NÃO faz parte da ficha de um indicador?
   a) Fórmula
   b) Dono
   c) Frequência de atualização
   d) Cor favorita do diretor

**3.F2** Disponibilidade 90%, performance 88,9% e qualidade 95%. Qual o OEE (%)?

**3.F3** Antes de calcular a média mensal, é recomendável olhar o gráfico do indicador dia a dia.
   ( ) Verdadeiro  ( ) Falso

**3.F4** OEE = disponibilidade × performance × ___.
   Opções: qualidade · custo · velocidade · estoque

**3.F5** Disponibilidade 98%, performance 93% e qualidade 90%. Qual o OEE (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

Indicador bem definido tem **nome, fórmula, unidade, fonte, frequência, dono, meta e polaridade**. **OEE = disponibilidade × performance × qualidade**, calculado sobre o tempo planejado. Olhe o gráfico no tempo antes da média.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Decompor o OEE em disponibilidade, performance e qualidade e apontar a maior perda
- Seguir um roteiro de análise exploratória
- Diferenciar indicadores de resultado e de processo

**🛠️ Passo a passo — Roteiro de análise exploratória**

1. Qual **pergunta** a análise precisa responder?  
2. Conhecer as variáveis (dicionário) e **limpar**.  
3. **Resumir** (média, mediana, desvio; Módulo 13).  
4. **Visualizar** distribuição (histograma, boxplot) e tempo (linha).  
5. **Segmentar** por linha, turno, produto, fornecedor.  
6. Formular **hipóteses** e validá-las (dados, Gemba, teste).

**🔴 Conceito-chave — Resultado × processo**

**Indicadores de resultado (lagging):** mostram o que já aconteceu (refugo do mês, OTIF, custo por unidade).  
**Indicadores de processo (leading):** antecipam o resultado (% de setups com checklist, temperatura dentro da faixa, horas de treinamento).  
Gestão só por resultado reage tarde demais.

**🟢 Dica prática — Leia o OEE pela maior perda**

No exemplo, a maior perda é a **performance (88,9%)**: pequenas paradas e velocidade reduzida. É ali que um Kaizen tende a render mais.

**🟣 Conexão**

OEE é um indicador central da **TPM** (Nakajima) e aparece no Módulo 6. Eficiência e utilização (Módulo 4) seguem a mesma lógica para pessoas.

#### ✍️ Exercícios

**3.M1** Tempo planejado 450 min; paradas não planejadas 45 min. Qual a disponibilidade (%)?

**3.M2** Tempo operando 405 min; ciclo ideal 1 min/peça; produziu 360 peças. Qual a performance (%)?

**3.M3** Ordene o roteiro de análise exploratória:
   Itens (fora de ordem): Conhecer e limpar as variáveis · Definir a pergunta · Formular e validar hipóteses · Resumir com estatísticas · Segmentar por grupos · Visualizar distribuição e tempo

**3.M4** Classifique cada indicador:
   1. Refugo do mês
   2. % de setups feitos com checklist
   3. OTIF do trimestre
   4. Temperatura do forno dentro da faixa
   Ligar com: Processo · Processo · Resultado · Resultado

**3.M5** Tempo planejado de 460 min e 75 min de paradas não planejadas. Qual a disponibilidade (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

**3.M6** Tempo planejado de 420 min; ciclo ideal de 1,5 min por peça; 217 peças boas no turno. Qual o OEE (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Na análise exploratória: entender a pergunta → conhecer e limpar as variáveis → resumir → visualizar distribuição e tempo → **segmentar** → formular e validar hipóteses. Combine indicadores de **resultado** (refugo do mês) com indicadores de **processo** (setups padronizados).

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Reconhecer o paradoxo de Simpson em dados de produção
- Identificar distorções de indicadores (Goodhart, sobrevivência, correlação)
- Separar variação comum de especial antes de reagir ao número

**🧮 Exemplo resolvido — Paradoxo de Simpson**

Refugo por turno e tipo de produto:  
• **Turno A:** simples 27/900 (3%) · complexo 11/100 (11%) → total **3,8%**  
• **Turno B:** simples 2/100 (2%) · complexo 90/900 (10%) → total **9,2%**  
B é **melhor nos dois produtos**, mas pior no total, porque produz muito mais o complexo. Comparar só o total levaria a “premiar” o turno errado.

**⚖️ Limitações e trade-offs — Armadilhas de indicadores**

• **Goodhart:** meta de OEE pode levar a “esconder” paradas planejadas.  
• **Sobrevivência:** analisar só lotes aprovados esconde os problemas dos reprovados.  
• **Correlação ≠ causa** (Módulo 13).  
• **Mix:** mudanças no mix de produtos mudam o indicador sem que o processo mude.

**🔴 Conceito-chave — Antes de reagir ao número**

Todo processo varia. Um mês pior pode ser só **variação comum**. Reagir a cada oscilação (ajustar, cobrar, trocar procedimento) pode **aumentar** a variação.  
Use gráficos de controle (Módulo 5) para separar variação comum de **causa especial**.

**📚 Para aprofundar**

• NAKAJIMA, S. *Introdução ao TPM* (OEE).  
• TUKEY, J. W. *Exploratory Data Analysis* (1977).  
• Módulo 5 deste curso: CEP.

#### ✍️ Exercícios

**3.D1** Turno B: produto simples 2 refugos em 100; complexo 90 em 900. Qual o refugo total do turno B (%)?

**3.D2** *Turno A: 3% (simples) e 11% (complexo), total 3,8%. Turno B: 2% (simples) e 10% (complexo), total 9,2%. A diretoria quer premiar o turno A “pelo menor refugo”.* Qual a análise correta?
   a) Premiar A: tem o menor total
   b) B é melhor em cada produto; o total de A é menor porque produz mais o produto simples (paradoxo de Simpson)
   c) Os turnos são iguais
   d) Não é possível concluir nada

**3.D3** Se o refugo deste mês ficou um pouco acima do anterior, o processo certamente piorou e precisa de ação corretiva.
   ( ) Verdadeiro  ( ) Falso

**3.D4** O OEE virou meta de bônus e subiu de 65% para 80% em dois meses, sem melhoria visível na produção entregue. Analise possíveis causas e proponha ajustes.

#### 📝 Resumo (🧠 Difícil)

O **paradoxo de Simpson** mostra que o total pode inverter a conclusão dos grupos por causa do mix. Indicadores viram metas e se distorcem (**Goodhart**). Antes de reagir a um número ruim, verifique se é variação comum ou especial (CEP, Módulo 5).

---

## 4. 🐍 SQL e Python para engenheiros

**🧩 Pré-requisitos:** Planilhas que não mentem.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar tabela, linha, coluna e chave num banco relacional
- Ler uma consulta SELECT simples
- Descrever o que o Python com pandas faz numa análise

**🏭 Por que isso importa**

Os dados de ERP e MES ficam em **bancos de dados**. Saber consultar diretamente, sem esperar o relatório pronto, é um diferencial concreto em estágios e entrevistas.

**🔴 Conceito-chave — Banco de dados relacional**

**Tabela:** conjunto de registros de um tipo (produção, produtos).  
**Linha:** um registro. **Coluna:** um atributo.  
**Chave primária:** identifica cada linha de forma única (id).  
**Chave estrangeira:** coluna que aponta para outra tabela (produção.produto → produtos.código).

**🧠 Mapa — Tabela “producao” e uma consulta**

```
id | linha | produto | qtd
 1 | L1    | A       | 100
 2 | L1    | B       |  50
 3 | L2    | A       |  70
 4 | L2    | A       |  30
 5 | L1    | A       |  20

SELECT produto, qtd
FROM producao
WHERE linha = 'L1';
→ devolve as linhas 1, 2 e 5
```

**🔴 Conceito-chave — Python e pandas**

**Python** é uma linguagem de programação; a biblioteca **pandas** trabalha com tabelas (DataFrames): ler arquivos, limpar, filtrar, agrupar e gerar gráficos. A vantagem sobre a planilha: o **script** registra cada passo e pode ser rodado de novo com os dados novos.

**😂 Exemplo do dia a dia — A agenda de contatos**

Uma tabela de contatos (nome, telefone) e outra de aniversários (nome, data). Para mandar parabéns, você **junta** as duas pelo nome. Se houver dois “João”, a junção se confunde: por isso existem chaves únicas.

**🟢 Dica prática — Não precisa ser programador**

Ler e escrever consultas simples e entender um script curto já diferencia muito um estagiário de engenharia de produção.

#### ✍️ Exercícios

**4.F1** Ligue o termo ao significado:
   1. Chave primária
   2. Chave estrangeira
   3. Coluna
   4. Linha
   Ligar com: Aponta para uma linha de outra tabela · Identifica cada linha de forma única · Um atributo do registro · Um registro

**4.F2** Tabela producao: (L1, A, 100), (L1, B, 50), (L2, A, 70), (L2, A, 30), (L1, A, 20). Quantas linhas a consulta SELECT * FROM producao WHERE linha = 'L1' devolve?

**4.F3** Uma vantagem do script em Python sobre cliques manuais é poder repetir a mesma análise com dados novos.
   ( ) Verdadeiro  ( ) Falso

**4.F4** No SQL, a cláusula que filtra linhas por uma condição é o ___.
   Opções: WHERE · SELECT · FROM · ORDER BY

#### 📝 Resumo (🌱 Fácil)

Banco relacional = **tabelas** com linhas e colunas; a **chave primária** identifica cada linha e a **chave estrangeira** liga tabelas. **SELECT … FROM … WHERE** escolhe colunas e filtra linhas. **Python com pandas** lê, limpa, agrupa e gera gráficos com scripts reaproveitáveis.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Ler e escrever consultas com WHERE, GROUP BY e JOIN
- Prever o resultado de uma agregação
- Traduzir um SOMASES para GROUP BY

**🧠 Mapa — GROUP BY = SOMASES**

```
SELECT linha, SUM(qtd) AS total
FROM producao
GROUP BY linha;

linha | total
L1    | 170
L2    | 100

Em pandas:
df.groupby('linha')['qtd'].sum()
```

**🧠 Mapa — JOIN: juntando tabelas**

```
SELECT p.linha, SUM(p.qtd * c.custo) AS custo_total
FROM producao p
JOIN produtos c ON c.codigo = p.produto
GROUP BY p.linha;

Junta cada registro de produção ao custo do produto.
```

**🔴 Conceito-chave — Ordem lógica da consulta**

Escrevemos SELECT primeiro, mas o banco processa na ordem:  
**FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY**.  
Por isso o WHERE filtra **linhas** antes de agrupar e o HAVING filtra **grupos** depois.

**🟡 Atenção — WHERE × HAVING**

“Linhas com total acima de 150” é filtro de **grupo** → **HAVING SUM(qtd) > 150**. Colocar isso no WHERE dá erro, porque a soma ainda não existe nessa etapa.

#### ✍️ Exercícios

**4.M1** Na mesma tabela, qual o total de L1 em SELECT linha, SUM(qtd) FROM producao GROUP BY linha?

**4.M2** Qual o total de L1 em: SELECT linha, SUM(qtd) FROM producao WHERE produto = 'A' GROUP BY linha?

**4.M3** Ordene como o banco processa logicamente uma consulta:
   Itens (fora de ordem): FROM · GROUP BY · HAVING · ORDER BY · SELECT · WHERE

**4.M4** Qual comando pandas equivale a somar qtd por linha?
   a) df.sort_values('qtd')
   b) df.groupby('linha')['qtd'].sum()
   c) df.head()
   d) df.dropna()

#### 📝 Resumo (🔧 Médio)

**GROUP BY** agrupa e calcula (SUM, COUNT, AVG); é o SOMASES do SQL. **JOIN** junta tabelas pela chave. Ordem lógica: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Identificar junções que duplicam linhas e inflam somas
- Diferenciar WHERE e HAVING
- Escolher entre planilha, SQL, Python e BI e garantir reprodutibilidade

**🧮 Exemplo resolvido — O JOIN que duplica**

A tabela de preços tem, por erro, **duas linhas para o produto A**. Ao juntar produção × preços por produto, cada registro de A aparece **duas vezes**.  
SUM(qtd) de A passa de 220 para **440**, sem nenhuma mensagem de erro.  
Prevenção: verificar se a chave é única antes de juntar e comparar o total antes × depois da junção.

**🔴 Conceito-chave — Reprodutibilidade**

Uma análise feita com cliques manuais não pode ser repetida nem auditada. Script (SQL/Python) **versionado** (ex.: Git), com os dados de entrada identificados, permite repetir, revisar e automatizar.

**🔴 Conceito-chave — Qual ferramenta usar**

**Planilha:** análise pontual, poucos dados, uma pessoa.  
**SQL:** extrair e agregar dados de sistemas.  
**Python:** limpeza complexa, estatística, automação, modelos.  
**BI:** painéis recorrentes para muitas pessoas.  
Na prática, se combinam: SQL extrai, Python trata, BI mostra.

**⚖️ Limitações e trade-offs — Automatizar não corrige**

Automatizar um relatório com dados ruins só entrega o erro **mais rápido e para mais gente**. Qualidade de dados (lição 1) vem antes.

**📚 Para aprofundar**

• McKINNEY, W. *Python para Análise de Dados* (autor do pandas).  
• Documentação oficial do pandas e tutoriais de SQL do seu banco de dados.

#### ✍️ Exercícios

**4.D1** O produto A tem 220 unidades produzidas no total. A tabela de preços tem, por erro, duas linhas para A. Após o JOIN por produto, quanto dará SUM(qtd) de A?

**4.D2** Você quer mostrar só as linhas com total produzido acima de 150. Qual a forma correta?
   a) WHERE SUM(qtd) > 150
   b) GROUP BY linha HAVING SUM(qtd) > 150
   c) ORDER BY qtd > 150
   d) SELECT qtd > 150

**4.D3** *Todo mês, um analista gera o relatório de custos com 40 cliques no Excel. Às vezes o resultado muda e ninguém sabe por quê.* Qual a melhor evolução?
   a) Gravar um vídeo dos cliques
   b) Transformar o processo em consulta SQL e/ou script versionado, com checagens de totais
   c) Fazer o relatório a cada trimestre
   d) Pedir a dois analistas que façam em paralelo

**4.D4** Um relatório de custo por linha mostrou um custo 2 vezes maior que o do mês anterior logo após alguém alterar a consulta SQL. Como você investigaria?

#### 📝 Resumo (🧠 Difícil)

Juntar por uma chave **não única** multiplica linhas e **infla somas** sem erro. WHERE filtra linhas antes de agrupar; HAVING filtra grupos depois. Scripts versionados tornam a análise **reprodutível**; automatizar dado ruim só automatiza o erro.

---

## 5. 📈 Visualização e dashboards

**🧩 Pré-requisitos:** Qual gráfico usar? (Módulo 13); Indicadores e análise exploratória.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Escolher o gráfico adequado a cada pergunta
- Reconhecer erros comuns de visualização
- Explicar o que um dashboard precisa responder

**🏭 Por que isso importa**

Um gráfico pode esclarecer uma decisão em segundos ou induzir ao erro. Na fábrica, o painel da reunião diária define **onde a equipe vai agir hoje**.

**🔴 Conceito-chave — Pergunta → gráfico**

Evolução no tempo → **linha**  
Comparar categorias → **barras** (ordenadas)  
Distribuição → **histograma** ou **boxplot**  
Relação entre duas variáveis → **dispersão**  
Um único número importante → **cartão com meta e tendência**

**🟡 Atenção — Erros comuns**

• **Barras com eixo que não começa no zero:** exageram diferenças.  
• **Pizza com muitas fatias** e gráficos **3D:** distorcem a leitura.  
• **Dois eixos Y** no mesmo gráfico: fácil de manipular a impressão.  
• Cores sem significado e excesso de elementos.

**😂 Exemplo do dia a dia — O gráfico da propaganda**

“Nossa marca vende 3 vezes mais!”: a barra de 52% parece 3 vezes maior que a de 48% porque o eixo começa em 45%. É o erro clássico do eixo cortado.

**🔴 Conceito-chave — O que um dashboard deve responder**

**Para quem é?** **Que decisão apoia?** **Com que frequência é olhado?** Se não houver resposta, o painel vira decoração.

#### ✍️ Exercícios

**5.F1** Ligue a pergunta ao gráfico:
   1. Como o OEE evoluiu nos últimos 30 dias?
   2. Qual linha tem mais refugo?
   3. Como se distribuem os tempos de setup?
   4. Velocidade da máquina tem relação com refugo?
   Ligar com: Barras ordenadas · Dispersão · Histograma ou boxplot · Linha

**5.F2** Num gráfico de barras, começar o eixo Y em um valor acima de zero pode exagerar visualmente as diferenças.
   ( ) Verdadeiro  ( ) Falso

**5.F3** Qual pergunta deve vir primeiro ao criar um dashboard?
   a) Quais cores usar?
   b) Para quem é e que decisão ele apoia?
   c) Quantos gráficos cabem na tela?
   d) Qual fonte de letra?

**5.F4** Para mostrar a evolução de um indicador ao longo do tempo, o gráfico mais adequado é o de ___.
   Opções: linha · pizza · radar · rosca 3D

#### 📝 Resumo (🌱 Fácil)

Gráfico certo para cada pergunta: **linha** para o tempo, **barras** para comparar, **histograma/boxplot** para distribuição, **dispersão** para relação. Evite pizza com muitas fatias, 3D e barras com eixo que não começa no zero.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Planejar um dashboard a partir do público e da decisão
- Entender o modelo estrela (fatos e dimensões) do BI
- Diferenciar medida e coluna calculada

**🛠️ Passo a passo — Planejando um dashboard**

1. **Público** (supervisor de turno? diretor?).  
2. **Decisões** que ele toma com o painel.  
3. **Indicadores** mínimos (com ficha).  
4. **Nível de detalhe** e filtros (linha, turno, produto).  
5. **Frequência** de atualização.  
6. **Protótipo** no papel e teste com o usuário.

**🔴 Conceito-chave — Modelo estrela**

Popularizado por Ralph **Kimball** para data warehouses e usado em ferramentas de BI:  
• **Tabela fato:** eventos com números (produção por turno: produzidas, refugo, minutos parados).  
• **Dimensões:** descrevem os fatos (calendário, linha, produto, turno).  
Fatos no centro, dimensões ao redor: facilita filtros e evita duplicidade.

**🔴 Conceito-chave — Medida × coluna calculada**

**Coluna calculada:** calculada **linha a linha** e armazenada.  
**Medida:** calculada **no momento**, conforme os filtros do visual.  
Ex. (DAX, Power BI): **Refugo % = DIVIDE(SUM(Refugo); SUM(Produzidas))** como medida dá a razão das somas correta em qualquer filtro. Uma coluna de % por linha, depois agregada com média, cai na armadilha da média das razões.

**🟢 Dica prática — Hierarquia visual**

O que exige ação primeiro e em destaque (canto superior esquerdo); detalhes depois. Cores reservadas para sinalizar **fora da meta**.

#### ✍️ Exercícios

**5.M1** No modelo estrela, classifique cada tabela:
   1. Produção por turno (produzidas, refugo)
   2. Calendário
   3. Cadastro de produtos
   4. Paradas registradas (minutos)
   Ligar com: Dimensão · Dimensão · Fato · Fato

**5.M2** Por que calcular “Refugo %” como MEDIDA (DIVIDE(SUM(Refugo); SUM(Produzidas))) e não como coluna agregada por média?
   a) Porque medidas são mais coloridas
   b) Porque a medida calcula a razão das somas no contexto de cada filtro, evitando a média das razões
   c) Porque colunas não aceitam divisão
   d) Não há diferença

**5.M3** Ordene os passos para planejar um dashboard:
   Itens (fora de ordem): Definir as decisões apoiadas · Definir filtros e frequência · Definir o público · Escolher os indicadores (com ficha) · Prototipar e testar com o usuário

**5.M4** Uma coluna calculada é recalculada conforme os filtros aplicados no visual.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🔧 Médio)

Dashboard nasce de **público, decisão, indicadores, frequência**. No BI, o **modelo estrela** tem tabela **fato** (eventos, com números) e **dimensões** (data, linha, produto). **Medida** calcula no contexto do filtro (agrega certo); **coluna calculada** calcula linha a linha.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Avaliar criticamente um dashboard (carga, contexto, metas, alertas)
- Garantir uma fonte única da verdade e atualização confiável
- Representar variação e incerteza nos visuais

**🔴 Conceito-chave — Avaliando um painel**

• Cada número tem **contexto** (meta, mês anterior, tendência)?  
• Destaca **exceções** ou obriga a procurar?  
• Leva a uma **ação** clara?  
• Carga cognitiva: dá para entender em menos de um minuto?  
• Há **data de atualização** e fonte visíveis?

**🔴 Conceito-chave — Fonte única da verdade**

Se a Produção e o Financeiro calculam o refugo de formas diferentes, cada um traz o seu número para a reunião. Defina a ficha do indicador e **um conjunto de dados oficial** alimentando todos os painéis.

**⚖️ Limitações e trade-offs — Ruído parece sinal**

Setas verdes e vermelhas a cada variação levam a reagir a **ruído**. Mostre a variação natural (faixas, limites de controle, Módulo 5) e sinalize só o que sai do padrão.

**📚 Para aprofundar**

• KIMBALL, R.; ROSS, M. *The Data Warehouse Toolkit*.  
• FEW, S. *Information Dashboard Design*.  
• TUFTE, E. R. *The Visual Display of Quantitative Information*.

#### ✍️ Exercícios

**5.D1** *Na reunião, a Produção mostra refugo de 2,1% e o Financeiro mostra 3,4% para o mesmo mês.* Qual a causa provável e a solução?
   a) Um dos dois errou a conta; basta refazer
   b) Definições e fontes diferentes; criar ficha do indicador e uma fonte oficial para todos os painéis
   c) Usar a média dos dois
   d) Parar de medir refugo

**5.D2** Um painel pinta de vermelho qualquer dia com OEE abaixo do dia anterior. Qual o problema?
   a) Nenhum
   b) Leva a reagir a ruído (variação comum); o ideal é sinalizar o que sai dos limites naturais do processo
   c) Vermelho é uma cor ruim
   d) Deveria comparar com o ano anterior só

**5.D3** Mostrar a data da última atualização e a fonte dos dados aumenta a confiança no painel.
   ( ) Verdadeiro  ( ) Falso

**5.D4** Critique um dashboard com 18 gráficos, cores aleatórias, sem metas, atualizado manualmente “quando dá” e usado na reunião diária de produção. Proponha uma versão melhor.

#### 📝 Resumo (🧠 Difícil)

Bom painel mostra **contexto** (meta, histórico), destaca exceções e leva à ação. Uma **fonte única** evita “dois números para a mesma coisa”. Mostre a variação (faixas, gráfico de controle) para não reagir a ruído.

---

## 6. 🛰️ IoT, automação e rastreabilidade

**🧩 Pré-requisitos:** Fontes e qualidade dos dados.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o papel de sensor, CLP, SCADA, MES e ERP
- Definir IoT industrial e sistema ciberfísico
- Explicar rastreabilidade de lote

**🏭 Por que isso importa**

A Indústria 4.0 depende de dados de chão de fábrica coletados automaticamente. Entender quem gera e quem usa cada dado evita projetos caros que não conversam entre si.

**🔴 Conceito-chave — Do sensor ao ERP**

**Sensor:** mede (temperatura, presença, vibração).  
**CLP (controlador lógico programável):** comanda a máquina.  
**SCADA:** supervisão e controle de vários equipamentos em tela.  
**MES:** gerencia a execução (ordens, apontamentos, rastreabilidade).  
**ERP:** gerencia o negócio (pedidos, compras, finanças).

**🔴 Conceito-chave — IoT industrial e sistema ciberfísico**

**IoT industrial:** equipamentos e sensores conectados enviando dados.  
**Sistema ciberfísico:** integração entre o processo físico e o modelo digital, que monitora e às vezes decide (ex.: ajustar a velocidade quando a temperatura sobe).

**🔴 Conceito-chave — Rastreabilidade**

Capacidade de saber, para cada lote: **quais insumos** entraram, **quando e onde** foi feito, **por quem/qual máquina**, **com quais parâmetros** e **para qual cliente** foi. Em alimentos, fármacos e automotivo, é exigência.

**😂 Exemplo do dia a dia — A encomenda**

O código de rastreio mostra onde seu pacote está. Na fábrica, é o caminho ao contrário também: de uma reclamação do cliente até o lote de chocolate usado.

#### ✍️ Exercícios

**6.F1** Ligue o sistema à função:
   1. Sensor
   2. CLP
   3. MES
   4. ERP
   Ligar com: Comandar a máquina · Gerenciar a execução da produção · Gerenciar o negócio (pedidos, finanças) · Medir uma grandeza física

**6.F2** Rastreabilidade permite saber quais insumos entraram em um lote e para quais clientes ele foi.
   ( ) Verdadeiro  ( ) Falso

**6.F3** O que é um sistema ciberfísico?
   a) Um computador de escritório
   b) A integração entre o processo físico e um sistema digital que o monitora e pode atuar sobre ele
   c) Um sistema de folha de pagamento
   d) Um robô sem sensores

**6.F4** O sistema que gerencia a execução da produção no chão de fábrica é o ___.
   Opções: MES · CRM · RH · BI

#### 📝 Resumo (🌱 Fácil)

**Sensor** mede; **CLP** controla a máquina; **SCADA** supervisiona; **MES** gerencia a execução da produção; **ERP** gerencia o negócio. **IoT industrial** conecta equipamentos para coletar dados; **sistema ciberfísico** integra o físico e o digital. **Rastreabilidade** liga cada lote aos insumos, máquinas e clientes.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Posicionar sistemas nos níveis do modelo ISA-95
- Calcular o impacto de um recall com e sem rastreabilidade
- Definir os dados mínimos de rastreabilidade

**🧠 Mapa — Níveis ISA-95**

```
Nível 4  ERP ............ negócio (dias/meses)
Nível 3  MES ............ operações (turnos/horas)
Nível 2  SCADA / CLP .... controle (segundos)
Nível 1  Sensores/atuad.  medição e atuação
Nível 0  Processo físico

(modelo da norma ISA-95 / IEC 62264)
```

**🧮 Exemplo resolvido — Recall com e sem rastreabilidade**

Um lote de cacau contaminado entrou na fábrica.  
• **Sem rastreabilidade:** recolher toda a produção do mês = 30.000 caixas × R$ 12 = **R$ 360.000**.  
• **Com rastreabilidade por lote de insumo:** só 2 lotes de produção afetados = 1.800 caixas × R$ 12 = **R$ 21.600**.  
Diferença: **R$ 338.400**, sem contar a imagem da marca.

**🛠️ Passo a passo — Dados mínimos de rastreabilidade**

1. **Lote do insumo** (recebido do fornecedor).  
2. **Ordem e lote de produção** (data, turno, linha).  
3. **Parâmetros críticos** (temperatura, tempo).  
4. **Resultados de inspeção.**  
5. **Expedição:** lote → cliente → nota fiscal.

**🟡 Atenção — Erro comum**

Registrar o lote só na expedição. Se o insumo não for ligado ao lote de produção **no momento do consumo**, a genealogia fica quebrada e o recall volta a ser total.

#### ✍️ Exercícios

**6.M1** Ordene os níveis ISA-95 do mais baixo ao mais alto:
   Itens (fora de ordem): Controle (CLP, SCADA) · Negócio (ERP) · Operações (MES) · Processo físico · Sensores e atuadores

**6.M2** Recall: sem rastreabilidade, 30.000 caixas; com rastreabilidade, 1.800 caixas. Custo de R$ 12 por caixa recolhida. Qual a economia (R$)?

**6.M3** Qual falha mais compromete a rastreabilidade?
   a) Registrar o lote do insumo no momento do consumo
   b) Registrar o lote só na expedição, sem ligar aos insumos usados
   c) Guardar os parâmetros de processo
   d) Imprimir o lote na embalagem

**6.M4** No modelo ISA-95, o SCADA fica no mesmo nível do ERP.
   ( ) Verdadeiro  ( ) Falso

**6.M5** Recall: sem rastreabilidade seriam 28.000 caixas; com rastreabilidade por lote, 2.200. Custo de R$ 8 por caixa recolhida. Qual a economia (R$)? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Níveis ISA-95: 0 processo, 1 sensores/atuadores, 2 controle (CLP, SCADA), 3 operações (MES), 4 negócio (ERP). Com rastreabilidade por lote, o recall atinge só os lotes afetados, não todo o período.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Avaliar trade-offs de conectar máquinas (custo, segurança, interoperabilidade)
- Analisar quando um gêmeo digital compensa
- Discutir riscos de segurança em redes industriais

**⚖️ Limitações e trade-offs — Conectar tem custo e risco**

Custos: sensores, rede, integração com sistemas antigos, armazenamento, manutenção.  
Riscos: redes de automação (OT) conectadas à internet podem ser atacadas e **parar a fábrica**. Normas como a **IEC 62443** tratam da segurança de sistemas de automação industrial.  
Interoperabilidade: padrões abertos como **OPC UA** evitam depender de um único fornecedor.

**🔴 Conceito-chave — Gêmeo digital**

Modelo digital atualizado com dados do ativo real, usado para **simular, prever e otimizar** (ex.: testar uma nova sequência de produção sem parar a linha).  
Compensa quando o **custo de testar no real é alto** e há **dados confiáveis** e modelo validado. Sem isso, vira uma animação cara.

**🔴 Conceito-chave — Latência e decisão**

Nem todo dado precisa ir à nuvem: controle de máquina exige resposta em milissegundos (fica no CLP ou em computação de borda); indicadores de turno podem ir ao MES; análises de tendência, à nuvem. Decida **onde processar** pela velocidade que a decisão exige.

**📚 Para aprofundar**

• ISA-95 / IEC 62264 (integração empresa-controle).  
• IEC 62443 (segurança de automação industrial).  
• OPC Foundation: especificação OPC UA.

#### ✍️ Exercícios

**6.D1** *Para ver os dados no celular, um técnico ligou o CLP da linha diretamente à internet, sem firewall.* Qual a avaliação correta?
   a) Ótimo, aumenta a visibilidade
   b) Risco grave: a rede de automação fica exposta a ataques que podem parar ou danificar a linha; segregar redes e seguir boas práticas (ex.: IEC 62443)
   c) Só é problema se o celular for antigo
   d) Basta trocar a senha padrão depois

**6.D2** Qual o principal benefício de padrões abertos como o OPC UA?
   a) Deixar as máquinas mais rápidas
   b) Interoperabilidade: sistemas de fornecedores diferentes trocam dados de forma padronizada
   c) Eliminar a necessidade de sensores
   d) Substituir o ERP

**6.D3** Todo dado da fábrica deve ser enviado à nuvem para processamento, inclusive o controle das máquinas.
   ( ) Verdadeiro  ( ) Falso

**6.D4** A diretoria quer um “gêmeo digital” da fábrica. Como você avaliaria se o investimento compensa?

#### 📝 Resumo (🧠 Difícil)

Conectar máquinas custa (sensores, rede, integração) e cria **riscos de segurança** (redes OT expostas; normas como a IEC 62443). Padrões como **OPC UA** facilitam a interoperabilidade. Gêmeo digital compensa quando o custo de testar no real é alto e há dados confiáveis.

---

## 7. 🤖 IA e modelos preditivos

**🧩 Pré-requisitos:** Probabilidade (Módulo 13); Correlação e regressão (Módulo 13).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Diferenciar aprendizado supervisionado e não supervisionado
- Citar aplicações de IA na produção
- Explicar por que se separam dados de treino e de teste

**🏭 Por que isso importa**

IA já aparece em inspeção por câmera, manutenção preditiva e previsão de demanda. O engenheiro de produção não precisa construir o algoritmo, mas precisa **avaliar se o modelo resolve o problema** e se é seguro confiar nele.

**🔴 Conceito-chave — Tipos de aprendizado**

**Supervisionado:** aprende com exemplos que têm a resposta (rótulo).  
• Classificação: peça **boa ou defeituosa**.  
• Regressão: **quantos dias** até a falha.  
**Não supervisionado:** encontra padrões sem rótulo (agrupar máquinas com comportamento parecido, detectar anomalias).

**🔴 Conceito-chave — Aplicações na produção**

Inspeção visual por câmera · manutenção preditiva (vibração, temperatura) · previsão de demanda · otimização de parâmetros de processo · detecção de anomalias em sensores.

**🔴 Conceito-chave — Treino e teste**

O modelo aprende com os dados de **treino** e é avaliado com dados de **teste**, que ele nunca viu. Avaliar com os mesmos dados do treino é como fazer a prova com o gabarito na mão.

**😂 Exemplo do dia a dia — O filtro de spam**

Aprendeu com milhares de e-mails marcados como spam ou não. Às vezes manda um e-mail importante para o spam (falso positivo) ou deixa passar um golpe (falso negativo). Qual erro é pior depende do caso.

#### ✍️ Exercícios

**7.F1** Ligue a tarefa ao tipo de aprendizado:
   1. Classificar peça em boa ou defeituosa a partir de fotos rotuladas
   2. Prever quantos dias faltam para a falha
   3. Agrupar máquinas com comportamento parecido, sem rótulo
   Ligar com: Não supervisionado · Supervisionado (classificação) · Supervisionado (regressão)

**7.F2** Um modelo deve ser avaliado com dados que ele não viu durante o treino.
   ( ) Verdadeiro  ( ) Falso

**7.F3** Qual destas NÃO é uma aplicação típica de IA na produção?
   a) Inspeção visual por câmera
   b) Manutenção preditiva
   c) Previsão de demanda
   d) Substituir a necessidade de definir objetivos do negócio

**7.F4** Quando o modelo diz que uma peça boa é defeituosa, temos um falso ___.
   Opções: positivo · negativo · verdadeiro · resultado

#### 📝 Resumo (🌱 Fácil)

**Supervisionado:** aprende com exemplos rotulados (peça boa/defeituosa; tempo até falhar). **Não supervisionado:** encontra grupos sem rótulo. Aplicações: inspeção visual, manutenção preditiva, previsão de demanda. O modelo é avaliado em dados de **teste** que ele não viu no treino.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Montar a matriz de confusão e calcular acurácia, precisão e recall
- Escolher a métrica pelo custo de cada tipo de erro
- Reconhecer sobreajuste

**🧠 Mapa — Matriz de confusão (inspeção de 1.000 peças)**

```
                  Real: defeito   Real: OK
Previu defeito        VP = 40      FP = 30
Previu OK             FN = 10      VN = 920

50 peças defeituosas e 950 boas.
```

**🔵 Fórmula — Métricas**

**Acurácia = (VP + VN) ÷ total** = 960 ÷ 1.000 = **96%**  
**Precisão = VP ÷ (VP + FP)** = 40 ÷ 70 = **57,1%** (dos alarmes, quantos eram defeito)  
**Recall = VP ÷ (VP + FN)** = 40 ÷ 50 = **80%** (dos defeitos, quantos foram pegos)

| Símbolo | Significado |
|---|---|
| VP | verdadeiro positivo: previu defeito e era defeito |
| FP | falso positivo: alarme falso |
| FN | falso negativo: defeito que passou |
| VN | verdadeiro negativo: previu OK e era OK |

**🔴 Conceito-chave — Qual métrica priorizar?**

**Defeito que chega ao cliente é caro** (segurança, recall) → priorize **recall** (pegar quase todos), aceitando mais alarmes falsos.  
**Alarme falso é caro** (parar a linha, descartar peça boa cara) → dê mais peso à **precisão**.

**🟡 Atenção — Sobreajuste (overfitting)**

Acurácia de 99% no treino e 70% no teste: o modelo **decorou** os exemplos em vez de aprender o padrão. Mais dados, modelo mais simples e validação adequada ajudam.

#### ✍️ Exercícios

**7.M1** VP = 40, FP = 30, FN = 10, VN = 920. Qual a acurácia (%)?

**7.M2** Com VP = 40 e FP = 30, qual a precisão (%)?

**7.M3** Com VP = 40 e FN = 10, qual o recall (%)?

**7.M4** *Um modelo de inspeção de freios automotivos precisa decidir quais peças vão para reinspeção humana.* Qual métrica deve ter prioridade?
   a) Precisão, para reduzir alarmes falsos
   b) Recall, porque deixar passar um defeito de freio é muito mais grave que reinspecionar peças boas
   c) Acurácia, porque resume tudo
   d) Nenhuma

**7.M5** Um modelo com 99% de acurácia no treino e 70% no teste provavelmente está sobreajustado.
   ( ) Verdadeiro  ( ) Falso

**7.M6** Matriz de confusão: VP = 32, FP = 92, FN = 18, VN = 840. Qual a precisão (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

**7.M7** Matriz de confusão: VP = 51, FP = 85, FN = 8, VN = 830. Qual o recall (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Matriz de confusão: VP, FP, FN, VN. **Acurácia** = acertos ÷ total; **precisão** = VP ÷ (VP + FP); **recall** = VP ÷ (VP + FN). Quando deixar passar defeito é caro, priorize o **recall**. Treino muito melhor que teste indica **sobreajuste**.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Analisar o paradoxo da acurácia em dados desbalanceados
- Identificar vazamento de dados e mudança de padrão (drift)
- Escolher o limiar de decisão pelo custo esperado e discutir riscos éticos

**🔴 Conceito-chave — Paradoxo da acurácia**

Com 5% de peças defeituosas, um “modelo” que sempre diz **“OK”** tem **95% de acurácia** e **recall zero**: não pega nenhum defeito.  
Em dados **desbalanceados**, acurácia sozinha engana. Use recall, precisão e a matriz completa.

**🧮 Exemplo resolvido — Limiar pelo custo esperado**

Custos: defeito que passa (FN) = **R$ 500**; alarme falso (FP) = **R$ 20** (reinspeção).  
• Limiar atual: FN = 10, FP = 30 → 10 × 500 + 30 × 20 = **R$ 5.600**.  
• Limiar mais sensível: VP = 48, FN = 2, FP = 120 → 2 × 500 + 120 × 20 = **R$ 3.400**, com acurácia **menor** (87,8%).  
O melhor modelo para o negócio **não** é o de maior acurácia.

**⚖️ Limitações e trade-offs — Vazamento de dados e drift**

**Vazamento:** usar uma variável que só existe **depois** do fato (ex.: “peça foi retrabalhada” para prever defeito). No teste parece ótimo; em produção, falha.  
**Drift:** o processo muda (fornecedor novo, máquina reformada) e o modelo perde desempenho. Monitore as métricas continuamente e retreine.

**🔴 Conceito-chave — Ética, LGPD e papel humano**

Modelos que avaliam pessoas (produtividade, segurança) exigem cuidado com **dados pessoais (LGPD)**, vieses e transparência. Em decisões críticas, mantenha **revisão humana** e explique as bases da decisão. Um modelo que ninguém entende dificilmente será usado corretamente.

**📚 Para aprofundar**

• JAMES, G.; WITTEN, D.; HASTIE, T.; TIBSHIRANI, R. *An Introduction to Statistical Learning* (2013).  
• Brasil. Lei nº 13.709/2018 (LGPD).

#### ✍️ Exercícios

**7.D1** FN custa R$ 500 e FP custa R$ 20. Um limiar gera FN = 2 e FP = 120. Qual o custo total esperado dos erros (R$)?

**7.D2** *Numa linha com 5% de defeitos, um fornecedor apresenta um modelo com “95% de acurácia”.* Qual a primeira pergunta a fazer?
   a) Qual a marca do computador?
   b) Qual o recall e a precisão? Um modelo que diz sempre “OK” também teria 95% de acurácia
   c) Quanto custa por mês?
   d) Nenhuma: 95% é excelente

**7.D3** Um modelo usa a variável “peça foi retrabalhada” para prever se a peça terá defeito. Qual o problema?
   a) Nenhum
   b) Vazamento de dados: essa informação só existe depois do defeito ser detectado
   c) Falta de cores no gráfico
   d) Sobreajuste por excesso de dados

**7.D4** Um modelo de manutenção preditiva funcionou bem por 8 meses e passou a errar muito depois da troca de fornecedor de rolamentos. Explique o que aconteceu e como gerenciar esse risco.

**7.D5** Um limiar gera 15 falsos negativos (R$ 200 cada) e 70 falsos positivos (R$ 5 cada). Qual o custo esperado dos erros (R$)? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🧠 Difícil)

Com poucos defeitos, um modelo que diz “tudo OK” tem acurácia alta e recall zero (**paradoxo da acurácia**). Cuidado com **vazamento de dados** (variável que só se conhece depois) e com **drift** (o processo muda). Escolha o limiar pelo **custo esperado** dos erros e considere explicabilidade, LGPD e o papel humano na decisão.

---

## 8. 👾 👾 Chefão: do dado à decisão

**🧩 Pré-requisitos:** Todas as lições do Módulo 14.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Ordenar o caminho do dado à decisão
- Relacionar cada ferramenta ao seu uso
- Conectar dados aos módulos de Métodos, Projetos e Estatística

**🏭 Na empresa — O caso: refugo na linha de bombons**

A Doces Serra quer reduzir o refugo da linha nova (Módulos 2 e 4).  
• Apontamentos de parada: 1.200 no mês, 180 sem motivo.  
• Turno A: refugo total 3,8%; turno B: 9,2%. Por produto, B é melhor nos dois.  
• OEE do mês: D = 90%, P = 88,9%, Q = 95%.  
• Um fornecedor oferece câmera com IA: recall de 80% e precisão de 57%, a R$ 4.000/mês.

**🔴 Conceito-chave — ✅ Checklist (Fácil)**

• Fontes de dados e problemas de qualidade  
• Tabela organizada, CONT.SE e tabela dinâmica  
• Ficha do indicador e OEE  
• SELECT e WHERE  
• Gráfico certo para cada pergunta  
• Sensor → CLP → MES → ERP; rastreabilidade  
• Supervisionado × não supervisionado; treino × teste

#### ✍️ Exercícios

**8.F1** Ordene o caminho do dado à decisão:
   Itens (fora de ordem): Analisar · Coletar dados com qualidade · Decidir e acompanhar · Definir a pergunta · Organizar e tratar · Visualizar e comunicar

**8.F2** Ligue a ferramenta ao uso:
   1. Tabela dinâmica
   2. SQL
   3. Dashboard
   4. Modelo preditivo
   Ligar com: Acompanhar indicadores recorrentes · Antecipar falhas ou defeitos · Extrair e agregar dados de sistemas · Resumo rápido por grupos

**8.F3** (M4 + M14) O tempo padrão e o OEE ajudam a separar perdas de ritmo, de parada e de qualidade.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🌱 Fácil)

Do dado à decisão: **pergunta → coleta com qualidade → organização → análise → visualização → decisão → acompanhamento**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular indicadores e métricas num caso integrado
- Detectar erros de agregação e de qualidade de dados
- Escolher a ferramenta adequada para cada etapa

**🏭 Na empresa — O caso: refugo na linha de bombons**

A Doces Serra quer reduzir o refugo da linha nova (Módulos 2 e 4).  
• Apontamentos de parada: 1.200 no mês, 180 sem motivo.  
• Turno A: refugo total 3,8%; turno B: 9,2%. Por produto, B é melhor nos dois.  
• OEE do mês: D = 90%, P = 88,9%, Q = 95%.  
• Um fornecedor oferece câmera com IA: recall de 80% e precisão de 57%, a R$ 4.000/mês.

**🔴 Conceito-chave — ✅ Checklist (Médio)**

• Completude e duplicidade  
• SOMASES, PROCX; razão das somas  
• D, P, Q e maior perda; roteiro exploratório  
• GROUP BY, JOIN, ordem lógica  
• Modelo estrela; medida × coluna  
• ISA-95; custo do recall  
• Acurácia, precisão, recall

#### ✍️ Exercícios

**8.M1** Com D = 90%, P = 88,9% e Q = 95%, qual componente do OEE representa a maior perda? Responda com a perda em pontos percentuais (100 − componente).

**8.M2** Antes de concluir que “a maioria das paradas é falta de material”, o que você verificaria primeiro?
   a) A cor do gráfico
   b) A completude do campo motivo (15% das paradas estão sem motivo) e se os faltantes são aleatórios
   c) O preço do material
   d) Nada

**8.M3** *O relatório diz que o turno A é o melhor (3,8% × 9,2%). Por produto, o turno B tem menos refugo nos dois.* O que recomendar?
   a) Replicar as práticas do turno A
   b) Comparar dentro de cada produto; estudar as práticas do turno B e o efeito do mix
   c) Demitir o supervisor de B
   d) Ignorar a diferença

#### 📝 Resumo (🔧 Médio)

No caso da Doces Serra, o OEE revela a maior perda, a segmentação evita o paradoxo de Simpson e a qualidade dos apontamentos precisa ser verificada antes de concluir.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Recomendar uma ação com base em dados incompletos, declarando premissas
- Avaliar a proposta de um modelo de IA pelo custo dos erros
- Integrar qualidade de dados, indicadores e decisão

**🏭 Na empresa — O caso: refugo na linha de bombons**

A Doces Serra quer reduzir o refugo da linha nova (Módulos 2 e 4).  
• Apontamentos de parada: 1.200 no mês, 180 sem motivo.  
• Turno A: refugo total 3,8%; turno B: 9,2%. Por produto, B é melhor nos dois.  
• OEE do mês: D = 90%, P = 88,9%, Q = 95%.  
• Um fornecedor oferece câmera com IA: recall de 80% e precisão de 57%, a R$ 4.000/mês.

**🔴 Conceito-chave — ✅ Checklist (Difícil)**

• Faltantes não aleatórios; governança; LGPD  
• Erros silenciosos de planilha  
• Simpson, Goodhart, variação comum  
• JOIN que duplica; reprodutibilidade  
• Fonte única; ruído × sinal  
• Segurança OT; gêmeo digital  
• Paradoxo da acurácia; vazamento; drift; limiar por custo

#### ✍️ Exercícios

**8.D1** A câmera com IA tem recall de 80%. Se passam 50 bombons defeituosos por dia pela inspeção, quantos defeituosos ainda passariam por dia com a câmera?

**8.D2** *A câmera custa R$ 4.000/mês, pega 40 dos 50 defeitos diários e gera 30 alarmes falsos por dia. Cada defeito que chega ao cliente custa R$ 15; cada reinspeção custa R$ 0,50. São 22 dias por mês.* Pelos custos, a câmera compensa?
   a) Não: o custo mensal é maior que qualquer economia
   b) Sim: evita 40 × 15 × 22 = R$ 13.200 por mês, gasta 30 × 0,50 × 22 = R$ 330 com reinspeção e R$ 4.000 com a câmera; o saldo esperado é de cerca de R$ 8.870 por mês
   c) Só compensa com 100% de recall
   d) Impossível avaliar

**8.D3** Escreva uma recomendação (até 6 linhas) à diretoria da Doces Serra sobre o refugo da linha de bombons, usando os dados do caso e declarando as premissas.

#### 📝 Resumo (🧠 Difícil)

Uma recomendação baseada em dados declara as **premissas**, mostra a **incerteza** e compara alternativas pelo **custo**, inclusive o custo dos erros de um modelo.

---

## 📖 Glossário

| Termo | Definição |
|---|---|
| **Aprendizado supervisionado** | Modelo aprende com exemplos rotulados (classificação ou regressão). |
| **Chave primária / estrangeira** | Primária identifica a linha; estrangeira liga uma tabela a outra. |
| **CLP** | Controlador lógico programável: computador industrial que comanda máquinas. |
| **Completude** | Proporção de registros preenchidos em relação ao esperado. |
| **Dicionário de dados** | Documento com significado, unidade, formato e fonte de cada campo. |
| **Drift** | Mudança nos dados ou no processo que degrada o desempenho do modelo. |
| **ERP** | Sistema de gestão empresarial: pedidos, estoques, compras, finanças. |
| **Gêmeo digital** | Modelo digital atualizado com dados do ativo real, usado para simular e prever. |
| **GROUP BY / HAVING** | Agrupa linhas para agregar; HAVING filtra os grupos depois da agregação. |
| **Indicador de resultado × de processo** | Resultado mostra o que aconteceu; processo antecipa o resultado. |
| **IoT industrial** | Equipamentos e sensores conectados que enviam dados do processo. |
| **ISA-95** | Modelo de níveis que integra o chão de fábrica (controle) aos sistemas de negócio. |
| **JOIN** | Junção de tabelas por uma chave comum. |
| **LGPD** | Lei Geral de Proteção de Dados (Lei 13.709/2018), que regula dados pessoais. |
| **Linhagem de dados** | Registro da origem e das transformações de um dado até o relatório. |
| **Matriz de confusão** | Tabela com verdadeiros/falsos positivos e negativos de um classificador. |
| **MCAR / MAR / MNAR** | Tipos de dados faltantes: totalmente ao acaso, ao acaso condicionado, não ao acaso. |
| **Medida × coluna calculada** | Medida calcula conforme os filtros; coluna calculada, linha a linha. |
| **MES** | Sistema de execução da manufatura: ordens, apontamentos, paradas, rastreabilidade. |
| **Modelo estrela** | Estrutura de BI com tabela fato no centro e dimensões ao redor. |
| **OEE** | Eficiência global do equipamento: disponibilidade × performance × qualidade. |
| **OPC UA** | Padrão aberto de comunicação industrial para interoperabilidade entre sistemas. |
| **pandas** | Biblioteca Python para manipular tabelas de dados. |
| **Paradoxo de Simpson** | Quando a tendência nos grupos se inverte ao agregar os dados, por efeito do mix. |
| **Precisão e recall** | Precisão: VP ÷ (VP + FP). Recall: VP ÷ (VP + FN). |
| **PROCX** | Função de busca que devolve o valor correspondente de outra coluna (substitui o PROCV). |
| **Qualidade de dados** | Grau de completude, exatidão, consistência, atualidade, validade e unicidade dos dados. |
| **Rastreabilidade** | Capacidade de ligar cada lote aos insumos, processos e clientes. |
| **SCADA** | Sistema de supervisão e aquisição de dados de equipamentos industriais. |
| **Sistema ciberfísico** | Integração entre processo físico e sistema digital que monitora e atua. |
| **Sobreajuste (overfitting)** | Modelo que decora o treino e generaliza mal. |
| **SOMASES / CONT.SES** | Funções que somam ou contam com vários critérios. |
| **SQL** | Linguagem para consultar e manipular bancos de dados relacionais. |
| **Tabela dinâmica** | Ferramenta que resume dados por grupos sem fórmulas. |
| **Tidy data** | Organização em que cada variável é uma coluna e cada observação uma linha. |
| **Vazamento de dados** | Uso de informação que só existe depois do evento a prever. |

## 🃏 Flashcards

| Frente | Verso |
|---|---|
| Lixo entra… | …lixo sai. Qualidade de dados vem antes da análise. |
| 6 dimensões de qualidade de dados | Completude, exatidão, consistência, atualidade, validade, unicidade. |
| Onde corrigir dados ruins? | Na origem: listas, faixas válidas, campos obrigatórios, registro automático. |
| MNAR | Dado falta por causa do próprio valor (ex.: paradas por erro não apontadas). Gera viés. |
| Governança mínima | Dono, dicionário, linhagem, fonte única. |
| Tidy data | Cada variável uma coluna, cada observação uma linha. |
| Armadilha do PROCV | Sem FALSO faz correspondência aproximada e erra em silêncio. Prefira PROCX. |
| Porcentagem por grupo | Razão das somas, não média das razões. |
| Ficha do indicador | Nome, objetivo, fórmula, unidade, fonte, frequência, dono, meta, polaridade. |
| OEE | Disponibilidade × Performance × Qualidade, sobre o tempo planejado. |
| Paradoxo de Simpson | O total pode inverter a conclusão dos grupos por causa do mix. |
| Ordem lógica do SQL | FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. |
| JOIN perigoso | Chave não única duplica linhas e infla somas sem erro. |
| Modelo estrela | Fato (eventos e números) no centro; dimensões (data, linha, produto) ao redor. |
| Medida × coluna calculada | Medida: calcula no contexto dos filtros. Coluna: linha a linha, armazenada. |
| Erros de visualização | Eixo cortado em barras, pizza com muitas fatias, 3D, dois eixos Y. |
| Níveis ISA-95 | 0 processo · 1 sensores · 2 CLP/SCADA · 3 MES · 4 ERP. |
| Rastreabilidade | Liga insumo → lote → processo → cliente. Reduz o tamanho do recall. |
| Segurança OT | Não expor CLP à internet; segregar redes; IEC 62443. |
| Supervisionado × não supervisionado | Com rótulo (classificação/regressão) × sem rótulo (agrupamento, anomalias). |
| Precisão × recall | Precisão: dos alarmes, quantos são reais. Recall: dos defeitos, quantos foram pegos. |
| Paradoxo da acurácia | Com poucos defeitos, “tudo OK” tem acurácia alta e recall zero. |
| Vazamento de dados | Variável que só existe depois do fato; ótimo no teste, falha em produção. |
| Drift | O processo muda e o modelo perde desempenho: monitore e retreine. |
| Escolha do limiar | Pelo custo esperado dos erros (FN × custo + FP × custo), não pela acurácia. |

## 📝 Gabarito comentado

**1.F1** ERP → Pedidos, estoques e custos; MES → Ordens, apontamentos e paradas; CLP/SCADA → Sinais das máquinas; Sistema de qualidade → Inspeções e não conformidades  
Cada sistema cobre uma camada da operação.

**1.F2** b) Informação (dado organizado com contexto)  
A decisão viria depois: “rever o abastecimento da máquina 3”.

**1.F3** Verdadeiro  
Unidades misturadas geram somas e médias erradas.

**1.F4** a) sai  
Dados ruins produzem conclusões ruins, por melhor que seja a análise.

**1.M1** 85 %  
Completude = (1.200 − 180) ÷ 1.200 × 100 = 1.020 ÷ 1.200 × 100 = 85%  
15% das paradas não podem ser analisadas por causa.

**1.M2** O mesmo apontamento aparece duas vezes → Unicidade; Temperatura registrada: 950 °C num forno de 200 °C → Validade; O ERP e o MES mostram estoques diferentes → Consistência; O relatório de paradas chega só no fim do mês → Atualidade  
Nomear a dimensão ajuda a escolher a correção.

**1.M3** b) Usar uma lista suspensa de motivos padronizados na coleta  
Corrigir na origem resolve de vez; a limpeza manual se repete para sempre.

**1.M4** 3 %  
36 ÷ 1.200 × 100 = 3%  
Duplicados inflam contagens e somas.

**1.M5** 90,625 %  
Completude = (1.600 − 150) ÷ 1.600 × 100 ≈ 90,6%  
Antes de concluir sobre motivos de parada, confira a completude.

**1.D1** b) Os faltantes não são aleatórios (MNAR); o número subestima o erro operacional e é preciso mudar a forma de coleta  
Antes de analisar, pergunte POR QUE o dado falta.  
❌ a) Ignora o viés da coleta.  
✅ b) A falta depende do próprio valor: o dado é enviesado. Coleta automática ou cultura sem punição ajudam.  
❌ c) A média de paradas não diz nada sobre a causa.  
❌ d) Excluir mantém o viés.

**1.D2** b) O registro de onde o dado veio e que transformações sofreu até o relatório  
Sem linhagem, ninguém sabe explicar por que dois relatórios mostram números diferentes.

**1.D3** Verdadeiro  
Identificam uma pessoa; valem finalidade, necessidade, transparência e segurança.

**1.D4** Definir o **dono** de cada dado (ex.: supervisor de produção para motivos de parada); criar um **dicionário** (o que conta como parada, unidade em minutos, lista de motivos, fonte MES); registrar a **linhagem** (MES → extração → tratamento → painel); estabelecer **regras de validação** na coleta; medir **completude e duplicidade** mensalmente; declarar o painel como **fonte única** do indicador; cuidar da LGPD se houver dados de pessoas.  
Critérios: Define dono(s) dos dados; Propõe dicionário com definições e unidades; Menciona linhagem e fonte única; Inclui validação e medição da qualidade.

**2.F1** b) Cada variável numa coluna e cada observação numa linha  
É o formato de dados organizados (tidy).

**2.F2** Falso  
Totais misturados aos dados quebram filtros e somas. Totais ficam no relatório.

**2.F3** Selecionar a tabela de dados → Inserir a tabela dinâmica → Colocar o campo de agrupamento em Linhas → Colocar os valores numéricos em Valores (soma)  
A tabela dinâmica resume sem fórmulas.

**2.F4** a) CONT.SE  
CONT.SE conta; SOMASE soma; com vários critérios, CONT.SES e SOMASES.

**2.M1** 3,33 %  
Refugo L1 = 20 + 40 = 60  
Produzidas L1 = 1.000 + 800 = 1.800  
60 ÷ 1.800 × 100 ≈ 3,33%  
Soma do numerador ÷ soma do denominador.

**2.M2** 3,89 %  
Refugo Noite = 40 + 30 = 70  
Produzidas Noite = 800 + 1.000 = 1.800  
70 ÷ 1.800 × 100 ≈ 3,89%  
Compare com a Manhã: 32 ÷ 2.200 ≈ 1,45%.

**2.M3** b) Sem FALSO, o PROCV faz correspondência aproximada e pode devolver o valor de outro código  
Use PROCV(...; FALSO) ou PROCX.

**2.M4** b) Fez a média das porcentagens sem ponderar pelas quantidades; o correto é 60 ÷ 1.800 ≈ 3,33%  
Média das razões ≠ razão das somas.

**2.M5** 4,95 %  
Razão das somas: (60 + 39) ÷ (1.300 + 700) × 100 = 99 ÷ 2.000 × 100 ≈ 4,95%  
Não use a média das duas porcentagens.

**2.D1** b) Totais de conferência que precisam bater com outra fonte, sem números fixos dentro das fórmulas  
Conferências cruzadas pegam erros que ninguém vê.

**2.D2** b) Migrar o armazenamento para um banco de dados e a visualização para uma ferramenta de BI  
Volume, múltiplos usuários e histórico são sinais claros para sair da planilha.

**2.D3** Falso  
Os erros mais perigosos (referência errada, intervalo incompleto, valor fixo) não geram mensagem.

**2.D4** Criar uma **aba única de dados** em formato de tabela (Data, Linha, Turno, Produto, Produzidas, Refugo…), uma linha por registro, sem mesclas nem subtotais, com **tabela nomeada** e **validação** (listas para Linha/Turno/Produto, números não negativos). Relatórios em outras abas via **tabela dinâmica** e fórmulas com critérios, calculando porcentagens pela **razão das somas**. Adicionar **totais de conferência**, uma aba de parâmetros, registro de versão e revisão por outra pessoa.  
Critérios: Converte para formato tidy numa tabela única; Separa dados e relatório; Inclui validação e tabela nomeada; Inclui conferências e controle de versão.

**3.F1** d) Cor favorita do diretor  
Ficha: nome, objetivo, fórmula, unidade, fonte, frequência, dono, meta e polaridade.

**3.F2** 76 %  
OEE = 0,90 × 0,889 × 0,95 ≈ 0,760 → 76%  
As três perdas se multiplicam.

**3.F3** Verdadeiro  
O gráfico no tempo revela tendências e picos que a média esconde.

**3.F4** a) qualidade  
Qualidade = peças boas ÷ peças produzidas.

**3.F5** 82,026 %  
OEE = 0,98 × 0,93 × 0,9 ≈ 0,8203 → 82%  
As perdas se multiplicam.

**3.M1** 90 %  
Tempo operando = 450 − 45 = 405 min  
D = 405 ÷ 450 = 90%  
Paradas planejadas já saíram do tempo planejado.

**3.M2** 88,9 %  
P = (360 × 1) ÷ 405 ≈ 0,889 → 88,9%  
Perdas de velocidade e pequenas paradas aparecem aqui.

**3.M3** Definir a pergunta → Conhecer e limpar as variáveis → Resumir com estatísticas → Visualizar distribuição e tempo → Segmentar por grupos → Formular e validar hipóteses  
A pergunta guia tudo; as hipóteses precisam de validação.

**3.M4** Refugo do mês → Resultado; % de setups feitos com checklist → Processo; OTIF do trimestre → Resultado; Temperatura do forno dentro da faixa → Processo  
Indicadores de processo antecipam o resultado.

**3.M5** 83,696 %  
Tempo operando = 460 − 75 = 385  
D = 385 ÷ 460 × 100 ≈ 83,7%  
Paradas planejadas já saíram do tempo planejado.

**3.M6** 77,5 %  
Atalho: OEE = peças boas × ciclo ideal ÷ tempo planejado  
= 217 × 1,5 ÷ 420 ≈ 77,5%  
É o mesmo que D × P × Q.

**3.D1** 9,2 %  
(2 + 90) ÷ (100 + 900) × 100 = 92 ÷ 1.000 = 9,2%  
O mix (muito produto complexo) puxa o total para cima.

**3.D2** b) B é melhor em cada produto; o total de A é menor porque produz mais o produto simples (paradoxo de Simpson)  
Sempre segmente antes de comparar totais.  
❌ a) O total mistura o efeito do mix com o desempenho.  
✅ b) Comparando dentro de cada produto, B tem menos refugo.  
❌ c) Há diferença clara dentro de cada grupo.  
❌ d) A segmentação permite concluir.

**3.D3** Falso  
Pode ser variação comum. Use um gráfico de controle para identificar causa especial.

**3.D4** Possível efeito **Goodhart**: reclassificar paradas não planejadas como planejadas (reduz o tempo planejado), ajustar o ciclo ideal para um valor mais lento, deixar de registrar pequenas paradas ou refugo. Ajustes: **ficha do indicador** com regras claras (o que é parada planejada, ciclo ideal de projeto), **auditoria** dos apontamentos, acompanhar junto indicadores de **resultado** (peças boas entregues, OTIF), usar OEE para diagnóstico de perdas e não como meta isolada.  
Critérios: Identifica o efeito Goodhart; Aponta formas concretas de manipular o OEE; Propõe regras claras e auditoria; Propõe acompanhar indicadores de resultado.

**4.F1** Chave primária → Identifica cada linha de forma única; Chave estrangeira → Aponta para uma linha de outra tabela; Coluna → Um atributo do registro; Linha → Um registro  
Chaves ligam as tabelas de um banco relacional.

**4.F2** 3 linhas  
Linhas com linha = 'L1': (L1, A, 100), (L1, B, 50), (L1, A, 20) → 3 linhas.  
O WHERE filtra as linhas.

**4.F3** Verdadeiro  
O script registra cada passo.

**4.F4** a) WHERE  
SELECT escolhe colunas; FROM indica a tabela; WHERE filtra.

**4.M1** 170   
L1: 100 + 50 + 20 = 170 (L2: 70 + 30 = 100).  
GROUP BY é o SOMASES do SQL.

**4.M2** 120   
O WHERE deixa só o produto A: L1 → 100 + 20 = 120 (L2 → 100).  
WHERE filtra antes de agrupar.

**4.M3** FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY  
Por isso HAVING pode usar agregados e WHERE não.

**4.M4** b) df.groupby('linha')['qtd'].sum()  
groupby + sum = GROUP BY + SUM.

**4.D1** 440   
Cada registro de A casa com 2 linhas de preço → aparece duas vezes.  
220 × 2 = 440.  
Junção por chave não única duplica linhas sem erro.

**4.D2** b) GROUP BY linha HAVING SUM(qtd) > 150  
Filtro sobre agregado vai no HAVING, depois do GROUP BY.

**4.D3** b) Transformar o processo em consulta SQL e/ou script versionado, com checagens de totais  
Script versionado torna a análise reprodutível e auditável.

**4.D4** Comparar a **versão anterior e a nova** da consulta; verificar **JOINs** e se as chaves das tabelas juntadas são **únicas** (contar linhas por chave); comparar **contagens e totais antes e depois** de cada junção; checar filtros (WHERE) e mudanças nos dados de origem; validar com um total de referência (ERP). Corrigir, documentar e criar checagens automáticas.  
Critérios: Compara versões da consulta; Suspeita de JOIN duplicando linhas e verifica unicidade das chaves; Compara contagens/totais antes e depois; Propõe checagens para evitar recorrência.

**5.F1** Como o OEE evoluiu nos últimos 30 dias? → Linha; Qual linha tem mais refugo? → Barras ordenadas; Como se distribuem os tempos de setup? → Histograma ou boxplot; Velocidade da máquina tem relação com refugo? → Dispersão  
Revisão do Módulo 13, aplicada a painéis.

**5.F2** Verdadeiro  
O comprimento da barra deixa de ser proporcional ao valor.

**5.F3** b) Para quem é e que decisão ele apoia?  
Sem público e decisão, o painel vira decoração.

**5.F4** a) linha  
Linha mostra tendência e sazonalidade.

**5.M1** Produção por turno (produzidas, refugo) → Fato; Calendário → Dimensão; Cadastro de produtos → Dimensão; Paradas registradas (minutos) → Fato  
Fatos têm os eventos e números; dimensões descrevem.

**5.M2** b) Porque a medida calcula a razão das somas no contexto de cada filtro, evitando a média das razões  
A média de porcentagens por linha ignora os pesos (lição 2).

**5.M3** Definir o público → Definir as decisões apoiadas → Escolher os indicadores (com ficha) → Definir filtros e frequência → Prototipar e testar com o usuário  
Protótipo no papel economiza horas de BI.

**5.M4** Falso  
Isso descreve a medida. A coluna calculada é calculada linha a linha e armazenada.

**5.D1** b) Definições e fontes diferentes; criar ficha do indicador e uma fonte oficial para todos os painéis  
Sem fonte única e definição comum, cada área tem “seu” número.

**5.D2** b) Leva a reagir a ruído (variação comum); o ideal é sinalizar o que sai dos limites naturais do processo  
Metade dos dias sempre será “pior que ontem”.

**5.D3** Verdadeiro  
Evita decidir com dado desatualizado sem saber.

**5.D4** Problemas: **excesso de informação** (carga cognitiva), cores sem significado, **sem contexto** (metas, tendência), atualização incerta (risco de decidir com dado velho), não aponta **ação**. Proposta: 4 a 6 indicadores para as decisões do dia (segurança, OEE com D-P-Q, refugo, atendimento do plano), **meta e histórico** em cada um, cores só para fora da meta ou dos limites, **atualização automática** com data visível, filtros por linha/turno e link para o detalhe das principais perdas.  
Critérios: Aponta excesso e falta de contexto; Aponta a atualização incerta; Propõe poucos indicadores ligados a decisões; Propõe metas, cores com significado e atualização automática.

**6.F1** Sensor → Medir uma grandeza física; CLP → Comandar a máquina; MES → Gerenciar a execução da produção; ERP → Gerenciar o negócio (pedidos, finanças)  
Cada camada opera numa escala de tempo diferente.

**6.F2** Verdadeiro  
É a genealogia do lote, nos dois sentidos.

**6.F3** b) A integração entre o processo físico e um sistema digital que o monitora e pode atuar sobre ele  
É a base conceitual da Indústria 4.0.

**6.F4** a) MES  
MES = Manufacturing Execution System.

**6.M1** Processo físico → Sensores e atuadores → Controle (CLP, SCADA) → Operações (MES) → Negócio (ERP)  
Do físico ao negócio: níveis 0 a 4.

**6.M2** 338.400 R$  
Sem: 30.000 × 12 = 360.000  
Com: 1.800 × 12 = 21.600  
Economia = 360.000 − 21.600 = R$ 338.400  
Rastreabilidade é seguro contra recall total.

**6.M3** b) Registrar o lote só na expedição, sem ligar aos insumos usados  
Sem a ligação insumo → produção, a genealogia quebra.

**6.M4** Falso  
SCADA/CLP estão no nível 2 (controle); ERP no nível 4 (negócio).

**6.M5** 206.400 R$  
(28.000 − 2.200) × 8 = 25.800 × 8 = R$ 206.400  
Rastreabilidade reduz o tamanho do recall.

**6.D1** b) Risco grave: a rede de automação fica exposta a ataques que podem parar ou danificar a linha; segregar redes e seguir boas práticas (ex.: IEC 62443)  
Segurança de OT é requisito, não opcional.

**6.D2** b) Interoperabilidade: sistemas de fornecedores diferentes trocam dados de forma padronizada  
Evita soluções presas a um único fornecedor.

**6.D3** Falso  
Controle exige milissegundos: fica no CLP ou na borda. A nuvem serve para análises menos urgentes.

**6.D4** Definir a **decisão** que o gêmeo vai apoiar (ex.: testar sequências de produção, prever falhas); estimar o **valor** (custo de testar no real, paradas evitadas); verificar a **disponibilidade e qualidade dos dados** e a capacidade de **validar o modelo** contra a realidade; estimar custos (sensores, integração, software, equipe, manutenção do modelo); começar por um **piloto** em um ativo crítico com indicador de sucesso; considerar segurança e interoperabilidade.  
Critérios: Parte da decisão/uso concreto; Compara valor e custo; Exige dados confiáveis e validação do modelo; Propõe piloto com indicador de sucesso.

**7.F1** Classificar peça em boa ou defeituosa a partir de fotos rotuladas → Supervisionado (classificação); Prever quantos dias faltam para a falha → Supervisionado (regressão); Agrupar máquinas com comportamento parecido, sem rótulo → Não supervisionado  
Com rótulo → supervisionado; sem rótulo → não supervisionado.

**7.F2** Verdadeiro  
Senão, a avaliação mede memória, não aprendizado.

**7.F3** d) Substituir a necessidade de definir objetivos do negócio  
O modelo apoia decisões; os objetivos continuam sendo definidos por pessoas.

**7.F4** a) positivo  
Alarme falso = falso positivo (a classe “positiva” aqui é defeito).

**7.M1** 96 %  
Acurácia = (VP + VN) ÷ total = (40 + 920) ÷ 1.000 = 96%  
Parece ótima, mas veja precisão e recall.

**7.M2** 57,1 %  
Precisão = VP ÷ (VP + FP) = 40 ÷ 70 ≈ 57,1%  
Quase metade dos alarmes é falsa.

**7.M3** 80 %  
Recall = VP ÷ (VP + FN) = 40 ÷ 50 = 80%  
20% dos defeitos passam.

**7.M4** b) Recall, porque deixar passar um defeito de freio é muito mais grave que reinspecionar peças boas  
O custo (e o risco) do falso negativo domina.

**7.M5** Verdadeiro  
Decorou os exemplos de treino.

**7.M6** 25,807 %  
Precisão = VP ÷ (VP + FP) = 32 ÷ 124 ≈ 25,8%  
Dos alarmes, quantos eram defeito de verdade.

**7.M7** 86,441 %  
Recall = VP ÷ (VP + FN) = 51 ÷ 59 ≈ 86,4%  
Dos defeitos reais, quantos o modelo pegou.

**7.D1** 3.400 R$  
2 × 500 + 120 × 20 = 1.000 + 2.400 = R$ 3.400  
(Limiar anterior: 10 × 500 + 30 × 20 = R$ 5.600)  
Menor custo mesmo com acurácia menor (87,8%).

**7.D2** b) Qual o recall e a precisão? Um modelo que diz sempre “OK” também teria 95% de acurácia  
Paradoxo da acurácia em dados desbalanceados.

**7.D3** b) Vazamento de dados: essa informação só existe depois do defeito ser detectado  
No teste parece ótimo; na hora de prever, a variável ainda não existe.

**7.D4** Houve **drift**: a mudança de fornecedor alterou o comportamento dos dados (vibração, desgaste), e o modelo treinado com o padrão antigo perdeu validade. Gestão: **monitorar** continuamente as métricas (recall, precisão) e as distribuições das variáveis de entrada; registrar **mudanças de processo** (fornecedor, reforma) como gatilhos de revisão; **retreinar** com dados novos e validar; manter **revisão humana** em decisões críticas enquanto o modelo é recalibrado.  
Critérios: Identifica drift ligado à mudança de processo; Propõe monitoramento contínuo de métricas/entradas; Propõe retreino e validação; Mantém papel humano e gatilhos de revisão.

**7.D5** 3.350 R$  
15 × 200 + 70 × 5 = 3.000 + 350 = R$ 3.350  
Escolha o limiar pelo custo dos erros, não pela acurácia.

**8.F1** Definir a pergunta → Coletar dados com qualidade → Organizar e tratar → Analisar → Visualizar e comunicar → Decidir e acompanhar  
Sem pergunta clara, sobram dados e faltam respostas.

**8.F2** Tabela dinâmica → Resumo rápido por grupos; SQL → Extrair e agregar dados de sistemas; Dashboard → Acompanhar indicadores recorrentes; Modelo preditivo → Antecipar falhas ou defeitos  
Cada ferramenta tem seu lugar.

**8.F3** Verdadeiro  
Eficiência/utilização (pessoas) e D-P-Q (equipamento) isolam tipos de perda.

**8.M1** 11,1 p.p.  
Perdas: D → 10; P → 11,1; Q → 5.  
Maior perda: performance, 11,1 pontos.  
Pequenas paradas e velocidade reduzida são o primeiro alvo.

**8.M2** b) A completude do campo motivo (15% das paradas estão sem motivo) e se os faltantes são aleatórios  
Qualidade dos dados antes da conclusão.

**8.M3** b) Comparar dentro de cada produto; estudar as práticas do turno B e o efeito do mix  
Paradoxo de Simpson: o mix explica o total.

**8.D1** 10 por dia  
Pegos = 80% de 50 = 40  
Passam = 50 − 40 = 10 por dia  
O recall diz quantos defeitos são pegos, não quantos alarmes aparecem.

**8.D2** b) Sim: evita 40 × 15 × 22 = R$ 13.200 por mês, gasta 30 × 0,50 × 22 = R$ 330 com reinspeção e R$ 4.000 com a câmera; o saldo esperado é de cerca de R$ 8.870 por mês  
Avalie o modelo pelo custo esperado dos acertos e erros, não pela acurácia.

**8.D3** **Recomendação:** atacar primeiro a **perda de performance** do OEE (11 pontos) com Kaizen de pequenas paradas; **estudar as práticas do turno B**, que tem menos refugo em cada produto (o total de A é menor por causa do mix); **corrigir a coleta** de motivos de parada (15% sem motivo) com lista padronizada. **Câmera com IA:** piloto de 2 meses; saldo esperado de ~R$ 8,9 mil/mês se recall e precisão se confirmarem na linha. **Premissas:** custos por defeito e reinspeção estimados; faltantes supostamente aleatórios; desempenho do modelo medido pelo fornecedor, a validar.  
Critérios: Prioriza ações com base nos dados (maior perda do OEE); Trata corretamente o paradoxo de Simpson; Inclui ação sobre a qualidade dos dados; Avalia a IA por custo e propõe piloto, declarando premissas.
