# 📈 Módulo 13 — Estatística Aplicada à Engenharia

> 📅 **Dias 2 e 3** (parte 1 no D2, parte 2 no D3) · ⏱️ 60 + 75 min · 🚌 Deslocamento: 🃏 flashcards do M1 + 🎧 resumo da parte do dia
> 🎨 Cores: 🔴 conceito-chave · 🟡 atenção/erro comum · 🟢 dica prática · 🔵 fórmula · 🟣 conexão
> 🧮 Leve uma calculadora (a do celular no modo científico serve) ou abra o Excel/Google Planilhas.

**Por que a Estatística vem logo no Dia 2?** Porque ela é a "língua" que vários módulos usam: previsão de demanda (M3), cronoanálise (M4), CEP e Seis Sigma (M5), estoque de segurança (M7), simulação (M9). Quem domina Estatística tem metade do curso adiantado.

---

## 🤔 Pré-teste (responda ANTES de ler, sem consultar)

1. Numa empresa, 9 funcionários ganham R$ 3.000 e o diretor ganha R$ 50.000. A média salarial "representa bem" os funcionários? Qual medida seria melhor?
2. Duas máquinas enchem pacotes de 500 g com a mesma média. Como saber qual é a melhor?
3. O que significa dizer que algo "segue uma distribuição normal"?
4. Se o gráfico mostra que, quanto mais sorvete se vende, mais pessoas se afogam, o sorvete causa afogamento?
5. Para saber a média de peso de 1 milhão de parafusos, é preciso pesar todos?

---

## 🎯 Objetivo do módulo

**Resumir dados com números e gráficos, medir a variação, calcular probabilidades com a distribuição normal e tirar conclusões sobre um processo a partir de uma amostra.**

---

## 🧠 Mapa mental

```
📈 ESTATÍSTICA APLICADA
│
├── 🧩 PARTE 1 — DESCREVER (Estatística Descritiva)  → Dia 2
│   ├── 👥 População (todos) × 📋 Amostra (parte)  |  Parâmetro (μ, σ) × Estatística (x̄, s)
│   ├── 🏷️ Tipos de variável
│   │   ├── Qualitativa → Nominal (cor) · Ordinal (ruim/bom/ótimo)
│   │   └── Quantitativa → Discreta (nº de defeitos) · Contínua (peso, tempo)
│   ├── 📊 Gráficos → barras · pizza · linha · histograma · boxplot · dispersão
│   ├── 🎯 POSIÇÃO (onde está o centro?) → Média · Mediana · Moda · Quartis
│   └── ↔️ DISPERSÃO (quanto varia?) → Amplitude · Variância · Desvio-padrão · CV · IQR
│
└── 🎲 PARTE 2 — CONCLUIR (Probabilidade e Inferência)  → Dia 3
    ├── 🎲 Probabilidade → regra do "ou" (+) · regra do "e" (×)
    ├── 📦 Distribuições discretas → Binomial (defeituosas em n) · Poisson (eventos por tempo)
    ├── 🔔 Distribuição NORMAL → 68-95-99,7 · Z = (x − μ)/σ · tabela Z
    ├── 🧪 Amostragem → Teorema Central do Limite · erro padrão σ/√n
    ├── 📏 Intervalo de confiança → x̄ ± z·s/√n · tamanho de amostra
    ├── ⚖️ Teste de hipóteses → H0 × H1 · p-valor · erro tipo I e II
    └── 🔗 Correlação e regressão → r · R² · ŷ = a + b·x · correlação ≠ causa
```

---

# 🧩 PARTE 1 — Estatística Descritiva (Dia 2)

## 📖 Blocos curtos

### Bloco 1 — 🔴 Para que serve a Estatística na engenharia

🤔 *Antes de ler: por que um gerente não aceita "a máquina está ruim" como resposta?*

Na fábrica tudo **varia**: o peso do pacote, o tempo de ciclo, a demanda, o diâmetro da peça.
A Estatística serve para **descrever** essa variação, **prever** o que vai acontecer e **decidir com base em dados**, não em opinião.
🟢 Frase de sobrevivência (atribuída a Deming): **"Em Deus nós confiamos; todos os outros, tragam dados."**
🟣 Conexão: é a regra de ouro do M1: "sem número não existe melhoria, só opinião".

### Bloco 2 — 🔴 População × Amostra

**População:** o conjunto **inteiro** que interessa (todos os parafusos produzidos no mês).
**Amostra:** uma **parte** da população, que você mede de verdade (50 parafusos sorteados).
**Parâmetro:** número que descreve a população (média **μ**, desvio **σ**). Normalmente desconhecido.
**Estatística:** número calculado na amostra (média **x̄**, desvio **s**). Serve para **estimar** o parâmetro.
🟡 Amostra boa é **aleatória e representativa**. Pegar só as peças "do começo do turno" gera viés.

### Bloco 3 — 🔴 Tipos de variável

**Qualitativa (categoria):**
- **Nominal:** sem ordem. Ex.: cor do produto, fornecedor, tipo de defeito.
- **Ordinal:** com ordem. Ex.: satisfação (ruim, regular, bom, ótimo), classe A/B/C.

**Quantitativa (número):**
- **Discreta:** contagem, valores inteiros. Ex.: nº de defeitos, nº de clientes na fila.
- **Contínua:** medição, qualquer valor num intervalo. Ex.: peso, tempo, temperatura, diâmetro.
🟣 Conexão: no CEP (M5), variável contínua usa carta X̄-R; contagem de defeituosos usa carta p. O tipo de variável escolhe a ferramenta!

### Bloco 4 — 🔴 Gráficos: qual usar?

| Pergunta | Gráfico |
|---|---|
| Comparar categorias | **Barras** (ordenadas → vira Pareto no M5) |
| Partes de um todo (poucas fatias) | **Pizza** (🟡 evite com mais de 5 fatias) |
| Evolução no tempo | **Linha** (demanda mês a mês) |
| Forma da distribuição de uma variável contínua | **Histograma** |
| Resumo com mediana, quartis e outliers | **Boxplot** |
| Relação entre duas variáveis | **Dispersão** (temperatura × refugo) |

