/// <reference path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var INDEX;
(function (INDEX) {
    ;
    var Language = (function () {
        function Language() {
            this.defaultLanguage = "English";
            this.nationarities = {
                "en-US": "English",
                "en": "English",
                "ja-JP": "Japanese",
                "ja": "Japanese",
                "fi": "Finnish",
            };
        }
        return Language;
    })();
    INDEX.Language = Language;
    var LanguageSelector = (function () {
        function LanguageSelector() {
            this.selector = "#languageSelector";
            this.options = {
                "English": "English", "Finnish": "Suomeksi", "Japanese": "日本語"
            };
            this.images = {};
            this.audios = {
                decide: "storage/assets/sound/se/decide.mp3",
            };
        }
        return LanguageSelector;
    })();
    INDEX.LanguageSelector = LanguageSelector;
    var UserName = (function () {
        function UserName() {
            this.selector = "#userName";
            this.sessionGetUserName = "php/sessionGetUserName.php";
            this.images = {};
            this.audios = {};
            this.welcomeText = {
                "English": "Welcome!: ",
                "Finnish": "Tervetuloa!: ",
                "Japanese": "ようこそ！: "
            };
            this.guestText = {
                "English": "Guest",
                "Finnish": "Vieras",
                "Japanese": "ゲスト"
            };
            this.honorText = {
                "English": "",
                "Finnish": "",
                "Japanese": " さん"
            };
        }
        return UserName;
    })();
    INDEX.UserName = UserName;
    var LogInAndOutButton = (function () {
        function LogInAndOutButton() {
            this.selector = "#logInAndOut";
            this.baseUrl = "Login.php?lang=";
            this.sessionGetUserName = "php/sessionGetUserName.php";
            this.sessionLogOut = "php/sessionLogOut.php";
            this.images = {};
            this.audios = {
                select: "storage/assets/sound/se/select.mp3",
                decide: "storage/assets/sound/se/decide.mp3",
            };
            this.shadowColor = "lavender";
            this.logInText = {
                "English": "Login",
                "Finnish": "Kirjaudu sisään",
                "Japanese": "ログイン"
            };
            this.logOutText = {
                "English": "Logout",
                "Finnish": "Kirjaudu ulos",
                "Japanese": "ログアウト"
            };
        }
        return LogInAndOutButton;
    })();
    INDEX.LogInAndOutButton = LogInAndOutButton;
    var RegistButton = (function () {
        function RegistButton() {
            this.selector = "#regist";
            this.baseUrl = "Regist.php?lang=";
            this.images = {};
            this.audios = {
                select: "storage/assets/sound/se/select.mp3",
                decide: "storage/assets/sound/se/decide.mp3",
            };
            this.shadowColor = "lavender";
            this.registText = {
                "English": "User registration",
                "Finnish": "Ilmoittautua",
                "Japanese": "ユーザーとうろく"
            };
        }
        return RegistButton;
    })();
    INDEX.RegistButton = RegistButton;
    var HTMLLogo = (function () {
        function HTMLLogo() {
            this.selector = "#logo";
            this.images = {
                logo: "storage/assets/image/game/MelOnLogo.png",
            };
            this.audios = {
                MelOn: "storage/assets/sound/se/MelOn!.mp3",
            };
        }
        return HTMLLogo;
    })();
    INDEX.HTMLLogo = HTMLLogo;
    var ModeButton = (function () {
        function ModeButton() {
            this.selector = "";
            this.baseUrl = "";
            this.shadowColor = "";
            this.defaultLanguage = new Language().defaultLanguage;
            this.images = {};
            this.audios = {
                select: "storage/assets/sound/se/select.mp3",
                decide: "storage/assets/sound/se/decide.mp3",
            };
        }
        return ModeButton;
    })();
    INDEX.ModeButton = ModeButton;
    var FreeMakingMusic = (function (_super) {
        __extends(FreeMakingMusic, _super);
        function FreeMakingMusic() {
            _super.apply(this, arguments);
            this.selector = "#freeMakingMusic";
            this.baseUrl = "FreeMakingMusic.html?lang=";
            this.shadowColor = "orange";
            this.images = {
                "English": "storage/assets/image/modeButton/freeMakingMusicEnglish.png",
                "Japanese": "storage/assets/image/modeButton/freeMakingMusicJapanese.png",
                "Finnish": "storage/assets/image/modeButton/freeMakingMusicFinnish.png",
            };
        }
        return FreeMakingMusic;
    })(ModeButton);
    INDEX.FreeMakingMusic = FreeMakingMusic;
    var Lesson = (function (_super) {
        __extends(Lesson, _super);
        function Lesson() {
            _super.apply(this, arguments);
            this.selector = "#lesson";
            this.baseUrl = "LessonList.html?lang=";
            this.shadowColor = "lawngreen";
            this.images = {
                "English": "storage/assets/image/modeButton/lessonEnglish.png",
                "Japanese": "storage/assets/image/modeButton/lessonJapanese.png",
                "Finnish": "storage/assets/image/modeButton/lessonFinnish.png",
            };
        }
        return Lesson;
    })(ModeButton);
    INDEX.Lesson = Lesson;
})(INDEX || (INDEX = {}));
//# sourceMappingURL=index.const.js.map