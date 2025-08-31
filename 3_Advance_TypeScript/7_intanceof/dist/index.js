"use strict";
// instanceof
// -------------------------------
// instanceof checks if an object was created
// by a particular constructor (class or function)
Object.defineProperty(exports, "__esModule", { value: true });
// Example with classes
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}
const myDog = new Dog("Bruno");
console.log(myDog instanceof Dog); // true (was created by Dog)
console.log(myDog instanceof Animal); // true (because Dog extends Animal)
console.log(myDog instanceof Object); // true (everything is an object)
console.log(myDog instanceof Array); // false (obviously not an array)
// Example with built-in objects
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log({} instanceof Object); // true
const hello = "hello";
console.log(hello instanceof String); // false (primitive string not created by `new String()`)
// To make instanceof work with strings, numbers, etc.,
// you’d have to use wrapper objects:
console.log(new String("hi") instanceof String); // true
