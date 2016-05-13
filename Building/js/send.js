$(function(){
    
	$('#contact').submit(function(){
		var errors = false;
        $(this).find('input, textarea').empty().css("box-shadow", "none");
        $("#email").css("border", "none");
		$(this).find('input:not(#phone), textarea').each(function(){
			
            var emailVal = $("#email").val();
                        
            if(emailVal.split('@').length - 1 == 0 || emailVal.split('.').length - 1 == 0){
                errors = true;

                $("#email").css("border", "2px solid red");
                $("#email").css("box-shadow", "0px 0px 10px rgb(255, 0, 0)");
            } 
            if( $.trim($(this).val()) == '' ) {
				errors = true;
			}
		});

		if( !errors ){
			var data = $('#contact').serialize();
			$.ajax({
				url: '../send.php',
				type: 'POST',
				data: data,
				beforeSend: function(){
                    
                    $('#submit').val('Отправка...');
                    
				},
				success: function(res){
					if( res == 1 ){
						$('#contact').find('input:not(#submit), textarea').val('');
                        
						$('#submit').val('Отправить');
						alert('Письмо отправлено');
					}else{
						$('#submit').next().empty();
						alert('Ошибка отправки');
					}
				},
				error: function(){
					alert('Ошибка!');
				}
			});
		}

		return false;
	});

});
