/// <reference path="../FreeMakingMusic.ref.ts"/>

// This class is one of Model(Concrete Subject)

class Stationery extends Model {
    // This is essence of this Model class.
    private stationery: string;
    onChangeStationery: Phaser.Signal = new Phaser.Signal();

    constructor(private constants: CONSTANTS.Stationery) {
        super(constants);

        // Set initial stationery name.
        this.stationery = this.constants.initStationery;
    }

    // get accessor means this method has to return specific value and not to set any arguments.
    get getStationery(): string {
        return this.stationery;
    }

    changeStationery(name: string) {
        this.stationery = name;
        this.onChangeStationery.dispatch();
    }
}