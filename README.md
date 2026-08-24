# Yaqeen Welfare Foundation — Next.js + Tailwind CSS

A full Next.js 15 (App Router) + TypeScript + **Tailwind CSS** rebuild of the Yaqeen Welfare
Foundation website — 29 pages, a fresh **Deep Ocean Blue + Amber** theme, shared Header/Footer,
mega-menu navigation, animated impact counters, and scroll-reveal animations.

## What changed from the previous version

- **Styling engine:** rebuilt from plain CSS to **Tailwind CSS** (utility classes throughout,
  configured via `tailwind.config.ts`).
- **Theme:** swapped the green/gold NGO palette for a **Deep Navy Blue (`brand`) + Amber
  (`accent`)** theme — colors are defined once in `tailwind.config.ts` under `theme.extend.colors`,
  so the whole site can be re-themed by editing a handful of hex values there.
- **Architecture:** content is now data-driven. All 15 program pages (Education, Health & Women,
  Community & Climate) share a single `<ProgramPage>` template component and pull their content
  from `lib/content.ts` — add a new program by adding one object to that file, no new markup
  needed.

## Getting Started

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

Build for production:
```bash
npm run build
npm start
```

This project has already been verified to build successfully (`npm run build`) — all 29 routes
compile, type-check, and pre-render as static pages.

## Project Structure

```
tailwind.config.ts     → theme colors, fonts, shadows, animations (edit here to re-theme)
app/
  layout.tsx             → Root layout: Header + Footer + ScrollReveal on every page
  globals.css             → Tailwind directives + font import + .reveal animation keyframes
  page.tsx                 → Home page (/)
  about/, contact/          → /about, /contact
  parho-pakistan/ ...        → 15 program pages, each just imports ProgramPage + its data
  donate/, volunteer/ ...     → 8 "Get Involved" pages
  beneficiary-stories/ ...     → 3 Impact/Transparency pages

components/
  Header.tsx, Footer.tsx  → Site chrome (mega-menu via Tailwind `group-hover`, mobile drawer)
  ProgramPage.tsx          → Template used by all 15 program pages
  AboutBlock, ValueGrid, StatsGrid, HelpGrid, StoryGrid, Timeline, Form.tsx → content blocks
  Counter.tsx, ScrollReveal.tsx → small client components for animation
  Icon.tsx                 → all inline SVG icons in one place

lib/
  content.ts               → structured data for all 15 program pages
```

## Re-theming

Every color in the site comes from the `brand` (navy) and `accent` (amber) scales in
`tailwind.config.ts`. To try a different theme, just edit those hex values — every component uses
`bg-brand-800`, `text-accent-500`, etc. rather than hardcoded colors, so a palette swap propagates
everywhere automatically.

## Notes

- Images use placeholder photography from `picsum.photos` — replace with real field photography
  before launch.
- Forms are present in the markup (contact, donate, volunteer, CSR) but aren't wired to a backend
  yet — connect them to an API route, Formspree, or a payment gateway before going live.
- `next.config.mjs` allow-lists `picsum.photos` for `next/image`.
