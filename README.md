# Sinalis V2 — protótipo navegável

Protótipo interativo fiel às **30 telas do fluxo iPhone 14** fornecidas pela equipe Sinalis. Implementado em **React 18 e TypeScript**, utilizando as imagens originais otimizadas para WebP e regiões de clique acessíveis.

## Visualizar / executar localmente

A versão compilada não precisa instalar pacotes. Abra um servidor HTTP nesta pasta:

```bash
python3 -m http.server 5173
```

Acesse http://localhost:5173. O `index.html` referencia as versões UMD de React e ReactDOM hospedadas no jsDelivr; é preciso conexão à internet para carregá-las.

## Editar TypeScript

Edite `app.tsx` e execute `npm install && npm run build` para atualizar `app.js`. O layout e as áreas clicáveis ficam no código TypeScript. As imagens ficam em `screens/` (390×844 pontos, exportadas em 780×1688 px).

## GitHub Pages

O repositório tem `index.html`, `app.js`, `style.css` e `screens/*.webp` **na raiz**. Em **Settings → Pages → Build and deployment → Deploy from a branch**, escolha **main** e **/(root)** para publicar em `https://mgpl-source.github.io/sinalisv2/`. Não é necessária etapa de build no GitHub.

## Fluxos funcionais

- Acesso: boas-vindas, cadastro demonstrativo, entrada, escolha de perfil.
- Pessoa surda: trilhas, aulas, quiz, vocabulário, progresso, comunicação, carreira, qualificação e cultura.
- Pessoa ouvinte: início, Libras, inclusão e comunidade.
- Educador: turmas, atividades, acompanhamento, biblioteca e comunidade docente.
- Conta: perfil, configurações, notificações, suporte, segurança, termos e saída.

**Este é somente um protótipo:** não há autenticação real, armazenamento de dados, backend, envio de mensagens ou reprodução de vídeo. Os vídeos e as publicações representados nas telas são mockups. O menu lateral permite visitar todas as telas e a opção “Exibir áreas clicáveis” ajuda a inspecionar as interações.

A autoria das telas e elementos visuais pertence à equipe do projeto Sinalis.
