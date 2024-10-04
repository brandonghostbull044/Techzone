<?php


use MongoDB\BSON\ObjectId;
require __DIR__ . '/../db_connection.php';
require_once __DIR__ . '/../functions/find_user.php';

$mongo = new DBConnection();
$database = $mongo->getDatabase();

$input = json_decode(file_get_contents('php://input'), true);

if ($input === null) {
    header("HTTP/1.1 400 Bad Request");
    echo "Error al decodificar el JSON";
    exit();
}

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$matches = explode('/', trim($path, '/'));

if (isset($matches[0])) {
    switch ($matches[0]) {
        case 'users':
            $db_user = 
            $user = $input;
            $filter = ['_id' => new ObjectId($user["_id"])];
            $updateArray = [];

            foreach ($user as $key => $value) {
                if ($key !== '_id') {
                    $updateArray[$key] = $value;
                }
            }

            
            $update = ['$set' => $updateArray];


            $collection = $database->selectCollection('users');
            $result = $collection->updateOne($filter, $update);
            
            echo 'Usuario agregado de manera exitosa';    
            break;

        case 'productos':
            break;

        default:
            header("HTTP/1.1 404 Not Found");
            echo "Página no encontrada";
            break;
    }
} else {
    header("HTTP/1.1 400 Bad Request");
    echo "Recurso no especificado";
}
?>
