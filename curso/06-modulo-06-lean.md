# ♻️ Módulo 6 — Lean Manufacturing

> 📄 Apostila gerada automaticamente a partir de `app/conteudo/modulo-06.js` (a mesma fonte do app).
> Exemplos numéricos são ilustrativos, criados para fins didáticos.

## 🎯 Objetivo do módulo

Enxergar valor e desperdício com os olhos do cliente e usar as ferramentas do Lean (5S, kanban, VSM, SMED, heijunka, poka-yoke, TPM e kaizen) para fazer o fluxo andar com menos estoque, menos defeito e menos esforço.

## 🗺️ Lições

| # | Lição | Níveis |
|---|---|---|
| 1 | Origens e princípios do Lean | 🌱 🔧 🧠 |
| 2 | Os desperdícios (muda, mura, muri) | 🌱 🔧 🧠 |
| 3 | 5S, gestão visual e trabalho padronizado | 🌱 🔧 🧠 |
| 4 | Just in time, produção puxada e kanban | 🌱 🔧 🧠 |
| 5 | Mapeamento do fluxo de valor (VSM) | 🌱 🔧 🧠 |
| 6 | SMED e heijunka: troca rápida e nivelamento | 🌱 🔧 🧠 |
| 7 | Jidoka, poka-yoke, TPM e OEE | 🌱 🔧 🧠 |
| 8 | Kaizen, PDCA e A3 | 🌱 🔧 🧠 |
| 9 | 👾 Chefão: a Doces Serra enxuta | 🌱 🔧 🧠 |

## 🎧 Resumo para ouvir

> Lean é fazer mais com menos, olhando pelo olho do cliente. Nasceu no Sistema Toyota de Produção, com Taiichi Ohno, e se apoia em dois pilares: just in time e jidoka. Os cinco princípios: valor, fluxo de valor, fluxo, puxar e perfeição. Os desperdícios, lembrando TIM WOODS: transporte, inventário, movimentação, espera, superprodução, superprocessamento, defeitos e talento não aproveitado. A superprodução é o pior, porque gera os outros. 5S organiza a base: utilização, ordenação, limpeza, padronização e disciplina. Puxar é produzir só o que o cliente consumiu; o kanban é o sinal. O mapa do fluxo de valor mostra o lead time e quanto dele agrega valor, quase sempre muito pouco. SMED separa o setup interno do externo e transforma interno em externo. Heijunka nivela volume e mix. Poka-yoke impede o erro; jidoka para ao detectar o problema. OEE é disponibilidade vezes performance vezes qualidade. E o kaizen é melhoria contínua, pequena e diária, com PDCA e indo ao gemba.

---

## 1. 🏯 Origens e princípios do Lean

**🧩 Pré-requisitos:** História: de Taylor à Toyota (Módulo 1); Gargalo e melhoria da linha (Módulo 4).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o que é Lean e de onde veio
- Citar os cinco princípios do pensamento enxuto
- Reconhecer os dois pilares da “casa” do Sistema Toyota

**🏭 Por que isso importa**

Na maioria dos processos, **a maior parte do tempo que o produto passa na empresa ele está parado**: esperando, em estoque, sendo transportado. O Lean ensina a enxergar isso e a atacar o desperdício antes de comprar máquina nova ou contratar.

**🔴 Conceito-chave — De onde veio**

No pós-guerra, a Toyota não tinha dinheiro nem mercado para copiar a produção em massa de Ford. **Taiichi Ohno**, com apoio de **Eiji Toyoda**, desenvolveu entre os anos 1950 e 1970 o **Sistema Toyota de Produção**.  
O termo **“lean”** (enxuto) foi usado por John Krafcik (1988) e popularizado pelo livro *A Máquina que Mudou o Mundo* (Womack, Jones e Roos, 1990), fruto de um estudo do MIT sobre a indústria automobilística.

**🔴 Conceito-chave — Os cinco princípios**

Segundo Womack e Jones (*Lean Thinking*, 1996):  
1. **Valor:** definido pelo **cliente**.  
2. **Fluxo de valor:** mapear todas as etapas, separar o que agrega valor do que não agrega.  
3. **Fluxo:** fazer o produto andar sem paradas.  
4. **Puxar:** produzir só quando o cliente (ou o processo seguinte) pede.  
5. **Perfeição:** melhorar continuamente.

**🔊 Para memorizar**

**“Vale Fazer Fluir, Puxando a Perfeição”**: Valor, Fluxo de valor, Fluxo, Puxar, Perfeição.

**🧠 Mapa — A casa do Sistema Toyota**

```
   Telhado: qualidade, custo,
     prazo, segurança, moral
 ┌────────────┬────────────┐
 │ JUST IN    │  JIDOKA    │
 │ TIME       │ (qualidade │
 │ (fluxo,    │  na fonte, │
 │  puxar,    │  parar no  │
 │  takt)     │  problema) │
 ├────────────┴────────────┤
 │ Pessoas e kaizen        │
 ├─────────────────────────┤
 │ Base: heijunka, trabalho│
 │ padrão, estabilidade    │
 └─────────────────────────┘
```

**😂 Exemplo do dia a dia — A lanchonete**

Lanchonete “em massa”: frita 50 hambúrgueres de manhã e deixa esfriando na estufa. Lanchonete “lean”: monta o lanche quando o cliente pede, em minutos. A segunda desperdiça menos comida e o lanche chega melhor, mas precisa de **processo rápido e confiável**.

**🟡 Atenção — Erro comum**

Achar que Lean é “cortar gente” ou “trabalhar mais rápido”. O foco é **eliminar desperdício no processo**, não aumentar o esforço das pessoas. Lean mal aplicado, que só corta, costuma perder o apoio de quem faz o trabalho.

#### ✍️ Exercícios

**1.F1** Ordene os cinco princípios do pensamento enxuto:
   Itens (fora de ordem): Fluxo · Fluxo de valor · Perfeição · Puxar · Valor

**1.F2** Quem define o que é valor no Lean?
   a) O engenheiro de processos
   b) O cliente
   c) O diretor financeiro
   d) O fornecedor

**1.F3** Ligue o nome à contribuição:
   1. Taiichi Ohno
   2. Womack e Jones
   3. John Krafcik
   Ligar com: Cinco princípios do pensamento enxuto · Desenvolveu o Sistema Toyota de Produção · Usou o termo “lean production” (1988)

**1.F4** Os dois pilares da casa do Sistema Toyota são o just in time e o ___.
   Opções: jidoka · MRP · Gantt · orçamento

**1.F5** O objetivo principal do Lean é fazer as pessoas trabalharem mais rápido.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🌱 Fácil)

**Lean** é uma forma de gerir a produção que busca **entregar valor ao cliente com o mínimo de desperdício**. Nasceu no **Sistema Toyota de Produção (STP/TPS)**, com Taiichi Ohno. Os cinco princípios (Womack e Jones): **valor, fluxo de valor, fluxo, puxar e perfeição**. A “casa” do TPS tem dois pilares: **just in time** e **jidoka**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Aplicar os cinco princípios a um processo
- Diferenciar produção em massa e produção enxuta
- Explicar a lógica de reduzir estoques para expor problemas

**🔴 Conceito-chave — Massa × enxuta**

| Aspecto | Produção em massa | Produção enxuta |  
|---|---|---|  
| Lotes | Grandes | Pequenos |  
| Estoques | Altos, “por segurança” | Baixos e controlados |  
| Qualidade | Inspeção no fim | Na fonte (jidoka) |  
| Programação | Empurrar pela previsão | Puxar pelo consumo |  
| Pessoas | Executam | Executam e melhoram |  
| Variedade | Pouca | Maior, com setups curtos |

**🔴 Conceito-chave — O rio e as pedras**

O nível da água é o **estoque**; as pedras são os **problemas** (quebras, defeitos, setups longos, fornecedor atrasado). Com muita água, o barco passa e ninguém vê as pedras. Baixando a água aos poucos, as pedras aparecem e podem ser removidas.  
Cuidado: baixar a água de uma vez, sem resolver as pedras, **encalha o barco** (falta produto).

**🏭 Na empresa**

Na Doces Serra, havia 3 dias de bombons em estoque entre o banho e a embalagem. Ao reduzir para 1 dia, apareceram paradas frequentes da banhadeira por limpeza mal feita. Tratada a causa (procedimento de limpeza padronizado), o estoque menor passou a ser seguro e liberou espaço na câmara fria.

**🟣 Conexão**

O **takt time** e o **gargalo** do Módulo 4 são peças centrais do Lean. O **PCP** do Módulo 3 “empurra” pelo plano; o Lean propõe **puxar** onde o consumo é regular. A **qualidade na fonte** conecta com o Módulo 5.

#### ✍️ Exercícios

**1.M1** Na metáfora do rio e das pedras, o que acontece ao reduzir o estoque (nível da água)?
   a) Os problemas desaparecem
   b) Os problemas escondidos aparecem e podem ser resolvidos
   c) O lead time aumenta
   d) A demanda cai

**1.M2** *Após ler sobre Lean, um gerente zerou de uma vez o estoque entre dois setores. Na semana seguinte, a embalagem parou várias vezes por falta de produto.* O que deu errado?
   a) Lean não funciona em alimentos
   b) Baixou a água de uma vez sem resolver as pedras: reduzir aos poucos e tratar as causas das paradas
   c) Precisava aumentar o estoque para 10 dias
   d) Faltou comprar outra máquina

**1.M3** Na produção enxuta, a qualidade é garantida principalmente pela inspeção no final da linha.
   ( ) Verdadeiro  ( ) Falso

**1.M4** Ligue o aspecto ao modelo enxuto:
   1. Lotes
   2. Programação
   3. Qualidade
   4. Pessoas
   Ligar com: Executam e melhoram · Na fonte · Pequenos · Puxar pelo consumo

#### 📝 Resumo (🔧 Médio)

A produção em massa busca escala com lotes grandes e estoques; o Lean busca **fluxo** com lotes pequenos, qualidade na fonte e flexibilidade. Estoque esconde problemas (a metáfora do rio e das pedras): reduzir estoque de forma controlada **expõe** as causas para resolvê-las.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Distinguir Lean como sistema de gestão de Lean como caixa de ferramentas
- Analisar críticas e limites do Lean
- Discutir resiliência × enxugamento nas cadeias de suprimento

**🔴 Conceito-chave — Sistema, não caixa de ferramentas**

Liker (*O Modelo Toyota*, 2004) descreve 14 princípios, agrupados em filosofia de longo prazo, processo certo, desenvolvimento das pessoas e solução de problemas. Muitas empresas copiam **ferramentas** (5S, kanban) sem o **sistema de gestão** (liderança que vai ao gemba, padrões, solução de problemas diária) e obtêm ganhos que não se sustentam.

**⚖️ Limitações e trade-offs — Críticas e limites**

• **Intensificação do trabalho:** retirar folgas sem melhorar o método pode aumentar ritmo e risco ergonômico (Módulo 10).  
• **Fragilidade:** cadeias com estoques mínimos sofrem com rupturas. Na pandemia de covid-19 e na falta de semicondutores (2020–2022), várias montadoras pararam linhas. A própria Toyota, segundo a imprensa (Reuters, 2021), passou a manter estoques maiores de chips após o terremoto de 2011.  
• **Contexto:** alta variedade, demanda muito instável ou baixo volume exigem adaptações (ex.: POLCA, CONWIP).

**🔴 Conceito-chave — Enxuto e resiliente**

Reduzir estoque é meio, não fim. Estoques **estratégicos e posicionados** (itens críticos, fornecedor único, longo lead time) são compatíveis com o Lean quando a decisão é **consciente, dimensionada e revista**. O que o Lean combate é o estoque que **esconde** problemas.

**📚 Para aprofundar**

• OHNO, T. *O Sistema Toyota de Produção: além da produção em larga escala*. Bookman.  
• WOMACK, J. P.; JONES, D. T.; ROOS, D. *A Máquina que Mudou o Mundo*. Campus/Elsevier.  
• WOMACK, J. P.; JONES, D. T. *A Mentalidade Enxuta nas Empresas (Lean Thinking)*. Campus/Elsevier.  
• LIKER, J. K. *O Modelo Toyota: 14 princípios de gestão*. Bookman.  
• KRAFCIK, J. F. Triumph of the lean production system. *Sloan Management Review*, v. 30, n. 1, 1988.

#### ✍️ Exercícios

**1.D1** Por que muitas implantações de Lean não se sustentam?
   a) Porque as ferramentas são caras
   b) Porque copiam ferramentas sem o sistema de gestão (liderança no gemba, padrões, solução diária de problemas)
   c) Porque o Lean só funciona no Japão
   d) Porque exige ERP

**1.D2** *Uma montadora compra um chip de fornecedor único, com lead time de 20 semanas, e mantém 2 dias de estoque “porque Lean é estoque zero”.* Qual a melhor análise?
   a) Correto: estoque é sempre desperdício
   b) Arriscado: item crítico, fornecedor único e lead time longo justificam estoque estratégico dimensionado e revisto
   c) Deveria ter 5 anos de estoque
   d) Deveria trocar por MRP

**1.D3** “Lean é só um jeito elegante de cortar pessoal.” Analise essa afirmação.

**1.D4** Houve relatos de montadoras parando linhas por falta de semicondutores entre 2020 e 2022, o que reacendeu o debate sobre estoques mínimos.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🧠 Difícil)

Lean é um **sistema de gestão** (pessoas, aprendizado, liderança) e não só um conjunto de ferramentas; copiar ferramentas sem a cultura tende a falhar. Críticas: intensificação do trabalho quando mal aplicado e **fragilidade** de cadeias com pouco estoque diante de rupturas (pandemia, falta de semicondutores). Enxuto não é “sem proteção”: estoques estratégicos podem ser decisão racional.

---

## 2. 🗑️ Os desperdícios (muda, mura, muri)

**🧩 Pré-requisitos:** Origens e princípios; Estudo de métodos (Módulo 4).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Citar os 7 desperdícios de Ohno e o 8º
- Reconhecer desperdícios em exemplos do dia a dia
- Diferenciar atividade que agrega valor e que não agrega

**🏭 Por que isso importa**

Não dá para melhorar o que não se enxerga. Os desperdícios são as “lentes” do Lean: com elas, uma caminhada de 5 minutos pela fábrica revela dezenas de oportunidades.

**🔴 Conceito-chave — Os 7 + 1 desperdícios**

1. **Superprodução:** produzir antes ou mais do que o necessário.  
2. **Espera:** pessoas ou produtos parados.  
3. **Transporte:** mover material sem necessidade.  
4. **Processamento excessivo:** fazer mais do que o cliente pede (polir o que não aparece, aprovar 3 vezes).  
5. **Estoque:** material parado além do necessário.  
6. **Movimentação:** deslocamentos e gestos desnecessários das pessoas.  
7. **Defeitos:** retrabalho, refugo, inspeção de correção.  
8. **Talento não aproveitado:** não ouvir as ideias de quem faz.

**🔊 Para memorizar**

**TIM WOODS** (em inglês): **T**ransport, **I**nventory, **M**otion, **W**aiting, **O**verproduction, **O**verprocessing, **D**efects, **S**kills (talento não aproveitado).

**😂 Exemplo do dia a dia — Desperdícios na cozinha**

