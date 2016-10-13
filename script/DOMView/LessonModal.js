/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LessonModal = (function (_super) {
    __extends(LessonModal, _super);
    function LessonModal(game, constants, models) {
        _super.call(this, game, constants.modalConstants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.achievement = this.models["achievement"];
        this.setEvents();
    }
    LessonModal.prototype.setEvents = function () {
        var _this = this;
        this.achievement.onFinish.add(function () { return _this.finish(); });
        this.achievement.onPlayAlert.add(function () { return _this.playAlert(); });
        this.achievement.onStopAlert.add(function () { return _this.stopAlert(); });
        this.achievement.onActivate.add(function () { return _this.activate(); });
    };
    LessonModal.prototype.finish = function () {
        this.game.sound.play("load");
        this.alert(this.constants.TryMsg);
        this.music.refresh();
    };
    LessonModal.prototype.playAlert = function () {
        this.game.sound.play("boo");
        this.alert(this.constants.playMsg);
    };
    LessonModal.prototype.stopAlert = function () {
        this.alert(this.constants.stopMsg);
    };
    LessonModal.prototype.activate = function () {
        this.game.sound.play("save");
        this.alert(this.constants.goNextMsg);
    };
    return LessonModal;
})(ModalWindow);
//# sourceMappingURL=LessonModal.js.map