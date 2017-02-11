class Animal1 {
    private name: string;
    constructor (theName: string) { this.name = theName}
}

class Richo extends Animal1 {
    constructor () { super("Richo") }
}

class Employee1 {
    name: string;
    constructor (theName: string) { this.name = theName};
}

let animal = new Animal1("Gost");
let horse = new Richo();
let Employee = new Employee1("Bob");
