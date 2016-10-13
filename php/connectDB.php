<?php
    require_once "global.php";

    // Connecting to database.
    // Disconnect after transaction in each PHP file to use this header.
    try {
        $pdo = new PDO('mysql:dbname='.$dbname.';host='.$host,$hostname,$password,
                        array(	PDO::MYSQL_ATTR_INIT_COMMAND => "SET SESSION sql_mode='TRADITIONAL'",
                                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        $pdo->query('SET NAMES utf8');
    }
    catch(PDOException $e) {
        exit($e->getMessage());
    }
?>