const openMobileMenuButton = document.querySelector('.header__burger');

const closeMobileMenuButton = document.querySelector(
  '.mobile-menu__close-button'
);

const mobileMenu = document.querySelector('.mobile-menu');

openMobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu_opened');
  document.body.classList.add('no-scroll');
});

closeMobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu_opened');
  document.body.classList.remove('no-scroll');
});
