/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Speed = (function (_super) {
    __extends(Speed, _super);
    function Speed(constants) {
        var _this = this;
        _super.call(this, constants);
        this.constants = constants;
        this.onChangeSpeed = new Phaser.Signal();
        _.times(this.constants.initSpeedGrade + 1, function () { _this.changeSpeed(true); });
    }
    Object.defineProperty(Speed.prototype, "getSpeed", {
        get: function () {
            return this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Speed.prototype, "getSpeedGrade", {
        get: function () {
            return this.constants.speeds.indexOf(this.speed);
        },
        enumerable: true,
        configurable: true
    });
    Speed.prototype.setSpeedGrade = function (speedGrade) {
        for (var i = speedGrade - this.getSpeedGrade; i != 0; i += (i < 0 ? 1 : -1))
            this.changeSpeed(i > 0);
    };
    Speed.prototype.changeSpeed = function (up) {
        var newSpeed = this.constants.speeds[this.getSpeedGrade + (up ? 1 : -1)];
        if (newSpeed)
            this.speed = newSpeed;
        this.onChangeSpeed.dispatch();
    };
    return Speed;
})(Model);
//# sourceMappingURL=Speed.js.map