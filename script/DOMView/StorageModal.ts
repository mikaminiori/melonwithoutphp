/// <reference path="../FreeMakingMusic.ref.ts"/>

class StorageModal extends ModalWindow {

    private musicStorage: MusicStorage = this.models["musicStorage"];

    constructor(game: Phaser.Game, private constants: CONSTANTS.StorageModal, models: Object) {
        super(game, constants.modalConstants, models);
        this.setEvent();
    }

    private setEvent() {
        this.musicStorage.onSaveConfirm.add(() => { this.saveConfirm(); });
        this.musicStorage.onSave.add(() => { this.save(); });
        this.musicStorage.onLoadConfirm.add((exist: boolean) => { this.loadConfirm(exist); });
        this.musicStorage.onLoad.add(() => { this.load(); });
    }

    saveConfirm() {
        this.game.sound.play("decide");
        this.confirm(this.constants.saveConfirmMsg);
        this.onYes.addOnce(() => { this.musicStorage.save(); });
        this.onNo.addOnce(() => { this.game.sound.play("close"); });
    }

    save() {
        this.game.sound.play("save");
        this.alert(this.constants.saveMsg);
    }

    loadConfirm(exist: boolean) {
        if (!exist) { this.loadFailed(); return; }
		this.game.sound.play("decide");
        this.confirm(this.constants.loadConfirmMsg);
        this.onYes.addOnce(() => { this.musicStorage.load(); });
        this.onNo.addOnce(() => { this.game.sound.play("close"); });
    }

    loadFailed() {
        this.game.sound.play("boo");
        this.alert(this.constants.loadFailMsg);
    }

    load() {
        this.game.sound.play("load");
    }
}