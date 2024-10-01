<?php


require __DIR__ . '/../vendor/autoload.php';

class DBConnection {
    private $client;
    private $data_base;

    public function __construct()
    {
        try {
            $this->client = new MongoDB\Client('moongodb://localhost:27017');
            $this->data_base = $this->client->selectDatabase('Techzone');
        } catch (MongoDB\Driver\Exception\Exception $e) {
            echo "Error connecting to MongoDB: ", $e->getMessage(), "\n";
            exit();
        }    
    }

    public function getDataBase() {
        return $this->data_base;
    }
}


?>