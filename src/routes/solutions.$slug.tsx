import { createFileRoute, notFound } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Band, Btn, Crumbs, Eyebrow, Faq, LinkBtn, Steps, Words } from "@/components/kl/Kit";
import { Flow } from "@/components/kl/Widgets";
import { SOLUTIONS, solutionBySlug, type Block } from "@/content/solutions";
import { usePageMotion } from "@/components/kl/useMotion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const s = solutionBySlug(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData }) =>
    loaderData
      ? seo({ path: `/solutions/${loaderData.slug}`, title: loaderData.seo.title, description: loaderData.seo.description, image: loaderData.image })
      : {},
  component: SolutionPage,
});

function SolutionPage() {
  usePageMotion();
  const s = Route.useLoaderData();
  const idx = SOLUTIONS.findIndex((x) => x.slug === s.slug);
  const next = SOLUTIONS[(idx + 1) % SOLUTIONS.length]!;
  /* alternate panel colours down the page so every section reads as its own block */
  let tone = 0;

  return (
    <>
      <section className="kl-phero">
        <div className="kl-wrap">
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "Solutions", to: "/solutions" }, { label: s.name }]} />
          <div className="kl-phero-grid">
            <div style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">{s.hero.eyebrow}</Eyebrow>
              <Words as="h1" className="kl-h1" text={s.hero.title} accent={s.hero.accent} />
            </div>
            <div className="kl-phero-side kl-reveal" style={{ "--d": ".35s" } as CSSProperties}>
              {s.hero.body.map((p) => <p key={p}>{p}</p>)}
              <div className="kl-phero-cta">
                <Btn to="/contact">{s.hero.primary}</Btn>
                <LinkBtn to={`/solutions/${s.slug}`} hash="what-we-offer">{s.hero.secondary}</LinkBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Flow label={s.flow.label} nodes={s.flow.nodes} image={s.image} />

      {s.blocks.map((b, k) => {
        const panel = b.type === "scenarios" ? "is-dark" : tone++ % 2 === 0 ? "" : "is-white";
        return <BlockView key={k} b={b} panel={panel} />;
      })}

      <section className="kl-sec is-tight">
        <div className="kl-wrap" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
          <div style={{ display: "grid", gap: 10 }}>
            <Eyebrow>Next solution</Eyebrow>
            <p className="kl-h3" style={{ fontSize: "clamp(28px,3vw,44px)", letterSpacing: "-.04em" }}>{next.name}</p>
          </div>
          <LinkBtn to={`/solutions/${next.slug}`}>View_solution</LinkBtn>
        </div>
      </section>

      <Band title={s.cta.title} text={s.cta.text} button={s.cta.button} image={s.slug === "custom-ai-agents" ? "/img/red-flow.jpg" : "/img/cta-band.jpg"} />
    </>
  );
}

function Head({ eyebrow, title, intro, dark }: { eyebrow: string; title: string; intro?: string | undefined; dark?: boolean }) {
  return (
    <div className="kl-head">
      <Eyebrow className="kl-reveal">{eyebrow}</Eyebrow>
      <Words className="kl-h2" text={title} />
      {intro ? <p className={`kl-p kl-reveal${dark ? "" : ""}`} style={{ maxWidth: 640 }}>{intro}</p> : null}
    </div>
  );
}

