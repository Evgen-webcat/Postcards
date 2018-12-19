$(document).ready(function () {
    'use strict';

   $('.toggle-nav').click(function () {
       $(this).toggleClass('toggled');
       $('.main_menu').slideToggle();
   });

    $(window).on('resize', function () {
        if ($(this).width() > 767) {
            $('.main_menu').removeAttr('style');
        }
    });
});
