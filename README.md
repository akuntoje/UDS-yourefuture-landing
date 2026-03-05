# UDS yourfuture

A UDS (ASU Unity Design System) landing page built by **agent skills**, with reference to the official ASU website: [https://yourfuture.asu.edu/](https://yourfuture.asu.edu/)

## Stack

- [Astro 4](https://astro.build/) + React 18
- [ASU Unity Design System](https://unity.asu.edu/) (`@asu/*` packages)
- Hosted on GitHub Packages registry

## Installation

> Requires a GitHub token with `read:packages` scope. The `.npmrc` file in this project is pre-configured.

```bash
npm install
```

This will install all dependencies and automatically copy the required CSS and JS assets to `public/`.

## Run locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Project structure

```
UDS-yourfuture/
├── src/
│   ├── components/       # One .jsx file per page section
│   ├── data/
│   │   └── page-content.json   # All text, images, and links
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell, CSS/JS links
│   └── pages/
│       └── index.astro         # Page composition
├── public/
│   ├── css/              # UDS CSS (auto-copied on install)
│   └── js/               # Bootstrap JS (auto-copied on install)
├── scripts/
│   └── copy-css.cjs      # Postinstall script
├── .npmrc                # GitHub Packages auth
└── package.json
```
