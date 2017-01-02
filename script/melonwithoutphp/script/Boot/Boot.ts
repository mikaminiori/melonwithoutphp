/// <reference path="../FreeMakingMusic.ref.ts"/>

class Boot extends Phaser.State {

    private assets: AssetLoader;

    init(assets: AssetLoader) {
        this.assets = assets;
    }

    preload() {
        this.assets.preload(this.load);
    }

    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.time.advancedTiming = true;
        this.game.state.start('Preloader', true, false, this.assets);
    }
}