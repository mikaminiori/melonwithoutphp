/// <reference path="../FreeMakingMusic.ref.ts"/>

class MelOnAssets extends AssetLoader {
    protected baseURL = "storage/assets";

    protected addresses = {
        images: "image",
        spriteSheets: "image",
        audios: "sound",
        preloadImages: "image",
        preloadSpriteSheets: "image",
        preloadAudios: "sound",
    }

    protected images: { [dir: string]: [string, string][] } = {
        score: [
            ["musicPlayBar", "playBar.png"],
            ["green", "green.png"],
			["red", "red.png"],
			["clear", "clear.png"],
            ["blank", "blank.png"],
            ["score", "score.png"],
        ]
    };

    // ogg is not supported by IE. But mp3 makes loading time much longer.
    // Google Chrome is recommended.
    protected audios: { [dir: string]: [string, string[]][] } = {

        /*instrument: [
            ["A2", ["A2.ogg", "A2.mp3"]],
            ["A3", ["A3.ogg", "A3.mp3"]],
            ["A4", ["A4.ogg", "A4.mp3"]],
            ["B2", ["B2.ogg", "B2.mp3"]],
            ["B3", ["B3.ogg", "B3.mp3"]],
            ["B4", ["B4.ogg", "B4.mp3"]],
            ["C2", ["C2.ogg", "C2.mp3"]],
            ["C3", ["C3.ogg", "C3.mp3"]],
            ["C4", ["C4.ogg", "C4.mp3"]],
            ["C5", ["C5.ogg", "C5.mp3"]],
            ["D2", ["D2.ogg", "D2.mp3"]],
            ["D3", ["D3.ogg", "D3.mp3"]],
            ["D4", ["D4.ogg", "D4.mp3"]],
            ["E2", ["E2.ogg", "E2.mp3"]],
            ["E3", ["E3.ogg", "E3.mp3"]],
            ["E4", ["E4.ogg", "E4.mp3"]],
            ["F2", ["F2.ogg", "F2.mp3"]],
            ["F3", ["F3.ogg", "F3.mp3"]],
            ["F4", ["F4.ogg", "F4.mp3"]],
            ["G2", ["G2.ogg", "G2.mp3"]],
            ["G3", ["G3.ogg", "G3.mp3"]],
            ["G4", ["G4.ogg", "G4.mp3"]],
        ],*/

        piano: [
            ["pianoA2", ["pianoA2.ogg", "pianoA2.mp3"]],
            ["pianoA3", ["pianoA3.ogg", "pianoA3.mp3"]],
            ["pianoA4", ["pianoA4.ogg", "pianoA4.mp3"]],
            ["pianoB2", ["pianoB2.ogg", "pianoB2.mp3"]],
            ["pianoB3", ["pianoB3.ogg", "pianoB3.mp3"]],
            ["pianoB4", ["pianoB4.ogg", "pianoB4.mp3"]],
            ["pianoC2", ["pianoC2.ogg", "pianoC2.mp3"]],
            ["pianoC3", ["pianoC3.ogg", "pianoC3.mp3"]],
            ["pianoC4", ["pianoC4.ogg", "pianoC4.mp3"]],
            ["pianoC5", ["pianoC5.ogg", "pianoC5.mp3"]],
            ["pianoD2", ["pianoD2.ogg", "pianoD2.mp3"]],
            ["pianoD3", ["pianoD3.ogg", "pianoD3.mp3"]],
            ["pianoD4", ["pianoD4.ogg", "pianoD4.mp3"]],
            ["pianoE2", ["pianoE2.ogg", "pianoE2.mp3"]],
            ["pianoE3", ["pianoE3.ogg", "pianoE3.mp3"]],
            ["pianoE4", ["pianoE4.ogg", "pianoE4.mp3"]],
            ["pianoF2", ["pianoF2.ogg", "pianoF2.mp3"]],
            ["pianoF3", ["pianoF3.ogg", "pianoF3.mp3"]],
            ["pianoF4", ["pianoF4.ogg", "pianoF4.mp3"]],
            ["pianoG2", ["pianoG2.ogg", "pianoG2.mp3"]],
            ["pianoG3", ["pianoG3.ogg", "pianoG3.mp3"]],
            ["pianoG4", ["pianoG4.ogg", "pianoG4.mp3"]],
        ],

        trumpet: [
            ["trumpetA2", ["trumpetA2.ogg", "trumpetA2.mp3"]],
            ["trumpetA3", ["trumpetA3.ogg", "trumpetA3.mp3"]],
            ["trumpetA4", ["trumpetA4.ogg", "trumpetA4.mp3"]],
            ["trumpetB2", ["trumpetB2.ogg", "trumpetB2.mp3"]],
            ["trumpetB3", ["trumpetB3.ogg", "trumpetB3.mp3"]],
            ["trumpetB4", ["trumpetB4.ogg", "trumpetB4.mp3"]],
            ["trumpetC2", ["trumpetC2.ogg", "trumpetC2.mp3"]],
            ["trumpetC3", ["trumpetC3.ogg", "trumpetC3.mp3"]],
            ["trumpetC4", ["trumpetC4.ogg", "trumpetC4.mp3"]],
            ["trumpetC5", ["trumpetC5.ogg", "trumpetC5.mp3"]],
            ["trumpetD2", ["trumpetD2.ogg", "trumpetD2.mp3"]],
            ["trumpetD3", ["trumpetD3.ogg", "trumpetD3.mp3"]],
            ["trumpetD4", ["trumpetD4.ogg", "trumpetD4.mp3"]],
            ["trumpetE2", ["trumpetE2.ogg", "trumpetE2.mp3"]],
            ["trumpetE3", ["trumpetE3.ogg", "trumpetE3.mp3"]],
            ["trumpetE4", ["trumpetE4.ogg", "trumpetE4.mp3"]],
            ["trumpetF2", ["trumpetF2.ogg", "trumpetF2.mp3"]],
            ["trumpetF3", ["trumpetF3.ogg", "trumpetF3.mp3"]],
            ["trumpetF4", ["trumpetF4.ogg", "trumpetF4.mp3"]],
            ["trumpetG2", ["trumpetG2.ogg", "trumpetG2.mp3"]],
            ["trumpetG3", ["trumpetG3.ogg", "trumpetG3.mp3"]],
            ["trumpetG4", ["trumpetG4.ogg", "trumpetG4.mp3"]],
        ],

        violin: [
            ["violinA2", ["violinA2.ogg", "violinA2.mp3"]],
            ["violinA3", ["violinA3.ogg", "violinA3.mp3"]],
            ["violinA4", ["violinA4.ogg", "violinA4.mp3"]],
            ["violinB2", ["violinB2.ogg", "violinB2.mp3"]],
            ["violinB3", ["violinB3.ogg", "violinB3.mp3"]],
            ["violinB4", ["violinB4.ogg", "violinB4.mp3"]],
            ["violinC2", ["violinC2.ogg", "violinC2.mp3"]],
            ["violinC3", ["violinC3.ogg", "violinC3.mp3"]],
            ["violinC4", ["violinC4.ogg", "violinC4.mp3"]],
            ["violinC5", ["violinC5.ogg", "violinC5.mp3"]],
            ["violinD2", ["violinD2.ogg", "violinD2.mp3"]],
            ["violinD3", ["violinD3.ogg", "violinD3.mp3"]],
            ["violinD4", ["violinD4.ogg", "violinD4.mp3"]],
            ["violinE2", ["violinE2.ogg", "violinE2.mp3"]],
            ["violinE3", ["violinE3.ogg", "violinE3.mp3"]],
            ["violinE4", ["violinE4.ogg", "violinE4.mp3"]],
            ["violinF2", ["violinF2.ogg", "violinF2.mp3"]],
            ["violinF3", ["violinF3.ogg", "violinF3.mp3"]],
            ["violinF4", ["violinF4.ogg", "violinF4.mp3"]],
            ["violinG2", ["violinG2.ogg", "violinG2.mp3"]],
            ["violinG3", ["violinG3.ogg", "violinG3.mp3"]],
            ["violinG4", ["violinG4.ogg", "violinG4.mp3"]],
        ],

        se: [
            ["MelOn", ["MelOn!.ogg", "MelOn!.mp3"]],
            ["tamb", ["tamb.ogg", "tamb.mp3"]],
            ["boo", ["boo.ogg", "boo.mp3"]],
            ["close", ["close.ogg", "close.mp3"]],
            ["decide", ["decide.ogg", "decide.mp3"]],
            ["erase", ["erase.ogg", "erase.mp3"]],
            ["load", ["load.ogg", "load.mp3"]],
            ["open", ["open.ogg", "open.mp3"]],
            ["save", ["save.ogg", "save.mp3"]],
            ["select", ["select.mp3", ]],
            ["jump", ["jump.ogg", "jump.mp3"]],
        ],
    };

    protected preloadImages: { [dir: string]: [string, string][] } = {
        game: [
            ["preloadBar", "preloadBar.png"],
        ],

        background: [
            ["background", "background.png"],
        ],
    };
}