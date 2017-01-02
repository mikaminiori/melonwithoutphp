/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ReturnButton = (function (_super) {
    __extends(ReturnButton, _super);
    function ReturnButton(game, constants) {
        _super.call(this, game, constants, {});
        this.constants = constants;
        this.modal = new ModalWindow(game, new CONSTANTS.ModalWindow, {});
        this.setView();
        this.setEvent();
    }
    ReturnButton.prototype.setView = function () {
        this.$.text(this.constants.text[this.constants.language]);
    };
    ReturnButton.prototype.setEvent = function () {
        var _this = this;
        this.$.hover(function () { return _this.enter(); }, function () { return _this.leave(); });
        this.$.click(function () { return _this.confirm(); });
    };
    ReturnButton.prototype.enter = function () {
        this.$.css("box-shadow", "0 0 20px 6px " + this.constants.shadowColor);
        this.game.sound.play("select");
    };
    ReturnButton.prototype.leave = function () {
        this.$.css("box-shadow", "none");
    };
    ReturnButton.prototype.confirm = function () {
        var _this = this;
        this.game.sound.play("load");
        this.modal.confirm(this.constants.confirmMsg);
        this.modal.onYes.add(function () { return _this.move(); });
        this.modal.onNo.add(function () { return _this.game.sound.play("close"); });
    };
    ReturnButton.prototype.move = function () {
        var _this = this;
        this.game.sound.play("decide");
        setTimeout(function () { return document.location = _this.constants.destination; }, 500);
    };
    return ReturnButton;
})(DOMView);
//# sourceMappingURL=ReturnButton.js.map