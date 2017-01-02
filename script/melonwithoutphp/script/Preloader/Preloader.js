/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Preloader = (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        _super.apply(this, arguments);
    }
    Preloader.prototype.init = function (assets) {
        this.assets = assets;
    };
    Preloader.prototype.preload = function () {
        // Create background of Loading Scene
        new SpriteView(this.game, new CONSTANTS.Background, {});
        // Set-up our preloader sprite
        this.createPreloadBar(new CONSTANTS.PreloadBar);
        // Load Assets
        this.assets.load(this.load);
    };
    Preloader.prototype.create = function () {
        // Preload bar animation when the load finished.
        var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.start, this);
        // this.game.sound.onSoundDecode.add(() => { console.log("decode"); });
        // this.game.sound.setDecodedCallback
    };
    Preloader.prototype.createPreloadBar = function (constants) {
        this.preloadBar = this.add.sprite(constants.x, constants.y, constants.images[constants.initImage]);
        this.preloadBar.width = constants.width;
        this.preloadBar.height = constants.height;
        this.preloadBar.pivot.x = this.preloadBar.width / 2;
        this.preloadBar.pivot.y = this.preloadBar.height / 2;
        this.load.setPreloadSprite(this.preloadBar);
    };
    Preloader.prototype.start = function () {
        this.game.state.start('Main', true, false);
    };
    return Preloader;
})(Phaser.State);
//# sourceMappingURL=Preloader.js.map