🟡 **Histograma ≠ gráfico de barras:** no histograma as barras ficam **coladas**, porque o eixo X é contínuo (faixas de valores).

### Bloco 5 — 🔵 Medidas de posição: média, mediana e moda

🔵 **Média aritmética:** x̄ = Σx ÷ n (soma tudo e divide pela quantidade).
🔵 **Mediana:** o valor do **meio** com os dados **ordenados**. Se n é par, média dos dois do meio.
🔵 **Moda:** o valor que **mais aparece** (pode não existir ou haver mais de uma).
🔵 **Média ponderada:** x̄ = Σ(x·peso) ÷ Σpesos. Ex.: custo médio de estoque comprado em lotes de preços diferentes.
🔊 **"A moda é o que mais aparece (a roupa que todo mundo usa)."**

### Bloco 6 — 🟡 Média × Mediana: quando cada uma engana

A **média é sensível a valores extremos** (outliers); a **mediana não**.
Ex.: salários 3, 3, 3, 3, 3, 3, 3, 3, 3 e 50 (mil R$) → média = **7,7 mil**, mediana = **3 mil**. A mediana representa muito melhor os funcionários.
🟢 Regra prática: dados **assimétricos** ou com outliers (salários, tempo de atendimento, lead time) → reporte a **mediana** junto com a média.
**Assimetria:** média > mediana → cauda à **direita** (positiva). Média < mediana → cauda à **esquerda** (negativa). Média ≈ mediana → simétrico.

### Bloco 7 — 🔵 Quartis e separatrizes

Os **quartis** cortam os dados ordenados em 4 partes com 25% cada:
- **Q1** (25% abaixo) · **Q2 = mediana** (50%) · **Q3** (75% abaixo).
🔵 **Amplitude interquartil:** IQR = Q3 − Q1 (onde estão os 50% centrais).
🔵 **Outlier (regra de Tukey):** valor < Q1 − 1,5·IQR **ou** > Q3 + 1,5·IQR.
🟡 Existem vários métodos de cálculo de quartil (Excel `QUARTIL.INC` × `QUARTIL.EXC` dão resultados um pouco diferentes). Na prova, use o método do professor; neste curso usamos "mediana de cada metade".

### Bloco 8 — 🔴 Medidas de dispersão: por que a média não basta

Duas máquinas com média 500 g podem ser **muito diferentes**: uma entrega 499–501 g, a outra 490–510 g.
**Dispersão** mede o quanto os dados se espalham em torno do centro.
🔵 **Amplitude:** A = máximo − mínimo (simples, mas só usa 2 valores).
🔵 **Variância amostral:** s² = Σ(x − x̄)² ÷ (n − 1)
🔵 **Desvio-padrão:** s = √s² (mesma unidade dos dados, por isso é o mais usado).

### Bloco 9 — 🟡 Por que dividir por n − 1?

Na **amostra**, divide-se por **n − 1** (correção de Bessel). Na **população inteira**, divide-se por **N**.
Motivo intuitivo: a amostra tende a **subestimar** a variação real; dividir por um número menor corrige isso.
No Excel: `DESVPAD.A` (amostra, n − 1) × `DESVPAD.P` (população, N).
🔊 **"A amostra é humilde: divide por um a menos."**

### Bloco 10 — 🔵 Coeficiente de variação (CV)

🔵 **CV = s ÷ x̄ × 100%**
Serve para comparar a variação de coisas com **médias ou unidades diferentes**.
Ex.: tempo de ciclo A: x̄ = 50 s, s = 5 s → CV = 10%. Peso B: x̄ = 2.000 g, s = 40 g → CV = 2%. B é **relativamente** mais estável.
🟢 Referência prática (varia por área): CV < 15% baixa dispersão · 15–30% média · > 30% alta.
🟣 Conexão: no M7 (Logística), o CV da demanda ajuda a classificar itens na análise **XYZ** (estáveis × erráticos).

### Bloco 11 — 🔴 Boxplot (diagrama de caixa)

Resume 5 números: **mínimo, Q1, mediana, Q3, máximo** e ainda mostra os **outliers**.
Exemplo com os tempos de ônibus (veja o exemplo bobo abaixo):

```
  52 ├────┤ 56 [██████│██████] 61 ├───┤ 62                  ● 90
     mín      Q1      Md=58,5   Q3   bigode                outlier
              └──── caixa = 50% centrais (IQR) ────┘
```
O bigode vai até o último valor que **não** é outlier; o outlier aparece como um ponto isolado.
🟢 Ótimo para **comparar turnos, máquinas ou fornecedores** lado a lado.

---

## 😂 Exemplo bobo: "Quanto tempo o meu ônibus leva, de verdade?"

Você cronometrou 10 viagens de casa até a faculdade (minutos):

**52 · 58 · 60 · 55 · 61 · 57 · 90 · 59 · 56 · 62** (o 90 foi o dia do temporal 🌧️)

1. **Ordenando:** 52 · 55 · 56 · 57 · 58 · 59 · 60 · 61 · 62 · 90
2. **Média:** soma = 610 → x̄ = 610 ÷ 10 = **61 min**
3. **Mediana:** n = 10 (par) → (58 + 59) ÷ 2 = **58,5 min**
4. **Moda:** nenhum valor se repete → **amodal**
5. **Amplitude:** 90 − 52 = **38 min**
6. **Desvio-padrão:**
   - Desvios (x − 61): −9, −6, −5, −4, −3, −2, −1, 0, +1, +29
   - Quadrados: 81, 36, 25, 16, 9, 4, 1, 0, 1, 841 → soma = **1.014**
   - s² = 1.014 ÷ 9 = 112,7 → **s ≈ 10,6 min**
7. **CV:** 10,6 ÷ 61 = **17,4%**
8. **Quartis:** metade de baixo (52, 55, 56, 57, 58) → **Q1 = 56**; metade de cima (59, 60, 61, 62, 90) → **Q3 = 61** → IQR = 5
9. **Outlier?** Limite superior = 61 + 1,5 × 5 = **68,5** → **90 é outlier** ✔️

