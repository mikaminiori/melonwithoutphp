/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpeedButton = (function (_super) {
    __extends(SpeedButton, _super);
    function SpeedButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.speed = this.models["speed"];
        this.setEvent();
    }
    SpeedButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.addClass(this.constants.class["speed"])
            .on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.changeSpeed(); });
    };
    SpeedButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () { _this.game.sound.play("select"); });
    };
    SpeedButton.prototype.changeSpeed = function () {
        if (this.constants.direction === this.constants.upDirection)
            this.speedUp();
        if (this.constants.direction === this.constants.downDirection)
            this.speedDown();
    };
    SpeedButton.prototype.speedUp = function () {
        if (this.speed.getSpeedGrade === this.constants.speedGradeNum - 1) {
            this.game.sound.play("boo");
            return;
        }
        this.game.sound.play("decide");
        this.speed.changeSpeed(true);
    };
    SpeedButton.prototype.speedDown = function () {
        if (this.speed.getSpeedGrade === 0) {
            this.game.sound.play("boo");
            return;
        }
        this.game.sound.play("decide");
        this.speed.changeSpeed(false);
    };
    return SpeedButton;
})(DOMView);
//# sourceMappingURL=SpeedButton.js.map