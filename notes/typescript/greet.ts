//
class Student {
    fullName: string;
    //the use of public on constructor arguments is a shorthand to automatically create properties with that name.
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student ("Charles", "C.", "Pustejovsky");

console.log(greeter(user));

