# Deploy e manutenção do portfólio

Site estático (HTML, CSS e JS puros, sem build), publicado pelo **GitHub Pages** a partir da branch `main`, pasta raiz.
URL: https://igorgtdas.github.io

## Estrutura

```
index.html                 landing
cases/*.html               páginas de case dos projetos profissionais
assets/css/styles.css      estilos (tokens de tema no :root)
assets/js/data.js          conteúdo dos cards (projetos profissionais e pessoais)
assets/js/main.js          idioma, tema, menu, render dos cards, slideshow
assets/img/                fotos e prints dos projetos pessoais
assets/diagrams/*.svg      diagramas de arquitetura
docs/                      PDFs públicos (TCC)
```

- **Idioma:** todo texto existe em PT e EN (`<span class="l-pt">` / `<span class="l-en">`). O botão só troca `data-lang` no `<html>`.
- **Tema:** escuro por padrão; o botão alterna para claro (`data-theme="light"`).
- **Novo projeto pessoal:** adicione um objeto em `personal` no `assets/js/data.js`.
- **Novo projeto profissional:** adicione em `featured` e crie a página em `cases/` copiando uma existente.

## Testar localmente

Abra o `index.html` direto no navegador, ou sirva a pasta com qualquer servidor estático.

## Publicar

```bash
git push origin main
```

O Pages atualiza em 1 a 2 minutos.

**Cache:** os links de CSS/JS têm `?v=AAAAMMDD` (ex.: `styles.css?v=20261020`). Ao mudar CSS ou JS, troque esse número em todas as páginas para os visitantes receberem a versão nova na hora:

```bash
sed -i -E 's/\?v=[0-9]+/?v=NOVA_DATA/g' index.html cases/*.html
```

## Repositório público e segurança

No plano gratuito do GitHub, o Pages só publica a partir de **repositório público**. Isso é seguro aqui porque o repo contém apenas o que o site já mostra (HTML, CSS, imagens).

Regras:

- Nunca commitar código, `.env`, logs, prints ou dados dos projetos da empresa.
- Os projetos profissionais usam nomes fictícios (família **PitStop**). Não citar empresa, clientes, IDs de conta ou nomes internos.
- Antes de cada push, procure no diff por nomes reais e segredos.
