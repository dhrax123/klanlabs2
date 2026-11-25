import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Band, Btn, Crumbs, Eyebrow, Steps, Words } from "@/components/kl/Kit";
import { PROCESS, SERVICES } from "@/content/site";
import { usePageMotion } from "@/components/kl/useMotion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      path: "/services",
      title: "AI Services: Assessment, Build, Training & Optimisation | KlanLabs",
      description: "From an AI assessment to workflow builds, custom AI agents, CRM systems, workshops and ongoing optimisation — how we work with your business.",
    }),
  component: Services,
});

function Services() {
  usePageMotion();
  return (
    <>
      <section className="kl-phero">
        <div className="kl-wrap">
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <div className="kl-phero-grid">
            <div style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">Services</Eyebrow>
              <Words as="h1" className="kl-h1" text="From the first assessment to" accent="systems that keep improving." />
            </div>
            <div className="kl-phero-side kl-reveal">
              <p>We work with you end to end: understanding the work, building the system, training the team and improving it after launch.</p>
              <div><Btn to="/contact">Get Your AI Assessment</Btn></div>
            </div>
          </div>
        </div>
      </section>

      <section className="kl-panel kl-sec">
        <div className="kl-wrap">
          <div className="kl-head">
            <Eyebrow className="kl-reveal">What we offer</Eyebrow>
            <Words className="kl-h2" text="How we can work together" />
          </div>
          <ul className="kl-cards">
            {SERVICES.map((s, k) => (
              <li key={s.title} className="kl-ncard kl-reveal" style={{ "--d": `${(k % 3) * 0.06}s` } as CSSProperties}>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="kl-panel is-dark kl-sec">
        <div className="kl-wrap">
          <div className="kl-head">
            <Eyebrow className="kl-reveal">Our process</Eyebrow>
            <Words className="kl-h2" text="From manual processes to intelligent workflows." />
          </div>
          <Steps items={PROCESS} six />
        </div>
      </section>

      <Band title="Let's Build Something Intelligent." text="Tell us what you want to automate and we'll scope the right system with you." button="Book a Discovery Call" />
    </>
  );
}
