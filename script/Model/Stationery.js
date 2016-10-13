/// <reference path="../FreeMakingMusic.ref.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This class is one of Model(Concrete Subject)
var Stationery = (function (_super) {
    __extends(Stationery, _super);
    function Stationery(constants) {
        _super.call(this, constants);
        this.constants = constants;
        this.onChangeStationery = new Phaser.Signal();
        // Set initial stationery name.
        this.stationery = this.constants.initStationery;
    }
    Object.defineProperty(Stationery.prototype, "getStationery", {
        // get accessor means this method has to return specific value and not to set any arguments.
        get: function () {
            return this.stationery;
        },
        enumerable: true,
        configurable: true
    });
    Stationery.prototype.changeStationery = function (name) {
        this.stationery = name;
        this.onChangeStationery.dispatch();
    };
    return Stationery;
})(Model);
//# sourceMappingURL=Stationery.js.map