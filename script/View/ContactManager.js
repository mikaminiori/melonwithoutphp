/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This is the class to manage collision and overlap of Phaser objects.
var ContactManager = (function (_super) {
    __extends(ContactManager, _super);
    function ContactManager(game) {
        _super.call(this, game);
        this.collideObjects = [];
        this.overlapObjects = [];
    }
    ContactManager.prototype.checkAllContact = function () {
        this.checkAllCollide();
        this.checkAllOverlap();
    };
    ContactManager.prototype.addCollide = function (obj1, obj2, eachOther) {
        if (eachOther === void 0) { eachOther = false; }
        this.collideObjects.push([obj1, obj2]);
    };
    ContactManager.prototype.addOverlap = function (obj1, obj2, eachOther) {
        if (eachOther === void 0) { eachOther = false; }
        this.overlapObjects.push([obj1, obj2]);
    };
    ContactManager.prototype.checkAllCollide = function () {
        var _this = this;
        this.collideObjects.forEach(function (value) {
            if (value[0] === null || value[1] === null)
                return;
            _this.collide(value[0], value[1], function (sprite1, sprite2) {
                ContactManager.prototype.onCollide(sprite1, sprite2);
            });
        });
    };
    ContactManager.prototype.checkAllOverlap = function () {
        var _this = this;
        this.overlapObjects.forEach(function (value) {
            if (value[0] === null || value[1] === null)
                return;
            _this.overlap(value[0], value[1], function (sprite1, sprite2) {
                ContactManager.prototype.onOverlap(sprite1, sprite2);
            });
        });
    };
    ContactManager.prototype.onCollide = function (sprite1, sprite2) {
        sprite1.onCollide(sprite2);
        sprite2.onCollide(sprite1);
    };
    ContactManager.prototype.onOverlap = function (sprite1, sprite2) {
        sprite1.onOverlap(sprite2);
        sprite2.onOverlap(sprite1);
    };
    return ContactManager;
})(Phaser.Physics.Arcade);
// OverlapManager: this class can detect "offOverlap".
var OverlapManager = (function (_super) {
    __extends(OverlapManager, _super);
    function OverlapManager(game) {
        _super.call(this, game);
        this.overlapObjects = [];
    }
    OverlapManager.prototype.add = function (obj1, obj2, once) {
        if (once === void 0) { once = false; }
        this.overlapObjects.push({ object1: obj1, object2: obj2, count: 0, once: once, before: false });
    };
    OverlapManager.prototype.checkAllOverlap = function () {
        var _this = this;
        this.overlapObjects.forEach(function (data) {
            var isOverlap = _this.checkOverlap(data);
            if (data.before && !isOverlap)
                _this.offOverlap(data);
            data.before = isOverlap;
        });
    };
    OverlapManager.prototype.checkOverlap = function (data) {
        var overlap = this.overlap(data.object1, data.object2);
        if (overlap && (!data.once || data.count < 1))
            this.onOverlap(data);
        return overlap;
    };
    OverlapManager.prototype.onOverlap = function (data) {
        data.count++;
        data.object1.onOverlap(data.object2);
        data.object2.onOverlap(data.object1);
    };
    OverlapManager.prototype.offOverlap = function (data) {
        data.count = 0;
        data.object1.offOverlap(data.object2);
        data.object2.offOverlap(data.object1);
    };
    return OverlapManager;
})(Phaser.Physics.Arcade);
// NoteOverlapManager : this class can set musicPlayBar and Notes. Exclusively for this software...
var NoteOverlapManager = (function (_super) {
    __extends(NoteOverlapManager, _super);
    function NoteOverlapManager(game) {
        _super.call(this, game);
    }
    NoteOverlapManager.prototype.setMusicPlayBar = function (musicPlayBar) {
        this.musicPlayBar = musicPlayBar;
    };
    NoteOverlapManager.prototype.addNote = function (note) {
        this.add(this.musicPlayBar, note, true);
    };
    NoteOverlapManager.prototype.removeNote = function (note) {
        var remove = _.find(this.overlapObjects, function (object) { return object.object2 === note; });
        this.overlapObjects = _.without(this.overlapObjects, remove);
    };
    return NoteOverlapManager;
})(OverlapManager);
//# sourceMappingURL=ContactManager.js.map