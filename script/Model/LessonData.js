/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LessonData = (function (_super) {
    __extends(LessonData, _super);
    function LessonData(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.getLessonData();
    }
    LessonData.prototype.getLessonData = function () {
        var _this = this;
        $.ajaxSetup({ error: function () { _this.ajaxError(); } });
        $.getJSON(this.constants.listUrl, function (list) {
            var lessonInfo = list[$.getUrlVar("lesson")];
            if (!lessonInfo)
                _this.ajaxError();
            $.getJSON(lessonInfo["url"], function (data, status) { _this.importLessonData(data); });
            if ($.getUrlVar("inherit")) {
                $.getJSON(list[$.getUrlVar("inherit")]["url"], function (data) { _this.inherit = data["music"]; });
            }
        });
    };
    LessonData.prototype.ajaxError = function () {
        alert(this.constants.errorMsg[this.constants.language]);
        document.location = this.constants.defaultUrl;
    };
    LessonData.prototype.importLessonData = function (data) {
        this.title = data["title"];
        this.target = data["music"];
        this.mode = data["mode"];
        this.lecture = data["lecture"];
        this.makeNextUrl(data);
        if (this.mode === "filling")
            this.importFillingLessonData(data);
    };
    LessonData.prototype.makeNextUrl = function (data) {
        if (data["next"]) {
            this.nextUrl = "Lesson.html?lang=" + LESSON.language + "&lesson=" + data["next"];
            if (data["passNext"] === true)
                this.nextUrl += "&inherit=" + data["title"];
        }
        else
            this.nextUrl = this.constants.defaultUrl;
    };
    LessonData.prototype.importFillingLessonData = function (data) {
        this.unitNote = data["unitNote"];
        this.blanks = data["blank"];
    };
    Object.defineProperty(LessonData.prototype, "getTitle", {
        get: function () { return this.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getMode", {
        get: function () { return this.mode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getTargetMusic", {
        get: function () { return this.target; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getNextUrl", {
        get: function () { return this.nextUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getUnitNote", {
        get: function () { return this.unitNote; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getBlanks", {
        get: function () { return this.blanks; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getInherit", {
        get: function () { return this.inherit; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LessonData.prototype, "getLecture", {
        get: function () { return this.lecture; },
        enumerable: true,
        configurable: true
    });
    LessonData.prototype.isInTargetBlank = function (position) {
        return _.some(this.blanks, function (blank) {
            return blank[0] <= position && position <= blank[1];
        });
    };
    LessonData.prototype.existsInTargetBlank = function (note) {
        var end = note.start + note.extension;
        for (var i = note.start; i <= end; i++)
            if (!this.isInTargetBlank(i))
                return false;
        return true;
    };
    LessonData.prototype.isInTargetMusic = function (pitch, position) {
        return _.some(this.target[pitch], function (note) {
            return note.start <= position && position <= note.start + note.extension;
        });
    };
    LessonData.prototype.existsInTargetMusic = function (note) {
        if (this.blanks && this.existsInTargetBlank(note))
            return true;
        return _.some(this.target[note.pitch], function (targetNote) {
            return targetNote.start === note.start && targetNote.start + targetNote.extension === note.start + note.extension;
        });
    };
    return LessonData;
})(Model);
//# sourceMappingURL=LessonData.js.map