# Agent Instructions

This is an ASU UDS Astro + React project.

## Stack

- Astro 4 + React 18
- ASU Unity Design System (@asu/* packages)
- Registry: https://npm.pkg.github.com — requires GitHub token in .npmrc

## Rules

- All components are React (.jsx) in src/components/
- All page content lives in src/data/page-content.json — no hardcoded strings in JSX
- CSS is served from public/css/ — run postinstall if styles are missing
- ASUHeader and ASUFooter require client:only="react" (NOT client:load) — SSR crash otherwise
- navTree for ASUHeader must be transformed to htmlLink shape — see SECTION-PATTERNS.md
- Use @asu/component-header-footer (combined) — NOT separate header/footer packages
- Run `npm install` (not yarn) unless project has yarn.lock

## Skills

- skills/uds-page-builder — Prompt/screenshot to page pipeline
- skills/uds-reviewer — Review and validate the page
- skills/uds-components — Browse/install/add UDS components
