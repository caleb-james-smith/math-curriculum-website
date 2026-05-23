# Feature Specification

## Site Architecture

- **Type**: Static multi-page site (no SPA routing)
- **Tech**: HTML5, CSS3, ES Modules (no frameworks, no build step)
- **Hosting**: GitHub Pages — deploy from `main` branch root
- **Browser support**: Modern browsers (Chrome, Firefox, Safari, Edge — latest 2 versions)

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

### `k12.html` — K-12 Curriculum

**Tracks**

| Track ID | Label | Description |
|---|---|---|
| `regular` | Regular | Standard K-12 progression ending with pre-calculus and statistics |
| `advanced1` | 1 Year Advanced | Accelerated; reaches Calculus AB/BC by senior year |
| `advanced2` | 2 Years Advanced | Further accelerated; reaches Multivariable Calculus or Linear Algebra by senior year |

**Default courses — Regular**
1. Number Sense & Operations — Whole numbers, place value, and the four arithmetic operations. Builds the foundation for all future mathematics.
2. Fractions & Decimals — Understanding parts of a whole, decimal notation, and basic fraction arithmetic.
3. Ratios & Proportional Reasoning — Ratios, rates, unit rates, and proportional relationships.
4. Pre-Algebra — Introduction to variables, expressions, equations, and the coordinate plane.
5. Algebra I — Linear equations and inequalities, systems of equations, and an introduction to functions.
6. Geometry — Euclidean geometry, congruence, similarity, area, volume, and basic trigonometry.
7. Algebra II — Polynomials, rational functions, exponentials, logarithms, and conic sections.
8. Pre-Calculus — Trigonometric functions, sequences and series, and limits as preparation for calculus.
9. Statistics & Probability — Descriptive statistics, probability theory, and introduction to inference.

**Default courses — 1 Year Advanced**
1. Number Sense & Operations — Whole numbers, place value, and the four arithmetic operations.
2. Fractions, Decimals & Ratios — Unified treatment of fractions, decimals, ratios, and proportional reasoning.
3. Pre-Algebra — Variables, expressions, equations, and the coordinate plane — completed one year early.
4. Algebra I — Linear equations, inequalities, systems, and functions — taken in 7th grade.
5. Geometry — Euclidean geometry, congruence, similarity, area, volume, and trigonometry.
6. Algebra II — Polynomials, rational and exponential functions, logarithms, and conic sections.
7. Pre-Calculus — Trigonometric functions, sequences and series, limits, and analytic geometry.
8. Calculus AB — Differential and integral calculus of single-variable functions (AP-level).
9. Statistics & Probability — Descriptive statistics, probability theory, and statistical inference.

**Default courses — 2 Years Advanced**
1. Number Sense & Early Algebra — Arithmetic, fractions, ratios, and introduction to variables — completed early.
2. Algebra I — Linear equations, inequalities, systems, and functions — taken in 6th grade.
3. Geometry — Euclidean geometry, congruence, similarity, and trigonometry.
4. Algebra II — Polynomials, rational and exponential functions, logarithms, and conic sections.
5. Pre-Calculus — Trigonometric functions, sequences, series, limits, and analytic geometry.
6. Calculus AB — Differential and integral calculus of single-variable functions (AP-level).
7. Calculus BC — Further integration techniques, series, parametric/polar curves (AP-level).
8. Linear Algebra — Vectors, matrices, linear transformations, eigenvalues, and eigenvectors.
9. Multivariable Calculus — Partial derivatives, multiple integrals, and vector calculus.

---

### `undergraduate.html` — Undergraduate Curriculum

**Tracks**

| Track ID | Label | Description |
|---|---|---|
| `4year` | 4-Year Plan | Full progression from calculus through senior-level electives |
| `3year` | 3-Year Plan | For students entering with one year of equivalent credit |

**Default courses — 4-Year Plan**

Year 1:
1. Calculus I — Limits, derivatives, and an introduction to integration.
2. Calculus II — Integration techniques, sequences, series, and Taylor expansions.
3. Linear Algebra — Vectors, matrices, linear transformations, and eigenvalues.
4. Introduction to Proofs — Logic, set theory, induction, and proof techniques for mathematics.

