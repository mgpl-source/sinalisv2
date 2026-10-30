const L = (id, title, description, minutes, question, answers, correct, takeaway) => ({ id, title, description, minutes, question, answers, correct, takeaway });
const TRACKS = [
    { id: 'work', title: 'Libras no trabalho', subtitle: 'Comunicação acessível com sua equipe', image: 'assets/team.webp', color: 'teal', audience: ['surdo', 'ouvinte', 'educador'], lessons: [
            L('work-1', 'Primeiros cumprimentos', 'Aprenda como começar uma conversa acolhedora no ambiente profissional.', 7, 'Ao iniciar uma conversa com uma pessoa surda, qual atitude é mais adequada?', ['Falar de costas para ela', 'Garantir contato visual e respeitar sua preferência de comunicação', 'Gritar para facilitar a compreensão'], 1, 'Contato visual, atenção e respeito às preferências de comunicação são fundamentais.'),
            L('work-2', 'Apresentações profissionais', 'Conheça formas de se apresentar e introduzir colegas com apoio da Libras.', 6, 'Em uma apresentação acessível, o que ajuda a pessoa surda?', ['Falar olhando para baixo', 'Apresentar nomes e contexto de forma clara e visual', 'Ignorar a comunicação por sinais'], 1, 'A informação visual clara torna as apresentações mais inclusivas.'),
            L('work-3', 'Reuniões em equipe', 'Pratique atitudes de inclusão em reuniões e conversas de trabalho.', 8, 'Qual prática favorece reuniões acessíveis?', ['Várias pessoas falando ao mesmo tempo', 'Materiais visuais, turnos de fala e interpretação quando necessária', 'Excluir participantes das decisões'], 1, 'Organize turnos, forneça apoio visual e respeite as necessidades dos participantes.')
        ] },
    { id: 'basic', title: 'Primeiras conversas', subtitle: 'Sinais e expressões para o dia a dia', image: 'assets/libras.webp', color: 'orange', audience: ['ouvinte', 'educador', 'surdo'], lessons: [
            L('basic-1', 'Conhecendo a Libras', 'Entenda o papel das expressões faciais, do corpo e das mãos na língua.', 6, 'A Libras é...', ['Uma língua visual-espacial com gramática própria', 'Uma tradução palavra por palavra do português', 'Apenas um conjunto de gestos universais'], 0, 'Libras é uma língua natural completa, com estruturas linguísticas próprias.'),
            L('basic-2', 'Cumprimentos e apresentações', 'Explore os contextos de saudação e como iniciar uma conversa.', 7, 'Além das mãos, o que é importante para a comunicação em Libras?', ['Expressões faciais e movimentos corporais', 'Aumentar o volume da voz', 'Evitar olhar para a pessoa'], 0, 'Expressões não manuais também fazem parte da comunicação em Libras.'),
            L('basic-3', 'Expressões no cotidiano', 'Pratique como pedir ajuda, agradecer e esclarecer dúvidas.', 8, 'Se você não entendeu um sinal, o melhor é...', ['Fingir que entendeu', 'Pedir gentilmente para repetir ou explicar', 'Encerrar imediatamente a conversa'], 1, 'Pedir esclarecimento é uma forma respeitosa de continuar a comunicação.')
        ] },
    { id: 'service', title: 'Atendimento inclusivo', subtitle: 'Acolhimento ao público e ao cliente', image: 'assets/hero.webp', color: 'blue', audience: ['surdo', 'ouvinte', 'educador'], lessons: [
            L('service-1', 'Primeiro contato', 'Aprenda a oferecer um atendimento acolhedor e acessível.', 5, 'Ao atender uma pessoa surda, primeiro você deve...', ['Perguntar a forma de comunicação que ela prefere', 'Exigir que ela leia seus lábios', 'Chamar outra pessoa sem perguntar'], 0, 'A melhor abordagem começa com uma pergunta respeitosa sobre preferências de comunicação.'),
            L('service-2', 'Informações importantes', 'Organize informações e instruções com recursos visuais.', 7, 'Qual alternativa é um bom recurso de acessibilidade?', ['Instruções somente em áudio', 'Informações escritas claras e apoio visual', 'Sinalização inexistente'], 1, 'Texto claro e recursos visuais ampliam o acesso às informações.'),
            L('service-3', 'Situações práticas', 'Treine soluções para interações comuns no trabalho.', 6, 'O que fazer se uma explicação não foi compreendida?', ['Repetir exatamente do mesmo jeito sem verificar', 'Oferecer outra forma de explicar e confirmar o entendimento', 'Desistir da conversa'], 1, 'Adaptar a comunicação torna a interação mais eficiente.')
        ] },
    { id: 'career', title: 'Comunicação e carreira', subtitle: 'Autonomia e desenvolvimento profissional', image: 'assets/career.webp', color: 'wine', audience: ['surdo', 'ouvinte', 'educador'], lessons: [
            L('career-1', 'Currículo acessível', 'Organize as experiências e as competências para oportunidades profissionais.', 6, 'Um bom currículo destaca principalmente...', ['Competências, projetos e experiências relevantes', 'Apenas sua fotografia', 'Informações sem relação com a vaga'], 0, 'Destaque resultados e habilidades relacionados à oportunidade.'),
            L('career-2', 'Entrevistas de emprego', 'Prepare-se para comunicar suas experiências com confiança.', 8, 'Em uma entrevista, o candidato pode...', ['Solicitar recursos de acessibilidade necessários', 'Abrir mão de qualquer adaptação', 'Evitar informar as preferências de comunicação'], 0, 'Pedir recursos de acessibilidade faz parte da participação em condições adequadas.'),
            L('career-3', 'Colaboração no trabalho', 'Explore práticas que fortalecem a comunicação em equipe.', 7, 'Uma equipe inclusiva deve...', ['Valorizar diferentes formas de comunicação', 'Excluir colegas de reuniões', 'Usar apenas avisos por áudio'], 0, 'A inclusão exige comunicação acessível para todos.')
        ] }
];
const VOCAB = [{ word: 'Bom dia', context: 'Saudação', note: 'Início de uma conversa cordial.' }, { word: 'Obrigado', context: 'Cortesia', note: 'Agradecimento no cotidiano.' }, { word: 'Reunião', context: 'Trabalho', note: 'Encontro para conversar e decidir em equipe.' }, { word: 'Equipe', context: 'Trabalho', note: 'Pessoas que atuam juntas.' }, { word: 'Ajuda', context: 'Cotidiano', note: 'Pedido de apoio em uma situação.' }, { word: 'Atendimento', context: 'Trabalho', note: 'Acolhimento e orientação ao público.' }, { word: 'Inclusão', context: 'Cultura', note: 'Participação com acesso e respeito às diferenças.' }, { word: 'Prazer', context: 'Saudação', note: 'Expressão usada ao conhecer alguém.' }];
const ICONS = { home: 'M3 10.5 12 3l9 7.5V21h-6v-7H9v7H3z', book: 'M4 5h7a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z M20 5h-5a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h5z', spark: 'M12 2l2.8 6.2L21 11l-6.2 2.8L12 20l-2.8-6.2L3 11l6.2-2.8z', user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21v-2c0-4.5 16-4.5 16 0v2', users: 'M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M2 21v-2c0-4 12-4 12 0v2 M16 4c5 0 5 8 0 8 M17 16c3 0 5 2 5 5', bell: 'M18 8a6 6 0 0 0-12 0c0 8-3 8-3 10h18c0-2-3-2-3-10 M10 22h4', settings: 'M12 3v3 M12 18v3 M3 12h3 M18 12h3 M5.6 5.6l2.1 2.1 M16.3 16.3l2.1 2.1 M18.4 5.6l-2.1 2.1 M7.7 16.3l-2.1 2.1 M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8', arrow: 'M5 12h14 m-6-6 6 6-6 6', back: 'M15 18l-6-6 6-6', check: 'M4 12l5 5L20 6', message: 'M4 4h16v12H9l-5 4z', briefcase: 'M3 8h18v13H3z M9 8V4h6v4 M3 13h18', chart: 'M4 20V12h4v8z M10 20V4h4v16z M16 20v-9h4v9z', play: 'M8 5l12 7-12 7z', search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M16 16l5 5', close: 'M5 5l14 14 M19 5L5 19', headphones: 'M3 13V11a9 9 0 0 1 18 0v2 M3 13h4v7H5a2 2 0 0 1-2-2z M21 13h-4v7h2a2 2 0 0 0 2-2z', bookmark: 'M5 3h14v18l-7-5-7 5z', calendar: 'M4 5h16v16H4z M8 3v5 M16 3v5 M4 10h16', file: 'M6 2h9l5 5v15H6z M15 2v5h5 M9 12h8 M9 16h8', graduation: 'M2 9l10-6 10 6-10 6z M6 12v6c4 3 8 3 12 0v-6', send: 'M3 21L22 12 3 3l3 8 9 1-9 1z', shield: 'M12 2l9 4v6c0 6-4 9-9 10-5-1-9-4-9-10V6z', volume: 'M4 10h4l6-5v14l-6-5H4z M18 8c2 2 2 6 0 8', eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', help: 'M10 9a3 3 0 1 1 4 3c-1.5 1-2 2-2 3 M12 19h.01 M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20', filter: 'M4 7h16 M7 12h10 M10 17h4', plus: 'M12 4v16 M4 12h16', clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18 M12 7v5l4 2', download: 'M12 3v13 M7 11l5 5 5-5 M4 19v3h16v-3', logout: 'M9 3H4v18h5 M13 7l5 5-5 5 M8 12h10', heart: 'M12 21L4 13c-6-7 4-14 8-6 4-8 14-1 8 6z' };
function Icon(p) { return React.createElement("svg", { "aria-hidden": "true", width: p.size || 22, height: p.size || 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: ICONS[p.name] || ICONS.spark })); }
function Brand(p) { return React.createElement("span", { className: 'brand ' + (p.small ? 'brand-small' : '') },
    React.createElement("img", { src: "assets/mascote.png", alt: "" }),
    React.createElement("span", null,
        React.createElement("strong", null, "Sinalis"),
        React.createElement("em", null, "EDUCA\u00C7\u00C3O INCLUSIVA"))); }
