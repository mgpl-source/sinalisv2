"use strict";
const INFO = {
    1: { title: 'Boas-vindas', group: 'Acesso' }, 2: { title: 'Criar conta', group: 'Acesso' }, 3: { title: 'Entrar', group: 'Acesso' }, 4: { title: 'Escolha do perfil', group: 'Acesso' },
    5: { title: 'Início · pessoa surda', group: 'Pessoa surda' }, 6: { title: 'Trilhas de aprendizagem', group: 'Pessoa surda' }, 7: { title: 'Módulos e aulas', group: 'Aprendizagem' },
    8: { title: 'Desafios e prática', group: 'Aprendizagem' }, 9: { title: 'Apoio bilíngue', group: 'Aprendizagem' }, 10: { title: 'Meu progresso', group: 'Aprendizagem' },
    11: { title: 'Comunicação', group: 'Comunicação' }, 12: { title: 'Trabalho e carreira', group: 'Pessoa surda' }, 13: { title: 'Qualificação profissional', group: 'Pessoa surda' },
    14: { title: 'Leitura e cultura', group: 'Pessoa surda' }, 15: { title: 'Meu perfil', group: 'Conta' }, 16: { title: 'Início · pessoa ouvinte', group: 'Pessoa ouvinte' },
    17: { title: 'Aprenda Libras', group: 'Pessoa ouvinte' }, 18: { title: 'Apoie a inclusão', group: 'Pessoa ouvinte' }, 19: { title: 'Comunidade', group: 'Comunidade' },
    20: { title: 'Área do professor', group: 'Educador' }, 21: { title: 'Criar atividade', group: 'Educador' }, 22: { title: 'Acompanhar alunos', group: 'Educador' },
    23: { title: 'Biblioteca pedagógica', group: 'Educador' }, 24: { title: 'Comunidade docente', group: 'Educador' }, 25: { title: 'Configurações', group: 'Conta' },
    26: { title: 'Suporte', group: 'Conta' }, 27: { title: 'Notificações', group: 'Conta' }, 28: { title: 'Segurança', group: 'Conta' }, 29: { title: 'Termos e privacidade', group: 'Conta' },
    30: { title: 'Sair da conta', group: 'Conta' }
};
const map = (x, y, w, h, label, action) => [x, y, w, h, label, action];
const HOT = {
    1: [map(33, 678, 324, 55, 'Criar conta', 'go:2'), map(36, 743, 318, 44, 'Entrar', 'go:3'), map(76, 803, 240, 30, 'Tenho um convite da empresa', 'go:4')],
    2: [map(45, 627, 303, 60, 'Criar conta', 'register'), map(176, 726, 180, 38, 'Já tenho conta · Entrar', 'go:3'), map(74, 573, 190, 36, 'Aceito os termos de uso', 'go:29')],
    3: [map(50, 506, 289, 64, 'Entrar', 'login'), map(117, 580, 160, 46, 'Entrar pela empresa', 'go:4'), map(225, 428, 130, 28, 'Esqueci minha senha', 'info:Recuperação de senha'), map(6, 160, 370, 55, 'Voltar às boas-vindas', 'go:1')],
    4: [map(49, 239, 296, 107, 'Perfil · pessoa surda', 'profile:surdo'), map(49, 363, 296, 107, 'Perfil · pessoa ouvinte', 'profile:ouvinte'), map(49, 487, 296, 108, 'Perfil · educador', 'profile:professor'), map(49, 725, 296, 67, 'Continuar', 'continue'), map(14, 72, 41, 39, 'Voltar', 'back')],
    5: [map(41, 244, 308, 156, 'Continuar aprendendo', 'go:7'), map(35, 421, 150, 95, 'Minhas trilhas', 'go:6'), map(201, 421, 150, 95, 'Aulas', 'go:7'), map(34, 527, 151, 96, 'Comunidade', 'go:19'), map(202, 526, 150, 97, 'Carreira', 'go:12'), map(35, 652, 317, 94, 'Capacitação da empresa', 'go:13'), map(330, 69, 50, 60, 'Notificações', 'go:27'), map(367, 68, 20, 60, 'Meu perfil', 'go:15')],
    6: [map(23, 203, 115, 48, 'Todas as trilhas', 'info:Trilhas disponíveis'), map(140, 203, 123, 48, 'Trilhas em andamento', 'toast:Em andamento'), map(262, 203, 115, 48, 'Trilhas concluídas', 'toast:Concluídas'), map(32, 274, 328, 140, 'Libras no trabalho', 'go:7'), map(32, 426, 328, 140, 'Atendimento inclusivo', 'go:7'), map(32, 577, 328, 136, 'Comunicação e carreira', 'go:7')],
    7: [map(13, 61, 56, 55, 'Voltar', 'back'), map(24, 196, 341, 189, 'Assistir vídeo', 'video:Comunicação na equipe'), map(20, 426, 343, 44, 'Apresentações profissionais', 'go:8'), map(20, 474, 342, 44, 'Reuniões e colaboração', 'go:8'), map(23, 522, 339, 45, 'Atividade prática', 'go:8'), map(20, 577, 134, 43, 'Legenda', 'toggle:Legenda'), map(221, 577, 145, 43, 'Transcrição', 'toggle:Transcrição'), map(22, 640, 339, 68, 'Assistir à aula', 'video:Comunicação na equipe')],
    8: [map(13, 64, 52, 55, 'Voltar', 'back'), map(29, 193, 326, 210, 'Reproduzir a expressão em Libras', 'video:Situações do trabalho'), map(28, 486, 334, 56, 'Resposta: Prazer em conhecer você', 'answer:0'), map(28, 550, 334, 52, 'Resposta: Até amanhã', 'answer:1'), map(28, 613, 334, 54, 'Resposta: Muito obrigado', 'answer:2'), map(29, 684, 329, 66, 'Verificar resposta', 'verify')],
    9: [map(26, 155, 335, 49, 'Buscar palavras', 'info:Busca de vocabulário'), map(28, 213, 117, 44, 'Idioma Libras', 'toggle:Libras'), map(146, 213, 117, 44, 'Idioma Português', 'toggle:Português'), map(260, 213, 118, 44, 'Outros idiomas', 'toggle:Outros idiomas'), map(26, 252, 340, 158, 'Vídeo em Libras: reunião', 'video:Vocabulário reunião'), map(23, 420, 342, 70, 'Palavra equipe', 'video:Vocabulário equipe'), map(23, 495, 342, 71, 'Palavra atendimento', 'video:Vocabulário atendimento'), map(23, 570, 342, 71, 'Palavra segurança', 'video:Vocabulário segurança')],
    10: [map(29, 670, 331, 60, 'Certificado da trilha', 'info:Seu certificado será disponibilizado ao concluir a trilha'), map(29, 738, 331, 56, 'Capacitação da empresa', 'go:13')],
    11: [map(12, 63, 55, 56, 'Voltar', 'back'), map(33, 241, 321, 61, 'Comunicação por texto', 'toast:Modo texto selecionado'), map(33, 307, 321, 58, 'Comunicação por vídeo em Libras', 'video:Comunicação em Libras'), map(33, 368, 321, 62, 'Áudio e transcrição', 'info:Áudio e transcrição — demonstração'), map(332, 704, 42, 52, 'Enviar mensagem', 'send')],
    12: [map(9, 69, 55, 47, 'Voltar', 'back'), map(24, 322, 338, 74, 'Currículo acessível', 'info:Currículo acessível'), map(23, 405, 339, 75, 'Entrevistas de emprego', 'go:13'), map(24, 487, 338, 76, 'Comunicação profissional', 'go:7'), map(22, 729, 341, 47, 'Explorar conteúdos', 'go:13'), map(35, 638, 315, 91, 'Inclusão no ambiente de trabalho', 'go:18')],
    13: [map(10, 67, 55, 51, 'Voltar', 'back'), map(33, 276, 330, 106, 'Atendimento ao cliente', 'go:7'), map(33, 393, 330, 104, 'Rotinas administrativas', 'go:7'), map(32, 513, 329, 106, 'Tecnologia e trabalho', 'go:7'), map(33, 738, 323, 48, 'Ver todas as trilhas', 'go:6')],
    14: [map(8, 64, 55, 49, 'Voltar', 'back'), map(33, 174, 109, 44, 'Textos', 'toast:Exibindo textos'), map(151, 174, 96, 44, 'Cultura', 'toast:Exibindo cultura'), map(250, 174, 102, 44, 'Eventos', 'toast:Exibindo eventos'), map(41, 508, 311, 54, 'Começar leitura', 'info:Leitura com apoio em Libras'), map(30, 578, 327, 78, 'Notícias em linguagem simples', 'info:Notícias em linguagem simples'), map(30, 656, 327, 74, 'Agenda cultural acessível', 'info:Agenda cultural acessível'), map(27, 731, 334, 48, 'Salvar para depois', 'toggle:Leitura salva')],
    15: [map(9, 63, 56, 55, 'Voltar', 'back'), map(31, 243, 330, 66, 'Minha empresa', 'go:13'), map(31, 315, 330, 54, 'Dados pessoais', 'info:Dados pessoais'), map(31, 376, 330, 54, 'Preferências de acessibilidade', 'go:25'), map(30, 434, 332, 50, 'Favoritos e histórico', 'info:Favoritos e histórico'), map(31, 491, 331, 54, 'Meus certificados', 'go:10'), map(31, 548, 330, 53, 'Notificações', 'go:27'), map(31, 607, 330, 52, 'Segurança', 'go:28'), map(30, 662, 332, 54, 'Ajuda e suporte', 'go:26'), map(30, 717, 333, 53, 'Termos e privacidade', 'go:29'), map(119, 772, 151, 44, 'Sair da conta', 'go:30')],
    16: [map(41, 235, 307, 161, 'Continuar aprendendo Libras', 'go:17'), map(32, 418, 156, 95, 'Aprenda Libras', 'go:17'), map(203, 418, 153, 95, 'Apoie a inclusão', 'go:18'), map(32, 524, 155, 99, 'Comunique-se', 'go:11'), map(203, 523, 152, 100, 'Comunidade', 'go:19'), map(31, 651, 326, 102, 'Capacitação da empresa', 'go:13'), map(326, 60, 62, 58, 'Notificações', 'go:27')],
    17: [map(10, 65, 54, 54, 'Voltar', 'back'), map(32, 201, 162, 42, 'Iniciante', 'toast:Nível iniciante'), map(197, 201, 163, 42, 'Trabalho', 'toast:Libras para o trabalho'), map(32, 260, 329, 210, 'Vídeo · Primeiras conversas', 'video:Primeiras conversas'), map(31, 536, 329, 64, 'Começar módulo', 'go:7'), map(30, 607, 327, 63, 'Apresentações', 'go:7'), map(30, 678, 327, 58, 'Cumprimentos', 'go:7'), map(30, 743, 326, 54, 'Expressões no trabalho', 'go:7')],
    18: [map(9, 65, 56, 53, 'Voltar', 'back'), map(27, 320, 339, 80, 'Preferências de comunicação', 'info:Preferências de comunicação'), map(27, 410, 339, 79, 'Recursos visuais e legendas', 'info:Recursos visuais e legendas'), map(26, 498, 339, 80, 'Participação nas reuniões', 'info:Participação nas reuniões'), map(27, 590, 336, 78, 'Guia para equipes', 'info:Guia para equipes'), map(29, 743, 328, 51, 'Explorar boas práticas', 'go:19')],
    19: [map(27, 195, 161, 47, 'Conversas', 'toast:Conversas da comunidade'), map(190, 195, 164, 47, 'Eventos', 'toast:Eventos da comunidade'), map(34, 502, 152, 51, 'Responder publicação', 'info:Responder publicação'), map(211, 502, 144, 51, 'Salvar publicação', 'toggle:Publicação salva'), map(33, 726, 321, 51, 'Ver encontro', 'info:Roda de conversa on-line'), map(30, 777, 333, 44, 'Iniciar conversa', 'info:Nova conversa comunitária')],
    20: [map(38, 232, 154, 118, 'Minhas 3 turmas', 'go:22'), map(200, 231, 156, 120, '48 participantes', 'go:22'), map(33, 416, 326, 68, 'Comunicação inclusiva', 'go:22'), map(32, 495, 325, 66, 'Libras no trabalho', 'go:22'), map(29, 568, 326, 56, 'Criar atividade', 'go:21'), map(26, 654, 106, 98, 'Acompanhar alunos', 'go:22'), map(141, 655, 108, 97, 'Biblioteca pedagógica', 'go:23'), map(258, 655, 106, 99, 'Comunidade docente', 'go:24'), map(332, 67, 45, 50, 'Notificações', 'go:27')],
    21: [map(9, 64, 48, 54, 'Voltar', 'back'), map(28, 428, 330, 67, 'Adicionar vídeo em Libras', 'info:Anexar vídeo em Libras'), map(28, 499, 328, 64, 'Adicionar material de apoio', 'info:Anexar material de apoio'), map(34, 616, 103, 52, 'Resposta por texto', 'toggle:Resposta por texto'), map(146, 616, 105, 52, 'Resposta por vídeo', 'toggle:Resposta por vídeo'), map(258, 615, 104, 51, 'Resposta por áudio', 'toggle:Resposta por áudio'), map(29, 682, 329, 49, 'Salvar rascunho', 'toast:Rascunho salvo nesta demonstração'), map(29, 733, 330, 52, 'Publicar atividade', 'publish')],
    22: [map(10, 66, 54, 53, 'Voltar', 'back'), map(36, 317, 328, 63, 'Buscar participante', 'info:Busca de participantes'), map(29, 397, 328, 62, 'Ana Souza', 'info:Ana Souza · 80% de progresso'), map(30, 468, 328, 62, 'Rafael Lima', 'info:Rafael Lima · 60% de progresso'), map(30, 539, 328, 66, 'Marina Costa', 'info:Marina Costa · 75% de progresso'), map(29, 690, 330, 49, 'Ver atividades', 'go:21'), map(29, 743, 331, 51, 'Relatório da turma', 'info:Relatório ilustrativo da turma')],
    23: [map(8, 68, 56, 54, 'Voltar', 'back'), map(32, 185, 328, 52, 'Buscar material', 'info:Busca de materiais pedagógicos'), map(32, 242, 107, 45, 'Planos', 'toast:Planos de aula'), map(144, 242, 102, 45, 'Vídeos', 'toast:Vídeos pedagógicos'), map(250, 242, 112, 45, 'Guias', 'toast:Guias inclusivos'), map(24, 305, 343, 127, 'Baixar plano de apresentações', 'info:Material demonstrativo: plano de aula de apresentações'), map(24, 441, 342, 123, 'Baixar comunicação inclusiva', 'info:Material demonstrativo: comunicação inclusiva'), map(23, 574, 344, 124, 'Baixar guia de atividades', 'info:Material demonstrativo: guia de atividades'), map(28, 749, 327, 47, 'Explorar biblioteca', 'toast:Biblioteca aberta')],
    24: [map(8, 65, 54, 50, 'Voltar', 'back'), map(32, 190, 158, 45, 'Conversas', 'toast:Conversas docentes'), map(193, 190, 157, 45, 'Materiais', 'go:23'), map(31, 467, 138, 47, 'Responder', 'info:Responder na comunidade docente'), map(205, 467, 136, 47, 'Salvar', 'toggle:Publicação docente salva'), map(29, 742, 326, 56, 'Compartilhar experiência', 'info:Compartilhar experiência')],
    25: [map(26, 222, 333, 81, 'Editar dados', 'info:Editar dados'), map(34, 373, 333, 38, 'Legendas nos vídeos', 'toggle:Legendas nos vídeos'), map(32, 414, 333, 42, 'Reprodução automática', 'toggle:Reprodução automática'), map(29, 476, 333, 53, 'Gerenciar turmas', 'go:22'), map(30, 532, 332, 52, 'Preferências de notificação', 'go:27'), map(30, 587, 331, 53, 'Segurança da conta', 'go:28'), map(30, 644, 330, 54, 'Termos e privacidade', 'go:29'), map(30, 697, 331, 55, 'Ajuda e suporte', 'go:26'), map(30, 753, 330, 54, 'Salvar preferências', 'toast:Preferências salvas nesta demonstração')],
    26: [map(11, 64, 50, 53, 'Voltar', 'back'), map(27, 323, 332, 54, 'Como acessar minha turma?', 'info:Para acessar sua turma, use o convite da instituição.'), map(28, 383, 331, 56, 'Como ativar as legendas?', 'info:Ative as legendas nas configurações de acessibilidade.'), map(28, 443, 332, 57, 'Como recuperar minha senha?', 'info:Use o link Esqueci minha senha na tela de entrada.'), map(30, 667, 329, 52, 'Falar com suporte', 'info:Contato com suporte (simulação)'), map(31, 724, 328, 51, 'Enviar uma solicitação', 'info:Solicitação de suporte (simulação)')],
    27: [map(29, 216, 123, 48, 'Todas as notificações', 'toast:Todas as notificações'), map(156, 215, 119, 48, 'Notificações não lidas', 'toast:Não lidas'), map(24, 279, 340, 92, 'Nova atividade disponível', 'go:21'), map(24, 380, 340, 100, 'Material atualizado', 'go:23'), map(24, 488, 339, 103, 'Encontro da comunidade', 'go:19'), map(32, 612, 240, 48, 'Marcar todas como lidas', 'toast:Notificações marcadas como lidas'), map(30, 730, 334, 63, 'Preferências de notificação', 'go:25')],
    28: [map(29, 289, 329, 57, 'Alterar senha', 'info:Alteração de senha (simulação)'), map(28, 362, 330, 56, 'Ver dispositivos conectados', 'info:Dispositivos conectados (simulação)'), map(27, 435, 330, 56, 'Verificar email', 'info:Verificação de e-mail (simulação)'), map(29, 740, 333, 56, 'Gerenciar acesso', 'info:Gerenciar acesso (simulação)'), map(35, 695, 299, 36, 'Política de privacidade', 'go:29')],
    29: [map(30, 281, 331, 69, 'Termos de uso', 'info:Termos de uso do protótipo'), map(29, 361, 331, 67, 'Política de privacidade', 'info:Política de privacidade do protótipo'), map(30, 443, 332, 68, 'Uso de dados', 'info:Os dados não são enviados a servidores'), map(30, 523, 332, 66, 'Preferências de consentimento', 'info:Preferências de consentimento'), map(30, 615, 331, 66, 'Dúvidas sobre seus dados?', 'go:26')],
    30: [map(89, 611, 212, 61, 'Continuar na conta', 'cancel'), map(88, 672, 212, 55, 'Confirmar saída da conta', 'logout')]
};
const HOME = { surdo: 5, ouvinte: 16, professor: 20 };
const GROUPS = [
    { name: 'Acesso', range: [1, 2, 3, 4] },
    { name: 'Pessoa surda', range: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
    { name: 'Pessoa ouvinte', range: [16, 17, 18, 19] },
    { name: 'Educador', range: [20, 21, 22, 23, 24] },
    { name: 'Conta e suporte', range: [15, 25, 26, 27, 28, 29, 30] }
];
const STORAGE = 'sinalisv2-prototype';
const fromHash = () => {
    const n = Number((location.hash || '').replace('#tela-', ''));
    return INFO[n] ? n : 1;
};
function App() {
    const [screen, setScreen] = React.useState(fromHash());
    const [role, setRole] = React.useState('surdo');
    const [name, setName] = React.useState('');
    const [fields, setFields] = React.useState({});
    const [quiz, setQuiz] = React.useState(0);
    const [checked, setChecked] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState('');
    const [toast, setToast] = React.useState('');
    const [debug, setDebug] = React.useState(false);
    const [menu, setMenu] = React.useState(false);
    const [stack, setStack] = React.useState([]);
    const [toggles, setToggles] = React.useState({});
    const [company, setCompany] = React.useState('');
    const [selectedProfile, setSelectedProfile] = React.useState('surdo');
    const base = window.SINALIS_BASE || './';
    React.useEffect(() => {
        const f = () => setScreen(fromHash());
        window.addEventListener('hashchange', f);
        return () => window.removeEventListener('hashchange', f);
    }, []);
    React.useEffect(() => {
        document.title = `${INFO[screen].title} — Sinalis`;
    }, [screen]);
    const go = (next) => {
        if (!INFO[next])
            return;
        setStack(prev => [...prev.slice(-39), screen]);
        setScreen(next);
        setMenu(false);
        setModal('');
        history.pushState(null, '', `#tela-${String(next).padStart(2, '0')}`);
    };
    const back = () => {
        const prev = stack.length ? stack[stack.length - 1] : (screen < 5 ? 1 : HOME[role]);
        setStack(p => p.slice(0, -1));
        setScreen(prev);
        setModal('');
        history.pushState(null, '', `#tela-${String(prev).padStart(2, '0')}`);
    };
    const toastShow = (s) => { setToast(s); window.setTimeout(() => setToast(''), 3200); };
    const run = (action) => {
        const [cmd, ...rest] = action.split(':');
        const value = rest.join(':');
        if (cmd === 'go') {
            go(+value);
            return;
        }
        if (cmd === 'back') {
            back();
            return;
        }
        if (cmd === 'profile') {
            const r = value;
            setSelectedProfile(r);
            setRole(r);
            toastShow(`Perfil selecionado: ${r === 'surdo' ? 'pessoa surda' : r === 'ouvinte' ? 'pessoa ouvinte' : 'educador'}`);
            return;
        }
        if (cmd === 'continue') {
            setRole(selectedProfile);
            go(HOME[selectedProfile]);
            return;
        }
        if (cmd === 'register') {
            if (!(fields['nome'] || '').trim() || !(fields['email'] || '').trim()) {
                toastShow('Preencha seu nome e e-mail para continuar.');
                return;
            }
            setName(fields['nome']);
            go(4);
            return;
        }
        if (cmd === 'login') {
            setName(name || 'Ana');
            go(4);
            return;
        }
        if (cmd === 'answer') {
            setQuiz(+value);
            setChecked(false);
            return;
        }
        if (cmd === 'verify') {
            setChecked(true);
            setModal(quiz === 0 ? 'Resposta correta! “Prazer em conhecer você.” corresponde à expressão apresentada.' : 'Quase! A resposta esperada é “Prazer em conhecer você.”. Você pode tentar novamente.');
            return;
        }
        if (cmd === 'cancel') {
            go(HOME[role]);
            return;
        }
        if (cmd === 'logout') {
            setRole('surdo');
            setSelectedProfile('surdo');
            setName('');
            setFields({});
            setStack([]);
            go(1);
            toastShow('Você saiu da demonstração.');
            return;
        }
        if (cmd === 'toggle') {
            setToggles(old => ({ ...old, [value]: !old[value] }));
            toastShow(`${value}: ${toggles[value] ? 'desativado' : 'ativado'}`);
            return;
        }
        if (cmd === 'toast') {
            toastShow(value);
            return;
        }
        if (cmd === 'send') {
            if (!message.trim()) {
                toastShow('Digite uma mensagem antes de enviar.');
                return;
            }
            setModal(`Mensagem de demonstração enviada: “${message}”. Nenhum dado foi transmitido.`);
            setMessage('');
            return;
        }
        if (cmd === 'publish') {
            setModal('Atividade publicada apenas nesta demonstração. Nenhum dado foi salvo em um servidor.');
            return;
        }
        if (cmd === 'video') {
            setModal(`Vídeo demonstrativo: ${value}. No protótipo visual, o vídeo original não foi fornecido e não é reproduzido.`);
            return;
        }
        if (cmd === 'info') {
            setModal(value);
            return;
        }
    };
    const nav = (() => {
        if (screen < 5 || screen === 30)
            return [];
        const items = role === 'professor' ? [HOME[role], 22, 23, 24, 25] : role === 'ouvinte' ? [HOME[role], 17, 19, 15] : [HOME[role], 6, 8, 15];
        const width = 390 / items.length;
        return items.map((id, i) => map(i * width, 786, width, 58, `${['Início', 'Trilhas', 'Prática', 'Perfil', 'Conta'][i]} — ${INFO[id].title}`, `go:${id}`));
    })();
    const input = (id, x, y, w, h, type = 'text') => (React.createElement("input", { key: id, className: "interactive-input", style: { left: `${x / 390 * 100}%`, top: `${y / 844 * 100}%`, width: `${w / 390 * 100}%`, height: `${h / 844 * 100}%` }, type: type, value: fields[id] || '', "aria-label": id, onChange: (e) => setFields(v => ({ ...v, [id]: e.target.value })), autoComplete: "off" }));
    const overlays = () => {
        switch (screen) {
            case 2: return React.createElement(React.Fragment, null,
                input('nome', 100, 268, 230, 41),
                input('email', 92, 344, 230, 41, 'email'),
                input('senha', 98, 418, 228, 42, 'password'),
                input('confirmar senha', 133, 493, 189, 42, 'password'));
            case 3: return React.createElement(React.Fragment, null,
                input('email', 94, 300, 232, 44, 'email'),
                input('senha', 92, 375, 232, 44, 'password'));
            case 4: return React.createElement(React.Fragment, null, input('Código da empresa', 103, 668, 212, 40));
            case 11: return React.createElement("input", { "aria-label": "Digite sua mensagem", className: "interactive-input message-input", style: { left: '15%', top: '83.5%', width: '70%', height: '5.5%' }, value: message, onChange: (e) => setMessage(e.target.value), onKeyDown: (e) => e.key === 'Enter' && run('send') });
            case 21: return React.createElement(React.Fragment, null,
                input('Título da atividade', 40, 211, 299, 41),
                React.createElement("textarea", { "aria-label": "Instru\u00E7\u00F5es", className: "interactive-input", style: { left: '11%', top: '37.3%', width: '78%', height: '11.2%', resize: 'none', paddingTop: '12px' }, value: fields['Instruções'] || '', onChange: (e) => setFields(v => ({ ...v, 'Instruções': e.target.value })) }));
            default: return null;
        }
    };
    const screenHot = [...(HOT[screen] || []), ...nav];
    return React.createElement("div", { className: "app-shell" },
        React.createElement("header", { className: "topbar" },
            React.createElement("div", { className: "brand-small" },
                React.createElement("span", { className: "brand-mark" }, "S"),
                React.createElement("div", null,
                    React.createElement("strong", null, "Sinalis"),
                    React.createElement("small", null, "Prot\u00F3tipo interativo \u00B7 30 telas"))),
            React.createElement("div", { className: "topbar-actions" },
                React.createElement("button", { className: "utility", onClick: () => setMenu(!menu), "aria-expanded": menu },
                    "\u2630 ",
                    React.createElement("span", null, "Todas as telas")),
                React.createElement("button", { className: "utility", onClick: () => go(1) },
                    "\u21BA ",
                    React.createElement("span", null, "Reiniciar")))),
        React.createElement("main", { className: "layout" },
            React.createElement("section", { className: "preview-area", "aria-label": "Prot\u00F3tipo Sinalis" },
                React.createElement("div", { className: "device" },
                    React.createElement("div", { className: "screen-container" },
                        React.createElement("img", { src: `${base}screens/${String(screen).padStart(2, '0')}.webp`, alt: `Interface ilustrativa: ${INFO[screen].title}`, draggable: false }),
                        screenHot.map(([x, y, w, h, label, action], i) => React.createElement("button", { key: `${screen}-${i}`, className: `hotspot ${debug ? 'debug' : ''} ${screen === 4 && action === `profile:${selectedProfile}` ? 'selected-profile' : ''} ${screen === 8 && action === `answer:${quiz}` ? 'selected-answer' : ''}`, "aria-label": label, title: label, style: { left: `${x / 390 * 100}%`, top: `${y / 844 * 100}%`, width: `${w / 390 * 100}%`, height: `${h / 844 * 100}%` }, onClick: () => run(action) })),
                        overlays())),
                React.createElement("div", { className: "under-phone" },
                    React.createElement("button", { onClick: back, "aria-label": "Tela anterior" }, "\u2190 Anterior"),
                    React.createElement("span", null,
                        "Tela ",
                        String(screen).padStart(2, '0'),
                        " de 30"),
                    React.createElement("button", { onClick: () => go(screen === 30 ? 1 : screen + 1), "aria-label": "Pr\u00F3xima tela" }, "Pr\u00F3xima \u2192")),
                React.createElement("label", { className: "debug-switch" },
                    React.createElement("input", { type: "checkbox", checked: debug, onChange: (e) => setDebug(e.target.checked) }),
                    " Exibir \u00E1reas clic\u00E1veis")),
            React.createElement("aside", { className: `sidebar ${menu ? 'visible' : ''}` },
                React.createElement("div", { className: "sidebar-header" },
                    React.createElement("div", null,
                        React.createElement("h1", null, "Mapa de navega\u00E7\u00E3o"),
                        React.createElement("p", null, "Escolha um perfil ou navegue por qualquer tela.")),
                    React.createElement("button", { className: "close-sidebar", onClick: () => setMenu(false), "aria-label": "Fechar menu" }, "\u2715")),
                React.createElement("div", { className: "role-picker" },
                    React.createElement("button", { className: role === 'surdo' ? 'active' : '', onClick: () => { setRole('surdo'); go(5); } }, "Pessoa surda"),
                    React.createElement("button", { className: role === 'ouvinte' ? 'active' : '', onClick: () => { setRole('ouvinte'); go(16); } }, "Ouvinte"),
                    React.createElement("button", { className: role === 'professor' ? 'active' : '', onClick: () => { setRole('professor'); go(20); } }, "Educador")),
                GROUPS.map(g => React.createElement("div", { className: "nav-group", key: g.name },
                    React.createElement("h2", null, g.name),
                    g.range.map(n => React.createElement("button", { key: n, className: screen === n ? 'current' : '', onClick: () => go(n) },
                        React.createElement("span", { className: "nav-number" }, String(n).padStart(2, '0')),
                        React.createElement("span", null, INFO[n].title),
                        React.createElement("span", { className: "nav-arrow" }, "\u203A"))))),
                React.createElement("div", { className: "aside-note" },
                    React.createElement("strong", null, "Prot\u00F3tipo demonstrativo"),
                    React.createElement("p", null, "Intera\u00E7\u00F5es, contas, v\u00EDdeos, mensagens e publica\u00E7\u00F5es s\u00E3o simula\u00E7\u00F5es; n\u00E3o existe backend conectado.")))),
        menu && React.createElement("div", { className: "menu-backdrop", onClick: () => setMenu(false) }),
        modal && React.createElement("div", { role: "presentation", className: "modal-backdrop", onClick: () => setModal('') },
            React.createElement("section", { role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-title", className: "dialog", onClick: (e) => e.stopPropagation() },
                React.createElement("div", { className: "dialog-icon" }, "\u2726"),
                React.createElement("h2", { id: "modal-title" }, "Sinalis"),
                React.createElement("p", null, modal),
                React.createElement("button", { onClick: () => setModal('') }, "Entendi"),
                screen === 8 && checked && React.createElement("button", { className: "text-action", onClick: () => { setModal(''); go(7); } }, "Continuar aprendendo \u2192"))),
        toast && React.createElement("div", { role: "status", className: "toast" }, toast));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
