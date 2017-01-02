/// <reference path="../index.ref.ts"/>
var LessonList = (function () {
    function LessonList() {
        var _this = this;
        this.returnTop = "#returnTop";
        this.logo = new HTMLLogo(new INDEX.HTMLLogo());
        this.list = new JSONList(new LESSON_LIST.JSONList());
        var language = new LESSON_LIST.Language().language;
        var userName = new UserNameWithMelOn(new LESSON_LIST.UserName, language);
        $("#choose").text(new LESSON_LIST.choose().script[language]);
        $(this.returnTop).text(new CONSTANTS.ReturnTopButton().text[language])
            .hover(function () { return _this.enter(); }, function () { return _this.leave(); })
            .click(function () { return _this.click(); });
    }
    LessonList.prototype.enter = function () {
        $(this.returnTop).css("box-shadow", "0 0 20px 6px lavender");
        new Audio("../storage/assets/sound/se/select.mp3").play();
    };
    LessonList.prototype.leave = function () {
        $(this.returnTop).css("box-shadow", "none");
    };
    LessonList.prototype.click = function () {
        new Audio("../storage/assets/sound/se/decide.mp3").play();
        setTimeout(function () { return document.location = "index.html"; }, 500);
    };
    return LessonList;
})();
window.onload = function () {
    $.ajaxSetup({ async: false, cache: false });
    $(function () { new LessonList(); });
};
//# sourceMappingURL=LessonList.js.map