'use strict';

const modal = document.querySelector('.modal');
const modals = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const hideModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', openModal);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden'))
        hideModal();
})

closeModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);