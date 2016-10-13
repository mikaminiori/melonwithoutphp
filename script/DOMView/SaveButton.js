/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SaveButton = (function (_super) {
    __extends(SaveButton, _super);
    function SaveButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.musicStorage = this.models["musicStorage"];
        this.instrument = this.models["instrument"];
        this.speed = this.models["speed"];
        this.setView();
        this.setEvent();
    }
    SaveButton.prototype.setView = function () {
        this.$.append($("<img src=" + this.constants.image + " />").addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    };
    SaveButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () { _this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); _this.game.sound.play("select"); })
            .on("mouseleave", function () { _this.$.css("box-shadow", "none"); });
    };
    SaveButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () {
            _this.musicStorage.saveConfirm(_this.music.getMusic, _this.instrument.getInstrument, _this.speed.getSpeedGrade);
        });
    };
    return SaveButton;
})(DOMView);
//# sourceMappingURL=SaveButton.js.map