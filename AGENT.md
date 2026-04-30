# AGENT.md — Kenny Ramadhan Portfolio

> **For AI coding agents** (Claude Code, Cursor, Aider, Codex, Continue, etc.) and human contributors. This file follows the [agents.md](https://agents.md) convention.

---

## 1. Project Identity

| Attribute | Value |
|---|---|
| **Project** | Personal portfolio website for Kenny Ramadhan (Senior QA Engineer) |
| **Purpose** | CV-replacement portfolio targeting recruiters in the QA / Test Automation industry |
| **Live URL** | https://kenny-portofolio-web.vercel.app/ |
| **Repository** | `kennyRamadhan/Personal_Portofolio_Web` |
| **Hosting** | Vercel (auto-deploy from `main`) |
| **Owner** | Kenny Ramadhan — Senior QA Engineer at Noovoleum (Dec 2025 – Present) |

---

## 2. Tech Stack (locked — do NOT add libraries without approval)

| Tool | Version | Notes |
|---|---|---|
| React | ^19.1.1 | JSX only — never add TypeScript |
| Vite | ^7.1.7 | ESM project, build tool |
| Tailwind CSS | ^3.4.14 | Utility-first styling |
| Framer Motion | ^12.23.22 | Animations & transitions |
| i18next | ^25.6.0 | Internationalization framework |
| react-i18next | ^16.0.1 | React bindings for i18next |
| lucide-react | ^0.545.0 | Icon library |
| ESLint | ^9.36.0 | Linting (flat config) |

**Rule**: No new dependencies without explicit user approval. Work within this stack.

---

## 3. Setup & Commands

```bash
npm install         # Install dependencies
npm run dev         # Vite dev server at http://localhost:5173
npm run build       # Production build → dist/
npm run preview     # Preview production build
npm run lint        # ESLint
```

Node.js **18+** required (v20 / v22 recommended).

---

## 4. Critical Rules

1. **JavaScript only** — all components are `.jsx`. Never create `.tsx`, `.ts`, or migrate to TypeScript.
2. **No new npm dependencies** without explicit approval.
3. **Tailwind utility classes inline** in JSX. Do not create per-component CSS files.
4. **i18next for ALL user-facing UI labels** (headings, button text, navigation labels). Add keys to BOTH `en.json` AND `id.json` — never one without the other.
5. **Bilingual content data** in `public/data/*.json` uses the `*Id` suffix pattern for Indonesian variants — e.g. `{ "title": "...", "titleId": "..." }` and `{ "summary": "...", "summaryId": "..." }`. This is separate from the i18next pattern; both coexist by design.
6. **Framer Motion** for animations. Do not add other animation libraries.
7. **lucide-react** for icons. Do not add other icon libraries.
8. **Light theme is the default.** Dark mode toggle (sun/moon icon in nav) is planned for a future commit after design v2 component refactor stabilizes. Do not add `dark:` prefix variants in components during the v2 refactor; they will be added systematically in the dedicated dark-mode commit.
9. **Preserve CRLF line endings** in existing files. The repo uses Windows-style line endings (CRLF). Do not bulk-convert to LF.
10. **Confidentiality / NDA awareness** — see Section 9 below. This is non-negotiable.

---

## 5. Folder Structure

```
Personal_Portofolio_Web/
├── public/
│   ├── assets/
│   │   ├── docs/
│   │   │   └── Kenny-Ramadhan-CV.pdf      # Downloadable CV (anonymized version)
│   │   └── images/                        # Profile photos
│   ├── data/                              # Content data (see Section 6)
│   │   ├── blog.json                      # Insights / blog posts
│   │   ├── certification.json             # Certifications & training
│   │   ├── experience.json                # Work experience entries
│   │   ├── programming.json               # Programming languages
│   │   ├── projects.json                  # Portfolio project cards
│   │   ├── skills.json                    # Skills with proficiency levels
│   │   ├── testimonials.json              # Testimonials
│   │   └── tools.json                     # Frameworks & tools
│   └── favicon/
├── src/
│   ├── components/                        # All React components
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── CaseStudy.jsx                  # Featured Work case studies
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Language.jsx                   # EN/ID toggle
│   │   ├── Portofolio.jsx                 # NOTE: typo in filename is intentional — do not rename
│   │   ├── Project.jsx
│   │   ├── Skills.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   └── Tools.jsx
│   ├── locales/
│   │   ├── en.json                        # English translations
│   │   └── id.json                        # Indonesian translations
│   ├── App.css
│   ├── App.jsx                            # Root component composition
│   ├── i18n.js                            # i18next configuration
│   ├── index.css                          # Tailwind directives + globals
│   ├── index.jsx                          # ← ACTIVE entry point (referenced by index.html)
│   └── main.jsx                           # ← UNUSED dead code; safe to delete
├── index.html                             # `<script src="/src/index.jsx">`
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── eslint.config.js
├── package.json
├── README.md
└── AGENT.md                              # ← you are here
```

### Notes on entry points

`index.html` contains `<script type="module" src="/src/index.jsx"></script>`, so **`src/index.jsx` is the active entry point**. The file `src/main.jsx` is leftover from the default Vite template and is not referenced anywhere — it is safe to delete on the next cleanup commit.

### Notes on `Portofolio.jsx`

The filename uses the misspelling "Portofolio" (Indonesian-style). This is **intentional historical naming** — do not rename without explicit approval, as imports across the codebase reference this exact path.

---

## 6. Data Architecture (hybrid pattern)

This project uses a **hybrid data pattern**:

- **Content data** (text, descriptions, dates, levels, links) lives in `public/data/*.json` and is fetched at runtime by components.
- **Structural categorization** (e.g. how skills are grouped into "Core QA Expertise", "Automation", "API Testing", etc. in `Skills.jsx`) is hardcoded in the component as a `categoryMap` object. This is acceptable — content stays in JSON, presentation structure stays in component.

**When adding new content** (a new project, skill, experience entry):
1. Add the data row to the relevant `public/data/*.json` file.
2. Do not inline the data in a component.
3. If a new content type is introduced, create a new `public/data/<name>.json` file and fetch it from the relevant component.

**When adding a new section** (e.g. a new "Awards" or "Talks" section):
1. Create the JSON data file in `public/data/`.
2. Create a new component in `src/components/`.
3. Wire it into `App.jsx`.
4. Add corresponding i18n keys for any UI labels.

---

## 7. Internationalization (i18n)

Two systems coexist — use the right one for the right job:

### 7a. UI labels → i18next

Use for **static UI strings** (section headings, button text, navigation labels).

```jsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();
  return <h2>{t("about.heading")}</h2>;
}
```

- Config: `src/i18n.js`
- Locale files: `src/locales/en.json`, `src/locales/id.json`
- Use **nested keys**: `"hero.title"`, `"about.description"`, `"skills.heading"`
- **Always add the key to both `en.json` and `id.json`** in the same commit.

### 7b. Content data → `*Id` suffix in JSON

Use for **dynamic content rows** (blog posts, testimonials, work experience descriptions).

```json
{
  "title": "How I Built 300+ Automated Tests",
  "titleId": "Bagaimana Saya Membangun 300+ Test Otomatis",
  "summary": "A practical guide on building...",
  "summaryId": "Panduan praktis membangun..."
}
```

- The component selects `field` or `fieldId` based on `i18n.language`.
- Both fields must be filled when adding a new entry.

---

## 8. Component & Styling Conventions

### Components

- **Functional components only** — no class components.
- **One component per file** in `src/components/`.
- **PascalCase** filenames: `Hero.jsx`, `Skills.jsx`.
- Destructure props in the function signature.
- Use `framer-motion`'s `motion` components for scroll/transition animations.

### Styling

- Primary approach: **Tailwind utility classes inline in JSX**.
- Global styles only in `App.css` and `index.css` (Tailwind directives, font setup).
- Dark theme palette:
  - Background: dark navy / slate (`bg-bgDark` is defined in `tailwind.config.js`)
  - Text: light/white
  - Accent: purple/violet for section titles, orange/amber for item labels, teal/cyan gradient in contact section
- Responsive: use Tailwind prefixes (`sm:`, `md:`, `lg:`).

---

## 9. Confidentiality & Anonymization Rules ⚠️

The owner has worked with regulated clients (Tier-1 Indonesian banks, fintech, capital markets) under vendor NDAs. **All public-facing content must respect the following anonymization rules:**

### 9a. Never publish publicly

- Specific client / employer-of-employer names where work was done **as a vendor** (e.g. Maybank, BRI, Pegadaian, AHM, IDX/BEI).
- Internal product / project names of those clients (e.g. SP7B DST, Sales4u, Ceria, Senyum, Sabrina, Briva, QTIDS, PASSION, CTP-PLTE).
- Internal module / sprint / MVP naming conventions of those clients.
- Specific internal architecture details (e.g. data model field names, internal API names not part of a public standard).

### 9b. Safe to publish

- Direct employer names (Noovoleum, PT Ikonsultan Inovatama, PT Moonlay Technology, PT Qoin Digital Indonesia, PT Avows Technology, PT Berca Hardaya Perkasa, PT Whiteopen Teknologi).
- Public regulatory standards: Bank Indonesia SNAP (Standar Nasional Open API Pembayaran), OJK compliance, EBUS (Efek Berbasis Utang dan Sukuk), KSEI Settlement.
- Public cryptography standards: RSA SHA-256, HMAC-SHA512, SHA-256 body hashing.
- Public blockchain names: Solana, Binance Smart Chain.
- Noovoleum's own products and partners (UCO Collect, Alfagift, Pertamina) — these are commercial partnerships of the current employer.
- Quantified achievements (300+ test cases, 70% coverage, etc.).
- Tooling and frameworks used.

### 9c. Anonymization patterns to use

| Sensitive | Replace with |
|---|---|
| `Maybank` (as client) | `Tier-1 Indonesian Bank` |
| `BRI` (as client) | `Tier-1 Indonesian Bank` |
| `Pegadaian` | `national pawn-broking lender` |
| `AHM` / `Astra Honda Motor` | `national automotive manufacturer` |
| `IDX` / `BEI` | `national capital market platform` |
| Specific MVP / module names | Generic descriptions of capability |

### 9d. The canonical CV is the source of truth

When in doubt, **the file `public/assets/docs/Kenny-Ramadhan-CV.pdf` is the canonical anonymized version**. Website content (case studies, work experience descriptions, about section, hero copy) should match the level of disclosure in the CV. If the CV says "Tier-1 Indonesian Bank's enterprise sales force automation platform", the website should not say "Maybank SP7B DST".

### 9e. When updating any of the above

If a contributor (human or agent) finds existing content in the repo that violates these rules (legacy content from before this policy), **flag it and propose anonymization** rather than silently leaving it. As of the introduction of this AGENT.md, the repo may still contain legacy non-anonymized references that need cleanup.

---

## 10. Deployment

- **Platform**: Vercel
- **Method**: Auto-deploy on push to `main`
- **Build command**: `vite build` (auto-detected by Vercel)
- **Output directory**: `dist/`
- **No environment variables** — fully static site.
- **No server-side logic** — no API routes, no SSR.

---

## 11. What NOT to do

- ❌ Do not install new npm packages without explicit approval.
- ❌ Do not migrate any file to TypeScript.
- ❌ Do not hardcode user-facing UI labels — always use i18next.
- ❌ Do not inline content data — keep it in `public/data/*.json`.
- ❌ Do not change the dark theme to light theme.
- ❌ Do not modify Vercel deployment configuration.
- ❌ Do not rename existing files or folders without approval (especially `Portofolio.jsx` typo).
- ❌ Do not create per-component CSS files — use Tailwind classes inline.
- ❌ Do not bulk-convert line endings from CRLF to LF.
- ❌ Do not publish client names, internal product names, or NDA-protected information (see Section 9).
- ❌ Do not use `localStorage`, `sessionStorage`, or any browser storage — site is fully stateless.
- ❌ Do not assume `src/main.jsx` is the entry point — it is dead code. The active entry is `src/index.jsx`.

---

## 12. Definition of Done (per change)

A change is complete when:

- [ ] Code compiles (`npm run build` passes).
- [ ] Dev server runs without console errors (`npm run dev`).
- [ ] ESLint passes (`npm run lint`).
- [ ] Any new UI label has both `en.json` and `id.json` entries.
- [ ] Any new content data row has both English and `*Id` Indonesian variants if applicable.
- [ ] No client names, internal product names, or NDA-protected info introduced (Section 9).
- [ ] Visually verified in dev server (dark theme, responsive at sm/md/lg breakpoints).