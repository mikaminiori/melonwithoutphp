/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Logo = (function (_super) {
    __extends(Logo, _super);
    function Logo(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.setEvent();
    }
    Logo.prototype.setEvent = function () {
        var _this = this;
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.ajax(); });
    };
    Logo.prototype.ajax = function () {
        // We can read only JSON file in local !!
        // $.getJSON("storage/lesson/json.json", (data) => { console.log(data["A3"]) });
        this.game.sound.play("MelOn");
    };
    return Logo;
})(DOMView);
//# sourceMappingURL=Logo.js.map