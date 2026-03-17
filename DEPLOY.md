# Como colocar seu portfólio no ar (gratuito)

Deploy pelo Git (GitHub Pages). As **fotos não entram no repositório** — você usa URLs no `data.js`.

---

## Fotos fora do repositório

As imagens estão no `.gitignore`, então **não serão enviadas ao GitHub**. O site usa as URLs que você configurar no `data.js`.

### Passo 1: Hospedar as imagens (gratuito)

1. Acesse [imgur.com](https://imgur.com) e crie uma conta (ou use [postimages.org](https://postimages.org) sem conta).
2. Envie as **3 imagens**:
   - sua foto de perfil
   - print do Projeto 1 (Previsão de HH)
   - print do Projeto 2 (EDA)
3. Para cada uma, pegue o **link direto** da imagem (no Imgur: botão direito na imagem → “Copiar endereço da imagem”; costuma ser algo como `https://i.imgur.com/XXXXX.png`).

### Passo 2: Colocar as URLs no `data.js`

Abra `data.js` e:

- **Foto de perfil:** altere `heroImageUrl` para a URL da sua foto:
  ```js
  heroImageUrl: 'https://i.imgur.com/SUA_FOTO.png',
  ```

- **Projetos:** em cada item do array `projects`, altere o campo `image` para a URL do print:
  ```js
  // Projeto 1
  image: 'https://i.imgur.com/PRINT_PROJETO_1.png',

  // Projeto 2
  image: 'https://i.imgur.com/PRINT_PROJETO_2.png',
  ```

Salve o arquivo. Assim o site carrega as imagens pela internet e o repositório não precisa (e não vai) ter as fotos.

---

## Deploy no GitHub Pages

### 1. Criar o repositório no GitHub

- Acesse [github.com/new](https://github.com/new).
- Nome sugerido: **`igorgtdas.github.io`** (assim a URL do site fica `https://igorgtdas.github.io`).
- Crie o repositório (pode ser público ou privado; as fotos não estarão nele).

### 2. Subir o projeto (PowerShell)

Na pasta do projeto:

```powershell
cd "c:\Users\igor_\Projetos Data Siencea-AI Engineer"

git init
git add index.html styles.css script.js data.js .gitignore DEPLOY.md
git status
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/igorgtdas/igorgtdas.github.io.git
git push -u origin main
```

(Se o repositório tiver outro nome, troque `igorgtdas.github.io` na URL do `remote`.)

**Importante:** as fotos **não** entram no `git add` porque estão no `.gitignore`. Só sobem o código e o `data.js` com as URLs.

### 3. Ativar o GitHub Pages

- No GitHub: repositório → **Settings** → **Pages**.
- Em **Source**: **Deploy from a branch**.
- Branch: **main**, pasta **/ (root)**.
- Salve. Em 1–2 minutos o site estará em **https://igorgtdas.github.io**.

### 4. Usar no LinkedIn

Use essa URL no campo “Website” ou “Link” do seu perfil.

---

## Resumo

| Onde está | O que sobe no Git |
|-----------|--------------------|
| Fotos (perfil + prints) | Não — ficam no Imgur (ou outro host) e são referenciadas por URL no `data.js` |
| Código (HTML, CSS, JS, data.js) | Sim |
| Currículo / PDFs / zips | Não (estão no `.gitignore`) |

Assim ninguém vê suas fotos no repositório; só o site publicado exibe as imagens pelas URLs que você configurou.
