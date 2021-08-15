'use strict'
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

const actionOnLink = function () {
    const navMenu = document.getElementById('nav-menu');
    // Remove show menu on click on nav__link
    navMenu.classList.remove('show-menu');
}

navLink.forEach(event => event.addEventListener('click', actionOnLink));

/*==================== ACCORDION SKILLS ====================*/
const skilledContent = document.getElementsByClassName('skills__content');
const skillsHeaders = document.querySelectorAll('.skills__header');

const toggleSkills = function () {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skilledContent.length; i++) {
        skilledContent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeaders.forEach((event) => {
    event.addEventListener('click', toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalButtons = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

const modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalButton, index) => {
    modalButton.addEventListener('click', () => {
        modal(index);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((view) => {
            view.classList.remove('active-modal');
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/