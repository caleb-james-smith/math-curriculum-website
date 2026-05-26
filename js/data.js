export const k12Tracks = {
  regular: {
    label: 'Regular',
    description: 'Standard K-12 progression ending with pre-calculus and statistics. Suitable for most students.',
    groups: [
      {
        id: 'g-elem',
        label: 'Elementary School',
        subtitle: 'Grades K–5',
        courses: [
          { id: 'k12-r-1', name: 'Number Sense & Operations', description: 'Whole numbers, place value, and the four arithmetic operations. Builds the foundation for all future mathematics.' },
          { id: 'k12-r-2', name: 'Fractions & Decimals', description: 'Understanding parts of a whole, decimal notation, and basic fraction arithmetic.' },
        ],
      },
      {
        id: 'g-mid',
        label: 'Middle School',
        subtitle: 'Grades 6–8',
        courses: [
          { id: 'k12-r-3', name: 'Ratios & Proportional Reasoning', description: 'Ratios, rates, unit rates, and proportional relationships across real-world contexts.' },
          { id: 'k12-r-4', name: 'Pre-Algebra', description: 'Introduction to variables, expressions, equations, and the coordinate plane.' },
        ],
      },
      {
        id: 'g-high',
        label: 'High School',
        subtitle: 'Grades 9–12',
        courses: [
          { id: 'k12-r-5', name: 'Algebra I', description: 'Linear equations and inequalities, systems of equations, and an introduction to functions.' },
          { id: 'k12-r-6', name: 'Geometry', description: 'Euclidean geometry, congruence, similarity, area, volume, and basic trigonometry.' },
          { id: 'k12-r-7', name: 'Algebra II', description: 'Polynomials, rational functions, exponentials, logarithms, and conic sections.' },
          { id: 'k12-r-8', name: 'Pre-Calculus', description: 'Trigonometric functions, sequences and series, and limits as preparation for calculus.' },
          { id: 'k12-r-9', name: 'Statistics & Probability', description: 'Descriptive statistics, probability theory, and an introduction to statistical inference.' },
        ],
      },
    ],
  },

  advanced1: {
    label: '1 Year Advanced',
    description: 'Accelerated track, beginning algebra one year early. Reaches AP Calculus AB by senior year.',
    groups: [
      {
        id: 'g-elem',
        label: 'Elementary School',
        subtitle: 'Grades K–5',
        courses: [
          { id: 'k12-a1-1', name: 'Number Sense & Operations', description: 'Whole numbers, place value, and the four arithmetic operations.' },
          { id: 'k12-a1-2', name: 'Fractions, Decimals & Ratios', description: 'Unified treatment of fractions, decimals, ratios, and proportional reasoning — completed at an accelerated pace.' },
        ],
      },
      {
        id: 'g-mid',
        label: 'Middle School',
        subtitle: 'Grades 6–8',
        courses: [
          { id: 'k12-a1-3', name: 'Pre-Algebra', description: 'Variables, expressions, equations, and the coordinate plane — completed one year early.' },
          { id: 'k12-a1-4', name: 'Algebra I', description: 'Linear equations, inequalities, systems, and functions — taken in 7th grade.' },
          { id: 'k12-a1-5', name: 'Geometry', description: 'Euclidean geometry, congruence, similarity, area, volume, and trigonometry.' },
        ],
      },
      {
        id: 'g-high',
        label: 'High School',
        subtitle: 'Grades 9–12',
        courses: [
          { id: 'k12-a1-6', name: 'Algebra II', description: 'Polynomials, rational and exponential functions, logarithms, and conic sections.' },
          { id: 'k12-a1-7', name: 'Pre-Calculus', description: 'Trigonometric functions, sequences and series, limits, and analytic geometry.' },
          { id: 'k12-a1-8', name: 'AP Calculus AB', description: 'Differential and integral calculus of single-variable functions at the AP level.' },
          { id: 'k12-a1-9', name: 'Statistics & Probability', description: 'Descriptive statistics, probability theory, and statistical inference (AP Statistics or equivalent).' },
        ],
      },
    ],
  },

  advanced2: {
    label: '2 Years Advanced',
    description: 'Further accelerated track, starting algebra in 6th grade. Reaches Multivariable Calculus or Linear Algebra by senior year.',
    groups: [
      {
        id: 'g-elem',
        label: 'Elementary School',
        subtitle: 'Grades K–5',
        courses: [
          { id: 'k12-a2-1', name: 'Number Sense & Early Algebra', description: 'Arithmetic, fractions, ratios, and introduction to variables — completed at an accelerated pace in elementary school.' },
        ],
      },
      {
        id: 'g-mid',
        label: 'Middle School',
        subtitle: 'Grades 6–8',
        courses: [
          { id: 'k12-a2-2', name: 'Algebra I', description: 'Linear equations, inequalities, systems, and functions — taken in 6th grade.' },
          { id: 'k12-a2-3', name: 'Geometry', description: 'Euclidean geometry, congruence, similarity, area, volume, and trigonometry.' },
          { id: 'k12-a2-4', name: 'Algebra II', description: 'Polynomials, rational and exponential functions, logarithms, and conic sections.' },
        ],
      },
      {
        id: 'g-high',
        label: 'High School',
        subtitle: 'Grades 9–12',
        courses: [
          { id: 'k12-a2-5', name: 'Pre-Calculus', description: 'Trigonometric functions, sequences, series, limits, and analytic geometry.' },
          { id: 'k12-a2-6', name: 'AP Calculus AB', description: 'Differential and integral calculus of single-variable functions at the AP level.' },
          { id: 'k12-a2-7', name: 'AP Calculus BC', description: 'Further integration techniques, infinite series, parametric and polar curves at the AP level.' },
          { id: 'k12-a2-8', name: 'Linear Algebra', description: 'Vectors, matrices, linear transformations, determinants, eigenvalues, and eigenvectors.' },
          { id: 'k12-a2-9', name: 'Multivariable Calculus', description: 'Partial derivatives, multiple integrals, line and surface integrals, and vector calculus theorems.' },
        ],
      },
    ],
  },
};

