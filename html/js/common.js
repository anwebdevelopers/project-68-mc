$(function() {

    'use strict';
    var $window = $(window);

    /*******************************************************/
    //MENU MOBILE
    /*******************************************************/
    var $menu = $('.header__nav'),
        $buttonMenuMobile = $('.header__button-menu');
    $buttonMenuMobile.click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
        $menu.slideToggle(200);
    });
    $window.resize(function() {
        $buttonMenuMobile.removeClass('active');
        $menu.removeAttr('style');
    });

    /*******************************************************/
    //SUBMENU MOBILE
    /*******************************************************/
    $menu.find('a').click(function(e) {
        if ($window.width() <= 992) {
            var $this = $(this),
                $ul = $this.prev('ul'),
                $li = $this.closest('li');
            if ($ul.length && !$li.hasClass('active')) {
                e.preventDefault();
                $ul.slideDown(300);
                $li.addClass('active').siblings().removeClass('active').find('ul').slideUp(300);
            }
        }
    });
    $window.resize(function() {
        $menu.find('ul, li').removeAttr('style').removeClass('active');

    });


    /*******************************************************/
    //DROPDOWN
    /*******************************************************/
    $('.dropdown').click(function(e) {
        e.stopPropagation();
        $(this).toggleClass('active');
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('active');
        }
        e.stopPropagation();
    });

    /*******************************************************/
    //SLIDER
    /*******************************************************/
    $('.slider').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 600
    });
});
