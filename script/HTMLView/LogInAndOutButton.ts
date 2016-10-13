/// <reference path="../index.ref.ts"/>

class LogInAndOutButton extends HTMLView {

	private loggingIn: boolean = false;
	private destination: string;

	constructor(private constants: INDEX.LogInAndOutButton, private language: Language) {
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
		this.destination = this.constants.baseUrl + this.language.getLanguage;
		if (this.checkNameInSession() == "") {
			this.$.text(this.constants.logInText[this.language.getLanguage]);
			this.loggingIn = false;
			return;
		}
		this.$.text(this.constants.logOutText[this.language.getLanguage]);
		this.loggingIn = true;
	}

	private setEvent() {
		this.$.hover(() => this.enter(), () => this.leave());
		this.$.click(() => this.click());
		this.language.onChangeLanguage(() => this.setView());
	}

	private enter() {
        this.$.css("box-shadow", `0 0 20px 6px ${this.constants.shadowColor}`);
		this.audioPlay(this.audios["select"]);
    }

    private leave() {
        this.$.css("box-shadow", "none");
    }

	private logOut() {
		$.ajax({
			url: this.constants.sessionLogOut,
			async: false,
		});
	}

	private click() {
        this.audioPlay(this.audios["decide"]);
		if (this.loggingIn) {
			this.logOut();
			setTimeout(() => document.location.reload(), 500);
			return;
		}
        setTimeout(() => { document.location = <any>this.destination; }, 500);
    }
}