# Sinalis V2 — produto demonstrativo em React + TypeScript

Esta versão é uma aplicação navegável de verdade, não uma colagem de telas nem áreas clicáveis por coordenada. Inspirada nas 30 referências do fluxo iPhone 14 fornecido pela equipe, usa componentes HTML/CSS reais, React e TypeScript.

## O que funciona

- Iniciar a demonstração **sem cadastro, senha ou login**, escolhendo o perfil Pessoa surda, Pessoa ouvinte ou Educador(a).
- Menus, trilhas, aulas, atividades de múltipla escolha e feedback imediato.
- Conclusão de aulas, barras de progresso e histórico local.
- Vocabulário com busca/filtros e favoritos.
- Comunidade de demonstração com publicações, curtidas e respostas.
- Chat demonstrativo de texto (sem outro participante).
- Educador: criação e publicação local de atividades, relatório ilustrativo de turmas e biblioteca com filtros.
- Preferências de acessibilidade: fonte maior, alto contraste, movimento reduzido, transcrições.
- Notificações, FAQ, preferências e limpeza de dados da demo.
- Layout responsivo, mobile-first (incluindo iPhone 14) e desktop com barra lateral.

## Limitações informadas na interface

A aplicação **não tem backend, contas, senhas ou serviços externos**. Todas as modificações são guardadas em `localStorage` do navegador. Fotos são elementos de ilustração. Vídeos de Libras, gravação de áudio/vídeo, upload, relatórios reais e conteúdo pedagógico validado não são simulados como se estivessem funcionando: a interface informa expressamente quando são conteúdos ilustrativos. Os usuários e métricas de turmas são fictícios.

## Estrutura

- `src/app.tsx`: componentes e lógica React + TypeScript.
- `src/react-shim.d.ts`: definições mínimas para TypeScript usar UMD React.
- `styles.css`: interface responsiva.
- `index.html`: entrada do site.
- `app.js`: JavaScript compilado do `src/app.tsx`.
- `assets/`: imagens recortadas das referências fornecidas (não são screenshots de tela completa).
- `vendor/`: distribuição UMD de React 16 e ReactDOM 16, incluída para GitHub Pages funcionar sem CDNs; licenciada sob MIT.
- `.nojekyll`: evita processamento Jekyll do site estático.

## Executar

O ZIP está pronto para abrir em um servidor estático local ou enviar ao GitHub Pages, sem npm install.

```bash
python3 -m http.server 5173
```

Abra `http://localhost:5173/`.

Para editar o TypeScript e recompilar:

```bash
npm install
npm run build
```

Ou execute `tsc -p tsconfig.json` caso tenha TypeScript instalado globalmente.

### GitHub Pages

No repositório `mgpl-source/sinalisv2`, use **Settings → Pages → Deploy from a branch → main / (root)**. O endereço esperado é <https://mgpl-source.github.io/sinalisv2/>.

A aplicação usa caminhos relativos em todos os arquivos, compatíveis com o subdiretório `/sinalisv2/`.

## Créditos e imagens

As fotografias e a arte do mascote foram recortadas a partir do fluxo visual fornecido pela equipe Sinalis. Os arquivos de React e ReactDOM distribuídos em `vendor/` são software de terceiros, sob licença MIT. O código da demo não exige servidores nem dados pessoais.
