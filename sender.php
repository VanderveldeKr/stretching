<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = 'TeamPlay@info.com';


	$to = "vanderveldekr@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка TeamPlay";

	
	$msg="
    Имя: $name /n
    Телефон: $phone";
    

	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>


