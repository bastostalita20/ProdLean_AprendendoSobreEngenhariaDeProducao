# 🗓️ Módulo 3 — Planejamento e Controle da Produção

> 📄 Apostila gerada automaticamente a partir de `app/conteudo/modulo-03.js` (a mesma fonte do app).
> Exemplos numéricos são ilustrativos, criados para fins didáticos.

## 🎯 Objetivo do módulo

Decidir o que, quanto, quando e onde produzir: prever a demanda, planejar em níveis, calcular materiais e capacidade, sequenciar as ordens e controlar o que foi planejado.

## 🗺️ Lições

| # | Lição | Níveis |
|---|---|---|
| 1 | O que é PCP e a hierarquia do planejamento | 🌱 🔧 🧠 |
| 2 | Previsão de demanda I: médias e suavização | 🌱 🔧 🧠 |
| 3 | Previsão de demanda II: tendência, sazonalidade e erro | 🌱 🔧 🧠 |
| 4 | Planejamento agregado e plano mestre (PMP) | 🌱 🔧 🧠 |
| 5 | MRP: calculando materiais | 🌱 🔧 🧠 |
| 6 | Capacidade: quanto a fábrica aguenta | 🌱 🔧 🧠 |
| 7 | Sequenciamento e controle da produção | 🌱 🔧 🧠 |
| 8 | 👾 Chefão: o Natal da Doces Serra | 🌱 🔧 🧠 |

## 🎧 Resumo para ouvir

> O PCP responde quatro perguntas: o que, quanto, quando e onde produzir. O planejamento desce em níveis: estratégico, com anos e fábricas; tático, com meses e famílias de produtos; operacional, com dias, ordens e máquinas. Tudo começa pela previsão de demanda. Toda previsão erra; a pergunta é quanto e para que lado. Média móvel suaviza, suavização exponencial dá mais peso ao recente, regressão pega a tendência e o índice sazonal pega o padrão do ano. Meça o erro com MAD e MAPE e vigie o viés com o sinal de rastreamento. No planejamento agregado, escolha entre acompanhar a demanda ou produzir nivelado e usar estoque. O plano mestre diz quantos produtos finais em cada semana; o MRP explode a lista de materiais e calcula o que comprar e fabricar, descontando estoque e recebimentos e recuando o lead time. Carga maior que capacidade não fecha: ajuste o plano ou a capacidade. No sequenciamento, menor tempo primeiro reduz o tempo médio no sistema; menor data de entrega primeiro reduz o maior atraso. Para duas máquinas em série, use a regra de Johnson. E planejar sem controlar é só desejar.

---

## 1. 🧭 O que é PCP e a hierarquia do planejamento

**🧩 Pré-requisitos:** Objetivos e níveis de decisão (Módulo 1); Tempo padrão (Módulo 4).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar as quatro perguntas que o PCP responde
- Diferenciar os níveis estratégico, tático e operacional
- Reconhecer as estratégias de resposta à demanda (MTS, MTO, ATO, ETO)

**🏭 Por que isso importa**

Sem PCP, a fábrica produz o que é mais fácil, e não o que o cliente pediu: falta o produto que vende e sobra o que encalha. O PCP é o **cérebro da operação**: transforma a demanda em ordens de compra e de produção, no tempo certo.

**🔴 Conceito-chave — As quatro perguntas**

O PCP responde:  
• **O quê** produzir?  
• **Quanto** produzir?  
• **Quando** produzir?  
• **Onde** (em que recurso) produzir?  
E depois **controla**: o que foi feito bate com o planejado? Se não, por quê?

**🧠 Mapa — Mapa do módulo**

```
📈 Previsão de demanda
   │
   ▼
ESTRATÉGICO (anos)
 Plano de produção · capacidade
   │
   ▼
TÁTICO (meses)
 S&OP · planejamento agregado
 PMP/MPS (semanas, produto)
   │
   ▼
OPERACIONAL (dias, horas)
 MRP (materiais) · CRP (capac.)
 Programação · sequenciamento
   │
   ▼
🔁 Controle: planejado × realizado
```

**🔴 Conceito-chave — Três níveis**

**Estratégico (longo prazo, anos):** quanto de capacidade ter, novas fábricas, grandes investimentos.  
**Tático (médio prazo, meses):** quanto produzir por família de produtos, quantas pessoas, turnos, estoques.  
**Operacional (curto prazo, dias e horas):** quais ordens, em que máquina, em que sequência.

**😂 Exemplo do dia a dia — A festa de aniversário**

**Estratégico:** alugar o salão ou fazer em casa? (decide meses antes e é difícil voltar atrás).  
**Tático:** quantos convidados, quantos salgados, quem ajuda.  
**Operacional:** às 15h fritar a coxinha, às 15h30 montar a mesa.  
Se o salão comporta 50 pessoas, não adianta convidar 120: os níveis precisam **conversar**.

**🔴 Conceito-chave — Estratégias de resposta à demanda**

**MTS (make to stock):** produz para estoque, antes do pedido. Ex.: refrigerante.  
**ATO (assemble to order):** fabrica módulos antes e **monta** quando chega o pedido. Ex.: computador configurável.  
**MTO (make to order):** fabrica só depois do pedido. Ex.: móvel planejado com projeto padrão.  
**ETO (engineer to order):** projeta e fabrica depois do pedido. Ex.: navio, máquina especial.

**🔊 Para memorizar**

**“Estoque, Monta, Faz, Projeta”**: MTS → ATO → MTO → ETO. Da esquerda para a direita, o cliente espera **mais** e a empresa guarda **menos** estoque de produto pronto.

**🟡 Atenção — Erro comum**

Achar que PCP é só “fazer a programação da semana”. A programação é o último degrau. Se a previsão e o plano mestre estão errados, nenhuma programação salva a entrega.

#### ✍️ Exercícios

**1.F1** Quais são as perguntas centrais do PCP?
   a) Quem contratar, quanto pagar e onde anunciar
   b) O que, quanto, quando e onde produzir
   c) Qual o preço, a margem e o lucro
   d) Qual fornecedor, qual banco e qual contador

**1.F2** Ligue o nível ao tipo de decisão:
   1. Estratégico
   2. Tático
   3. Operacional
   Ligar com: Construir uma nova fábrica · Qual ordem entra primeiro na máquina hoje · Quantas caixas por mês e quantos turnos

**1.F3** Ligue a estratégia de resposta ao exemplo:
   1. MTS
   2. ATO
   3. MTO
   4. ETO
   Ligar com: Máquina especial projetada para o cliente · Notebook configurado na compra · Refrigerante no supermercado · Uniforme com o logotipo da empresa

**1.F4** No MTS (produzir para estoque), o produto é fabricado antes de o cliente fazer o pedido.
   ( ) Verdadeiro  ( ) Falso

**1.F5** O planejamento de ___ prazo decide capacidade e novas fábricas.
   Opções: longo · curto · nenhum · diário

**1.F6** PCP é apenas a programação diária das máquinas.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🌱 Fácil)

O PCP decide **o que, quanto, quando e onde** produzir e acompanha se o plano foi cumprido. Os níveis são: **estratégico** (anos), **tático** (meses) e **operacional** (dias e horas). A empresa pode produzir **para estoque (MTS)**, **sob encomenda (MTO)**, **montar sob encomenda (ATO)** ou **projetar sob encomenda (ETO)**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Associar cada ferramenta do PCP ao seu nível e horizonte
- Explicar o papel do S&OP na integração entre áreas
- Escolher a estratégia de resposta mais adequada a um produto

**🔴 Conceito-chave — Ferramentas por nível**

| Nível | Horizonte | Unidade | Ferramentas |  
|---|---|---|---|  
| Estratégico | 1 a 5+ anos | Fábricas, capacidade | Plano de produção, plano de capacidade |  
| Tático | 3 a 18 meses | Famílias de produtos | S&OP, planejamento agregado |  
| Tático/operacional | semanas | Produto final | PMP/MPS, RCCP |  
| Operacional | dias, horas | Itens, ordens, máquinas | MRP, CRP, programação, sequenciamento |  
Horizontes são indicativos: variam com o setor e o lead time do produto.

**🔴 Conceito-chave — S&OP**

**S&OP (Sales and Operations Planning)** é um processo mensal em que vendas, marketing, produção, compras e finanças chegam a **um único plano** por família de produtos. Etapas típicas: revisão da demanda → revisão do suprimento/capacidade → pré-reunião de conciliação → reunião executiva de decisão.  
Objetivo: acabar com o “cada área com seu número”.

**🏭 Na empresa**

Na Doces Serra, vendas prevê 60 mil caixas de bombom para dezembro, finanças orçou 45 mil e a produção sabe que a capacidade é de 50 mil. Sem S&OP, cada área trabalha com um número e o resultado aparece como falta, excesso ou hora extra de última hora. No S&OP, a diretoria decide: antecipar produção em outubro e novembro, contratar temporários ou aceitar vender menos.

**🟢 Dica prática — Como escolher MTS, ATO, MTO ou ETO**

Pergunte: (1) quanto o cliente aceita esperar? (2) a demanda é previsível? (3) quanta variedade existe? (4) o produto perece ou fica obsoleto?  
Demanda estável, pouca variedade e cliente sem paciência → **MTS**. Muitas combinações de poucos módulos → **ATO**. Produto caro e personalizado → **MTO/ETO**.

**🟣 Conexão**

Os níveis do PCP espelham os níveis de decisão do **Módulo 1**. O tempo padrão do **Módulo 4** é a base para calcular a capacidade usada em todos os níveis. O **Módulo 6 (Lean)** vai questionar parte dessa lógica, trocando “empurrar pelo plano” por “puxar pelo consumo”.

#### ✍️ Exercícios

**1.M1** Ordene do nível mais agregado ao mais detalhado:
   Itens (fora de ordem): MRP · PMP / MPS · Planejamento agregado / S&OP · Plano de produção (capacidade) · Sequenciamento

**1.M2** Qual o principal objetivo do S&OP?
   a) Calcular o tempo padrão das operações
   b) Chegar a um plano único entre vendas, produção, compras e finanças
   c) Definir a sequência das ordens na máquina
   d) Substituir o MRP

**1.M3** *Uma loja de móveis oferece 3 tamanhos, 5 cores e 4 tipos de puxador para o mesmo armário. O cliente aceita esperar 3 dias, mas a fabricação completa leva 15 dias.* Qual estratégia de resposta é mais adequada?
   a) ETO
   b) MTO
   c) ATO: fabricar os módulos antes e montar no pedido
   d) MTS de todas as 60 combinações

**1.M4** O PMP (plano mestre de produção) trabalha com famílias de produtos, e o planejamento agregado trabalha com produtos finais.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🔧 Médio)

Cada nível tem ferramentas: plano de produção e capacidade (estratégico); **S&OP**, planejamento agregado e **PMP/MPS** (tático); **MRP**, programação e sequenciamento (operacional). O **S&OP** alinha vendas, produção, compras e finanças num plano único por família de produtos.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Analisar a coerência entre os níveis do planejamento
- Relacionar ponto de desacoplamento, estoque e prazo de entrega
- Criticar o planejamento feito apenas por uma área

**🔴 Conceito-chave — Coerência entre níveis**

Cada nível **restringe** o seguinte: o plano agregado cabe na capacidade estratégica; o PMP, somado por família, bate com o plano agregado (**desagregação**); o MRP só é viável se o PMP respeitar a capacidade (verificada pelo **RCCP**). Quando um nível ignora o de cima, surgem planos impossíveis e o chão de fábrica passa a trabalhar por “urgência”.

**🔴 Conceito-chave — Ponto de desacoplamento**

É o ponto da cadeia até onde se produz por **previsão** e a partir do qual se produz por **pedido**. Estoque fica guardado exatamente nesse ponto.  
MTS: desacoplamento no produto acabado. ATO: nos módulos. MTO: na matéria-prima. ETO: antes do projeto.  
Mover o ponto para perto do cliente reduz o prazo de entrega, mas aumenta estoque e risco de obsolescência. Adiar a diferenciação (**postponement**) é uma forma de ter prazo curto com menos estoque.

**⚖️ Limitações e trade-offs — Limitações do planejamento hierárquico**

• A previsão sempre erra; planos longos acumulam erro.  
• Congelar o plano dá estabilidade, mas reduz a capacidade de responder ao cliente.  
• A desagregação pode gerar combinações que a fábrica não consegue fazer (setups, gargalos).  
Por isso existem **zonas de congelamento** no PMP, replanejamento periódico e mecanismos de puxar (Módulo 6).

**📚 Para aprofundar**

• TUBINO, D. F. *Planejamento e Controle da Produção: teoria e prática*. Atlas.  
• CORRÊA, H. L.; GIANESI, I. G. N.; CAON, M. *Planejamento, Programação e Controle da Produção: MRP II/ERP*. Atlas.  
• SLACK, N.; BRANDON-JONES, A.; JOHNSTON, R. *Administração da Produção*. Atlas.  
• VOLLMANN, T. E. et al. *Manufacturing Planning and Control Systems for Supply Chain Management*. McGraw-Hill.

#### ✍️ Exercícios

**1.D1** Mover o ponto de desacoplamento para mais perto do cliente tende a:
   a) Aumentar o prazo de entrega e reduzir o estoque
   b) Reduzir o prazo de entrega e aumentar o estoque e o risco de obsolescência
   c) Não alterar prazo nem estoque
   d) Eliminar a necessidade de previsão

**1.D2** *O plano agregado prevê 50 mil caixas em dezembro. Somando o PMP de cada sabor, chega-se a 58 mil caixas.* Qual o problema e o que fazer?
   a) Nenhum: o PMP sempre pode superar o agregado
   b) Incoerência entre níveis: revisar o PMP (ou o agregado no S&OP) e verificar a capacidade com o RCCP
   c) Aumentar o preço para reduzir a demanda
   d) Ignorar o plano agregado

**1.D3** Uma empresa faz o planejamento só na área de vendas e manda o número para a fábrica. Explique os riscos e proponha uma melhoria.

**1.D4** Congelar o PMP nas próximas semanas aumenta a estabilidade da fábrica, mas reduz a flexibilidade para atender mudanças do cliente.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🧠 Difícil)

Os níveis precisam ser **coerentes**: a soma do PMP deve caber no plano agregado, e este na capacidade instalada. O **ponto de desacoplamento** separa o que é feito por previsão do que é feito por pedido: quanto mais perto do cliente, menor o prazo e maior o estoque. Plano feito só por uma área tende a falhar na execução.

---

## 2. 🔮 Previsão de demanda I: médias e suavização

**🧩 Pré-requisitos:** Média e desvio-padrão (Módulo 13); O que é PCP.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Diferenciar métodos qualitativos e quantitativos
- Calcular a média móvel simples
- Explicar por que toda previsão tem erro

