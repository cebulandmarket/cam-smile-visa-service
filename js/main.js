document.getElementById('year').textContent = new Date().getFullYear();

// Language toggle (English / Khmer)
const translatable = document.querySelectorAll('[data-km]');
translatable.forEach((el) => { el.dataset.en = el.textContent; });

const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  translatable.forEach((el) => {
    el.textContent = lang === 'km' ? el.dataset.km : el.dataset.en;
  });
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle('km', lang === 'km');
  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  try { localStorage.setItem('camsmile-lang', lang); } catch (e) {}
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

let savedLang = 'en';
try { savedLang = localStorage.getItem('camsmile-lang') || 'en'; } catch (e) {}
setLanguage(savedLang);

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
