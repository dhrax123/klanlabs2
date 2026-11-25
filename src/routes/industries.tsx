import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Band, Crumbs, Eyebrow, Words } from "@/components/kl/Kit";
import { INDUSTRIES } from "@/content/site";
import { SOLUTIONS } from "@/content/solutions";
import { usePageMotion } from "@/components/kl/useMotion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () =>
    seo({
      path: "/industries",
      title: "Industries We Serve | KlanLabs",
      description: "AI automation, AI agents and sales systems for healthcare, real estate, ecommerce, education, financial services, recruitment, SaaS and more.",
    }),
  component: Industries,
});

function Industries() {
  usePageMotion();
  return (
    <>
      <section className="kl-phero">
        <div className="kl-wrap">
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "Industries" }]} />
          <div className="kl-phero-grid">
            <div style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">Industries</Eyebrow>
              <Words as="h1" className="kl-h1" text="Built for the way" accent="your industry works." />
            </div>
            <div className="kl-phero-side kl-reveal">
              <p>Every industry has its own repetitive work — enquiries, bookings, follow-ups, documents and reports.</p>
              <p className="kl-p">We design systems around those everyday jobs, using the tools your team already relies on.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kl-panel kl-sec is-tight">
        <div className="kl-wrap">
          <ul className="kl-inds" style={{ marginTop: 0 }}>
            {INDUSTRIES.map((ind, k) => (
              <li key={ind.name} className="kl-ind kl-reveal" style={{ "--d": `${(k % 3) * 0.06}s` } as CSSProperties}>
                <div style={{ display: "grid", gap: 12 }}>
                  <span className="kl-eyebrow">{String(k + 1).padStart(2, "0")}</span>
                  <h2 className="kl-h3" style={{ fontSize: 30, letterSpacing: "-.04em" }}>{ind.name}</h2>
                  <p className="kl-p" style={{ fontSize: 15, lineHeight: 1.7 }}>{ind.text}</p>
                </div>
                <ul aria-label={`Solutions for ${ind.name}`}>
                  {ind.solutions.map((slug) => {
                    const s = SOLUTIONS.find((x) => x.slug === slug)!;
                    return <li key={slug}><Link to="/solutions/$slug" params={{ slug }}>{s.name}</Link></li>;
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Band title="Don't see your industry?" text="If your team repeats the same tasks every day, there's usually a system that can take them on. Tell us how your business works." button="Let's Talk About Your Business" />
    </>
  );
}
