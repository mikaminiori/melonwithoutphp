{
    let locations = {
        Libraries: "storage/lib/",
        Constants: "script/Constants/",
				Model: "script/Model/",
        View: "script/View/",
        HTMLView: "script/HTMLView/",
        Main: "script/Main/",
    };

    let scripts = {
        Libraries: [
            "jquery-1.11.3",
			"jquery-uvg",
            "underscore",
        ],

		Model: [
			"Language",
		],

        View: [
            "HTMLView",
        ],

        Constants: [
            "Constants",
            "index.const",
        ],

        HTMLView: [
            "HTMLLogo",
			"UserName",
			"LogInAndOutButton",
			"RegistButton",
			"LanguageSelector",
            "ModeButton",
        ],

        Main: [
            "index",
        ],
    };

    for (let locationName in locations) {
        let location = locations[locationName];
        for (let script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}