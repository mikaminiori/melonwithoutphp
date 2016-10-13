/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SoundButtonContainer = (function (_super) {
    __extends(SoundButtonContainer, _super);
    function SoundButtonContainer(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.soundButtons = [];
        this.setView();
        this.createSoundButtons();
    }
    SoundButtonContainer.prototype.setView = function () {
        this.$.css("height", this.constants.height).wrap("<div id=\"soundButtonMask\">");
    };
    SoundButtonContainer.prototype.createSoundButtons = function () {
        var _this = this;
        this.constants.pitch.forEach(function (pitch) {
            _this.$.append($("<div id=" + pitch + "/>"));
            _this.soundButtons.push(new SoundButton(_this.game, new CONSTANTS.SoundButton, _this.models, pitch));
        });
    };
    SoundButtonContainer.prototype.update = function () {
        this.$.css("top", -this.game.camera.y);
    };
    return SoundButtonContainer;
})(DOMView);
//# sourceMappingURL=SoundButtonContainer.js.map