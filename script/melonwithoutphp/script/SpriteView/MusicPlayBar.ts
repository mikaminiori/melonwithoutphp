/// <reference path="../FreeMakingMusic.ref.ts"/>

class MusicPlayBar extends SpriteView {

    private music: Music = this.models["music"];
    private musicPlayer: MusicPlayer = this.models["musicPlayer"];
    private instrument: Instrument = this.models["instrument"];
    private speed: Speed = this.models["speed"];
    private noteOverlapManager: NoteOverlapManager = this.models["noteOverlapManager"];
	private currentMeasure: number = 0;
    private stopPosition: number = 0;
	private pastPosition: number;
    private beatSound: Phaser.Sound;

    constructor(game: Phaser.Game, protected constants: CONSTANTS.MusicPlayBar, models: Object) {
        super(game, constants, models);
		this.setEvent();
        this.noteOverlapManager.setMusicPlayBar(this);
        this.anchor.setTo(1.0, 0.0);
    }

	protected setEvent() {
		this.music.onRefresh.add(() => this.updateStopPosition());
        this.musicPlayer.onStop.add(() => this.musicStop());
        this.musicPlayer.onPlay.add(() => this.musicPlay());
        this.speed.onChangeSpeed.add(() => this.changeSpeed());
	}

    protected setPhysical() {
        this.game.physics.arcade.enable(this);
    }

    private updateStopPosition() {
        var music: MusicData = this.music.getMusic;
        var x: number = 0;
        _.each(music, (line: NoteData[]) => {
            _.each(line, (note: NoteData) => {
                var endPosition = (this.constants.measureWidth / note.unitNote) * (note.start + note.extension + 1);
                if (endPosition > x) x = endPosition;
            });
        });
        this.stopPosition = x;
    }

    private musicStop() {
        this.game.camera.follow(null);
        this.body.velocity.x = 0;
    }

    private musicPlay() {
        this.changeSpeed();
        this.x = this.game.camera.x - this.constants.width;
		this.currentMeasure = Math.ceil(this.x / this.constants.measureWidth);
    }

    private changeSpeed() {
        if (this.musicPlayer.isPlaying) this.body.velocity.x = this.speed.getSpeed;
    }

    private ring(volume: number) {
        this.beatSound = this.game.sound.play(this.constants.beatSound);
		this.beatSound.volume = volume;
        this.beatSound.fadeOut(400);
    }

	private checkMeasureHead(): boolean {
		if (this.x > this.currentMeasure * this.constants.measureWidth) {
			this.currentMeasure++;
			return true;
		}
		return false;
	}

    private beat() {
		var pastQuotient = Math.floor(this.pastPosition / this.constants.beatWidth);
		var currentQuotient = Math.floor(this.x / this.constants.beatWidth);
		if (pastQuotient < currentQuotient)
			this.ring(this.checkMeasureHead() ? this.constants.measureHeadVolume : this.constants.measureNotHeadVolume);
        this.pastPosition = this.x;
    }

	checkCenter() {
		if (this.x >= this.game.camera.x + this.game.width / 2)
			this.game.camera.focusOnXY(this.x, this.game.camera.y + this.game.camera.view.halfHeight);
	}

    update() {
        if (this.musicPlayer.isPlaying) {
            this.beat();
            this.checkCenter();
            if (this.x > this.stopPosition) this.musicPlayer.stop();
        }
    }
}

class LessonMusicPlayBar extends MusicPlayBar {
	private achievement: Achievement;

	setEvent() {
		super.setEvent();
		this.achievement = this.models["achievement"];
		this.achievement.onFinish.add(() => { this.x = this.constants.x; this.checkCenter(); });
	}
}