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



  $('.modal-map-open').magnificPopup({
		type: 'inline',
		preloader: false,
		modal: true
	});


  $(document).on('click', '.popup-modal__close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});




 let param = {
   auto:false,
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



	jQuery('.main-nav__toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.main-nav ul').toggleClass('active');

		e.preventDefault();
	});


});
