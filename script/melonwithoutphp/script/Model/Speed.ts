/// <reference path="../FreeMakingMusic.ref.ts"/>

class Speed extends Model {

    private speed: number;

    onChangeSpeed: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.Speed) {
        super(constants);
        _.times(this.constants.initSpeedGrade + 1, () => { this.changeSpeed(true); });
    }

    get getSpeed(): number {
        return this.speed;
    }

    get getSpeedGrade(): number {
        return this.constants.speeds.indexOf(this.speed);
    }

	setSpeedGrade(speedGrade: number) {
		for (var i = speedGrade - this.getSpeedGrade; i != 0; i += (i < 0 ? 1 : -1)) this.changeSpeed(i > 0);
	}
    
    changeSpeed(up: boolean) {
        var newSpeed = this.constants.speeds[this.getSpeedGrade + (up ? 1 : -1)];
        if (newSpeed) this.speed = newSpeed;
        this.onChangeSpeed.dispatch();
    }
}