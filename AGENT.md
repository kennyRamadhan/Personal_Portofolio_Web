# Agent Instructions — Kenny Ramadhan Portfolio Website

## Project Identity

- **Project**: Personal portfolio website for Kenny Ramadhan (Senior QA Engineer)
- **Purpose**: Showcase QA engineering skills, work experience, and portfolio projects to recruiters and hiring managers
- **Live URL**: https://kenny-portofolio-web.vercel.app/
- **Repository root**: `Personal_Portofolio_Web/`

## Tech Stack (exact versions from package.json)

| Tool             | Version   | Notes                          |
|------------------|-----------|--------------------------------|
| React            | ^19.1.1   | JSX (not TypeScript)           |
| Vite             | ^7.1.7    | Build tool, ESM project        |
| Tailwind CSS     | ^3.4.14   | Utility-first styling          |
| Framer Motion    | ^12.23.22 | Animations and transitions     |
| i18next          | ^25.6.0   | Internationalization framework |
| react-i18next    | ^16.0.1   | React bindings for i18next     |
| lucide-react     | ^0.545.0  | Icon library                   |
| ESLint           | ^9.36.0   | Linting                        |

## CRITICAL RULES

1. **JavaScript only** — all components are `.jsx`. NEVER create `.tsx` or `.ts` files.
2. **No new dependencies** without explicit approval from the user. Work within the existing stack.
3. **Tailwind for layout and utilities** — the project uses Tailwind classes directly in JSX. Maintain this pattern.
4. **i18next for all user-facing text** — translation files are in `src/locales/en.json` and `src/locales/id.json`. NEVER hardcode display text in components. Always use the `useTranslation` hook and add keys to both locale files.
5. **Data lives in JSON** — content data (experience, skills, projects, etc.) is stored in `public/data/*.json`. NEVER hardcode data arrays inside components. Read from these JSON files.
6. **Framer Motion for animations** — use `framer-motion` for any new animations. Do not add other animation libraries.
7. **lucide-react for icons** — use `lucide-react` for any icons needed. Do not add other icon libraries.
8. **Dark theme is the default** — the site uses a dark color scheme. Maintain dark backgrounds and light text. Do not introduce light theme unless explicitly asked.

## Folder Structure

```
Personal_Portofolio_Web/
├── public/
│   ├── assets/
│   │   ├── docs/
│   │   │   └── Kenny-Ramadhan-CV.pdf      # Downloadable CV
│   │   └── images/
│   │       ├── profile.JPG                 # Profile photo (JPG)
│   │       └── profile.png                 # Profile photo (PNG)
│   ├── data/
│   │   ├── certification.json              # Certifications & training
│   │   ├── experience.json                 # Work experience entries
│   │   ├── programming.json                # Programming languages
│   │   ├── projects.json                   # Portfolio projects
│   │   ├── skills.json                     # Skills with proficiency levels
│   │   └── tools.json                      # Frameworks & tools
│   ├── favicon/                            # Favicon assets
│   ├── react.svg
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Contact.jsx                     # Contact section
│   │   ├── Header.jsx                      # Navigation header
│   │   ├── Hero.jsx                        # Hero/landing section
│   │   ├── Language.jsx                    # Language toggle (EN/ID)
│   │   ├── Portofolio.jsx                  # Portfolio/projects section
│   │   ├── Project.jsx                     # Individual project card
│   │   ├── Skills.jsx                      # Skills display section
│   │   └── Tools.jsx                       # Frameworks/tools section
│   ├── locales/
│   │   ├── en.json                         # English translations
│   │   └── id.json                         # Indonesian translations
│   ├── App.css                             # App-level styles
│   ├── App.jsx                             # Root app component
│   ├── i18n.js                             # i18next configuration
│   ├── index.css                           # Global styles (Tailwind directives)
│   ├── index.jsx                           # Entry point (unused or legacy)
│   └── main.jsx                            # Vite entry point (ReactDOM.createRoot)
├── index.html                              # HTML template
├── tailwind.config.js                      # Tailwind configuration
├── postcss.config.js                       # PostCSS config
├── vite.config.js                          # Vite configuration
├── eslint.config.js                        # ESLint flat config
└── package.json
```

## Data Architecture

All dynamic content is driven by JSON files in `public/data/`. When modifying or adding content:

- **`experience.json`** — work experience (company, role, dates). When editing, ensure Noovoleum is listed as the current employer (Dec 2025 – Present, Senior QA Engineer) and Ikonsultan ends Nov 2025.
- **`skills.json`** — skills with proficiency levels (Advanced/Intermediate/Basic)
- **`tools.json`** — frameworks and tools with proficiency levels
- **`projects.json`** — portfolio items (title, description, link)
- **`programming.json`** — programming languages
- **`certification.json`** — certifications and training

When adding new sections or content types, create a new JSON file in `public/data/` and fetch it in the component. Do not inline data.

## i18n Pattern

```jsx
// Correct pattern — always use this
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();
  return <h2>{t("section.title")}</h2>;
}
```

- Config file: `src/i18n.js`
- Locale files: `src/locales/en.json`, `src/locales/id.json`
- When adding any new user-facing string, add the key to BOTH `en.json` and `id.json`
- Use nested keys for organization: `"hero.title"`, `"about.description"`, `"skills.heading"`

## Component Conventions

- **Functional components only** — no class components
- **One component per file** in `src/components/`
- **PascalCase** for component filenames: `Hero.jsx`, `Skills.jsx`
- **Named or default exports** — follow the existing pattern in each file
- Props should be destructured in the function signature
- Use Framer Motion's `motion` components for scroll animations and transitions

## Styling Conventions

- Primary approach: **Tailwind utility classes** directly in JSX
- Supplementary: App.css and index.css for global styles and Tailwind directives
- Dark theme colors: dark navy/slate backgrounds, light/white text, accent colors (purple/orange for highlights as seen in the current design)
- The color palette visible on the site: dark backgrounds (~slate-900/950), purple/violet for section titles, orange/amber for item labels, teal/cyan gradient in the contact section
- Responsive design: use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)

## NPM Scripts

| Command          | Purpose                        |
|------------------|--------------------------------|
| `npm run dev`    | Start Vite dev server (HMR)   |
| `npm run build`  | Production build               |
| `npm run lint`   | Run ESLint                     |
| `npm run preview`| Preview production build       |

## Deployment

- **Platform**: Vercel
- **Method**: Auto-deploy from GitHub (push to main triggers deploy)
- **Build command**: `vite build` (Vercel auto-detects)
- **Output directory**: `dist/`
- No environment variables or server-side logic. This is a fully static site.

## Important Context

- The website owner (Kenny Ramadhan) is a Senior QA Engineer at Noovoleum working on UCO Collect
- Previous role: Lead QA Engineer at PT Ikonsultan Inovatama (Jul 2024 – Nov 2025)
- The site targets recruiters and hiring managers in the QA/testing industry
- The CV PDF in `public/assets/docs/` should be kept updated
- The site currently has a typo in the folder name ("Portofolio" instead of "Portfolio") — this is intentional/existing naming, do not rename without approval

## What NOT To Do

- Do NOT install new npm packages without explicit user approval
- Do NOT convert any file to TypeScript
- Do NOT hardcode user-facing strings — always use i18next
- Do NOT inline data that belongs in `public/data/*.json`
- Do NOT change the dark theme to light theme
- Do NOT modify the deployment configuration
- Do NOT rename existing files or folders without approval (including the "Portofolio" naming)
- Do NOT create separate CSS files per component — use Tailwind classes inline
- Do NOT use `styled-components` library (it is not installed despite initial assumption — the project uses Tailwind)