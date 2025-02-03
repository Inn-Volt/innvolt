<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Validar datos (esto es muy básico, idealmente deberías validar más)
    if (!empty($nombre) && !empty($email) && !empty($mensaje)) {
        // Enviar un correo electrónico (esto es un ejemplo básico)
        $to = "inn-volt@outlook.cl";
        $subject = "Nuevo mensaje de contacto";
        $body = "Nombre: $nombre\nCorreo: $email\nMensaje: $mensaje";
        $headers = "From: $email";

        if (mail($to, $subject, $body, $headers)) {
            echo "Mensaje enviado con éxito!";
        } else {
            echo "Hubo un error al enviar el mensaje.";
        }
    } else {
        echo "Por favor, complete todos los campos.";
    }
}
?>
