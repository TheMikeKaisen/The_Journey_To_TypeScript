"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Normal function with type annotations
function add(a, b) {
    return a + b;
}
console.log("Add:", add(5, 3));
// 2. Anonymous function (function expression)
const multiply = function (x, y) {
    return x * y;
};
console.log("Multiply:", multiply(4, 2));
// 3. Arrow function
const divide = (x, y) => x / y;
console.log("Divide:", divide(10, 2));
// 4. Optional parameters
function greet(name, age) {
    return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}
console.log(greet("Karthik"));
console.log(greet("Karthik", 22));
// 5. Default parameters
function power(base, exp = 2) {
    return base ** exp;
}
console.log("Power:", power(3));
console.log("Power:", power(2, 3));
// 6. Rest parameters
function sumAll(...nums) {
    return nums.reduce((acc, val) => acc + val, 0);
}
console.log("SumAll:", sumAll(1, 2, 3, 4, 5));
// 7. Function returning void
function logMessage(message) {
    console.log("Log:", message);
}
logMessage("This is a log");
// 8. Function returning never (always throws)
function throwError(msg) {
    throw new Error(msg);
}
const subtract = (x, y) => x - y;
console.log("Subtract:", subtract(10, 4));
function combine(a, b) {
    return a + b;
}
console.log("Combine Numbers:", combine(5, 10));
console.log("Combine Strings:", combine("Hello ", "World"));
