$( document ).ready(function() {
    circle();
    circle2();
    circle3();
    circle4();
    $(".skills__diagramms").animated("fadeIn", "fadeOut");
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 2100) {
            circle();
            circle2();
            circle3();
            circle4();
            $(window).off('scroll');
        }
    });

    function circle() {
        $('#circle').circleProgress({
            thickness: 13,
            size: 160,
            value: .9,
            // reverse: true,
            fill:{
                color: '#30bae7'
            }
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('span').html(parseInt(90 * progress) + '%');
            });
    }
    function circle2() {
        $('#circle2').circleProgress({
            thickness: 13,
            size: 160,
            value: .75,
            reverse: true,
            fill:{
                color: '#d74680'
            }
            }).on('circle-animation-progress', function(event, progress) {
            $(this).find('span').html(parseInt(75 * progress) + '%');
            });
    }
    function circle3() {
        $('#circle3').circleProgress({
            thickness: 13,
            size: 160,
            value: .7,
            // reverse: true,
            fill:{
                color: '#15c7a8'
            }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('span').html(parseInt(70 * progress) + '%');
        });
    }
    function circle4() {
        $('#circle4').circleProgress({
            thickness: 13,
            size: 160,
            value: .85,
            reverse: true,
            fill:{
                color: '#eb7d4b'
            }
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('span').html(parseInt(85 * progress) + '%');
        });
    }


    // мягкий скрол
    $(".nav__list a, .arrow-up").mPageScroll2id({
        offset : 50
    })
   
    // поява меню
        $(".header__top-line").removeClass("default");
            $(window).scroll(function(){
                if ($(this).scrollTop() > 20) {
                    $(".header__top-line").addClass("default").fadeIn('500');
                } else {
                    $(".header__top-line").removeClass("default").fadeIn('500');
            };
        });


});