/// <reference path="../FreeMakingMusic.ref.ts"/>

class LoadButton extends DOMView {

    protected music: Music = this.models["music"];
    protected musicStorage: MusicStorage = this.models["musicStorage"];
	protected instrument: Instrument = this.models["instrument"];
	protected speed: Speed = this.models["speed"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.LoadButton, models: Object) {
        super(game, constants, models);
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$.append($(`<img src=${this.constants.image} />`).addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    }

    protected setSelectEffect() {
		this.$.hover(() => { this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); this.game.sound.play("select"); },
			() => this.$.css("box-shadow", "none"));
    }

    protected setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.pushEvent(), () => this.musicStorage.loadConfirm());
        this.musicStorage.onLoad.add((instrument: string, speedGrade: number, music: MusicData) => {
			this.instrument.changeInstrument(instrument);
			this.speed.setSpeedGrade(speedGrade);
			this.setMusic(music);
		});
    }

    setMusic(music: MusicData) {
        this.game.sound.mute = true;
        this.music.setMusic(music);
        this.game.sound.mute = false;
    }
}

class LessonLoadButton extends LoadButton {
	private achievement: Achievement = this.models["achievement"];
	private modalWindow: ModalWindow;
	private playMsg;

	constructor(game: Phaser.Game, constants: LESSON.LessonLoadButton, models: Object) {
        super(game, constants, models);
		this.playMsg = constants.playMsg;
		this.setModal();
    }

	protected setEvent() {
        if (!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.pushEvent(), () => this.loadConfirmWithCheck());
        this.musicStorage.onLoad.add((instrument: string, speedGrade: number, music: MusicData) => {
			this.instrument.changeInstrument(instrument);
			this.speed.setSpeedGrade(speedGrade);
			this.setMusic(music);
		});
	}

	private loadConfirmWithCheck() {
		if (this.achievement.isFinished == true && this.achievement.isActivated == false) {
			this.modalWindow.alert(this.playMsg);
			return;
		}
		this.musicStorage.loadConfirm(); 
	}

	private setModal() {
		this.modalWindow = new ModalWindow(this.game, new CONSTANTS.ModalWindow, {});
		this.modalWindow.onOpen.add(() => this.game.sound.play("boo"));
		this.modalWindow.onOk.add(() => this.game.sound.play("decide"));
	}
}