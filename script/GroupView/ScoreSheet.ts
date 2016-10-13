/// <reference path="../FreeMakingMusic.ref.ts"/>
/// <reference path="../Lesson.ref.ts"/>

class ScoreSheet extends GroupView {
    
    constructor(game: Phaser.Game, private constants: CONSTANTS.ScoreSheet, models?: Object) {
        super(game, constants, models);
        _.times(this.constants.measureNum, () => { this.addMeasure(); });
        this.updateScoreHeight();
    }

    addMeasure() {
        this.add(new MeasureSheet(this.game, new CONSTANTS.MeasureSheet, this.models, this.children.length));
        this.updateScoreWidth();
    }

    reduceMeasure() {
        this.children.pop();
        this.updateScoreWidth();
    }

    updateScoreWidth() {
        this.game.camera.bounds.width = this.constants.width * this.children.length;
        this.game.world.bounds.width = this.constants.width * this.children.length;
    }

    updateScoreHeight() {
        this.game.camera.bounds.height = this.constants.height;
        this.game.world.bounds.height = this.constants.height;
    }
}

class LessonScoreSheet extends ScoreSheet {
	LessonData: LessonData = this.models["lessonData"];

	addMeasure() {
		this.add(new LessonMeasureSheet(this.game, new LESSON.LessonMeasureSheet, this.models, this.children.length));
        this.updateScoreWidth();
	}
}