<?php
if($_POST){
    $name = $_POST['form_subject'];
    $email = $_POST['form_email'];
    $message = $_POST['form_message'];

//send email
    mail("bdawson8@uncc.edu", "This email is from:" .$email, $message);
}
?>