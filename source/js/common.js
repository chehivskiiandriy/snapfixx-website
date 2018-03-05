$(document).ready(function () {

  $(".icons__border").click(function () {
    $(".icons__border").removeClass("icons__border--active");
    $(this).addClass("icons__border--active");
  })

  $(".slider__wrap").css("width", $(window).width() / 2);
  $(".mobile__menu li").css("width", $(window).width());

  function heightDetect() {
    $(".hero").css("height", $(window).height());
  };

  heightDetect();

  $(window).resize(function () {
    heightDetect();
  });

  $('.slider').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<img class="prev" src="images/prev.png">',
    nextArrow: '<img class="next" src="images/next.png">'
  });

  $(".nav__link").mPageScroll2id();
  $(".mobile__link").mPageScroll2id();
  $(".download__icon").mPageScroll2id();

  $.fn.extend({
    animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function () {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });



  $('.header__logo').click(function () {
    $(this).animateCss('rotateIn');
  });

  $('.download').click(function () {
    $('.download__button').animateCss('bounceIn');
  });


  $('.icon__menu').click(function() {
    $('nav ul').slideToggle(720);
  });

  $('.mobile__link').click(function() {
    $('nav ul').slideToggle(720);
  });
  
  $(window).resize(function() {		
		if (  $(window).width() > 720 ) {			
			$('nav ul').removeAttr('style');
		 }
  });
  

});

$(window).load(function () {
  $(".hero__title").animated("fadeInDown", "fadeOutUp");
  $(".hero__button").animated("fadeInUp", "fadeOutDown");
  $('.about__information').animated('fadeInLeft', 'fadeOutLeft');
  $('.icons__item').animated('fadeInLeft', 'fadeOutLeft');
});