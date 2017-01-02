/// <reference path="../FreeMakingMusic.ref.ts"/>

class StationeryToggler extends DOMView {

    private stationery: Stationery = this.models["stationery"];
    private pointer: Phaser.Pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
    
    constructor(game: Phaser.Game, private constants: CONSTANTS.StationeryToggler, models: Object) {
        super(game, constants, models);
        this.pointer.rightButton.onDown.add(() => { this.toggleStationery(); });
    }

    private toggleStationery() {
        this.game.sound.play("decide");
        var oldStationeryIndex = this.constants.stationeries.indexOf(this.stationery.getStationery)
        var newStationeryIndex = (oldStationeryIndex + 1) % this.constants.stationeryNum;
        this.stationery.changeStationery(this.constants.stationeries[newStationeryIndex]);
    }
}