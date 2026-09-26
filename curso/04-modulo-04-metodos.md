# ⏱️ Módulo 4 — Engenharia de Métodos

> 📄 Apostila gerada automaticamente a partir de `app/conteudo/modulo-04.js` (a mesma fonte do app).
> Exemplos numéricos são ilustrativos, criados para fins didáticos.

## 🎯 Objetivo do módulo

Melhorar métodos de trabalho, medir tempos com rigor, calcular o tempo padrão e usá-lo para balancear linhas e atacar gargalos.

## 🗺️ Lições

| # | Lição | Níveis |
|---|---|---|
| 1 | Estudo de métodos | 🌱 🔧 🧠 |
| 2 | Cronoanálise: medindo o tempo | 🌱 🔧 🧠 |
| 3 | Ritmo, tolerâncias e tempo padrão | 🌱 🔧 🧠 |
| 4 | Eficiência, utilização e aprendizagem | 🌱 🔧 🧠 |
| 5 | Takt time e balanceamento de linha | 🌱 🔧 🧠 |
| 6 | Gargalo e melhoria da linha | 🌱 🔧 🧠 |
| 7 | 👾 Chefão: a linha de bombons | 🌱 🔧 🧠 |

## 🎧 Resumo para ouvir

> Antes de medir, melhore o método: medir um método ruim é padronizar desperdício. No fluxograma, só a operação costuma agregar valor; transporte, inspeção, espera e armazenagem não transformam o produto. Eliminar, Combinar, Rearranjar e Simplificar, nessa ordem. Na cronoanálise, divida em elementos, explique o objetivo ao operador e calcule quantos ciclos medir. Observo, Normalizo, Padronizo: o tempo observado vezes o ritmo dá o tempo normal; com as tolerâncias, o tempo padrão. Com o tempo padrão calculamos capacidade, custo, eficiência e utilização. Takt é o cliente, ciclo é a linha: takt é o tempo disponível dividido pela demanda. O número mínimo de postos é a soma dos tempos dividida pelo takt, arredondada para cima. A linha anda no ritmo do posto mais lento, o gargalo. Uma hora perdida no gargalo é uma hora perdida no sistema inteiro.

---

## 1. 🔍 Estudo de métodos

**🧩 Pré-requisitos:** História: Taylor e os Gilbreth (Módulo 1).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Diferenciar estudo de métodos (como fazer) e medida do trabalho (quanto tempo)
- Reconhecer os cinco símbolos do fluxograma de processo
- Aplicar perguntas básicas (o quê, por quê, onde, quando, quem, como) a uma tarefa

**🏭 Por que isso importa**

Antes de cronometrar, pergunte: **esse é o melhor jeito de fazer?** Medir um método ruim é **padronizar desperdício**. Muitas melhorias de produtividade vêm só de mudar a sequência, o posto ou a ferramenta, sem investimento.

**🔴 Conceito-chave — Estudo do trabalho**

Segundo a tradição da OIT, o estudo do trabalho tem duas partes:  
• **Estudo de métodos:** registrar e melhorar **como** o trabalho é feito.  
• **Medida do trabalho:** determinar **quanto tempo** um trabalhador qualificado leva para fazê-lo.  
Ordem certa: **método primeiro, tempo depois**.

**🔴 Conceito-chave — Os cinco símbolos do fluxograma**

**○ Operação:** transforma o produto (usinar, montar, embalar).  
**⇨ Transporte:** move de um lugar a outro.  
**□ Inspeção:** verifica quantidade ou qualidade.  
**D Espera:** atraso, o item parado aguardando.  
**▽ Armazenagem:** guardado de forma controlada.

**🔊 Para memorizar**

**“O Tio Ignorou a Espera no Armazém”**: Operação, Transporte, Inspeção, Espera, Armazenagem.

**😂 Exemplo do dia a dia — O sanduíche**

Fazer um sanduíche: ir à geladeira (transporte), esperar o pão tostar (espera), ver se o queijo não está vencido (inspeção), montar (operação).  
Só **montar** transforma o sanduíche. O resto é necessário, mas não agrega valor: é o que se tenta reduzir.

**🔴 Conceito-chave — Perguntas básicas**

Para cada etapa: **O quê** está sendo feito? **Por quê** é necessário? **Onde, quando, quem, como?** E, para cada resposta: **dá para fazer de outro jeito?**

**🟡 Atenção — Erro comum**

Achar que transporte e inspeção “agregam valor” porque dão trabalho. O cliente paga pela transformação, não pelo passeio da peça pela fábrica.

#### ✍️ Exercícios

**1.F1** Qual a diferença entre estudo de métodos e medida do trabalho?
   a) São a mesma coisa
   b) Métodos: como fazer melhor; medida: quanto tempo leva
   c) Métodos: quanto tempo leva; medida: como fazer
   d) Medida do trabalho é só para escritórios

**1.F2** Ligue o símbolo ao significado no fluxograma de processo:
   1. ○
   2. ⇨
   3. □
   4. D
   5. ▽
   Ligar com: Armazenagem · Espera · Inspeção · Operação · Transporte

**1.F3** Transportar a peça de um setor para outro agrega valor ao produto.
   ( ) Verdadeiro  ( ) Falso

**1.F4** Antes de medir o tempo, deve-se melhorar o ___.
   Opções: método · salário · estoque · logotipo

#### 📝 Resumo (🌱 Fácil)

O **estudo do trabalho** tem duas partes: **estudo de métodos** (como fazer melhor) e **medida do trabalho** (quanto tempo leva). Primeiro se melhora o método, depois se mede. O fluxograma usa cinco símbolos: **operação, transporte, inspeção, espera e armazenagem**; em geral só a operação transforma o produto.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Montar um fluxograma de processo e calcular a parcela do tempo que agrega valor
- Aplicar a lógica ECRS para gerar melhorias
- Aplicar princípios de economia de movimentos a um posto de trabalho

**🛠️ Passo a passo — Como montar um fluxograma de processo**

1. Escolha **o que seguir**: o material ou o operador (não misture).  
2. Registre **cada etapa** com símbolo, tempo e distância.  
3. **Resuma** por símbolo (quantidade, tempo, metros).  
4. **Questione** cada etapa (por quê? dá para eliminar?).  
5. Proponha o método novo e **compare** antes × depois.

**🧮 Exemplo resolvido — Recebimento de matéria-prima (ilustrativo)**

12 etapas registradas:  
○ 3 operações = 6 min  
⇨ 4 transportes = 8 min, 120 m  
□ 2 inspeções = 4 min  
D 2 esperas = 25 min  
▽ 1 armazenagem  
Tempo total = **43 min**; tempo de operação = 6 min → **14% agrega valor**. As esperas (25 min) são o primeiro alvo.

**🔴 Conceito-chave — ECRS**

Ordem de ataque das melhorias:  
**E**liminar (a etapa é mesmo necessária?)  
**C**ombinar (duas inspeções numa só)  
**R**earranjar (mudar a sequência ou o local)  
**S**implificar (dispositivo, gabarito, ferramenta melhor)  
Eliminar vem primeiro porque dá o maior ganho com o menor custo.

**🔴 Conceito-chave — Economia de movimentos (Barnes)**

**Corpo:** as duas mãos começam e terminam juntas; movimentos simétricos, curtos e contínuos.  
**Posto:** materiais em **local fixo e próximo**, dentro da área de alcance; alimentação por gravidade.  
**Ferramentas:** dispositivos para segurar a peça (libera as mãos), ferramentas combinadas, pré-posicionadas.

**🔴 Conceito-chave — Therbligs**

Frank e Lillian **Gilbreth** decompuseram o trabalho manual em micromovimentos (therbligs): procurar, selecionar, pegar, transportar, posicionar, montar, usar, soltar, inspecionar, segurar, esperar…  
Alvo: eliminar os **ineficientes** (procurar, selecionar, segurar, esperar).

**🟢 Dica prática — Na prática**

Filmar o posto (com consentimento e explicando o objetivo) e rever em câmera lenta revela movimentos que ninguém percebe ao vivo.

#### ✍️ Exercícios

**1.M1** Num fluxograma, o tempo total é 43 min e as operações somam 6 min. Qual a porcentagem do tempo que agrega valor?

**1.M2** Ordene as perguntas do ECRS na ordem de ataque:
   Itens (fora de ordem): Combinar · Eliminar · Rearranjar · Simplificar

**1.M3** Qual destas é uma recomendação de economia de movimentos para o arranjo do posto?
   a) Guardar os materiais onde houver espaço livre
   b) Manter materiais e ferramentas em local fixo, próximo e dentro da área de alcance
   c) Usar uma só mão para ter a outra livre
   d) Fazer movimentos com mudanças bruscas de direção

**1.M4** *No posto de montagem, o operador procura a chave certa numa caixa com várias ferramentas a cada ciclo.* Qual therblig ineficiente aparece e qual a melhoria mais direta?
   a) “Montar”; trocar a peça
   b) “Procurar”; ferramenta em local fixo (quadro de sombras) ou pendurada no ponto de uso
   c) “Inspecionar”; eliminar a inspeção final
   d) “Transportar carregado”; comprar uma esteira

**1.M5** No ECRS, “simplificar” deve ser tentado antes de “eliminar”.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🔧 Médio)

O fluxograma registra cada etapa com tempo e distância e mostra quanto do tempo agrega valor. As melhorias seguem **ECRS**: Eliminar, Combinar, Rearranjar, Simplificar. Os princípios de economia de movimentos (Barnes) organizam o corpo, o posto e as ferramentas.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Escolher a ferramenta de análise adequada ao problema (fluxograma, espaguete, mapa de fluxo de valor)
- Analisar trade-offs entre rapidez, ergonomia e flexibilidade de um método
- Criticar a separação taylorista entre planejar e executar e propor análise participativa

**🔴 Conceito-chave — Qual ferramenta usar?**

**Fluxograma de processo:** sequência detalhada de um item ou operador.  
**Diagrama de espaguete:** traça o caminho real sobre a planta; mostra deslocamentos e cruzamentos.  
**Mapa de fluxo de valor (VSM, Módulo 6):** visão do sistema, com fluxo de material e informação e lead time.  
Escolha pelo **problema**: deslocamento excessivo pede espaguete; lead time longo pede VSM.

**⚖️ Limitações e trade-offs — Rápido nem sempre é melhor**

Um método mais rápido pode concentrar **movimentos curtos e repetitivos** no punho, aumentando risco de LER/DORT (Módulo 10). Um posto superespecializado pode perder **flexibilidade** para trocar de produto.  
Avalie tempo, ergonomia, qualidade e flexibilidade juntos. A NR-17 exige que a organização do trabalho considere as características dos trabalhadores.

**⚖️ Limitações e trade-offs — Crítica ao taylorismo**

Taylor separava quem **planeja** (analista) de quem **executa** (operador). Isso gera métodos que ignoram o saber de quem faz e resistência à mudança.  
Abordagens atuais (Kaizen, Lean) envolvem os operadores na análise: o método fica melhor e é mantido.

**🏭 Na empresa — Caso: posto de embalagem**

O operador anda **8 m por ciclo** para buscar caixas vazias.  
Proposta: **flow rack** (estante com rolos inclinados) ao lado do posto, abastecido pela logística interna.  
Ganhos: tempo e fadiga. Custos e riscos: compra da estante, espaço, nova rotina de abastecimento (se falhar, o posto para).  
Decisão: comparar ganho de tempo × custo, testar em piloto com o operador.

**📚 Para aprofundar**

• BARNES, R. M. *Estudo de Movimentos e de Tempos: projeto e medida do trabalho*.  
• KANAWATY, G. (org.). *Introduction to Work Study*. OIT.  
• PEINADO, J.; GRAEML, A. R. *Administração da Produção: operações industriais e de serviços* (2007).

#### ✍️ Exercícios

