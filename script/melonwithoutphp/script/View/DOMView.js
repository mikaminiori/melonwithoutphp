/// <reference path="../FreeMakingMusic.ref.ts"/>
// This class is super class of each DOM element View.
// Inheritance of this class means the child class is one of DOM element View(Concrete Observer).
var DOMView = (function () {
    // DOMObjects have reference of their models. 
    // This is object. So it's recommended to get each model in child classes.
    function DOMView(game, constants, models) {
        this.game = game;
        this.models = models;
        // DOMObjects have their own Element of jQuery by using selector.
        this.$ = $(constants.selector);
    }
    DOMView.prototype.pushEvent = function () {
        return this.game.device.touch ? "touchstart" : "mousedown";
    };
    DOMView.prototype.pullEvent = function () {
        return this.game.device.touch ? "touchend" : "mouseup";
    };
    DOMView.prototype.toId = function (name) {
        return "#" + name;
    };
    DOMView.prototype.makeDiv = function (id) {
        return $("<div id=" + id + "></div>");
    };
    DOMView.prototype.IECheck = function () {
        var userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.indexOf('msie') == -1 && userAgent.indexOf('trident') != -1 || userAgent.indexOf('msie') != -1)
            return true;
        return false;
    };
    return DOMView;
})();
//# sourceMappingURL=DOMView.js.map