# Pranay Kashyap — research portfolio

A responsive, statically exported Next.js portfolio for GitHub Pages. Research content is rendered in the initial HTML; figures and the résumé are served from this repository.

## Local development

Node.js 22.13+ and pnpm are required.

```sh
pnpm install --frozen-lockfile
pnpm exec next dev
```

## Validate and publish

```sh
pnpm lint
pnpm test
```

`pnpm test` builds the actual GitHub Pages export and checks publication content and local asset references. Push to `main` to run `.github/workflows/deploy-pages.yml`. The repository's Pages source must be **GitHub Actions**. Only this workflow deploys the site.

For a manual export:

```sh
GITHUB_PAGES=true GITHUB_REPOSITORY=pk2931/pk2931.github.io pnpm build:github
```

The deployable site is in `out/`. No server, database, or API key is required.

## Editing

- `app/research-data.ts`: publication authors, links, summaries, and patent records.
- `app/page.tsx`: introduction, current work, experience, education, and news.
- `app/globals.css`: responsive layout and typography.
- `public/research/`: publication illustrations and patent drawings.
- `public/Pranay-Kashyap-Resume.pdf`: supplied September 2026 résumé.
- `docs/content-sources.md`: source references and figure provenance.

Figures open at full size; each research entry includes expandable details. Publication figures are extracted from the original papers. Current-research schematic illustrations are explicitly labeled and do not represent measured experimental outputs. Patent identifiers are published application numbers, not claims that all three inventions are granted. The sidebar uses the supplied ICASSP 2024 photograph, framed with CSS; the original opens on click. The canonical production URL is https://pk2931.github.io/ (no query string required).