**1.D1** *Um método novo reduz o tempo de ciclo em 15%, mas dobra o número de flexões de punho por minuto.* Qual a decisão mais adequada?
   a) Implantar já, pois o ganho de tempo é certo
   b) Avaliar o risco ergonômico (AET, NR-17), buscar alternativa com dispositivo ou rodízio e só então padronizar
   c) Descartar qualquer mudança de método
   d) Implantar e pagar um adicional aos operadores

**1.D2** Você quer mostrar ao gerente que os operadores andam demais no setor. Qual ferramenta comunica isso melhor?
   a) Diagrama de espaguete sobre a planta do setor
   b) Gráfico de pizza dos tipos de defeito
   c) Cronograma de Gantt
   d) Curva de aprendizagem

**1.D3** Um analista redesenhou sozinho o método de um posto e os operadores continuaram fazendo do jeito antigo. Analise o que deu errado e proponha uma abordagem melhor.

**1.D4** O método que produz no menor tempo é sempre o melhor método.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🧠 Difícil)

A ferramenta depende do problema: fluxograma (sequência de um item), espaguete (deslocamentos), mapa de fluxo de valor (sistema inteiro). O método mais rápido pode ser pior para a ergonomia ou a flexibilidade. Métodos duráveis nascem da participação de quem executa, não apenas do analista.

---

## 2. ⏱️ Cronoanálise: medindo o tempo

**🧩 Pré-requisitos:** Estudo de métodos; Amostragem e tamanho de amostra (Módulo 13).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar para que serve a cronoanálise
- Dividir uma operação em elementos com início e fim claros
- Calcular o tempo médio observado

**🏭 Por que isso importa**

O tempo padrão alimenta **custo do produto, capacidade, PCP, balanceamento de linha e metas**. Um tempo errado contamina todas essas decisões.

**🛠️ Passo a passo — Roteiro da cronoanálise**

1. Explicar o **objetivo** ao operador e à supervisão.  
2. Garantir o **método padronizado** e registrá-lo.  
3. Escolher operador **qualificado e treinado**.  
4. Dividir a operação em **elementos** com início e fim claros.  
5. **Cronometrar** vários ciclos.  
6. Calcular o **tempo médio observado**.  
7. Avaliar o **ritmo** e aplicar **tolerâncias** (próxima lição).

**🔴 Conceito-chave — Elementos**

Partes da operação com **início e fim observáveis**. Ex.: parafusar tampa → (1) pegar tampa, (2) posicionar, (3) parafusar 4 parafusos, (4) soltar na esteira.  
Dividir ajuda a padronizar, ver onde está a variação e reaproveitar tempos de elementos comuns.

**🧮 Exemplo resolvido — Tempo médio observado**

Cinco ciclos: 2,1 · 1,9 · 2,0 · 2,2 · 1,8 min.  
TO = (2,1 + 1,9 + 2,0 + 2,2 + 1,8) ÷ 5 = 10,0 ÷ 5 = **2,0 min**.

**😂 Exemplo do dia a dia — Cronometrando o café**

Esquentar água, colocar pó, coar, servir. Se um dia a chaleira demorou porque a boca do fogão estava ruim, isso é um **elemento estranho**: não representa o método normal.

**🟡 Atenção — Nunca cronometre escondido**

Além de antiético, destrói a confiança. E as pessoas mudam o comportamento quando descobrem que estão sendo observadas. Explique o objetivo: medir o **método**, não vigiar a pessoa.

#### ✍️ Exercícios

**2.F1** Ordene as etapas iniciais de uma cronoanálise:
   Itens (fora de ordem): Calcular o tempo médio observado · Cronometrar vários ciclos · Dividir a operação em elementos · Explicar o objetivo ao operador e à supervisão · Padronizar e registrar o método

**2.F2** Cinco ciclos medidos: 2,1 · 1,9 · 2,0 · 2,2 · 1,8 min. Qual o tempo médio observado (min)?

**2.F3** É recomendado cronometrar o operador escondido para ele não mudar o ritmo.
   ( ) Verdadeiro  ( ) Falso

**2.F4** Por que dividir a operação em elementos?
   a) Para aumentar o número de anotações
   b) Para padronizar, localizar a variação e reaproveitar tempos de elementos comuns
   c) Porque o cronômetro não mede ciclos inteiros
   d) Para esconder o estudo do operador

#### 📝 Resumo (🌱 Fácil)

A cronoanálise mede o tempo de uma operação **com método padronizado** e operador qualificado. A operação é dividida em **elementos** (pegar, posicionar, parafusar…), cronometram-se vários ciclos e calcula-se o **tempo médio observado (TO)**. Sempre com transparência para o operador.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular o número de ciclos a medir a partir de uma amostra piloto
- Tratar elementos estranhos e valores atípicos
- Escolher entre leitura contínua e repetitiva

**🔵 Fórmula — Quantos ciclos medir?**

**n = (z · s ÷ (Er · x̄))²** (arredonde para cima)  
Usa uma **amostra piloto** para estimar x̄ e s.

| Símbolo | Significado |
|---|---|
| n | número de ciclos necessários |
| z | valor da normal para a confiança (1,96 para 95%) |
| s | desvio-padrão da amostra piloto |
| Er | erro relativo aceito (ex.: 5% = 0,05) |
| x̄ | média da amostra piloto |

**🧮 Exemplo resolvido — Aplicando**

Piloto de 10 ciclos: x̄ = 2,0 min; s = 0,2 min. Erro de ±5% com 95% de confiança.  
n = (1,96 × 0,2 ÷ (0,05 × 2,0))² = (0,392 ÷ 0,1)² = 3,92² ≈ 15,4 → **16 ciclos**. Como já há 10, faltam **6**.  
Com amostra piloto pequena, alguns livros usam t de Student ou tabelas próprias; a lógica é a mesma.

**🔴 Conceito-chave — Leitura contínua × repetitiva**

**Contínua:** o cronômetro não para; anota-se a leitura no fim de cada elemento e subtrai-se depois. Não perde tempo entre elementos; exige cálculo.  
**Repetitiva (zero):** zera a cada elemento. Leitura direta, mas pode perder frações de tempo nas trocas.

**🟡 Atenção — Estranhos e atípicos**

**Elemento estranho** (peça caiu, conversa, ajuste inesperado): registre à parte, não misture ao elemento regular.  
**Valor atípico** (outlier, Módulo 13): investigue a causa **antes** de descartar; pode revelar um problema real do processo.

**🟣 Conexão**

A fórmula de n é a do **tamanho de amostra** para estimar a média (Módulo 13), com o erro expresso em % da média.

#### ✍️ Exercícios

**2.M1** Amostra piloto: x̄ = 2,0 min; s = 0,2 min. Para erro relativo de 5% com 95% de confiança (z = 1,96), quantos ciclos são necessários?

**2.M2** Amostra piloto: x̄ = 50 s; s = 4 s. Erro relativo de 5%, 95% de confiança. Quantos ciclos medir?

**2.M3** Na leitura CONTÍNUA do cronômetro:
   a) Zera-se o cronômetro a cada elemento
   b) O cronômetro não para; os tempos de cada elemento são obtidos por subtração
   c) Mede-se só o ciclo inteiro
   d) Usa-se um cronômetro por elemento

**2.M4** *Ciclos em torno de 2,0 min e um ciclo de 3,5 min, porque a peça caiu no chão e o operador foi buscá-la.* Como tratar o ciclo de 3,5 min?
   a) Incluir na média normalmente
   b) Registrar como elemento estranho, fora do elemento regular, e verificar se a queda é recorrente
   c) Refazer o estudo inteiro
   d) Dobrar o tempo padrão por segurança

**2.M5** Amostra piloto: x̄ = 2,5 min e s = 0,375 min. Para erro relativo de 5% com 95% de confiança (z = 1,96), quantos ciclos são necessários? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Número de ciclos: **n = (z · s ÷ (Er · x̄))²**, a partir de uma amostra piloto. Elementos estranhos (peça que caiu) saem do elemento regular; valores atípicos são investigados antes de descartar. Leitura contínua não zera o cronômetro; a repetitiva zera a cada elemento.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Avaliar a confiabilidade de um estudo de tempos
- Escolher entre cronoanálise, amostragem do trabalho e tempos predeterminados
- Calcular o número de observações na amostragem do trabalho

**🔴 Conceito-chave — Amostragem do trabalho**

Técnica de **observações instantâneas em momentos aleatórios** (proposta por Tippett nos anos 1930) para estimar a **porcentagem do tempo** em cada estado: trabalhando, parado, esperando material…  
Ideal para atividades longas e variadas (manutenção, logística, escritório), onde cronometrar ciclos não faz sentido.

**🔵 Fórmula — Observações na amostragem do trabalho**

**n = z² · p · (1 − p) ÷ E²**  
Ex.: estima-se ociosidade p ≈ 20%, erro absoluto E = ±3 pontos percentuais, 95% → n = 1,96² × 0,2 × 0,8 ÷ 0,03² ≈ **683 observações**.  
Reduzir E pela metade **quadruplica** n.

| Símbolo | Significado |
|---|---|
| p | proporção estimada do estado de interesse |
| E | erro absoluto aceito (em proporção) |
| z | 1,96 para 95% de confiança |

**🔴 Conceito-chave — Tempos predeterminados**

Sistemas como **MTM** (Methods-Time Measurement, 1948) e **MOST** atribuem tempos tabelados a micromovimentos (alcançar, pegar, mover…). Unidade do MTM: **TMU = 0,036 s**.  
Vantagens: estimar tempos **antes de a linha existir**, sem cronometrar e sem avaliação de ritmo.  
Limites: exige analista treinado; menos adequado a tarefas longas e pouco repetitivas.

**⚖️ Limitações e trade-offs — Quando não confiar no estudo**

• **Variabilidade alta** (ex.: CV acima de ~15–20%) costuma indicar método **não padronizado**: padronize primeiro.  
• Medir em condições **atípicas** (início de turno, material novo, operador em treinamento) distorce o tempo.  
• Amostra pequena subestima a variação.

**📚 Para aprofundar**

• BARNES, R. M. *Estudo de Movimentos e de Tempos*.  
• KANAWATY, G. (org.). *Introduction to Work Study*. OIT.  
• Módulo 13 deste curso: intervalo de confiança e tamanho de amostra.

#### ✍️ Exercícios

**2.D1** Amostragem do trabalho: ociosidade estimada p = 20%, erro absoluto de ±3 pontos percentuais, 95% (z = 1,96). Quantas observações?

**2.D2** Uma nova linha ainda está no projeto e você precisa estimar os tempos das operações. Qual técnica é a mais adequada?
   a) Cronoanálise
   b) Amostragem do trabalho
   c) Tempos predeterminados (MTM, MOST)
   d) Pesquisa de satisfação

**2.D3** *No estudo de uma operação, o coeficiente de variação dos ciclos deu 25% e cada operador faz de um jeito.* Qual a atitude correta?
   a) Aumentar muito o número de ciclos e seguir
   b) Padronizar o método primeiro; depois medir
   c) Usar a mediana e ignorar a variação
   d) Descartar os ciclos mais longos

**2.D4** Os operadores (e o sindicato) desconfiam do estudo de tempos que você vai fazer. Planeje como conduzir o estudo para ter dados confiáveis e aceitos.

**2.D5** Na amostragem do trabalho, reduzir o erro admissível pela metade quadruplica o número de observações necessárias.
   ( ) Verdadeiro  ( ) Falso

**2.D6** Amostragem do trabalho: proporção estimada p = 0,15, erro absoluto de ±0,03, 95% de confiança. Quantas observações? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🧠 Difícil)

Variabilidade alta indica método não padronizado: padronize antes de medir. **Amostragem do trabalho** estima percentuais de tempo com observações aleatórias (n = z² p(1 − p) ÷ E²). **Tempos predeterminados** (MTM, MOST) permitem estimar tempos sem cronometrar, inclusive antes de a linha existir.

---

## 3. 📏 Ritmo, tolerâncias e tempo padrão

**🧩 Pré-requisitos:** Cronoanálise.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Definir tempo observado, tempo normal e tempo padrão
- Explicar o fator de ritmo
- Calcular um tempo padrão simples

