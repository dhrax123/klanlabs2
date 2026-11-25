import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { FOOTER, NAV } from "@/content/site";
import { SOLUTIONS } from "@/content/solutions";
import { SITE } from "@/lib/seo";
import { Arrow, Btn, Corner } from "./Kit";

export const Logo = () => (
  <Link to="/" className="kl-logo" aria-label="KlanLabs home">
    klan<b>labs</b><i aria-hidden="true" />
  </Link>
);

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);

  useEffect(() => { setMega(false); setDrawer(false); }, [pathname]);
  useEffect(() => {
    if (!mega) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !megaRef.current?.contains(e.target as Node)) setMega(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", close); };
  }, [mega]);
  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
  }, [drawer]);

  const active = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <>
      <header className="kl-header">
        <div className="kl-bar">
          <Logo />
          <ul className="kl-nav">
            {NAV.map((n) =>
              "children" in n ? (
                <li key={n.label} ref={megaRef} className={mega ? "is-open" : ""} onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
                  <button type="button" aria-expanded={mega} aria-haspopup="true" onClick={() => setMega((m) => !m)} className={active(n.to) ? "is-active" : ""} style={active(n.to) ? { background: "#2c2c2e" } : undefined}>
                    {n.label}
                    <svg viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" /></svg>
                  </button>
                  <div className="kl-mega">
                    {n.children.map((c) => (
                      <Link key={c.to} to={c.to as "/"}>{c.label}<span>{c.line}</span></Link>
                    ))}
                    <Link to="/solutions" className="is-all">All solutions <Arrow className="kl-arrow" /></Link>
                  </div>
                </li>
              ) : (
                <li key={n.label}><Link to={n.to as "/"} className={active(n.to) ? "is-active" : ""}>{n.label}</Link></li>
              ),
            )}
          </ul>
          <div className="kl-cta"><Link to="/contact" className="kl-link">Book a call<Corner /></Link></div>
          <button type="button" className={`kl-burger${drawer ? " is-on" : ""}`} aria-label={drawer ? "Close menu" : "Open menu"} aria-expanded={drawer} onClick={() => setDrawer((d) => !d)}>
            <span /><span />
          </button>
        </div>
      </header>
      <div className={`kl-drawer${drawer ? " is-on" : ""}`} aria-hidden={!drawer}>
        <nav aria-label="Mobile">
          {NAV.map((n) =>
            "children" in n ? (
              <details key={n.label}>
                <summary>{n.label}<span aria-hidden="true">+</span></summary>
                <Link to="/solutions">All solutions</Link>
                {n.children.map((c) => <Link key={c.to} to={c.to as "/"}>{c.label}</Link>)}
              </details>
            ) : (
              <Link key={n.label} to={n.to as "/"}>{n.label}<span aria-hidden="true">↗</span></Link>
            ),
          )}
        </nav>
        <Btn to="/contact">Book a Discovery Call</Btn>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="kl-footer">
      <div className="kl-wrap">
        <div className="kl-foot-top">
          <div style={{ display: "grid", gap: 26, alignContent: "start" }}>
            <span style={{ color: "#fff" }}><Logo /></span>
            <p className="kl-foot-claim">{FOOTER.title}</p>
            <p style={{ maxWidth: 460, color: "#b9babd", fontSize: 15, lineHeight: 1.75 }}>{FOOTER.text}</p>
          </div>
          <div className="kl-foot-cols">
            <div>
              <h3>Explore</h3>
              {FOOTER.explore.map((l) => <Link key={l.to} to={l.to as "/"}>{l.label}</Link>)}
            </div>
            <div>
              <h3>Solutions</h3>
              {SOLUTIONS.map((s) => <Link key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }}>{s.name}</Link>)}
            </div>
            <div>
              <h3>Email</h3>
              <a className="u" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <h3 style={{ marginTop: 26 }}>Based in</h3>
              <p>{SITE.city}</p>
            </div>
            <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
              <h3 style={{ margin: 0 }}>{FOOTER.cta}</h3>
              <Link to="/contact" className="kl-link" style={{ color: "#fff", justifySelf: "start" }}>Book a call<Corner /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="kl-foot-bar">
        <span>© {new Date().getFullYear()} KlanLabs. All rights reserved.</span>
        <span>{SITE.tagline}</span>
      </div>
    </footer>
  );
}

export function ToTop() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > 700);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const up = () => {
    const lenis = (window as unknown as { __kl?: { scrollTo: (n: number) => void } }).__kl;
    if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button type="button" className={`kl-top${on ? " is-on" : ""}`} onClick={up} aria-label="Back to top">
      <svg viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 7l5-5 5 5" stroke="currentColor" strokeWidth="1.6" /></svg>
    </button>
  );
}
