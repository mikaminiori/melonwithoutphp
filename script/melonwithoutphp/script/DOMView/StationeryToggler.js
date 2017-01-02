/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var StationeryToggler = (function (_super) {
    __extends(StationeryToggler, _super);
    function StationeryToggler(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.stationery = this.models["stationery"];
        this.pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
        this.pointer.rightButton.onDown.add(function () { _this.toggleStationery(); });
    }
    StationeryToggler.prototype.toggleStationery = function () {
        this.game.sound.play("decide");
        var oldStationeryIndex = this.constants.stationeries.indexOf(this.stationery.getStationery);
        var newStationeryIndex = (oldStationeryIndex + 1) % this.constants.stationeryNum;
        this.stationery.changeStationery(this.constants.stationeries[newStationeryIndex]);
    };
    return StationeryToggler;
})(DOMView);
//# sourceMappingURL=StationeryToggler.js.map