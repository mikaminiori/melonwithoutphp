/// <reference path="../Lesson.ref.ts"/>

class RestDisplay extends DOMView {
	protected achievement: Achievement = this.models["achievement"];

	constructor(game: Phaser.Game, protected constants: LESSON.RestDisplay, models: Object) {
		super(game, constants, models);
		this.achievement.onChangeNum.add(() => this.changeNum());
		this.$.addClass(this.constants.cssClass);
	}

	protected changeNum() {
	}

	protected display(num: number) {
		if (num === 0) this.$.addClass(this.constants.completeFont).removeClass(this.constants.incompleteFont);
		else this.$.addClass(this.constants.incompleteFont).removeClass(this.constants.completeFont);
		this.$.text(num.toString());
	}
}

class ProhibitedDisplay extends RestDisplay {
	protected changeNum() {
		this.display(this.achievement.redNum);
	}
}

class TraceDisplay extends RestDisplay {
	protected changeNum() {
		this.display(this.achievement.restTraceNum);
	}
}

class FillingDisplay extends RestDisplay {
	protected changeNum() {
		this.display(this.achievement.restFillingNum);
	}
}