**🏭 Por que isso importa**

Quase todo o PCP começa pela previsão: quanto comprar, quantas pessoas escalar, quanto estoque manter. Previsão ruim vira **falta** (cliente perdido) ou **excesso** (dinheiro parado e produto vencido).

**🔴 Conceito-chave — Qualitativos × quantitativos**

**Qualitativos:** opinião de especialistas, equipe de vendas, **método Delphi** (rodadas anônimas até o consenso), pesquisa de mercado. Úteis para produto novo ou sem histórico.  
**Quantitativos:** usam dados.  
• **Séries temporais:** o passado da própria demanda (médias, suavização, tendência, sazonalidade).  
• **Causais:** relacionam a demanda a outra variável (preço, temperatura, renda), por exemplo com regressão.

**🔴 Conceito-chave — Padrões de uma série**

**Nível** (média), **tendência** (sobe ou desce), **sazonalidade** (padrão que se repete: mês, dia da semana), **ciclo** (ondas longas da economia) e **aleatoriedade** (o que não se explica).

**🔵 Fórmula — Média móvel simples (MMS)**

Fₜ₊₁ = (Aₜ + Aₜ₋₁ + … + Aₜ₋ₙ₊₁) ÷ n

| Símbolo | Significado |
|---|---|
| F | Previsão (forecast) |
| A | Demanda real (actual) |
| n | Número de períodos na média |

**🧮 Exemplo resolvido — Média móvel de 3 meses**

Demanda de caixas de bombom (mil): jan 40 · fev 44 · mar 42 · abr 46 · mai 48 · jun 50.  
Previsão para julho (n = 3): (46 + 48 + 50) ÷ 3 = **48 mil caixas**.  
Para agosto, a janela “anda”: sai abril, entra julho.

**😂 Exemplo do dia a dia — Quanto pão comprar?**

Você compra pão para a casa olhando as últimas 3 semanas: 10, 12 e 11 pães. Média = 11. Isso é média móvel. Se chega visita, a média não sabe: é aí que entra a opinião (método qualitativo) ou uma variável causal.

**🟡 Atenção — Toda previsão erra**

A pergunta não é “a previsão está certa?”, mas **“quanto ela erra e para que lado?”**. Por isso toda previsão deve vir com a medida do erro (próxima lição) e ser revisada periodicamente.

**🔊 Para memorizar**

**“Média móvel anda, média ponderada escolhe, exponencial corrige.”**

#### ✍️ Exercícios

**2.F1** Um produto totalmente novo, sem histórico de vendas, precisa de previsão. Qual abordagem é mais indicada no início?
   a) Média móvel de 12 meses
   b) Métodos qualitativos (especialistas, Delphi, pesquisa de mercado)
   c) Suavização exponencial com α = 0,9
   d) Nenhuma: não se prevê produto novo

**2.F2** Demanda dos últimos 3 meses: 120, 130 e 140 unidades. Qual a previsão pela média móvel de 3 meses?

**2.F3** Ligue o padrão da série à descrição:
   1. Tendência
   2. Sazonalidade
   3. Aleatoriedade
   4. Nível
   Ligar com: A demanda sobe ou desce ao longo do tempo · Padrão que se repete a cada ano, mês ou semana · Valor médio em torno do qual a série oscila · Variação que não se consegue explicar

**2.F4** Uma boa previsão de demanda não tem erro.
   ( ) Verdadeiro  ( ) Falso

**2.F5** No método ___, especialistas respondem em rodadas anônimas até chegar a um consenso.
   Opções: Delphi · MRP · Johnson · PEPS

**2.F6** Demanda dos últimos 3 meses: 140, 94 e 148 unidades. Qual a previsão pela média móvel de 3 meses? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

Previsão **qualitativa** usa opinião (especialistas, Delphi, pesquisa de mercado); **quantitativa** usa dados históricos. A **média móvel simples** faz a média dos últimos n períodos. Toda previsão erra: o objetivo é errar pouco e sem viés.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular a média móvel ponderada
- Calcular a previsão por suavização exponencial
- Explicar o efeito do número de períodos e de α

**🔵 Fórmula — Média móvel ponderada**

Fₜ₊₁ = Σ wᵢ · Aᵢ   com Σ wᵢ = 1

| Símbolo | Significado |
|---|---|
| wᵢ | Peso do período i (maior para os recentes) |
| Aᵢ | Demanda do período i |

**🧮 Exemplo resolvido — Ponderada 0,5 / 0,3 / 0,2**

Com jun = 50, mai = 48, abr = 46 e pesos 0,5 (mais recente), 0,3 e 0,2:  
F(jul) = 0,5 × 50 + 0,3 × 48 + 0,2 × 46 = 25 + 14,4 + 9,2 = **48,6 mil**.  
Mais próxima da tendência de alta do que a média simples (48).

**🔵 Fórmula — Suavização exponencial simples**

Fₜ₊₁ = Fₜ + α · (Aₜ − Fₜ)   ou   Fₜ₊₁ = α · Aₜ + (1 − α) · Fₜ

| Símbolo | Significado |
|---|---|
| α | Constante de suavização, entre 0 e 1 |
| Aₜ − Fₜ | Erro do período |

**🧮 Exemplo resolvido — Suavização com α = 0,3**

Previsão de junho = 47; demanda real de junho = 50.  
F(jul) = 47 + 0,3 × (50 − 47) = 47 + 0,9 = **47,9 mil**.  
Leitura: a previsão “anda” 30% do erro na direção da realidade.

**🟢 Dica prática — Efeito de n e de α**

**n grande / α pequeno:** previsão suave, filtra o ruído, mas reage devagar a mudanças reais.  
**n pequeno / α grande:** reage rápido, mas “persegue” o ruído.  
Valores de α entre 0,1 e 0,3 são comuns em demanda estável; o melhor valor se escolhe pelo erro histórico.

> **🤔 Antes de ler…** Na suavização exponencial, se α = 1, qual será a previsão do próximo período?
>
> <details><summary>Revelar</summary>Igual à última demanda real (Fₜ₊₁ = Aₜ): é a previsão “ingênua”.</details>

#### ✍️ Exercícios

**2.M1** Demandas: abr 46, mai 48, jun 50. Pesos 0,2 (abr), 0,3 (mai) e 0,5 (jun). Qual a previsão ponderada para julho?

**2.M2** Previsão de maio = 200; demanda real de maio = 220; α = 0,2. Qual a previsão de junho pela suavização exponencial?

**2.M3** A demanda mudou de patamar de forma definitiva (nova rede de clientes). Qual ajuste faz a suavização reagir mais rápido?
   a) Diminuir α
   b) Aumentar α
   c) Aumentar o número de períodos da média
   d) Usar pesos iguais

**2.M4** Na média móvel ponderada, os pesos devem somar 1.
   ( ) Verdadeiro  ( ) Falso

**2.M5** *A demanda de embalagens varia bastante de semana para semana, mas sem mudança de patamar. A previsão atual usa α = 0,8 e muda muito a cada semana.* O que fazer?
   a) Aumentar α para 0,95
   b) Reduzir α (ex.: 0,1 a 0,3) e comparar o erro histórico
   c) Parar de prever
   d) Usar só a demanda da última semana

**2.M6** Demandas: mês 1 = 40, mês 2 = 59, mês 3 (mais recente) = 60. Pesos 0,16, 0,24 e 0,6, respectivamente. Qual a previsão ponderada para o mês 4? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

**2.M7** Previsão do mês = 245; demanda real = 260; α = 0,5. Qual a previsão do próximo mês pela suavização exponencial? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

**Média ponderada:** pesos maiores para os períodos recentes (pesos somam 1). **Suavização exponencial:** Fₜ₊₁ = Fₜ + α(Aₜ − Fₜ). n grande ou α pequeno → previsão estável e lenta; n pequeno ou α grande → rápida, mas nervosa.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Escolher o método conforme o padrão da série
- Explicar o atraso das médias diante de tendência
- Justificar a escolha de α com base no erro histórico

**🔴 Conceito-chave — Por que “exponencial”?**

Expandindo a fórmula: Fₜ₊₁ = αAₜ + α(1−α)Aₜ₋₁ + α(1−α)²Aₜ₋₂ + …  
Os pesos dos períodos passados caem em **progressão geométrica**: todo o histórico entra, mas o recente pesa mais. Por isso basta guardar a última previsão e a última demanda.

**⚖️ Limitações e trade-offs — Médias atrasam na tendência**

Se a demanda cresce 2 mil por mês, a MMS de 3 meses fica, em média, **2 períodos atrasada** em relação ao último ponto (erra cerca de 4 mil para baixo, sempre). A suavização simples também gera erro sistemático. Sinal disso: erros com o **mesmo sinal** em sequência (viés). Solução: métodos com tendência (Holt, regressão) — próxima lição.

**🔴 Conceito-chave — Como escolher α**

1. Separe o histórico em uma parte para ajuste e outra para teste.  
2. Calcule as previsões com vários α (0,1; 0,2; …; 0,9).  
3. Compare o erro (MAD, MSE ou MAPE) na parte de teste.  
4. Escolha o α de menor erro e **reavalie** periodicamente.  
Softwares fazem isso por otimização, mas a lógica é a mesma.

**📚 Para aprofundar**

• HYNDMAN, R. J.; ATHANASOPOULOS, G. *Forecasting: Principles and Practice*. OTexts (livre, online).  
• TUBINO, D. F. *Planejamento e Controle da Produção: teoria e prática*. Atlas (capítulo de previsão de demanda).  
• MAKRIDAKIS, S.; WHEELWRIGHT, S. C.; HYNDMAN, R. J. *Forecasting: Methods and Applications*. Wiley.

#### ✍️ Exercícios

**2.D1** A demanda cresce de forma constante e a previsão por média móvel erra sempre para baixo. O que isso indica?
   a) Erro aleatório normal
   b) Viés causado pela tendência: a média atrasa; usar método com tendência (Holt ou regressão)
   c) Que α está baixo demais
   d) Que a demanda é sazonal

**2.D2** Na suavização exponencial simples, todos os dados passados influenciam a previsão, com pesos que diminuem geometricamente.
   ( ) Verdadeiro  ( ) Falso

**2.D3** Ordene o procedimento para escolher α:
   Itens (fora de ordem): Calcular o erro de cada α no teste · Escolher o α de menor erro · Gerar previsões com vários valores de α · Reavaliar periodicamente · Separar histórico em ajuste e teste

**2.D4** O gerente quer usar a média móvel de 12 meses para prever a venda mensal de panetones. Avalie a proposta.

#### 📝 Resumo (🧠 Difícil)

Médias e suavização simples servem para séries **sem tendência nem sazonalidade**; com tendência, elas ficam **sempre atrasadas**. α é escolhido comparando o erro histórico (MAD, MSE) de vários valores. Quando há tendência, usa-se Holt ou regressão; com sazonalidade, índices sazonais ou Holt-Winters.

---

## 3. 📉 Previsão de demanda II: tendência, sazonalidade e erro

**🧩 Pré-requisitos:** Previsão I; Correlação e regressão (Módulo 13).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Calcular o erro de previsão de um período
- Calcular o MAD
- Reconhecer um índice sazonal

**🏭 Por que isso importa**

Um método de previsão só é bom se **erra pouco e não erra sempre para o mesmo lado**. Medir o erro permite escolher o método, dimensionar o estoque de segurança (Módulo 7) e saber quando o modelo parou de funcionar.

**🔵 Fórmula — Erro e MAD**

eₜ = Aₜ − Fₜ  
MAD = Σ |eₜ| ÷ n

| Símbolo | Significado |
|---|---|
| eₜ | Erro do período t |
| MAD | Desvio absoluto médio (mean absolute deviation) |
| n | Número de períodos |

**🧮 Exemplo resolvido — Calculando o MAD**

Real: 100 · 110 · 90 · 120  
Previsto: 105 · 100 · 100 · 110  
Erros: −5 · +10 · −10 · +10  
MAD = (5 + 10 + 10 + 10) ÷ 4 = 35 ÷ 4 = **8,75 unidades**.

**🔴 Conceito-chave — Índice sazonal**

Mostra quanto um período costuma ficar **acima ou abaixo da média**.  
• Índice 1,2 → 20% acima da média.  
• Índice 0,8 → 20% abaixo.  
A média dos índices de um ciclo completo é 1 (ex.: 4 trimestres somam 4).

**😂 Exemplo do dia a dia — Sorvete e guarda-chuva**

A sorveteria vende mais no verão todo ano (sazonalidade) e, com o bairro crescendo, vende um pouco mais a cada ano (tendência). Prever só pela média do ano faria faltar sorvete em janeiro e sobrar em julho.

**🟡 Atenção — Erro positivo × negativo**

Pela convenção eₜ = real − previsto: erro **positivo** = vendeu mais do que o previsto (**previsão baixa**, risco de falta). Erro **negativo** = previsão alta (risco de sobra). Alguns livros usam o sinal contrário: confira a convenção.

#### ✍️ Exercícios

**3.F1** Previsão = 500 unidades; demanda real = 460. Qual o erro (real − previsto)?

**3.F2** Erros de 4 meses: +6, −4, +2, −8. Qual o MAD?

**3.F3** O índice sazonal de dezembro é 1,5. O que isso significa?
   a) Dezembro vende 1,5 unidade
   b) Dezembro costuma vender 50% acima da média
   c) Dezembro vende 15% abaixo
   d) A tendência é de 1,5 por mês

**3.F4** Pela convenção erro = real − previsto, um erro positivo indica que a previsão ficou abaixo da demanda.
   ( ) Verdadeiro  ( ) Falso

**3.F5** Erros de previsão (real − previsto) em 4 meses: 8 · -1 · -6 · 2. Qual o MAD? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

Erro = **real − previsto**. O **MAD** é a média dos erros em valor absoluto. Um **índice sazonal** de 1,2 significa 20% acima da média; 0,8, 20% abaixo.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular MAPE e MSE e interpretar cada um
- Projetar a demanda por regressão linear
- Aplicar índices sazonais a uma previsão

**🔵 Fórmula — MAPE e MSE**

MAPE = (Σ |eₜ| ÷ Aₜ) ÷ n × 100%  
MSE = Σ eₜ² ÷ n

| Símbolo | Significado |
|---|---|
| MAPE | Erro percentual absoluto médio |
| MSE | Erro quadrático médio |

**🧮 Exemplo resolvido — MAPE e MSE do exemplo**

|e|/A: 5/100 = 5,0% · 10/110 = 9,09% · 10/90 = 11,11% · 10/120 = 8,33%  
MAPE = 33,53% ÷ 4 ≈ **8,38%**  
MSE = (25 + 100 + 100 + 100) ÷ 4 = **81,25**

**🟢 Dica prática — Qual medida usar?**

