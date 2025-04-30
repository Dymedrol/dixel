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

    if (window.innerWidth < 720 ){
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
    }

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
    if (window.innerWidth < 1280 ){
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
    }

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
    if (window.innerWidth < 1280 ){
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
    }

    // our cases page
    $('.dixel-our-cases-tab-menu__item').click(function () {
        const module = $(this).closest('.dixel-our-cases');
        const tabIndex = $(this).attr('data-tab-id');
        module.find('.dixel-our-cases-tab-menu__item').removeClass('dixel-our-cases-tab-menu__item_active');
        $(this).addClass('dixel-our-cases-tab-menu__item_active');
        module.find('.dixel-our-cases-cards').removeClass('dixel-our-cases-cards__open');
        module.find(`#tab-${tabIndex}`).addClass('dixel-our-cases-cards__open');
    });

    // our services page
    $('.dixel-services-page-tab-menu__item').click(function () {
        const module = $(this).closest('.dixel-services-page');
        const tabIndex = $(this).attr('data-tab-id');
        module.find('.dixel-services-page-tab-menu__item').removeClass('dixel-services-page-tab-menu__item_active');
        $(this).addClass('dixel-services-page-tab-menu__item_active');
        module.find('.dixel-services-page-content').removeClass('dixel-services-page-content_active');
        module.find(`#tab-${tabIndex}`).addClass('dixel-services-page-content_active');
    });

    // our services slider swiper
    var ourServicesSliderSwiper = new Swiper(".dixel-our-services-slider-swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".dixel-our-services-slider-button-next",
            prevEl: ".dixel-our-services-slider-button-prev",
        },
    });

    // accordion
    $(".accordion-header").on("click", function(e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion-content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
            $('.accordion__arrow').removeClass('accordion__rotate');
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });

    // case page
    $('.beforeAfter').beforeAfter();

    $('.dixel-case-page-tab-menu__item').click(function () {
        const module = $(this).closest('.dixel-case-page');
        const tabIndex = $(this).attr('data-tab-id');
        module.find('.dixel-case-page-tab-menu__item').removeClass('dixel-case-page-tab-menu__item_active');
        $(this).addClass('dixel-case-page-tab-menu__item_active');
        module.find('.dixel-case-page-step').removeClass('open');
        module.find(`#tab-${tabIndex}`).addClass('open');
    });

    $('.dixel-case-page-step-content-item__pic').click(function () {
        const id = $(this).closest('.dixel-case-page-step').attr('id').replace('tab-','');
        const index = $(this).attr('data-index');
        casePageSwiper1[id - 1].slideTo(index,0,false);
        $(`#popup-slider-${id}`).css('display', 'flex');
    });

    $('.dixel-case-page-popup-close').click(function () {
        $(this).closest('.dixel-case-page-popup-shadow').css('display','none');
    });

    $('.dixel-case-page-popup-thumb').click(function () {
        const index = $(this).attr('data-index');
        const sliderIndex = $(this).closest('.dixel-case-page-popup-shadow').attr('id').replace('popup-slider-', '');
        casePageSwiper1[sliderIndex - 1].slideTo(index,500,false);
    });

    var casePageSwiper1 = new Swiper(".dixel-case-page-popup-slider-1", {
        loop: false,
        spaceBetween: 10,
        navigation: {
            nextEl: ".dixel-case-page-popup-slider-next",
            prevEl: ".dixel-case-page-popup-slider-prev",
        },
        thumbs: {
            // swiper: casePageSwiper2,
        },
    });

    // footer button action

    $('.dixel-footer-button').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});