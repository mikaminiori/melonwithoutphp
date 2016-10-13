var HTMLView = (function () {
    function HTMLView(constants) {
        var _this = this;
        this.images = {};
        this.audios = {};
        this.$ = $(constants.selector);
        _.each(constants.images, function (src, name) { _this.images[name] = $("<img src=" + src + " />").addClass("image"); });
        _.each(constants.audios, function (src, name) { _this.audios[name] = new Audio(src); });
    }
    HTMLView.prototype.setImage = function (image) {
        this.$.empty();
        this.$.append(this.images[image]);
    };
    HTMLView.prototype.audioPlay = function (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    };
    return HTMLView;
})();
//# sourceMappingURL=HTMLView.js.map