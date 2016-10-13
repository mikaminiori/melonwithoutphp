/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Notes = (function (_super) {
    __extends(Notes, _super);
    function Notes(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.stationery = this.models["stationery"];
        this.noteOverlapManager = this.models["noteOverlapManager"];
        this.selectedNote = null;
        this.setEvent();
    }
    Notes.prototype.setEvent = function () {
        var _this = this;
        this.music.onSelect.add(function () { return _this.select(); });
        this.music.onRefresh.add(function () { return _this.refreshSelect(); });
        this.music.onWrite.add(function () { return _this.addNote(); });
        this.music.onErase.add(function () { return _this.removeNote(); });
    };
    Notes.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this, true);
    };
    Notes.prototype.select = function () {
        var _this = this;
        this.selectedNote = _.find(this.children, function (note) { return _.isEqual(note.getNoteData, _this.music.getSelectedNote); });
    };
    Notes.prototype.refreshSelect = function () {
        this.selectedNote = null;
    };
    Notes.prototype.addNote = function () {
        this.selectedNote = this.add(new Note(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
    };
    Notes.prototype.removeNote = function () {
        if (!this.selectedNote)
            return;
        this.noteOverlapManager.removeNote(this.selectedNote);
        this.selectedNote.destroy();
    };
    Notes.prototype.update = function () {
        if (this.selectedNote)
            this.selectedNote.update();
    };
    return Notes;
})(GroupView);
var LessonNotes = (function (_super) {
    __extends(LessonNotes, _super);
    function LessonNotes() {
        _super.apply(this, arguments);
        this.achievement = this.models["achievement"];
        this.lessonData = this.models["lessonData"];
    }
    LessonNotes.prototype.refreshSelect = function () {
        _super.prototype.refreshSelect.call(this);
        this.checkNum();
        this.achievement.checkFinish();
    };
    LessonNotes.prototype.countRed = function () {
        var _this = this;
        return _.filter(this.children, function (note) { return note.key === _this.constants.prohibitedImage; }).length;
    };
    LessonNotes.prototype.addNote = function () {
        this.selectedNote = this.add(new LessonNote(this.game, new CONSTANTS.Note, this.models, this.music.getSelectedNote));
        this.noteOverlapManager.addNote(this.selectedNote);
    };
    LessonNotes.prototype.checkNum = function () {
        this.achievement.changeRedNum = this.countRed();
        this.achievement.changeRestTraceNum = this.achievement.countRestTrace(this.lessonData.getTargetMusic, this.music.getMusic);
        this.achievement.changeRestFillingNum = this.achievement.countRestFilling(this.lessonData.getBlanks, this.lessonData.getUnitNote, this.music);
    };
    return LessonNotes;
})(Notes);
//# sourceMappingURL=Notes.js.map