**Conclusão de engenheiro(a):** a média (61) foi "puxada" pelo dia do temporal. Para planejar o dia a dia, a **mediana (58,5)** é mais honesta. Mas para **não se atrasar para a prova**, você precisa olhar a **variação**: sair com folga de ~1 desvio-padrão (≈ 11 min) cobre a maioria dos dias. 🟣 É exatamente a lógica do **estoque de segurança** (M7) e da **folga no cronograma** (M2).

---

## 🏭 Exemplo sério: as duas envasadoras de café da "Café Serra"

Você é engenheiro(a) de qualidade. A especificação do pacote é **500 g ± 10 g** (entre 490 e 510 g). Amostra de 5 pacotes de cada máquina:

| Máquina | Pesos (g) | x̄ | s | CV |
|---|---|---|---|---|
| **A** | 498 · 502 · 500 · 499 · 501 | **500** | **1,58** | 0,32% |
| **B** | 490 · 510 · 495 · 505 · 500 | **500** | **7,91** | 1,58% |

**Cálculo de s para A:** desvios −2, +2, 0, −1, +1 → quadrados 4 + 4 + 0 + 1 + 1 = 10 → s² = 10 ÷ 4 = 2,5 → s = **1,58 g**.
**Cálculo de s para B:** desvios −10, +10, −5, +5, 0 → quadrados 100 + 100 + 25 + 25 + 0 = 250 → s² = 250 ÷ 4 = 62,5 → s = **7,91 g**.

**Passo a passo da análise:**
1. **As médias são iguais** → olhando só a média, "está tudo certo". 🟡 Esse é o erro que você não pode cometer.
2. **A dispersão de B é 5 vezes maior.** B trabalha "encostada" nos limites da especificação.
3. **Consequência:** B vai gerar pacotes fora da especificação (reclamação se estiver abaixo, **dar café de graça** se estiver acima). Na Parte 2 você vai calcular: ≈ **21% dos pacotes de B** ficam fora da faixa; A praticamente zero.
4. **Ação:** investigar B (desgaste de dosador? variação de pressão? operador ajustando "no olho"?) → isso vira um **Ishikawa** no M5.
5. **Comunicação:** mostre um **boxplot lado a lado** das duas máquinas. Uma imagem convence a diretoria mais que uma tabela.

---

# 🎲 PARTE 2 — Probabilidade e Inferência (Dia 3)

🔁 **Aquecimento (D+1 da Parte 1, sem olhar):** qual a diferença entre desvio-padrão e CV? Quando usar mediana em vez de média?

## 📖 Blocos curtos

### Bloco 12 — 🔵 Probabilidade básica

🔵 **P(A) = casos favoráveis ÷ casos possíveis** (sempre entre 0 e 1, ou 0% e 100%).
🔵 **Complemento:** P(não A) = 1 − P(A).
🔵 **Regra do "OU" (soma):** P(A ou B) = P(A) + P(B) − P(A e B). Se forem **mutuamente exclusivos**, o último termo é zero.
🔵 **Regra do "E" (produto):** se A e B são **independentes**, P(A e B) = P(A) × P(B).
🔊 **"OU soma, E multiplica."**

### Bloco 13 — 🏭 Probabilidade aplicada: confiabilidade em série

Uma linha tem 3 máquinas **em série**; cada uma funciona o dia todo com 95% de probabilidade (independentes).
P(linha funcionar) = 0,95 × 0,95 × 0,95 = **0,857 → 85,7%**.
🟡 Cada máquina "boa" (95%) gera uma linha só "razoável". Quanto mais etapas em série, menor a confiabilidade.
🟢 Truque de prova para "pelo menos um": P(pelo menos 1) = **1 − P(nenhum)**.
🟣 Conexão: TPM e OEE (M6) e confiabilidade de produto (M12).

### Bloco 14 — 🔵 Binomial e Poisson (as discretas mais usadas)

**Binomial:** n tentativas independentes, cada uma com probabilidade p de "sucesso" (ex.: peça defeituosa).
🔵 P(X = k) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ · média = n·p
Ex.: 2% de defeito, amostra de 10 → P(0 defeituosas) = 0,98¹⁰ = **81,7%** → P(pelo menos 1) = **18,3%**.

**Poisson:** número de eventos num intervalo de tempo/espaço, com taxa média λ.
🔵 P(X = k) = e^(−λ) · λᵏ ÷ k! · média = variância = λ
Ex.: 3 chamadas de manutenção por hora → P(nenhuma na próxima hora) = e⁻³ = **5%**.
🟣 Conexão: Poisson descreve **chegadas** em filas (M9).

### Bloco 15 — 🔴 A distribuição Normal (curva de sino)

É a distribuição contínua mais importante da engenharia. Aparece quando muitas pequenas causas somam efeitos (peso, dimensão, tempo).
Propriedades: **simétrica**, em forma de sino, **média = mediana = moda**, definida por **μ** (centro) e **σ** (largura).

```
                         ▁▂▄▆█▆▄▂▁
                      ▁▃▆█████████▆▃▁
                  ▁▂▄███████████████████▄▂▁
        ─────────┼─────┼─────┼─────┼─────┼─────┼─────────
               μ−3σ  μ−2σ  μ−1σ   μ   μ+1σ  μ+2σ  μ+3σ
                        |←── 68% ──→|
                  |←───────── 95% ─────────→|
            |←──────────────── 99,7% ───────────────→|
```

### Bloco 16 — 🔵 Regra empírica 68-95-99,7

Numa normal:
- **68%** dos dados ficam entre μ ± **1σ**
- **95%** entre μ ± **2σ** (exato: 1,96σ)
- **99,7%** entre μ ± **3σ**
🔊 **"Um, dois, três: sessenta e oito, noventa e cinco, noventa e nove vírgula sete."**
🟣 Conexão: os **limites de controle** do CEP (M5) ficam em ±3σ; "Seis Sigma" é ter 6σ entre a média e o limite de especificação.

### Bloco 17 — 🔵 Padronização: o escore Z

🔵 **Z = (x − μ) ÷ σ**
O Z diz **quantos desvios-padrão** o valor está longe da média (positivo = acima; negativo = abaixo).
Com o Z, usamos **uma única tabela** (a normal padrão, μ = 0 e σ = 1) para qualquer processo.
🔊 **"Z é a distância em desvios."**

