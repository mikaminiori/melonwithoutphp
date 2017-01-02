/// <reference path="../index.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HTMLLogo = (function (_super) {
    __extends(HTMLLogo, _super);
    function HTMLLogo(constants) {
        var _this = this;
        _super.call(this, constants);
        this.constants = constants;
        this.setImage("logo");
        this.$.click(function () { _this.audioPlay(_this.audios["MelOn"]); });
    }
    return HTMLLogo;
})(HTMLView);
//# sourceMappingURL=HTMLLogo.js.map