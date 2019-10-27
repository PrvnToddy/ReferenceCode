//Function Constructor
let Person = function (name, age, study) {
    this.name = name;
    this.age = age;
    this.study = study;
    this.calc = () => {
        console.log(`Praveen Date of birth is : ${2019 - this.age}`);
    }
}

let praveen = new Person('Praveen', 24, 'CSE');
praveen.calc();

//Prototype
let SecondPerson = function (name, age, study) {
    this.name = name;
    this.age = age;
    this.study = study;
}
SecondPerson.prototype.sum = () => {
    console.log(`John Date of birth is : ${2019 - this.age}`);

}


let john = new SecondPerson('Praveen', 24, 'CSE');
john.sum();