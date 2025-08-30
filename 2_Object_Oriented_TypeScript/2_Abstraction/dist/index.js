"use strict";
// -------------------- Interfaces and Abstract Classes in TypeScript --------------------
//
// Interfaces:
// - Think of interfaces as contracts. 
// - They define the "shape" an object or class should follow (what properties or methods must exist).
// - They do not contain implementation, only the definition.
//
// Abstract Classes:
// - Abstract classes are like partially built blueprints.
// - They can contain both:
//    1. Abstract methods (no body → must be implemented in child class)
//    2. Concrete methods (with body → can be directly used by child class).
// - You cannot directly create objects of abstract classes.
// -----------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// A class implementing Vehicle must have brand, speed, and drive()
class Bike {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive() {
        console.log(`${this.brand} bike is driving at ${this.speed} km/h`);
    }
}
let myBike = new Bike("Yamaha", 120);
myBike.drive(); // Yamaha bike is driving at 120 km/h
// -------------------- Abstract Class Example --------------------
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    // Normal method → directly usable by subclasses
    move() {
        console.log(`${this.name} is moving...`);
    }
}
// Subclass must implement abstract methods
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} says: Woof!`);
    }
}
let dog = new Dog("Buddy");
dog.makeSound(); // Buddy says: Woof!
dog.move(); // Buddy is moving...
// -------------------- Recap --------------------
// Interface → contract: only definitions, no implementations
// Abstract class → blueprint: can have both abstract (must implement) and normal methods
// Interface is like "what must exist", Abstract class is like "partially built base"
