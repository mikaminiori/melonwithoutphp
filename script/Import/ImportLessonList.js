{
    var locations = {
        Libraries: "storage/lib/",
        Constants: "script/Constants/",
        View: "script/View/",
        HTMLView: "script/HTMLView/",
        Main: "script/Main/",
    };
    var scripts = {
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
    for (var locationName in locations) {
        var location_1 = locations[locationName];
        for (var _i = 0, _a = scripts[locationName]; _i < _a.length; _i++) {
            var script = _a[_i];
            document.write("<script src=" + (location_1 + script + ".js") + "></script>");
        }
    }
}
//# sourceMappingURL=ImportLessonList.js.map