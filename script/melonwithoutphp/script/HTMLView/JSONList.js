/// <reference path="../LessonList.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JSONList = (function (_super) {
    __extends(JSONList, _super);
    function JSONList(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.makeHeader();
        this.getJSON();
    }
    JSONList.prototype.getJSON = function () {
        var _this = this;
        $.ajaxSetup({ async: false });
        $.getJSON(this.constants.listUrl, function (data) { _this.makeList(data); });
        $.ajaxSetup({ async: true });
    };
    JSONList.prototype.makeHeader = function () {
        var header = $("<tr></tr>");
        header.append($("<th></th>").append(this.constants.title[this.constants.language]));
        header.append($("<th></th>").append(this.constants.description[this.constants.language]));
        this.$.append(header);
    };
    JSONList.prototype.makeRow = function (lesson, title) {
        if (!lesson["public"])
            return;
        var row = $("<tr></tr>");
        row.append($("<td><a href=" + (this.constants.practiceModeUrl + title) + ">" + title + "</a></td>")
            .addClass(this.constants.childClasses["title"]));
        row.append($("<td></td>").append(lesson["description"])
            .addClass(this.constants.childClasses["description"]));
        this.$.append(row);
    };
    JSONList.prototype.makeList = function (list) {
        var _this = this;
        _.each(list, function (lesson, title) { _this.makeRow(lesson, title); });
    };
    return JSONList;
})(HTMLView);
//# sourceMappingURL=JSONList.js.map