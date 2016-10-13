/// <reference path="../FreeMakingMusic.ref.ts"/>

class SaveButton extends DOMView {

    private music: Music = this.models["music"];
    private musicStorage: MusicStorage = this.models["musicStorage"];
	private instrument: Instrument = this.models["instrument"];
	private speed: Speed = this.models["speed"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SaveButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$.append($(`<img src=${this.constants.image} />`).addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); this.game.sound.play("select"); })
            .on("mouseleave", () => { this.$.css("box-shadow", "none"); });
    }

    private setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => {
            this.musicStorage.saveConfirm(this.music.getMusic, this.instrument.getInstrument, this.speed.getSpeedGrade);
        });
    }
}