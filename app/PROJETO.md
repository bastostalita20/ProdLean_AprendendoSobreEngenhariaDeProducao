# 📱 ProdLean — visão geral do projeto

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

Por trás das abas está o app de estudo gamificado (antes chamado EngProd Play), que continua inteiro dentro de **🎓 Estudar**. Mistura **conteúdo didático + Duolingo** (trilha, lições curtas, ofensiva, XP) **+ Kahoot** (quiz com tempo, cores, formas e ranking).

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
    ├── indice.js       ← LISTA dos arquivos de conteúdo + os que abrem o app (ARQUIVOS_INICIAIS)
    ├── catalogo.js     ← GERADO pelo build: estrutura leve de todo o conteúdo (abre o app)
    ├── catalogo-busca.js ← GERADO: glossário, flashcards e fórmulas (busca; logo após a 1ª tela)
    ├── siglas.js       ← significado das siglas
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
scripts/build.js        ← build da Netlify: gera os catálogos e copia app/ → dist/ minificado
package.json            ← "npm run build" (usa o esbuild só no build; o app não tem bibliotecas)
```

### Métricas: Cloudflare Web Analytics (sem cookies, grátis)

O build (`instalarAnalytics` em `scripts/build.js`) coloca o script do Cloudflare em **todas** as páginas (app + páginas públicas) só se existir a variável de ambiente `CF_ANALYTICS_TOKEN` na Netlify. Sem ela, nada é instalado. Token mal copiado faz o build falhar com a mensagem explicando (o site continua na versão anterior).

**Como ligar (uma vez):**
1. Crie uma conta grátis em **dash.cloudflare.com** → menu **Analytics & Logs → Web Analytics** → **Add a site** → digite o domínio do site (hoje `prodleanaprendendosobreengenhariade-three.vercel.app`) → escolha a opção **sem mudar o DNS** (“JS snippet”).
2. O Cloudflare mostra um código com `"token": "…"`. Copie **só o token** (32 letras e números).
3. Na Netlify: **Project configuration → Environment variables → Add a variable** → nome `CF_ANALYTICS_TOKEN`, valor = o token → salve.
4. Em **Deploys → Trigger deploy → Deploy site**. Pronto: em algumas horas os acessos aparecem no painel do Cloudflare.

**O que dá para ver:** visitas por página (quais fichas, problemas e disciplinas o Google mais traz), de onde vêm (Google, WhatsApp…), país, aparelho e velocidade real do site. **Conversão para o app:** visitas a `/` vindas das páginas públicas (botão “Praticar isso no app”) aparecem com essas páginas como origem. As telas internas do app usam `#` no endereço e não são contadas uma a uma.
**Privacidade:** não usa cookies nem guarda dados pessoais (não precisa de aviso de cookies).

### Crescimento (Fase 5, parte sem servidor)

- **📤 Compartilhar resultado:** no desafio do dia (tela e Início), no Quiz (solo e pódio do grupo) e em Conquistas. `compartilhar()` gera uma imagem 1080×1080 no canvas (`imagemResultado`) e usa o compartilhamento do celular (`navigator.share` com arquivo); sem ele, compartilha só o texto ou copia para a área de transferência. O link volta para o app (ex.: `#desafio/extra/<id>`, que mostra o mesmo desafio para quem recebe).
- **Para professores:** página pública `/professores/` (gerada em `scripts/seo.js`), com link no rodapé das páginas públicas.
- **Decisão (out/2026):** o app continua **todo gratuito**; assinatura, loja, afiliados e anúncios ficam para depois. Ranking por turma, indicação de amigos e lembrete por notificação dependem de servidor (Supabase + Netlify Functions) e ficam pendentes.

### Páginas públicas para o Google (Fase 3) — `scripts/seo.js`

O build gera, a partir dos mesmos arquivos de conteúdo, páginas HTML estáticas e indexáveis (o app não muda):

| Endereço | Conteúdo | Dados estruturados |
|---|---|---|
| `/ferramentas/` e `/ferramentas/<id>/` | 80 fichas: o que é, para que serve, quando usar, dados, fórmulas, exemplo resolvido, erros comuns, teste rápido com resposta, problemas em que ajuda, ferramentas relacionadas e onde estudar | `DefinedTerm`, `FAQPage`, `BreadcrumbList` |
| `/problemas/` e `/problemas/<id>/` | 52 situações por categoria, por onde começar e ferramentas | `FAQPage`, `BreadcrumbList` |
| `/disciplinas/` e `/disciplinas/<nome>/` | 56 disciplinas por período: introdução, tópicos, fórmulas, exemplos, glossário e bibliografia (sem as questões) | `Course`, `BreadcrumbList` |
| `/glossario/` e `/glossario/<letra>/` | 827 termos (repetidos entre disciplinas aparecem uma vez) | `DefinedTermSet` |

