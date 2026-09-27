# 📱 Problema — visão geral do projeto

> **Tem um problema? Descubra o que a Engenharia de Produção pode fazer.**
> O app é uma ponte entre **FACULDADE → REVISÃO → PROBLEMA REAL → APLICAÇÃO NO TRABALHO**:
> “Esqueci um conceito ou apareceu um problema no estágio. Vou abrir o Problema e descobrir rapidamente o que preciso saber.”

```
                     PROBLEMA
                        │
      ┌─────────────────┼─────────────────┐
   CONSULTAR        PROBLEMAS          DESAFIO
 “Esqueci algo”  “Preciso resolver”  “Quero praticar”
      └─────────────────┼─────────────────┘
                     ESTUDAR
                 “Quero aprender”
```

Por trás dos quatro caminhos está o app de estudo gamificado (antes chamado EngProd Play), que continua inteiro dentro de **🎓 Estudar**. Mistura **conteúdo didático + Duolingo** (trilha, lições curtas, ofensiva, XP, vidas) **+ Kahoot** (quiz com tempo, cores, formas e ranking).

- ✅ Sem login e sem servidor: o progresso fica no **localStorage** do navegador.
- ✅ Mobile-first: pensado para o celular, inclusive no ônibus.
- ✅ Funciona **offline** depois do 1º acesso (PWA com service worker).
- ✅ Conteúdo **separado do código**: cada módulo é um arquivo na pasta `conteudo/`.
- ✅ Zero dependências: HTML + CSS + JavaScript puro. Nada para instalar.

---

## 1. Estrutura de arquivos

```
app/
├── index.html          ← o app inteiro (HTML + CSS + JavaScript, comentado em português)
├── manifest.json       ← dados para "instalar" o app no celular (PWA)
├── sw.js               ← service worker: guarda os arquivos para funcionar offline
├── icone.svg / icone-192.png / icone-512.png
└── conteudo/
    ├── indice.js       ← LISTA dos arquivos de módulo que o app deve carregar
    ├── modulo-01.js    ← Módulo 1 — Fundamentos (9 lições, 3 níveis)
    ├── modulo-13.js    ← Módulo 13 — Estatística (12 lições, 3 níveis)
    ├── modulo-02.js    ← Módulo 2 — Gestão de Projetos (10 lições, 3 níveis)
    ├── modulo-04.js    ← Módulo 4 — Engenharia de Métodos (7 lições, 3 níveis)
    ├── modulo-03.js    ← Módulo 3 — PCP (8 lições, 3 níveis)
    ├── modulo-06.js    ← Módulo 6 — Lean (9 lições, 3 níveis)
    ├── modulo-14.js    ← Módulo 14 — Dados e Analytics (8 lições, 3 níveis, trilha paralela)
    ├── grade/p01.js … p09.js ← disciplinas da grade curricular, por período (seção 10)
    ├── problemas.js    ← 🚨 problemas → ferramentas → conteúdo, e áreas do Modo Estágio (seção 11)
    ├── desafios.js     ← ⚡ desafios do dia (seção 11)
    └── banco-questoes.js ← questões extras e modelos com números sorteados (sempre por último)
parametros.js           ← motor das questões com números sorteados
```

---

## 2. Telas

