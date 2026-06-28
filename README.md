# HABIBI

A 3D website built with [Three.js](https://threejs.org/) and [Vite](https://vitejs.dev/).

## Getting started

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server with hot reload
```

Then open the URL Vite prints (usually http://localhost:5173).

## Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the local dev server            |
| `npm run build`   | Build for production into `dist/`     |
| `npm run preview` | Preview the production build locally  |

## Structure

```
HABIBI/
├── index.html        # page shell + canvas + overlay
├── src/
│   ├── main.js       # Three.js scene, lights, animation loop
│   └── style.css     # page styling
└── package.json
```

The starter scene has a rotating icosahedron, a starfield, orbit controls
(drag to rotate, scroll to zoom), and is fully responsive. Edit `src/main.js`
to build out your scene.