export const undergradTracks = {
  '4year': {
    label: '4-Year Plan',
    description: 'Full progression from calculus through senior-level electives over four years.',
    groups: [
      {
        id: 'g-y1',
        label: 'Year 1',
        subtitle: '',
        courses: [
          { id: 'ug-4y-1', name: 'Calculus I', description: 'Limits, derivatives, and an introduction to integration.' },
          { id: 'ug-4y-2', name: 'Calculus II', description: 'Integration techniques, sequences, series, and Taylor expansions.' },
          { id: 'ug-4y-3', name: 'Linear Algebra', description: 'Vectors, matrices, linear transformations, and eigenvalues.' },
          { id: 'ug-4y-4', name: 'Introduction to Proofs', description: 'Logic, set theory, mathematical induction, and core proof techniques.' },
        ],
      },
      {
        id: 'g-y2',
        label: 'Year 2',
        subtitle: '',
        courses: [
          { id: 'ug-4y-5',  name: 'Calculus III (Multivariable)', description: 'Partial derivatives, multiple integrals, and vector calculus.' },
          { id: 'ug-4y-6',  name: 'Differential Equations', description: 'Ordinary differential equations, systems, Laplace transforms, and applications.' },
          { id: 'ug-4y-7',  name: 'Abstract Algebra I', description: 'Groups, rings, and fields with an emphasis on proof and structure.' },
          { id: 'ug-4y-8',  name: 'Real Analysis I', description: 'Rigorous treatment of limits, continuity, differentiation, and Riemann integration.' },
        ],
      },
      {
        id: 'g-y3',
        label: 'Year 3',
        subtitle: '',
        courses: [
          { id: 'ug-4y-9',  name: 'Abstract Algebra II', description: 'Advanced group theory, Galois theory, and modules.' },
          { id: 'ug-4y-10', name: 'Real Analysis II', description: 'Metric spaces, uniform convergence, and an introduction to measure theory.' },
          { id: 'ug-4y-11', name: 'Complex Analysis', description: 'Analytic functions, contour integration, residues, and conformal maps.' },
          { id: 'ug-4y-12', name: 'Topology', description: 'Metric spaces, topological spaces, compactness, and connectedness.' },
        ],
      },
      {
        id: 'g-y4',
        label: 'Year 4',
        subtitle: '',
        courses: [
          { id: 'ug-4y-13', name: 'Senior Elective I', description: 'Choose from number theory, geometry, applied mathematics, or probability.' },
          { id: 'ug-4y-14', name: 'Senior Elective II', description: 'Choose from number theory, geometry, applied mathematics, or probability.' },
          { id: 'ug-4y-15', name: 'Senior Seminar / Capstone', description: 'Independent reading, mathematical writing, and a final research presentation.' },
        ],
      },
    ],
  },

  '3year': {
    label: '3-Year Plan',
    description: 'For students entering with one year of equivalent calculus credit. Completes a full mathematics degree in three years.',
    groups: [
      {
        id: 'g-y1',
        label: 'Year 1',
        subtitle: '',
        courses: [
          { id: 'ug-3y-1', name: 'Calculus III (Multivariable)', description: 'Partial derivatives, multiple integrals, and vector calculus.' },
          { id: 'ug-3y-2', name: 'Differential Equations', description: 'Ordinary differential equations, systems, Laplace transforms, and applications.' },
          { id: 'ug-3y-3', name: 'Abstract Algebra I', description: 'Groups, rings, and fields with an emphasis on proof and structure.' },
          { id: 'ug-3y-4', name: 'Real Analysis I', description: 'Rigorous treatment of limits, continuity, differentiation, and Riemann integration.' },
        ],
      },
      {
        id: 'g-y2',
        label: 'Year 2',
        subtitle: '',
        courses: [
          { id: 'ug-3y-5', name: 'Abstract Algebra II', description: 'Advanced group theory, Galois theory, and modules.' },
          { id: 'ug-3y-6', name: 'Real Analysis II', description: 'Metric spaces, uniform convergence, and an introduction to measure theory.' },
          { id: 'ug-3y-7', name: 'Complex Analysis', description: 'Analytic functions, contour integration, residues, and conformal maps.' },
          { id: 'ug-3y-8', name: 'Topology', description: 'Metric spaces, topological spaces, compactness, and connectedness.' },
        ],
      },
      {
        id: 'g-y3',
        label: 'Year 3',
        subtitle: '',
        courses: [
          { id: 'ug-3y-9',  name: 'Senior Elective I', description: 'Choose from number theory, geometry, applied mathematics, or probability.' },
          { id: 'ug-3y-10', name: 'Senior Elective II', description: 'Choose from number theory, geometry, applied mathematics, or probability.' },
          { id: 'ug-3y-11', name: 'Senior Seminar / Capstone', description: 'Independent reading, mathematical writing, and a final research presentation.' },
        ],
      },
    ],
  },
};