| Tela | Rota | O que tem |
|---|---|---|
| 🏠 **Início** | `#inicio` | “Olá! 👋 Vamos resolver alguma coisa hoje?”, pesquisa grande (“O que você precisa lembrar?”) com resultados na hora, os **4 caminhos** (🚨 Tenho um problema, 🔎 Consultar, ⚡ Desafio do dia, 🎓 Estudar) e “Para você” com dados reais: continue de onde parou, assuntos para revisar e seu progresso. |
| 🔎 **Consultar** | `#consultar` · `#consultar/<busca>` | Central de consulta: busca conceitos, ferramentas, fórmulas, disciplinas, lições, indicadores, métodos e problemas. Sem busca: mais consultados (ou os da sua área), favoritos, vistos recentemente, todas as ferramentas e glossário. |
| 📄 **Ficha de consulta** | `#ferramenta/<id>` · `#consulta/<chave>` | Níveis progressivos: **⚡ 30 s** (resumo: o que é, para que serve) → **📚 3 min** (quando usar, dados, fórmula, erros comuns) → **🏭 Na prática** (exemplo) → **🧠 Teste** (1 pergunta) → **🔬 Aprofunde** (links diretos ao conteúdo completo, aos exercícios, ao mapa e aos problemas relacionados). ☆ Salvar nos favoritos e 🔊 Ouvir a ficha inteira (problemas e explicação do desafio também têm 🔊 Ouvir). Chaves: `g:<módulo>:<termo>` (conceito do glossário), `l:<lição>` (lição ou tópico). |
| 🧰 **Ferramentas** | `#ferramentas` | Todas as fichas de ferramenta, em ordem alfabética, com filtro. |
| 🚨 **Problemas** | `#problemas` · `#problemas/<categoria>` · `#problema/<id>` | “Qual problema você precisa resolver?”: 12 categorias e busca em linguagem do dia a dia → situações (“Tenho estoque demais”) → “Por onde começar” + ferramentas que podem ajudar → ficha → conteúdo. |
| ⚡ **Desafio do dia** | `#desafio` · `#desafio/extra` · `#desafio/historico` · `#desafio/ver/<id>` | Um problema curto por dia (o mesmo o dia inteiro; da sua área no Modo Estágio). Depois de responder: ✅ resposta, “Por quê?”, “Na prática” e “Quer entender melhor?”. +10 XP (acerto) ou +3 XP (tentativa), contando para meta e ofensiva. Histórico com % de acerto. |
| 🎓 **Estudar** | `#estudar` · `#estudar/assuntos` · `#estudar/areas/<área>` · `#estudar/nivel/<nível>` · `#estudar/aprofundar` | A área acadêmica completa: por assunto (módulos), por disciplina (grade), por área, por nível, revisão rápida e aprofundamento, mais os antigos cartões 🎮 Exercícios, 🧠 Mapas mentais e 📚 Conteúdo. |
| 🎯 **Modo Estágio** | `#estagio` | Opcional. Escolha PCP, Produção, Qualidade, Logística, Suprimentos, Compras, Processos, Projetos, Dados ou Pesquisa Operacional: categorias de problema, desafios, ferramentas sugeridas, assuntos para revisar e módulos passam a aparecer primeiro. |
| ⭐ **Favoritos e histórico** | `#salvos` | Itens salvos, últimas consultas (até 30) e atalho para os desafios feitos. |
| 🎮 **Exercícios** | `#exercicios` | A interface de estudo gamificada: chama 🔥 da ofensiva, anel de XP do dia × meta, botão **Continuar**, nível, atalhos para a Trilha do curso, a Grade curricular, Revisão, Flashcards, Quiz e Modo ônibus. |
| 📚 **Conteúdo** | `#conteudo` · `#conteudo/g-calc1` · `#conteudo/m03` · `#conteudo/m03/m03-l6` (abre e destaca a lição/tópico) | Leitura por disciplina da grade (agrupada por período, com busca) ou por módulo do curso (com seletor de nível). Cada disciplina mostra tópicos, fórmulas com o significado de cada símbolo, “Na produção”, exemplos e glossário. **🎧 Ouvir** em todo o conteúdo: resumo ou disciplina inteira, cada tópico, o módulo inteiro ou cada lição (no nível escolhido). |
| 🧠 **Mapas mentais** | `#mapas` · `#mapa/g-calc1` | Escolha a matéria e o que entra (tópicos, fórmulas, significados dos símbolos, glossário, aplicações, exemplos, mnemônicos, quais tópicos, preto e branco). O mapa é desenhado numa folha **A4 (210 × 297 mm)**, com a fonte ajustada automaticamente para caber, e pode ser impresso ou salvo em PDF. |
| 🗺️ **Trilha** | `#trilha` · `#trilha/grade/3` | Duas abas: **📘 Curso** (módulos) e **🎓 Grade curricular** (disciplinas por período; cada uma começa liberada). |
| 🗺️ (detalhe) | `#trilha` | Caminho em zigue-zague com "bolinhas": ✓ dourada = concluída, verde pulsando = atual ("COMEÇAR"), 🔒 = bloqueada. Faixa de cada módulo com objetivo, progresso, 🎧 Ouvir resumo e 🃏 Flashcards. |
| 📖 **Lição** | `#licao/m01-l1` | Fase 1: blocos curtos, um por vez, com a cor do curso (🔴🟡🟢🔵🟣), perguntas "🤔 Antes de ler" com botão Revelar e 🔊 Ouvir. Fase 2: exercícios; errou → perde ❤️ e a questão volta para o fim. Tela final com XP e % de acerto. |
| ⚡ **Quiz Relâmpago** | `#quiz` | 10 perguntas, 20 s cada, 4 blocos fixos 🔴▲ 🔵◆ 🟡● 🟢■. 500–1000 pontos por acerto (mais rápido = mais pontos) + combo 🔗 (+100 por acerto seguido, até +500). Ranking local (top 10). **Desafio em grupo**: 2 a 6 jogadores passando o celular, placar a cada pergunta e pódio. |
| 🔁 **Revisar** | `#revisar` | Revisão espaçada (D+1, D+3, D+7, D+15, D+30) das questões erradas, agenda das próximas revisões, treino livre (intercalado), treino de pontos fracos, lista de baralhos de flashcards. |
| 🃏 **Flashcards** | `#flashcards/m01` | Carta que vira (toque), autoavaliação 😵 Errei / 😐 Difícil / 😎 Fácil. "Errei" volta na mesma sessão; "Fácil" sobe de caixa (Leitner). |
| 🎧 **Modo ônibus** | `#ouvir` | Voz do navegador em português lê o resumo ritmado ou todas as lições do módulo. Velocidade ajustável. |
| 👤 **Perfil** | `#perfil` | Nível, ofensiva e recorde, lições concluídas, % de acerto geral, gráfico de XP por dia (14 dias, com tabela), % de acerto por módulo, pontos fracos e botão para treiná-los. |
| 🏅 **Conquistas** | `#conquistas` | 15 medalhas gerais + 1 por módulo (vem do arquivo de conteúdo). |
| ⚙️ **Configurações** | `#config` | Meta diária (20/50/100 XP), som, tema (auto/claro/escuro), nome no ranking, **exportar/importar** (arquivo .json ou código para copiar/colar), verificador de conteúdo, apagar progresso. |

