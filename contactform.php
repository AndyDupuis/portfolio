<?php


	$message = '';

	if (empty($_POST['email']) || empty($_POST['firstName']) || empty($_POST['lastName']) || empty($_POST['subject']) || empty($_POST['message'])) {
		die('Please ensure all fields are filled out.');
	}

	$message .= 
		Email: {$_POST['email']}
		First Name: {$_POST['firstName']}
		Last Name: {$_POST['lastName']}
		Subject: {$_POST['subject']}
		Message: {$_POST['message']}
	

	$to = 'andy.dupuis95@gmail.com';
	$subject = 'You have been contacted!';
	$from = 'andydupuis.com';
	$fromEmail = 'yoursite@andydupuis.com'

	$header = 'From: ' . $from. '<' . $fromEmail .. '>';

	if(!mail($to, $subject, $message, $header)) {
		die('Error sending email.');
	} else {
		die('Email sent!');
	}



?>