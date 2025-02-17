'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModel = e => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModel);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// global event: keyboad event, usualy requires listening on entire document
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
