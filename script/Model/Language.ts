class Language
{
	private language: string;
	private jq: JQuery = $(this);
	private CHANGE_LANGUAGE: string = "changeLanguage";

	constructor(private constants: INDEX.Language) {
		this.checkNationarity();
	}

	private checkNationarity() {
		var nationarity = this.IECheck() ? window.navigator.browserLanguage : navigator.browserLanguage || navigator.language || navigator.userLanguage;
		if (this.constants.nationarities[nationarity]) {
			this.language = this.constants.nationarities[nationarity];
		} else this.language = this.constants.defaultLanguage;
		if ($.getUrlVar("lang")) this.language = $.getUrlVar("lang");
	}

	private IECheck(): boolean {
		var userAgent = window.navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('msie') == -1 && userAgent.indexOf('trident') != -1 || userAgent.indexOf('msie') != -1) return true;
		return false;
	}

	get getLanguage(){
		return this.language;
	}

	changeLanguage(language: string) {
		this.language = language;
		this.jq.triggerHandler(this.CHANGE_LANGUAGE);
	}

	onChangeLanguage(handler: () => any) {
		this.jq.bind(this.CHANGE_LANGUAGE, handler);
    }
}