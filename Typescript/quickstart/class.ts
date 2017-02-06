class Student {
    fullName: string;
    constructor(public firstName, public middleinital, public lastName){
        this.fullName = firstName + " " + middleinital + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student('Jane', 'M.', 'User');

console.log(greeter(user))
