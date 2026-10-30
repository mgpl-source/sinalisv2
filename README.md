# Sinalis V2 · Educação que conecta

Protótipo navegável reconstruído em **React 19 + TypeScript estrito + Vite**, a partir da direção visual corporativa aprovada. Layout responsivo, com referência mobile de **390 × 844 CSS px (iPhone 14)**.

## Explorar

Abra o site e escolha **Adulto surdo**, **Ouvinte** ou **Professor**. Não é necessário cadastrar nome, e-mail ou senha. O perfil pode ser trocado pelo menu ou em Meu perfil.

- **Adulto surdo e ouvinte:** trilhas, aulas guiadas, exercícios com feedback e desbloqueio sequencial, apoio bilíngue com busca, favoritos, leitura e cultura, carreira, inclusão e progresso.
- **Professor:** visão geral, turmas fictícias, busca de participantes, devolutivas locais, relatório CSV, criação/edição de atividades e rascunhos, biblioteca com filtros e comunidade docente.
- **Comuns:** comunicação por texto de demonstração, publicações/comentários/curtidas locais, notificações com leitura, edição de perfil, preferências de acessibilidade, FAQ, registro local de solicitação, exportação e exclusão de dados.

A trilha sinuosa mostra etapas concluídas, atual e bloqueadas. Uma resposta correta conclui a aula e libera a seguinte; respostas incorretas permitem tentar novamente. O progresso continua após recarregar a página.

## Executar e verificar

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm ci
npm run dev
npm test
npm run build
```

`npm run build` verifica o TypeScript, cria `dist/` e atualiza os arquivos estáticos na raiz para o GitHub Pages. `src/index.html` é a entrada de desenvolvimento; `index.html`, `assets/`, `media/` e `fonts/` na raiz são a distribuição compilada e devem ser atualizados pelo build.

## Publicação

Compatível com GitHub Pages em **main / (root)**. O build usa caminhos relativos e rotas hash, permitindo recarregar e compartilhar telas dentro de `/sinalisv2/` sem erro 404. Não é necessário build no GitHub para servir os arquivos desta branch.

## Organização

- `src/App.tsx`: estrutura, rotas, navegação e diálogos acessíveis.
- `src/Account.tsx`: entrada, perfis, preferências, segurança e suporte.
- `src/Learning.tsx`: trilhas, aulas, exercícios, progresso e conteúdos.
- `src/Teaching.tsx`: ferramentas do professor.
- `src/Community.tsx`: comunidade e conversa de demonstração.
- `src/model.ts`: tipos, persistência, rotas e regras de progressão.
- `src/data.ts`: conteúdos e dados de exemplo.
- `src/ui.tsx` e `src/styles.css`: componentes, tokens visuais e responsividade.
- `src/app.test.tsx`: testes de regras, fluxos e rotas.
- `public/`: imagens e fontes locais; `scripts/prepare-pages.mjs`: distribuição estática.

## Identidade e acessibilidade

Paleta: marrom `#5B2E1E`, laranja `#E76F3C`, turquesa `#2CB7A0`, creme `#F6E9D7`, menta `#D6F0EA` e verde profundo `#0F6B63`. Fontes locais DM Sans e DM Serif Display, com licenças OFL incluídas. Ícones Lucide, licença ISC. Os três mascotes fornecidos foram preservados no arquivo `public/media/perfis.png`; o CSS seleciona cada um sem redesenhar a arte.

Preferências de texto ampliado, contraste reforçado, redução de movimento e texto de apoio. Navegação por teclado, link de pular conteúdo, foco em mudanças de tela, diálogo com foco contido e fechamento por Escape, rótulos de formulários e estado dos controles.

## Escopo da demonstração

Não há backend, autenticação real, mensagens entre usuários ou upload de arquivos. Dados pessoais opcionais, progresso, favoritos, atividades e publicações ficam no armazenamento local do navegador. Os participantes, indicadores, turmas e eventos são fictícios. O formulário de suporte não envia mensagens.

As aulas apresentam conceitos introdutórios e uma prática guiada em texto. As imagens são ilustrativas; não são vídeos ou instruções validadas de sinais em Libras. Canais de áudio/vídeo são identificados como previstos para a versão conectada. Conquistas são registros da demonstração e não certificados profissionais.

Os arquivos da versão anterior permanecem recuperáveis no histórico Git. Esta versão substitui a implementação antiga na branch principal.
