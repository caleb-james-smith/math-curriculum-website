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

## Phase 5 — Polish & Accessibility
- [ ] Keyboard navigation for drag-drop (move up/down buttons as fallback)
- [ ] ARIA labels on interactive elements
- [ ] Focus management in modal
- [ ] Smooth transitions for theme switch

## Future Enhancements (out of scope for v1)
- Export curriculum as PDF or shareable link
- Print-friendly stylesheet
- Prerequisite visualization (dependency graph)
- Mobile drag-drop touch support
