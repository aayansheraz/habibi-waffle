# Habibi Waffle — Scroll-Driven Restaurant Experience

[![CI Build](https://github.com/aayansheraz/habibi-waffle/actions/workflows/ci.yml/badge.svg)](https://github.com/aayansheraz/habibi-waffle/actions/workflows/ci.yml)
[![Live Demo](https://img.shields.io/badge/Live_Demo-Interactive_Site-00C853?style=flat&logo=vercel)](https://aayansheraz.github.io/habibi-waffle/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer)](https://framer.com/motion)

**[🚀 View Live Storytelling Website →](https://aayansheraz.github.io/habibi-waffle/)**

![Habibi Waffle Screenshot](.github/screenshot.png)

A scroll-driven culinary storytelling web application built for **Habibi Waffle**, Lahore. The site takes users through a multi-chapter scroll experience showcasing waffles, ice cream, Chinese items, and fast food, seamlessly routing into dedicated category menu views.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router**.

---

## 🌟 Interactive Experience & Features

1. **Scroll-Driven Chapter Narrative:** Sequential scroll triggers driving category reveals from desserts to fast food.
2. **Three-Stripe Category Router:** Interactive category portal routing users to dynamic menu pages (`/menu/waffle`, `/menu/chinese`, `/menu/fastfood`).
3. **Lazy 3D & SVG Fallbacks:** Optimized Three.js 3D asset canvas loader with SVG fallback support.
4. **Dynamic Menu Schema:** Centralized menu configuration in `src/data/menu.ts` supporting rapid item updates and pricing adjustments.

---

## 🛠️ Architecture

```
src/
├── App.tsx                  # React Router setup & global providers
├── pages/
│   ├── Home.tsx             # Intro, scroll story chapters, poster & footer
│   └── MenuPage.tsx         # Category-specific menu catalog
├── components/
│   ├── ScrollLogoHero.tsx   # Hero scroll animation container
│   ├── ScrollPictures.tsx   # Scroll story chapter cards
│   ├── StripedPoster.tsx    # Category selection poster
│   ├── ModelCanvas.tsx      # Three.js WebGL canvas loader
│   ├── FoodModel.tsx        # 3D food object renderer
│   ├── FoodArt.tsx          # SVG visual fallbacks
│   └── BlurText.tsx         # Typography animation utilities
└── data/
    └── menu.ts              # Menu product data & pricing dictionary
```

---

## 💻 Local Development Setup

```bash
# Install dependencies
npm install

# Run local development server
npm run dev
```

---

## 📦 Production Build

```bash
npm run build
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
