var Language = (function () {
    function Language(constants) {
        this.constants = constants;
        this.jq = $(this);
        this.CHANGE_LANGUAGE = "changeLanguage";
        this.checkNationarity();
    }
    Language.prototype.checkNationarity = function () {
        var nationarity = this.IECheck() ? window.navigator.browserLanguage : navigator.browserLanguage || navigator.language || navigator.userLanguage;
        if (this.constants.nationarities[nationarity]) {
            this.language = this.constants.nationarities[nationarity];
        }
        else
            this.language = this.constants.defaultLanguage;
        if ($.getUrlVar("lang"))
            this.language = $.getUrlVar("lang");
    };
    Language.prototype.IECheck = function () {
        var userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('msie') == -1 && userAgent.indexOf('trident') != -1 || userAgent.indexOf('msie') != -1)
            return true;
        return false;
    };
    Object.defineProperty(Language.prototype, "getLanguage", {
        get: function () {
            return this.language;
        },
        enumerable: true,
        configurable: true
    });
    Language.prototype.changeLanguage = function (language) {
        this.language = language;
        this.jq.triggerHandler(this.CHANGE_LANGUAGE);
    };
    Language.prototype.onChangeLanguage = function (handler) {
        this.jq.bind(this.CHANGE_LANGUAGE, handler);
    };
    return Language;
})();
//# sourceMappingURL=Language.js.map