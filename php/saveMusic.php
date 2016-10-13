<?php
    require_once "connectDB.php";

    session_start();

    // Receive input datas
    $instrument = $_POST['instrument'];
    $speed = $_POST['speed'];
    $music = $_POST['music'];

    try {
        // Get id
        $stmt = $pdo->prepare("SELECT id from ${TABLE_USER} where name = :name");
        $stmt->bindValue(':name', $_SESSION[$SESSION_USER_NAME]);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Check if there is already music data
        $stmt = $pdo->prepare("SELECT id from ${TABLE_MUSIC} where id = :id");
        $stmt->bindValue(':id', $user["id"]);
        $stmt->execute();
        $musicResult = $stmt->fetch(PDO::FETCH_ASSOC);

        // Save music
        if($musicResult['id']) {
            // Update music
            $stmt = $pdo->prepare("UPDATE ${TABLE_MUSIC} SET instrument = :instrument, speed = :speed, music = :music WHERE id = :id");
            $stmt->bindValue(':id', $user["id"]);
            $stmt->bindValue(':instrument', $instrument);
            $stmt->bindValue(':speed', $speed);
            $stmt->bindValue(':music', $music);
            $stmt->execute();
        } else {
            // Newly save music
            $stmt = $pdo->prepare("INSERT INTO ${TABLE_MUSIC}(id, instrument, speed, music) VALUES (:id, :instrument, :speed, :music)");
            $stmt->bindValue(':id', $user["id"]);
            $stmt->bindValue(':instrument', $instrument);
            $stmt->bindValue(':speed', $speed);
            $stmt->bindValue(':music', $music);
            $stmt->execute();
        }
    }
    catch(PDOException $e) {
        exit($e->getMessage());
    }

    // Disconnect database
    $pdo = null;

    echo $user["id"], $music;
?>