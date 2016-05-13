$(document).ready(function(){
    
     $(document).ready(function(){
          $(".nav a, .logo a").mPageScroll2id({
              offset : 50
          })
      });  
      
      
    // ховати меню
    $(".top-line").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $(".top-line").addClass("default").fadeIn('500');
        } else {
            $(".top-line").removeClass("default").fadeIn('500');
        };
    });
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
});



