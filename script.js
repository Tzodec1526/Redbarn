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
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const LIGHT = '#8B2500', DARK = '#1a1410';
  function sync(){
    const isInk = document.documentElement.dataset.palette === 'ink';
    if (toggle) toggle.setAttribute('aria-pressed', String(isInk));
    if (themeMeta) themeMeta.setAttribute('content', isInk ? DARK : LIGHT);
  }
  sync();
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const current = document.documentElement.dataset.palette || 'cream';
    const next = current === 'ink' ? 'cream' : 'ink';
    if (next === 'cream') delete document.documentElement.dataset.palette;
    else document.documentElement.dataset.palette = next;
    try { localStorage.setItem('redbarn-palette', next); } catch(e){}
    sync();
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
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('show')) closeNav();
  });
})();

// ---- Hero parallax (desktop pointers only, honors reduced motion) ----
(function(){
  const hero = document.querySelector('.hero');
  const bg = document.querySelector('.hero-bg');
  if (!hero || !bg) return;
  if (!matchMedia('(pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const MAX = 10; // px of drift at the edges
  let raf = 0;
  hero.addEventListener('mousemove', (e) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      bg.style.setProperty('--par-x', (-x * MAX).toFixed(2));
      bg.style.setProperty('--par-y', (-y * MAX).toFixed(2));
    });
  });
  hero.addEventListener('mouseleave', () => {
    bg.style.setProperty('--par-x', 0);
    bg.style.setProperty('--par-y', 0);
  });
})();

// ---- Footer year ----
(function(){
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
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
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });
  // threshold 0: a percentage threshold never fires for elements much taller
  // than the viewport (e.g. the gallery grid), leaving them invisible

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
