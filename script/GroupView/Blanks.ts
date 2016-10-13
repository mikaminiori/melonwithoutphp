/// <reference path="../Lesson.ref.ts"/>

class Blanks extends GroupView {

    private music: Music = this.models["music"];
    private lessonData: LessonData = this.models["lessonData"];
    private achievement: Achievement = this.models["achievement"];
    
    constructor(game: Phaser.Game, private constants: LESSON.Blanks, models: Object) {
        super(game, constants, models);
        this.setNotes();
    }

    private setNotes() {
        var unitWidth = this.constants.measureWidth / this.lessonData.getUnitNote;
        _.each(this.lessonData.getBlanks, (blank: [number, number]) => { this.createBlank(blank, unitWidth); });
    }

    private createBlank(blank: [number, number], unitWidth) {
        var instance: Phaser.Sprite = this.create(unitWidth * blank[0], 0, this.constants.images["blank"]);
        instance.width = unitWidth * (blank[1] - blank[0] + 1)
        instance.height = this.constants.height;
        instance.alpha = this.constants.opacity;
    }
}