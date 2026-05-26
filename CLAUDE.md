# CLAUDE.md — Math Curriculum Website

## Project Overview
Static math curriculum website (plain HTML/CSS/JS, no build step) hosted on GitHub Pages.
Three level pages (K-12, Undergraduate, Graduate) each with track selection and fully
user-editable course lists (reorder, add, remove). Customizations saved to localStorage.

## File Roles
| File | Purpose |
|---|---|
| `index.html` | Landing page — three level cards |
| `k12.html` | K-12 curriculum page |
| `undergraduate.html` | Undergraduate curriculum page |
| `graduate.html` | Graduate curriculum page |
| `css/style.css` | All styles — CSS custom properties, themes, components |
| `js/data.js` | Default curriculum data for all tracks (ES module) |
| `js/curriculum.js` | Render, drag-drop reorder, add/remove, localStorage sync (ES module) |
| `js/theme.js` | Dark/light mode — reads system preference, handles toggle (ES module) |

## Tech Constraints
- No frameworks, no build step — plain HTML5 / CSS3 / ES modules
- GitHub Pages deploy: push to `main`, serve from root
- ES modules: all `<script>` tags use `type="module"`

## Color & Theme System
CSS custom properties on `:root` for light mode, overridden by `[data-theme="dark"]` on `<html>`.
System preference handled via `prefers-color-scheme` media query.
Toggle writes `data-theme` attribute and saves choice to `localStorage` key `theme`.

| Token | Light | Dark |
|---|---|---|
| `--color-primary` | `#1a56a4` | `#4a90d9` |
| `--color-accent` | `#f5c518` | `#f5c518` |
| `--color-bg` | `#ffffff` | `#0d1117` |
| `--color-surface` | `#f0f4fb` | `#161b22` |
| `--color-text` | `#1a1a2e` | `#e6edf3` |
| `--color-text-muted` | `#5a6a8a` | `#8b949e` |
| `--color-border` | `#d0daea` | `#30363d` |

## Data Model

Courses are organized into **groups** (grade bands for K-12, years for undergrad/grad).
Each track has a `groups` array; each group has its own `courses` array.

```js
// Track shape
{
  label: string,
  description: string,
  groups: GroupObject[]
}

// Group shape
{
  id: string,        // stable, used as key (e.g. "k12-r-g-elem")
  label: string,     // e.g. "Elementary School" | "Year 1"
  subtitle: string,  // e.g. "Grades K–5" | "entering year"
  courses: CourseObject[]
}

// Course shape
{
  id: string,        // stable; crypto.randomUUID() for user-added courses
  name: string,
  description: string
}
```

**Group labels by page:**
- K-12: Elementary School (Grades K–5), Middle School (Grades 6–8), High School (Grades 9–12)
- Undergraduate 4-Year: Year 1 – Year 4
- Undergraduate 3-Year: Year 1 – Year 3
- Graduate: Year 1 (Core Coursework), Year 2 (Advanced Coursework), Year 3+ (Research)

## localStorage Schema
- Theme: key `theme`, value `"light"` or `"dark"`
- Curriculum: key `curriculum-{page}-{trackId}`, value JSON array of **group objects** (full structure)

Page identifiers: `k12`, `undergrad`, `grad`
Track identifiers: `regular`, `advanced1`, `advanced2`, `4year`, `3year`,
`algebra`, `analysis`, `applied`, `probability`

## Drag-and-Drop
HTML5 native API (`draggable="true"`). Supports two operations:
- **Within a group** — reorder courses inside the same grade/year section
- **Between groups** — move a course from one grade/year to another

Each card carries `data-group-id` and `data-index`. Drop handler reads both to determine
the source and destination group. After any drop: update in-memory groups array → re-render → save to localStorage.

Groups themselves are fixed in order (grade/year order is always meaningful).

## docs/
- `docs/PLAN.md` — phased development roadmap
- `docs/SPEC.md` — full feature specifications
