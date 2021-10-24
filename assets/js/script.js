const mobileMenuBtn = document.querySelector('#mobileButtonBtn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-nav-close');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-active');
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
});
mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.scroll = "yes";
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
});




