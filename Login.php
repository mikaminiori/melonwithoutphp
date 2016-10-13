<!DOCTYPE html>
<html>

<head>
		<meta charset="utf-8" />
		<title>MelOn - User Login -</title>
		<link rel="shortcut icon" href="storage/assets/image/game/favicon.ico">
		<link rel="stylesheet" href="css/FixedNav.css" type="text/css" />
		<link rel="stylesheet" href="css/Authentication.css" type="text/css" />
</head>

<body>
		<?php 
            require_once "php/languageCheck.php";
            require_once "php/label.php";
            $label = new Label($lang);
        ?>
		<nav>
				<img id="headerLogo" src="storage/assets/image/game/MelOnLogo.png" />
				<button class="navButton" id="returnTop" onclick="document.location = 'index.html?lang=<?php echo $lang; ?>';">
					<?php $label->returnTop(); ?>
				</button>
		</nav>
		<section>
			<div id="loginTypo"><?php $label->login(); ?></div>
            <div id="authContainer">
			<?php
                  $label->loginDesc();
                  echo "<br/><br/>";
				  if(isset($_GET["error"])){
					  require_once "php/errorMessage.php";
					  $error = new ErrorMessage($lang, "error");
					  $error->error();
					  echo "<br/>";
				  }
			?>

				<form action="php/login.php" method="post">
                
					<?php
						  if(isset($_GET["name_range"])) $error->nameRange();
						  if(isset($_GET["match"])) $error->match();
					?>
					<div class="input">
						  <span id="name"><?php $label->name(); ?>: </span>
						  <input type="text" name="name" size="30" value="<?php if(isset($_GET["name"])) echo $_GET["name"]; ?>"/>
					</div><br/>
            
					<?php if(isset($_GET["pass_range"])) $error->passRange(); ?>
					<div class="input">
						  <span id="password"><?php $label->password(); ?>: </span>
						  <input type="password" name="password" size="30" />
					</div><br/>

					<input type="hidden" name="language" value=<?php echo $lang; ?>>

					<input type="submit" value="<?php $label->login(); ?>">
				  </form>
            </div>
		</section>
</body>

</html>