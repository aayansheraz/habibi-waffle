# Habibi Waffle

**[Live demo →](https://aayansheraz.github.io/habibi-waffle/)**

![Habibi Waffle screenshot](.github/screenshot.png)

A scroll-driven story website for **Habibi Waffle**, Lahore — famous for waffles
& ice cream, and also serving Chinese and fast food.

Built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**, with
**React Router** for the per-category menu pages.

## Concept

1. **Logo intro** — the Habibi Waffle badge fills the screen.
2. **Scroll story** — scrolling drives a chapter-by-chapter story of what we
   serve: waffles & ice cream → Chinese → broast / pizza / wraps.
3. **Three-stripe poster** — the striped page with a button per food type.
4. Each stripe routes to its own **menu page** (`/menu/waffle`,
   `/menu/chinese`, `/menu/fastfood`) listing the products.

## Getting started

```bash
npm install      # first time only
npm run dev      # start dev server (hot reload)
```

Open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the local dev server           |
| `npm run build`   | Type-check + production build         |
| `npm run preview` | Preview the production build locally |

## Structure

```
src/
├── App.tsx                  # routes + idle 3D preloading
├── pages/
│   ├── Home.tsx             # intro + story + poster + footer
│   └── MenuPage.tsx         # per-category product page
├── components/
│   ├── ScrollLogoHero.tsx   # scroll-driven logo intro
│   ├── ScrollPictures.tsx   # scroll story chapters
│   ├── StripedPoster.tsx    # three clickable food stripes
│   ├── ModelCanvas.tsx      # lazy Three.js canvas + preloader
│   ├── FoodModel.tsx        # single 3D model
│   ├── FoodArt.tsx          # SVG fallbacks
│   ├── BlurText.tsx         # word-by-word blur-in animation
│   └── Navbar.tsx / Footer.tsx / Grain.tsx / icons.tsx
└── data/menu.ts             # categories + products (edit prices/items here)
```

## Customising

- **Products & prices:** edit `src/data/menu.ts`.
- **Brand colours:** `tailwind.config.js` under `theme.extend.colors`.
- **Photos & logos:** drop images into `public/images/` and reference them as `/images/your-file.webp`.

## Deployment

- **Vercel** (root domain) — config in `vercel.json`; builds with base `/`.
- **GitHub Pages** (`/habibi-waffle/`) — `.github/workflows/deploy.yml` builds with `GITHUB_PAGES=true`.

The Vite `base` switches automatically between the two, so both stay in sync.
