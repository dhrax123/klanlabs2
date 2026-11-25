import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/** Site-wide motion: Lenis smooth scroll, reveal-on-scroll and light image parallax.
    Re-scans the page on every route change. Reduced-motion users get everything static. */
export function useMotion() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  /* smooth scroll, once */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let destroy = () => {};
    let dead = false;
    void import("lenis").then(({ default: Lenis }) => {
      if (dead) return;
      const lenis = new Lenis({ duration: 1.05, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true, anchors: { offset: -100 } });
      let raf = 0;
      const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      (window as unknown as { __kl?: unknown }).__kl = lenis;
      destroy = () => { cancelAnimationFrame(raf); lenis.destroy(); delete (window as unknown as { __kl?: unknown }).__kl; };
    });
    return () => { dead = true; destroy(); };
  }, []);

  /* new page starts at the top */
  useEffect(() => {
    if (window.location.hash) return;
    const lenis = (window as unknown as { __kl?: { scrollTo: (n: number, o: object) => void } }).__kl;
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
  }, [pathname]);
}

/** Reveal-on-scroll and parallax for one page. Call it from the page component so it runs
    after that page has hydrated (route chunks hydrate after the root). */
export function usePageMotion() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  /* reveal + parallax for whatever this page rendered */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = () => Array.from(document.querySelectorAll<HTMLElement>(".kl-reveal:not(.is-in), .kl-words:not(.is-in)"));
    if (reduce || !("IntersectionObserver" in window)) {
      targets().forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    const scan = () => targets().forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    const par = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;
    const tick = () => {
      const vh = window.innerHeight;
      for (const el of par) {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const p = (r.top + r.height / 2 - vh / 2) / vh; // -1..1 around centre
        el.style.transform = `translate3d(0, ${(-p * Number(el.dataset["parallax"] || 8)).toFixed(2)}%, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    if (par.length && window.matchMedia("(min-width: 900px)").matches) raf = requestAnimationFrame(tick);
    return () => { io.disconnect(); mo.disconnect(); cancelAnimationFrame(raf); };
  }, [pathname]);
}
