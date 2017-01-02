/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TargetNotes = (function (_super) {
    __extends(TargetNotes, _super);
    function TargetNotes(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.lessonData = this.models["lessonData"];
        this.achievement = this.models["achievement"];
        this.setNotes();
    }
    TargetNotes.prototype.setNotes = function () {
        var _this = this;
        _.each(this.lessonData.getTargetMusic, function (line) {
            _.each(line, function (note) { _this.createNote(note); });
        });
    };
    TargetNotes.prototype.createNote = function (note) {
        var unitWidth = this.constants.measureWidth / note.unitNote;
        var x = unitWidth * note.start;
        var y = this.constants.pitch.indexOf(note.pitch) * this.constants.noteHeight;
        var instance = this.create(x, y, this.constants.images[this.constants.initImage]);
        instance.width = unitWidth * (note.extension + 1);
        instance.height = this.constants.noteHeight;
        instance.blendMode = PIXI.blendModes.ADD;
        instance.alpha = this.constants.opacity;
        instance.tint = this.constants.color;
    };
    return TargetNotes;
})(GroupView);
//# sourceMappingURL=TargetNotes.js.map