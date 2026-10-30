import { useState } from "react";
import { useSinalis } from "./context";
import { initialState, roleLabel, STORAGE_KEY } from "./model";
import { articles, notices, words } from "./data";
import {
  Button,
  Brand,
  Empty,
  Icon,
  media,
  Mascot,
  Note,
  Row,
  SearchBox,
  Section,
  Tabs,
  Title,
  Toggle,
} from "./ui";
import type { IconName } from "./ui";
import type { Page, Preferences, Role } from "./model";
export function WelcomeScreen() {
  const { go } = useSinalis();
  return (
    <div className="welcome">
      <div className="welcome-copy">
        <Brand mascot onClick={() => go("welcome")} />
        <span className="eyebrow welcome-eyebrow">
          LIBRAS · APRENDIZAGEM · CONEXÕES
        </span>
        <h1>
          Comunicação
          <br />
          que aproxima<span>.</span>
        </h1>
        <p>
          Aprenda, compartilhe e cresça.
          <br />
          Novos caminhos para você e sua equipe.
        </p>
        <div className="welcome-mobile-photo">
          <img
            src={media("people.webp")}
            alt="Adultos se conectando no ambiente profissional"
          />
          <span>
            <Icon name="hand" size={25} />
            Diferentes formas de se conectar.
          </span>
        </div>
        <Button onClick={() => go("choose")}>
          Começar minha jornada
          <Icon name="arrow" size={18} />
        </Button>
        <div className="welcome-access">
          <button onClick={() => go("signup")}>Criar perfil</button>
          <span>
            Já conhece o Sinalis?{" "}
            <button onClick={() => go("login")}>Entrar</button>
          </span>
        </div>
        <button
          className="text-button welcome-company"
          onClick={() => go("choose", "empresa")}
        >
          <Icon name="building" size={17} />
          Tenho um convite da empresa
        </button>
        <small className="welcome-footnote">
          Um protótipo para explorar. Comece sem cadastro.
        </small>
      </div>
      <div className="welcome-visual">
        <img
          src={media("people.webp")}
          alt="Pessoas em uma conversa no trabalho"
        />
        <div className="welcome-visual-overlay">
          <span className="eyebrow">CONHECIMENTO QUE TRANSFORMA</span>
          <h2>
            O próximo passo
            <br />
            começa com uma conexão.
          </h2>
          <span className="visual-pill">
            <Icon name="sparkles" size={17} />
            No seu ritmo. Do seu jeito.
          </span>
        </div>
        <span className="welcome-corner" />
      </div>
    </div>
  );
}
export function AccessScreen({ signup = false }: { signup?: boolean }) {
  const { state, setState, go } = useSinalis();
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="access-page">
      <div className="access-panel">
        <Brand mascot={!signup} onClick={() => go("welcome")} />
        <div className="corner-art" />
        <Title
          eyebrow={signup ? "NOVAS POSSIBILIDADES" : "BOM TER VOCÊ POR AQUI"}
          title={
            signup ? "Seu próximo passo começa aqui." : "Acesse sua jornada."
          }
          subtitle={
            signup
              ? "Crie um perfil para personalizar esta experiência."
              : "Continue aprendendo e construindo conexões."
          }
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setState((s) => ({ ...s, name: name.trim(), email: email.trim() }));
            go("choose");
          }}
        >
          {signup && (
            <label>
              Seu nome
              <input
                autoComplete="name"
                required
                maxLength={80}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos chamar você?"
              />
            </label>
          )}
          <label>
            E-mail
            <input
              type="email"
              autoComplete="email"
              required
              maxLength={150}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@exemplo.com"
            />
          </label>
          {signup && (
            <label className="checkbox-label">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>
                Li as{" "}
                <button
                  type="button"
                  className="inline-link"
                  onClick={() => go("privacy")}
                >
                  informações de uso e privacidade
                </button>
                .
              </span>
            </label>
          )}
          <Button type="submit" disabled={signup && (!name.trim() || !agreed)}>
            {signup ? "Criar perfil de demonstração" : "Entrar na demonstração"}
            <Icon name="arrow" size={17} />
          </Button>
        </form>
        <div className="or-divider">
          <span>ou</span>
        </div>
        <Button variant="outline" onClick={() => go("choose")}>
          Explorar sem cadastro
        </Button>
        <p className="access-switch">
          {signup ? "Já conhece o Sinalis?" : "Primeira vez aqui?"}{" "}
          <button
            className="inline-link"
            onClick={() => go(signup ? "login" : "signup")}
          >
            {signup ? "Entrar" : "Criar perfil"}
          </button>
        </p>
        <Note icon="shield">
          Esta experiência não exige senha. O perfil é salvo somente neste
          navegador e não cria uma conta online.
        </Note>
      </div>
    </div>
  );
}
export function ChooseScreen() {
  const { state, setState, route, go } = useSinalis();
  const [selected, setSelected] = useState<Role | null>(state.role);
  const [company, setCompany] = useState(state.company);
  const [showCompany, setShowCompany] = useState(
    route.id === "empresa" || !!state.company,
  );
  const roles: {
    id: Role;
    title: string;
    description: string;
    badge: string;
  }[] = [
    {
      id: "surdo",
      title: "Adulto surdo",
      description: "Aprendizagem, autonomia e desenvolvimento profissional.",
      badge: "SEU PRÓXIMO PASSO",
    },
    {
      id: "ouvinte",
      title: "Ouvinte",
      description: "Aprenda Libras e participe de um mundo mais inclusivo.",
      badge: "NOVAS CONEXÕES",
    },
    {
      id: "professor",
      title: "Professor",
      description:
        "Turmas, atividades e recursos para ensinar com acessibilidade.",
      badge: "CONHECIMENTO QUE CRESCE",
    },
  ];
  return (
    <div className="choose-page">
      <Brand onClick={() => go("welcome")} />
      <Title
        eyebrow="UMA JORNADA QUE COMBINA COM VOCÊ"
        title="Como você vai aprender?"
        subtitle="Escolha o perfil que melhor representa seu momento."
      />
      <div className="role-grid">
        {roles.map((r) => (
          <button
            className={`role-card role-${r.id} ${selected === r.id ? "selected" : ""}`}
            key={r.id}
            aria-pressed={selected === r.id}
            onClick={() => setSelected(r.id)}
          >
            <span className="role-radio">
              {selected === r.id && <Icon name="check" size={16} />}
            </span>
            <Mascot role={r.id} />
            <span className="eyebrow">{r.badge}</span>
            <h2>{r.title}</h2>
            <p>{r.description}</p>
            <span className="role-action">
              Este é meu perfil
              <Icon name="arrow" size={18} />
            </span>
          </button>
        ))}
      </div>
      <div className="choose-bottom">
        <div>
          <button
            className="text-button"
            onClick={() => setShowCompany(!showCompany)}
            aria-expanded={showCompany}
          >
            <Icon name="building" size={18} />
            Vincular à empresa (opcional)
            <Icon name="down" size={16} />
          </button>
          {showCompany && (
            <label className="company-field">
              Nome ou código da empresa
              <input
                value={company}
                maxLength={80}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Informe o convite da sua empresa"
              />
              <small>
                Vínculo ilustrativo. Nenhuma organização é contatada.
              </small>
            </label>
          )}
        </div>
        <Button
          disabled={!selected}
          onClick={() => {
            if (selected) {
              setState((s) => ({
                ...s,
                role: selected,
                company: company.trim(),
              }));
              go(selected === "professor" ? "teacher" : "home");
            }
          }}
        >
          Continuar
          <Icon name="arrow" size={18} />
        </Button>
      </div>
      <p className="choose-note">
        Você pode trocar de perfil a qualquer momento.
      </p>
    </div>
  );
}
export function ProfileScreen() {
  const { state, setState, go, dialog, toast } = useSinalis();
  const [tab, setTab] = useState("Perfil");
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(state.name);
  const [email, setEmail] = useState(state.email);
  const [company, setCompany] = useState(state.company);
  const nav: [IconName, string, Page, string?][] = [
    [
      "building",
      "Minha empresa",
      "training",
      state.company || "Conheça as formações profissionais",
    ],
    ["settings", "Preferências de acessibilidade", "settings"],
    ["chart", "Meu progresso e conquistas", "progress"],
    ["bell", "Notificações", "notifications"],
    ["shield", "Segurança da conta", "security"],
    ["help", "Ajuda e suporte", "support"],
    ["file", "Termos e privacidade", "privacy"],
  ];
  return (
    <>
      <Title
        eyebrow="SUA JORNADA, SEU ESPAÇO"
        title="Meu perfil"
        subtitle="Cuide das suas preferências e continue de onde parou."
      />
      <div className="profile-banner">
        <span className="profile-avatar">
          {(state.name || "V")[0].toUpperCase()}
        </span>
        <div>
          <h2>{state.name || "Visitante"}</h2>
          <p>
            {roleLabel[state.role || "surdo"]}{" "}
            {state.company ? `· ${state.company}` : ""}
          </p>
        </div>
        <button
          className="icon-button"
          aria-label="Editar dados pessoais"
          onClick={() => setEditing(!editing)}
        >
          <Icon name="pencil" />
        </button>
      </div>
      <Tabs options={["Perfil", "Favoritos"]} value={tab} onChange={setTab} />
      {tab === "Favoritos" ? (
        <>
          <Section title="Conteúdos salvos" />
          {articles
            .filter((a) => state.favorites.includes(a.id))
            .map((a) => (
              <Row
                key={a.id}
                icon="book"
                title={a.title}
                detail="Leitura salva"
                onClick={() => go("article", a.id)}
              />
            ))}
          {words
            .filter((w) => state.favorites.includes(w.word))
            .map((w) => (
              <Row
                key={w.word}
                icon="languages"
                title={w.word}
                detail="Palavra do glossário"
                onClick={() => go("vocabulary")}
              />
            ))}
          {state.favorites
            .filter((f) => ["plano", "guia", "roteiro"].includes(f))
            .map((f) => (
              <Row
                key={f}
                icon="file"
                title={
                  f === "plano"
                    ? "Plano de aula: apresentações"
                    : f === "guia"
                      ? "Guia de atividades acessíveis"
                      : "Comunicação inclusiva em equipe"
                }
                detail="Material pedagógico salvo"
                onClick={() => go("library")}
              />
            ))}
          {!state.favorites.length && (
            <Empty
              title="Guarde o que inspira você"
              text="Salve palavras, leituras e materiais para encontrar tudo aqui."
            />
          )}
          <Row
            icon="users"
            title="Publicações salvas"
            onClick={() =>
              go(state.role === "professor" ? "teacher-community" : "community")
            }
          />
        </>
      ) : (
        <>
          <Row
            icon="user"
            title="Dados pessoais"
            detail="Como você aparece nesta experiência"
            onClick={() => setEditing(!editing)}
          />
          {editing && (
            <form
              className="card profile-form"
              onSubmit={(e) => {
                e.preventDefault();
                setState((s) => ({
                  ...s,
                  name: name.trim(),
                  email: email.trim(),
                  company: company.trim(),
                }));
                setEditing(false);
                toast("Seus dados foram atualizados.");
              }}
            >
              <label>
                Nome
                <input
                  maxLength={80}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos chamar você?"
                />
              </label>
              <label>
                E-mail
                <input
                  type="email"
                  value={email}
                  maxLength={150}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Empresa
                <input
                  value={company}
                  maxLength={80}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>
              <Button type="submit">Salvar dados</Button>
            </form>
          )}
          <div className="discovery-grid">
            {nav.map(([icon, title, page, detail]) => (
              <Row
                key={page}
                icon={icon}
                title={title}
                detail={detail}
                onClick={() => go(page)}
              />
            ))}
          </div>
          <Row
            icon="users"
            title="Trocar perfil"
            detail={`Perfil atual: ${roleLabel[state.role || "surdo"]}`}
            onClick={() => go("choose")}
          />
          <button
            className="logout-link"
            onClick={() =>
              dialog({
                title: "Sair da sua conta?",
                text: "Seu progresso continuará salvo neste navegador. Você pode retomar a jornada quando quiser.",
                confirm: "Sair da experiência",
                action: () => {
                  setState((s) => ({ ...s, role: null }));
                  go("welcome");
                },
              })
            }
          >
            <Icon name="logout" size={18} />
            Sair da experiência
          </button>
        </>
      )}
    </>
  );
}
export function SettingsScreen() {
  const { state, setState, go, toast } = useSinalis();
  const toggle = (key: keyof Preferences) =>
    setState((s) => ({
      ...s,
      preferences: { ...s.preferences, [key]: !s.preferences[key] },
    }));
  return (
    <>
      <Title
        eyebrow="DO JEITO QUE FUNCIONA PARA VOCÊ"
        title="Configurações"
        subtitle="Personalize sua experiência de aprendizagem."
      />
      <div className="settings-layout">
        <div>
          <Section title="Acessibilidade" />
          <div className="card settings-card">
            <Toggle
              title="Texto de apoio nas aulas"
              detail="Exibir as orientações em texto por padrão"
              value={state.preferences.captions}
              onChange={() => toggle("captions")}
            />
            <Toggle
              title="Texto ampliado"
              detail="Aumentar o tamanho da leitura"
              value={state.preferences.largeText}
              onChange={() => toggle("largeText")}
            />
            <Toggle
              title="Contraste reforçado"
              detail="Aumentar o contraste de textos e controles"
              value={state.preferences.contrast}
              onChange={() => toggle("contrast")}
            />
            <Toggle
              title="Reduzir movimento"
              detail="Diminuir animações e transições"
              value={state.preferences.reducedMotion}
              onChange={() => toggle("reducedMotion")}
            />
          </div>
          <Section title="Preferências" />
          <div className="card settings-card">
            <Toggle
              title="Avisos da jornada"
              detail="Exibir lembretes e novidades nesta experiência"
              value={state.preferences.notifications}
              onChange={() => toggle("notifications")}
            />
          </div>
          <Button onClick={() => toast("Suas preferências já estão salvas.")}>
            Salvar preferências
            <Icon name="check" size={18} />
          </Button>
        </div>
        <aside>
          <Row
            icon="users"
            title="Trocar perfil de aprendizagem"
            onClick={() => go("choose")}
          />
          <Row
            icon="shield"
            title="Segurança e dados"
            onClick={() => go("security")}
          />
          <Row
            icon="file"
            title="Termos e privacidade"
            onClick={() => go("privacy")}
          />
          <Row
            icon="help"
            title="Ajuda e suporte"
            onClick={() => go("support")}
          />
          <Note icon="eye">
            As preferências de acessibilidade são aplicadas assim que você as
            altera.
          </Note>
        </aside>
      </div>
    </>
  );
}
export function SupportScreen() {
  const { toast } = useSinalis();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(-1);
  const [form, setForm] = useState(false);
  const [subject, setSubject] = useState("Dúvida sobre a plataforma");
  const [text, setText] = useState("");
  const [ticket, setTicket] = useState("");
  const faqs = [
    [
      "Como acessar minha turma?",
      "Escolha o perfil Professor e abra uma das turmas na área inicial. Os demais perfis podem acessar as trilhas pela opção Sua formação. As turmas deste protótipo usam dados de exemplo.",
    ],
    [
      "Como ativar o texto de apoio?",
      "Abra Meu perfil → Preferências de acessibilidade e ative Texto de apoio nas aulas. Você também pode abrir o texto diretamente em cada aula.",
    ],
    [
      "Como continuar minha trilha?",
      "Entre em Trilhas e escolha uma formação. A etapa atual aparece em destaque. Concluir o exercício corretamente libera a próxima aula.",
    ],
    [
      "Onde meu progresso fica salvo?",
      "Seu progresso fica salvo neste navegador. Ele não é sincronizado com outros dispositivos. Você pode apagar os dados pela tela Segurança.",
    ],
  ];
  return (
    <>
      <Title
        eyebrow="ESTAMOS POR AQUI"
        title="Como podemos ajudar?"
        subtitle="Encontre orientações para continuar sua jornada."
      />
      <SearchBox
        value={query}
        onChange={setQuery}
        placeholder="Buscar uma dúvida"
      />
      <Section title="Dúvidas frequentes" />
      <div className="faq-list">
        {faqs.map(
          ([q, a], i) =>
            (q + " " + a).toLowerCase().includes(query.toLowerCase()) && (
              <div className="faq" key={q}>
                <button
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <Icon name="help" size={19} />
                  <strong>{q}</strong>
                  <Icon name="down" size={18} />
                </button>
                {open === i && <p>{a}</p>}
              </div>
            ),
        )}
      </div>
      {!faqs.some(([q, a]) =>
        (q + " " + a).toLowerCase().includes(query.toLowerCase()),
      ) && (
        <Empty
          title="Não encontramos essa dúvida"
          text="Tente outras palavras ou prepare uma solicitação abaixo."
        />
      )}
      <div className="support-card">
        <span className="round-icon">
          <Icon name="message" size={27} />
        </span>
        <h2>Apoio para seguir em frente.</h2>
        <p>
          Registre uma solicitação de exemplo e veja como funciona o
          atendimento.
        </p>
        <Button onClick={() => setForm(!form)}>
          Preparar solicitação
          <Icon name="arrow" size={17} />
        </Button>
      </div>
      {form && (
        <form
          className="card support-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!text.trim()) return;
            const id = String(Date.now()).slice(-6);
            try {
              localStorage.setItem(
                "sinalis.support",
                JSON.stringify({ id, subject, text: text.trim() }),
              );
              setTicket(id);
              setText("");
              setForm(false);
              toast("Solicitação salva na demonstração.");
            } catch {
              toast("Não foi possível salvar neste navegador.");
            }
          }}
        >
          <label>
            Assunto
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option>Dúvida sobre a plataforma</option>
              <option>Acessibilidade</option>
              <option>Conteúdo e aprendizagem</option>
              <option>Outra solicitação</option>
            </select>
          </label>
          <label>
            Como podemos ajudar?
            <textarea
              required
              minLength={10}
              maxLength={2000}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Descreva sua dúvida…"
            />
          </label>
          <Note icon="mail">
            Esta solicitação será salva localmente como exemplo. Nenhuma
            mensagem será enviada a uma equipe de atendimento.
          </Note>
          <Button type="submit">Salvar solicitação de exemplo</Button>
        </form>
      )}
      {ticket && (
        <Note icon="check">
          <strong>Solicitação #{ticket} registrada na demonstração.</strong>
          <p>Você pode continuar explorando a plataforma.</p>
        </Note>
      )}
    </>
  );
}
export function NotificationsScreen() {
  const { state, setState, go } = useSinalis();
  const [tab, setTab] = useState("Todas");
  const filtered = notices.filter(
    (n) => tab === "Todas" || !state.readNotifications.includes(n.id),
  );
  return (
    <>
      <Title
        eyebrow="ACOMPANHE SUA JORNADA"
        title="Notificações"
        subtitle="Novidades e lembretes para seguir aprendendo."
      />
      <Tabs options={["Todas", "Não lidas"]} value={tab} onChange={setTab} />
      {!state.preferences.notifications && (
        <Note icon="bell">
          Os avisos da jornada estão desativados nas suas preferências. O
          histórico continua disponível abaixo.
        </Note>
      )}
      <div className="stack">
        {filtered.map((n) => (
          <button
            key={n.id}
            className={`notification-card ${state.readNotifications.includes(n.id) ? "is-read" : ""}`}
            onClick={() => {
              setState((s) => ({
                ...s,
                readNotifications: [...new Set([...s.readNotifications, n.id])],
              }));
              go(n.page);
            }}
          >
            <span className="round-icon">
              <Icon name={n.icon as IconName} />
            </span>
            <span>
              <strong>{n.title}</strong>
              <p>{n.text}</p>
              <small>Conteúdo de demonstração</small>
            </span>
            {!state.readNotifications.includes(n.id) && (
              <i className="unread-dot" />
            )}
            <Icon name="chevron" size={18} />
          </button>
        ))}
      </div>
      {!filtered.length && (
        <Empty
          title="Tudo em dia"
          text="Você já conferiu todos os avisos da jornada."
        />
      )}
      <button
        className="text-button"
        onClick={() =>
          setState((s) => ({
            ...s,
            readNotifications: notices.map((n) => n.id),
          }))
        }
      >
        <Icon name="read" size={18} />
        Marcar todas como lidas
      </button>
      <Row
        icon="settings"
        title="Preferências de notificação"
        onClick={() => go("settings")}
      />
    </>
  );
}
export function SecurityScreen() {
  const { setState, go, dialog, toast } = useSinalis();
  return (
    <>
      <Title
        eyebrow="TRANQUILIDADE PARA APRENDER"
        title="Segurança e dados"
        subtitle="Entenda e gerencie as informações desta experiência."
      />
      <div className="editorial-banner compact-banner">
        <Icon name="shield" size={45} />
        <div>
          <h2>Seus dados, suas escolhas.</h2>
          <p>O controle das informações começa com a transparência.</p>
        </div>
      </div>
      <div className="stack">
        <Row
          icon="lock"
          title="Acesso à demonstração"
          detail="Sem senha ou autenticação online"
          onClick={() =>
            dialog({
              title: "Uma experiência sem senha",
              text: "Este protótipo não cria contas online nem armazena senhas. O perfil de demonstração e o progresso ficam neste navegador.",
            })
          }
        />
        <Row
          icon="user"
          title="Revisar meus dados"
          detail="Nome, e-mail e empresa do perfil local"
          onClick={() => go("profile")}
        />
        <Row
          icon="download"
          title="Exportar meus dados"
          detail="Baixar os dados salvos por esta demonstração"
          onClick={() => {
            const keys = [STORAGE_KEY, "sinalis.feedback", "sinalis.support"];
            const data = Object.fromEntries(
              keys.map((k) => [k, localStorage.getItem(k)]),
            );
            const url = URL.createObjectURL(
              new Blob([JSON.stringify(data, null, 2)], {
                type: "application/json",
              }),
            );
            const a = document.createElement("a");
            a.href = url;
            a.download = "sinalis-meus-dados.json";
            a.click();
            URL.revokeObjectURL(url);
            toast("Exportação preparada.");
          }}
        />
        <Row
          icon="file"
          title="Informações de privacidade"
          onClick={() => go("privacy")}
        />
      </div>
      <Note icon="shield">
        <strong>Uma dica para dispositivos compartilhados.</strong>
        <p>Ao terminar, revise o que deseja manter salvo neste navegador.</p>
      </Note>
      <Button
        variant="outline"
        onClick={() =>
          dialog({
            title: "Apagar os dados da demonstração?",
            text: "Isso remove o perfil, o progresso, as atividades, as publicações e as preferências salvas por este protótipo neste navegador.",
            confirm: "Apagar meus dados",
            action: () => {
              for (const key of [
                STORAGE_KEY,
                "sinalis.feedback",
                "sinalis.support",
              ])
                localStorage.removeItem(key);
              setState(structuredClone(initialState));
              go("welcome");
              toast("Os dados da demonstração foram apagados.");
            },
          })
        }
      >
        Apagar dados da demonstração
      </Button>
    </>
  );
}
export function PrivacyScreen() {
  const [tab, setTab] = useState("Privacidade");
  return (
    <>
      <Title
        eyebrow="CLAREZA EM CADA CONEXÃO"
        title="Termos e privacidade"
        subtitle="Informações sobre esta versão de demonstração."
      />
      <Tabs
        options={["Privacidade", "Uso da demonstração"]}
        value={tab}
        onChange={setTab}
      />
      <article className="privacy-copy card">
        {tab === "Privacidade" ? (
          <>
            <h2>Informações no seu dispositivo</h2>
            <p>
              O perfil, o progresso de aprendizagem, os favoritos, as atividades
              e as contribuições que você cria nesta experiência são salvos no
              armazenamento local deste navegador.
            </p>
            <h2>O que esta versão coleta</h2>
            <p>
              O nome, o e-mail e a empresa são opcionais para explorar a
              demonstração. Não há senha, verificação de identidade ou envio
              dessas informações a uma conta online.
            </p>
            <h2>Imagens e serviços de hospedagem</h2>
            <p>
              As imagens ilustram o protótipo. O aplicativo carrega seus
              próprios arquivos de fonte e imagens. O provedor de hospedagem
              pode processar os dados técnicos necessários para entregar a
              página.
            </p>
            <h2>Como gerenciar suas informações</h2>
            <p>
              Você pode revisar o perfil, exportar ou apagar os dados pela tela
              Segurança e dados. Limpar o armazenamento do navegador também
              remove as informações desta experiência.
            </p>
          </>
        ) : (
          <>
            <h2>Uma experiência para explorar</h2>
            <p>
              O Sinalis apresenta um protótipo de educação inclusiva para
              adultos, organizações e professores. Você pode navegar entre os
              perfis e testar as interações disponíveis.
            </p>
            <h2>Conteúdos de demonstração</h2>
            <p>
              Os participantes, as turmas, os eventos e os indicadores são
              exemplos. Publicações, mensagens e atividades criadas não são
              enviadas a outras pessoas.
            </p>
            <h2>Aprendizagem e conquistas</h2>
            <p>
              As aulas apresentam conteúdos introdutórios. O protótipo não
              substitui formação de Libras com profissionais qualificados. Os
              registros de conclusão não têm validade de certificação.
            </p>
            <h2>Próximas versões</h2>
            <p>
              Autenticação, vídeos de sinais validados, comunicação entre
              pessoas e integração com organizações dependem de uma versão
              conectada a serviços próprios.
            </p>
          </>
        )}
      </article>
    </>
  );
}
