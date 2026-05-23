// curriculum.js — render tracks, handle drag-drop, add/remove, localStorage

const STORAGE_PREFIX = 'curriculum-';

// ── localStorage helpers ──────────────────────────────────────────────────────

function storageKey(page, trackId) {
  return `${STORAGE_PREFIX}${page}-${trackId}`;
}

function loadCourses(page, trackId, defaults) {
  const raw = localStorage.getItem(storageKey(page, trackId));
  if (raw) {
    try { return JSON.parse(raw); } catch { /* fall through */ }
  }
  return defaults.map(c => ({ ...c }));
}

function saveCourses(page, trackId, courses) {
  localStorage.setItem(storageKey(page, trackId), JSON.stringify(courses));
}

function resetCourses(page, trackId) {
  localStorage.removeItem(storageKey(page, trackId));
}

// ── State ─────────────────────────────────────────────────────────────────────

let state = {
  page: '',
  trackId: '',
  tracks: {},
  courses: [],
};

// ── Rendering ─────────────────────────────────────────────────────────────────

function renderList() {
  const list = document.getElementById('course-list');
  if (!list) return;

  if (state.courses.length === 0) {
    list.innerHTML = `
      <div class="course-empty">
        <p>No courses yet.</p>
        <p>Click <strong>Add Course</strong> to build your custom track.</p>
      </div>`;
    return;
  }

  list.innerHTML = '';
  state.courses.forEach((course, index) => {
    const card = createCard(course, index);
    list.appendChild(card);
  });
}

function createCard(course, index) {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.setAttribute('draggable', 'true');
  card.dataset.index = index;

  card.innerHTML = `
    <span class="drag-handle" aria-label="Drag to reorder" title="Drag to reorder">&#8801;</span>
    <span class="course-number">${index + 1}</span>
    <div class="course-body">
      <div class="course-name">${escapeHtml(course.name)}</div>
      ${course.description ? `<div class="course-desc">${escapeHtml(course.description)}</div>` : ''}
    </div>
    <button class="course-remove" aria-label="Remove ${escapeHtml(course.name)}" title="Remove course">&#x2715;</button>
  `;

  card.querySelector('.course-remove').addEventListener('click', () => removeCourse(index));
  attachDragHandlers(card);
  return card;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Drag and Drop ─────────────────────────────────────────────────────────────

let dragSrcIndex = null;

function attachDragHandlers(card) {
  card.addEventListener('dragstart', (e) => {
    dragSrcIndex = parseInt(card.dataset.index, 10);
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', dragSrcIndex);
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    document.querySelectorAll('.course-card').forEach(c => {
      c.classList.remove('drag-over', 'drop-before');
    });
  });

  card.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    document.querySelectorAll('.course-card').forEach(c => c.classList.remove('drop-before'));
    card.classList.add('drop-before');
  });

  card.addEventListener('dragleave', () => {
    card.classList.remove('drop-before', 'drag-over');
  });

  card.addEventListener('drop', (e) => {
    e.preventDefault();
    const destIndex = parseInt(card.dataset.index, 10);
    if (dragSrcIndex === null || dragSrcIndex === destIndex) return;

    const moved = state.courses.splice(dragSrcIndex, 1)[0];
    state.courses.splice(destIndex, 0, moved);

    saveCourses(state.page, state.trackId, state.courses);
    renderList();
    dragSrcIndex = null;
  });
}

// ── Course Operations ─────────────────────────────────────────────────────────

function removeCourse(index) {
  state.courses.splice(index, 1);
  saveCourses(state.page, state.trackId, state.courses);
  renderList();
}

function addCourse(name, description) {
  const course = {
    id: crypto.randomUUID(),
    name: name.trim(),
    description: description.trim(),
  };
  state.courses.push(course);
  saveCourses(state.page, state.trackId, state.courses);
  renderList();
}

// ── Track Switching ───────────────────────────────────────────────────────────

function switchTrack(trackId) {
  state.trackId = trackId;
  state.courses = loadCourses(state.page, trackId, state.tracks[trackId].courses);

  // Update active tab
  document.querySelectorAll('.track-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.trackId === trackId);
  });

  // Update description
  const descEl = document.getElementById('track-description');
  if (descEl) descEl.textContent = state.tracks[trackId].description || '';

  renderList();
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function openModal() {
  const backdrop = document.getElementById('add-modal');
  if (!backdrop) return;
  backdrop.classList.remove('hidden');
  document.getElementById('course-name-input')?.focus();
}

function closeModal() {
  const backdrop = document.getElementById('add-modal');
  if (!backdrop) return;
  backdrop.classList.add('hidden');
  const form = document.getElementById('add-course-form');
  if (form) form.reset();
}

// ── Init ──────────────────────────────────────────────────────────────────────

export function initCurriculum(page, tracks, defaultTrackId) {
  state.page = page;
  state.tracks = tracks;
  state.trackId = defaultTrackId;
  state.courses = loadCourses(page, defaultTrackId, tracks[defaultTrackId].courses);

  // Wire track tabs
  document.querySelectorAll('.track-tab').forEach(btn => {
    btn.addEventListener('click', () => switchTrack(btn.dataset.trackId));
  });

  // Set initial active tab and description
  switchTrack(defaultTrackId);

  // Wire Add Course button
  document.getElementById('add-course-btn')?.addEventListener('click', openModal);

  // Wire Reset button
  document.getElementById('reset-btn')?.addEventListener('click', () => {
    resetCourses(state.page, state.trackId);
    state.courses = state.tracks[state.trackId].courses.map(c => ({ ...c }));
    renderList();
  });

  // Wire modal form
  document.getElementById('add-course-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('course-name-input')?.value ?? '';
    const desc = document.getElementById('course-desc-input')?.value ?? '';
    if (name.trim()) {
      addCourse(name, desc);
      closeModal();
    }
  });

  // Wire modal close/cancel
  document.getElementById('modal-cancel')?.addEventListener('click', closeModal);
  document.getElementById('add-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