- Cada página: `title` e `description` próprios, um H1, `canonical`, Open Graph com **imagem gerada** (`/og/*.png`, 1200×630, fonte DejaVu em `scripts/fontes/`, desenhada com `@resvg/resvg-js`), links internos e o botão **“Praticar isso no app”**, que abre o ponto certo (`/#ferramenta/<id>`, `/#problema/<id>`, `/#conteudo/<id>`, `/#licao/<id>`).
- Também: `sitemap.xml`, `robots.txt` e `404.html`. A página do app (`index.html`) ganhou `canonical`, Open Graph e `WebApplication` em JSON-LD.
- Endereço do site: `SITE_URL` (se definida) → domínio de produção da Vercel (`VERCEL_PROJECT_PRODUCTION_URL`) → `URL` da Netlify → padrão `https://prodlean.vercel.app`. Ao trocar de domínio, tudo se ajusta no próximo build.
- **Anúncios** (opcional, só nas páginas públicas, nunca nas lições): desligados. Para ligar, defina `ANUNCIOS_HTML` nas variáveis de ambiente da Netlify.
- **Teste:** `npm run testar-seo` confere title, description, canonical, H1, JSON-LD, imagem de prévia, links internos quebrados, sitemap e ausência de códigos/menção à instituição.
- **Lighthouse:** páginas de ferramenta, problema e glossário com 100 em Performance, Acessibilidade, Boas práticas e SEO.

### Carregamento sob demanda e build (Fase 2)

- **Abertura:** o app baixa só `index.html` (com `parametros.js` e `indice.js` embutidos no build), `catalogo.js`, `problemas.js`, `desafios.js` e `siglas.js` — ~125 KB comprimidos, em paralelo (`<link rel="preload">`). Antes eram ~580 KB em 26 arquivos, um depois do outro.
- **Catálogo:** `scripts/build.js` lê todo o conteúdo e gera os esboços (módulos, disciplinas, lições, id/tipo/nível de cada questão, ids dos flashcards). O app monta MODS/LICOES/Q a partir deles com o mesmo código de sempre (`prepararConteudo`), então trilha, revisão espaçada, contagens e progresso funcionam sem baixar o texto.
- **Sob demanda:** `rotear()` pergunta a `telaPrecisa()` o que a tela precisa (ex.: `licao/…` → o módulo da lição; `conteudo/<id>` → aquele módulo; `quiz` → tudo) e `carregarModulos()` baixa só os arquivos que faltam e **hidrata** os esboços no lugar (mesmos objetos). `catalogo-busca.js` chega logo depois da 1ª tela (busca, glossário e flashcards).
- **Offline:** o service worker guarda o núcleo na instalação e cada módulo conforme é aberto, num cache que não é apagado nas atualizações. Em ⚙️ Configurações → **📥 Baixar tudo para offline** guarda o resto de uma vez. Sem conexão e sem o módulo baixado, a tela avisa e oferece tentar de novo.
- **Versões:** cada arquivo de módulo é pedido com a impressão digital dele (`?v=…`, do catálogo), para nunca misturar módulo antigo em cache com catálogo novo. O build também acrescenta uma impressão digital à `VERSAO` do `sw.js`.
- **Sem build:** aberto pelo arquivo (`file://`) ou sem `catalogo.js`, o app volta ao modo antigo e carrega tudo.
- **Ao editar conteúdo:** rode `node scripts/build.js --catalogo` (ou `npm run catalogo`) para atualizar os catálogos; `npm run checar` acusa catálogo desatualizado. Na Netlify o build roda sozinho (`netlify.toml`: `npm run build`, publica `dist/`).
- **Medição (Lighthouse na versão minificada):** celular (4G lento simulado) Performance 99, Acessibilidade 100, Boas práticas 100, SEO 100 — primeira pintura 1,0 s, maior elemento 1,7 s, bloqueio 70 ms; desktop 100 em tudo.
- **Testes:** `node testes/teste-app.js` roda contra `app/`; com `APP_DIR=dist` e o servidor da porta 8765 servindo `dist/`, testa a versão minificada. O teste offline sobe um servidor próprio (porta 8767) e o desliga de verdade, porque o "offline" do Playwright não vale para o service worker.

