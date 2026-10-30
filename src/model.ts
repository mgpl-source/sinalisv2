export type Role = "surdo" | "ouvinte" | "professor";
export const pages = [
  "welcome",
  "signup",
  "login",
  "choose",
  "home",
  "tracks",
  "trail",
  "lesson",
  "practice",
  "vocabulary",
  "progress",
  "communication",
  "career",
  "training",
  "reading",
  "article",
  "profile",
  "learn",
  "inclusion",
  "community",
  "teacher",
  "activity",
  "students",
  "library",
  "teacher-community",
  "settings",
  "support",
  "notifications",
  "security",
  "privacy",
] as const;
export type Page = (typeof pages)[number];
export type Route = { page: Page; id?: string };
export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  points: string[];
  question: string;
  answers: string[];
  correct: number;
  explanation: string;
};
export type Track = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  lessons: Lesson[];
};
export type Post = {
  id: string;
  author: string;
  text: string;
  teacher: boolean;
  liked: boolean;
  replies: string[];
  saved: boolean;
};
export type Activity = {
  id: string;
  title: string;
  group: string;
  instructions: string;
  response: string;
  published: boolean;
};
export type Preferences = {
  captions: boolean;
  largeText: boolean;
  contrast: boolean;
  reducedMotion: boolean;
  notifications: boolean;
};
export type State = {
  role: Role | null;
  name: string;
  email: string;
  completed: string[];
  favorites: string[];
  posts: Post[];
  activities: Activity[];
  messages: string[];
  readNotifications: string[];
  preferences: Preferences;
  company: string;
};
export const STORAGE_KEY = "sinalis.corporativo.v3";
export const initialState: State = {
  role: null,
  name: "",
  email: "",
  completed: [],
  favorites: [],
  activities: [],
  messages: [],
  readNotifications: [],
  company: "",
  preferences: {
    captions: true,
    largeText: false,
    contrast: false,
    reducedMotion: false,
    notifications: true,
  },
  posts: [
    {
      id: "p1",
      author: "Marina Costa",
      text: "Como tornar reuniões mais acessíveis? Compartilhe um recurso que funciona na sua equipe.",
      teacher: false,
      liked: false,
      replies: [],
      saved: false,
    },
    {
      id: "p2",
      author: "Pedro Santos",
      text: "Esta semana organizamos os materiais da reunião com antecedência. A participação da equipe melhorou muito!",
      teacher: false,
      liked: false,
      replies: [],
      saved: false,
    },
    {
      id: "t1",
      author: "Camila Rocha",
      text: "Uma ideia para a turma: apresentações profissionais com apoio visual. Como vocês adaptariam essa atividade?",
      teacher: true,
      liked: false,
      replies: [],
      saved: false,
    },
    {
      id: "t2",
      author: "João Alves",
      text: "Organizei um roteiro visual de comunicação no trabalho. Vamos trocar experiências sobre os materiais?",
      teacher: true,
      liked: false,
      replies: [],
      saved: false,
    },
  ],
};
export function loadState(): State {
  try {
    const value: unknown = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "null",
    );
    if (!value || typeof value !== "object")
      return structuredClone(initialState);
    const s = value as Partial<State>;
    return {
      ...structuredClone(initialState),
      role: ["surdo", "ouvinte", "professor"].includes(s.role || "")
        ? s.role!
        : null,
      name: typeof s.name === "string" ? s.name : "",
      email: typeof s.email === "string" ? s.email : "",
      company: typeof s.company === "string" ? s.company : "",
      completed: stringList(s.completed),
      favorites: stringList(s.favorites),
      messages: stringList(s.messages),
      readNotifications: stringList(s.readNotifications),
      preferences: {
        ...initialState.preferences,
        ...Object.fromEntries(
          Object.entries(s.preferences || {}).filter(
            ([, v]) => typeof v === "boolean",
          ),
        ),
      },
      posts:
        Array.isArray(s.posts) &&
        s.posts.every(
          (p) =>
            typeof p?.id === "string" &&
            typeof p?.text === "string" &&
            typeof p?.author === "string" &&
            Array.isArray(p?.replies) &&
            p.replies.every((r: unknown) => typeof r === "string"),
        )
          ? s.posts
          : structuredClone(initialState.posts),
      activities: Array.isArray(s.activities)
        ? s.activities.filter(
            (a) =>
              a &&
              ["id", "title", "group", "instructions", "response"].every(
                (k) => typeof a[k as keyof Activity] === "string",
              ) &&
              typeof a.published === "boolean",
          )
        : [],
    };
  } catch {
    return structuredClone(initialState);
  }
}
function stringList(v: unknown): string[] {
  return Array.isArray(v)
    ? [...new Set(v.filter((x): x is string => typeof x === "string"))]
    : [];
}
export const roleLabel: Record<Role, string> = {
  surdo: "Adulto surdo",
  ouvinte: "Ouvinte",
  professor: "Professor",
};
export function parseRoute(hash: string): Route {
  const [raw, id] = hash.replace(/^#\/?/, "").split("/");
  let decoded: string | undefined;
  try {
    decoded = id ? decodeURIComponent(id) : undefined;
  } catch {
    decoded = undefined;
  }
  return {
    page: pages.includes(raw as Page) ? (raw as Page) : "welcome",
    id: decoded,
  };
}
export const routeHash = (page: Page, id?: string) =>
  `#/${page}${id ? "/" + encodeURIComponent(id) : ""}`;
export function completeLesson(state: State, id: string): State {
  return { ...state, completed: [...new Set([...state.completed, id])] };
}
export function trackPercent(track: Track, completed: string[]): number {
  return Math.round(
    (100 * track.lessons.filter((l) => completed.includes(l.id)).length) /
      track.lessons.length,
  );
}
export function isUnlocked(track: Track, index: number, completed: string[]) {
  return index === 0 || completed.includes(track.lessons[index - 1].id);
}

// Identificadores locais, inclusive em previews HTTP sem randomUUID.
export function newId(): string {
  return globalThis.crypto?.randomUUID?.() ?? `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
