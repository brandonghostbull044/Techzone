<?php


if ( $_SERVER['REQUEST_METHOD'] != 'POST' ) {
    die('Solo se permite el método POST.');
} else {
    require __DIR__ . '/../src/basic_auth.php';

    require __DIR__ . '/../src/db_connection.php';


    $allowed_resources = ['usuarios'];

    $matches = [];
    preg_match('/\/([^\/]+)?\/?([^\/]+)?/', $_SERVER["REQUEST_URI"], $matches);

    if ($matches[1] == '') {
        require __DIR__ . '/../docs/four_serves.doc.php';
    } else {
        if ( !in_array($matches[1], $allowed_resources) ) {
            echo $matches[1];
            http_response_code(404);
            die("No se ha encontrado el recurso que buscas.");
        } elseif ( !empty($matches[2]) ) {
            http_response_code(404);
            die("No debes especificar el id del user");
        }
        
        
        $json = json_decode(file_get_contents('php://input'), true);
        $nombre = $json['nombre'];
        $edad = $json['edad'];
        $correo = $json['correo'];
        
        if ($nombre == "" || $edad == "" || $correo == "" )  {
            http_response_code(400);
            die("Todos los campos son obligatorios");
        }
        
        if (preg_match("/^[\p{L} ]+$/u", $nombre) == 0) {
            http_response_code(400);
            die("El nombre solo puede contener letras");
        }
        
        if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            die("El correo no es válido");
        }
        
        header('Content-Type: application/json');
        http_response_code(201);
        
        
        $query = "CALL InsertarUsuario('$nombre', $edad, '$correo')";
        $stml = $pdo->prepare($query);
        $stml->execute();
        
        
        echo "\n\nUsuario agregado con exito\n";
    }
}



?>