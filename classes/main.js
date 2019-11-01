//ES5
/*
function Person(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype.calculate = function () {
    var age = new Date().getFullYear();

    console.log(age - this.yearOfBirth);
}
*/

// let person = new Person('Praveen', 1995);

//ES6

class Person {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    calculate() {
        let age = new Date().getFullYear();
        console.log(age)
        console.log(age - this.yearOfBirth);
    }
}

class Details extends Person {
    constructor(name, yearOfBirth, designation) {
        super(name, yearOfBirth);
        this.designation = designation;
    }
}

// let person = new Person('Praveen', 1995);
let details = new Details('Praveen', 1995, 'Web Developer');