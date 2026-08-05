/* shared/utils.js — shared utilities for the PM Prep webapp */

const MODULE_NAMES = [
  '',
  'Product & Model Selection',
  'Prompting & Task Execution',
  'Evaluating & Validating Output',
  'Workflow Integration & Solution Design',
  'Configuration & Knowledge Management',
  'Governance, Risk & Responsible Use',
  'Troubleshooting & Optimization',
  'Course Summary & Next Steps'
];

const MODULE_COLORS = ['', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8'];

function formatModuleTag(n) {
  return `M${n} · ${MODULE_NAMES[n] || ''}`;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWeak() {
  try { return JSON.parse(localStorage.getItem('claudeCert_weak') || '[]'); }
  catch { return []; }
}

function setWeak(ids) {
  try { localStorage.setItem('claudeCert_weak', JSON.stringify(ids)); }
  catch {}
}

function addWeak(id) {
  const w = getWeak();
  if (!w.includes(id)) w.push(id);
  setWeak(w);
}

function removeWeak(id) {
  setWeak(getWeak().filter(x => x !== id));
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function exportPDF() {
  // Expand all collapsibles before printing
  document.querySelectorAll('.framework-card:not(.open)').forEach(c => c.classList.add('open'));
  document.querySelectorAll('.accordion-item:not(.open)').forEach(c => c.classList.add('open'));
  document.querySelectorAll('.spoiler:not(.revealed)').forEach(s => {
    s.classList.add('revealed');
    s._autoRevealed = true;
  });
  // Show all tab panels for print
  document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'block');
  window.print();
  // Restore after print dialog closes
  setTimeout(() => {
    document.querySelectorAll('.tab-panel').forEach(p => p.style.display = '');
    document.querySelectorAll('[data-auto-opened]').forEach(c => c.classList.remove('open'));
  }, 500);
}

function toggleSpoiler(el) {
  el.classList.toggle('revealed');
}