export const gradTracks = {
  algebra: {
    label: 'Algebra & Number Theory',
    description: 'Preparation for research in algebraic structures, representation theory, and algebraic/analytic number theory.',
    groups: [
      {
        id: 'g-y1',
        label: 'Year 1',
        subtitle: 'Core Coursework',
        courses: [
          { id: 'gr-al-1', name: 'Graduate Abstract Algebra', description: 'Group theory, ring theory, modules, and Galois theory at the graduate level.' },
          { id: 'gr-al-2', name: 'Algebraic Number Theory', description: 'Number fields, rings of integers, ideal class groups, and Dirichlet\'s unit theorem.' },
        ],
      },
      {
        id: 'g-y2',
        label: 'Year 2',
        subtitle: 'Advanced Coursework',
        courses: [
          { id: 'gr-al-3', name: 'Commutative Algebra', description: 'Noetherian rings, primary decomposition, localisation, and completion.' },
          { id: 'gr-al-4', name: 'Representation Theory', description: 'Linear representations of finite groups, characters, induced representations, and applications.' },
          { id: 'gr-al-5', name: 'Algebraic Geometry I', description: 'Affine and projective varieties, morphisms, sheaves, and an introduction to schemes.' },
        ],
      },
      {
        id: 'g-y3plus',
        label: 'Year 3+',
        subtitle: 'Research',
        courses: [
          { id: 'gr-al-6', name: 'Advanced Topics in Number Theory', description: 'Selected topics such as elliptic curves, modular forms, or L-functions.' },
          { id: 'gr-al-7', name: 'Research Seminar', description: 'Weekly seminar in algebra or number theory; reading of current literature and presentations.' },
          { id: 'gr-al-8', name: 'Dissertation Research', description: 'Original research in the chosen specialisation area, culminating in a doctoral dissertation.' },
        ],
      },
    ],
  },

  analysis: {
    label: 'Analysis & Topology',
    description: 'Preparation for research in real and complex analysis, functional analysis, algebraic topology, and differential geometry.',
    groups: [
      {
        id: 'g-y1',
        label: 'Year 1',
        subtitle: 'Core Coursework',
        courses: [
          { id: 'gr-an-1', name: 'Graduate Real Analysis', description: 'Measure theory, Lebesgue integration, L^p spaces, and Fourier analysis.' },
          { id: 'gr-an-2', name: 'Graduate Complex Analysis', description: 'Riemann surfaces, analytic continuation, and advanced function theory.' },
        ],
      },
      {
        id: 'g-y2',
        label: 'Year 2',
        subtitle: 'Advanced Coursework',
        courses: [
          { id: 'gr-an-3', name: 'Functional Analysis', description: 'Banach and Hilbert spaces, bounded operators, the spectral theorem, and distributions.' },
          { id: 'gr-an-4', name: 'Graduate Topology', description: 'Algebraic topology: fundamental group, covering spaces, singular homology, and cohomology.' },
          { id: 'gr-an-5', name: 'Differential Geometry', description: 'Smooth manifolds, tangent bundles, differential forms, and Stokes\' theorem.' },
        ],
      },
      {
        id: 'g-y3plus',
        label: 'Year 3+',
        subtitle: 'Research',
        courses: [
          { id: 'gr-an-6', name: 'Riemannian Geometry', description: 'Riemannian metrics, geodesics, curvature tensors, and comparison theorems.' },
          { id: 'gr-an-7', name: 'Research Seminar', description: 'Weekly seminar in analysis or topology; reading of current literature and presentations.' },
          { id: 'gr-an-8', name: 'Dissertation Research', description: 'Original research in the chosen specialisation area, culminating in a doctoral dissertation.' },
        ],
      },
    ],
  },

  applied: {
    label: 'Applied Math & Physics',
    description: 'Preparation for research in PDEs, numerical analysis, mathematical physics, and scientific computing.',
    groups: [
      {
        id: 'g-y1',
        label: 'Year 1',
        subtitle: 'Core Coursework',
        courses: [
          { id: 'gr-ap-1', name: 'Graduate ODEs & Dynamical Systems', description: 'Existence and uniqueness theory, stability analysis, bifurcations, and chaos.' },
          { id: 'gr-ap-2', name: 'Partial Differential Equations', description: 'Classical PDEs, elliptic/parabolic/hyperbolic theory, and weak solutions in Sobolev spaces.' },
        ],
      },
      {
        id: 'g-y2',
        label: 'Year 2',
        subtitle: 'Advanced Coursework',
        courses: [
          { id: 'gr-ap-3', name: 'Numerical Analysis', description: 'Numerical methods for linear systems, ODEs, PDEs, and optimisation; error analysis.' },
          { id: 'gr-ap-4', name: 'Mathematical Physics', description: 'Classical mechanics, quantum mechanics, and statistical physics from a rigorous mathematical perspective.' },
          { id: 'gr-ap-5', name: 'Asymptotic & Perturbation Methods', description: 'Asymptotic expansions, matched asymptotics, WKB analysis, and multi-scale methods.' },
        ],
      },
      {
        id: 'g-y3plus',
        label: 'Year 3+',
        subtitle: 'Research',
        courses: [
          { id: 'gr-ap-6', name: 'Computational Mathematics', description: 'Finite element and finite difference methods, high-performance scientific computing.' },
          { id: 'gr-ap-7', name: 'Research Seminar', description: 'Weekly seminar in applied mathematics; reading of current literature and presentations.' },
          { id: 'gr-ap-8', name: 'Dissertation Research', description: 'Original research in the chosen specialisation area, culminating in a doctoral dissertation.' },
        ],
      },
    ],
  },

  probability: {
    label: 'Probability & Statistics',
    description: 'Preparation for research in probability theory, stochastic processes, and mathematical statistics.',
    groups: [
      {
        id: 'g-y1',
        label: 'Year 1',
        subtitle: 'Core Coursework',
        courses: [
          { id: 'gr-pr-1', name: 'Measure-Theoretic Probability', description: 'Probability spaces, random variables, expectation, and the major convergence theorems.' },
          { id: 'gr-pr-2', name: 'Stochastic Processes', description: 'Martingales, Brownian motion, Markov chains, and an introduction to Itô calculus.' },
        ],
      },
      {
        id: 'g-y2',
        label: 'Year 2',
        subtitle: 'Advanced Coursework',
        courses: [
          { id: 'gr-pr-3', name: 'Mathematical Statistics', description: 'Statistical estimation theory, hypothesis testing, decision theory, and asymptotic methods.' },
          { id: 'gr-pr-4', name: 'Bayesian Statistics', description: 'Bayesian inference, prior distributions, hierarchical models, and MCMC algorithms.' },
          { id: 'gr-pr-5', name: 'High-Dimensional Statistics', description: 'Statistical learning theory, concentration inequalities, and random matrix theory.' },
        ],
      },
      {
        id: 'g-y3plus',
        label: 'Year 3+',
        subtitle: 'Research',
        courses: [
          { id: 'gr-pr-6', name: 'Advanced Stochastic Analysis', description: 'Stochastic differential equations, Malliavin calculus, and stochastic optimal control.' },
          { id: 'gr-pr-7', name: 'Research Seminar', description: 'Weekly seminar in probability and statistics; reading of current literature and presentations.' },
          { id: 'gr-pr-8', name: 'Dissertation Research', description: 'Original research in the chosen specialisation area, culminating in a doctoral dissertation.' },
        ],
      },
    ],
  },
};
