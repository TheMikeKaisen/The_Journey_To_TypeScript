// Polymorphism in TypeScript
// Written with comments as if I'm explaining it in an interview :)

// ----------------------------
// Example 1: Polymorphism with Interfaces
// ----------------------------

// Defining a common interface for all animals
interface Animal {
  makeSound(): void; // every animal must "makeSound" but how, depends on them
}

// Dog follows the Animal interface
class Dog implements Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

// Cat follows the Animal interface
class Cat implements Animal {
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}

// A function that can play with ANY animal
function playWithAnimal(animal: Animal) {
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
abstract class Shape {
  abstract area(): number; // every shape must calculate its area
}

// Circle knows how to calculate its own area
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Rectangle knows how to calculate its own area
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

// A generic function that works with ANY Shape
function printArea(shape: Shape) {
  // I don't care whether it's Circle or Rectangle.
  // I just call area(), and it gives the right result.
  console.log("📐 Area:", shape.area());
}

printArea(new Circle(5));      // Output: Area: 78.5...
printArea(new Rectangle(4, 6)); // Output: Area: 24


// ----------------------------
// Example 3: Realistic Polymorphism Example (Payment System)
// ----------------------------

// A common interface for all payment methods
interface PaymentMethod {
  pay(amount: number): void;
}

// Different payment options
class UPI implements PaymentMethod {
  pay(amount: number): void {
    console.log(`💸 Paying ₹${amount} via UPI`);
  }
}

class CreditCard implements PaymentMethod {
  pay(amount: number): void {
    console.log(`💳 Charging ₹${amount} to Credit Card`);
  }
}

class PayPal implements PaymentMethod {
  pay(amount: number): void {
    console.log(`🌍 Paying $${amount} via PayPal`);
  }
}

// Checkout function doesn’t care about HOW payment is made
function checkout(payment: PaymentMethod, amount: number) {
  payment.pay(amount);
}

checkout(new UPI(), 500);        // 💸 Paying ₹500 via UPI
checkout(new CreditCard(), 1200); // 💳 Charging ₹1200 to Credit Card
checkout(new PayPal(), 50);       // 🌍 Paying $50 via PayPal
