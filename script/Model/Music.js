/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Music = (function (_super) {
    __extends(Music, _super);
    function Music(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.selectedNote = null;
        this.onSelect = new Phaser.Signal();
        this.onRefresh = new Phaser.Signal();
        this.onWrite = new Phaser.Signal();
        this.onErase = new Phaser.Signal();
        this.onEraseAll = new Phaser.Signal();
        this.onMove = new Phaser.Signal();
        this.onChangeExtension = new Phaser.Signal();
        this.music = _.object(this.constants.pitch, _.times(this.constants.pitchNum, function () { return []; }));
    }
    Music.prototype.checkExist = function (pitch, unitNote, point) {
        return this.music[pitch].some(function (note) { return note.start <= point && point <= note.start + note.extension; });
    };
    Object.defineProperty(Music.prototype, "getSelectedNote", {
        get: function () {
            return this.selectedNote;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "getMusic", {
        get: function () {
            return this.music;
        },
        enumerable: true,
        configurable: true
    });
    Music.prototype.select = function (note) {
        this.selectedNote = note;
        this.onSelect.dispatch();
    };
    Music.prototype.refresh = function () {
        this.selectedNote = null;
        this.onRefresh.dispatch();
    };
    Music.prototype.write = function (note) {
        this.select(this.music[note.pitch][this.music[note.pitch].push(note) - 1]);
        this.onWrite.dispatch();
    };
    Music.prototype.erase = function (note) {
        this.music[note.pitch].splice(this.music[note.pitch].indexOf(note), 1);
        this.onErase.dispatch();
        this.refresh();
    };
    Music.prototype.moveHorizontally = function (note, right) {
        var checkPosition = note.start + (right ? note.extension + 1 : -1);
        if (checkPosition < 0 || checkPosition > note.unitNote * this.constants.measureNum)
            return;
        if (this.checkExist(note.pitch, note.unitNote, checkPosition))
            return;
        note.start += right ? 1 : -1;
        this.onMove.dispatch();
    };
    Music.prototype.moveVertically = function (note, up) {
        var destination = this.constants.pitch[this.constants.pitch.indexOf(note.pitch) - (up ? 1 : -1)];
        if (!destination)
            return;
        for (var position = note.start; position <= note.start + note.extension; position++)
            if (this.checkExist(destination, note.unitNote, position))
                return;
        this.music[note.pitch].splice(this.music[note.pitch].indexOf(note), 1);
        note.pitch = destination;
        this.music[note.pitch].push(note);
        this.onMove.dispatch();
    };
    Music.prototype.lengthen = function (note) {
        if (this.checkExist(note.pitch, note.unitNote, note.start + note.extension + 1))
            return;
        note.extension++;
        this.onChangeExtension.dispatch();
    };
    Music.prototype.shorten = function (note) {
        note.extension--;
        if (note.extension < 0)
            note.extension = 0;
        this.onChangeExtension.dispatch();
    };
    Music.prototype.eraseAll = function () {
        this.onEraseAll.dispatch();
    };
    Music.prototype.createNote = function (note) {
        this.write(note);
        this.onChangeExtension.dispatch();
    };
    Music.prototype.setMusic = function (music) {
        var _this = this;
        this.eraseAll();
        _.each(music, function (line) { _.each(line, function (note) { _this.createNote(note); }); });
        this.refresh();
    };
    return Music;
})(Model);
//# sourceMappingURL=Music.js.map