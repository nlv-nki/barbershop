$(document).ready(function(){

  $('.user-main-nav__login').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.modal-form-login__close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });


 let param = {
   auto:true,
   slideWidth: 300,
   pager: false,
   nextText:'Вперед',
   slideSelector: 'img',
   prevSelector: '.slider__prev_btn',
   prevText: 'Назад',
   autoControlsSelector: '.gallery__controls',
   nextSelector: '.slider__next_btn',
 }

  $('.slider').bxSlider(param);
});
