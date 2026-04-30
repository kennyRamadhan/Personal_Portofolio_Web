# Kenny Ramadhan — Personal Portfolio

Personal portfolio website showcasing 5+ years of QA engineering experience across Web, Mobile, API, and enterprise systems.

🌐 **Live**: [kenny-portofolio-web.vercel.app](https://kenny-portofolio-web.vercel.app/)

---

## About

This site is a CV-replacement portfolio targeting recruiters and hiring managers in the QA / Test Automation industry. It highlights project case studies, work experience, technical skills, and downloadable CV — bilingual (English / Indonesian).

## Tech Stack

- **React 19** with JSX (no TypeScript)
- **Vite 7** as build tool
- **Tailwind CSS 3** for styling
- **Framer Motion** for animations
- **i18next + react-i18next** for English / Indonesian toggle
- **lucide-react** for icons
- **Vercel** for hosting (auto-deploy on push to `main`)

## Quick Start

Requires **Node.js 18+** (recommended: v20 or v22).

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Project Structure

```
Personal_Portofolio_Web/
├── public/
│   ├── assets/
│   │   ├── docs/            # Downloadable CV (PDF)
│   │   └── images/          # Profile photos
│   ├── data/                # Content data (JSON) — see AGENT.md
│   └── favicon/
├── src/
│   ├── components/          # All React components (.jsx)
│   ├── locales/             # i18next translations (en.json, id.json)
│   ├── App.jsx              # Root composition
│   ├── index.jsx            # Active entry point (referenced by index.html)
│   └── i18n.js              # i18next configuration
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── README.md                # ← you are here
└── AGENT.md                # Conventions for AI coding agents
```

## Contributing & Conventions

If you're an AI coding agent (Claude Code, Cursor, Aider, Codex, etc.) or human contributor working on this repo, **read [`AGENT.md`](./AGENT.md) first**. It defines the rules for code style, data architecture, internationalization, and confidentiality.

## Contact

- **Email**: [kennyrmdhn@gmail.com](mailto:kennyrmdhn@gmail.com)
- **LinkedIn**: [linkedin.com/in/kenny-ramadhan-704849184](https://linkedin.com/in/kenny-ramadhan-704849184)
- **GitHub**: [github.com/kennyRamadhan](https://github.com/kennyRamadhan)

## License

© 2026 Kenny Ramadhan. All rights reserved. Personal portfolio — content (text, images, CV) is not licensed for reuse. The site code (React components, configuration) is shared for reference only.