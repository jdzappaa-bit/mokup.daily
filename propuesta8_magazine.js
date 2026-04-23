/* ============================================================
   PHARMASAN · Propuesta 8 · Scripts
   Módulos: Nav scroll · Dark mode · Modal · Formulario
   ============================================================ */

/* ── NAV: añade clase al hacer scroll ────────────────────── */
const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});


/* ── DARK MODE ────────────────────────────────────────────── */
const darkToggle = document.getElementById('darkToggle');
const html       = document.documentElement;

/* Aplica el tema guardado antes del primer render */
const savedTheme = localStorage.getItem('pharmasan-theme') || 'light';
html.setAttribute('data-theme', savedTheme);
darkToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

darkToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next   = isDark ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  darkToggle.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('pharmasan-theme', next);
});


/* ── MODAL CONTACTO ───────────────────────────────────────── */
const modal = document.getElementById('contactModal');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* Cierra al hacer clic en el overlay */
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

/* Cierra con la tecla Escape */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});


/* ── FORMULARIO: feedback visual al enviar ────────────────── */
function submitForm(e) {
  e.preventDefault();

  const btn = e.target.querySelector('.modal-submit');
  btn.textContent      = '✓ Mensaje enviado';
  btn.style.background = '#1da896';
  btn.disabled = true;

  setTimeout(closeModal, 2000);
}


/* ── ACORDEÓN DE SEDES ────────────────────────────────────── */
function toggleAccordion(id) {
  const item = document.getElementById(id);
  if (!item) return;
  item.classList.toggle('open');
}
