<?php


use MongoDB\BSON\ObjectId;
require __DIR__ . '/../db_connection.php';

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
            $user = [
                'first_name' => $input['first_name'] ?? null,
                'last_name' => $input['last_name'] ?? null,
                'email' => $input['email'] ?? null,
                'password' => $input['password'] ?? null,
            ];

            if (in_array(null, $user, true)) {
                header("HTTP/1.1 400 Bad Request");
                echo "Faltan datos necesarios";
                exit();
            }

            $collection = $database->selectCollection('users');
            $result = $collection->insertOne($user);
            $insertedId = $result->getInsertedId();
            $filter = ['_id' => new MongoDB\BSON\ObjectId($insertedId)];
            $user = $collection->findOne($filter);
            echo json_encode($user);    
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
