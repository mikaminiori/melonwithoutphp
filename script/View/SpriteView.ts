/// <reference path="../FreeMakingMusic.ref.ts"/>

class SpriteView extends Phaser.Sprite {

    protected $: JQuery;

    constructor(game: Phaser.Game, constants: CONSTANTS.SpriteView, protected models: Object) {
        super(game, constants.x, constants.y, constants.images[constants.initImage]);
        game.world.add(this);
        this.$ = $(this);
        this.setSize(constants.width, constants.height);
        this.setFrameAnimation();
        this.setPhysical();
        this.setInput();
    }

    public setSize(width: number, height: number): void {
        this.width = width;
        this.height = height;
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public update() {
        // override!
    }

    public onCollide(partner?: SpriteView) {
        // override!
    }

    public onOverlap(partner?: SpriteView) {
        // override!
    }

    public offOverlap(partner?: SpriteView) {
        // override!
    }

    protected setFrameAnimation() {
        // override!
        // This is recommended to imprement in child class not using constants.
    }

    protected setPhysical() {
        // override!
    }

    protected setInput() {
        // override!
    }
}