/// <reference path="../FreeMakingMusic.ref.ts"/>

class Logo extends DOMView {
    constructor(game: Phaser.Game, private constants: CONSTANTS.Logo, models: Object) {
        super(game, constants, models);
        this.setEvent();
    }

    private setEvent() {
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", () => { this.ajax(); });
    }

    private ajax() {
        // We can read only JSON file in local !!
        // $.getJSON("storage/lesson/json.json", (data) => { console.log(data["A3"]) });

        this.game.sound.play("MelOn");
    }
}