Fazer arroz para 10 quando vêm 4 (superprodução) · esperar a panela de pressão parado olhando (espera) · ir à despensa 6 vezes (movimentação) · a geladeira lotada de potes esquecidos (estoque) · queimar o feijão e fazer de novo (defeito) · descascar a batata que vai virar purê em cubinhos perfeitos (processamento excessivo).

**🔴 Conceito-chave — O que agrega valor?**

Três condições (todas juntas):  
• O cliente **está disposto a pagar** por ela.  
• **Transforma** o produto ou serviço (forma, ajuste, função).  
• É feita **certa da primeira vez**.

**🟡 Atenção — Erro comum**

Confundir **transporte** (mover material) com **movimentação** (movimento das pessoas). Carregar a caixa de um setor a outro é transporte; o operador se esticar para pegar a peça é movimentação.

#### ✍️ Exercícios

**2.F1** Ligue a situação ao desperdício:
   1. Produzir 500 caixas quando o pedido é de 300
   2. Operador parado esperando a máquina terminar
   3. Refazer caixas com tampa torta
   4. Operador se abaixar e esticar para pegar a peça
   Ligar com: Defeitos · Espera · Movimentação · Superprodução

**2.F2** Qual destes é o 8º desperdício, acrescentado aos 7 de Ohno?
   a) Excesso de lucro
   b) Talento/criatividade das pessoas não aproveitado
   c) Uso de computadores
   d) Falta de estoque

**2.F3** Levar um palete do setor de banho até o armazém é um exemplo de transporte.
   ( ) Verdadeiro  ( ) Falso

**2.F4** Fazer mais do que o cliente pede, como aprovar o mesmo documento três vezes, é ___.
   Opções: processamento excessivo · agregar valor · puxar · takt time

**2.F5** Inspecionar um produto e retrabalhar os defeitos agrega valor, porque deixa o produto certo.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🌱 Fácil)

Os **7 desperdícios** de Ohno: **superprodução, espera, transporte, processamento excessivo, estoque, movimentação e defeitos**. O 8º, popularizado por Liker: **talento (criatividade) não aproveitado**. Mnemônico: **TIM WOODS**. Agregar valor = transformar o produto de um jeito que o cliente paga.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Classificar atividades em agrega valor, necessária sem valor e desperdício
- Explicar por que a superprodução é o pior desperdício
- Relacionar muda, mura e muri

**🔴 Conceito-chave — Três tipos de atividade**

**Agrega valor (AV):** transforma e o cliente paga. → **manter e melhorar**.  
**Necessária, mas não agrega valor (NNAV):** hoje não dá para eliminar (ex.: registrar lote para rastreabilidade, desembalar peça do fornecedor). → **reduzir**.  
**Desperdício puro:** não agrega e não é necessária (ex.: procurar ferramenta, retrabalho). → **eliminar**.

**🔴 Conceito-chave — Por que a superprodução é o pior**

Produzir antes ou além do necessário **gera outros desperdícios**: precisa de estoque, transporte até o armazém, movimentação para guardar e buscar, e o defeito só aparece semanas depois, quando há um lote inteiro com o mesmo problema. Além disso, consome capacidade e material de itens que o cliente precisa agora.

**🔴 Conceito-chave — Muda, mura, muri**

**Muda:** desperdício (os 7 + 1).  
**Mura:** irregularidade, variação (demanda em picos, ritmo desigual).  
**Muri:** sobrecarga de pessoas ou máquinas.  
Cadeia típica: a **mura** (pico na sexta-feira) gera **muri** (hora extra, máquina forçada), que gera **muda** (defeitos, quebras, estoque). Por isso o Lean ataca também a variação (heijunka, lição 6).

**🏭 Na empresa**

Caminhada no gemba da Doces Serra: operador anda 8 m por ciclo para buscar caixas (movimentação); bombons esperam 2 dias entre banho e embalagem (estoque/espera); etiqueta conferida por 2 pessoas (processamento excessivo); 3% de caixas refeitas por tampa torta (defeito); ideias dos operadores não registradas (talento).

#### ✍️ Exercícios

**2.M1** Classifique cada atividade:
   1. Banhar o bombom no chocolate
   2. Registrar o lote para rastreabilidade
   3. Procurar a espátula na bancada
   Ligar com: Agrega valor · Desperdício puro · Necessária, sem valor

**2.M2** Por que a superprodução é considerada o pior desperdício?
   a) Porque é o mais fácil de ver
   b) Porque gera outros desperdícios (estoque, transporte, espera) e esconde defeitos
   c) Porque é proibida por lei
   d) Porque só acontece em fábricas grandes

**2.M3** Ligue o termo japonês ao significado:
   1. Muda
   2. Mura
   3. Muri
   Ligar com: Desperdício · Irregularidade, variação · Sobrecarga

**2.M4** *A demanda chega concentrada na sexta-feira. Nesse dia há hora extra, a máquina roda acima da velocidade recomendada e o refugo dobra.* Qual a relação correta?
   a) Muda gera mura
   b) Mura (pico) gera muri (sobrecarga), que gera muda (refugo)
   c) Muri gera mura
   d) Não há relação

**2.M5** Atividades necessárias que não agregam valor devem ser reduzidas, e não necessariamente eliminadas.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🔧 Médio)

Atividades: **agregam valor (AV)**, **necessárias sem valor (NNAV)** (reduzir) e **desperdício puro** (eliminar). A **superprodução** é o pior desperdício porque gera estoque, transporte, espera e esconde defeitos. **Muda** = desperdício; **mura** = irregularidade; **muri** = sobrecarga — a mura gera muri, que gera muda.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Analisar a relação causal entre os desperdícios
- Aplicar a lógica de desperdícios a serviços
- Avaliar quando uma atividade sem valor é obrigatória

**🔴 Conceito-chave — Desperdícios em serviços**

| Desperdício | Exemplo em serviço |  
|---|---|  
| Espera | Paciente na fila; processo parado aguardando aprovação |  
| Transporte | Documento que passa por 5 mesas |  
| Estoque | Caixa de entrada com 300 e-mails; pedidos em fila |  
| Processamento excessivo | Relatório que ninguém lê; dados digitados 2 vezes |  
| Defeito | Cadastro errado; retrabalho de nota fiscal |  
| Talento | Atendente que conhece a solução e não é ouvido |

**⚖️ Limitações e trade-offs — Atividade obrigatória**

Inspeções exigidas por norma (ex.: segurança de alimentos, registros de rastreabilidade de lote) **não agregam valor ao cliente** no sentido estrito, mas são **obrigatórias** por lei ou por risco. Classifique-as como NNAV e busque executá-las com menos esforço (automatizar registro, integrar à operação), nunca simplesmente eliminá-las.

**🧮 Exemplo resolvido — Cadeia causal**

Na Doces Serra, a embalagem produzia 2 dias à frente da expedição (**superprodução**) → câmara fria cheia (**estoque**) → paletes empilhados longe da doca (**transporte, movimentação**) → um lote com etiqueta errada só foi descoberto na expedição (**defeito** multiplicado por 2 dias de produção). Atacar a superprodução resolve vários sintomas de uma vez.

#### ✍️ Exercícios

**2.D1** Num hospital, pacientes esperam 3 horas por um exame que leva 15 minutos. Qual desperdício predomina e o que ele indica?
   a) Defeito; o exame está errado
   b) Espera; o fluxo tem filas por desbalanceamento entre chegadas e capacidade
   c) Superprodução de exames
   d) Transporte

**2.D2** *Um analista propõe eliminar o registro de lote dos bombons “porque não agrega valor ao cliente”.* Qual a melhor resposta?
   a) Aprovar: tudo que não agrega valor deve sair
   b) Manter: é exigência de rastreabilidade e segurança de alimentos (NNAV); buscar reduzir o esforço, por exemplo com leitura automática
   c) Fazer o registro duas vezes para garantir
   d) Terceirizar o registro

**2.D3** Descreva, com exemplos, como a superprodução pode gerar pelo menos três outros desperdícios numa fábrica de bombons.

**2.D4** Os desperdícios do Lean só se aplicam a fábricas.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🧠 Difícil)

Os desperdícios formam uma cadeia causal: superprodução → estoque → transporte e movimentação → defeitos escondidos. Em serviços: filas (espera), retrabalho de cadastro (defeito), aprovações redundantes (processamento excessivo). Atividades exigidas por lei ou segurança não agregam valor ao cliente, mas são **obrigatórias**: o objetivo é executá-las com o mínimo de esforço, não eliminá-las.

---

## 3. 🧹 5S, gestão visual e trabalho padronizado

**🧩 Pré-requisitos:** Os desperdícios.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar os cinco sensos do 5S
- Dar exemplos de gestão visual
- Explicar para que serve o trabalho padronizado

**🏭 Por que isso importa**

Num posto bagunçado, perde-se tempo procurando, erra-se de peça e ninguém percebe quando algo está fora do lugar. O 5S e a gestão visual criam a **base estável** sobre a qual as outras ferramentas funcionam.

**🔴 Conceito-chave — Os cinco sensos**

1. **Seiri — Utilização:** separar o necessário do desnecessário e descartar o que não se usa.  
2. **Seiton — Ordenação:** um lugar para cada coisa, cada coisa no seu lugar, identificado.  
3. **Seiso — Limpeza:** limpar e, limpando, **inspecionar** (vazamentos, desgaste).  
4. **Seiketsu — Padronização/saúde:** criar padrões para manter os três primeiros.  
5. **Shitsuke — Disciplina:** seguir os padrões como hábito.

**🔊 Para memorizar**

**“Usa, Ordena, Limpa, Padroniza e Disciplina”** — os três primeiros **fazem**, os dois últimos **mantêm**.

**😂 Exemplo do dia a dia — 5S no guarda-roupa**

Seiri: doar a roupa que você não usa há 2 anos. Seiton: camisetas numa gaveta, calças em outra. Seiso: limpar e ver que a traça apareceu. Seiketsu: regra “entrou uma peça, sai uma”. Shitsuke: manter isso sem precisar de mutirão a cada 6 meses.

**🔴 Conceito-chave — Gestão visual**

A situação deve ser entendida **de relance**, sem perguntar a ninguém:  
• Faixas no chão demarcando corredores e áreas.  
• **Quadro de sombras** para ferramentas (a falta aparece).  
• Quadro de produção hora a hora (planejado × realizado).  
• **Andon:** luz ou sinal que avisa um problema na linha.

**🟡 Atenção — Erro comum**

Achar que 5S é faxina. Limpeza é só o 3º senso. O ponto central é **organizar para o trabalho fluir** e tornar visível o que está fora do normal.

#### ✍️ Exercícios

**3.F1** Ordene os sensos do 5S:
   Itens (fora de ordem): Seiketsu — Padronização · Seiri — Utilização · Seiso — Limpeza · Seiton — Ordenação · Shitsuke — Disciplina

**3.F2** Separar o necessário do desnecessário e descartar o que não se usa é qual senso?
   a) Seiri
   b) Seiso
   c) Shitsuke
   d) Seiketsu

**3.F3** O 5S é, basicamente, fazer faxina no setor.
   ( ) Verdadeiro  ( ) Falso

**3.F4** O painel com o contorno de cada ferramenta, que mostra na hora qual está faltando, é o quadro de ___.
   Opções: sombras · Gantt · Pareto · controle

**3.F5** O que é o andon?
   a) Um tipo de estoque
   b) Um sinal luminoso ou sonoro que avisa um problema na linha
   c) Um método de previsão
   d) Um relatório mensal

#### 📝 Resumo (🌱 Fácil)

**5S:** **Seiri** (utilização/descarte), **Seiton** (ordenação), **Seiso** (limpeza), **Seiketsu** (padronização/saúde) e **Shitsuke** (disciplina). **Gestão visual:** a situação é visível de relance (demarcações, quadros, andon). **Trabalho padronizado:** a melhor forma conhecida hoje de fazer o trabalho.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Aplicar o 5S a um posto de trabalho
- Citar os três elementos do trabalho padronizado
- Diferenciar padrão como base para melhoria e como engessamento

**🔴 Conceito-chave — Trabalho padronizado**

É a descrição da **melhor forma conhecida hoje** de fazer uma operação, com três elementos:  
• **Takt time:** o ritmo exigido pelo cliente.  
• **Sequência de trabalho:** a ordem dos passos que o operador segue.  
• **Estoque padrão em processo:** a quantidade mínima de peças no posto para o trabalho fluir.  
Documentos típicos: folha de trabalho padronizado, tabela de combinação de trabalho.

**🛠️ Passo a passo — Implantando o 5S num posto**

1. Fotografar o antes.  
2. **Seiri:** etiqueta vermelha nos itens duvidosos; área de quarentena; decidir em prazo definido.  
3. **Seiton:** posição pelo uso (mais usado = mais perto), identificação, quadro de sombras.  
4. **Seiso:** limpeza com checklist de inspeção.  
5. **Seiketsu:** padrão visual (foto do “como deve ficar”), rotina de 5 minutos por turno.  
6. **Shitsuke:** verificação pela liderança, auditoria simples, reconhecimento.

**🔴 Conceito-chave — Sem padrão, não há melhoria**

Se cada turno faz de um jeito, não se sabe se uma mudança melhorou ou piorou: a variação esconde o efeito. O padrão estabiliza o processo; o **kaizen** muda o padrão para melhor; o novo padrão vira a base da próxima melhoria.

**🏭 Na empresa**

Na embalagem da Doces Serra, o quadro hora a hora mostrou que a meta de 80 caixas/hora falhava sempre depois do almoço. Investigação: o abastecimento de caixas vazias acontecia no horário do almoço da logística. Mudou-se o horário; o quadro passou a ficar verde.

#### ✍️ Exercícios

**3.M1** Ligue o elemento do trabalho padronizado ao significado:
   1. Takt time
   2. Sequência de trabalho
   3. Estoque padrão em processo
   Ligar com: Mínimo de peças no posto para o trabalho fluir · Ordem dos passos do operador · Ritmo exigido pelo cliente

**3.M2** *Cada turno monta a caixa de um jeito. A engenharia testou uma melhoria e o tempo médio não mudou.* Qual o problema mais provável?
   a) A melhoria é inútil
   b) Sem padrão, a variação entre turnos esconde o efeito; padronizar primeiro e depois comparar
   c) Precisa de mais turnos
   d) O cronômetro está errado

**3.M3** No Seiso (limpeza), limpar também é uma forma de inspecionar o equipamento.
   ( ) Verdadeiro  ( ) Falso

**3.M4** Ordene a implantação do 5S num posto:
   Itens (fora de ordem): Criar padrão visual e rotina · Definir lugar e identificação de cada item · Etiquetar e separar itens desnecessários · Fotografar o antes · Limpar e inspecionar · Verificar e manter

#### 📝 Resumo (🔧 Médio)

Trabalho padronizado tem três elementos: **takt time**, **sequência de trabalho** e **estoque padrão em processo**. “Sem padrão não há melhoria”: o padrão é a base para medir o efeito de uma mudança. O 5S prepara o terreno para enxergar anormalidades.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Explicar por que o 5S falha quando vira campanha
- Avaliar auditorias de 5S e seus riscos
- Relacionar padrão, kaizen e estabilidade

**⚖️ Limitações e trade-offs — 5S como campanha**

Mutirões antes da visita da diretoria deixam o setor bonito por semanas e depois tudo volta. Causas: padrões inexistentes ou complexos, nenhuma rotina curta diária, liderança que não verifica, 5S desconectado dos problemas reais do setor. Sinal de 5S sustentado: **anormalidades aparecem e são tratadas**.