Year 2:
5. Calculus III (Multivariable) — Partial derivatives, multiple integrals, and vector calculus.
6. Differential Equations — Ordinary differential equations, systems, and applications.
7. Abstract Algebra I — Groups, rings, and fields with an emphasis on proof.
8. Real Analysis I — Rigorous treatment of limits, continuity, differentiation, and integration.

Year 3:
9. Abstract Algebra II — Advanced group theory, Galois theory, and modules.
10. Real Analysis II — Measure theory, Lebesgue integration, and function spaces.
11. Complex Analysis — Analytic functions, contour integration, residues, and conformal maps.
12. Topology — Metric spaces, topological spaces, compactness, and connectedness.

Year 4:
13. Senior Elective I — Choose from number theory, geometry, applied math, or probability.
14. Senior Elective II — Choose from number theory, geometry, applied math, or probability.
15. Senior Seminar / Capstone — Independent reading, presentation, or research project.

**Default courses — 3-Year Plan**

Year 1 (entering with credit):
1. Calculus III (Multivariable) — Partial derivatives, multiple integrals, and vector calculus.
2. Differential Equations — Ordinary differential equations, systems, and applications.
3. Abstract Algebra I — Groups, rings, and fields with an emphasis on proof.
4. Real Analysis I — Rigorous treatment of limits, continuity, differentiation, and integration.

Year 2:
5. Abstract Algebra II — Advanced group theory, Galois theory, and modules.
6. Real Analysis II — Measure theory, Lebesgue integration, and function spaces.
7. Complex Analysis — Analytic functions, contour integration, residues, and conformal maps.
8. Topology — Metric spaces, topological spaces, compactness, and connectedness.

Year 3:
9. Senior Elective I — Choose from number theory, geometry, applied math, or probability.
10. Senior Elective II — Choose from number theory, geometry, applied math, or probability.
11. Senior Seminar / Capstone — Independent reading, presentation, or research project.

---

### `graduate.html` — Graduate Curriculum

**Tracks**

| Track ID | Label | Description |
|---|---|---|
| `algebra` | Algebra & Number Theory | Algebraic structures, number theory, and representation theory |
| `analysis` | Analysis & Topology | Real/complex/functional analysis, algebraic topology, differential geometry |
| `applied` | Applied Math & Physics | PDEs, numerical analysis, mathematical physics, computational methods |
| `probability` | Probability & Statistics | Measure-theoretic probability, stochastic processes, mathematical statistics |

**Default courses — Algebra & Number Theory**
1. Graduate Abstract Algebra — Group theory, ring theory, modules, and Galois theory at the graduate level.
2. Algebraic Number Theory — Number fields, rings of integers, ideal class groups, and Dirichlet's theorem.
3. Commutative Algebra — Noetherian rings, primary decomposition, localisation, and completion.
4. Representation Theory — Linear representations of finite groups, characters, and induced representations.
5. Algebraic Geometry I — Affine and projective varieties, morphisms, sheaves, and schemes.
6. Advanced Topics in Number Theory — Selected topics: elliptic curves, modular forms, or L-functions.
7. Research Seminar — Weekly seminar in algebra or number theory; literature review and presentations.
8. Dissertation Research — Original research in the chosen specialisation area.

**Default courses — Analysis & Topology**
1. Graduate Real Analysis — Measure theory, Lebesgue integration, L^p spaces, and Fourier analysis.
2. Graduate Complex Analysis — Riemann surfaces, analytic continuation, and advanced function theory.
3. Functional Analysis — Banach and Hilbert spaces, bounded operators, spectral theory.
4. Graduate Topology — Algebraic topology: fundamental group, covering spaces, homology, and cohomology.
5. Differential Geometry — Smooth manifolds, tangent bundles, differential forms, and Stokes' theorem.
6. Riemannian Geometry — Riemannian metrics, geodesics, curvature, and comparison theorems.
7. Research Seminar — Weekly seminar in analysis or topology; literature review and presentations.
8. Dissertation Research — Original research in the chosen specialisation area.

