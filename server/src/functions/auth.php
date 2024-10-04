<?php


function authenticate ($user, $db_data) {
    foreach($db_data as $db_user) {
        if (
            isset($db_user['email'], $user['email']) &&
            isset($db_user['password'], $user['password']) &&
            $db_user['email'] === $user['email'] &&
            $db_user['password'] === $user['password']
        ) {
            $user_array = (array)$db_user;
            return json_encode($user_array);
        }
    }
    
    return 'false';
}


?>