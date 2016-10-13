/// <reference path="../FreeMakingMusic.ref.ts"/>

class SpeedButton extends DOMView {

    private speed: Speed = this.models["speed"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SpeedButton, models: Object) {
        super(game, constants, models);
        this.setEvent();
    }

    private setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.addClass(this.constants.class["speed"])
            .on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.changeSpeed(); });
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.game.sound.play("select"); });
    }

    private changeSpeed() {
        if (this.constants.direction === this.constants.upDirection) this.speedUp();
        if (this.constants.direction === this.constants.downDirection) this.speedDown();
    }

    private speedUp() {
        if (this.speed.getSpeedGrade === this.constants.speedGradeNum - 1) { this.game.sound.play("boo"); return; }
        this.game.sound.play("decide");
        this.speed.changeSpeed(true);
    }

    private speedDown() {
        if (this.speed.getSpeedGrade === 0) { this.game.sound.play("boo"); return; }
        this.game.sound.play("decide");
        this.speed.changeSpeed(false);
    }
}