**🔴 Conceito-chave — Auditoria de 5S**

Útil para acompanhar, mas vira fim em si mesma quando a nota importa mais que o resultado. Boas práticas: poucos itens, fotos do padrão, feita pelas próprias equipes em rodízio, ligada a ações. Evite rankings punitivos, que estimulam “maquiar” o setor.

**🔴 Conceito-chave — Padrão e ergonomia**

A sequência padronizada deve considerar **ergonomia** (NR-17, Módulo 10): alcance, postura, repetitividade. Um padrão que exige ritmo acima do takt, ou que ignora pausas, não é sustentável.

#### ✍️ Exercícios

**3.D1** Qual o melhor sinal de que o 5S está sustentado?
   a) Nota alta na auditoria anual
   b) Setor pintado recentemente
   c) Anormalidades aparecem de relance e são tratadas no dia a dia
   d) Muitas placas de 5S nas paredes

**3.D2** *A empresa criou um ranking mensal de 5S com punição ao pior setor. As notas subiram, mas os problemas de produção continuam.* Qual a análise?
   a) O ranking funciona: as notas subiram
   b) A auditoria virou fim em si mesma e estimula maquiar; ligar o 5S aos problemas reais, auditorias pelas próprias equipes e verificação no gemba
   c) Aumentar a punição
   d) Acabar com o 5S

**3.D3** Explique a relação entre padrão e kaizen e por que “padrão não é engessamento”.

#### 📝 Resumo (🧠 Difícil)

5S que vira **campanha** (mutirão antes da auditoria) regride. Sustentar exige o 4º e o 5º S: padrões simples, rotina curta diária, liderança que verifica no gemba. Padrão não é engessamento: é o **ponto de partida** do kaizen, revisto sempre que se encontra um jeito melhor.

---

## 4. 🔁 Just in time, produção puxada e kanban

**🧩 Pré-requisitos:** MRP (Módulo 3); Sequenciamento e lei de Little (Módulo 3).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar just in time
- Diferenciar produção empurrada e puxada
- Explicar o que é um kanban

**🏭 Por que isso importa**

Empurrar pelo plano, quando a previsão erra, gera estoque do que não vende e falta do que vende. Puxar liga a produção ao **consumo real**, com estoques pequenos e controlados.

**🔴 Conceito-chave — Empurrar × puxar**

**Empurrar (push):** cada processo produz conforme o programa e “empurra” para o seguinte, precise ele ou não.  
**Puxar (pull):** o processo seguinte **retira** o que precisa, e o anterior **produz só para repor** o que foi retirado.  
Inspiração conhecida: os supermercados americanos, que repõem a prateleira conforme o cliente retira.

**🔴 Conceito-chave — Kanban**

“Kanban” significa **cartão/sinal** em japonês. Tipos principais:  
• **Kanban de produção:** autoriza o processo a produzir uma quantidade.  
• **Kanban de retirada (movimentação):** autoriza buscar peças no processo anterior.  
O sinal pode ser cartão, caixa vazia, espaço vazio no chão ou sinal eletrônico.

**😂 Exemplo do dia a dia — A garrafa de água**

Você tem duas garrafas na geladeira. Bebeu uma? Enche e põe para gelar. A garrafa vazia é o **kanban**: você só enche quando alguém consome. Ninguém enche 20 garrafas “por previsão”.

**🔊 Para memorizar**

**“Consumiu, puxou; sem cartão, sem produção.”**

**🟡 Atenção — Erro comum**

Achar que JIT significa **estoque zero**. JIT usa estoques **pequenos, dimensionados e controlados** (supermercados); o objetivo é reduzir aos poucos, conforme os problemas são resolvidos.

#### ✍️ Exercícios

**4.F1** O que caracteriza a produção puxada?
   a) Produzir o máximo possível para aproveitar a máquina
   b) Produzir só para repor o que o processo seguinte consumiu
   c) Produzir conforme a previsão, sem olhar o consumo
   d) Produzir só no fim do mês

**4.F2** Just in time significa operar sempre com estoque zero.
   ( ) Verdadeiro  ( ) Falso

**4.F3** O cartão ou sinal que autoriza produzir ou movimentar peças é o ___.
   Opções: kanban · MRP · Gantt · andon

**4.F4** Ligue o tipo de kanban à função:
   1. Kanban de produção
   2. Kanban de retirada
   Ligar com: Autoriza buscar peças no processo anterior · Autoriza produzir

#### 📝 Resumo (🌱 Fácil)

**Just in time (JIT):** o item certo, na quantidade certa, no momento certo. **Empurrar:** produz pelo plano, mesmo que o seguinte não precise. **Puxar:** produz só para repor o que o processo seguinte consumiu. **Kanban:** cartão (ou sinal) que autoriza produzir ou movimentar.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular o número de kanbans
- Citar as regras do kanban
- Explicar o supermercado e o fluxo contínuo

**🔵 Fórmula — Número de kanbans**

N = D × L × (1 + α) ÷ C   (arredondar para cima)

| Símbolo | Significado |
|---|---|
| D | Demanda por unidade de tempo |
| L | Lead time de reposição (produzir + transportar + esperar) |
| α | Margem de segurança (ex.: 0,1 = 10%) |
| C | Peças por contêiner (por kanban) |

**🧮 Exemplo resolvido — Kanbans de berços plásticos**

A linha consome 400 berços/hora. A reposição leva 0,5 h. Margem de 10%. Cada caixa tem 20 berços.  
N = 400 × 0,5 × 1,1 ÷ 20 = 220 ÷ 20 = **11 kanbans**.  
Estoque máximo no circuito ≈ 11 × 20 = 220 berços.

**🔴 Conceito-chave — As regras do kanban (Ohno)**

1. O processo **seguinte retira** do anterior.  
2. O processo anterior **produz só a quantidade retirada**, na sequência retirada.  
3. **Nada** é produzido ou transportado sem kanban.  
4. O kanban **acompanha** sempre as peças.  
5. **Defeito não segue** para o processo seguinte.  
6. **Reduzir** o número de kanbans aos poucos (expor problemas).

**🔴 Conceito-chave — Fluxo contínuo e supermercado**

**Fluxo contínuo (peça a peça):** quando os processos podem ser ligados, a peça passa direto de um a outro, sem estoque — o ideal.  
**Supermercado:** quando não dá para ligar (tempos muito diferentes, setup longo, processo compartilhado), cria-se um estoque controlado, reposto por kanban.  
**FIFO lane (pista PEPS):** fila com limite máximo entre processos; cheia, o anterior para.

**🏭 Na empresa**

A Doces Serra instalou um supermercado de caixas vazias ao lado da embalagem, com 6 kanbans. Quando uma pilha acaba, o cartão vai para o quadro da logística interna, que repõe em até 30 minutos. Acabaram as idas do operador ao almoxarifado.

#### ✍️ Exercícios

**4.M1** Demanda = 400 peças/h; lead time de reposição = 0,5 h; margem = 10%; 20 peças por caixa. Quantos kanbans?

**4.M2** Demanda = 300 peças/h; reposição = 2 h; margem = 0; 50 peças por contêiner. Quantos kanbans?

**4.M3** Qual destas é uma regra do kanban?
   a) O processo anterior produz o máximo que puder
   b) Peças defeituosas podem seguir e ser separadas depois
   c) Nada é produzido ou transportado sem kanban
   d) O número de kanbans deve aumentar sempre

**4.M4** *O recheio tem setup de 2 horas e abastece três linhas de banho diferentes.* Qual ligação é mais adequada entre recheio e banho?
   a) Fluxo contínuo peça a peça
   b) Supermercado reposto por kanban
   c) Empurrar pelo plano semanal sem limite
   d) Nenhuma: estocar tudo no armazém

**4.M5** Numa FIFO lane, quando a fila atinge o limite, o processo anterior deve parar de produzir.
   ( ) Verdadeiro  ( ) Falso

**4.M6** Demanda = 520 peças/h; lead time de reposição = 0,5 h; margem = 10%; 50 peças por contêiner. Quantos kanbans? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Número de kanbans: **N = D × L × (1 + α) ÷ C** (demanda × lead time de reposição × margem ÷ capacidade do contêiner), arredondando para cima. Regras de Ohno: o processo seguinte retira; o anterior produz só o retirado; nada sem kanban; kanban acompanha as peças; defeito não segue; reduzir kanbans aos poucos.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Avaliar quando puxar e quando empurrar
- Relacionar kanban, WIP e lei de Little
- Comparar kanban, CONWIP e MRP

**🔴 Conceito-chave — Kanban limita o WIP**

O número de kanbans é um **teto de estoque em processo**. Pela lei de Little (Módulo 3), **lead time = WIP ÷ taxa**: limitando o WIP com a mesma taxa, limita-se o lead time. Reduzir 1 kanban de cada vez mostra qual problema impede operar com menos.

**🔴 Conceito-chave — Quando puxar, quando empurrar**

| Situação | Tende a funcionar melhor |  
|---|---|  
| Demanda estável, itens repetitivos | Kanban (puxar) |  
| Alta variedade, baixo volume, sob encomenda | MRP/programação, CONWIP |  
| Itens com lead time longo de compra | MRP para planejar, kanban para executar |  
| Demanda muito irregular | Nivelar (heijunka) antes de puxar |  
**CONWIP:** limita o WIP total de uma linha (um cartão por ordem em qualquer ponto), mais simples para alta variedade.

**⚖️ Limitações e trade-offs — Limites do kanban**

O kanban **reage** ao consumo: não antecipa picos (Páscoa, Natal). Para picos previsíveis, é preciso recalcular o número de kanbans ou planejar estoque antecipado (Módulo 3). Com setups longos, o kanban força lotes grandes — por isso SMED (lição 6) é pré-requisito prático.

**📚 Para aprofundar**

• MONDEN, Y. *Sistema Toyota de Produção: uma abordagem integrada ao just-in-time*. Bookman.  
• HOPP, W. J.; SPEARMAN, M. L. *Factory Physics*. Waveland (push × pull e CONWIP).  
• SPEARMAN, M. L.; WOODRUFF, D. L.; HOPP, W. J. CONWIP: a pull alternative to kanban. *International Journal of Production Research*, v. 28, n. 5, 1990.

#### ✍️ Exercícios

**4.D1** Uma linha tem 240 peças em processo (limitadas por kanban) e produz 60 peças/h. Qual o lead time médio (h)?

**4.D2** *Uma fábrica de máquinas especiais, com cada pedido diferente e baixo volume, quer implantar kanban para todos os componentes.* Qual a melhor recomendação?
   a) Kanban para tudo
   b) Usar MRP/programação por pedido (ou CONWIP) e kanban só para itens comuns e repetitivos (parafusos, consumíveis)
   c) Nenhum sistema de controle
   d) Estoque de todos os componentes possíveis

**4.D3** O kanban, sozinho, antecipa picos sazonais previsíveis como a Páscoa.
   ( ) Verdadeiro  ( ) Falso

**4.D4** Explique como MRP e kanban podem conviver numa mesma empresa.

**4.D5** Os kanbans limitam o estoque em processo a 320 peças e a linha produz 60 peças/h. Qual o lead time médio (h)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🧠 Difícil)

Kanban **limita o WIP** e, pela lei de Little, o lead time. Funciona melhor com demanda estável, poucos itens e setups curtos; com demanda irregular e alta variedade, MRP, CONWIP ou sistemas híbridos são mais adequados. É comum: MRP para planejar e comprar a longo prazo, kanban para executar no chão de fábrica.

---

## 5. 🗺️ Mapeamento do fluxo de valor (VSM)

**🧩 Pré-requisitos:** Takt time (Módulo 4); Kanban.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar para que serve o VSM
- Reconhecer os principais elementos do mapa
- Calcular dias de estoque

**🏭 Por que isso importa**

Melhorar um processo isolado pode não mudar nada para o cliente se o produto passa 10 dias parado em estoques. O VSM mostra o **sistema inteiro** e onde está o tempo perdido.

**🔴 Conceito-chave — O que o mapa mostra**

• **Fluxo de material** (embaixo): processos, estoques (triângulos) entre eles, transporte.  
• **Fluxo de informação** (em cima): pedidos do cliente, previsão, programação, kanbans.  
• **Caixas de dados** de cada processo: tempo de ciclo, setup, disponibilidade, pessoas.  
• **Linha do tempo** (embaixo de tudo): dias de estoque × tempo de processo.

**🔵 Fórmula — Dias de estoque**

Dias de estoque = quantidade em estoque ÷ demanda diária do cliente

| Símbolo | Significado |
|---|---|
| Demanda diária | Consumo médio do cliente por dia |

**🧮 Exemplo resolvido — Estoque em dias**

Entre o banho e a embalagem há 1.200 caixas de bombons; o cliente consome 600 caixas por dia.  
Dias de estoque = 1.200 ÷ 600 = **2 dias**.

**😂 Exemplo do dia a dia — O VSM da pizza**

Você pede a pizza às 20h e ela chega às 21h. Mas o forno assa em 8 minutos! O resto é fila de pedidos, massa esperando, pizza esperando o motoboy, trânsito. O VSM mostra que **o problema não está no forno**.

**🔊 Para memorizar**

**“O produto passa mais tempo parado do que sendo feito.”** A linha do tempo do VSM prova isso quase sempre.

#### ✍️ Exercícios

**5.F1** Há 1.800 caixas em estoque e o cliente consome 600 por dia. Quantos dias de estoque?

**5.F2** Qual a principal vantagem do VSM em relação a olhar um processo isolado?
   a) Mostra o sistema inteiro, do fornecedor ao cliente, incluindo o tempo parado
   b) Calcula o salário dos operadores
   c) Substitui o MRP
   d) Mostra só as máquinas

**5.F3** No VSM, o fluxo de informação costuma ser desenhado na parte de cima e o de material na parte de baixo.
   ( ) Verdadeiro  ( ) Falso

**5.F4** No VSM, os estoques entre processos são representados por ___.
   Opções: triângulos · círculos verdes · estrelas · setas duplas

**5.F5** Há 1.500 caixas em estoque e o cliente consome 500 por dia. Quantos dias de estoque? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

O **VSM** desenha, numa folha, o caminho do produto e da informação, do fornecedor ao cliente. Mostra processos, estoques entre eles, tempos e a **linha do tempo** com o lead time. **Dias de estoque = estoque ÷ demanda diária**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular o lead time e o tempo de agregação de valor
- Calcular a eficiência do ciclo do processo
- Seguir os passos para desenhar o estado atual

**🧠 Mapa — VSM atual (simplificado)**

```
Fornecedor ─▶ ▲ 5 d
              │
        [Recheio]  TC 20 s
              ▲ 2 d
        [ Banho ]  TC 40 s
              ▲ 1,5 d
        [Embalagem] TC 35 s
              ▲ 3 d
              ▼
           Cliente (600 caixas/dia)

Linha do tempo:
 5 d | 2 d | 1,5 d | 3 d  → 11,5 dias
 20 s  40 s   35 s      → 95 s
```

**🔵 Fórmula — Lead time e eficiência do ciclo**

Lead time ≈ Σ dias de estoque + Σ tempos de processo  
PCE = tempo de agregação de valor ÷ lead time

| Símbolo | Significado |
|---|---|
| PCE | Eficiência do ciclo do processo (process cycle efficiency) |
| TAV | Soma dos tempos que transformam o produto |

