(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts-section__buttons-locations'),
    closeModalBtn: document.querySelector('.modal__button-close'),
    modal: document.querySelector('.contacts-backdrop'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();