**🏭 Por que isso importa**

O tempo cronometrado ainda não é o tempo “justo”: o operador medido pode estar mais rápido ou mais lento que o normal, e ninguém trabalha 480 minutos sem nenhuma pausa.

**🔵 Fórmula — Do observado ao padrão**

**TN = TO × FR**  
**TP = TN × (1 + T)**

| Símbolo | Significado |
|---|---|
| TO | tempo observado médio |
| FR | fator de ritmo (100% = ritmo normal) |
| TN | tempo normal |
| T | tolerância (fração, ex.: 15% = 0,15) |
| TP | tempo padrão |

**🧮 Exemplo resolvido — Aplicando**

TO = 2,0 min; o analista avaliou ritmo de **110%** (operador mais rápido que o normal).  
TN = 2,0 × 1,10 = **2,2 min**.  
Tolerância de 15%: TP = 2,2 × 1,15 = **2,53 min**.

**🔊 Para memorizar**

**“Observo, Normalizo, Padronizo”**: TO → TN → TP.

**😂 Exemplo do dia a dia — Caminhando com amigos**

Se você cronometra seu amigo que anda muito rápido, o tempo dele não serve para planejar o passeio do grupo. É preciso “normalizar” para o ritmo de uma pessoa comum.

**🟡 Atenção — Pegadinha do ritmo**

Ritmo **acima de 100%** → operador rápido → TN **maior** que o TO (um operador normal levaria mais tempo). Ritmo abaixo de 100% → TN menor que o TO.

#### ✍️ Exercícios

**3.F1** Tempo observado médio = 2,0 min; fator de ritmo = 110%. Qual o tempo normal (min)?

**3.F2** Tempo normal = 2,2 min; tolerância de 15% sobre o tempo normal. Qual o tempo padrão (min)?

**3.F3** Ordene o cálculo do tempo:
   Itens (fora de ordem): Tempo normal (TN) · Tempo observado (TO) · Tempo padrão (TP)

**3.F4** Um operador trabalhando mais rápido que o normal recebe fator de ritmo acima de 100%.
   ( ) Verdadeiro  ( ) Falso

**3.F5** Tempo observado médio = 2 min; fator de ritmo = 120%. Qual o tempo normal (min)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

**3.F6** Tempo normal = 1,6 min; tolerância de 18% sobre o tempo normal. Qual o tempo padrão (min)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

**TO** (tempo observado médio) → **TN = TO × fator de ritmo** → **TP = TN × (1 + tolerância)**. Ritmo de 100% é o normal; operador rápido tem ritmo acima de 100% e seu tempo normal fica **maior** que o observado.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Aplicar e comparar as duas convenções de tolerância
- Calcular a capacidade de produção por turno a partir do tempo padrão
- Classificar tolerâncias (pessoais, fadiga, esperas) e evitar contagem dupla

**🔴 Conceito-chave — Tipos de tolerância**

**Pessoais:** necessidades fisiológicas, beber água.  
**Fadiga:** recuperação do esforço físico e mental, postura, ambiente (calor, ruído).  
**Esperas/atrasos inevitáveis:** pequenas interrupções que fazem parte do trabalho.  
Os valores dependem das condições e da política da empresa; a OIT publica tabelas de referência.

**🔵 Fórmula — Duas convenções**

**(a) TP = TN × (1 + T):** T aplicada sobre o tempo normal.  
**(b) TP = TN ÷ (1 − T):** T como fração da **jornada** (ex.: 72 min de 480 = 15%).  
Com TN = 2,2 e T = 15%: (a) **2,53 min** · (b) **2,59 min**.  
Use a convenção coerente com a forma como T foi definida e **declare qual usou**.

| Símbolo | Significado |
|---|---|
| T (a) | fração do tempo normal |
| T (b) | fração do tempo total da jornada |

**🧮 Exemplo resolvido — Tolerância como % da jornada**

Pausas 2 × 10 min + necessidades pessoais 24 min + fadiga 28 min = **72 min** em uma jornada de 480 min → T = 72 ÷ 480 = **15%**.

**🔵 Fórmula — Capacidade por turno**

**Capacidade = tempo disponível ÷ TP** (arredondada para **baixo**)  
Ex.: 480 min ÷ 2,53 min = 189,7 → **189 peças**.

| Símbolo | Significado |
|---|---|
| tempo disponível | tempo do turno considerado no cálculo |

**🟡 Atenção — Contagem dupla**

Se as pausas já estão **no TP** (tolerâncias), não desconte as mesmas pausas também do tempo disponível. Fazer as duas coisas **subestima** a capacidade.

#### ✍️ Exercícios

**3.M1** TN = 2,2 min e tolerância de 15% definida como fração da JORNADA. Use TP = TN ÷ (1 − T). Qual o TP (min)?

**3.M2** Com TP = 2,53 min e 480 min de tempo disponível, qual a capacidade do turno (peças inteiras)?

**3.M3** Ligue a situação ao tipo de tolerância:
   1. Ir ao banheiro, beber água
   2. Recuperar do esforço físico e da postura
   3. Pequena falta momentânea de material
   Ligar com: Espera/atraso inevitável · Fadiga · Pessoal

**3.M4** Pausas e tolerâncias somam 72 min numa jornada de 480 min. Qual a tolerância em % da jornada?

**3.M5** O analista incluiu as pausas nas tolerâncias do TP e também descontou as mesmas pausas do tempo disponível. Qual o efeito?
   a) Nenhum
   b) Capacidade subestimada, por contagem dupla das pausas
   c) Capacidade superestimada
   d) O TP fica menor

**3.M6** TP = 2,1 min e 450 min de tempo disponível. Qual a capacidade do turno (peças inteiras)? 🎲 *(números sorteados; no app mudam a cada vez)*

**3.M7** TN = 2 min e tolerância de 18% definida como fração da JORNADA. Use TP = TN ÷ (1 − T). Qual o TP (min)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Tolerâncias: pessoais, fadiga e esperas inevitáveis. Duas convenções: **TP = TN × (1 + T)** (T sobre o tempo normal) ou **TP = TN ÷ (1 − T)** (T como fração da jornada). **Capacidade = tempo disponível ÷ TP**, arredondada para baixo. Não desconte pausas duas vezes.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Criticar a subjetividade da avaliação de ritmo e propor controles
- Analisar o efeito do tempo padrão em custos, metas e incentivos
- Relacionar ritmo e tolerâncias à ergonomia (NR-17)

**⚖️ Limitações e trade-offs — Ritmo é subjetivo**

Analistas diferentes avaliam ritmos diferentes para o mesmo operador. Controles:  
• treinar com **vídeos de referência** de ritmos conhecidos;  
• usar um sistema estruturado, como o **Westinghouse** (habilidade, esforço, condições, consistência);  
• comparar com **tempos predeterminados**;  
• mais de um analista e revisão dos resultados.

**🔴 Conceito-chave — O TP decide dinheiro**

**Custo de mão de obra por peça** = TP × custo por minuto.  
**Metas e incentivos** usam o TP: folgado → custo alto e capacidade subestimada; apertado → pressão, horas extras, **risco ergonômico e refugo**.  
Por isso o TP precisa ser tecnicamente defensável e revisado quando o método muda.

**🧮 Exemplo resolvido — Custo por peça**

TP = 2,53 min; custo da mão de obra direta (salário + encargos) = R$ 0,80/min.  
Custo MOD por peça = 2,53 × 0,80 = **R$ 2,02**.

**🟣 Conexão — Ergonomia e NR-17**

A NR-17 determina que a organização do trabalho considere, entre outros, **normas de produção, ritmo, exigências de tempo e pausas**. Ritmo excessivo é fator de risco (Módulo 10).

**🏭 Na empresa — Caso: meta sem tolerância**

Uma empresa definiu a meta usando só o **TO** (sem ritmo nem tolerâncias). Resultado: ninguém batia a meta, houve horas extras, aumento de refugo no fim do turno e queixas de dor.  
Correção: recalcular o TP com ritmo e tolerâncias justificadas, rever a meta e acompanhar refugo e absenteísmo.

**📚 Para aprofundar**

• KANAWATY, G. (org.). *Introduction to Work Study*. OIT (tolerâncias).  
• BARNES, R. M. *Estudo de Movimentos e de Tempos* (avaliação de ritmo).  
• Brasil. **NR-17 — Ergonomia**.

#### ✍️ Exercícios

**3.D1** TP = 2,53 min; custo da mão de obra direta = R$ 0,80 por minuto. Qual o custo de MOD por peça (R$)?

**3.D2** *Dois analistas cronometraram o mesmo operador: um avaliou ritmo de 90%, o outro de 115%.* O que fazer?
   a) Usar a média (102,5%) e seguir
   b) Calibrar os analistas (vídeos de referência, sistema estruturado, comparação com tempos predeterminados) e reavaliar
   c) Usar o maior ritmo
   d) Usar o menor ritmo

**3.D3** Uma empresa calculou a meta de produção usando apenas o tempo observado, sem ritmo nem tolerâncias. Quais as consequências prováveis e como corrigir?

**3.D4** Um tempo padrão apertado demais pode aumentar o risco ergonômico e o refugo.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🧠 Difícil)

A avaliação de ritmo é **subjetiva**: calibre analistas (vídeos padrão, sistema Westinghouse, comparação com tempos predeterminados). O TP define custo e metas: folgado gera custo; apertado gera pressão, risco ergonômico e refugo. A NR-17 exige considerar ritmo, pausas e exigências de tempo.

---

## 4. 📈 Eficiência, utilização e aprendizagem

**🧩 Pré-requisitos:** Tempo padrão; Produtividade e eficiência (Módulo 1).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar para que o tempo padrão é usado na empresa
- Calcular horas-padrão produzidas
- Diferenciar eficiência e utilização

**🏭 Por que isso importa — Para que serve o tempo padrão**

Custo do produto · orçamento de mão de obra · capacidade e PCP · balanceamento de linha · metas e acompanhamento de desempenho · comparação entre métodos.

**🔵 Fórmula — Horas-padrão, eficiência e utilização**

**Horas-padrão produzidas = peças × TP**  
**Eficiência = horas-padrão ÷ horas trabalhadas**  
**Utilização = horas trabalhadas ÷ horas disponíveis**

| Símbolo | Significado |
|---|---|
| horas-padrão | trabalho produzido, medido em tempo padrão |
| horas trabalhadas | tempo em que houve trabalho efetivo |
| horas disponíveis | tempo total em que a pessoa estava à disposição |

**🧮 Exemplo resolvido — Um operador num turno**

180 peças × 2,53 min = **455,4 min-padrão**. Trabalhou 480 min.  
Eficiência = 455,4 ÷ 480 = **94,9%**.

**😂 Exemplo do dia a dia — Estudando para a prova**

Utilização: das 3 horas reservadas, quanto você de fato estudou (sem celular)? Eficiência: nas horas que estudou, rendeu o que deveria?

**🟡 Atenção — Eficiência acima de 100%**

É possível: o operador está acima do padrão **ou** o TP está folgado. Valores persistentes acima de ~115–120% pedem revisão do tempo padrão.

#### ✍️ Exercícios

**4.F1** Um operador produziu 180 peças com TP de 2,53 min. Quantos minutos-padrão ele produziu?

**4.F2** Ele produziu 455,4 min-padrão trabalhando 480 min. Qual a eficiência (%)?

**4.F3** Eficiência acima de 100% é impossível.
   ( ) Verdadeiro  ( ) Falso

**4.F4** Qual destes NÃO é um uso típico do tempo padrão?
   a) Calcular o custo de mão de obra do produto
   b) Dimensionar a capacidade da linha
   c) Balancear postos de trabalho
   d) Escolher a cor da embalagem

