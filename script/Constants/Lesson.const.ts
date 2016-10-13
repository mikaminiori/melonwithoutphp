/// <reference path="../Lesson.ref.ts"/>

namespace LESSON {
    import ScoreData = CONSTANTS.MeasureSheet;
    import Model = CONSTANTS.Model;
    import GroupView = CONSTANTS.GroupView;
    import DOMView = CONSTANTS.DOMView;
    import ModalWindow = CONSTANTS.ModalWindow;
	import LoadButton = CONSTANTS.LoadButton;
	import ReturnButton = CONSTANTS.ReturnButton;
	import HTMLView = INDEX.HTMLView;
	import MeasureSheet = CONSTANTS.MeasureSheet;
    
    export var language: string = new LESSON_LIST.Language().language;

    export class LessonData implements Model {
        language: string = language
        listUrl: string = LESSON_LIST.listUrls[language];
        defaultUrl: string = `LessonList.html?lang=${language}`;
        errorMsg = {
            "English": "Lesson Data Read Error...",
            "Japanese": "学習データの読み込みに失敗しました。",
            "Finnish": "Oppitunnin tietoja ei onnistuttu lukemaan...",
        }
    }

    export class Achievement implements Model {
        pitch = new ScoreData().pitch;
		mode = {
			tracing: "tracing",
			filling: "filling",
		};
    }

	export class LessonMeasureSheet extends MeasureSheet {
		mode = new Achievement().mode;
		traceMsg = {
            "English": "Let's trace only white notes.",
            "Japanese": "白い音符だけををなぞろう。",
            "Finnish": "Katsotaanpa jäljittää vain valkoinen muistiinpanoja.",
        };
		fillingMsg = {
            "English": "Let's trace white notes or put notes inside blue parts.",
            "Japanese": "白い音符をなぞるか、<br/>青い部分の中に音符を置こう。",
            "Finnish": "Katsotaanpa jäljittää valkoinen muistiinpanoja tai laittaa muistiinpanoja sisällä sininen osia.",
        };
	}

    export class TargetNotes implements GroupView {
		initImage: string = "clear";
        images: { [name: string]: string } = { clear: "clear", };
        measureWidth: number = new ScoreData().width;
        noteHeight: number = new ScoreData().noteHeight;
        pitch: string[] = new ScoreData().pitch;
        opacity: number = 0.7;
        color = 0xaaaaaa;
    }

    export class Blanks implements GroupView {
        images: { [name: string]: string } = { blank: "blank", };
        pitch: string[] = new ScoreData().pitch;
        measureWidth: number = new ScoreData().width;
        height: number = new ScoreData().noteHeight * this.pitch.length;
        opacity: number = 0.3;
    }

	export class LessonLoadButton extends LoadButton {
		playMsg = new LessonModal().playMsg;
	}

    export class NextButton implements DOMView {
        selector = "#nextButton";
        lang = language;
        next = {
            "English": "NEXT ⇒",
            "Japanese": "次へ ⇒",
            "Finnish": "SEURAAVA ⇒"
        }
    }

    export class Lecture implements HTMLView {
        selector = "#lecture";
        titleId = "title";
        personIds = {
            teacher: "teacher",
            child: "child",
        };
        balloonColor = {
            teacher: "lightgreen",
            child: "orange",
        };
		commonClass = {
            balloon: "balloon",
            triangle: "triangle",
            person: "person",
        };
		baseImageAddress: string = "storage/assets/image/person/";
        images: {[name: string]: string} = {
            teacher: this.baseImageAddress + "teacher.png",
            child: this.baseImageAddress + "child.png",
        };
		audios: { [name: string]: string } = {};
    }

    export class LessonModal {
        modalConstants: ModalWindow = new ModalWindow();
        playMsg = {
            "English": "Play the music.",
            "Japanese": "音楽を再生してね。",
            "Finnish": "Soita musiikkia.",
        };
        stopMsg = {
            "English": "Listen to the music or stop.",
            "Japanese": "音楽を最後まで聞くか、停止してね。",
            "Finnish": "Kuuntele musiikkia tai pysötä.",
        };
        TryMsg = {
            "English": "Good Job! Try to play the music!",
            "Japanese": "やったね！　音楽を再生してみよう！",
            "Finnish": "Hienoa! Kokeile soittaa musiikkia!",
        };
        goNextMsg = {
            "English": "Excellent! push NEXT button to go on!",
            "Japanese": "よくできました！　「次へ」ボタンを押して進もう！",
            "Finnish": "Erinomaista! Paina SEURAAVA nappia jatkaaksesi!",
        };
    }

	export class ReturnLessonListButton implements ReturnButton {
		selector = "#returnLessonList";
		language = language;
		destination = "LessonList.html?lang=" + this.language;
		shadowColor = "lavender";
		text = {
			"English": "Select Lesson",
			"Japanese": "レッスンをえらぶ",
			"Finnish": "Valitse oppitunti",
		};
		confirmMsg = {
			"English": "The music you are making will be disposed. Is it OK to return the Lesson List page?",
			"Japanese": "今、楽ふにある音楽が消えてしまいます。レッスンせんたくページへもどっても良いですか？",
			"Finnish": "Musiikki jota teet poistetaan. Palataanko takaisin oppitunnit sivulle?",
		};
	}

	export class RestDisplay implements DOMView {
		selector = "";
		cssClass = "restDisplay";
		completeFont = "restDisplayCompleteFont";
		incompleteFont = "restDisplayIncompleteFont";
	}

	export class ProhibitedDisplay extends RestDisplay {
		selector = "#prohibitedDisplay";
	}

	export class TraceDisplay extends RestDisplay {
		selector = "#traceDisplay";
	}

	export class FillingDisplay extends RestDisplay {
		selector = "#fillingDisplay";
	}
}