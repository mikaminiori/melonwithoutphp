/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ModalWindow = (function (_super) {
    __extends(ModalWindow, _super);
    function ModalWindow(game, modalConstants, models) {
        _super.call(this, game, modalConstants, models);
        this.modalConstants = modalConstants;
        this.onOpen = new Phaser.Signal();
        this.onClose = new Phaser.Signal();
        this.onOk = new Phaser.Signal();
        this.onYes = new Phaser.Signal();
        this.onNo = new Phaser.Signal();
        this.lang = modalConstants.language;
    }
    ModalWindow.prototype.open = function () {
        this.refleshEvents();
        this.close();
        this.onOpen.dispatch();
        window.onscroll = function () { return window.scrollTo(window.scrollX, window.scrollY); };
        $(window).on('touchmove.noScroll', function (e) { e.preventDefault(); });
    };
    ModalWindow.prototype.close = function () {
        window.onscroll = null;
        $(window).off('.noScroll');
        var overlay = $(this.toId(this.modalConstants.modalIds.overlay));
        overlay.fadeOut(function () { overlay.remove(); });
    };
    ModalWindow.prototype.refleshEvents = function () {
        this.onClose.dispatch();
        this.onClose.removeAll();
        this.onOk.removeAll();
        this.onYes.removeAll();
        this.onNo.removeAll();
    };
    ModalWindow.prototype.makeOverlay = function () {
        var _this = this;
        var id = this.modalConstants.modalIds.overlay;
        return this.makeDiv(id).on(this.pushEvent(), function (e) {
            if (e.target.id === id) {
                _this.game.sound.play("close");
                _this.close();
            }
        });
    };
    ModalWindow.prototype.makeButton = function (id, text) {
        var _this = this;
        var button = this.makeDiv(id).addClass(this.modalConstants.modalClasses.button).text(text);
        return button.hover(function () { button.css("box-shadow", "0 0 10px 3px orange"); _this.game.sound.play("select"); }, function () { button.css("box-shadow", "none"); })
            .on(this.pushEvent(), function () { _this.close(); });
    };
    ModalWindow.prototype.makeMessage = function (text) {
        return this.makeDiv(this.modalConstants.modalIds.message).append(text);
    };
    ModalWindow.prototype.makeWindow = function () {
        return this.makeDiv(this.modalConstants.modalIds.window);
    };
    ModalWindow.prototype.alertAssemble = function (text) {
        var _this = this;
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var okButton = this.makeButton(this.modalConstants.modalIds.ok, this.modalConstants.okText[this.lang])
            .on(this.pushEvent(), function () { _this.game.sound.play("decide"); _this.onOk.dispatch(); });
        window.append(message).append(okButton);
        return overlay.append(window);
    };
    ModalWindow.prototype.confirmAssemble = function (text) {
        var _this = this;
        var overlay = this.makeOverlay();
        var window = this.makeWindow();
        var message = this.makeMessage(text);
        var yesButton = this.makeButton(this.modalConstants.modalIds.yes, this.modalConstants.yesText[this.lang])
            .on(this.pushEvent(), function () { _this.onYes.dispatch(); });
        var noButton = this.makeButton(this.modalConstants.modalIds.no, this.modalConstants.noText[this.lang])
            .on(this.pushEvent(), function () { _this.onNo.dispatch(); });
        window.append(message).append(yesButton).append(noButton);
        return overlay.append(window);
    };
    ModalWindow.prototype.alert = function (text) {
        this.open();
        this.$.append(this.alertAssemble(text[this.lang]).fadeIn());
    };
    // Add the events after open!!
    ModalWindow.prototype.confirm = function (text) {
        this.open();
        this.$.append(this.confirmAssemble(text[this.lang]).fadeIn());
    };
    return ModalWindow;
})(DOMView);
//# sourceMappingURL=ModalWindow.js.map