# Pranay Kashyap Portfolio

Interactive portfolio for Pranay Kashyap, Machine Learning Engineer at Kaliber Labs.

## Included

- Responsive, accessible one-page portfolio
- Interactive systems lab for voice AI, vision, and edge intelligence
- Selected work, research, patents, awards, education, and experience
- Downloadable resume
- Custom Open Graph social card
- Automatic GitHub Pages deployment workflow

## Local development

This project requires Node.js 22 and pnpm.

```bash
pnpm install
pnpm run dev
```

## GitHub Pages deployment

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Run the **Deploy portfolio to GitHub Pages** workflow, or push another commit to `main`.

The workflow detects the repository name and configures the correct asset path automatically.

## Production builds

```bash
pnpm run build
pnpm run build:github
```
