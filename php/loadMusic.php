<?php
    require_once "connectDB.php";

    session_start();
    
    try {
        // Get id
        $stmt = $pdo->prepare("SELECT id from ${TABLE_USER} where name = :name");
        $stmt->bindValue(':name', $_SESSION[$SESSION_USER_NAME]);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Check if there is already music data
        $stmt = $pdo->prepare("SELECT instrument, speed, music from ${TABLE_MUSIC} where id = :id");
        $stmt->bindValue(':id', $user["id"]);
        $stmt->execute();
        $musicResult = $stmt->fetch(PDO::FETCH_ASSOC);
    }
    catch(PDOException $e) {
        exit($e->getMessage());
    }
    // Disconnect database
    $pdo = null;

    echo json_encode($musicResult);
?>