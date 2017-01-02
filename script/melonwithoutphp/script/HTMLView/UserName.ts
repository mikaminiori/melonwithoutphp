/// <reference path="../index.ref.ts"/>

class UserName extends HTMLView {
	constructor(private constants: INDEX.UserName, private language: Language) {
		super(constants);
		this.setView();
		this.setEvent();
	}

	private checkNameInSession(): string {
		var name: string = "";
		$.ajax({
			url: this.constants.sessionGetUserName,
			async: false,
			success: (data: string) => { if (data != "") name = data; }
		});
		return name;
	}

	private setView() {
		var lang: string = this.language.getLanguage;
		var name: string = this.checkNameInSession();
		if (name == "") {
			name = this.constants.guestText[lang];
			this.$.css("color", "white");
		}
		this.$.text(this.constants.welcomeText[lang] + name + this.constants.honorText[lang]);
	}

	private setEvent() {
		this.language.onChangeLanguage(() => this.setView());
	}
}

class UserNameWithMelOn extends HTMLView {
	constructor(private constants: INDEX.UserName, private language: string) {
		super(constants);
		this.setView();
	}

	private checkNameInSession(): string {
		var name: string = "";
		$.ajax({
			url: this.constants.sessionGetUserName,
			async: false,
			success: (data: string) => { if (data != "") name = data; }
		});
		return name;
	}

	private setView() {
		var lang: string = this.language;
		var name: string = this.checkNameInSession();
		if (name == "") {
			name = this.constants.guestText[lang];
			this.$.css("color", "white");
		}
		this.$.text(this.constants.welcomeText[lang] + name + this.constants.honorText[lang]);
	}
}