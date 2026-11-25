import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Band, Crumbs, Eyebrow, Words } from "@/components/kl/Kit";
import { SOLUTIONS } from "@/content/solutions";
import { BRAND } from "@/content/site";
import { usePageMotion } from "@/components/kl/useMotion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions/")({
  head: () =>
    seo({
      path: "/solutions",
      title: "AI Solutions for Businesses | KlanLabs",
      description: "AI automation, AI lead generation, custom AI agents, CRM & sales automation and AI workshops — intelligent systems built around how your business works.",
    }),
  component: Solutions,
});

function Solutions() {
  usePageMotion();
  return (
    <>
      <section className="kl-phero">
        <div className="kl-wrap">
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "Solutions" }]} />
          <div className="kl-phero-grid">
            <div style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">Solutions</Eyebrow>
              <Words as="h1" className="kl-h1" text="Intelligent systems for every part of" accent="your business." />
            </div>
            <div className="kl-phero-side kl-reveal">
              <p>{BRAND.message}</p>
              <p className="kl-p">Pick the problem you want to solve first. Every solution connects to the tools you already use, and to each other.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kl-panel kl-sec is-tight">
        <div className="kl-wrap">
          <div className="kl-solrows" style={{ marginTop: 0 }}>
            {SOLUTIONS.map((s, k) => (
              <Link key={s.slug} to="/solutions/$slug" params={{ slug: s.slug }} className="kl-solrow kl-reveal" style={{ "--d": `${k * 0.05}s` } as CSSProperties}>
                <div className="kl-solrow-media"><img src={s.image} alt="" loading={k > 1 ? "lazy" : undefined} /></div>
                <div className="kl-solrow-body">
                  <div style={{ display: "grid", gap: 16 }}>
                    <span className="kl-eyebrow">{String(k + 1).padStart(2, "0")}</span>
                    <h3>{s.name}</h3>
                    <p className="kl-p" style={{ maxWidth: 620 }}>{s.line}</p>
                  </div>
                  <span className="kl-link">View_solution<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.1" /></svg></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Band title="Not sure where to start?" text="Book a discovery call. We'll look at how your business runs today and point out where AI would make the biggest difference." button="Get Your AI Assessment" />
    </>
  );
}
