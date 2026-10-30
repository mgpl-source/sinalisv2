# Validação da reconstrução corporativa

- `npm test`: **39 testes aprovados**. Regras de desbloqueio, conclusão sem duplicidade, persistência, dados corrompidos, entrada sem cadastro, resposta incorreta/correta, bloqueio de aula, criação/edição de atividade, publicação local, acessibilidade, saída e renderização das rotas dos três perfis.
- `npm run build`: TypeScript estrito e compilação de produção aprovados.
- Navegador: conferência visual desktop e em um viewport de referência de iPhone 14; seleção dos três mascotes, navegação entre aula/exercício/trilha, desbloqueio da segunda etapa, formulário do professor e publicação local de atividade verificados.
- Imagens dos perfis preservadas no PNG enviado; seleção de cada mascote feita por CSS.
- Versão estática com caminhos relativos e navegação por hash, compatível com GitHub Pages em subdiretório.

Os testes verificam a demonstração local. Serviços de autenticação, vídeos em Libras, comunicação entre usuários e envio de solicitações não estão conectados nesta versão.