---

## 3. Fluxo de navegação

Barra inferior: **🏠 Início · 🔎 Consultar · 🚨 Problemas · ⚡ Desafio · 🎓 Estudar**. Perfil (pelo ícone de nível) e ⚙️ Configurações ficam na barra superior, junto com ofensiva, XP do dia e vidas; Favoritos/Histórico ficam em Consultar e no Perfil.

```
🔎 Consultar ──► resultado ──► ficha (30 s → 3 min → prática → teste) ──► conteúdo completo / exercícios
🚨 Problemas ──► categoria ──► problema ──► ferramenta (ficha) ──► conteúdo completo
⚡ Desafio ──► resposta ──► por quê + na prática ──► ferramenta ──► conteúdo
🎓 Estudar ──► (tudo o que já existia, abaixo)
🏠 Início ──"Continuar"──► 📖 Lição ──► blocos ──► exercícios ──► 🎉 Resultado ──► próxima lição / trilha
   │                          │
   │                          └─ ❤️ = 0 ──► 💔 "Sem vidas" ──► 🔁 Revisão (cada acerto = +1 ❤️)
   ├──► 🔁 Revisão ──► sessão ──► resultado
   ├──► 🃏 Flashcards ──► baralho ──► concluído
   ├──► ⚡ Quiz ──► solo ──► pergunta ⇄ resultado ──► pontuação + ranking
   │            └─► grupo ──► "passe o celular" ──► pergunta ──► placar ──► … ──► 🏆 pódio
   └──► 🎧 Modo ônibus
👤 Perfil ──► 🏅 Conquistas  |  ⚙️ Configurações (também pelo ⚙️ da barra superior)
```

O endereço muda com `#` (ex.: `#licao/m01-l3`), então o **botão voltar do celular funciona**.

---

## 4. Regras de gamificação

