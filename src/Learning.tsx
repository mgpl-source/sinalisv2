import { useState } from "react";
import { useSinalis } from "./context";
import { allLessons, tracks, words, articles } from "./data";
import { completeLesson, isUnlocked, trackPercent } from "./model";
import type { Track } from "./model";
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

export function CourseCard({ track }: { track: Track }) {
  const { go, state } = useSinalis();
  const percent = trackPercent(track, state.completed);
  return (
    <button className="course-card" onClick={() => go("trail", track.id)}>
      <img src={media(track.image)} alt="" />
      <span className="course-copy">
        <span className="eyebrow">{track.category}</span>
        <strong>{track.title}</strong>
        <small>
          {track.lessons.length} aulas · {track.lessons.length * 5} min{" "}
          {percent === 100 ? "· Concluída" : ""}
        </small>
        <Progress value={percent} />
      </span>
      <Icon name="chevron" size={19} />
    </button>
  );
}
export function HomeScreen() {
  const { state, go } = useSinalis();
  const isDeaf = state.role === "surdo";
  const track = tracks[isDeaf ? 0 : 1];
  const percent = trackPercent(track, state.completed);
  return (
    <>
      <Title
        eyebrow="APRENDER É SE CONECTAR"
        title={
          state.name
            ? `Olá, ${state.name.split(" ")[0]}.`
            : "Seu próximo passo começa aqui."
        }
        subtitle="Um pouco de prática. Novas possibilidades."
      />
      <div className="home-layout">
        <section className="continue-card">
          <div className="continue-copy">
            <span className="eyebrow">SUA JORNADA, NO SEU RITMO</span>
            <h2>{track.title}</h2>
            <p>{track.description}</p>
            <div className="continue-progress">
              <Progress value={percent} />
              <small>{percent}% concluído</small>
            </div>
            <Button variant="white" onClick={() => go("trail", track.id)}>
              {percent ? "Continuar jornada" : "Começar jornada"}
              <Icon name="arrow" size={18} />
            </Button>
          </div>
          <img
            src={media("instructor.jpg")}
            alt="Pessoa demonstrando comunicação por sinais"
          />
          <span className="hero-orbit" />
        </section>
        <div className="quick-grid">
          {(isDeaf
            ? [
                { i: "book", t: "Minhas trilhas", p: "tracks" },
                { i: "play", t: "Módulos e aulas", p: "trail" },
                { i: "message", t: "Comunicação", p: "communication" },
                { i: "briefcase", t: "Trabalho e carreira", p: "career" },
              ]
            : [
                { i: "hand", t: "Aprenda Libras", p: "learn" },
                { i: "heart", t: "Apoie a inclusão", p: "inclusion" },
                { i: "message", t: "Comunique-se", p: "communication" },
                { i: "users", t: "Comunidade", p: "community" },
              ]
          ).map(({ i, t, p }) => (
            <button
              className="quick-card"
              key={p}
              onClick={() =>
                go(p as "tracks", p === "trail" ? track.id : undefined)
              }
            >
              <Icon name={i as "book"} />
              <strong>{t}</strong>
              <Icon name="arrow" size={16} />
            </button>
          ))}
        </div>
      </div>
      <Section
        title="Feito para sua jornada"
        action={
          <button className="text-button" onClick={() => go("tracks")}>
            Ver todas <Icon name="arrow" size={15} />
          </button>
        }
      />
      <div className="courses-grid">
        {tracks
          .filter((t) => t.id !== track.id)
          .slice(0, 2)
          .map((t) => (
            <CourseCard key={t.id} track={t} />
          ))}
      </div>
      <button className="company-banner" onClick={() => go("training")}>
        <span className="round-icon">
          <Icon name="building" size={27} />
        </span>
        <span>
          <strong>Conhecimento que transforma equipes.</strong>
          <small>
            Explore a qualificação profissional e aprenda para o trabalho.
          </small>
        </span>
        <Icon name="arrow" />
      </button>
      <div className="discovery-grid">
        <Row
          icon="languages"
          title="Apoio bilíngue"
          detail="Palavras e contextos para o dia a dia"
          onClick={() => go("vocabulary")}
        />
        <Row
          icon="book"
          title="Leitura e cultura"
          detail="Histórias para ampliar perspectivas"
          onClick={() => go("reading")}
        />
      </div>
    </>
  );
}
export function TracksScreen({
  training = false,
  learn = false,
}: {
  training?: boolean;
  learn?: boolean;
}) {
  const { state, go } = useSinalis();
  const [filter, setFilter] = useState("Todas");
  const list = tracks.filter(
    (t) =>
      filter === "Todas" ||
      (filter === "Em andamento" &&
        trackPercent(t, state.completed) > 0 &&
        trackPercent(t, state.completed) < 100) ||
      (filter === "Concluídas" && trackPercent(t, state.completed) === 100),
  );
  return (
    <>
      <Title
        eyebrow={
          training
            ? "DESENVOLVIMENTO PROFISSIONAL"
            : learn
              ? "CONEXÕES EM LIBRAS"
              : "SUA JORNADA"
        }
        title={
          training
            ? "Qualificação profissional"
            : learn
              ? "Aprenda Libras"
              : "Sua formação"
        }
        subtitle={
          training
            ? "Habilidades para transformar seu próximo passo."
            : learn
              ? "Fundamentos, prática e novas formas de se conectar."
              : "Conhecimento que acompanha seu ritmo."
        }
      />
      {learn && (
        <div className="learn-hero">
          <img src={media("instructor.jpg")} alt="Pessoa sinalizando" />
          <div>
            <span className="eyebrow">PRIMEIRO PASSO</span>
            <h2>Uma conversa pode abrir caminhos.</h2>
            <Button onClick={() => go("trail", "conversas")}>
              Começar a aprender
              <Icon name="arrow" size={17} />
            </Button>
          </div>
        </div>
      )}
      <Tabs
        options={["Todas", "Em andamento", "Concluídas"]}
        value={filter}
        onChange={setFilter}
      />
      <div className="courses-grid">
        {list.map((t) => (
          <CourseCard key={t.id} track={t} />
        ))}
      </div>
      {!list.length && (
        <Empty
          title="Sua próxima conquista está por vir"
          text="Escolha uma trilha e conclua a primeira aula para acompanhar seu avanço aqui."
        >
          <Button onClick={() => setFilter("Todas")}>Explorar trilhas</Button>
        </Empty>
      )}
      <Note icon="hand">
        <strong>Aprender também é praticar.</strong>
        <p>
          As aulas deste protótipo apresentam conceitos de comunicação
          inclusiva. Os vídeos de sinais serão adicionados na versão com
          conteúdo validado.
        </p>
      </Note>
    </>
  );
}
export function TrailScreen() {
  const { state, route, go, toast } = useSinalis();
  const track = tracks.find((t) => t.id === route.id) || tracks[0];
  const percent = trackPercent(track, state.completed);
  const next = track.lessons.findIndex((l) => !state.completed.includes(l.id));
  const positions = [
    { x: 160, y: 64 },
    { x: 242, y: 190 },
    { x: 160, y: 316 },
    { x: 78, y: 442 },
    { x: 160, y: 568 },
    { x: 242, y: 694 },
  ];
  const used = positions.slice(0, track.lessons.length);
  const height = used.at(-1)!.y + 100;
  const path = used
    .map((p, i) =>
      i === 0
        ? `M ${p.x} ${p.y}`
        : `C ${used[i - 1].x} ${used[i - 1].y + 65}, ${p.x} ${p.y - 65}, ${p.x} ${p.y}`,
    )
    .join(" ");
  return (
    <>
      <Title
        eyebrow={`${track.lessons.length} ETAPAS · ${track.category.toUpperCase()}`}
        title={track.title}
        subtitle={track.description}
      />
      <div className="trail-layout">
        <section className="trail-panel">
          <div className="unit-header">
            <div>
              <span className="eyebrow">UNIDADE 01</span>
              <h2>
                {track.id === "trabalho" ? "Conexões no trabalho" : track.title}
              </h2>
            </div>
            <span className="unit-count">
              {
                track.lessons.filter((l) => state.completed.includes(l.id))
                  .length
              }
              /{track.lessons.length}
            </span>
          </div>
          <div className="trail-map" style={{ height }}>
            <svg
              viewBox={`0 0 320 ${height}`}
              className="trail-line"
              aria-hidden="true"
            >
              <path
                d={path}
                fill="none"
                stroke="var(--line)"
                strokeWidth="13"
                strokeLinecap="round"
              />
              <path
                d={path}
                fill="none"
                stroke="var(--mint)"
                strokeWidth="7"
                strokeDasharray="2 14"
                strokeLinecap="round"
              />
            </svg>
            {track.lessons.map((lesson, index) => {
              const done = state.completed.includes(lesson.id);
              const unlocked = isUnlocked(track, index, state.completed);
              const current = index === next;
              const { x, y } = used[index];
              return (
                <div
                  className={`trail-stop ${current ? "current" : ""} ${done ? "done" : ""} ${!unlocked ? "locked" : ""}`}
                  style={{ left: x, top: y }}
                  key={lesson.id}
                >
                  {current && (
                    <span
                      className={`start-bubble ${x !== 160 ? "below" : ""}`}
                    >
                      SEU PRÓXIMO PASSO
                    </span>
                  )}
                  <button
                    className="trail-node"
                    aria-label={`${index + 1}. ${lesson.title}${done ? " — concluída" : unlocked ? " — disponível" : " — bloqueada"}`}
                    aria-disabled={!unlocked}
                    onClick={() =>
                      unlocked
                        ? go("lesson", lesson.id)
                        : toast(
                            "Conclua a etapa anterior para liberar esta aula.",
                          )
                    }
                  >
                    <Icon
                      name={
                        done
                          ? "check"
                          : !unlocked
                            ? "lock"
                            : index === track.lessons.length - 1
                              ? "trophy"
                              : current
                                ? "play"
                                : "star"
                      }
                      size={31}
                    />
                  </button>
                  <span
                    className={`trail-node-label ${x > 160 ? "left-label" : x < 160 ? "right-label" : "center-label"}`}
                  >
                    <small>ETAPA {String(index + 1).padStart(2, "0")}</small>
                    <strong>{lesson.title}</strong>
                    {done && <span>Concluída ✓</span>}
                  </span>
                </div>
              );
            })}
            <span className="trail-decoration deco-one">
              <Icon name="sparkles" size={30} />
            </span>
            <span className="trail-decoration deco-two">
              <Icon name="hand" size={34} />
            </span>
          </div>
          <div className="trail-finish">
            <Icon name="trophy" size={28} />
            <div>
              <strong>
                {percent === 100
                  ? "Uma conquista para sua jornada!"
                  : "Cada etapa conta."}
              </strong>
              <p>
                {percent === 100
                  ? "Todas as aulas desta trilha foram concluídas."
                  : "Conclua a trilha para receber sua conquista."}
              </p>
            </div>
          </div>
        </section>
        <aside className="trail-aside">
          <div className="card">
            <span className="eyebrow">SEU DESENVOLVIMENTO</span>
            <div className="large-percent">
              {percent}
              <small>%</small>
            </div>
            <Progress value={percent} />
            <p>Pequenos passos constroem grandes conexões.</p>
            <Button
              onClick={() =>
                go("lesson", track.lessons[next === -1 ? 0 : next].id)
              }
            >
              {percent === 100
                ? "Revisar a primeira aula"
                : "Continuar a trilha"}
              <Icon name="arrow" size={18} />
            </Button>
          </div>
          <Note>
            <strong>No seu ritmo.</strong>
            <p>
              Pratique quando puder. Seu progresso fica salvo neste navegador.
            </p>
          </Note>
          <Row
            icon="chart"
            title="Ver meu progresso"
            onClick={() => go("progress")}
          />
        </aside>
      </div>
    </>
  );
}
export function LessonScreen() {
  const { state, route, go } = useSinalis();
  const lesson = allLessons.find((l) => l.id === route.id) || allLessons[0];
  const track = tracks.find((t) => t.lessons.some((l) => l.id === lesson.id))!;
  const index = track.lessons.indexOf(lesson);
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0);
  const [transcript, setTranscript] = useState(state.preferences.captions);
  if (!isUnlocked(track, index, state.completed))
    return (
      <Empty
        title="Uma etapa de cada vez"
        text="Conclua a aula anterior para continuar sua jornada."
      >
        <Button onClick={() => go("trail", track.id)}>Voltar à trilha</Button>
      </Empty>
    );
  return (
    <>
      <Title
        eyebrow={`ETAPA ${String(index + 1).padStart(2, "0")} · ${track.title.toUpperCase()}`}
        title={lesson.title}
        subtitle={`${lesson.minutes} minutos para aprender algo novo.`}
      />
      <div className="lesson-layout">
        <div>
          <div className={`lesson-media ${playing ? "is-playing" : ""}`}>
            {playing ? (
              <div className="guided-slide">
                <span className="eyebrow">
                  PRÁTICA GUIADA · {step + 1}/{lesson.points.length}
                </span>
                <Icon
                  name={(["eye", "message", "users"] as const)[step % 3]}
                  size={50}
                />
                <h2>{lesson.points[step]}</h2>
                <div className="slide-controls">
                  <button
                    className="icon-button"
                    disabled={step === 0}
                    onClick={() => setStep(step - 1)}
                    aria-label="Etapa anterior"
                  >
                    <Icon name="back" />
                  </button>
                  <span>
                    {lesson.points.map((_, i) => (
                      <i key={i} className={i === step ? "active" : ""} />
                    ))}
                  </span>
                  <button
                    className="icon-button"
                    onClick={() =>
                      step < lesson.points.length - 1
                        ? setStep(step + 1)
                        : go("practice", lesson.id)
                    }
                    aria-label={
                      step === lesson.points.length - 1
                        ? "Ir para o exercício"
                        : "Próxima etapa"
                    }
                  >
                    <Icon name="arrow" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img
                  src={media(track.image)}
                  alt="Ilustração de comunicação no ambiente profissional"
                />
                <button
                  className="media-play"
                  onClick={() => setPlaying(true)}
                  aria-label="Iniciar prática guiada"
                >
                  <Icon name="play" size={32} />
                </button>
                <span className="media-tag">
                  Prática guiada · {lesson.minutes} min
                </span>
              </>
            )}
          </div>
          <div className="lesson-description">
            <h2>Um novo olhar para o dia a dia.</h2>
            <p>{lesson.summary}</p>
          </div>
          <button
            className="transcript-toggle"
            aria-expanded={transcript}
            onClick={() => setTranscript(!transcript)}
          >
            <Icon name="file" size={18} />
            Texto de apoio
            <Icon name="down" size={17} />
          </button>
          {transcript && (
            <div className="transcript">
              {lesson.points.map((p, i) => (
                <p key={p}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
        <aside className="lesson-aside">
          <div className="card">
            <span className="eyebrow">COLOQUE EM PRÁTICA</span>
            <h2>Vamos experimentar?</h2>
            <p>Use o que você aprendeu em uma situação do cotidiano.</p>
            <Button onClick={() => go("practice", lesson.id)}>
              Fazer exercício
              <Icon name="arrow" size={18} />
            </Button>
          </div>
          <Note icon="book">
            Conteúdo introdutório de demonstração. Esta prática guiada em texto
            não substitui aulas de sinais em Libras.
          </Note>
        </aside>
      </div>
    </>
  );
}
export function PracticeScreen() {
  const { state, setState, route, go } = useSinalis();
  const lesson = allLessons.find((l) => l.id === route.id) || allLessons[0];
  const track = tracks.find((t) => t.lessons.some((l) => l.id === lesson.id))!;
  const index = track.lessons.indexOf(lesson);
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const correct = choice === lesson.correct;
  if (!isUnlocked(track, index, state.completed))
    return (
      <Empty
        title="Esta prática ainda está bloqueada"
        text="Conclua a etapa anterior para continuar."
      >
        <Button onClick={() => go("trail", track.id)}>Ver trilha</Button>
      </Empty>
    );
  return (
    <div className="practice-screen">
      <Title
        eyebrow="APRENDER FAZ PARTE DA PRÁTICA"
        title="Uma situação. Um novo olhar."
        subtitle={lesson.title}
      />
      <div className="quiz-top">
        <span>
          <Icon name="target" />
          Desafio da etapa {index + 1}
        </span>
        <span>
          {index + 1}/{track.lessons.length}
        </span>
      </div>
      <Progress
        value={
          (100 * (index + (checked && correct ? 1 : 0))) / track.lessons.length
        }
      />
      <div className="quiz-illustration">
        <Icon name="message" size={48} />
        <span>
          <Icon name="sparkles" size={24} />
        </span>
      </div>
      <h2 className="question">{lesson.question}</h2>
      <div className="answers" role="group" aria-label="Escolha uma resposta">
        {lesson.answers.map((answer, i) => (
          <button
            className={`answer ${choice === i ? "selected" : ""} ${checked && i === choice ? (correct ? "correct" : "incorrect") : ""}`}
            key={answer}
            aria-pressed={choice === i}
            disabled={checked}
            onClick={() => setChoice(i)}
          >
            <span className="answer-index">
              {checked && choice === i ? (
                <Icon name={correct ? "check" : "close"} size={18} />
              ) : (
                String.fromCharCode(65 + i)
              )}
            </span>
            <span>{answer}</span>
            <span className="answer-radio" />
          </button>
        ))}
      </div>
      {checked && (
        <div
          className={`feedback ${correct ? "success" : "retry"}`}
          role="status"
        >
          <Icon name={correct ? "check" : "sparkles"} size={25} />
          <div>
            <strong>
              {correct
                ? "Mais um passo na sua jornada!"
                : "Vamos olhar de novo?"}
            </strong>
            <p>
              {correct
                ? lesson.explanation
                : "Pense em uma atitude que valorize a participação e as escolhas da própria pessoa."}
            </p>
          </div>
        </div>
      )}
      <Button
        disabled={choice === null}
        onClick={() => {
          if (!checked) {
            setChecked(true);
            if (correct) setState((s) => completeLesson(s, lesson.id));
          } else if (correct) go("trail", track.id);
          else {
            setChoice(null);
            setChecked(false);
          }
        }}
      >
        {!checked
          ? "Verificar resposta"
          : correct
            ? "Voltar à trilha"
            : "Tentar novamente"}
        <Icon name="arrow" size={18} />
      </Button>
      <button
        className="text-button centered"
        onClick={() => go("lesson", lesson.id)}
      >
        Revisar conteúdo
      </button>
    </div>
  );
}
export function ProgressScreen() {
  const { state, go, toast } = useSinalis();
  const total = allLessons.filter((l) => state.completed.includes(l.id)).length;
  const percent = Math.round((total / allLessons.length) * 100);
  const certificates = tracks.filter(
    (t) => trackPercent(t, state.completed) === 100,
  );
  const download = () => {
    const text = `SINALIS — CONQUISTA DE DEMONSTRAÇÃO\n${state.name || "Visitante"}\nTrilhas concluídas: ${certificates.map((t) => t.title).join(", ")}\nRegistro do protótipo, sem validade de certificação.\n`;
    const u = URL.createObjectURL(
      new Blob([text], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = u;
    a.download = "sinalis-minhas-conquistas.txt";
    a.click();
    URL.revokeObjectURL(u);
    toast("Registro da conquista baixado.");
  };
  return (
    <>
      <Title
        eyebrow="CADA PASSO IMPORTA"
        title="Seu desenvolvimento"
        subtitle="Veja até onde sua dedicação já levou você."
      />
      <div className="progress-dashboard">
        <div className="progress-summary">
          <div
            className="progress-ring"
            style={{
              background: `conic-gradient(var(--orange) ${percent}%, var(--line) 0)`,
            }}
          >
            <span>
              <strong>
                {percent}
                <small>%</small>
              </strong>
              <small>da jornada</small>
            </span>
          </div>
          <div>
            <span className="eyebrow">SEU CAMINHO ESTÁ EM CONSTRUÇÃO</span>
            <h2>
              {total
                ? "Conhecimento que cresce com você."
                : "Uma nova jornada espera por você."}
            </h2>
            <p>
              {total
                ? "Continue aprendendo, uma conexão de cada vez."
                : "Escolha sua primeira trilha para começar."}
            </p>
            <Button onClick={() => go("tracks")}>
              Continuar aprendendo
              <Icon name="arrow" size={17} />
            </Button>
          </div>
        </div>
        <div className="stat-grid">
          <div className="stat">
            <Icon name="book" />
            <strong>{total}</strong>
            <span>aulas concluídas</span>
          </div>
          <div className="stat">
            <Icon name="clock" />
            <strong>
              {total * 5}
              <small> min</small>
            </strong>
            <span>de conteúdo concluído</span>
          </div>
          <div className="stat">
            <Icon name="trophy" />
            <strong>{certificates.length}</strong>
            <span>trilhas concluídas</span>
          </div>
        </div>
      </div>
      <Section title="Competências em desenvolvimento" />
      <div className="card skill-list">
        {tracks.map((t) => (
          <button key={t.id} onClick={() => go("trail", t.id)}>
            <span>{t.title}</span>
            <strong>{trackPercent(t, state.completed)}%</strong>
            <Progress value={trackPercent(t, state.completed)} />
          </button>
        ))}
      </div>
      <Section title="Suas conquistas" />
      <div className="achievement-grid">
        {tracks.map((t) => (
          <button
            className={`achievement ${certificates.includes(t) ? "earned" : ""}`}
            key={t.id}
            onClick={() =>
              certificates.includes(t) ? download() : go("trail", t.id)
            }
          >
            <Icon
              name={certificates.includes(t) ? "trophy" : "lock"}
              size={30}
            />
            <strong>{t.title}</strong>
            <small>
              {certificates.includes(t)
                ? "Conquista desbloqueada · Baixar registro"
                : "Conclua a trilha para desbloquear"}
            </small>
          </button>
        ))}
      </div>
      <Note icon="file">
        As conquistas são registros de demonstração do protótipo, sem validade
        de certificação profissional.
      </Note>
    </>
  );
}
export function VocabularyScreen() {
  const { state, setState, toast } = useSinalis();
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("Português");
  const [category, setCategory] = useState("Todas");
  const [selected, setSelected] = useState(words[0]);
  const filtered = words.filter(
    (w) =>
      `${w.word} ${w.english} ${w.spanish}`
        .toLowerCase()
        .includes(query.toLowerCase()) &&
      (category === "Todas" || w.category === category),
  );
  const save = (word: string) => {
    setState((s) => ({
      ...s,
      favorites: s.favorites.includes(word)
        ? s.favorites.filter((x) => x !== word)
        : [...s.favorites, word],
    }));
  };
  return (
    <>
      <Title
        eyebrow="PALAVRAS QUE APROXIMAM"
        title="Apoio bilíngue"
        subtitle="Vocabulário profissional em diferentes línguas."
      />
      <SearchBox
        value={query}
        onChange={setQuery}
        placeholder="Buscar uma palavra"
      />
      <Tabs
        options={["Português", "English", "Español"]}
        value={lang}
        onChange={setLang}
      />
      <div className="vocabulary-layout">
        <section className="word-feature">
          <div className="word-art">
            <Icon
              name={selected.category === "Trabalho" ? "briefcase" : "message"}
              size={65}
            />
            <span className="word-tag">{selected.category}</span>
          </div>
          <div>
            <span className="eyebrow">{selected.word}</span>
            <h2>
              {lang === "English"
                ? selected.english
                : lang === "Español"
                  ? selected.spanish
                  : selected.word}
            </h2>
            <p>{selected.note}</p>
            <Button
              variant="outline"
              onClick={() => {
                save(selected.word);
                toast(
                  state.favorites.includes(selected.word)
                    ? "Palavra removida dos favoritos."
                    : "Palavra salva nos favoritos.",
                );
              }}
            >
              <Icon name="bookmark" size={18} />
              {state.favorites.includes(selected.word)
                ? "Salvo nos favoritos"
                : "Salvar palavra"}
            </Button>
          </div>
        </section>
        <div>
          <Tabs
            options={["Todas", "Trabalho", "Cotidiano"]}
            value={category}
            onChange={setCategory}
          />
          <div className="stack">
            {filtered.map((w) => (
              <button
                className={`word-row ${selected.word === w.word ? "active" : ""}`}
                key={w.word}
                onClick={() => setSelected(w)}
              >
                <Icon name="languages" />
                <span>
                  <strong>
                    {lang === "English"
                      ? w.english
                      : lang === "Español"
                        ? w.spanish
                        : w.word}
                  </strong>
                  <small>{w.category}</small>
                </span>
                {state.favorites.includes(w.word) ? (
                  <Icon name="bookmark" />
                ) : (
                  <Icon name="chevron" size={18} />
                )}
              </button>
            ))}
          </div>
          {!filtered.length && (
            <Empty
              title="Nenhuma palavra encontrada"
              text="Experimente outra busca."
            />
          )}
        </div>
      </div>
      <Note icon="hand">
        Este glossário apresenta palavras e seus contextos. As demonstrações de
        sinais em Libras ainda não fazem parte deste protótipo.
      </Note>
    </>
  );
}
export function ReadingScreen({ article = false }: { article?: boolean }) {
  const { state, setState, route, go, toast } = useSinalis();
  const [tab, setTab] = useState("Todos");
  const item = articles.find((a) => a.id === route.id) || articles[0];
  const save = (id: string) => {
    setState((s) => ({
      ...s,
      favorites: s.favorites.includes(id)
        ? s.favorites.filter((x) => x !== id)
        : [...s.favorites, id],
    }));
    toast(
      state.favorites.includes(id)
        ? "Leitura removida dos favoritos."
        : "Leitura salva para depois.",
    );
  };
  if (article)
    return (
      <article className="article">
        <Title
          eyebrow={`${item.category.toUpperCase()} · ${item.minutes} MIN DE LEITURA`}
          title={item.title}
          subtitle={item.subtitle}
        />
        <img
          className="article-cover"
          src={media(item.image)}
          alt="Pessoas compartilhando experiências"
        />
        {item.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <Button variant="outline" onClick={() => save(item.id)}>
          <Icon name="bookmark" size={18} />
          {state.favorites.includes(item.id)
            ? "Salvo para depois"
            : "Salvar para depois"}
        </Button>
        <Button onClick={() => go("reading")}>
          Explorar outras leituras
          <Icon name="arrow" size={18} />
        </Button>
      </article>
    );
  return (
    <>
      <Title
        eyebrow="NOVAS PERSPECTIVAS"
        title="Leitura e cultura"
        subtitle="Histórias e ideias que ampliam seu mundo."
      />
      <Tabs
        options={["Todos", "Cultura", "Trabalho", "Salvos"]}
        value={tab}
        onChange={setTab}
      />
      <div className="reading-grid">
        {articles
          .filter(
            (a) =>
              tab === "Todos" ||
              a.category === tab ||
              (tab === "Salvos" && state.favorites.includes(a.id)),
          )
          .map((a) => (
            <article className="reading-card" key={a.id}>
              <button
                className="reading-cover"
                onClick={() => go("article", a.id)}
              >
                <img src={media(a.image)} alt="" />
              </button>
              <div>
                <span className="eyebrow">
                  {a.category} · {a.minutes} min
                </span>
                <h2>{a.title}</h2>
                <p>{a.subtitle}</p>
                <div className="reading-actions">
                  <button
                    className="text-button"
                    onClick={() => go("article", a.id)}
                  >
                    Começar leitura
                    <Icon name="arrow" size={16} />
                  </button>
                  <button
                    className={`icon-button ${state.favorites.includes(a.id) ? "saved" : ""}`}
                    aria-label={`${state.favorites.includes(a.id) ? "Remover" : "Salvar"} ${a.title}`}
                    onClick={() => save(a.id)}
                  >
                    <Icon name="bookmark" />
                  </button>
                </div>
              </div>
            </article>
          ))}
      </div>
      {tab === "Salvos" &&
        !articles.some((a) => state.favorites.includes(a.id)) && (
          <Empty
            title="Sua lista começa com uma boa leitura"
            text="Salve conteúdos para encontrar aqui depois."
          />
        )}
      <Note icon="calendar">
        <strong>Mais cultura, mais conexões.</strong>
        <p>Explore a comunidade para compartilhar o que você aprendeu.</p>
        <button className="text-button" onClick={() => go("community")}>
          Conhecer a comunidade
          <Icon name="arrow" size={15} />
        </button>
      </Note>
    </>
  );
}
export function CareerScreen({ inclusion = false }: { inclusion?: boolean }) {
  const { go, dialog } = useSinalis();
  const tips = inclusion
    ? [
        [
          "message",
          "Pergunte a preferência de comunicação",
          "Cada pessoa tem suas próprias preferências. Pergunte se ela prefere Libras, texto ou outro recurso e combine uma forma confortável para conversar.",
        ],
        [
          "video",
          "Use recursos visuais e legendas",
          "Compartilhe informações também por escrito, use materiais visuais legíveis e revise a qualidade das legendas nos vídeos.",
        ],
        [
          "users",
          "Garanta participação nas reuniões",
          "Envie a pauta antes, organize os turnos de fala e confirme os recursos necessários com os próprios participantes.",
        ],
        [
          "file",
          "Um guia para sua equipe",
          "Registre os combinados da equipe. Revise os formatos de comunicação com frequência e acolha sugestões.",
        ],
      ]
    : [
        [
          "file",
          "Currículo acessível",
          "Organize suas experiências, projetos e competências. Use texto legível, contatos atualizados e destaque informações relevantes para a vaga.",
        ],
        [
          "users",
          "Entrevistas de emprego",
          "Conheça a oportunidade, prepare exemplos e combine os recursos de comunicação necessários para participar da entrevista.",
        ],
        [
          "chart",
          "Comunicação profissional",
          "Compartilhe suas ideias, peça esclarecimentos e combine com sua equipe as formas de comunicação que funcionam melhor.",
        ],
      ];
  return (
    <>
      <Title
        eyebrow={
          inclusion ? "BOAS PRÁTICAS, TODOS OS DIAS" : "SEU PRÓXIMO PASSO"
        }
        title={inclusion ? "Apoie a inclusão" : "Trabalho e carreira"}
        subtitle={
          inclusion
            ? "Uma comunicação acessível começa com atitudes."
            : "Desenvolva sua jornada profissional."
        }
      />
      <div className="editorial-banner">
        <div>
          <span className="eyebrow">
            {inclusion
              ? "CONEXÕES COM RESPEITO"
              : "POSSIBILIDADES PARA CRESCER"}
          </span>
          <h2>
            {inclusion
              ? "Torne sua comunicação acessível."
              : "Seu talento tem novos caminhos."}
          </h2>
        </div>
        <Icon name={inclusion ? "hand" : "briefcase"} size={70} />
      </div>
      <div className="discovery-grid">
        {tips.map(([icon, title, text]) => (
          <Row
            key={title}
            icon={icon as "file"}
            title={title}
            detail={
              inclusion
                ? "Explore atitudes para o dia a dia"
                : "Prepare seu próximo passo"
            }
            onClick={() => dialog({ title, text })}
          />
        ))}
      </div>
      <Section
        title={inclusion ? "Aprenda na prática" : "Para continuar crescendo"}
      />
      <div className="courses-grid">
        <CourseCard track={tracks[inclusion ? 2 : 3]} />
        <Row
          icon="book"
          title="Inclusão no ambiente de trabalho"
          detail="Uma leitura para transformar a rotina"
          onClick={() => go("article", "inclusao")}
        />
      </div>
      <Button
        onClick={() =>
          go(
            inclusion ? "trail" : "training",
            inclusion ? "atendimento" : undefined,
          )
        }
      >
        {inclusion
          ? "Explorar trilha de inclusão"
          : "Ver qualificação profissional"}
        <Icon name="arrow" size={18} />
      </Button>
    </>
  );
}
