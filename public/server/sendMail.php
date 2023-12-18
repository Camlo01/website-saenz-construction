<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $config = [
        'host' => 'smtp.hostinger.com',
        'port' => 465,
        'username' => 'noreply@saenz-construction.com',
        'password' => 'sB5=Fec)pvMy0!L]^c730q'
    ];

    // Configure the SMTP Server
    ini_set("SMTP", $config['host']);
    ini_set("smtp_port", $config['port']);
    ini_set("username", $config['username']);

    // set the values into variables
    $data = json_decode(file_get_contents("php://input"), true);

    $fullName = $data['fullName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $address = $data['address'];
    $source = $data['source'];
    $description = $data['description'];
    $zip = $data['zip'];

    // Configure mail content
    $to = "sales@saenz-construction.com";
    $subject = "New Message! " . $fullName;
    $messageBody = "
    From: $fullName \n
    Email: $email \n
    Phone: $phone \n\n

    Description: $description \n\n

    Source: $source \n
    Address: $Address \n
    Zip: $zip\n
        ";


    // Configure headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Encabezados de autenticación
    $headers .= "Return-Path: <$email>\r\n";
    $headers .= "X-Sender: $email\r\n";
    $headers .= "X-Mailer: PHP\r\n";
    $headers .= "X-Priority: 1\r\n";

    if (mail($to, $subject, $messageBody, $headers)) {
        $response = array("success" => true, "message" => "It was sent successfully");
        http_response_code(200);
        echo json_encode($response);
    } else {
        $response = array("success" => false, "message" => "Something went wrong!");
        http_response_code(500);
        echo json_encode($response);
    }
}

?>