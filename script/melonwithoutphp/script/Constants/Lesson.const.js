/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LESSON;
(function (LESSON) {
    var ScoreData = CONSTANTS.MeasureSheet;
    var ModalWindow = CONSTANTS.ModalWindow;
    var LoadButton = CONSTANTS.LoadButton;
    var MeasureSheet = CONSTANTS.MeasureSheet;
    LESSON.language = new LESSON_LIST.Language().language;
    var LessonData = (function () {
        function LessonData() {
            this.language = LESSON.language;
            this.listUrl = LESSON_LIST.listUrls[LESSON.language];
            this.defaultUrl = "LessonList.html?lang=" + LESSON.language;
            this.errorMsg = {
                "English": "Lesson Data Read Error...",
                "Japanese": "学習データの読み込みに失敗しました。",
                "Finnish": "Oppitunnin tietoja ei onnistuttu lukemaan...",
            };
        }
        return LessonData;
    })();
    LESSON.LessonData = LessonData;
    var Achievement = (function () {
        function Achievement() {
            this.pitch = new ScoreData().pitch;
            this.mode = {
                tracing: "tracing",
                filling: "filling",
            };
        }
        return Achievement;
    })();
    LESSON.Achievement = Achievement;
    var LessonMeasureSheet = (function (_super) {
        __extends(LessonMeasureSheet, _super);
        function LessonMeasureSheet() {
            _super.apply(this, arguments);
            this.mode = new Achievement().mode;
            this.traceMsg = {
                "English": "Let's trace only white notes.",
                "Japanese": "白い音符だけををなぞろう。",
                "Finnish": "Katsotaanpa jäljittää vain valkoinen muistiinpanoja.",
            };
            this.fillingMsg = {
                "English": "Let's trace white notes or put notes inside blue parts.",
                "Japanese": "白い音符をなぞるか、<br/>青い部分の中に音符を置こう。",
                "Finnish": "Katsotaanpa jäljittää valkoinen muistiinpanoja tai laittaa muistiinpanoja sisällä sininen osia.",
            };
        }
        return LessonMeasureSheet;
    })(MeasureSheet);
    LESSON.LessonMeasureSheet = LessonMeasureSheet;
    var TargetNotes = (function () {
        function TargetNotes() {
            this.initImage = "clear";
            this.images = { clear: "clear", };
            this.measureWidth = new ScoreData().width;
            this.noteHeight = new ScoreData().noteHeight;
            this.pitch = new ScoreData().pitch;
            this.opacity = 0.7;
            this.color = 0xaaaaaa;
        }
        return TargetNotes;
    })();
    LESSON.TargetNotes = TargetNotes;
    var Blanks = (function () {
        function Blanks() {
            this.images = { blank: "blank", };
            this.pitch = new ScoreData().pitch;
            this.measureWidth = new ScoreData().width;
            this.height = new ScoreData().noteHeight * this.pitch.length;
            this.opacity = 0.3;
        }
        return Blanks;
    })();
    LESSON.Blanks = Blanks;
    var LessonLoadButton = (function (_super) {
        __extends(LessonLoadButton, _super);
        function LessonLoadButton() {
            _super.apply(this, arguments);
            this.playMsg = new LessonModal().playMsg;
        }
        return LessonLoadButton;
    })(LoadButton);
    LESSON.LessonLoadButton = LessonLoadButton;
    var NextButton = (function () {
        function NextButton() {
            this.selector = "#nextButton";
            this.lang = LESSON.language;
            this.next = {
                "English": "NEXT ⇒",
                "Japanese": "次へ ⇒",
                "Finnish": "SEURAAVA ⇒"
            };
        }
        return NextButton;
    })();
    LESSON.NextButton = NextButton;
    var Lecture = (function () {
        function Lecture() {
            this.selector = "#lecture";
            this.titleId = "title";
            this.personIds = {
                teacher: "teacher",
                child: "child",
            };
            this.balloonColor = {
                teacher: "lightgreen",
                child: "orange",
            };
            this.commonClass = {
                balloon: "balloon",
                triangle: "triangle",
                person: "person",
            };
            this.baseImageAddress = "storage/assets/image/person/";
            this.images = {
                teacher: this.baseImageAddress + "teacher.png",
                child: this.baseImageAddress + "child.png",
            };
            this.audios = {};
        }
        return Lecture;
    })();
    LESSON.Lecture = Lecture;
    var LessonModal = (function () {
        function LessonModal() {
            this.modalConstants = new ModalWindow();
            this.playMsg = {
                "English": "Play the music.",
                "Japanese": "音楽を再生してね。",
                "Finnish": "Soita musiikkia.",
            };
            this.stopMsg = {
                "English": "Listen to the music or stop.",
                "Japanese": "音楽を最後まで聞くか、停止してね。",
                "Finnish": "Kuuntele musiikkia tai pysötä.",
            };
            this.TryMsg = {
                "English": "Good Job! Try to play the music!",
                "Japanese": "やったね！　音楽を再生してみよう！",
                "Finnish": "Hienoa! Kokeile soittaa musiikkia!",
            };
            this.goNextMsg = {
                "English": "Excellent! push NEXT button to go on!",
                "Japanese": "よくできました！　「次へ」ボタンを押して進もう！",
                "Finnish": "Erinomaista! Paina SEURAAVA nappia jatkaaksesi!",
            };
        }
        return LessonModal;
    })();
    LESSON.LessonModal = LessonModal;
    var ReturnLessonListButton = (function () {
        function ReturnLessonListButton() {
            this.selector = "#returnLessonList";
            this.language = LESSON.language;
            this.destination = "LessonList.html?lang=" + this.language;
            this.shadowColor = "lavender";
            this.text = {
                "English": "Select Lesson",
                "Japanese": "レッスンをえらぶ",
                "Finnish": "Valitse oppitunti",
            };
            this.confirmMsg = {
                "English": "The music you are making will be disposed. Is it OK to return the Lesson List page?",
                "Japanese": "今、楽ふにある音楽が消えてしまいます。レッスンせんたくページへもどっても良いですか？",
                "Finnish": "Musiikki jota teet poistetaan. Palataanko takaisin oppitunnit sivulle?",
            };
        }
        return ReturnLessonListButton;
    })();
    LESSON.ReturnLessonListButton = ReturnLessonListButton;
    var RestDisplay = (function () {
        function RestDisplay() {
            this.selector = "";
            this.cssClass = "restDisplay";
            this.completeFont = "restDisplayCompleteFont";
            this.incompleteFont = "restDisplayIncompleteFont";
        }
        return RestDisplay;
    })();
    LESSON.RestDisplay = RestDisplay;
    var ProhibitedDisplay = (function (_super) {
        __extends(ProhibitedDisplay, _super);
        function ProhibitedDisplay() {
            _super.apply(this, arguments);
            this.selector = "#prohibitedDisplay";
        }
        return ProhibitedDisplay;
    })(RestDisplay);
    LESSON.ProhibitedDisplay = ProhibitedDisplay;
    var TraceDisplay = (function (_super) {
        __extends(TraceDisplay, _super);
        function TraceDisplay() {
            _super.apply(this, arguments);
            this.selector = "#traceDisplay";
        }
        return TraceDisplay;
    })(RestDisplay);
    LESSON.TraceDisplay = TraceDisplay;
    var FillingDisplay = (function (_super) {
        __extends(FillingDisplay, _super);
        function FillingDisplay() {
            _super.apply(this, arguments);
            this.selector = "#fillingDisplay";
        }
        return FillingDisplay;
    })(RestDisplay);
    LESSON.FillingDisplay = FillingDisplay;
})(LESSON || (LESSON = {}));
//# sourceMappingURL=Lesson.const.js.map