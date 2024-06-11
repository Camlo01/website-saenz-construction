<?php

$allowed_origins = [
    'http://saenz-construction.com/',
    'http://www.saenz-construction.com/',
    'https://saenz-construction.com/',
    'https://www.saenz-construction.com/',
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
}

header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

use PHPMailer\PHPMailer\PHPMailer;

require 'vendor/autoload.php';

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['fullName'];
$email = $data['email'];
$phone = $data['phone'];
$address = $data['address'];
$zip = $data['zip'];
$source = $data['source'];
$message = $data['description'];


$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com';
$mail->Port = 587;
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Username = 'noreply@saenz-construction.com';
$mail->Password = 'sB5=Fec)pvMy0!L]^c730q';
$mail->setFrom('noreply@saenz-construction.com', 'Message Email');
$mail->addAddress('sales@saenz-construction.com', 'Camilo Beltrán');
if ($mail->addReplyTo($email, $name)) {
    $mail->Subject = 'New Message! ';
    $mail->isHTML(false);
    $mail->Body = <<<EOT
    Email: $email
    Fullname: $name
    Phone: $phone
    Addres: $address - ZIP: $zip

    Source: $source

    Message: $message
EOT;
    if (!$mail->send()) {
        $response = array("success" => false, "message" => "Error al enviar el correo");
        http_response_code(500);
        echo json_encode($response);
    } else {
        $response = array("success" => true, "message" => "Correo enviado correctamente");
        http_response_code(200);
        echo json_encode($response);
    }
}