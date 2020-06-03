<?php
/* llamando a los campos */
$nombre = $_POST['name'];
$correo = $_POST['email'];
$telefono = $_POST['phone'];
$mensaje = $_POST['mensaje'];
/* Datos para el correo */
$destinatario = "jairhdzisidro@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

//Enviando mensaje
if(@mail($destinatario,$asunto,$carta)){
    echo 'sent';
}else{
    echo 'failed';
}


?>