function BlockView({ b, panel }: { b: Block; panel: string }) {
  const wrapClass = panel === "" ? "kl-panel kl-sec" : panel === "is-white" ? "kl-sec" : `kl-panel ${panel} kl-sec`;
  switch (b.type) {
    case "problem":
      return (
        <section className={wrapClass}>
          <div className="kl-wrap kl-problem">
            <div className="kl-sticky" style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">{b.eyebrow}</Eyebrow>
              <Words className="kl-h2" text={b.title} />
              <div className="kl-problem-body kl-reveal">{b.body.map((p) => <p key={p} className="kl-p">{p}</p>)}</div>
            </div>
            <div>
              <ul className="kl-points">
                {b.points.map((p, k) => (
                  <li key={p} className="kl-point kl-reveal" style={{ "--d": `${k * 0.05}s` } as CSSProperties}><i aria-hidden="true">✕</i>{p}</li>
                ))}
              </ul>
              {b.closing ? <p className="kl-closing kl-reveal">{b.closing.split(". ").length > 1 ? <>{b.closing.split(". ")[0]}. <span>{b.closing.split(". ").slice(1).join(". ")}</span></> : b.closing}</p> : null}
            </div>
          </div>
        </section>
      );
    case "solution":
      return (
        <section className={wrapClass}>
          <div className="kl-wrap kl-split">
            <div className="kl-split-body">
              <Eyebrow className="kl-reveal">{b.eyebrow}</Eyebrow>
              <Words className="kl-h2" text={b.title} />
              {b.body.map((p) => <p key={p} className="kl-p kl-reveal">{p}</p>)}
              <div className="kl-reveal"><Btn to="/contact">Talk to an AI Specialist</Btn></div>
            </div>
            <div className="kl-split-media kl-reveal"><img src={b.image} alt="" loading="lazy" data-parallax="5" /></div>
          </div>
        </section>
      );
    case "cards":
      return (
        <section className={wrapClass} id="what-we-offer">
          <div className="kl-wrap">
            <Head eyebrow={b.eyebrow} title={b.title} intro={b.intro} />
            <ul className={`kl-cards${b.items.length === 8 ? " is-four" : ""}`}>
              {b.items.map((it, k) => (
                <li key={it.title} className="kl-ncard kl-reveal" style={{ "--d": `${(k % 4) * 0.06}s` } as CSSProperties}>
                  <div><h3>{it.title}</h3><p>{it.text}</p></div>
                </li>
              ))}
            </ul>
            {b.note ? <p className="kl-note kl-sec-note">{b.note}</p> : null}
          </div>
        </section>
      );
    case "scenarios":
      return (
        <section className={wrapClass}>
          <div className="kl-wrap">
            <Head eyebrow={b.eyebrow} title={b.title} dark />
            <ul className={`kl-scen${b.items.length > 4 ? " is-many" : ""}`}>
              {b.items.map((it, k) => (
                <li key={it.title} className="kl-scen-item kl-reveal" style={{ "--d": `${(k % 3) * 0.06}s` } as CSSProperties}>
                  <span className="kl-eyebrow">{String(k + 1).padStart(2, "0")}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    case "steps":
      return (
        <section className={wrapClass}>
          <div className="kl-wrap">
            <Head eyebrow={b.eyebrow} title={b.title} />
            <Steps items={b.items} six />
          </div>
        </section>
      );
    case "chips":
      return (
        <section className={wrapClass}>
          <div className="kl-wrap">
            <Head eyebrow={b.eyebrow} title={b.title} intro={b.intro} />
            <ul className="kl-chips">
              {b.items.map((c, k) => (
                <li key={c} className="kl-chip kl-reveal" style={{ "--d": `${k * 0.03}s` } as CSSProperties}><i aria-hidden="true">✓</i>{c}</li>
              ))}
            </ul>
            {b.note ? <p className="kl-note kl-sec-note">{b.note}</p> : null}
          </div>
        </section>
      );
    case "groups":
      return (
        <section className={wrapClass}>
          <div className="kl-wrap">
            <Head eyebrow={b.eyebrow} title={b.title} intro={b.intro} />
            <div className="kl-groups">
              {b.groups.map((g, k) => (
                <div key={g.label} className="kl-group kl-reveal" style={{ "--d": `${(k % 3) * 0.06}s` } as CSSProperties}>
                  <h3>{g.label}</h3>
                  <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            {b.note ? <p className="kl-note kl-sec-note">{b.note}</p> : null}
          </div>
        </section>
      );
    case "faq":
      return (
        <section className={wrapClass}>
          <div className="kl-wrap"><Faq items={b.items} eyebrow={b.eyebrow} title={b.title} /></div>
        </section>
      );
  }
}
