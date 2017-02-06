var Student = (function () {
    function Student(firstName, middleinital, lastName) {
        this.firstName = firstName;
        this.middleinital = middleinital;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleinital + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Jane', 'M.', 'User');
console.log(greeter(user));
