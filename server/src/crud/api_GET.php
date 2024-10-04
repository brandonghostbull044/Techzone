<?php


    //require __DIR__ . '/../src/basic_auth.php';

    require __DIR__ . '/../db_connection.php';
    require __DIR__ . '/../functions/auth.php';


    $matches = [];
    preg_match('/\/([^\/\?]+)?\/?([^\/]+)?/', $_SERVER["REQUEST_URI"], $matches);

    $mongo = new DBConnection();
    $database = $mongo->getDatabase();

    switch ($matches[1]) {
        case 'users':
            $email = $_GET["email"];
            $password = $_GET["password"];
            $user = [
                'email' => $email,
                'password' => $password,
            ];
            $collection = $database->selectCollection('users');
            $result = $collection->find()->toArray();
            echo authenticate($user ,$result);    
            break;
        case 'productos':
            break;
        default:
            header("HTTP/1.1 404 Not Found");
            echo "Página no encontrada";
            break;  
    }



?>