**4.F5** Um operador produziu 145 peças com TP de 2,5 min, trabalhando 450 min. Qual a eficiência (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

O tempo padrão serve para custo, capacidade, PCP, balanceamento e metas. **Horas-padrão = peças × TP**. **Eficiência** = horas-padrão ÷ horas trabalhadas; **utilização** = horas trabalhadas ÷ horas disponíveis.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular eficiência e utilização de um setor
- Interpretar a combinação dos dois indicadores
- Identificar se a perda é de ritmo ou de gestão

**🧮 Exemplo resolvido — Um setor em um dia**

3 operadores × 480 min = **1.440 min disponíveis**. Cada um ficou 60 min parado por falta de material → **1.260 min trabalhados**.  
Produziram 480 peças × 2,53 = **1.214,4 min-padrão**.  
• Eficiência = 1.214,4 ÷ 1.260 = **96,4%**  
• Utilização = 1.260 ÷ 1.440 = **87,5%**  
• Produtividade sobre o disponível = 1.214,4 ÷ 1.440 = **84,3%**

**🔴 Conceito-chave — Lendo os indicadores juntos**

**Eficiência alta + utilização baixa:** as pessoas rendem quando trabalham, mas faltam condições (material, máquina, programação). Problema de **gestão**.  
**Eficiência baixa + utilização alta:** trabalham o tempo todo, mas abaixo do padrão (treinamento, método, TP apertado?).

**🟣 Conexão**

A mesma lógica aparece no **OEE** (disponibilidade × performance × qualidade), aplicado a equipamentos (Módulos 6 e 14).

#### ✍️ Exercícios

**4.M1** Setor: 1.260 min trabalhados; produziram 480 peças com TP de 2,53 min. Qual a eficiência (%)?

**4.M2** O mesmo setor tinha 1.440 min disponíveis e trabalhou 1.260 min. Qual a utilização (%)?

**4.M3** *Um setor tem eficiência de 96% e utilização de 70%.* Onde está a maior oportunidade?
   a) No ritmo dos operadores
   b) Na gestão: falta de material, quebras, setups, programação
   c) No tempo padrão, que está folgado
   d) Não há oportunidade

**4.M4** Ligue o indicador à pergunta que ele responde:
   1. Eficiência
   2. Utilização
   3. Horas-padrão
   Ligar com: Quando trabalha, rende o padrão? · Quanto do tempo disponível foi trabalhado? · Quanto trabalho foi produzido, em tempo padrão?

#### 📝 Resumo (🔧 Médio)

Eficiência alta com utilização baixa indica **problema de gestão** (falta de material, quebras, setups), não de ritmo. O produto das duas dá a produtividade sobre o tempo disponível.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Aplicar a curva de aprendizagem para prever tempos
- Avaliar os limites da curva de aprendizagem
- Analisar o conflito entre eficiência local e resultado global

**🔵 Fórmula — Curva de aprendizagem (Wright, 1936)**

**Tn = T1 · n^b**, com **b = log(taxa) ÷ log 2**  
Taxa de 80%: a cada vez que a produção **acumulada dobra**, o tempo por unidade cai para 80% do anterior.  
T1 = 100 min → T2 = 80 → T4 = 64 → T8 = 51,2 → T10 ≈ 47,7 min.

| Símbolo | Significado |
|---|---|
| Tn | tempo da n-ésima unidade |
| T1 | tempo da primeira unidade |
| taxa | fração a cada dobro (ex.: 0,80) |
| b | expoente (negativo) |

**⚖️ Limitações e trade-offs — Limites da curva**

Vale bem para trabalho com forte componente manual e de aprendizado (montagem complexa, lotes pequenos). Tende a um **platô**; interrupções causam **esquecimento**; a taxa varia por tipo de trabalho e precisa ser estimada com dados. Não extrapole muito além do observado.

**🔴 Conceito-chave — Eficiência local × resultado global**

Fazer um posto que **não é gargalo** produzir no máximo só **acumula estoque** antes do gargalo: a saída da fábrica não aumenta (Goldratt e Cox, *A Meta*, 1984).  
Indicadores de eficiência individual como meta podem incentivar produzir o que não é necessário.

**⚖️ Limitações e trade-offs — Indicador vira meta**

**Lei de Goodhart:** quando eficiência vira meta de bônus, surgem distorções (apontamento maquiado, preferência por lotes grandes, resistência a setups). Combine com indicadores do sistema (atendimento ao cliente, estoque, qualidade).

**📚 Para aprofundar**

• WRIGHT, T. P. Factors affecting the cost of airplanes. *Journal of the Aeronautical Sciences*, 1936.  
• GOLDRATT, E. M.; COX, J. *A Meta* (1984).

#### ✍️ Exercícios

**4.D1** Curva de aprendizagem de 80%, primeira unidade em 100 min. Qual o tempo da 4ª unidade (min)?

**4.D2** Mesma curva (80%, T1 = 100 min). Qual o tempo da 10ª unidade (min)? Use Tn = T1 · n^b, b = log(0,8) ÷ log 2.

**4.D3** *A fábrica paga bônus por eficiência individual. O posto 1 (que não é gargalo) passou a produzir 20% a mais.* Qual o efeito mais provável na fábrica?
   a) A saída da fábrica aumenta 20%
   b) Acumula estoque antes do gargalo, sem aumentar a saída
   c) O lead time diminui
   d) O gargalo desaparece

**4.D4** O gerente quer usar a eficiência individual como única base do bônus. Analise os riscos e proponha uma alternativa.

**4.D5** Com taxa de aprendizagem de 80%, o tempo cai 20% a cada nova unidade produzida.
   ( ) Verdadeiro  ( ) Falso

**4.D6** Curva de aprendizagem de 85%, primeira unidade em 50 min. Qual o tempo da unidade número 16 (min)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🧠 Difícil)

**Curva de aprendizagem** (Wright, 1936): Tn = T1 · n^b, com b = log(taxa) ÷ log 2; a cada **dobro** da produção acumulada o tempo cai a uma taxa fixa. Tem platô e esquecimento. Maximizar a eficiência de postos que não são gargalo gera estoque, não saída (Teoria das Restrições).

---

## 5. ⚖️ Takt time e balanceamento de linha

**🧩 Pré-requisitos:** Tempo padrão; Redes de precedência (cronograma, Módulo 2).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Calcular o takt time
- Diferenciar takt time de tempo de ciclo
- Calcular o número mínimo teórico de postos

**🏭 Por que isso importa**

Numa linha de montagem, cada posto faz uma parte do trabalho. Se um posto demora mais, **a linha inteira anda no ritmo dele**. Balancear bem significa atender a demanda com o menor número de pessoas e sem sobrecarregar ninguém.

**🔵 Fórmula — Takt time**

**Takt = tempo disponível ÷ demanda**  
Ex.: turno de 480 min − 40 min de pausas = 440 min = **26.400 s**; demanda = 480 ventiladores → takt = **55 s**.

| Símbolo | Significado |
|---|---|
| tempo disponível | tempo do turno menos pausas planejadas |
| demanda | unidades necessárias no mesmo período |

**🔴 Conceito-chave — Takt × tempo de ciclo**

**Takt:** ritmo que o **cliente** exige (uma unidade a cada 55 s).  
**Tempo de ciclo (TC):** ritmo real da **linha** = maior tempo entre os postos.  
Se TC > takt, a demanda **não** é atendida. Se TC < takt, sobra capacidade.

**🔵 Fórmula — Número mínimo de postos**

**N mínimo = Σt ÷ takt**, arredondado para **cima**.  
Ex.: soma das tarefas do ventilador = 180 s → 180 ÷ 55 = 3,27 → **4 postos**.

| Símbolo | Significado |
|---|---|
| Σt | soma dos tempos de todas as tarefas |

**🔊 Para memorizar**

**“Takt é o cliente, ciclo é a linha.”**

**😂 Exemplo do dia a dia — Linha de sanduíches**

Quatro amigos montando 40 sanduíches para a festa: um passa a manteiga, outro põe o recheio, outro fecha e outro embala. Se quem põe recheio é o mais lento, os outros ficam esperando.

**🟡 Atenção — Erro comum**

No tempo disponível, desconte **pausas planejadas** (refeição, ginástica laboral). **Não** desconte quebras e paradas não planejadas: elas são perdas a eliminar, não parte do plano.

#### ✍️ Exercícios

**5.F1** Tempo disponível de 26.400 s por turno e demanda de 480 unidades. Qual o takt time (s)?

**5.F2** A soma dos tempos das tarefas é 180 s e o takt é 55 s. Qual o número mínimo teórico de postos?

**5.F3** Qual a diferença entre takt time e tempo de ciclo?
   a) São sinônimos
   b) Takt é o ritmo que o cliente pede; tempo de ciclo é o ritmo que a linha consegue produzir
   c) Takt é o tempo do posto mais rápido
   d) Tempo de ciclo é definido pelo cliente

**5.F4** Se o tempo de ciclo da linha for maior que o takt, a demanda não será atendida.
   ( ) Verdadeiro  ( ) Falso

**5.F5** Tempo disponível de 25.200 s por turno e demanda de 300 unidades. Qual o takt time (s)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

**5.F6** A soma dos tempos das tarefas é 150 s e o takt é 45 s. Qual o número mínimo teórico de postos? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

**Takt = tempo disponível ÷ demanda**: o ritmo que o cliente pede. **Tempo de ciclo** é o ritmo em que a linha consegue produzir (o maior tempo de posto). Se o ciclo for maior que o takt, a demanda não é atendida. **N mínimo = ⌈Σt ÷ takt⌉**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Montar o diagrama de precedência
- Balancear uma linha com a heurística do maior tempo
- Calcular eficiência do balanceamento e ociosidade

**🧠 Mapa — Tarefas do ventilador (ilustrativo)**

```
Tarefa  Tempo  Precede-se de
  A      20 s   —
  B      35 s   A
  C      15 s   A
  D      40 s   B
  E      25 s   C
  F      30 s   D, E
  G      15 s   F
Σt = 180 s · takt = 55 s

      ┌→ B ─→ D ─┐
  A ──┤          ├→ F → G
      └→ C ─→ E ─┘
```

**🛠️ Passo a passo — Heurística do maior tempo**

1. Liste as tarefas **liberadas** (predecessoras já alocadas).  
2. Entre as que **cabem** no tempo restante do posto, escolha a **mais longa**.  
3. Repita até nenhuma caber; abra o próximo posto.  
4. Calcule TC, eficiência e ociosidade.

**🧮 Exemplo resolvido — Resultado do balanceamento**

Posto 1: A (20) + B (35) = **55 s**  
Posto 2: D (40) + C (15) = **55 s**  
Posto 3: E (25) + F (30) = **55 s**  
Posto 4: G (15) = **15 s**  
TC = 55 s = takt ✓ · 4 postos (= N mínimo).

**🔵 Fórmula — Eficiência e ociosidade**

**Eficiência = Σt ÷ (N × TC)** = 180 ÷ (4 × 55) = **81,8%**  
**Ociosidade = N × TC − Σt** = 220 − 180 = **40 s por ciclo**

| Símbolo | Significado |
|---|---|
| N | número de postos |
| TC | tempo de ciclo (maior tempo de posto) |

**🟡 Atenção — Posto com pouca carga**

O posto 4 fica ocioso 40 s por ciclo. Opções: atribuir tarefas de apoio (abastecimento, inspeção), rever a divisão de tarefas ou compartilhar o operador com outra área. Não esconda a ociosidade: ela é um dado para melhorar.

#### ✍️ Exercícios

**5.M1** Linha balanceada com 4 postos e tempo de ciclo de 55 s; soma das tarefas = 180 s. Qual a eficiência do balanceamento (%)?

**5.M2** Na mesma linha (4 postos, TC 55 s, Σt 180 s), qual a ociosidade total por ciclo (s)?

**5.M3** Ordene os passos do balanceamento:
   Itens (fora de ordem): Alocar as tarefas aos postos respeitando takt e precedência · Calcular eficiência e ociosidade · Calcular o número mínimo de postos · Calcular o takt time · Montar o diagrama de precedência

**5.M4** *Ventilador (takt 55 s): o posto 1 já tem a tarefa A (20 s). Tarefas: B 35 s (após A), C 15 s (após A), D 40 s (após B), G 15 s (após F).* Pela heurística do maior tempo, qual tarefa entra no posto 1?
   a) B (35 s)
   b) C (15 s)
   c) D (40 s)
   d) G (15 s)

