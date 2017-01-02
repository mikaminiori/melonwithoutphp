/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Achievement = (function (_super) {
    __extends(Achievement, _super);
    function Achievement(constants, mode) {
        _super.call(this, constants);
        this.constants = constants;
        this.mode = mode;
        this.finished = false;
        this.activated = false;
        this.restTrace = 0;
        this.restFilling = 0;
        this.red = 0;
        this.onFinish = new Phaser.Signal;
        this.onPlayAlert = new Phaser.Signal;
        this.onStopAlert = new Phaser.Signal;
        this.onActivate = new Phaser.Signal;
        this.onChangeNum = new Phaser.Signal;
    }
    Achievement.prototype.startLesson = function () {
        this.onChangeNum.dispatch();
    };
    Object.defineProperty(Achievement.prototype, "isAchieved", {
        get: function () {
            return this.restTrace === 0 && this.restFilling === 0 && this.redNum === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "isFinished", {
        get: function () {
            return this.finished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "isActivated", {
        get: function () {
            return this.activated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "redNum", {
        get: function () {
            return this.red;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "restTraceNum", {
        get: function () {
            return this.restTrace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "restFillingNum", {
        get: function () {
            return this.restFilling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "changeRedNum", {
        set: function (num) {
            this.red = num;
            this.onChangeNum.dispatch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "changeRestTraceNum", {
        set: function (num) {
            this.restTrace = num;
            this.onChangeNum.dispatch();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "changeRestFillingNum", {
        set: function (num) {
            this.restFilling = num;
            this.onChangeNum.dispatch();
        },
        enumerable: true,
        configurable: true
    });
    Achievement.prototype.playAlertCheck = function () {
        if (this.isFinished && !this.isActivated) {
            this.playAlert();
            return false;
        }
        return true;
    };
    Achievement.prototype.playAlert = function () {
        this.onPlayAlert.dispatch();
    };
    Achievement.prototype.stopAlert = function () {
        this.onStopAlert.dispatch();
    };
    Achievement.prototype.activate = function () {
        this.activated = true;
        this.onActivate.dispatch();
    };
    Achievement.prototype.countRestTrace = function (target, music) {
        var count = 0;
        _.each(target, function (targetLine, pitch) {
            _.each(targetLine, function (targetNote) {
                if (!_.some(music[pitch], function (note) {
                    return targetNote.start === note.start && targetNote.start + targetNote.extension === note.start + note.extension;
                }))
                    count++;
            });
        });
        return count;
    };
    Achievement.prototype.countRestFilling = function (blanks, unitNote, music) {
        var _this = this;
        var count = 0;
        _.each(blanks, function (blank) {
            for (var i = blank[0]; i <= blank[1]; i++)
                if (_.some(_this.constants.pitch, function (pitch) { return music.checkExist(pitch, unitNote, i); }))
                    return;
            count++;
        });
        return count;
    };
    Achievement.prototype.checkFinish = function () {
        if (!this.finished && this.isAchieved) {
            this.finished = true;
            this.onFinish.dispatch();
        }
    };
    return Achievement;
})(Model);
//# sourceMappingURL=Achievement.js.map