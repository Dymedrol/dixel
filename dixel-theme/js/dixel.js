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
        ]
    });

    // brands slider

    $('.dixel-brands-logos').slick({
        dots: false,
        infinite: true,
        speed: 300,
        dots: false,
        mobilefirst: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 720,
                settings: {
                    speed: 5000,
                    autoplay: true,
                    autoplaySpeed: 0,
                    centerMode: true,
                    cssEase: 'linear',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    initialSlide: 1,
                    arrows: false,
                    buttons: false
                }
            }
        ]
    });
});