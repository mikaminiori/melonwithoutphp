/// <reference path="../FreeMakingMusic.ref.ts"/>

class MeasureSheet extends SpriteView {

    protected music: Music = this.models["music"];
    protected stationery: Stationery = this.models["stationery"];
	protected musicPlayer: MusicPlayer = this.models["musicPlayer"];
    protected pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;

    constructor(game: Phaser.Game, private constants: CONSTANTS.MeasureSheet, models: Object, private measure: number) {
        super(game, constants, models);
        this.setPosition(this.constants.width * this.measure, 0);
    }

    protected setInput() {
        this.inputEnabled = true;
        this.events.onInputDown.add((self, pointer: Phaser.Pointer) => this.createNote(pointer));
        this.events.onInputUp.add(() => this.music.refresh());
    }

	protected isCreatable(pointer: Phaser.Pointer): boolean {
		if (this.musicPlayer.isPlaying || pointer.rightButton.isDown) return false;
		if (this.stationery.getStationery !== this.constants.writeStationery) return false;
		return true;
	}

	protected calcPitch(pointer: Phaser.Pointer): string {
		return this.constants.pitch[Math.floor((this.pointer.y + this.game.camera.y) / this.constants.noteHeight)];
	}

	protected calcPosition(pointer: Phaser.Pointer): number {
		return Math.floor((this.pointer.x + this.game.camera.x) / this.constants.noteWidth);
	}

    protected createNote(pointer: Phaser.Pointer) {
		if (!this.isCreatable(pointer)) return;
		var pitch = this.calcPitch(pointer);
		var start = this.calcPosition(pointer);
        this.music.write({ pitch, unitNote: this.constants.unitNote, start, extension: 0 });
    }
}

class LessonMeasureSheet extends MeasureSheet {
	private lessonData: LessonData = this.models["lessonData"];
	private achievement: Achievement = this.models["achievement"];
	private modalWindow: ModalWindow;
	private prohibitedMsg: Object;

	constructor(game: Phaser.Game, constants: LESSON.LessonMeasureSheet, models: Object, measure: number) {
        super(game, constants, models, measure);
		this.setMessage(constants);
		this.setModal();
    }

	setInput() {
		this.inputEnabled = true;
		this.events.onInputDown.add((self, pointer: Phaser.Pointer) => this.inputSheetDown(pointer));
		this.events.onInputUp.add((self, pointer: Phaser.Pointer) => this.inputSheetUp(pointer));
	}

	inputSheetDown(pointer: Phaser.Pointer) {
		if (pointer.leftButton.isDown && !this.musicPlayer.isPlaying && !this.achievement.playAlertCheck()) return;
		if (!this.checkLessonData(pointer)) return;
		this.createNote(pointer);
	}

	inputSheetUp(pointer: Phaser.Pointer) {
		var note: NoteData = this.music.getSelectedNote;
		if (!note || !this.lessonData.isInTargetBlank(note.start) || this.lessonData.existsInTargetBlank(note))
			return this.music.refresh();
		this.music.erase(note);
		this.modalWindow.alert(this.prohibitedMsg);
	}

	private setMessage(constants: LESSON.LessonMeasureSheet) {
		switch (this.lessonData.getMode) {
			case constants.mode.tracing: this.prohibitedMsg = constants.traceMsg; break;
			case constants.mode.filling: this.prohibitedMsg = constants.fillingMsg; break;
			default: this.prohibitedMsg = constants.traceMsg; break;
		}
	}

	private setModal() {
		this.modalWindow = new ModalWindow(this.game, new CONSTANTS.ModalWindow, {});
		this.modalWindow.onOpen.add(() => this.game.sound.play("boo"));
		this.modalWindow.onOk.add(() => this.game.sound.play("decide"));
	}

	private checkLessonData(pointer: Phaser.Pointer): boolean {
		if (!this.isCreatable(pointer)) return false;
		var pitch: string = this.calcPitch(pointer);
		var start: number = this.calcPosition(pointer);
		if (this.lessonData.isInTargetBlank(start)) return true;
		if (!this.lessonData.isInTargetMusic(pitch, start)) { this.modalWindow.alert(this.prohibitedMsg); return false; }
		return true;
	}
}