// Открытие PopUp start
const openPopUp = document.querySelectorAll('.open-pop-up');
const closePopUp = document.querySelector('.pop-up__close');
const popUp = document.querySelector('.pop-up');
// const bePopup = document.querySelector('.b-popup');

  openPopUp.forEach(b=>b.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active-pop-up');

    closePopUp.addEventListener('click', () => {
      popUp.classList.remove('active-pop-up');
  });
}));