---

## 2. Telas

| Tela | Rota | O que tem |
|---|---|---|
| 🏠 **Início** | `#inicio` | “Olá! 👋”, pesquisa grande com resultados na hora, **▶️ Continuar de onde parei** (última lição), **⚡ Desafio do dia embutido** (responde ali mesmo; depois mostra a resposta e o link para o porquê), **🔁 Revisão de hoje** (questões e flashcards vencidos) e **🔥 Mais consultados** em chips. |
| 🔎 **Consultar** | `#consultar` · `#consultar/<busca>` | Central de consulta: busca conceitos, ferramentas, fórmulas, disciplinas, lições, indicadores, métodos e problemas. Sem busca: mais consultados (ou os da sua área), favoritos, vistos recentemente, todas as ferramentas e glossário. |
| 📄 **Ficha de consulta** | `#ferramenta/<id>` · `#consulta/<chave>` | Níveis progressivos: **⚡ 30 s** (resumo: o que é, para que serve) → **📚 3 min** (quando usar, dados, fórmula, erros comuns) → **🏭 Na prática** (exemplo) → **🧠 Teste** (1 pergunta) → **🔬 Aprofunde** (links diretos ao conteúdo completo, aos exercícios, ao mapa e aos problemas relacionados). ☆ Salvar nos favoritos e 🔊 Ouvir a ficha inteira (problemas e explicação do desafio também têm 🔊 Ouvir). Chaves: `g:<módulo>:<termo>` (conceito do glossário), `l:<lição>` (lição ou tópico). |
| 🧰 **Ferramentas** | `#ferramentas` | Todas as fichas de ferramenta, em ordem alfabética, com filtro. |
| 🚨 **Problemas** | `#problemas` · `#problemas/<categoria>` · `#problema/<id>` | “Qual problema você precisa resolver?”: 12 categorias e busca em linguagem do dia a dia → situações (“Tenho estoque demais”) → “Por onde começar” + ferramentas que podem ajudar → ficha → conteúdo. |
| ⚡ **Desafio do dia** | `#desafio` · `#desafio/extra` · `#desafio/historico` · `#desafio/ver/<id>` | Um problema curto por dia (o mesmo o dia inteiro; da sua área no Modo Estágio). Depois de responder: ✅ resposta, “Por quê?”, “Na prática” e “Quer entender melhor?”. +10 XP (acerto) ou +3 XP (tentativa), contando para meta e ofensiva. Histórico com % de acerto. |
| 🎓 **Estudar** | `#estudar` · `#estudar/assunto` · `#estudar/disciplina/<período>` · `#estudar/area/<área>` · `#estudar/praticar` · `#estudar/materiais` | Três blocos em abas: **📖 Estudar** (por assunto, disciplina ou área), **🎮 Praticar** (exercícios da trilha, Quiz, revisão espaçada, flashcards e pontos fracos) e **📚 Materiais** (mapas mentais, conteúdo completo, glossário e áudio). O nível Fácil/Médio/Difícil é um **filtro** no topo, salvo em `config.nivel`. Endereços antigos (`#estudar/assuntos`, `/areas/…`, `/nivel/…`, `/aprofundar`) continuam funcionando. |
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

Barra inferior: **🏠 Início · 🔎 Consultar · 🚨 Problemas · 🎓 Estudar · 👤 Perfil**. O Desafio do dia fica no Início (e segue em `#desafio`). A barra superior tem só ofensiva, XP do dia e o avatar, que abre o Perfil; Configurações, Conquistas, Modo Estágio, Salvos e Desafios feitos ficam nos atalhos do topo do Perfil.

