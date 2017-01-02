/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SoundButton = (function (_super) {
    __extends(SoundButton, _super);
    function SoundButton(game, constants, models, pitch) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.pitch = pitch;
        this.instrument = this.models["instrument"];
        this.setView();
        this.setEvent();
    }
    SoundButton.prototype.setView = function () {
        this.$ = $("#" + this.pitch)
            .addClass(this.constants.selector)
            .css("top", this.constants.border + this.constants.pitchTop * this.constants.pitch.indexOf(this.pitch))
            .append($("<div></div>")
            .addClass("soundButtonText")
            .text(this.constants.pitchText[this.constants.language][this.constants.pitch.indexOf(this.pitch)]));
    };
    SoundButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.start(); })
            .on(this.game.device.touch ? "touchend" : "mouseup", function () { _this.end(); })
            .on("mouseleave", function () { _this.end(); });
    };
    SoundButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () { _this.$.css("box-shadow", "0 0 10px 3px skyblue"); })
            .on("mouseleave", function () { _this.$.css("box-shadow", "none"); });
    };
    SoundButton.prototype.start = function () {
        if (this.sound && this.sound.isPlaying)
            this.sound.fadeOut(this.constants.ringDuration);
        this.sound = this.game.sound.play(this.instrument.getInstrument + this.pitch);
        this.$.css("background-color", "orange");
    };
    SoundButton.prototype.end = function () {
        if (this.sound)
            this.sound.fadeOut(this.constants.ringDuration);
        this.$.css("background-color", "limegreen");
    };
    return SoundButton;
})(DOMView);
//# sourceMappingURL=SoundButton.js.map