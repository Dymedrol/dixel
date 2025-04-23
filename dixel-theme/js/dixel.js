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

    // cases tabs and slider

    $('.dixel-cases-tab-menu__item').click(function () {
        const module = $(this).closest('.dixel-cases');
        const tabIndex = $(this).attr('data-tab-number');
        module.find('.dixel-cases-tab-menu__item').removeClass('dixel-cases-tab-menu__item_active');
        $(this).addClass('dixel-cases-tab-menu__item_active');
        module.find('.dixel-cases-cards-wrapper').removeClass('dixel-cases-cards-wrapper_active');
        module.find(`#tab-${tabIndex}`).addClass('dixel-cases-cards-wrapper_active');
    });

    // $('.dixel-cases-cards').each(function(index, element) {
    //     $(element).slick({
    //         infinite: false,
    //         dots: false,
    //         mobilefirst: true,
    //         variableWidth: true,
    //         initialSlide: 4,
    //         edgeFriction: 0,
    //         prevArrow: $('.dixel-cases-prev'),
    //         nextArrow: $('.dixel-cases-next'),
    //         edgeFriction: 0,
    //     });
    // });



    // $('.dixel-cases-cards').slick({
    //     infinite: true,
    //     speed: 300,
    //     dots: false,
    //     mobilefirst: true,
    //     variableWidth: true,
    //     edgeFriction: 0,
    //     prevArrow: $('.dixel-cases-prev'),
    //     nextArrow: $('.dixel-cases-next'),
    // });

    // dixel Our advantages slider

    $('.dixel-advantages-layout').slick({
        infinite: true,
        dots: false,
        mobilefirst: true,
        adaptiveHeight: true,
        prevArrow: $('.dixel-advantages-prev'),
        nextArrow: $('.dixel-advantages-next'),
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    customPaging: 20,
                }
            }
        ]
    });



});