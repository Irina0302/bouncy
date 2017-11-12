;
function ($) {
    $(document).ready(function () {


        $(".menu__item,.header__wrap").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1200);
        }

    });

}(jQuery);
