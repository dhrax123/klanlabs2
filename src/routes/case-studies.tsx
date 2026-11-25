import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Band, Btn, Crumbs, Eyebrow, Words } from "@/components/kl/Kit";
import { CASE_STUDIES, EXAMPLES } from "@/content/site";
import { SOLUTIONS } from "@/content/solutions";
import { usePageMotion } from "@/components/kl/useMotion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/case-studies")({
  head: () =>
    seo({
      path: "/case-studies",
      title: "Case Studies & Example Workflows | KlanLabs",
      description: "See the kinds of AI automation, AI agent and sales systems KlanLabs builds. Client case studies are published once results are verified.",
    }),
  component: CaseStudies,
});

function CaseStudies() {
  usePageMotion();
  return (
    <>
      <section className="kl-phero">
        <div className="kl-wrap">
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "Case Studies" }]} />
          <div className="kl-phero-grid">
            <div style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">Case studies</Eyebrow>
              <Words as="h1" className="kl-h1" text="Real systems." accent="Verified results only." />
            </div>
            <div className="kl-phero-side kl-reveal">
              <p>We only publish a case study once its results are verified — no invented numbers, logos or testimonials.</p>
              <p className="kl-p">Until then, here are the kinds of workflows we design and build.</p>
            </div>
          </div>
        </div>
      </section>

      {CASE_STUDIES.length === 0 ? (
        <section className="kl-panel kl-sec is-tight">
          <div className="kl-wrap">
            <div className="kl-empty kl-reveal">
              <Eyebrow>Coming soon</Eyebrow>
              <h2 className="kl-h3" style={{ fontSize: "clamp(26px,2.6vw,38px)", letterSpacing: "-.04em" }}>Client case studies are being written up.</h2>
              <p className="kl-p" style={{ maxWidth: 620 }}>Want to see a system like yours? Book a call and we'll walk you through relevant workflows in detail.</p>
              <Btn to="/contact">Book a Discovery Call</Btn>
            </div>
          </div>
        </section>
      ) : null}

      <section className="kl-panel kl-sec">
        <div className="kl-wrap">
          <div className="kl-head">
            <Eyebrow className="kl-reveal">Example workflows</Eyebrow>
            <Words className="kl-h2" text="Imagine if your business ran like this." />
          </div>
          <div className="kl-solrows">
            {EXAMPLES.map((e, k) => {
              const sol = SOLUTIONS.find((s) => s.slug === e.solution)!;
              return (
                <Link key={e.title} to="/solutions/$slug" params={{ slug: sol.slug }} className="kl-solrow kl-reveal" style={{ "--d": `${(k % 3) * 0.05}s` } as CSSProperties}>
                  <div className="kl-solrow-media"><img src={e.image} alt="" loading="lazy" /></div>
                  <div className="kl-solrow-body">
                    <div style={{ display: "grid", gap: 14 }}>
                      <span className="kl-eyebrow">{sol.name}</span>
                      <h3 style={{ fontSize: "clamp(26px,2.8vw,42px)" }}>{e.title}</h3>
                      <p className="kl-p" style={{ maxWidth: 640 }}>{e.text}</p>
                    </div>
                    <span className="kl-link">View_solution<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.1" /></svg></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Band title="Your workflow could be the next one here." button="Build Your AI Solution" />
    </>
  );
}
