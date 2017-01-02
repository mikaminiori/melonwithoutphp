/// <reference path="../FreeMakingMusic.ref.ts"/>

class MelOn extends Phaser.State {
    // ========== Model ==========
    protected music: Music = new Music(new CONSTANTS.Music);
    protected stationery: Stationery = new Stationery(new CONSTANTS.Stationery);
    protected musicPlayer: MusicPlayer = new MusicPlayer(new CONSTANTS.MusicPlayer);
    protected instrument: Instrument = new Instrument(new CONSTANTS.Instrument);
    protected speed: Speed = new Speed(new CONSTANTS.Speed);
    protected musicStorage: MusicStorage = new MusicStorage(new CONSTANTS.MusicStorage);

    // ========== View ==========
    protected noteOverlapManager: NoteOverlapManager; // View Manager is middle of Model and View ?
    protected stationeryToggler: StationeryToggler;
    protected pencil: StationeryButton;
    protected eraser: StationeryButton;
    protected speedDisplay: SpeedDisplay;
    protected speedUpButton: SpeedButton;
    protected speedDownButton: SpeedButton;
    protected playButton: PlayButton;
    protected saveButton: SaveButton;
    protected loadButton: LoadButton;
    protected instrumentMenu: InstrumentMenu;
    protected soundButtonContainer: SoundButtonContainer;
    protected upButton: ScrollButton;
    protected downButton: ScrollButton;
    protected rightButton: ScrollButton;
    protected leftButton: ScrollButton;
    protected scoreSheet: ScoreSheet;
    protected notes: Notes;
    protected musicPlayBar: MusicPlayBar;
    protected storageModal: StorageModal;
    
    create() {
        this.noteOverlapManager = new NoteOverlapManager(this.game);
        this.stationeryToggler = new StationeryToggler(this.game, new CONSTANTS.StationeryToggler, { stationery: this.stationery });
        this.pencil = new StationeryButton(this.game, new CONSTANTS.Pencil, { stationery: this.stationery });
        this.eraser = new StationeryButton(this.game, new CONSTANTS.Eraser, { stationery: this.stationery });
        this.speedDisplay = new SpeedDisplay(this.game, new CONSTANTS.SpeedDisplay, { speed: this.speed });
        this.speedUpButton = new SpeedButton(this.game, new CONSTANTS.SpeedUpButton, { speed: this.speed });
        this.speedDownButton = new SpeedButton(this.game, new CONSTANTS.SpeedDownButton, { speed: this.speed });
        this.playButton = new PlayButton(this.game, new CONSTANTS.PlayButton, { musicPlayer: this.musicPlayer });
        this.saveButton = new SaveButton(this.game, new CONSTANTS.SaveButton, { music: this.music, musicStorage: this.musicStorage, instrument: this.instrument, speed: this.speed });
        this.loadButton = new LoadButton(this.game, new CONSTANTS.LoadButton, { music: this.music, musicStorage: this.musicStorage, instrument: this.instrument, speed: this.speed });
        this.instrumentMenu = new InstrumentMenu(this.game, new CONSTANTS.InstrumentMenu, { instrument: this.instrument, musicPlayer: this.musicPlayer });
        this.soundButtonContainer = new SoundButtonContainer(this.game, new CONSTANTS.SoundButtonContainer, { instrument: this.instrument });
        this.scoreSheet = new ScoreSheet(this.game, new CONSTANTS.ScoreSheet, { music: this.music, stationery: this.stationery, musicPlayer: this.musicPlayer });
        this.notes = new Notes(this.game, new CONSTANTS.Notes, { music: this.music, musicPlayer: this.musicPlayer, instrument: this.instrument, stationery: this.stationery, noteOverlapManager: this.noteOverlapManager });
        this.musicPlayBar = new MusicPlayBar(this.game, new CONSTANTS.MusicPlayBar, { music: this.music, instrument: this.instrument, musicPlayer: this.musicPlayer, noteOverlapManager: this.noteOverlapManager, speed: this.speed });
        this.upButton = new ScrollButton(this.game, new CONSTANTS.UpButton, { music: this.music, });
        this.downButton = new ScrollButton(this.game, new CONSTANTS.DownButton, { music: this.music, });
        this.rightButton = new ScrollButton(this.game, new CONSTANTS.RightButton, { music: this.music, });
        this.leftButton = new ScrollButton(this.game, new CONSTANTS.LeftButton, { music: this.music, });
        this.storageModal = new StorageModal(this.game, new CONSTANTS.StorageModal, { musicStorage: this.musicStorage });
    }

    update() {
        this.noteOverlapManager.checkAllOverlap();
        this.soundButtonContainer.update();
        this.upButton.update();
        this.downButton.update();
        this.rightButton.update();
        this.leftButton.update();
        this.notes.update();
    }

	render() {
		//this.game.debug.text(this.game.time.fps + 'fps', 0, 20);
	}
}