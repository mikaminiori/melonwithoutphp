/// <referense path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LanguageSelector = (function (_super) {
    __extends(LanguageSelector, _super);
    function LanguageSelector(constants, language) {
        var _this = this;
        _super.call(this, constants);
        this.constants = constants;
        this.language = language;
        this.setView();
        this.$.change(function () { return _this.changeLanguage(); });
    }
    LanguageSelector.prototype.setView = function () {
        var _this = this;
        _.each(this.constants.options, function (name, value) { return _this.$.append("<option value=" + value + ">" + name + "</option>"); });
        this.$.val(this.language.getLanguage);
    };
    LanguageSelector.prototype.changeLanguage = function () {
        this.audioPlay(this.audios["decide"]);
        this.language.changeLanguage(this.$.val());
    };
    return LanguageSelector;
})(HTMLView);
//# sourceMappingURL=LanguageSelector.js.map