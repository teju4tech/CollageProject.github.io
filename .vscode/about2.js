$(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('.navbar-nav li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $('.navbar-nav li a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
        var target = this.hash
            , menu = target;
        target = $(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top + 2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}