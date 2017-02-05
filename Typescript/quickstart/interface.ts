interface Person {
    firstName: string;
    lastName: string; 
}

function greeter(person: Person) {
    console.log("Hello, " + person.firstName + " " + person.lastName)
}

var user = {
    firstName: "Jane",
    lastName: "Will",
}

greeter(user)