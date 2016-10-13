/// <reference path="../FreeMakingMusic.ref.ts"/>

class SoundButtonContainer extends DOMView {
    
    private soundButtons: SoundButton[] = [];

    constructor(game: Phaser.Game, private constants: CONSTANTS.SoundButtonContainer, models: Object) {
        super(game, constants, models);
        this.setView();
        this.createSoundButtons();
    }

    private setView() {
        this.$.css("height", this.constants.height).wrap(`<div id="soundButtonMask">`);
    }

    private createSoundButtons() {
        this.constants.pitch.forEach((pitch: string) => {
            this.$.append($("<div id=" + pitch + "/>"));
            this.soundButtons.push(new SoundButton(this.game, new CONSTANTS.SoundButton, this.models, pitch));
        });
    }

    update() {
        this.$.css("top", - this.game.camera.y);
    }
}