**🧮 Exemplo resolvido — Calculando a PCE**

Lead time ≈ 5 + 2 + 1,5 + 3 = **11,5 dias** (os 95 s de processo são desprezíveis nessa escala).  
Convenção: 1 dia = 1 turno de 7,5 h = 27.000 s.  
Lead time = 11,5 × 27.000 = 310.500 s.  
PCE = 95 ÷ 310.500 ≈ **0,03%**.  
Leitura: de cada 10.000 segundos que a caixa passa na empresa, só 3 agregam valor.

**🛠️ Passo a passo — Desenhando o estado atual**

1. Escolher **uma família de produtos** (mesmo roteiro).  
2. Começar pelo **cliente**: demanda, takt.  
3. Andar o fluxo **de trás para a frente**, no gemba, anotando processos e estoques (contar, não perguntar).  
4. Preencher as caixas de dados.  
5. Desenhar o fluxo de informação.  
6. Desenhar a linha do tempo e calcular lead time e TAV.  
Use lápis: o mapa é feito à mão, na hora.

**🟡 Atenção — Convenção de tempo**

No VSM, os estoques entram em **dias** e o processo em **segundos**. Para calcular a PCE, converta para a mesma unidade e **declare a convenção** (dia de calendário ou dia útil de trabalho). Com dias de calendário, a PCE fica ainda menor.

#### ✍️ Exercícios

**5.M1** Estoques do VSM: 5, 2, 1,5 e 3 dias. Tempos de processo desprezíveis nessa escala. Qual o lead time (dias)?

**5.M2** Tempos de processo: recheio 20 s, banho 40 s, embalagem 35 s. Qual o tempo de agregação de valor (s)?

**5.M3** TAV = 120 s; lead time = 2 dias de 8 h. Qual a PCE (%)? (3 casas)

**5.M4** Ordene os passos para desenhar o VSM atual:
   Itens (fora de ordem): Andar o fluxo no gemba, de trás para a frente · Desenhar a linha do tempo e calcular lead time · Desenhar o fluxo de informação · Escolher a família de produtos · Levantar a demanda do cliente e o takt · Preencher as caixas de dados

**5.M5** O VSM do estado atual deve ser desenhado na sala de reunião a partir dos dados do ERP.
   ( ) Verdadeiro  ( ) Falso

**5.M6** Estoques ao longo do VSM (em dias): 2,5 · 2 · 4,5 · 3,5. Desprezando os tempos de processo, qual o lead time (dias)? 🎲 *(números sorteados; no app mudam a cada vez)*

**5.M7** Tempo de agregação de valor = 260 s; lead time = 1 dia(s), com 8 h de trabalho por dia. Qual a PCE (%)? (3 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

**Lead time** ≈ soma dos dias de estoque + tempos de processo. **Tempo de agregação de valor (TAV)** = soma dos tempos que transformam o produto. **Eficiência do ciclo (PCE) = TAV ÷ lead time** — costuma ser muito menor que 1%. Desenhe o estado atual **no gemba**, andando o fluxo.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Propor o estado futuro com base nas perguntas-guia
- Transformar o estado futuro em plano de ação
- Reconhecer as limitações do VSM

**🔴 Conceito-chave — Perguntas do estado futuro**

Rother e Shook (*Aprendendo a Enxergar*):  
1. Qual o **takt**?  
2. Produzir para um **supermercado** de produtos acabados ou direto para a expedição?  
3. Onde usar **fluxo contínuo**?  
4. Onde usar **supermercados** para puxar?  
5. Qual o **processo puxador** (o único que recebe a programação)?  
6. Como **nivelar o mix** nesse processo?  
7. Qual o **incremento de trabalho** liberado (pitch)?  
8. Que **melhorias** (SMED, TPM, 5S) são necessárias para o estado futuro funcionar?

**🧮 Exemplo resolvido — Estado futuro da Doces Serra**

• Banho + embalagem em **fluxo contínuo** (FIFO lane de 30 min) → elimina 1,5 dia.  
• **Supermercado** de recheios (0,5 dia), reposto por kanban → elimina 1,5 dia.  
• Embalagem como **processo puxador**, com heijunka.  
• Estoque de produto acabado de 3 para 1 dia com nivelamento.  
• Matéria-prima de 5 para 3 dias, com entregas mais frequentes.  
Lead time ≈ 3 + 0,5 + 1 ≈ **4,5 dias** (−61%).

**⚖️ Limitações e trade-offs — Limitações do VSM**

• É uma **foto** de um dia: não mostra a variabilidade (use dados de várias semanas).  
• Representa mal ambientes de **alta variedade** com roteiros diferentes (job shop).  
• Não mostra filas causadas por variabilidade nem custos; simulação (Módulo 9) complementa.  
• Mapa sem plano de ação e sem dono é só um desenho bonito.

**📚 Para aprofundar**

• ROTHER, M.; SHOOK, J. *Aprendendo a Enxergar: mapeando o fluxo de valor para agregar valor e eliminar o desperdício*. Lean Institute Brasil.  
• ROTHER, M.; HARRIS, R. *Criando Fluxo Contínuo*. Lean Institute Brasil.

#### ✍️ Exercícios

**5.D1** No estado futuro, o “processo puxador” é:
   a) O processo mais lento
   b) O único ponto que recebe a programação do cliente; os anteriores são puxados por kanban/supermercado
   c) O almoxarifado
   d) O fornecedor

**5.D2** *A equipe desenhou um VSM excelente do estado futuro, apresentou à diretoria e nada mudou em 6 meses.* O que provavelmente faltou?
   a) Um software de VSM
   b) Plano de ação com loops, responsáveis, prazos e acompanhamento no gemba
   c) Mais cores no mapa
   d) Um mapa de todas as famílias ao mesmo tempo

**5.D3** O VSM mostra bem a variabilidade dos tempos e das filas, dispensando simulação.
   ( ) Verdadeiro  ( ) Falso

**5.D4** A partir do VSM atual da Doces Serra (lead time de 11,5 dias), proponha um estado futuro e estime o novo lead time.

#### 📝 Resumo (🧠 Difícil)

O estado futuro responde às perguntas-guia de Rother e Shook: takt, supermercado ou fluxo contínuo, processo puxador, nivelamento, incremento de liberação e melhorias necessárias. Vira **plano de ação** com loops e prazos. Limites: é uma foto de uma família de produtos, representa mal alta variedade e não mostra variabilidade.

---

## 6. ⚡ SMED e heijunka: troca rápida e nivelamento

**🧩 Pré-requisitos:** Kanban; Capacidade (Módulo 3).

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o que é setup e por que reduzi-lo
- Diferenciar setup interno e externo
- Explicar o que é heijunka

**🏭 Por que isso importa**

Com setup de 2 horas, ninguém quer trocar de produto: fazem-se lotes enormes, o estoque cresce e o cliente espera pelo sabor que não está no lote da vez. Setup curto é o que torna possível produzir **pouco de cada, muitas vezes**.

**🔴 Conceito-chave — Setup interno × externo**

**Setup:** da última peça boa do produto anterior até a primeira peça boa do seguinte (inclui ajustes e testes).  
**Interno:** só pode ser feito com a máquina **parada** (trocar o molde).  
**Externo:** pode ser feito com a máquina **rodando** (buscar o molde, pré-aquecer, separar ferramentas).

**🔴 Conceito-chave — SMED**

**Single-Minute Exchange of Die** (troca de ferramenta em um dígito de minutos, isto é, menos de 10 min). Desenvolvido por **Shigeo Shingo** a partir dos anos 1950, publicado em livro em 1985. O nome é uma meta: nem todo setup chega a menos de 10 min, mas quase todos caem muito.

**😂 Exemplo do dia a dia — O pit stop**

Na Fórmula 1, a troca de pneus leva poucos segundos porque **tudo é preparado antes** (pneus aquecidos ao lado, cada pessoa com uma função, pistola de uma porca só). Isso é SMED: o que dá para fazer com o carro andando, faz-se antes.

**🔴 Conceito-chave — Heijunka**

**Nivelamento** do volume e do mix da produção ao longo do tempo. Em vez de produzir 200 de A na segunda e 100 de B na terça, produz-se todo dia um pouco de A, de B e de C, na proporção da demanda.

**🔊 Para memorizar**

**“Separa, Converte, Racionaliza”** — as três etapas do SMED.

#### ✍️ Exercícios

**6.F1** Classifique a atividade de setup:
   1. Trocar o molde da máquina
   2. Buscar o molde no almoxarifado
   3. Pré-aquecer o próximo molde
   4. Soltar os parafusos de fixação
   Ligar com: Externo · Externo · Interno · Interno

**6.F2** O que significa a meta “single-minute” no SMED?
   a) Setup de exatamente 1 minuto
   b) Setup com um dígito de minutos (menos de 10 min)
   c) Uma troca por minuto
   d) Um operador por minuto

**6.F3** Heijunka é produzir todo o volume de um produto de uma vez, para depois passar ao próximo.
   ( ) Verdadeiro  ( ) Falso

**6.F4** O SMED foi desenvolvido por ___.
   Opções: Shigeo Shingo · Henry Ford · Frederick Taylor · Walter Shewhart

#### 📝 Resumo (🌱 Fácil)

**Setup** é o tempo entre a última peça boa do produto A e a primeira peça boa do produto B. **SMED** (Shingo) reduz o setup. **Setup interno:** só com a máquina parada. **Setup externo:** pode ser feito com a máquina rodando. **Heijunka:** nivelar o volume e o **mix** da produção.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Aplicar as etapas do SMED
- Calcular o ganho de capacidade de um SMED
- Montar uma sequência nivelada de mix

**🛠️ Passo a passo — As etapas do SMED**

0. **Filmar e registrar** o setup atual (tudo misturado).  
1. **Separar** o que é interno e o que é externo (checklist, preparar antes).  
2. **Converter** interno em externo (pré-aquecer o molde fora, pré-montar, padronizar alturas).  
3. **Racionalizar** o interno e o externo: fixações rápidas (¼ de volta, grampos), eliminar ajustes (batentes, gabaritos), operações em paralelo (duas pessoas).  
4. **Padronizar** o novo procedimento.

**🧮 Exemplo resolvido — SMED na banhadeira**

Setup atual: **60 min**, dos quais 25 min são externos feitos com a máquina parada (buscar bicos, separar chocolate, esperar a temperatura).  
Etapa 1 (separar): → **35 min**.  
Etapa 2 e 3 (pré-aquecer chocolate em tacho auxiliar, bicos com engate rápido): → **12 min**.  
Com 4 trocas por dia: 4 × (60 − 12) = **192 min/dia** liberados.

**🧮 Exemplo resolvido — Sequência nivelada**

Demanda semanal: A 200, B 100, C 100 (proporção 2 : 1 : 1).  
Sem nivelar: seg–ter só A, qua B, qui C.  
Nivelado (lotes de 50): **A B A C | A B A C | …** todos os dias.  
O cliente de C não espera até quinta, e as etapas anteriores recebem uma carga regular.

**🟡 Atenção — Erro comum**

Nivelar sem reduzir o setup: mais trocas com setup longo **derrubam a capacidade**. SMED vem antes (ou junto) do heijunka.

#### ✍️ Exercícios

**6.M1** Ordene as etapas do SMED:
   Itens (fora de ordem): Converter interno em externo · Padronizar o novo procedimento · Racionalizar todas as atividades · Registrar o setup atual · Separar interno e externo

**6.M2** O setup caiu de 60 para 12 minutos e há 4 trocas por dia. Quantos minutos por dia foram liberados?

**6.M3** Demanda semanal: A 300, B 150, C 150. Qual sequência diária é nivelada?
   a) AAAAAA BBB CCC na semana
   b) A B A C repetido ao longo do dia
   c) Só A na segunda, só B na quarta
   d) C C C A A A

**6.M4** *A equipe quer nivelar o mix da embalagem trocando de produto 8 vezes por dia, mas cada troca leva 45 minutos.* Qual o problema?
   a) Nenhum
   b) Com setup longo, 8 trocas consomem 6 h por dia; fazer SMED antes ou junto do nivelamento
   c) Deveria trocar 20 vezes
   d) Heijunka não se aplica a embalagem

**6.M5** Converter setup interno em externo reduz o tempo de máquina parada mesmo sem acelerar as atividades.
   ( ) Verdadeiro  ( ) Falso

**6.M6** O setup caiu de 50 para 20 min e há 8 trocas por dia. Quantos minutos por dia foram liberados? 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Etapas do SMED: (1) **separar** interno e externo; (2) **converter** interno em externo; (3) **racionalizar** tudo (fixações rápidas, eliminar ajustes, trabalho em paralelo). Heijunka: em vez de “toda a semana A, depois B”, produzir **A B A C A B…** em pequenos lotes.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Relacionar setup, tamanho de lote e EPEI
- Calcular o pitch e usar a caixa heijunka
- Avaliar quando nivelar e seus custos

**🔵 Fórmula — EPEI**

Nº de setups possíveis por dia = tempo disponível para setups ÷ tempo de setup  
EPEI (dias) = nº de produtos ÷ setups por dia

| Símbolo | Significado |
|---|---|
| EPEI | Every part every interval: intervalo para produzir todos os produtos uma vez |

**🧮 Exemplo resolvido — EPEI antes e depois do SMED**

Há 60 min/dia disponíveis para setups e 6 produtos.  
Setup de 30 min → 2 setups/dia → EPEI = 6 ÷ 2 = **3 dias** (cada produto a cada 3 dias; estoque de ~3 dias de cada).  
Setup de 10 min → 6 setups/dia → EPEI = **1 dia**.

**🔵 Fórmula — Pitch**

Pitch = takt time × quantidade por embalagem

| Símbolo | Significado |
|---|---|
| Pitch | Intervalo de liberação de trabalho ao processo puxador |

**🧮 Exemplo resolvido — Caixa heijunka**

Takt = 45 s; embalagem de expedição = 20 caixas → pitch = 45 × 20 = 900 s = **15 min**.  
A **caixa heijunka** tem uma coluna para cada intervalo de 15 min e uma linha por produto; o kanban de cada intervalo é retirado na hora e libera exatamente um pitch de trabalho. Assim a supervisão vê, a cada 15 min, se a linha está no ritmo.

**⚖️ Limitações e trade-offs — Custos do nivelamento**

Nivelar pede **mais setups** e algum **estoque de produto acabado** para absorver a diferença entre pedidos reais e a sequência nivelada. Vale a pena quando a variação gera mura/muri (hora extra, quebras) nos processos anteriores e nos fornecedores. Com demanda muito instável, nivele por período (semana) em vez de por hora.

**📚 Para aprofundar**

• SHINGO, S. *Sistema de Troca Rápida de Ferramenta: uma revolução nos sistemas produtivos*. Bookman.  
• SMALLEY, A. *Criando o Sistema Puxado Nivelado*. Lean Institute Brasil.

#### ✍️ Exercícios

**6.D1** Há 90 min/dia para setups, 9 produtos e setup de 15 min. Qual o EPEI (dias)?

**6.D2** Takt = 40 s; embalagem de expedição com 30 unidades. Qual o pitch (min)?

**6.D3** *Depois do SMED, o setup da banhadeira caiu de 30 para 10 minutos. O gerente quer usar todo o ganho para produzir mais do mesmo lote grande.* Qual alternativa aproveita melhor o ganho na lógica Lean?
   a) Manter lotes grandes e produzir mais estoque
   b) Usar parte do ganho para trocar mais vezes (lotes menores, EPEI menor) e reduzir estoque e lead time, e o resto como capacidade se a demanda pedir
   c) Demitir o preparador
   d) Voltar ao setup antigo

