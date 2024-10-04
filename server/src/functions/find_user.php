<?php


function find_user ($user, $db_users) {
    foreach($db_users as $db_user) {
        if (
            isset($db_user['email'], $user['email']) &&
            $db_user['email'] === $user['email'] &&
            $db_user['password'] === $user['password']
        ) {
            return $db_user;
        }
    }
    
    return null;
}


?>