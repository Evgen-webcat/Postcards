$(document).ready(function () {
    'use strict';

    var complimentsText;
    var complimentsImg;
    var complimentsClass;
    var postcardsImg = {};

    $('.create_button').click(function () {
        $(this).text('Змяніць');
        $('.paragraph').fadeOut();
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
            var step_compliments_block = '<a href="#" class="step_compliments_button"><div><span class="name">' + genderText + ' ' + name + '!</span> ' + text + '</div></a>';
            $('.step_compliments').append(step_compliments_block);
        }

        $('.step_compliments').slideDown();
        $('.paragraph').eq(1).delay(500).fadeIn();
    });

    $('.step_compliments').on('click', '.step_compliments_button', function (event) {
        event.preventDefault();

        complimentsText = $(this).html();
        $('.paragraph').fadeOut();
        $('.step_compliments').slideUp();
        $('.step_images').slideDown();
        $('.paragraph').eq(2).delay(500).fadeIn();
    });

    $('.choose_image').click(function () {
        complimentsImg = $(this).prev().attr('href');
        complimentsClass = $(this).prev().data('class');
        $('.locker').fadeIn(300, function () {
            $('.steps').css('display', 'none');
            $('.postcard_wrap').addClass(complimentsClass);
            $('.postcard_img').attr('src', complimentsImg);
            $('.postcard_wrap_text').html(complimentsText);
            $('.postcard').css('display', 'block');
            html2canvas(document.querySelector('#postcards')).then(function (canvas) {
                postcardsImg.data = canvas.toDataURL();
                postcardsImg.name = (function () {
                    var date = new Date();
                    var rand = Math.floor(Math.random() * 1000);
                    return date.getDate() + '' + date.getMonth() + '' + date.getFullYear() + '' + date.getMilliseconds() + '' + rand;
                })();

                $('.download_button').attr('href', 'tmp/postcard' + postcardsImg.name + '.png');

                $.ajax({
                    url: 'php/saveImg.php',
                    method: 'POST',
                    data: postcardsImg,
                    success: function (data) {
                        console.log(data);
                        $('.locker').fadeOut(300);
                    }
                });
            });
        });
    });

    $('.back_button').click(function (event) {
        event.preventDefault();

        $('.postcard').fadeOut(300, function () {
            $('.postcard_wrap').removeClass(complimentsClass);
        });
        $('.steps').delay(300).fadeIn(300);
    });

    $('.again_button').click(function (event) {
        event.preventDefault();

        $('.create_button').text('СТВАРЫЦЕ ПАЖАДАННЕ');
        $('.step_images').delay(300).slideUp(0);
        $('.paragraph').fadeOut(0);
        $('.paragraph').eq(0).fadeIn(0);
        $('.postcard').fadeOut(300, function () {
            $('.postcard_wrap').removeClass(complimentsClass);
        });
        $('.steps').delay(300).fadeIn(300);
    });
});
