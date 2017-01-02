/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RestDisplay = (function (_super) {
    __extends(RestDisplay, _super);
    function RestDisplay(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.achievement = this.models["achievement"];
        this.achievement.onChangeNum.add(function () { return _this.changeNum(); });
        this.$.addClass(this.constants.cssClass);
    }
    RestDisplay.prototype.changeNum = function () {
    };
    RestDisplay.prototype.display = function (num) {
        if (num === 0)
            this.$.addClass(this.constants.completeFont).removeClass(this.constants.incompleteFont);
        else
            this.$.addClass(this.constants.incompleteFont).removeClass(this.constants.completeFont);
        this.$.text(num.toString());
    };
    return RestDisplay;
})(DOMView);
var ProhibitedDisplay = (function (_super) {
    __extends(ProhibitedDisplay, _super);
    function ProhibitedDisplay() {
        _super.apply(this, arguments);
    }
    ProhibitedDisplay.prototype.changeNum = function () {
        this.display(this.achievement.redNum);
    };
    return ProhibitedDisplay;
})(RestDisplay);
var TraceDisplay = (function (_super) {
    __extends(TraceDisplay, _super);
    function TraceDisplay() {
        _super.apply(this, arguments);
    }
    TraceDisplay.prototype.changeNum = function () {
        this.display(this.achievement.restTraceNum);
    };
    return TraceDisplay;
})(RestDisplay);
var FillingDisplay = (function (_super) {
    __extends(FillingDisplay, _super);
    function FillingDisplay() {
        _super.apply(this, arguments);
    }
    FillingDisplay.prototype.changeNum = function () {
        this.display(this.achievement.restFillingNum);
    };
    return FillingDisplay;
})(RestDisplay);
//# sourceMappingURL=RestDisplay.js.map