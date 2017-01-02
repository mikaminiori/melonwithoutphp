{
    let locations = {
        Libraries: "storage/lib/",
        Constants: "script/Constants/",
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

        View: [
            "HTMLView",
        ],

        Constants: [
			"index.const",
            "Constants",
            "LessonList.const",
        ],

        HTMLView: [
            "HTMLLogo",
			"UserName",
            "JSONList", 
        ],

        Main: [
            "LessonList",
        ],
    };

    for (let locationName in locations) {
        let location = locations[locationName];
        for (let script of scripts[locationName]) document.write(`<script src=${location + script + ".js"}></script>`);
    }
}