**MAD:** fácil de explicar, na unidade do produto.  
**MAPE:** em %, compara itens de volumes diferentes; distorce quando a demanda real é próxima de zero.  
**MSE:** pune muito os erros grandes; útil quando um erro grande é muito caro.

**🔵 Fórmula — Regressão linear para tendência**

F = a + b · x  
b = (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²)  
a = ȳ − b · x̄

| Símbolo | Significado |
|---|---|
| x | Período (1, 2, 3…) |
| b | Inclinação: quanto a demanda cresce por período |
| a | Intercepto |

**🧮 Exemplo resolvido — Tendência de 5 meses**

x: 1 · 2 · 3 · 4 · 5 | y: 20 · 24 · 27 · 30 · 34 (mil caixas)  
Σx = 15 · Σy = 135 · Σxy = 439 · Σx² = 55  
b = (5 × 439 − 15 × 135) ÷ (5 × 55 − 15²) = (2.195 − 2.025) ÷ 50 = **3,4**  
a = 27 − 3,4 × 3 = **16,8**  
Previsão para x = 6: 16,8 + 3,4 × 6 = **37,2 mil caixas**.

**🧮 Exemplo resolvido — Índices sazonais trimestrais**

Médias por trimestre (2 anos): T1 84 · T2 126 · T3 105 · T4 105. Média geral = 105.  
Índices: T1 = 84/105 = **0,8** · T2 = **1,2** · T3 = **1,0** · T4 = **1,0**.  
Se a previsão anual for 480 (base trimestral = 120): T2 = 120 × 1,2 = **144**.

**🟣 Conexão**

A regressão é a mesma do **Módulo 13** (lição de correlação e regressão). Lá ela explicava uma variável por outra; aqui a variável explicativa é o **tempo**. O desvio dos erros de previsão alimenta o **estoque de segurança** do Módulo 7.

#### ✍️ Exercícios

**3.M1** Real: 100 e 80. Previsto: 90 e 88. Qual o MAPE (%)?

**3.M2** Regressão da demanda: F = 16,8 + 3,4x. Qual a previsão para o período 8?

**3.M3** Base trimestral prevista = 120; índice sazonal do trimestre = 0,8. Qual a previsão do trimestre?

**3.M4** Você precisa comparar a acurácia da previsão de um item que vende 50 unidades/mês com outro que vende 50 mil. Qual medida é mais adequada?
   a) MAD
   b) MSE
   c) MAPE
   d) Soma dos erros

**3.M5** O MSE pune erros grandes mais do que o MAD, porque eleva os erros ao quadrado.
   ( ) Verdadeiro  ( ) Falso

**3.M6** Mês 1: real 170, previsto 195. Mês 2: real 195, previsto 205. Qual o MAPE (%)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

**3.M7** A reta de tendência da demanda é F = 22,5 + 4,2·x. Qual a previsão para o período x = 8? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

**3.M8** Previsão anual = 800 unidades, distribuída em 4 trimestres. O índice sazonal do trimestre é 1,3. Qual a previsão do trimestre? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

**MAPE** = média de |erro| ÷ real, em %: compara produtos de volumes diferentes. **MSE** = média dos erros ao quadrado: pune erros grandes. **Regressão:** y = a + b·x, com b = (nΣxy − ΣxΣy) ÷ (nΣx² − (Σx)²) e a = ȳ − b·x̄. **Sazonal:** previsão = base × índice.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Usar o sinal de rastreamento para detectar viés
- Comparar métodos pelo erro e escolher o mais adequado
- Reconhecer os limites da decomposição simples e dos métodos causais

**🔵 Fórmula — Sinal de rastreamento (tracking signal)**

TS = Σ eₜ ÷ MAD

| Símbolo | Significado |
|---|---|
| Σ eₜ | Soma dos erros com sinal (RSFE) |
| MAD | Desvio absoluto médio |

**🔴 Conceito-chave — Lendo o sinal de rastreamento**

Se os erros se compensam, a soma fica perto de zero e o TS também. Se a previsão erra sempre para o mesmo lado, a soma cresce e o TS sai da faixa de controle — são comuns limites de **±4 MAD** (alguns autores usam de ±3 a ±8, conforme o custo de reagir).  
No exemplo: Σe = −5 + 10 − 10 + 10 = 5; TS = 5 ÷ 8,75 ≈ **0,57** → sem viés relevante.

**🔴 Conceito-chave — Holt e Holt-Winters**

**Holt:** suavização exponencial com duas equações, uma para o **nível** (α) e outra para a **tendência** (β). Previsão k períodos à frente = nível + k × tendência.  
**Holt-Winters:** acrescenta uma terceira equação para a **sazonalidade** (γ), em versão aditiva ou multiplicativa.

**⚖️ Limitações e trade-offs — Cuidados**

• Índices calculados por médias simples misturam tendência e sazonalidade; a **decomposição clássica** remove a tendência com médias móveis centradas antes de calcular os índices.  
• Regressão extrapolada para longe dos dados supõe que a tendência continua para sempre.  
• Modelo **causal** (ex.: vendas × temperatura) só ajuda se a variável explicativa puder ser prevista ou for conhecida antes.  
• Compare métodos pelo erro em dados **não usados no ajuste**; senão, o mais complexo sempre parece melhor.

**🏭 Na empresa — Caso: promoção que enganou o modelo**

Uma promoção em março dobrou as vendas. Sem marcar esse mês como atípico, o modelo passou a prever mais para abril e maio, e sobrou estoque. Boa prática: registrar **eventos** (promoção, greve, falta de produto) e tratar esses pontos antes de ajustar o modelo. Venda perdida por falta de estoque também distorce: a venda registrada fica abaixo da demanda real.

#### ✍️ Exercícios

**3.D1** Soma dos erros (com sinal) nos últimos 6 meses = 36; MAD = 6. Qual o sinal de rastreamento?

**3.D2** *O sinal de rastreamento de um item passou de +1 para +5,5 em quatro meses. O MAD não mudou muito.* Qual a interpretação e a ação?
   a) Tudo normal: o MAD está estável
   b) Viés: a previsão está sistematicamente abaixo da demanda; investigar mudança de patamar ou tendência e ajustar o modelo
   c) A previsão está alta demais; reduzir a produção
   d) Erro aleatório; ignorar

**3.D3** Para escolher entre dois métodos, deve-se comparar o erro nos mesmos dados usados para ajustar os modelos.
   ( ) Verdadeiro  ( ) Falso

**3.D4** Qual método de suavização trata nível, tendência e sazonalidade?
   a) Média móvel simples
   b) Suavização exponencial simples
   c) Holt
   d) Holt-Winters

**3.D5** Em março houve uma promoção e, em abril, faltou produto por 2 semanas. Como tratar esses dados antes de ajustar o modelo de previsão?

**3.D6** Soma dos erros (real − previsto) = -20; MAD = 9. Qual o sinal de rastreamento? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🧠 Difícil)

**Sinal de rastreamento** = soma dos erros ÷ MAD; saindo de uma faixa (em geral ±4), há viés e o modelo deve ser revisto. Métodos se comparam pelo erro **fora da amostra**. A decomposição simples por médias ignora a tendência dentro do cálculo dos índices; a decomposição clássica usa médias móveis centradas. Modelos causais exigem prever também a variável explicativa.

---

## 4. 📋 Planejamento agregado e plano mestre (PMP)

**🧩 Pré-requisitos:** Hierarquia do planejamento; Previsão de demanda.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o que é o planejamento agregado
- Diferenciar estratégia de acompanhamento e nivelada
- Explicar o que o PMP/MPS define

**🏭 Por que isso importa**

A demanda de bombons triplica antes da Páscoa e do Natal. Contratar e demitir toda vez custa caro; produzir tudo em cima da hora é impossível. O planejamento agregado decide **como atravessar os picos** com o menor custo.

**🔴 Conceito-chave — Planejamento agregado**

Trabalha com **famílias de produtos** (ex.: “bombons”, não cada sabor), por **mês**, num horizonte de 6 a 18 meses. Variáveis de decisão: taxa de produção, número de pessoas, horas extras, estoque, subcontratação, atrasos.

**🔴 Conceito-chave — Duas estratégias puras**

**Acompanhar a demanda (chase):** produz em cada mês o que vende. Pouco estoque, mas muda a força de trabalho ou as horas.  
**Produção nivelada (level):** produz sempre a mesma quantidade. Força de trabalho estável; o **estoque** acumula nos meses fracos e é consumido nos fortes.  
**Mista:** combina as duas (o mais comum na prática).

**😂 Exemplo do dia a dia — A marmita da semana**

**Acompanhar:** cozinhar todo dia só o almoço do dia. **Nivelar:** cozinhar no domingo e congelar as marmitas da semana. Nivelar economiza esforço, mas precisa de freezer (estoque) e a comida pode enjoar (obsolescência).

**🔴 Conceito-chave — PMP / MPS**

**Plano Mestre de Produção (Master Production Schedule):** quanto de **cada produto final** (ex.: caixa de bombom sortida 250 g) será produzido **em cada semana**. É a “ponte” entre o plano agregado e o MRP.

**🔊 Para memorizar**

**“Agregado agrupa, Mestre detalha.”** Agregado: família × mês. Mestre: produto × semana.

#### ✍️ Exercícios

**4.F1** Ligue a estratégia à característica:
   1. Acompanhar a demanda
   2. Produção nivelada
   3. Mista
   Ligar com: Combina variação de produção e estoque · Produção constante; estoque absorve a variação · Produção varia mês a mês; pouco estoque

**4.F2** O que o PMP (plano mestre) define?
   a) Quanto de cada produto final produzir em cada semana
   b) O salário de cada operador
   c) A sequência das ordens numa máquina
   d) O preço de venda de cada produto

**4.F3** O planejamento agregado trabalha com famílias de produtos, e não com cada item.
   ( ) Verdadeiro  ( ) Falso

**4.F4** Na estratégia ___, a produção é constante e o estoque absorve os picos.
   Opções: nivelada · de acompanhamento · Johnson · PEPS

#### 📝 Resumo (🌱 Fácil)

O **planejamento agregado** define, por família e por mês, quanto produzir, com quantas pessoas e quanto estoque. **Acompanhar (chase)**: produção segue a demanda. **Nivelar (level)**: produção constante e o estoque absorve a diferença. O **PMP/MPS** diz **quanto de cada produto final** produzir em cada semana.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular o estoque de um plano nivelado
- Montar o estoque projetado de um PMP
- Calcular a quantidade disponível para promessa (ATP)

**🧮 Exemplo resolvido — Plano nivelado**

Demanda (caixas): mês 1 = 800 · mês 2 = 1.000 · mês 3 = 1.200 · mês 4 = 1.000. Total = 4.000. Estoque inicial = 0.  
Produção nivelada = 4.000 ÷ 4 = **1.000/mês**.  
Estoque final: m1 = 0 + 1.000 − 800 = 200 · m2 = 200 · m3 = 200 + 1.000 − 1.200 = 0 · m4 = 0.  
Soma dos estoques finais = 400 caixas·mês. A R$ 2,00 por caixa·mês → **R$ 800** de custo de estoque.

**🔵 Fórmula — Estoque projetado no PMP**

Eₜ = Eₜ₋₁ + PMPₜ − max(Previsãoₜ, Pedidosₜ)

| Símbolo | Significado |
|---|---|
| Eₜ | Estoque projetado ao fim do período t |
| PMPₜ | Quantidade no plano mestre em t |
| Pedidosₜ | Pedidos firmes de clientes em t |

**🧮 Exemplo resolvido — PMP com lote de 100**

Estoque inicial = 50. Previsão = 40 por semana. Pedidos firmes: s1 45 · s2 30 · s3 20 · s4 10 · s5 0 · s6 0. Lote do PMP = 100.  
s1: 50 − 45 = 5 · s2: 5 − 40 < 0 → **PMP 100** → 65 · s3: 25 · s4: 25 − 40 < 0 → **PMP 100** → 85 · s5: 45 · s6: 5.

**🔴 Conceito-chave — ATP — disponível para promessa**

Quanto ainda pode ser **prometido** a novos pedidos sem mexer no plano.  
• 1º período: estoque inicial + PMP − pedidos até o próximo PMP.  
• Períodos com PMP: PMP − pedidos até o próximo PMP.  
No exemplo: ATP s1 = 50 − 45 = **5** · ATP s2 = 100 − (30 + 20) = **50** · ATP s4 = 100 − (10 + 0 + 0) = **90**.

**🟡 Atenção — Previsão × pedidos**

No curto prazo, os **pedidos firmes** costumam superar a previsão (clientes já pediram); mais à frente, vale a previsão. Por isso se usa o **maior** dos dois no estoque projetado, e só os **pedidos** no ATP.

#### ✍️ Exercícios

**4.M1** Demanda: 600, 900, 1.200 e 900 unidades (4 meses). Estoque inicial = 0. Qual a produção mensal no plano nivelado?

**4.M2** Estoque inicial = 50; PMP da semana = 0; previsão = 40; pedidos firmes = 45. Qual o estoque projetado ao fim da semana?

**4.M3** PMP de 100 unidades na semana 2; pedidos firmes: semana 2 = 30, semana 3 = 20; o próximo PMP é na semana 4. Qual o ATP da semana 2?

**4.M4** *Um cliente liga pedindo 70 caixas para a semana 3. O ATP da semana 2 é 50 e o da semana 4 é 90.* Qual a melhor resposta do vendedor?
   a) Prometer as 70 na semana 3
   b) Prometer 50 na semana 3 e 20 na semana 4 (ou as 70 na semana 4), sem mexer no plano
   c) Recusar o pedido
   d) Prometer e pedir hora extra à fábrica sem consultar

**4.M5** No ATP, usa-se a previsão de demanda para calcular quanto ainda pode ser prometido.
   ( ) Verdadeiro  ( ) Falso

**4.M6** Demanda em 4 meses: 950, 1.350, 600 e 800. Estoque inicial e final desejado = 0. Qual a produção mensal no plano nivelado? 🎲 *(números sorteados; no app mudam a cada vez)*

**4.M7** Estoque inicial = 80; PMP da semana = 100; previsão = 80; pedidos firmes = 85. Qual o estoque projetado ao fim da semana? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Plano nivelado: produção = demanda total ÷ períodos; estoque final = estoque inicial + produção − demanda. No PMP: estoque projetado = anterior + PMP − max(previsão, pedidos). **ATP** = quanto do estoque ou lote ainda pode ser prometido a novos pedidos.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Comparar planos agregados pelo custo total
- Considerar restrições trabalhistas e de capacidade nas alternativas
- Explicar as zonas de congelamento do PMP

**🔴 Conceito-chave — Custos do planejamento agregado**

