# 🚀 Como abrir, testar e publicar o ProdLean (para quem nunca programou)

## Opção A — Testar no computador (2 minutos)

1. Baixe a pasta `app/` inteira (no GitHub: botão verde **Code → Download ZIP**, depois descompacte).
2. Dê **dois cliques** em `index.html`. Ele abre no navegador (use Chrome ou Edge).
3. Pronto: a trilha, as lições, o quiz e o progresso já funcionam.

> 🟡 Aberto assim (pelo arquivo), o modo **offline/instalar** não funciona e alguns celulares não guardam o progresso. Para usar no dia a dia, publique no Netlify (Opção B). É grátis.

**Testar como se fosse um celular:** no Chrome, aperte `F12` → clique no ícone de celular/tablet (📱, "Toggle device toolbar") → escolha um modelo, ex.: "Pixel 7".

---

## Opção B — Publicar grátis no Netlify Drop (recomendado, ~5 min)

1. No computador, baixe a pasta `app` (ou o arquivo **`engprod-play.zip`** que te enviei) e **descompacte**.
2. Acesse **app.netlify.com/drop** e arraste a **pasta** descompactada (a que tem o `index.html` dentro) para a área indicada.
3. Em segundos você recebe um link `https://nome-aleatorio.netlify.app`. Crie uma conta grátis para o link não expirar e poder trocar o nome.
4. Para atualizar: arraste a pasta de novo em **Deploys**.

O app fica direto no link (não precisa de `/app/` no final).

(Vercel também funciona: *Add New → Project → importe o repositório → Root Directory = `app` → Deploy*.)

---

## 📲 Instalar no celular como app

1. Abra o endereço acima no **Chrome (Android)** ou **Safari (iPhone)**.
2. Android: menu **⋮ → Adicionar à tela inicial / Instalar app**.
   iPhone: botão **Compartilhar (□↑) → Adicionar à Tela de Início**.
3. Abra pelo ícone 🟢⚙️ uma vez com internet (o link do Netlify). A partir daí ele funciona **sem internet** (no ônibus, no metrô).

---

## Opção C — GitHub Pages (só se o repositório for público)

🟡 Seu repositório hoje é **privado**, e o GitHub Pages grátis só publica repositórios **públicos**. Se um dia você torná-lo público (Settings → General → Danger Zone → Change visibility), é só ligar o Pages:

1. Entre no repositório no GitHub pelo navegador.
2. Clique em **Settings** (⚙️, no menu de cima do repositório).
3. No menu da esquerda, clique em **Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Em **Branch**, escolha o branch onde está o app (ex.: `main`, depois de juntar este branch nele; ou o próprio branch `claude/engenharia-producao-curso-ensmn3`) e a pasta **`/ (root)`**. Clique em **Save**.
6. Espere 1–3 minutos e recarregue a página. Aparece: *"Your site is live at https://SEU-USUARIO.github.io/NOME-DO-REPO/"*.
7. O app fica em: **`https://SEU-USUARIO.github.io/NOME-DO-REPO/app/`**

---

## Como atualizar com um módulo novo

1. Pegue o texto do módulo convertido (arquivo `modulo-XX.js`).
2. No GitHub, abra a pasta `app/conteudo/` → **Add file → Create new file** → nome `modulo-13.js` → cole → **Commit changes**.
3. Abra `app/conteudo/indice.js` → ✏️ (editar) → acrescente `"modulo-13.js"` na lista → **Commit changes**. O build da Netlify gera o catálogo sozinho.
4. **Netlify:** o site prodlean está ligado ao repositório **ProdLean_AprendendoSobreEngenhariaDeProducao** (branch `main`): cada commit publica sozinho em segundos (o `netlify.toml` na raiz roda `npm run build` e publica a pasta `dist`). Se usar o Netlify Drop, rode `npm run build` no computador e arraste a pasta `dist`.
5. Abra o app, feche e abra de novo. Confira em ⚙️ → **Verificador de conteúdo** se está tudo ✓.

🟢 Mais fácil ainda: me peça *"adicione o módulo X no app"* e eu faço os passos 1 a 3 e testo tudo; você só repete o passo 4.

---

## Não perca seu progresso 💾

O progresso fica **só naquele navegador, naquele aparelho**. Antes de trocar de celular, formatar ou "limpar dados do navegador":

1. ⚙️ Configurações → **⬇️ Exportar arquivo** (guarda um `.json`) **ou** **📋 Copiar código** (mande para você mesmo no WhatsApp/e-mail).
2. No aparelho novo: ⚙️ → **⬆️ Importar arquivo** ou cole o código → **Importar código**.

🟢 Dica: exporte uma vez por semana, no dia do desafio semanal.

---

## Problemas comuns

| Problema | Solução |
|---|---|
| Tela "Carregando…" parada ou trilha vazia | Algum arquivo de `conteudo/` tem erro. Veja ⚙️ → Verificador de conteúdo. Normalmente é vírgula ou aspas faltando. |
| A voz não fala | Verifique o volume/modo silencioso. No Android, instale/ative "Serviços de fala do Google" em português. No iPhone, desligue o modo silencioso. |
| Não aparece "Instalar app" | Precisa estar publicado em `https://` (Netlify ou GitHub Pages), não aberto pelo arquivo. |
| Mudei o conteúdo e o celular mostra o antigo | Feche o app totalmente e abra de novo (às vezes 2 vezes). |
| Perdi as vidas ❤️ | Vá em 🔁 Revisar → cada acerto devolve 1 vida. À meia-noite elas recarregam. |
