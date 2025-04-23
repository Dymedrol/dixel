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
    var ourServicesSwiper = new Swiper(".dixel-our-services-swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".dixel-our-services-next",
            prevEl: ".dixel-our-services-prev",
        },
        on: {
            resize: function enableOnlyMobile(swiper){
                // Disable the slider when the window width is less than or equal to 960
                if(720 < window.innerWidth){
                    ourServicesSwiper.disable()
                    ourServicesSwiper.el.classList.add('-non-slider')
                }else{
                    ourServicesSwiper.enable()
                    ourServicesSwiper.el.classList.remove('-non-slider')
                }
            },
        }
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

    var casesSwiper = new Swiper(".dixel-cases-swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".dixel-cases-next",
            prevEl: ".dixel-cases-prev",
        },
    });

    // dixel Our advantages slider
    var advantagesSwiper = new Swiper(".dixel-advantages-swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".dixel-advantages-next",
            prevEl: ".dixel-advantages-prev",
        },
        on: {
            resize: function enableOnlyMobile(swiper){
                // Disable the slider when the window width is less than or equal to 960
                if(1280 < window.innerWidth){
                    advantagesSwiper.disable()
                    advantagesSwiper.el.classList.add('-non-slider')
                }else{
                    advantagesSwiper.enable()
                    advantagesSwiper.el.classList.remove('-non-slider')
                }
            },
        }
    });

    // Dixel client says slider
    var clientSaySwiper = new Swiper(".dixel-client-say-swiper", {
        effect: "fade",
        autoHeight: true,
        navigation: {
            nextEl: ".dixel-client-say-next",
            prevEl: ".dixel-client-say-prev",
        },
    });

    // dixel blog module slider
    var blogModuleSwiper = new Swiper(".dixel-blog-swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".dixel-blog-next",
            prevEl: ".dixel-blog-prev",
        },
        on: {
            resize: function enableOnlyMobile(swiper){
                // Disable the slider when the window width is less than or equal to 960
                if(1280 < window.innerWidth){
                    blogModuleSwiper.disable()
                    blogModuleSwiper.el.classList.add('-non-slider')
                }else{
                    blogModuleSwiper.enable()
                    blogModuleSwiper.el.classList.remove('-non-slider')
                }
            },
        }
    });
});