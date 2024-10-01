<?php



if ( $_SERVER['REQUEST_METHOD'] != 'PUT' ) {
    die('Solo se permite el método PUT.');
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
            http_response_code(404);
            die("No se ha encontrado el recurso que buscas.");
        } elseif ( empty($matches[2]) ) {
            http_response_code(404);
            die("Debes especificar el id del user");
        } elseif ( !in_array($matches[2], $all_users_id) ) {
            http_response_code(404);
            die("El id de usuario no existe");
        }
        
        $json = json_decode(file_get_contents('php://input'), true);
        $id = $matches[2];
        $nombre = (array_key_exists('nombre', $json) && $json['nombre'] != '') ? $json['nombre'] : '';
        $edad = (array_key_exists('edad', $json) && $json['edad'] != '') ? $json['edad'] : -1;
        $correo = (array_key_exists('correo', $json) && $json['correo'] != '') ? $json['correo'] : '';

        if ( $nombre != '' && preg_match("/^[\p{L} ]+$/u", $nombre) == 0) {
            http_response_code(400);
            die("El nombre solo puede contener letras");
        }
        
        if ( $correo != '' && !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            die("El correo no es válido");
        }
        
        
        header('Content-Type: application/json');
        
        
        $query = "CALL ActualizarRegistro($id, '$nombre', $edad, '$correo')";
        $stml = $pdo->prepare($query);
        $stml->execute();
        
        echo "\n\nUsuario actualizado de manera exitosa\n";
    }
}


?>