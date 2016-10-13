/// <reference path="../FreeMakingMusic.ref.ts"/>

class ScrollButton extends DOMView {

    private music: Music = this.models["music"];
    private image: JQuery;
    private isPushed: boolean = false;
    private isOn: boolean = false;
    private isAlerted: boolean = false;
	private clickStatus: any = null;

    constructor(game: Phaser.Game, private constants: CONSTANTS.ScrollButton, models: Object) {
        super(game, constants, models);
        this.initCamera();
        this.setView();
        this.setEvent();
    }

    private setView() {
        this.$.addClass(this.constants.class["scroll"]);
    }

    private setEvent() {
        if(!this.game.device.touch) this.setSelectEffect();
        this.$.on(this.pushEvent(), () => this.checkDouble())
            .on(this.pullEvent(), () => this.pull() )
            .on("mouseleave", () => { this.isOn = false; this.pull(); })
            .append(`<div id=${this.constants.direction + "Triangle"}></div>`);
    }

    private setSelectEffect() {
        this.$.on("mouseenter", () => {
            this.isOn = true;
            this.$.css("box-shadow", "0 0 8px 2px lawngreen, 0 0 8px 2px lawngreen inset");
            this.game.sound.play("select");
        }).on("mouseleave", () => { this.isOn = false; this.$.css("box-shadow", "none"); });
    }

	private checkDouble() {
		if (this.clickStatus === null) {
			this.clickStatus = setTimeout(() => this.clickStatus = null, this.constants.doubleTapTime);
			return this.push();
		}
		this.clickStatus = null;
		if (!this.isLimit()) this.double();
	}

    private push() {
        this.isPushed = true;
        this.$.css("box-shadow", "0 0 8px 2px palevioletred, 0 0 8px 2px palevioletred inset");
    }

    private pull() {
        this.isPushed = false;
        this.isAlerted = false;
        if (this.isOn) this.$.css("box-shadow", "0 0 8px 2px lawngreen, 0 0 8px 2px lawngreen inset");
        else this.$.css("box-shadow", "none");
    }

    private initCamera() {
        this.game.camera.y = this.constants.noteHeight * this.constants.pitch.indexOf(this.constants.initPitch);
    }

    private rightestPosition(): number {
        var music: MusicData = this.music.getMusic;
        var x: number = 0;
        _.each(music, (line: NoteData[]) => {
            _.each(line, (note: NoteData) => {
                var endPosition = (this.constants.measureWidth / note.unitNote) * (note.start + note.extension + 1);
                if (endPosition > x) x = endPosition;
            });
        });
        return x;
    }

    private isLimit(): boolean {
        switch (this.constants.direction) {
            case "up": if (this.game.camera.y === 0) { return true; } break;
            case "down": if (this.game.camera.y !== 0 && this.game.camera.atLimit.y) { return true; } break;
            case "right": if (this.game.camera.x !== 0 && this.game.camera.atLimit.x) { return true; } break;
            case "left": if (this.game.camera.x === 0) { return true; } break;
            default: return false; break;
        }
        return false;
    }

    private double() {
        this.game.sound.play("jump");
        switch (this.constants.direction) {
            case "up": this.game.camera.y = 0; break;
            case "down": this.game.camera.y = Infinity; break;
            case "right": this.game.camera.x = this.rightestPosition() - this.constants.measureWidth * this.constants.displayMeasureNum; break;
            case "left": this.game.camera.x = 0; break;
            default: break;
        }
    }

    update() {
        if (this.isPushed) {
            switch (this.constants.direction) {
                case "up": this.game.camera.y -= this.constants.speed; break;
                case "down": this.game.camera.y += this.constants.speed; break;
                case "right": this.game.camera.x += this.constants.speed; break;
                case "left": this.game.camera.x -= this.constants.speed; break;
                default: break;
            }
            if (this.isLimit() && !this.isAlerted) {
                this.game.sound.play("boo");
                this.isAlerted = true;
            }
        }
    }
}

class LessonScrollButton extends ScrollButton {
	private achievement: Achievement = this.models["achievement"];

	constructor(game: Phaser.Game, constants: CONSTANTS.ScrollButton, models: Object) {
		super(game, constants, models);
		this.achievement.onFinish.add(() => this.game.camera.x = 0);
	}
}