'use strict';

let btnShowModals = document.querySelectorAll('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');
let modal         = document.querySelector('.modal');
let overlay       = document.querySelector('.overlay');

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnShowModals.length; i++) {
    btnShowModals[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
})