/// <reference path="../Lesson.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NextButton = (function (_super) {
    __extends(NextButton, _super);
    function NextButton(game, constants, models) {
        var _this = this;
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.lessonData = this.models["lessonData"];
        this.achievement = this.models["achievement"];
        this.musicPlayer = this.models["musicPlayer"];
        this.onActive = _.once(function () {
            _this.setSelectEffect();
            _this.$.css("background-color", "orange").unbind(_this.pushEvent()).on(_this.pushEvent(), function () { return _this.move(); });
            _this.achievement.activate();
        });
        this.setView();
        this.setEvents();
    }
    NextButton.prototype.setView = function () {
        this.$.text(this.constants.next[this.constants.lang]);
    };
    NextButton.prototype.setEvents = function () {
        var _this = this;
        this.achievement.onFinish.add(function () { _this.$.on(_this.pushEvent(), function () { return _this.alert(); }); });
        this.musicPlayer.onStop.add(function () { if (_this.achievement.isFinished)
            _this.onActive(); });
        this.$.on(this.pushEvent(), function () { if (!_this.achievement.isFinished)
            _this.game.sound.play("boo"); });
        this.$.select(function () { return false; });
    };
    NextButton.prototype.alert = function () {
        if (!this.musicPlayer.isPlaying) {
            this.achievement.playAlert();
            return;
        }
        this.achievement.stopAlert();
    };
    NextButton.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.hover(function () { _this.$.css("box-shadow", "0 0 20px 6px lawngreen"); _this.game.sound.play("select"); }, function () { return _this.$.css("box-shadow", "none"); });
    };
    NextButton.prototype.move = function () {
        var _this = this;
        this.game.sound.play("decide");
        setTimeout(function () { document.location = _this.lessonData.getNextUrl; }, 500);
    };
    return NextButton;
})(DOMView);
//# sourceMappingURL=NextButton.js.map