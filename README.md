# VetPlus Landing Page

A conversion-focused marketing site for VetPlus — client communication software that integrates with veterinary clinics' existing practice management systems.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |

## Languages

- **European Portuguese** (`pt-PT`) is the **default** language on first visit
- **English** (`en`) via the **EN / PT** toggle in the header (choice is saved in `localStorage`)
- Translations live in `src/i18n/locales/` — European Portuguese only (no Brazilian variants)

## Customize

- **Copy & pricing** — Edit `src/i18n/locales/en.ts` and `src/i18n/locales/pt-PT.ts`
- **Colors & fonts** — Update CSS variables in `src/index.css`
- **CTA form** — Replace the alert in `CtaBanner.tsx` with your API or email service (e.g. Formspree, Resend)

## Deploy (GitHub Pages)

The site is configured for [GitHub Pages](https://pages.github.com/) at:

**https://ferrodude.github.io/vetPlusLanding/**

### One-time setup on GitHub

1. Open the repo: [github.com/FerroDude/vetPlusLanding](https://github.com/FerroDude/vetPlusLanding)
2. Go to **Settings** → **Pages**
3. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
4. **Branch:** `gh-pages` · **Folder:** `/ (root)` · click **Save**

> The `gh-pages` branch is created automatically on the first successful workflow run. If you do not see it yet, push the workflow below and wait for Actions to finish, then refresh the Pages settings.

> **If deploy failed with “404” / “Ensure GitHub Pages has been enabled”:** you likely had **GitHub Actions** selected as the Pages source without Pages being fully enabled. Use **Deploy from a branch** → `gh-pages` as above (the workflow pushes built files to that branch).

The repository must be **public** (or GitHub Pro for private repos) for free GitHub Pages.

### Publish updates

Push to the `main` branch. The workflow builds the site and publishes the `dist` folder to the `gh-pages` branch.

```bash
git add .
git commit -m "Your message"
git push origin main
```

Check progress under the repo’s **Actions** tab. The site is usually live within 1–2 minutes after the workflow succeeds.

### Local production preview

```bash
npm run build
npm run preview
```

Preview uses the same `/vetPlusLanding/` base path as production.

## Stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- TypeScript
