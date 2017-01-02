/// <referense path="../index.ref.ts"/>

class LanguageSelector extends HTMLView {
		constructor(private constants: INDEX.LanguageSelector, private language: Language) {
				super(constants);
				this.setView();
				this.$.change(() => this.changeLanguage());
		}

		private setView() {
				_.each(this.constants.options, (name, value) => this.$.append(`<option value=${value}>${name}</option>`));
				this.$.val(this.language.getLanguage);
		}

		private changeLanguage() {
			this.audioPlay(this.audios["decide"]);
			this.language.changeLanguage(this.$.val());
		}
}