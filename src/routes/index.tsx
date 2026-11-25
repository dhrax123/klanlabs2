import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { Band, Btn, Eyebrow, Faq, LinkBtn, Steps, Words } from "@/components/kl/Kit";
import { BigList, VoiceDemo, useSlider } from "@/components/kl/Widgets";
import { BRAND, EXAMPLES, HOME, PROCESS } from "@/content/site";
import { SOLUTIONS } from "@/content/solutions";
import { usePageMotion } from "@/components/kl/useMotion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      path: "/",
      title: "KlanLabs — AI Systems, Automation & Intelligent Business Solutions",
      description: BRAND.message,
    }),
  component: Home,
});

const TOOLS = ["HubSpot", "Salesforce", "Zoho", "Pipedrive", "n8n", "Make", "Zapier", "OpenAI", "WhatsApp", "Slack", "Gmail", "Google Sheets", "Airtable", "Apollo", "Clay", "Klaviyo"];

function Home() {
  usePageMotion();
  const slider = useSlider({
    items: EXAMPLES.map((e) => ({ title: e.title, text: e.text, image: e.image, tag: SOLUTIONS.find((s) => s.slug === e.solution)?.name, to: `/solutions/${e.solution}` })),
  });

  return (
    <>
      {/* hero */}
      <section className="kl-hero">
        <div className="kl-wrap kl-hero-grid">
          <Words as="h1" className="kl-h1" text={HOME.hero.title} accent={HOME.hero.accent} />
          <div className="kl-hero-side kl-reveal" style={{ "--d": ".4s" } as CSSProperties}>
            <p>{HOME.hero.text}</p>
            <div><Btn to="/solutions">Discover</Btn></div>
          </div>
        </div>
      </section>

      <div className="kl-showcase">
        <div className="kl-show-tall kl-reveal">
          <img src="/img/hero-tall.jpg" alt="A robotic hand reaching forward" data-parallax="6" />
          <span className="kl-vword" aria-hidden="true">klanlabs</span>
        </div>
        <div className="kl-show-wide kl-reveal" style={{ "--d": ".12s" } as CSSProperties}>
          <img src="/img/hero-wide.jpg" alt="Red glass curves" data-parallax="6" />
          <span className="kl-show-mark" aria-hidden="true">klanlabs</span>
          <Link to="/solutions/$slug" params={{ slug: "custom-ai-agents" }} className="kl-show-card">
            <img src="/img/voice-wave.jpg" alt="" />
            See an AI agent at work
          </Link>
        </div>
      </div>

      {/* tools we connect */}
      <section className="kl-marquee" aria-label="Platforms we build with">
        <div className="kl-marquee-track">
          {[...TOOLS, ...TOOLS].map((t, k) => <span key={k} aria-hidden={k >= TOOLS.length}>{t}</span>)}
        </div>
      </section>

      {/* about */}
      <section className="kl-sec" style={{ paddingTop: 0 }}>
        <div className="kl-wrap">
          <div className="kl-head" style={{ maxWidth: 1180 }}>
            <Eyebrow className="kl-reveal">{HOME.about.eyebrow}</Eyebrow>
            <Words className="kl-h2" text={HOME.about.title} />
          </div>
          <div className="kl-about" style={{ marginTop: "clamp(40px,5vw,70px)" }}>
            <div className="kl-about-deco kl-reveal" aria-hidden="true">
              <div className="kl-plus">{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div>
            </div>
            <div className="kl-about-body kl-reveal">
              {HOME.about.body.map((p) => <p key={p}>{p}</p>)}
              <div><LinkBtn to="/about">Explore_more</LinkBtn></div>
              <p className="kl-outline" aria-hidden="true" style={{ marginTop: 20 }}>ai.sys</p>
            </div>
          </div>
        </div>
      </section>

      {/* three outcomes */}
      <section className="kl-panel kl-sec is-tight">
        <div className="kl-wrap">
          <div className="kl-head is-split">
            <div style={{ display: "grid", gap: 22 }}>
              <Eyebrow className="kl-reveal">What we do</Eyebrow>
              <Words className="kl-h2" text="Acquire customers. Serve customers." accent="Operate better." />
            </div>
            <p className="kl-p kl-reveal">Every system we build does one of three jobs. Most businesses start with the one that's costing them the most time.</p>
          </div>
          <div className="kl-pillars" style={{ marginTop: "clamp(40px,5vw,70px)" }}>
            {HOME.pillars.map((p, k) => (
              <Link key={p.title} to={p.to as "/"} className="kl-pillar kl-reveal" style={{ "--d": `${k * 0.08}s` } as CSSProperties}>
                <span className="kl-pillar-go" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 12 12 2M4 2h8v8" stroke="currentColor" strokeWidth="1.3" /></svg></span>
                <span className="kl-eyebrow">{String(k + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="kl-h3">{p.title}</h3>
                  <p className="kl-p" style={{ marginTop: 12, fontSize: 15, lineHeight: 1.7 }}>{p.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* solutions list */}
      <section className="kl-sec">
        <div className="kl-wrap">
          <div className="kl-head">
            <Eyebrow className="kl-reveal">Solutions</Eyebrow>
            <Words className="kl-h2" text="Five ways we put AI to work in your business" />
          </div>
          <BigList items={SOLUTIONS.map((s) => ({ title: s.name, text: s.line, image: s.image, to: `/solutions/${s.slug}` }))} />
        </div>
      </section>

      {/* examples slider */}
      <section className="kl-panel is-dark kl-sec">
        <div className="kl-wrap">
          <div className="kl-darkhead">
            <div className="kl-reveal">
              <p className="kl-count kl-grad">0{SOLUTIONS.length}</p>
              <p>solutions, one connected system</p>
            </div>
            <div style={{ display: "grid", gap: 22 }}>
              <Eyebrow className="kl-reveal">What we build</Eyebrow>
              <Words className="kl-h2" text="Imagine if your business ran like this." />
              <div className="kl-reveal">{slider.arrows}</div>
            </div>
          </div>
          {slider.track}
          <p className="kl-small kl-reveal" style={{ marginTop: 22, color: "#8e9096" }}>Example workflows we build. Client case studies are published only once results are verified.</p>
        </div>
      </section>

      {/* voice agent */}
      <section className="kl-sec">
        <div className="kl-wrap kl-voice">
          <div className="kl-voice-intro">
            <Eyebrow className="kl-reveal">{HOME.voice.eyebrow}</Eyebrow>
            <Words className="kl-h2" text={HOME.voice.title} />
            <p className="kl-p kl-reveal">{HOME.voice.text}</p>
            <div className="kl-reveal"><LinkBtn to="/solutions/custom-ai-agents">Explore_ai_agents</LinkBtn></div>
          </div>
          <div className="kl-reveal"><VoiceDemo image="/img/voice-mic.jpg" /></div>
        </div>
      </section>

      {/* process */}
      <section className="kl-panel kl-sec">
        <div className="kl-wrap">
          <div className="kl-head is-split">
            <div style={{ display: "grid", gap: 22 }}>
              <Eyebrow className="kl-reveal">How we work</Eyebrow>
              <Words className="kl-h2" text="From manual processes to intelligent workflows." />
            </div>
            <div className="kl-reveal"><Btn to="/contact">Book a Discovery Call</Btn></div>
          </div>
          <Steps items={PROCESS} six />
        </div>
      </section>

      {/* FAQ */}
      <section className="kl-sec">
        <div className="kl-wrap"><Faq items={HOME.faq} title="Questions we hear first" /></div>
      </section>

      <Band title="Build Smarter. Operate Better. Scale Faster." text="Tell us where the repetitive work is. We'll show you what an intelligent system could take off your team's plate." button="Find Your Automation Opportunities" />
    </>
  );
}
