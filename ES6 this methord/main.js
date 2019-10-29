// function Friends(name) {
//     this.name = name
// }

// Friends.prototype.friend5 = function (friend) {
//     var self = this;

//     var arr = friend.map(function (el) {
//         // this method only access one function one scope
//         return self.name + ' is friends with ' + el;
//     })
//     console.log(arr);
// }

// var friend = ['Praveen', 'Kumar', 'Ravi'];

// new Friends('Raja').friend5(friend);


function Friends(name) {
    this.name = name
}

Friends.prototype.friend6 = function (friend) {

    var arr = friend.map(el => {
        // this method only access one function one scope
        return `${this.name} is friends with ${el}`;
    })
    console.log(arr);
}

var friend = ['Praveen', 'Kumar', 'Ravi'];

new Friends('Raja').friend6(friend);


////ES6 Destructuring

const [name, age] = ['Prvn', 26];
console.log(name)
console.log(age)


const obj = {
    firstName: 'Ravi',
    secondName: 'Kumar'
}

const {
    firstName: a,
    secondName: b
} = obj;

console.log(a);
console.log(b);