**Valores de Z que você precisa saber de cor:**

| Z | Área à esquerda P(Z < z) | Cauda à direita P(Z > z) |
|---|---|---|
| 1,00 | 0,8413 | 0,1587 |
| 1,26 | 0,8962 | 0,1038 |
| 1,645 | 0,9500 | 0,0500 |
| 1,96 | 0,9750 | 0,0250 |
| 2,00 | 0,9772 | 0,0228 |
| 2,50 | 0,9938 | 0,0062 |
| 2,58 | 0,9951 | 0,0049 |
| 3,00 | 0,99865 | 0,00135 |

🟢 Por simetria: P(Z < −z) = P(Z > z). No Excel: `DIST.NORMP.N(z; VERDADEIRO)` dá a área à esquerda.

### Bloco 18 — 🏭 Normal aplicada: % fora da especificação

Passo a passo (decore o roteiro):
1. Desenhe a curva e marque os limites (LIE e LSE).
2. Calcule **Z** para cada limite.
3. Pegue na tabela a área **fora** de cada limite.
4. **Some** as duas caudas → % defeituoso. Multiplique pela produção → peças defeituosas.
Ex.: café da máquina B (μ = 500, σ = 7,91, limites 490–510): Z = ±10 ÷ 7,91 = ±1,26 → cada cauda 10,38% → **≈ 20,8% fora**. Máquina A: Z = ±6,3 → praticamente **0%**.

### Bloco 19 — 🔴 Amostragem e Teorema Central do Limite (TCL)

Se você tira **muitas amostras de tamanho n** e calcula a média de cada uma, essas médias:
- se distribuem de forma **aproximadamente normal** (mesmo que os dados originais não sejam!), para n grande (regra prática: **n ≥ 30**);
- têm média **μ**;
- têm desvio **σ ÷ √n**, chamado **erro padrão**.
🔵 **EP = σ ÷ √n** (ou s ÷ √n)
🟢 Tradução: **médias variam menos que valores individuais**. Por isso o CEP usa médias de subgrupos. E para reduzir o erro pela metade, você precisa de **4 vezes** mais amostra.

### Bloco 20 — 🔵 Intervalo de confiança (IC) para a média

🔵 **IC = x̄ ± z · s ÷ √n** (z = 1,96 para 95%; 2,58 para 99%; 1,645 para 90%)
Ex.: 36 tempos de ciclo, x̄ = 48 s, s = 6 s → EP = 6 ÷ 6 = 1 → IC95% = 48 ± 1,96 = **[46,04 ; 49,96] s**.
Leitura correta: "Estamos 95% confiantes de que a **média real do processo** está entre 46,04 e 49,96 s."
🟡 **Não** significa que 95% dos ciclos individuais estão nesse intervalo! O IC é sobre a **média**.
🟡 Amostras pequenas (n < 30) e σ desconhecido: troque z pelo **t de Student** (mais largo). Ex.: n = 25, 95% → t = 2,064.

### Bloco 21 — 🔵 Tamanho de amostra

Quantos dados coletar para ter um erro máximo **E** na estimativa da média?
🔵 **n = (z · σ ÷ E)²** (arredonde **sempre para cima**)
Ex.: σ ≈ 6 s, quero erro de ±1 s com 95% → n = (1,96 × 6 ÷ 1)² = 138,3 → **139 medições**.
🟣 Conexão: é a mesma lógica do **número de ciclos na cronoanálise** (M4).

### Bloco 22 — 🔴 Teste de hipóteses

Serve para decidir se uma diferença é **real** ou apenas **acaso**.
1. **H0 (nula):** "nada mudou / não há diferença" (ex.: μ = 500 g).
2. **H1 (alternativa):** o que você quer provar (ex.: μ ≠ 500 g).
3. Escolha o **nível de significância α** (normalmente 5%).
4. Calcule a estatística do teste: 🔵 **t = (x̄ − μ₀) ÷ (s ÷ √n)** e o **p-valor**.
5. **p-valor < α → rejeita H0** (a diferença é estatisticamente significativa).
🔊 **"p baixo, H0 pro buraco."**

### Bloco 23 — 🟡 Erros tipo I e tipo II

| | H0 é verdadeira | H0 é falsa |
|---|---|---|
| **Rejeito H0** | ❌ **Erro tipo I** (α): "alarme falso" | ✅ Acerto (poder = 1 − β) |
| **Não rejeito H0** | ✅ Acerto | ❌ **Erro tipo II** (β): "deixei passar" |

Na fábrica: **tipo I** = parar a linha à toa (processo estava ok); **tipo II** = não perceber que o processo desregulou e mandar lote ruim para o cliente.
🔊 **"Tipo I: grito sem lobo. Tipo II: lobo sem grito."**
🟡 "Não rejeitar H0" **não prova** que H0 é verdadeira; só diz que não há evidência suficiente contra ela.

### Bloco 24 — 🔵 Correlação (r)

O coeficiente de correlação de Pearson **r** mede a força da relação **linear** entre duas variáveis, de −1 a +1.
- r ≈ +1: sobe junto · r ≈ −1: uma sobe, a outra desce · r ≈ 0: sem relação linear.
🔵 r = Sxy ÷ √(Sxx · Syy), onde Sxy = Σ(x − x̄)(y − ȳ), Sxx = Σ(x − x̄)², Syy = Σ(y − ȳ)²
🟢 Referência prática: |r| > 0,7 forte · 0,3 a 0,7 moderada · < 0,3 fraca. No Excel: `CORREL`.

### Bloco 25 — 🟡 Correlação NÃO é causalidade

Venda de sorvete e afogamentos têm correlação positiva… porque **os dois aumentam no verão** (variável oculta: calor).
Na fábrica: "o refugo sobe quando o operador João trabalha". Pode ser o João… ou o fato de ele trabalhar sempre no **turno da noite**, com a matéria-prima de outro fornecedor.
🟢 Correlação é **pista** para investigar (Ishikawa, 5 Porquês), não conclusão.
🔊 **"Sorvete não afoga ninguém."**

### Bloco 26 — 🔵 Regressão linear simples