**6.D4** Explique a relação entre tempo de setup, tamanho de lote, estoque e lead time.

**6.D5** Há 60 min por dia para setups, 9 produtos e setup de 10 min. Qual o EPEI (dias)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

**6.D6** Takt = 40 s; embalagem de expedição com 50 unidades. Qual o pitch (min)? (2 casas) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🧠 Difícil)

Setup curto permite **lotes menores** e trocas mais frequentes: **EPEI** (every part every interval) = com que frequência cada produto pode ser feito. **Pitch** = takt × quantidade da embalagem: intervalo de liberação da caixa heijunka. Nivelar tem custo (mais setups, estoque de produto acabado); vale quando a variação causa mura/muri.

---

## 7. 🛡️ Jidoka, poka-yoke, TPM e OEE

**🧩 Pré-requisitos:** Indicadores e OEE (Módulo 14); 5S.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o jidoka
- Dar exemplos de poka-yoke
- Calcular o OEE a partir de D, P e Q

**🏭 Por que isso importa**

Um defeito descoberto no fim da linha já contaminou o lote inteiro. Uma máquina que quebra para toda a linha puxada (não há estoque para amortecer). Com estoques baixos, **qualidade na fonte e máquina confiável** deixam de ser opcionais.

**🔴 Conceito-chave — Jidoka**

“Automação com toque humano”. A ideia vem do tear automático de **Sakichi Toyoda**, que parava sozinho quando um fio se rompia. Princípio: **detectar a anormalidade → parar → corrigir a causa → melhorar**. Na linha, o operador pode **puxar a corda do andon** para parar ou pedir ajuda.

**🔴 Conceito-chave — Poka-yoke**

Dispositivo ou método **à prova de erro**, popularizado por **Shigeo Shingo**. Exemplos:  
• Pino-guia que só deixa a peça entrar na posição certa.  
• Tomada USB-C que encaixa dos dois lados (elimina o erro).  
• Balança que bloqueia a caixa com peso fora da faixa (falta bombom).  
• Micro-ondas que não liga com a porta aberta.

**😂 Exemplo do dia a dia — O cartão do metrô**

A catraca só libera com o cartão válido: é um poka-yoke. O pen drive antigo, que entrava de um lado só (depois de três tentativas), era um poka-yoke que ainda deixava tentar errado.

**🔵 Fórmula — OEE**

OEE = D × P × Q  
D = tempo operando ÷ tempo planejado  
P = (produção × ciclo ideal) ÷ tempo operando  
Q = peças boas ÷ peças produzidas

| Símbolo | Significado |
|---|---|
| D | Disponibilidade |
| P | Performance (desempenho) |
| Q | Qualidade |

**🔊 Para memorizar**

**“Disponível, Performando e com Qualidade”** — OEE = D × P × Q. E jidoka: **“viu problema, para a linha”**.

#### ✍️ Exercícios

**7.F1** Qual a ideia central do jidoka?
   a) Produzir o máximo sem parar
   b) Detectar a anormalidade, parar e corrigir a causa, para não produzir defeito em série
   c) Inspecionar tudo no final
   d) Automatizar todas as tarefas

**7.F2** Qual destes é um poka-yoke?
   a) Um cartaz pedindo atenção
   b) Um pino-guia que só deixa a peça encaixar na posição certa
   c) Uma reunião mensal de qualidade
   d) Aumentar a inspeção final

**7.F3** D = 90%, P = 80%, Q = 95%. Qual o OEE (%)?

**7.F4** No TPM, os operadores participam da manutenção do equipamento (limpeza, inspeção, lubrificação).
   ( ) Verdadeiro  ( ) Falso

**7.F5** Disponibilidade = 85%, performance = 88%, qualidade = 95%. Qual o OEE (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🌱 Fácil)

**Jidoka:** parar ao detectar uma anormalidade, para não produzir defeito em série. **Poka-yoke:** dispositivo à prova de erro (Shingo). **TPM:** manutenção produtiva total, com os operadores cuidando do equipamento. **OEE = disponibilidade × performance × qualidade**.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Diferenciar poka-yoke de controle e de advertência
- Calcular disponibilidade, performance e qualidade
- Citar as seis grandes perdas

**🧮 Exemplo resolvido — OEE da banhadeira**

Tempo planejado = 480 min; paradas não planejadas = 60 min → operando = 420 min.  
Ciclo ideal = 0,5 min/lote; produziu 700 lotes; 665 bons.  
D = 420 ÷ 480 = **87,5%** · P = 700 × 0,5 ÷ 420 = **83,3%** · Q = 665 ÷ 700 = **95%**  
OEE = 0,875 × 0,833 × 0,95 ≈ **69,3%** (confira: 665 × 0,5 ÷ 480 = 69,3%).

**🔴 Conceito-chave — Tipos de poka-yoke**

Pela **função**:  
• **Controle (bloqueio):** impede o erro ou para o processo (a peça não encaixa; a máquina não liga).  
• **Advertência:** avisa (luz, alarme), mas depende de alguém reagir.  
Pelo **método de detecção** (Shingo): **contato** (forma, dimensão), **valor fixo** (contar peças: sobrou parafuso = faltou apertar) e **etapa do movimento** (sequência obrigatória).  
Prefira o controle quando o erro for grave.

**🔴 Conceito-chave — As seis grandes perdas**

1. **Quebras** (falhas do equipamento)  
2. **Setup e ajustes**  
3. **Pequenas paradas** e ociosidade (travamentos curtos)  
4. **Velocidade reduzida**  
5. **Defeitos e retrabalho**  
6. **Perdas de partida** (refugo até estabilizar)

**🟢 Dica prática — Leia o OEE pela maior perda**

No exemplo, a menor parcela é a **performance (83,3%)**: investigar pequenas paradas e velocidade. Aumentar o OEE “em geral” não diz onde agir; a decomposição diz.

#### ✍️ Exercícios

**7.M1** Tempo planejado = 480 min; paradas não planejadas = 60 min; ciclo ideal = 0,5 min; produção = 700; boas = 665. Qual o OEE (%)?

**7.M2** Ligue o poka-yoke ao tipo:
   1. A peça não encaixa se estiver invertida
   2. Alarme sonoro quando falta etiqueta
   3. Contar parafusos: se sobrou, faltou apertar
   Ligar com: Advertência · Controle (bloqueio) · Método do valor fixo

**7.M3** Qual destas NÃO é uma das seis grandes perdas?
   a) Quebras
   b) Pequenas paradas
   c) Velocidade reduzida
   d) Férias coletivas planejadas

**7.M4** *OEE da envasadora: D = 92%, P = 71%, Q = 98%.* Onde concentrar a melhoria?
   a) Disponibilidade: quebras
   b) Performance: pequenas paradas e velocidade reduzida
   c) Qualidade: defeitos
   d) Em todos igualmente

**7.M5** Um poka-yoke de advertência é mais seguro que um de controle para erros graves.
   ( ) Verdadeiro  ( ) Falso

**7.M6** Tempo planejado = 420 min; paradas não planejadas = 75 min; ciclo ideal = 0,6 min; produção = 460; peças boas = 446. Qual o OEE (%)? (1 casa) 🎲 *(números sorteados; no app mudam a cada vez)*

#### 📝 Resumo (🔧 Médio)

Poka-yoke de **controle** impede o erro (a peça não encaixa errado); de **advertência** avisa (alarme). As **seis grandes perdas**: quebras, setup e ajustes, pequenas paradas, velocidade reduzida, defeitos e retrabalho, perdas de partida.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Relacionar as seis grandes perdas aos componentes do OEE
- Descrever os pilares do TPM
- Avaliar o uso do OEE como meta

**🔴 Conceito-chave — Perdas × componentes do OEE**

| Componente | Perdas |  
|---|---|  
| Disponibilidade | Quebras · setup e ajustes |  
| Performance | Pequenas paradas · velocidade reduzida |  
| Qualidade | Defeitos e retrabalho · perdas de partida |

**🔴 Conceito-chave — TPM e seus pilares**

**TPM (Total Productive Maintenance):** sistematizado no Japão por **Seiichi Nakajima** e pelo **JIPM** (anos 1970). Objetivo: zero quebra, zero defeito, zero acidente. Os 8 pilares do JIPM:  
1. **Manutenção autônoma** (operador limpa, inspeciona, lubrifica)  
2. **Manutenção planejada** (preventiva e preditiva)  
3. **Melhoria específica** (kaizen nas perdas)  
4. **Educação e treinamento**  
5. **Controle inicial** (projeto de novos equipamentos)  
6. **Manutenção da qualidade**  
7. **TPM administrativo** (áreas de apoio)  
8. **Segurança, saúde e meio ambiente**

**⚖️ Limitações e trade-offs — OEE como meta**

O valor de **85%** é frequentemente citado como “classe mundial” (atribuído à literatura de TPM), mas é uma referência genérica, não um padrão para todo setor. Como **meta isolada**, o OEE convida à manipulação: “tirar” paradas do tempo planejado, usar ciclo ideal folgado. Use a **mesma definição ao longo do tempo** e foque na decomposição das perdas.

**🏭 Na empresa — Caso: jidoka na embalagem**

A balança da embalagem bloqueia caixas com menos de 12 bombons (poka-yoke de controle). Três bloqueios seguidos acendem o andon e param a alimentação (jidoka). O líder vai ao posto, resolve a causa (bico da dosadora entupido) e registra no quadro. O problema, que antes aparecia como reclamação de cliente, passou a ser resolvido em minutos.

**📚 Para aprofundar**

• SHINGO, S. *Zero Quality Control: Source Inspection and the Poka-Yoke System*. Productivity Press.  
• NAKAJIMA, S. *Introdução ao TPM: Total Productive Maintenance*. IMC Internacional.  
• Japan Institute of Plant Maintenance (JIPM): materiais sobre os pilares do TPM.

#### ✍️ Exercícios

**7.D1** Ligue a perda ao componente do OEE que ela reduz:
   1. Quebras
   2. Setup e ajustes
   3. Pequenas paradas
   4. Perdas de partida
   Ligar com: Disponibilidade · Disponibilidade · Performance · Qualidade

**7.D2** Qual pilar do TPM trata do projeto de novos equipamentos para que já nasçam fáceis de operar e manter?
   a) Manutenção autônoma
   b) Controle inicial
   c) TPM administrativo
   d) Educação e treinamento

**7.D3** *A diretoria definiu meta de OEE de 85% para todas as máquinas. Em dois meses, o OEE subiu de 62% para 84% sem nenhuma melhoria visível na produção.* O que provavelmente aconteceu?
   a) Melhoria real
   b) Manipulação da base: paradas reclassificadas como planejadas, ciclo ideal folgado; auditar definições e focar nas perdas
   c) Erro da balança
   d) As máquinas ficaram mais rápidas sozinhas

**7.D4** Proponha um sistema de jidoka + poka-yoke para evitar caixas de bombom com falta de unidades.

#### 📝 Resumo (🧠 Difícil)

Quebras e setup reduzem a **disponibilidade**; pequenas paradas e velocidade, a **performance**; defeitos e partida, a **qualidade**. O TPM (JIPM) tem **8 pilares**, com a manutenção autônoma e a planejada no centro. OEE como meta isolada gera manipulação (tempo planejado “ajustado”); use-o para achar a maior perda.

---

## 8. 📈 Kaizen, PDCA e A3

**🧩 Pré-requisitos:** Jidoka e TPM.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Explicar o que é kaizen
- Descrever as etapas do PDCA
- Explicar o que é ir ao gemba

**🏭 Por que isso importa**

Ferramentas implantadas uma vez envelhecem. O que mantém uma operação melhorando por décadas é a **rotina de melhoria**: todos, todo dia, um pouco.

**🔴 Conceito-chave — Kaizen**

“Kai” = mudança; “zen” = para melhor. Melhoria **contínua e incremental**, feita por **todos**, com pouco ou nenhum investimento. O livro de Masaaki Imai (*Kaizen*, 1986) difundiu o termo no Ocidente.

**🔴 Conceito-chave — PDCA**

**P — Planejar:** entender o problema, a causa, definir meta e ação.  
**D — Fazer (Do):** executar a ação, de preferência em teste.  
**C — Checar:** medir se funcionou.  
**A — Agir:** padronizar se funcionou; se não, voltar ao P.  
Associado a Shewhart e difundido por Deming (que depois preferiu PDSA, com “Study”).

**🔴 Conceito-chave — Gemba**

“O lugar real”. Problemas se entendem **indo ver**: observar o processo, falar com quem faz, ver os dados na origem. Relatório e planilha não substituem o gemba.

**😂 Exemplo do dia a dia — PDCA do café**

P: o café está amargo; hipótese: água fervendo demais; meta: café bom amanhã. D: tirar a água antes de ferver. C: provar. A: ficou bom? Vira o jeito da casa. Ficou fraco? Nova hipótese (mais pó) e gira de novo.

**🔊 Para memorizar**

**“Planeja, Faz, Checa e Age — e gira de novo.”**

#### ✍️ Exercícios

**8.F1** Ordene o ciclo PDCA:
   Itens (fora de ordem): Agir · Checar · Fazer · Planejar

**8.F2** O que significa “ir ao gemba”?
   a) Ir a uma reunião na diretoria
   b) Ir ao lugar onde o trabalho acontece para ver o problema com os próprios olhos
   c) Ler o relatório mensal
   d) Enviar um e-mail à equipe

**8.F3** Kaizen depende principalmente de grandes investimentos em tecnologia.
   ( ) Verdadeiro  ( ) Falso

**8.F4** No PDCA, se a ação funcionou na etapa Checar, na etapa Agir ela deve ser ___.
   Opções: padronizada · esquecida · escondida · repetida sem medir

#### 📝 Resumo (🌱 Fácil)

**Kaizen:** melhoria contínua, em pequenos passos, com todos. **PDCA:** Planejar, Fazer, Checar, Agir. **Gemba:** o lugar onde o trabalho acontece — ir ver com os próprios olhos.

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Diferenciar kaizen contínuo e evento kaizen
- Estruturar um problema no formato A3
- Aplicar os 5 porquês com cuidado

**🔴 Conceito-chave — Kaizen diário × evento kaizen**

| | Kaizen diário | Evento kaizen |  
|---|---|---|  
| Duração | Contínuo | 3 a 5 dias |  
| Quem | Equipe do setor | Equipe multifuncional dedicada |  
| Escopo | Pequenas melhorias | Problema definido (ex.: setup da banhadeira) |  
| Risco | Falta de tempo protegido | Regredir depois do evento |

**🛠️ Passo a passo — O relatório A3**

Numa folha A3 (a lógica do PDCA):  
1. **Contexto:** por que o problema importa.  
2. **Situação atual:** dados e fatos do gemba.  
3. **Meta:** o que, quanto, até quando.  
4. **Análise de causa:** 5 porquês, Ishikawa.  
5. **Contramedidas:** ações ligadas às causas.  
6. **Plano:** quem, o quê, quando.  
7. **Acompanhamento:** resultados e padronização.

**🧮 Exemplo resolvido — 5 porquês**

