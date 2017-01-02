/// <reference path="../FreeMakingMusic.ref.ts"/>

// This class is super class of each DOM element View.
// Inheritance of this class means the child class is one of DOM element View(Concrete Observer).

class DOMView {
    protected $: JQuery;

    // DOMObjects have reference of their models. 
    // This is object. So it's recommended to get each model in child classes.
    constructor(protected game: Phaser.Game, constants: CONSTANTS.DOMView, protected models: Object) {
        // DOMObjects have their own Element of jQuery by using selector.
        this.$ = $(constants.selector);
    }

    protected pushEvent(): string {
        return this.game.device.touch ? "touchstart" : "mousedown";
    }

	protected pullEvent(): string {
        return this.game.device.touch ? "touchend" : "mouseup";
    }

    protected toId(name: string): string {
        return "#" + name;
    }

    protected makeDiv(id: string): JQuery {
        return $(`<div id=${id}></div>`);
    }

	protected IECheck(): boolean {
		var userAgent = window.navigator.userAgent.toLowerCase();
		if (userAgent.indexOf('msie') == -1 && userAgent.indexOf('trident') != -1 || userAgent.indexOf('msie') != -1) return true;
		return false;
	}
}