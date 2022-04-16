const uuid = require('uuid');

function printName(name) {
    console.log(name);

    return function printNameAndAge(age) {
        // console.log('My name is ' + name + ' and my age is ' + age);
        console.log(`My name is ${name} and my age is ${age}`);
    }
}

const fn = printName('Brian');
console.log(fn);

fn(100);

// function validate(values, validateFn) {
//     const result = validateFn(values);
//     // do something with the result
// }
