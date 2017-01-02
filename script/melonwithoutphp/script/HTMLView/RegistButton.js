/// <reference path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RegistButton = (function (_super) {
    __extends(RegistButton, _super);
    function RegistButton(constants, language) {
        _super.call(this, constants);
        this.constants = constants;
        this.language = language;
        this.setView();
        this.setEvent();
    }
    RegistButton.prototype.setView = function () {
        this.$.text(this.constants.registText[this.language.getLanguage]);
        this.destination = this.constants.baseUrl + this.language.getLanguage;
    };
    RegistButton.prototype.setEvent = function () {
        var _this = this;
        this.$.hover(function () { return _this.enter(); }, function () { return _this.leave(); });
        this.$.click(function () { return _this.click(); });
        this.language.onChangeLanguage(function () { return _this.setView(); });
    };
    RegistButton.prototype.enter = function () {
        this.$.css("box-shadow", "0 0 20px 6px " + this.constants.shadowColor);
        this.audioPlay(this.audios["select"]);
    };
    RegistButton.prototype.leave = function () {
        this.$.css("box-shadow", "none");
    };
    RegistButton.prototype.click = function () {
        var _this = this;
        this.audioPlay(this.audios["decide"]);
        setTimeout(function () { document.location = _this.destination; }, 500);
    };
    return RegistButton;
})(HTMLView);
//# sourceMappingURL=RegistButton.js.map