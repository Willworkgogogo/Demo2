function greeter(person) {
    console.log("Hello, " + person.firstName + " " + person.lastName);
}
var user = {
    firstName: "Jane",
    lastName: "Will"
};
greeter(user);
