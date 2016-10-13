<?php
    require_once "connectDB.php";

    session_start();

    // Receive input datas
    $name=$_POST['name'];
    $pass=$_POST['password'];
    $conf=$_POST['confirm'];
	$lang=$_POST['language'];

    // Check input datas
    $error = "";
    if ( mb_strlen($name)<$MIN_NAME_NUM or mb_strlen($name)>$MAX_NAME_NUM )$error .= "&name_range=error";
    if ( mb_strlen($pass)<$MIN_PASS_NUM or mb_strlen($pass)>$MAX_PASS_NUM )$error .= "&pass_range=error";
    if ( $pass != $conf )$error .= "&confirm=error";

    try {
        // Check if there is same name
        $stmt = $pdo->prepare("	SELECT name from ${TABLE_USER} where name = :name");
        $stmt->bindValue(':name', $name);
        $stmt->execute();

        if($data=$stmt->fetch(PDO::FETCH_ASSOC))$error .= "&identifical=error";
    }
    catch(PDOException $e) {
        exit($e->getMessage());
    }

    if( $error!="" ) {
        $pdo = null;
        header("location:../Regist.php?lang=${lang}&error=true&name=".$name.$error);
        exit();
    }
    else {
        try {
            // Resist data
            $stmt = $pdo->prepare("INSERT INTO ${TABLE_USER}(name, password) VALUES (:name, :pass)");
            $stmt->bindValue(':name', $name);
            $stmt->bindValue(':pass', $pass);
            $stmt->execute();

            // Get Name
            $stmt = $pdo->prepare("SELECT name from ${TABLE_USER} where name = :name");
            $stmt->bindValue(':name', $name);
            $stmt->execute();

            $user = $stmt->fetch(PDO::FETCH_ASSOC);
        }
        catch(PDOException $e) {
            exit($e->getMessage());
        }
    }

    // Disconnect database
    $pdo = null;

    // Set user name in session
    $_SESSION[$SESSION_USER_NAME] = $name;

    // Move to index.html
    header("location:../index.html?lang=${lang}");
?>