```
🔎 Consultar ──► resultado ──► ficha (30 s → 3 min → prática → teste) ──► conteúdo completo / exercícios
🚨 Problemas ──► categoria ──► problema ──► ferramenta (ficha) ──► conteúdo completo
⚡ Desafio ──► resposta ──► por quê + na prática ──► ferramenta ──► conteúdo
🎓 Estudar ──► (tudo o que já existia, abaixo)
🏠 Início ──"Continuar"──► 📖 Lição ──► blocos ──► exercícios ──► 🎉 Resultado ──► próxima lição / trilha
   ├──► 🔁 Revisão ──► sessão ──► resultado
   ├──► 🃏 Flashcards ──► baralho ──► concluído
   ├──► ⚡ Quiz ──► solo ──► pergunta ⇄ resultado ──► pontuação + ranking
   │            └─► grupo ──► "passe o celular" ──► pergunta ──► placar ──► … ──► 🏆 pódio
   └──► 🎧 Modo ônibus
👤 Perfil (aba ou avatar) ──► ⚙️ Configurações · 🏅 Conquistas · 🎯 Modo Estágio · ⭐ Salvos · ⚡ Desafios
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
| Vidas | Desativadas: errar não bloqueia o estudo (a questão errada volta para o fim da lição e entra na revisão espaçada). Os campos `vidas` e `diaVidas` continuam no estado só por compatibilidade. |
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
2. Em `conteudo/indice.js`, acrescente o nome do arquivo na lista `ARQUIVOS_MODULOS` e rode `node scripts/build.js --catalogo` (o catálogo precisa conhecer o módulo novo):
   ```js
   self.ARQUIVOS_MODULOS = [
     "modulo-01.js",
     "modulo-13.js"
   ];
   ```

Abra o app → ⚙️ Configurações → **🧪 Verificador de conteúdo**: ele avisa sobre IDs repetidos, `correta` fora da lista, tipo desconhecido e até erro de digitação (vírgula faltando) com o número da linha.

> 🟡 Depois de publicar uma versão nova, se o celular continuar mostrando a antiga, feche e abra o app de novo (o service worker atualiza em segundo plano). Cada módulo fica guardado para uso offline quando é aberto (ou todos, pelo botão **Baixar tudo para offline**). Ao mudar o **código** (`index.html`), aumente `VERSAO` no `sw.js` (o build também acrescenta uma impressão digital).

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
{ id: "g-calc1", nome: "Cálculo a Uma Variável", periodo: 1,
  area: "exatas",            // exatas | engenharia | producao | gestao | humanas (define a cor)
  icone: "📈",
  prereq: ["g-..."],         // ids de outras disciplinas (opcional)
  relacionado: ["m03"],      // módulos do curso que aprofundam o tema (opcional)
  intro: "Para que serve na Engenharia de Produção…",
  topicos: [{ t: "Derivadas", pontos: ["frase", …], formulas: [["fórmula", "significado dos símbolos"]],
              producao: "onde se usa na produção", exemplo: "exemplo resolvido" }],
  glossario: [["termo", "definição"]],
  referencias: ["AUTOR. *Obra*. Editora."],                    // "Para aprofundar" (opcional)
  questoes: [{ t: 2, id: "g-calc1-q05", tipo: "multipla", … }]   // t = índice do tópico
}
```

**Aprofundar uma disciplina com material de aula:** acrescente tópicos **no fim** da lista `topicos` (o id de cada lição é `<disciplina>-l<posição>`; inserir no meio mudaria os ids e o progresso salvo), com questões `t` apontando para eles, termos no glossário e as obras de base em `referencias`. Explique com suas palavras e cite a bibliografia, não o material do professor. Assim foram aprofundadas **Projeto do Produto** (inovação e BCG, planejamento estratégico do produto, propriedade intelectual e busca de anterioridade, projeto informacional e Kano, projeto conceitual e matriz morfológica, projeto detalhado e protótipos, custo-alvo/análise de valor/DFMA, ecodesign e confiabilidade), **Gestão de Projetos** (PMBOK, requisitos e rastreabilidade, EAP/dicionário/RACI, cronograma e PERT probabilístico, custos com ENT/IDCP, riscos com VME, partes interessadas e comunicação, qualidade/aquisições/encerramento, ágil na prática) e **PCP I** (previsão com parametrização no Solver e método de Holt, MRP/ERP, políticas de estoque, PCP nas organizações, regressão, índices sazonais, planejamento agregado, MPS com custos, registro do MRP com capacidade, estrutura de produto, sequenciamento e estoques com incerteza). Todos os números dos exemplos foram recalculados antes de entrar no app.

