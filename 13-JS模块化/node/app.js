var uniq = require("uniq")

var module1 = require("./modules/module1.js")
var module2 = require("./modules/module2.js")

console.log(uniq(module1.arr1))
console.log(uniq(module2.arr2))
