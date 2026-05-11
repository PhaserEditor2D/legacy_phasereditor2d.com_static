# main-website

Static website migrated from `phasereditor3`.

## Scripts

- `npm run migrate:phasereditor3`
  - Copies static assets from `phasereditor3`
  - Renders PHP route pages to static HTML
  - Copies blog markdown content into `content/blog`
  - Generates static blog pages from markdown using JavaScript
  - Writes the generated website into `docs/`

- `npm run build:blog`
  - Rebuilds only the static `/blog` pages from `content/blog`
  - Writes blog output into `docs/blog`
  - Use this when you add or edit blog markdown files.

## Blog Content

The source of truth for the static blog generator is `content/blog`.
After editing markdown in that folder, run:

```bash
npm run build:blog
```
