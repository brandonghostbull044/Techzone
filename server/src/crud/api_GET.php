<?php


    //require __DIR__ . '/../src/basic_auth.php';

    require __DIR__ . '/../db_connection.php';


    $matches = [];
    preg_match('/\/([^\/]+)?\/?([^\/]+)?/', $_SERVER["REQUEST_URI"], $matches);

    $mongo = new DBConnection();
    $database = $mongo->getDatabase();

    switch ($matches[1]) {
        case 'users':
            $collection = $database->selectCollection('usuarios');
            $result = $collection->find()->toArray();
            echo json_encode($result);    
            break;
        case 'productos':
            break;
        default:
            header("HTTP/1.1 404 Not Found");
            echo "404 - Página não encontrada";
            break;  
    }



?>