# Portfolio / CV — Mathis Le Port

Personal static website built with **Astro 5** and **Tailwind CSS 4**.
Dark « tech » theme, 5 pages, no client-side JavaScript (except the mobile menu
and the contact form).

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server → http://localhost:4321
npm run build      # production build in dist/
npm run preview    # preview the build
npm run check      # type checking
```

## Pages

| Route | Content |
|---|---|
| `/` | Home: intro, key skills, quick links |
| `/cv/` | Online CV (experience, education, languages) |
| `/skills/` | Detailed IT skills and selected projects |
| `/documents/` | CV download (PDF) |
| `/contact/` | Contact details + contact form |

## Customise

### 1. Your details (`src/data/site.ts`)

Name, role, email, phone, location and the **Formspree ID** of the contact form.

### 2. Your CV (`src/content/cv.md`)

YAML frontmatter: `summary`, `experiences`, `education`, `languages`,
`interests`. The text after the closing `---` appears in the “Objective”
section of the CV page.

### 3. Your skills (`src/content/skills.md`)

YAML frontmatter: `categories` (`name`, `icon`, `items`, optional `note`) and
`projects`. The text after the frontmatter appears on the skills page.

### 4. Your document and photo

Put them in `public/`:

- `public/docs/cv.pdf`
- `public/photo-profil.jpg` (optional — a monogram is shown otherwise)

PDF size and photo presence are detected automatically.

### 5. Contact form (Formspree)

1. Create an account on [formspree.io](https://formspree.io) and a form.
2. Copy the ID (`https://formspree.io/f/XXXXXXX` → `XXXXXXX`) into
   `src/data/site.ts` → `formspreeId`.
3. Until an ID is set, the form falls back to the `mailto:` client.

## Deployment — GitHub Pages

The site is deployed automatically by GitHub Actions
(`.github/workflows/deploy.yml`):

1. Push to `main`.
2. The workflow runs `npm ci` → `npm run check` → `npm run build`.
3. `dist/` is published to GitHub Pages → `https://mthslp.github.io/`.

Requirements (already configured for this repository):

- Repository `mthslp/mthslp.github.io` with a registered SSH key.
- *Settings → Pages → Source: **GitHub Actions***.
- `site` in `astro.config.mjs` set to the public URL (canonical / SEO).

## Structure

```
public/            PDF, photo, favicon
src/
  components/      Header, Footer, icons, cards, skill groups, form
  content/         cv.md, skills.md (editable content)
  data/site.ts     contact details and settings
  layouts/         BaseLayout.astro (head, SEO, header/footer)
  pages/           index, cv, skills, documents, contact
  styles/          dark theme (global.css)
```
