// Navegación con fondo al hacer scroll
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Animación de aparición
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Contadores
document.querySelectorAll('[data-count]').forEach((el) => {
  const target = +el.dataset.count, suf = el.dataset.suffix || '';
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    let n = 0; const step = Math.max(1, Math.ceil(target / 30));
    const t = setInterval(() => { n = Math.min(target, n + step); el.textContent = n + suf; if (n >= target) clearInterval(t); }, 35);
    obs.disconnect();
  });
  obs.observe(el);
});

document.getElementById('y').textContent = new Date().getFullYear();
