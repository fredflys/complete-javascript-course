// 1. Values and variables

let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');
console.log(10 + 20);
// value
"John"
20
// declaration: camelCase
// variable can be called 'name', but it's not a good practice since it's a reserved word
let firstName = "John";
console.log(firstName);
let $first_Name = "John";
// all upper cases for constant
let PI = 3.14;
// more descriptive
let myFirstJob = "Tester";
// bad example 
let job2 = "Programmer";

// 2. Types

let age = 29; // number
let myName = "Fred"; // string
let isHuman = true; // boolean
let yetToBeDefined; // undefined
let voidValue = null; // null
// symbol(ES2015) and BigInt (ES2020)
/* 
dynamic typing, value has a type, not variable. variable is just a box that holds the value that has a type
*/
age = "twenty nine";
typeof (age);
typeof 19;
typeof null; // object, bug in JS, be careful\
age = 18;

// 3. Declaration

// let is for mutable annd initially empty variable
let height = 180;
height = 170; // mutation
// consi if for immutable variable that cannot be empty
// const is always preferred over let unless mutattion is absuluely necessary because it's less prone to bugs
const thisYear = 2023;
// error: thisYear = 2024; 
// error: const nextYear; 

// var: avoid this legacy way of declaring variable
var neverUseThis = "outdated";
// do not declare a variable without keyword
noDeclarationKeyword = "bad practice";

// 4. Operators

const ageFred = thisYear - 1994 * 1 + 2 - 2;
const powerOfTwo = 2 ** 3;
const lastName = "John"
firstName + " " + lastName; // concatenation
// assigment operators
let x = 31;
x += 1;
x++;
x--;
// comparison operators
x > powerOfTwo;
// operator precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
x - 22 > powerOfTwo + 2
let y;
x = y = 30 - 10; // minus has hight precedence than assignment so x = y = 20 
(x + y) / 2;

// CODING CHALLENGE #1

const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;
const bmiMark = weightMark / heightMark ** 2;
const bmiJohn = weightJohn / heightJohn ** 2;
const markHightBMI = bmiMark > bmiJohn;

// 5. Strings and Template Literals

// use backticks for template literals and regular strings as well
const intro = `I'm ${firstName}, ${age} years old`;
`A regular string\n\
next line`;

// 6. Taking decisions with if / else
const oldEnough = age >= 19;
if (oldEnough) {
    console.log("You can start driving. 🚗");
} else {
    console.log(`No driving for now. Wait for another ${19 - age} years. 🚫`);
}

const birthYear = 1990;
let century; // must be declaure outside of if-else code block. It'll be invisiable otherwise.
if (birthYear > 1900 && birthYear < 2000) {
    century = 20;
} else {
    century = 21;
}

// CODING CHALLENGE #2
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}. 🐼`);
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}. 🐼`);
}

// 7. Type Conversion and Coercion
age = "29";
Number(age) + 1; // conversion
Number(`InvalidNumber`); // NaN
String(age);
1 + 'two'; // coercion
'20' - '10' - 3 // minus operator triggers number conversion instead of string concatenation
'20' / '10' * 2 // 4

// 8. Truthy and Falsy Values, used in if-else statements and for logical operations 
// falsy values
0, '', undefined, null, NaN;

// 9. Equality Operators: == vs ===
// === strict equality operator, no type coertion involved, thus preferred
'19' === 19 // false
'19' == 19 // true, loose equal with type coertion

const guessNum = Number(prompt(`Give me a number and let me guess.`));
if (guessNum === 1) {
    console.log(`It's one!`);
} else if (guessNum !== 2) {
    console.log(`At lease it's not two!`);
}

// 10. Logical Operators
const A = true;
const B = false;
!A, A && B, A || B; // not, and, or 

// 11. The switch Statement
const day = prompt(`What day is today?`);
switch (day) {
    case `monday`:
        console.log(1);
        break;
    case `tuesday`:
        console.log(2);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`middle of the week`);
        break;
    case `friday`:
        console.log(5);
        break;
    default:
        console.log(`weekend`);
}

// statement is an action that does not produce a value
// expression is a piece of code that produces a value
// they are expected in different places
console.log(1 + 2);


// 12. The Conditional (Ternary) Operator
console.log(`I can drink ${age >= 18 ? '🍺' : '🍼'}`);

// CODING CHALLENGE #4
const bill = 400;
const tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);