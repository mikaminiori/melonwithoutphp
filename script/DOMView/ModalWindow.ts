/// <reference path="../FreeMakingMusic.ref.ts"/>

class ModalWindow extends DOMView {

    protected lang: string;

	onOpen: Phaser.Signal = new Phaser.Signal();
    onClose: Phaser.Signal = new Phaser.Signal();
    onOk: Phaser.Signal = new Phaser.Signal();
    onYes: Phaser.Signal = new Phaser.Signal();
    onNo: Phaser.Signal = new Phaser.Signal();

    constructor(game: Phaser.Game, private modalConstants: CONSTANTS.ModalWindow, models: Object) {
        super(game, modalConstants, models);
        this.lang = modalConstants.language;
    }

    private open() {
        this.refleshEvents();
        this.close();
		this.onOpen.dispatch();
		window.onscroll = () => window.scrollTo(window.scrollX, window.scrollY);
        $(window).on('touchmove.noScroll', (e) => { e.preventDefault(); });
    }

    private close() {
        window.onscroll = null;
        $(window).off('.noScroll');
        var overlay = $(this.toId(this.modalConstants.modalIds.overlay));
        overlay.fadeOut(() => { overlay.remove(); });
    }

    private refleshEvents() {
        this.onClose.dispatch();
        this.onClose.removeAll();
        this.onOk.removeAll();
        this.onYes.removeAll();
        this.onNo.removeAll();
    }

    private makeOverlay(): JQuery {
        var id = this.modalConstants.modalIds.overlay;
        return this.makeDiv(id).on(this.pushEvent(), (e) => {
            if (e.target.id === id) { this.game.sound.play("close"); this.close(); }
        });
    }

    private makeButton(id: string, text: string): JQuery {
        var button = this.makeDiv(id).addClass(this.modalConstants.modalClasses.button).text(text);
        return button.hover(() => { button.css("box-shadow", "0 0 10px 3px orange"); this.game.sound.play("select") },
            () => { button.css("box-shadow", "none"); })
            .on(this.pushEvent(), () => { this.close(); });
    }

    private makeMessage(text: string): JQuery {
        return this.makeDiv(this.modalConstants.modalIds.message).append(text);
    }

    private makeWindow(): JQuery {
        return this.makeDiv(this.modalConstants.modalIds.window);
    }

    private alertAssemble(text: string): JQuery {
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var okButton = this.makeButton(this.modalConstants.modalIds.ok, this.modalConstants.okText[this.lang])
            .on(this.pushEvent(), () => { this.game.sound.play("decide"); this.onOk.dispatch(); });
        window.append(message).append(okButton);
        return overlay.append(window);
    }

    private confirmAssemble(text: string): JQuery {
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var yesButton = this.makeButton(this.modalConstants.modalIds.yes, this.modalConstants.yesText[this.lang])
            .on(this.pushEvent(), () => { this.onYes.dispatch(); });
        var noButton = this.makeButton(this.modalConstants.modalIds.no, this.modalConstants.noText[this.lang])
            .on(this.pushEvent(), () => { this.onNo.dispatch(); });
        window.append(message).append(yesButton).append(noButton);
        return overlay.append(window);
    }

    alert(text: {}) {
        this.open();
        this.$.append(this.alertAssemble(text[this.lang]).fadeIn());
    }

    // Add the events after open!!
    confirm(text: {}) {
        this.open();
        this.$.append(this.confirmAssemble(text[this.lang]).fadeIn());
    }
}