/// <reference path="../FreeMakingMusic.ref.ts"/>

// This is the class to manage collision and overlap of Phaser objects.

class ContactManager extends Phaser.Physics.Arcade {
    collideObjects: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)][] = [];
    overlapObjects: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)][] = [];

    constructor(game: Phaser.Game) {
        super(game);
    }

    checkAllContact() {
        this.checkAllCollide();
        this.checkAllOverlap();
    }

    addCollide(obj1: (Phaser.Sprite | Phaser.Group), obj2: (Phaser.Sprite | Phaser.Group),
        eachOther: boolean = false) {
        this.collideObjects.push([obj1, obj2]);
    }

    addOverlap(obj1: (Phaser.Sprite | Phaser.Group), obj2: (Phaser.Sprite | Phaser.Group),
        eachOther: boolean = false) {
        this.overlapObjects.push([obj1, obj2]);
    }

    checkAllCollide() {
        this.collideObjects.forEach((value: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)]) => {
            if (value[0] === null || value[1] === null) return;
            this.collide(value[0], value[1], (sprite1, sprite2) => {
                ContactManager.prototype.onCollide(sprite1, sprite2);
            });
        });
    }

    checkAllOverlap() {
        this.overlapObjects.forEach((value: [(Phaser.Sprite | Phaser.Group), (Phaser.Sprite | Phaser.Group)]) => {
            if (value[0] === null || value[1] === null) return;
            this.overlap(value[0], value[1], (sprite1, sprite2) => {
                ContactManager.prototype.onOverlap(sprite1, sprite2);
            });
        });
    }

    private onCollide(sprite1: SpriteView, sprite2: SpriteView) {
        sprite1.onCollide(sprite2);
        sprite2.onCollide(sprite1);
    }

    private onOverlap(sprite1: SpriteView, sprite2: SpriteView) {
        sprite1.onOverlap(sprite2);
        sprite2.onOverlap(sprite1);
    }
}

// OverlapManager: this class can detect "offOverlap".

class OverlapManager extends Phaser.Physics.Arcade {
    overlapObjects: {
        object1: (Phaser.Sprite | Phaser.Group),
        object2: (Phaser.Sprite | Phaser.Group),
        count: number,
        once: boolean,
        before: boolean,
    }[] = [];

    constructor(game: Phaser.Game) {
        super(game);
    }

    add(obj1: (Phaser.Sprite | Phaser.Group), obj2: (Phaser.Sprite | Phaser.Group), once: boolean = false) {
        this.overlapObjects.push({ object1: obj1, object2: obj2, count: 0, once: once, before: false });
    }

    checkAllOverlap() {
        this.overlapObjects.forEach((data: any) => {
            var isOverlap = this.checkOverlap(data);
            if (data.before && !isOverlap) this.offOverlap(data);
            data.before = isOverlap;
        });
    }

    private checkOverlap(data: any): boolean {
        var overlap = this.overlap(data.object1, data.object2);
        if (overlap && (!data.once || data.count < 1)) this.onOverlap(data);
        return overlap;
    }

    private onOverlap(data: any) {
        data.count++;
        data.object1.onOverlap(data.object2);
        data.object2.onOverlap(data.object1);
    }

    private offOverlap(data: any) {
        data.count = 0;
        data.object1.offOverlap(data.object2);
        data.object2.offOverlap(data.object1);
    }
}

// NoteOverlapManager : this class can set musicPlayBar and Notes. Exclusively for this software...

class NoteOverlapManager extends OverlapManager {

    private musicPlayBar: MusicPlayBar;

    constructor(game: Phaser.Game) {
        super(game);
    }

    setMusicPlayBar(musicPlayBar: MusicPlayBar) {
        this.musicPlayBar = musicPlayBar;
    }

    addNote(note: Note) {
        this.add(this.musicPlayBar, note, true);
    }

    removeNote(note: Note) {
        var remove: any = _.find(this.overlapObjects, (object: any) => { return object.object2 === note; });
        this.overlapObjects = _.without(this.overlapObjects, remove);
    }
}