**5.M5** A demanda caiu para 440 unidades por turno (tempo disponível 26.400 s; Σt = 180 s). Qual o novo número mínimo de postos?

**5.M6** Uma linha tem 4 postos com tempos de 50 · 55 · 37 · 46 s. Qual a eficiência do balanceamento (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Balancear = distribuir tarefas entre postos respeitando **precedência** e **takt**. Heurística do maior tempo: entre as tarefas liberadas que cabem no posto, escolha a mais longa. **Eficiência = Σt ÷ (N × TC)**; **ociosidade = N × TC − Σt**.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Reconhecer que heurísticas não garantem o ótimo
- Tratar tarefas maiores que o takt
- Balancear linhas multimodelo e com variabilidade

**🔴 Conceito-chave — Heurísticas não garantem o ótimo**

Outras regras: **mais sucessores** e **peso posicional** (tempo da tarefa + tempos de todas as sucessoras; Helgeson e Birnie, 1961).  
O balanceamento de linhas é um problema **combinatório** (NP-difícil): heurísticas dão boas soluções rápidas, mas não garantem a melhor. Para o ótimo, usam-se modelos de **Pesquisa Operacional** (Módulo 9).

**🔴 Conceito-chave — Tarefa maior que o takt**

Se uma tarefa leva 90 s e o takt é 55 s:  
• **Dividir** a tarefa em partes (se tecnicamente possível);  
• **Postos em paralelo**: 2 operadores alternando as unidades → ciclo efetivo do posto = 90 ÷ 2 = 45 s;  
• **Automatizar** ou mudar o método.

**⚖️ Limitações e trade-offs — Variabilidade**

Os tempos são médias. Com postos carregados a 100% do takt, os ciclos mais lentos atrasam a linha inteira. Por isso muitas empresas carregam os postos **abaixo do takt** (margem definida por política), reduzem a variação padronizando o trabalho ou usam pequenos estoques de proteção.  
Outras restrições reais: lado da linha, habilidades, ferramentas e **ergonomia** (não concentrar tarefas pesadas num posto).

**🔴 Conceito-chave — Linha multimodelo**

Modelos com tempos diferentes na mesma linha: balanceie pelo **tempo médio ponderado pelo mix** e verifique cada modelo; **sequencie** de forma nivelada (não dez unidades do modelo pesado seguidas) — ligação com o Heijunka (Módulo 6).

**📚 Para aprofundar**

• HELGESON, W. B.; BIRNIE, D. P. Assembly line balancing using the ranked positional weight technique. *Journal of Industrial Engineering*, 1961.  
• SCHOLL, A. *Balancing and Sequencing of Assembly Lines* (1999).  
• PEINADO, J.; GRAEML, A. R. *Administração da Produção*.

#### ✍️ Exercícios

**5.D1** Uma tarefa indivisível leva 90 s e o takt é 55 s. Quantos postos em paralelo, no mínimo, são necessários para essa tarefa?

**5.D2** Sobre as heurísticas de balanceamento (maior tempo, peso posicional), é correto afirmar:
   a) Sempre encontram a solução ótima
   b) Dão boas soluções rapidamente, mas não garantem o ótimo
   c) Só funcionam com 3 postos
   d) Ignoram a precedência

**5.D3** *Todos os postos foram carregados com exatamente 55 s para um takt de 55 s, mas os tempos reais variam cerca de ±10% de ciclo para ciclo.* O que tende a acontecer e o que fazer?
   a) Nada, a média está no takt
   b) Ciclos lentos atrasam a linha; carregar abaixo do takt, reduzir a variação ou usar pequenos pulmões
   c) Aumentar o takt artificialmente
   d) Eliminar as pausas para compensar

**5.D4** Uma linha monta dois modelos: A (60% do mix, 180 s de trabalho) e B (40%, 220 s). Como você definiria a base de balanceamento e o que cuidaria na operação?

**5.D5** Modelo A: 60% do mix, 180 s; modelo B: 40%, 220 s. Qual o tempo médio ponderado por unidade (s)?

#### 📝 Resumo (🧠 Difícil)

Heurísticas não garantem o ótimo (o problema é combinatório). Tarefa maior que o takt pede divisão, **postos em paralelo** ou automação. Com variabilidade, carregar 100% do takt gera atrasos. Em linhas multimodelo, balanceie pelo tempo ponderado e sequencie de forma nivelada.

---

## 6. 🚧 Gargalo e melhoria da linha

**🧩 Pré-requisitos:** Takt time e balanceamento.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Identificar o gargalo de uma linha
- Calcular a produção máxima a partir do tempo de ciclo
- Explicar por que melhorar fora do gargalo não aumenta a saída

**🏭 Por que isso importa**

Toda linha tem um ponto que limita a produção. Encontrar e atacar esse ponto é o caminho mais rápido para produzir mais sem contratar nem comprar máquinas desnecessárias.

**🧮 Exemplo resolvido — Linha de 4 postos**

Tempos: 40 s · **52 s** · 45 s · 38 s.  
TC = 52 s (posto 2 é o gargalo).  
Produção máxima = 26.400 s ÷ 52 s = 507,7 → **507 unidades/turno**.

**🔴 Conceito-chave — Gargalo**

Recurso cuja capacidade é **menor ou igual à demanda** colocada sobre ele. Na linha, é o posto com **maior tempo de ciclo**. Antes dele forma-se fila; depois dele, os postos esperam.

**😂 Exemplo do dia a dia — O caixa do restaurante**

A cozinha é rápida, os garçons também, mas há um só caixa: a fila se forma ali. Colocar mais garçons não faz ninguém sair mais rápido.

**🔊 Para memorizar**

**“Uma hora perdida no gargalo é uma hora perdida no sistema inteiro.”** (Goldratt)

**🟡 Atenção — Melhoria no lugar errado**

Reduzir o posto 1 de 40 para 30 s **não muda nada**: a linha continua a 52 s por unidade.

#### ✍️ Exercícios

**6.F1** Uma linha tem postos com tempos de 40, 52, 45 e 38 s. Qual o tempo de ciclo da linha (s)?

**6.F2** Com TC de 52 s e 26.400 s disponíveis, quantas unidades inteiras a linha produz por turno?

**6.F3** O posto 1 (40 s) foi melhorado para 30 s. O gargalo (posto 2) continua com 52 s. O que acontece com a produção?
   a) Aumenta 25%
   b) Não muda
   c) Diminui
   d) Aumenta 10 unidades

**6.F4** O gargalo de uma linha é o posto com o menor tempo de ciclo.
   ( ) Verdadeiro  ( ) Falso

**6.F5** Postos com tempos de 55 · 44 · 40 · 35 s e 26.400 s disponíveis no turno. Quantas unidades inteiras a linha produz? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

O **gargalo** é o posto de maior tempo de ciclo: ele dita a saída da linha. **Produção máxima = tempo disponível ÷ TC**. Melhorar um posto que não é gargalo não aumenta a produção.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular o ganho de produção ao atacar o gargalo
- Escolher ações para o gargalo
- Identificar o novo gargalo após a melhoria

**🧮 Exemplo resolvido — Redistribuindo tarefas**

Passar 7 s de trabalho do posto 2 (52 → 45 s) para o posto 4 (38 → 45 s).  
Novo TC = 45 s → 26.400 ÷ 45 = 586,7 → **586 unidades** (+79).  
Ganho = 52 ÷ 45 − 1 ≈ **15,6%**, sem investimento.

**🔴 Conceito-chave — O que fazer no gargalo**

• **Redistribuir** tarefas para postos com folga.  
• **Dividir** a tarefa ou fazer **postos em paralelo**.  
• **Reduzir setup** e paradas no gargalo (SMED, manutenção).  
• **Inspecionar antes** do gargalo: não gastar tempo dele com peça ruim.  
• **Horas extras e intervalos cobertos** preferencialmente no gargalo.

**🟡 Atenção — O gargalo muda**

Depois da melhoria, os postos 2, 3 e 4 ficaram com 45 s. Qualquer nova melhoria precisa atacar **todos** os postos que agora limitam, ou será inútil.

#### ✍️ Exercícios

**6.M1** Após redistribuir tarefas, o maior tempo de posto passou para 45 s. Quantas unidades inteiras a linha produz em 26.400 s?

**6.M2** O tempo de ciclo caiu de 52 s para 45 s. Qual o ganho percentual de capacidade?

**6.M3** Ligue a ação ao que ela faz pelo gargalo:
   1. Redistribuir tarefas
   2. Postos em paralelo
   3. Reduzir setup (SMED)
   4. Inspecionar antes do gargalo
   Ligar com: Devolve tempo produtivo ao gargalo · Duplica a capacidade da etapa · Evita gastar o gargalo com peça ruim · Passa trabalho do gargalo para postos com folga

**6.M4** Se for necessário fazer horas extras para atender um pico de demanda, onde elas devem ser priorizadas?
   a) Em todos os postos igualmente
   b) No posto gargalo
   c) No posto mais rápido
   d) Na expedição

**6.M5** O tempo de ciclo da linha caiu de 52 s para 49 s. Qual o ganho percentual de capacidade? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Redistribuir tarefas, dividir, paralelizar, reduzir setups e paradas **no gargalo**, inspecionar **antes** dele. Depois da melhoria, o gargalo **muda de lugar**: recalcule.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Aplicar os 5 passos da Teoria das Restrições
- Avaliar um investimento no gargalo pelo ganho de saída e pela demanda
- Analisar variabilidade e estoques de proteção

**🔴 Conceito-chave — Os 5 passos da TOC**

Teoria das Restrições (Goldratt):  
1. **Identificar** a restrição.  
2. **Explorar**: tirar o máximo dela (sem paradas, sem refugo, sem setups desnecessários).  
3. **Subordinar** o resto do sistema ao ritmo dela.  
4. **Elevar**: aumentar a capacidade (investir) se ainda for preciso.  
5. **Repetir**, sem deixar a inércia virar a nova restrição.

**🔴 Conceito-chave — Tambor, pulmão e corda**

**Tambor:** o gargalo dita o ritmo. **Pulmão:** estoque de proteção antes do gargalo, para que ele nunca pare por falta de material. **Corda:** liberar material na entrada no ritmo do gargalo (evita estoque em excesso no resto da linha).

**🧮 Exemplo resolvido — Vale investir no gargalo?**

Um robô de **R$ 150 mil** reduz o gargalo de 52 para 45 s: +79 unidades por turno.  
Margem de contribuição de R$ 4/unidade × 79 × 2 turnos × 22 dias = **R$ 13.904/mês**.  
Payback ≈ 150.000 ÷ 13.904 ≈ **10,8 meses**, **se houver demanda** para as unidades extras.

**⚖️ Limitações e trade-offs — Quando a restrição é o mercado**

Se a demanda é de 450 unidades por turno e a linha já faz 507, **a restrição é o mercado**. Aumentar a capacidade só gera estoque e custo. Nesse caso, o esforço vai para vendas, mix, qualidade ou redução de custo.

**📚 Para aprofundar**

• GOLDRATT, E. M.; COX, J. *A Meta* (1984).  
• Módulo 6 (Lean) e Módulo 8 (payback) deste curso.

#### ✍️ Exercícios

**6.D1** Ordene os 5 passos da Teoria das Restrições:
   Itens (fora de ordem): Elevar a restrição · Explorar a restrição · Identificar a restrição · Repetir (evitar a inércia) · Subordinar o resto do sistema

**6.D2** Um investimento aumenta a saída em 79 unidades por turno. Margem de contribuição R$ 4/unidade, 2 turnos por dia, 22 dias por mês. Qual o ganho mensal (R$)?

**6.D3** O investimento custa R$ 150.000 e gera R$ 13.904 por mês. Qual o payback simples (meses)?

