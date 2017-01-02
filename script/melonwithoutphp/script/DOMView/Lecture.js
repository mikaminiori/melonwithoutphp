/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lecture = (function (_super) {
    __extends(Lecture, _super);
    function Lecture(constants, models) {
        _super.call(this, constants);
        this.constants = constants;
        this.models = models;
        this.lessonData = this.models["lessonData"];
        this.$.append(this.makeTitle(this.lessonData.getTitle));
        this.makeLecture(this.lessonData.getLecture);
    }
    Lecture.prototype.makeTitle = function (title) {
        return $("<div id=" + this.constants.titleId + "></div>").text(title);
    };
    Lecture.prototype.makeLecture = function (lecture) {
        var _this = this;
        lecture.forEach(function (block) {
            _this.$.append(_this.makeBalloon(block));
            _this.$.append(_this.makePerson(block["person"]));
        });
    };
    Lecture.prototype.makeBalloon = function (block) {
        return $("<div></div>").addClass(this.constants.commonClass.balloon)
            .css("background-color", this.constants.balloonColor[block["person"]]).append(block["speech"]);
    };
    Lecture.prototype.makeTriangle = function (person) {
        return $("<div></div>").addClass(this.constants.commonClass.triangle)
            .css("border-top-color", this.constants.balloonColor[person]);
    };
    Lecture.prototype.makeImage = function (person) {
        return $("<img src=" + this.constants.images[person] + " />");
    };
    Lecture.prototype.makePerson = function (person) {
        return $("<div id=" + this.constants.personIds[person] + "></div>").addClass(this.constants.commonClass.person)
            .append(this.makeTriangle(person)).append(this.makeImage(person));
    };
    return Lecture;
})(HTMLView);
//# sourceMappingURL=Lecture.js.map