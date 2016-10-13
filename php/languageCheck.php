<?php
    $lang = "English";
    if(isset($_GET["lang"])) {
        switch ($_GET["lang"]) {
            case "Japanese": $lang = "Japanese"; break;
            case "Finnish": $lang = "Finnish"; break;
            default: break;
        }
    }
?>