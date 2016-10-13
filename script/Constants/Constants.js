// We have to consider order inside each class due to JavaScript codes.
// By using clesses in namespace, we can set inheritable constants!
// And by using interface, it will be safe for the parent class of child classes.
// If we don't use export, we can hide the classes.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CONSTANTS;
(function (CONSTANTS) {
    //
    // ========== MelOn Substance Constants ==========
    //
    var MelOn = (function () {
        function MelOn() {
            this.selector = "#MelOn";
            this.width = new MeasureSheet().width * new ScoreSheet().displayMeasureNum;
            this.height = new Note().height * new ScoreSheet().displayPitchNum;
            this.renderer = "score";
            this.imageAddress = "storage/assets/image/";
            this.languageList = ["English", "Japanese", "Finnish"];
            this.defaultLanguage = "English";
            this.language = _.include(this.languageList, $.getUrlVar("lang")) ? $.getUrlVar("lang") : this.defaultLanguage;
            this.elements = [
                "score", "pencil", "eraser", "speedDisplay", "speedDown", "speedUp", "play",
                "save", "load", "instrumentMenu", "soundButtonContainer", "up", "down", "left", "right",
            ];
        }
        return MelOn;
    })();
    CONSTANTS.MelOn = MelOn;
    var Music = (function () {
        function Music() {
            this.unitNote = 8;
            this.measureNum = 16;
            this.pitch = ["C5",
                "B4", "A4", "G4", "F4", "E4", "D4", "C4",
                "B3", "A3", "G3", "F3", "E3", "D3", "C3",
                "B2", "A2", "G2", "F2", "E2", "D2", "C2",
            ];
            this.pitchNum = this.pitch.length;
            this.writeStationery = new Stationery().writeStationery;
            this.eraseStationery = new Stationery().eraseStationery;
        }
        return Music;
    })();
    CONSTANTS.Music = Music;
    var Stationery = (function () {
        function Stationery() {
            this.stationeries = ["pencil", "eraser"];
            this.writeStationery = this.stationeries[0];
            this.eraseStationery = this.stationeries[1];
            this.stationeryNum = this.stationeries.length;
            this.initStationery = this.writeStationery;
        }
        return Stationery;
    })();
    CONSTANTS.Stationery = Stationery;
    var Instrument = (function () {
        function Instrument() {
            this.initInstrument = 0;
            this.instruments = [
                "piano",
                "trumpet",
                "violin",
            ];
        }
        return Instrument;
    })();
    CONSTANTS.Instrument = Instrument;
    var MusicPlayer = (function () {
        function MusicPlayer() {
        }
        return MusicPlayer;
    })();
    CONSTANTS.MusicPlayer = MusicPlayer;
    var Speed = (function () {
        function Speed() {
            this.speeds = [80, 100, 130, 170, 220];
            this.initSpeedGrade = 2;
        }
        return Speed;
    })();
    CONSTANTS.Speed = Speed;
    var MusicStorage = (function () {
        function MusicStorage() {
            this.userNameUrl = "php/sessionGetUserName.php";
            this.musicExistUrl = "php/musicExist.php";
            this.musicSaveUrl = "php/saveMusic.php";
            this.musicLoadUrl = "php/loadMusic.php";
        }
        return MusicStorage;
    })();
    CONSTANTS.MusicStorage = MusicStorage;
    var PreloadBar = (function () {
        function PreloadBar() {
            this.width = new MeasureSheet().width;
            this.height = new Note().height;
            this.x = new MelOn().width / 2;
            this.y = new MelOn().height / 2;
            this.initImage = "preloadBar";
            this.images = {
                preloadBar: "preloadBar"
            };
        }
        return PreloadBar;
    })();
    CONSTANTS.PreloadBar = PreloadBar;
    var Background = (function () {
        function Background() {
            this.width = new MelOn().width;
            this.height = new MelOn().height;
            this.x = 0;
            this.y = 0;
            this.initImage = "background";
            this.images = {
                background: "background",
            };
        }
        return Background;
    })();
    CONSTANTS.Background = Background;
    var Note = (function (_super) {
        __extends(Note, _super);
        function Note() {
            _super.apply(this, arguments);
            this.width = new MeasureSheet().width / this.unitNote;
            this.height = new MeasureSheet().height / this.pitchNum;
            this.x = 0;
            this.y = 0;
            this.initImage = "green";
            this.prohibitedImage = "red";
            this.images = {
                green: "green",
                red: "red",
            };
            this.tailShortening = 20;
            this.ringDuration = 500; // ms
            this.fadeDuration = 250; // ms
            this.tweenDuration = 150; // ms
            this.doubleClkTime = 250; // ms
        }
        return Note;
    })(Music);
    CONSTANTS.Note = Note;
    var MeasureSheet = (function (_super) {
        __extends(MeasureSheet, _super);
        function MeasureSheet() {
            _super.apply(this, arguments);
            this.width = 320;
            this.height = 45 * this.pitchNum;
            this.x = 0;
            this.y = 0;
            this.initImage = "score";
            this.images = {
                score: "score",
            };
            this.noteWidth = this.width / this.unitNote;
            this.noteHeight = this.height / this.pitchNum;
        }
        return MeasureSheet;
    })(Music);
    CONSTANTS.MeasureSheet = MeasureSheet;
    var MusicPlayBar = (function (_super) {
        __extends(MusicPlayBar, _super);
        function MusicPlayBar() {
            _super.apply(this, arguments);
            this.width = 10;
            this.height = new MeasureSheet().height;
            this.measureWidth = new MeasureSheet().width;
            this.beatWidth = this.measureWidth / 4;
            this.x = -this.width;
            this.y = 0;
            this.initImage = "bar";
            this.beatSound = "tamb";
            this.images = {
                bar: "musicPlayBar",
            };
            this.playSpeed = 120; // in Phaser Speed
            this.measureHeadVolume = 1.0;
            this.measureNotHeadVolume = 0.5;
        }
        return MusicPlayBar;
    })(Music);
    CONSTANTS.MusicPlayBar = MusicPlayBar;
    var ScoreSheet = (function (_super) {
        __extends(ScoreSheet, _super);
        function ScoreSheet() {
            _super.apply(this, arguments);
            this.displayMeasureNum = 2;
            this.displayPitchNum = 8;
        }
        return ScoreSheet;
    })(MeasureSheet);
    CONSTANTS.ScoreSheet = ScoreSheet;
    var Notes = (function (_super) {
        __extends(Notes, _super);
        function Notes() {
            _super.apply(this, arguments);
            this.prohibitedImage = new Note().prohibitedImage;
        }
        return Notes;
    })(MeasureSheet);
    CONSTANTS.Notes = Notes;
    ;
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
    CONSTANTS.UserName = UserName;
    var Logo = (function () {
        function Logo() {
            this.selector = "#logo";
        }
        return Logo;
    })();
    CONSTANTS.Logo = Logo;
    var StationeryButton = (function () {
        function StationeryButton() {
            this.selector = "";
            this.scoreSelector = "#" + new MelOn().renderer;
            this.imageAddress = new MelOn().imageAddress + "stationeryButton/";
            this.class = {
                stationery: "stationery",
                buttonImage: "buttonImage",
            };
            this.cursorSize = 32;
            this.onColor = "crimson";
            this.offColor = "royalblue";
        }
        return StationeryButton;
    })();
    CONSTANTS.StationeryButton = StationeryButton;
    var Pencil = (function (_super) {
        __extends(Pencil, _super);
        function Pencil() {
            _super.apply(this, arguments);
            this.selector = "#pencil";
            this.name = new Stationery().writeStationery;
            this.images = {
                image: this.imageAddress + "pencil.png",
                pngCursor: this.imageAddress + "pencilCursor.png",
                curCursor: this.imageAddress + "pencilCursor.cur",
            };
        }
        return Pencil;
    })(StationeryButton);
    CONSTANTS.Pencil = Pencil;
    var Eraser = (function (_super) {
        __extends(Eraser, _super);
        function Eraser() {
            _super.apply(this, arguments);
            this.selector = "#eraser";
            this.name = new Stationery().eraseStationery;
            this.images = {
                image: this.imageAddress + "eraser.png",
                pngCursor: this.imageAddress + "eraserCursor.png",
                curCursor: this.imageAddress + "eraserCursor.cur",
            };
        }
        return Eraser;
    })(StationeryButton);
    CONSTANTS.Eraser = Eraser;
    var StationeryToggler = (function (_super) {
        __extends(StationeryToggler, _super);
        function StationeryToggler() {
            _super.apply(this, arguments);
            this.stationeries = new Stationery().stationeries;
            this.stationeryNum = new Stationery().stationeryNum;
        }
        return StationeryToggler;
    })(StationeryButton);
    CONSTANTS.StationeryToggler = StationeryToggler;
    var PlayButton = (function () {
        function PlayButton() {
            this.selector = "#play";
            this.class = {
                buttonImage: "buttonImage",
            };
            this.images = {
                image: new MelOn().imageAddress + "playButton/playButton.png",
            };
            this.onColor = "orange";
            this.offColor = "limegreen";
        }
        return PlayButton;
    })();
    CONSTANTS.PlayButton = PlayButton;
    var ScrollButton = (function () {
        function ScrollButton() {
            this.class = {
                scroll: "scroll",
            };
            this.speed = 5; // px per frame
            this.measureWidth = new ScoreSheet().width;
            this.displayMeasureNum = new ScoreSheet().displayMeasureNum;
            this.noteHeight = new MeasureSheet().noteHeight;
            this.pitch = new Music().pitch;
            this.initPitch = "C4"; // is the highest in display!
            this.doubleTapTime = 170; // ms
        }
        return ScrollButton;
    })();
    CONSTANTS.ScrollButton = ScrollButton;
    var UpButton = (function (_super) {
        __extends(UpButton, _super);
        function UpButton() {
            _super.apply(this, arguments);
            this.selector = "#up";
            this.direction = "up";
        }
        return UpButton;
    })(ScrollButton);
    CONSTANTS.UpButton = UpButton;
    var DownButton = (function (_super) {
        __extends(DownButton, _super);
        function DownButton() {
            _super.apply(this, arguments);
            this.selector = "#down";
            this.direction = "down";
        }
        return DownButton;
    })(ScrollButton);
    CONSTANTS.DownButton = DownButton;
    var RightButton = (function (_super) {
        __extends(RightButton, _super);
        function RightButton() {
            _super.apply(this, arguments);
            this.selector = "#right";
            this.direction = "right";
        }
        return RightButton;
    })(ScrollButton);
    CONSTANTS.RightButton = RightButton;
    var LeftButton = (function (_super) {
        __extends(LeftButton, _super);
        function LeftButton() {
            _super.apply(this, arguments);
            this.selector = "#left";
            this.direction = "left";
        }
        return LeftButton;
    })(ScrollButton);
    CONSTANTS.LeftButton = LeftButton;
    var SaveButton = (function () {
        function SaveButton() {
            this.selector = "#save";
            this.image = new MelOn().imageAddress + "storageButton/save.png";
        }
        return SaveButton;
    })();
    CONSTANTS.SaveButton = SaveButton;
    var LoadButton = (function () {
        function LoadButton() {
            this.selector = "#load";
            this.image = new MelOn().imageAddress + "storageButton/load.png";
        }
        return LoadButton;
    })();
    CONSTANTS.LoadButton = LoadButton;
    var SoundButtonContainer = (function () {
        function SoundButtonContainer() {
            this.selector = "#soundButtonContainer";
            this.height = new MeasureSheet().noteHeight * new ScoreSheet().displayPitchNum;
            this.pitch = new Music().pitch;
        }
        return SoundButtonContainer;
    })();
    CONSTANTS.SoundButtonContainer = SoundButtonContainer;
    var SoundButton = (function () {
        function SoundButton() {
            this.selector = "soundButton";
            this.border = 2;
            this.pitchTop = new MeasureSheet().noteHeight;
            this.ringDuration = 200;
            this.pitch = new Music().pitch;
            this.language = new MelOn().language;
            this.pitchText = {
                English: ["C", "B", "A", "G", "F", "E", "D", "C", "B", "A", "G", "F", "E", "D", "C", "B", "A", "G", "F", "E", "D", "C"],
                Japanese: ["ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド", "シ", "ラ", "ソ", "ファ", "ミ", "レ", "ド"],
                Finnish: ["DO", "SI", "LA", "SOL", "FA", "MI", "RE", "DO", "SI", "LA", "SOL", "FA", "MI", "RE", "DO", "SI", "LA", "SOL", "FA", "MI", "RE", "DO"],
            };
        }
        return SoundButton;
    })();
    CONSTANTS.SoundButton = SoundButton;
    var SpeedDisplay = (function () {
        function SpeedDisplay() {
            this.selector = "#speedDisplay";
            this.speeds = new Speed().speeds;
            this.speedGradeNum = this.speeds.length;
            this.language = new MelOn().language;
            this.speedColor = ["green", "greenyellow", "yellow", "orange", "red"];
            this.textColor = ["white", "black", "black", "white", "white"];
            this.speedText = {
                English: ["VERY SLOW", "SLOW", "NORMAL", "FAST", "VERY FAST"],
                Japanese: ["とてもおそい", "おそい", "ふつう", "はやい", "とてもはやい"],
                Finnish: ["HYVIN HIDAS", "HIDAS", "NORMAALI", "NOPEA", "HYVIN NOPEA"],
            };
        }
        return SpeedDisplay;
    })();
    CONSTANTS.SpeedDisplay = SpeedDisplay;
    var SpeedButton = (function () {
        function SpeedButton() {
            this.selector = "";
            this.upDirection = "up";
            this.downDirection = "down";
            this.direction = "";
            this.speedGradeNum = new Speed().speeds.length;
            this.class = {
                speed: "speed",
            };
        }
        return SpeedButton;
    })();
    CONSTANTS.SpeedButton = SpeedButton;
    var SpeedUpButton = (function (_super) {
        __extends(SpeedUpButton, _super);
        function SpeedUpButton() {
            _super.apply(this, arguments);
            this.selector = "#speedUp";
            this.direction = this.upDirection;
        }
        return SpeedUpButton;
    })(SpeedButton);
    CONSTANTS.SpeedUpButton = SpeedUpButton;
    var SpeedDownButton = (function (_super) {
        __extends(SpeedDownButton, _super);
        function SpeedDownButton() {
            _super.apply(this, arguments);
            this.selector = "#speedDown";
            this.direction = this.downDirection;
        }
        return SpeedDownButton;
    })(SpeedButton);
    CONSTANTS.SpeedDownButton = SpeedDownButton;
    var InstrumentOption = (function (_super) {
        __extends(InstrumentOption, _super);
        function InstrumentOption() {
            _super.apply(this, arguments);
            this.selector = "";
            this.height = 60;
            this.samplePitch = "C3";
            this.sampleTime = new Note().ringDuration;
            this.language = new MelOn().language;
            this.instrumentText = {
                English: { piano: "Piano", trumpet: "Trumpet", violin: "Violin" },
                Japanese: { piano: "ピアノ", trumpet: "トランペット", violin: "バイオリン" },
                Finnish: { piano: "Piano", trumpet: "Trumpetti", violin: "Viulu" },
            };
            this.backgroundColor = {
                piano: "silver",
                trumpet: "gold",
                violin: "saddlebrown",
            };
            this.textColor = {
                piano: "black",
                trumpet: "black",
                violin: "white",
            };
            this.imageAddress = new MelOn().imageAddress + "instrument/";
            this.image = {
                piano: this.imageAddress + "piano.png",
                trumpet: this.imageAddress + "trumpet.png",
                violin: this.imageAddress + "violin.png",
            };
        }
        return InstrumentOption;
    })(Instrument);
    CONSTANTS.InstrumentOption = InstrumentOption;
    var InstrumentContainer = (function (_super) {
        __extends(InstrumentContainer, _super);
        function InstrumentContainer() {
            _super.apply(this, arguments);
            this.selector = "#instrumentContainer";
            this.containerHeight = this.height * (this.instruments.length - 1);
            this.slideTime = 500; // ms
        }
        return InstrumentContainer;
    })(InstrumentOption);
    CONSTANTS.InstrumentContainer = InstrumentContainer;
    var InstrumentMenu = (function (_super) {
        __extends(InstrumentMenu, _super);
        function InstrumentMenu() {
            _super.apply(this, arguments);
            this.selector = "#instrumentMenu";
        }
        return InstrumentMenu;
    })(InstrumentOption);
    CONSTANTS.InstrumentMenu = InstrumentMenu;
    var ModalWindow = (function () {
        function ModalWindow() {
            this.selector = "body";
            this.language = new MelOn().language;
            this.modalIds = {
                overlay: "modalOverlay",
                window: "modalWindow",
                message: "modalMessage",
                ok: "modalOk",
                yes: "modalYes",
                no: "modalNo",
            };
            this.modalClasses = {
                button: "modalButton",
            };
            this.okText = {
                "English": "OK",
                "Japanese": "はい",
                "Finnish": "Joo",
            };
            this.yesText = {
                "English": "Yes",
                "Japanese": "はい",
                "Finnish": "Kyllä",
            };
            this.noText = {
                "English": "No",
                "Japanese": "いいえ",
                "Finnish": "Ei",
            };
        }
        return ModalWindow;
    })();
    CONSTANTS.ModalWindow = ModalWindow;
    var StorageModal = (function () {
        function StorageModal() {
            this.modalConstants = new ModalWindow();
            this.saveConfirmMsg = {
                "English": "The music you have already saved will be disposed.Is it OK?",
                "Japanese": "すでに保存されている音楽が上書きされます。よろしいですか？",
                "Finnish": "Tallentamasi musiikki poistetaan. Sopiiko se?",
            };
            this.saveMsg = {
                "English": "Your music was saved!",
                "Japanese": "音楽が保存されました！",
                "Finnish": "Musiikkisi on tallennettu!",
            };
            this.loadConfirmMsg = {
                "English": "The music you are making will be disposed. Is it OK?",
                "Japanese": "今、楽ふにある音楽が消えてしまいます。よろしいですか？",
                "Finnish": "Musiikki jota teet poistetaan. Sopiiko se?",
            };
            this.loadFailMsg = {
                "English": "Music not Found!",
                "Japanese": "音楽が保存されていません！",
                "Finnish": "Musiikkia ei lödetty!",
            };
        }
        return StorageModal;
    })();
    CONSTANTS.StorageModal = StorageModal;
    var ReturnTopButton = (function () {
        function ReturnTopButton() {
            this.selector = "#returnTop";
            this.language = new MelOn().language;
            this.destination = "index.html";
            this.shadowColor = "lavender";
            this.text = {
                "English": "Return to Top",
                "Japanese": "トップへ戻る",
                "Finnish": "Takaisin alkuun",
            };
            this.confirmMsg = {
                "English": "The music you are making will be disposed. Is it OK to return the Top page?",
                "Japanese": "今、楽ふにある音楽が消えてしまいます。トップページへもどっても良いですか？",
                "Finnish": "Musiikki jota teet poistetaan. Palataanko takaisin aloitus sivulle?",
            };
        }
        return ReturnTopButton;
    })();
    CONSTANTS.ReturnTopButton = ReturnTopButton;
})(CONSTANTS || (CONSTANTS = {}));
//# sourceMappingURL=Constants.js.map