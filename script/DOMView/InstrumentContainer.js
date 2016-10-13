/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InstrumentContainer = (function (_super) {
    __extends(InstrumentContainer, _super);
    function InstrumentContainer(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.instrument = this.models["instrument"];
        this.isOpen = false;
        this.setView();
        this.setEvent();
    }
    InstrumentContainer.prototype.setView = function () {
        var _this = this;
        this.$.css("height", this.constants.containerHeight);
        this.constants.instruments.forEach(function (instrument) {
            _this.$.append($("<div id=\"" + instrument + "\"></div>"));
            new InstrumentOption(_this.game, new CONSTANTS.InstrumentOption, _this.models, instrument);
        });
    };
    InstrumentContainer.prototype.setEvent = function () {
        var _this = this;
        this.instrument.onChangeInstrument.add(function () { _this.close(); });
    };
    InstrumentContainer.prototype.close = function () {
        this.$.stop(true, true).slideUp(this.constants.slideTime);
        this.isOpen = false;
    };
    InstrumentContainer.prototype.slideToggle = function () {
        this.$.stop(true, true).slideToggle(this.constants.slideTime);
        this.isOpen = !this.isOpen;
        if (this.isOpen)
            this.game.sound.play("open");
        else
            this.game.sound.play("close");
    };
    return InstrumentContainer;
})(DOMView);
//# sourceMappingURL=InstrumentContainer.js.map