Caixas com tampa torta.  
Por quê? A tampa não assenta.  
Por quê? O berço está 2 mm mais alto.  
Por quê? O novo fornecedor de berços mudou a espessura.  
Por quê? A especificação não tinha tolerância de altura.  
Por quê? A ficha técnica foi feita só com o fornecedor antigo.  
→ Contramedida: incluir tolerância na especificação e inspecionar o primeiro lote de novo fornecedor.

**🟡 Atenção — Cuidado com os 5 porquês**

“5” é indicativo. Os erros comuns: parar em “falha humana” (pergunte por que o processo permitiu o erro), seguir um só caminho quando há várias causas, e responder por opinião sem verificar no gemba.

#### ✍️ Exercícios

**8.M1** Ligue a etapa do A3 ao conteúdo:
   1. Situação atual
   2. Meta
   3. Análise de causa
   4. Contramedidas
   Ligar com: 5 porquês, Ishikawa · Ações ligadas às causas · Dados e fatos observados no gemba · O que, quanto e até quando

**8.M2** *Nos 5 porquês sobre um erro de etiqueta, a equipe parou em “o operador se distraiu”.* O que fazer?
   a) Advertir o operador
   b) Continuar perguntando por que o processo permitiu o erro (ex.: etiquetas parecidas, sem conferência automática) e buscar poka-yoke
   c) Encerrar a análise
   d) Contratar outro operador

**8.M3** Qual a principal diferença entre kaizen diário e evento kaizen?
   a) Não há diferença
   b) O diário é contínuo com a equipe do setor; o evento reúne uma equipe dedicada por alguns dias a um problema definido
   c) O evento é só para diretores
   d) O diário exige consultoria

**8.M4** Nos 5 porquês, é preciso perguntar exatamente cinco vezes.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🔧 Médio)

**Kaizen diário** (pequenas melhorias, ideias dos operadores) × **evento kaizen** (equipe dedicada por 3 a 5 dias a um problema). O **A3** resume um problema numa folha: contexto, situação atual, meta, análise de causa, contramedidas, plano, acompanhamento. **5 porquês**: pergunte “por quê?” até chegar a uma causa acionável.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Avaliar a sustentação de melhorias
- Explicar o papel da liderança no Lean
- Relacionar Lean e Seis Sigma

**🔴 Conceito-chave — Sustentando melhorias**

Melhorias regridem quando falta: **padrão** atualizado, **verificação** rotineira (quadro, auditoria de processo pela liderança), **dono** do indicador, e **tempo protegido** para melhoria. Uma prática comum é a gestão diária em camadas (reuniões curtas em cascata, do posto à diretoria).

**🔴 Conceito-chave — Liderança Lean**

O líder **vai ao gemba**, faz perguntas (“qual o problema? qual a causa? o que você vai testar?”) em vez de dar a resposta, e desenvolve a capacidade das pessoas de resolver problemas. Rother (*Toyota Kata*, 2009) descreve rotinas de melhoria e de coaching para isso.

**🔴 Conceito-chave — Lean e Seis Sigma**

**Lean:** fluxo, velocidade, desperdício; ferramentas visuais, simples, de chão de fábrica.  
**Seis Sigma:** variação e defeitos; estatística, projetos DMAIC (Módulo 5).  
**Lean Seis Sigma:** combina os dois — Lean para tornar o fluxo rápido e simples, Seis Sigma para problemas de variação que exigem análise estatística.

**📚 Para aprofundar**

• IMAI, M. *Kaizen: a estratégia para o sucesso competitivo*. IMAM.  
• SHOOK, J. *Gerenciando para o Aprendizado: usando o processo de gerenciamento A3*. Lean Institute Brasil.  
• ROTHER, M. *Toyota Kata*. Bookman.  
• DEMING, W. E. *Saia da Crise (Out of the Crisis)*. Futura.

#### ✍️ Exercícios

**8.D1** *Um evento kaizen reduziu o setup da banhadeira de 60 para 15 min. Seis meses depois, o setup voltou a 45 min.* Qual a causa mais provável e a correção?
   a) O SMED não funciona
   b) Faltaram padrão atualizado, verificação rotineira e dono; criar padrão visual, medir o setup em cada troca e revisar na gestão diária
   c) Os operadores são preguiçosos
   d) Precisa de outro evento a cada mês

**8.D2** Ligue a abordagem ao foco principal:
   1. Lean
   2. Seis Sigma
   3. Lean Seis Sigma
   Ligar com: Combinação dos dois · Fluxo e eliminação de desperdício · Redução de variação e defeitos com estatística

**8.D3** Na liderança Lean, o líder tende a fazer perguntas e desenvolver a capacidade da equipe de resolver problemas, em vez de dar todas as respostas.
   ( ) Verdadeiro  ( ) Falso

**8.D4** Monte um A3 resumido para o problema “3% das caixas de bombom são refeitas por tampa torta”.

#### 📝 Resumo (🧠 Difícil)

Melhorias regridem sem **padrão**, **verificação** e **dono**. A liderança Lean ensina a resolver problemas (pergunta mais do que manda), vai ao gemba e protege tempo para melhoria. Lean foca fluxo e desperdício; Seis Sigma foca variação e defeitos com estatística (Módulo 5); combinados, formam o **Lean Seis Sigma**.

---

## 9. 👾 👾 Chefão: a Doces Serra enxuta

**🧩 Pré-requisitos:** Todas as lições do Módulo 6.

### 🌱 Fácil — Fundamentos

**🎯 Ao final, você será capaz de:**
- Relacionar cada ferramenta Lean ao problema que ela resolve
- Identificar desperdícios num caso
- Conectar Lean a métodos (Módulo 4) e PCP (Módulo 3)

**🏭 Na empresa — O caso: um ano de transformação**

A Doces Serra quer reduzir o lead time e o estoque da linha de bombons antes do próximo Natal.  
• Demanda: 600 caixas/dia; turno de 7,5 h (27.000 s); takt = 45 s.  
• VSM atual: estoques de 5 · 2 · 1,5 · 3 dias; processos de 20 · 40 · 35 s.  
• Entre banho e embalagem: 1.200 caixas.  
• Berços: consumo de 400/h, reposição em 0,5 h, margem de 10%, 20 por caixa.  
• Banhadeira: setup de 60 min (4 trocas/dia); OEE com 480 min planejados, 60 min de paradas, ciclo ideal 0,5 min, 700 lotes, 665 bons.

**🔴 Conceito-chave — ✅ Checklist (Fácil)**

• 5 princípios e casa do TPS  
• TIM WOODS  
• 5S e gestão visual  
• Empurrar × puxar · kanban  
• VSM e dias de estoque  
• Setup interno × externo · heijunka  
• Jidoka, poka-yoke, OEE  
• Kaizen, PDCA, gemba

#### ✍️ Exercícios

**9.F1** Ligue o problema à ferramenta Lean mais direta:
   1. Operadores perdem tempo procurando ferramentas
   2. Troca de sabor leva 1 hora
   3. Caixas saem com bombom faltando
   4. Ninguém sabe onde o produto fica parado
   Ligar com: 5S · Poka-yoke · SMED · VSM

**9.F2** O takt de 45 s usado no Lean da Doces Serra veio de qual módulo?
   a) Módulo 4 — Engenharia de Métodos
   b) Módulo 13 — Estatística
   c) Módulo 2 — Projetos
   d) Módulo 14 — Dados

**9.F3** Há 1.200 caixas entre o banho e a embalagem e o cliente consome 600 por dia: são 2 dias de estoque.
   ( ) Verdadeiro  ( ) Falso

#### 📝 Resumo (🌱 Fácil)

Cada ferramenta resolve um problema: **5S** (bagunça, procura), **kanban** (excesso ou falta de estoque), **VSM** (visão do fluxo), **SMED** (setup longo), **heijunka** (picos de mix), **poka-yoke** (erro humano), **TPM/OEE** (máquina parando), **kaizen** (sustentar e continuar melhorando).

### 🔧 Médio — Aplicação

**🎯 Ao final, você será capaz de:**
- Calcular dias de estoque, PCE, kanbans, ganho de SMED e OEE no mesmo caso
- Escolher a ferramenta adequada para cada problema
- Interpretar os resultados

**🏭 Na empresa — O caso: um ano de transformação**

A Doces Serra quer reduzir o lead time e o estoque da linha de bombons antes do próximo Natal.  
• Demanda: 600 caixas/dia; turno de 7,5 h (27.000 s); takt = 45 s.  
• VSM atual: estoques de 5 · 2 · 1,5 · 3 dias; processos de 20 · 40 · 35 s.  
• Entre banho e embalagem: 1.200 caixas.  
• Berços: consumo de 400/h, reposição em 0,5 h, margem de 10%, 20 por caixa.  
• Banhadeira: setup de 60 min (4 trocas/dia); OEE com 480 min planejados, 60 min de paradas, ciclo ideal 0,5 min, 700 lotes, 665 bons.

**🔴 Conceito-chave — ✅ Checklist (Médio)**

• Massa × enxuta · rio e pedras  
• AV, NNAV, desperdício · muda, mura, muri  
• Trabalho padronizado (3 elementos)  
• Número de kanbans · regras · supermercado  
• Lead time e PCE  
• Etapas do SMED · sequência nivelada  
• Tipos de poka-yoke · seis grandes perdas  
• A3 · 5 porquês

#### ✍️ Exercícios

**9.M1** Qual o número de kanbans de berços (400/h, reposição 0,5 h, margem 10%, 20 por caixa)?

**9.M2** Qual o OEE da banhadeira (%) no caso?

**9.M3** Lead time de 11,5 dias de 27.000 s e TAV de 95 s. Qual a PCE (%)? (3 casas)

**9.M4** Com o setup caindo de 60 para 12 min (4 trocas/dia), qual o uso mais alinhado ao Lean dos 192 min liberados?
   a) Fazer lotes ainda maiores
   b) Trocar mais vezes (lotes menores, EPEI menor) e usar o restante como capacidade se necessário
   c) Desligar a máquina mais cedo sem critério
   d) Nenhum

#### 📝 Resumo (🔧 Médio)

No caso: 2 dias de estoque entre banho e embalagem; lead time de 11,5 dias e PCE ≈ 0,03%; 11 kanbans de berços; SMED liberando 192 min/dia; OEE da banhadeira ≈ 69%, com a maior perda na performance.

### 🧠 Difícil — Aprofundamento

**🎯 Ao final, você será capaz de:**
- Propor um plano de transformação Lean com sequência lógica
- Avaliar riscos e trade-offs do plano
- Definir indicadores e rotina de sustentação

**🏭 Na empresa — O caso: um ano de transformação**

A Doces Serra quer reduzir o lead time e o estoque da linha de bombons antes do próximo Natal.  
• Demanda: 600 caixas/dia; turno de 7,5 h (27.000 s); takt = 45 s.  
• VSM atual: estoques de 5 · 2 · 1,5 · 3 dias; processos de 20 · 40 · 35 s.  
• Entre banho e embalagem: 1.200 caixas.  
• Berços: consumo de 400/h, reposição em 0,5 h, margem de 10%, 20 por caixa.  
• Banhadeira: setup de 60 min (4 trocas/dia); OEE com 480 min planejados, 60 min de paradas, ciclo ideal 0,5 min, 700 lotes, 665 bons.

**🔴 Conceito-chave — ✅ Checklist (Difícil)**

• Sistema × ferramentas · resiliência  
• Desperdícios em serviços · atividade obrigatória  
• Sustentação do 5S  
• Kanban × CONWIP × MRP  
• Estado futuro do VSM  
• EPEI e pitch  
• Perdas × OEE · pilares do TPM · OEE como meta  
• Liderança Lean · Lean Seis Sigma

#### ✍️ Exercícios

**9.D1** Ordene uma sequência lógica de transformação Lean:
   Itens (fora de ordem): Criar fluxo: fluxo contínuo e SMED · Enxergar: VSM atual e futuro · Estabilizar: 5S, trabalho padronizado, TPM básico · Puxar e nivelar: kanban e heijunka · Sustentar: gestão diária e kaizen

**9.D2** *O diretor quer começar a transformação cortando pela metade todos os estoques na primeira semana, “para criar senso de urgência”.* Qual a melhor resposta?
   a) Aprovar
   b) Propor redução gradual, começando por estabilizar os processos (TPM, SMED, padrão) e baixando os estoques à medida que as causas são resolvidas
   c) Aumentar os estoques
   d) Esperar um ano sem mudar nada

**9.D3** Escreva o plano de transformação Lean de 12 meses para a linha de bombons: fases, ferramentas, metas e indicadores.

#### 📝 Resumo (🧠 Difícil)

Sequência típica: estabilizar (5S, trabalho padronizado, TPM básico) → criar fluxo (VSM, fluxo contínuo, SMED) → puxar e nivelar (kanban, heijunka) → sustentar (gestão diária, kaizen). Riscos: reduzir estoque antes de estabilizar, meta de OEE manipulável, esquecer a ergonomia.

---

## 📖 Glossário

| Termo | Definição |
|---|---|
| **5 porquês** | Perguntar “por quê?” sucessivamente até chegar a uma causa acionável. |
| **5S** | Seiri, Seiton, Seiso, Seiketsu, Shitsuke: utilização, ordenação, limpeza, padronização e disciplina. |
| **A3** | Relatório de uma folha que estrutura a solução de um problema pela lógica do PDCA. |
| **Andon** | Sinal luminoso ou sonoro que indica um problema na linha. |
| **Atividade que agrega valor** | Transforma o produto, o cliente paga por ela e é feita certa da primeira vez. |
| **Cinco princípios** | Valor, fluxo de valor, fluxo, puxar e perfeição (Womack e Jones). |
| **CONWIP** | Sistema puxado que limita o WIP total de uma linha. |
| **Dias de estoque** | Estoque ÷ demanda diária. |
| **EPEI** | Every part every interval: intervalo para produzir todos os produtos uma vez. |
| **Evento kaizen** | Equipe dedicada por alguns dias a um problema definido. |
| **FIFO lane** | Fila PEPS com limite máximo entre dois processos. |
| **Fluxo contínuo** | Produção peça a peça, sem estoque entre processos. |
| **Gemba** | O lugar onde o trabalho acontece. |
| **Gestão visual** | Tornar a situação e as anormalidades visíveis de relance. |
| **Heijunka** | Nivelamento do volume e do mix da produção. |
| **Jidoka** | Automação com toque humano: detectar a anormalidade, parar e corrigir; pilar do TPS. |
| **Just in time (JIT)** | Item certo, na quantidade certa, no momento certo; pilar do TPS. |
| **Kaizen** | Melhoria contínua e incremental feita por todos. |
| **Kanban** | Cartão ou sinal que autoriza produzir ou movimentar. |
| **Lean** | Sistema de gestão que busca entregar valor ao cliente com o mínimo de desperdício. |
| **Manutenção autônoma** | Pilar do TPM em que o operador limpa, inspeciona e lubrifica o equipamento. |
| **Muda** | Desperdício. |
| **Mura** | Irregularidade, variação. |
| **Muri** | Sobrecarga de pessoas ou equipamentos. |
| **NNAV** | Atividade necessária que não agrega valor; deve ser reduzida. |
| **OEE** | Eficiência global do equipamento: disponibilidade × performance × qualidade. |
| **PCE** | Eficiência do ciclo do processo: tempo de agregação de valor ÷ lead time. |
| **PDCA** | Planejar, Fazer, Checar, Agir: ciclo de melhoria. |
| **Pitch** | Takt × quantidade por embalagem: intervalo de liberação de trabalho. |
| **Poka-yoke** | Dispositivo ou método à prova de erro. |
| **Processo puxador** | Único processo que recebe a programação do cliente no estado futuro. |
| **Produção empurrada** | Produzir conforme o plano, independentemente do consumo do processo seguinte. |
| **Produção puxada** | Produzir apenas para repor o que foi consumido. |
| **Seis grandes perdas** | Quebras, setup/ajustes, pequenas paradas, velocidade reduzida, defeitos, perdas de partida. |
| **Setup** | Tempo da última peça boa de um produto até a primeira peça boa do seguinte. |
| **Setup externo** | Parte do setup que pode ser feita com a máquina rodando. |
| **Setup interno** | Parte do setup feita apenas com a máquina parada. |
| **Sistema Toyota de Produção (STP/TPS)** | Sistema desenvolvido na Toyota por Taiichi Ohno; origem do Lean. |
| **SMED** | Single-Minute Exchange of Die: método de Shingo para reduzir o setup. |
| **Supermercado** | Estoque controlado, reposto por kanban, entre processos que não podem fluir continuamente. |
| **Superprodução** | Produzir antes ou mais do que o necessário; considerado o pior desperdício. |
| **TIM WOODS** | Mnemônico dos 8 desperdícios: transporte, inventário, movimentação, espera, superprodução, superprocessamento, defeitos, talento. |
| **TPM** | Manutenção produtiva total: operadores e manutenção juntos pela confiabilidade do equipamento. |
| **Trabalho padronizado** | Melhor forma atual de fazer a operação: takt, sequência e estoque padrão em processo. |
| **VSM** | Mapeamento do fluxo de valor: desenho do fluxo de material e informação, com linha do tempo. |

