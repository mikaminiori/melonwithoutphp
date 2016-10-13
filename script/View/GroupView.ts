/// <reference path="../FreeMakingMusic.ref.ts"/>

class GroupView extends Phaser.Group {

    protected $: JQuery;

    constructor(game: Phaser.Game, constants: CONSTANTS.GroupView, protected models?: Object) {
        super(game);
        game.world.add(this);
        this.$ = $(this);
        this.setPhysical();
        this.setInput();
    }

    public update() {
        // override!
    }

    public onCollide(partner?: (SpriteView | GroupView)) {
        // override!
    }

    public onOverlap(partner?: (SpriteView | GroupView)) {
        // override!
    }

    public offOverlap(partner?: (SpriteView | GroupView)) {
        // override!
    }

    protected setPhysical() {
        // override!
    }

    protected setInput() {
        // override!
    }
}