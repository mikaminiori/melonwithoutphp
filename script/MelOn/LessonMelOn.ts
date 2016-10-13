/// <reference path="../Lesson.ref.ts"/>

class LessonMelOn extends MelOn {
    // ========== Model ==========
	private lessonData: LessonData = new LessonData(new LESSON.LessonData);
    private achievement: Achievement = new Achievement(new LESSON.Achievement, this.lessonData.getMode);

    // ========== View ==========
    private targetNotes: TargetNotes;
    private nextButton: NextButton;
    private blanks: Blanks;
    private lessonModal: LessonModal;
	private prohibitedDisplay: ProhibitedDisplay;
	private traceDisplay: TraceDisplay;
	private fillingDisplay: FillingDisplay;

    create() {
		this.noteOverlapManager = new NoteOverlapManager(this.game);
        this.stationeryToggler = new StationeryToggler(this.game, new CONSTANTS.StationeryToggler, { stationery: this.stationery });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        this.speedDisplay = new SpeedDisplay(this.game, new CONSTANTS.SpeedDisplay, { speed: this.speed });
        this.speedUpButton = new SpeedButton(this.game, new CONSTANTS.SpeedUpButton, { speed: this.speed });
        this.speedDownButton = new SpeedButton(this.game, new CONSTANTS.SpeedDownButton, { speed: this.speed });
        this.playButton = new LessonPlayButton(this.game, new CONSTANTS.PlayButton, { musicPlayer: this.musicPlayer, achievement: this.achievement });
        this.saveButton = new SaveButton(this.game, new CONSTANTS.SaveButton, { music: this.music, musicStorage: this.musicStorage, instrument: this.instrument, speed: this.speed });
        this.loadButton = new LessonLoadButton(this.game, new LESSON.LessonLoadButton, { music: this.music, musicStorage: this.musicStorage, instrument: this.instrument, speed: this.speed, achievement: this.achievement });
        this.instrumentMenu = new InstrumentMenu(this.game, new CONSTANTS.InstrumentMenu, { instrument: this.instrument, musicPlayer: this.musicPlayer });
        this.soundButtonContainer = new SoundButtonContainer(this.game, new CONSTANTS.SoundButtonContainer, { instrument: this.instrument });
        this.scoreSheet = new LessonScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery, musicPlayer: this.musicPlayer, lessonData: this.lessonData, achievement: this.achievement });
		this.notes = new LessonNotes(this.game, new CONSTANTS.Notes, { music: this.music, musicPlayer: this.musicPlayer, instrument: this.instrument, stationery: this.stationery, noteOverlapManager: this.noteOverlapManager, lessonData: this.lessonData, achievement: this.achievement });
		this.musicPlayBar = new LessonMusicPlayBar(this.game, new CONSTANTS.MusicPlayBar, { music: this.music, instrument: this.instrument, musicPlayer: this.musicPlayer, noteOverlapManager: this.noteOverlapManager, speed: this.speed, achievement: this.achievement });
		this.upButton = new ScrollButton(this.game, new CONSTANTS.UpButton, { music: this.music, });
        this.downButton = new ScrollButton(this.game, new CONSTANTS.DownButton, { music: this.music, });
        this.rightButton = new ScrollButton(this.game, new CONSTANTS.RightButton, { music: this.music, });
		this.leftButton = new LessonScrollButton(this.game, new CONSTANTS.LeftButton, { music: this.music, achievement: this.achievement });
        this.storageModal = new StorageModal(this.game, new CONSTANTS.StorageModal, { musicStorage: this.musicStorage });
		this.targetNotes = new TargetNotes(this.game, new LESSON.TargetNotes, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
		this.nextButton = new NextButton(this.game, new LESSON.NextButton, { lessonData: this.lessonData, achievement: this.achievement, musicPlayer: this.musicPlayer });
		this.prohibitedDisplay = new ProhibitedDisplay(this.game, new LESSON.ProhibitedDisplay, { achievement: this.achievement });
		this.traceDisplay = new TraceDisplay(this.game, new LESSON.TraceDisplay, { achievement: this.achievement });
		this.fillingDisplay = new FillingDisplay(this.game, new LESSON.FillingDisplay, { achievement: this.achievement });
		this.lessonModal = new LessonModal(this.game, new LESSON.LessonModal, { music: this.music, achievement: this.achievement, lessonData: this.lessonData });
		if (this.lessonData.getMode === new LESSON.Achievement().mode.filling) this.blanks = new Blanks(this.game, new LESSON.Blanks, { music: this.music, lessonData: this.lessonData, achievement: this.achievement });
        if (this.lessonData.getInherit) this.loadButton.setMusic(this.lessonData.getInherit);
		this.musicPlayBar.bringToTop();
		this.music.refresh();
	}
}