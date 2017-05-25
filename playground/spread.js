// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(1, 3));
//
// const toAdd = [9, 5];
// console.log(add(...toAdd));
//
// const groupA = ['Jen', 'Bob'];
// const groupB = ['Popeye'];
// const final = [...groupB, 3, ...groupA];
//
// console.log(final);

const person = ['Ryan', 29];
const person1 = ['Victoria', 31];

const names = ['George', 'Redmond'];
const final = ['Ryan', ...names];

function greeting(name, age) {
  console.log(`Hello ${name}, you are ${age}`);
}

greeting(...person);

function greeting2(arr) {
  arr.forEach(name => console.log(`Hi ${name}`));
}

greeting2(final);
