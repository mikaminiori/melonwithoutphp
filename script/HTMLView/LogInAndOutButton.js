/// <reference path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LogInAndOutButton = (function (_super) {
    __extends(LogInAndOutButton, _super);
    function LogInAndOutButton(constants, language) {
        _super.call(this, constants);
        this.constants = constants;
        this.language = language;
        this.loggingIn = false;
        this.setView();
        this.setEvent();
    }
    LogInAndOutButton.prototype.checkNameInSession = function () {
        var name = "";
        $.ajax({
            url: this.constants.sessionGetUserName,
            async: false,
            success: function (data) { if (data != "")
                name = data; }
        });
        return name;
    };
    LogInAndOutButton.prototype.setView = function () {
        this.destination = this.constants.baseUrl + this.language.getLanguage;
        if (this.checkNameInSession() == "") {
            this.$.text(this.constants.logInText[this.language.getLanguage]);
            this.loggingIn = false;
            return;
        }
        this.$.text(this.constants.logOutText[this.language.getLanguage]);
        this.loggingIn = true;
    };
    LogInAndOutButton.prototype.setEvent = function () {
        var _this = this;
        this.$.hover(function () { return _this.enter(); }, function () { return _this.leave(); });
        this.$.click(function () { return _this.click(); });
        this.language.onChangeLanguage(function () { return _this.setView(); });
    };
    LogInAndOutButton.prototype.enter = function () {
        this.$.css("box-shadow", "0 0 20px 6px " + this.constants.shadowColor);
        this.audioPlay(this.audios["select"]);
    };
    LogInAndOutButton.prototype.leave = function () {
        this.$.css("box-shadow", "none");
    };
    LogInAndOutButton.prototype.logOut = function () {
        $.ajax({
            url: this.constants.sessionLogOut,
            async: false,
        });
    };
    LogInAndOutButton.prototype.click = function () {
        var _this = this;
        this.audioPlay(this.audios["decide"]);
        if (this.loggingIn) {
            this.logOut();
            setTimeout(function () { return document.location.reload(); }, 500);
            return;
        }
        setTimeout(function () { document.location = _this.destination; }, 500);
    };
    return LogInAndOutButton;
})(HTMLView);
//# sourceMappingURL=LogInAndOutButton.js.map