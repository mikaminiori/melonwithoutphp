/// <reference path="../index.ref.ts"/>
var index = (function () {
    function index() {
        this.language = new Language(new INDEX.Language);
        this.userName = new UserName(new INDEX.UserName, this.language);
        this.languageSelector = new LanguageSelector(new INDEX.LanguageSelector, this.language);
        this.logInAndOutButton = new LogInAndOutButton(new INDEX.LogInAndOutButton, this.language);
        this.registButton = new RegistButton(new INDEX.RegistButton, this.language);
        this.logo = new HTMLLogo(new INDEX.HTMLLogo());
        this.freeMakingMusic = new ModeButton(new INDEX.FreeMakingMusic(), this.language);
        this.lesson = new ModeButton(new INDEX.Lesson, this.language);
    }
    return index;
})();
window.onload = function () {
    $(function () { new index(); });
};
//# sourceMappingURL=index.js.map