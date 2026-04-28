# CODEX.md

## 1. Resumo do projeto

AIR/23 é um site editorial interativo de página única sobre o legado dos quatro primeiros Air Jordan: AJ1, AJ2, AJ3 e AJ4.

A proposta visual é premium/editorial, com linguagem de revista digital, foco em cultura sneaker, basquete, produto e memória visual. O projeto usa grandes composições tipográficas, imagens de tênis em destaque, fotos históricas, colorways interativas, efeitos de aura/glow, marquee e animações de entrada/scroll.

Stack atual:
- Vite + React
- CSS global em `styles.css`
- Assets estáticos em `public/`
- Dados editoriais em `src/data/chapters.js`
- Copy geral em `src/data/copy.js`
- Componentes React em `src/components/`

## 2. Estado atual

Mudanças já feitas nesta sessão:
- Migração do projeto para Vite + React.
- Remoção do uso de React CDN e Babel standalone no browser.
- Criação de estrutura `src/`.
- Separação de componentes principais.
- Separação dos dados dos capítulos.
- Separação do hook `useReveal`.
- Assets `logo/`, `shoes/` e `MichaelJordan/` movidos para `public/`.
- Adição de suporte simples a idioma EN/PT-BR.
- Persistência de idioma em `localStorage`.
- Atualização de `document.documentElement.lang`.
- Hotfix pontual no marquee/cultural para reduzir mojibake, overflow e poluição visual.
- Porta do Vite fixada em `5170` com `strictPort`.

Arquivos criados:
- `.gitignore`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `src/main.jsx`
- `src/App.jsx`
- `src/components/Nav.jsx`
- `src/components/Hero.jsx`
- `src/components/Marquee.jsx`
- `src/components/IntroReveal.jsx`
- `src/components/Chapter.jsx`
- `src/components/ProductStage.jsx`
- `src/components/Sneaker.jsx`
- `src/components/Final.jsx`
- `src/components/Footer.jsx`
- `src/components/TweaksPanel.jsx`
- `src/data/chapters.js`
- `src/data/copy.js`
- `src/hooks/useReveal.js`

Arquivos editados:
- `index.html`
- `styles.css`
- `CLAUDE.md`
- `package.json`
- `vite.config.js`
- vários arquivos em `src/` durante a migração, idioma e hotfix.

Arquivos removidos/substituídos pela estrutura nova:
- `app.jsx`
- `sneakers.jsx`
- `tweaks-panel.jsx`
- pastas originais `logo/`, `shoes/`, `MichaelJordan/` foram movidas para `public/`.

Arquivos que ainda precisam revisão:
- `styles.css`, porque já havia mudanças visuais anteriores no diff e ele ainda concentra todo o visual.
- `index.html`, porque o `<title>` ainda parece conter mojibake: `AIR/23 â€” A Sneaker Story`.
- `.claude/settings.local.json`, aparece modificado no Git, mas não foi tratado como parte das tarefas.
- `README.md`, ainda pode estar desatualizado em relação ao Vite.
- `CLAUDE.md`, foi atualizado, mas vale revisar se está alinhado com o estado final.

## 3. Regras importantes do Gabriel

- Não mexer nos efeitos sem pedir.
- Não alterar animações principais.
- Não alterar identidade visual.
- Não fazer commit sem autorização.
- Não criar branch sem autorização.
- Antes de grandes mudanças, explicar o plano.
- Priorizar hotfix visual antes de refatoração grande.
- Evitar refatoração ampla quando o pedido for correção pontual.
- Não trocar imagens, textos ou colorways sem autorização explícita.

## 4. Bugs/problemas conhecidos

- Houve bug de marquee com caracteres quebrados/mojibake, especialmente `â˜…`.
- O hotfix trocou o separador do marquee para `23`, evitando símbolo especial quebrado.
- Algumas seções culturais pareciam bugadas, com risco de vazamento visual, tile number invasivo e fotos históricas mal enquadradas.
- O hotfix adicionou `data-chapter` e object-position por capítulo para as fotos culturais.
- Ainda é importante revisar visualmente todas as seções culturais no navegador real.
- Possível vazamento de estilo/CSS ainda deve ser revisado em `styles.css`.
- Menu/navbar recebeu toggle EN/PT e precisa ser observado em mobile.
- Logos precisam funcionar como links para o topo.
- Verificar se a troca de idioma não quebrou layout, principalmente em PT-BR, onde os textos são maiores.
- O `<title>` do `index.html` ainda tem mojibake e deve ser corrigido em um hotfix separado se autorizado.

## 5. Próximos passos sugeridos

1. Revisar o diff atual com cuidado.
2. Validar visualmente no navegador:
   - hero
   - marquee abaixo do hero
   - intro dos 4 tênis
   - cultural AJ1
   - cultural AJ2
   - cultural AJ3
   - cultural AJ4
   - navbar em desktop/mobile
   - idioma EN/PT-BR
3. Corrigir apenas hotfixes visuais pendentes antes de qualquer refatoração grande.
4. Corrigir mojibake restante no `index.html`, se Gabriel autorizar.
5. Só depois continuar organização de CSS ou refatorações estruturais.
6. Revisar a implementação de idioma PT/EN com calma caso o layout ainda não esteja estável.

## 6. Como rodar o projeto

O projeto atual usa Vite.

Primeira instalação:

```bash
npm install
```

Rodar em desenvolvimento:

```bash
npm run dev
```

URL esperada:

```text
http://127.0.0.1:5170
```

Build de produção:

```bash
npm run build
```

## 7. Observações técnicas

- O projeto sofreu problemas de encoding/mojibake em alguns textos e símbolos.
- Exemplos observados: `â˜…`, `â€”`, `Â`, `Ã¢`.
- O marquee foi ajustado para usar `23` como separador seguro em vez de estrela.
- O sistema de idioma usa `COPY` em `src/data/copy.js`.
- Os textos editoriais dos capítulos ficam em `src/data/chapters.js` com campos `en` e `pt`.
- A preferência de idioma é salva em `localStorage` com a chave `air23-language`.
- Assets usados pelo app estão em `public/logo`, `public/shoes` e `public/MichaelJordan`, mantendo paths como `logo/...`, `shoes/...` e `MichaelJordan/...`.
- A pasta `uploads/` ainda existe, mas não parece ser usada diretamente pelo código atual.
- `dist/` e `node_modules/` são gerados localmente e estão no `.gitignore`.

## Contexto para a próxima sessão

Projeto AIR/23 já foi migrado para Vite + React, com componentes em `src/components`, dados em `src/data/chapters.js`, copy EN/PT-BR em `src/data/copy.js` e assets em `public/`. Rodar com `npm run dev` na porta `5170`. Não fazer commit/branch sem autorização. Prioridade atual: revisar o diff, validar visualmente marquee/cultural/navbar/idioma, corrigir apenas hotfixes visuais pontuais e evitar refatorações grandes até Gabriel aprovar.
