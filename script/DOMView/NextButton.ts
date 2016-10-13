/// <reference path="../Lesson.ref.ts"/>

class NextButton extends DOMView {

    private lessonData: LessonData = this.models["lessonData"];
    private achievement: Achievement = this.models["achievement"];
    private musicPlayer: MusicPlayer = this.models["musicPlayer"];

    constructor(game: Phaser.Game, private constants: LESSON.NextButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvents();
    }

    private setView() {
        this.$.text(this.constants.next[this.constants.lang]);
    }

    private setEvents() {
        this.achievement.onFinish.add(() => { this.$.on(this.pushEvent(), () => this.alert()); });
        this.musicPlayer.onStop.add(() => { if (this.achievement.isFinished) this.onActive(); });
        this.$.on(this.pushEvent(), () => { if (!this.achievement.isFinished) this.game.sound.play("boo"); });
        this.$.select(() => { return false; });
    }

    private alert() {
        if (!this.musicPlayer.isPlaying) { this.achievement.playAlert(); return; }
        this.achievement.stopAlert();
    }

    private setSelectEffect() {
        this.$.hover(() => { this.$.css("box-shadow", "0 0 20px 6px lawngreen"); this.game.sound.play("select") },
            () => this.$.css("box-shadow", "none"));
    }

    private move() {
        this.game.sound.play("decide");
        setTimeout(() => { document.location = <any>this.lessonData.getNextUrl; }, 500);
    }

    private onActive = _.once(() => {
        this.setSelectEffect();
        this.$.css("background-color", "orange").unbind(this.pushEvent()).on(this.pushEvent(), () => this.move());
        this.achievement.activate();
    });
}