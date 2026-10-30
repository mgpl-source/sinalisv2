// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import { allLessons, tracks } from "./data";
import {
  completeLesson,
  initialState,
  isUnlocked,
  loadState,
  newId,
  parseRoute,
  STORAGE_KEY,
  trackPercent,
} from "./model";
import type { Role } from "./model";
beforeEach(() => {
  localStorage.clear();
  window.location.hash = "";
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
function seed(role: Role, completed: string[] = []) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...structuredClone(initialState), role, completed }),
  );
}
describe("Progresso e persistência", () => {
  it("gera identificadores também em HTTP sem randomUUID", () => {
    vi.stubGlobal("crypto", {});
    expect(newId()).toMatch(/^local-/);
    expect(newId()).not.toBe(newId());
    vi.unstubAllGlobals();
  });
  it("libera somente a etapa seguinte e não duplica conclusões", () => {
    const t = tracks[0];
    expect(isUnlocked(t, 1, [])).toBe(false);
    const state = completeLesson(
      completeLesson(structuredClone(initialState), "t1"),
      "t1",
    );
    expect(state.completed).toEqual(["t1"]);
    expect(isUnlocked(t, 1, state.completed)).toBe(true);
    expect(isUnlocked(t, 2, state.completed)).toBe(false);
    expect(trackPercent(t, state.completed)).toBe(17);
  });
  it("recupera armazenamento corrompido e normaliza preferências", () => {
    localStorage.setItem(STORAGE_KEY, "broken");
    expect(loadState().role).toBe(null);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        role: "admin",
        completed: ["t1", "t1", 7],
        preferences: { largeText: true, captions: "sim" },
      }),
    );
    const state = loadState();
    expect(state.role).toBe(null);
    expect(state.completed).toEqual(["t1"]);
    expect(state.preferences.largeText).toBe(true);
    expect(state.preferences.captions).toBe(true);
  });
  it("trata rotas inválidas sem quebrar", () => {
    expect(parseRoute("#/inexistente").page).toBe("welcome");
    expect(parseRoute("#/lesson/%E0%A4%A").id).toBeUndefined();
  });
});
describe("Fluxos do protótipo", () => {
  it("entra sem cadastro e escolhe o perfil ouvinte", async () => {
    render(<App />);
    fireEvent.click(
      screen.getByRole("button", { name: "Começar minha jornada" }),
    );
    await screen.findByRole("heading", { name: "Como você vai aprender?" });
    fireEvent.click(
      screen.getByRole("button", {
        name: /Mascote fazendo um sinal de positivo/,
      }),
    );
    fireEvent.click(
      screen.getByRole("button", { name: "Continuar" }),
    );
    await screen.findByRole("heading", {
      name: "Seu próximo passo começa aqui.",
    });
    expect(loadState().role).toBe("ouvinte");
  });
  it("resposta errada não conclui e resposta correta persiste o desbloqueio", async () => {
    seed("surdo");
    window.location.hash = "#/practice/t1";
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: /Falar mais alto/ }));
    fireEvent.click(screen.getByRole("button", { name: "Verificar resposta" }));
    expect(loadState().completed).toHaveLength(0);
    fireEvent.click(screen.getByRole("button", { name: "Tentar novamente" }));
    fireEvent.click(
      screen.getByRole("button", { name: /Perguntar sua preferência/ }),
    );
    fireEvent.click(screen.getByRole("button", { name: "Verificar resposta" }));
    expect(loadState().completed).toEqual(["t1"]);
    fireEvent.click(screen.getByRole("button", { name: "Voltar à trilha" }));
    await screen.findByRole("button", {
      name: "2. Apresentações profissionais — disponível",
    });
  });
  it("protege a entrada direta em uma aula bloqueada", () => {
    seed("surdo");
    window.location.hash = "#/lesson/t3";
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Uma etapa de cada vez" }),
    ).toBeTruthy();
  });
  it("professor cria atividade, publica e reencontra os dados", async () => {
    seed("professor");
    window.location.hash = "#/activity";
    render(<App />);
    fireEvent.change(screen.getByLabelText("Título da atividade"), {
      target: { value: "Apresentação acessível" },
    });
    fireEvent.change(screen.getByLabelText("Orientações para a turma"), {
      target: { value: "Apresente sua experiência com apoio visual." },
    });
    fireEvent.click(screen.getByRole("button", { name: "Publicar atividade" }));
    await screen.findByRole("heading", {
      name: "Ensinar transforma caminhos.",
    });
    expect(loadState().activities[0].published).toBe(true);
    fireEvent.click(
      screen.getByRole("button", { name: /Apresentação acessível/ }),
    );
    await waitFor(() =>
      expect(
        (screen.getByLabelText("Título da atividade") as HTMLInputElement)
          .value,
      ).toBe("Apresentação acessível"),
    );
  });
  it("comunidade publica e responde sem perder o texto", () => {
    seed("surdo");
    window.location.hash = "#/community";
    render(<App />);
    fireEvent.click(
      screen.getByRole("button", {
        name: /Qual experiência você quer compartilhar/,
      }),
    );
    fireEvent.change(screen.getByLabelText("Compartilhe sua experiência"), {
      target: { value: "Pautas visuais ajudam nossa equipe." },
    });
    fireEvent.click(
      screen.getByRole("button", { name: "Publicar" }),
    );
    expect(
      screen.getByText("Pautas visuais ajudam nossa equipe."),
    ).toBeTruthy();
    expect(loadState().posts[0].text).toBe(
      "Pautas visuais ajudam nossa equipe.",
    );
  });
  it("configurações alteram a interface e persistem", () => {
    seed("surdo");
    window.location.hash = "#/settings";
    render(<App />);
    fireEvent.click(screen.getByRole("switch", { name: /Texto ampliado/ }));
    expect(document.documentElement.classList.contains("large-text")).toBe(
      true,
    );
    expect(loadState().preferences.largeText).toBe(true);
  });
  it("permite sair sem apagar o progresso", async () => {
    seed("surdo", ["t1"]);
    window.location.hash = "#/profile";
    render(<App />);
    fireEvent.click(
      screen.getByRole("button", { name: "Sair da experiência" }),
    );
    fireEvent.click(
      screen.getByRole("dialog").querySelector(".button-primary")!,
    );
    await screen.findByRole("heading", { name: /Comunicação.*que aproxima/ });
    expect(loadState().role).toBe(null);
    expect(loadState().completed).toEqual(["t1"]);
  });
});
const routes: [Role, string][] = [
  ...[
    "home",
    "tracks",
    "trail/trabalho",
    "lesson/t1",
    "practice/t1",
    "vocabulary",
    "progress",
    "communication",
    "career",
    "training",
    "reading",
    "article/historias",
    "profile",
    "inclusion",
    "community",
    "settings",
    "support",
    "notifications",
    "security",
    "privacy",
  ].map((p) => ["surdo", p] as [Role, string]),
  ["ouvinte", "home"],
  ["ouvinte", "learn"],
  ...[
    "teacher",
    "activity",
    "students",
    "library",
    "teacher-community",
    "settings",
  ].map((p) => ["professor", p] as [Role, string]),
];
describe("Telas acessíveis por rota", () => {
  for (const [role, path] of routes)
    it(`${role}: ${path}`, () => {
      seed(role);
      window.location.hash = "#/" + path;
      render(<App />);
      expect(screen.getAllByRole("heading", { level: 1 }).length).toBe(1);
      expect(screen.getByRole("main")).toBeTruthy();
    });
});
