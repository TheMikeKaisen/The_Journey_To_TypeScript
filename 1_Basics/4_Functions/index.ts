
// 1. Normal function with type annotations
function add(a: number, b: number): number {
  return a + b;
}
console.log("Add:", add(5, 3));

// 2. Anonymous function (function expression)
const multiply = function (x: number, y: number): number {
  return x * y;
};
console.log("Multiply:", multiply(4, 2));

// 3. Arrow function
const divide = (x: number, y: number): number => x / y;
console.log("Divide:", divide(10, 2));

// 4. Optional parameters
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}
console.log(greet("Karthik"));
console.log(greet("Karthik", 22));

// 5. Default parameters
function power(base: number, exp: number = 2): number {
  return base ** exp;
}
console.log("Power:", power(3));
console.log("Power:", power(2, 3));

// 6. Rest parameters
function sumAll(...nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log("SumAll:", sumAll(1, 2, 3, 4, 5));

// 7. Function returning void
function logMessage(message: string): void {
  console.log("Log:", message);
}
logMessage("This is a log");

// 8. Function returning never (always throws)
function throwError(msg: string): never {
  throw new Error(msg);
}
// throwError("Something went wrong!"); // Uncomment to test

// 9. Function type (signature)
type Operation = (x: number, y: number) => number;
const subtract: Operation = (x, y) => x - y;
console.log("Subtract:", subtract(10, 4));

// 10. Function overloads
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
console.log("Combine Numbers:", combine(5, 10));
console.log("Combine Strings:", combine("Hello ", "World"));
