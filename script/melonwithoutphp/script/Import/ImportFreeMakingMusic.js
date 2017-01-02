{
    var locations = {
        Libraries: "storage/lib/",
        Asset: "script/Asset/",
        Constants: "script/Constants/",
        Boot: "script/Boot/",
        Preloader: "script/Preloader/",
        Model: "script/Model/",
        View: "script/View/",
        HTMLView: "script/HTMLView/",
        DOMView: "script/DOMView/",
        GroupView: "script/GroupView/",
        SpriteView: "script/SpriteView/",
        MelOn: "script/MelOn/",
        Main: "script/Main/",
    };
    var scripts = {
        Libraries: [
            "jquery-1.11.3",
            "phaser",
            
            "jquery-uvg",
            "underscore",
        ],
        Asset: [
            "AssetLoader",
            "MelOnAssets",
        ],
        Constants: [
            "index.const",
            "Constants",
        ],
        Model: [
            "Model",
            "Music",
            "Stationery",
            "MusicPlayer",
            "Instrument",
            "Speed",
            "MusicStorage",
        ],
        View: [
            "HTMLView",
            "DOMView",
            "GroupView",
            "SpriteView",
            "ContactManager",
        ],
        HTMLView: [
            "UserName",
        ],
        DOMView: [
            "ReturnButton",
            "Logo",
            "StationeryToggler",
            "StationeryButton",
            "SpeedDisplay",
            "SpeedButton",
            "PlayButton",
            "SaveButton",
            "LoadButton",
            "InstrumentMenu",
            "InstrumentContainer",
            "InstrumentOption",
            "SoundButtonContainer",
            "SoundButton",
            "ScrollButton",
            "ModalWindow",
            "StorageModal",
        ],
        GroupView: [
            "ScoreSheet",
            "Notes",
        ],
        SpriteView: [
            "MeasureSheet",
            "Note",
            "MusicPlayBar",
        ],
        Boot: [
            "Boot",
        ],
        Preloader: [
            "Preloader",
        ],
        MelOn: [
            "MelOn",
        ],
        Main: [
            "FreeMakingMusic",
        ],
    };
    for (var locationName in locations) {
        var location_1 = locations[locationName];
        for (var _i = 0, _a = scripts[locationName]; _i < _a.length; _i++) {
            var script = _a[_i];
            document.write("<script src=" + (location_1 + script + ".js") + "></script>");
        }
    }
}
//# sourceMappingURL=ImportFreeMakingMusic.js.map