## 🃏 Flashcards

| Frente | Verso |
|---|---|
| 5 princípios Lean | Valor, fluxo de valor, fluxo, puxar, perfeição (“Vale Fazer Fluir, Puxando a Perfeição”). |
| Pilares da casa do TPS | Just in time e jidoka. |
| 8 desperdícios | TIM WOODS: transporte, inventário, movimentação, espera, superprodução, superprocessamento, defeitos, talento. |
| Pior desperdício | Superprodução: gera estoque, transporte, espera e esconde defeitos. |
| Muda, mura, muri | Desperdício, irregularidade, sobrecarga. Mura → muri → muda. |
| AV × NNAV × desperdício | Manter/melhorar · reduzir · eliminar. |
| 5S | Utilização, ordenação, limpeza, padronização, disciplina. |
| Trabalho padronizado | Takt + sequência de trabalho + estoque padrão em processo. |
| Empurrar × puxar | Empurrar: pelo plano. Puxar: repõe o consumido. |
| Número de kanbans | N = D × L × (1 + α) ÷ C, arredondando para cima. |
| Regras do kanban | Seguinte retira; anterior produz só o retirado; nada sem kanban; kanban junto; defeito não segue; reduzir kanbans. |
| Rio e pedras | Estoque esconde problemas; baixe aos poucos e resolva as causas. |
| VSM: dias de estoque | Estoque ÷ demanda diária. |
| PCE | Tempo de agregação de valor ÷ lead time (quase sempre < 1%). |
| Etapas do SMED | Separar interno/externo, converter interno em externo, racionalizar (“Separa, Converte, Racionaliza”). |
| EPEI | Nº de produtos ÷ setups possíveis por dia. |
| Pitch | Takt × quantidade por embalagem. |
| Poka-yoke controle × advertência | Controle impede o erro; advertência avisa. |
| OEE | D × P × Q = boas × ciclo ideal ÷ tempo planejado. |
| Seis grandes perdas | D: quebras, setup · P: pequenas paradas, velocidade · Q: defeitos, partida. |
| PDCA | Planejar, Fazer, Checar, Agir. |
| A3 | Contexto, situação atual, meta, causa, contramedidas, plano, acompanhamento. |

## 📝 Gabarito comentado

**1.F1** Valor → Fluxo de valor → Fluxo → Puxar → Perfeição  
“Vale Fazer Fluir, Puxando a Perfeição”.

**1.F2** b) O cliente  
Valor é aquilo pelo qual o cliente está disposto a pagar.

**1.F3** Taiichi Ohno → Desenvolveu o Sistema Toyota de Produção; Womack e Jones → Cinco princípios do pensamento enxuto; John Krafcik → Usou o termo “lean production” (1988)  
Lean é o nome ocidental para a lógica do STP.

**1.F4** a) jidoka  
Jidoka: qualidade na fonte, parar ao detectar anormalidade.

**1.F5** Falso  
O foco é eliminar desperdício do processo, não aumentar o esforço.

**1.M1** b) Os problemas escondidos aparecem e podem ser resolvidos  
Reduzir aos poucos e resolver cada “pedra” que aparece.

**1.M2** b) Baixou a água de uma vez sem resolver as pedras: reduzir aos poucos e tratar as causas das paradas  
Redução de estoque é gradual e acompanhada de solução de problemas.

**1.M3** Falso  
Qualidade na fonte (jidoka): o problema é detectado e tratado onde nasce.

**1.M4** Lotes → Pequenos; Programação → Puxar pelo consumo; Qualidade → Na fonte; Pessoas → Executam e melhoram  
Contraste com lotes grandes, empurrar, inspeção final e pessoas só executando.

**1.D1** b) Porque copiam ferramentas sem o sistema de gestão (liderança no gemba, padrões, solução diária de problemas)  
Liker: Lean é sistema de gestão, não só caixa de ferramentas.

**1.D2** b) Arriscado: item crítico, fornecedor único e lead time longo justificam estoque estratégico dimensionado e revisto  
Enxuto e resiliente não são opostos.  
❌ a) O Lean combate o estoque que esconde problemas, não toda proteção.  
✅ b) Estoque consciente e dimensionado para risco de ruptura é decisão racional.  
❌ c) Excesso também é desperdício e risco de obsolescência.  
❌ d) MRP não resolve o risco de ruptura do fornecedor.

**1.D3** A afirmação descreve o **Lean mal aplicado**. No sistema original, o foco é eliminar **desperdício do processo** (espera, estoque, defeitos, movimentação) e desenvolver as pessoas para melhorar o trabalho; a Toyota associava a melhoria à estabilidade do emprego. Quando se retiram folgas sem melhorar o método, há **intensificação do trabalho**, risco ergonômico e perda de adesão, e os ganhos não se sustentam. Boa prática: realocar as pessoas liberadas para melhoria ou crescimento, envolver os operadores, avaliar ergonomia.  
Critérios: Distingue Lean como sistema de Lean mal aplicado; Explica o foco no desperdício do processo; Menciona riscos de intensificação/ergonomia; Propõe tratamento das pessoas liberadas ou participação.

**1.D4** Verdadeiro  
O episódio mostrou a importância de avaliar riscos de ruptura na cadeia.

**2.F1** Produzir 500 caixas quando o pedido é de 300 → Superprodução; Operador parado esperando a máquina terminar → Espera; Refazer caixas com tampa torta → Defeitos; Operador se abaixar e esticar para pegar a peça → Movimentação  
TIM WOODS.

**2.F2** b) Talento/criatividade das pessoas não aproveitado  
Popularizado por Liker em *O Modelo Toyota*.

**2.F3** Verdadeiro  
Transporte = mover material; movimentação = movimento das pessoas.

**2.F4** a) processamento excessivo  
Também chamado de superprocessamento.

**2.F5** Falso  
Agregar valor exige fazer certo da primeira vez; retrabalho é defeito.

**2.M1** Banhar o bombom no chocolate → Agrega valor; Registrar o lote para rastreabilidade → Necessária, sem valor; Procurar a espátula na bancada → Desperdício puro  
AV: manter · NNAV: reduzir · desperdício: eliminar.

**2.M2** b) Porque gera outros desperdícios (estoque, transporte, espera) e esconde defeitos  
É um “desperdício multiplicador”.

**2.M3** Muda → Desperdício; Mura → Irregularidade, variação; Muri → Sobrecarga  
Mura gera muri, que gera muda.

**2.M4** b) Mura (pico) gera muri (sobrecarga), que gera muda (refugo)  
Atacar a variação (nivelar) reduz sobrecarga e desperdício.

**2.M5** Verdadeiro  
Hoje não dá para eliminar; busca-se fazer com menos esforço.

**2.D1** b) Espera; o fluxo tem filas por desbalanceamento entre chegadas e capacidade  
Espera em serviço é a fila; analise chegadas, capacidade e sequenciamento.

**2.D2** b) Manter: é exigência de rastreabilidade e segurança de alimentos (NNAV); buscar reduzir o esforço, por exemplo com leitura automática  
Obrigatório ≠ desperdício puro.  
❌ a) Ignora exigências legais e o risco de não conseguir rastrear um recall.  
✅ b) Classificação correta: necessária, sem valor; reduzir o esforço.  
❌ c) Isso seria processamento excessivo.  
❌ d) Não resolve e continua custando.

**2.D3** Produzir antes do necessário cria **estoque** (câmara fria cheia, capital parado, risco de vencimento); exige **transporte** até o armazém e de volta, e **movimentação** para guardar e procurar; gera **espera** de outros produtos que precisavam da máquina; e **esconde defeitos**: um erro de etiqueta só aparece na expedição, afetando dias de produção. Solução: produzir no ritmo do consumo (puxar, takt), com lotes menores.  
Critérios: Cita pelo menos três desperdícios gerados; Explica o mecanismo de cada um; Menciona defeitos escondidos; Propõe puxar/lotes menores.

**2.D4** Falso  
Serviços, hospitais e escritórios têm filas, retrabalho e processamento excessivo.

**3.F1** Seiri — Utilização → Seiton — Ordenação → Seiso — Limpeza → Seiketsu — Padronização → Shitsuke — Disciplina  
“Usa, Ordena, Limpa, Padroniza e Disciplina”.

**3.F2** a) Seiri  
Seiri: senso de utilização.

**3.F3** Falso  
Limpeza é só um dos sensos; o foco é organizar e tornar visível o anormal.

**3.F4** a) sombras  
Exemplo clássico de gestão visual.

**3.F5** b) Um sinal luminoso ou sonoro que avisa um problema na linha  
Torna o problema visível para que alguém ajude imediatamente.

**3.M1** Takt time → Ritmo exigido pelo cliente; Sequência de trabalho → Ordem dos passos do operador; Estoque padrão em processo → Mínimo de peças no posto para o trabalho fluir  
Os três elementos clássicos.

**3.M2** b) Sem padrão, a variação entre turnos esconde o efeito; padronizar primeiro e depois comparar  
Sem padrão não há base para medir melhoria.

**3.M3** Verdadeiro  
Limpando se percebem vazamentos, folgas e desgaste.

**3.M4** Fotografar o antes → Etiquetar e separar itens desnecessários → Definir lugar e identificação de cada item → Limpar e inspecionar → Criar padrão visual e rotina → Verificar e manter  
Três sensos para fazer, dois para manter.

**3.D1** c) Anormalidades aparecem de relance e são tratadas no dia a dia  
5S é meio para enxergar e resolver problemas.

**3.D2** b) A auditoria virou fim em si mesma e estimula maquiar; ligar o 5S aos problemas reais, auditorias pelas próprias equipes e verificação no gemba  
Métricas que viram meta deixam de medir (lei de Goodhart).  
❌ a) Nota alta sem efeito nos resultados indica maquiagem.  
✅ b) Reconecta o 5S ao seu propósito e evita incentivos perversos.  
❌ c) Aumenta a maquiagem e o medo.  
❌ d) Joga fora a base; o problema é o modo de gestão.

**3.D3** O padrão registra a **melhor forma conhecida hoje**. Ele estabiliza o processo, reduz variação e permite **medir** o efeito de uma mudança. O kaizen testa uma melhoria; se ela funciona, vira o **novo padrão**, que é a base da próxima melhoria. Padrão engessado é o que não pode ser mudado; o padrão Lean é revisto sempre que alguém encontra um jeito melhor, com participação de quem executa e atenção à ergonomia.  
Critérios: Define padrão como melhor forma atual; Explica o papel do padrão na medição; Descreve o ciclo padrão → kaizen → novo padrão; Menciona participação ou revisão contínua.

**4.F1** b) Produzir só para repor o que o processo seguinte consumiu  
O consumo real dispara a produção.

**4.F2** Falso  
Usa estoques pequenos e controlados, reduzidos aos poucos.

**4.F3** a) kanban  
Pode ser cartão, caixa vazia ou sinal eletrônico.

**4.F4** Kanban de produção → Autoriza produzir; Kanban de retirada → Autoriza buscar peças no processo anterior  
Os dois circulam juntos no sistema de dois cartões.

**4.M1** 11 kanbans  
N = 400 × 0,5 × 1,1 ÷ 20 = 220 ÷ 20 = 11  
Se der fração, arredonde para cima.

**4.M2** 12 kanbans  
N = 300 × 2 × 1 ÷ 50 = 600 ÷ 50 = 12  
Lead time menor → menos kanbans → menos estoque.

**4.M3** c) Nada é produzido ou transportado sem kanban  
Sem sinal, sem produção.

**4.M4** b) Supermercado reposto por kanban  
Setup longo e recurso compartilhado impedem fluxo contínuo; o supermercado controla o estoque.

**4.M5** Verdadeiro  
O limite impede o acúmulo de estoque.

**4.M6** 6 kanbans  
N = 520 × 0,5 × 1,1 ÷ 50 = 5,72 → 6 kanbans  
Arredonde para cima; depois reduza aos poucos para expor problemas.

**4.D1** 4 h  
Lei de Little: 240 ÷ 60 = 4 h  
Reduzir kanbans (WIP) com a mesma taxa reduz o lead time.

**4.D2** b) Usar MRP/programação por pedido (ou CONWIP) e kanban só para itens comuns e repetitivos (parafusos, consumíveis)  
Kanban funciona com demanda repetitiva.  
❌ a) Kanban de item que talvez nunca se repita vira estoque parado.  
✅ b) Cada sistema no contexto em que funciona.  
❌ c) Perde o controle do WIP e dos prazos.  
❌ d) Capital parado e obsolescência.

**4.D3** Falso  
Ele reage ao consumo; picos exigem recalcular kanbans ou planejar estoque antecipado.

**4.D4** O **MRP** planeja a médio e longo prazo: calcula necessidades a partir do PMP, dispara compras de itens com lead time longo e dimensiona capacidade. O **kanban** executa no curto prazo e no chão de fábrica: repõe o que foi consumido nos itens repetitivos, limitando WIP. O MRP também pode recalcular o **número de kanbans** quando a demanda muda (ex.: antes da Páscoa). Itens sob encomenda ou de baixo giro ficam no MRP/programação.  
Critérios: Descreve o papel do MRP (planejamento, compras); Descreve o papel do kanban (execução, reposição); Menciona recalcular kanbans com a demanda; Separa itens repetitivos de itens sob encomenda.

**4.D5** 5,333 h  
Lei de Little: 320 ÷ 60 = 5,33 h  
Menos kanbans (WIP) com a mesma taxa = lead time menor.

**5.F1** 3 dias  
1.800 ÷ 600 = 3 dias  
No VSM, estoque é convertido em dias de demanda.

**5.F2** a) Mostra o sistema inteiro, do fornecedor ao cliente, incluindo o tempo parado  
Evita otimizar uma parte sem efeito no todo.

