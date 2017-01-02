/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FreeMakingMusic = (function (_super) {
    __extends(FreeMakingMusic, _super);
    function FreeMakingMusic(assets, constants) {
        _super.call(this, constants.width, constants.height, Phaser.AUTO, constants.renderer);
        this.assets = assets;
        this.returnTopButton = new ReturnButton(this, new CONSTANTS.ReturnTopButton);
        this.logo = new Logo(this, new CONSTANTS.Logo, {});
        this.userName = new UserNameWithMelOn(new CONSTANTS.UserName, $.getUrlVar("lang"));
        this.setMelOn(constants.selector);
        this.createElements(constants.selector, constants.elements);
        this.setStates();
        this.start();
    }
    FreeMakingMusic.prototype.setMelOn = function (selector) {
        $(selector).on("contextmenu", function () { return false; }).on("selectstart", function () { return false; })
            .append($("<img id=\"calyx\" src=\"storage/assets/image/game/melon.png\" />"));
    };
    FreeMakingMusic.prototype.createElements = function (parentSelector, elementIds) {
        var parent = $(parentSelector);
        for (var _i = 0; _i < elementIds.length; _i++) {
            var element = elementIds[_i];
            parent.append("<div id=" + element + "></div>");
        }
    };
    FreeMakingMusic.prototype.setStates = function () {
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', MelOn, false);
    };
    FreeMakingMusic.prototype.start = function () {
        this.state.start('Boot', false, false, this.assets);
    };
    return FreeMakingMusic;
})(Phaser.Game);
// Do it after loading HTML, and use jQuery
window.onload = function () {
    $(function () { new FreeMakingMusic(new MelOnAssets, new CONSTANTS.MelOn); });
};
//# sourceMappingURL=FreeMakingMusic.js.map