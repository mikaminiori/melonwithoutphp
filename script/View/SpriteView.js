/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpriteView = (function (_super) {
    __extends(SpriteView, _super);
    function SpriteView(game, constants, models) {
        _super.call(this, game, constants.x, constants.y, constants.images[constants.initImage]);
        this.models = models;
        game.world.add(this);
        this.$ = $(this);
        this.setSize(constants.width, constants.height);
        this.setFrameAnimation();
        this.setPhysical();
        this.setInput();
    }
    SpriteView.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    SpriteView.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    SpriteView.prototype.update = function () {
        // override!
    };
    SpriteView.prototype.onCollide = function (partner) {
        // override!
    };
    SpriteView.prototype.onOverlap = function (partner) {
        // override!
    };
    SpriteView.prototype.offOverlap = function (partner) {
        // override!
    };
    SpriteView.prototype.setFrameAnimation = function () {
        // override!
        // This is recommended to imprement in child class not using constants.
    };
    SpriteView.prototype.setPhysical = function () {
        // override!
    };
    SpriteView.prototype.setInput = function () {
        // override!
    };
    return SpriteView;
})(Phaser.Sprite);
//# sourceMappingURL=SpriteView.js.map