/// <reference path="../FreeMakingMusic.ref.ts"/>

class InstrumentContainer extends DOMView {

    private instrument: Instrument = this.models["instrument"];
    public isOpen: boolean = false;

    constructor(game: Phaser.Game, private constants: CONSTANTS.InstrumentContainer, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$.css("height", this.constants.containerHeight);
        this.constants.instruments.forEach((instrument: string) => {
            this.$.append($(`<div id="${instrument}"></div>`));
            new InstrumentOption(this.game, new CONSTANTS.InstrumentOption, this.models, instrument);
        });
    }

    private setEvent() {
        this.instrument.onChangeInstrument.add(() => { this.close(); });
    }

    close() {
        this.$.stop(true, true).slideUp(this.constants.slideTime);
        this.isOpen = false;
    }

    slideToggle() {
        this.$.stop(true, true).slideToggle(this.constants.slideTime);
        this.isOpen = !this.isOpen;
        if (this.isOpen) this.game.sound.play("open");
        else this.game.sound.play("close");
    }
}