**6.D4** *A linha produz 507 unidades por turno e a demanda estável é de 450. A engenharia propõe o robô de R$ 150 mil para chegar a 586.* Qual a recomendação?
   a) Comprar: mais capacidade é sempre melhor
   b) Não comprar agora: a restrição é o mercado; capacidade extra viraria estoque
   c) Comprar e demitir operadores
   d) Reduzir a demanda

**6.D5** Numa linha, o gargalo “passeia”: em alguns dias é o posto 2, em outros o posto 3. Explique a provável causa e proponha um plano de ação.

#### 📝 Resumo (🧠 Difícil)

TOC: **identificar, explorar, subordinar, elevar e repetir**. Investir no gargalo só vale se houver **demanda**; se o mercado for a restrição, capacidade extra vira estoque. Pulmões antes do gargalo protegem a saída contra a variabilidade.

---

## 7. 👾 👾 Chefão: a linha de bombons

**🧩 Pré-requisitos:** Todas as lições do Módulo 4.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Ordenar o raciocínio da engenharia de métodos, do método ao gargalo
- Relacionar cada conceito à pergunta que ele responde
- Conectar métodos a projetos (Módulo 2) e produtividade (Módulo 1)

**🏭 Na empresa — O caso: linha de caixas de bombom**

A nova linha da Doces Serra (Módulo 2) precisa de **600 caixas por turno**, com **450 min** disponíveis (27.000 s).  
Tarefas: **A** montar caixa 20 s · **B** inserir berço 15 s (após A) · **C** colocar bombons 40 s (após B) · **D** fechar tampa 10 s (após C) · **E** etiquetar 12 s (após D) · **F** inspecionar 8 s (após D) · **G** encaixotar 25 s (após E e F). Σt = **130 s**.  
Na cronoanálise de C: TO = 36 s, ritmo 100%, tolerância de 11% sobre o TN.

**🔴 Conceito-chave — ✅ Checklist (Fácil)**

• Método antes do tempo · símbolos do fluxograma  
• Elementos e tempo médio  
• TO → TN → TP  
• Eficiência × utilização  
• Takt × ciclo · N mínimo  
• Gargalo e produção máxima

#### ✍️ Exercícios

**7.F1** Ordene o raciocínio para montar a linha de bombons:
   Itens (fora de ordem): Acompanhar e atacar o gargalo · Balancear a linha · Calcular o takt time · Calcular o tempo padrão · Medir os tempos (cronoanálise) · Melhorar o método de cada tarefa

**7.F2** Ligue o conceito à pergunta que ele responde:
   1. Takt time
   2. Tempo padrão
   3. Gargalo
   4. N mínimo de postos
   Ligar com: Em que ritmo o cliente precisa das caixas? · Qual o menor número possível de postos? · Qual posto limita a produção? · Quanto tempo um operador normal leva, com tolerâncias?

**7.F3** Qual o takt time da linha de bombons (27.000 s disponíveis, 600 caixas)?

**7.F4** Balancear a linha nova faz parte da partida do projeto da Doces Serra (Módulo 2).
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🌱 Fácil)

Engenharia de métodos em sequência: **melhorar o método → medir → tempo padrão → takt → balancear → atacar o gargalo**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular tempo padrão, takt, número mínimo de postos, eficiência e capacidade no mesmo caso
- Verificar se a linha atende a demanda
- Interpretar a diferença entre o mínimo teórico e o obtido

**🏭 Na empresa — O caso: linha de caixas de bombom**

A nova linha da Doces Serra (Módulo 2) precisa de **600 caixas por turno**, com **450 min** disponíveis (27.000 s).  
Tarefas: **A** montar caixa 20 s · **B** inserir berço 15 s (após A) · **C** colocar bombons 40 s (após B) · **D** fechar tampa 10 s (após C) · **E** etiquetar 12 s (após D) · **F** inspecionar 8 s (após D) · **G** encaixotar 25 s (após E e F). Σt = **130 s**.  
Na cronoanálise de C: TO = 36 s, ritmo 100%, tolerância de 11% sobre o TN.

**🔴 Conceito-chave — ✅ Checklist (Médio)**

• ECRS e economia de movimentos  
• Número de ciclos  
• Convenções de tolerância e capacidade  
• Eficiência e utilização de setor  
• Heurística do maior tempo, eficiência e ociosidade  
• Ganho ao atacar o gargalo

#### ✍️ Exercícios

**7.M1** Elemento C: TO = 36 s, ritmo 100%, tolerância de 11% sobre o tempo normal. Qual o tempo padrão (s)?

**7.M2** Σt = 130 s e takt = 45 s. Qual o número mínimo teórico de postos?

**7.M3** O balanceamento com precedência resultou em 4 postos (35, 40, 30 e 25 s). Qual a eficiência do balanceamento (%)?

**7.M4** Com TC = 40 s e 27.000 s disponíveis, quantas caixas a linha produz por turno?

#### 📝 Resumo (🔧 Médio)

Na linha de bombons: TP do elemento C ≈ 40 s; takt = 45 s; N mínimo = 3; o balanceamento com precedência dá **4 postos**, TC = 40 s, eficiência de 81% e capacidade de 675 caixas, acima da demanda de 600.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Justificar por que o mínimo teórico nem sempre é alcançável
- Propor alternativas com trade-offs para a linha
- Integrar tempos, ergonomia e investimento na recomendação

**🏭 Na empresa — O caso: linha de caixas de bombom**

A nova linha da Doces Serra (Módulo 2) precisa de **600 caixas por turno**, com **450 min** disponíveis (27.000 s).  
Tarefas: **A** montar caixa 20 s · **B** inserir berço 15 s (após A) · **C** colocar bombons 40 s (após B) · **D** fechar tampa 10 s (após C) · **E** etiquetar 12 s (após D) · **F** inspecionar 8 s (após D) · **G** encaixotar 25 s (após E e F). Σt = **130 s**.  
Na cronoanálise de C: TO = 36 s, ritmo 100%, tolerância de 11% sobre o TN.

**🔴 Conceito-chave — ✅ Checklist (Difícil)**

• Trade-offs de método (ergonomia, flexibilidade)  
• Amostragem do trabalho e tempos predeterminados  
• Subjetividade do ritmo e efeito do TP em custos  
• Curva de aprendizagem · eficiência local × global  
• Paralelismo, variabilidade e multimodelo  
• TOC e investimento no gargalo

#### ✍️ Exercícios

**7.D1** O número mínimo teórico de postos é sempre alcançável quando se usa uma boa heurística.
   ( ) Verdadeiro  ( ) Falso

**7.D2** *A linha tem 4 postos (35, 40, 30 e 25 s) para um takt de 45 s. O diretor pergunta se dá para operar com 3 pessoas.* Qual a melhor resposta técnica?
   a) Sim: o N mínimo é 3, basta juntar postos
   b) Com as tarefas atuais, não: a precedência impede 3 postos dentro de 45 s. Seria preciso mudar o método (ex.: dividir ou automatizar C) ou aceitar um takt maior
   c) Sim, desde que os operadores trabalhem mais rápido
   d) Não, e é preciso contratar mais gente

**7.D3** Proponha duas alternativas para reduzir a ociosidade da linha de bombons (eficiência de 81%) e compare os trade-offs.

#### 📝 Resumo (🧠 Difícil)

O N mínimo é um **limite inferior**: a precedência e as tarefas indivisíveis podem impedir alcançá-lo. As alternativas (dividir C, automatizar C, dar tarefas de apoio ao posto 4) devem ser comparadas por custo, ergonomia e flexibilidade.

---

## 📖 Glossário

| Termo | Definição |
|---|---|
| **Amostragem do trabalho** | Observações instantâneas aleatórias para estimar a porcentagem de tempo em cada atividade. |
| **Balanceamento de linha** | Distribuição das tarefas entre postos respeitando precedência e takt. |
| **Cronoanálise** | Medição de tempos com cronômetro de uma operação padronizada, dividida em elementos. |
| **Curva de aprendizagem** | Queda do tempo por unidade a uma taxa fixa a cada dobro da produção acumulada (Wright, 1936). |
| **Diagrama de espaguete** | Desenho do caminho real percorrido por pessoas ou materiais sobre a planta. |
| **Diagrama de precedência** | Rede que mostra quais tarefas precisam ser feitas antes de outras. |
| **ECRS** | Eliminar, Combinar, Rearranjar, Simplificar: ordem de ataque das melhorias de método. |
| **Eficiência** | Horas-padrão produzidas ÷ horas trabalhadas. |
| **Eficiência do balanceamento** | Σt ÷ (N × TC). |
| **Elemento** | Parte de uma operação com início e fim observáveis. |
| **Elemento estranho** | Evento que não faz parte do método normal (peça que cai, conversa); registrado à parte. |
| **Estudo do trabalho** | Conjunto de estudo de métodos (como fazer) e medida do trabalho (quanto tempo). |
| **Fator de ritmo** | Avaliação do ritmo do operador em relação ao normal (100%). |
| **Fluxograma de processo** | Registro sequencial das etapas com os símbolos operação, transporte, inspeção, espera e armazenagem. |
| **Gargalo** | Recurso que limita a saída do sistema; na linha, o posto de maior tempo. |
| **Horas-padrão** | Quantidade produzida × tempo padrão. |
| **MTM / MOST** | Sistemas de tempos predeterminados baseados em micromovimentos tabelados. |
| **Ociosidade** | N × TC − Σt: tempo parado por ciclo somando todos os postos. |
| **Postos em paralelo** | Dois ou mais operadores fazendo a mesma tarefa em unidades alternadas. |
| **Takt time** | Tempo disponível ÷ demanda: ritmo que o cliente exige. |
| **Tambor-pulmão-corda** | Programação pela TOC: o gargalo dita o ritmo, o pulmão o protege e a corda controla a liberação. |
| **Tempo de ciclo** | Ritmo real da linha, dado pelo maior tempo entre os postos. |
| **Tempo normal (TN)** | TO × fator de ritmo: tempo de um operador qualificado em ritmo normal. |
| **Tempo observado (TO)** | Média dos tempos cronometrados. |
| **Tempo padrão (TP)** | Tempo normal acrescido das tolerâncias. |
| **Teoria das Restrições (TOC)** | Abordagem de Goldratt: identificar, explorar, subordinar, elevar e repetir. |
| **Therbligs** | Micromovimentos do trabalho manual definidos pelos Gilbreth (procurar, pegar, posicionar…). |
| **TMU** | Unidade de tempo do MTM: 0,00001 hora = 0,036 s. |
| **Tolerâncias** | Acréscimos para necessidades pessoais, fadiga e esperas inevitáveis. |
| **Utilização** | Horas trabalhadas ÷ horas disponíveis. |

## 🃏 Flashcards

| Frente | Verso |
|---|---|
| Estudo do trabalho = ? | Estudo de métodos (como) + medida do trabalho (quanto tempo). Método primeiro. |
| 5 símbolos do fluxograma | Operação, Transporte, Inspeção, Espera, Armazenagem (“O Tio Ignorou a Espera no Armazém”). |
| ECRS | Eliminar, Combinar, Rearranjar, Simplificar. |
| Therbligs ineficientes | Procurar, selecionar, segurar, esperar. |
| Número de ciclos da cronoanálise | n = (z · s ÷ (Er · x̄))², arredondando para cima. |
| Leitura contínua × repetitiva | Contínua: não zera, subtrai depois. Repetitiva: zera a cada elemento. |
| TO → TN → TP | TN = TO × ritmo; TP = TN × (1 + T) ou TN ÷ (1 − T). |
| Ritmo acima de 100% | Operador rápido: TN maior que o TO. |
| Tipos de tolerância | Pessoais, fadiga, esperas inevitáveis. |
| Capacidade por turno | Tempo disponível ÷ TP, arredondado para baixo. |
| Amostragem do trabalho | n = z² · p(1 − p) ÷ E². Observações instantâneas aleatórias. |
| Tempos predeterminados | MTM, MOST: tempos tabelados de micromovimentos; servem antes de a linha existir. |
| Eficiência × utilização | Eficiência: horas-padrão ÷ horas trabalhadas. Utilização: trabalhadas ÷ disponíveis. |
| Curva de aprendizagem 80% | A cada DOBRO da produção acumulada, o tempo cai para 80%. |
| Takt time | Tempo disponível ÷ demanda. “Takt é o cliente, ciclo é a linha.” |
| N mínimo de postos | ⌈Σt ÷ takt⌉ — é um limite inferior. |
| Heurística do maior tempo | Entre as tarefas liberadas que cabem no posto, escolha a mais longa. |
| Eficiência do balanceamento | Σt ÷ (N × TC). Ociosidade = N × TC − Σt. |
| Tarefa maior que o takt | Dividir, postos em paralelo ou automatizar. |
| Gargalo | Posto de maior tempo de ciclo; dita a saída. Melhorar fora dele não aumenta a produção. |
| 5 passos da TOC | Identificar, explorar, subordinar, elevar, repetir. |
| Quando não investir no gargalo | Quando a restrição é o mercado (demanda menor que a capacidade). |

