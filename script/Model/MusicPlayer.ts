/// <reference path="../FreeMakingMusic.ref.ts"/>

class MusicPlayer extends Model {

    private playing: boolean = false;

    onPlay: Phaser.Signal = new Phaser.Signal();
    onStop: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.MusicPlayer) {
        super(constants);
    }

    get isPlaying(): boolean {
        return this.playing;
    }

    play() {
        this.playing = true;
        this.onPlay.dispatch();
    }

    stop() {
        this.playing = false;
        this.onStop.dispatch();
    }

    togglePlayingState() {
        this.playing ? this.stop() : this.play();
    }
}