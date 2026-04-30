# Design System — Kenny Ramadhan Portfolio v2

> **Source of truth** for all design decisions. Every visual element must reference this document. Updates to design must be reflected here first, then propagated to code.
>
> Version: 2.0 · Locked: 2026-04
>
> Predecessor: v1.0 (purple/teal/orange palette, Calibri, dark-default) — deprecated.

---

## 1. Design Direction

**Vibe**: Minimalist (Linear/Vercel inspired) with technical accents — clean typography-driven layout with `// monospace markers` and subtle tech motifs. Reads as "thoughtful engineer's portfolio", not "designer portfolio".

**Audience**: Recruiters in QA/Test Automation, primarily Tier-1 banks, fintech, capital markets, and engineering-led startups.

**Mode**: Light default, dark mode toggle (light implemented first, dark in subsequent commit).

---

## 2. Color Tokens

### Primary palette

```
Indigo (primary brand)        #4338CA   indigo-700
Indigo bg-tint (subtle hover) #EEF2FF   indigo-50
Amber (emphasis accent)       #F59E0B   amber-500
Amber bg-tint                 #FEF3C7   amber-100
```

**Usage rules:**
- Indigo `#4338CA`: KR monogram bg, primary buttons, active timeline dot, primary tag chip bg, `// case 01` markers, link accents, footer brand mark
- Amber `#F59E0B`: PROBLEM/ACTION/RESULT labels (case studies), hero indicator bar accent (single bar in 5-bar pattern), special emphasis only
- **Never use indigo and amber as adjacent accents on the same element** — they fight for attention. Use indigo as primary, amber as scarcity emphasis.

### Neutrals

```
Text primary       #1A1A1A   stone-900-ish (almost black, warm)
Text secondary     #525252   stone-600
Text tertiary      #78716C   stone-500 (mono labels, meta info)
Text muted         #A3A3A3   stone-400 (placeholders, disabled)
Border tertiary    #E7E5E4   stone-200
Background page    #FFFFFF   pure white
Background subtle  #FAFAF9   stone-50 (warm white — sections, cards inside cards)
Background medium  #F5F5F4   stone-100 (footer top section)
```

**Usage rules:**
- Page bg: `#FFFFFF` for hero, content; `#FAFAF9` for footer to create visual section break
- Card bg inside section: `#FFFFFF` with `#E7E5E4` border, OR `#FAFAF9` for nested emphasis (e.g. result card inside case study)
- Border `#E7E5E4` is universal — never use darker borders for cards

### Status

```
Success (open to work)
  Text:           #15803D   green-700
  Background:     #DCFCE7   green-100
  Dot indicator:  #15803D
```

### Color: Hex → Tailwind class reference

For Tailwind usage, all primary colors map to standard Tailwind palette. **Do not use arbitrary values** like `bg-[#4338CA]` — use the named class `bg-indigo-700`. See Section 7 for full Tailwind config.

---

## 3. Typography

### Font families

```
Sans-serif (body, headings):  Inter
Monospace (labels, meta):     JetBrains Mono
```

**Loading**: Self-host via Google Fonts CDN or local. Inter weights: 400 (regular), 500 (medium). JetBrains Mono weights: 400, 500, 700.

### Type scale

| Use case | Size (px) | Weight | Line-height | Letter-spacing | Font |
|---|---|---|---|---|---|
| Hero h1 | 44 | 500 | 1.1 | -0.8px | Inter |
| Section h2 | 28 | 500 | 1.2 | -0.5px | Inter |
| Card h3 | 17 | 500 | 1.3 | normal | Inter |
| Card h4 (timeline role) | 14 | 500 | 1.3 | normal | Inter |
| Body large (hero subtitle) | 16 | 400 | 1.65 | normal | Inter |
| Body (about, descriptions) | 14 | 400 | 1.6 | normal | Inter |
| Body small (P/A/R content) | 13 | 400 | 1.55 | normal | Inter |
| Body tiny (helper text) | 12 | 400 | 1.5 | normal | Inter |
| Section markers (`// foo`) | 11 | 400 | 1 | 0.3px | JetBrains Mono |
| Stat label (`years_experience`) | 10 | 400 | 1 | 0.3px | JetBrains Mono |
| P/A/R label (`PROBLEM`) | 10 | 400 | 1 | 0.5px UPPERCASE | JetBrains Mono |
| Date stamps (`2025 → present`) | 11 | 400-500 | 1 | normal | JetBrains Mono |
| Tag chip text | 10 | 400 | 1 | normal | JetBrains Mono |
| KR monogram | varies | 700 | 1 | -1px | JetBrains Mono |

