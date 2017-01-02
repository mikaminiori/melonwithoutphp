/// <reference path="../FreeMakingMusic.ref.ts"/>

class ReturnButton extends DOMView{
	private modal: ModalWindow;
		
	constructor(game: Phaser.Game, private constants: CONSTANTS.ReturnButton) {
		super(game, constants, {});
		this.modal = new ModalWindow(game, new CONSTANTS.ModalWindow, {});
		this.setView();
		this.setEvent();
	}

	private setView() {
		this.$.text(this.constants.text[this.constants.language]);
	}

	private setEvent() {
		this.$.hover(() => this.enter(), () => this.leave());
		this.$.click(() => this.confirm());
	}

	private enter() {
        this.$.css("box-shadow", `0 0 20px 6px ${this.constants.shadowColor}`);
        this.game.sound.play("select");
    }

    private leave() {
        this.$.css("box-shadow", "none");
    }

	private confirm() {
		this.game.sound.play("load");
		this.modal.confirm(this.constants.confirmMsg)
		this.modal.onYes.add(() => this.move());
		this.modal.onNo.add(() => this.game.sound.play("close"));
	}

	private move() {
		this.game.sound.play("decide");
	    setTimeout(() => document.location = <any>this.constants.destination, 500);
	}
}