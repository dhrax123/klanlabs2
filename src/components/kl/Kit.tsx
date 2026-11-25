import { Link } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export const Arrow = ({ className = "kl-arrow" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 14" fill="none" aria-hidden="true">
    <path d="M0 7h46M40 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const Corner = () => (
  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

type To = { to: string; children: ReactNode; className?: string; hash?: string };

/** Solid red call to action with the long arrow. */
export function Btn({ to, children, className = "" }: To) {
  if (to.startsWith("http") || to.startsWith("mailto:")) {
    return <a href={to} className={`kl-btn ${className}`}>{children}<Arrow /></a>;
  }
  return <Link to={to as "/"} className={`kl-btn ${className}`}>{children}<Arrow /></Link>;
}

/** Gradient-outline secondary link ("EXPLORE_MORE" style). */
export function LinkBtn({ to, children, className = "", hash }: To) {
  return <Link to={to as "/"} {...(hash ? { hash } : {})} className={`kl-link ${className}`}>{children}<Corner /></Link>;
}

export const Eyebrow = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`kl-eyebrow ${className}`}>{String(children).toLowerCase().replace(/ & /g, "_&_").replace(/\s+/g, "_")}</span>
);

/** Heading whose words rise in one after another when it scrolls into view. */
export function Words({ text, accent, as: Tag = "h2", className = "" }: { text: string; accent?: string | undefined; as?: "h1" | "h2"; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  /* one continuous gradient across the heading: every accent word shows its own slice of it */
  useEffect(() => {
    const h = ref.current;
    if (!h || !accent) return;
    const paint = () => {
      const w = h.offsetWidth;
      h.querySelectorAll<HTMLElement>(".w.kl-grad").forEach((el) => {
        el.style.backgroundSize = `${w}px 100%`;
        el.style.backgroundPosition = `${-el.offsetLeft}px 0`;
      });
    };
    paint();
    const ro = new ResizeObserver(paint);
    ro.observe(h);
    return () => ro.disconnect();
  }, [accent]);
  let i = 0;
  const split = (s: string, grad?: boolean) =>
    s.split(" ").map((w, k, all) => {
      const idx = i++;
      return (
        <Fragment key={`${grad ? "g" : "t"}${k}`}>
          <span className={`w${grad ? " kl-grad" : ""}`} style={{ "--i": idx } as CSSProperties}>{w}</span>
          {k < all.length - 1 ? " " : null}
        </Fragment>
      );
    });
  return (
    <Tag ref={ref} className={`kl-words ${className}`} aria-label={accent ? `${text} ${accent}` : text}>
      <span aria-hidden="true">
        {split(text)}
        {accent ? <> {split(accent, true)}</> : null}
      </span>
    </Tag>
  );
}

export function Faq({ items, eyebrow = "FAQ", title }: { items: readonly { q: string; a: string }[]; eyebrow?: string; title: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="kl-faq">
      <div className="kl-head kl-reveal" style={{ alignContent: "start" }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="kl-h2" style={{ fontSize: "clamp(34px,4.2vw,60px)" }}>{title}</h2>
      </div>
      <div className="kl-faq-list kl-reveal">
        {items.map((it, k) => (
          <div key={it.q} className={`kl-faq-item${open === k ? " is-open" : ""}`}>
            <button type="button" className="kl-faq-q" aria-expanded={open === k} onClick={() => setOpen(open === k ? null : k)}>
              {it.q}
              <i aria-hidden="true" />
            </button>
            <div className="kl-faq-a"><div><p>{it.a}</p></div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Steps({ items, six }: { items: readonly { title: string; text: string }[]; six?: boolean }) {
  return (
    <ol className={`kl-steps${six && items.length === 6 ? " is-six" : ""}`}>
      {items.map((s, k) => (
        <li key={s.title} className="kl-step kl-reveal" style={{ "--d": `${k * 0.06}s` } as CSSProperties}>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Full-bleed image band that closes every page. */
export function Band({ title, text, button, to = "/contact", image = "/img/cta-band.jpg" }: { title: string; text?: string; button: string; to?: string; image?: string }) {
  return (
    <section className="kl-band" aria-label="Get started">
      <img src={image} alt="" data-parallax="8" loading="lazy" />
      <div className="kl-band-in">
        <div style={{ display: "grid", gap: 20 }}>
          <Words text={title} className="kl-h2" />
          {text ? <p className="kl-reveal">{text}</p> : null}
        </div>
        <div className="kl-reveal"><Btn to={to} className="is-white">{button}</Btn></div>
      </div>
    </section>
  );
}

export function Crumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="kl-crumbs" aria-label="Breadcrumb">
      {items.map((c, k) => (
        <Fragment key={c.label}>
          {k ? <span aria-hidden="true">/</span> : null}
          {c.to ? <Link to={c.to as "/"}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
        </Fragment>
      ))}
    </nav>
  );
}
