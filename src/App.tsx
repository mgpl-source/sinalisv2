import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { SinalisContext } from "./context";
import type { Dialog } from "./context";
import { allLessons, tracks } from "./data";
import {
  loadState,
  parseRoute,
  roleLabel,
  routeHash,
  STORAGE_KEY,
} from "./model";
import type { Page } from "./model";
import { Brand, Button, Icon } from "./ui";
import type { IconName } from "./ui";
import {
  AccessScreen,
  ChooseScreen,
  NotificationsScreen,
  PrivacyScreen,
  ProfileScreen,
  SecurityScreen,
  SettingsScreen,
  SupportScreen,
  WelcomeScreen,
} from "./Account";
import {
  CareerScreen,
  HomeScreen,
  LessonScreen,
  PracticeScreen,
  ProgressScreen,
  ReadingScreen,
  TracksScreen,
  TrailScreen,
  VocabularyScreen,
} from "./Learning";
import { CommunicationScreen, CommunityScreen } from "./Community";
import {
  ActivityScreen,
  LibraryScreen,
  StudentsScreen,
  TeacherScreen,
} from "./Teaching";

const publicPages: Page[] = [
  "welcome",
  "signup",
  "login",
  "choose",
  "privacy",
  "support",
];
const teacherPages: Page[] = [
  "teacher",
  "activity",
  "students",
  "library",
  "teacher-community",
];
const navPages: Record<string, string> = {
  home: "Início",
  tracks: "Sua formação",
  trail: "Trilha de aprendizagem",
  lesson: "Módulos e aulas",
  practice: "Prática",
  vocabulary: "Apoio bilíngue",
  progress: "Meu progresso",
  communication: "Comunicação",
  career: "Trabalho e carreira",
  training: "Qualificação profissional",
  reading: "Leitura e cultura",
  article: "Leitura",
  profile: "Meu perfil",
  learn: "Aprenda Libras",
  inclusion: "Apoie a inclusão",
  community: "Comunidade",
  teacher: "Área do professor",
  activity: "Criar atividade",
  students: "Acompanhar alunos",
  library: "Biblioteca pedagógica",
  "teacher-community": "Comunidade docente",
  settings: "Configurações",
  support: "Suporte",
  notifications: "Notificações",
  security: "Segurança e dados",
  privacy: "Termos e privacidade",
};
function Modal({ value, onClose }: { value: Dialog; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const node = ref.current;
    node?.focus();
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const buttons = node?.querySelectorAll<HTMLElement>(
          'button,[href],input,textarea,select,[tabindex="0"]',
        );
        if (!buttons?.length) return;
        const first = buttons[0],
          last = buttons[buttons.length - 1];
        if (
          e.shiftKey &&
          (document.activeElement === first || document.activeElement === node)
        ) {
          e.preventDefault();
          last.focus();
        } else if (
          !e.shiftKey &&
          (document.activeElement === last || document.activeElement === node)
        ) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", listener);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", listener);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);
  return createPortal(
    <div
      className="modal-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-copy"
        tabIndex={-1}
      >
        <button
          className="modal-close icon-button"
          aria-label="Fechar janela"
          onClick={onClose}
        >
          <Icon name="close" />
        </button>
        <span className="modal-symbol">
          <Icon name={value.confirm ? "logout" : "sparkles"} size={30} />
        </span>
        <h2 id="dialog-title">{value.title}</h2>
        <p id="dialog-copy">{value.text}</p>
        {value.action && (
          <Button
            onClick={() => {
              onClose();
              value.action?.();
            }}
          >
            {value.confirm || "Continuar"}
          </Button>
        )}
        <Button variant="outline" onClick={onClose}>
          {value.action ? "Continuar na experiência" : "Entendi"}
        </Button>
      </div>
    </div>,
    document.body,
  );
}
export default function App() {
  const [state, setState] = useState(loadState);
  const [route, setRoute] = useState(() => parseRoute(window.location.hash));
  const [toastMessage, setToastMessage] = useState("");
  const [modal, setModal] = useState<Dialog | null>(null);
  const [menu, setMenu] = useState(false);
  const storageWarned = useRef(false);
  const firstRender = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const toast = useCallback((message: string) => {
    clearTimeout(timer.current);
    setToastMessage(message);
    timer.current = setTimeout(() => setToastMessage(""), 5000);
  }, []);
  const go = useCallback((page: Page, id?: string) => {
    setRoute({ page, id });
    window.location.hash = routeHash(page, id);
    setMenu(false);
  }, []);
  const closeModal = useCallback(() => setModal(null), []);
  useEffect(() => {
    const onHash = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("hashchange", onHash);
      clearTimeout(timer.current);
    };
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      if (!storageWarned.current) {
        toast(
          "O navegador não permitiu salvar. Você pode continuar explorando nesta sessão.",
        );
        storageWarned.current = true;
      }
    }
  }, [state, toast]);
  useEffect(() => {
    if (!state.role && !publicPages.includes(route.page)) go("choose");
    else if (
      state.role &&
      teacherPages.includes(route.page) &&
      state.role !== "professor"
    )
      go("home");
    else if (state.role === "professor" && route.page === "home") go("teacher");
  }, [route.page, state.role, go]);
  useEffect(() => {
    document.documentElement.classList.toggle(
      "large-text",
      state.preferences.largeText,
    );
    document.documentElement.classList.toggle(
      "high-contrast",
      state.preferences.contrast,
    );
    document.documentElement.classList.toggle(
      "reduced-motion",
      state.preferences.reducedMotion,
    );
  }, [state.preferences]);
  useEffect(() => {
    document.title = `${navPages[route.page] || "Educação que conecta"} · Sinalis`;
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!firstRender.current) {
      const h = document.querySelector("h1");
      if (h instanceof HTMLElement) {
        h.setAttribute("tabindex", "-1");
        h.focus({ preventScroll: true });
      }
    }
    firstRender.current = false;
  }, [route]);
  const home: Page = state.role === "professor" ? "teacher" : "home";
  const isPublic =
    publicPages.includes(route.page) &&
    ["welcome", "signup", "login", "choose"].includes(route.page);
  const startLesson =
    tracks[state.role === "ouvinte" ? 1 : 0].lessons.find(
      (l) => !state.completed.includes(l.id),
    ) || allLessons[0];
  const back = () => {
    if (route.page === "practice") go("lesson", route.id || startLesson.id);
    else if (route.page === "lesson")
      go(
        "trail",
        tracks.find((t) => t.lessons.some((l) => l.id === route.id))?.id ||
          "trabalho",
      );
    else if (route.page === "trail") go("tracks");
    else if (route.page === "article") go("reading");
    else if (
      route.page === "choose" ||
      route.page === "signup" ||
      route.page === "login"
    )
      go("welcome");
    else if (
      ["settings", "security", "privacy", "notifications"].includes(route.page)
    )
      go(state.role ? "profile" : "welcome");
    else go(state.role ? home : "welcome");
  };
  let screen: ReactNode;
  switch (route.page) {
    case "welcome":
      screen = <WelcomeScreen />;
      break;
    case "signup":
      screen = <AccessScreen signup />;
      break;
    case "login":
      screen = <AccessScreen />;
      break;
    case "choose":
      screen = <ChooseScreen />;
      break;
    case "home":
      screen = <HomeScreen />;
      break;
    case "tracks":
      screen = <TracksScreen />;
      break;
    case "training":
      screen = <TracksScreen training />;
      break;
    case "learn":
      screen = <TracksScreen learn />;
      break;
    case "trail":
      screen = <TrailScreen />;
      break;
    case "lesson":
      screen = <LessonScreen />;
      break;
    case "practice":
      screen = <PracticeScreen />;
      break;
    case "progress":
      screen = <ProgressScreen />;
      break;
    case "vocabulary":
      screen = <VocabularyScreen />;
      break;
    case "reading":
      screen = <ReadingScreen />;
      break;
    case "article":
      screen = <ReadingScreen article />;
      break;
    case "career":
      screen = <CareerScreen />;
      break;
    case "inclusion":
      screen = <CareerScreen inclusion />;
      break;
    case "communication":
      screen = <CommunicationScreen />;
      break;
    case "community":
      screen = <CommunityScreen />;
      break;
    case "teacher-community":
      screen = <CommunityScreen teacher />;
      break;
    case "teacher":
      screen = <TeacherScreen />;
      break;
    case "activity":
      screen = <ActivityScreen />;
      break;
    case "students":
      screen = <StudentsScreen />;
      break;
    case "library":
      screen = <LibraryScreen />;
      break;
    case "profile":
      screen = <ProfileScreen />;
      break;
    case "settings":
      screen = <SettingsScreen />;
      break;
    case "support":
      screen = <SupportScreen />;
      break;
    case "notifications":
      screen = <NotificationsScreen />;
      break;
    case "security":
      screen = <SecurityScreen />;
      break;
    case "privacy":
      screen = <PrivacyScreen />;
      break;
  }
  const learnerNav: [IconName, string, Page][] = [
    ["home", "Início", "home"],
    ["book", "Sua formação", "tracks"],
    ["target", "Prática", "practice"],
    ["languages", "Apoio bilíngue", "vocabulary"],
    ["users", "Comunidade", "community"],
    ["chart", "Meu progresso", "progress"],
  ];
  const professorNav: [IconName, string, Page][] = [
    ["home", "Visão geral", "teacher"],
    ["users", "Minhas turmas", "students"],
    ["plus", "Criar atividade", "activity"],
    ["book", "Biblioteca", "library"],
    ["message", "Comunidade docente", "teacher-community"],
  ];
  const nav = state.role === "professor" ? professorNav : learnerNav;
  const bottom: [IconName, string, Page][] =
    state.role === "professor"
      ? [
          ["home", "Visão geral", "teacher"],
          ["users", "Turmas", "students"],
          ["book", "Biblioteca", "library"],
          ["user", "Perfil", "profile"],
        ]
      : [
          ["home", "Início", "home"],
          ["book", "Trilhas", "tracks"],
          ["target", "Prática", "practice"],
          ["users", "Comunidade", "community"],
          ["user", "Perfil", "profile"],
        ];
  const isActive = (page: Page) =>
    route.page === page ||
    (page === "tracks" &&
      ["trail", "lesson", "learn", "training"].includes(route.page)) ||
    (page === "profile" &&
      ["settings", "security", "notifications", "privacy"].includes(
        route.page,
      ));
  const navigate = (page: Page) =>
    go(page, page === "practice" ? startLesson.id : undefined);
  return (
    <SinalisContext.Provider
      value={{ state, setState, route, go, toast, dialog: setModal }}
    >
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Pular para o conteúdo
      </a>
      {isPublic ? (
        <>
          <div className="public-top">
            {route.page !== "welcome" && (
              <button className="back-button" onClick={back}>
                <Icon name="back" size={20} />
                <span>Voltar</span>
              </button>
            )}
            <span>EDUCAÇÃO INCLUSIVA PARA ADULTOS E EQUIPES</span>
            <span className="prototype-label">Protótipo</span>
          </div>
          <main
            id="main-content"
            className={`public-main public-${route.page}`}
            tabIndex={-1}
            key={route.page}
          >
            {screen}
          </main>
        </>
      ) : (
        <div className="app-shell">
          {menu && <div className="nav-scrim" onClick={() => setMenu(false)} />}
          <aside className={`sidebar ${menu ? "open" : ""}`}>
            <Brand onClick={() => go(state.role ? home : "welcome")} />
            <button
              className="sidebar-close icon-button"
              onClick={() => setMenu(false)}
              aria-label="Fechar menu"
            >
              <Icon name="close" />
            </button>
            <span className="sidebar-eyebrow">SEU ESPAÇO DE APRENDIZAGEM</span>
            <nav aria-label="Menu principal">
              {nav.map(([icon, label, page]) => (
                <button
                  key={page}
                  aria-current={isActive(page) ? "page" : undefined}
                  className={isActive(page) ? "active" : ""}
                  onClick={() => navigate(page)}
                >
                  <Icon name={icon} />
                  <span>{label}</span>
                  {isActive(page) && <i />}
                </button>
              ))}
            </nav>
            <div className="sidebar-bottom">
              <button className="profile-switch" onClick={() => go("choose")}>
                <span className="profile-switch-icon">
                  <Icon
                    name={state.role === "professor" ? "graduation" : "hand"}
                  />
                </span>
                <span>
                  <small>SEU PERFIL</small>
                  <strong>{roleLabel[state.role || "surdo"]}</strong>
                </span>
                <Icon name="down" size={17} />
              </button>
              <button onClick={() => go("profile")}>
                <Icon name="user" size={18} />
                Meu perfil
              </button>
              <button onClick={() => go("settings")}>
                <Icon name="settings" size={18} />
                Configurações
              </button>
              <button onClick={() => go("support")}>
                <Icon name="help" size={18} />
                Ajuda e suporte
              </button>
              <small className="sidebar-footnote">
                Um novo jeito de se conectar.
              </small>
            </div>
          </aside>
          <div className="app-main">
            <header className="topbar">
              <div className="topbar-left">
                <button
                  className="icon-button mobile-menu"
                  onClick={() => setMenu(true)}
                  aria-label="Abrir menu"
                >
                  <Icon name="menu" />
                </button>
                <Brand onClick={() => go(state.role ? home : "welcome")} />
                <div className="breadcrumb">
                  <span>Sinalis</span>
                  <Icon name="chevron" size={14} />
                  <span>{navPages[route.page]}</span>
                </div>
              </div>
              <div className="topbar-right">
                <span className="prototype-label desktop-prototype">
                  Protótipo navegável
                </span>
                <button
                  className="notification-button icon-button"
                  onClick={() => go("notifications")}
                  aria-label="Abrir notificações"
                >
                  <Icon name="bell" />
                  {state.preferences.notifications &&
                    noticesCount(state.readNotifications) > 0 && <i />}
                </button>
                <button
                  className="user-avatar"
                  aria-label="Abrir meu perfil"
                  onClick={() => go("profile")}
                >
                  {(state.name || "V")[0].toUpperCase()}
                </button>
              </div>
            </header>
            <main
              id="main-content"
              className={`page page-${route.page}`}
              tabIndex={-1}
            >
              {![home, "home"].includes(route.page) && (
                <button className="back-button page-back" onClick={back}>
                  <Icon name="back" size={18} />
                  <span>Voltar</span>
                </button>
              )}
              <div
                key={`${route.page}-${route.id || ""}`}
                className="page-content"
              >
                {screen}
              </div>
              <footer className="page-footer">
                <span>
                  Sinalis<span className="brand-dot">.</span>
                </span>
                <small>Conhecimento que conecta.</small>
              </footer>
            </main>
          </div>
          <nav className="bottom-nav" aria-label="Navegação inferior">
            {bottom.map(([icon, label, page]) => (
              <button
                key={page}
                className={isActive(page) ? "active" : ""}
                aria-current={isActive(page) ? "page" : undefined}
                onClick={() => navigate(page)}
              >
                <span>
                  <Icon name={icon} />
                </span>
                <small>{label}</small>
              </button>
            ))}
          </nav>
        </div>
      )}
      {toastMessage && (
        <div className="toast" role="status">
          <Icon name="check" size={18} />
          <span>{toastMessage}</span>
          <button aria-label="Fechar aviso" onClick={() => setToastMessage("")}>
            <Icon name="close" size={16} />
          </button>
        </div>
      )}
      {modal && <Modal value={modal} onClose={closeModal} />}
    </SinalisContext.Provider>
  );
}
function noticesCount(read: string[]) {
  return ["n1", "n2", "n3"].filter((id) => !read.includes(id)).length;
}
