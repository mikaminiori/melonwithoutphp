/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScrollButton = (function (_super) {
    __extends(ScrollButton, _super);
    function ScrollButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.isPushed = false;
        this.isOn = false;
        this.isAlerted = false;
        this.clickStatus = null;
        this.initCamera();
        this.setView();
        this.setEvent();
    }
    ScrollButton.prototype.setView = function () {
        this.$.addClass(this.constants.class["scroll"]);
    };
    ScrollButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.pushEvent(), function () { return _this.checkDouble(); })
            .on(this.pullEvent(), function () { return _this.pull(); })
            .on("mouseleave", function () { _this.isOn = false; _this.pull(); })
            .append("<div id=" + (this.constants.direction + "Triangle") + "></div>");
    };
    ScrollButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () {
            _this.isOn = true;
            _this.$.css("box-shadow", "0 0 8px 2px lawngreen, 0 0 8px 2px lawngreen inset");
            _this.game.sound.play("select");
        }).on("mouseleave", function () { _this.isOn = false; _this.$.css("box-shadow", "none"); });
    };
    ScrollButton.prototype.checkDouble = function () {
        var _this = this;
        if (this.clickStatus === null) {
            this.clickStatus = setTimeout(function () { return _this.clickStatus = null; }, this.constants.doubleTapTime);
            return this.push();
        }
        this.clickStatus = null;
        if (!this.isLimit())
            this.double();
    };
    ScrollButton.prototype.push = function () {
        this.isPushed = true;
        this.$.css("box-shadow", "0 0 8px 2px palevioletred, 0 0 8px 2px palevioletred inset");
    };
    ScrollButton.prototype.pull = function () {
        this.isPushed = false;
        this.isAlerted = false;
        if (this.isOn)
            this.$.css("box-shadow", "0 0 8px 2px lawngreen, 0 0 8px 2px lawngreen inset");
        else
            this.$.css("box-shadow", "none");
    };
    ScrollButton.prototype.initCamera = function () {
        this.game.camera.y = this.constants.noteHeight * this.constants.pitch.indexOf(this.constants.initPitch);
    };
    ScrollButton.prototype.rightestPosition = function () {
        var _this = this;
        var music = this.music.getMusic;
        var x = 0;
        _.each(music, function (line) {
            _.each(line, function (note) {
                var endPosition = (_this.constants.measureWidth / note.unitNote) * (note.start + note.extension + 1);
                if (endPosition > x)
                    x = endPosition;
            });
        });
        return x;
    };
    ScrollButton.prototype.isLimit = function () {
        switch (this.constants.direction) {
            case "up":
                if (this.game.camera.y === 0) {
                    return true;
                }
                break;
            case "down":
                if (this.game.camera.y !== 0 && this.game.camera.atLimit.y) {
                    return true;
                }
                break;
            case "right":
                if (this.game.camera.x !== 0 && this.game.camera.atLimit.x) {
                    return true;
                }
                break;
            case "left":
                if (this.game.camera.x === 0) {
                    return true;
                }
                break;
            default:
                return false;
                break;
        }
        return false;
    };
    ScrollButton.prototype.double = function () {
        this.game.sound.play("jump");
        switch (this.constants.direction) {
            case "up":
                this.game.camera.y = 0;
                break;
            case "down":
                this.game.camera.y = Infinity;
                break;
            case "right":
                this.game.camera.x = this.rightestPosition() - this.constants.measureWidth * this.constants.displayMeasureNum;
                break;
            case "left":
                this.game.camera.x = 0;
                break;
            default: break;
        }
    };
    ScrollButton.prototype.update = function () {
        if (this.isPushed) {
            switch (this.constants.direction) {
                case "up":
                    this.game.camera.y -= this.constants.speed;
                    break;
                case "down":
                    this.game.camera.y += this.constants.speed;
                    break;
                case "right":
                    this.game.camera.x += this.constants.speed;
                    break;
                case "left":
                    this.game.camera.x -= this.constants.speed;
                    break;
                default: break;
            }
            if (this.isLimit() && !this.isAlerted) {
                this.game.sound.play("boo");
                this.isAlerted = true;
            }
        }
    };
    return ScrollButton;
})(DOMView);
var LessonScrollButton = (function (_super) {
    __extends(LessonScrollButton, _super);
    function LessonScrollButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.achievement = this.models["achievement"];
        this.achievement.onFinish.add(function () { return _this.game.camera.x = 0; });
    }
    return LessonScrollButton;
})(ScrollButton);
//# sourceMappingURL=ScrollButton.js.map