**Stat numbers**: 30px Inter Medium, letter-spacing -0.6px.

---

## 4. Spacing scale

Use Tailwind's default spacing scale (`0.25rem` = `4px` increments). Standardized usage:

| Use case | Tailwind class | Pixel |
|---|---|---|
| Tight gap (within card content) | `gap-1` to `gap-2` | 4-8px |
| Standard internal padding (cards) | `p-5` to `p-6` | 20-24px |
| Card-to-card gap (case studies) | `gap-3` | 12px |
| Section vertical padding | `py-16` | 64px |
| Hero top padding | `pt-20` | 80px |
| Container horizontal padding | `px-8` | 32px |

**Container max-width**: `max-w-[1200px]` or `max-w-screen-xl` — site-wide content limit.

**Section rhythm**: 64px between major sections (Hero → Stats: 0px gap because stats sit immediately under hero; Stats → Featured Work: 64px; Featured Work → Experience: 64px; etc).

---

## 5. Border & radius

```
Universal border:     0.5px solid #E7E5E4   (border-stone-200)
Card border-radius:   8px                    rounded-lg
Pill border-radius:   100px                  rounded-full
Tag chip radius:      3px                    rounded-[3px] or rounded-sm (4px)
KR monogram radius:   6px                    rounded-md
Button radius:        6px                    rounded-md
```

**Special**: Case study cards have `border-left: 2px solid #4338CA` and `border-radius: 0 8px 8px 0` (rounded right side only, sharp left edge for the indigo accent stripe).

---

## 6. Component specs

### 6.1 Navigation header (sticky)

- Height: ~56px
- Padding: `py-3.5 px-8`
- Background: `rgba(255,255,255,0.92)` with `backdrop-blur-md`
- Border-bottom: `0.5px solid #E7E5E4`
- Position: `sticky top-0 z-10`

**Left side**: KR monogram (28×28, indigo bg, white text, JetBrains Mono Bold) + "Kenny Ramadhan" name (Inter 13px medium) + "senior qa engineer" subtitle (JetBrains Mono 10px) + status pill ("open to work")

**Right side**: Nav links (Work, Skills, Experience, Contact — Inter 13px) + lang toggle (en/id, JetBrains Mono 11px in bordered box)

### 6.2 Hero (R1 — Minimal indicator)

- Layout: 2-column asymmetric `grid-cols-[1.4fr_1fr]` with `gap-14`
- Padding: `pt-20 pb-12 px-8`
- Container: `max-w-[1200px] mx-auto`

**Left column (text)**:
- Pretitle: `<span color: indigo-700>role</span> = senior_qa_engineer · jakarta` (JetBrains Mono 12px)
- H1: 44px Inter Medium, max 480px width
- Subtitle: 16px Inter, max 520px width
- Buttons: View work (filled indigo), Download CV (outline)

**Right column (indicator)**:
- Aspect ratio: 1.05 / 1
- Background: `#FAFAF9` with `0.5px solid #E7E5E4`
- Border-radius: 12px
- Background pattern: 32×32 grid lines using indigo at 8% opacity (`linear-gradient` for both axes)
- Top-right: status pill (white bg, `0.5px solid #E7E5E4`, rounded-full) — "open to work" with dot
- Center: stacked vertically — `QA · AUTOMATION · API · MOBILE` text (JetBrains Mono 13px, letter-spacing 0.5px) + 5-bar pattern (8×8px squares, 4px gap)
- 5-bar pattern: `[indigo, indigo-60%, indigo-40%, AMBER, indigo-40%]` — amber as 4th bar is the visual hook

### 6.3 Stats grid

- Layout: `grid-cols-4 gap-3`
- Each card: white bg, `0.5px border #E7E5E4`, `rounded-lg`, `p-5`

**Card content (3 lines)**:
1. Mono label (10px JetBrains Mono, color `#78716C`, snake_case): `years_experience`, `tests_built`, `automation_coverage`, `products_tested`
2. Big number (30px Inter Medium, letter-spacing -0.6px): `5+`, `300+`, `~70%`, `8+`
3. Context line (11px Inter, color `#525252`): `across QA roles`, `automated cases`, `across modules`, `enterprise systems`

### 6.4 Section markers

Every major section starts with monospace marker:

```jsx
<p className="font-mono text-[11px] text-stone-500 mb-2 tracking-wide">// featured work</p>
<h2 className="text-[28px] font-medium tracking-tight mb-2 text-stone-900">
  Selected case studies.
</h2>
<p className="text-sm text-stone-600 mb-8 max-w-2xl leading-relaxed">
  Brief intro line about this section.
</p>
```

