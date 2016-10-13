/// <reference path="../index.ref.ts"/>

class HTMLLogo extends HTMLView{

    constructor(private constants: INDEX.HTMLLogo) {
        super(constants);
        this.setImage("logo");
        this.$.click(() => { this.audioPlay(this.audios["MelOn"]); });
    }
}