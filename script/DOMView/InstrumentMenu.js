/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InstrumentMenu = (function (_super) {
    __extends(InstrumentMenu, _super);
    function InstrumentMenu(game, constants, models) {
        _super.call(this, game, constants, models);
        this.constants = constants;
        this.instrument = this.models["instrument"];
        this.text = $("<div></div>").addClass("instrumentText");
        this.setView();
        this.setEvent();
        this.changeInstrument();
    }
    InstrumentMenu.prototype.setView = function () {
        this.$.addClass("instrumentOption")
            .css("background-color", "blue")
            .css("height", this.constants.height);
        this.$.append(this.text).append($("<div id='instrumentContainer'></div>"));
        this.container = new InstrumentContainer(this.game, new CONSTANTS.InstrumentContainer, this.models);
    };
    InstrumentMenu.prototype.setEvent = function () {
        var _this = this;
        if (!this.game.device.touch)
            this.setSelectEffect();
        this.$.on(this.game.device.touch ? "touchstart" : "mousedown", function () { _this.container.slideToggle(); });
        $(document).on(this.game.device.touch ? "touchstart" : "mousedown", function (event) {
            if (_this.container.isOpen && !$.contains($(_this.constants.selector)[0], event.target))
                _this.container.close();
        });
        this.instrument.onChangeInstrument.add(function () { _this.changeInstrument(); });
    };
    InstrumentMenu.prototype.setSelectEffect = function () {
        var _this = this;
        this.$.on("mouseenter", function () { _this.$.css("box-shadow", "0 0 20px 6px deepskyblue"); _this.game.sound.play("select"); })
            .on("mouseleave", function () { _this.$.css("box-shadow", "none"); });
    };
    InstrumentMenu.prototype.changeInstrument = function () {
        var name = this.instrument.getInstrument;
        this.$.remove("img").append($("<img src=\"" + this.constants.image[name] + "\" />").addClass("instrumentImage"));
        this.text.text(this.constants.instrumentText[this.constants.language][name])
            .css("color", this.constants.textColor[name]);
        this.$.css("background-color", this.constants.backgroundColor[name]);
    };
    return InstrumentMenu;
})(DOMView);
//# sourceMappingURL=InstrumentMenu.js.map