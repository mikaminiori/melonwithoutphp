/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MusicStorage = (function (_super) {
    __extends(MusicStorage, _super);
    function MusicStorage(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.loginState = false;
        this.onSaveConfirm = new Phaser.Signal();
        this.onLoadConfirm = new Phaser.Signal();
        this.onSave = new Phaser.Signal();
        this.onLoad = new Phaser.Signal();
        this.loginState = this.isLogIn();
    }
    MusicStorage.prototype.isLogIn = function () {
        var isLogIn = false;
        $.ajax({
            url: this.constants.userNameUrl,
            async: false,
            success: function (name, state) { if (name != "")
                isLogIn = true; }
        });
        return isLogIn;
    };
    MusicStorage.prototype.musicExistInDB = function () {
        var existMusic = false;
        $.ajax({
            url: this.constants.musicExistUrl,
            async: false,
            success: function (data, state) { if (data == "true")
                existMusic = true; }
        });
        return existMusic;
    };
    MusicStorage.prototype.saveInDB = function () {
        $.ajax({
            url: this.constants.musicSaveUrl,
            type: "post",
            data: "instrument=" + this.postInstrument + "&speed=" + this.postSpeedGrade.toString() + "&music=" + this.postMusic,
            async: false,
        });
    };
    MusicStorage.prototype.saveInLocalStorage = function () {
        localStorage.setItem("music", this.postMusic);
        localStorage.setItem("instrument", this.postInstrument);
        localStorage.setItem("speed", this.postSpeedGrade.toString());
    };
    MusicStorage.prototype.saveConfirm = function (music, instrument, speedGrade) {
        this.postMusic = JSON.stringify(music);
        this.postInstrument = instrument;
        this.postSpeedGrade = speedGrade;
        if (this.loginState) {
            if (this.musicExistInDB()) {
                this.onSaveConfirm.dispatch();
                return;
            }
        }
        else {
            if (localStorage.getItem("music")) {
                this.onSaveConfirm.dispatch();
                return;
            }
        }
        this.save();
    };
    MusicStorage.prototype.save = function () {
        this.loginState ? this.saveInDB() : this.saveInLocalStorage();
        this.onSave.dispatch();
    };
    MusicStorage.prototype.loadConfirm = function () {
        if (this.loginState) {
            this.onLoadConfirm.dispatch(this.musicExistInDB());
            return;
        }
        this.postInstrument = localStorage.getItem("instrument");
        this.postSpeedGrade = Number(localStorage.getItem("speed"));
        this.postMusic = localStorage.getItem("music");
        this.onLoadConfirm.dispatch(this.postMusic ? true : false);
    };
    MusicStorage.prototype.load = function () {
        var _this = this;
        if (this.loginState) {
            $.ajax({
                url: this.constants.musicLoadUrl,
                async: false,
                success: function (data, state) {
                    var jsonData = JSON.parse(data);
                    _this.postInstrument = jsonData["instrument"];
                    _this.postSpeedGrade = Number(jsonData["speed"]);
                    _this.postMusic = jsonData["music"];
                }
            });
        }
        this.onLoad.dispatch(this.postInstrument, this.postSpeedGrade, JSON.parse(this.postMusic));
    };
    return MusicStorage;
})(Model);
//# sourceMappingURL=MusicStorage.js.map