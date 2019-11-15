const suffix = (x) => {
    const concat = (y) => {
        return y + x;
    }
    return concat;
}

let add = suffix('ness');
console.log(add);
let h = add('Happi')
console.log(h);


// const product = (x) => {
//     return (y) => {
//         return x * y;
//     }
// }

// let mul = product(5);
// console.log(mul(4));


const product = x => y => x * y;

let mul = product(5);
console.log(mul(4));