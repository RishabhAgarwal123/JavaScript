'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnToScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

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

document.querySelector('.nav__links').addEventListener('click', (event) => {
  event.preventDefault()
  if (event.target.classList.contains('nav__link')) {
    // console.log(event.target.getAttribute('href'));
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // returning if clicked anywhere else
  if (!clicked) return;
  // removing the active class from tab and content
  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
  tabContent.forEach((content) => content.classList.remove('operations__content--active'));
  // adding a active class to a specific tab
  clicked.classList.add('operations__tab--active');
  // display content according to the active tab
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
const fadeAnimation = (event, opacity) => {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const children = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    children.forEach((child) => {
      if (child !== link) child.style.opacity = opacity;
      logo.style.opacity = opacity;
    });
  }
}

nav.addEventListener('mouseover', (event) => fadeAnimation(event, 0.5));
nav.addEventListener('mouseout', (event) => fadeAnimation(event, 1));

// Sticky Navigation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const navHeader = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(navHeader, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);

// View Sections
const allSections = document.querySelectorAll('.section');
const loadSection = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(loadSection, {
  root: null,
  threshold: 0.20
});
allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})

//Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');
const loadingImages = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadingImages, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});
imgTargets.forEach((img) => imgObserver.observe(img));

// Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');
let currentSlide = 0;
const maxSlides = slides.length;

// slider.style.transform = 'scale(0.5)';
// slider.style.overflow = 'visible';
// slides.forEach((style, index) => {
//   style.style.transform = `translateX(${100 * index}%)`
// })
// Creating dots
const createDots = function () {
  slides.forEach((_, index) => {
    dotsContainer.insertAdjacentHTML('beforeend', `
      <button class='dots__dot' data-slide=${index}></button>
    `)
  })
}

const activateDots = (slide) => {
  document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide='${slide}']`).classList.add('dots__dot--active');
}

const slideMovement = (slide) => {
  slides.forEach((style, index) => {
    style.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};

const nextSlide = () => {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slideMovement(currentSlide);
  activateDots(currentSlide);
}
const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  slideMovement(currentSlide);
  activateDots(currentSlide);
}

// Slider Start
const initiateSlider = () => {
  createDots();
  activateDots(0);
  slideMovement(0);
}

initiateSlider();

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (event) {
  event.key === 'ArrowRight' && nextSlide();
  event.key === 'ArrowLeft' && prevSlide();
  // if (event.key === 'ArrowRight') {
  //   nextSlide();
  // }
  // if (event.key === 'ArrowLeft') {
  //   prevSlide();
  // }
})

// Handling Dots
dotsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('dots__dot')) {
    const slide = event.target.dataset.slide;
    slideMovement(slide);
    activateDots(slide);
  }
});

// Sticky navigation
// const intitalPosition = section1.getBoundingClientRect();
// window.addEventListener('scroll', () => {
//   if (window.scrollY > intitalPosition.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky Navigation using Intersection Observer API
// const observerCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// }

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2]
// }

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

// Learning
// btnToScroll.addEventListener('click', function (event) {
  // Old Ways
  // const coords = section1.getBoundingClientRect();
  // window.scrollTo(coords.left + window.pageXOffset, coords.top + window.pageYOffset);
  // window.scrollTo({
  //   left: coords.left + window.pageXOffset,
  //   top: coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })
  // New Ways
  // section1.scrollIntoView({ behavior: 'smooth' })
// });

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
// document.querySelector('.nav__links').addEventListener('click', (event) => {
//   event.preventDefault()
//   if (event.target.classList.contains('nav__link')) {
//     // console.log(event.target.getAttribute('href'));
//     const id = event.target.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   }
// });

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