• **Contratar:** recrutamento, treinamento, curva de aprendizagem.  
• **Demitir:** verbas rescisórias, perda de conhecimento, clima.  
• **Hora extra:** adicional mínimo de 50% (Constituição, art. 7º, XVI), fadiga.  
• **Ociosidade:** pessoas pagas sem produzir.  
• **Estoque:** capital parado, armazenagem, perdas.  
• **Falta/atraso:** venda perdida, multa, imagem.  
• **Subcontratação:** custo unitário maior, risco de qualidade.

**🧮 Exemplo resolvido — Comparando planos (ilustrativo)**

Mesma demanda do exemplo nivelado, capacidade normal de 1.000/mês.  
**Nivelado:** estoque 400 caixas·mês × R$ 2 = **R$ 800**.  
**Acompanhar com hora extra e ociosidade:** m1 produz 800 (200 de ociosidade × R$ 1,50 = R$ 300); m3 produz 1.200 (200 em hora extra × R$ 3 = R$ 600) → **R$ 900**.  
Aqui o nivelado ganha; se o estoque fosse perecível ou caro, a conclusão poderia mudar.

**🔴 Conceito-chave — Alternativas no Brasil**

**Banco de horas** (CLT, art. 59): compensa horas extras de um período com folgas em outro, conforme acordo ou convenção coletiva.  
**Férias coletivas** nos meses fracos.  
**Contrato temporário** (Lei 6.019/1974) para picos.  
Cada alternativa tem regras e limites legais; o plano precisa passar pelo RH e, quando for o caso, pelo sindicato.

**🔴 Conceito-chave — Zonas de congelamento do PMP**

**Congelada** (ex.: próximas 2 semanas): materiais comprados, sequência pronta; mudar custa caro.  
**Semicongelada** (ex.: semanas 3 a 6): muda com aprovação e análise de impacto.  
**Livre:** o plano ainda pode ser ajustado à vontade.  
Os limites dependem do lead time acumulado do produto.

**⚖️ Limitações e trade-offs — Limitações**

Modelos de planejamento agregado (inclusive por programação linear, Módulo 9) dependem de custos difíceis de estimar, como o custo de falta. Resultados devem ser lidos como **apoio à decisão**, com análise de sensibilidade, e não como resposta única.

#### ✍️ Exercícios

**4.D1** Plano nivelado gera estoques finais de 300, 300, 0 e 0 unidades em 4 meses. Custo de estoque = R$ 3 por unidade·mês. Qual o custo de estoque do plano (R$)?

**4.D2** *A demanda de bombons tem pico na Páscoa. O produto tem validade de 4 meses e a fábrica tem pouca câmara fria.* Qual estratégia agregada tende a ser mais adequada?
   a) Nivelada pura, produzindo o ano todo para estoque
   b) Mista: antecipar parte da produção dentro da validade e da câmara disponível, e cobrir o resto com hora extra, banco de horas ou temporários
   c) Acompanhar pura, contratando e demitindo todo mês
   d) Subcontratar 100% do pico sem avaliar qualidade

**4.D3** Ordene as zonas do PMP da mais próxima à mais distante no tempo:
   Itens (fora de ordem): Congelada · Livre · Semicongelada

**4.D4** Compare as estratégias de acompanhar a demanda e de produção nivelada para uma fábrica de bombons com pico de Natal, citando pelo menos três custos envolvidos.

#### 📝 Resumo (🧠 Difícil)

Compare planos pelo **custo total**: contratação, demissão, hora extra, ociosidade, estoque, falta e subcontratação. No Brasil, contratar e demitir tem custos trabalhistas relevantes; banco de horas e férias coletivas são alternativas. O PMP usa **zonas**: congelada (não se muda), semicongelada (muda com aprovação) e livre.

---

## 5. 🧮 MRP: calculando materiais

**🧩 Pré-requisitos:** Plano mestre (PMP).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o que é a lista de materiais (BOM)
- Diferenciar demanda independente e dependente
- Calcular a necessidade bruta de um componente

**🏭 Por que isso importa**

Uma caixa de bombom precisa de caixa de papelão, berço, bombons, fita e etiqueta. Se faltar **uma** etiqueta, a caixa não sai. O MRP calcula **o que, quanto e quando** comprar ou fabricar de cada componente para cumprir o PMP.

**🔴 Conceito-chave — Demanda independente × dependente**

**Independente:** vem do mercado e precisa ser **prevista** (caixas de bombom vendidas).  
**Dependente:** decorre de outro item e pode ser **calculada** (se vou montar 200 caixas com 12 bombons, preciso de 2.400 bombons).  
Orlicky (1975) popularizou o MRP justamente por essa ideia: não se prevê o que se pode calcular.

**🧠 Mapa — Lista de materiais (BOM)**

```
Caixa presente (nível 0)
├─ Embalagem ×1
│    comprada · LT 2 sem
├─ Bombom ×12
│    fabricado · LT 1 sem
│    └─ Chocolate 0,01 kg
│         comprado · LT 1 sem
└─ Fita 0,5 m
     comprada · LT 1 sem
```

**🔵 Fórmula — Necessidade bruta**

NB(componente) = quantidade planejada do pai × quantidade por unidade

| Símbolo | Significado |
|---|---|
| NB | Necessidade bruta |
| Pai | Item de nível superior na BOM |

**🧮 Exemplo resolvido — Explosão simples**

PMP: 200 caixas presente.  
Bombons: 200 × 12 = **2.400**. Embalagens: 200 × 1 = **200**. Fita: 200 × 0,5 = **100 m**.  
Chocolate (nível 2): 2.400 bombons × 0,01 kg = **24 kg**.

**😂 Exemplo do dia a dia — A receita de bolo**

Para 3 bolos, com 4 ovos por bolo, você precisa de 12 ovos (bruta). Tem 5 na geladeira: compra 7 (líquida). E o mercado só entrega amanhã: pede **hoje** (lead time). Isso é MRP de cozinha.

**🔊 Para memorizar**

**“Bruta, tira o que tem, tira o que vem, recua o tempo.”** Necessidade bruta → − estoque → − recebimentos programados → liberação lead time antes.

#### ✍️ Exercícios

**5.F1** Qual item tem demanda dependente?
   a) Caixa de bombom vendida no supermercado
   b) Bombom usado para montar a caixa
   c) Peça de reposição vendida ao consumidor
   d) Produto em promoção

**5.F2** PMP = 150 caixas; cada caixa leva 12 bombons. Qual a necessidade bruta de bombons?

**5.F3** A demanda dos componentes de um produto deve ser prevista separadamente, como a do produto final.
   ( ) Verdadeiro  ( ) Falso

**5.F4** A lista que mostra os componentes e as quantidades de um produto é a ___.
   Opções: BOM (lista de materiais) · EAP · Carta de controle · Curva ABC

**5.F5** PMP = 330 caixas; cada caixa usa 2 unidades do componente. Qual a necessidade bruta do componente? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

A **lista de materiais (BOM)** diz do que o produto é feito e em que quantidade. A demanda do produto final é **independente** (vem do mercado); a dos componentes é **dependente** (calculada). Necessidade bruta = quantidade do pai × quantidade por unidade.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular a necessidade líquida
- Recuar o lead time para definir a liberação de ordens
- Aplicar lote a lote e lote fixo

**🔵 Fórmula — Necessidade líquida**

NL = max(0; NB − Estoque disponível − Recebimentos programados + Estoque de segurança)

| Símbolo | Significado |
|---|---|
| Recebimentos programados | Ordens já emitidas, com data de chegada |
| Estoque de segurança | Quantidade mínima a manter |

**🔴 Conceito-chave — Registro do MRP (por período)**

• **Necessidade bruta**  
• **Recebimentos programados** (ordens já abertas)  
• **Estoque projetado disponível**  
• **Necessidade líquida**  
• **Recebimento planejado** (ordem nova, conforme o lote)  
• **Liberação de ordem planejada** (= recebimento planejado recuado do lead time)

**🧮 Exemplo resolvido — Bombons na semana 4**

A montagem das caixas leva 1 semana e o PMP pede 200 caixas na semana 5 → a ordem de montagem é liberada na semana 4 → NB de bombons na **semana 4** = 2.400.  
Estoque de bombons = 400; recebimento programado de 500 na semana 3.  
NL = 2.400 − 400 − 500 = **1.500**.  
Lote a lote → recebimento planejado de 1.500 na semana 4 → **liberação na semana 3** (LT 1).

**🧮 Exemplo resolvido — Embalagem com lote fixo**

NB semana 4 = 200; estoque = 50 → NL = 150.  
Lote fixo de 250 → recebimento planejado = **250** (sobram 100 em estoque).  
LT 2 semanas → **liberação na semana 2**.

**🟢 Dica prática — Regras de lote**

**Lote a lote (L4L):** pede exatamente a NL; menos estoque, mais pedidos.  
**Lote fixo:** múltiplos de um tamanho (caixa do fornecedor, capacidade do tacho).  
**Período fixo:** junta a necessidade de N períodos num só pedido.  
**Lote econômico (LEC):** equilibra custo de pedir e de estocar (Módulo 7).

**🟡 Atenção — Erro comum**

Esquecer de descontar o **recebimento programado** (ordem já aberta) e pedir de novo. Ou esquecer o **lead time**: a ordem sai na semana em que o material precisa chegar, e chega atrasada.

#### ✍️ Exercícios

**5.M1** NB = 2.400; estoque disponível = 400; recebimento programado = 500; estoque de segurança = 0. Qual a necessidade líquida?

**5.M2** NL = 150 unidades; lote fixo de 250. Quanto sobra em estoque após o recebimento e o consumo?

**5.M3** Um componente precisa chegar na semana 6 e tem lead time de 2 semanas. Em que semana a ordem deve ser liberada?
   a) Semana 4
   b) Semana 6
   c) Semana 8
   d) Semana 2

**5.M4** Ordene o cálculo do MRP para um item:
   Itens (fora de ordem): Aplicar a regra de lote · Calcular a necessidade bruta · Descontar estoque e recebimentos programados · Passar a necessidade para os componentes do nível abaixo · Recuar o lead time e liberar a ordem

**5.M5** *O MRP sugeriu comprar 500 etiquetas, mas já existe uma ordem de 500 aberta com o fornecedor, com chegada prevista para a mesma semana.* O que provavelmente aconteceu?
   a) O MRP está certo; é preciso comprar em dobro
   b) A ordem aberta não está registrada como recebimento programado no sistema
   c) A BOM está sem etiqueta
   d) O lead time é zero

**5.M6** NB = 2.600; estoque disponível = 50; recebimento programado = 0; estoque de segurança = 0. Qual a necessidade líquida? 🎲 *(números sorteados; no app mudam a cada vez)*

**5.M7** Necessidade líquida = 70; o fornecedor só vende em lotes de 100. Qual o recebimento planejado? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

**Necessidade líquida** = bruta − estoque disponível − recebimentos programados (+ estoque de segurança), nunca negativa. O **recebimento planejado** cobre a necessidade líquida conforme o lote; a **liberação da ordem** acontece **lead time antes**. Lote a lote: pede exatamente o necessário; lote fixo: múltiplos do lote.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Explicar MRP II e ERP
- Analisar o nervosismo do MRP e suas causas
- Discutir as premissas do MRP (lead time fixo, capacidade infinita)

**🔴 Conceito-chave — MRP → MRP II → ERP**

**MRP (anos 1960–70):** calcula materiais a partir do PMP, BOM e estoques.  
**MRP II (Manufacturing Resource Planning):** acrescenta capacidade (RCCP, CRP), roteiros, custos e integração com finanças.  
**ERP:** sistema integrado de toda a empresa (vendas, compras, estoque, produção, finanças, RH) sobre uma base de dados única.

**⚖️ Limitações e trade-offs — Premissas do MRP**

• **Capacidade infinita:** o MRP não verifica se a máquina dá conta; precisa do CRP.  
• **Lead time fixo:** na realidade, o lead time depende da fila, que depende da carga.  
• **Dados exatos:** BOM, estoques e lead times errados geram planos errados (“lixo entra, lixo sai”). Acuracidade de inventário é pré-requisito.

**🔴 Conceito-chave — Nervosismo do sistema**

Pequenas mudanças no PMP ou no estoque mudam muitas ordens nos níveis inferiores, a cada rodada do MRP. Causas: lotes fixos/econômicos que “amplificam” mudanças, replanejamento frequente, dados instáveis.  
Mitigações: **zona congelada**, **firmar** ordens planejadas, regras de lote mais estáveis, **pegging** (rastrear qual necessidade gerou cada ordem) e filtros de mensagens de reprogramação.

**🟣 Conexão**

O **Módulo 6 (Lean)** propõe puxar a produção por kanban nos itens de consumo regular, deixando o MRP para o planejamento de longo prazo e itens de demanda irregular. Abordagens como o **DDMRP** combinam MRP com pulmões posicionados; convém estudá-las com cuidado, pois há muita literatura comercial e menos avaliação independente.

#### ✍️ Exercícios

**5.D1** Qual premissa do MRP clássico mais frequentemente causa planos impossíveis no chão de fábrica?
   a) BOM com vários níveis
   b) Capacidade infinita e lead time fixo
   c) Uso de lote a lote
   d) Uso de semanas como período

**5.D2** O MRP II acrescenta ao MRP a verificação de capacidade e a integração com custos e finanças.
   ( ) Verdadeiro  ( ) Falso

**5.D3** *A cada rodada semanal do MRP, dezenas de ordens de componentes mudam de data e quantidade, e os compradores já não confiam nas sugestões.* Qual conjunto de ações mais ataca o problema?
   a) Rodar o MRP todos os dias
   b) Congelar o PMP no curto prazo, firmar ordens próximas, revisar regras de lote e melhorar a acuracidade dos dados
   c) Eliminar o estoque de segurança
   d) Voltar a planejar em planilha

**5.D4** A acuracidade de estoque da fábrica é de 70% (30% dos itens com saldo errado). Explique o efeito disso no MRP e proponha ações.

#### 📝 Resumo (🧠 Difícil)

**MRP II** acrescenta capacidade (CRP) e custos; o **ERP** integra toda a empresa. O MRP supõe **lead time fixo e capacidade infinita**; replanejar com frequência gera **nervosismo** (ordens mudando a cada rodada). Soluções: congelamento, regras de lote estáveis, pegging e verificação de capacidade.

---

## 6. 🏋️ Capacidade: quanto a fábrica aguenta

**🧩 Pré-requisitos:** Eficiência e utilização (Módulo 4); MRP.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Definir capacidade
- Diferenciar capacidade projetada, efetiva e realizada
- Calcular a capacidade disponível em horas

**🏭 Por que isso importa**

Um plano que não cabe na capacidade não é plano: é desejo. Verificar a capacidade evita prometer ao cliente o que a fábrica não consegue entregar e mostra, com antecedência, onde vai faltar máquina ou gente.

