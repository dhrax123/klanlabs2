import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Corner, Eyebrow } from "./Kit";

/* ---------------- Live workflow demo: nodes light up in order, loop forever ---------------- */
export function Flow({ label, nodes, image }: { label: string; nodes: { title: string; text: string }[]; image: string }) {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setStep(nodes.length - 1); return; }
    let timer = 0;
    let visible = false;
    const io = new IntersectionObserver(([e]) => { visible = !!e?.isIntersecting; });
    if (ref.current) io.observe(ref.current);
    timer = window.setInterval(() => { if (visible) setStep((s) => (s + 1) % (nodes.length + 1)); }, 1500);
    return () => { clearInterval(timer); io.disconnect(); };
  }, [nodes.length]);
  const at = Math.min(step, nodes.length - 1);
  return (
    <section ref={ref} className="kl-flowwrap" aria-label={`Workflow example: ${label}`}>
      <img src={image} alt="" data-parallax="6" />
      <div className="kl-flow-in">
        <div className="kl-flow-top">
          <Eyebrow>Workflow</Eyebrow>
          <span className="kl-live">{label}</span>
        </div>
        <div>
          <ol className="kl-flow" style={{ "--n": nodes.length } as CSSProperties}>
            {nodes.map((n, k) => (
              <li key={n.title} className={`kl-flow-node${k === at && step < nodes.length ? " is-on" : ""}${k < step ? " is-done" : ""}`}>
                <b>{String(k + 1).padStart(2, "0")}</b>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </li>
            ))}
          </ol>
          <div className="kl-flow-bar" aria-hidden="true"><i style={{ width: `${(Math.min(step + 1, nodes.length) / nodes.length) * 100}%` }} /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Voice agent demo: real speech in the browser ---------------- */
const VOICES = [
  { name: "Aarav", lang: "en-IN", label: "English · India", line: "Hi, thanks for calling. I'm the virtual receptionist. I can answer your questions, take your details or book an appointment for you. How can I help today?" },
  { name: "Emma", lang: "en-GB", label: "English · UK", line: "Hello, thank you for calling. I'm the virtual receptionist. I can answer questions, take a message or book you in. How can I help?" },
  { name: "Olivia", lang: "en-US", label: "English · US", line: "Hi there, thanks for calling. I'm the virtual receptionist — I can answer questions, take your details or set up an appointment. What can I do for you?" },
  { name: "Ananya", lang: "hi-IN", label: "Hindi", line: "नमस्ते, कॉल करने के लिए धन्यवाद। मैं वर्चुअल रिसेप्शनिस्ट हूँ। मैं आपके सवालों का जवाब दे सकती हूँ या अपॉइंटमेंट बुक कर सकती हूँ। मैं आपकी कैसे मदद करूँ?" },
  { name: "Lucía", lang: "es-ES", label: "Spanish", line: "Hola, gracias por llamar. Soy la recepcionista virtual. Puedo responder a sus preguntas o reservar una cita. ¿En qué puedo ayudarle?" },
  { name: "Camille", lang: "fr-FR", label: "French", line: "Bonjour, merci de votre appel. Je suis la réceptionniste virtuelle. Je peux répondre à vos questions ou prendre un rendez-vous. Comment puis-je vous aider ?" },
  { name: "Lena", lang: "de-DE", label: "German", line: "Hallo, danke für Ihren Anruf. Ich bin die virtuelle Rezeptionistin. Ich beantworte Ihre Fragen oder vereinbare einen Termin. Wie kann ich helfen?" },
  { name: "Layla", lang: "ar-SA", label: "Arabic", line: "مرحباً، شكراً لاتصالك. أنا موظفة الاستقبال الافتراضية. يمكنني الإجابة عن أسئلتك أو حجز موعد لك. كيف يمكنني مساعدتك؟" },
];

export function VoiceDemo({ image }: { image: string }) {
  const [active, setActive] = useState<number | null>(null);
  const [supported, setSupported] = useState(true);
  const [available, setAvailable] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!("speechSynthesis" in window)) { setSupported(false); return; }
    const load = () => {
      const langs = new Set(window.speechSynthesis.getVoices().map((v) => v.lang.toLowerCase().slice(0, 2)));
      setAvailable(langs);
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => { window.speechSynthesis.removeEventListener("voiceschanged", load); window.speechSynthesis.cancel(); };
  }, []);

  const play = (k: number) => {
    const synth = window.speechSynthesis;
    synth.cancel();
    if (active === k) { setActive(null); return; }
    const v = VOICES[k]!;
    const u = new SpeechSynthesisUtterance(v.line);
    u.lang = v.lang;
    const all = synth.getVoices();
    u.voice = all.find((x) => x.lang.toLowerCase() === v.lang.toLowerCase()) ?? all.find((x) => x.lang.toLowerCase().startsWith(v.lang.slice(0, 2))) ?? null;
    u.rate = 1;
    u.onend = () => setActive((a) => (a === k ? null : a));
    u.onerror = () => setActive((a) => (a === k ? null : a));
    setActive(k);
    synth.speak(u);
  };

  const cur = active === null ? null : VOICES[active];
  const hasLang = (lang: string) => available.size === 0 || available.has(lang.slice(0, 2));

  return (
    <div>
      <div className="kl-voice-stage" aria-live="polite">
        <img src={image} alt="" loading="lazy" />
        <div className="kl-voice-meta">
          <span>{cur ? `${cur.name} · ${cur.label}` : "AI voice receptionist"}</span>
          <span>{cur ? "speaking" : supported ? "pick a language" : "audio not supported here"}</span>
        </div>
        <div>
          <div className={`kl-wave${cur ? " is-on" : ""}`} aria-hidden="true">
            {Array.from({ length: 48 }, (_, i) => (
              <i key={i} style={{ "--i": i, "--h": `${30 + ((i * 37) % 70)}%`, backgroundPosition: `${(i / 47) * 100}% 0` } as CSSProperties} />
            ))}
          </div>
          <p className="kl-voice-line" dir={cur?.lang.startsWith("ar") ? "rtl" : undefined}>{cur ? cur.line : "“Hi, thanks for calling. How can I help today?”"}</p>
        </div>
      </div>
      <div className="kl-voice-list">
        {VOICES.map((v, k) => (
          <button key={v.lang} type="button" className="kl-voice-btn" aria-pressed={active === k} disabled={!supported || !hasLang(v.lang)} onClick={() => play(k)} title={hasLang(v.lang) ? `Play ${v.label} sample` : `${v.label} voice isn't installed on this device`}>
            <span>{v.name}<small>{v.label}</small></span>
            <span className="kl-voice-ico" aria-hidden="true">
              {active === k ? (
                <svg width="12" height="12" viewBox="0 0 12 12"><rect x="1" y="1" width="3.5" height="10" rx="1" fill="currentColor" /><rect x="7.5" y="1" width="3.5" height="10" rx="1" fill="currentColor" /></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 1l9 5-9 5z" fill="currentColor" /></svg>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Big numbered list with a cursor-following preview ---------------- */
export function BigList({ items }: { items: { title: string; text: string; image: string; to: string }[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const float = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  useEffect(() => {
    let raf = 0;
    const move = (e: MouseEvent) => { pos.current.tx = e.clientX; pos.current.ty = e.clientY; };
    const loop = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.16; p.y += (p.ty - p.y) * 0.16;
      if (float.current) { float.current.style.left = `${p.x + 180}px`; float.current.style.top = `${p.y}px`; }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div className="kl-biglist" onMouseLeave={() => setHover(null)}>
      {items.map((it, k) => (
        <Link key={it.to} to={it.to as "/"} className="kl-bigrow kl-reveal" style={{ "--d": `${k * 0.05}s` } as CSSProperties} onMouseEnter={() => setHover(k)}>
          <span className="n">{String(k + 1).padStart(2, "0")}</span>
          <span className="t">{it.title}</span>
          <span className="d">{it.text}</span>
        </Link>
      ))}
      <div ref={float} className={`kl-float${hover !== null ? " is-on" : ""}`} aria-hidden="true">
        {items.map((it, k) => (
          <img key={it.to} src={it.image} alt="" style={{ position: "absolute", inset: 0, opacity: hover === k ? 1 : 0, transition: "opacity .35s" }} />
        ))}
        {hover !== null ? <p>{items[hover]?.text}</p> : null}
      </div>
    </div>
  );
}

/* ---------------- Card slider with arrows (hook: returns the arrows and the track) ---------------- */
export function useSlider({ items, tone = "dark" }: { items: { title: string; text: string; image: string; tag?: string | undefined; to?: string | undefined }[]; tone?: "dark" | "light" }) {
  const track = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const update = () => {
    const t = track.current;
    if (!t) return;
    setEdge({ start: t.scrollLeft < 8, end: t.scrollLeft + t.clientWidth > t.scrollWidth - 8 });
  };
  useEffect(() => { update(); }, []);
  const go = (dir: number) => {
    const t = track.current;
    if (!t) return;
    const card = t.querySelector<HTMLElement>(".kl-card");
    t.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 12), behavior: "smooth" });
  };
  return { arrows: (
    <div className="kl-arrows" style={{ color: tone === "dark" ? "#fff" : "#111" }}>
      <button type="button" aria-label="Previous" disabled={edge.start} onClick={() => go(-1)}><svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M15 5H1m4-4L1 5l4 4" stroke="currentColor" strokeWidth="1.3" /></svg></button>
      <button type="button" aria-label="Next" disabled={edge.end} onClick={() => go(1)}><svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5h14m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.3" /></svg></button>
    </div>
  ), track: (
    <div className="kl-track" ref={track} onScroll={update}>
      {items.map((it) => {
        const body = (
          <>
            <img src={it.image} alt="" loading="lazy" />
            {it.tag ? <span className="kl-card-tag">{it.tag}</span> : null}
            <div className="kl-card-body"><h3>{it.title}</h3><p>{it.text}</p></div>
          </>
        );
        return it.to ? (
          <Link key={it.title} to={it.to as "/"} className="kl-card">{body}</Link>
        ) : (
          <article key={it.title} className="kl-card" tabIndex={0}>{body}</article>
        );
      })}
    </div>
  ) };
}

export const MoreLink = ({ to, children }: { to: string; children: string }) => (
  <Link to={to as "/"} className="kl-link">{children}<Corner /></Link>
);
