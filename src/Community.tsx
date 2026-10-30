import { newId } from "./model";
import { useState } from "react";
import type { FormEvent } from "react";
import { useSinalis } from "./context";
import { Button, Empty, Icon, media, Note, Section, Tabs, Title } from "./ui";
export function CommunityScreen({ teacher = false }: { teacher?: boolean }) {
  const { state, setState, dialog, toast } = useSinalis();
  const [tab, setTab] = useState("Conversas");
  const [compose, setCompose] = useState(false);
  const [draft, setDraft] = useState("");
  const [reply, setReply] = useState<Record<string, string>>({});
  const [openReply, setOpenReply] = useState("");
  const posts = state.posts.filter(
    (p) => p.teacher === teacher && (tab !== "Salvos" || p.saved),
  );
  const publish = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setState((s) => ({
      ...s,
      posts: [
        {
          id: newId(),
          author: s.name || "Você",
          text: draft.trim(),
          teacher,
          liked: false,
          replies: [],
          saved: false,
        },
        ...s.posts,
      ],
    }));
    setDraft("");
    setCompose(false);
    toast("Sua publicação foi adicionada à demonstração.");
  };
  return (
    <>
      <Title
        eyebrow={
          teacher ? "ENSINAR TAMBÉM É COMPARTILHAR" : "APRENDER EM COMUNIDADE"
        }
        title={teacher ? "Comunidade docente" : "Conexões que ensinam"}
        subtitle={
          teacher
            ? "Experiências e ideias para formações mais inclusivas."
            : "Trocas que aproximam pessoas e possibilidades."
        }
        action={
          <Button
            className="compact desktop-action"
            onClick={() => setCompose(!compose)}
          >
            <Icon name="plus" size={18} />
            Compartilhar
          </Button>
        }
      />
      <Tabs
        options={["Conversas", "Eventos", "Salvos"]}
        value={tab}
        onChange={setTab}
      />
      {tab === "Eventos" ? (
        <div className="events-grid">
          {[
            {
              title: "Roda de conversa: comunicação inclusiva",
              tag: "Encontro da comunidade",
              date: "Evento de demonstração",
              text: "Troque ideias sobre como tornar as conversas no trabalho mais acessíveis.",
            },
            {
              title: "Materiais visuais na aprendizagem",
              tag: "Oficina para educadores",
              date: "Evento de demonstração",
              text: "Um espaço para compartilhar práticas e recursos pedagógicos.",
            },
          ].map((e) => (
            <div className="event-card" key={e.title}>
              <span className="event-icon">
                <Icon name="calendar" size={35} />
              </span>
              <span className="eyebrow">{e.tag}</span>
              <h2>{e.title}</h2>
              <p>{e.text}</p>
              <small>{e.date} · Online</small>
              <Button
                variant="outline"
                onClick={() =>
                  dialog({
                    title: e.title,
                    text: "Este encontro faz parte da demonstração do Sinalis. Datas e inscrições reais serão disponibilizadas quando a programação da comunidade estiver aberta.",
                  })
                }
              >
                Ver detalhes
                <Icon name="arrow" size={16} />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button
            className="compose-invite"
            onClick={() => setCompose(!compose)}
          >
            <span className="avatar initials">{(state.name || "V")[0]}</span>
            <span>Qual experiência você quer compartilhar?</span>
            <Icon name="pencil" />
          </button>
          {compose && (
            <form className="card compose-form" onSubmit={publish}>
              <label>
                Compartilhe sua experiência
                <textarea
                  required
                  autoFocus
                  maxLength={1500}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="Sua ideia pode inspirar outras pessoas."
                />
              </label>
              <small>
                {draft.length}/1500 · Publicação local de demonstração
              </small>
              <div className="button-row">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCompose(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={!draft.trim()}>
                  Publicar
                  <Icon name="send" size={17} />
                </Button>
              </div>
            </form>
          )}
          <div className="community-feed">
            {posts.map((p) => (
              <article className="post-card" key={p.id}>
                <header>
                  <img
                    className="avatar"
                    src={media(p.teacher ? "teacher.webp" : "people.webp")}
                    alt=""
                  />
                  <span>
                    <strong>{p.author}</strong>
                    <small>
                      {p.teacher ? "Comunidade docente" : "Comunidade Sinalis"}{" "}
                      · Demonstração
                    </small>
                  </span>
                  <button
                    aria-label={
                      p.saved
                        ? "Remover publicação dos salvos"
                        : "Salvar publicação"
                    }
                    className={`icon-button ${p.saved ? "saved" : ""}`}
                    onClick={() =>
                      setState((s) => ({
                        ...s,
                        posts: s.posts.map((x) =>
                          x.id === p.id ? { ...x, saved: !x.saved } : x,
                        ),
                      }))
                    }
                  >
                    <Icon name="bookmark" size={20} />
                  </button>
                </header>
                <p>{p.text}</p>
                <footer>
                  <button
                    aria-pressed={p.liked}
                    className={p.liked ? "liked" : ""}
                    onClick={() =>
                      setState((s) => ({
                        ...s,
                        posts: s.posts.map((x) =>
                          x.id === p.id ? { ...x, liked: !x.liked } : x,
                        ),
                      }))
                    }
                  >
                    <Icon name="heart" size={18} />
                    {p.liked ? "Você curtiu" : "Curtir"}
                  </button>
                  <button
                    aria-expanded={openReply === p.id}
                    onClick={() => setOpenReply(openReply === p.id ? "" : p.id)}
                  >
                    <Icon name="message" size={18} />
                    Responder{p.replies.length ? ` (${p.replies.length})` : ""}
                  </button>
                </footer>
                {p.replies.map((r, i) => (
                  <div className="post-reply" key={i}>
                    <strong>Você</strong>
                    <p>{r}</p>
                  </div>
                ))}
                {openReply === p.id && (
                  <form
                    className="inline-compose"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!reply[p.id]?.trim()) return;
                      setState((s) => ({
                        ...s,
                        posts: s.posts.map((x) =>
                          x.id === p.id
                            ? {
                                ...x,
                                replies: [...x.replies, reply[p.id].trim()],
                              }
                            : x,
                        ),
                      }));
                      setReply({ ...reply, [p.id]: "" });
                    }}
                  >
                    <input
                      autoFocus
                      required
                      value={reply[p.id] || ""}
                      onChange={(e) =>
                        setReply({ ...reply, [p.id]: e.target.value })
                      }
                      aria-label={`Responder a ${p.author}`}
                      placeholder="Escreva sua resposta"
                      maxLength={1000}
                    />
                    <button
                      className="icon-button"
                      type="submit"
                      disabled={!reply[p.id]?.trim()}
                      aria-label="Publicar resposta"
                    >
                      <Icon name="send" />
                    </button>
                  </form>
                )}
              </article>
            ))}
          </div>
          {!posts.length && (
            <Empty
              title="Suas trocas começam aqui"
              text={
                tab === "Salvos"
                  ? "Salve uma publicação para encontrar aqui depois."
                  : "Compartilhe uma ideia com a comunidade."
              }
            />
          )}
        </>
      )}
      <Note icon="users">
        Comunidade de demonstração. Suas publicações e respostas ficam neste
        navegador.
      </Note>
    </>
  );
}
export function CommunicationScreen() {
  const { state, setState, toast } = useSinalis();
  const [mode, setMode] = useState("Texto");
  const [draft, setDraft] = useState("");
  const send = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    setState((s) => ({ ...s, messages: [...s.messages, draft.trim()] }));
    setDraft("");
  };
  return (
    <>
      <Title
        eyebrow="DO SEU JEITO"
        title="Comunicação que aproxima"
        subtitle="Escolha uma forma confortável de se expressar."
      />
      <div className="communication-layout">
        <div className="chat-card">
          <header>
            <span className="round-icon">
              <Icon name="message" />
            </span>
            <div>
              <strong>Espaço de conversa</strong>
              <small>Demonstração · sem participante conectado</small>
            </div>
          </header>
          <Tabs
            options={["Texto", "Libras", "Áudio"]}
            value={mode}
            onChange={setMode}
          />
          {mode === "Texto" ? (
            <>
              <div className="chat-messages" aria-live="polite">
                <div className="chat-date">CONVERSA DE EXEMPLO</div>
                <div className="bubble received">
                  Olá! Qual a melhor forma de conversarmos?
                </div>
                {state.messages.map((m, i) => (
                  <div key={i} className="bubble sent">
                    {m}
                    <small>
                      Mensagem de demonstração
                      <Icon name="check" size={12} />
                    </small>
                  </div>
                ))}
              </div>
              <form className="chat-compose" onSubmit={send}>
                <input
                  aria-label="Sua mensagem"
                  placeholder="Escreva sua mensagem"
                  maxLength={1000}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <button
                  type="submit"
                  aria-label="Adicionar mensagem à conversa"
                  disabled={!draft.trim()}
                >
                  <Icon name="send" />
                </button>
              </form>
            </>
          ) : (
            <div className="communication-mode">
              <span className="mode-icon">
                <Icon name={mode === "Libras" ? "video" : "mic"} size={45} />
              </span>
              <h2>
                {mode === "Libras"
                  ? "Uma conversa em Libras."
                  : "Sua voz, com apoio visual."}
              </h2>
              <p>
                {mode === "Libras"
                  ? "Este canal está previsto para chamadas em vídeo com Libras."
                  : "Este canal está previsto para áudio com transcrição."}{" "}
                Nesta demonstração, você pode experimentar a conversa por texto.
              </p>
              <Button onClick={() => setMode("Texto")}>
                Conversar por texto
                <Icon name="message" size={18} />
              </Button>
            </div>
          )}
        </div>
        <aside>
          <Note icon="hand">
            <strong>A melhor forma é a que funciona para você.</strong>
            <p>
              Pergunte como a outra pessoa prefere conversar e combinem os
              recursos necessários.
            </p>
          </Note>
          <Button
            variant="outline"
            onClick={() => {
              setMode("Texto");
              toast("Texto selecionado como canal de conversa.");
            }}
          >
            Usar comunicação por texto
          </Button>
        </aside>
      </div>
    </>
  );
}
