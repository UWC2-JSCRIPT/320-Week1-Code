const person = {
    name: 'John',
    age: 31,
    occupation: 'Author'
};

// const myName = person.name;
// const age = person.age;

// const { name: myName, age } = person;

// console.log(myName, age);

const { occupation, age = 36 } = person;
console.log(occupation, age);

// function MyComponent({ name, age }) {
//     return `<h1>My name is ${name}</h1>`;
// }

const numbers = [1, 2, 3, 4, 5];
const [, , a, b] = numbers;
console.log(a, b);
