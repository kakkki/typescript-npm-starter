'use strict'
exports.__esModule = true
const dist_1 = require('./dist')
const HelloWorld = /** @class */ (function() {
  function HelloWorld() {}
  HelloWorld.prototype.greet = function() {
    dist_1.main()
    console.log('HelloWorld.greet')
  }
  return HelloWorld
})()
const hello = new HelloWorld()
hello.greet()
require('.').main()
