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

## Stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- TypeScript