| Regra | Valor |
|---|---|
| XP por lição nova | 10 + 2 por acerto de primeira + 5 se perfeita |
| XP por lição repetida | 5 + 2 por acerto de primeira |
| XP por acerto na revisão espaçada | 3 (treino livre: 1) |
| XP no Quiz Relâmpago | 2 por acerto + 5 se gabaritar (grupo: 10 por partida) |
| XP por baralho de flashcards | 1 por carta (máx. 20) |
| Vidas | 5 por dia; perde 1 por erro na lição; +1 por acerto na revisão/treino |
| Ofensiva 🔥 | +1 por dia com qualquer XP; se faltar **um** dia, o 🧊 congelamento salva a ofensiva (1 vez a cada 7 dias); faltou mais, zera |
| Níveis | Estagiário 0 · Analista 150 · Eng. Júnior 400 · Pleno 800 · Sênior 1.400 · Gerente de Produção 2.200 · Diretor Industrial 3.500 |
| Revisão espaçada | errou → volta em D+1; cada acerto empurra para D+3, D+7, D+15, D+30; acertou no D+30 → "dominada" |

Tudo isso está no topo do `<script>` do `index.html` (constantes `VIDAS_MAX`, `INTERVALOS_REVISAO`, `TEMPO_QUIZ`, `NIVEIS`…), fácil de ajustar.

---

## 5. Estrutura dos dados

### 5.1 Um módulo (`conteudo/modulo-XX.js`)

```js
(window.MODULOS = window.MODULOS || []).push({
  id: "m13",                 // único
  numero: 13,                // número do módulo no curso
  ordem: 2,                  // posição na trilha (ordem de estudo)
  titulo: "Estatística aplicada",
  icone: "📈",
  objetivo: "Uma frase.",
  conquista: { id: "mod-m13", nome: "Mestre da Média", icone: "📈", descricao: "Concluiu o Módulo 13." },
  resumoAudio: "Texto ritmado que a voz vai ler…",
  licoes: [
    {
      id: "m13-l1", titulo: "Média, mediana e moda", icone: "📊",
      blocos: [ /* ver 5.2 */ ],
      questoes: [ /* ver 5.3 */ ]
    }
  ],
  flashcards: [ { id: "m13-f01", frente: "Pergunta", verso: "Resposta" } ]
});
```

Ordem da trilha (campo `ordem`), seguindo o cronograma: M1=1, M13=2, M2=3, M4=4, M3=5, M6=6, M5=7, M7=8, M8=9, M9=10, M10=11, M11=12, M12=13.

### 5.2 Blocos de conteúdo

| `tipo` | Aparece como | Campos |
|---|---|---|
| `conceito` | 🔴 Conceito-chave | `titulo`, `texto` |
| `atencao` | 🟡 Atenção | `titulo`, `texto` |
| `dica` | 🟢 Dica prática | `titulo`, `texto` |
| `formula` | 🔵 Fórmula | `titulo`, `texto` |
| `conexao` | 🟣 Conexão | `titulo`, `texto` |
| `bobo` | 😂 Exemplo do dia a dia | `titulo`, `texto` |
| `serio` | 🏭 Na empresa | `titulo`, `texto` |
| `mnemonico` | 🔊 Para memorizar | `titulo`, `texto` |
| `mapa` | 🧠 Mapa mental (texto monoespaçado; quebra linhas longas) | `titulo`, `texto`, `largo: true` (opcional: rola na horizontal em vez de quebrar, para Gantt e desenhos em escala) |
| `texto` | 📖 neutro | `titulo`, `texto` |
| `recall` | 🤔 Antes de ler… (com botão Revelar) | `pergunta`, `resposta` |

No `texto`: `**negrito**`, `*itálico*` e `\n` para quebrar linha. Linhas seguidas começando com `|` viram **tabela** (a 1ª linha é o cabeçalho; a linha `|---|` é ignorada); a tabela rola na horizontal no celular.

### 5.3 Questões (todas têm `id` único, `tipo`, `pergunta`, `explicacao`)

| `tipo` | Campos extras | Exemplo |
|---|---|---|
| `multipla` | `opcoes: [4 textos]`, `correta: índice` (0 = primeira) | Qual é…? |
| `vf` | `correta: true` ou `false` | Serviços podem ser estocados. |
| `lacuna` | pergunta com `___`, `opcoes`, `correta` | O LEC é ___. |
| `ligar` | `pares: [["esq","dir"], …]` | Ligue ferramenta ↔ uso |
| `ordenar` | `itens: [em ordem CERTA]` (o app embaralha) | Ordem do DMAIC |
| `caso` | `contexto`, `opcoes`, `correta` | "Você acabou de entrar numa empresa e…" |
| `calculo` | `resposta: número`, `tolerancia`, `unidade`, `resolucao` | Calcule o takt time |