## 📝 Gabarito comentado

**1.F1** b) Métodos: como fazer melhor; medida: quanto tempo leva  
Primeiro se melhora o método; depois se mede o tempo do método melhorado.

**1.F2** ○ → Operação; ⇨ → Transporte; □ → Inspeção; D → Espera; ▽ → Armazenagem  
“O Tio Ignorou a Espera no Armazém”.

**1.F3** Falso  
Transporte é necessário, mas não transforma o produto. É candidato a redução.

**1.F4** a) método  
Medir um método ruim é padronizar desperdício.

**1.M1** 13,95 %  
% valor = tempo de operação ÷ tempo total × 100 = 6 ÷ 43 × 100 ≈ 13,95%  
É comum encontrar menos de 20% de tempo que agrega valor em processos não melhorados.

**1.M2** Eliminar → Combinar → Rearranjar → Simplificar  
Eliminar primeiro: a etapa que não existe não custa nada.

**1.M3** b) Manter materiais e ferramentas em local fixo, próximo e dentro da área de alcance  
Local fixo e próximo elimina procurar e reduz o alcance.

**1.M4** b) “Procurar”; ferramenta em local fixo (quadro de sombras) ou pendurada no ponto de uso  
Procurar e selecionar são therbligs ineficientes; 5S e ponto de uso resolvem.

**1.M5** Falso  
Eliminar vem primeiro: simplificar uma etapa desnecessária é desperdiçar esforço.

**1.D1** b) Avaliar o risco ergonômico (AET, NR-17), buscar alternativa com dispositivo ou rodízio e só então padronizar  
Método bom é rápido, seguro e sustentável.  
❌ a) Ignora o risco de LER/DORT, que gera afastamentos, custo e queda de qualidade.  
✅ b) Equilibra produtividade e saúde com análise formal e alternativas.  
❌ c) Joga fora o ganho sem buscar solução.  
❌ d) Dinheiro não elimina o risco à saúde.

**1.D2** a) Diagrama de espaguete sobre a planta do setor  
O espaguete desenha o caminho real e evidencia distâncias e cruzamentos.

**1.D3** O problema é a **separação taylorista** entre quem planeja e quem executa: o método ignorou o conhecimento prático e não teve adesão. Melhor: envolver os operadores desde o registro do método atual (filmagem com consentimento, fluxograma junto), gerar ideias com eles (ECRS), testar em **piloto**, medir antes × depois, documentar o **trabalho padronizado** e treinar. Considerar ergonomia e explicar o porquê da mudança.  
Critérios: Identifica a falta de participação como causa; Propõe envolver os operadores na análise e nas ideias; Inclui piloto e medição antes × depois; Menciona padronização/treinamento e ergonomia.

**1.D4** Falso  
Também contam ergonomia, qualidade, segurança e flexibilidade.

**2.F1** Explicar o objetivo ao operador e à supervisão → Padronizar e registrar o método → Dividir a operação em elementos → Cronometrar vários ciclos → Calcular o tempo médio observado  
Transparência e método padronizado vêm antes do cronômetro.

**2.F2** 2 min  
TO = (2,1 + 1,9 + 2,0 + 2,2 + 1,8) ÷ 5 = 10,0 ÷ 5 = 2,0 min  
O TO ainda não é o tempo padrão: falta avaliar o ritmo e aplicar tolerâncias.

**2.F3** Falso  
É antiético e destrói a confiança. Explica-se o objetivo e mede-se o método.

**2.F4** b) Para padronizar, localizar a variação e reaproveitar tempos de elementos comuns  
Elementos com início e fim claros tornam a medida mais precisa e útil.

**2.M1** 16 ciclos  
n = (z · s ÷ (Er · x̄))² = (1,96 × 0,2 ÷ (0,05 × 2,0))²  
= (0,392 ÷ 0,1)² = 3,92² ≈ 15,4 → arredonda para cima: 16  
Sempre arredonde para cima para garantir o erro desejado.

**2.M2** 10 ciclos  
n = (1,96 × 4 ÷ (0,05 × 50))² = (7,84 ÷ 2,5)² = 3,136² ≈ 9,83 → 10 ciclos  
Menos variação relativa → menos ciclos.

**2.M3** b) O cronômetro não para; os tempos de cada elemento são obtidos por subtração  
Evita perder frações de tempo nas trocas, mas exige cálculo posterior.

**2.M4** b) Registrar como elemento estranho, fora do elemento regular, e verificar se a queda é recorrente  
Eventos estranhos não representam o método; se forem frequentes, viram problema a resolver (ou tolerância justificada).

**2.M5** 35 ciclos  
n = (1,96 × 0,375 ÷ (0,05 × 2,5))² ≈ 34,57 → 35 ciclos  
Arredonde sempre para cima.

**2.D1** 683 observações  
n = z² · p · (1 − p) ÷ E² = 3,8416 × 0,2 × 0,8 ÷ 0,0009  
= 0,6147 ÷ 0,0009 ≈ 682,95 → 683  
Observações em momentos aleatórios, ao longo de vários dias e turnos.

**2.D2** c) Tempos predeterminados (MTM, MOST)  
Não há o que cronometrar ainda; os tempos tabelados de micromovimentos permitem estimar.

**2.D3** b) Padronizar o método primeiro; depois medir  
Tempo padrão só faz sentido para um método padrão.  
❌ a) Mais amostra mede com precisão um processo sem padrão: o tempo não vale para nada.  
✅ b) Variação alta com métodos diferentes indica falta de padrão.  
❌ c) Esconde o problema.  
❌ d) Descartar sem causa distorce o tempo.

**2.D4** Comunicar **antes** o objetivo (dimensionar capacidade, balancear a linha, não punir), com supervisão e representantes; mostrar o método de cálculo (ritmo, tolerâncias); padronizar o método com os operadores; escolher operadores qualificados e medir em condições normais; calcular o número de ciclos; registrar elementos estranhos; validar os resultados com a equipe; considerar ergonomia (NR-17) e revisar os tempos quando o método mudar.  
Critérios: Propõe transparência e participação desde o início; Garante método padronizado e condições normais; Usa critério estatístico para o número de ciclos; Prevê validação dos resultados e revisão.

**2.D5** Verdadeiro  
E aparece ao quadrado no denominador: E/2 → n × 4.

**2.D6** 545 observações  
n = 1,96² × 0,15 × (1 − 0,15) ÷ 0,03² = 544,23 → 545  
Metade do erro → quatro vezes mais observações.

**3.F1** 2,2 min  
TN = TO × FR = 2,0 × 1,10 = 2,2 min  
O operador estava mais rápido que o normal; um operador normal levaria 2,2 min.

**3.F2** 2,53 min  
TP = TN × (1 + T) = 2,2 × 1,15 = 2,53 min  
As tolerâncias cobrem necessidades pessoais, fadiga e pequenas esperas.

**3.F3** Tempo observado (TO) → Tempo normal (TN) → Tempo padrão (TP)  
Observo, Normalizo, Padronizo.

**3.F4** Verdadeiro  
E por isso o tempo normal dele fica maior que o tempo observado.

**3.F5** 2,4 min  
TN = TO × FR = 2 × 1,2 = 2,4 min  
Ritmo acima de 100% aumenta o tempo normal.

**3.F6** 1,888 min  
TP = TN × (1 + T) = 1,6 × 1,18 = 1,89 min  
Convenção (a): tolerância sobre o tempo normal.

**3.M1** 2,59 min  
TP = 2,2 ÷ (1 − 0,15) = 2,2 ÷ 0,85 ≈ 2,588 → 2,59 min  
Ligeiramente maior que na convenção (a), que daria 2,53 min.

**3.M2** 189 peças  
480 ÷ 2,53 = 189,7 → arredonda para baixo = 189 peças  
Capacidade se arredonda para baixo: a 190ª peça não fica pronta.

**3.M3** Ir ao banheiro, beber água → Pessoal; Recuperar do esforço físico e da postura → Fadiga; Pequena falta momentânea de material → Espera/atraso inevitável  
Cada tipo deve ser justificado pelas condições do posto.

**3.M4** 15 %  
T = 72 ÷ 480 × 100 = 15%  
Nesse caso, a convenção coerente é TP = TN ÷ (1 − T).

**3.M5** b) Capacidade subestimada, por contagem dupla das pausas  
As pausas foram descontadas duas vezes.

**3.M6** 214 peças  
450 ÷ 2,1 ≈ 214,29 → arredonda para baixo: 214 peças  
Capacidade se arredonda para baixo.

**3.M7** 2,439 min  
TP = 2 ÷ (1 − 0,18) = 2 ÷ 0,82 ≈ 2,44 min  
Convenção (b): tolerância como fração do tempo total.

**3.D1** 2,02 R$  
Custo = 2,53 × 0,80 = R$ 2,024 ≈ R$ 2,02  
Um erro de 10% no TP vira 10% de erro no custo de MOD.

**3.D2** b) Calibrar os analistas (vídeos de referência, sistema estruturado, comparação com tempos predeterminados) e reavaliar  
Divergência grande indica falta de calibração; tirar a média esconde o problema.

**3.D3** Consequências: meta **inatingível** para um operador normal; horas extras; pressa → **refugo** e acidentes; risco de LER/DORT; desmotivação e conflito. Correção: recalcular **TN** com avaliação de ritmo calibrada e **TP** com tolerâncias justificadas (pessoais, fadiga, esperas), declarar a convenção usada, rever a meta, comunicar e acompanhar indicadores (produção, refugo, absenteísmo, queixas).  
Critérios: Aponta a meta irreal e suas consequências operacionais; Menciona efeitos em qualidade e saúde; Propõe recalcular TN e TP corretamente; Propõe acompanhamento com indicadores.

**3.D4** Verdadeiro  
Ritmo excessivo é fator de risco (NR-17) e a pressa aumenta erros.

**4.F1** 455,4 min  
Minutos-padrão = 180 × 2,53 = 455,4 min  
É o “trabalho produzido” medido em tempo padrão.

**4.F2** 94,9 %  
Eficiência = 455,4 ÷ 480 × 100 ≈ 94,9%  
Rendeu quase o padrão nas horas trabalhadas.

**4.F3** Falso  
Ocorre quando o operador supera o padrão ou quando o TP está folgado.

**4.F4** d) Escolher a cor da embalagem  
Os três primeiros dependem diretamente do tempo padrão.

**4.F5** 80,556 %  
Minutos-padrão = 145 × 2,5 = 362,5  
Eficiência = 362,5 ÷ 450 × 100 ≈ 80,6%  
Acima de ~115–120% de forma persistente, revise o TP.

**4.M1** 96,4 %  
Minutos-padrão = 480 × 2,53 = 1.214,4  
Eficiência = 1.214,4 ÷ 1.260 × 100 ≈ 96,4%  
Quando trabalharam, renderam quase o padrão.

**4.M2** 87,5 %  
Utilização = 1.260 ÷ 1.440 × 100 = 87,5%  
12,5% do tempo foi perdido por falta de material.

