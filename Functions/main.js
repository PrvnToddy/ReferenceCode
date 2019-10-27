let years = [1990, 1965, 1937, 2005, 1998];

function calculation(arr, fn) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        resArr.push(fn(arr[i]));
    }
    return resArr;
}

function calc(el) {
    return 2019 - el;
}

function fullAge(el) {
    return el >= 18;
}

function bindMethod(limit, el) {
    return el >= limit;
}

let result = calculation(years, calc);
console.log(result)
let age = calculation(result, fullAge);
console.log(age);

let binding = calculation(result, bindMethod.bind(this, 30))
console.log(binding);

///////////////////////
///////// Interview question

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log('You can design UX?' + name);
//         }
//     } else if (job === 'teacher') {
//         return function (name) {
//             console.log('What type of teacher you are ? ' + name);
//         }
//     } else {
//         return function (name) {
//             console.log('Who are you!!!' + name)
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');

// teacherQuestion('Praveen');

///////////////////////////
/////////// IIFE

(function (num) {
    let score = Math.floor(Math.random() * 6);
    console.log(score >= 5 - num);
})(5);


///////////////////////////
////////////// Closers


function retirement(retirementAge) {
    let a = ' is left for retirement!!!'
    return function (yearOfBirth) {
        let age = 2019 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

retirement(60)(1995);


function interviewQuestion(job) {
    let a = 'What type of teacher you are ??';
    let b = 'What is an UX Design ??';
    let c = 'Tell me yourself';

    return function (name) {
        if (job === 'teacher') {
            console.log(a + name)
        } else if (job === 'designer') {
            console.log(b + name);
        } else {
            console.log(c)
        }
    }
}

// interviewQuestion('teacher')('Praveen');
interviewQuestion('designer')('Praveen');

//////////////////////////
////////// call , Bind , Apply

let john = {
    name: 'John',
    age: 25,
    job: 'Designer',
    presentation: function (style, dayOfTime) {
        if (style === 'Formal') {
            console.log(`Hello Good ${dayOfTime}!!! My name is ${this.name} and my age is ${this.age}... Basically I\'m an ${this.job}`)
        } else if (style === 'Friendly') {
            console.log(`Hi Dudes I\'m ${this.job} & also my age is ${this.age}... Have a nice ${dayOfTime}`);
        }
    }
}

john.presentation('Friendly', 'Night');

let meera = {
    name: 'Meera',
    age: 24,
    job: 'Back-End Engineer'
}

john.presentation.call(meera, 'Formal', 'Morning');

//// Apply is only for array of arguments like meera,['Formal','Morning']