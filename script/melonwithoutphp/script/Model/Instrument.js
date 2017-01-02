/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Instrument = (function (_super) {
    __extends(Instrument, _super);
    function Instrument(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.onChangeInstrument = new Phaser.Signal();
        this.changeInstrument(this.constants.instruments[this.constants.initInstrument]);
    }
    Object.defineProperty(Instrument.prototype, "getInstrument", {
        get: function () {
            return this.instrument;
        },
        enumerable: true,
        configurable: true
    });
    Instrument.prototype.changeInstrument = function (instrument) {
        if (this.instrument && instrument == this.instrument)
            return;
        if (!_.include(this.constants.instruments, instrument))
            return;
        this.instrument = instrument;
        this.onChangeInstrument.dispatch();
    };
    return Instrument;
})(Model);
//# sourceMappingURL=Instrument.js.map