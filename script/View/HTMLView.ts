
class HTMLView {

    protected $: JQuery;
    protected images: { [name: string]: JQuery } = {};
    protected audios: { [name: string]: HTMLAudioElement } = {};

    constructor(constants: INDEX.HTMLView) {
        this.$ = $(constants.selector)
        _.each(constants.images, (src, name) => { this.images[name] = $(`<img src=${src} />`).addClass("image"); });
        _.each(constants.audios, (src, name) => { this.audios[name] = new Audio(src); });
    }

    protected setImage(image: string) {
        this.$.empty();
        this.$.append(this.images[image]);
    }

    protected audioPlay(audio: HTMLAudioElement) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
}