O **Quiz Relâmpago** usa automaticamente as questões `multipla`, `vf` e `lacuna` (até 4 opções) dos módulos liberados.

### 5.4 Progresso salvo (localStorage, chave `engprod_play_v1`)

```js
{
  versao: 1,
  xpTotal: 250,
  xpPorDia: { "2026-09-23": 250 },
  ofensiva: { atual: 1, recorde: 1, ultimoDia: "2026-09-23" },
  vidas: 5, diaVidas: "2026-09-23",
  licoes:   { "m01-l1": { data, acertos, total, vezes } },
  questoes: { "m01-q01": { acertos: 1, erros: 1 } },     // base das estatísticas
  revisao:  { "m01-q01": { etapa: 1, proxima: "2026-09-25" } },
  revisadas: 3, dominadas: 0,
  cartas:   { "m01-f01": { caixa: 1, proxima: "2026-09-24" } },
  cartasVistas: 21,
  conquistas: { "primeira-licao": "2026-09-23" },
  ranking: [ { nome, pontos, acertos, total, data } ],
  metaBatidaEm: "2026-09-23",
  favoritos: [ { k: "f:oee", href: "#ferramenta/oee", icone, tipo, titulo, sub } ],
  historico: [ { …mesmo formato, data } ],          // últimas 30 consultas
  desafios:  { "d07": { data: "2026-09-27", acertou: true } },
  desafioDia: { data: "2026-09-27", id: "d07" },
  ultimo:    { licao: "m03-l2", href, titulo, sub },  // "Continue de onde parou"
  config: { meta: 50, som: true, tema: "auto", velocidadeVoz: 1, nome: "Eu", nivel: "facil", porSessao: 6, estagio: null }
}
```

---

## 6. Como adicionar um módulo novo (2 passos)

1. Crie `conteudo/modulo-13.js` copiando o modelo de `modulo-01.js` (ou cole o que o Claude gerar ao pedir *"converta este módulo para o formato de dados do app"*).
2. Em `conteudo/indice.js`, acrescente o nome do arquivo na lista:
   ```js
   self.ARQUIVOS_MODULOS = [
     "modulo-01.js",
     "modulo-13.js"
   ];
   ```

Abra o app → ⚙️ Configurações → **🧪 Verificador de conteúdo**: ele avisa sobre IDs repetidos, `correta` fora da lista, tipo desconhecido e até erro de digitação (vírgula faltando) com o número da linha.

> 🟡 Depois de publicar uma versão nova, se o celular continuar mostrando a antiga, feche e abra o app de novo (o service worker atualiza em segundo plano). Módulos listados no `indice.js` já ficam guardados para uso offline no 1º acesso. Ao mudar o **código** (`index.html`), aumente `VERSAO` no `sw.js`.

---

## 7. Níveis de estudo e padrão acadêmico (a partir do Módulo 2)

Cada lição pode ter três níveis de **profundidade** (não só de tamanho de texto):

| Nível | Objetivo | Exercícios típicos |
|---|---|---|
| 🌱 Fácil — Fundamentos | construir a base | identificar, explicar, cálculo direto |
| 🔧 Médio — Aplicação | usar fórmulas e ferramentas | cálculo com interpretação, casos, comparação de métodos |
| 🧠 Difícil — Aprofundamento | raciocinar como engenheiro | modelagem, limitações, trade-offs, discursivas com justificativa |

O aluno escolhe o nível na **capa da lição** (`#licao/<id>`), que mostra objetivos, pré-requisitos, tempo estimado e o link do glossário. Para passar para a próxima lição basta concluir **qualquer** nível; cada nível concluído acende 🌱🔧🧠 na trilha.

### Campos novos (todos opcionais)

