{
    var locations = {
        Libraries: "storage/lib/",
        Constants: "script/Constants/",
        Model: "script/Model/",
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
    for (var locationName in locations) {
        var location_1 = locations[locationName];
        for (var _i = 0, _a = scripts[locationName]; _i < _a.length; _i++) {
            var script = _a[_i];
            document.write("<script src=" + (location_1 + script + ".js") + "></script>");
        }
    }
}
//# sourceMappingURL=ImportIndex.js.map