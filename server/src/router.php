<?php

$matches = [];

// Headers comunes para CORS
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if (preg_match('/\/([^\/]+)?\/?([^\/]+)?/', $_SERVER["REQUEST_URI"], $matches)) {
    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            require __DIR__ . '/./crud/api_GET.php';
            break;
        case 'POST':
            require __DIR__ . '/./crud/api_POST.php';
            break;
        case 'PUT':
            require __DIR__ . '/./crud/api_PUT.php';
            break;
        case 'DELETE':
            require __DIR__ . '/./crud/api_DELETE.php';
            break;
        default:
            http_response_code(405); 
            die('Método no permitido.');
    }
} else {
    http_response_code(404);
    die('No se ha encontrado el recurso que buscas.');
}

?>
