import { newId } from "./model";
import { useState } from "react";
import type { Activity } from "./model";
import { useSinalis } from "./context";
import { studentData, articles } from "./data";
import {
  Button,
  Empty,
  Icon,
  media,
  Note,
  Progress,
  Row,
  SearchBox,
  Section,
  Tabs,
  Title,
} from "./ui";
export function TeacherScreen() {
  const { state, go } = useSinalis();
  return (
    <>
      <Title
        eyebrow="ESPAÇO DO PROFESSOR"
        title={
          state.name
            ? `Olá, ${state.name.split(" ")[0]}.`
            : "Ensinar transforma caminhos."
        }
        subtitle="Recursos para uma aprendizagem mais inclusiva."
        action={
          <Button
            className="compact desktop-action"
            onClick={() => go("activity")}
          >
            <Icon name="plus" size={18} />
            Criar atividade
          </Button>
        }
      />
      <div className="teacher-banner">
        <div>
          <span className="eyebrow">CADA TURMA, NOVAS POSSIBILIDADES</span>
          <h2>Conhecimento para compartilhar.</h2>
          <p>Acompanhe suas turmas e crie experiências acessíveis.</p>
          <Button variant="white" onClick={() => go("activity")}>
            Criar atividade
            <Icon name="plus" size={18} />
          </Button>
        </div>
        <img
          src={media("reading.webp")}
          alt="Pessoas aprendendo juntas"
        />
      </div>
      <div className="stat-grid">
        <div className="stat">
          <Icon name="users" />
          <strong>2</strong>
          <span>turmas de exemplo</span>
        </div>
        <div className="stat">
          <Icon name="graduation" />
          <strong>{studentData.length}</strong>
          <span>participantes fictícios</span>
        </div>
        <div className="stat">
          <Icon name="file" />
          <strong>{state.activities.filter((a) => a.published).length}</strong>
          <span>atividades publicadas na demo</span>
        </div>
      </div>
      <Section title="Minhas turmas" />
      <div className="courses-grid">
        {["Comunicação inclusiva", "Libras no trabalho"].map((group, i) => (
          <button
            className="group-card"
            key={group}
            onClick={() => go("students", group)}
          >
            <span className="round-icon">
              <Icon name="users" size={28} />
            </span>
            <span>
              <strong>{group}</strong>
              <small>
                {i === 0 ? "3" : "1"} participantes · Turma de exemplo
              </small>
              <Progress value={i === 0 ? 75 : 25} />
            </span>
            <Icon name="chevron" size={19} />
          </button>
        ))}
      </div>
      <div className="teacher-tools">
        <Row
          icon="chart"
          title="Acompanhar alunos"
          detail="Progresso e devolutivas"
          onClick={() => go("students")}
        />
        <Row
          icon="book"
          title="Biblioteca pedagógica"
          detail="Planos e materiais para ensinar"
          onClick={() => go("library")}
        />
        <Row
          icon="users"
          title="Comunidade docente"
          detail="Troque ideias e experiências"
          onClick={() => go("teacher-community")}
        />
      </div>
      <Section
        title="Suas atividades"
        action={
          <button className="text-button" onClick={() => go("activity")}>
            <Icon name="plus" size={15} />
            Nova atividade
          </button>
        }
      />
      {state.activities.length ? (
        <div className="stack">
          {state.activities.map((a) => (
            <Row
              key={a.id}
              icon="file"
              title={a.title || "Atividade sem título"}
              detail={`${a.group} · ${a.published ? "Publicada na demonstração" : "Rascunho"}`}
              onClick={() => go("activity", a.id)}
            />
          ))}
        </div>
      ) : (
        <Empty
          title="Sua próxima ideia começa aqui"
          text="Crie uma atividade e escolha uma forma acessível de participação."
        >
          <Button variant="outline" onClick={() => go("activity")}>
            Criar minha primeira atividade
          </Button>
        </Empty>
      )}
    </>
  );
}
export function ActivityScreen() {
  const { state, setState, route, go, toast } = useSinalis();
  const existing = state.activities.find((a) => a.id === route.id);
  const [form, setForm] = useState<Activity>(
    existing || {
      id: newId(),
      title: "",
      group: "Comunicação inclusiva",
      instructions: "",
      response: "Texto",
      published: false,
    },
  );
  const [resource, setResource] = useState(false);
  const [link, setLink] = useState("");
  const [libras, setLibras] = useState(false);
  const save = (published: boolean) => {
    const value = {
      ...form,
      published,
      title: form.title.trim() || "Atividade sem título",
      instructions:
        form.instructions.trim() +
        (link ? `\n\nMaterial de apoio: ${link}` : ""),
    };
    setState((s) => ({
      ...s,
      activities: [...s.activities.filter((a) => a.id !== form.id), value],
    }));
    toast(
      published ? "Atividade publicada na demonstração." : "Rascunho salvo.",
    );
    go("teacher");
  };
  return (
    <>
      <Title
        eyebrow="PLANEJAR PARA INCLUIR"
        title={existing ? "Editar atividade" : "Criar atividade"}
        subtitle="Prepare uma experiência de aprendizagem acessível."
      />
      <form
        className="activity-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (form.title.trim() && form.instructions.trim()) save(true);
        }}
      >
        <div className="card form-card">
          <label>
            Título da atividade
            <input
              required
              maxLength={100}
              placeholder="Ex.: Apresentação profissional"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </label>
          <label>
            Turma
            <select
              value={form.group}
              onChange={(e) => setForm({ ...form, group: e.target.value })}
            >
              <option>Comunicação inclusiva</option>
              <option>Libras no trabalho</option>
            </select>
          </label>
          <label>
            Orientações para a turma
            <textarea
              required
              rows={5}
              maxLength={3000}
              placeholder="Descreva a proposta, os passos e o que os participantes vão aprender."
              value={form.instructions}
              onChange={(e) =>
                setForm({ ...form, instructions: e.target.value })
              }
            />
          </label>
          <button
            className="attachment-button"
            type="button"
            aria-expanded={resource}
            onClick={() => setResource(!resource)}
          >
            <Icon name="plus" size={18} />
            Adicionar material de apoio
            <Icon name="file" size={18} />
          </button>
          {resource && (
            <label>
              Link do material
              <input
                type="url"
                placeholder="https://…"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <small>
                O endereço será incluído nas orientações da atividade.
              </small>
            </label>
          )}
          <button
            className="attachment-button"
            type="button"
            aria-expanded={libras}
            onClick={() => setLibras(!libras)}
          >
            <Icon name="hand" size={18} />
            Orientações em Libras
            <Icon name="down" size={18} />
          </button>
          {libras && (
            <Note icon="video">
              Para disponibilizar orientações em Libras nesta demonstração,
              adicione o link de um vídeo acessível no material de apoio.
            </Note>
          )}
        </div>
        <aside>
          <div className="card">
            <h2>Como a turma pode responder?</h2>
            <p>Escolha o formato para esta atividade.</p>
            <Tabs
              options={["Texto", "Vídeo", "Áudio"]}
              value={form.response}
              onChange={(response) => setForm({ ...form, response })}
            />
            <small>
              As respostas dos alunos e o envio de arquivos serão integrados na
              versão conectada.
            </small>
            <div className="button-stack">
              <Button
                type="submit"
                disabled={!form.title.trim() || !form.instructions.trim()}
              >
                Publicar atividade
                <Icon name="arrow" size={18} />
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => save(false)}
              >
                Salvar rascunho
              </Button>
            </div>
          </div>
          <Note icon="eye">
            <strong>Uma atividade, diferentes formas de participar.</strong>
            <p>Use instruções claras, contexto visual e recursos de apoio.</p>
          </Note>
        </aside>
      </form>
    </>
  );
}
export function StudentsScreen() {
  const { route, toast } = useSinalis();
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState(route.id || "Todas as turmas");
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [saved, setSaved] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem("sinalis.feedback") || "{}");
    } catch {
      return {};
    }
  });
  const filtered = studentData.filter(
    (s) =>
      (group === "Todas as turmas" || s.group === group) &&
      s.name.toLowerCase().includes(query.toLowerCase()),
  );
  const student = studentData.find((s) => s.name === selected);
  const avg = filtered.length
    ? Math.round(filtered.reduce((n, s) => n + s.progress, 0) / filtered.length)
    : 0;
  const download = () => {
    const csv =
      "Nome,Turma,Progresso\n" +
      filtered.map((s) => `${s.name},${s.group},${s.progress}%`).join("\n");
    const u = URL.createObjectURL(
      new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = u;
    a.download = "sinalis-turma-demonstracao.csv";
    a.click();
    URL.revokeObjectURL(u);
  };
  return (
    <>
      <Title
        eyebrow="CADA PESSOA, UM CAMINHO"
        title="Acompanhar alunos"
        subtitle="Uma visão do desenvolvimento da sua turma."
      />
      <Note icon="users">
        Os participantes e os indicadores abaixo são dados fictícios de
        demonstração.
      </Note>
      <label className="select-label">
        Turma
        <select value={group} onChange={(e) => setGroup(e.target.value)}>
          {[
            "Todas as turmas",
            "Comunicação inclusiva",
            "Libras no trabalho",
          ].map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </label>
      <div className="stat-grid two">
        <div className="stat">
          <strong>{filtered.length}</strong>
          <span>participantes encontrados</span>
        </div>
        <div className="stat">
          <strong>
            {avg}
            <small>%</small>
          </strong>
          <span>progresso médio ilustrativo</span>
        </div>
      </div>
      <SearchBox
        value={query}
        onChange={setQuery}
        placeholder="Buscar participante"
      />
      <div className="students-layout">
        <div className="stack">
          {filtered.map((s) => (
            <button
              key={s.name}
              className={`student-card ${s.name === selected ? "selected" : ""}`}
              onClick={() => {
                setSelected(s.name);
                setFeedback(saved[s.name] || "");
              }}
            >
              <img className="avatar" src={media(s.image)} alt="" />
              <span>
                <strong>{s.name}</strong>
                <small>{s.group}</small>
                <Progress value={s.progress} />
              </span>
              <strong className="student-percent">{s.progress}%</strong>
            </button>
          ))}
          {!filtered.length && (
            <Empty
              title="Nenhum participante encontrado"
              text="Experimente outro nome ou turma."
            />
          )}
        </div>
        <div className="card student-detail">
          {student ? (
            <>
              <span className="eyebrow">PARTICIPANTE DE EXEMPLO</span>
              <h2>{student.name}</h2>
              <p>{student.group}</p>
              <Progress value={student.progress} />
              <p>{student.progress}% de progresso ilustrativo</p>
              <label>
                Devolutiva individual
                <textarea
                  value={feedback}
                  maxLength={2000}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Escreva uma orientação construtiva…"
                />
              </label>
              <Button
                disabled={!feedback.trim()}
                onClick={() => {
                  const next = { ...saved, [student.name]: feedback.trim() };
                  try {
                    localStorage.setItem(
                      "sinalis.feedback",
                      JSON.stringify(next),
                    );
                    setSaved(next);
                    toast("Devolutiva salva nesta demonstração.");
                  } catch {
                    toast(
                      "Não foi possível salvar a devolutiva neste navegador.",
                    );
                  }
                }}
              >
                Salvar devolutiva
              </Button>
            </>
          ) : (
            <div className="empty">
              <Icon name="chart" size={35} />
              <h2>Olhe para cada jornada.</h2>
              <p>
                Selecione um participante para ver os detalhes e registrar uma
                devolutiva local.
              </p>
            </div>
          )}
        </div>
      </div>
      <Button variant="outline" onClick={download}>
        <Icon name="download" size={18} />
        Baixar relatório ilustrativo
      </Button>
    </>
  );
}
export function LibraryScreen() {
  const { go, dialog, state, setState } = useSinalis();
  const [tab, setTab] = useState("Todos");
  const [query, setQuery] = useState("");
  const materials = [
    {
      id: "plano",
      title: "Plano de aula: apresentações",
      kind: "Planos",
      text: "Objetivo: construir apresentações profissionais com contexto visual. Abertura: conversa sobre preferências de comunicação. Prática: apresentação em duplas com informações claras. Fechamento: revisar os recursos utilizados e o que facilitou a compreensão.",
    },
    {
      id: "guia",
      title: "Guia de atividades acessíveis",
      kind: "Guias",
      text: "Organize as instruções por etapas, ofereça exemplos e combine os formatos de participação. Revise se os materiais são legíveis e se há alternativas de acesso às informações. Peça feedback dos participantes.",
    },
    {
      id: "roteiro",
      title: "Comunicação inclusiva em equipe",
      kind: "Planos",
      text: "Proposta: simular uma reunião com pauta visual e turnos organizados. Identificar barreiras de comunicação e revisar os recursos com a turma. Registre os combinados para os próximos encontros.",
    },
  ];
  const filtered = materials.filter(
    (m) =>
      (tab === "Todos" ||
        m.kind === tab ||
        (tab === "Salvos" && state.favorites.includes(m.id))) &&
      m.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <Title
        eyebrow="RECURSOS PARA ENSINAR"
        title="Biblioteca pedagógica"
        subtitle="Ideias que ajudam a construir formações inclusivas."
      />
      <SearchBox
        value={query}
        onChange={setQuery}
        placeholder="Buscar material"
      />
      <Tabs
        options={["Todos", "Planos", "Guias", "Salvos"]}
        value={tab}
        onChange={setTab}
      />
      <div className="material-grid">
        {filtered.map((m) => (
          <div className="material-card" key={m.id}>
            <span className="material-icon">
              <Icon name="file" size={32} />
            </span>
            <span className="eyebrow">{m.kind} · Demonstração</span>
            <h2>{m.title}</h2>
            <p>{m.text.slice(0, 95)}…</p>
            <div className="reading-actions">
              <button
                className="text-button"
                onClick={() => dialog({ title: m.title, text: m.text })}
              >
                Abrir material
                <Icon name="arrow" size={15} />
              </button>
              <button
                aria-label={`${state.favorites.includes(m.id) ? "Remover" : "Salvar"} ${m.title}`}
                className={`icon-button ${state.favorites.includes(m.id) ? "saved" : ""}`}
                onClick={() =>
                  setState((s) => ({
                    ...s,
                    favorites: s.favorites.includes(m.id)
                      ? s.favorites.filter((x) => x !== m.id)
                      : [...s.favorites, m.id],
                  }))
                }
              >
                <Icon name="bookmark" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {!filtered.length && (
        <Empty
          title="Nenhum material encontrado"
          text="Tente outra busca ou explore todos os recursos."
        />
      )}
      <Section title="Leituras para inspirar sua prática" />
      {articles.slice(0, 2).map((a) => (
        <Row
          key={a.id}
          icon="book"
          title={a.title}
          detail={`${a.minutes} minutos de leitura`}
          onClick={() => go("article", a.id)}
        />
      ))}
    </>
  );
}