Markers: `// featured work`, `// experience`, `// skills matrix`, `// contact`

### 6.5 Case study card (CS2 — Result-forward)

- Outer: white bg, `0.5px border #E7E5E4`, **`border-left: 2px solid #4338CA`**, border-radius: `0 8px 8px 0`
- Padding: `p-6`
- Card-to-card gap: `gap-3`

**Header row (flex justify-between)**:
- Left: `CASE 01` (JetBrains Mono 10px UPPERCASE, color indigo-700, letter-spacing 0.5px)
- Right: `noovoleum · 2025–present` (JetBrains Mono 11px, color stone-500)

**Title row** (after header):
- 17px Inter Medium, color stone-900: `UCO Collect — Multi-region QA ownership`

**Body grid** (`grid-cols-[1.4fr_1fr] gap-5`):
- **Left col**: Stack of PROBLEM and ACTION
  - Each label: amber-500, JetBrains Mono 10px UPPERCASE, letter-spacing 0.5px
  - Each content: 13px Inter, color stone-600, line-height 1.55
  - Gap between PROBLEM and ACTION: 12px
- **Right col**: Result highlight card
  - Background `#FAFAF9`, `0.5px border #E7E5E4`, `rounded-md`, `p-3.5 px-4`
  - Label: indigo-700 (NOT amber — color shift signals importance), JetBrains Mono 10px UPPERCASE
  - Content: 13px Inter, color stone-900, **font-weight: 500**, line-height 1.55

**Tag chip row** (border-top divider):
- Padding-top: 12px, border-top `0.5px #E7E5E4`
- Layout: `flex gap-1.5 flex-wrap`
- **Primary tags (first 2)**: `bg-indigo-700 text-white px-2.5 py-0.5 rounded-[3px] text-[10px] font-mono`
- **Supporting tags**: `bg-white text-stone-600 border border-stone-200 px-2.5 py-0.5 rounded-[3px] text-[10px] font-mono`

### 6.6 Experience timeline (X2 — Compact table)

- Container: white bg, `0.5px border #E7E5E4`, `rounded-lg`, `py-2 px-7`

**Each row** (`grid-cols-[130px_1fr_1fr_100px] gap-4`, vertical padding 14px, border-bottom `0.5px #E7E5E4` except last):

| Column | Content | Style |
|---|---|---|
| Date | `2025 → present`, `2024 → 2025`, etc. | JetBrains Mono 11px, color indigo-700 (current) or stone-500 (past) |
| Role + Company | Two stacked: role (13px Inter Medium, stone-900) + company (12px Inter, stone-600) | — |
| Keywords | `Multi-region SaaS · Playwright` (3-4 keywords, dot-separated) | 11px Inter, color stone-500 |
| Location | `jakarta` | JetBrains Mono 11px, color stone-500, text-right |

**Currently active role** (Noovoleum): date column uses indigo-700 with font-medium 500 (others use stone-500 normal weight).

### 6.7 Skills matrix

- Container: white bg, `0.5px border #E7E5E4`, `rounded-lg`, `py-1 px-7`

**Each row** (`grid-cols-[200px_1fr] gap-6`, vertical padding 16px, border-bottom):

| Column | Content | Style |
|---|---|---|
| Category | `web_mobile_automation`, `api_testing`, `performance_load`, `cicd_reporting`, `programming` | JetBrains Mono 11px, color stone-500 |
| Items | Comma-separated tools/frameworks | 13px Inter, color stone-900, line-height 1.6 |

### 6.8 Footer (FT1 — 3 col with Resources)

- Background: `#FAFAF9` with top border `0.5px #E7E5E4`
- Padding: `pt-14 pb-8 px-8`
- Margin-top from previous section: 64px

**Section heading** (above 3-col):
- `// contact` marker (JetBrains Mono 11px, stone-500)
- H2: `Let's build better software together.` (28px Inter Medium, tracking-tight)
- Body: `Open for Senior QA and QA Automation roles. Available for full-time and freelance collaboration.` (15px Inter, stone-600, max 580px width)

**3-col grid** (`grid-cols-[1.5fr_1fr_1fr] gap-8`, padding-bottom 28px, border-bottom `0.5px #E7E5E4`):

**Col 1 — Brand**:
- KR monogram (24×24) + name "Kenny Ramadhan" (14px Inter Medium)
- Description (12px Inter, stone-600, max 280px width, leading-relaxed)
- Location line (`jakarta · idn · utc+7`, JetBrains Mono 11px, stone-500)
- Status pill ("open to work", green palette)

