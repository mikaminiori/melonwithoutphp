/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpeedDisplay = (function (_super) {
    __extends(SpeedDisplay, _super);
    function SpeedDisplay(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.speed = this.models["speed"];
        this.text = $("<div id=\"speedDisplayText\"></div>");
        this.setView();
        this.setEvent();
        this.changeSpeed();
    }
    SpeedDisplay.prototype.setView = function () {
        this.$.append(this.text);
    };
    SpeedDisplay.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.roleSpeed(); });
        this.speed.onChangeSpeed.add(function () { _this.changeSpeed(); });
    };
    SpeedDisplay.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () { _this.$.css("box-shadow", "0 0 20px 6px darkorange"); _this.game.sound.play("select"); })
            .on("mouseleave", function () { _this.$.css("box-shadow", "none"); });
    };
    SpeedDisplay.prototype.roleSpeed = function () {
        var _this = this;
        this.game.sound.play("decide");
        if (this.speed.getSpeed === _.last(this.constants.speeds)) {
            _.times(this.constants.speedGradeNum, function () { _this.speed.changeSpeed(false); });
            return;
        }
        this.speed.changeSpeed(true);
    };
    SpeedDisplay.prototype.changeSpeed = function () {
        this.text.text(this.constants.speedText[this.constants.language][this.speed.getSpeedGrade]);
        this.$.css("background-color", this.constants.speedColor[this.speed.getSpeedGrade])
            .css("color", this.constants.textColor[this.speed.getSpeedGrade]);
    };
    return SpeedDisplay;
})(DOMView);
//# sourceMappingURL=SpeedDisplay.js.map