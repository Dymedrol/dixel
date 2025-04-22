$(document).ready(function() {
    const burgerButton = $('#header-burger');
    const mobileMenu = $('#header-mobile-menu');
    const mobileMenuCloseButton = $('#header-mobile-close');

    burgerButton.click(function() {
        mobileMenu.css('display', 'flex');
    });

    mobileMenuCloseButton.click(function() {
        mobileMenu.css('display', 'none');
    });
});