Encontra a reta que melhor descreve y em função de x (método dos mínimos quadrados):
🔵 **ŷ = a + b·x**, com **b = Sxy ÷ Sxx** e **a = ȳ − b·x̄**
🔵 **R² = r²**: fração da variação de y explicada por x (ex.: R² = 0,90 → 90%).
🟡 Cuidado ao **extrapolar** (usar x muito fora da faixa dos dados).
🟣 Conexão: a regressão com o tempo no eixo x é a **previsão de demanda com tendência** (M3); com volume no eixo x, separa **custo fixo (a)** e **custo variável (b)** (M8).

---

## 😂 Exemplo bobo: a pizzaria "Chega Logo"

A pizzaria diz que entrega em **40 min em média**, com desvio-padrão de **5 min** (distribuição normal). Ela promete: "passou de 50 min, a pizza é grátis".

- **Z** para 50 min = (50 − 40) ÷ 5 = **2**
- P(Z > 2) = **2,28%** → a cada 1.000 pizzas, ≈ **23 saem de graça**.
- Entre 35 e 45 min (±1σ)? → **68%** das entregas.
- **Probabilidade**: pedir 2 pizzas em dias diferentes e **as duas** atrasarem? 0,0228 × 0,0228 ≈ **0,05%** (regra do "E").
- **Amostra:** você pediu 4 vezes e a média foi 44 min. A pizzaria está mentindo? Com n = 4 é cedo para concluir (EP = 5 ÷ 2 = 2,5; Z = 4 ÷ 2,5 = 1,6 < 1,96 → **não dá para rejeitar** "média = 40"). 🟡 Poucas amostras = pouca evidência.
- **Correlação:** quanto mais chove, mais demora. Mas a chuva causa atraso **diretamente** (trânsito) **e** aumenta os pedidos. Duas causas misturadas!

---

## 🏭 Exemplo sério: rolamentos da "Serra Componentes" (evoluindo do bobo)

Você é engenheiro(a) de processos numa fábrica de rolamentos. O diâmetro interno deve estar entre **19,95 e 20,05 mm**. O processo é normal, com **μ = 20,00 mm** e **σ = 0,02 mm**. Produção: **10.000 peças/dia**.

**1) Quanto sai fora da especificação?**
- Z(LSE) = (20,05 − 20,00) ÷ 0,02 = **+2,5** → cauda 0,62%
- Z(LIE) = (19,95 − 20,00) ÷ 0,02 = **−2,5** → cauda 0,62%
- Total: **1,24%** → **124 peças/dia** defeituosas (12.400 ppm).

**2) O cliente exige no máximo 0,27% (processo "3 sigma"). Qual σ é necessário?**
- Precisamos Z = 3 nos dois limites → σ = 0,05 ÷ 3 = **0,0167 mm** → reduzir a variação em ~17%.

**3) Depois da troca do fuso, você mediu 36 peças: x̄ = 20,004 mm, s = 0,012 mm. A média continua centrada em 20,00?**
- H0: μ = 20,00 · H1: μ ≠ 20,00 · α = 5%
- EP = 0,012 ÷ √36 = 0,002 → t ≈ (20,004 − 20,000) ÷ 0,002 = **2,0**
- Valor crítico (n = 36, 95%) ≈ 2,03 → **2,0 < 2,03 → não rejeita H0** (bem no limite: vale coletar mais dados antes de mexer no ajuste).
- IC95% ≈ 20,004 ± 2,03 × 0,002 = **[20,000 ; 20,008] mm**.

**4) E o novo desvio?** s = 0,012 mm → Z = 0,05 ÷ 0,012 ≈ 4,2 nos dois lados → praticamente **zero defeito**. A troca do fuso **resolveu**.

**5) Relação custo × volume (regressão):** dados de 5 meses:

| Produção (mil peças) x | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|
| Custo total (mil R$) y | 15 | 19 | 26 | 29 | 36 |

- x̄ = 6 · ȳ = 25 · Sxy = 104 · Sxx = 40 · Syy = 274
- b = 104 ÷ 40 = **2,6** · a = 25 − 2,6 × 6 = **9,4**
- **ŷ = 9,4 + 2,6x** → custo fixo ≈ R$ 9,4 mil/mês e custo variável ≈ R$ 2,60 por peça.
- r = 104 ÷ √(40 × 274) = **0,993** · R² = **0,987** (98,7% da variação do custo é explicada pelo volume).
- Previsão para 12 mil peças: 9,4 + 2,6 × 12 = **R$ 40,6 mil**.

🟣 **Conexão:** o item 1 é **CEP/capacidade** (M5), o item 3 é o "Analisar/Melhorar" do **DMAIC** (M5), o item 5 é **custos** (M8). Estatística é a ferramenta que atravessa tudo.

---

## 🔊 Mnemônicos, siglas e frases sonoras

| O que memorizar | Mnemônico |
|---|---|
| Tipos de variável | **"NO-OR / DI-CO"**: Qualitativa **NO**minal e **OR**dinal · Quantitativa **DI**screta e **CO**ntínua |
| Discreta × contínua | **"Discreta se conta, contínua se mede."** |
| Moda | **"A moda é o que mais aparece."** |
| Média × mediana | **"A média se deixa levar pelo exagerado; a mediana fica no meio, parada."** |
| Variância amostral | **"A amostra é humilde: divide por n menos um."** |
| CV | **"CV compara o que não se compara"** (unidades/médias diferentes) |
| Probabilidade | **"OU soma, E multiplica."** · **"Pelo menos um = um menos nenhum."** |
| Regra empírica | **"Um, dois, três: 68, 95, 99,7."** |
| Escore Z | **"Z é a distância em desvios."** |
| Erro padrão | **"Médias tremem menos: divide por raiz de n."** |
| Teste de hipóteses | **"p baixo, H0 pro buraco."** |
| Erros tipo I e II | **"Tipo I: grito sem lobo. Tipo II: lobo sem grito."** |
| Correlação | **"Sorvete não afoga ninguém."** |
| Z de cor | **"Noventa, noventa e cinco, noventa e nove: 1,645 · 1,96 · 2,58."** |

---

