/// <reference path="../FreeMakingMusic.ref.ts"/>
/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScoreSheet = (function (_super) {
    __extends(ScoreSheet, _super);
    function ScoreSheet(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        _.times(this.constants.measureNum, function () { _this.addMeasure(); });
        this.updateScoreHeight();
    }
    ScoreSheet.prototype.addMeasure = function () {
        this.add(new MeasureSheet(this.game, new CONSTANTS.MeasureSheet, this.models, this.children.length));
        this.updateScoreWidth();
    };
    ScoreSheet.prototype.reduceMeasure = function () {
        this.children.pop();
        this.updateScoreWidth();
    };
    ScoreSheet.prototype.updateScoreWidth = function () {
        this.game.camera.bounds.width = this.constants.width * this.children.length;
        this.game.world.bounds.width = this.constants.width * this.children.length;
    };
    ScoreSheet.prototype.updateScoreHeight = function () {
        this.game.camera.bounds.height = this.constants.height;
        this.game.world.bounds.height = this.constants.height;
    };
    return ScoreSheet;
})(GroupView);
var LessonScoreSheet = (function (_super) {
    __extends(LessonScoreSheet, _super);
    function LessonScoreSheet() {
        _super.apply(this, arguments);
        this.LessonData = this.models["lessonData"];
    }
    LessonScoreSheet.prototype.addMeasure = function () {
        this.add(new LessonMeasureSheet(this.game, new LESSON.LessonMeasureSheet, this.models, this.children.length));
        this.updateScoreWidth();
    };
    return LessonScoreSheet;
})(ScoreSheet);
//# sourceMappingURL=ScoreSheet.js.map