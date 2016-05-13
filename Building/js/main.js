$(document).ready(function(){
      
    
// слайдер/галерея    
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
        asNavFor: '.slider-nav'
    });
    
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true
    });
    
    
// мягкий скрол
    $(".nav a, .logo a, .adaptive-menu a, .button").mPageScroll2id({
        offset : 50
    })
 


// поява меню
    $(".top-line").removeClass("default");
        $(window).scroll(function(){
            if ($(this).scrollTop() > 20) {
                $(".top-line").addClass("default").fadeIn('500');
            } else {
                $(".top-line").removeClass("default").fadeIn('500');
        };
    });



// адаптивне меню
    var adaptiveModule = (function(){
        $('.adaptive-menu-init').click(function(){
            $('.adaptive-menu').fadeToggle();
        });

        $(window).resize(function () {
            if (window.innerWidth>=711) {
                if ($('.adaptive-menu')) $('.adaptive-menu').removeAttr('style').attr('class','nav');
                
                }
            

            if (window.innerWidth<=710) {
                if ($('.nav')) $('.nav').removeAttr('style').attr('class','adaptive-menu');
                
            };
        });

            // })
        $(window).trigger('resize');
    })();

// шапка 

    $(function() {
        $("#head-bg").kenburnsy({
            fullscreen: true
        });
    });

      
      
});



