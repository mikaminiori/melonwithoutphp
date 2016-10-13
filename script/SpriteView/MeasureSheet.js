/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MeasureSheet = (function (_super) {
    __extends(MeasureSheet, _super);
    function MeasureSheet(game, constants, models, measure) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.measure = measure;
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.musicPlayer = this.models["musicPlayer"];
        this.pointer = this.game.device.touch ? this.game.input.pointer1 : this.game.input.activePointer;
        this.setPosition(this.constants.width * this.measure, 0);
    }
    MeasureSheet.prototype.setInput = function () {
        var _this = this;
        this.inputEnabled = true;
        this.events.onInputDown.add(function (self, pointer) { return _this.createNote(pointer); });
        this.events.onInputUp.add(function () { return _this.music.refresh(); });
    };
    MeasureSheet.prototype.isCreatable = function (pointer) {
        if (this.musicPlayer.isPlaying || pointer.rightButton.isDown)
            return false;
        if (this.stationery.getStationery !== this.constants.writeStationery)
            return false;
        return true;
    };
    MeasureSheet.prototype.calcPitch = function (pointer) {
        return this.constants.pitch[Math.floor((this.pointer.y + this.game.camera.y) / this.constants.noteHeight)];
    };
    MeasureSheet.prototype.calcPosition = function (pointer) {
        return Math.floor((this.pointer.x + this.game.camera.x) / this.constants.noteWidth);
    };
    MeasureSheet.prototype.createNote = function (pointer) {
        if (!this.isCreatable(pointer))
            return;
        var pitch = this.calcPitch(pointer);
        var start = this.calcPosition(pointer);
        this.music.write({ pitch: pitch, unitNote: this.constants.unitNote, start: start, extension: 0 });
    };
    return MeasureSheet;
})(SpriteView);
var LessonMeasureSheet = (function (_super) {
    __extends(LessonMeasureSheet, _super);
    function LessonMeasureSheet(game, constants, models, measure) {
        _super.call(this, game, constants, models, measure);
        this.lessonData = this.models["lessonData"];
        this.achievement = this.models["achievement"];
        this.setMessage(constants);
        this.setModal();
    }
    LessonMeasureSheet.prototype.setInput = function () {
        var _this = this;
        this.inputEnabled = true;
        this.events.onInputDown.add(function (self, pointer) { return _this.inputSheetDown(pointer); });
        this.events.onInputUp.add(function (self, pointer) { return _this.inputSheetUp(pointer); });
    };
    LessonMeasureSheet.prototype.inputSheetDown = function (pointer) {
        if (pointer.leftButton.isDown && !this.musicPlayer.isPlaying && !this.achievement.playAlertCheck())
            return;
        if (!this.checkLessonData(pointer))
            return;
        this.createNote(pointer);
    };
    LessonMeasureSheet.prototype.inputSheetUp = function (pointer) {
        var note = this.music.getSelectedNote;
        if (!note || !this.lessonData.isInTargetBlank(note.start) || this.lessonData.existsInTargetBlank(note))
            return this.music.refresh();
        this.music.erase(note);
        this.modalWindow.alert(this.prohibitedMsg);
    };
    LessonMeasureSheet.prototype.setMessage = function (constants) {
        switch (this.lessonData.getMode) {
            case constants.mode.tracing:
                this.prohibitedMsg = constants.traceMsg;
                break;
            case constants.mode.filling:
                this.prohibitedMsg = constants.fillingMsg;
                break;
            default:
                this.prohibitedMsg = constants.traceMsg;
                break;
        }
    };
    LessonMeasureSheet.prototype.setModal = function () {
        var _this = this;
        this.modalWindow = new ModalWindow(this.game, new CONSTANTS.ModalWindow, {});
        this.modalWindow.onOpen.add(function () { return _this.game.sound.play("boo"); });
        this.modalWindow.onOk.add(function () { return _this.game.sound.play("decide"); });
    };
    LessonMeasureSheet.prototype.checkLessonData = function (pointer) {
        if (!this.isCreatable(pointer))
            return false;
        var pitch = this.calcPitch(pointer);
        var start = this.calcPosition(pointer);
        if (this.lessonData.isInTargetBlank(start))
            return true;
        if (!this.lessonData.isInTargetMusic(pitch, start)) {
            this.modalWindow.alert(this.prohibitedMsg);
            return false;
        }
        return true;
    };
    return LessonMeasureSheet;
})(MeasureSheet);
//# sourceMappingURL=MeasureSheet.js.map