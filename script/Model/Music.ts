/// <reference path="../FreeMakingMusic.ref.ts"/>

interface NoteData {
    pitch: string;
    unitNote: number;
    start: number;
    extension: number;
}

interface MusicData { [pitch: string]: NoteData[] }

class Music extends Model {
    private music: MusicData;
    private selectedNote: NoteData = null;

    onSelect: Phaser.Signal = new Phaser.Signal();
    onRefresh: Phaser.Signal = new Phaser.Signal();
    onWrite: Phaser.Signal = new Phaser.Signal();
    onErase: Phaser.Signal = new Phaser.Signal();
    onEraseAll: Phaser.Signal = new Phaser.Signal();
    onMove: Phaser.Signal = new Phaser.Signal();
    onChangeExtension: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.Music) {
        super(constants);
        this.music = <any>_.object(this.constants.pitch, _.times(this.constants.pitchNum, () => { return [] }));
    }

    checkExist(pitch: string, unitNote: number, point: number): boolean {
        return this.music[pitch].some((note: NoteData) => { return note.start <= point && point <= note.start + note.extension; });
    }

    get getSelectedNote(): NoteData {
        return this.selectedNote;
    }

    get getMusic(): MusicData {
        return this.music;
    }

    select(note: NoteData) {
        this.selectedNote = note;
        this.onSelect.dispatch();
    }

    refresh() {
        this.selectedNote = null;
        this.onRefresh.dispatch();
    }

    write(note: NoteData) {
        this.select(this.music[note.pitch][this.music[note.pitch].push(note) - 1]);
        this.onWrite.dispatch();
    }

    erase(note: NoteData) {
        this.music[note.pitch].splice(this.music[note.pitch].indexOf(note), 1);
		this.onErase.dispatch();
		this.refresh();
    }

    moveHorizontally(note: NoteData, right: boolean) {
        var checkPosition: number = note.start + (right ? note.extension + 1 : -1);
        if (checkPosition < 0 || checkPosition > note.unitNote * this.constants.measureNum) return;
        if (this.checkExist(note.pitch, note.unitNote, checkPosition)) return;
        note.start += right ? 1 : -1;
        this.onMove.dispatch();
    }

    moveVertically(note: NoteData, up: boolean) {
        var destination: string = this.constants.pitch[this.constants.pitch.indexOf(note.pitch) - (up ? 1 : -1)];
        if (!destination) return;
        for (var position = note.start; position <= note.start + note.extension; position++)
            if (this.checkExist(destination, note.unitNote, position)) return;
        this.music[note.pitch].splice(this.music[note.pitch].indexOf(note), 1);
        note.pitch = destination;
        this.music[note.pitch].push(note);
        this.onMove.dispatch();
    }

    lengthen(note: NoteData) {
        if (this.checkExist(note.pitch, note.unitNote, note.start + note.extension + 1)) return;
        note.extension++;
        this.onChangeExtension.dispatch();
    }

    shorten(note: NoteData) {
        note.extension--;
        if (note.extension < 0) note.extension = 0;
        this.onChangeExtension.dispatch();
    }

    eraseAll() {
        this.onEraseAll.dispatch();
    }

    createNote(note: NoteData) {
        this.write(note);
        this.onChangeExtension.dispatch();
    }

    setMusic(music: MusicData) {
        this.eraseAll();
        _.each(music, (line: NoteData[]) => { _.each(line, (note: NoteData) => { this.createNote(note); }); });
        this.refresh();
    }
}