// We have to consider order inside each class due to JavaScript codes.
// By using clesses in namespace, we can set inheritable constants!
// And by using interface, it will be safe for the parent class of child classes.
// If we don't use export, we can hide the classes.

namespace CONSTANTS {
    
    //
    // ========== MelOn Substance Constants ==========
    //

    export class MelOn {
        selector: string = "#MelOn";
        width: number = new MeasureSheet().width * new ScoreSheet().displayMeasureNum;
        height: number = new Note().height * new ScoreSheet().displayPitchNum;
        renderer: string = "score";
        imageAddress: string = "storage/assets/image/";
        languageList: string[] = ["English", "Japanese", "Finnish"];
        defaultLanguage: string = "English";
        language: string =_.include(this.languageList, $.getUrlVar("lang")) ? $.getUrlVar("lang") : this.defaultLanguage;
        elements: string[] = [
            "score", "pencil", "eraser", "speedDisplay", "speedDown", "speedUp", "play",
            "save", "load", "instrumentMenu", "soundButtonContainer", "up", "down", "left", "right",
        ];
    }



    //
    // ========== Model ==========
    //

    export interface Model {
    }

    export class Music implements Model {
        unitNote: number = 8;
        measureNum: number = 16;
        pitch: string[] = [ "C5",
            "B4", "A4", "G4", "F4", "E4", "D4", "C4",
            "B3", "A3", "G3", "F3", "E3", "D3", "C3",
            "B2", "A2", "G2", "F2", "E2", "D2", "C2",
        ];
        pitchNum = this.pitch.length;
        writeStationery: string = new Stationery().writeStationery;
        eraseStationery: string = new Stationery().eraseStationery;
    }

    export class Stationery implements Model {
        stationeries: string[] = ["pencil", "eraser"];
        writeStationery: string = this.stationeries[0];
        eraseStationery: string = this.stationeries[1];
        stationeryNum: number = this.stationeries.length;
        initStationery: string = this.writeStationery;
    }

    export class Instrument implements Model {
        initInstrument: number = 0;
        instruments: string[] = [
            "piano",
            "trumpet",
            "violin",
        ];
    }

    export class MusicPlayer implements Model {
    }

    export class Speed implements Model {
        speeds: number[] = [80, 100, 130, 170, 220];
        initSpeedGrade: number = 2;
    }

    export class MusicStorage implements Model {
		userNameUrl: string = "php/sessionGetUserName.php";
		musicExistUrl: string = "php/musicExist.php";
		musicSaveUrl: string = "php/saveMusic.php";
		musicLoadUrl: string = "php/loadMusic.php";
    }





    //
    // ========== Sprite View ==========
    //

    export interface SpriteView {
        width: number;
        height: number;
        x: number;
        y: number;
        initImage: string;
        images: { [name: string]: string };
    }

    export class PreloadBar implements SpriteView{
        width = new MeasureSheet().width;
        height = new Note().height;
        x = new MelOn().width / 2;
        y = new MelOn().height / 2;
        initImage = "preloadBar";
        images: { [name: string]: string } = {
            preloadBar: "preloadBar"
        }
    }

    export class Background implements SpriteView {
        width = new MelOn().width;
        height = new MelOn().height;
        x = 0;
        y = 0;
        initImage = "background";
        images: { [name: string]: string } = {
            background: "background",
        };
    }

    export class Note extends Music implements SpriteView {
        width = new MeasureSheet().width / this.unitNote;
        height = new MeasureSheet().height / this.pitchNum;
        x = 0;
        y = 0;
        initImage = "green";
		prohibitedImage = "red";
        images: { [name: string]: string } = {
            green: "green",
			red: "red",
        }
		tailShortening: number = 20;
        ringDuration: number = 500;   // ms
        fadeDuration: number = 250;   // ms
        tweenDuration: number = 150;  // ms
        doubleClkTime: number = 250;  // ms
    }

    export class MeasureSheet extends Music implements SpriteView {
        width = 320;
        height = 45 * this.pitchNum;
        x = 0;
        y = 0;
        initImage = "score";
        images: { [name: string]: string } = {
            score: "score",
        }
        noteWidth: number = this.width / this.unitNote;
        noteHeight: number = this.height / this.pitchNum;
    }

    export class MusicPlayBar extends Music implements SpriteView {
        width = 10;
        height = new MeasureSheet().height;
        measureWidth = new MeasureSheet().width
        beatWidth: number = this.measureWidth / 4;
        x = - this.width;
        y = 0;
        initImage = "bar";
        beatSound: string = "tamb";
        images: { [name: string]: string } = {
            bar: "musicPlayBar",
        }
        playSpeed: number = 120;    // in Phaser Speed
		measureHeadVolume: number = 1.0;
		measureNotHeadVolume: number = 0.5;
    }