**Col 2 — Resources** (REPLACES old "Explore" — items distinct from nav):
- Section label: `RESOURCES` (JetBrains Mono 10px UPPERCASE, stone-500, letter-spacing 0.5px)
- Links (13px Inter, stone-900):
  - `Download CV ↓`
  - `GitHub repos →`
  - `Blog (soon)` — with `(soon)` in JetBrains Mono 10px stone-500
  - `Test automation boilerplate →`

**Col 3 — Connect**:
- Section label: `CONNECT`
- Links:
  - `Email →`
  - `LinkedIn →`
  - `GitHub →`
  - `WhatsApp →`

**Bottom row** (after border):
- Padding-top: 16px
- Layout: `flex justify-between`
- Left: `© 2026 kenny ramadhan` (JetBrains Mono 11px, stone-500)
- Right: `kennyramadhan.com` (JetBrains Mono 11px, stone-500)

---

## 7. Tailwind config (full update)

Replace `tailwind.config.js` content with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          DEFAULT: "#4338CA",  // indigo-700
          subtle:  "#EEF2FF",  // indigo-50
        },
        accent: {
          DEFAULT: "#F59E0B",  // amber-500
          subtle:  "#FEF3C7",  // amber-100
        },
        // Status
        success: {
          DEFAULT: "#15803D",  // green-700
          subtle:  "#DCFCE7",  // green-100
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Typography scale (only custom sizes; rest use Tailwind defaults)
        "hero-h1":     ["44px", { lineHeight: "1.1",  letterSpacing: "-0.8px", fontWeight: 500 }],
        "section-h2":  ["28px", { lineHeight: "1.2",  letterSpacing: "-0.5px", fontWeight: 500 }],
        "card-h3":     ["17px", { lineHeight: "1.3",  fontWeight: 500 }],
        "stat":        ["30px", { lineHeight: "1",    letterSpacing: "-0.6px", fontWeight: 500 }],
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
```

**Migration notes**:
- Old `primary: #4F46E5` is now `brand.DEFAULT: #4338CA` (slightly darker indigo)
- Old `secondary: #14B8A6` (teal) is **removed** — design v2 has no teal
- Old `accent: #F59E0B` is preserved but moved to `accent.DEFAULT`
- Old `bgLight: #F5F7FF` and `bgDark: #1F2937` are **removed** — use Tailwind's stone palette directly (`stone-50`, etc)

**Usage examples in JSX**:
```jsx
// OLD
<div className="bg-primary text-white" />
<div className="bg-bgLight" />

// NEW
<div className="bg-brand text-white" />
<div className="bg-stone-50" />
```

---

## 8. Global CSS (`src/index.css`)

Add at the top of `index.css` (before `@tailwind` directives):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Set Inter as default body font */
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  color: #1A1A1A;
  background: #FFFFFF;
}
```

---

## 9. Animations (Framer Motion)

Keep existing patterns minimal. Use only for:
- Section entry on scroll: `fadeInUp` (translate-y + opacity)
- Hover transitions on cards: `transition-colors duration-200`
- Status pill dot: optional pulsing (subtle, slow — `animate-pulse` with custom duration)

**Don't add**:
- Stagger animations on every list (overuse)
- Parallax effects
- Hero background motion (grid is static)

---

## 10. Dark mode (DEFER to commit 4)

Light mode is locked first. Dark mode is a separate iteration:
- `dark:` prefix usage on all components
- Toggle component (sun/moon icon in nav)
- Color tokens have dark-mode equivalents (TBD when implementing)

**For now**: do NOT add `dark:` classes during commits 1-3. Add `darkMode: "class"` flag in Tailwind config (already there), but no dark variants yet.

---

## 11. Browser-tab title

Update `index.html` `<title>` to format A:

```html
<title>Kenny Ramadhan — Senior QA Engineer</title>
```

(Removes "| Portfolio" suffix from old title.)

---

## 12. What NOT to change

These elements are out-of-scope for this design refactor:
- Content data in `public/data/*.json` — already curated and locked
- i18n keys/values in `src/locales/{en,id}.json` — already curated and locked
- CV PDF in `public/assets/docs/` — final, do not regenerate
- Domain references (`kennyramadhan.com`) — already updated in previous sync
- Favicon files in `public/favicon/` — already redesigned and committed
- Anonymization of client/product names — already applied per AGENT.md §9

If a content change feels needed during the refactor, **flag it for separate work**, do not bundle it into this design migration.
