# Feature Specification

## Site Architecture

- **Type**: Static multi-page site (no SPA routing)
- **Tech**: HTML5, CSS3, ES Modules (no frameworks, no build step)
- **Hosting**: GitHub Pages — deploy from `main` branch root
- **Browser support**: Modern browsers (Chrome, Firefox, Safari, Edge — latest 2 versions)

---

## Data Model

Each track organizes its courses into **groups**. A group represents a grade band (K-12) or
a year of study (undergraduate and graduate). Groups are always rendered in fixed order;
only courses within and between groups can be moved by the user.

```
Track
└── groups: Group[]
    └── courses: Course[]
```

```js
// Track
{ label: string, description: string, groups: Group[] }

// Group
{ id: string, label: string, subtitle: string, courses: Course[] }

// Course
{ id: string, name: string, description: string }
```

**Group definitions by page:**

| Page | Group labels | Subtitle |
|---|---|---|
| K-12 | Elementary School | Grades K–5 |
| K-12 | Middle School | Grades 6–8 |
| K-12 | High School | Grades 9–12 |
| Undergraduate (4-year) | Year 1 – Year 4 | *(blank)* |
| Undergraduate (3-year) | Year 1 – Year 3 | *(blank)* |
| Graduate | Year 1 | Core Coursework |
| Graduate | Year 2 | Advanced Coursework |
| Graduate | Year 3+ | Research |

---

## Pages

### `index.html` — Landing Page

**Layout**
- Full-width navbar: site logo/name left, dark mode toggle right
- Hero section: site title + one-line tagline
- Three level cards arranged horizontally (stacked on mobile):
  - K-12: "Kindergarten through 12th grade"
  - Undergraduate: "College-level mathematics"
  - Graduate: "Advanced research-focused mathematics"
- Each card links to its respective page

---

### `k12.html` — K-12 Curriculum

**Tracks**

| Track ID | Label | Description |
|---|---|---|
| `regular` | Regular | Standard K-12 progression ending with pre-calculus and statistics |
| `advanced1` | 1 Year Advanced | Accelerated; reaches AP Calculus AB by senior year |
| `advanced2` | 2 Years Advanced | Further accelerated; reaches Multivariable Calculus or Linear Algebra by senior year |

**Default groups & courses — Regular**

*Elementary School (Grades K–5)*
1. Number Sense & Operations — Whole numbers, place value, and the four arithmetic operations. Builds the foundation for all future mathematics.
2. Fractions & Decimals — Understanding parts of a whole, decimal notation, and basic fraction arithmetic.

*Middle School (Grades 6–8)*
3. Ratios & Proportional Reasoning — Ratios, rates, unit rates, and proportional relationships across real-world contexts.
4. Pre-Algebra — Introduction to variables, expressions, equations, and the coordinate plane.

*High School (Grades 9–12)*
5. Algebra I — Linear equations and inequalities, systems of equations, and an introduction to functions.
6. Geometry — Euclidean geometry, congruence, similarity, area, volume, and basic trigonometry.
7. Algebra II — Polynomials, rational functions, exponentials, logarithms, and conic sections.
8. Pre-Calculus — Trigonometric functions, sequences and series, and limits as preparation for calculus.
9. Statistics & Probability — Descriptive statistics, probability theory, and an introduction to statistical inference.

---

**Default groups & courses — 1 Year Advanced**

*Elementary School (Grades K–5)*
1. Number Sense & Operations — Whole numbers, place value, and the four arithmetic operations.
2. Fractions, Decimals & Ratios — Unified treatment of fractions, decimals, ratios, and proportional reasoning — completed at an accelerated pace.

*Middle School (Grades 6–8)*
3. Pre-Algebra — Variables, expressions, equations, and the coordinate plane — completed one year early.
4. Algebra I — Linear equations, inequalities, systems, and functions — taken in 7th grade.
5. Geometry — Euclidean geometry, congruence, similarity, area, volume, and trigonometry.

