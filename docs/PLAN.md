# Development Plan

## Phase 1 — Project Skeleton
- [x] Create `CLAUDE.md` with project context for Claude
- [x] Update `README.md` with setup and deployment instructions
- [x] Create `docs/PLAN.md` (this file)
- [x] Create `docs/SPEC.md`

## Phase 2 — CSS Design System (`css/style.css`)
- [x] CSS custom properties for blue/yellow color scheme
- [x] Light/dark mode via `[data-theme]` attribute + `prefers-color-scheme` fallback
- [x] Base reset and typography
- [x] Navbar component
- [x] Landing page level cards
- [x] Track tab selector
- [x] Course card (with drag handle and remove button)
- [x] Add Course modal
- [x] Responsive layout (mobile-friendly)

## Phase 3 — JavaScript Modules
- [x] `js/theme.js` — read system preference, apply saved theme, wire toggle button
- [x] `js/data.js` — all default curriculum data for all tracks
- [x] `js/curriculum.js` — render track, drag-drop reorder, add/remove course, localStorage sync

## Phase 4 — HTML Pages
- [x] `index.html` — landing page with level cards and navbar
- [x] `k12.html` — K-12 page with 3 tracks
- [x] `undergraduate.html` — Undergraduate page with 2 tracks
- [x] `graduate.html` — Graduate page with 4 tracks

## Phase 5 — Grade/Year Groups

Courses are now organized into named groups (grade bands for K-12, years for undergrad/grad).
Users can move courses between groups as well as reorder within a group.

### Data model change (`js/data.js`)
- [ ] Replace flat `courses` array on each track with a `groups` array
- [ ] Each group has: `id`, `label`, `subtitle`, `courses[]`
- [ ] Assign all existing courses to their correct group per track:
  - K-12 groups: Elementary School (K–5) · Middle School (6–8) · High School (9–12)
  - Undergrad 4-Year groups: Year 1 · Year 2 · Year 3 · Year 4
  - Undergrad 3-Year groups: Year 1 · Year 2 · Year 3
  - Graduate groups: Year 1 (Core) · Year 2 (Advanced) · Year 3+ (Research)

### Rendering change (`js/curriculum.js`)
- [ ] Render a labeled section header per group (`<h3>` + subtitle)
- [ ] Each section has its own `.course-list` with draggable cards
- [ ] Cards carry `data-group-id` and `data-index` attributes
- [ ] Drag-drop: reorder within a group (existing) + move between groups (new)
- [ ] "Add Course" modal gains a Group selector dropdown
- [ ] localStorage value changes from flat array to array of group objects

### Style change (`css/style.css`)
- [ ] Group section header style (label + subtitle, visually separated from cards)
- [ ] Visual distinction between group sections (spacing, optional divider)
- [ ] Drag-over highlight works at the group level when dragging between sections

## Phase 6 — Polish & Accessibility
- [ ] Keyboard navigation for drag-drop (move up/down buttons as fallback)
- [ ] ARIA labels on interactive elements
- [ ] Focus management in modal
- [ ] Smooth transitions for theme switch

## Future Enhancements (out of scope for v1)
- Export curriculum as PDF or shareable link
- Print-friendly stylesheet
- Prerequisite visualization (dependency graph)
- Mobile drag-drop touch support
