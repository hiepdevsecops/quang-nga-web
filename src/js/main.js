/* Menu hamburger cho điện thoại */
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.hamburger');
  const menu = document.querySelector('nav.menu');
  if (!burger || !menu) return;
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);
  const toggle = (open) => {
    menu.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
  };
  burger.addEventListener('click', () => toggle(!menu.classList.contains('open')));
  overlay.addEventListener('click', () => toggle(false));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
});
