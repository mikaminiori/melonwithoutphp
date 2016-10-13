<?php
    class Label {

        private $lang;

        function __construct($language) {
            $this->lang = $language;
        }

        function returnTop() {
            $msg = array(
              "Japanese" => "トップに戻る",
              "Finnish" => "Takaisin Alkuun",
              "English" => "Return Top");
            echo $msg[$this->lang];
        }

        function login() {
            $msg = array(
              "Japanese" => "ログイン",
              "Finnish" => "Kirjaudu sisään",
              "English" => "Login");
            echo $msg[$this->lang];
        }

        function loginDesc() {
            $msg = array(
              "Japanese" => "　とうろくされたユーザーのなまえとパスワードを入力して、ログインしてね。ログインすると、ほかのパソコンからもきみの音楽を「ほぞん」・「よみこみ」することができるよ。",
              "Finnish" => "Kirjoittaa rekisteröityy käyttäjätunnuksen ja salasanan kirjautua. Voit tallentaa ja ladata musiikkia muista tietokoneesta kirjautumalla sisään.",
              "English" => "Input registrated user name and password to login. You can save and load your music from other computer by logging in.");
            echo $msg[$this->lang];
        }

        function registration() {
            $msg = array(
              "Japanese" => "ユーザーとうろく",
              "Finnish" => "Käyttäjän Rekisteröintiä",
              "English" => "User Registration");
            echo $msg[$this->lang];
        }

        function registrationDesc() {
            $msg = array(
              "Japanese" => "　新しいユーザーのなまえとパスワード、そして同じパスワードをもう一回入力して、ユーザーとうろくをしてね。ユーザーとしてログインすると、ほかのパソコンからもきみの音楽を保存・読み込みすることができるよ。",
              "Finnish" => "Kirjoita nimi, salasana, ja sama salasana rekisteröityä uusi käyttäjä. Voit tallentaa ja ladata musiikkia muista tietokoneesta kirjautumalla kuinkäyttäjä.",
              "English" => "Input name, password, and same password to register as new user. You can save and load your music from other computer by logging in as an user.");
            echo $msg[$this->lang];
        }

        function name() {
            $msg = array(
              "Japanese" => "なまえ",
              "Finnish" => "Nimi",
              "English" => "Name");
            echo $msg[$this->lang];
        }
        
        function password() {
            $msg = array(
              "Japanese" => "パスワード",
              "Finnish" => "Salasana",
              "English" => "Password");
            echo $msg[$this->lang];
        }

        function confirm() {
            $msg = array(
              "Japanese" => "パスワードかくにん",
              "Finnish" => "Vahvista Salasana",
              "English" => "Confirm Password");
            echo $msg[$this->lang];
        }

        function ok() {
            $msg = array(
              "Japanese" => "とうろく",
              "Finnish" => "OK",
              "English" => "OK");
            echo $msg[$this->lang];
        }
    }
?>