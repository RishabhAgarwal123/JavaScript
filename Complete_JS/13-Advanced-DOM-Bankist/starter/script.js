'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnToScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

btnToScroll.addEventListener('click', function (event) {
  // Old Ways
  // const coords = section1.getBoundingClientRect();
  // window.scrollTo(coords.left + window.pageXOffset, coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: coords.left + window.pageXOffset,
  //   top: coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })
  // New Ways
  section1.scrollIntoView({ behavior: 'smooth' })
});

// Page Navigation using Event bubbling and we want to use ecent capturing then we have to provide true on line 58 after }
// This below piece of code is using event bubbling which is less efficient because everytime a nav__link is selected it alos triggers the nav__links and nav menas it's parent containers which can caus eperformance issues.
// document.querySelectorAll('.nav__link').forEach((item) => {
//   item.addEventListener('click', function (event) {
//     event.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   })
// });

// Page Navigation using Event delegation: which means we only provide handler only to the container which contains all the nav__link. 
// Steps: 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.classList.contains('nav__link')) {
    // console.log(event.target.getAttribute('href'));
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// const h1 = document.querySelector('h1');
// const alertFunction = (event) => alert('I AM EVENT');
// h1.addEventListener('mouseenter', alertFunction)
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav').addEventListener('click', function () {
//   this.style.backgroundColor = randomColor()
// });

// document.querySelector('.nav__links').addEventListener('click', function () {
//   this.style.backgroundColor = randomColor()
// });

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// });
// console.log(randomColor());