/// <reference path="../FreeMakingMusic.ref.ts"/>

class AssetLoader {
    protected baseURL: string;

    protected addresses = {
        images: "",
        spriteSheets: "",
        audios: "",
        preloadImages: "",
        preloadSpriteSheets: "",
        preloadAudios: "",
    }

    private enum = {
        KEY: 0,
        FILE: 1,
        FRAME_WIDTH: 2,
        FRAME_HEIGHT: 3,
    }

    protected images: { [dir: string]: [string, string][] } = {};
    protected spriteSheets: { [dir: string]: [string, string, number, number][] } = {};
    protected audios: { [dir: string]: [string, string[]][] } = {};
    protected preloadImages: { [dir: string]: [string, string][] } = {};
    protected preloadSpriteSheets: { [dir: string]: [string, string, number, number][] } = {};
    protected preloadAudios: { [dir: string]: [string, string[]][] } = {};

    load(loader: Phaser.Loader) {
        loader.baseURL = this.baseURL + "/";
        this.loadImages(loader, this.images, this.addresses.images);
        this.loadSpriteSheets(loader, this.spriteSheets, this.addresses.spriteSheets);
        this.loadAudios(loader, this.audios, this.addresses.audios);
    }

     preload(loader: Phaser.Loader) {
        loader.baseURL = this.baseURL + "/";
        this.loadImages(loader, this.preloadImages, this.addresses.preloadImages);
        this.loadSpriteSheets(loader, this.preloadSpriteSheets, this.addresses.preloadSpriteSheets);
        this.loadAudios(loader, this.preloadAudios, this.addresses.preloadAudios);
    }

    private loadImages(loader: Phaser.Loader, images: { [dir: string]: [string, string][] }, base: string) {
        _.each(images, (assets: [string, string][], name: string) => {
            _.each(assets, (asset: [string, string]) => {
                loader.image(asset[this.enum.KEY], base + "/" + name + "/" + asset[this.enum.FILE]);
            });
        });
    }

    private loadSpriteSheets(loader: Phaser.Loader, spritesheets: { [dir: string]: [string, string, number, number][] }, base: string) {
        _.each(spritesheets, (assets: [string, string, number, number][], name: string) => {
            _.each(assets, (asset: any) => {
                loader.spritesheet(asset[this.enum.KEY], base + "/" + name + "/" + asset[this.enum.FILE],
                    asset[this.enum.FRAME_WIDTH], asset[this.enum.FRAME_HEIGHT]);
            });
        });
    }

    private loadAudios(loader: Phaser.Loader, audios: { [dir: string]: [string, string[]][] }, base: string) {
				loader.enableParallel = false;
        _.each(audios, (assets: [string, string[]][], name: string) => {
            _.each(assets, (asset: any) => {
                _.each(asset[this.enum.FILE], (value: string, index: number) => {
                    asset[this.enum.FILE][index] = base + "/" + name + "/" + value;
                });
								loader.audio(asset[this.enum.KEY], asset[this.enum.FILE]);
            });
        });
				//loader.enableParallel = true;
    }
}