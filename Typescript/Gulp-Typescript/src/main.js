// function hello(compiler: string) {
//     console.log(`Hello from ${compiler}`);
// }
"use strict";
// hello('Typescript');
var greet_1 = require("./greet");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "World1");
showHello("greeting", "World2");
showHello("greeting", "World3");
showHello("greeting", "World4");
