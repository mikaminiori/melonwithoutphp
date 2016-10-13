/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PlayButton = (function (_super) {
    __extends(PlayButton, _super);
    function PlayButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.musicPlayer = this.models["musicPlayer"];
        this.setView();
        this.setEvent();
        this.changeImage(false);
    }
    PlayButton.prototype.setView = function () {
        this.$.append($("<img src=\"" + this.constants.images["image"] + "\" />").addClass(this.constants.class["buttonImage"]));
    };
    PlayButton.prototype.setEvent = function () {
        var _this = this;
        this.setSelectEffect();
        this.$.on(this.pushEvent(), function () { return _this.changePlayingState(); });
        this.musicPlayer.onPlay.add(function () { return _this.changeImage(true); });
        this.musicPlayer.onStop.add(function () { return _this.changeImage(false); });
    };
    PlayButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () {
            _this.$.css("box-shadow", "0 0 20px 6px " + (_this.musicPlayer.isPlaying ? "orange" : "springgreen"));
            _this.game.sound.play("select");
            _this.isOver = true;
        }).on(this.game.device.touch ? "touchend" : "mouseleave", function () {
            _this.$.css("box-shadow", "none");
            _this.isOver = false;
        });
    };
    PlayButton.prototype.changeImage = function (playing) {
        this.$.css("background-color", playing ? this.constants.onColor : this.constants.offColor)
            .css("box-shadow", this.isOver ? "0 0 20px 6px springgreen" : "none");
    };
    PlayButton.prototype.changePlayingState = function () {
        this.musicPlayer.togglePlayingState();
        this.$.css("box-shadow", "0 0 20px 6px " + (this.musicPlayer.isPlaying ? "orange" : "springgreen"));
    };
    return PlayButton;
})(DOMView);
var LessonPlayButton = (function (_super) {
    __extends(LessonPlayButton, _super);
    function LessonPlayButton() {
        _super.apply(this, arguments);
        this.achievement = this.models["achievement"];
    }
    LessonPlayButton.prototype.changePlayingState = function () {
        if (this.achievement.isFinished && !this.achievement.isActivated && this.musicPlayer.isPlaying)
            return;
        _super.prototype.changePlayingState.call(this);
    };
    return LessonPlayButton;
})(PlayButton);
//# sourceMappingURL=PlayButton.js.map