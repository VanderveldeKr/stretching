<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
	$step1 = $_POST['step1'];
	$step2 = $_POST['step2'];
	$step3 = $_POST['step3'];
    $email = 'TeamPlay@info.com';


	$to = "vanderveldekr@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка TeamPlay";

	
	$msg="
    Какую цель Вы хотите достичь?: $step /n
    Занимались ли Вы спортом раньше?: $step2 /n
    Что для Вас важно при выборе студии?: $step3 /n
    Имя: $name /n
    Телефон: $phone";

	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привет, форма отправлена</p>