## 🎧 Resumo para ouvir

### 🎧 Parte 1 (Dia 2) — ~2 min
> Na fábrica, tudo varia. A Estatística descreve, prevê e decide.
> População é o todo; amostra é a parte que eu meço.
> Discreta se conta, contínua se mede.
> A média soma e divide. A mediana fica no meio. A moda é o que mais aparece.
> A média se deixa levar pelo exagerado; a mediana fica parada.
> Mas centro não basta: é preciso medir a variação.
> Amplitude é o maior menos o menor.
> Desvio-padrão é a variação típica, na mesma unidade dos dados.
> A amostra é humilde: divide por n menos um.
> CV é o desvio sobre a média: compara o que não se compara.
> Quartis cortam em quatro; o boxplot mostra os cinco números e denuncia o outlier.
> Duas máquinas com a mesma média podem ser muito diferentes. Olhe sempre a variação.

### 🎧 Parte 2 (Dia 3) — ~2 min
> OU soma, E multiplica. Pelo menos um é um menos nenhum.
> Binomial conta defeituosas numa amostra. Poisson conta eventos no tempo.
> A normal é o sino: simétrica, com média, mediana e moda no centro.
> Um, dois, três: sessenta e oito, noventa e cinco, noventa e nove vírgula sete.
> Z é a distância em desvios: x menos a média, dividido pelo desvio.
> Para achar o percentual fora da especificação: calcula Z, olha a tabela, soma as caudas.
> Médias tremem menos: o erro padrão é o desvio dividido pela raiz de n.
> Intervalo de confiança: média mais ou menos z vezes o erro padrão. Ele fala da média, não das peças.
> No teste de hipóteses, H zero diz que nada mudou. P baixo, H zero pro buraco.
> Tipo um: grito sem lobo. Tipo dois: lobo sem grito.
> Correlação mede se andam juntos, de menos um a mais um. Mas sorvete não afoga ninguém.
> A regressão traça a reta: y igual a a mais b x. E R quadrado diz quanto ela explica.

---

## ✍️ Exercícios

> Faça sem olhar. Pontos: fácil = 2 XP · intermediário = 5 XP · caso = 15 XP.
> 🟢 Na prova vale ter a tabela Z do Bloco 17 à mão.

### 🟢 Nível 1 — Fáceis (fixação)

**F1.** Classifique a variável: a) número de clientes na fila; b) temperatura do forno; c) nível de satisfação (1 a 5 estrelas); d) nome do fornecedor; e) tempo de setup.

**F2.** Para os dados 4, 7, 7, 8, 9, 12, 16, calcule média, mediana, moda e amplitude.

**F3.** Verdadeiro ou falso:
a) A mediana é mais afetada por outliers que a média.
b) No histograma, as barras ficam separadas.
c) Numa normal, cerca de 95% dos dados ficam entre μ − 2σ e μ + 2σ.
d) p-valor = 0,01 com α = 0,05 → rejeita-se H0.
e) Correlação r = −0,9 indica relação fraca.

**F4.** Complete: "O ______ mede quantos desvios-padrão um valor está afastado da média." e "Para amostra, a variância divide por ______."

**F5.** Qual gráfico usar? a) demanda mensal de 2 anos; b) relação entre velocidade da máquina e refugo; c) distribuição dos pesos de 200 pacotes; d) comparar o tempo de atendimento de 3 turnos, mostrando outliers.

### 🟡 Nível 2 — Intermediários (aplicação)

**I1.** Tempos de setup (min): 22, 25, 19, 30, 24. Calcule x̄, s e CV.

**I2.** O tempo de montagem segue normal com μ = 12 min e σ = 1,5 min. a) Qual a % de montagens acima de 15 min? b) Entre 10,5 e 13,5 min?

**I3.** Uma linha tem 4 estações em série, cada uma com confiabilidade de 0,97. Qual a confiabilidade da linha? E a probabilidade de pelo menos uma falhar?

**I4.** Um lote tem taxa de defeito de 5%. Numa amostra de 5 peças, qual a probabilidade de: a) nenhuma defeituosa; b) pelo menos uma defeituosa?

**I5.** Uma amostra de 49 pedidos teve lead time médio de 6 dias com s = 2,1 dias. Construa o IC de 95% para o lead time médio. Interprete.

**I6.** Quantas medições são necessárias para estimar o tempo médio de ciclo com erro máximo de ±0,5 s, 95% de confiança, sabendo que σ ≈ 3 s?

**I7.** (Elaboração) Por que duas máquinas com a mesma média de peso podem ter desempenhos de qualidade muito diferentes? Que medida e que gráfico você mostraria à diretoria?

**I8.** Dados de horas de treinamento (x) e erros de montagem por semana (y): (2; 10), (4; 8), (6; 7), (8; 4), (10; 1). Calcule a reta de regressão e r. Interprete o sinal de b.

### 🔴 Nível 3 — Estudo de caso real

**C1 — "Parafusos Serra": o cliente ameaçou trocar de fornecedor**

A montadora cliente reclamou de parafusos fora da medida. Especificação do comprimento: **50,0 ± 0,3 mm** (49,7 a 50,3). Você coletou **30 parafusos** aleatórios da produção do dia: **x̄ = 50,1 mm** e **s = 0,1 mm** (distribuição aproximadamente normal). A produção é de **200.000 parafusos/mês** e cada parafuso defeituoso custa **R$ 0,50** (retrabalho + frete + multa).

Dados adicionais:
- O operador do turno da noite diz que "a máquina esquenta e o parafuso cresce".
- Você tem 20 pares (temperatura do cabeçote; comprimento) e calculou **r = 0,85**.
- O supervisor quer resolver "aumentando a inspeção final para 100%".

Pergunta-se:
a) Qual a % de parafusos acima do LSE? E abaixo do LIE? E o total fora da especificação?
b) Quantos defeituosos por mês e qual o custo mensal?
c) Construa o IC 95% para a média do processo. Dá para afirmar que o processo está **descentralizado** (média ≠ 50,0)?
d) Se o processo for **recentralizado em 50,0 mm** (mesmo s), qual passa a ser a % fora e a economia mensal?
e) O r = 0,85 prova que a temperatura causa o aumento do comprimento? Como você investigaria?
f) A proposta do supervisor (inspeção 100%) resolve o problema? Justifique com visão de engenharia de produção.

