/// <reference path="../index.ref.ts"/>

namespace INDEX {
    export interface HTMLView {
        selector: string;
        images: { [name: string]: string };
        audios: { [name: string]: string };
    };

	export class Language {
		defaultLanguage: string = "English"; 
		nationarities = {
			"en-US": "English",
			"en": "English",
			"ja-JP": "Japanese",
			"ja": "Japanese",
			"fi": "Finnish",
		}
	}

	export class LanguageSelector implements HTMLView {
			selector = "#languageSelector";
			options: { [value: string]: string } = {
				"English": "English", "Finnish": "Suomeksi", "Japanese": "日本語"
			};
			images: { [name: string]: string } = {};
			audios: { [name: string]: string } = {
				decide: "storage/assets/sound/se/decide.mp3",
			};
	}

	export class UserName implements HTMLView {
		selector = "#userName";
		sessionGetUserName: string = "php/sessionGetUserName.php";
		images: { [name: string]: string } = {};
		audios: { [name: string]: string } = {
		};
		welcomeText: { [name: string]: string } = {
			"English": "Welcome!: ",
			"Finnish": "Tervetuloa!: ",
			"Japanese": "ようこそ！: "
		}
		guestText: { [name: string]: string } = {
			"English": "Guest",
			"Finnish": "Vieras",
			"Japanese": "ゲスト"
		}
		honorText: { [name: string]: string } = {
			"English": "",
			"Finnish": "",
			"Japanese": " さん"
		}
	}

	export class LogInAndOutButton implements HTMLView {
		selector = "#logInAndOut";
		baseUrl: string = "Login.php?lang=";
		sessionGetUserName: string = "php/sessionGetUserName.php";
		sessionLogOut: string = "php/sessionLogOut.php";
		images: { [name: string]: string } = { };
		audios: { [name: string]: string } = {
			select: "storage/assets/sound/se/select.mp3",
			decide: "storage/assets/sound/se/decide.mp3",
		};
		shadowColor: string = "lavender";
		logInText: { [name: string]: string } = {
			"English": "Login",
			"Finnish": "Kirjaudu sisään",
			"Japanese": "ログイン"
		}
		logOutText: { [name: string]: string } = {
			"English": "Logout",
			"Finnish": "Kirjaudu ulos",
			"Japanese": "ログアウト"
		}
	}

	export class RegistButton implements HTMLView {
		selector = "#regist";
		baseUrl: string = "Regist.php?lang=";
		images: { [name: string]: string } = {};
		audios: { [name: string]: string } = {
			select: "storage/assets/sound/se/select.mp3",
			decide: "storage/assets/sound/se/decide.mp3",
		};
		shadowColor: string = "lavender";
		registText: { [name: string]: string } = {
			"English": "User registration",
			"Finnish": "Ilmoittautua",
			"Japanese": "ユーザーとうろく"
		}
	}

    export class HTMLLogo implements HTMLView {
        selector = "#logo";
        images: { [name: string]: string } = {
            logo: "storage/assets/image/game/MelOnLogo.png",
        };
        audios: { [name: string]: string } = {
            MelOn: "storage/assets/sound/se/MelOn!.mp3",
        };
    }

    export class ModeButton implements HTMLView {
        selector = "";
        baseUrl = "";
        shadowColor = "";
        defaultLanguage: string = new Language().defaultLanguage;
        images: { [name: string]: string } = {
        };
        audios: { [name: string]: string } = {
            select: "storage/assets/sound/se/select.mp3",
            decide: "storage/assets/sound/se/decide.mp3",
        };
    }

    export class FreeMakingMusic extends ModeButton implements HTMLView {
        selector = "#freeMakingMusic";
        baseUrl = "FreeMakingMusic.html?lang=";
        shadowColor = "orange";
        images: { [name: string]: string } = {
            "English": "storage/assets/image/modeButton/freeMakingMusicEnglish.png",
            "Japanese": "storage/assets/image/modeButton/freeMakingMusicJapanese.png",
            "Finnish": "storage/assets/image/modeButton/freeMakingMusicFinnish.png",
        };
    }

    export class Lesson extends ModeButton implements HTMLView {
        selector = "#lesson";
        baseUrl = "LessonList.html?lang=";
        shadowColor = "lawngreen";
        images: { [name: string]: string } = {
            "English": "storage/assets/image/modeButton/lessonEnglish.png",
            "Japanese": "storage/assets/image/modeButton/lessonJapanese.png",
            "Finnish": "storage/assets/image/modeButton/lessonFinnish.png",
        };
    }
}