**5.F3** Verdadeiro  
Com a linha do tempo embaixo de tudo.

**5.F4** a) triângulos  
Triângulo com “I” (inventory).

**5.F5** 3 dias  
1.500 ÷ 500 = 3 dias  
No VSM, o estoque vira tempo de espera.

**5.M1** 11,5 dias  
5 + 2 + 1,5 + 3 = 11,5 dias  
É o tempo que uma caixa leva do fornecedor ao cliente.

**5.M2** 95 s  
20 + 40 + 35 = 95 s  
Soma dos tempos que transformam o produto.

**5.M3** 0,208 %  
Lead time = 2 × 8 × 3.600 = 57.600 s  
PCE = 120 ÷ 57.600 × 100 ≈ 0,208%  
Mesmo com lead time curto, a PCE fica bem abaixo de 1%.

**5.M4** Escolher a família de produtos → Levantar a demanda do cliente e o takt → Andar o fluxo no gemba, de trás para a frente → Preencher as caixas de dados → Desenhar o fluxo de informação → Desenhar a linha do tempo e calcular lead time  
Começa pelo cliente e anda o fluxo real.

**5.M5** Falso  
Deve ser feito no gemba, contando e observando; o sistema pode estar desatualizado.

**5.M6** 12,5 dias  
Lead time ≈ 12,5 dias  
Os estoques dominam o lead time.

**5.M7** 0,903 %  
Lead time = 1 × 8 × 3.600 = 28.800 s  
PCE = 260 ÷ 28.800 × 100 = 0,903%  
Declare a convenção de dia usada (útil ou calendário).

**5.D1** b) O único ponto que recebe a programação do cliente; os anteriores são puxados por kanban/supermercado  
Programar um só ponto evita programas conflitantes.

**5.D2** b) Plano de ação com loops, responsáveis, prazos e acompanhamento no gemba  
O mapa é um meio; o resultado vem da implantação.

**5.D3** Falso  
É uma foto; variabilidade e filas pedem dados de várias semanas ou simulação.

**5.D4** Takt: 27.000 s ÷ 600 = 45 s. Propostas: (1) banho + embalagem em **fluxo contínuo** com FIFO lane curta (elimina 1,5 dia); (2) **supermercado** de recheios de 0,5 dia com kanban (de 2 para 0,5); (3) embalagem como **processo puxador** com **heijunka**, reduzindo produto acabado de 3 para 1 dia; (4) matéria-prima de 5 para 3 dias com entregas mais frequentes. Lead time ≈ 3 + 0,5 + 1 = 4,5 dias (−61%). Melhorias necessárias: SMED no recheio, TPM na banhadeira, padrão de limpeza. Plano com responsáveis e prazos.  
Critérios: Calcula ou usa o takt; Propõe fluxo contínuo e/ou supermercado com justificativa; Define processo puxador/nivelamento; Estima o novo lead time; Lista melhorias necessárias ou plano de ação.

**6.F1** Trocar o molde da máquina → Interno; Buscar o molde no almoxarifado → Externo; Pré-aquecer o próximo molde → Externo; Soltar os parafusos de fixação → Interno  
Externo: pode ser feito com a máquina rodando.

**6.F2** b) Setup com um dígito de minutos (menos de 10 min)  
Single-digit minute: de 1 a 9 minutos.

**6.F3** Falso  
É o contrário: nivelar volume e mix, um pouco de cada, com frequência.

**6.F4** a) Shigeo Shingo  
Shingo também popularizou o poka-yoke.

**6.M1** Registrar o setup atual → Separar interno e externo → Converter interno em externo → Racionalizar todas as atividades → Padronizar o novo procedimento  
“Separa, Converte, Racionaliza”.

**6.M2** 192 min  
4 × (60 − 12) = 4 × 48 = 192 min  
Tempo que pode virar produção ou mais trocas (lotes menores).

**6.M3** b) A B A C repetido ao longo do dia  
Proporção 2 : 1 : 1 distribuída ao longo do dia.

**6.M4** b) Com setup longo, 8 trocas consomem 6 h por dia; fazer SMED antes ou junto do nivelamento  
8 × 45 min = 360 min parados.

**6.M5** Verdadeiro  
A atividade continua existindo, mas acontece com a máquina rodando.

**6.M6** 240 min  
8 × (50 − 20) = 8 × 30 = 240 min  
Use o ganho para trocar mais vezes (lotes menores) ou como capacidade.

**6.D1** 1,5 dias  
Setups/dia = 90 ÷ 15 = 6  
EPEI = 9 ÷ 6 = 1,5 dia  
Cada produto pode ser feito a cada 1,5 dia.

**6.D2** 20 min  
Pitch = 40 × 30 = 1.200 s = 20 min  
A caixa heijunka libera trabalho a cada 20 minutos.

**6.D3** b) Usar parte do ganho para trocar mais vezes (lotes menores, EPEI menor) e reduzir estoque e lead time, e o resto como capacidade se a demanda pedir  
Setup menor → lote menor → menos estoque.  
❌ a) Gera superprodução, o pior desperdício.  
✅ b) Transforma o ganho de setup em flexibilidade e menos estoque.  
❌ c) Não é o objetivo do SMED.  
❌ d) Perde o ganho.

**6.D4** Setup longo incentiva **lotes grandes** para diluir o tempo parado. Lotes grandes significam cada produto feito com pouca frequência (**EPEI alto**), logo **estoque** maior de cada item para cobrir o intervalo e **lead time** maior (pela lei de Little, mais WIP → mais tempo). Reduzindo o setup (SMED), pode-se trocar mais vezes, fazer lotes menores, reduzir estoque e lead time, e responder melhor ao mix do cliente (heijunka).  
Critérios: Relaciona setup longo e lote grande; Relaciona lote grande e estoque/EPEI; Relaciona estoque e lead time (Little); Conclui o efeito do SMED.

**6.D5** 1,5 dias  
Setups por dia = ⌊60 ÷ 10⌋ = 6  
EPEI = 9 ÷ 6 = 1,5 dias  
Setup menor → mais trocas → EPEI menor → menos estoque de cada item.

**6.D6** 33,333 min  
Pitch = 40 × 50 = 2.000 s = 33,33 min  
Intervalo de liberação de trabalho na caixa heijunka.

**7.F1** b) Detectar a anormalidade, parar e corrigir a causa, para não produzir defeito em série  
Vem do tear de Sakichi Toyoda, que parava quando o fio rompia.

**7.F2** b) Um pino-guia que só deixa a peça encaixar na posição certa  
Poka-yoke atua no processo, sem depender só da atenção.

**7.F3** 68,4 %  
OEE = 0,90 × 0,80 × 0,95 = 0,684 = 68,4%  
Os três componentes se multiplicam.

**7.F4** Verdadeiro  
É a manutenção autônoma.

**7.F5** 71,06 %  
OEE = 0,85 × 0,88 × 0,95 = 71,1%  
A menor parcela indica onde está a maior perda.

**7.M1** 69,27 %  
D = 420 ÷ 480 = 0,875  
P = 700 × 0,5 ÷ 420 = 0,8333  
Q = 665 ÷ 700 = 0,95  
OEE = 0,875 × 0,8333 × 0,95 ≈ 69,27%  
Atalho: boas × ciclo ideal ÷ tempo planejado = 665 × 0,5 ÷ 480.

**7.M2** A peça não encaixa se estiver invertida → Controle (bloqueio); Alarme sonoro quando falta etiqueta → Advertência; Contar parafusos: se sobrou, faltou apertar → Método do valor fixo  
Controle impede; advertência avisa.

**7.M3** d) Férias coletivas planejadas  
Paradas planejadas saem do tempo planejado; não entram nas seis perdas.

**7.M4** b) Performance: pequenas paradas e velocidade reduzida  
A menor parcela indica a maior perda.

**7.M5** Falso  
O de controle impede o erro; o de advertência depende de alguém reagir.

**7.M6** 63,714 %  
D = 345 ÷ 420 = 82,1%  
P = 460 × 0,6 ÷ 345 = 80%  
Q = 446 ÷ 460 = 97%  
OEE = 446 × 0,6 ÷ 420 = 63,7%  
Atalho: peças boas × ciclo ideal ÷ tempo planejado.

**7.D1** Quebras → Disponibilidade; Setup e ajustes → Disponibilidade; Pequenas paradas → Performance; Perdas de partida → Qualidade  
D: quebras e setup · P: pequenas paradas e velocidade · Q: defeitos e partida.

**7.D2** b) Controle inicial  
Também chamado de gestão antecipada do equipamento.

**7.D3** b) Manipulação da base: paradas reclassificadas como planejadas, ciclo ideal folgado; auditar definições e focar nas perdas  
Indicador que vira meta deixa de medir (Goodhart).  
❌ a) Produção igual com OEE muito maior é incoerente.  
✅ b) Meta isolada incentiva mudar a régua em vez do processo.  
❌ c) Não explica o salto em todas as máquinas.  
❌ d) Sem ação, não há mudança física.

**7.D4** **Poka-yoke de controle:** berço com 12 cavidades e sensor/balança que **bloqueia** caixas fora da faixa de peso; berço que só fecha a tampa com todas as cavidades cheias (detecção por contato ou visão). **Jidoka:** repetição de bloqueios (ex.: 3 seguidos) aciona o **andon** e para a alimentação; o líder atende, identifica a causa (dosadora, abastecimento) e registra. **Melhoria:** análise das causas registradas (Pareto) e ação definitiva; revisão do padrão. Considerar calibração da balança e o custo de falsos alarmes.  
Critérios: Propõe poka-yoke de controle (bloqueio); Inclui parada/andon (jidoka); Inclui resposta e análise de causa; Considera calibração ou falsos alarmes.

**8.F1** Planejar → Fazer → Checar → Agir  
E gira de novo.

**8.F2** b) Ir ao lugar onde o trabalho acontece para ver o problema com os próprios olhos  
Fatos no local, não suposições.

**8.F3** Falso  
Kaizen são melhorias incrementais, com pouco ou nenhum investimento, feitas por todos.

**8.F4** a) padronizada  
O novo padrão é a base da próxima melhoria.

**8.M1** Situação atual → Dados e fatos observados no gemba; Meta → O que, quanto e até quando; Análise de causa → 5 porquês, Ishikawa; Contramedidas → Ações ligadas às causas  
O A3 é o PDCA numa folha.

**8.M2** b) Continuar perguntando por que o processo permitiu o erro (ex.: etiquetas parecidas, sem conferência automática) e buscar poka-yoke  
“Falha humana” raramente é causa-raiz: o processo deve impedir o erro.

**8.M3** b) O diário é contínuo com a equipe do setor; o evento reúne uma equipe dedicada por alguns dias a um problema definido  
Os dois são complementares.

**8.M4** Falso  
Cinco é indicativo; pare quando chegar a uma causa acionável e verificada.

**8.D1** b) Faltaram padrão atualizado, verificação rotineira e dono; criar padrão visual, medir o setup em cada troca e revisar na gestão diária  
Melhoria sem rotina de verificação regride.  
❌ a) Os 15 min foram atingidos: o método funciona.  
✅ b) Sustentação exige sistema de gestão.  
❌ c) Culpar pessoas não resolve o sistema.  
❌ d) Repetir eventos sem sustentação desperdiça esforço.

**8.D2** Lean → Fluxo e eliminação de desperdício; Seis Sigma → Redução de variação e defeitos com estatística; Lean Seis Sigma → Combinação dos dois  
Seis Sigma é detalhado no Módulo 5.

**8.D3** Verdadeiro  
Toyota Kata descreve essa rotina de coaching.

**8.D4** **Contexto:** retrabalho custa horas da embalagem e já houve reclamação de cliente. **Situação atual:** 3% de retrabalho (dados de 4 semanas), concentrado nos lotes com berço do novo fornecedor. **Meta:** < 0,5% em 60 dias. **Causa (5 porquês):** berço 2 mm mais alto; especificação sem tolerância de altura. **Contramedidas:** incluir tolerância na especificação; inspeção do primeiro lote de novo fornecedor; gabarito de altura na recepção (poka-yoke). **Plano:** responsáveis e datas. **Acompanhamento:** % de retrabalho semanal; padronizar se atingir a meta.  
Critérios: Tem contexto e situação atual com dados; Define meta mensurável com prazo; Apresenta análise de causa coerente; Liga contramedidas às causas e define acompanhamento.

**9.F1** Operadores perdem tempo procurando ferramentas → 5S; Troca de sabor leva 1 hora → SMED; Caixas saem com bombom faltando → Poka-yoke; Ninguém sabe onde o produto fica parado → VSM  
Cada ferramenta resolve um tipo de problema.

**9.F2** a) Módulo 4 — Engenharia de Métodos  
Takt = tempo disponível ÷ demanda = 27.000 ÷ 600.

**9.F3** Verdadeiro  
1.200 ÷ 600 = 2 dias.

**9.M1** 11 kanbans  
400 × 0,5 × 1,1 ÷ 20 = 11  
Estoque máximo ≈ 220 berços.

**9.M2** 69,27 %  
665 × 0,5 ÷ 480 = 332,5 ÷ 480 ≈ 69,27%  
D = 87,5% · P = 83,3% · Q = 95%: maior perda na performance.

**9.M3** 0,031 %  
11,5 × 27.000 = 310.500 s  
95 ÷ 310.500 × 100 ≈ 0,031%  
Quase todo o tempo é espera em estoque.

**9.M4** b) Trocar mais vezes (lotes menores, EPEI menor) e usar o restante como capacidade se necessário  
Setup menor → flexibilidade e menos estoque.

**9.D1** Estabilizar: 5S, trabalho padronizado, TPM básico → Enxergar: VSM atual e futuro → Criar fluxo: fluxo contínuo e SMED → Puxar e nivelar: kanban e heijunka → Sustentar: gestão diária e kaizen  
Reduzir estoque antes de estabilizar gera falta.

**9.D2** b) Propor redução gradual, começando por estabilizar os processos (TPM, SMED, padrão) e baixando os estoques à medida que as causas são resolvidas  
Urgência sim, mas com método.  
❌ a) Baixa a água de uma vez: faltas e perda de confiança no Lean.  
✅ b) Rio e pedras: baixar e resolver.  
❌ c) Contraria o objetivo.  
❌ d) Não é preciso esperar; é preciso sequenciar.

**9.D3** **Meses 1–3 (estabilizar):** 5S e trabalho padronizado na embalagem; TPM básico na banhadeira (manutenção autônoma, atacar pequenas paradas); meta OEE de 69% → 75%. **Meses 3–6 (enxergar e fluir):** VSM atual/futuro; SMED na banhadeira (60 → 15 min); banho + embalagem em fluxo contínuo com FIFO lane. **Meses 6–9 (puxar e nivelar):** supermercado de recheios com kanban; kanban de berços (11 cartões); heijunka na embalagem (pitch 15 min). **Meses 9–12 (sustentar):** gestão diária em camadas, A3 para problemas, kaizen contínuo. Indicadores: lead time (11,5 → ~4,5 dias), dias de estoque, OEE, setup, OTIF, retrabalho, acidentes/ergonomia. Riscos: reduzir estoque antes de estabilizar; meta de OEE manipulada; sobrecarga dos operadores.  
Critérios: Organiza fases em sequência lógica; Associa ferramentas adequadas a cada fase; Define metas com números; Define indicadores e riscos.
