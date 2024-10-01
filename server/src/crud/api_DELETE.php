<?php


if ( $_SERVER['REQUEST_METHOD'] != 'DELETE' ) {
    die('Solo se permite el método DELETE.');
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
        
        
        header('Content-Type: application/json');
        
        
        $query = "CALL EliminarUsuario($matches[2])";
        $stml = $pdo->prepare($query);
        $stml->execute();
        
        echo "\n\nUsuario eliminado de manera exitosa\n";
    }
}


?>