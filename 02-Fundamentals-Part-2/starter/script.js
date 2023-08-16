`use strict`;

// use strict mode to avoid bugs that are otherwise easy to ignore
// such as using undeclared variables

// 1. Functions
// keep code dry and don't repeat yourself

// a. function declaration
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const orangeJuice = fruitProcessor(0, 5);
console.log(appleJuice, orangeJuice);

// paramter is the placeholder, argument is the actual value. They are different although they are used often interchangeably

// b. function expression: you can call such a function before it is defined (hoisting)
const calcAge = function (birthYear) {
  return 2023 - Number(birthYear);
};

// c. arrow function (ES6), perfect for one-liner functions
// arrow functions do not get a this keyword
const likeSport = (sport) => `I like ${sport}.🎽`;
const yearsUntilRetirement = (birthYear, thisYear) => {
  const age = thisYear - Number(birthYear);
  const remaining = 65 - age;
  return remaining;
};
console.log(yearsUntilRetirement(2023, 1990));

// 2. Arrays

// literal syntax
const friends = ["Alice", "Bob", "Charlie"];
// constructor syntax
const years = new Array(2000, 2001, 2002);
console.log(friends[friends.length - 1]);

// mutation is allowed because const applies only to primitive values, thus making them immuatible
friends[0] = "Amy";
// friends = ['David', 'Bob', 'Charlie']; this is not allowed and this is where const applies
const fred = ["Fred", 2023 - 1990, ["Alice", "Bob"]];
console.log(fred);

// array operations
// push will append to the end of the array and returns the new array length
friends.push["David"];
// remove the last element
const popped = friends.pop();
// unshift will append to the beginning of the array and returns the new array length
friends.unshift["Alice"];
// remove the first element
const shifted = friends.shift();
friends.indexOf("Bob");
friends.indexOf("Anonymous"); // returns -1 if the element is not in the array
// more modern way of checking if an element is in the array (strict equality is reqruied), returns a boolean
friends.includes();

// Coding Challenge #2
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? 0.15 : 0.2);
const bills = [125, 555, 44];
const tipes = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// 3. Objects
// literal syntax
// key : value, unstructed and unordered, unlike arrays
const john = {
  firstName: "John",
  lastName: "Smith",
  age: 2023 - 1990,
  friends: friends,

  // use this inside the object to reference itself to avoid repeating itself
  calcBirthYear: function () {
    if (this.birthYear === undefined) this.birthYear = 2023 - this.age;
  },
};
//
john.age; // dot notation
john["firstName"]; // expression is allowed in bracket notation
john["gender"] = "male";
// method: functions as objectes attached to an object
john.calcYeasUntilRetirement = (age) => 65 - age;
john["calcYeasUntilRetirement"](john.age);
john.calcBirthYear();
console.log(john);

// using this here will point to the global object, which is the window object in the browser
// not the object itself
john.showAge = () => console.log(this.age);

// 4. Iteration
for (let rep = 1; rep < 11; rep++) {
  console.log(`Lifting weights repetition ${rep}. 🏋️‍♀️`);
}

for (let i = 0; i < fred.length; i++) {
  if (typeof fred[i] !== "string") continue;
  console.log(fred[i], typeof fred[i]);
}

let rep = 1;
// the condition dees not necessarily have to be a counter
while (rep < 11) {
  rep++;
}

// generate a random number between 1 and 6
let dice = 0;
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`Rolled a dice ${dice}🎲`);
}