**🔴 Conceito-chave — Três capacidades**

**Projetada (de projeto):** máximo teórico, operando sem paradas.  
**Efetiva:** projetada menos as perdas **planejadas** (setups, manutenção preventiva, pausas, reuniões).  
**Realizada (real):** o que saiu de fato, após as perdas **não planejadas** (quebras, falta de material, retrabalho).

**🔵 Fórmula — Capacidade em horas**

Capacidade = nº de recursos × horas por turno × turnos por dia × dias

| Símbolo | Significado |
|---|---|
| Recursos | Máquinas ou pessoas equivalentes |

**🧮 Exemplo resolvido — Setor de embalagem**

3 embaladoras × 8 h × 2 turnos × 5 dias = **240 h por semana**.

**😂 Exemplo do dia a dia — O forno de casa**

Seu forno assa 2 formas por vez, 1 hora cada: em 4 horas, **8 bolos** (projetada). Mas você precisa pré-aquecer e lavar as formas (perdas planejadas): **6 bolos** (efetiva). Um bolo solou e a luz caiu por meia hora: saíram **5** (realizada).

**🔊 Para memorizar**

**“Projeto sonha, Efetiva planeja, Realizada entrega.”**

#### ✍️ Exercícios

**6.F1** Ligue o tipo de capacidade à definição:
   1. Projetada
   2. Efetiva
   3. Realizada
   Ligar com: Descontadas as perdas planejadas · Máximo teórico, sem paradas · O que de fato foi produzido

**6.F2** 4 máquinas trabalham 8 h por turno, 2 turnos por dia, 6 dias por semana. Qual a capacidade semanal em horas?

**6.F3** Setups e manutenção preventiva são perdas planejadas, descontadas para chegar à capacidade efetiva.
   ( ) Verdadeiro  ( ) Falso

**6.F4** Uma quebra inesperada de máquina afeta principalmente qual capacidade?
   a) Projetada
   b) Efetiva
   c) Realizada
   d) Nenhuma

**6.F5** 8 máquinas, 6 h por turno, 2 turno(s) por dia, 5 dias por semana. Qual a capacidade semanal em horas? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

**Capacidade** é o máximo que um recurso produz num período. **Projetada:** o máximo teórico. **Efetiva:** descontadas as perdas planejadas (setups, manutenção, pausas). **Realizada:** o que de fato saiu. Capacidade em horas = recursos × horas por turno × turnos × dias.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular utilização e eficiência pelas definições de capacidade
- Comparar carga e capacidade de um recurso
- Diferenciar RCCP e CRP

**🔵 Fórmula — Utilização e eficiência (Slack)**

Utilização = produção realizada ÷ capacidade projetada  
Eficiência = produção realizada ÷ capacidade efetiva

| Símbolo | Significado |
|---|---|
| Realizada | O que efetivamente saiu |
| Efetiva | Projetada menos perdas planejadas |

**🧮 Exemplo resolvido — Utilização × eficiência**

Projetada = 1.000 caixas/semana; efetiva = 850; realizada = 680.  
Utilização = 680 ÷ 1.000 = **68%** · Eficiência = 680 ÷ 850 = **80%**.

**🟡 Atenção — Definições diferentes**

No **Módulo 4**, eficiência = horas-padrão ÷ horas trabalhadas (desempenho da pessoa) e utilização = horas trabalhadas ÷ disponíveis. Aqui, as definições de Slack comparam **volumes** com capacidades. As duas são usadas: sempre diga **qual fórmula** está usando no relatório.

**🔵 Fórmula — Carga × capacidade**

Carga = Σ (quantidade do item × tempo padrão do item)  
Ocupação = carga ÷ capacidade × 100%

| Símbolo | Significado |
|---|---|
| Carga | Horas necessárias para cumprir o plano |

**🧮 Exemplo resolvido — A embalagem aguenta?**

Plano: 500 caixas X × 0,3 h + 200 caixas Y × 0,5 h = 150 + 100 = **250 h**.  
Capacidade = 240 h → ocupação = 250 ÷ 240 ≈ **104%** → **sobrecarga de 10 h**.

**🔴 Conceito-chave — RCCP × CRP**

**RCCP (rough-cut capacity planning):** verificação **grosseira** do PMP, só nos recursos críticos, usando um perfil de horas por produto. Rápida; feita antes de rodar o MRP.  
**CRP (capacity requirements planning):** verificação **detalhada**, usando as ordens do MRP, os roteiros e os tempos por centro de trabalho, período a período.

#### ✍️ Exercícios

**6.M1** Capacidade projetada = 1.000; efetiva = 850; realizada = 680. Qual a eficiência (%), pela definição de Slack?

**6.M2** Plano: 500 caixas X (0,3 h cada) e 200 caixas Y (0,5 h cada). Capacidade = 240 h. Qual a ocupação (%)?

**6.M3** Qual a diferença entre RCCP e CRP?
   a) São iguais
   b) RCCP verifica o PMP de forma grosseira nos recursos críticos; CRP verifica em detalhe as ordens do MRP por centro de trabalho
   c) RCCP é para compras e CRP para vendas
   d) CRP é feito antes do PMP

**6.M4** A eficiência (realizada ÷ efetiva) é sempre menor ou igual à utilização (realizada ÷ projetada).
   ( ) Verdadeiro  ( ) Falso

**6.M5** *O CRP mostra que a embaladora está com 125% de ocupação na semana 3 e 70% nas semanas 2 e 4.* Qual a ação mais simples a avaliar primeiro?
   a) Comprar outra embaladora
   b) Antecipar parte das ordens da semana 3 para a semana 2 (se houver material e validade) ou adiar para a 4 negociando com o cliente
   c) Demitir na semana 2
   d) Ignorar: a média das 3 semanas é menor que 100%

**6.M6** Capacidade projetada = 1.250; efetiva = 1.063; produção realizada = 797 caixas. Qual a eficiência (%), pela definição de Slack? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

**6.M7** Plano: 240 unidades de X (0,4 h cada) e 300 de Y (0,5 h cada). Capacidade = 240 h. Qual a ocupação (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Pelas definições de Slack: **utilização** = realizada ÷ projetada; **eficiência** = realizada ÷ efetiva. **Carga** = Σ (quantidade × tempo padrão). Carga > capacidade → sobrecarga. **RCCP:** verificação grosseira do PMP nos recursos críticos. **CRP:** verificação detalhada das ordens do MRP por centro de trabalho.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Escolher ações para resolver sobrecarga ou ociosidade
- Relacionar utilização alta com filas e lead time
- Integrar capacidade, gargalo e PMP

**🔴 Conceito-chave — Resolvendo sobrecarga**

**Aumentar a capacidade:** hora extra, turno adicional, recurso alternativo, terceirizar, reduzir setups (SMED, Módulo 6), melhorar o gargalo.  
**Ajustar a carga:** antecipar ordens para períodos com folga (gera estoque), adiar (gera atraso — negociar), dividir lotes, mudar o mix.  
Na ociosidade: puxar ordens futuras, manutenção, treinamento, melhoria.

**🔴 Conceito-chave — Utilização alta e filas**

Com variabilidade nas chegadas e nos tempos, o tempo de fila cresce de forma **não linear** com a utilização: de 80% para 95%, a fila pode multiplicar várias vezes. Por isso lead time “fixo” (premissa do MRP) é uma ilusão em recursos muito carregados. A teoria das filas (Módulo 9) quantifica esse efeito.

**🏭 Na empresa — Caso: capacidade de dezembro**

A Doces Serra precisa de 5.200 h de banhadeira em dezembro e tem 4.600 h. Opções: (1) antecipar 400 h para novembro (estoque dentro da validade); (2) 200 h de hora extra aos sábados; (3) terceirizar um sabor simples. Decisão no S&OP, comparando custo, validade, qualidade e risco.

**⚖️ Limitações e trade-offs — Capacidade depende do mix**

Dizer “a fábrica faz 1.000 caixas/semana” só vale para um **mix** de produtos. Se o mix muda para produtos com tempo maior (ou mais setups), a capacidade em unidades cai. Por isso a capacidade se mede melhor em **horas do recurso gargalo**.

#### ✍️ Exercícios

**6.D1** Por que planejar um recurso com variabilidade para 98% de utilização é arriscado?
   a) Porque a máquina quebra ao passar de 95%
   b) Porque as filas e o lead time crescem de forma não linear perto de 100%
   c) Porque a eficiência cai para zero
   d) Não há risco: quanto mais utilização, melhor

**6.D2** A capacidade de uma fábrica em unidades por semana independe do mix de produtos.
   ( ) Verdadeiro  ( ) Falso

**6.D3** A banhadeira precisa de 5.200 h em dezembro e tem 4.600 h. Proponha e compare pelo menos três alternativas.

#### 📝 Resumo (🧠 Difícil)

Sobrecarga se resolve ajustando a **capacidade** (hora extra, turno, terceirização, recurso alternativo) ou a **carga** (antecipar, adiar, renegociar). Utilização perto de 100% em recursos com variabilidade faz **filas e lead times explodirem** (teoria das filas, Módulo 9). A capacidade do sistema é a do **gargalo** (Módulo 4).

---

## 7. 🔢 Sequenciamento e controle da produção

**🧩 Pré-requisitos:** Capacidade.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o que é sequenciamento
- Aplicar as regras PEPS, MTP e DD
- Ler um gráfico de Gantt de programação

**🏭 Por que isso importa**

Com as mesmas máquinas e as mesmas ordens, **mudar só a sequência** pode reduzir atrasos e o tempo que os pedidos ficam na fábrica. É melhoria sem investimento.

**🔴 Conceito-chave — Regras de prioridade**

**PEPS / FIFO:** primeiro que entra, primeiro que sai. Justo, simples.  
**MTP / SPT:** menor tempo de processamento primeiro. Libera muitas ordens rápido.  
**DD / EDD:** menor data de entrega primeiro. Foca no prazo.  
Outras: maior tempo primeiro, razão crítica (tempo até a entrega ÷ tempo de processamento).

**😂 Exemplo do dia a dia — A fila do micro-ondas**

No escritório, três pessoas querem usar o micro-ondas: pipoca (3 min), marmita (2 min) e sopa (5 min). Se a marmita vai primeiro (menor tempo), a espera média do grupo é a menor possível. Mas se a sopa é de quem tem reunião em 6 minutos… a data de entrega pesa.

**🔴 Conceito-chave — Gráfico de Gantt**

Barras horizontais no tempo mostram **qual ordem ocupa cada recurso e quando**. É a ferramenta visual clássica da programação (Henry Gantt, início do século XX), a mesma usada para cronogramas de projeto no Módulo 2.

**🔊 Para memorizar**

**“Menor tempo esvazia a fila, menor prazo salva o cliente.”** MTP → menor tempo médio de fluxo; DD → menor atraso máximo.

**🧮 Exemplo resolvido — Quatro ordens numa máquina**

Ordem (tempo; entrega): A (6; 8) · B (2; 6) · C (8; 18) · D (3; 15). Todas disponíveis no instante 0.  
**PEPS (A-B-C-D):** termina em 6, 8, 16, 19.  
**MTP (B-D-A-C):** termina em 2, 5, 11, 19.  
**DD (B-A-D-C):** termina em 2, 8, 11, 19.

#### ✍️ Exercícios

**7.F1** Ligue a regra ao critério:
   1. PEPS
   2. MTP
   3. DD
   Ligar com: Menor data de entrega · Menor tempo de processamento · Ordem de chegada

**7.F2** Ordens: X (5 h), Y (2 h), Z (8 h). Qual a sequência pela regra MTP?
   a) X – Y – Z
   b) Y – X – Z
   c) Z – X – Y
   d) Y – Z – X

**7.F3** Mudar apenas a sequência das ordens pode reduzir atrasos sem nenhum investimento.
   ( ) Verdadeiro  ( ) Falso

**7.F4** O gráfico de barras no tempo que mostra qual ordem ocupa cada recurso é o gráfico de ___.
   Opções: Gantt · Pareto · Ishikawa · controle

#### 📝 Resumo (🌱 Fácil)

**Sequenciar** é decidir a ordem das tarefas num recurso. **PEPS:** primeiro a chegar, primeiro a sair. **MTP (SPT):** menor tempo de processamento primeiro. **DD (EDD):** menor data de entrega primeiro.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular tempo médio de fluxo, atraso médio e número de atrasados
- Comparar regras de prioridade pelos indicadores
- Aplicar a regra de Johnson para duas máquinas

**🔵 Fórmula — Indicadores de sequenciamento**

Tempo de fluxo = término − liberação  
Atraso = max(0; término − data de entrega)  
Makespan = término da última tarefa

| Símbolo | Significado |
|---|---|
| Tempo de fluxo | Quanto tempo a ordem fica no sistema |
| Atraso (tardiness) | Quanto passou do prazo; zero se no prazo |

**🧮 Exemplo resolvido — Comparando as regras**

| Regra | Fluxo médio | Atraso médio | Nº atrasadas |  
|---|---|---|---|  
| PEPS | 49 ÷ 4 = 12,25 | (0+2+0+4) ÷ 4 = 1,5 | 2 |  
| MTP | 37 ÷ 4 = 9,25 | (0+0+3+1) ÷ 4 = 1,0 | 2 |  
| DD | 40 ÷ 4 = 10,0 | (0+0+0+1) ÷ 4 = 0,25 | 1 |  
MTP ganha no fluxo; DD ganha no atraso. O makespan é 19 em todas (uma máquina).

**🛠️ Passo a passo — Regra de Johnson (2 máquinas em série)**

1. Liste os tempos de cada tarefa na máquina 1 (M1) e na máquina 2 (M2).  
2. Encontre o **menor tempo** entre todos os não programados.  
3. Se estiver em **M1**, coloque a tarefa na **primeira** posição livre; se estiver em **M2**, na **última** posição livre.  
4. Retire a tarefa da lista e repita até acabar.  
Empate: escolha qualquer uma.

**🧮 Exemplo resolvido — Johnson: recheio → banho**

Tarefa (M1 recheio; M2 banho): J1 (4; 6) · J2 (7; 3) · J3 (2; 5) · J4 (6; 8) · J5 (5; 2).  
Menor = 2: J3 em M1 → **1ª**; J5 em M2 → **última**. Próximo menor = 3: J2 em M2 → **penúltima**. Próximo = 4: J1 em M1 → **2ª**. Sobra J4.  
Sequência: **J3 – J1 – J4 – J2 – J5**.

**🧠 Mapa — Gantt da sequência de Johnson (arraste para o lado →)**

```
h   0         5         10        15        20        25
M1  |J3 |  J1   |    J4     |     J2      |   J5    |
M2      |   J3    |    J1     |      J4       | J2  |J5 |
```

