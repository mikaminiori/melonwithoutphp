/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MelOn = (function (_super) {
    __extends(MelOn, _super);
    function MelOn() {
        _super.apply(this, arguments);
        // ========== Model ==========
        this.music = new Music(new CONSTANTS.Music);
        this.stationery = new Stationery(new CONSTANTS.Stationery);
        this.musicPlayer = new MusicPlayer(new CONSTANTS.MusicPlayer);
        this.instrument = new Instrument(new CONSTANTS.Instrument);
        this.speed = new Speed(new CONSTANTS.Speed);
        this.musicStorage = new MusicStorage(new CONSTANTS.MusicStorage);
    }
    MelOn.prototype.create = function () {
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
    };
    MelOn.prototype.update = function () {
        this.noteOverlapManager.checkAllOverlap();
        this.soundButtonContainer.update();
        this.upButton.update();
        this.downButton.update();
        this.rightButton.update();
        this.leftButton.update();
        this.notes.update();
    };
    MelOn.prototype.render = function () {
        //this.game.debug.text(this.game.time.fps + 'fps', 0, 20);
    };
    return MelOn;
})(Phaser.State);
//# sourceMappingURL=MelOn.js.map