---

## 🔁 Perguntas de revisão (repetição espaçada + intercalação)

### 📌 Revisão do Módulo 1 (D+1 no Dia 2 — responda sem olhar)
1. Cite as 10 áreas da ABEPRO (mnemônico!).
2. Qual a diferença entre rapidez e confiabilidade? Dê um exemplo.
3. Classifique: "definir quantos turnos trabalhar no próximo semestre" (estratégico, tático ou operacional?).
4. Uma linha passou de 400 para 460 peças/dia com as mesmas 8 pessoas. Qual a variação de produtividade?
5. Por que serviços não podem ser estocados?

### 🔀 Perguntas intercaladas M1 + M13 (Dia 3)
6. Em qual área da ABEPRO a Estatística é mais usada? Cite mais duas onde ela também aparece.
7. A produtividade diária de uma equipe tem média 50 peças/h e s = 5. Um dia teve 38 peças/h. Calcule o Z. É um dia "normal"? (Pense: |Z| > 2 é raro.)
8. (Elaboração) O objetivo de desempenho **confiabilidade** (entregar no prazo) tem mais a ver com a **média** ou com a **variação** do lead time? Por quê?
9. No exemplo do hospital (M1), a demanda do pronto-socorro seria uma variável discreta ou contínua? Que distribuição poderia descrever as chegadas por hora?
10. Por que "sem número não existe melhoria" precisa também de **amostra bem escolhida**?

---

## ✅ Checklist: você só pode avançar se souber…

**Parte 1**
- [ ] Diferenciar população × amostra e parâmetro (μ, σ) × estatística (x̄, s).
- [ ] Classificar variáveis em nominal, ordinal, discreta e contínua.
- [ ] Escolher o gráfico certo para cada pergunta.
- [ ] Calcular média, mediana, moda, amplitude, variância, desvio-padrão e CV **à mão**.
- [ ] Explicar quando a mediana é melhor que a média.
- [ ] Calcular quartis, IQR e identificar outliers (regra 1,5·IQR) e ler um boxplot.

**Parte 2**
- [ ] Aplicar as regras do "ou", do "e" e do "pelo menos um".
- [ ] Reconhecer quando usar Binomial e quando usar Poisson.
- [ ] Recitar a regra 68-95-99,7 e os Z 1,645 · 1,96 · 2,58 · 3.
- [ ] Calcular Z e a % fora de especificação usando a tabela.
- [ ] Explicar o Teorema Central do Limite e calcular o erro padrão.
- [ ] Construir e **interpretar corretamente** um intervalo de confiança.
- [ ] Calcular o tamanho de amostra.
- [ ] Montar H0/H1, decidir pelo p-valor e explicar erros tipo I e II.
- [ ] Calcular e interpretar r, R² e a reta de regressão, sem confundir correlação com causa.

🏅 Tudo marcado? **+10 XP** e a medalha **"📈 Mestre da Média"**.

---

## 📝 Gabarito comentado

### Pré-teste
1. **Não.** A média (≈ R$ 7,7 mil) é puxada pelo salário do diretor. A **mediana** (R$ 3 mil) representa melhor.
2. Comparando a **dispersão** (desvio-padrão, CV, boxplot) e a % fora da especificação.
3. Os dados se distribuem em forma de **sino simétrico** em torno da média, com ~68% a ±1σ, ~95% a ±2σ e ~99,7% a ±3σ.
4. **Não.** Correlação não é causalidade: a variável oculta é o **calor/verão**.
5. **Não.** Usa-se uma **amostra aleatória** e a inferência estatística (IC, teste de hipóteses).

### Fáceis
**F1.** a) quantitativa discreta · b) quantitativa contínua · c) qualitativa ordinal (🟡 apesar de usar números, as estrelas são categorias ordenadas) · d) qualitativa nominal · e) quantitativa contínua.

**F2.** Soma = 63, n = 7 → **x̄ = 9** · ordenado, o 4º valor → **mediana = 8** · **moda = 7** · **amplitude = 16 − 4 = 12**. Repare: x̄ > mediana → assimetria à direita (o 16 puxa).

**F3.** a) **F** — é o contrário: a **média** é mais afetada. b) **F** — no histograma as barras são coladas (eixo contínuo). c) **V**. d) **V** — p (0,01) < α (0,05) → "p baixo, H0 pro buraco". e) **F** — |r| = 0,9 é relação **forte** e **negativa**.

**F4.** **escore Z** · **n − 1**.

**F5.** a) **linha** · b) **dispersão** · c) **histograma** · d) **boxplot**.

### Intermediários
**I1.**
- x̄ = (22 + 25 + 19 + 30 + 24) ÷ 5 = 120 ÷ 5 = **24 min**
- Desvios: −2, +1, −5, +6, 0 → quadrados: 4, 1, 25, 36, 0 → soma = 66
- s² = 66 ÷ 4 = 16,5 → **s ≈ 4,06 min**
- **CV = 4,06 ÷ 24 ≈ 16,9%** (dispersão média: vale padronizar o setup com SMED, M6).

**I2.**
a) Z = (15 − 12) ÷ 1,5 = **2** → P(Z > 2) = **2,28%**.
b) 10,5 e 13,5 são μ ± 1σ → **≈ 68,3%** (exato: 0,8413 − 0,1587 = 0,6826).

**I3.** Confiabilidade = 0,97⁴ = **0,8853 → 88,5%**. P(pelo menos uma falhar) = 1 − 0,8853 = **11,5%**.

**I4.**
a) P(0) = 0,95⁵ = **0,7738 → 77,4%**.
b) P(≥ 1) = 1 − 0,7738 = **22,6%**. 🟡 Mesmo com só 5% de defeito, uma amostra de 5 já pega pelo menos uma defeituosa em quase 1/4 das vezes.

