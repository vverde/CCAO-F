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

function formatModuleTag(n) { return `M${n} · ${MODULE_NAMES[n] || ''}`; }

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getWeak() { try { return JSON.parse(localStorage.getItem('claudeCert_weak') || '[]'); } catch { return []; } }
function setWeak(ids) { try { localStorage.setItem('claudeCert_weak', JSON.stringify(ids)); } catch {} }
function addWeak(id) { const w = getWeak(); if (!w.includes(id)) w.push(id); setWeak(w); }
function removeWeak(id) { setWeak(getWeak().filter(x => x !== id)); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function exportPDF() {
  document.querySelectorAll('.framework-card:not(.open)').forEach(c => c.classList.add('open'));
  document.querySelectorAll('.accordion-item:not(.open)').forEach(c => c.classList.add('open'));
  document.querySelectorAll('.spoiler:not(.revealed)').forEach(s => { s.classList.add('revealed'); s._autoRevealed = true; });
  document.querySelectorAll('.tab-panel').forEach(p => p.style.display = 'block');
  window.print();
  setTimeout(() => {
    document.querySelectorAll('.tab-panel').forEach(p => p.style.display = '');
    document.querySelectorAll('[data-auto-opened]').forEach(c => c.classList.remove('open'));
  }, 500);
}

function toggleSpoiler(el) { el.classList.toggle('revealed'); }

/* Keep the assessment navigation consistent without rewriting every existing page. */
function ensureAssessmentNav() {
  const nav = document.querySelector('.nav-links');
  if (!nav) return;
  const additions = [
    { href: 'terminology-frameworks-drill.html', label: 'Terms & Frameworks' },
    { href: 'hard-knowledge-drill.html', label: 'Hard Drill' }
  ];
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  additions.forEach(item => {
    let link = [...nav.querySelectorAll('a')].find(a => (a.getAttribute('href') || '').toLowerCase() === item.href);
    if (!link) {
      link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      nav.appendChild(link);
    }
    if (current === item.href) link.classList.add('active');
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensureAssessmentNav);
else ensureAssessmentNav();
