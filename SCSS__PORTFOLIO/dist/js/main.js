const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const home = document.querySelector('.social-icons');

let showMenu = false;
let showMenuItem = false;

const openMenu = () => {
    hamburger.classList.add('open');
    menuNav.classList.add('open');
    nav.classList.add('open');
    navItems.forEach((item) => {
        item.classList.add('open');
    });
    showMenu = true;
}

const closeMenu = () => {
    hamburger.classList.remove('open');
    menuNav.classList.remove('open');
    nav.classList.remove('open');
    navItems.forEach((item) => {
        item.classList.remove('open');
    });
    showMenu = false;
}

const toggleMenu = () => {
    if (!showMenu) {
        openMenu();
    } else {
        closeMenu();
    }
}

menuBtn.addEventListener('click', toggleMenu);

menuNav.addEventListener('click', (event) => {
    event.preventDefault()
    if (event.target.classList.contains('menu-nav__link')) {
        const id = event.target.getAttribute('href');
        if (id === '#about') {
            home.classList.remove('social-icons');
            home.classList.add('about-social-icon');
        }
        document.querySelector(id).scrollIntoView();
        closeMenu();
    }
});