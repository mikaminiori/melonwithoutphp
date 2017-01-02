/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        _super.apply(this, arguments);
    }
    Boot.prototype.init = function (assets) {
        this.assets = assets;
    };
    Boot.prototype.preload = function () {
        this.assets.preload(this.load);
    };
    Boot.prototype.create = function () {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.time.advancedTiming = true;
        this.game.state.start('Preloader', true, false, this.assets);
    };
    return Boot;
})(Phaser.State);
//# sourceMappingURL=Boot.js.map