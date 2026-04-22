// ---- JS sentinel (gates .reveal so content stays visible without JS) ----
document.documentElement.classList.add('js');

// ---- Paper grain overlay ----
(function(){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.07  0 0 0 0 0.04  0 0 0 0.8 0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`;
  const url = 'url("data:image/svg+xml;utf8,' + encodeURIComponent(svg) + '")';
  document.documentElement.style.setProperty('--grain-url', url);
})();

// ---- Palette toggle ----
(function(){
  const toggle = document.getElementById('paletteToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = document.documentElement.dataset.palette || 'cream';
    const next = current === 'ink' ? 'cream' : 'ink';
    if (next === 'cream') delete document.documentElement.dataset.palette;
    else document.documentElement.dataset.palette = next;
    try { localStorage.setItem('redbarn-palette', next); } catch(e){}
  });
})();

// ---- Mobile nav ----
(function(){
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('mobileOverlay');
  if (!navToggle || !navLinks || !overlay) return;

  function closeNav() {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('show');
    if (isOpen) {
      closeNav();
    } else {
      navLinks.classList.add('show');
      overlay.classList.add('show');
      navToggle.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  });

  overlay.addEventListener('click', closeNav);
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
})();

// ---- Scroll reveal ----
(function(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
