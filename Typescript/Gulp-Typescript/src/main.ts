// function hello(compiler: string) {
//     console.log(`Hello from ${compiler}`);
// }

// hello('Typescript');

import { sayHello } from "./greet";

function showHello(divName: string, name: string){
    const elt = document.getElementById(divName)
    elt.innerText = sayHello(name);
}

showHello("greeting", "World1");
showHello("greeting", "World2");
showHello("greeting", "World3");
showHello("greeting", "World4");