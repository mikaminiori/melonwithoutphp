/// <reference path="../index.ref.ts"/>

class LessonList {
	private returnTop: string = "#returnTop";
    private logo: HTMLLogo = new HTMLLogo(new INDEX.HTMLLogo());
    private list: JSONList = new JSONList(new LESSON_LIST.JSONList());

    constructor() {
		var language = new LESSON_LIST.Language().language;
		var userName: UserNameWithMelOn = new UserNameWithMelOn(new LESSON_LIST.UserName, language);
        $("#choose").text(new LESSON_LIST.choose().script[language]);
		$(this.returnTop).text(new CONSTANTS.ReturnTopButton().text[language])
			.hover(() => this.enter(), () => this.leave())
			.click(() => this.click());
    }

	private enter() {
        $(this.returnTop).css("box-shadow", `0 0 20px 6px lavender`);
		new Audio("../storage/assets/sound/se/select.mp3").play();
    }

    private leave() {
        $(this.returnTop).css("box-shadow", "none");
    }

	private click() {
		new Audio("../storage/assets/sound/se/decide.mp3").play();
		setTimeout(() => document.location = <any>"index.html", 500);
	}
}

window.onload = () => {
    $.ajaxSetup({ async: false, cache: false });
    $(() => { new LessonList(); });
}