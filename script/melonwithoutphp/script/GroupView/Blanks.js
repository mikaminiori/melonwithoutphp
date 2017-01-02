/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Blanks = (function (_super) {
    __extends(Blanks, _super);
    function Blanks(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.lessonData = this.models["lessonData"];
        this.achievement = this.models["achievement"];
        this.setNotes();
    }
    Blanks.prototype.setNotes = function () {
        var _this = this;
        var unitWidth = this.constants.measureWidth / this.lessonData.getUnitNote;
        _.each(this.lessonData.getBlanks, function (blank) { _this.createBlank(blank, unitWidth); });
    };
    Blanks.prototype.createBlank = function (blank, unitWidth) {
        var instance = this.create(unitWidth * blank[0], 0, this.constants.images["blank"]);
        instance.width = unitWidth * (blank[1] - blank[0] + 1);
        instance.height = this.constants.height;
        instance.alpha = this.constants.opacity;
    };
    return Blanks;
})(GroupView);
//# sourceMappingURL=Blanks.js.map