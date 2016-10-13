<?php
	require_once "global.php";
    
    session_start();

    if(isset($_SESSION[$SESSION_USER_NAME])) {
        echo $_SESSION[$SESSION_USER_NAME];
    } else {
        echo "";
    }
?>