    //
    // ========== Group View ==========
    //

    export interface GroupView {
    }

    export class ScoreSheet extends MeasureSheet implements GroupView {
        displayMeasureNum: number = 2;
        displayPitchNum: number = 8;
    }

    export class Notes extends MeasureSheet implements GroupView {
		prohibitedImage: string = new Note().prohibitedImage;
    }



	//
	// ========== HTML View ==========
    //

	interface HTMLView {
        selector: string;
        images: { [name: string]: string };
        audios: { [name: string]: string };
    };

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



    //
    // ========== DOM View ==========
    //

    export interface DOMView {
        selector: string;
    }

    export class Logo implements DOMView {
        selector = "#logo";
    }

    export class StationeryButton implements DOMView {
        selector = "";
		scoreSelector = "#" + new MelOn().renderer;
        name: string;
        protected imageAddress: string = new MelOn().imageAddress + "stationeryButton/";
        class: { [name: string]: string } = {
            stationery: "stationery",
            buttonImage: "buttonImage",
        };
        images: { [name: string]: string };
		cursorSize: number = 32;
        onColor: string = "crimson";
        offColor: string = "royalblue";
    }

    export class Pencil extends StationeryButton{
        selector = "#pencil";
        name = new Stationery().writeStationery;
        images: { [name: string]: string } = {
            image: this.imageAddress + "pencil.png",
			pngCursor: this.imageAddress + "pencilCursor.png",
			curCursor: this.imageAddress + "pencilCursor.cur",
        }
    }

    export class Eraser extends StationeryButton {
        selector = "#eraser";
        name = new Stationery().eraseStationery;
        images: { [name: string]: string } = {
            image: this.imageAddress + "eraser.png",
			pngCursor: this.imageAddress + "eraserCursor.png",
			curCursor: this.imageAddress + "eraserCursor.cur",
        }
    }

    export class StationeryToggler extends StationeryButton {
        stationeries = new Stationery().stationeries;
        stationeryNum = new Stationery().stationeryNum;
    }

    export class PlayButton implements DOMView {
        selector = "#play";
        class: { [name: string]: string } = {
            buttonImage: "buttonImage",
        };
        images: { [name: string]: string } = {
            image: new MelOn().imageAddress + "playButton/playButton.png",
        }
        onColor: string = "orange";
        offColor: string = "limegreen";
    }

    export class ScrollButton implements DOMView {
        selector;
        direction: string;
        class: { [name: string]: string } = {
            scroll: "scroll",
        };
        speed: number = 5; // px per frame
        measureWidth: number = new ScoreSheet().width;
        displayMeasureNum: number = new ScoreSheet().displayMeasureNum;
        noteHeight: number = new MeasureSheet().noteHeight;
        pitch: string[] = new Music().pitch;
        initPitch: string = "C4"; // is the highest in display!
        doubleTapTime: number = 170; // ms
    }

    export class UpButton extends ScrollButton {
        selector = "#up";
        direction = "up";
    }

    export class DownButton extends ScrollButton {
        selector = "#down";
        direction = "down";
    }

    export class RightButton extends ScrollButton {
        selector = "#right";
        direction = "right";
    }

    export class LeftButton extends ScrollButton {
        selector = "#left";
        direction = "left";
    }

    export class SaveButton implements DOMView {
        selector = "#save";
        image: string = new MelOn().imageAddress + "storageButton/save.png";
    }

    export class LoadButton implements DOMView {
        selector = "#load";
        image: string = new MelOn().imageAddress + "storageButton/load.png";
    }

    export class SoundButtonContainer implements DOMView {
        selector = "#soundButtonContainer";
        height: number = new MeasureSheet().noteHeight * new ScoreSheet().displayPitchNum;
        pitch: string[] = new Music().pitch;
    }

    export class SoundButton implements DOMView {
        selector = "soundButton";
        border: number = 2;
        pitchTop: number = new MeasureSheet().noteHeight;
        ringDuration: number = 200;
        pitch: string[] = new Music().pitch;
        language: string = new MelOn().language;
        pitchText = {
            English: ["C", "B", "A", "G", "F", "E", "D", "C", "B", "A", "G", "F", "E", "D", "C", "B", "A", "G", "F", "E", "D", "C"],
            Japanese: ["ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド"],
            Finnish: ["DO", "SI", "LA", "SOL", "FA", "MI", "RE", "DO", "SI", "LA", "SOL", "FA", "MI", "RE", "DO", "SI", "LA", "SOL", "FA", "MI", "RE", "DO"],
        }
    }

