/// <reference path="../Lesson.ref.ts"/>

class LessonData extends Model {
    
    private title: string;
    private target: MusicData;
    private mode: string;
    private nextUrl: string;
    private unitNote: number;
    private blanks: [number, number][];
    private inherit: MusicData;
    private lecture: { [prop: string]: string }[];

    constructor(private constants: LESSON.LessonData) {
        super(constants);
        this.getLessonData();
    }

    private getLessonData() {
        $.ajaxSetup({ error: () => { this.ajaxError(); } });
        $.getJSON(this.constants.listUrl, (list) => {
            var lessonInfo = list[$.getUrlVar("lesson")];
            if (!lessonInfo) this.ajaxError();
            $.getJSON(lessonInfo["url"], (data, status) => { this.importLessonData(data); });
            if ($.getUrlVar("inherit")) {
                $.getJSON(list[$.getUrlVar("inherit")]["url"], (data) => { this.inherit = data["music"]; });
            }
        });
    }

    private ajaxError() {
        alert(this.constants.errorMsg[this.constants.language]);
        document.location = <any>this.constants.defaultUrl;
    }

    private importLessonData(data: Object) {
        this.title = data["title"];
        this.target = data["music"];
        this.mode = data["mode"];
        this.lecture = data["lecture"];
        this.makeNextUrl(data);
        if (this.mode === "filling") this.importFillingLessonData(data);
    }

    private makeNextUrl(data: Object) {
        if (data["next"]) {
            this.nextUrl = `Lesson.html?lang=${LESSON.language}&lesson=${data["next"]}`;
            if (data["passNext"] === true) this.nextUrl += `&inherit=${data["title"]}`;
        } else this.nextUrl = this.constants.defaultUrl;
    }

    private importFillingLessonData(data: Object) {
        this.unitNote = data["unitNote"];
        this.blanks = data["blank"];
    }

    get getTitle(): string { return this.title; }
    get getMode(): string { return this.mode; }
    get getTargetMusic(): MusicData { return this.target; }
    get getNextUrl(): string { return this.nextUrl; }
    get getUnitNote(): number { return this.unitNote; }
    get getBlanks(): [number, number][] { return this.blanks; }
    get getInherit(): MusicData { return this.inherit; }
    get getLecture(): { [prop: string]: string }[] { return this.lecture; }

	isInTargetBlank(position: number): boolean {
		return _.some(this.blanks, (blank: [number, number]) => {
			return blank[0] <= position && position <= blank[1];
		});
	}

	existsInTargetBlank(note: NoteData): boolean {
		var end = note.start + note.extension;
		for (var i = note.start; i <= end; i++) if (!this.isInTargetBlank(i)) return false;
		return true;
	}

	isInTargetMusic(pitch: string, position: number): boolean {
		return _.some(this.target[pitch], (note: NoteData) => {
			return note.start <= position && position <= note.start + note.extension;
		});
	}
	
	existsInTargetMusic(note: NoteData): boolean {
		if (this.blanks && this.existsInTargetBlank(note)) return true;
		return _.some(this.target[note.pitch], (targetNote: NoteData) => {
			return targetNote.start === note.start && targetNote.start + targetNote.extension === note.start + note.extension;
		});		
	}
}