**Siglas:** `conteudo/siglas.js` lista `[sigla, significado, contexto?]`. Na primeira vez que a sigla aparece em cada texto, o app mostra o significado entre parênteses: "CPI (índice de desempenho de custo)". Pares com barra ganham um só parêntese: "IDC/CPI (…)". Siglas com mais de um sentido, como VP (valor planejado ou verdadeiro positivo) e ES (estoque de segurança ou início mais cedo), levam um `contexto`, uma expressão regular com as siglas vizinhas; sem contexto que case, ficam como estão. Não explica quando o texto já tem parênteses ao lado, nos mapas A4, nem quando o significado aparece nas alternativas da questão, o que entregaria a resposta. O Ouvir também lê os significados. Sigla nova no conteúdo → acrescente uma linha no arquivo.

**Mapas longos:** se nem a letra mínima faz o mapa caber na folha A4, ele se resume sozinho em etapas (primeira frase de cada item → até 4 pontos e 3 fórmulas por tópico → até 3 pontos, 2 fórmulas e 8 termos → até 2 pontos e 1 fórmula → 1 ponto por tópico, sem exemplos) e avisa “✂️ Textos resumidos”. Mapas que já cabem não mudam.

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
- Hoje: 12 categorias, 52 problemas, 80 ferramentas, 62 desafios e 10 áreas de estágio.

## 12. Identidade visual profissional (Reformulação, Etapa 1)

- **Paleta:** azul petróleo `--primary: #0f4c5c` com acento âmbar `--accent: #c27803`; cores semânticas (ok/erro/aviso/info) e modo escuro. Os tokens ficam no bloco "ESTILO PROFISSIONAL (v2)" no fim do `<style>` do `index.html`.
- **Fontes:** Inter (texto) e JetBrains Mono (números, tabelas), servidas de `app/vendor/fontes/` (funcionam offline).
- **Ícones:** Lucide (linha), num sprite SVG embutido no `index.html` entre `<!--ICONES-->` e `<!--/ICONES-->`. Use `ic("nome")` no código. Para incluir um ícone: acrescente em `ICONES` no `scripts/vendor.js` e rode `npm run vendor`.
- **Emojis:** só no nível Fácil e no modo jogo (Trilha, quiz). Nas demais telas um filtro (`semEmoji`, `MutationObserver`) tira os emojis do texto exibido; o conteúdo continua com eles. A flag `EMOJI_OK` é definida em `rotear()`.
- **Fórmulas (KaTeX):** `npm run formulas` (ou o build) lê todas as fórmulas em texto do conteúdo, converte para LaTeX e grava `conteudo/formulas-tex.js`, conferindo cada uma com o KaTeX. O relatório visual sai em `dist-relatorio/formulas.html`. Conversões erradas são corrigidas em `conteudo/formulas-tex-manual.js` (valor "" = mostrar como texto). No app, `htmlFx(f)` gera `<span class="fx" data-f="…">texto</span>`; o KaTeX (`vendor/katex/`) é carregado sob demanda e troca o texto pela fórmula. Sem KaTeX (offline sem cache), o texto original continua visível.
- **Tabelas:** tabelas Markdown viram `.tabela` com cabeçalho fixo, primeira coluna fixa e números alinhados à direita (`td.n`, detectados por `ehNum`).
- **Navegação:** Início · Buscar · Trilha · Exercícios · Perfil. Problemas, ferramentas, disciplinas e mapas ficam dentro de Buscar.

## 13. Busca agrupada e página do assunto (Reformulação, Etapa 2)

- **Assuntos** (`assuntos()` no `index.html`): juntam o que é do mesmo tema. Cada ferramenta vira um assunto (`f:<id>`) com o conceito do glossário de mesmo nome ou sigla, as lições de `ver` e as lições cujo título cita a ferramenta. Os termos do glossário sem ferramenta viram assuntos de conceito (`g:<módulo>:<termo>`) com os tópicos do módulo que os citam. Tópicos sem tema próprio continuam como `l:<lição>`. A comparação tolera plural e flexão (`temPalavra`).
- **Busca** (`buscarAgrupado`): um cartão por assunto, com atalhos Conceito · Lição(ões) · Ferramenta · Exercícios (n) · Mapa. Problemas e disciplinas aparecem em "Relacionados".
- **Página do assunto** (`#assunto/<chave>/<aba>`): abas Visão geral · Conceito · Ferramenta · Lições · Exercícios · Mapa. A aba fica no endereço. Em Exercícios há prática livre por nível, com até 10 questões (as mais erradas primeiro). As respostas entram nas estatísticas e na revisão espaçada.
- **Início:** pesquisa, continuar, desafio do dia, revisão de hoje e **Seu progresso** (disciplinas e módulos começados, com barra).
