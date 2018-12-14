$(document).ready(function () {
    'use strict';

    var complimentsText;
    var complimentsImg;
    var complimentsClass;

    $('.create_button').click(function () {
        $('.step_compliments').slideUp(0);
        $('.step_images').slideUp();
        var option = $('.select option:selected');
        var name = option.text();
        var gender = option.val();
        var compliments = $('.compliment');
        $('.step_compliments').children().remove();

        for (var i = 0; i < compliments.length; i++) {
            var genderText = compliments.eq(i).find('.' + gender).text();
            var text = compliments.eq(i).find('.text').text();
            var step_compliments_block = '<a href="#" class="step_compliments_button"><div><span class="name">' + genderText + ' ' + name + '</span> ' + text + '</div></a>';
            $('.step_compliments').append(step_compliments_block);
        }

        $('.step_compliments').slideDown();
    });

    $('.step_compliments').on('click', '.step_compliments_button', function (event) {
        event.preventDefault();
        complimentsText = $(this).html();
        $('.step_compliments').slideUp();
        $('.step_images').slideDown();
    });

    $('.choose_image').click(function () {
        complimentsImg = $(this).prev().attr('href');
        complimentsClass = $(this).prev().data('class');
        $('.steps').fadeOut(300);
        $('.step_images').delay(300).slideUp(0);
        $('.postcard_wrap').addClass(complimentsClass);
        $('.postcard_wrap').css('background-image', 'url(' + complimentsImg + ')');
        $('.postcard_wrap_text').html(complimentsText);
        $('.postcard').delay(300).fadeIn();

    });
});
