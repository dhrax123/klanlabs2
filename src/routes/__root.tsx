import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ORG_LD, SITE, ld } from "@/lib/seo";
import { Footer, Header, ToTop } from "@/components/kl/Chrome";
import { useMotion } from "@/components/kl/useMotion";
import { Btn } from "@/components/kl/Kit";

function NotFoundComponent() {
  return (
    <section className="kl-panel kl-404">
      <div style={{ display: "grid", gap: 24, justifyItems: "center", padding: "80px 20px" }}>
        <p className="kl-outline" aria-label="404">404</p>
        <h1 className="kl-h2" style={{ fontSize: "clamp(30px,4vw,54px)" }}>This page doesn't exist.</h1>
        <p className="kl-p">The link may be old, or the page has moved.</p>
        <Btn to="/">Back to home</Btn>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <section className="kl-panel kl-404">
      <div style={{ display: "grid", gap: 20, justifyItems: "center", padding: "80px 20px" }}>
        <h1 className="kl-h2" style={{ fontSize: "clamp(30px,4vw,54px)" }}>This page didn't load.</h1>
        <p className="kl-p">Something went wrong on our end. Try again, or head back home.</p>
        <div style={{ display: "flex", gap: 12 }}>
          <button type="button" className="kl-btn" onClick={() => { router.invalidate(); reset(); }}>Try again</button>
          <Link to="/" className="kl-link">Home</Link>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: "We build intelligent systems that help businesses acquire customers, serve customers and operate better." },
      { name: "theme-color", content: "#111111" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400..700&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
    scripts: [ld(ORG_LD)],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useMotion();
  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="sr-only">Skip to content</a>
      <Header />
      <main id="main" className="kl-main">
        <Outlet />
      </main>
      <Footer />
      <ToTop />
    </QueryClientProvider>
  );
}
