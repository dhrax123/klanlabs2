> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

# KlanLabs — project notes

- Stack: TanStack Start + React 19 + Vite + Tailwind 4 (Lovable default). Styles for the site live in `src/styles/kl.css` with the `kl-` prefix.
- All page copy lives in `src/content/` — edit words there, not in components.
- Solution pages are one template (`src/routes/solutions.$slug.tsx`) driven by `src/content/solutions.ts`; each page is a list of typed sections, so a new page is a new data entry.
- Never add fabricated testimonials, client logos or performance numbers. Case studies go in `src/content/site.ts` only when the results are verified.
- Photos are free Unsplash images in `public/img`, credited in `public/img/credits.json`.