**I5.** EP = 2,1 ÷ √49 = 2,1 ÷ 7 = **0,3** → IC95% = 6 ± 1,96 × 0,3 = 6 ± 0,588 → **[5,41 ; 6,59] dias**.
Interpretação: temos 95% de confiança de que o **lead time médio** do processo está entre 5,4 e 6,6 dias. 🟡 Não quer dizer que 95% dos pedidos chegam nesse intervalo (pedidos individuais variam muito mais: ±1,96 × 2,1 ≈ ±4,1 dias).

**I6.** n = (1,96 × 3 ÷ 0,5)² = (11,76)² = 138,3 → **139 medições**.

**I7.** Porque a **qualidade depende da variação**, não só do centro. A máquina com maior dispersão gera mais itens fora da especificação, mesmo com média perfeita. Mostre o **desvio-padrão/CV** (ou a % fora calculada com Z) e um **boxplot ou histograma lado a lado** com os limites de especificação desenhados.

**I8.**
- x̄ = 6 · ȳ = (10 + 8 + 7 + 4 + 1) ÷ 5 = **6**
- dx: −4, −2, 0, +2, +4 · dy: +4, +2, +1, −2, −5
- Sxy = (−16) + (−4) + 0 + (−4) + (−20) = **−44** · Sxx = 16 + 4 + 0 + 4 + 16 = **40** · Syy = 16 + 4 + 1 + 4 + 25 = **50**
- b = −44 ÷ 40 = **−1,1** · a = 6 − (−1,1) × 6 = **12,6** → **ŷ = 12,6 − 1,1x**
- r = −44 ÷ √(40 × 50) = −44 ÷ 44,72 = **−0,984** (correlação negativa muito forte; R² ≈ 0,97)
- Interpretação: cada **hora a mais de treinamento** está associada a **1,1 erro a menos** por semana. 🟡 Cuidado: extrapolar para 12 h daria −0,6 erros (impossível!). Não use a reta fora da faixa dos dados.

### Estudo de caso — Parafusos Serra
**a)**
- Z(LSE) = (50,3 − 50,1) ÷ 0,1 = **+2,0** → P(Z > 2) = **2,28%** acima.
- Z(LIE) = (49,7 − 50,1) ÷ 0,1 = **−4,0** → P(Z < −4) ≈ **0,003%** abaixo (desprezível).
- **Total ≈ 2,28%** fora.

**b)** 200.000 × 0,0228 = **4.560 parafusos/mês** → 4.560 × R$ 0,50 = **R$ 2.280/mês** (≈ R$ 27 mil/ano).

**c)** EP = 0,1 ÷ √30 = 0,1 ÷ 5,477 = **0,0183** → IC95% = 50,1 ± 1,96 × 0,0183 = 50,1 ± 0,036 → **[50,064 ; 50,136] mm**.
O valor-alvo **50,0 está fora do intervalo** → sim, há evidência estatística de que o processo está **descentralizado** (equivale a rejeitar H0: μ = 50,0 com α = 5%; t = 0,1 ÷ 0,0183 ≈ 5,5).

**d)** Centralizado em 50,0: Z = ±0,3 ÷ 0,1 = **±3** → fora = 2 × 0,135% = **0,27%**.
- Defeituosos: 200.000 × 0,0027 = **540/mês** → custo **R$ 270/mês**.
- **Economia: R$ 2.010/mês** (≈ R$ 24 mil/ano) **só ajustando a média**, sem comprar nada. 🟢 Centralizar costuma ser a melhoria mais barata que existe.

**e)** **Não prova.** r = 0,85 mostra associação linear forte, mas pode haver uma variável oculta (ex.: no turno da noite muda também o lote de arame, o operador, a velocidade). Como investigar:
1. **Ishikawa (6M)** com a equipe para listar causas possíveis (M5).
2. **Experimento controlado:** variar só a temperatura (mantendo lote, operador e velocidade) e medir o comprimento.
3. Se confirmar, atacar a causa: **aquecimento prévio** da máquina antes de produzir, **compensação** do ajuste com a temperatura, ou refrigeração.

**f)** **Não resolve a causa.** Inspeção 100% só **separa** o defeito depois que ele foi produzido: aumenta custo (mão de obra de inspeção), não elimina retrabalho e inspeção humana falha (fadiga deixa passar peças, o que é erro tipo II). A visão de engenharia de produção é **atuar no processo**: centralizar a média, controlar a variação com **CEP** (M5), investigar a temperatura e, se necessário, usar **poka-yoke** (M6). Qualidade se **constrói** no processo, não se **inspeciona** no final (Deming).

🏅 **Pontuação do caso:** 15 XP se acertou pelo menos 4 dos 6 itens (a, b, c e d têm resposta numérica exata; e e f valem pela argumentação).

### Revisão M1 + intercaladas
1. Operações, Logística, Pesquisa Operacional, Qualidade, Produto, Organizacional, Econômica, Trabalho, Sustentabilidade, Educação.
2. Rapidez = entregar logo; confiabilidade = entregar quando prometeu (pizzaria que promete 90 min e entrega em 60).
3. **Tático** (médio prazo, meses).
4. 400/8 = 50 → 460/8 = 57,5 → **+15%**.
5. Porque são produzidos e consumidos ao mesmo tempo; capacidade não usada se perde.
6. **Engenharia da Qualidade** (CEP, Seis Sigma). Também: Pesquisa Operacional (simulação, filas), Operações (previsão de demanda, cronoanálise), Logística (estoque de segurança).
7. Z = (38 − 50) ÷ 5 = **−2,4** → muito raro (P ≈ 0,8%). **Não é um dia normal**: investigue a causa especial (máquina quebrou? faltou material?). 🟣 É a lógica do CEP.
8. Com a **variação**. Uma entrega com lead time médio de 5 dias mas desvio de 4 dias atrasa muito; um desvio pequeno permite prometer um prazo e **cumprir**. Confiabilidade = baixa variação.
9. **Discreta** (contagem de pacientes). As chegadas por hora costumam seguir **Poisson**, a base da teoria das filas (M9).
10. Porque um número vindo de amostra **viciada** (só o começo do turno, só a máquina boa) gera conclusão errada. Medir mal é pior que não medir, porque dá falsa confiança.

---

➡️ **Próximo passo:** Módulo 2 — Gestão de Projetos (Dias 4, 5 e 6).
