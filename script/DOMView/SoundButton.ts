/// <reference path="../FreeMakingMusic.ref.ts"/>

class SoundButton extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    private sound: Phaser.Sound;

    constructor(game: Phaser.Game, private constants: CONSTANTS.SoundButton, models: Object, private pitch: string) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$ = $("#" + this.pitch)
            .addClass(this.constants.selector)
            .css("top", this.constants.border + this.constants.pitchTop * this.constants.pitch.indexOf(this.pitch))
            .append($("<div></div>")
               .addClass("soundButtonText")
               .text(this.constants.pitchText[this.constants.language][this.constants.pitch.indexOf(this.pitch)]));
    }

    private setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.start(); })
            .on(this.game.device.touch ? "touchend" : "mouseup", () => { this.end(); })
            .on("mouseleave", () => { this.end(); });
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => { this.$.css("box-shadow", "0 0 10px 3px skyblue"); })
            .on("mouseleave", () => { this.$.css("box-shadow", "none"); });
    }

    private start() {
        if (this.sound && this.sound.isPlaying) this.sound.fadeOut(this.constants.ringDuration);
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.pitch);
        this.$.css("background-color", "orange");
    }

    private end() {
        if (this.sound) this.sound.fadeOut(this.constants.ringDuration);
        this.$.css("background-color", "limegreen");
    }
}