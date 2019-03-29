function Person(firstname = 'John', lastname = 'Doe') {
    // console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    // console.log('This function is invoked.')
}

Person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
}

let johndoe = new Person();
console.log(johndoe);
console.log(johndoe.getFullName());

let cpustejovsky = new Person('Charles', 'Pustejovsky');
console.log(cpustejovsky); //Person { firstname: 'Charles', lastname: 'Pustejovsky' }
console.log(cpustejovsky.getFullName()); // Charles Pustejovsky