/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadButton = (function (_super) {
    __extends(LoadButton, _super);
    function LoadButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.music = this.models["music"];
        this.musicStorage = this.models["musicStorage"];
        this.instrument = this.models["instrument"];
        this.speed = this.models["speed"];
        this.setView();
        this.setEvent();
    }
    LoadButton.prototype.setView = function () {
        this.$.append($("<img src=" + this.constants.image + " />").addClass("buttonImage")
            .css({ width: "70px", height: "50px" }));
    };
    LoadButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.hover(function () { _this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); _this.game.sound.play("select"); }, function () { return _this.$.css("box-shadow", "none"); });
    };
    LoadButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.pushEvent(), function () { return _this.musicStorage.loadConfirm(); });
        this.musicStorage.onLoad.add(function (instrument, speedGrade, music) {
            _this.instrument.changeInstrument(instrument);
            _this.speed.setSpeedGrade(speedGrade);
            _this.setMusic(music);
        });
    };
    LoadButton.prototype.setMusic = function (music) {
        this.game.sound.mute = true;
        this.music.setMusic(music);
        this.game.sound.mute = false;
    };
    return LoadButton;
})(DOMView);
var LessonLoadButton = (function (_super) {
    __extends(LessonLoadButton, _super);
    function LessonLoadButton(game, constants, models) {
        _super.call(this, game, constants, models);
        this.achievement = this.models["achievement"];
        this.playMsg = constants.playMsg;
        this.setModal();
    }
    LessonLoadButton.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.pushEvent(), function () { return _this.loadConfirmWithCheck(); });
        this.musicStorage.onLoad.add(function (instrument, speedGrade, music) {
            _this.instrument.changeInstrument(instrument);
            _this.speed.setSpeedGrade(speedGrade);
            _this.setMusic(music);
        });
    };
    LessonLoadButton.prototype.loadConfirmWithCheck = function () {
        if (this.achievement.isFinished == true && this.achievement.isActivated == false) {
            this.modalWindow.alert(this.playMsg);
            return;
        }
        this.musicStorage.loadConfirm();
    };
    LessonLoadButton.prototype.setModal = function () {
        var _this = this;
        this.modalWindow = new ModalWindow(this.game, new CONSTANTS.ModalWindow, {});
        this.modalWindow.onOpen.add(function () { return _this.game.sound.play("boo"); });
        this.modalWindow.onOk.add(function () { return _this.game.sound.play("decide"); });
    };
    return LessonLoadButton;
})(LoadButton);
//# sourceMappingURL=LoadButton.js.map