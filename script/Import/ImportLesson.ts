{
    let locations = {
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
    }

    let scripts = {
        Libraries: [
			"phaser",
			"jquery-1.11.3",
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
			"LessonList.const",
			"Lesson.const",
        ],

        Model: [
			"Model",
			"Music",
			"Stationery",
			"MusicPlayer",
			"Instrument",
			"Speed",
			"LessonData",
			"Achievement",
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
			"NextButton",
			"Lecture",
			"ModalWindow",
			"StorageModal",
			"LessonModal",
			"ReturnButton",
			"RestDisplay",
        ],

        GroupView: [
			"ScoreSheet",
			"Notes",
			"TargetNotes",
			"Blanks",
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
			"LessonMelOn",
        ],

        Main: [
            "FreeMakingMusic",
            "Lesson",
        ],
    }

    for (let locationName in locations) {
        let location = locations[locationName];
        for (let script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}