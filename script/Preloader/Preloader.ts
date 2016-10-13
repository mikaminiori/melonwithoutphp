/// <reference path="../FreeMakingMusic.ref.ts"/>

class Preloader extends Phaser.State {

    private assets: AssetLoader;
    private preloadBar: Phaser.Sprite;

    init(assets: AssetLoader) {
        this.assets = assets
    }

    preload() {
        // Create background of Loading Scene
        new SpriteView(this.game, new CONSTANTS.Background, {});

        // Set-up our preloader sprite
        this.createPreloadBar(new CONSTANTS.PreloadBar);
 
        // Load Assets
        this.assets.load(this.load);
    }

    create() {
        // Preload bar animation when the load finished.
        var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
        tween.onComplete.add(this.start, this);
        // this.game.sound.onSoundDecode.add(() => { console.log("decode"); });
        // this.game.sound.setDecodedCallback
    }

    private createPreloadBar(constants: CONSTANTS.PreloadBar): void {
        this.preloadBar = this.add.sprite(constants.x, constants.y, constants.images[constants.initImage]);
        this.preloadBar.width = constants.width;
        this.preloadBar.height = constants.height;
        this.preloadBar.pivot.x = this.preloadBar.width / 2;
        this.preloadBar.pivot.y = this.preloadBar.height / 2;
        this.load.setPreloadSprite(this.preloadBar);
    }

    private start() {
        this.game.state.start('Main', true, false);
    }
}