```js
{
  id: "m02-l5", titulo: "…", icone: "⏱️",
  objetivos: { facil: ["…"], medio: ["…"], dificil: ["…"] },   // ou uma lista única
  prerequisitos: [ { texto: "Distribuição normal (Módulo 13)", licao: "m13-l8" } ],
  resumo: { facil: "…", medio: "…", dificil: "…" },             // ou um texto único
  blocos: [
    { nivel: "facil", tipo: "conceito", titulo: "…", texto: "…" },
    { nivel: "medio", tipo: "formula", titulo: "…", texto: "…",
      legenda: [["σ", "desvio-padrão"], ["n", "tamanho da amostra"]] },
    { tipo: "serio", titulo: "Caso comum a todos os níveis", texto: "…" }   // sem nivel = todos
  ],
  questoes: [
    { id: "m02-q061", nivel: "dificil", tipo: "multipla", pergunta: "…", opcoes: ["…","…","…","…"], correta: 1,
      justificativas: ["por que a) está errada", "por que b) está certa", "…", "…"], explicacao: "…" },
    { id: "m02-q065", nivel: "dificil", tipo: "discursiva", pergunta: "…",
      respostaModelo: "…", criterios: ["critério 1", "critério 2"] }
  ]
}
// no módulo:
glossario: [ { termo: "Folga livre", definicao: "…" } ]
```

**Blocos novos:** `contexto` (🏭 por que importa), `exemplo` (🧮 exemplo resolvido), `passos` (🛠️ passo a passo), `limitacao` (⚖️ limitações e trade-offs), `referencia` (📚 para aprofundar).

**Lições sem nenhum `nivel`** aparecem como **“nível único”**: nada quebra. (Hoje todos os módulos do curso têm os 3 níveis; no M1 e no M13 o conteúdo original virou o nível Fácil.)

### Indicadores honestos (perfil)
- **Lições concluídas:** conteúdo percorrido (por nível).
- **Acerto nos exercícios:** todas as tentativas.
- **Retenção confirmada:** questões acertadas de novo pelo menos 7 dias depois do primeiro contato. É o indicador mais próximo de domínio real.

### Apostila gerada dos dados
`node testes/gerar-apostila.js modulo-02.js curso/03-modulo-02-projetos.md` transforma o arquivo de dados em uma apostila Markdown (com exercícios e gabarito). O conteúdo tem uma fonte só.

---

## 8. Banco de questões e números sorteados

**Sorteio por lição.** Cada vez que o aluno faz uma lição, o app sorteia até N questões do banco daquele nível (⚙️ → *Questões por lição*: 4, 6, 8 ou todas). A escolha prioriza questões **nunca vistas** e as que o aluno **mais erra**, e tenta variar os **tipos** (cálculo, caso, ligar…). Assim, repetir a lição não é repetir a mesma prova.

**Questões com números sorteados (🎲).** Uma questão de cálculo vira *modelo* quando ganha `variaveis`. A cada exibição os números mudam e a resposta e a resolução são recalculadas. Até a questão errada que volta na revisão aparece com números novos: é preciso refazer o raciocínio, não lembrar do número.

```js
{ id: "m04-t03", nivel: "facil", tipo: "calculo",
  variaveis: { to: { min: 1.5, max: 4, passo: 0.1 }, r: { valores: [90, 95, 105, 110] } },
  resposta: "to*r/100", tolerancia: 0.01, unidade: "min",
  pergunta: "Tempo observado = {to} min; ritmo = {r}%. Qual o tempo normal? (2 casas)",
  resolucao: "TN = {to} × {=r/100} = {=to*r/100:2} min" }
```

- Variáveis: `{ min, max, passo }`, `{ valores: [...] }` ou `{ lista: 5, min, max }` (lista de números).
- `calc` cria valores derivados; `condicao` descarta sorteios inválidos.
- Nos textos: `{nome}`, `{nome:2}` (2 casas) e `{=expressão:1}` (calcula e formata).
- Funções disponíveis: as de `Math` (sqrt, pow, ceil, floor, log, max…) e `Phi` (normal padrão), `soma`, `media`, `mediana`, `desvio`, `ordenar`, `arred`.
- O **Verificador de conteúdo** sorteia cada modelo várias vezes e avisa sobre respostas inválidas, marcadores não preenchidos ou nomes de variável que coincidem com funções.

**Onde acrescentar questões.** No arquivo `conteudo/banco-questoes.js`, com `add("id-da-licao", [ ...questões ])`. Não é preciso mexer nos arquivos dos módulos.

## 9. Trilha paralela (`liberaApos`)

