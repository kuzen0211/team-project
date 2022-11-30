(() => {
  const refs = {
    openModalBtn: document.querySelector('.contacts-section__buttons-franchise'),
    closeModalBtn: document.querySelector('.modal-franchise__button-close'),
    modal: document.querySelector('.contacts-backdrop__franchise'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();