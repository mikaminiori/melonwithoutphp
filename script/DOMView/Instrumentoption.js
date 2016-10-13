/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InstrumentOption = (function (_super) {
    __extends(InstrumentOption, _super);
    function InstrumentOption(game, constants, models, instrumentName) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.instrumentName = instrumentName;
        this.instrument = this.models["instrument"];
        this.musicPlayer = this.models["musicPlayer"];
        this.setView();
        this.setEvent();
        this.checkInstrument();
    }
    InstrumentOption.prototype.setEvent = function () {
        var _this = this;
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function (e) { _this.changeInstrument(); e.stopPropagation(); });
        this.instrument.onChangeInstrument.add(function () { _this.checkInstrument(); });
    };
    InstrumentOption.prototype.setView = function () {
        this.$ = $("#" + this.instrumentName)
            .addClass("instrumentOption")
            .css("color", this.constants.textColor[this.instrumentName])
            .css("background-color", this.constants.backgroundColor[this.instrumentName])
            .append($("<img src=\"" + this.constants.image[this.instrumentName] + "\" />")
            .addClass("instrumentImage"))
            .append($("<div></div>").addClass("instrumentText")
            .text(this.constants.instrumentText[this.constants.language][this.instrumentName]));
    };
    InstrumentOption.prototype.sampleSound = function () {
        var sound = this.game.sound.play(this.instrumentName + this.constants.samplePitch);
        sound.fadeOut(this.constants.sampleTime);
    };
    InstrumentOption.prototype.changeInstrument = function () {
        this.instrument.changeInstrument(this.instrumentName);
        if (!this.musicPlayer.isPlaying)
            this.sampleSound();
    };
    InstrumentOption.prototype.checkInstrument = function () {
        this.$.css("display", this.instrument.getInstrument == this.instrumentName ? "none" : "block");
    };
    return InstrumentOption;
})(DOMView);
//# sourceMappingURL=Instrumentoption.js.map