function Progress(p) { return React.createElement("div", { className: "progress-track", role: "progressbar", "aria-valuenow": p.value, "aria-valuemin": 0, "aria-valuemax": 100 },
    React.createElement("span", { style: { width: Math.max(0, Math.min(100, p.value)) + '%' } })); }
function Button(p) { return React.createElement("button", { type: "button", disabled: p.disabled, onClick: p.onClick, className: 'btn ' + (p.kind || 'primary') + ' ' + (p.className || '') },
    p.icon && React.createElement(Icon, { name: p.icon, size: 18 }),
    " ",
    p.children); }
function Tile(p) { return React.createElement("button", { className: "tile", onClick: p.onClick },
    React.createElement("span", { className: 'tile-icon ' + (p.tone || 'orange') },
        React.createElement(Icon, { name: p.icon, size: 24 })),
    React.createElement("span", { className: "tile-label" },
        React.createElement("strong", null, p.title),
        p.description && React.createElement("small", null, p.description)),
    p.end && React.createElement("span", { className: "tile-next" },
        React.createElement(Icon, { name: "arrow", size: 18 }))); }
function Tabs(p) { return React.createElement("div", { className: "segmented" }, p.options.map(x => React.createElement("button", { key: x, className: x === p.active ? 'active' : '', onClick: () => p.onClick(x) }, x))); }
const DEFAULT_POSTS = [{ id: 1, author: 'Marina Costa', role: 'Participante', body: 'Como tornar reuniões mais acessíveis? Compartilhem recursos e práticas que funcionam nas equipes de vocês.', likes: 12, comments: ['Usar a pauta antecipadamente faz bastante diferença!'] }, { id: 2, author: 'Pedro Santos', role: 'Comunidade', body: 'Uma dica: pergunte sempre a preferência de comunicação da pessoa, em vez de presumir o que ela precisa.', likes: 9, comments: [] }];
const initial = { page: 'welcome', role: null, tab: 'Todas', track: 'basic', lesson: 'basic-1', choice: null, feedback: false, completed: [], bookmarks: [], messages: ['Olá! Seja bem-vindo(a) ao espaço de comunicação do Sinalis.'], posts: DEFAULT_POSTS, activities: [], title: '', instructions: '', group: 'Comunicação inclusiva', answerType: 'Texto', showModal: '', toast: '', query: '', filter: 'Todas', fontLarge: false, highContrast: false, reducedMotion: false, subtitles: true, notificationsRead: false, commentsDraft: {}, draftPost: '', draftMessage: '', supportMessage: '', supportSent: false, faq: -1, recentPages: [] };
const STORE = 'sinalis-demo-v3';
function load() { try {
    const s = JSON.parse(localStorage.getItem(STORE) || '{}');
    return { ...initial, ...s, page: s.role ? (s.role === 'educador' ? 'teacher' : 'home') : 'welcome', showModal: '', toast: '', query: '', feedback: false, choice: null, recentPages: [] };
}
catch {
    return { ...initial };
} }
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = load();
        this.toastTimer = null;
        this.pop = () => { const p = location.hash.replace('#', ''); if (p) {
            this.setState({ page: p });
        } };
        this.go = (page) => { window.history.pushState({}, '', `#${page}`); this.setState(s => ({ page, query: '', tab: 'Todas', filter: 'Todas', recentPages: [...s.recentPages.slice(-8), s.page], showModal: '', feedback: false, choice: null })); window.scrollTo(0, 0); };
        this.back = () => { const list = this.state.recentPages; const page = list[list.length - 1] || 'home'; history.pushState({}, '', `#${page}`); this.setState({ page, recentPages: list.slice(0, -1), showModal: '' }); window.scrollTo(0, 0); };
        this.flash = (message) => { this.setState({ toast: message }); clearTimeout(this.toastTimer); this.toastTimer = setTimeout(() => this.setState({ toast: '' }), 3200); };
        this.role = (role) => { this.setState({ role, track: role === 'ouvinte' ? 'basic' : 'work' }); this.go(role === 'educador' ? 'teacher' : 'home'); };
        this.percent = (track) => Math.round(track.lessons.filter(x => this.state.completed.includes(x.id)).length / track.lessons.length * 100);
        this.totalPercent = () => Math.round(TRACKS.flatMap(x => x.lessons).filter(x => this.state.completed.includes(x.id)).length / TRACKS.flatMap(x => x.lessons).length * 100);
        this.chosenTrack = () => TRACKS.find(t => t.id === this.state.track) || TRACKS[0];
        this.chosenLesson = () => this.chosenTrack().lessons.find(l => l.id === this.state.lesson) || this.chosenTrack().lessons[0];
        this.openTrack = (id) => { this.setState({ track: id }); this.go('track'); };
        this.openLesson = (id) => { this.setState({ lesson: id, choice: null, feedback: false }); this.go('lesson'); };
        this.finishQuiz = () => { const l = this.chosenLesson(); if (this.state.choice === null) {
            this.flash('Escolha uma resposta antes de verificar.');
            return;
        } this.setState(s => ({ feedback: true, completed: s.choice === l.correct && !s.completed.includes(l.id) ? [...s.completed, l.id] : s.completed })); };
        this.nextLesson = () => { const t = this.chosenTrack(), i = t.lessons.findIndex(x => x.id === this.state.lesson); if (i < t.lessons.length - 1)
            this.openLesson(t.lessons[i + 1].id);
        else
            this.go('progress'); };
        this.toggleBookmark = (key) => { this.setState(s => ({ bookmarks: s.bookmarks.includes(key) ? s.bookmarks.filter(b => b !== key) : [...s.bookmarks, key] })); this.flash(this.state.bookmarks.includes(key) ? 'Removido dos favoritos' : 'Salvo nos favoritos'); };
        this.sendMessage = () => { if (!this.state.draftMessage.trim())
            return; this.setState(s => ({ messages: [...s.messages, s.draftMessage.trim()], draftMessage: '' })); };
        this.saveActivity = (published) => { const { title, instructions, group, answerType } = this.state; if (!title.trim() || !instructions.trim()) {
            this.flash('Preencha o título e as instruções.');
            return;
        } this.setState(s => ({ activities: [{ title: title.trim(), instructions: instructions.trim(), group, answerType, published, created: Date.now() }, ...s.activities], title: '', instructions: '' })); this.flash(published ? 'Atividade publicada na demonstração.' : 'Rascunho salvo localmente.'); };
    }
    componentDidMount() { window.addEventListener('popstate', this.pop); this.applyPref(); }
    componentWillUnmount() { window.removeEventListener('popstate', this.pop); }
    componentDidUpdate(_p, old) { if (old !== this.state) {
        const snapshot = { ...this.state, showModal: '', toast: '', query: '', draftPost: this.state.draftPost };
        try {
            localStorage.setItem(STORE, JSON.stringify(snapshot));
        }
        catch { }
        if (old.fontLarge !== this.state.fontLarge || old.highContrast !== this.state.highContrast || old.reducedMotion !== this.state.reducedMotion)
            this.applyPref();
    } }
    applyPref() { document.documentElement.classList.toggle('font-large', this.state.fontLarge); document.documentElement.classList.toggle('high-contrast', this.state.highContrast); document.documentElement.classList.toggle('reduce-motion', this.state.reducedMotion); }
    navItems() { return this.state.role === 'educador' ? [{ label: 'Visão geral', icon: 'home', page: 'teacher' }, { label: 'Turmas', icon: 'users', page: 'students' }, { label: 'Biblioteca', icon: 'book', page: 'library' }, { label: 'Comunidade', icon: 'message', page: 'teacherCommunity' }, { label: 'Perfil', icon: 'user', page: 'profile' }] : [{ label: 'Início', icon: 'home', page: 'home' }, { label: 'Trilhas', icon: 'graduation', page: 'tracks' }, { label: 'Prática', icon: 'spark', page: 'practice' }, { label: this.state.role === 'surdo' ? 'Comunicação' : 'Comunidade', icon: 'message', page: this.state.role === 'surdo' ? 'chat' : 'community' }, { label: 'Perfil', icon: 'user', page: 'profile' }]; }
    header(title, subtitle, back = false) { return React.createElement("div", { className: "page-head" },
        React.createElement("div", { className: "head-top" },
            back ? React.createElement("button", { className: "icon-button", onClick: this.back, "aria-label": "Voltar" },
                React.createElement(Icon, { name: "back" })) : React.createElement(Brand, { small: true }),
            React.createElement("div", { className: "head-actions" },
                React.createElement("button", { className: "icon-button notice-icon", onClick: () => this.go('notifications'), "aria-label": "Notifica\u00E7\u00F5es" },
                    React.createElement(Icon, { name: "bell" }),
                    !this.state.notificationsRead && React.createElement("i", null)),
                React.createElement("button", { className: "avatar", "aria-label": "Perfil", onClick: () => this.go('profile') },
                    React.createElement(Icon, { name: "user", size: 19 })))),
        title && React.createElement(React.Fragment, null,
            React.createElement("h1", null, title),
            subtitle && React.createElement("p", { className: "subtitle" }, subtitle))); }
    section(title, action, onClick) { return React.createElement("div", { className: "section-heading" },
        React.createElement("h2", null, title),
        action && React.createElement("button", { className: "text-action", onClick: onClick },
            action,
            " ",
            React.createElement(Icon, { name: "arrow", size: 15 }))); }
    image(src, label, className = 'photo') { return React.createElement("img", { className: className, src: src, alt: label }); }
    welcome() { return React.createElement("div", { className: "welcome" },
        React.createElement("div", { className: "welcome-top" },
            React.createElement(Brand, null),
            React.createElement("span", { className: "demo-tag" }, "DEMONSTRA\u00C7\u00C3O INTERATIVA"),
            React.createElement("h1", null,
                "Comunica\u00E7\u00E3o",
                React.createElement("br", null),
                React.createElement("span", null, "que aproxima.")),
            React.createElement("p", null, "Uma experi\u00EAncia de aprendizagem de Libras e inclus\u00E3o para pessoas, equipes e educadores.")),
        React.createElement("div", { className: "welcome-visual" },
            React.createElement("div", { className: "shape-one" }),
            React.createElement("div", { className: "shape-two" }),
            this.image('assets/people.webp', 'Duas pessoas sorrindo em um ambiente de trabalho', 'welcome-people')),
        React.createElement("div", { className: "welcome-actions" },
            React.createElement(Button, { onClick: () => this.go('choose') },
                "Explorar a demonstra\u00E7\u00E3o ",
                React.createElement(Icon, { name: "arrow", size: 19 })),
            React.createElement("p", null, "Sem conta, senha ou cadastro."))); }
    choose() { return React.createElement("div", { className: "choose-page" },
        React.createElement("button", { className: "back-link", onClick: this.back },
            React.createElement(Icon, { name: "back", size: 18 }),
            " Voltar"),
        React.createElement("div", { className: "deco deco-top" }),
        React.createElement("h1", null,
            "Como voc\u00EA",
            React.createElement("br", null),
            React.createElement("span", null, "vai aprender?")),
        React.createElement("p", { className: "subtitle" }, "Escolha uma experi\u00EAncia para explorar. Voc\u00EA pode trocar de perfil quando quiser."),
        React.createElement("div", { className: "role-list" },
            React.createElement("button", { className: "role-card", onClick: () => this.role('surdo') },
                React.createElement("span", { className: "role-icon teal" },
                    React.createElement(Icon, { name: "user", size: 31 })),
                React.createElement("span", null,
                    React.createElement("strong", null, "Pessoa surda"),
                    React.createElement("small", null, "Aprendizagem, carreira e comunica\u00E7\u00E3o acess\u00EDvel")),
                React.createElement(Icon, { name: "arrow", size: 20 })),
            React.createElement("button", { className: "role-card", onClick: () => this.role('ouvinte') },
                React.createElement("span", { className: "role-icon orange" },
                    React.createElement(Icon, { name: "users", size: 31 })),
                React.createElement("span", null,
                    React.createElement("strong", null, "Pessoa ouvinte"),
                    React.createElement("small", null, "Aprenda Libras e pratique a inclus\u00E3o")),
                React.createElement(Icon, { name: "arrow", size: 20 })),
            React.createElement("button", { className: "role-card", onClick: () => this.role('educador') },
                React.createElement("span", { className: "role-icon wine" },
                    React.createElement(Icon, { name: "graduation", size: 31 })),
                React.createElement("span", null,
                    React.createElement("strong", null, "Educador(a)"),
                    React.createElement("small", null, "Turmas, atividades e materiais pedag\u00F3gicos")),
                React.createElement(Icon, { name: "arrow", size: 20 }))),
        React.createElement("div", { className: "hint-card" },
            React.createElement(Icon, { name: "spark" }),
            React.createElement("span", null, "\u00C9 uma demo: tudo acontece no seu navegador, sem dados reais ou autentica\u00E7\u00E3o."))); }
    home() { const surdo = this.state.role === 'surdo'; return React.createElement(React.Fragment, null,
        this.header('Olá, visitante!', 'Seu desenvolvimento continua aqui.'),
        React.createElement("section", { className: "hero-card" },
            React.createElement("div", { className: "hero-content" },
                React.createElement("span", { className: "eyebrow" }, "CONTINUE APRENDENDO"),
                React.createElement("h2", null, surdo ? 'Libras no trabalho' : 'Primeiras conversas'),
                React.createElement(Progress, { value: this.percent(TRACKS.find(t => t.id === (surdo ? 'work' : 'basic'))) }),
                React.createElement("span", { className: "hero-caption" },
                    this.percent(TRACKS.find(t => t.id === (surdo ? 'work' : 'basic'))),
                    "% conclu\u00EDdo"),
                React.createElement(Button, { kind: "white", onClick: () => this.openTrack(surdo ? 'work' : 'basic') },
                    "Continuar ",
                    React.createElement(Icon, { name: "arrow", size: 17 }))),
            this.image('assets/libras.webp', 'Pessoa demonstrando comunicação por sinais', 'hero-photo')),
        React.createElement("div", { className: "quick-grid" }, (surdo ? [['book', 'Minhas trilhas', 'tracks'], ['play', 'Aulas', 'track'], ['users', 'Comunidade', 'community'], ['briefcase', 'Carreira', 'career']] : [['book', 'Aprenda Libras', 'learn'], ['users', 'Apoie a inclusão', 'inclusion'], ['message', 'Comunique-se', 'chat'], ['users', 'Comunidade', 'community']]).map(([ico, label, page]) => React.createElement(Tile, { key: label, icon: ico, title: label, onClick: () => page === 'track' ? this.openTrack(surdo ? 'work' : 'basic') : this.go(page) }))),
        this.section('Para sua jornada', 'Ver trilhas', () => this.go('tracks')),
        React.createElement("div", { className: "featured-list" }, TRACKS.filter(t => surdo ? t.id !== 'basic' : t.id !== 'career').slice(0, 2).map(t => this.trackMini(t))),
        React.createElement("div", { className: "soft-banner" },
            React.createElement("span", { className: "banner-icon" },
                React.createElement(Icon, { name: "briefcase", size: 29 })),
            React.createElement("div", null,
                React.createElement("strong", null, "Capacita\u00E7\u00E3o da empresa"),
                React.createElement("p", null, "Conte\u00FAdos acess\u00EDveis para desenvolver equipes.")),
            React.createElement("button", { onClick: () => this.go('training'), "aria-label": "Explorar capacita\u00E7\u00E3o" },
                React.createElement(Icon, { name: "arrow" })))); }
    trackMini(t) { return React.createElement("button", { key: t.id, className: "track-mini", onClick: () => this.openTrack(t.id) },
        this.image(t.image, '', 'track-mini-image'),
        React.createElement("span", null,
            React.createElement("strong", null, t.title),
            React.createElement("small", null,
                t.lessons.length,
                " aulas \u2022 ",
                t.subtitle),
            React.createElement(Progress, { value: this.percent(t) })),
        React.createElement(Icon, { name: "arrow", size: 20 })); }
    tracks() { const filtered = TRACKS.filter(t => this.state.filter === 'Todas' || (this.state.filter === 'Em andamento' && this.percent(t) > 0 && this.percent(t) < 100) || (this.state.filter === 'Concluídas' && this.percent(t) === 100)); return React.createElement(React.Fragment, null,
        this.header('Sua formação', 'Desenvolva novas habilidades no seu ritmo.', true),
        React.createElement(Tabs, { options: ['Todas', 'Em andamento', 'Concluídas'], active: this.state.filter, onClick: filter => this.setState({ filter }) }),
        React.createElement("div", { className: "stack spaced" }, filtered.length ? filtered.map(t => this.trackMini(t)) : React.createElement("div", { className: "empty-state" },
            React.createElement(Icon, { name: "book", size: 34 }),
            React.createElement("h3", null, "Nenhuma trilha por aqui"),
            React.createElement("p", null, "Continue explorando suas aulas e volte para acompanhar o progresso."),
            React.createElement(Button, { kind: "outline", onClick: () => this.setState({ filter: 'Todas' }) }, "Ver todas"))),
        React.createElement("div", { className: "soft-banner" },
            React.createElement(Icon, { name: "chart", size: 24 }),
            React.createElement("span", null, "Seu avan\u00E7o acompanha voc\u00EA nesta demonstra\u00E7\u00E3o."),
            React.createElement("button", { onClick: () => this.go('progress') }, "Ver progresso"))); }
    track() { const t = this.chosenTrack(), done = this.percent(t); return React.createElement(React.Fragment, null,
        this.header(t.title, t.subtitle, true),
        React.createElement("div", { className: "media-banner" },
            this.image(t.image, 'Fotografia ilustrativa da trilha'),
            React.createElement("span", { className: "media-badge" },
                React.createElement(Icon, { name: "graduation", size: 16 }),
                " ",
                t.lessons.length,
                " aulas")),
        React.createElement("div", { className: "card course-summary" },
            React.createElement("div", null,
                React.createElement("strong", null, "Seu progresso"),
                React.createElement("b", null,
                    done,
                    "%")),
            React.createElement(Progress, { value: done }),
            React.createElement("p", null, "Aprenda com exemplos, explore os conceitos e resolva exerc\u00EDcios interativos.")),
        this.section('Módulos e aulas'),
        React.createElement("div", { className: "stack" }, t.lessons.map((l, i) => React.createElement("button", { key: l.id, className: "lesson-row", onClick: () => this.openLesson(l.id) },
            React.createElement("span", { className: 'lesson-index ' + (this.state.completed.includes(l.id) ? 'finished' : '') }, this.state.completed.includes(l.id) ? React.createElement(Icon, { name: "check", size: 18 }) : String(i + 1).padStart(2, '0')),
            React.createElement("span", null,
                React.createElement("strong", null, l.title),
                React.createElement("small", null, l.description),
                React.createElement("span", { className: "row-meta" },
                    React.createElement(Icon, { name: "clock", size: 14 }),
                    " ",
                    l.minutes,
                    " min ",
                    this.state.completed.includes(l.id) ? ' · Concluída' : ' · Disponível')),
            React.createElement(Icon, { name: "arrow", size: 19 })))),
        React.createElement(Button, { onClick: () => { var _a; return this.openLesson(((_a = t.lessons.find(l => !this.state.completed.includes(l.id))) === null || _a === void 0 ? void 0 : _a.id) || t.lessons[0].id); } }, done === 100 ? 'Revisar trilha' : 'Começar a aprender')); }
    lesson() { const l = this.chosenLesson(), t = this.chosenTrack(), index = t.lessons.findIndex(x => x.id === l.id) + 1; return React.createElement(React.Fragment, null,
        this.header(l.title, `${t.title} · Aula ${index} de ${t.lessons.length}`, true),
        React.createElement("div", { className: "media-banner media-lesson" },
            this.image(t.image, `Ilustração para ${l.title}`),
            React.createElement("span", { className: "media-stamp" },
                React.createElement(Icon, { name: "book", size: 16 }),
                " Pr\u00E9via ilustrativa")),
        React.createElement("div", { className: "notice" },
            React.createElement(Icon, { name: "eye" }),
            React.createElement("span", null, "A demo apresenta conte\u00FAdo introdut\u00F3rio. O v\u00EDdeo em Libras definitivo ser\u00E1 inclu\u00EDdo na vers\u00E3o de produ\u00E7\u00E3o.")),
        React.createElement("div", { className: "lesson-body" },
            React.createElement("span", { className: "eyebrow orange-text" },
                "AULA ",
                index.toString().padStart(2, '0')),
            React.createElement("h2", null, "Vamos aprender?"),
            React.createElement("p", null, l.description),
            React.createElement("div", { className: "lesson-tip" },
                React.createElement(Icon, { name: "spark", size: 23 }),
                React.createElement("div", null,
                    React.createElement("strong", null, "Para lembrar"),
                    React.createElement("p", null, l.takeaway))),
            React.createElement("button", { className: "inline-toggle", onClick: () => this.setState(s => ({ subtitles: !s.subtitles })) },
                React.createElement(Icon, { name: "file", size: 19 }),
                this.state.subtitles ? 'Ocultar transcrição de apoio' : 'Mostrar transcrição de apoio',
                React.createElement("span", null, this.state.subtitles ? 'Ativa' : 'Inativa')),
            this.state.subtitles && React.createElement("p", { className: "transcript" },
                l.description,
                " ",
                l.takeaway)),
        React.createElement(Button, { onClick: () => this.go('practice') },
            "Fazer atividade pr\u00E1tica ",
            React.createElement(Icon, { name: "arrow", size: 18 }))); }
    practice() { const l = this.chosenLesson(), has = this.state.choice !== null, ok = this.state.choice === l.correct; return React.createElement(React.Fragment, null,
        this.header('Hora de praticar', `${this.chosenTrack().title} · Atividade de fixação`, true),
        React.createElement("div", { className: "practice-counter" },
            React.createElement("span", null, "Atividade pr\u00E1tica"),
            React.createElement("strong", null, "01 / 01")),
        React.createElement(Progress, { value: this.state.feedback ? 100 : 45 }),
        React.createElement("div", { className: "quiz-media" },
            React.createElement("div", { className: "quiz-orb" },
                React.createElement(Icon, { name: "spark", size: 42 })),
            React.createElement("p", null, "Reflita sobre uma situa\u00E7\u00E3o do dia a dia.")),
        React.createElement("h2", { className: "question" }, l.question),
        React.createElement("div", { className: "answers" }, l.answers.map((x, i) => React.createElement("button", { disabled: this.state.feedback, key: i, className: 'answer ' + (this.state.choice === i ? 'selected ' : '') + (this.state.feedback && i === l.correct ? 'correct ' : '') + (this.state.feedback && i === this.state.choice && !ok ? 'incorrect' : ''), onClick: () => this.setState({ choice: i }) },
            React.createElement("span", { className: "radio" }, this.state.choice === i && React.createElement("i", null)),
            x))),
        this.state.feedback && React.createElement("div", { className: 'feedback ' + (ok ? 'success' : 'warning') },
            React.createElement(Icon, { name: ok ? 'check' : 'help' }),
            React.createElement("span", null,
                React.createElement("strong", null, ok ? 'Muito bem! Aula concluída.' : 'Quase lá! Tente novamente.'),
                React.createElement("small", null, l.takeaway))),
        React.createElement(Button, { disabled: !has, onClick: () => { if (!this.state.feedback)
                this.finishQuiz();
            else if (ok)
                this.nextLesson();
            else
                this.setState({ choice: null, feedback: false }); } }, !this.state.feedback ? 'Verificar resposta' : ok ? 'Próxima etapa' : 'Tentar de novo')); }
    vocabulary() { const results = VOCAB.filter(v => (v.word + v.context).toLowerCase().includes(this.state.query.toLowerCase())); return React.createElement(React.Fragment, null,
        this.header('Vocabulário profissional', 'Explore expressões e seus contextos de uso.', true),
        React.createElement("div", { className: "search" },
            React.createElement(Icon, { name: "search" }),
            React.createElement("input", { placeholder: "Buscar uma palavra", value: this.state.query, onChange: e => this.setState({ query: e.target.value }) })),
        React.createElement(Tabs, { options: ['Todas', 'Trabalho', 'Saudação', 'Cotidiano'], active: this.state.filter, onClick: filter => this.setState({ filter }) }),
        React.createElement("div", { className: "stack" },
            results.filter(x => this.state.filter === 'Todas' || x.context === this.state.filter).map(x => React.createElement("div", { className: "word-card", key: x.word },
                React.createElement("div", { className: "word-icon" },
                    React.createElement(Icon, { name: "message" })),
                React.createElement("span", null,
                    React.createElement("strong", null, x.word),
                    React.createElement("small", null,
                        x.context,
                        " \u00B7 ",
                        x.note)),
                React.createElement("button", { className: 'icon-button ' + (this.state.bookmarks.includes(x.word) ? 'is-saved' : ''), "aria-label": "Salvar express\u00E3o", onClick: () => this.toggleBookmark(x.word) },
                    React.createElement(Icon, { name: "bookmark" })))),
            results.length === 0 && React.createElement("p", { className: "muted" }, "Nenhuma palavra encontrada.")),
        React.createElement("div", { className: "notice" },
            React.createElement(Icon, { name: "help" }),
            React.createElement("span", null, "Esta demonstra\u00E7\u00E3o apresenta significados em portugu\u00EAs. V\u00EDdeos de sinais validados por especialistas ser\u00E3o adicionados ao produto."))); }
    progressPage() { const completed = this.state.completed.length; return React.createElement(React.Fragment, null,
        this.header('Seu desenvolvimento', 'Acompanhe sua evolução na formação.', true),
        React.createElement("div", { className: "progress-hero" },
            React.createElement("span", null, "PROGRESSO DA JORNADA"),
            React.createElement("div", null,
                React.createElement("strong", null,
                    this.totalPercent(),
                    "%"),
                React.createElement("span", null, "da jornada conclu\u00EDda")),
            React.createElement(Progress, { value: this.totalPercent() })),
        React.createElement("div", { className: "metrics" },
            React.createElement("div", { className: "metric" },
                React.createElement(Icon, { name: "book" }),
                React.createElement("strong", null, completed),
                React.createElement("small", null, "aulas conclu\u00EDdas")),
            React.createElement("div", { className: "metric" },
                React.createElement(Icon, { name: "clock" }),
                React.createElement("strong", null,
                    completed * 7,
                    " min"),
                React.createElement("small", null, "de estudo"))),
        this.section('Competências desenvolvidas'),
        React.createElement("div", { className: "card progress-list" }, TRACKS.map(t => React.createElement("div", { className: "skill-row", key: t.id },
            React.createElement("span", null, t.title),
            React.createElement("strong", null,
                this.percent(t),
                "%"),
            React.createElement(Progress, { value: this.percent(t) })))),
        React.createElement("div", { className: "soft-banner" },
            React.createElement(Icon, { name: "file" }),
            React.createElement("div", null,
                React.createElement("strong", null, "Certificado da trilha"),
                React.createElement("p", null, TRACKS.some(t => this.percent(t) === 100) ? 'Você concluiu uma trilha!' : 'Conclua todas as aulas de uma trilha para liberar a conquista de demonstração.'))),
        React.createElement(Button, { onClick: () => this.go('tracks') }, "Continuar meus estudos")); }
    chat() { return React.createElement(React.Fragment, null,
        this.header('Comunicação', 'Escolha a maneira mais confortável de conversar.', true),
        React.createElement("div", { className: "card chat-card" },
            React.createElement("h3", null, "Como deseja se comunicar?"),
            React.createElement(Tabs, { options: ['Texto', 'Libras', 'Áudio'], active: this.state.tab === 'Todas' ? 'Texto' : this.state.tab, onClick: tab => { this.setState({ tab }); if (tab !== 'Texto')
                    this.flash(`${tab}: função ilustrativa. O chat de texto está disponível na demo.`); } }),
            React.createElement("div", { className: "conversation" },
                React.createElement("div", { className: "bubble received" }, "Ol\u00E1! Como podemos melhorar a comunica\u00E7\u00E3o na equipe?"),
                this.state.messages.map((m, i) => React.createElement("div", { key: i, className: 'bubble ' + (i === 0 ? 'received' : 'sent') }, m))),
            React.createElement("div", { className: "message-compose" },
                React.createElement("input", { value: this.state.draftMessage, placeholder: "Escreva sua mensagem", onChange: e => this.setState({ draftMessage: e.target.value }), onKeyDown: e => { if (e.key === 'Enter')
                        this.sendMessage(); } }),
                React.createElement("button", { "aria-label": "Enviar mensagem", onClick: this.sendMessage },
                    React.createElement(Icon, { name: "send", size: 20 })))),
        React.createElement("div", { className: "notice" },
            React.createElement(Icon, { name: "shield", size: 20 }),
            React.createElement("span", null, "Conversa demonstrativa salva somente neste navegador. N\u00E3o existem outros participantes conectados."))); }
    career() { return React.createElement(React.Fragment, null,
        this.header('Trabalho e carreira', 'Desenvolva sua jornada profissional.', true),
        React.createElement("div", { className: "career-feature" },
            React.createElement("div", null,
                React.createElement("h2", null, "Preparar-se para o mercado"),
                React.createElement("p", null, "Dicas e conte\u00FAdos para conquistar novas oportunidades.")),
            this.image('assets/career.webp', 'Pessoa em ambiente profissional')),
        React.createElement("div", { className: "stack" },
            React.createElement(Tile, { icon: "file", title: "Curr\u00EDculo acess\u00EDvel", description: "Organize suas experi\u00EAncias profissionais.", onClick: () => this.openTrack('career'), end: true }),
            React.createElement(Tile, { icon: "users", title: "Entrevistas de emprego", description: "Dicas de prepara\u00E7\u00E3o e comunica\u00E7\u00E3o.", onClick: () => this.openTrack('career'), end: true }),
            React.createElement(Tile, { icon: "chart", title: "Comunica\u00E7\u00E3o profissional", description: "Colabora\u00E7\u00E3o no ambiente de trabalho.", onClick: () => this.openTrack('work'), end: true })),
        this.section('Em destaque'),
        React.createElement("div", { className: "soft-banner" },
            React.createElement(Icon, { name: "heart", size: 24 }),
            React.createElement("div", null,
                React.createElement("strong", null, "Inclus\u00E3o no ambiente de trabalho"),
                React.createElement("p", null, "Pr\u00E1ticas acess\u00EDveis para equipes e lideran\u00E7as.")),
            React.createElement("button", { onClick: () => this.go('inclusion'), "aria-label": "Conhecer boas pr\u00E1ticas" },
                React.createElement(Icon, { name: "arrow" })))); }
    training() { return React.createElement(React.Fragment, null,
        this.header('Qualificação profissional', 'Formação para o seu próximo passo.', true),
        this.section('Trilhas recomendadas'),
        React.createElement("div", { className: "stack" }, [TRACKS[2], TRACKS[3], TRACKS[0]].map(t => this.trackMini(t))),
        React.createElement("div", { className: "media-banner" },
            this.image('assets/libras.webp', 'Pessoa comunicando por sinais'),
            React.createElement("span", { className: "media-stamp" }, "Conte\u00FAdos com apoio de Libras")),
        React.createElement(Button, { onClick: () => this.go('tracks') }, "Ver todas as trilhas")); }
    reading() { return React.createElement(React.Fragment, null,
        this.header('Leitura e cultura', 'Aprenda com histórias e informação.', true),
        React.createElement(Tabs, { options: ['Todas', 'Histórias', 'Notícias'], active: this.state.filter, onClick: filter => this.setState({ filter }) }),
        React.createElement("article", { className: "reading-feature" },
            this.image('assets/reading.webp', 'Pessoas lendo e compartilhando histórias'),
            React.createElement("div", null,
                React.createElement("h2", null, "Hist\u00F3rias que conectam"),
                React.createElement("p", null, "Leitura acess\u00EDvel e comunica\u00E7\u00E3o para todas as pessoas."),
                React.createElement(Button, { onClick: () => this.go('article') }, "Come\u00E7ar leitura"))),
        React.createElement("div", { className: "stack" },
            React.createElement(Tile, { icon: "file", title: "Not\u00EDcias em linguagem simples", description: "Leituras curtas sobre inclus\u00E3o e cultura.", onClick: () => this.go('article'), end: true }),
            React.createElement(Tile, { icon: "calendar", title: "Agenda cultural acess\u00EDvel", description: "Boas pr\u00E1ticas para eventos inclusivos.", onClick: () => this.go('inclusion'), end: true }))); }
    article() { return React.createElement(React.Fragment, null,
        this.header('Histórias que conectam', 'Leitura • 3 minutos', true),
        React.createElement("div", { className: "media-banner" }, this.image('assets/reading.webp', 'Pessoas compartilhando a leitura')),
        React.createElement("div", { className: "article-content" },
            React.createElement("h2", null, "Uma conversa muda um ambiente"),
            React.createElement("p", null, "Na equipe de uma pequena empresa, as pessoas come\u00E7aram a perceber que todos se comunicavam de maneiras diferentes. Para melhorar as reuni\u00F5es, decidiram compartilhar a pauta com anteced\u00EAncia, usar recursos visuais e garantir que cada participante tivesse espa\u00E7o para contribuir."),
            React.createElement("p", null, "A experi\u00EAncia mostrou que a inclus\u00E3o acontece em atitudes cotidianas: perguntar, escutar, aprender e adaptar a comunica\u00E7\u00E3o."),
            React.createElement("blockquote", null, "\u201CComunicar bem \u00E9 garantir que todas as pessoas possam participar.\u201D"),
            React.createElement("p", null, "O Sinalis re\u00FAne trilhas e atividades para ajudar pessoas e organiza\u00E7\u00F5es a construir essas pr\u00E1ticas.")),
        React.createElement(Button, { kind: "outline", icon: "bookmark", onClick: () => this.toggleBookmark('Histórias que conectam') }, this.state.bookmarks.includes('Histórias que conectam') ? 'Remover dos salvos' : 'Salvar para ler depois'),
        React.createElement(Button, { onClick: () => this.go('tracks') }, "Explorar aprendizagem")); }
    learn() { return React.createElement(React.Fragment, null,
        this.header('Aprenda Libras', 'Sinais e expressões para o dia a dia.', true),
        React.createElement("div", { className: "media-banner" },
            this.image('assets/libras.webp', 'Pessoa usando comunicação por sinais'),
            React.createElement("span", { className: "media-stamp" }, "M\u00F3dulos para iniciantes")),
        React.createElement("h2", { className: "section-title" }, "Primeiras conversas"),
        React.createElement("p", { className: "muted" }, "Comece por conceitos b\u00E1sicos e avance para situa\u00E7\u00F5es do trabalho."),
        React.createElement(Button, { onClick: () => this.openTrack('basic') }, "Come\u00E7ar m\u00F3dulo"),
        React.createElement("div", { className: "stack spaced" },
            React.createElement(Tile, { icon: "users", title: "Apresenta\u00E7\u00F5es", description: "Conhecendo a Libras", onClick: () => { this.setState({ track: 'basic' }); this.openLesson('basic-1'); }, end: true }),
            React.createElement(Tile, { icon: "message", title: "Cumprimentos", description: "Express\u00F5es em contexto", onClick: () => { this.setState({ track: 'basic' }); this.openLesson('basic-2'); }, end: true }),
            React.createElement(Tile, { icon: "briefcase", title: "Express\u00F5es no trabalho", description: "Comunica\u00E7\u00E3o inclusiva", onClick: () => this.openTrack('work'), end: true }))); }
    inclusion() { return React.createElement(React.Fragment, null,
        this.header('Apoie a inclusão', 'Boas práticas que fazem diferença.', true),
        React.createElement("div", { className: "inclusion-banner" },
            React.createElement("h2", null,
                "Torne sua ",
                React.createElement("span", null, "comunica\u00E7\u00E3o"),
                " acess\u00EDvel."),
            React.createElement("div", { className: "circle-orange" }),
            React.createElement("div", { className: "circle-teal" })),
        React.createElement("div", { className: "stack spaced" },
            React.createElement(Tile, { icon: "message", title: "Pergunte a prefer\u00EAncia de comunica\u00E7\u00E3o", description: "Respeite como cada pessoa se comunica.", onClick: () => this.openTrack('service'), end: true }),
            React.createElement(Tile, { icon: "eye", title: "Use recursos visuais e legendas", description: "Facilite o acesso \u00E0s informa\u00E7\u00F5es.", onClick: () => this.go('settings'), end: true }),
            React.createElement(Tile, { icon: "users", title: "Garanta participa\u00E7\u00E3o nas reuni\u00F5es", description: "Inclua todas as pessoas nas discuss\u00F5es e decis\u00F5es.", onClick: () => this.openTrack('work'), end: true }),
            React.createElement(Tile, { icon: "file", title: "Guia para equipes", description: "Pr\u00E1ticas e recomenda\u00E7\u00F5es para o trabalho.", onClick: () => this.go('article'), end: true })),
        React.createElement(Button, { onClick: () => this.go('tracks') }, "Explorar boas pr\u00E1ticas")); }
    community(teacher = false) { const posts = this.state.posts; return React.createElement(React.Fragment, null,
        this.header(teacher ? 'Comunidade docente' : 'Comunidade', teacher ? 'Compartilhe práticas e experiências.' : 'Trocas, encontros e conexões.', true),
        React.createElement("div", { className: "card compose-card" },
            React.createElement("strong", null, "Compartilhe uma ideia"),
            React.createElement("textarea", { placeholder: "Qual pr\u00E1tica inclusiva voc\u00EA gostaria de compartilhar?", rows: 3, value: this.state.draftPost, onChange: e => this.setState({ draftPost: e.target.value }) }),
            React.createElement("div", null,
                React.createElement("small", null, "Publica\u00E7\u00E3o local da demo"),
                React.createElement(Button, { kind: "small", onClick: () => { if (!this.state.draftPost.trim()) {
                        this.flash('Escreva sua mensagem.');
                        return;
                    } this.setState(s => ({ posts: [{ id: Date.now(), author: 'Você', role: teacher ? 'Educador(a)' : 'Participante', body: s.draftPost.trim(), likes: 0, comments: [] }, ...s.posts], draftPost: '' })); this.flash('Publicação criada nesta demonstração.'); }, icon: "plus" }, "Publicar"))),
        React.createElement("div", { className: "stack spaced" }, posts.map(p => React.createElement("article", { key: p.id, className: "post" },
            React.createElement("div", { className: "post-head" },
                React.createElement("span", { className: "post-avatar" },
                    React.createElement(Icon, { name: "user" })),
                React.createElement("div", null,
                    React.createElement("strong", null, p.author),
                    React.createElement("small", null,
                        p.role,
                        " \u00B7 Demonstra\u00E7\u00E3o"))),
            React.createElement("p", null, p.body),
            React.createElement("div", { className: "post-actions" },
                React.createElement("button", { className: p.liked ? 'liked' : '', onClick: () => this.setState(s => ({ posts: s.posts.map(x => x.id === p.id ? { ...x, liked: !x.liked, likes: x.likes + (x.liked ? -1 : 1) } : x) })) },
                    React.createElement(Icon, { name: "heart", size: 18 }),
                    " ",
                    p.likes,
                    " curtidas"),
                React.createElement("button", { onClick: () => this.setState({ showModal: 'comment:' + p.id }) },
                    React.createElement(Icon, { name: "message", size: 18 }),
                    " Responder (",
                    p.comments.length,
                    ")")),
            p.comments.length > 0 && React.createElement("div", { className: "post-comments" }, p.comments.map((c, i) => React.createElement("div", { key: i },
                React.createElement(Icon, { name: "message", size: 16 }),
                c)))))),
        React.createElement("div", { className: "soft-banner" },
            React.createElement(Icon, { name: "calendar" }),
            React.createElement("span", null, "Participe da nossa roda de conversa demonstrativa sobre inclus\u00E3o."))); }
    teacher() { return React.createElement(React.Fragment, null,
        this.header('Olá, educador(a)!', 'Acompanhe suas turmas e formações.'),
        React.createElement("div", { className: "teacher-hero" },
            React.createElement("h2", null, "Ensinar \u00E9 abrir caminhos."),
            React.createElement("p", null, "Crie atividades acess\u00EDveis e acompanhe sua comunidade de aprendizagem."),
            React.createElement("img", { src: "assets/mascote.png", alt: "Mascote Sinalis" })),
        React.createElement("div", { className: "metrics" },
            React.createElement("button", { className: "metric", onClick: () => this.go('students') },
                React.createElement(Icon, { name: "users" }),
                React.createElement("strong", null, "3"),
                React.createElement("small", null, "turmas ilustrativas")),
            React.createElement("button", { className: "metric", onClick: () => this.go('students') },
                React.createElement(Icon, { name: "chart" }),
                React.createElement("strong", null, "48"),
                React.createElement("small", null, "participantes fict\u00EDcios"))),
        this.section('Minhas turmas', 'Ver todas', () => this.go('students')),
        React.createElement("div", { className: "stack" },
            React.createElement(Tile, { icon: "graduation", title: "Comunica\u00E7\u00E3o inclusiva", description: "28 participantes \u2022 72% da turma", onClick: () => this.go('students'), end: true }),
            React.createElement(Tile, { icon: "graduation", title: "Libras no trabalho", description: "20 participantes \u2022 61% da turma", onClick: () => this.go('students'), end: true })),
        React.createElement(Button, { onClick: () => this.go('activity'), icon: "plus" }, "Criar atividade"),
        this.section('Atalhos para educadores'),
        React.createElement("div", { className: "quick-grid" },
            React.createElement(Tile, { icon: "users", title: "Alunos", onClick: () => this.go('students') }),
            React.createElement(Tile, { icon: "book", title: "Biblioteca", onClick: () => this.go('library') }),
            React.createElement(Tile, { icon: "message", title: "Comunidade", onClick: () => this.go('teacherCommunity') }),
            React.createElement(Tile, { icon: "file", title: "Atividades", onClick: () => this.go('activity') }))); }
    activity() { return React.createElement(React.Fragment, null,
        this.header('Criar atividade', 'Prepare um conteúdo acessível.', true),
        React.createElement("div", { className: "card form-card" },
            React.createElement("label", null,
                "T\u00EDtulo da atividade",
                React.createElement("input", { value: this.state.title, maxLength: 90, placeholder: "Ex.: Apresenta\u00E7\u00E3o profissional", onChange: e => this.setState({ title: e.target.value }) })),
            React.createElement("label", null,
                "Turma",
                React.createElement("select", { value: this.state.group, onChange: e => this.setState({ group: e.target.value }) },
                    React.createElement("option", null, "Comunica\u00E7\u00E3o inclusiva"),
                    React.createElement("option", null, "Libras no trabalho"),
                    React.createElement("option", null, "Atendimento inclusivo"))),
            React.createElement("label", null,
                "Instru\u00E7\u00F5es",
                React.createElement("textarea", { rows: 4, value: this.state.instructions, placeholder: "Explique o que o participante dever\u00E1 fazer...", onChange: e => this.setState({ instructions: e.target.value }) })),
            React.createElement("div", { className: "form-label" }, "Formato de resposta"),
            React.createElement(Tabs, { options: ['Texto', 'Vídeo', 'Áudio'], active: this.state.answerType, onClick: answerType => this.setState({ answerType }) }),
            React.createElement("div", { className: "notice" },
                React.createElement(Icon, { name: "eye" }),
                React.createElement("span", null, "Formatos de v\u00EDdeo e \u00E1udio aparecem como op\u00E7\u00F5es, mas o upload n\u00E3o est\u00E1 conectado nesta demo.")),
            React.createElement(Button, { kind: "outline", onClick: () => this.saveActivity(false) }, "Salvar rascunho"),
            React.createElement(Button, { onClick: () => this.saveActivity(true) }, "Publicar atividade na demo")),
        this.state.activities.length > 0 && React.createElement(React.Fragment, null,
            this.section('Atividades criadas'),
            React.createElement("div", { className: "stack" }, this.state.activities.map((a, i) => React.createElement(Tile, { key: i, icon: "file", title: a.title, description: `${a.group} · ${a.published ? 'Publicada' : 'Rascunho'} · ${a.answerType}`, onClick: () => this.setState({ showModal: 'activity:' + i }), end: true }))))); }
    students() { return React.createElement(React.Fragment, null,
        this.header('Acompanhar alunos', 'Turma: Comunicação inclusiva', true),
        React.createElement("div", { className: "metrics" },
            React.createElement("div", { className: "metric" },
                React.createElement(Icon, { name: "users" }),
                React.createElement("strong", null, "28"),
                React.createElement("small", null, "participantes fict\u00EDcios")),
            React.createElement("div", { className: "metric" },
                React.createElement(Icon, { name: "chart" }),
                React.createElement("strong", null, "72%"),
                React.createElement("small", null, "conclus\u00E3o ilustrativa"))),
        React.createElement("div", { className: "notice" },
            React.createElement(Icon, { name: "help" }),
            React.createElement("span", null, "Os nomes e indicadores abaixo s\u00E3o dados fict\u00EDcios para demonstra\u00E7\u00E3o. Novas atividades criadas s\u00E3o armazenadas apenas neste dispositivo.")),
        this.section('Participantes'),
        React.createElement("div", { className: "stack" }, [['Ana Souza', 80], ['Rafael Lima', 60], ['Marina Costa', 75], ['João Alves', 54]].map(([n, v]) => React.createElement("button", { key: n, className: "student-row", onClick: () => this.setState({ showModal: 'student:' + n }) },
            React.createElement("span", { className: "post-avatar" },
                React.createElement(Icon, { name: "user" })),
            React.createElement("span", null,
                React.createElement("strong", null, n),
                React.createElement(Progress, { value: v })),
            React.createElement("b", null,
                v,
                "%"),
            React.createElement(Icon, { name: "arrow", size: 17 })))),
        this.section('Atividades da turma'),
        React.createElement("div", { className: "stack" }, this.state.activities.length ? this.state.activities.map((a, i) => React.createElement(Tile, { key: i, icon: "file", title: a.title, description: a.group, onClick: () => this.setState({ showModal: 'activity:' + i }), end: true })) : React.createElement("p", { className: "muted" }, "Nenhuma atividade criada ainda. Experimente publicar uma atividade.")),
        React.createElement(Button, { onClick: () => this.go('activity') }, "Criar nova atividade")); }
    library() { const materials = [{ title: 'Plano de aula: apresentações', type: 'Planos', desc: 'Atividade sobre apresentações no trabalho.' }, { title: 'Comunicação inclusiva em equipe', type: 'Vídeos', desc: 'Orientações sobre comunicação acessível.' }, { title: 'Guia de atividades acessíveis', type: 'Guias', desc: 'Sugestões de formatos e adaptações.' }, { title: 'Checklist de reunião inclusiva', type: 'Guias', desc: 'Materiais de apoio para profissionais.' }]; return React.createElement(React.Fragment, null,
        this.header('Biblioteca pedagógica', 'Recursos para formações inclusivas.', true),
        React.createElement("div", { className: "search" },
            React.createElement(Icon, { name: "search" }),
            React.createElement("input", { placeholder: "Buscar material", value: this.state.query, onChange: e => this.setState({ query: e.target.value }) })),
        React.createElement(Tabs, { options: ['Todas', 'Planos', 'Vídeos', 'Guias'], active: this.state.filter, onClick: filter => this.setState({ filter }) }),
        React.createElement("div", { className: "stack spaced" }, materials.filter(x => (this.state.filter === 'Todas' || x.type === this.state.filter) && x.title.toLowerCase().includes(this.state.query.toLowerCase())).map(x => React.createElement("div", { className: "resource", key: x.title },
            React.createElement("span", { className: "resource-icon" },
                React.createElement(Icon, { name: "file", size: 25 })),
            React.createElement("div", null,
                React.createElement("strong", null, x.title),
                React.createElement("small", null, x.desc),
                React.createElement("span", null,
                    x.type,
                    " \u00B7 Material de exemplo")),
            React.createElement("button", { className: "icon-button", "aria-label": `Salvar ${x.title}`, onClick: () => this.toggleBookmark(x.title) },
                React.createElement(Icon, { name: this.state.bookmarks.includes(x.title) ? 'check' : 'bookmark' }))))),
        React.createElement("div", { className: "notice" },
            React.createElement(Icon, { name: "file" }),
            React.createElement("span", null, "Esta biblioteca cont\u00E9m t\u00EDtulos ilustrativos. Downloads de materiais completos estar\u00E3o dispon\u00EDveis futuramente."))); }
    profile() { return React.createElement(React.Fragment, null,
        this.header('Meu perfil', 'Sua experiência demonstrativa.', true),
        React.createElement("div", { className: "profile-card" },
            React.createElement("div", { className: "profile-avatar" },
                React.createElement(Icon, { name: "user", size: 33 })),
            React.createElement("div", null,
                React.createElement("h2", null, "Visitante Sinalis"),
                React.createElement("p", null,
                    this.state.role === 'educador' ? 'Educador(a)' : this.state.role === 'surdo' ? 'Pessoa surda' : 'Pessoa ouvinte',
                    " \u00B7 Modo demonstra\u00E7\u00E3o"))),
        React.createElement("div", { className: "stack" },
            React.createElement(Tile, { icon: "users", title: "Trocar de perfil", description: "Experimente outra jornada sem cadastro.", onClick: () => this.go('choose'), end: true }),
            React.createElement(Tile, { icon: "chart", title: "Meu progresso", description: `${this.state.completed.length} aulas concluídas`, onClick: () => this.go('progress'), end: true }),
            React.createElement(Tile, { icon: "bookmark", title: "Meus favoritos", description: `${this.state.bookmarks.length} conteúdos salvos`, onClick: () => this.setState({ showModal: 'favorites' }), end: true }),
            React.createElement(Tile, { icon: "bell", title: "Notifica\u00E7\u00F5es", onClick: () => this.go('notifications'), end: true }),
            React.createElement(Tile, { icon: "settings", title: "Prefer\u00EAncias de acessibilidade", onClick: () => this.go('settings'), end: true }),
            React.createElement(Tile, { icon: "headphones", title: "Ajuda e suporte", onClick: () => this.go('support'), end: true }),
            React.createElement(Tile, { icon: "shield", title: "Privacidade da demo", onClick: () => this.go('privacy'), end: true })),
        React.createElement(Button, { kind: "outline", icon: "logout", onClick: () => this.setState({ showModal: 'restart' }) }, "Reiniciar a demonstra\u00E7\u00E3o")); }
    settings() { return React.createElement(React.Fragment, null,
        this.header('Configurações', 'Personalize sua experiência acessível.', true),
        React.createElement("div", { className: "card settings-card" },
            React.createElement("h3", null, "Acessibilidade"),
            [['subtitles', 'Legendas de apoio', 'Exibir transcrição nas aulas'], ['fontLarge', 'Texto ampliado', 'Aumentar o tamanho das fontes'], ['highContrast', 'Alto contraste', 'Intensificar contraste de cores'], ['reducedMotion', 'Reduzir movimento', 'Evitar animações não essenciais']].map(([key, title, desc]) => React.createElement("label", { className: "toggle-row", key: key },
                React.createElement("span", null,
                    React.createElement("strong", null, title),
                    React.createElement("small", null, desc)),
                React.createElement("input", { type: "checkbox", checked: !!this.state[key], onChange: e => this.setState({ [key]: e.target.checked }) }),
                React.createElement("i", null)))),
        this.section('Conta e suporte'),
        React.createElement("div", { className: "stack" },
            React.createElement(Tile, { icon: "bell", title: "Notifica\u00E7\u00F5es", onClick: () => this.go('notifications'), end: true }),
            React.createElement(Tile, { icon: "help", title: "Ajuda e suporte", onClick: () => this.go('support'), end: true }),
            React.createElement(Tile, { icon: "shield", title: "Termos e privacidade", onClick: () => this.go('privacy'), end: true })),
        React.createElement(Button, { kind: "outline", onClick: () => this.flash('Suas preferências foram salvas neste navegador.') }, "Salvar prefer\u00EAncias")); }
    notifications() { return React.createElement(React.Fragment, null,
        this.header('Notificações', 'Novidades da sua jornada.', true),
        React.createElement(Tabs, { options: ['Todas', 'Não lidas'], active: this.state.filter, onClick: filter => this.setState({ filter }) }),
        this.state.notificationsRead && this.state.filter === 'Não lidas' ? React.createElement("div", { className: "empty-state" },
            React.createElement(Icon, { name: "bell", size: 34 }),
            React.createElement("p", null, "Voc\u00EA est\u00E1 em dia. Nenhuma notifica\u00E7\u00E3o pendente.")) : React.createElement("div", { className: "stack spaced" },
            React.createElement(Tile, { icon: "file", title: "Nova atividade dispon\u00EDvel", description: "Comece a pr\u00F3xima aula de comunica\u00E7\u00E3o inclusiva.", onClick: () => this.openTrack('work'), end: true }),
            React.createElement(Tile, { icon: "book", title: "Seu material foi atualizado", description: "Conhe\u00E7a recursos de aprendizagem.", onClick: () => this.go('library'), end: true }),
            React.createElement(Tile, { icon: "users", title: "Encontro da comunidade", description: "Confira as conversas da comunidade.", onClick: () => this.go('community'), end: true })),
        React.createElement(Button, { kind: "outline", onClick: () => { this.setState({ notificationsRead: true }); this.flash('Todas marcadas como lidas.'); } }, "Marcar todas como lidas")); }
    support() { const faqs = [['Como começar uma trilha?', 'Escolha Trilhas, abra um módulo e selecione uma aula. Faça a atividade para registrar a conclusão.'], ['Como ativar as legendas?', 'Acesse Perfil > Configurações e ative Legendas de apoio.'], ['Preciso criar uma conta?', 'Não. Esta demonstração não usa cadastro, senha nem dados pessoais.'], ['Meu progresso fica salvo?', 'Sim, no armazenamento local deste navegador, até que você limpe os dados ou reinicie a demo.']]; return React.createElement(React.Fragment, null,
        this.header('Como podemos ajudar?', 'Encontre orientações sobre a demonstração.', true),
        this.section('Dúvidas frequentes'),
        React.createElement("div", { className: "stack" }, faqs.map(([q, a], i) => React.createElement("div", { className: "faq", key: q },
            React.createElement("button", { onClick: () => this.setState({ faq: this.state.faq === i ? -1 : i }) },
                q,
                React.createElement(Icon, { name: this.state.faq === i ? 'close' : 'plus', size: 18 })),
            this.state.faq === i && React.createElement("p", null, a)))),
        this.section('Enviar uma sugestão'),
        React.createElement("div", { className: "card form-card" },
            React.createElement("p", { className: "muted" }, "Conte o que melhoraria esta experi\u00EAncia."),
            React.createElement("textarea", { rows: 4, placeholder: "Escreva sua sugest\u00E3o", value: this.state.supportMessage, onChange: e => this.setState({ supportMessage: e.target.value }) }),
            React.createElement(Button, { onClick: () => { if (!this.state.supportMessage.trim())
                    return this.flash('Escreva sua sugestão primeiro.'); this.setState({ supportSent: true, supportMessage: '' }); this.flash('Sugestão registrada localmente nesta demo.'); } }, "Registrar sugest\u00E3o"),
            this.state.supportSent && React.createElement("p", { className: "success-note" }, "Obrigado! Sua sugest\u00E3o foi registrada localmente (n\u00E3o foi enviada a servidores)."))); }
    privacy() { return React.createElement(React.Fragment, null,
        this.header('Privacidade da demonstração', 'Informações claras sobre esta experiência.', true),
        React.createElement("div", { className: "card privacy-card" },
            React.createElement(Icon, { name: "shield", size: 36 }),
            React.createElement("h2", null, "Voc\u00EA controla esta demonstra\u00E7\u00E3o."),
            React.createElement("p", null, "O Sinalis V2 apresentado aqui \u00E9 um prot\u00F3tipo funcional sem autentica\u00E7\u00E3o ou backend. Suas escolhas de perfil, progresso, mensagens e atividades s\u00E3o armazenadas somente no navegador usando localStorage."),
            React.createElement("p", null, "N\u00E3o s\u00E3o enviadas mensagens, cadastros, arquivos ou solicita\u00E7\u00F5es a servidores. Os participantes e indicadores de turma s\u00E3o ilustrativos."),
            React.createElement("p", null, "O conte\u00FAdo educacional \u00E9 demonstrativo e v\u00EDdeos de Libras precisam de revis\u00E3o e produ\u00E7\u00E3o especializada antes de utiliza\u00E7\u00E3o pedag\u00F3gica real.")),
        React.createElement(Button, { kind: "outline", onClick: () => this.setState({ showModal: 'clear' }) }, "Limpar meus dados da demonstra\u00E7\u00E3o")); }
    modal() {
        const m = this.state.showModal;
        if (!m)
            return null;
        let title = 'Informação', body = null, action = null;
        if (m.startsWith('comment:')) {
            const id = Number(m.split(':')[1]);
            const post = this.state.posts.find(x => x.id === id);
            title = 'Responder à publicação';
            body = React.createElement(React.Fragment, null,
                React.createElement("p", { className: "muted" }, post === null || post === void 0 ? void 0 : post.body),
                React.createElement("textarea", { value: this.state.commentsDraft[String(id)] || '', placeholder: "Escreva sua resposta", rows: 3, onChange: e => this.setState(s => ({ commentsDraft: { ...s.commentsDraft, [id]: e.target.value } })) }));
            action = React.createElement(Button, { onClick: () => { const msg = (this.state.commentsDraft[String(id)] || '').trim(); if (!msg)
                    return; this.setState(s => ({ posts: s.posts.map(x => x.id === id ? { ...x, comments: [...x.comments, msg] } : x), commentsDraft: { ...s.commentsDraft, [id]: '' }, showModal: '' })); this.flash('Resposta adicionada à conversa da demo.'); } }, "Responder");
        }
        else if (m.startsWith('student:')) {
            title = 'Acompanhamento ilustrativo';
            body = React.createElement("p", null,
                "Os dados de ",
                m.split(':')[1],
                " s\u00E3o fict\u00EDcios e servem apenas para demonstrar a interface do educador.");
        }
        else if (m.startsWith('activity:')) {
            const a = this.state.activities[Number(m.split(':')[1])];
            title = (a === null || a === void 0 ? void 0 : a.title) || 'Atividade';
            body = React.createElement(React.Fragment, null,
                React.createElement("p", null, a === null || a === void 0 ? void 0 : a.instructions),
                React.createElement("p", { className: "muted" },
                    "Turma: ", a === null || a === void 0 ? void 0 :
                    a.group,
                    " \u00B7 Resposta: ", a === null || a === void 0 ? void 0 :
                    a.answerType,
                    " \u00B7 ",
                    (a === null || a === void 0 ? void 0 : a.published) ? 'Publicada' : 'Rascunho',
                    " na demo"));
        }
        else if (m === 'favorites') {
            title = 'Meus favoritos';
            body = this.state.bookmarks.length ? React.createElement("div", { className: "stack" }, this.state.bookmarks.map(x => React.createElement(Tile, { key: x, icon: "bookmark", title: x, onClick: () => this.toggleBookmark(x) }))) : React.createElement("p", null, "Voc\u00EA ainda n\u00E3o salvou nenhum conte\u00FAdo. Explore o vocabul\u00E1rio e a biblioteca.");
        }
        else if (m === 'restart' || m === 'clear') {
            title = 'Reiniciar demonstração?';
            body = React.createElement("p", null, "Isso apagar\u00E1 o progresso, mensagens, atividades e prefer\u00EAncias salvos neste navegador.");
            action = React.createElement(Button, { onClick: () => { localStorage.removeItem(STORE); this.setState({ ...initial }); history.pushState({}, '', '#welcome'); window.scrollTo(0, 0); } }, "Apagar dados e reiniciar");
        }
        return React.createElement("div", { className: "modal-backdrop", onMouseDown: e => { if (e.target === e.currentTarget)
                this.setState({ showModal: '' }); } },
            React.createElement("div", { className: "modal", role: "dialog", "aria-modal": "true", "aria-label": title },
                React.createElement("div", { className: "modal-head" },
                    React.createElement("h2", null, title),
                    React.createElement("button", { className: "icon-button", "aria-label": "Fechar", onClick: () => this.setState({ showModal: '' }) },
                        React.createElement(Icon, { name: "close" }))),
                body,
                action || React.createElement(Button, { kind: "outline", onClick: () => this.setState({ showModal: '' }) }, "Fechar")));
    }
    renderPage() { switch (this.state.page) {
        case 'welcome': return this.welcome();
        case 'choose': return this.choose();
        case 'home': return this.home();
        case 'tracks': return this.tracks();
        case 'track': return this.track();
        case 'lesson': return this.lesson();
        case 'practice': return this.practice();
        case 'vocabulary': return this.vocabulary();
        case 'progress': return this.progressPage();
        case 'chat': return this.chat();
        case 'career': return this.career();
        case 'training': return this.training();
        case 'reading': return this.reading();
        case 'article': return this.article();
        case 'learn': return this.learn();
        case 'inclusion': return this.inclusion();
        case 'community': return this.community();
        case 'teacher': return this.teacher();
        case 'activity': return this.activity();
        case 'students': return this.students();
        case 'library': return this.library();
        case 'teacherCommunity': return this.community(true);
        case 'profile': return this.profile();
        case 'settings': return this.settings();
        case 'notifications': return this.notifications();
        case 'support': return this.support();
        case 'privacy': return this.privacy();
        default: return this.welcome();
    } }
    render() {
        const onboard = this.state.page === 'welcome' || this.state.page === 'choose';
        const role = this.state.role;
        return React.createElement("div", { className: 'app-layout ' + (onboard ? 'onboarding' : '') },
            !onboard && React.createElement("aside", { className: "sidebar" },
                React.createElement(Brand, null),
                React.createElement("span", { className: "sidebar-caption" }, "AMBIENTE DE DEMONSTRA\u00C7\u00C3O"),
                React.createElement("nav", { "aria-label": "Navega\u00E7\u00E3o principal" },
                    this.navItems().map(n => React.createElement("button", { className: n.page === this.state.page ? 'active' : '', key: n.page, onClick: () => this.go(n.page) },
                        React.createElement(Icon, { name: n.icon }),
                        n.label)),
                    React.createElement("button", { onClick: () => this.go(role === 'educador' ? 'activity' : 'vocabulary') },
                        React.createElement(Icon, { name: role === 'educador' ? 'plus' : 'search' }),
                        role === 'educador' ? 'Criar atividade' : 'Vocabulário')),
                React.createElement("div", { className: "sidebar-bottom" },
                    React.createElement("button", { onClick: () => this.go('settings') },
                        React.createElement(Icon, { name: "settings" }),
                        " Prefer\u00EAncias"),
                    React.createElement("button", { onClick: () => this.go('choose') },
                        React.createElement(Icon, { name: "users" }),
                        " Trocar de perfil")),
                React.createElement("span", { className: "sidebar-foot" }, "Sinalis \u2022 Demo interativa")),
            React.createElement("main", { className: "main-content" },
                React.createElement("div", { className: 'app-surface ' + (onboard ? 'app-surface-onboard' : '') }, this.renderPage()),
                !onboard && React.createElement("nav", { className: "bottom-nav", "aria-label": "Navega\u00E7\u00E3o inferior" }, this.navItems().map(n => React.createElement("button", { key: n.page, className: n.page === this.state.page ? 'active' : '', "aria-label": n.label, onClick: () => this.go(n.page) },
                    React.createElement(Icon, { name: n.icon, size: 22 }),
                    React.createElement("span", null, n.label))))),
            !onboard && React.createElement("div", { className: "desktop-aside" },
                React.createElement("div", { className: "tip-panel" },
                    React.createElement("span", { className: "demo-tag" }, "MODO DEMO"),
                    React.createElement("img", { src: "assets/mascote.png", alt: "Mascote Sinalis" }),
                    React.createElement("h3", null, "Aprender \u00E9 construir pontes."),
                    React.createElement("p", null, "Explore os recursos do Sinalis sem login nem senha. Cada a\u00E7\u00E3o funciona como uma demonstra\u00E7\u00E3o local."),
                    React.createElement(Button, { kind: "outline", onClick: () => this.go('choose') }, "Trocar jornada")),
                React.createElement("button", { className: "aside-privacy", onClick: () => this.go('privacy') },
                    React.createElement(Icon, { name: "shield", size: 18 }),
                    " Seus dados ficam no navegador")),
            this.state.toast && React.createElement("div", { className: "toast-message", role: "status" },
                React.createElement(Icon, { name: "check", size: 18 }),
                this.state.toast),
            this.modal());
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
