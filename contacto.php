<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recogemos los datos del formulario
    $nombre = $_POST['nombre_contacto'];
    $correo = $_POST['correo_contacto'];
    $telefono = $_POST['telefono_contacto'];
    $mensaje = $_POST['mensaje_contacto'];

    // Correo destinatario 
    $to = "idbrayhan@gmail.com"; 
    $subject = "Nuevo mensaje de contacto";

    // Cuerpo del mensaje
    $message = "Nombre: " . $nombre . "\n";
    $message .= "Correo: " . $correo . "\n";
    $message .= "Teléfono: " . $telefono . "\n";
    $message .= "Mensaje: " . $mensaje . "\n";

    // Cabeceras
    $headers = "From: " . $correo . "\r\n";
    $headers .= "Reply-To: " . $correo . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        // Redirige a una página de éxito o muestra un mensaje
        echo "<script>alert('Mensaje enviado exitosamente'); window.location.href = 'contacto.html';</script>";
    } else {
        // Si no se pudo enviar el correo
        echo "<script>alert('Error al enviar el mensaje'); window.location.href = 'contacto.html';</script>";
    }
}
?>
