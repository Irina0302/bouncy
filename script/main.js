//Скрипт для галереи
;
(function ($) {

    $(document).ready(function () {

        var $gridImg = $('.grid').isotope({
            itemSelector: ".item",
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 270,
                gutter: 5
            }
        });

        $("#filters button").click(function () {
            var $this = $(this);
            if (!$this.hasClass("is-checked")) {
                $this.parents("#navigation").find(".is-checked").removeClass("is-checked");
                $this.addClass("is-checked");
            }
            var selector = $this.attr("data-filter");
            $gridImg.isotope({
                filter: selector
            });
        });

        //       Скрипт для слайдера

        $('.team__slider').slick({
            dots: true,
            arrows: false,

        });

        // //        Скрипт для слайдера с таймером

        $('.test__slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 6000
        });







    });


})(jQuery);