> **🤔 Antes de ler…** Na regra de Johnson, se o menor tempo da lista está na máquina 2, onde a tarefa vai?
>
> <details><summary>Revelar</summary>Para a última posição livre da sequência.</details>

#### ✍️ Exercícios

**7.M1** Sequência MTP numa máquina: B (2 h), D (3 h), A (6 h), C (8 h), todas disponíveis no instante 0. Qual o tempo médio de fluxo (h)?

**7.M2** Sequência DD: B (2; entrega 6), A (6; entrega 8), D (3; entrega 15), C (8; entrega 18). Qual o atraso médio (h)?

**7.M3** Na regra de Johnson, o menor tempo da lista é 1 h, da tarefa K na máquina 1. Onde K entra?
   a) Na primeira posição livre
   b) Na última posição livre
   c) No meio
   d) Fica de fora

**7.M4** Tarefas (M1; M2): J1 (4; 6), J2 (7; 3), J3 (2; 5), J4 (6; 8), J5 (5; 2). Ordene pela regra de Johnson:
   Itens (fora de ordem): J1 · J2 · J3 · J4 · J5

**7.M5** *O cliente mais importante reclama de atrasos. O gerente quer reduzir o maior atraso entre as ordens da semana numa máquina gargalo.* Qual regra usar?
   a) MTP
   b) PEPS
   c) DD (menor data de entrega primeiro)
   d) Maior tempo primeiro

**7.M6** Quatro ordens numa máquina, todas disponíveis no instante 0, com tempos 9 · 8 · 6 · 5 h. Sequenciando pela regra MTP, qual o tempo médio de fluxo (h)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Tempo de fluxo = data de término − chegada; atraso = max(0; término − data de entrega). Numa máquina, **MTP minimiza o tempo médio de fluxo** e **DD minimiza o maior atraso**. **Johnson (2 máquinas em série):** menor tempo na máquina 1 vai para o início; menor tempo na máquina 2 vai para o fim.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Justificar quando cada regra é ótima
- Calcular o makespan de uma sequência de Johnson
- Estruturar o controle da produção com indicadores

**🔴 Conceito-chave — Quando cada regra é ótima**

Para **uma máquina** com todas as tarefas disponíveis no início:  
• **MTP (SPT)** minimiza o tempo médio de fluxo (e o WIP médio).  
• **DD (EDD)** minimiza o **maior atraso** (regra de Jackson, 1955).  
• O algoritmo de **Moore-Hodgson** minimiza o número de tarefas atrasadas.  
Para **duas máquinas em série** (flow shop), a **regra de Johnson (1954)** minimiza o makespan. Com mais máquinas, o problema é, em geral, NP-difícil e se usam heurísticas.

**🧮 Exemplo resolvido — Makespan de Johnson**

M1: J3 0–2 · J1 2–6 · J4 6–12 · J2 12–19 · J5 19–24.  
M2 (começa quando a tarefa sai de M1 e M2 está livre): J3 2–7 · J1 7–13 · J4 13–21 · J2 21–24 · J5 24–26.  
**Makespan = 26**. Limite inferior: soma de M1 (24) + menor tempo de M2 da última (2) = 26 → é ótimo.

**⚖️ Limitações e trade-offs — Limitações do MTP**

O MTP pode deixar ordens longas **esperando indefinidamente** se sempre chegam ordens curtas. Na prática, combina-se o MTP com um limite de espera ou com a data de entrega. Regras simples também ignoram setups dependentes da sequência (ex.: chocolate branco antes do amargo).

**🔴 Conceito-chave — Controle da produção**

Planejar sem controlar é só desejar. Indicadores típicos:  
• **Aderência ao plano** (quanto do programado foi feito no período).  
• **OTIF** (entregas no prazo e completas).  
• **WIP** e **lead time** (lei de Little: WIP = taxa × lead time).  
• **Acuracidade de estoque**.  
Ciclo: medir → comparar com o plano → analisar causas → agir → replanejar.

**📚 Para aprofundar**

• JOHNSON, S. M. Optimal two- and three-stage production schedules with setup times included. *Naval Research Logistics Quarterly*, v. 1, n. 1, p. 61–68, 1954.  
• PINEDO, M. L. *Scheduling: Theory, Algorithms, and Systems*. Springer.  
• HOPP, W. J.; SPEARMAN, M. L. *Factory Physics*. Waveland (lei de Little e filas na fábrica).

#### ✍️ Exercícios

**7.D1** Sequência J3–J1–J4–J2–J5 com (M1; M2): J3 (2; 5), J1 (4; 6), J4 (6; 8), J2 (7; 3), J5 (5; 2). Qual o makespan?

**7.D2** Numa única máquina com todas as ordens disponíveis, a regra MTP minimiza o tempo médio de fluxo.
   ( ) Verdadeiro  ( ) Falso

**7.D3** *Com a regra MTP, uma ordem grande de um cliente pequeno está parada há 3 semanas, porque sempre chegam ordens mais curtas.* Qual o problema e a melhor correção?
   a) Nenhum: MTP é ótima
   b) Inanição da ordem longa; combinar MTP com limite de espera ou considerar a data de entrega
   c) Trocar tudo por maior tempo primeiro
   d) Recusar ordens grandes

**7.D4** Lei de Little: a fábrica produz 50 ordens por dia e tem 400 ordens em processo (WIP). Qual o lead time médio (dias)?

**7.D5** Proponha um painel de controle da produção semanal para o PCP da Doces Serra: quais indicadores, como calcular e o que fazer quando saírem da meta.

**7.D6** A fábrica conclui 20 ordens por dia e tem 160 ordens em processo. Pela lei de Little, qual o lead time médio (dias)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🧠 Difícil)

A regra de Johnson **minimiza o makespan** em duas máquinas em série com a mesma ordem. Nenhuma regra é boa em tudo: escolha pelo indicador que importa. O **controle** compara planejado × realizado (aderência ao plano, OTIF, WIP, lead time) e dispara ação corretiva.

---

## 8. 👾 👾 Chefão: o Natal da Doces Serra

**🧩 Pré-requisitos:** Todas as lições do Módulo 3.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Ordenar o fluxo do PCP, da previsão ao controle
- Relacionar cada ferramenta à pergunta que responde
- Conectar PCP a métodos (Módulo 4) e projetos (Módulo 2)

**🏭 Na empresa — O caso: preparando o Natal**

A Doces Serra precisa planejar a linha de caixas de bombom (a mesma dos Módulos 2 e 4) para o fim do ano.  
• Previsão de junho = 47 mil caixas; real = 50 mil; α = 0,3.  
• Caixa presente: 12 bombons + 1 embalagem. PMP de 200 caixas na semana 5; montagem com LT de 1 semana.  
• Bombons: estoque 400, recebimento programado 500 (semana 3), LT 1 semana, lote a lote.  
• Embaladora: 240 h/semana; plano de 500 caixas X (0,3 h) e 200 Y (0,5 h).  
• Recheio → banho: 5 lotes, J1 (4; 6), J2 (7; 3), J3 (2; 5), J4 (6; 8), J5 (5; 2) horas.

**🔴 Conceito-chave — ✅ Checklist (Fácil)**

• As 4 perguntas do PCP e os 3 níveis  
• MTS, ATO, MTO, ETO  
• Média móvel e erro  
• Acompanhar × nivelar · o que é o PMP  
• BOM e demanda dependente  
• Capacidade projetada, efetiva, realizada  
• PEPS, MTP, DD

#### ✍️ Exercícios

**8.F1** Ordene o fluxo do PCP para o Natal:
   Itens (fora de ordem): Calcular materiais (MRP) · Controlar planejado × realizado · Fazer o plano agregado (S&OP) · Montar o plano mestre (PMP) · Prever a demanda · Sequenciar as ordens · Verificar a capacidade

**8.F2** Ligue a ferramenta à pergunta que ela responde:
   1. Previsão de demanda
   2. PMP
   3. MRP
   4. Sequenciamento
   Ligar com: Em que ordem processar os lotes? · Quantas caixas de cada tipo em cada semana? · Quanto o mercado vai pedir? · Que componentes pedir e quando?

**8.F3** O tempo padrão calculado no Módulo 4 é usado pelo PCP para calcular a carga dos recursos.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🌱 Fácil)

PCP em sequência: **previsão → plano agregado → PMP → MRP → capacidade → sequenciamento → controle**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular previsão, estoque projetado, necessidade líquida, ocupação e sequência no mesmo caso
- Verificar se o plano cabe na capacidade
- Interpretar os resultados para decidir

**🏭 Na empresa — O caso: preparando o Natal**

A Doces Serra precisa planejar a linha de caixas de bombom (a mesma dos Módulos 2 e 4) para o fim do ano.  
• Previsão de junho = 47 mil caixas; real = 50 mil; α = 0,3.  
• Caixa presente: 12 bombons + 1 embalagem. PMP de 200 caixas na semana 5; montagem com LT de 1 semana.  
• Bombons: estoque 400, recebimento programado 500 (semana 3), LT 1 semana, lote a lote.  
• Embaladora: 240 h/semana; plano de 500 caixas X (0,3 h) e 200 Y (0,5 h).  
• Recheio → banho: 5 lotes, J1 (4; 6), J2 (7; 3), J3 (2; 5), J4 (6; 8), J5 (5; 2) horas.

**🔴 Conceito-chave — ✅ Checklist (Médio)**

• S&OP  
• Ponderada e exponencial  
• MAD, MAPE, MSE · regressão · índice sazonal  
• Estoque projetado e ATP  
• Necessidade líquida, lote e lead time  
• Utilização × eficiência · carga × capacidade · RCCP × CRP  
• Indicadores de sequência · Johnson

#### ✍️ Exercícios

**8.M1** Previsão de junho = 47 mil; real = 50 mil; α = 0,3. Qual a previsão de julho (mil caixas)?

**8.M2** Bombons: NB = 200 × 12 na semana 4; estoque 400; recebimento programado 500. Qual a necessidade líquida?

**8.M3** Embaladora: carga de 250 h e capacidade de 240 h. Quantas horas faltam?

**8.M4** Qual o makespan da sequência de Johnson para os 5 lotes do caso (h)?

#### 📝 Resumo (🔧 Médio)

No caso: previsão por suavização de 47,9 mil caixas; PMP semanal com ATP; bombons: NL = 1.500 e liberação na semana 3; embaladora com 104% de ocupação (sobrecarga de 10 h); sequência de Johnson com makespan de 26 h.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Propor um plano para o pico com trade-offs
- Avaliar o risco do plano diante do erro de previsão
- Integrar previsão, capacidade e sequenciamento numa recomendação

**🏭 Na empresa — O caso: preparando o Natal**

A Doces Serra precisa planejar a linha de caixas de bombom (a mesma dos Módulos 2 e 4) para o fim do ano.  
• Previsão de junho = 47 mil caixas; real = 50 mil; α = 0,3.  
• Caixa presente: 12 bombons + 1 embalagem. PMP de 200 caixas na semana 5; montagem com LT de 1 semana.  
• Bombons: estoque 400, recebimento programado 500 (semana 3), LT 1 semana, lote a lote.  
• Embaladora: 240 h/semana; plano de 500 caixas X (0,3 h) e 200 Y (0,5 h).  
• Recheio → banho: 5 lotes, J1 (4; 6), J2 (7; 3), J3 (2; 5), J4 (6; 8), J5 (5; 2) horas.

**🔴 Conceito-chave — ✅ Checklist (Difícil)**

• Coerência entre níveis e desacoplamento  
• Escolha de α e viés das médias  
• Sinal de rastreamento · Holt-Winters  
• Custos do agregado e zonas do PMP  
• MRP II/ERP e nervosismo  
• Filas e utilização alta  
• Otimalidade das regras · makespan · controle

#### ✍️ Exercícios

**8.D1** *O MAD da previsão de caixas é de 3 mil por mês, e o sinal de rastreamento está em +4,5 nos últimos meses.* O que isso significa para o plano de Natal?
   a) Nada: o MAD é pequeno
   b) A previsão tem viés para baixo; revisar o modelo (tendência) e reforçar a proteção (estoque de segurança ou capacidade extra) para o pico
   c) A previsão está alta; reduzir a produção
   d) Parar de usar previsão

**8.D2** Se a previsão tem viés para baixo, aumentar o estoque de segurança resolve o problema na raiz.
   ( ) Verdadeiro  ( ) Falso

**8.D3** Escreva uma recomendação de uma página (resumida) para a diretoria sobre o plano de Natal: situação, alternativas e decisão proposta.

#### 📝 Resumo (🧠 Difícil)

O plano de pico combina antecipação (limitada pela validade), hora extra e ajuste de sequência. Como a previsão erra (MAD conhecido), o plano deve ter proteção (estoque de segurança ou capacidade de reserva) e ser revisto semanalmente com o sinal de rastreamento.

---

## 📖 Glossário

