/// <reference path="../FreeMakingMusic.ref.ts"/>

class InstrumentOption extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    private musicPlayer: MusicPlayer = this.models["musicPlayer"];
    
    constructor(game: Phaser.Game, private constants: CONSTANTS.InstrumentOption, models: Object, private instrumentName: string) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
        this.checkInstrument();
    }

    private setEvent() {
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", (e) => { this.changeInstrument(); e.stopPropagation(); });
        this.instrument.onChangeInstrument.add(() => { this.checkInstrument(); });
    }

    private setView() {
        this.$ = $("#" + this.instrumentName)
            .addClass("instrumentOption")
            .css("color", this.constants.textColor[this.instrumentName])
            .css("background-color", this.constants.backgroundColor[this.instrumentName])
            .append($(`<img src="${this.constants.image[this.instrumentName]}" />`)
                .addClass("instrumentImage"))
            .append($("<div></div>").addClass("instrumentText")
                .text(this.constants.instrumentText[this.constants.language][this.instrumentName]));
    }

    private sampleSound() {
        var sound = this.game.sound.play(this.instrumentName + this.constants.samplePitch);
        sound.fadeOut(this.constants.sampleTime);
    }

    private changeInstrument() {
        this.instrument.changeInstrument(this.instrumentName);
        if(!this.musicPlayer.isPlaying) this.sampleSound();
    }

    private checkInstrument() {
        this.$.css("display", this.instrument.getInstrument == this.instrumentName ? "none" : "block");
    }
}