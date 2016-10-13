/// <reference path="../Lesson.ref.ts"/>

class LessonModal extends ModalWindow {
	
	private music: Music = this.models["music"];
    private achievement: Achievement = this.models["achievement"];

    constructor(game: Phaser.Game, private constants: LESSON.LessonModal, models: Object) {
        super(game, constants.modalConstants, models);
        this.setEvents();
    }

    private setEvents() {
        this.achievement.onFinish.add(() => this.finish());
        this.achievement.onPlayAlert.add(() => this.playAlert());
        this.achievement.onStopAlert.add(() => this.stopAlert());
        this.achievement.onActivate.add(() => this.activate());
    }

    private finish() {
        this.game.sound.play("load");
        this.alert(this.constants.TryMsg);
		this.music.refresh();
    }

    private playAlert() {
		this.game.sound.play("boo");
        this.alert(this.constants.playMsg);
    }

    private stopAlert() {
        this.alert(this.constants.stopMsg);
    }

    private activate() {
        this.game.sound.play("save");
        this.alert(this.constants.goNextMsg);
    }
}