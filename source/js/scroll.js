$(window).scroll(function () {
    checkSection();
});

function checkSection() {
    $('.section').each(function () {
        var
            $this = $(this),
            topEdge = $this.offset().top - 200,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();

        if (topEdge < wScroll && bottomEdge > wScroll) {
            var
                currentId = $this.data('section');
            reqLink = $('.nav__link').filter('[href="#' + currentId + '"]');

            reqLink.closest('.nav__link').addClass('nav__link--active')
                .siblings().removeClass('nav__link--active');

            // window.location.hash = currentId;
        }
    })
}