Um módulo com `liberaApos: ["m13"]` fica no fim da trilha, mas a sua primeira lição libera assim que os módulos indicados forem concluídos. É o caso do Módulo 14 (Dados), que depende só da Estatística. Lições já concluídas continuam sempre liberadas, mesmo se a ordem da trilha mudar com a chegada de novos módulos.

## 10. Grade curricular (disciplinas) — `conteudo/grade/`

As disciplinas da grade curricular do Bacharelado em Engenharia de Produção (fluxograma enviado pela aluna) ficam em `conteudo/grade/p01.js` a `p09.js` (o 10º período está em `p09.js`). Cada disciplina é um objeto em `window.DISCIPLINAS`:

```js
{ id: "g-calc1", codigo: "GEXT-7301", nome: "Cálculo a Uma Variável", periodo: 1,
  area: "exatas",            // exatas | engenharia | producao | gestao | humanas (define a cor)
  icone: "📈", creditos: "(5-0-0) 5 créditos",
  prereq: ["g-..."],         // ids de outras disciplinas (opcional)
  relacionado: ["m03"],      // módulos do curso que aprofundam o tema (opcional)
  intro: "Para que serve na Engenharia de Produção…",
  topicos: [{ t: "Derivadas", pontos: ["frase", …], formulas: [["fórmula", "significado dos símbolos"]],
              producao: "onde se usa na produção", exemplo: "exemplo resolvido" }],
  glossario: [["termo", "definição"]],
  questoes: [{ t: 2, id: "g-calc1-q05", tipo: "multipla", … }]   // t = índice do tópico
}
```

- O app converte cada disciplina num **módulo da aba Grade** (uma lição por tópico, com os exercícios daquele tópico). Assim XP, revisão espaçada, quiz e perfil funcionam igual aos módulos.
- Os mesmos dados alimentam o **Conteúdo** e os **Mapas mentais** (não há duplicação).
- As matérias de exatas trazem sempre a aplicação em produção (ex.: derivada → custo marginal e lote econômico; limite → custo médio em escala; integral → produção acumulada e energia).
- Validação: `node testes/validar-grade.js` (ids, tópicos com exercícios, modelos com números sorteados).
- Observações: o conteúdo segue os temas usuais de cada disciplina e **não substitui a ementa oficial**; algumas posições das colunas F e G do fluxograma (pré-requisitos) não ficaram claras na extração do PDF e foram omitidas.

---

## 11. Problemas, ferramentas, desafios e Modo Estágio — `conteudo/problemas.js` e `conteudo/desafios.js`

```js
window.PROBLEMAS = {
  categorias: [{ id: "estoque", nome: "Estoque", icone: "📦", desc: "…" }],
  problemas: [{ id: "estoque-demais", termos: "estoque alto excesso…", cat: "estoque", titulo: "Tenho estoque demais",
                desc: "…", comecar: "Comece pela **Curva ABC**…", ferramentas: ["curva-abc", "giro-estoque", …] }],
  ferramentas: { "curva-abc": { nome, icone, termos, oque, paraque, quando, dados: [...], formulas: [[fórmula, significado]],
                 exemplo, erros, ver: ["g-logist-l2", "m03-l5"] } },   // ver = lições/tópicos que já existem no app
  areasEstagio: [{ id: "pcp", nome: "PCP", icone, cats: [...], ferramentas: [...], estudo: ["m03", "g-pcp1"] }]
};
window.DESAFIOS = [{ id: "d01", areas: ["pcp"], ferramenta: "capacidade", pergunta, opcoes: [...], correta: 0, porque, pratica }];
```

- **ver**: ids de lição do curso (`m03-l2`) ou de tópico da grade (`g-logist-l2` = 2º tópico da disciplina). A ficha liga direto a `#conteudo/<módulo>/<lição>`.
- O **Verificador de conteúdo** (⚙️) aponta ferramenta, lição, categoria, módulo ou desafio que não existe.
- A **busca** indexa ferramentas, problemas (com `termos`), disciplinas e módulos, termos de todos os glossários, lições/tópicos e fórmulas; ignora acentos, palavras curtas comuns e plural simples.
- Hoje: 12 categorias, 42 problemas, 68 ferramentas, 42 desafios e 10 áreas de estágio.
