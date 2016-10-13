/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GroupView = (function (_super) {
    __extends(GroupView, _super);
    function GroupView(game, constants, models) {
        _super.call(this, game);
        this.models = models;
        game.world.add(this);
        this.$ = $(this);
        this.setPhysical();
        this.setInput();
    }
    GroupView.prototype.update = function () {
        // override!
    };
    GroupView.prototype.onCollide = function (partner) {
        // override!
    };
    GroupView.prototype.onOverlap = function (partner) {
        // override!
    };
    GroupView.prototype.offOverlap = function (partner) {
        // override!
    };
    GroupView.prototype.setPhysical = function () {
        // override!
    };
    GroupView.prototype.setInput = function () {
        // override!
    };
    return GroupView;
})(Phaser.Group);
//# sourceMappingURL=GroupView.js.map