*High School (Grades 9–12)*
6. Algebra II — Polynomials, rational and exponential functions, logarithms, and conic sections.
7. Pre-Calculus — Trigonometric functions, sequences and series, limits, and analytic geometry.
8. AP Calculus AB — Differential and integral calculus of single-variable functions at the AP level.
9. Statistics & Probability — Descriptive statistics, probability theory, and statistical inference (AP Statistics or equivalent).

---

**Default groups & courses — 2 Years Advanced**

*Elementary School (Grades K–5)*
1. Number Sense & Early Algebra — Arithmetic, fractions, ratios, and introduction to variables — completed at an accelerated pace in elementary school.

*Middle School (Grades 6–8)*
2. Algebra I — Linear equations, inequalities, systems, and functions — taken in 6th grade.
3. Geometry — Euclidean geometry, congruence, similarity, area, volume, and trigonometry.
4. Algebra II — Polynomials, rational and exponential functions, logarithms, and conic sections.

*High School (Grades 9–12)*
5. Pre-Calculus — Trigonometric functions, sequences, series, limits, and analytic geometry.
6. AP Calculus AB — Differential and integral calculus of single-variable functions at the AP level.
7. AP Calculus BC — Further integration techniques, infinite series, parametric and polar curves at the AP level.
8. Linear Algebra — Vectors, matrices, linear transformations, determinants, eigenvalues, and eigenvectors.
9. Multivariable Calculus — Partial derivatives, multiple integrals, line and surface integrals, and vector calculus theorems.

---

### `undergraduate.html` — Undergraduate Curriculum

**Tracks**

| Track ID | Label | Description |
|---|---|---|
| `4year` | 4-Year Plan | Full progression from calculus through senior-level electives over four years |
| `3year` | 3-Year Plan | For students entering with one year of equivalent calculus credit |

**Default groups & courses — 4-Year Plan**

*Year 1*
1. Calculus I — Limits, derivatives, and an introduction to integration.
2. Calculus II — Integration techniques, sequences, series, and Taylor expansions.
3. Linear Algebra — Vectors, matrices, linear transformations, and eigenvalues.
4. Introduction to Proofs — Logic, set theory, mathematical induction, and core proof techniques.

*Year 2*
5. Calculus III (Multivariable) — Partial derivatives, multiple integrals, and vector calculus.
6. Differential Equations — Ordinary differential equations, systems, Laplace transforms, and applications.
7. Abstract Algebra I — Groups, rings, and fields with an emphasis on proof and structure.
8. Real Analysis I — Rigorous treatment of limits, continuity, differentiation, and Riemann integration.

*Year 3*
9. Abstract Algebra II — Advanced group theory, Galois theory, and modules.
10. Real Analysis II — Metric spaces, uniform convergence, and an introduction to measure theory.
11. Complex Analysis — Analytic functions, contour integration, residues, and conformal maps.
12. Topology — Metric spaces, topological spaces, compactness, and connectedness.

*Year 4*
13. Senior Elective I — Choose from number theory, geometry, applied mathematics, or probability.
14. Senior Elective II — Choose from number theory, geometry, applied mathematics, or probability.
15. Senior Seminar / Capstone — Independent reading, mathematical writing, and a final research presentation.

---

**Default groups & courses — 3-Year Plan**

*Year 1*
1. Calculus III (Multivariable) — Partial derivatives, multiple integrals, and vector calculus.
2. Differential Equations — Ordinary differential equations, systems, Laplace transforms, and applications.
3. Abstract Algebra I — Groups, rings, and fields with an emphasis on proof and structure.
4. Real Analysis I — Rigorous treatment of limits, continuity, differentiation, and Riemann integration.

*Year 2*
5. Abstract Algebra II — Advanced group theory, Galois theory, and modules.
6. Real Analysis II — Metric spaces, uniform convergence, and an introduction to measure theory.
7. Complex Analysis — Analytic functions, contour integration, residues, and conformal maps.
8. Topology — Metric spaces, topological spaces, compactness, and connectedness.

