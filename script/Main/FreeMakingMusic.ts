/// <reference path="../FreeMakingMusic.ref.ts"/>

class FreeMakingMusic extends Phaser.Game {

	private userName: UserNameWithMelOn;
	private returnTopButton: ReturnButton = new ReturnButton(this, new CONSTANTS.ReturnTopButton);
    private logo: Logo = new Logo(this, new CONSTANTS.Logo, {});

    constructor(private assets: AssetLoader, constants: CONSTANTS.MelOn) {
        super(constants.width, constants.height, Phaser.AUTO, constants.renderer);
		this.userName = new UserNameWithMelOn(new CONSTANTS.UserName, $.getUrlVar("lang"));
        this.setMelOn(constants.selector);
        this.createElements(constants.selector, constants.elements);
        this.setStates();
        this.start();
    }

    protected setMelOn(selector: string) {
        $(selector).on("contextmenu", () => { return false; }).on("selectstart", () => { return false; })
            .append($(`<img id="calyx" src="storage/assets/image/game/melon.png" />`));
    }

    protected createElements(parentSelector: string, elementIds: string[]) {
        var parent = $(parentSelector);
        for (var element of elementIds) parent.append(`<div id=${element}></div>`);
    }

    protected setStates() {
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', MelOn, false);
    }

    protected start() {
        this.state.start('Boot', false, false, this.assets);
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $(() => { new FreeMakingMusic(new MelOnAssets, new CONSTANTS.MelOn); });
}