<?php


use MongoDB\BSON\ObjectId;
require __DIR__ . '/../db_connection.php';

$mongo = new DBConnection();
$database = $mongo->getDatabase();

$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$matches = explode('/', trim($path, '/'));

if (isset($matches[0])) {
    switch ($matches[0]) {
        case 'users':
            $collection = $database->selectCollection('users');
            $filter = ['_id' => new ObjectId($matches[1])];
            $collection->deleteOne($filter);
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
