document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    nav.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});
