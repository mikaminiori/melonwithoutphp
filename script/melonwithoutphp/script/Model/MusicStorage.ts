/// <reference path="../FreeMakingMusic.ref.ts"/>

class MusicStorage extends Model {

	private loginState: boolean = false;
	private postMusic: string;
	private postInstrument: string;
	private postSpeedGrade: number;

    onSaveConfirm: Phaser.Signal = new Phaser.Signal();
    onLoadConfirm: Phaser.Signal = new Phaser.Signal();
    onSave: Phaser.Signal = new Phaser.Signal();
    onLoad: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.MusicStorage) {
        super(constants);
		this.loginState = this.isLogIn();
    }

	private isLogIn(): boolean {
		var isLogIn: boolean = false;
		$.ajax({
			url: this.constants.userNameUrl,
			async: false,
			success: (name: string, state: string) => { if (name != "") isLogIn = true;}
		});
		return isLogIn;
	}

	private musicExistInDB(): boolean {
		var existMusic: boolean = false;
		$.ajax({
			url: this.constants.musicExistUrl,
			async: false,
			success: (data: string, state: string) => { if (data == "true") existMusic = true; }
		});
		return existMusic;
	}

	private saveInDB() {
		$.ajax({
			url: this.constants.musicSaveUrl,
			type: "post",
			data: "instrument=" + this.postInstrument + "&speed=" + this.postSpeedGrade.toString() + "&music=" + this.postMusic,
			async: false,
		});
	}

	private saveInLocalStorage() {
		localStorage.setItem("music", this.postMusic);
		localStorage.setItem("instrument", this.postInstrument);
		localStorage.setItem("speed", this.postSpeedGrade.toString());
	}

    saveConfirm(music: MusicData, instrument: string, speedGrade: number) {
        this.postMusic = JSON.stringify(music);
		this.postInstrument = instrument;
		this.postSpeedGrade = speedGrade;
		if (this.loginState) { if (this.musicExistInDB()) { this.onSaveConfirm.dispatch(); return; } }
		else { if (localStorage.getItem("music")) { this.onSaveConfirm.dispatch(); return; } }
        this.save();
    }

    save() {
		this.loginState ? this.saveInDB() : this.saveInLocalStorage();
        this.onSave.dispatch();
    }

    loadConfirm() {
		if (this.loginState) {
			this.onLoadConfirm.dispatch(this.musicExistInDB());
			return;
		}
		this.postInstrument = localStorage.getItem("instrument");
		this.postSpeedGrade = Number(localStorage.getItem("speed"));
		this.postMusic = localStorage.getItem("music");
		this.onLoadConfirm.dispatch(this.postMusic ? true : false);
    }

    load() {
		if (this.loginState) {
			$.ajax({
				url: this.constants.musicLoadUrl,
				async: false,
				success: (data: string, state: string) => {
					var jsonData = JSON.parse(data);
					this.postInstrument = jsonData["instrument"];
					this.postSpeedGrade = Number(jsonData["speed"]);
					this.postMusic = jsonData["music"];
				}
			});
		}
        this.onLoad.dispatch(this.postInstrument, this.postSpeedGrade, JSON.parse(this.postMusic));
    }
}