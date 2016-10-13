/// <reference path="../FreeMakingMusic.ref.ts"/>

class PlayButton extends DOMView {

    protected musicPlayer: MusicPlayer = this.models["musicPlayer"];
    private isOver: boolean;

    constructor(game: Phaser.Game, private constants: CONSTANTS.PlayButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
        this.changeImage(false);
    }

    private setView() {
        this.$.append($(`<img src="${this.constants.images["image"]}" />`).addClass(this.constants.class["buttonImage"]));
    }

    private setEvent() {
        this.setSelectEffect();
        this.$.on(this.pushEvent(), () => this.changePlayingState());
        this.musicPlayer.onPlay.add(() => this.changeImage(true));
        this.musicPlayer.onStop.add(() => this.changeImage(false));
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => {
            this.$.css("box-shadow", `0 0 20px 6px ${this.musicPlayer.isPlaying ? "orange" : "springgreen"}`);
            this.game.sound.play("select");
            this.isOver = true;
        }).on(this.game.device.touch ? "touchend" : "mouseleave", () => {
            this.$.css("box-shadow", "none");
            this.isOver = false;
        });
    }

    private changeImage(playing: boolean) {
        this.$.css("background-color", playing ? this.constants.onColor : this.constants.offColor)
            .css("box-shadow", this.isOver ? "0 0 20px 6px springgreen" : "none");
    }

    protected changePlayingState() {
        this.musicPlayer.togglePlayingState();
        this.$.css("box-shadow", `0 0 20px 6px ${this.musicPlayer.isPlaying ? "orange" : "springgreen"}`);
    }
}

class LessonPlayButton extends PlayButton {
	private achievement: Achievement = this.models["achievement"];

	protected changePlayingState() {
		if (this.achievement.isFinished && !this.achievement.isActivated && this.musicPlayer.isPlaying) return;
		super.changePlayingState();
	}
}