*Year 3*
9. Senior Elective I — Choose from number theory, geometry, applied mathematics, or probability.
10. Senior Elective II — Choose from number theory, geometry, applied mathematics, or probability.
11. Senior Seminar / Capstone — Independent reading, mathematical writing, and a final research presentation.

---

### `graduate.html` — Graduate Curriculum

**Tracks**

| Track ID | Label | Description |
|---|---|---|
| `algebra` | Algebra & Number Theory | Algebraic structures, number theory, and representation theory |
| `analysis` | Analysis & Topology | Real/complex/functional analysis, algebraic topology, differential geometry |
| `applied` | Applied Math & Physics | PDEs, numerical analysis, mathematical physics, and scientific computing |
| `probability` | Probability & Statistics | Measure-theoretic probability, stochastic processes, mathematical statistics |

**Default groups & courses — Algebra & Number Theory**

*Year 1 — Core Coursework*
1. Graduate Abstract Algebra — Group theory, ring theory, modules, and Galois theory at the graduate level.
2. Algebraic Number Theory — Number fields, rings of integers, ideal class groups, and Dirichlet's unit theorem.

*Year 2 — Advanced Coursework*
3. Commutative Algebra — Noetherian rings, primary decomposition, localisation, and completion.
4. Representation Theory — Linear representations of finite groups, characters, induced representations, and applications.
5. Algebraic Geometry I — Affine and projective varieties, morphisms, sheaves, and an introduction to schemes.

*Year 3+ — Research*
6. Advanced Topics in Number Theory — Selected topics such as elliptic curves, modular forms, or L-functions.
7. Research Seminar — Weekly seminar in algebra or number theory; reading of current literature and presentations.
8. Dissertation Research — Original research in the chosen specialisation area, culminating in a doctoral dissertation.

---

**Default groups & courses — Analysis & Topology**

*Year 1 — Core Coursework*
1. Graduate Real Analysis — Measure theory, Lebesgue integration, L^p spaces, and Fourier analysis.
2. Graduate Complex Analysis — Riemann surfaces, analytic continuation, and advanced function theory.

*Year 2 — Advanced Coursework*
3. Functional Analysis — Banach and Hilbert spaces, bounded operators, the spectral theorem, and distributions.
4. Graduate Topology — Algebraic topology: fundamental group, covering spaces, singular homology, and cohomology.
5. Differential Geometry — Smooth manifolds, tangent bundles, differential forms, and Stokes' theorem.

*Year 3+ — Research*
6. Riemannian Geometry — Riemannian metrics, geodesics, curvature tensors, and comparison theorems.
7. Research Seminar — Weekly seminar in analysis or topology; reading of current literature and presentations.
8. Dissertation Research — Original research in the chosen specialisation area, culminating in a doctoral dissertation.

---

**Default groups & courses — Applied Math & Physics**

*Year 1 — Core Coursework*
1. Graduate ODEs & Dynamical Systems — Existence and uniqueness theory, stability analysis, bifurcations, and chaos.
2. Partial Differential Equations — Classical PDEs, elliptic/parabolic/hyperbolic theory, and weak solutions in Sobolev spaces.

*Year 2 — Advanced Coursework*
3. Numerical Analysis — Numerical methods for linear systems, ODEs, PDEs, and optimisation; error analysis.
4. Mathematical Physics — Classical mechanics, quantum mechanics, and statistical physics from a rigorous mathematical perspective.
5. Asymptotic & Perturbation Methods — Asymptotic expansions, matched asymptotics, WKB analysis, and multi-scale methods.

*Year 3+ — Research*
6. Computational Mathematics — Finite element and finite difference methods, high-performance scientific computing.
7. Research Seminar — Weekly seminar in applied mathematics; reading of current literature and presentations.
8. Dissertation Research — Original research in the chosen specialisation area, culminating in a doctoral dissertation.

---

**Default groups & courses — Probability & Statistics**