| Termo | Definição |
|---|---|
| **ATO** | Assemble to order: fabricar módulos antes e montar no pedido. |
| **ATP** | Available to promise: quantidade ainda disponível para prometer a novos pedidos. |
| **BOM** | Bill of materials: lista de materiais com componentes e quantidades. |
| **Capacidade efetiva** | Capacidade projetada menos as perdas planejadas. |
| **Capacidade projetada** | Máximo teórico de produção, sem paradas. |
| **Capacidade realizada** | Produção obtida de fato. |
| **CRP** | Verificação detalhada da capacidade a partir das ordens do MRP. |
| **DD** | Menor data de entrega primeiro (EDD). |
| **Demanda dependente** | Demanda de um item calculada a partir da de outro (seu pai na BOM). |
| **ERP** | Sistema integrado de gestão de toda a empresa. |
| **Estratégia de acompanhamento (chase)** | Produção acompanha a demanda período a período. |
| **ETO** | Engineer to order: projetar e fabricar depois do pedido. |
| **Holt-Winters** | Suavização exponencial com nível, tendência e sazonalidade. |
| **Índice sazonal** | Razão entre a média do período e a média geral. |
| **Lei de Little** | WIP = taxa de saída × lead time. |
| **Lote a lote** | Regra que pede exatamente a necessidade líquida. |
| **MAD** | Desvio absoluto médio dos erros de previsão. |
| **Makespan** | Tempo total para terminar todas as tarefas. |
| **MAPE** | Erro percentual absoluto médio. |
| **Média móvel ponderada** | Média com pesos maiores para os períodos recentes; os pesos somam 1. |
| **Média móvel simples** | Média dos últimos n períodos usada como previsão. |
| **Método Delphi** | Previsão qualitativa por rodadas anônimas de especialistas até o consenso. |
| **MRP** | Material Requirements Planning: cálculo das necessidades de materiais. |
| **MRP II** | Manufacturing Resource Planning: MRP com capacidade, custos e integração. |
| **MSE** | Erro quadrático médio; pune erros grandes. |
| **MTO** | Make to order: fabricar depois do pedido. |
| **MTP** | Menor tempo de processamento primeiro (SPT). |
| **MTS** | Make to stock: produzir para estoque, antes do pedido. |
| **Necessidade líquida** | Necessidade bruta menos estoque e recebimentos programados (mais estoque de segurança). |
| **Nervosismo do MRP** | Mudanças frequentes nas ordens planejadas a cada replanejamento. |
| **OTIF** | On time in full: entregas no prazo e completas. |
| **PCP** | Planejamento e Controle da Produção: decide o que, quanto, quando e onde produzir e controla a execução. |
| **PEPS** | Primeiro que entra, primeiro que sai (FIFO). |
| **Planejamento agregado** | Plano por família de produtos e por mês: produção, pessoas, estoque. |
| **Planejamento estratégico da produção** | Nível de longo prazo: capacidade, fábricas e grandes investimentos. |
| **PMP / MPS** | Plano mestre: quanto de cada produto final em cada período. |
| **Ponto de desacoplamento** | Ponto da cadeia que separa a produção por previsão da produção por pedido. |
| **Produção nivelada (level)** | Produção constante; o estoque absorve a variação da demanda. |
| **RCCP** | Verificação grosseira da capacidade do PMP nos recursos críticos. |
| **Recebimento programado** | Ordem já emitida, com data de chegada prevista. |
| **Regra de Johnson** | Sequenciamento ótimo (makespan) para duas máquinas em série. |
| **S&OP** | Sales and Operations Planning: processo mensal que integra as áreas num plano único por família. |
| **Sazonalidade** | Padrão que se repete em intervalos regulares. |
| **Sinal de rastreamento** | Soma dos erros ÷ MAD; detecta viés da previsão. |
| **Suavização exponencial** | Fₜ₊₁ = Fₜ + α(Aₜ − Fₜ): corrige a previsão por uma fração do erro. |
| **Tendência** | Movimento persistente de alta ou de baixa da série. |
| **Zona congelada** | Horizonte do PMP em que o plano não deve ser alterado. |

## 🃏 Flashcards

| Frente | Verso |
|---|---|
| 4 perguntas do PCP | O que, quanto, quando e onde produzir (e depois controlar). |
| 3 níveis do planejamento | Estratégico (anos), tático (meses), operacional (dias/horas). |
| MTS → ATO → MTO → ETO | “Estoque, Monta, Faz, Projeta”: cliente espera mais, empresa guarda menos. |
| S&OP | Processo mensal que integra vendas, produção, compras e finanças num plano único. |
| Média móvel simples | Média dos últimos n períodos. n grande = suave e lenta. |
| Suavização exponencial | Fₜ₊₁ = Fₜ + α(Aₜ − Fₜ). α grande = reage rápido. |
| Médias com tendência | Ficam atrasadas: erro sempre do mesmo lado (viés). |
| MAD × MAPE × MSE | MAD: unidade. MAPE: %, compara itens. MSE: pune erros grandes. |
| Sinal de rastreamento | Σ erros ÷ MAD; fora de ±4 (usual) indica viés. |
| Índice sazonal 1,2 | Período 20% acima da média. Previsão = base × índice. |
| Acompanhar × nivelar | Acompanhar: produção varia, pouco estoque. Nivelar: produção fixa, estoque varia. |
| Agregado × PMP | “Agregado agrupa (família × mês), Mestre detalha (produto × semana).” |
| ATP | Disponível para promessa: PMP (+ estoque no 1º período) − pedidos até o próximo PMP. |
| Demanda dependente | Calculada a partir do pai na BOM; não se prevê. |
| Necessidade líquida | NB − estoque − recebimentos programados (+ ES), nunca negativa. |
| Liberação da ordem | Recebimento planejado recuado do lead time. |
| Premissas do MRP | Capacidade infinita e lead time fixo; exige dados exatos. |
| Utilização × eficiência (Slack) | Utilização = realizada ÷ projetada. Eficiência = realizada ÷ efetiva. |
| RCCP × CRP | RCCP: grosseiro, PMP, recursos críticos. CRP: detalhado, ordens do MRP. |
| MTP × DD | MTP minimiza o fluxo médio; DD minimiza o maior atraso (uma máquina). |
| Regra de Johnson | Menor tempo em M1 → início; em M2 → fim. Minimiza o makespan (2 máquinas). |
| Lei de Little | WIP = taxa × lead time. |

## 📝 Gabarito comentado

**1.F1** b) O que, quanto, quando e onde produzir  
Depois de planejar, o PCP controla se o plano foi cumprido.

**1.F2** Estratégico → Construir uma nova fábrica; Tático → Quantas caixas por mês e quantos turnos; Operacional → Qual ordem entra primeiro na máquina hoje  
Quanto mais alto o nível, maior o horizonte e mais agregada a informação.

**1.F3** MTS → Refrigerante no supermercado; ATO → Notebook configurado na compra; MTO → Uniforme com o logotipo da empresa; ETO → Máquina especial projetada para o cliente  
“Estoque, Monta, Faz, Projeta”.

**1.F4** Verdadeiro  
Por isso o MTS depende muito da previsão de demanda.

**1.F5** a) longo  
É o nível estratégico, com horizonte de anos.

**1.F6** Falso  
A programação é o último degrau; antes vêm previsão, planos agregado e mestre, MRP e capacidade.

**1.M1** Plano de produção (capacidade) → Planejamento agregado / S&OP → PMP / MPS → MRP → Sequenciamento  
Cada nível desagrega o anterior.

**1.M2** b) Chegar a um plano único entre vendas, produção, compras e finanças  
O S&OP é um processo de decisão integrada, em geral mensal, por família de produtos.

**1.M3** c) ATO: fabricar os módulos antes e montar no pedido  
Com muitas combinações de poucos módulos e prazo curto, o ATO equilibra estoque e prazo.

**1.M4** Falso  
É o contrário: o agregado usa famílias; o PMP detalha produtos finais por semana.

**1.D1** b) Reduzir o prazo de entrega e aumentar o estoque e o risco de obsolescência  
Quanto mais pronto o item guardado, mais rápido se entrega e mais se arrisca em estoque.

**1.D2** b) Incoerência entre níveis: revisar o PMP (ou o agregado no S&OP) e verificar a capacidade com o RCCP  
Planos incoerentes viram urgência no chão de fábrica.  
❌ a) A desagregação deve bater com o nível superior; senão o plano não cabe na capacidade.  
✅ b) Conciliar os níveis e checar a capacidade é o papel do PCP.  
❌ c) Pode ser uma decisão de S&OP, mas não resolve a incoerência técnica.  
❌ d) O agregado foi decidido considerando capacidade e recursos.

**1.D3** Riscos: plano **sem considerar capacidade**, materiais e lead times; incentivos de vendas (metas otimistas) viram excesso de estoque ou promessas impossíveis; produção cria um “número paralelo”. Melhoria: implantar **S&OP** mensal com vendas, produção, compras e finanças; trabalhar por família, verificar capacidade, registrar premissas e decidir trade-offs na reunião executiva; medir a acurácia da previsão e o cumprimento do plano.  
Critérios: Aponta a falta de verificação de capacidade e materiais; Menciona conflito de números entre áreas; Propõe S&OP ou processo integrado; Inclui medição/acompanhamento.

**1.D4** Verdadeiro  
É um trade-off clássico: zonas congeladas, semicongeladas e livres.

**2.F1** b) Métodos qualitativos (especialistas, Delphi, pesquisa de mercado)  
Sem dados, a opinião estruturada é o ponto de partida; os dados reais entram depois.

**2.F2** 130 unidades  
(120 + 130 + 140) ÷ 3 = 390 ÷ 3 = 130  
Repare: com demanda subindo, a média fica abaixo do último valor.

**2.F3** Tendência → A demanda sobe ou desce ao longo do tempo; Sazonalidade → Padrão que se repete a cada ano, mês ou semana; Aleatoriedade → Variação que não se consegue explicar; Nível → Valor médio em torno do qual a série oscila  
Identificar o padrão é o primeiro passo para escolher o método.

**2.F4** Falso  
Toda previsão erra; o objetivo é errar pouco e sem viés, e medir esse erro.

**2.F5** a) Delphi  
O anonimato reduz a influência de quem fala mais alto.

**2.F6** 127,333 unidades  
(140 + 94 + 148) ÷ 3 = 382 ÷ 3 = 127,33  
A janela anda: no mês seguinte, sai o mais antigo e entra o novo.

**2.M1** 48,6 mil caixas  
0,2 × 46 + 0,3 × 48 + 0,5 × 50 = 9,2 + 14,4 + 25 = 48,6  
Os pesos devem somar 1.

**2.M2** 204 unidades  
F = 200 + 0,2 × (220 − 200) = 200 + 4 = 204  
A previsão corrige 20% do erro.

**2.M3** b) Aumentar α  
α maior dá mais peso ao dado recente.

**2.M4** Verdadeiro  
Senão a previsão fica sistematicamente inflada ou reduzida.

**2.M5** b) Reduzir α (ex.: 0,1 a 0,3) e comparar o erro histórico  
Com ruído alto e nível estável, α menor filtra a variação; confirme pelo erro.

**2.M6** 56,56 unidades  
0,16 × 40 + 0,24 × 59 + 0,6 × 60 = 56,56  
O período mais recente recebe o maior peso; os pesos somam 1.

**2.M7** 252,5 unidades  
F = 245 + 0,5 × (260 − 245) = 245 + 7,5 = 252,5  
A previsão anda uma fração α do erro na direção da demanda real.

**2.D1** b) Viés causado pela tendência: a média atrasa; usar método com tendência (Holt ou regressão)  
Erros com o mesmo sinal em sequência indicam viés.

**2.D2** Verdadeiro  
Pesos α, α(1−α), α(1−α)², …

**2.D3** Separar histórico em ajuste e teste → Gerar previsões com vários valores de α → Calcular o erro de cada α no teste → Escolher o α de menor erro → Reavaliar periodicamente  
A escolha é empírica, pelo desempenho fora da amostra de ajuste.

**2.D4** Panetone tem **sazonalidade forte** (pico no fim do ano). A MMS de 12 meses produz praticamente o **mesmo valor em todos os meses** (a média anual), prevendo demais de janeiro a setembro e de menos em novembro e dezembro. Melhor: usar **índices sazonais** (ou Holt-Winters) sobre uma base de nível/tendência, combinar com informação qualitativa (pedidos do varejo, campanhas) e medir o erro por mês.  
Critérios: Identifica a sazonalidade; Explica o efeito da média de 12 meses (achata o pico); Propõe índice sazonal ou método sazonal; Menciona medir o erro ou combinar com informação qualitativa.

**3.F1** -40 unidades  
e = 460 − 500 = −40  
Erro negativo: a previsão ficou alta (sobrou produto).

**3.F2** 5 unidades  
MAD = (6 + 4 + 2 + 8) ÷ 4 = 20 ÷ 4 = 5  
No MAD, os erros entram em valor absoluto.

**3.F3** b) Dezembro costuma vender 50% acima da média  
Índice > 1: acima da média; < 1: abaixo.

**3.F4** Verdadeiro  
Vendeu mais do que o previsto: risco de falta.

**3.F5** 4,25 unidades  
Erros em valor absoluto: 8 · 1 · 6 · 2  
MAD = 17 ÷ 4 = 4,25  
No MAD, os erros entram em valor absoluto.

**3.M1** 10 %  
|10|/100 = 10% · |−8|/80 = 10%  
MAPE = (10% + 10%) ÷ 2 = 10%  
O MAPE divide cada erro pela demanda real do período.

**3.M2** 44 mil caixas  
F = 16,8 + 3,4 × 8 = 16,8 + 27,2 = 44  
Cuidado ao extrapolar muito além dos dados.

**3.M3** 96 unidades  
120 × 0,8 = 96  
Modelo multiplicativo: base × índice.

**3.M4** c) MAPE  
O MAPE é relativo (em %), então compara itens de escalas diferentes.

**3.M5** Verdadeiro  
Um erro de 10 vale 100 no MSE; dois erros de 5 valem 50.

**3.M6** 9,917 %  
|170 − 195| ÷ 170 = 14,71% · |195 − 205| ÷ 195 = 5,13%  
MAPE = 9,92%  
Cada erro é dividido pela demanda real do próprio período.

**3.M7** 56,1 mil caixas  
F = 22,5 + 4,2 × 8 = 56,1  
Cuidado ao extrapolar muito além dos dados usados na regressão.

**3.M8** 260 unidades  
Base = 800 ÷ 4 = 200  
Previsão = 200 × 1,3 = 260  
Modelo multiplicativo: base × índice.

**3.D1** 6   
TS = 36 ÷ 6 = 6  
Fora de ±4: a previsão está sistematicamente baixa; revise o modelo.

**3.D2** b) Viés: a previsão está sistematicamente abaixo da demanda; investigar mudança de patamar ou tendência e ajustar o modelo  
O TS é o “alarme” de viés.  
❌ a) O MAD mede o tamanho do erro, não a direção.  
✅ b) Soma positiva crescente = real sempre acima do previsto.  
❌ c) TS positivo (convenção real − previsto) indica previsão baixa, não alta.  
❌ d) O acúmulo de erros de mesmo sinal não é aleatório.

**3.D3** Falso  
Compare em dados não usados no ajuste; senão, o modelo mais complexo sempre parece melhor.

**3.D4** d) Holt-Winters  
Holt trata nível e tendência; Holt-Winters acrescenta sazonalidade.

**3.D5** Março: marcar como **evento atípico** (promoção) e substituir ou ajustar o valor (ex.: média dos meses vizinhos ajustada), ou modelar o efeito da promoção como variável causal. Abril: a venda registrada é **menor que a demanda real** (venda perdida); estimar a demanda perdida (ex.: pela taxa de venda nas semanas com estoque) antes de usar o dado. Registrar os eventos num calendário para uso futuro.  
Critérios: Trata a promoção como atípica ou como variável; Reconhece que a falta de estoque subestima a demanda; Propõe ajuste/estimativa dos valores; Menciona registro de eventos.

**3.D6** -2,222   
TS = -20 ÷ 9 = -2,22  
Fora de ±4 (limite usual), há viés: positivo = previsão baixa; negativo = previsão alta.

**4.F1** Acompanhar a demanda → Produção varia mês a mês; pouco estoque; Produção nivelada → Produção constante; estoque absorve a variação; Mista → Combina variação de produção e estoque  
Na prática, a estratégia mista é a mais comum.

**4.F2** a) Quanto de cada produto final produzir em cada semana  
Produto final × período (geralmente semana).

**4.F3** Verdadeiro  
Agregar reduz o erro de previsão e simplifica a decisão.

**4.F4** a) nivelada  
Level: força de trabalho estável, estoque variável.

