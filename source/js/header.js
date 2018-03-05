(function () {
  var header = document.querySelector('.header');

  var scrolled;

  document.addEventListener('scroll', function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    (scrolled > 100) ? header.classList.add('grey') : header.classList.remove('grey');
  });


})();