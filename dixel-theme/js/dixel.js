$(document).ready(function() {

    // burger menu
    const burgerButton = $('#header-burger');
    const mobileMenu = $('#header-mobile-menu');
    const mobileMenuCloseButton = $('#header-mobile-close');

    burgerButton.click(function() {
        mobileMenu.css('display', 'flex');
    });

    mobileMenuCloseButton.click(function() {
        mobileMenu.css('display', 'none');
    });

    // our services slider

    $('.dixel-our-services-content').slick({
        dots: true,
        infinite: false,
        speed: 300,
        dots: false,
        mobilefirst: true,
        prevArrow: $('.dixel-our-services-prev'),
        nextArrow: $('.dixel-our-services-next'),
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    customPaging: 20,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});