**4.M1** 900 unidades/mês  
(600 + 900 + 1.200 + 900) ÷ 4 = 3.600 ÷ 4 = 900  
Confira se o estoque nunca fica negativo: m1 = 300, m2 = 300, m3 = 0, m4 = 0 ✓

**4.M2** 5 unidades  
E = 50 + 0 − max(40, 45) = 5  
Usa-se o maior entre previsão e pedidos.

**4.M3** 50 unidades  
ATP = 100 − (30 + 20) = 50  
Soma dos pedidos até o período anterior ao próximo PMP.

**4.M4** b) Prometer 50 na semana 3 e 20 na semana 4 (ou as 70 na semana 4), sem mexer no plano  
O ATP mostra o que pode ser prometido sem desmontar o plano.

**4.M5** Falso  
O ATP desconta só os pedidos firmes (já prometidos).

**4.M6** 925 unidades/mês  
(950 + 1.350 + 600 + 800) ÷ 4 = 3.700 ÷ 4 = 925  
Verifique também se o estoque não fica negativo em algum mês; se ficar, é preciso estoque inicial ou outra estratégia.

**4.M7** 95 unidades  
E = 80 + 100 − max(80; 85) = 95  
Usa-se o maior entre previsão e pedidos firmes.

**4.D1** 1.800 R$  
(300 + 300 + 0 + 0) × 3 = R$ 1.800  
Convenção simples: custo sobre o estoque final de cada mês.

**4.D2** b) Mista: antecipar parte da produção dentro da validade e da câmara disponível, e cobrir o resto com hora extra, banco de horas ou temporários  
Restrições do produto mudam a melhor estratégia.  
❌ a) Estoque de meses viraria perda por validade e falta de espaço.  
✅ b) Respeita validade e espaço e distribui o pico entre alternativas.  
❌ c) Custos trabalhistas e de aprendizagem altos.  
❌ d) Risco de qualidade e custo maior sem análise.

**4.D3** Congelada → Semicongelada → Livre  
Quanto mais perto, mais caro mudar.

**4.D4** **Acompanhar:** pouco estoque (bom para produto perecível), mas exige contratar/demitir, hora extra ou ociosidade; custos de recrutamento, treinamento, rescisão e adicional de hora extra (mín. 50%); risco de qualidade com gente nova. **Nivelar:** força de trabalho estável e aprendida, mas estoque alto antes do pico; custo de capital, armazenagem refrigerada e risco de vencimento. Solução provável: **mista**, com antecipação limitada pela validade, banco de horas e temporários. Decidir pelo custo total e pelas restrições.  
Critérios: Descreve as duas estratégias; Cita pelo menos três custos; Considera a perecibilidade; Chega a uma recomendação justificada.

**5.F1** b) Bombom usado para montar a caixa  
A demanda de bombons para montagem é calculada a partir do PMP das caixas.

**5.F2** 1.800 bombons  
150 × 12 = 1.800  
NB = quantidade do pai × quantidade por unidade.

**5.F3** Falso  
Ela é dependente: calcula-se a partir do PMP e da BOM.

**5.F4** a) BOM (lista de materiais)  
Bill of Materials.

**5.F5** 660 unidades  
NB = 330 × 2 = 660  
Demanda dependente: calcula-se, não se prevê.

**5.M1** 1.500 unidades  
NL = 2.400 − 400 − 500 = 1.500  
Desconte o que tem e o que já vem.

**5.M2** 100 unidades  
Recebimento planejado = 250  
Sobra = 250 − 150 = 100  
Lote fixo gera sobras que entram no período seguinte.

**5.M3** a) Semana 4  
Liberação = data de necessidade − lead time.

**5.M4** Calcular a necessidade bruta → Descontar estoque e recebimentos programados → Aplicar a regra de lote → Recuar o lead time e liberar a ordem → Passar a necessidade para os componentes do nível abaixo  
O cálculo desce nível a nível da BOM.

**5.M5** b) A ordem aberta não está registrada como recebimento programado no sistema  
Sem o recebimento programado registrado, o MRP não o desconta.

**5.M6** 2.550 unidades  
NL = 2.600 − 50 − 0 + 0 = 2.550  
Desconte o que tem e o que já vem; acrescente o estoque de segurança.

**5.M7** 100 unidades  
70 ÷ 100 = 0,7 → 1 lotes × 100 = 100 (sobram 30)  
Lote fixo: arredonde para cima para o múltiplo do lote.

**5.D1** b) Capacidade infinita e lead time fixo  
O MRP não verifica a capacidade; o CRP (MRP II) faz isso.

**5.D2** Verdadeiro  
Manufacturing Resource Planning.

**5.D3** b) Congelar o PMP no curto prazo, firmar ordens próximas, revisar regras de lote e melhorar a acuracidade dos dados  
Estabilidade de plano + dados confiáveis.  
❌ a) Rodar mais vezes tende a aumentar o nervosismo.  
✅ b) Ataca as causas típicas do nervosismo.  
❌ c) Não resolve e aumenta risco de falta.  
❌ d) Perde a integração e piora o controle.

**5.D4** O MRP desconta o estoque do sistema: saldo maior que o real gera **falta** (a ordem não é criada); saldo menor gera **compra desnecessária**. Resultado: urgências, estoque excessivo e perda de confiança no sistema. Ações: **inventário rotativo** (contagem cíclica, priorizando itens A), causa-raiz das divergências (apontamento, baixas, perdas não registradas), disciplina de transações, endereçamento, e meta de acuracidade (ex.: acima de 95%) acompanhada como indicador.  
Critérios: Explica os dois efeitos (falta e excesso); Relaciona com perda de confiança/urgências; Propõe inventário rotativo ou contagem cíclica; Propõe atacar as causas das divergências.

**6.F1** Projetada → Máximo teórico, sem paradas; Efetiva → Descontadas as perdas planejadas; Realizada → O que de fato foi produzido  
“Projeto sonha, Efetiva planeja, Realizada entrega.”

**6.F2** 384 h  
4 × 8 × 2 × 6 = 384 h  
Recursos × horas × turnos × dias.

**6.F3** Verdadeiro  
Perdas não planejadas (quebras) explicam a diferença entre efetiva e realizada.

**6.F4** c) Realizada  
É uma perda não planejada: reduz o que de fato sai.

**6.F5** 480 h  
8 × 6 × 2 × 5 = 480 h  
Recursos × horas × turnos × dias.

**6.M1** 80 %  
Eficiência = 680 ÷ 850 = 0,80 = 80%  
Utilização seria 680 ÷ 1.000 = 68%.

**6.M2** 104,17 %  
Carga = 500 × 0,3 + 200 × 0,5 = 250 h  
Ocupação = 250 ÷ 240 × 100 ≈ 104,17%  
Acima de 100%: sobrecarga de 10 h.

**6.M3** b) RCCP verifica o PMP de forma grosseira nos recursos críticos; CRP verifica em detalhe as ordens do MRP por centro de trabalho  
Grosseiro e rápido antes; detalhado depois.

**6.M4** Falso  
Como a efetiva é menor que a projetada, a eficiência é maior ou igual à utilização.

**6.M5** b) Antecipar parte das ordens da semana 3 para a semana 2 (se houver material e validade) ou adiar para a 4 negociando com o cliente  
Nivelar a carga entre períodos antes de investir.

**6.M6** 74,977 %  
Eficiência = 797 ÷ 1.063 × 100 = 74,98%  
(Utilização = 797 ÷ 1.250 = 63,76%)  
Eficiência compara com a efetiva; utilização, com a projetada.

**6.M7** 102,5 %  
Carga = 240 × 0,4 + 300 × 0,5 = 246 h  
Ocupação = 246 ÷ 240 × 100 = 102,5%  
Acima de 100%: sobrecarga; ajuste a carga ou a capacidade.

**6.D1** b) Porque as filas e o lead time crescem de forma não linear perto de 100%  
Teoria das filas: a espera explode quando a utilização se aproxima de 100%.

**6.D2** Falso  
Produtos com mais tempo ou setups consomem mais capacidade; ela varia com o mix.

**6.D3** Faltam 600 h. (1) **Antecipar** carga para novembro: sem custo de hora extra, mas gera estoque — limitado pela validade e pela câmara fria. (2) **Hora extra/turno extra** aos sábados: rápido, custo de adicional (mín. 50%), fadiga e limites legais. (3) **Terceirizar** um sabor simples: libera o gargalo, mas custo unitário maior e risco de qualidade. (4) **Reduzir setups** na banhadeira (agrupar sabores, SMED): ganho permanente, requer preparo. Recomendar combinação, decidida no S&OP pelo custo total e pelo risco.  
Critérios: Quantifica a falta (600 h); Apresenta ao menos três alternativas; Compara custos e riscos; Recomenda uma combinação justificada.

**7.F1** PEPS → Ordem de chegada; MTP → Menor tempo de processamento; DD → Menor data de entrega  
PEPS = FIFO; MTP = SPT; DD = EDD.

**7.F2** b) Y – X – Z  
Do menor para o maior tempo: 2, 5, 8.

**7.F3** Verdadeiro  
A mesma carga em outra ordem gera outros indicadores.

**7.F4** a) Gantt  
Henry Gantt, início do século XX.

**7.M1** 9,25 h  
Términos: 2, 5, 11, 19  
Média = (2 + 5 + 11 + 19) ÷ 4 = 37 ÷ 4 = 9,25 h  
É o menor tempo médio de fluxo possível para essas ordens.

**7.M2** 0,25 h  
Términos: B 2, A 8, D 11, C 19  
Atrasos: 0, 0, 0, 19 − 18 = 1  
Média = 1 ÷ 4 = 0,25 h  
Só C atrasa, e por 1 hora.

**7.M3** a) Na primeira posição livre  
Menor tempo em M1 → início; em M2 → fim.

**7.M4** J3 → J1 → J4 → J2 → J5  
J3 (2 em M1) início; J5 (2 em M2) fim; J2 (3 em M2) penúltima; J1 (4 em M1) segunda.

**7.M5** c) DD (menor data de entrega primeiro)  
Numa máquina, DD minimiza o atraso máximo.

**7.M6** 15,75 h  
Ordem MTP: 5 · 6 · 8 · 9  
Términos: 5, 11, 19, 28  
Média = 63 ÷ 4 = 15,75 h  
O MTP minimiza o tempo médio de fluxo numa máquina.

**7.D1** 26 h  
M1 termina: 2, 6, 12, 19, 24  
M2: J3 2–7, J1 7–13, J4 13–21, J2 21–24, J5 24–26  
Makespan = 26  
Em M2, cada tarefa começa no maior entre o fim em M1 e o fim da anterior em M2.

**7.D2** Verdadeiro  
Resultado clássico da teoria de sequenciamento.

**7.D3** b) Inanição da ordem longa; combinar MTP com limite de espera ou considerar a data de entrega  
Regras puras têm efeitos colaterais.  
❌ a) MTP otimiza a média, não garante que toda ordem saia.  
✅ b) Corrige a inanição mantendo boa parte do ganho do MTP.  
❌ c) Pioraria o fluxo médio.  
❌ d) Perde clientes sem necessidade.

**7.D4** 8 dias  
Lead time = WIP ÷ taxa = 400 ÷ 50 = 8 dias  
Reduzir WIP, com a mesma taxa, reduz o lead time.

**7.D5** Indicadores: **aderência ao programa** (ordens concluídas no período ÷ programadas); **OTIF** (pedidos entregues no prazo e completos ÷ total); **WIP** e **lead time** (lei de Little); **ocupação do gargalo**; **acuracidade de estoque**; **erro de previsão** (MAPE/TS). Cada um com meta, dono e frequência. Fora da meta: análise de causa (Pareto dos motivos: falta de material, quebra, mudança de prioridade), ação corretiva e replanejamento; revisão na reunião semanal de PCP e mensal no S&OP.  
Critérios: Propõe pelo menos quatro indicadores relevantes; Define como calcular; Inclui meta/dono/frequência; Define ação quando fora da meta.

**7.D6** 8 dias  
Lead time = WIP ÷ taxa = 160 ÷ 20 = 8 dias  
Reduzir o WIP com a mesma taxa reduz o lead time.

**8.F1** Prever a demanda → Fazer o plano agregado (S&OP) → Montar o plano mestre (PMP) → Calcular materiais (MRP) → Verificar a capacidade → Sequenciar as ordens → Controlar planejado × realizado  
Do agregado ao detalhado, fechando com o controle.

**8.F2** Previsão de demanda → Quanto o mercado vai pedir?; PMP → Quantas caixas de cada tipo em cada semana?; MRP → Que componentes pedir e quando?; Sequenciamento → Em que ordem processar os lotes?  
Cada ferramenta responde uma parte do “o quê, quanto, quando, onde”.

**8.F3** Verdadeiro  
Carga = quantidade × tempo padrão.

**8.M1** 47,9 mil caixas  
F = 47 + 0,3 × (50 − 47) = 47,9  
Suavização exponencial simples.

**8.M2** 1.500 bombons  
NB = 2.400  
NL = 2.400 − 400 − 500 = 1.500  
Liberação na semana 3 (LT 1).

**8.M3** 10 h  
250 − 240 = 10 h (ocupação ≈ 104%)  
Pequena sobrecarga: hora extra ou antecipação resolvem.

**8.M4** 26 h  
Sequência J3–J1–J4–J2–J5  
M2 termina em 7, 13, 21, 24, 26  
É o mínimo possível para esses lotes.

**8.D1** b) A previsão tem viés para baixo; revisar o modelo (tendência) e reforçar a proteção (estoque de segurança ou capacidade extra) para o pico  
Com viés, o plano tende a faltar produto no pico.  
❌ a) O MAD mede o tamanho do erro, não a direção.  
✅ b) TS positivo alto: real acima do previsto de forma sistemática.  
❌ c) Seria o contrário (TS negativo).  
❌ d) Sem previsão, não há plano.

**8.D2** Falso  
Protege no curto prazo, mas a raiz é o modelo: é preciso corrigir o viés.

**8.D3** **Situação:** previsão de pico com viés para baixo (TS +4,5); embaladora com 104% de ocupação; banhadeira com déficit em dezembro; material de bombons coberto com liberação na semana 3. **Alternativas:** (1) antecipar produção dentro da validade; (2) hora extra/banco de horas; (3) terceirizar sabor simples; (4) sequenciar recheio → banho por Johnson e agrupar setups. **Decisão proposta:** combinação 1 + 2 + 4, revisar o modelo de previsão (tendência) e acompanhar semanalmente aderência, OTIF e TS; gatilho: se o TS passar de +4 de novo, acionar terceirização.  
Critérios: Resume a situação com números; Apresenta alternativas com trade-offs; Propõe decisão justificada; Define acompanhamento e gatilhos.