**4.M3** b) Na gestão: falta de material, quebras, setups, programação  
Quando trabalham, rendem; o problema é o tempo em que não conseguem trabalhar.

**4.M4** Eficiência → Quando trabalha, rende o padrão?; Utilização → Quanto do tempo disponível foi trabalhado?; Horas-padrão → Quanto trabalho foi produzido, em tempo padrão?  
Cada indicador isola um tipo de perda.

**4.D1** 64 min  
A cada dobro: T2 = 100 × 0,8 = 80; T4 = 80 × 0,8 = 64 min.  
A queda acontece a cada DOBRO da produção acumulada.

**4.D2** 47,65 min  
b = log 0,8 ÷ log 2 ≈ −0,3219  
10^(−0,3219) ≈ 0,4765  
T10 = 100 × 0,4765 ≈ 47,65 min  
Útil para orçar lotes-piloto e prazos de ramp-up.

**4.D3** b) Acumula estoque antes do gargalo, sem aumentar a saída  
Eficiência local não garante resultado global (Teoria das Restrições).  
❌ a) A saída é limitada pelo gargalo.  
✅ b) Produzir mais antes do gargalo vira fila (estoque em processo).  
❌ c) Com mais estoque na fila, o lead time tende a aumentar.  
❌ d) O gargalo continua onde estava.

**4.D4** Riscos: produção de itens desnecessários e **estoque** em postos não gargalo; resistência a setups e a ajudar colegas; maquiagem de apontamentos; pressa com **refugo** e risco ergonômico; TPs contestados. Alternativa: combinar indicadores do **sistema** (atendimento à demanda/OTIF, qualidade, segurança) com metas de equipe, usar eficiência como diagnóstico e não como meta isolada, revisar os TPs e envolver a equipe.  
Critérios: Aponta distorções de eficiência local; Menciona efeitos em qualidade/segurança; Propõe indicadores de sistema ou de equipe; Trata eficiência como diagnóstico.

**4.D5** Falso  
Cai 20% a cada DOBRO da produção acumulada (1→2, 2→4, 4→8…).

**4.D6** 26,1 min  
A cada dobro, multiplica por 0,85.  
T16 = 50 × 0,85^4 ≈ 26,1 min  
A queda acontece a cada DOBRO da produção acumulada.

**5.F1** 55 s  
Takt = 26.400 ÷ 480 = 55 s  
A linha precisa entregar uma unidade a cada 55 s.

**5.F2** 4 postos  
180 ÷ 55 = 3,27 → arredonda para cima = 4 postos  
Com 3 postos, cada um teria de fazer 60 s, acima do takt.

**5.F3** b) Takt é o ritmo que o cliente pede; tempo de ciclo é o ritmo que a linha consegue produzir  
Takt é o cliente, ciclo é a linha.

**5.F4** Verdadeiro  
A linha entregaria mais devagar do que o cliente precisa.

**5.F5** 84 s  
Takt = 25.200 ÷ 300 ≈ 84 s  
Takt é o ritmo do cliente.

**5.F6** 4 postos  
150 ÷ 45 ≈ 3,33 → arredonda para cima: 4 postos  
É um limite inferior: a precedência pode exigir mais.

**5.M1** 81,8 %  
Eficiência = Σt ÷ (N × TC) = 180 ÷ (4 × 55) = 180 ÷ 220 ≈ 81,8%  
18,2% do tempo pago dos postos é ociosidade.

**5.M2** 40 s  
Ociosidade = N × TC − Σt = 220 − 180 = 40 s  
Concentrada no posto 4 (15 s de trabalho em 55 s).

**5.M3** Calcular o takt time → Calcular o número mínimo de postos → Montar o diagrama de precedência → Alocar as tarefas aos postos respeitando takt e precedência → Calcular eficiência e ociosidade  
Takt e N mínimo dão a meta; precedência e alocação dão a solução.

**5.M4** a) B (35 s)  
Só entram tarefas liberadas que cabem; entre elas, a mais longa.  
✅ a) Liberada (A já alocada), cabe (20 + 35 = 55) e é a mais longa entre as que cabem.  
❌ b) Liberada e cabe, mas é mais curta que B.  
❌ c) Não está liberada: depende de B.  
❌ d) Não está liberada: depende de F.

**5.M5** 3 postos  
Takt = 26.400 ÷ 440 = 60 s  
N mínimo = 180 ÷ 60 = 3 postos  
É um limite inferior: a precedência pode impedir que 3 postos sejam de fato alcançados.

**5.M6** 85,455 %  
Σt = 188; TC = maior tempo = 55  
Eficiência = 188 ÷ (4 × 55) ≈ 85,5%  
O posto mais lento define o ciclo de todos.

**5.D1** 2 postos  
90 ÷ 55 = 1,64 → 2 postos em paralelo  
Ciclo efetivo = 90 ÷ 2 = 45 s ≤ 55 s ✓  
Cada operador faz unidades alternadas.

**5.D2** b) Dão boas soluções rapidamente, mas não garantem o ótimo  
O problema é combinatório; o ótimo exige modelos de otimização.

**5.D3** b) Ciclos lentos atrasam a linha; carregar abaixo do takt, reduzir a variação ou usar pequenos pulmões  
Média no takt com variação = atrasos frequentes.

**5.D4** Tempo médio ponderado = 0,6 × 180 + 0,4 × 220 = **196 s** por unidade; balancear por ele e **verificar cada modelo** posto a posto (B pode estourar o takt em alguns postos). Na operação: **sequenciamento nivelado** (alternar A e B, evitando vários B seguidos), postos com folga para absorver B, padronização por modelo, ergonomia e monitoramento dos postos críticos.  
Critérios: Calcula o tempo ponderado (196 s); Verifica a carga de cada modelo por posto; Propõe sequenciamento nivelado do mix; Considera folga/variabilidade e ergonomia.

**5.D5** 196 s  
0,6 × 180 + 0,4 × 220 = 108 + 88 = 196 s  
Base para o balanceamento de linhas multimodelo.

**6.F1** 52 s  
TC = maior tempo de posto = 52 s (posto 2, o gargalo).  
A linha anda no ritmo do posto mais lento.

**6.F2** 507 unidades  
26.400 ÷ 52 = 507,7 → 507 unidades  
A capacidade se arredonda para baixo.

**6.F3** b) Não muda  
Sem mexer no gargalo, a saída continua limitada a 52 s por unidade.

**6.F4** Falso  
É o posto com o MAIOR tempo: ele limita o ritmo.

**6.F5** 480 unidades  
TC = maior tempo = 55 s (gargalo)  
26.400 ÷ 55 ≈ 480 → 480 unidades  
A linha anda no ritmo do gargalo.

**6.M1** 586 unidades  
26.400 ÷ 45 = 586,7 → 586 unidades (+79 em relação a 507)  
Ganho sem investimento, só redistribuindo trabalho.

**6.M2** 15,6 %  
Ganho = 52 ÷ 45 − 1 = 0,1556 → 15,6%  
Capacidade é inversamente proporcional ao tempo de ciclo.

**6.M3** Redistribuir tarefas → Passa trabalho do gargalo para postos com folga; Postos em paralelo → Duplica a capacidade da etapa; Reduzir setup (SMED) → Devolve tempo produtivo ao gargalo; Inspecionar antes do gargalo → Evita gastar o gargalo com peça ruim  
Todas protegem ou ampliam a capacidade da restrição.

**6.M4** b) No posto gargalo  
Hora extra fora do gargalo só gera estoque intermediário.

**6.M5** 6,122 %  
Ganho = 52 ÷ 49 − 1 ≈ 6,1%  
Capacidade é inversamente proporcional ao tempo de ciclo.

**6.D1** Identificar a restrição → Explorar a restrição → Subordinar o resto do sistema → Elevar a restrição → Repetir (evitar a inércia)  
Explorar e subordinar vêm ANTES de investir (elevar).

**6.D2** 13.904 R$  
79 × 4 × 2 × 22 = R$ 13.904 por mês  
Só é ganho real se houver demanda para essas unidades.

**6.D3** 10,8 meses  
Payback = 150.000 ÷ 13.904 ≈ 10,8 meses  
Veja o Módulo 8 para métodos que consideram o valor do dinheiro no tempo.

**6.D4** b) Não comprar agora: a restrição é o mercado; capacidade extra viraria estoque  
Sem demanda, o ganho do investimento não se realiza.

**6.D5** Postos com cargas **muito próximas** e **variabilidade** alta (tempos, paradas, qualidade do material) fazem o gargalo alternar. Plano: medir tempos e paradas por posto com dados (e não por impressão); **padronizar** o trabalho para reduzir a variação; decidir **onde** a restrição deve ficar (idealmente num recurso estável e caro) e dar folga aos outros; usar **pulmão** antes do gargalo escolhido; acompanhar diariamente.  
Critérios: Relaciona o gargalo móvel à carga parecida e à variabilidade; Propõe coletar dados por posto; Propõe padronização e redução de variação; Propõe escolher/proteger a restrição (pulmão).

**7.F1** Melhorar o método de cada tarefa → Medir os tempos (cronoanálise) → Calcular o tempo padrão → Calcular o takt time → Balancear a linha → Acompanhar e atacar o gargalo  
Método → medida → padrão → ritmo do cliente → distribuição → melhoria contínua.

**7.F2** Takt time → Em que ritmo o cliente precisa das caixas?; Tempo padrão → Quanto tempo um operador normal leva, com tolerâncias?; Gargalo → Qual posto limita a produção?; N mínimo de postos → Qual o menor número possível de postos?  
Cada ferramenta responde uma pergunta diferente.

**7.F3** 45 s  
Takt = 27.000 ÷ 600 = 45 s  
A linha precisa entregar uma caixa a cada 45 s.

**7.F4** Verdadeiro  
A partida só é aceita se a linha atender a demanda com qualidade.

**7.M1** 39,96 s  
TN = 36 × 1,00 = 36 s  
TP = 36 × 1,11 = 39,96 s ≈ 40 s  
É o valor usado no balanceamento (40 s).

**7.M2** 3 postos  
130 ÷ 45 = 2,89 → 3 postos  
É um limite inferior: falta verificar a precedência.

**7.M3** 81,25 %  
TC = 40 s  
Eficiência = 130 ÷ (4 × 40) = 130 ÷ 160 = 81,25%  
Postos: P1 = A + B (35), P2 = C (40), P3 = D + E + F (30), P4 = G (25).

**7.M4** 675 caixas  
27.000 ÷ 40 = 675 caixas ≥ 600 ✓  
Atende a demanda com 12,5% de folga.

**7.D1** Falso  
Precedência e tarefas indivisíveis podem impedir. Aqui, A + B = 35 s e C = 40 s não cabem juntas; G não cabe com D + E + F.

**7.D2** b) Com as tarefas atuais, não: a precedência impede 3 postos dentro de 45 s. Seria preciso mudar o método (ex.: dividir ou automatizar C) ou aceitar um takt maior  
Decisão de engenharia: dados + alternativas + trade-offs.  
❌ a) Juntar P3 e P4 daria 55 s > 45 s; juntar P1 e P2 daria 75 s.  
✅ b) Responde com base nos dados e aponta as alternativas reais.  
❌ c) Exigir ritmo acima do padrão gera refugo e risco ergonômico.  
❌ d) 4 postos atendem; não há necessidade de mais gente.

**7.D3** (1) **Tarefas de apoio ao posto 4** (abastecimento de caixas, inspeção por amostragem, 5S): custo baixo, mantém 4 pessoas, aproveita a folga; risco de virar “posto coringa” sem padrão. (2) **Automatizar ou dividir C** (dispositivo que posiciona os bombons): pode permitir 3 postos; exige investimento, prazo e validação de qualidade; avaliar payback e flexibilidade para outros produtos. Em ambos: considerar ergonomia (C é repetitivo) e demanda futura (com mais demanda, a folga atual pode ser necessária).  
Critérios: Apresenta pelo menos duas alternativas concretas; Compara custo, prazo e flexibilidade; Considera ergonomia; Considera a demanda futura.
