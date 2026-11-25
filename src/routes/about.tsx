import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Band, Btn, Crumbs, Eyebrow, Steps, Words } from "@/components/kl/Kit";
import { ABOUT, PROCESS } from "@/content/site";
import { usePageMotion } from "@/components/kl/useMotion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      path: "/about",
      title: "About KlanLabs | AI Systems & Business Automation",
      description: "KlanLabs builds AI-powered systems, intelligent agents and business automation solutions that help organisations simplify operations and unlock new opportunities.",
    }),
  component: About,
});

function About() {
  usePageMotion();
  return (
    <>
      <section className="kl-phero">
        <div className="kl-wrap">
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
          <div className="kl-phero-grid">
            <div style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">About KlanLabs</Eyebrow>
              <Words as="h1" className="kl-h1" text={ABOUT.hero.title} accent={ABOUT.hero.accent} />
            </div>
            <div className="kl-phero-side kl-reveal">
              <p>{ABOUT.hero.text}</p>
              <div><Btn to="/contact">Talk to an AI Specialist</Btn></div>
            </div>
          </div>
        </div>
      </section>

      <div className="kl-showcase">
        <div className="kl-show-tall kl-reveal"><img src="/img/robot-red.jpg" alt="" data-parallax="6" /></div>
        <div className="kl-show-wide kl-reveal"><img src="/img/collab.jpg" alt="A team reviewing work on a laptop" data-parallax="6" /></div>
      </div>

      <section className="kl-sec">
        <div className="kl-wrap kl-split">
          <div className="kl-split-body">
            <Eyebrow className="kl-reveal">Why we exist</Eyebrow>
            <Words className="kl-h2" text="Your tools should work together." />
          </div>
          <div className="kl-split-body kl-reveal">
            {ABOUT.story.map((p) => <p key={p} className="kl-p">{p}</p>)}
          </div>
        </div>
      </section>

      <section className="kl-panel kl-sec">
        <div className="kl-wrap">
          <div className="kl-head">
            <Eyebrow className="kl-reveal">How we think</Eyebrow>
            <Words className="kl-h2" text="Principles behind every system we build" />
          </div>
          <ul className="kl-cards is-four">
            {ABOUT.principles.map((p, k) => (
              <li key={p.title} className="kl-ncard kl-reveal" style={{ "--d": `${k * 0.06}s` } as CSSProperties}>
                <div><h3>{p.title}</h3><p>{p.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="kl-panel is-dark kl-sec">
        <div className="kl-wrap">
          <div className="kl-head">
            <Eyebrow className="kl-reveal">How we work</Eyebrow>
            <Words className="kl-h2" text="Discover. Map. Build. Test. Deploy. Optimise." />
          </div>
          <Steps items={PROCESS} six />
        </div>
      </section>

      <Band title="Let's Build Something Intelligent." button="Let's Talk About Your Business" />
    </>
  );
}
