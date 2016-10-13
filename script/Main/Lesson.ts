/// <reference path="../Lesson.ref.ts"/>

class Lesson extends FreeMakingMusic {

	private returnLessonListButton = new ReturnButton(this, new LESSON.ReturnLessonListButton);
	private lessonData: LessonData;

    constructor(assets: AssetLoader, constants: CONSTANTS.MelOn) {
        super(assets, constants);
    }

    protected createElements(parentSelector: string, elementIds: string[]) {
		this.lessonData = new LessonData(new LESSON.LessonData);
		new Lecture(new LESSON.Lecture, { lessonData: this.lessonData });
		this.addIDs(elementIds);
        super.createElements(parentSelector, elementIds);
    }

	private addIDs(elementIds: string[]) {
		elementIds.push("nextButton");
		elementIds.push("prohibitedDisplay");
		elementIds.push("traceDisplay");
		elementIds.push("fillingDisplay");
	}

    protected setStates() {
        this.state.add('Boot', Boot, false);
        this.state.add('Preloader', Preloader, false);
        this.state.add('Main', LessonMelOn, false);
    }
}

// Do it after loading HTML, and use jQuery
window.onload = () => {
    $.ajaxSetup({ async: false, cache: false });
    $(() => { new Lesson(new MelOnAssets, new CONSTANTS.MelOn); });
}