/// <reference path="../FreeMakingMusic.ref.ts"/>
var AssetLoader = (function () {
    function AssetLoader() {
        this.addresses = {
            images: "",
            spriteSheets: "",
            audios: "",
            preloadImages: "",
            preloadSpriteSheets: "",
            preloadAudios: "",
        };
        this.enum = {
            KEY: 0,
            FILE: 1,
            FRAME_WIDTH: 2,
            FRAME_HEIGHT: 3,
        };
        this.images = {};
        this.spriteSheets = {};
        this.audios = {};
        this.preloadImages = {};
        this.preloadSpriteSheets = {};
        this.preloadAudios = {};
    }
    AssetLoader.prototype.load = function (loader) {
        loader.baseURL = this.baseURL + "/";
        this.loadImages(loader, this.images, this.addresses.images);
        this.loadSpriteSheets(loader, this.spriteSheets, this.addresses.spriteSheets);
        this.loadAudios(loader, this.audios, this.addresses.audios);
    };
    AssetLoader.prototype.preload = function (loader) {
        loader.baseURL = this.baseURL + "/";
        this.loadImages(loader, this.preloadImages, this.addresses.preloadImages);
        this.loadSpriteSheets(loader, this.preloadSpriteSheets, this.addresses.preloadSpriteSheets);
        this.loadAudios(loader, this.preloadAudios, this.addresses.preloadAudios);
    };
    AssetLoader.prototype.loadImages = function (loader, images, base) {
        var _this = this;
        _.each(images, function (assets, name) {
            _.each(assets, function (asset) {
                loader.image(asset[_this.enum.KEY], base + "/" + name + "/" + asset[_this.enum.FILE]);
            });
        });
    };
    AssetLoader.prototype.loadSpriteSheets = function (loader, spritesheets, base) {
        var _this = this;
        _.each(spritesheets, function (assets, name) {
            _.each(assets, function (asset) {
                loader.spritesheet(asset[_this.enum.KEY], base + "/" + name + "/" + asset[_this.enum.FILE], asset[_this.enum.FRAME_WIDTH], asset[_this.enum.FRAME_HEIGHT]);
            });
        });
    };
    AssetLoader.prototype.loadAudios = function (loader, audios, base) {
        var _this = this;
        loader.enableParallel = false;
        _.each(audios, function (assets, name) {
            _.each(assets, function (asset) {
                _.each(asset[_this.enum.FILE], function (value, index) {
                    asset[_this.enum.FILE][index] = base + "/" + name + "/" + value;
                });
                loader.audio(asset[_this.enum.KEY], asset[_this.enum.FILE]);
            });
        });
        //loader.enableParallel = true;
    };
    return AssetLoader;
})();
//# sourceMappingURL=AssetLoader.js.map