//
var Student = /** @class */ (function () {
    //the use of public on constructor arguments is a shorthand to automatically create properties with that name.
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Charles", "C.", "Pustejovsky");
console.log(greeter(user));
