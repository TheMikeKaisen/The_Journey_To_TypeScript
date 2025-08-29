// ===============================
// Basics of Classes in TypeScript
// ===============================

// A class is a blueprint for creating objects.
// It can contain properties (data) and methods (functions).

class Person {
  // --- Properties ---
  // by default the properties are public
  name: string; 
  age: number;  

  // --- Constructor ---
  // The constructor is a special method that is called
  // when an object of the class is created.
  constructor(name: string, age: number) {
    // 'this' refers to the current object being created.
    this.name = name;
    this.age = age;
  }

  // --- Method ---
  // A method is just a function inside the class.
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// ===============================
// Using the class
// ===============================

// Creating objects (instances) of the class
let person1 = new Person("Karthik", 21);
let person2 = new Person("Rahul", 20);

// Calling methods on the objects
person1.greet(); // Hello, my name is Karthik and I am 21 years old.
person2.greet(); // Hello, my name is Rahul and I am 20 years old.

console.log(person1.name) // i can access a property from outside the class
console.log(person2.age) 



