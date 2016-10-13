/// <reference path="../index.ref.ts"/>

class index
{
	private language: Language = new Language(new INDEX.Language);
	private userName: UserName = new UserName(new INDEX.UserName, this.language);
	private languageSelector: LanguageSelector = new LanguageSelector(new INDEX.LanguageSelector, this.language);
	private logInAndOutButton: LogInAndOutButton = new LogInAndOutButton(new INDEX.LogInAndOutButton, this.language);
	private registButton: RegistButton = new RegistButton(new INDEX.RegistButton, this.language);
    private logo: HTMLLogo = new HTMLLogo(new INDEX.HTMLLogo());
    private freeMakingMusic: ModeButton = new ModeButton(new INDEX.FreeMakingMusic(), this.language);
    private lesson: ModeButton = new ModeButton(new INDEX.Lesson, this.language);
}

window.onload = () => {
    $(() => { new index(); });
}