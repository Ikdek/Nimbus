export function initMenuBurger(buttonId, menuId) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(menuId);
  if (!button || !menu) return;

  const isOpen = () => button.getAttribute('aria-expanded') === 'true';

  function setOpen(open) {
    button.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('hidden', !open);
    menu.classList.toggle('flex', open);
  }

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!isOpen());
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('click', (event) => {
    if (isOpen() && !menu.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      button.focus();
    }
  });

  window.matchMedia('(min-width: 48rem)').addEventListener('change', (event) => {
    if (event.matches) setOpen(false);
  });
}

initMenuBurger('menuBurger', 'mobileMenu');
