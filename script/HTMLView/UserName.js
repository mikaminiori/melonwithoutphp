/// <reference path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserName = (function (_super) {
    __extends(UserName, _super);
    function UserName(constants, language) {
        _super.call(this, constants);
        this.constants = constants;
        this.language = language;
        this.setView();
        this.setEvent();
    }
    UserName.prototype.checkNameInSession = function () {
        var name = "";
        $.ajax({
            url: this.constants.sessionGetUserName,
            async: false,
            success: function (data) { if (data != "")
                name = data; }
        });
        return name;
    };
    UserName.prototype.setView = function () {
        var lang = this.language.getLanguage;
        var name = this.checkNameInSession();
        if (name == "") {
            name = this.constants.guestText[lang];
            this.$.css("color", "white");
        }
        this.$.text(this.constants.welcomeText[lang] + name + this.constants.honorText[lang]);
    };
    UserName.prototype.setEvent = function () {
        var _this = this;
        this.language.onChangeLanguage(function () { return _this.setView(); });
    };
    return UserName;
})(HTMLView);
var UserNameWithMelOn = (function (_super) {
    __extends(UserNameWithMelOn, _super);
    function UserNameWithMelOn(constants, language) {
        _super.call(this, constants);
        this.constants = constants;
        this.language = language;
        this.setView();
    }
    UserNameWithMelOn.prototype.checkNameInSession = function () {
        var name = "";
        $.ajax({
            url: this.constants.sessionGetUserName,
            async: false,
            success: function (data) { if (data != "")
                name = data; }
        });
        return name;
    };
    UserNameWithMelOn.prototype.setView = function () {
        var lang = this.language;
        var name = this.checkNameInSession();
        if (name == "") {
            name = this.constants.guestText[lang];
            this.$.css("color", "white");
        }
        this.$.text(this.constants.welcomeText[lang] + name + this.constants.honorText[lang]);
    };
    return UserNameWithMelOn;
})(HTMLView);
//# sourceMappingURL=UserName.js.map