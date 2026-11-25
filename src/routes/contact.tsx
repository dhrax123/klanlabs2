import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Arrow, Crumbs, Eyebrow, Words } from "@/components/kl/Kit";
import { SOLUTIONS } from "@/content/solutions";
import { SITE, seo } from "@/lib/seo";
import { usePageMotion } from "@/components/kl/useMotion";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      path: "/contact",
      title: "Contact KlanLabs | Book a Discovery Call",
      description: "Tell us what you want to automate. Book a discovery call with KlanLabs about AI automation, lead generation, AI agents, CRM systems or AI workshops.",
    }),
  component: Contact,
});

type State = "idle" | "sending" | "sent" | "error";

function Contact() {
  usePageMotion();
  const [state, setState] = useState<State>("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data["_honey"]) return;
    setState("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `New enquiry — ${data["interest"] || "KlanLabs website"}`, _template: "table" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <>
      <section className="kl-phero" style={{ paddingBottom: "clamp(36px,4vw,60px)" }}>
        <div className="kl-wrap">
          <Crumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
          <div className="kl-phero-grid">
            <div style={{ display: "grid", gap: 26 }}>
              <Eyebrow className="kl-reveal">Contact</Eyebrow>
              <Words as="h1" className="kl-h1" text="Let's talk about" accent="your business." />
            </div>
            <div className="kl-phero-side kl-reveal">
              <p>Tell us what you want to automate, or where your team loses the most time. We'll reply within one working day.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="kl-panel kl-sec is-tight">
        <div className="kl-wrap kl-contact">
          <form className="kl-form kl-reveal" onSubmit={submit}>
            <div className="kl-form-row">
              <div className="kl-field"><label htmlFor="c-name">Name</label><input id="c-name" name="name" required autoComplete="name" /></div>
              <div className="kl-field"><label htmlFor="c-email">Work email</label><input id="c-email" name="email" type="email" required autoComplete="email" /></div>
            </div>
            <div className="kl-form-row">
              <div className="kl-field"><label htmlFor="c-company">Company</label><input id="c-company" name="company" autoComplete="organization" /></div>
              <div className="kl-field">
                <label htmlFor="c-interest">I'm interested in</label>
                <select id="c-interest" name="interest" defaultValue="">
                  <option value="" disabled>Choose a solution</option>
                  {SOLUTIONS.map((s) => <option key={s.slug}>{s.name}</option>)}
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="kl-field"><label htmlFor="c-msg">What would you like to automate?</label><textarea id="c-msg" name="message" required placeholder="A few lines about your business and the work you'd like to take off your team's plate." /></div>
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
            {state === "sent" ? <p className="kl-form-ok" role="status">Thanks — your message is in. We'll reply within one working day.</p> : null}
            {state === "error" ? <p className="kl-form-err" role="alert">That didn't send. Please email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p> : null}
            <button type="submit" className="kl-btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}<Arrow /></button>
          </form>

          <aside className="kl-cinfo kl-reveal">
            <div className="kl-cinfo-card">
              <h3>Email</h3>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="kl-cinfo-card">
              <h3>Based in</h3>
              <p>{SITE.city}</p>
              <p>Working with teams remotely and on-site.</p>
            </div>
            <div className="kl-cinfo-card is-light">
              <h3>What happens next</h3>
              <p>We read your message, reply within one working day and set up a short discovery call to understand how your business runs.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
