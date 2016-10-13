<?php
    class ErrorMessage {

		private $lang;
		private $css;

        function __construct($language, $cssClassName) {
			$this->lang = $language;
			$this->css = $cssClassName;
		}

		private function echoDivTag($msg) {
			echo "<div class={$this->css}>{$msg}</div>";
		}

		function error() {
			$msg = array(
			  "Japanese" => "エラーが発生しました。入力ないようをかくにんしてください。",
			  "Finnish" => "Virheet tapahtui . Tarkista tulo sisältö.",
			  "English" => "Error(s) occured. Please check input contents.");
			$this->echoDivTag($msg[$this->lang]);
		}

		function nameRange() {
			$msg = array(
			  "Japanese" => "名前は3文字以上30文字以内で入力してください。",
			  "Finnish" => "Nimen tulee olla 3 kirjainta tai enemmän ja vähemmän kuin 30 kirjainta.",
			  "English" => "The name should be 3 letters or more and less than 30 letters.");
			$this->echoDivTag($msg[$this->lang]);
		}

		function passRange() {
			$msg = array(
			  "Japanese" => "パスワードは3文字以上30文字以内で入力してください。",
			  "Finnish" => "Salasanan on oltava 3 kirjainta tai enemmän ja vähemmän kuin 30 kirjainta.",
			  "English" => "The password should be 3 letters or more and less than 30 letters.");
			$this->echoDivTag($msg[$this->lang]);
		}

		function confirm() {
			$msg = array(
			  "Japanese" => "パスワードとかくにん用パスワードは、同じものを入力してください。",
			  "Finnish" => "Salasana ja salasana vahvistetaan pitäisi olla sama.",
			  "English" => "The password and password for confirming should be same.");
			$this->echoDivTag($msg[$this->lang]);
		}

		function identifical() {
			$msg = array(
			  "Japanese" => "その名前を使っている人がいます。他の名前を入力してください。",
			  "Finnish" => "Joku käyttää samaa nimeä . Ole hyvä ja syötä toinen nimi.",
			  "English" => "Someone uses the same name. Please input another name.");
			$this->echoDivTag($msg[$this->lang]);
		}

		function match() {
			$msg = array(
			  "Japanese" => "その名前とパスワードの組み合わせはとうろくされていません。",
			  "Finnish" => "Yhdistelmänimi jasalasana ei ole olemassa.",
			  "English" => "The combination of the name and the password doesn't exist.");
			$this->echoDivTag($msg[$this->lang]);
		}
    }
?>