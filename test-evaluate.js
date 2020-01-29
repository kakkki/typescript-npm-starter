"use strict";
exports.__esModule = true;
var dist_1 = require("./dist");
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.greet = function () {
        dist_1.main();
        console.log('HelloWorld.greet');
    };
    return HelloWorld;
}());
var hello = new HelloWorld();
hello.greet();
require('.').main();
