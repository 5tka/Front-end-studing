<?php 
if( $_POST ){
	require 'phpmailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$mail->isSMTP();
    
    // через яку мою почту буде відправлятись лист
	$mail->Host = 'smtp.mail.ru';
	$mail->SMTPAuth = true;
	$mail->Username = 'mailer.14'; // логін цієї почти <------------------------------------------------| 
	$mail->Password = 'qaws1111'; // пароль цієї почти                                                //| 
	$mail->SMTPSecure = 'ssl';                                                                        //| 
	$mail->Port = '465';                                                                              //| 
                                                                                                      //| 
                                                                                                      //| 
    // на яку твою почту будуть приходити листи                                                       //| 
	$mail->CharSet = 'UTF-8';                                                                         //|      
	$mail->From = 'mailer.14@mail.ru'; // тут адрес почти з ЯКОЇ відправляється лист (теж шо і вище) |
	$mail->FromName = 'МЕГАПРОСРЕС'; // имя отправителя
	$mail->addAddress('ferol2010@yandex.ru', 'Имя'); // почта, на яку приходять листи
	$mail->isHTML(true);

	// $mail->Subject = $_POST['subject']; // тема листа
    
	$mail->Body = "Имя: {$_POST['name']}<br> Телефон: {$_POST['phone']}<br> Email: {$_POST['email']}<br> Сообщение: " . nl2br($_POST['body']); // текст листа
	$mail->AltBody = "Имя: {$_POST['name']}\r\n Телефон: {$_POST['phone']}\r\n Email: {$_POST['email']}\r\n Сообщение: {$_POST['body']}"; // альтернативний текст листа

	// $mail->SMTPDebug = 1;

	if( $mail->send() ){
		$answer = '1';
	}else{
		$answer = '0';
		/*echo 'Письмо не может быть отправлено. ';
		echo 'Ошибка: ' . $mail->ErrorInfo;*/
	}
	die( $answer );
}

?>