    export class SpeedDisplay implements DOMView {
        selector = "#speedDisplay";
        speeds: number[] = new Speed().speeds;
        speedGradeNum: number = this.speeds.length;
        language: string = new MelOn().language;
        speedColor: string[] = ["green", "greenyellow", "yellow", "orange", "red"];
        textColor: string[] = ["white", "black", "black", "white", "white"];
        speedText = {
            English: ["VERY SLOW", "SLOW", "NORMAL", "FAST", "VERY FAST"],
            Japanese: ["とてもおそい", "おそい", "ふつう", "はやい", "とてもはやい"],
            Finnish: ["HYVIN HIDAS", "HIDAS", "NORMAALI", "NOPEA", "HYVIN NOPEA"],
        };
    }

    export class SpeedButton implements DOMView {
        selector = "";
        upDirection: string = "up";
        downDirection: string = "down";
        direction: string = "";
        speedGradeNum: number = new Speed().speeds.length;
        class: { [name: string]: string } = {
            speed: "speed",
        };
    }

    export class SpeedUpButton extends SpeedButton implements DOMView {
        selector = "#speedUp";
        direction = this.upDirection;
    }

    export class SpeedDownButton extends SpeedButton implements DOMView {
        selector = "#speedDown";
        direction = this.downDirection;
    }

    export class InstrumentOption extends Instrument implements DOMView {
        selector = "";
        height: number = 60;
        samplePitch: string = "C3";
        sampleTime: number = new Note().ringDuration
        language: string = new MelOn().language;
        instrumentText = {
            English: { piano: "Piano", trumpet: "Trumpet", violin: "Violin" },
            Japanese: { piano: "ピアノ", trumpet: "トランペット", violin: "バイオリン" },
            Finnish: { piano: "Piano", trumpet: "Trumpetti", violin: "Viulu" },
        }
        backgroundColor = {
            piano: "silver",
            trumpet: "gold",
            violin: "saddlebrown",
        };
        textColor = {
            piano: "black",
            trumpet: "black",
            violin: "white",
        };
        imageAddress = new MelOn().imageAddress + "instrument/";
        image = {
            piano: this.imageAddress + "piano.png",
            trumpet: this.imageAddress + "trumpet.png",
            violin: this.imageAddress + "violin.png",
        }
    }

    export class InstrumentContainer extends InstrumentOption implements DOMView {
        selector = "#instrumentContainer";
        containerHeight = this.height * (this.instruments.length - 1);
        slideTime: number = 500 // ms
    }

    export class InstrumentMenu extends InstrumentOption implements DOMView {
        selector = "#instrumentMenu";
    }

    export class ModalWindow implements DOMView {
        selector = "body";
        language: string = new MelOn().language;
        modalIds = {
            overlay: "modalOverlay",
            window: "modalWindow",
            message: "modalMessage",
            ok: "modalOk",
            yes: "modalYes",
            no: "modalNo",
        };
        modalClasses = {
            button: "modalButton",
        };
        okText = {
            "English": "OK",
            "Japanese": "はい",
            "Finnish": "Joo",
        };
        yesText = {
            "English": "Yes",
            "Japanese": "はい",
            "Finnish": "Kyllä",
        };
        noText = {
            "English": "No",
            "Japanese": "いいえ",
            "Finnish": "Ei",
        };
    }

    export class StorageModal {
        modalConstants: ModalWindow = new ModalWindow();
        saveConfirmMsg = {
            "English": "The music you have already saved will be disposed.Is it OK?",
            "Japanese": "すでに保存されている音楽が上書きされます。よろしいですか？",
            "Finnish": "Tallentamasi musiikki poistetaan. Sopiiko se?",
        };
        saveMsg = {
            "English": "Your music was saved!",
            "Japanese": "音楽が保存されました！",
            "Finnish": "Musiikkisi on tallennettu!",
        };
        loadConfirmMsg = {
            "English": "The music you are making will be disposed. Is it OK?",
            "Japanese": "今、楽ふにある音楽が消えてしまいます。よろしいですか？",
            "Finnish": "Musiikki jota teet poistetaan. Sopiiko se?",
        };
        loadFailMsg = {
            "English": "Music not Found!",
            "Japanese": "音楽が保存されていません！",
            "Finnish": "Musiikkia ei lödetty!",
        };
    }

	export interface ReturnButton {
		selector: string;
		language: string;
		destination: string;
		shadowColor: string;
		text: Object;
		confirmMsg: Object;
	}

	export class ReturnTopButton implements ReturnButton {
		selector = "#returnTop";
		language = new MelOn().language;
		destination = "index.html";
		shadowColor = "lavender";
		text = {
			"English": "Return to Top",
			"Japanese": "トップへ戻る",
			"Finnish": "Takaisin alkuun",
		};
		confirmMsg = {
			"English": "The music you are making will be disposed. Is it OK to return the Top page?",
			"Japanese": "今、楽ふにある音楽が消えてしまいます。トップページへもどっても良いですか？",
			"Finnish": "Musiikki jota teet poistetaan. Palataanko takaisin aloitus sivulle?",
		};
	}
}