*Year 1 — Core Coursework*
1. Measure-Theoretic Probability — Probability spaces, random variables, expectation, and the major convergence theorems.
2. Stochastic Processes — Martingales, Brownian motion, Markov chains, and an introduction to Itô calculus.

*Year 2 — Advanced Coursework*
3. Mathematical Statistics — Statistical estimation theory, hypothesis testing, decision theory, and asymptotic methods.
4. Bayesian Statistics — Bayesian inference, prior distributions, hierarchical models, and MCMC algorithms.
5. High-Dimensional Statistics — Statistical learning theory, concentration inequalities, and random matrix theory.

*Year 3+ — Research*
6. Advanced Stochastic Analysis — Stochastic differential equations, Malliavin calculus, and stochastic optimal control.
7. Research Seminar — Weekly seminar in probability and statistics; reading of current literature and presentations.
8. Dissertation Research — Original research in the chosen specialisation area, culminating in a doctoral dissertation.

---

## Customization Features

### Track Selection
- Displayed as tab-style buttons above the course list
- Switching track: load from localStorage if saved, else load defaults from `data.js`
- Active tab visually highlighted

### Group Section Display
- Each group renders as a labeled section with a bold header and a muted subtitle
- Sections are visually separated (spacing and/or a light divider)
- Group order is fixed (grade/year order is always meaningful and cannot be changed)

### Course Card
- Drag handle (≡) — indicates draggability
- **Course name** — bold, full weight
- Description — smaller, muted color
- Remove button (×) — top-right; removes card and saves to localStorage

### Drag-to-Reorder (within a group)
- HTML5 native drag-and-drop within a group's course list
- Visual drop indicator line between cards
- After drop: update in-memory courses array for that group → re-render → save

### Move Between Groups (cross-group drag)
- A card dragged over a different group's list shows a drop target indicator
- On drop: remove course from source group, insert at target position in destination group
- Save the updated groups array to localStorage

### Add Course
- "Add Course" button opens a modal overlay
- Modal fields: Course Name (required), Description (optional), Group (dropdown — required)
- Submit: append course to the selected group's course list, save, close modal
- Cancel / Escape: close modal without saving

### Reset to Default
- Single click — no extra confirmation dialog
- Clears the localStorage key for the current page + track
- Reloads default groups and courses from `data.js` and re-renders

---

## localStorage Contract

| Key | Value | Set by |
|---|---|---|
| `theme` | `"light"` \| `"dark"` | Theme toggle button |
| `curriculum-k12-regular` | JSON array of group objects | Any edit on K-12 Regular track |
| `curriculum-k12-advanced1` | JSON array of group objects | Any edit on K-12 1-Year Advanced track |
| `curriculum-k12-advanced2` | JSON array of group objects | Any edit on K-12 2-Year Advanced track |
| `curriculum-undergrad-4year` | JSON array of group objects | Any edit on Undergrad 4-Year track |
| `curriculum-undergrad-3year` | JSON array of group objects | Any edit on Undergrad 3-Year track |
| `curriculum-grad-algebra` | JSON array of group objects | Any edit on Grad Algebra track |
| `curriculum-grad-analysis` | JSON array of group objects | Any edit on Grad Analysis track |
| `curriculum-grad-applied` | JSON array of group objects | Any edit on Grad Applied track |
| `curriculum-grad-probability` | JSON array of group objects | Any edit on Grad Probability track |

Each stored group object matches the `Group` shape: `{ id, label, subtitle, courses[] }`.

---

## Accessibility Requirements
- All interactive elements reachable and activatable by keyboard
- Modal traps focus while open; returns focus to trigger on close
- Group selector in modal is a native `<select>` — keyboard accessible by default
- Drag handles have `aria-label="Drag to reorder"`
- Remove buttons have `aria-label="Remove [course name]"`
- Color contrast meets WCAG AA in both light and dark modes
- Theme toggle has descriptive `aria-label` that reflects current state
