/// <reference path="../Lesson.ref.ts"/>

class Achievement extends Model {
	
    private finished: boolean = false;
	private activated: boolean = false;
	private restTrace: number = 0;
	private restFilling: number = 0;
	private red: number = 0;

    onFinish: Phaser.Signal = new Phaser.Signal;
    onPlayAlert: Phaser.Signal = new Phaser.Signal;
    onStopAlert: Phaser.Signal = new Phaser.Signal;
    onActivate: Phaser.Signal = new Phaser.Signal;
	onChangeNum: Phaser.Signal = new Phaser.Signal;

    constructor(private constants: LESSON.Achievement, private mode: string) {
        super(constants);
    }

	startLesson() {
		this.onChangeNum.dispatch();
	}

    get isAchieved(): boolean {
        return this.restTrace === 0 && this.restFilling === 0 && this.redNum === 0;
    }

	get isFinished(): boolean {
        return this.finished;
    }

	get isActivated(): boolean {
        return this.activated;
    }

	get redNum(): number {
        return this.red;
    }

	get restTraceNum(): number {
        return this.restTrace;
    }

	get restFillingNum(): number {
        return this.restFilling;
    }

	set changeRedNum(num: number) {
		this.red = num;
		this.onChangeNum.dispatch();
	}

	set changeRestTraceNum(num: number) {
		this.restTrace = num;
		this.onChangeNum.dispatch();
	}

	set changeRestFillingNum(num: number) {
		this.restFilling = num;
		this.onChangeNum.dispatch();
	}

	playAlertCheck(): boolean {
		if (this.isFinished && !this.isActivated) {
			this.playAlert();
			return false;
		}
		return true;
	}

    playAlert() {
        this.onPlayAlert.dispatch();
    }

    stopAlert() {
        this.onStopAlert.dispatch();
    }

    activate() {
		this.activated = true;
        this.onActivate.dispatch();
    }

	countRestTrace(target: MusicData, music: MusicData): number {
		var count: number = 0;
		_.each(target, (targetLine: NoteData[], pitch: string) => {
			_.each(targetLine, (targetNote: NoteData) => {
				if (!_.some(music[pitch], (note: NoteData) => {
					return targetNote.start === note.start && targetNote.start + targetNote.extension === note.start + note.extension;
				})) count++;
			});
		});
		return count;
	}

	countRestFilling(blanks: [number, number][], unitNote: number, music: Music): number {
		var count: number = 0;
		_.each(blanks, (blank: [number, number]) => {
			for (var i = blank[0]; i <= blank[1]; i++)
				if (_.some(this.constants.pitch, (pitch) => { return music.checkExist(pitch, unitNote, i) })) return;
			count++;
		});
		return count;
	}

    checkFinish() {
        if (!this.finished && this.isAchieved) {
            this.finished = true;
            this.onFinish.dispatch();
        }
    }
}