**Default courses — Applied Math & Physics**
1. Graduate ODEs & Dynamical Systems — Existence and uniqueness theory, stability analysis, and bifurcations.
2. Partial Differential Equations — Classical PDEs, elliptic/parabolic/hyperbolic theory, and weak solutions.
3. Numerical Analysis — Numerical methods for linear systems, ODEs, PDEs, and optimisation.
4. Mathematical Physics — Classical mechanics, quantum mechanics, and statistical physics from a mathematical perspective.
5. Asymptotic & Perturbation Methods — Asymptotic expansions, matched asymptotics, and multi-scale analysis.
6. Computational Mathematics — Finite element and finite difference methods; scientific computing.
7. Research Seminar — Weekly seminar in applied mathematics; literature review and presentations.
8. Dissertation Research — Original research in the chosen specialisation area.

**Default courses — Probability & Statistics**
1. Measure-Theoretic Probability — Probability spaces, random variables, expectation, and convergence theorems.
2. Stochastic Processes — Martingales, Brownian motion, Markov chains, and Itô calculus.
3. Mathematical Statistics — Statistical estimation theory, hypothesis testing, and decision theory.
4. Bayesian Statistics — Bayesian inference, prior distributions, hierarchical models, and MCMC.
5. High-Dimensional Statistics — Statistical learning, concentration inequalities, and random matrix theory.
6. Advanced Stochastic Analysis — Stochastic differential equations and stochastic optimal control.
7. Research Seminar — Weekly seminar in probability and statistics; literature review and presentations.
8. Dissertation Research — Original research in the chosen specialisation area.

---

## Customization Features

### Track Selection
- Displayed as tab-style buttons above the course list
- Switching track: load from localStorage if saved, else load defaults from `data.js`
- Active tab visually highlighted

### Course Card
- Drag handle (≡) — indicates draggability
- **Course name** — bold, full weight
- Description — smaller, muted color
- Remove button (×) — top-right; removes card and saves to localStorage

### Drag-to-Reorder
- HTML5 native drag-and-drop
- Visual drop indicator line between cards
- After drop: update in-memory array, re-render list, save to localStorage

### Add Course
- "Add Course" button opens a modal overlay
- Modal fields: Course Name (required), Description (optional)
- Submit: prepend/append course to list, save, close modal
- Cancel / Escape: close modal without saving

### Reset to Default
- Confirmation: single click (no extra dialog)
- Clears the localStorage key for current page+track
- Reloads default data from `data.js` and re-renders

---

## localStorage Contract

| Key | Value | Set by |
|---|---|---|
| `theme` | `"light"` \| `"dark"` | Theme toggle button |
| `curriculum-k12-regular` | JSON array of course objects | Any edit on K-12 Regular track |
| `curriculum-k12-advanced1` | JSON array of course objects | Any edit on K-12 1-Year Advanced track |
| `curriculum-k12-advanced2` | JSON array of course objects | Any edit on K-12 2-Year Advanced track |
| `curriculum-undergrad-4year` | JSON array of course objects | Any edit on Undergrad 4-Year track |
| `curriculum-undergrad-3year` | JSON array of course objects | Any edit on Undergrad 3-Year track |
| `curriculum-grad-algebra` | JSON array of course objects | Any edit on Grad Algebra track |
| `curriculum-grad-analysis` | JSON array of course objects | Any edit on Grad Analysis track |
| `curriculum-grad-applied` | JSON array of course objects | Any edit on Grad Applied track |
| `curriculum-grad-probability` | JSON array of course objects | Any edit on Grad Probability track |

---

## Accessibility Requirements
- All interactive elements reachable and activatable by keyboard
- Modal traps focus while open; returns focus to trigger on close
- Drag handles have `aria-label="Drag to reorder"`
- Remove buttons have `aria-label="Remove [course name]"`
- Color contrast meets WCAG AA in both light and dark modes
- Theme toggle has descriptive `aria-label` that reflects current state
