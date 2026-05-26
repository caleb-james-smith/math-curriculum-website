// curriculum.js — render grouped tracks, handle drag-drop, add/remove, localStorage

const STORAGE_PREFIX = 'curriculum-';

// ── localStorage helpers ──────────────────────────────────────────────────────

function storageKey(page, trackId) {
  return `${STORAGE_PREFIX}${page}-${trackId}`;
}

function isValidGroups(data) {
  return Array.isArray(data) && data.every(g => Array.isArray(g.courses));
}

function loadGroups(page, trackId, defaultGroups) {
  const raw = localStorage.getItem(storageKey(page, trackId));
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (isValidGroups(parsed)) return parsed;
      // Stale data from an older format — discard it
      localStorage.removeItem(storageKey(page, trackId));
    } catch { /* fall through */ }
  }
  return defaultGroups.map(g => ({ ...g, courses: g.courses.map(c => ({ ...c })) }));
}

function saveGroups(page, trackId, groups) {
  localStorage.setItem(storageKey(page, trackId), JSON.stringify(groups));
}

function resetGroups(page, trackId) {
  localStorage.removeItem(storageKey(page, trackId));
}

// ── State ─────────────────────────────────────────────────────────────────────

const state = {
  page: '',
  trackId: '',
  tracks: {},
  groups: [],
};

// ── Drag state ────────────────────────────────────────────────────────────────

let dragSrcGroupId = null;
let dragSrcIndex   = null;

// ── Rendering ─────────────────────────────────────────────────────────────────

function renderList() {
  const container = document.getElementById('course-list');
  if (!container) return;
  container.textContent = '';

  state.groups.forEach(group => {
    const section = document.createElement('div');
    section.className = 'curriculum-section';

    // Group header
    const header = document.createElement('div');
    header.className = 'group-header';

    const label = document.createElement('h3');
    label.className = 'group-label';
    label.textContent = group.label;
    header.appendChild(label);

    if (group.subtitle) {
      const subtitle = document.createElement('span');
      subtitle.className = 'group-subtitle';
      subtitle.textContent = group.subtitle;
      header.appendChild(subtitle);
    }

    // Course list for this group
    const list = document.createElement('div');
    list.className = 'course-list';
    list.dataset.groupId = group.id;

    if (group.courses.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'course-empty';

      const p1 = document.createElement('p');
      p1.textContent = 'No courses in this section.';

      const p2 = document.createElement('p');
      p2.textContent = 'Drag a course here or use Add Course to add one.';

      empty.appendChild(p1);
      empty.appendChild(p2);
      list.appendChild(empty);
    } else {
      group.courses.forEach((course, index) => {
        list.appendChild(createCard(course, index, group.id));
      });
    }

    attachListDropHandlers(list, group.id);

    section.appendChild(header);
    section.appendChild(list);
    container.appendChild(section);
  });
}

function createCard(course, index, groupId) {
  const card = document.createElement('div');
  card.className = 'course-card';
  card.setAttribute('draggable', 'true');
  card.dataset.groupId = groupId;
  card.dataset.index   = String(index);

  const handle = document.createElement('span');
  handle.className = 'drag-handle';
  handle.setAttribute('aria-label', 'Drag to reorder');
  handle.setAttribute('title', 'Drag to reorder');
  handle.textContent = '≡';

  const number = document.createElement('span');
  number.className = 'course-number';
  number.textContent = String(index + 1);

  const body = document.createElement('div');
  body.className = 'course-body';

  const name = document.createElement('div');
  name.className = 'course-name';
  name.textContent = course.name;
  body.appendChild(name);

  if (course.description) {
    const desc = document.createElement('div');
    desc.className = 'course-desc';
    desc.textContent = course.description;
    body.appendChild(desc);
  }

  const removeBtn = document.createElement('button');
  removeBtn.className = 'course-remove';
  removeBtn.setAttribute('aria-label', `Remove ${course.name}`);
  removeBtn.setAttribute('title', 'Remove course');
  removeBtn.textContent = '✕';
  removeBtn.addEventListener('click', () => removeCourse(groupId, index));

  card.appendChild(handle);
  card.appendChild(number);
  card.appendChild(body);
  card.appendChild(removeBtn);

  attachCardDragHandlers(card, groupId, index);
  return card;
}

// ── Drag and Drop ─────────────────────────────────────────────────────────────

function clearDropIndicators() {
  document.querySelectorAll('.course-card').forEach(c => c.classList.remove('drop-before'));
  document.querySelectorAll('.course-list').forEach(l => l.classList.remove('drag-over'));
}

function handleDrop(destGroupId, destIndex) {
  if (dragSrcGroupId === null) return;

  const srcGroup  = state.groups.find(g => g.id === dragSrcGroupId);
  const destGroup = state.groups.find(g => g.id === destGroupId);
  if (!srcGroup || !destGroup) return;

  const isSameGroup = dragSrcGroupId === destGroupId;
  if (isSameGroup && dragSrcIndex === destIndex) {
    clearDropIndicators();
    return;
  }

  const [moved] = srcGroup.courses.splice(dragSrcIndex, 1);

  // When reordering within the same group past the removal point, shift destination back
  const adjustedDest = (isSameGroup && dragSrcIndex < destIndex) ? destIndex - 1 : destIndex;
  destGroup.courses.splice(adjustedDest, 0, moved);

  saveGroups(state.page, state.trackId, state.groups);
  renderList();
  dragSrcGroupId = null;
  dragSrcIndex   = null;
}

