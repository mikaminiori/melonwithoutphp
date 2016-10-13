/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MusicPlayer = (function (_super) {
    __extends(MusicPlayer, _super);
    function MusicPlayer(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.playing = false;
        this.onPlay = new Phaser.Signal();
        this.onStop = new Phaser.Signal();
    }
    Object.defineProperty(MusicPlayer.prototype, "isPlaying", {
        get: function () {
            return this.playing;
        },
        enumerable: true,
        configurable: true
    });
    MusicPlayer.prototype.play = function () {
        this.playing = true;
        this.onPlay.dispatch();
    };
    MusicPlayer.prototype.stop = function () {
        this.playing = false;
        this.onStop.dispatch();
    };
    MusicPlayer.prototype.togglePlayingState = function () {
        this.playing ? this.stop() : this.play();
    };
    return MusicPlayer;
})(Model);
//# sourceMappingURL=MusicPlayer.js.map