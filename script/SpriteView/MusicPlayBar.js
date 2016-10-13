/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MusicPlayBar = (function (_super) {
    __extends(MusicPlayBar, _super);
    function MusicPlayBar(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.musicPlayer = this.models["musicPlayer"];
        this.instrument = this.models["instrument"];
        this.speed = this.models["speed"];
        this.noteOverlapManager = this.models["noteOverlapManager"];
        this.currentMeasure = 0;
        this.stopPosition = 0;
        this.setEvent();
        this.noteOverlapManager.setMusicPlayBar(this);
        this.anchor.setTo(1.0, 0.0);
    }
    MusicPlayBar.prototype.setEvent = function () {
        var _this = this;
        this.music.onRefresh.add(function () { return _this.updateStopPosition(); });
        this.musicPlayer.onStop.add(function () { return _this.musicStop(); });
        this.musicPlayer.onPlay.add(function () { return _this.musicPlay(); });
        this.speed.onChangeSpeed.add(function () { return _this.changeSpeed(); });
    };
    MusicPlayBar.prototype.setPhysical = function () {
        this.game.physics.arcade.enable(this);
    };
    MusicPlayBar.prototype.updateStopPosition = function () {
        var _this = this;
        var music = this.music.getMusic;
        var x = 0;
        _.each(music, function (line) {
            _.each(line, function (note) {
                var endPosition = (_this.constants.measureWidth / note.unitNote) * (note.start + note.extension + 1);
                if (endPosition > x)
                    x = endPosition;
            });
        });
        this.stopPosition = x;
    };
    MusicPlayBar.prototype.musicStop = function () {
        this.game.camera.follow(null);
        this.body.velocity.x = 0;
    };
    MusicPlayBar.prototype.musicPlay = function () {
        this.changeSpeed();
        this.x = this.game.camera.x - this.constants.width;
        this.currentMeasure = Math.ceil(this.x / this.constants.measureWidth);
    };
    MusicPlayBar.prototype.changeSpeed = function () {
        if (this.musicPlayer.isPlaying)
            this.body.velocity.x = this.speed.getSpeed;
    };
    MusicPlayBar.prototype.ring = function (volume) {
        this.beatSound = this.game.sound.play(this.constants.beatSound);
        this.beatSound.volume = volume;
        this.beatSound.fadeOut(400);
    };
    MusicPlayBar.prototype.checkMeasureHead = function () {
        if (this.x > this.currentMeasure * this.constants.measureWidth) {
            this.currentMeasure++;
            return true;
        }
        return false;
    };
    MusicPlayBar.prototype.beat = function () {
        var pastQuotient = Math.floor(this.pastPosition / this.constants.beatWidth);
        var currentQuotient = Math.floor(this.x / this.constants.beatWidth);
        if (pastQuotient < currentQuotient)
            this.ring(this.checkMeasureHead() ? this.constants.measureHeadVolume : this.constants.measureNotHeadVolume);
        this.pastPosition = this.x;
    };
    MusicPlayBar.prototype.checkCenter = function () {
        if (this.x >= this.game.camera.x + this.game.width / 2)
            this.game.camera.focusOnXY(this.x, this.game.camera.y + this.game.camera.view.halfHeight);
    };
    MusicPlayBar.prototype.update = function () {
        if (this.musicPlayer.isPlaying) {
            this.beat();
            this.checkCenter();
            if (this.x > this.stopPosition)
                this.musicPlayer.stop();
        }
    };
    return MusicPlayBar;
})(SpriteView);
var LessonMusicPlayBar = (function (_super) {
    __extends(LessonMusicPlayBar, _super);
    function LessonMusicPlayBar() {
        _super.apply(this, arguments);
    }
    LessonMusicPlayBar.prototype.setEvent = function () {
        var _this = this;
        _super.prototype.setEvent.call(this);
        this.achievement = this.models["achievement"];
        this.achievement.onFinish.add(function () { _this.x = _this.constants.x; _this.checkCenter(); });
    };
    return LessonMusicPlayBar;
})(MusicPlayBar);
//# sourceMappingURL=MusicPlayBar.js.map