function attachCardDragHandlers(card, groupId, index) {
  card.addEventListener('dragstart', (e) => {
    dragSrcGroupId = groupId;
    dragSrcIndex   = index;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', '');
  });

  card.addEventListener('dragend', () => {
    card.classList.remove('dragging');
    clearDropIndicators();
  });

  card.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    clearDropIndicators();
    card.classList.add('drop-before');
  });

  card.addEventListener('dragleave', () => {
    card.classList.remove('drop-before');
  });

  card.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    clearDropIndicators();
    handleDrop(groupId, index);
  });
}

// Handles drops onto the empty area of a list (when no card is directly under the cursor)
function attachListDropHandlers(list, groupId) {
  list.addEventListener('dragover', (e) => {
    const overEmpty = e.target === list || e.target.classList.contains('course-empty');
    if (overEmpty) {
      e.preventDefault();
      e.stopPropagation();
      list.classList.add('drag-over');
    }
  });

  list.addEventListener('dragleave', (e) => {
    if (!list.contains(e.relatedTarget)) {
      list.classList.remove('drag-over');
    }
  });

  list.addEventListener('drop', (e) => {
    const overEmpty = e.target === list || e.target.classList.contains('course-empty');
    if (overEmpty) {
      e.preventDefault();
      e.stopPropagation();
      clearDropIndicators();
      const group = state.groups.find(g => g.id === groupId);
      if (group) handleDrop(groupId, group.courses.length);
    }
  });
}

// ── Course Operations ─────────────────────────────────────────────────────────

function removeCourse(groupId, index) {
  const group = state.groups.find(g => g.id === groupId);
  if (!group) return;
  group.courses.splice(index, 1);
  saveGroups(state.page, state.trackId, state.groups);
  renderList();
}

function addCourse(name, description, groupId) {
  const group = state.groups.find(g => g.id === groupId);
  if (!group) return;
  group.courses.push({
    id: crypto.randomUUID(),
    name: name.trim(),
    description: description.trim(),
  });
  saveGroups(state.page, state.trackId, state.groups);
  renderList();
}

// ── Track Switching ───────────────────────────────────────────────────────────

function switchTrack(trackId) {
  state.trackId = trackId;
  state.groups  = loadGroups(state.page, trackId, state.tracks[trackId].groups);

  document.querySelectorAll('.track-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.trackId === trackId);
  });

  const descEl = document.getElementById('track-description');
  if (descEl) descEl.textContent = state.tracks[trackId].description || '';

  renderList();
}

// ── Modal ─────────────────────────────────────────────────────────────────────

function populateGroupSelect() {
  const select = document.getElementById('course-group-select');
  if (!select) return;
  select.textContent = '';
  state.groups.forEach(g => {
    const option = document.createElement('option');
    option.value       = g.id;
    option.textContent = g.subtitle ? `${g.label} — ${g.subtitle}` : g.label;
    select.appendChild(option);
  });
}

function openModal() {
  const backdrop = document.getElementById('add-modal');
  if (!backdrop) return;
  populateGroupSelect();
  backdrop.classList.remove('hidden');
  document.getElementById('course-name-input')?.focus();
}

function closeModal() {
  const backdrop = document.getElementById('add-modal');
  if (!backdrop) return;
  backdrop.classList.add('hidden');
  document.getElementById('add-course-form')?.reset();
}

// ── Init ──────────────────────────────────────────────────────────────────────

export function initCurriculum(page, tracks, defaultTrackId) {
  state.page    = page;
  state.tracks  = tracks;
  state.trackId = defaultTrackId;
  state.groups  = loadGroups(page, defaultTrackId, tracks[defaultTrackId].groups);

  document.querySelectorAll('.track-tab').forEach(btn => {
    btn.addEventListener('click', () => switchTrack(btn.dataset.trackId));
  });

  switchTrack(defaultTrackId);

  document.getElementById('add-course-btn')?.addEventListener('click', openModal);

  document.getElementById('reset-btn')?.addEventListener('click', () => {
    resetGroups(state.page, state.trackId);
    state.groups = state.tracks[state.trackId].groups.map(g => ({
      ...g,
      courses: g.courses.map(c => ({ ...c })),
    }));
    renderList();
  });

  document.getElementById('add-course-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput  = document.getElementById('course-name-input');
    const descInput  = document.getElementById('course-desc-input');
    const groupInput = document.getElementById('course-group-select');
    const name    = nameInput?.value  ?? '';
    const desc    = descInput?.value  ?? '';
    const groupId = groupInput?.value ?? state.groups[0]?.id;
    if (name.trim()) {
      addCourse(name, desc, groupId);
      closeModal();
    }
  });

  document.getElementById('modal-cancel')?.addEventListener('click', closeModal);
  document.getElementById('add-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
