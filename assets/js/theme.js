document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = mobileMenu.querySelector('.close');

  function toggleMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open'); // Блокирует прокрутку
  }

  if (menuBtn && mobileMenu && closeBtn) {
    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
  }
});
