"use strict";
// Polymorphism in TypeScript
// Written with comments as if I'm explaining it in an interview :)
Object.defineProperty(exports, "__esModule", { value: true });
// Dog follows the Animal interface
class Dog {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
// Cat follows the Animal interface
class Cat {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
// A function that can play with ANY animal
function playWithAnimal(animal) {
    // Notice: I don't care if it's a Cat or a Dog.
    // I just know it can "makeSound".
    animal.makeSound(); // Runtime Polymorphism
}
playWithAnimal(new Dog()); // Output: Woof! Woof!
playWithAnimal(new Cat()); // Output: Meow! Meow!
// ----------------------------
// Example 2: Polymorphism with Abstract Classes
// ----------------------------
// Abstract class = blueprint of shapes
class Shape {
}
// Circle knows how to calculate its own area
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
// Rectangle knows how to calculate its own area
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
// A generic function that works with ANY Shape
function printArea(shape) {
    // I don't care whether it's Circle or Rectangle.
    // I just call area(), and it gives the right result.
    console.log("📐 Area:", shape.area());
}
printArea(new Circle(5)); // Output: Area: 78.5...
printArea(new Rectangle(4, 6)); // Output: Area: 24
// Different payment options
class UPI {
    pay(amount) {
        console.log(`💸 Paying ₹${amount} via UPI`);
    }
}
class CreditCard {
    pay(amount) {
        console.log(`💳 Charging ₹${amount} to Credit Card`);
    }
}
class PayPal {
    pay(amount) {
        console.log(`🌍 Paying $${amount} via PayPal`);
    }
}
// Checkout function doesn’t care about HOW payment is made
function checkout(payment, amount) {
    payment.pay(amount);
}
checkout(new UPI(), 500); // 💸 Paying ₹500 via UPI
checkout(new CreditCard(), 1200); // 💳 Charging ₹1200 to Credit Card
checkout(new PayPal(), 50); // 🌍 Paying $50 via PayPal
