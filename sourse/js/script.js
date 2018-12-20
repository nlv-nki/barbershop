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


  // $('#image-gallery').lightSlider({
  //     gallery:true,
  //     item:1,
  //     thumbItem:3,
  //     slideMargin: 0,
  //     speed:500,
  //     auto:false,
  //     loop:true,
  //     onSliderLoad: function() {
  //         $('#image-gallery').removeClass('cS-hidden');
  //     }
  // });



});
